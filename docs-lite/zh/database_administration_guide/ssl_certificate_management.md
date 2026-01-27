# SSL证书管理<a name="ZH-CN_TOPIC_0289900057"></a>

openGauss默认配置了通过openssl生成的安全证书、私钥。并且提供证书替换的接口，方便用户进行证书的替换。

## 证书生成<a name="ZH-CN_TOPIC_0289900216"></a>

### 操作场景<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section10143135711718"></a>

在测试环境下，用户可以用通过以下方式进行数字证书测试。在客户的运行环境中，请使用从CA认证中心申请的数字证书。

### 前提条件<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section3301099010243"></a>

Linux环境安装了openssl组件。

### 自认证证书生成过程<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section2972238310327"></a>

1. 搭建CA环境。

    ```
    --假设用户为omm已存在,搭建CA的路径为test
    --以omm用户身份登录Linux环境
    mkdir test
    cd test
    --copy 配置文件openssl.cnf到test下
    cp /etc/pki/tls/openssl.cnf ./
    --到test文件夹下，开始搭建CA环境
    --创建文件夹demoCA./demoCA/newcerts./demoCA/private
    mkdir ./demoCA ./demoCA/newcerts ./demoCA/private
    chmod 700 ./demoCA/private
    --创建serial文件,写入01
    echo '01'>./demoCA/serial
    --创建文件index.txt
    touch ./demoCA/index.txt
    --修改openssl.cnf配置文件中的参数
    dir  = ./demoCA
    default_md      = sha256
    --至此CA环境搭建完成
    ```

2. 生成根私钥。

    ```
    --生成CA私钥
    RSA证书：openssl genrsa -aes256 -out demoCA/private/cakey.pem 2048
    ECDSA证书：openssl ecparam -name prime256v1 -genkey -out demoCA/private/cakey.pem
    Generating RSA private key, 2048 bit long modulus
    .................+++
    ..................+++
    e is 65537 (0x10001)
    --设置根私钥的保护密码
    Enter pass phrase for demoCA/private/cakey.pem:
    --再次输入私钥密码
    Verifying - Enter pass phrase for demoCA/private/cakey.pem:
    ```

3. 生成根证书请求文件。

    ```
    --生成CA根证书申请文件careq.pem
    openssl req -config openssl.cnf -new -key demoCA/private/cakey.pem -out demoCA/careq.pem
    Enter pass phrase for demoCA/private/cakey.pem:
    --输入根私钥密码
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    
    --以下名称请牢记，生成服务器证书和客户端证书时填写的信息需要与此处的一致
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:shanxi
    Locality Name (eg, city) []:xian
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:Abc
    Organizational Unit Name (eg, section) []:hello
    --Common Name可以随意命名
    Common Name (eg, YOUR name) []:world
    --Email可以选择性填写
    Email Address []:
    
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    ```

4. 生成自签发根证书。

    ```
    --生成根证书时，需要修改openssl.cnf文件，设置basicConstraints=CA:TRUE
    vi openssl.cnf
    --生成CA自签发根证书
    openssl ca -config openssl.cnf -out demoCA/cacert.pem -keyfile demoCA/private/cakey.pem -selfsign -infiles demoCA/careq.pem
    Using configuration from openssl.cnf
    Enter pass phrase for demoCA/private/cakey.pem:
    --输入根私钥密码
    Check that the request matches the signature
    Signature ok
    Certificate Details:
            Serial Number: 1 (0x1)
            Validity
                Not Before: Feb 28 02:17:11 2017 GMT
                Not After : Feb 28 02:17:11 2018 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = shanxi
                organizationName          = Abc
                organizationalUnitName    = hello
                commonName                = world
            X509v3 extensions:
                X509v3 Basic Constraints: 
                    CA:FALSE
                Netscape Comment: 
                    OpenSSL Generated Certificate
                X509v3 Subject Key Identifier: 
                    F9:91:50:B2:42:8C:A8:D3:41:B0:E4:42:CB:C2:BE:8D:B7:8C:17:1F
                X509v3 Authority Key Identifier: 
                    keyid:F9:91:50:B2:42:8C:A8:D3:41:B0:E4:42:CB:C2:BE:8D:B7:8C:17:1F
    
    Certificate is to be certified until Feb 28 02:17:11 2018 GMT (365 days)
    Sign the certificate? [y/n]:y
    
    
    1 out of 1 certificate requests certified, commit? [y/n]y
    Write out database with 1 new entries
    Data Base Updated
    --至此CA根证书自签发完成，根证书demoCA/cacert.pem。
    ```

