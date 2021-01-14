# CREATE DATABASE<a name="ZH-CN_TOPIC_0289900066"></a>

## 功能描述<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

创建一个新的数据库。缺省情况下新数据库将通过复制标准系统数据库template0来创建，且仅支持使用template0来创建。

## 注意事项<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   只有拥有CREATEDB权限的用户才可以创建新数据库，系统管理员默认拥有此权限。
-   不能在事务块中执行创建数据库语句。
-   在创建数据库过程中，出现类似“Permission denied”的错误提示，可能是由于文件系统上数据目录的权限不足。出现类似“No space left on device”的错误提示，可能是由于磁盘满引起的。

## 语法格式<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE database_name
    [ [ WITH ] { [ OWNER [=] user_name ] |
               [ TEMPLATE [=] template ] |
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |
               [ DBCOMPATIBILITY [=] compatibilty_type ] |
               [ TABLESPACE [=] tablespace_name ] |
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];
```

## 参数说明<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

-   **database\_name**

    数据库名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **OWNER \[ = \] user\_name**

    数据库所有者。缺省时，新数据库的所有者是当前用户。

    取值范围：已存在的用户名。

-   **TEMPLATE \[ = \] template**

    模板名。即从哪个模板创建新数据库。openGauss采用从模板数据库复制的方式来创建新的数据库。初始时，openGauss包含两个模板数据库template0、template1，以及一个默认的用户数据库postgres。

    取值范围：仅template0。

-   **ENCODING \[ = \] encoding**

    指定数据库使用的字符编码，可以是字符串（如'SQL\_ASCII'）、整数编号。

    不指定时，默认使用模版数据库的编码。模板数据库template0和template1的编码默认与操作系统环境相关。template1不允许修改字符编码，因此若要变更编码，请使用template0创建数据库。

    常用取值：GBK、UTF8、Latin1。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   指定新的数据库字符集编码必须与所选择的本地环境中（LC\_COLLATE和LC\_CTYPE）的设置兼容。
    >-   当指定的字符编码集为GBK时，部分中文生僻字无法直接作为对象名。这是因为GBK第二个字节的编码范围在0x40-0x7E之间时，字节编码与ASCII字符@A-Z\[\\\]^\_\`a-z\{|\}重叠。其中@\[\\\]^\_'\{|\}是数据库中的操作符，直接作为对象名时，会语法报错。例如“侤”字，GBK16进制编码为0x8240，第二个字节为0x40，与ASCII“@”符号编码相同，因此无法直接作为对象名使用。如果确实要使用，可以在创建和访问对象时，通过增加双引号来规避这个问题。

-   **LC\_COLLATE \[ = \] lc\_collate**

    指定新数据库使用的字符集。例如，通过lc\_collate = 'zh\_CN.gbk'设定该参数。

    该参数的使用会影响到对字符串的排序顺序（如使用ORDER BY执行，以及在文本列上使用索引的顺序）。默认是使用模板数据库的排序顺序。

    取值范围：有效的排序类型。

-   **LC\_CTYPE \[ = \] lc\_ctype**

    指定新数据库使用的字符分类。例如，通过lc\_ctype = 'zh\_CN.gbk'设定该参数。该参数的使用会影响到字符的分类，如大写、小写和数字。默认是使用模板数据库的字符分类。

    取值范围：有效的字符分类。

-   **DBCOMPATIBILITY \[ = \] compatibilty\_type**

    指定兼容的数据库的类型。

    取值范围：A、B、C、PG。分别表示兼容O、MY、TD和POSTGRES。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   A兼容性下，数据库将空字符串作为NULL处理，数据类型DATE会被替换为TIMESTAMP\(0\) WITHOUT TIME ZONE。
    >-   将字符串转换成整数类型时，如果输入不合法，B兼容性会将输入转换为0，而其它兼容性则会报错。
    >-   PG兼容性下，CHAR和VARCHAR以字符为计数单位，其它兼容性以字节为计数单位。例如，对于UTF-8字符集，CHAR\(3\)在PG兼容性下能存放3个中文字符，而在其它兼容性下只能存放1个中文字符。

-   **TABLESPACE \[ = \] tablespace\_name**

    指定数据库对应的表空间。

    取值范围：已存在表空间名。

-   **CONNECTION LIMIT \[ = \] connlimit**

    数据库可以接受的并发连接数。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   系统管理员不受此参数的限制。
    >-   connlimit数据库主节点单独统计，openGauss整体的连接数 = connlimit \* 当前正常数据库主节点个数。

    取值范围：\>=-1的整数。默认值为-1，表示没有限制。


有关字符编码的一些限制：

-   若区域设置为C（或POSIX），则允许所有的编码类型，但是对于其他的区域设置，字符编码必须和区域设置相同。
-   编码和区域设置必须匹配模板数据库，除了将template0当作模板。 因为其他数据库可能会包含不匹配指定编码的数据，或者可能包含排序顺序受LC\_COLLATE和LC\_CTYPE影响的索引。复制这些数据会导致在新数据库中的索引失效。template0是不包含任何会受到影响的数据或者索引。

## 示例<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
--创建jim和tom用户。
postgres=# CREATE USER jim PASSWORD 'Bigdata@123';
postgres=# CREATE USER tom PASSWORD 'Bigdata@123';

--创建一个GBK编码的数据库music（本地环境的编码格式必须也为GBK）。
postgres=# CREATE DATABASE music ENCODING 'GBK' template = template0;

--创建数据库music2，并指定所有者为jim。
postgres=# CREATE DATABASE music2 OWNER jim;

--用模板template0创建数据库music3，并指定所有者为jim。
postgres=# CREATE DATABASE music3 OWNER jim TEMPLATE template0;

--设置music数据库的连接数为10。
postgres=# ALTER DATABASE music CONNECTION LIMIT= 10;

--将music名称改为music4。
postgres=# ALTER DATABASE music RENAME TO music4;

--将数据库music2的所属者改为tom。
postgres=# ALTER DATABASE music2 OWNER TO tom;

--设置music3的表空间为PG_DEFAULT。
postgres=# ALTER DATABASE music3 SET TABLESPACE PG_DEFAULT;

--关闭在数据库music3上缺省的索引扫描。
postgres=# ALTER DATABASE music3 SET enable_indexscan TO off;

--重置enable_indexscan参数。
postgres=# ALTER DATABASE music3 RESET enable_indexscan;

--删除数据库。
postgres=# DROP DATABASE music2;
postgres=# DROP DATABASE music3;
postgres=# DROP DATABASE music4;

--删除jim和tom用户。
postgres=# DROP USER jim;
postgres=# DROP USER tom;

--创建兼容TD格式的数据库。
postgres=# CREATE DATABASE td_compatible_db DBCOMPATIBILITY 'C';

--创建兼容A格式的数据库。
postgres=# CREATE DATABASE ora_compatible_db DBCOMPATIBILITY 'A';

--删除兼容TD、A格式的数据库。
postgres=# DROP DATABASE td_compatible_db;
postgres=# DROP DATABASE ora_compatible_db;
```

## 相关链接<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER DATABASE](zh-cn_topic_0289900461.md)，[DROP DATABASE](zh-cn_topic_0289900003.md)

## 优化建议<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_section8189694144220"></a>

-   **create database**

    事务中不支持创建database。


-   **ENCODING   LC\_COLLATE     LC\_CTYPE**

    当新建数据库Encoding、LC-Collate 或LC\_Ctype与模板数据库（SQL\_ASCII）不匹配（为'GBK' /'UTF8'/'LATIN1'）时，必须指定template \[=\] template0。


