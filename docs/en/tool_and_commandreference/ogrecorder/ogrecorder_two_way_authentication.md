---
description: This document describes oGRecorder Two-Way Authentication in openGauss, covering topics such as Certificate Parameters, Certificate Generation.
keywords: [openGauss, oGRecorder Two-Way Authentication, tools and commands, Certificate Parameters, Certificate Generation]
---

# oGRecorder Two-Way Authentication

## Certificate Parameters

| Parameter    | Effective Mode     | Description                              |
|-------------------|--------------------|------------------------------------------|
| `SER_SSL_CA`      | Restart Required   | CA certificate path                      |
| `SER_SSL_CERT`    | Restart Required   | Server certificate path                  |
| `SER_SSL_KEY`     | Restart Required   | Server private key path                  |
| `SER_SSL_CRL`     | Restart Required   | Server certificate revocation list path  |
| `CLI_SSL_CA`      | Restart Required   | CA certificate path                      |
| `CLI_SSL_CERT`    | Restart Required   | Client certificate path                  |
| `CLI_SSL_KEY`     | Restart Required   | Client private key path                  |
| `CLI_SSL_CRL`     | Restart Required   | Client certificate revocation list path   |

---

## Certificate Generation

- In a test environment, users can generate server and client certificates themselves. For details, see [Certificate Generation](../../database_administration_guide/ssl_certificate_management.md).
- Currently, oGRecorder provides the `grcmd gencert` command to generate certificates.
- The four server-related parameters must be specified in the same directory; the same applies to the client parameters.