5. 生成服务端证书私钥，RSA和ECDSA加密方式可以根据需要选择其中一种。

    ```
    --生成RSA服务端证书私钥文件server.key
    RSA证书私钥：openssl genrsa -aes256 -out server.key 2048
    Generating a 2048 bit RSA private key
    .......++++++
    ..++++++
    e is 65537 (0x10001)
    Enter pass phrase for server.key:
    --服务器私钥的保护密码
    Verifying - Enter pass phrase for server.key:
    --再次确认服务器私钥的保护密码
    --生成ECDSA服务端证书私钥文件server.key
    ECDSA证书私钥：openssl ecparam -name prime256v1 -genkey -out server.key
    --对ECDSA证书私钥进行加密保护，根据提示输入加密密码：
    openssl ec -in server.key -aes256 -out server.key
    read EC key
    writing EC key
    Enter PEM pass phrase:
    Verifying - Enter PEM pass phrase:
    
    --根据提示输入服务端私钥的密码，加密后会生成server.key.cipher,server.key.rand两个私钥密码保护文件。
    gs_guc encrypt -M server -D ./
    ```

6. 生成服务端证书请求文件。

    ```
    --生成服务器证书请求文件server.req
    openssl req -config openssl.cnf -new -key server.key -out server.req
    Enter pass phrase for server.key:
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    
    --以下填写的信息与创建CA时的信息一致
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:shanxi
    Locality Name (eg, city) []:xian
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:Abc
    Organizational Unit Name (eg, section) []:hello
    --Common Name可以随意命名
    Common Name (eg, YOUR name) []:world
    Email Address []:
    --以下信息可以选择性填写
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    ```

7. 生成服务端证书。

    ```
    --生成服务端/客户端证书时，修改openssl.cnf文件，设置basicConstraints=CA:FALSE
    vi openssl.cnf
    --修改demoCA/index.txt.attr中属性为no。
    vi demoCA/index.txt.attr
    
    --对生成的服务端证书请求文件进行签发，签发后将生成正式的服务端证书server.crt
    openssl ca  -config openssl.cnf -in server.req -out server.crt -days 3650 -md sha256
    Using configuration from /etc/ssl/openssl.cnf
    Enter pass phrase for ./demoCA/private/cakey.pem:
    Check that the request matches the signature
    Signature ok
    Certificate Details:
            Serial Number: 2 (0x2)
            Validity
                Not Before: Feb 27 10:11:12 2017 GMT
                Not After : Feb 25 10:11:12 2027 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = shanxi
                organizationName          = Abc
                organizationalUnitName    = hello
                commonName                = world
            X509v3 extensions:
                X509v3 Basic Constraints: 
                    CA:FALSE
                Netscape Comment: 
                    OpenSSL Generated Certificate
                X509v3 Subject Key Identifier: 
                    EB:D9:EE:C0:D2:14:48:AD:EB:BB:AD:B6:29:2C:6C:72:96:5C:38:35
                X509v3 Authority Key Identifier: 
                    keyid:84:F6:A1:65:16:1F:28:8A:B7:0D:CB:7E:19:76:2A:8B:F5:2B:5C:6A
    
    Certificate is to be certified until Feb 25 10:11:12 2027 GMT (3650 days)
    --选择y对证书进行签发
    Sign the certificate? [y/n]:y
    
    --选择y，证书签发结束
    1 out of 1 certificate requests certified, commit? [y/n]y
    Write out database with 1 new entries
    Data Base Updated
    ```

8. 客户端证书，私钥的生成。

    生成客户端证书和客户端证书私钥的方法和要求与服务器相同。

    ```
    --生成客户端证书私钥，RSA和ECDSA加密方式可以根据需要选择其中一种。
    RSA证书私钥：openssl genrsa -aes256 -out client.key 2048
    ECDSA证书私钥：openssl ecparam -name prime256v1 -genkey -out client.key
    对于ECDSA证书私钥，需要执行如下命令进行加密保护，根据提示输入加密密码：
    openssl ec -in server.key -aes256 -out server.key
    --根据提示输入客户端私钥的密码，加密后会生成client.key.cipher,client.key.rand两个私钥密码保护文件
    gs_guc encrypt -M client -D ./
    --生成客户端证书请求文件
    openssl req -config openssl.cnf -new -key client.key -out client.req 
    --对生成的客户端证书请求文件进行签发，签发后将生成正式的客户端证书client.crt
    openssl ca -config openssl.cnf -in client.req -out client.crt -days 3650 -md sha256
    ```

    根据需要将客户端密钥转化为DER格式，方法如下：

    ```
    openssl pkcs8 -topk8 -outform DER -in client.key -out client.key.pk8 -nocrypt
    ```

