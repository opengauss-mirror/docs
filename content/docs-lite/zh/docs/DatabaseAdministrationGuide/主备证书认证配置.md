# 主备证书认证配置 `<a name="ZH-CN_TOPIC_0000001262443815"></a>`

## 操作场景 `<a name="zh-cn_topic_0283137045_zh-cn_topic_0237121097_zh-cn_topic_0059778589_section12641165319257"></a>`

轻量版场景下主备双机直接认证机制需要使用ssl证书。

## 前提条件 `<a name="zh-cn_topic_0283137045_zh-cn_topic_0237121097_zh-cn_topic_0059778589_s2d0511630ed840d180c92fa6bdecb54b"></a>`

用户需要从CA认证中心申请到正式的服务器、客户端的证书和密钥。

## 注意事项 `<a name="zh-cn_topic_0283137045_zh-cn_topic_0237121097_zh-cn_topic_0059778589_s014a1b1bc72240bb9bbbad5e064bf6d3"></a>`

openGauss目前只支持X509v3的PEM格式证书。

## 操作步骤 `<a name="section15831243154011"></a>`

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
2. 拷贝证书到各个节点的数据目录。

   1. 将服务端各个配置文件server.crt、server_enc.crt、server.key、server_enc.key、server.key.cipher、server.key.rand、server_enc.key.cipher、server_enc.key.rand拷贝到对应目录下替换原有文件。
   2. 将客户端各个配置文件client.crt、client_enc.crt、client.key、client_enc.key、client.key.cipher、client.key.rand、client_enc.key.cipher、client_enc.key.rand、cacert.pem（如果需要配置吊销证书列表，则列表中包含sslcrl-file.crl）拷贝到到对应目录下。
3. 加密用户密码 （可选，如果证书已经生成了私钥可跳过）

   - 主节点： gs\_guc encrypt -M server -K 密钥密码 -D $\{GAUSSDATA\}/
   - 备节点： gs\_guc encrypt -M client -K 密钥密码 -D $\{GAUSSDATA\}/

   TLCP连接需要额外保护其加密私钥

   - 主节点 gs_guc generate -S  密钥密码 -D $\{GAUSSDATA\}/   -o server_enc
   - 备节点 gs_guc generate -S  密钥密码 -D $\{GAUSSDATA\}/   -o client_enc

   其中$\{GAUSSDATA\}为数据目录
4. 配置ssl

   ```
   gs_guc set -D ${GAUSSDATA} -c "ssl=on" 
   gs_guc set -D ${GAUSSDATA} -c "ssl_ciphers = 'ALL'" 
   gs_guc set -D ${GAUSSDATA} -c "ssl_cert_file = 'server.crt'" 
   gs_guc set -D ${GAUSSDATA} -c "ssl_key_file = 'server.key'" 
   gs_guc set -D ${GAUSSDATA} -c "ssl_ca_file = 'cacert.pem'" 

   TLCP 连接需额外配置：
   gs_guc set -D ${GAUSSDATA} -c "ssl_use_tlcp=on" 
   gs_guc set -D ${GAUSSDATA} -c "ssl_enc_cert_file = 'server_enc.crt'" 
   gs_guc set -D ${GAUSSDATA} -c "ssl_enc_key_file = 'server_enc.key'"
   ```
5. 备节点导出如下环境变量（文件权限不能大于600）

   export PGSSLCERT="$\{GAUSSDATA\}/client.crt"

   export PGSSLKEY="$\{GAUSSDATA\}/client.key"

   export PGSSLROOTCERT="$\{GAUSSDATA\}/cacert.pem"

   TLCP连接需额外设置：
   export PGSSLTLCP=1

   export PGSSLENCCERT="$\{GAUSSDATA\}/client_enc.crt"

   export PGSSLENCKEY="$\{GAUSSDATA\}/client_enc.key"
6. 依次重启主备openGauss。

   ```
   gs_ctl restart -D ${GAUSSDATA} 
   ```
