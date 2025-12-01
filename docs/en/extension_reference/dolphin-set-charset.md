# SET CHARSET <a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Sets the character encoding type of the client.

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   This statement is equivalent to **set client_encoding** in openGauss.
-   Set this parameter based on the front-end service requirements. Ensure that the client code is the same as the server code to improve efficiency.
-   It is compatible with all encoding types of PostgreSQL.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SET {CHARACTER SET | CHARSET} {'charset_name' | DEFAULT}

```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **{CHARACTER SET | CHARSET}**

       The two are equivalent.

- **{'charset_name' | DEFAULT}**

       charset\_name supports the character encoding types that can be set by openGauss, such as utf8 and gbk. If DEFAULT is specified, the character set is reset to the default one.
       charset\_name supports the following formats:
       
       1. utf8
       2. 'utf8'
       3. "utf8"

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

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
