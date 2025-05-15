# 常见问题处理<a name="ZH-CN_TOPIC_0000002259758100"></a>

1.  提示需要用户提供--ssl-keyfile与--ssl-certfile选项：

    上述exporter默认采用HTTPS模式通信，因此需要用户指定证书及其私钥文件的路径。相反，如果用户只想采用HTTP模式，则需要显性指定--disable-https选项，从而禁用HTTPS协议。

2.  提示用户需要输入PEM密码（Enter PEM pass phrase）：

    如果用户采用HTTPS模式，并给定了证书及其密钥文件的路径，且该密钥文件是经过加密的，则需要用户输入该加密私钥证书文件的密码。该密码也可以通过标准输入流传递。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >prometheus不支持私钥加密，若涉及prometheus通信的私钥加密时部分功能将无法实现。
    >prometheus的query\_range功能支持的最大序列长度是11000个数据，在使用时需要注意。
    >prometheus的query\_range功能可能会出现单点数据同时出现在连续两次查询结果中，此为正常现象。

