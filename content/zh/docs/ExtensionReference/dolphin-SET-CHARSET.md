# SET CHARSET <a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

设置客户端的字符编码类型。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   openGauss中该语句等价于set client_encoding。
-   请根据前端业务的情况确定，客户端编码和服务器端编码尽量保持一致，提高效率。
-   兼容PostgreSQL所有的字符编码类型。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SET {CHARACTER SET | CHARSET} {'charset_name' | DEFAULT}

```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{CHARACTER SET | CHARSET}**

       两者是等价的。

- **{'charset_name' | DEFAULT}**

       charset_name支持openGauss可设置的字符编码类型，如utf8、gbk等；指定DEFAULT时会将字符集重置为默认的字符集。
       charset_name支持以下形式：
       
       1. utf8
       2. 'utf8'
       3. "utf8"

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# show client_encoding;
-[ RECORD 1 ]---+----
client_encoding | GBK

openGauss=# set charset gbk;
SET
db_show=# show client_encoding;
-[ RECORD 1 ]---+----
client_encoding | GBK

openGauss=# set charset default;
SET
openGauss=# show client_encoding;
-[ RECORD 1 ]---+-----
client_encoding | UTF8

openGauss=# set character set 'gbk';
SET
openGauss=# show client_encoding;
-[ RECORD 1 ]---+----
client_encoding | GBK

openGauss=# set character set default;
SET
openGauss=# show client_encoding;
-[ RECORD 1 ]---+-----
client_encoding | UTF8
```
