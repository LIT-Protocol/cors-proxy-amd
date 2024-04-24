const cachedCerts = {
  "https://kdsintf.amd.com/vcek/v1/Milan/cbe2c639f2d049124fecf83a4dfec5ce9018da5800faa502d142823c80c617d43baa66b51089abe418708185fcc018892a5b773aa7706bab2ed59a8606662513?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOVoXDTMxMDQwMjE1NDMzOVowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE9OREUnPuh/+zoY3ikO8FkZWoKvQdoib76z7Gb03b/NrP1Y+yCUT+rrE6qwt23lJqiq432Y72CW7ZqKivSm8TJqOfCxlhJgjv1gDmvAhCRp5qyUMLakvSSKzAaZ599TEzo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAy+LGOfLQSRJP7Pg6Tf7FzpAY2lgA+qUC0UKCPIDGF9Q7qma1EImr5BhwgYX8wBiJKlt3Oqdwa6su1ZqGBmYlEzBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAf+Wtbca2e9N09PBRk3MOEqcXnI9K5H/11SaL6nFNd1Yizb+pyPE5+Aks+B4rt1Z53Q1xqM4qkBbJwdD09nj3OLyVDGlEkZYzdFplkS2csJoBANHEPCEaYRTrdZlxX8xVdem9BKoA6kvvcfjXxErpbtNMP5/kum5YjbZkG7pyh30pu+eo1a6Rs5n3j6aOx9c+BQsUzhTr9XBrClM7JP+bZBrx6itDI33nwVECp795bztF4+O1i9PMvKCYKD7sQSZ9rXbxsqMqyZULE+5APxOMyNT0v8BasyPMQYfyIHBtTRFMe3QACJL0iEKdft6A/JcWNIjhfc5dSw6svh6RwRriIKCmwZMDJnLCzWC6gFqVa4g+w9Lrxu2zlAIT9xiXm7MSoUG3IpqKShtJLzBI8EM24B40nqQAxlhYT99wu2IG46LY0rcxfj3qu6/NHbwx/O+7yBLInL8tnnsG4gI1nTY0bbG5xd9widWMePR77mfMwlM0+heBUKWyHMErfHaI/g2Wjgx+yTNI2IleL9zzyyIbZYxIdBnGEKiOF2AcWvWhcS5L13lKtL09MnZDR+RswnO4fXLY6Z83SXoPcj89vpsyZ/NQwKA/wU7uW5p8QpvcfLG4sYjL7HB3z8w3RbAL03U6ZxQEP7728B/7Lm6EJhOYa1R7vvDjLrqapmBQCisTBI8=",
  "https://kdsintf.amd.com/vcek/v1/Milan/34359a1419ca5ba2fcb907a4bd84af6aa6e4be96651a4d29ace23cc483552827cafa873027c3d46f8a8e9d02d9abd21fbd396a932c6c744b3db8d572a6e6268e?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOFoXDTMxMDQwMjE1NDMzOFowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEl8ZGuKTqT7LUpc+ccY/C7jexSc5GeeYXM11favgxewvKGRmGosb9XCwZvDPLG+qcTJ/b3++7mYdilzCcX153CL9Wv6PEU1oSqkCP4sw/+mHqlQKf30c9783vtyujZxHdo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARANDWaFBnKW6L8uQekvYSvaqbkvpZlGk0prOI8xINVKCfK+ocwJ8PUb4qOnQLZq9IfvTlqkyxsdEs9uNVypuYmjjBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAJWL7JpcMjq1ttd2uihl6ogATkBuBehu4qxEOSBvxETpofjvINmRIpjy6UkVVPH8ky6zBSJ/IHCQT2u2VsW76lme0TtnK0JY+4EMAO4nxp2zGOeeejhqBouqLyckCFapiVJ3PG7JtXdawcW6BIcbnr27hI1tnlG2GGwk+fNaGCIYms8YNs1W1WrR5ySw2LUlrpgv3v6Bc1Yjt51s9EzdNBlEtjjEaWHdcTa5MUU5mCeAjavghODyYWE3uzAQ4uddM9Jv0c67CP4P9hdiUlk2diIIK5rH83I6TV7SLGKlSWtDqcAEwNIP8ByFy3kSgMlCTPYmhjQHupRbOe1JjzL+Q2NH/MPbhCL1YYgm47e8d//VMWAPAlczPJAb4ACgmjeEWtX+V4YXoP9KRyaYn+YJzBsMmmYPyamgWsApGqqdLfeyzzyIi8FwGxdbCQQZBYXgs0NC2ou812S0inm4ZQVXf5QcRjTPyCjXOYwkAc7bzurVDjluH9qF7TNPuscrURYXPL46LS1qGhMJFamAJyCyLBHV7O/LBn/7SKqEEs1Jk+39CNridXqMsig/ILF7SvPpNd6zu4QqqefLBLoXiBtAXeVSlJ8crrqjX7CEEi6WWHh02k5F1jwvhYu2EQGk9qeck2BSzhI/YSSBergvOp5nX1E3d5gIHZuC6YboiYYMDU7s=",
  "https://kdsintf.amd.com/vcek/v1/Milan/94c7e8acbfe862c399c7f58fe9ae2d0e0e2bfcd266711c066b3de44dbb6989d2408dc6bfd278451f9d125f4cad70ed2f4725fed6d0c47dfe50f4165574a45847?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOFoXDTMxMDQwMjE1NDMzOFowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEg/UZySTxFrakmPxxdHSRIr7KSwDmEC1WCHmxRyVXEgutpeglxLSOhVSdgCcYqwanhnhzHhXbIwopcpgOoQ/LTsDDO0BkFYREhI+yzgjY2VnmKGsGNARAxjifqPMyUu+mo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAlMforL/oYsOZx/WP6a4tDg4r/NJmcRwGaz3kTbtpidJAjca/0nhFH50SX0ytcO0vRyX+1tDEff5Q9BZVdKRYRzBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAAxiK6VOBffiArb2NxDpexct0T6WVRXda66RIZ4GeFOo8u1UXz3YdmbBxi/6z82BPm5McHEP7DmZfeyKOMoEYQqpaDimMH0WLX75yNkPOqpMgcWO28WJTGlThRIUN/moixSNlpEM7gto8VLZc9iGrLAPzATTtmxsErlg2wZe0Uc8L8hUfUpCmhHDlMwFDa4cUd0+fyRsdr6B2ZM7lj2EAliqu4p51hVaw3gShcRB3J3hR/ImkoyTZBQMg3vSOpqBFS414lO1AEnnTTXTZbjvys87EuDevZgK2eD+Wa6s2lZVbSUN8z5GNTAGUPGU577o7E6VCjiS2A5oQN0CD56j8YI96wdRynI4hb0ZbH0tsZjFyISx5ZvXjmieRorioCj4NosHUr658+agd/iyAzDnIWwqS9byL9HLH5flXm7WT9XC0b1uPLGTv+YHU+SL0GFq/0GAY6rbdIX2S8T8Z3KEA01vN2aZQTYscwxlWu/1azkSJX2cNPDpYjE3fVVowQ3kFYOm9T4dVR9PoW5d2aL2yYFThS3Ha195a8IwBo67ScBE1YW671h/OJHLAHDuBuk6iC61lkjIpatqPI+ivvpIuIgp6ADHvd6d2C/FQc6Pj22NysEeJSVnxhC4G0O2/l0HT5ee8SfMvcQ0FlXT+ulLJek3ieVOozx9BfF2jUuWXvAI=",
  "https://kdsintf.amd.com/vcek/v1/Milan/026b230d56e2a68da3c2819b899719aebe1d683007a4dd0e9d98204335d2cc5dab66683b3aca0d28e3f1632dc7a5d004506912885881685b1eb2d3482bd348bb?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDMyODIzMzAxNloXDTMxMDMyODIzMzAxNlowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEEs68s51FNRJq2Hx9cfXyefnKWflqw1ClINoAsSUGw7CNAZZCV2CIySy6ESkOlvaFbzO/Hq5ZycawqlB/WLReAu9jRydmrXKhenT7iVGvLvp1FmtgtIZsPRz6SUuFtrmho4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAAmsjDVbipo2jwoGbiZcZrr4daDAHpN0OnZggQzXSzF2rZmg7OsoNKOPxYy3HpdAEUGkSiFiBaFsestNIK9NIuzBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAUgu7cZYRIUHwj/66Z+tbO5Pd8dE9aeHw1eTUXtRqF0Z5rWsLeMhUhBsa6TAaLN7vB3g7PnzwfMkF9m5nkWf7L0zaBciJKkJjd3GbZAfBV/THTLQVOy6AaL4mTlw2HzcX0jIDIv7RhSGVPIGjqdAT8XGBhDLSUIbH3ejiMhsVo4BBe+iiIgesnWVubjQAP/VwGoR2oKwF7Wo4R7nt+vQ0o01RJKPMyNdpBzK93rppNZUR3zZPWRraf+v/m2Ede5wkMn1bH3D9B1QDeNPK6X7EUb/2BrOYaTYAjKjbGfIMcyOOQK6bF0rUUKxFsZmOwEj+gVmYnJKyOkkMRvgq/wCQWfmE1+TCn4Q/QnV1ZhGGf/EVrYjqZNZb1SNELeyEk0VJBJo/qN2o2Rz98c3uo8PKj56moQHWpByZ/843KigbR8VOmY3h2EJn/I4pRntfkJBvQ6wO60lWW9WZXluwIXnUvmNIif61DgFo+fQaZPXpCSaTTsgVkafhZY0pJ14BdqR06KDqzMm8x7D1Cqj+xIAKDRCGSP2rOj3ODXE+Qgo5Ltruo8N8OLcgH2MElHWQe1UhcXYtgVa6IySI7A/qPZkaz5YHV+RIfF25svlrFkvnCMfzypOfQa+NVwSJ7iO5SK5/0Mt1kO/Uts9rq0n+6WsQXGVw2+9dI7ThnoUr18RvGTw=",
  "https://kdsintf.amd.com/vcek/v1/Milan/22b9f94251c16dfa3a7ab3221d3a2328cf677334601c6314884f57a1b8cb39cf6adf3f3789b2388609da9ca41964b1268fe77ae090ae218172fffb02e9335358?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOVoXDTMxMDQwMjE1NDMzOVowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEdhfi1IQ9xBAEIr/wnBU+KsM7rXUgiDbAFK27P3HMZ4mk+TpvB5cQ75pZIX1umvHr5KoA8hrovyWiZRmk6ZroAwWofRtT6GB7MGnZ7mYomI73nBYoJ/8tofmGUxWg2OfDo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAIrn5QlHBbfo6erMiHTojKM9nczRgHGMUiE9XobjLOc9q3z83ibI4hgnanKQZZLEmj+d64JCuIYFy//sC6TNTWDBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAaLG5fx2HdaEgmnCDJJNIZDhA9LCUuOPJyNSZHV4ErVebgE3FNpBzvnnR3p6MxwL7rJAaYbjGba9hw4BM/QBt6thMEOg7EXRgYgf6iPLEMCP5Vht0as7IzJFoSEj45Gq/J6gWgcZiQoh8nipkAyz51bbwkT+8FNfne5duJQPj3tNyBuOQrmGE64xXVxOlovLGMzE+FvEJYGqj9IEZOjnQ2E+dGYKkbiW4fdTh16jAduRI41x3MuZxGzGSJeAigf27UURO5r2GM9bRalsTL6zxUvK+1y4USEZ76rxYkAE6VjZXN+hHwi4e6sq2T9AXfdWzqf8adSSRowUhtCGMPuF0lCk+/jwer22v5pc+8fAsE8BSepYTNY6Bqo6G+KvH1jMAr67EieCHeNk0PT6dTQRNGSMvBZLkidV8/qXAhNnFfAug2pkaZeFYmchpmBLAxqfAm+Yf7NEFwZgkgEV6qWEzzJBrkAGgnAmMW5m4eaOR5iWkZkm0Gvm8x2aIuJ4ifrDwhQJHJDOhLt+R1DT80rWO07OAb3ictsC6GPZXc5WZ02g+9k9963yrUEMlDxN/nFNPNQLjV0VeRTHza8ww9Bd2RsqAatz37+UpENs9l6SOv8tGWNh7LyrgebKC9DLHHyB8c72K15tp1n9kxJ84mOC3rW3COSPmtKjAdDgk/2eULZE=",
  "https://kdsintf.amd.com/vcek/v1/Milan/f2887532f7cb8a536dd8a959c3128a4801923759adef0cd82d35438df1159cc35fb00f66f8558bc018758c32653a5f6baa33f96538facc06aea817adce474597?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOFoXDTMxMDQwMjE1NDMzOFowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAELaQXMk8xMKLaq3N7c/44b43LkDkC9OYfMzZ/TWYmZ077XybIfvd6HYqZ67pNlKe78ZdEZCcTfXRg1gzITljsuaC5/ILxF6rsvId2FjSDvnvV69MeRcGgruE/IfroETH6o4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARA8oh1MvfLilNt2KlZwxKKSAGSN1mt7wzYLTVDjfEVnMNfsA9m+FWLwBh1jDJlOl9rqjP5ZTj6zAauqBetzkdFlzBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAHLLTjdiGG+uAr3ufIKrCPcQ4FFmEWKSoOsZCTv53h+icWEjO+BLNtLMG/KmyAZFfCBTW+eQCjeF8Xws6A62JsXUkB6RpMxnfN9yudjMtt2JfPIGSGWFeoNbNRub8Cusji+kEF77JGUaUWCr1CyH7O/tTyLKbifOyzZpYZzebIaroW8DdkKeqE8yBs9JgflO1xzynT5sSVtnssY8j+LFSF595yc0R8j5i7KpRcvlSXD8qo5g10Qa4JE1DQ3xSlPRGWLal7w9+ee/ONVQIsl1ivs5czrzYWeDFKQsRNBKyagj0PL5eta6HGUrQQ8jNn7e3sWyUg4utXP1fQg6O9VV6Cz05UqULgZFdBxHfK4PK+Ir4NScYxGDVZnwWdMh4zVLsIlylustqY/xZYErvHl21XfJaYjb0ZgNJAiXlF/FMF91ckJ6qecLyH1qHkOZxiOTkPOTHyYMhIs94yXC76CFpIxCpk7MX/5YeEwL+GlzMy3SDxsFxFllLhy157HElPZ8FNzrGsS52YuWLWVzUypY55VNGasVaMEa9g00hNORkaSuPDSScPyl4fDelVb2/chX8FMs88J5TpFjHLffq/kMbUXhgY3zk1dWJ+fdNwsMCXPg8LCURaU+nFUnn8jr1PJUShWo5LKqh4bIK5cdnz6+7ioFAcC44KofDgDVcgQ/j3n4=",
  "https://kdsintf.amd.com/vcek/v1/Milan/62b46fc241dc5abcbad38f7cef6ce3817de29adf103e17b0e7b3ca5a85849da09ad544824415b19170dffc7b31c2b4dc3b48ad97ea7721eb5b2480d4b8050c7b?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=115":
    "MIIFTDCCAvugAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwNTA4MzUwM1oXDTMxMDQwNTA4MzUwM1owejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEhZhNi6mWeGTmjYylAGbKzcVkJVU48nDlI3l/E2x+9477AjGKJEpUEGZdSaMt4tzv4u2lPftOn4SM56KMSCrg7r6FrhfYVqXDxh27VwZ94tEoVvB6Fp0nEujthQb71nV+o4IBFjCCARIwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjARBgorBgEEAZx4AQMIBAMCAXMwTQYJKwYBBAGceAEEBEBitG/CQdxavLrTj3zvbOOBfeKa3xA+F7Dns8pahYSdoJrVRIJEFbGRcN/8ezHCtNw7SK2X6nch61skgNS4BQx7MEYGCSqGSIb3DQEBCjA5oA8wDQYJYIZIAWUDBAICBQChHDAaBgkqhkiG9w0BAQgwDQYJYIZIAWUDBAICBQCiAwIBMKMDAgEBA4ICAQAg1FUJBKDmhkpB81zY8C0yOI4TxVk59rr5v7F3MOIqPqmLVB9VM1MHRRKiqltolxbyI67xUXk9A6QQzCcGCesaHreAWGLgb0n7SJH5y/BvR3CBS1ni8lt8NC6e97RDvEoKr4E4g483LnGsU6qjbK5vOlAe6AeegXuYtZTikFRW/Eaxc8YBSo1fv0ISlsE8jEVDNGFreDaWY35ki91GP6A8DnPkpG4ZP4J8A+mkdfZtUENpA7lvHNZvgOBGSrMG4ro/e8qRqMMEjxpWuQ8Z+EwM9/2wEB2ToRQe05tVO8mDr9c6/WTa45qSLBVVMbSOKGIfswl5CylX/Kaqsv6VzwNnsPXc4Jbfrv8SpOBJZXg4MUr8p5PHl36XTZKFcMugqvG6+IEK2Xfo62Jy75xJ/bIA8oAAdT3lshskudcEi1GnX+BnVCwAO2YEJcQQefUA3NdVZWcy2oDVhl5LOzxNEOND4RuPPCq4De5Rsioj2xM76FtLpZo2mPX8zQSUG10UYI5Y/eMxk2EK3r9xVd4znPBcFqJfUOhWefgfOZ+4PPSjvwo8xTziXrNyJjYrEXc5RzW89d0MFzOv8mpgvgm/dp3UwstecQ43fw1qIwqKZuvEEsa1DE+O+6U65yy6omB9RBsSg9ueMn5LUsf8Czcq2KEp9DGinlfDrIgzBNjq4HHL8g==",
  "https://kdsintf.amd.com/vcek/v1/Milan/639a4cf46e5610d6bdf9925c218fa836f593c2df42259d66a5bd8f598262b193b213138dc514c267f7052f10d6cd825b2545042f2c22d7bc4d04e64c89ba45a9?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDMyODIzMzAxNloXDTMxMDMyODIzMzAxNlowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEFWfsLiFXyAZFJDjVGBUFnDr5nVX/o5NQye7JvfyaIDdIWHZqJaOBq30WsR23uGKL5OlE4sl8dXR9H1c+NjY3B0IOWbJp+BnubDVVoTVbrZ/xJvD3EQF/FqSVPg9t9gTko4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAY5pM9G5WENa9+ZJcIY+oNvWTwt9CJZ1mpb2PWYJisZOyExONxRTCZ/cFLxDWzYJbJUUELywi17xNBOZMibpFqTBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAODpcHTartd0iaZWmEC3/EbHlc4ihSmqGnx2tCyyxEC4gLcj6Lwcm3g93iNYL87DgqBcVxNurPGlrerhRzD6k+6JsZ5HoUs5F1w/78xyhK+/dbXaoG3EvJnJu5dLoXMIPHNqZSDvnUaekmES/nPbu7qm5Sb3UgdZKe+I5bPn/Hn/0lMMPIsscj53Mtx5ISjrDtoTW7XOwoaKW/IwaHT+QhrdgiBjuTi4O+mr47WnhDt9gdJb6RLwjZRBLessyZrGPEPRkrealFcRovDMG5h7M6LTADaetqQH6hywnuo09+Nimszr4Mj+aWrTUjXeGo2AUq+o8yyk+vl3LDTyICwQFj4glF/8WlfCKVJiyEBIPP60szQsLLXLUOGIn7YEwW5a+yvSOcBXwQJOENj9UTB5U7wYRid6RLEcTJSpV5Bzyf6/0nIox/FK9sqLolLryfnI9wy1IdPTLHi100vhfk4g7WCELq44sfyCf+397JPLUtVMIKf+oxrFc8TSG9thBHhRB2K+xLCQVnkrYw3fccwJsgqzQijOISWp286a+SbbIqZFCyY/2+Srp/PK9xnSRz7RTFjYW30M4EkRDdZZVp5JftvVzsQXC+j+KJz5rHRxK4JTXTNeIhHLqYc1L/Qw9lVO5bB9q10pRZW3IbX5BCkmUiB/ABQlI/6uWxoL1O5lGNcc=",
  "https://kdsintf.amd.com/vcek/v1/Milan/a5220f1f20c84a710c45cafbf6b2785d7b929603f3997263c55f2b517b7790fd493a0fd2525301d961c92e8b5d7ace663b72642cc01d9e0304291119f5e491d0?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOFoXDTMxMDQwMjE1NDMzOFowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEf78dEQtZYBLESIcsv3Dlb7BznQoJw3xdPuf5RWuyfgtgC7+y7FKub+wLfoV6aM9v/KzcssKlFfpomAVgxLneHfOKkvTOb2WauMFVmOIkAeqWMt7pGMEasIOyHsQ6zgn1o4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARApSIPHyDISnEMRcr79rJ4XXuSlgPzmXJjxV8rUXt3kP1JOg/SUlMB2WHJLotdes5mO3JkLMAdngMEKREZ9eSR0DBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAOU6ftqu168ea+UJyC/gzFNIRr4U8GPtlVbqanc4DRhHsrUp2J3kAvaSJW+hLXUIyC3OxWw1WttdCVCF2xJM6kxVtQl0oUi00CyAu1avTtFaG4T3IzLM4UlPxWRgUY8CXnDz6cpXu5okJKpIc/MJdQQJw2+q2pmupp6vSy824WWv7IhTaY566hRla0VFIgaFPbv/worILmsAXWa1+VaGOK2b16kicHLb6DzliywmJradWRBhBX1hiqvsp5V6OfW6GnZTWAends4tqK2//M0TPtqWKPm/nthpkV0Nc2LZcua1cFOIIwTV71HmEVwlOK3koRp1Sic5bFkU64jK/PW7/J0bng3dYQ4vytmouvSGed9m3cWiQ2k/hM+7RbW17ezW5XZVtkcaTWAnvCyz7nGEJB/7rioaekutsmG7ndreL5iE5Fh+3xruzAW3ZsuOi30V4R7ERU/+IeLLwhDKa4Vp9AIhoLg3cObAwPgvwqnRjoSXT8qWP3UEZxo9aqEWOFKsBrON2rRr/n05IonBjWNWQ559yItQPjtQU7vN4Llxrbh5SmDjoIFb6XTXUPabbLvzYepwlpMDb9gtd29/S9dLuyhsEGC+Dk32yG+PjROk01wLRlWZg9oZYBflJm7lKjUt15ZSghGf+hYPvBPo6xTlJmkq0uS4VHskhXnyS0s1JfaU=",
  "https://kdsintf.amd.com/vcek/v1/Milan/ed4ec5d34cd0c1999bdf9366e616dac4b71c3e06e73bf91d562ca4aa86b8eafe0c968db77c250b0f7f26e28c2f6edebc086cc6e9fa43c0540168a20786e0fb56?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=169":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDMyODIzMzAxNloXDTMxMDMyODIzMzAxNlowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE3DDCVLXiYDyvNM+2dYRymu0BzjDGgX+izdnGlK0oxsT+gVq1Q9jfkYzh0KnZOjRLejs2+OwUfhuMzor75DYdp6k0n9oQTu9hCuYJiaKZ7kSHaG8K9IgLROGC8ocQjLkuo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjASBgorBgEEAZx4AQMIBAQCAgCpME0GCSsGAQQBnHgBBARA7U7F00zQwZmb35Nm5hbaxLccPgbnO/kdViykqoa46v4Mlo23fCULD38m4owvbt68CGzG6fpDwFQBaKIHhuD7VjBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAa8mCFDtIjmq3pbRXMYMFPi5/SET+rfQtoaSJS6a0GeAEuQnrwkd7eHEIMvxC1eKr9cMmvBPoanwWx3M0AnxFOlUcCub/qsF89S2agFpcrUQCikI0OpI1bPrYUBaAQ6fAnVpuVrOBe7fqVi5nUEQ02c9PXJ230uyWtMqSpHizydKU2mLWp9F6w2N4tEnGDW015olPXmF8FApqHtUwtMMq/H3shHERi8Mxn75p5Y9KQVa/Sy9RWijmTDoGwqERCtAKduIFrB9R34gUQH4E3QBwSTSw2f0nYjDwJQIn37epHQRblOMKmB83Z4X8iNmDZYwpvR+rpfBw4guk5yRPqFFsBIWJB6KURWd02vB7mJYo6Y0BFAFaJINWy+ielQj8jaLCNArUSrpUh5AEsLjo964OMs0rD6PmHSoiJCg+9PG1IZzPeCvbEvyD7mLtVWzu6AxUkZdoRUOfBkSXtigi1fKUZbrzfeUAjHUotkFSbeNO8ES3JaIc17rAbIn5nQ9t6hsAX32Oz2FPFBM+I8kenpNMAcBNraaWePAc3yg7Qt8Pu7j/xZxrF4LpVUnQSLjucvRORiyIyFb4qSUnXE2IGEqLK16iwUa4n8tbzPpv/eauy+TJlfNIxC+pgsNYBy9XxjnFxR4q5u4FaBQHSpKhIsT2iB9BXwl8/DTPTanXUuVNyeE=",
  "https://kdsintf.amd.com/vcek/v1/Milan/cc4c030e03a9f21f0b7a6e08716ac47322a5eaaf15459c8eeec227caf7a43854ad74eda9c5f592283a033e7076b6bd2a8d40dbcfb33bb68e8c8caee9e8536c8f?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=169":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDMyODIzMzAxNloXDTMxMDMyODIzMzAxNlowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEgwr7XGB+l2C0dne1dHnePBPUISS3r7hqnloSg4bb02fau4pTfSMeCzz2GmRStlt2BqT9lG7OO2SK3RPnZKEAvYjlfdccWfldz91BSYExt/XXF5xiAS3eQv3Rq9NPXmc6o4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjASBgorBgEEAZx4AQMIBAQCAgCpME0GCSsGAQQBnHgBBARAzEwDDgOp8h8Lem4IcWrEcyKl6q8VRZyO7sInyvekOFStdO2pxfWSKDoDPnB2tr0qjUDbz7M7to6MjK7p6FNsjzBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAmtgkxBMN3sJW2c4zEu362wGED3rP/I/wTODHwnzgHbNZUHfbiqh02M+e3z+s2ZZKsQIDaAKTKIVg7Onm7S4Lo1UQ3hv9FV1X57rZMddm1Oll8QzYC1SmSUKcm1NILix86/AwTo5B7hHUBi9dW5kvqq2zYzYIbsymF4USK+mpk85KgRXGq/2OJq5HD+ZqJGCYsxcUlPkQa6M46EbEfK0yJ5TMvvEd+m/2tvoagbRDKGnaFRqQBCM7mFsGis/LQuIwj2WK1mniXA5C0+2suIIxoXICgpwp/o1ogwSWZ68E9diHN4FtrmR9uCF4UTaX5Uy0zDgsKgHjpVXWUxiTJg1yc4haOlo9r17oOehNvbGxsyzwx0hGSxkk19aa37M5zO4ZtgzMkB1BfA0zXPLpCllwV6W2/TbWphbKbOhLehk+FMP7ZB7vKS6x69NtWDW7bJzZHWcgaIgDjzrR2iiHt8GZKFeQ2C80IVW0cm5Vuu5At7g8s4Yqiru79WKkx/kFZzXXMqsdLQm40+mCF/ts3S8Tprl//XFE1t933A8huL/b9c/v649q+4EyzkKNXbN1LOBp3+8q8EQA7ojOX6BzIHSQ3bkhSDTNklXR/vpurdU0Iqmeeh3xs+SvjAS17DlroTG60J13mMLB5na/KadN6G23mKhUewq+BMFVm0TTdBr1CyA=",
  "https://kdsintf.amd.com/vcek/v1/Milan/b100d355b0c4ae8e4e260fde41f1767a7af736468651d123e3704484bd4b2cfe62022d778153d985bc140666f936f276f34b295eb46699da1153e4763d94cc8d?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOFoXDTMxMDQwMjE1NDMzOFowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEVwryeYoFfUXRumLbQxW0WouadA7o/uCt4oaR2uW2Ys5bdRLOUBShwEHfucxcwUZMtvcBkJ6N5Wu99ttVhgpGeQ6cSdLLKYNuh1KJhAyXg6+IUzlxwXBvUFHQ4d3UGsqIo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAsQDTVbDEro5OJg/eQfF2enr3NkaGUdEj43BEhL1LLP5iAi13gVPZhbwUBmb5NvJ280spXrRmmdoRU+R2PZTMjTBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAQdrj1YisCCFgciRyolQJ0FsXpWIolu2N/ZhurdhCX9JKM6j5godhMznW1G2OqtLzbhKFS97EptimMK/ofvpwMQzEYJH5iEIZ3qWPdry0HVHGS4pRGUeIQAFaekf3uN7Fojgl8R6t/4XQQv3GkzDgbnoZ0JqZAogYkfQDlD3WUW3PAcVeIsg/cHOI4ymgqLuP2pPuqfkcipJwiYsqupUjY8eNfF+r4nEBt8WmVK/PltglTbqcROv2YUe8gQJwVEWLVxpNEvXmR1N26DiuOCqEao8L48+nLK22EK8gs1EpefpPSR7xnbgADLQgePKi30E+UAfc2IxS1mtkMyB29boXa75stqLeI+dE6Mor8baDyZW/M8LmyDiU9BEVMkXeCZmJF5jwbZccKVZk8tgTyoMVRgZmnxPG8Qfco7xa/NG6SSnDpX+mHovlpXDyC25bi+E4GYnuN29ab9bVeGNJhH161zDT8rPC/ZzcWvpJZ4lSDM3Bs+gTzP6yim1r/iWQql+W+OYIa6TsL5yAq9Vo5vikPoTxnHMfh1y/QX4rlQODitrkAhhGjdf4ds1lhaysUD1cS8E3iBIoQgL5Q5f3yRaX1nRofWNinczj54guzmTIazzLS/EZSZf270Ic0fuO/MwjpwUexmasK6lnNOn8aZgXamxauxp/2ld+88mDeKcMwxQ=",
  "https://kdsintf.amd.com/vcek/v1/Milan/4763288183fd2582e49a6627a2cca8105ce46c61d0c1043d71e93db71f66f98ea2a7410961fd6a8b1a203bd314d7cb44ea1803c96a0dfcd3b66ed49d5b510108?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=169":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDMyODIzMzAxNloXDTMxMDMyODIzMzAxNlowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAESjtvPIHGnBuCjvIWlYnzlo2D2ZcmwpgMco6IpZsNj6cqfrPII8xXR6YJriv3taV3LrPdH06x+i7W4ltnzX9AkqYU8VUV5xlPKezS/OD+WN1CnLFoJzaDG85Nd9Thz6YBo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjASBgorBgEEAZx4AQMIBAQCAgCpME0GCSsGAQQBnHgBBARAR2MogYP9JYLkmmYnosyoEFzkbGHQwQQ9cek9tx9m+Y6ip0EJYf1qixogO9MU18tE6hgDyWoN/NO2btSdW1EBCDBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAetha/POMIuFd9Q16/vv01putdJqYZ89pkSpN3K9bEYJSViU5SutWy8ZR4MxP1D7T+JNLBONZI9isotBvzthp8A9qaeNLn0d7SS3KIGfyQ2qis0nV8dxR0F7ZRtV1iU2bgvEJdSgzBkf/nWhh55hcoCQEpJSQ5W8R14SiZKUvm8ojr43cHvjkLv8scxVN5VYqnWrGRh5HJ+cKZPvdlqmWlCBVlHIImuDDoOFJl4dkS+tl5RkDdToyqxt2rBLcNoY5qKhILHlVnHINnqRphbY/hgNSsqxIVbElScjGB/L/h7ZDZkvvfQ08RA7gvepP1Bv1kPu92U0pbhWV3iRdGk9KSsE2k8lSZub1jVD1XaEIu9pPlr2VNYB1nrNEgv/j0p3cnb8pzjAx8zUnz7TqtYgmXXlus880zPlLtMEEJpWpYS+R7uwRTvIbi3WzFRHJcXDusJhNJw2PH3KJJqzyS43nFPE02Yv+qRe6iYJbJpYuFKWq9naITocPCBgGaJagD4fTjuVma6fBYLjcgoSRhp6G4YNq1jU/fKKwGwL1rgOGWMb9xd3/42GZvROuBKcXUnX/FDkVWUbStxpC/8kZdgXOA+syUsYW0HMQiDLRHHmC8qH0Yh8Qqowv7lTALQm4I+Lqs2doMVrmOI9yz7WDqCE8Vt7HPJDpaRfNqQYS0ViAqJM=",
  "https://kdsintf.amd.com/vcek/v1/Milan/f2fc9bc49dcb55fff9c46cd1ebc1143e7881813d872197ef1b543c6d9da7d75d9509bff0929be8b339a3efe5aa9a472eaf439e1284ac2db642fe0615559e9f86?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOVoXDTMxMDQwMjE1NDMzOVowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEzm6V5T1ItAjtH0Ehtr/l5XRn4+wVFQuyuA4nsvzxWvzYvgyLBctOQA9MJNTuaveJ1on1YEsrrcwA0muV215au0CiAjX63mGzJ9lGhtWceZZiboof3VfRqX53dwWp3HuGo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARA8vybxJ3LVf/5xGzR68EUPniBgT2HIZfvG1Q8bZ2n112VCb/wkpvoszmj7+Wqmkcur0OeEoSsLbZC/gYVVZ6fhjBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEATFDakDrPkSy+5te6LO1MRP5ItKODdxyvI4ytpuQoil2X0VXCydggnLwjvs9Zf9JDnb/f9McgJkBNXjXLL0BKaZqoUHeGPdjAZxWwnsMN1m1VAjG7qqv2A9+XkZyR1dKzFqiNjexOITPmU4fmx2GjjmvhOiVSOOYyQEexujIma0OHO5bFSR7V7naInKRcdwviWDtdSE5qkIlFnvVBrxcKK1LbGI4mT95xKk0YyKfaPs68OVf+XuZ8I2HkF6evj1Nm7R/irltj5c6AHsZiXxpNCUtcjyUejeP/fpzDyVtDGdMwQV9Zvfa4MQau6fOkddYqnEZLTSu//hFV/KlTxIBlpNS6RT6V+/D2DVOgqvoMOzv4zWKvyvISibdlkHheqq8WO0hzb+s5GK3xxtmFoYG+moX5hHEQCRa0Qlmb1wnd75cxHZNfM7tZLx8o75YQXRB42Njgw65snXZSnS6hyjlhWA21nmd71wAjzkqQHOruVVCNcCSK6UBgrDGZfVIiPqQAF3BIocgEBSVQHMS/+nyw2LIQKeyCFavjdxJNau254IWKIuEj7b2o66C8BLxcvGCBoUsGtr0dLcy4+UwuVQVcZhsg+/+wYZi7F/KQsKHJ/pUC8dXMFEc5e+7o7IRuVYmCQMnZqrlyCkpRpg36oLIjpPWUZ2ry8V0JbJvthcqiBwE=",
  "https://kdsintf.amd.com/vcek/v1/Milan/cd19809a10f1aab04a1011db4d8e565f9c17ba4a2a1c482ea968f4d6b647c2025cffa8b933bbb052b0445b0a2b4d38d24dfb4b54ff4eaff6ab2a9d2f3b1ac7bb?blSPL=03&teeSPL=00&snpSPL=20&ucodeSPL=209":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDQwMjE1NDMzOFoXDTMxMDQwMjE1NDMzOFowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEshixpP0hfqxN4lfjpU2IUBGZ3a3FPQ5BmH8JHx4ZkmXS3/1X/fxtZQDJ1zQdQXKja6/998quYgOvdAJmfsTsx6Ysm093CzYB/b+PwD9jwne9y00kpHGHQu41x/kZKoKKo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBFDASBgorBgEEAZx4AQMIBAQCAgDRME0GCSsGAQQBnHgBBARAzRmAmhDxqrBKEBHbTY5WX5wXukoqHEguqWj01rZHwgJc/6i5M7uwUrBEWworTTjSTftLVP9Or/arKp0vOxrHuzBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAUKTouyVJFqYRU6JIWQz/GZRwYdcIMHB47ziedp4ClhqWiiE/BNv4zmwM6B8RAk2ECk9aZXsPpgQXsAApvy+5lUkbY5mRYwfEBVb+2HB8oypSaitwkOBD2Rv1AvC2BXzCe8DKXu4hx6k+lDaAXrJ3xk/+4KpXOiy+1B8S/0ZMbXPy70e2V/NKRnhawWKlm3f1qTAvVNR2wjkQ3mCYKcyZ8vvvuEMs/D/VcABDkc0nkF7Rts9wUhlH9fq164+zNkPZJwG5/WNXIYiRSSjZeiI6rNt0GS5EkYytxRjGgL/zOKphD7NFt+fXUeGTV3wbIDf5e081lpvTsp5Gk8uBRVr82kbYCkIMhcw5ox/iuANNRSXxLNAiQnt/NuVRJnkuuQlGItI6ZaBfDQDw1xse4vkgp/5faKbrA8Pe3ssq07575B7iTmJllCmt0v3/uFJL5+OAHw2YQKHVr9H5nwsdYpqKQlXKmzyRKMv13+BV6R8nQiCW5uP3xRQd1RGwMCEw/aeZFi4i7c+awEtiEH+WhUJkYbtstWV6kxfhP39G/+jOCVZK7b9DoUz8yg4alJGwmracgrtLt/3hCa48Qq3fAMzqhS1txcYqYSmN1mFJQKhbPYtXV8LBG2NNAxaBByfESNhwXvJJX6bYmYqxqL3W6wJuqWuAvzlbLcTYPEU4Oe16RLk=",
  "https://kdsintf.amd.com/vcek/v1/Milan/70ea9eb1ac61c999098be721c3ba82cfce18d6c74f07b9bf15ca78316ab5ec66d377e8f927044862da38506ded66178d97304181103d087d65bfc8eb22508859?blSPL=03&teeSPL=00&snpSPL=10&ucodeSPL=169":
    "MIIFTTCCAvygAwIBAgIBADBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBATB7MRQwEgYDVQQLDAtFbmdpbmVlcmluZzELMAkGA1UEBhMCVVMxFDASBgNVBAcMC1NhbnRhIENsYXJhMQswCQYDVQQIDAJDQTEfMB0GA1UECgwWQWR2YW5jZWQgTWljcm8gRGV2aWNlczESMBAGA1UEAwwJU0VWLU1pbGFuMB4XDTI0MDMyODIzMzAxNloXDTMxMDMyODIzMzAxNlowejEUMBIGA1UECwwLRW5naW5lZXJpbmcxCzAJBgNVBAYTAlVTMRQwEgYDVQQHDAtTYW50YSBDbGFyYTELMAkGA1UECAwCQ0ExHzAdBgNVBAoMFkFkdmFuY2VkIE1pY3JvIERldmljZXMxETAPBgNVBAMMCFNFVi1WQ0VLMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEzhCQmSAIRQs5zUV1EulV9sGkXC736fE9PIjn7R4u/VMn5+7MUqK6ox30IjjpOa4PLodC6/HdRM1CTTuNtmY68pxpRywuz8Rxy5aRltARgy8uUSDmNQ+HO0F6c5xY8m2zo4IBFzCCARMwEAYJKwYBBAGceAEBBAMCAQAwFwYJKwYBBAGceAECBAoWCE1pbGFuLUIwMBEGCisGAQQBnHgBAwEEAwIBAzARBgorBgEEAZx4AQMCBAMCAQAwEQYKKwYBBAGceAEDBAQDAgEAMBEGCisGAQQBnHgBAwUEAwIBADARBgorBgEEAZx4AQMGBAMCAQAwEQYKKwYBBAGceAEDBwQDAgEAMBEGCisGAQQBnHgBAwMEAwIBCjASBgorBgEEAZx4AQMIBAQCAgCpME0GCSsGAQQBnHgBBARAcOqesaxhyZkJi+chw7qCz84Y1sdPB7m/Fcp4MWq17GbTd+j5JwRIYto4UG3tZheNlzBBgRA9CH1lv8jrIlCIWTBGBgkqhkiG9w0BAQowOaAPMA0GCWCGSAFlAwQCAgUAoRwwGgYJKoZIhvcNAQEIMA0GCWCGSAFlAwQCAgUAogMCATCjAwIBAQOCAgEAQSfmep4K43wXshojSOdz14GMMmy2v/Q4Aae5SeExFfhfHjvdp5Ou8MEbZ9iXnc7iIzu9mRRq71UB2YeTXZNd0ohUi/swFDb7lqKI9p7GQEgctDGUziOyl8FSCgzrJk1HqlRwciT53p9EGDZGXN+3KENTjXcNKmsawEJzMkNp1ffPfEYuJRsurF87vsMTvrddkfyeWF0oNtySfK8h1sND1zumvDyPTPa8bqSiyZXHabh6g4R1BWABgqtFVME8e+vxwlJiq9c2ywRotYvSvJmxD4aST5hIp5Rm25Rgx2FnzL+vEEUeMj61mcYFJmX8N42AoEwFFB2OsY7hu1OKcgAzngbhu592oXkDaHjxk6lBs5GBVoh7BTCJcxLWdCpApAzBaxYST+vMIs/FRUnvZ4RLSLqLr/BPazORjniS5RAa6Fvwam2a6FG6agac+YkrsJZKHbVz1l/KSLZ4Q+8QQM+RnSPUVpP5730yPfm8ZDqzOFyRjDJ4H/t+GQdyiwE+q3KkEINQc/x/UdXdWpBojTrga51xOXOrboYems4NdDsO7WS6W8vuszmaEgoqheBtV0fzyVuWoLXPOs21VuOWHt0QZLyURLOPGca7M9VmF7mPVWu4Lxq6H1SCqdu9Qh+ZbMVpkN/Lv7OtfRM8DCDGW6i2w+tdZZpyQfp3agu90e8KQvI=",
};

module.exports = { cachedCerts };