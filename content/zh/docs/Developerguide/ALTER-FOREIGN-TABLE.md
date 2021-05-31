# ALTER FOREIGN TABLE

## 功能描述

用于对外表进行修改。

## 语法格式

    ```
    ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
        OPTIONS ( {[ ADD | SET | DROP ] option ['value']}[, ... ]);
    ```

## 参数说明

-   **table\_name**

    需要修改的外表名称。

    取值范围：已存在的外表名。

-   **option**

    改变外部表或者外部表字段的选项。`ADD`, `SET`, 和`DROP`指定执行的操作。 如果没有显式设置操作，那么默认就是`ADD`。选项的名字不允许重复(尽管表选项和表字段选项可以有相同的名字)。 选项的名称和值也会通过外部数据封装器的类库库进行校验。
    
    oracle_fdw支持的options包括：

    -   **table**

        oracle server侧的表名。需要同oracle系统表中记录的表名完全一致，通常是由大写字符组成。

    - **schema**

        表所对应的schema（或owner）。需要同oracle系统表中记录的表名完全一致，通常是由大写字符组成。

    mysql_fdw支持的options包括：
    
    -   **dbname**

        MySQL的database名称。

    -   **table_name**

        MySQL侧的表名。

    postgres_fdw支持的options包括：
    
    -   **schema_name**

        远端server的schema名称。如果不指定的话，将使用外表自身的schema名称作为远端的schema名称。

    -   **table_name**

        远端server的表名。如果不指定的话，将使用外表自身的表名作为远端的表名。
        
    -   **column_name**

        远端server的表的列名。如果不指定的话，将使用外表自身的列名作为远端的的表的列名。

	file_fdw支持的options包括：
	
	-   **filename**

        指定要读取的文件，必需的参数，且必须是一个绝对路径名。
    
    -   **format**

        远端server的文件格式，支持text/csv/binary/fixed四种格式，和COPY语句的FORMAT选项相同。
        
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

	-   **force_not_null**
		
		这是一个布尔选项。如果为真，则声明字段的值不应该匹配空字符串（也就是， 文件级别null选项）。与COPY的 FORCE_NOT_NULL选项里的字段相同。
		
	file_fdw更多介绍请参考 开发者指南/Foreign Data Wrapper/file_fdw 章节。

-   **value**

    option的新值。


## 相关链接

[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)，[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)