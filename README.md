This project is a simple CORS proxy server that uses the cors-anywhere package to proxy requests to a target server.  It also caches the results for 7 days.

This is needed because AMD hasn't implemented CORS on their certificate retrieval endpoints.  We use these certificates to validate the attestations from the Lit Nodes.  Ideally, the user would talk directly to AMD, and not have to use this server, but without CORS support on AMDs side, this is impossible from a web browser.

AMD also has rate limiting on their endpoints.  So we added a caching layer to this CORS proxy to prevent us from hitting that rate limit when possible.