# file\_fdw<a name="ZH-CN_TOPIC_0000001116194726"></a>

file\_fdw模块提供了外部数据封装器file\_fdw，可以用来在服务器的文件系统中访问数据文件。数据文件必须是COPY FROM可读的格式，具体请参见[COPY](COPY.md)的介绍。使用file\_fdw访问的数据文件是当前可读的，不支持对该数据文件的写入操作。

当前openGauss会默认编译file\_fdw，initdb的时候会在pg\_catalog schema中创建该插件。

file\_fdw对应的server和外表只允许数据库的初始用户或开启运维模式时的运维管理员创建。

使用file\_fdw创建的外部表可以有下列选项：

-   filename

    指定要读取的文件，必需的参数，且必须是一个绝对路径名。

-   format

    远端server的文件格式，支持text/csv/binary三种格式，和COPY语句的FORMAT选项相同。

-   header

    指定的文件是否有标题行，与COPY语句的HEADER选项相同。

-   delimiter

    指定文件的分隔符，与COPY的DELIMITER选项相同。

-   quote

    指定文件的引用字符，与COPY的QUOTE选项相同。

-   escape

    指定文件的转义字符，与COPY的ESCAPE选项相同。

-   null

    指定文件的null字符串，与COPY的NULL选项相同。

-   encoding

    指定文件的编码，与COPY的ENCODING选项相同。

-   force\_not\_null

    这是一个布尔选项。如果为真，则声明字段的值不应该匹配空字符串（也就是， 文件级别null选项）。与COPY的 FORCE\_NOT\_NULL选项里的字段相同。


>![](public_sys-resources/icon-note.gif) **说明：** 
>-   file\_fdw不支持COPY的OIDS和 FORCE\_QUOTE选项。
>-   这些选项只能为外部表或外部表的字段声明，不是file\_fdw的选项，也不是使用file\_fdw的服务器或用户映射的选项。
>-   修改表级别的选项需要系统管理员权限。因为安全原因，只有系统管理员能够决定读取的文件。
>-   对于一个使用file\_fdw的外部表，EXPLAIN可显示要读取的文件名和文件大小（单位：字节）。 指定了COSTS OFF关键字之后，不显示文件大小。

## **使用file\_fdw**<a name="section1927220173219"></a>

-   创建服务器对象：CREATE SERVER
-   创建用户映射：CREATE USER MAPPING
-   创建外表：CREATE FOREIGN TABLE

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   外表的表结构需要与指定的文件的数据保持一致。
    >-   对外表做查询操作，写操作不被允许。

-   删除外表：DROP FOREIGN TABLE
-   删除用户映射：DROP USER MAPPING
-   删除服务器对象：DROP SERVER

## **注意事项**<a name="section1841910239211"></a>

-   使用file\_fdw需要指定要读取的文件，请先准备好该文件，并授予数据库对该文件的读取权限。
-   不支持DROP EXTENSION file\_fdw操作。