9. 吊销证书列表的生成。

    如果需要吊销列表，可按照如下方法生成：

    ```
    --首先创建crlnumber文件
    echo '00'>./demoCA/crlnumber
    --吊销服务器证书
    openssl ca -config openssl.cnf -revoke server.crt
    --生成证书吊销列表sslcrl-file.crl
    openssl ca -config openssl.cnf -gencrl -out sslcrl-file.crl
    ```

## 证书生成<a name="ZH-CN_TOPIC_0289900216"></a>

### 操作场景<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section10143135711718"></a>

在测试环境下，用户可以用通过以下方式进行数字证书测试。在客户的运行环境中，请使用从CA认证中心申请的数字证书。

### 前提条件<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section3301099010243"></a>

Linux环境安装了tassl组件。

### 自认证证书生成过程<a name="zh-cn_topic_0283137709_zh-cn_topic_0237121096_zh-cn_topic_0059777789_section2972238310327"></a>

1. 生成自签名CA证书。

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

2. 生成服务器签名证书-私钥对。

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

3. 生成服务器加密证书-私钥对。

    ```
    与签名证书私钥对步骤相同，仅输出文件名称不同

    openssl ecparam -genkey -name SM2 -out server_enc.key

    openssl req -config openssl.cnf -new -subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=server -key server_enc.key -out server_enc.csr

    openssl x509 -sm3 -req -days 1500 -in server_enc.csr -CA cacert.pem -CAkey CA.key -extfile openssl.cnf -extensions v3enc_req -out server_enc.crt -CAcreateserial
    ```

4. 生成客户端签名证书-私钥对。

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

5. 生成客户端加密证书-私钥对。

    ```
    与签名证书私钥对步骤相同，仅输出文件名称不同

    openssl ecparam -genkey -name SM2 -out client_enc.key

    openssl req -config openssl.cnf -new -subj /C=CN/ST=BeiJing/L=HaiDian/O=OPENGAUSS/OU=OG/CN=client -key client_enc.key -out client_enc.csr

    openssl x509 -sm3 -req -days 1500 -in client_enc.csr -CA cacert.pem -CAkey CA.key -extfile openssl.cnf -extensions v3enc_req -out client_enc.crt -CAcreateserial
    ```

6. 若有需要，对私钥添加密码保护,并生成私钥密码保护文件

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

## 证书替换

### 操作场景

openGauss默认配置了SSL连接所需要的安全的证书、私钥，用户如果需要替换为自己的证书、私钥则可按照此方法进行替换。

### 前提条件

用户需要从CA认证中心申请到正式的服务器、客户端的证书和密钥。

### 注意事项

openGauss目前只支持X509v3的PEM格式证书。

### 操作步骤

1. 准备证书、私钥。

   服务端各个配置文件名称约定：

   - 证书名称约定：server.crt、server_enc.crt。
   - 私钥名称约定：server.key、server_enc.key。
   - 私钥密码加密文件约定：server.key.cipher、server.key.rand、server_enc.key.cipher、server_enc.key.rand。

   客户端各个配置文件名称约定：

   - 证书名称约定：client.crt、client_enc.crt。
   - 私钥名称约定：client.key、client_enc.key。
   - 私钥密码加密文件约定：client.key.cipher、client.key.rand、client_enc.key.cipher、client_enc.key.rand。
   - 根证书名称约定：cacert.pem。
   - 吊销证书列表文件名称约定：sslcrl-file.crl。
2. 调用接口，执行替换。

   1. 将服务端各个配置文件server.crt、server_enc.crt、server.key、server_enc.key、server.key.cipher、server.key.rand、server_enc.key.cipher、server_enc.key.rand拷贝到对应目录下替换原有文件。
   2. 将客户端各个配置文件client.crt、client_enc.crt、client.key、client_enc.key、client.key.cipher、client.key.rand、client_enc.key.cipher、client_enc.key.rand、cacert.pem（如果需要配置吊销证书列表，则列表中包含sslcrl-file.crl）拷贝到到对应目录下替换原有文件。
3. 重启openGauss。

   ```
   gs_ctl restart -D /gaussdb/data/datanode 
   ```
