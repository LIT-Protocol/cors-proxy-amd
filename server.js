const corsAnywhere = require("cors-anywhere");

const express = require("express");
const expressHttpProxy = require("express-http-proxy");
const apicache = require("apicache");
const { cachedCerts } = require("./cachedCerts");
const cors = require("cors");
const redis = require("redis");

const go = async () => {
  const redisClient = redis.createClient({
    url: process.env.REDISCLOUD_URL || "redis://localhost:6379",
  });
  await redisClient.connect();

  const CORS_PROXY_PORT = 5001;
  // Create CORS Anywhere server
  corsAnywhere
    .createServer({})
    .listen(CORS_PROXY_PORT, () =>
      console.log(
        `Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`
      )
    );

  // Create express Cache server
  let app = express();

  app.use(cors());

  app.get("/*", cacheMiddleware());
  app.options("/*", cacheMiddleware());

  app.get("/*", (req, res, next) => {
    // for debugging
    // console.log("Request url:", req.url);
    // console.log("Cache index:", apicache.getIndex());

    // strip leading slash
    let amdUrl = req.url.substring(1);
    if (!amdUrl.startsWith("https://kdsintf.amd.com")) {
      res.send("Invalid certificate URL");
      return;
    }
    next();

    // to manually cache hardcoded certs, uncomment the following:
    // if (cachedCerts[amdUrl]) {
    //   console.log("Serving from hardcoded cache");
    //   res.send(Buffer.from(cachedCerts[amdUrl], "base64"));
    // } else {
    //   next();
    // }
  });

  // Proxy to CORS server
  app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`));

  const APP_PORT = process.env.PORT || 8080;
  app.listen(APP_PORT, () => {
    console.log(`External CORS cache server started at port ${APP_PORT}`);
  });

  /**
   * Construct the caching middleware
   */
  function cacheMiddleware() {
    const cacheOptions = {
      statusCodes: { include: [200] },
      defaultDuration: 2147483647, // max signed int, but we also disabled expiration in the Lit fork of apicache
      appendKey: (req, res) => req.method,
      redisClient: redisClient,
      debug: false,
    };
    let cacheMiddleware = apicache.options(cacheOptions).middleware();
    return cacheMiddleware;
  }
};

go();
