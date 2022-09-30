# file\_fdw<a name="ZH-CN_TOPIC_0272283427"></a>

file\_fdw模块提供了外部数据封装器file\_fdw，可以用来在服务器的文件系统中访问数据文件。数据文件必须是COPY FROM可读的格式；具体可参照COPY语句的介绍。访问这样的数据文件当前只是可读的。当前不支持对该数据文件的写入操作。

当前openGauss会默认编译file\_fdw，在initdb的时候会在pg\_catalog schema中创建该插件。

使用file_fdw创建的外部表可以有下列选项：
	
-   **filename**
	
	指定要读取的文件，必需的参数，且必须是一个绝对路径名。
	
-   **format**
	
	远端server的文件格式，支持text/csv/binary三种格式，和COPY语句的FORMAT选项相同。
	    
-   **header**
	
	指定的文件是否有标题行，与COPY语句的HEADER选项相同。
	
-   **delimiter**
	
	指定文件的分隔符，与COPY的DELIMITER选项相同。
	
-   **quote**
	
	指定文件的引用字符，与COPY的QUOTE选项相同。
	
-   **escape**
	
	指定文件的转义字符，与COPY的ESCAPE选项相同。
	
-   **null**
	
	指定文件的null字符串，与COPY的NULL选项相同。
	
-   **encoding**
	
	指定文件的编码，与COPY的ENCODING选项相同。
	
-   **force\_not\_null**
		
	这是一个布尔选项。如果为真，则声明字段的值不应该匹配空字符串（也就是， 文件级别null选项）。与COPY的 FORCE\_NOT\_NULL选项里的字段相同。

file\_fdw不支持COPY的OIDS和 FORCE_QUOTE选项。

注意这些选项只能为外部表或它的字段声明，不是在file\_fdw外部数据封装器的选项里，也不是在使用该封装器的服务器或用户映射的选项里。

修改表级别的选项需要系统管理员权限，因为安全原因：只有系统管理员用户能够决定读哪个文件。

对于一个使用file_fdw的外部表，EXPLAIN显示要读取的文件名。除非指定了COSTS OFF，否则也显示文件大小（字节计）。

## 使用file\_fdw<a name="section1776874817393"></a>

-   使用file\_fdw需要指定要读取的文件，请先准备好该文件，并让数据库有读取权限。

-   创建服务器对象：**CREATE SERVER**

-   创建用户映射：**CREATE USER MAPPING**

-   创建外表：**CREATE FOREIGN TABLE**  外表的表结构需要与指定的文件的数据保持一致。

-   对外表做查询操作，写操作不被允许。

-   删除外表：**DROP FOREIGN TABLE**

-   删除用户映射：**DROP USER MAPPING**

-   删除服务器对象：**DROP SERVER**

## 注意事项<a name="section17197204403"></a>

-   不支持**DROP EXTENSION file_fdw**操作。



