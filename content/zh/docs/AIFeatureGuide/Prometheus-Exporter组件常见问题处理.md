# 常见问题处理

1.  提示需要用户提供--ssl-keyfile与--ssl-certfile选项：

    上述exporter默认采用Https模式通信，因此需要用户指定证书及其私钥文件的路径。相反，如果用户只想采用Http模式，则需要显性给定--disable-https选项，从而禁用Https协议。

2.  提示用户需要输入PEM密码（Enter PEM pass phrase）：

    如果用户采用Https模式，并给定了证书及其秘钥文件的路径，且该秘钥文件是经过加密的，则需要用户输入该加密私钥证书文件的密码。该密码也可以通过标准输入流传递。


