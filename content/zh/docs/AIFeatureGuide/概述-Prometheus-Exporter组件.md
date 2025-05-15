# 概述<a name="ZH-CN_TOPIC_0000002259861190"></a>

Prometheus作为业界流行的开源监控系统，其本身同时也是一款时序数据库。Prometheus的采集端被称为exporter，用于收集被监控模块的指标项。为了与Prometheus平台完成对接，AI工具自带了几款exporter，具体包括用来采集数据库指标的opengauss-exporter，用来执行cmd命令并获取返回结果以及采集日志信息的cmd-exporter，以及对采集到的指标进行二次加工的reprocessing-exporter。

>![](public_sys-resources/icon-caution.gif) **注意：** 
>Prometheus监控平台以及node-exporter采集组件属于业界通用的开源组件，其详细说明、使用指导以及安全设计请参考其官方提供的文档，不属于DBMind支持组件的交付、管理范围，以下配置仅供参考。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>-   Prometheus和exporter是业内流行的监控和采集平台，部署在内网环境中，不对外部暴露接口，仅供内部监控平台使用。因此，为了增强该平台的安全性，一般需要用户或运维人员配置防火墙等，以便隔离外部访问，从而增强监控平台的安全性。
>-   用户需要自行修改Prometheus的TLS配置选项或增加basic\_auth\_users相关选项，对访问用户进行身份认证并实现数据流的加密，但仍不建议对外部直接暴露访问接口。
>-   用户应该显式设置Prometheus的绑定IP地址，避免使用全0监听以减小安全风险。对于Prometheus的其他开源exporter（如node-exporter）也是同理。
>-   DBMind的exporter与Prometheus交互时，若使用SSL证书，则默认会进行双向认证。
>-   Prometheus的CA证书默认只支持SAN（Subject Alternative Name）形式，用户在配置Prometheus的CA证书，以及与Prometheus进行认证的证书时，需要使用SAN格式。同时，Prometheus不支持密码保护的私钥文件，用户在为Prometheus生成私钥文件时，请不要使用密码保护。例如，用户可以参考下述示例，通过openssl工具生成SAN形式的自签发证书和私钥文件：
>    ```
>    openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout prometheus.key -out prometheus.crt -subj "/C=CN/ST=openGauss/L=openGauss/O=openGauss/CN=localhost" -addext "subjectAltName = DNS:localhost"
>    ```
>    通过执行上述命令，可以生成两个文件prometheus.crt和prometheus.key，其中prometheus.crt文件可以同时作为CA证书使用。
>-   DBMind的exporter默认支持HTTPS协议，需要用户手动指定证书文件路径，建议用户使用。配置SSL时，DBMind会检查是否使用了加密的私钥文件，否则会予以拦截。DBMind的Exporter组件对密码强度有强制要求，使用弱密码会报错中止Exporter服务启动，一个符合要求的私钥密码应满足如下要求：（1）长度至少8个字符；（2）至少满足以下两种字符的组合：a）至少一个小写字母；b）至少一个大写字母；c）至少一个数字；d）至少一个特殊字符：\[\~\`!@\#$%^&\*\(\)-\_+\\|\{\};:,<.\>/?\] 。
>-   DBMind的Exporter组件会对传入的CA和CERT文件进行校验，使用不符合安全规范的证书文件时，Exporter服务报错并中止启动，校验的规则如下：1）Public Key Algorithm如果为id-ecpublickey则不能低于224位，如果为rsaencryption则不能低于2048位，如果为dsaencryption则不能低于2048位；（2）Signature Algorithm不能为sha0/md2/md4/md5/sha1/ripemd；（3）证书有效期。
>-   DBMind Service的部分功能会从Prometheus中获取时序数据，该通道也可以使用SSL协议进行加固，prometheus默认支持HTTPS通信，建议用户使用**。**
>-   Prometheus的配置文件prometheus.yml使用IPv6地址时，ip地址需要使用中括号\[\]和端口号进行分隔，例：\[2407:c080:18c1:33b:5c7a:3859:62ac:f284\]:9180
>-   Prometheus纳管集群时，部分指标需要保证同一个实例（数据库）只有一条数据，否则会导致DBMind中的获取数据信息接口（fetchone/fetchall）获取到的信息不准确，进而导致检测功能出现异常。
>-   DBMind自506版本开始支持InfluxDB作为TSDB，但是仅限于查询于InfluxDB中存储的指标数据，exporter组件本身不支持向InfluxDB中写入。
>-   在HTTPS协议下启动exporter的情况下，需要指定密钥文件的密码，密码通过管道在启动exporter时进行输入，例：
>    ```
>    echo '{"ssl-keyfile-password":"xxxxxx"}' | ./gs_dbmind component <exporter_name>
>    ```

