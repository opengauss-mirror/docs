# 证书生成<a name="ZH-CN_TOPIC_0289900216"></a>

## 操作场景<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section10143135711718"></a>

在测试环境下，用户可以用通过以下方式进行数字证书测试。在客户的运行环境中，请使用从CA认证中心申请的数字证书。

## 前提条件<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section3301099010243"></a>

Linux环境安装了tassl组件。

## 自认证证书生成过程<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section2972238310327"></a>

1.  生成自签名CA证书。
    ```
    --假设tassl的安装路径为/home/omm/tassl
    --copy 配置文件openssl.cnf到certs下
    mkdir certs
    cp /home/omm/tassl/tassl_demo/cert/openssl.cnf  certs/
    cd certs

    --生成根私钥
    openssl ecparam -genkey -name SM2 -out CA.key

    --生成根证书请求文件
    openssl req -config openssl.cnf -new -subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=FooCA -key CA.key -out CA.csr
    其中-subj参数中的各个字段含义如下,可根据实际情况填写
    C:  Country Name,本例取值为CN
    ST: State or Province Name,本例取值为BeiJing
    L:  Locality Nam,上面的例子中为HaiDian
    O:  Organization Name (eg, company),本例取值为OPENGAUSS
    OU: Organizational Unit Name(eg, section),本例取值为OG
    CN: Common Name (eg, YOUR name) ,可随意取值，本例取值为FooCA
    
    --生成自签名证书
    openssl x509 -sm3 -req -days 1500 -in CA.csr -extfile openssl.cnf -extensions v3_ca -signkey CA.key -out cacert.pem
    其中-days参数指定证书的有效天数，本例取值1500
    ```

2.  生成服务器签名证书-私钥对。

    ```
    --生成服务器签名私钥
    openssl ecparam -genkey -name SM2 -out server.key

    --生成服务器证书请求文件
    openssl req -config openssl.cnf -new --subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=server -key server.key -out server.csr
    其中-subj参数除CN(Common Name)外需要与CA请求中保持一致

    --生成由根证书签名的服务器证书
    openssl x509 -sm3 -req -days 1500 -in server.csr -CA cacert.pem -CAkey CA.key -extfile openssl.cnf -extensions v3_req -out server.crt -CAcreateserial
    其中-days参数指定证书的有效天数，本例取值1500
    ```

3.  生成服务器加密证书-私钥对。

    ```
    与签名证书私钥对步骤相同，仅输出文件名称不同

    openssl ecparam -genkey -name SM2 -out server_enc.key

    openssl req -config openssl.cnf -new -subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=server -key server_enc.key -out server_enc.csr

    openssl x509 -sm3 -req -days 1500 -in server_enc.csr -CA cacert.pem -CAkey CA.key -extfile openssl.cnf -extensions v3enc_req -out server_enc.crt -CAcreateserial
    ```


4.  生成客户端签名证书-私钥对。

    ```
    --生成客户端签名私钥
    openssl ecparam -genkey -name SM2 -out client.key

    --生成客户端证书请求文件
    openssl req -config openssl.cnf -new --subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=client -key client.key -out client.csr
    其中-subj参数除CN(Common Name)外需要与CA请求中保持一致

    --生成由根证书签名的客户端证书
    openssl x509 -sm3 -req -days 1500 -in client.csr -CA cacert.pem -CAkey CA.key -extfile openssl.cnf -extensions v3_req -out client.crt -CAcreateserial
    其中-days参数指定证书的有效天数，本例取值1500
    ```

5.  生成客户端加密证书-私钥对。

    ```
    与签名证书私钥对步骤相同，仅输出文件名称不同

    openssl ecparam -genkey -name SM2 -out client_enc.key

    openssl req -config openssl.cnf -new -subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=client -key client_enc.key -out client_enc.csr

    openssl x509 -sm3 -req -days 1500 -in client_enc.csr -CA cacert.pem -CAkey CA.key -extfile openssl.cnf -extensions v3enc_req -out client_enc.crt -CAcreateserial
    ```

6.  若有需要，对私钥添加密码保护,并生成私钥密码保护文件

    ```
    --保护服务器签名私钥
    openssl ec -sm4 -in server.key  -out server.key  -passout pass:XXXXX
    gs_guc generate -S XXXXX -D ./  -o  server
    其中xxxx为自定义的保护密码，-D指定密码保护文件生成路径，下同。

    --保护服务器加密私钥
    openssl ec -sm4 -in server_enc.key  -out server_enc.key  -passout pass:XXXXX
    gs_guc generate -S XXXXX -D ./  -o server_enc

    --保护客户端签名私钥
    openssl ec -sm4 -in client.key  -out client.key  -passout pass:XXXXX
    gs_guc generate -S XXXXX -D ./  -o client

    --保护客户端加密私钥
    openssl ec -sm4 -in client_enc.key  -out client_enc.key  -passout pass:XXXXX
    gs_guc generate -S XXXXX -D ./  -o client_enc
    ```
    密码保护文件与相应的私钥文件需放在同一路径下。
