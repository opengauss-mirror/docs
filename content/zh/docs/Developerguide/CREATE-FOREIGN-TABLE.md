# CREATE FOREIGN TABLE<a name="ZH-CN_TOPIC_0289900252"></a>

## 功能描述<a name="zh-cn_topic_0283137606_section03743713018"></a>

创建外表。

## 注意事项<a name="zh-cn_topic_0283137606_section1614655042716"></a>

外表中暂不支持使用系统列（如tableoid、ctid等），其中Private和Shares模式的外表，需要初始用户和运维模式下（operation_mode）的运维管理员权限。

## 语法格式<a name="zh-cn_topic_0283137606_section0692184823016"></a>

```
CREATE FOREIGN TABLE [ IF NOT EXISTS  ] table_name ( {
    column_name type_name POSITION ( offset, length ) [column_constraint ]
        | LIKE source_table | table_constraint } [, ...] )
        SEVER gsmpp_server
        OPTIONS (  { option_name ' value '  }  [, ...] )
        [ { WRITE ONLY  |  READ ONLY  }]
        [ WITH error_table_name | LOG INTO error_table_name ]
        [ REMOTE LOG 'name' ]
        [PER NODE REJECT LIMIT 'value']
        [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ];
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name ( {
    column_name type_name
    [ { [CONSTRAINT constraint_name] NULL |
    [CONSTRAINT constraint_name] NOT NULL |
        column_constraint [...]} ] |
        table_constraint} [, ...] )
        SERVER server_name
        OPTIONS ( { option_name ' value ' } [, ...] )
        DISTRIBUTE BY {ROUNDROBIN | REPLICATION}
        [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ]
        [ PARTITION BY ( column_name ) [AUTOMAPPED]] ;
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name ( [ {
    column_name type_name | LIKE source_table } [, ...] ] )
        SERVER server_name
        OPTIONS ( { option_name ' value ' } [, ...] )
        [ READ ONLY ]
        [ DISTRIBUTE BY {ROUNDROBIN} ]
        [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ];

这里 column_constraint 可以是:
[ CONSTRAINT constraint_name ]
{ PRIMARY KEY | UNIQUE }
[ NOT ENFORCED [ ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION ] | ENFORCED ]
where table_constraint can be:
[ CONSTRAINT constraint_name ]
{ PRIMARY KEY | UNIQUE } ( column_name )
[ NOT ENFORCED [ ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION ] | ENFORCED ]

```

## 参数说明<a name="zh-cn_topic_0283137606_section3468568300"></a>

-   **IF NOT EXISTS**

    如果已经存在相同名称的表，不会抛出一个错误，而会发出一个通知，告知表关系已存在。

-   **table\_name**

    外表的表名。

    取值范围：字符串，要符合标识符的命名规范。

-   **column\_name**

    外表中的字段名。

    取值范围：字符串，要符合标识符的命名规范。

-   **type\_name**

    字段的数据类型。

-   **SERVER server\_name**

    外表的server名称。默认值为mot\_server。

-   **OPTIONS \( option 'value' \[, ... \] \)**

    选项与新外部表或外部表中的字段有关。允许的选项名称和值，是由每一个外部数据封装器指定的。 也是通过外部数据封装器的验证函数来验证。重复的选项名称是不被允许的\(尽管表选项和表字段选项可以有相同的名字\)。

    -   oracle\_fdw支持的options包括：
        -   **table**

            oracle server侧的表名。需要同oracle系统表中记录的表名完全一致，通常是由大写字符组成。

        -   **schema**

            表所对应的schema（或owner）。需要同oracle系统表中记录的表名完全一致，通常是由大写字符组成。

    -   mysql\_fdw支持的options包括：
        -   **dbname**

            MySQL的database名称。

        -   **table\_name**

            MySQL侧的表名。

    -   postgres\_fdw支持的options包括：
        -   **schema\_name**

            远端server的schema名称。如果不指定的话，将使用外表自身的schema名称作为远端的schema名称。

        -   **table\_name**

            远端server的表名。如果不指定的话，将使用外表自身的表名作为远端的表名。

        -   **column\_name**

            远端server的表的列名。如果不指定的话，将使用外表自身的列名作为远端的的表的列名。

    -   file\_fdw支持的options包括：

        -   filename

            指定要读取的文件，必需的参数，且必须是一个绝对路径名。

        -   format

            远端server的文件格式，支持text/csv/binary/fixed四种格式，和COPY语句的FORMAT选项相同。

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

                这是一个布尔选项。如果为真，则声明字段的值不应该匹配空字符串（也就是，文件级别null选项）。与COPY的 FORCE\_NOT\_NULL选项里的字段相同。


        >![](public_sys-resources/icon-note.png) **说明：**
        >file\_fdw更多使用请参见[file\_fdw](file_fdw.md)。



## 相关链接<a name="zh-cn_topic_0283137606_section10964241319"></a>

[ALTER FOREIGN TABLE](ALTER-FOREIGN-TABLE.md)，[DROP FOREIGN TABLE](DROP-FOREIGN-TABLE.md)
