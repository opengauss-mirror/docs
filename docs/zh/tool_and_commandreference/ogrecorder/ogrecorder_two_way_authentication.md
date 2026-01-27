# oGRecorder 双向认证

## 证书参数介绍

| 参数名                          | 生效方式         | 描述                          |
|---------------------------------|------------------|-------------------------------|
| `SER_SSL_CA`                    | 重启生效         | CA证书路径                   |
| `SER_SSL_CERT`                  | 重启生效         | 服务端cert证书路径            |
| `SER_SSL_KEY`                   | 重启生效         | 服务端私钥路径                |
| `SER_SSL_CRL`                   | 重启生效         | 服务端证书吊销列表路径             |
| `CLI_SSL_CA`                    | 重启生效         | CA证书路径                   |
| `CLI_SSL_CERT`                  | 重启生效         | 客户端cert证书路径            |
| `CLI_SSL_KEY`                   | 重启生效         | 客户端私钥路径                |
| `CLI_SSL_CRL`                   | 重启生效         | 客户端证书吊销列表路径                |

---

## 证书生成

- 在测试环境下，用户可以自行生成服务端与客户端证书，具体可参考[证书生成](../../database_administration_guide/ssl_certificate_management.md)
- 目前oGRecorder提供grcmd gencert命令生成证书。
- 服务端相关参数的4个参数，需要指定在相同目录下；客户端参数同理。
