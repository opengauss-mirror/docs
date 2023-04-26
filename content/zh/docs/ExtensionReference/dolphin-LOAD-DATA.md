# LOAD DATA<a name="ZH-CN_TOPIC_0289899980"></a>

## 功能描述<a name="zh-cn_topic_0283136676_zh-cn_topic_0237122096_zh-cn_topic_0059778766_s0d743b5d862d4cf1829449f474af6d7z"></a>

通过LOAD DATA命令实现从一个文件拷贝数据到一个表。


## 注意事项<a name="zh-cn_topic_0283136676_zh-cn_topic_0237122096_zh-cn_topic_0059778766_sc996fd2c14664963bae3e1e0ce655461"></a>

-   当参数enable\_copy\_server\_files关闭时，只允许初始用户执行LOAD DATA命令，当参数enable\_copy\_server\_files打开，允许具有SYSADMIN权限的用户或继承了内置角色gs\_role\_copy\_files权限的用户执行，但默认禁止对数据库配置文件、密钥文件、证书文件和审计日志执行，以防止用户越权查看或修改敏感文件。
-   只能用于表，不能用于视图。
-   不支持列存表和外表。
-   需要插入的表的insert权限, replace选项还需要表的delete权限。
-   如果声明了一个字段列表，LOAD将只在文件和表之间拷贝已声明字段的数据。如果表中有任何不在字段列表里的字段，将为那些字段插入缺省值。
-   声明的数据源文件，服务器必须可以访问该文件。
-   如果数据文件的任意行包含比预期多或者少的字段，dolphin.sql_mode为严格模式时将抛出一个错误，宽松模式时缺少的字段将插入NULL,如果字段有NOT NULL约束则会插入类型基础值。
-   \\N为NULL，如果要输入实际数据值\\N ，使用\\\\N。

## 语法格式<a name="zh-cn_topic_0283136676_zh-cn_topic_0237122096_zh-cn_topic_0059778766_s85a73a9ad894403da754c5d6b3d821g2"></a>


```
        LOAD DATA
        INFILE 'file_name'
        [REPLACE | IGNORE]
        INTO TABLE tbl_name
        [CHARACTER SET charset_name]
        [{FIELDS | COLUMNS}
        [TERMINATED BY 'string']
        [[OPTIONALLY] ENCLOSED BY 'char']
        [ESCAPED BY 'char']
        ]
        [LINES
        [STARTING BY 'string']
        [TERMINATED BY 'string']
        ]
        [IGNORE number {LINES | ROWS}]
        [(col_name_or_user_var
        [, col_name_or_user_var] ...)]
```

## 参数说明<a name="zh-cn_topic_0283136676_zh-cn_topic_0237122096_zh-cn_topic_0059778766_sd35c0a2e8c2f4c18837224240e8c4e6a"></a>

-   **REPLACE**

    插入的数据发生主键或唯一键冲突时才会起作用，会先将表中冲突的行进行删除，之后继续插入的数据。

-   **IGNORE**

    插入的数据发生主键或唯一键冲突时才会起作用，会忽略冲突行文件数据，继续插入后续的数据。

-   **tbl\_name**

    表的名称（可以有模式修饰）。

    取值范围：已存在的表名。

-   **col\_name**

    可选的待拷贝字段列表。

    取值范围：如果没有声明字段列表，将使用所有字段。

-   **ESCAPED BY 'char'**

    用来指定逃逸字符，逃逸字符只能指定为单字节字符。

    默认值为双引号。当与ENCLOSED BY值相同时，会被替换为'\\0'。

-   **LINES TERMINATED BY 'string'**

    指定导出数据文件换行符样式。

    取值范围：支持多字符换行符，但换行符不能超过10个字节。常见的换行符，如\\r、\\n、\\r\\n（设成0x0D、0x0A、0x0D0A效果是相同的），其他字符或字符串，如$、\#。
    
    >![](public_sys-resources/icon-note.png) **说明：** 
    >   
    >-   LINES TERMINATED BY参数不能和分隔符、null参数相同。    
    >-   LINES TERMINATED BY参数不能包含：.abcdefghijklmnopqrstuvwxyz0123456789。

-   **CHARACTER SET 'charset\_name'**
    
    指定文件编码格式名称。
    
    取值范围：有效的编码格式。
    
    缺省值：当前编码格式。

-   **\[OPTIONALLY\] ENCLOSED BY 'char'**
    
    指定包裹符，完整包裹符内的数据将被当成一列的参数进行解析，OPTIONALLY没有实际意义。
    
    缺省值：双引号。
    
    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >-   ENCLOSED BY参数不能和分隔符参数相同。
    >-   ENCLOSED BY参数只能是单字节的字符。

-   **FIELDS \| COLUMNS TERMINATED BY 'string'**

    在文件中分隔各个字段的字符串，分隔符最大长度不超过10个字节。

    缺省值：缺省是水平制表符。

-   **IGNORE number \{LINES \| ROWS\}**

    指定数据导出时，跳过数据文件的前 number行。

## 示例<a name="zh-cn_topic_0283136676_zh-cn_topic_0237122096_zh-cn_topic_0059778766_s30bb80bf2fbd4cb3af1ab84e7cb1e0h8"></a>

```

--创建load_t1表。
openGauss=# CREATE TABLE load_t1
(
    SM_SHIP_MODE_SK           INTEGER               NOT NULL,
    SM_SHIP_MODE_ID           CHAR(16)              NOT NULL,
    SM_TYPE                   CHAR(30)                      ,
    SM_CODE                   CHAR(10)                      ,
    SM_CARRIER                CHAR(20)                      ,
    SM_CONTRACT               CHAR(20)
);
--/home/omm/test.csv文件
1,a,b,c,d,e
,a,b,c,d,e
3,\N,a,b,c,d
\N,a,b,c,d,e

--从/home/omm/test.csv文件拷贝数据到表load_t1。
openGauss=# LOAD DATA INFILE '/home/omm/test.csv' INTO TABLE load_t1;

--从/home/omm/test.csv文件拷贝数据到表load_t1，使用参数如下：字段分隔符为'\t' (fields terminated by E'\t') 换行符为'\r' (lines terminated by E'\r') 跳过前两行 (IGNORE 2 LINES)。
openGauss=# LOAD DATA INFILE '/home/omm/test.csv' INTO TABLE load_t1 fields terminated by ',' lines terminated by E'\n' IGNORE 2 LINES;

openGauss=# select * from load_t1;
 sm_ship_mode_sk | sm_ship_mode_id  |            sm_type             |  sm_code   |      sm_carrier      |     sm_contract
-----------------+------------------+--------------------------------+------------+----------------------+----------------------
               3 |                  | a                              | b          | c                    | d
               0 | a                | b                              | c          | d                    | e
(2 rows)

--删除load_t1。
openGauss=# DROP TABLE load_t1;
```

