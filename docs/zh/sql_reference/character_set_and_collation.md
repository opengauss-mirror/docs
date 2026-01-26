# 字符集与字符序

字符集(Character Set)是字符的编码规则，字符序(Collation)是字符的排序规则，本章主要对 openGauss B模式和 openGauss D模式（即sql\_compatibility = 'B' 和 'D'）下的字符集、字符序进行介绍，以下介绍的字符集、字符序规则和语法仅在B和D模式下支持。

字符集和字符序存在以下说明：

- 每一个字符集都有一个或多个字符序，其中一个字符序为默认字符序。
- 每一个字符序仅有一个相关联的字符集。
- 相同数据使用不同的字符序排序结果可能会不同。
- 在openGauss中，utf8mb4与utf8为同一字符集。
- 建议表字段和server_encoding选择相同字符集，避免转码带来的性能损耗。

openGauss数据库支持以下功能：

- 支持多种字符集存储字符串。
- 支持使用字符序比较字符串。
- 支持数据库级、模式级、表级、字段级字符集和字符序。
- 支持在同服务器、同数据库、同一个表、同一条SQL语句中混合使用不同字符集和字符序的字符串。

## 支持的字符集<a name="支持的字符集"></a>

openGauss 目前所支持的字符集可以参考 [CREATE DATABASE](create_database.md) 章节中 ENCODING 部分介绍。

其中，部分字符集在B模式下存在默认字符序，如下：

| 字符集   | 说明                             | 默认字符序         |
| ------- | -------------------------------- | ------------------ |
| utf8    | 针对Unicode的可变长度字符编码，字符编码长度1~4字节       | utf8_general_ci    |
| utf8mb4 | 同utf8                           | utf8mb4_general_ci      |
| gb18030 | 国标汉字编码字符集                | gb18030_chinese_ci |
| gb18030-2022 | 国标汉字编码字符集                | gb18030_chinese_ci |
| gbk     | 国标汉字编码扩展字符集             | gbk_chinese_ci     |
| binary  | 二进制伪字符集                    | binary             |

[!NOTE]说明

- 当前模式级、表级和字段级语法仅支持指定为上述字符集。

## 支持的字符序<a name="支持的字符序"></a>

openGauss所有支持的字符序详见[PG\_COLLATION](../database_reference/PG_COLLATION.md)系统表。

还有部分字符序规则仅支持在B和D模式下使用，如下：

| 字符序             | 所属字符集 | 说明                                                  | 空白填充 |
| ------------------ | ---------- | ----------------------------------------------------- | -------- |
| binary             | binary     | 使用二进制排序规则              | 不支持   |
| utf8mb4_general_ci | utf8mb4    | 使用通用排序规则                                      | 支持     |
| utf8mb4_unicode_ci | utf8mb4    | 使用基于 Unicode Collation Algorithm (UCA) 的排序规则 | 支持     |
| utf8mb4_bin        | utf8mb4    | 使用二进制排序规则                                    | 支持     |
| utf8_general_ci    | utf8       | 同utf8mb4_general_ci                                  | 支持     |
| utf8_unicode_ci    | utf8       | 同utf8mb4_unicode_ci                                  | 支持     |
| utf8_bin           | utf8       | 同utf8_bin                                            | 支持     |
| gbk_chinese_ci     | gbk        | 使用中文语言(拼音)排序规则。                          | 支持     |
| gbk_bin            | gbk        | 使用二进制排序规则。                                  | 支持     |
| gb18030_chinese_ci | gb18030    | 使用中文语言(拼音)排序规则。                          | 支持     |
| gb18030_bin        | gb18030    | 使用二进制排序规则。                                  | 支持     |

[!NOTE]说明

- 以上字符序仅在B和D模式下可以使用。
- 字符序名称以与它们相关联的字符集的名称开头，通常后跟一个或多个表示其他字符序特征的后缀，例如: _bin表示二进制排序规则，_ci表示不区分大小写。
- 当字符序支持空白填充属性，则字符串比较时忽略末尾空格，例如 : 'A  ' = 'A'。

## 详细说明

### 客户端连接的字符集和字符序<a name="客户端连接的字符集和字符序"></a>

含有字符集属性的数据在服务端和客户端之间会自动转换编码。服务端接收到客户端发送的SQL语句后，会将其由客户端字符集`client_encoding`向数据库字符集`server_encoding`转换编码。查询结果数据发送到客户端之前也会将数据向客户端字符集`client_encoding`转换编码。

#### 系统参数说明

- `server_encoding`

    创建数据库时指定的字符集，详见 [CREATE DATABASE](create_database.md) 章节。

- `client_encoding`

    客户端的字符集，可以通过`SET NAMES`语句修改，详见 [SET](set.md) 章节。参数说明详见[client_encoding](../database_reference/regions_and_formatting.md#zh-cn_topic_0283136798_zh-cn_topic_0237124733_zh-cn_topic_0059778109_sfd35b29b745f4d5b9544f07b9ef676a6)。

- `character_set_connection`

    SQL语句中未指定字符集的字符串常量的默认字符集，详见[character_set_connection](../database_reference/platform_and_client_compatibility.md#section17186174713491)。

- `collation_connection`

    SQL语句中未指定字符序的字符串常量的默认字符序，详见[collation_connection](../database_reference/platform_and_client_compatibility.md#section17186174713492)。

[!NOTE]说明

- 对于一个非字符类型对象转换为字符类型的表达式，其结果的字符集和字符序为`character_set_connection`和`collation_connection`。
- 字符类型的绑定参数的字符集和字符默认为系统参数`character_set_connection`和`collation_connection`设置的值，绑定参数输入任何值将认作上述字符集。
- 字符数据转换编码的过程中会校验字符的编码，如果不符合，将会抛出异常。

### 数据库级字符集和字符序<a name="数据库级字符集和字符序"></a>

创建一个新的数据库时，可以指定数据库的字符集字符序。

```
CREATE DATABASE [IF NOT EXISTS] database_name
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |;
```

#### 语法说明

- **database_name**

  数据库名称。

  取值范围：字符串，要符合标识符的命名规范。

- **ENCODING \[ = \] encoding**

  指定数据库使用的字符编码，可以是字符串（如'SQL\_ASCII'）、整数编号。

- **LC\_COLLATE \[ = \] lc\_collate**

  指定新数据库使用的字符集。例如，通过lc\_collate = 'zh\_CN.gbk'设定该参数。

  该参数的使用会影响到对字符串的排序顺序（如使用ORDER BY执行，以及在文本列上使用索引的顺序）。默认是使用模板数据库的排序顺序。

  取值范围：操作系统支持的字符集。

- **LC\_CTYPE \[ = \] lc\_ctype**

  指定新数据库使用的字符分类。例如，通过lc\_ctype = 'zh\_CN.gbk'设定该参数。该参数的使用会影响到字符的分类，如大写、小写和数字。默认是使用模板数据库的字符分类。

  取值范围：操作系统支持的字符分类。

[!NOTE]说明

- 数据集级字符集、字符序语法非B模式特有，所有模式均可使用，详细语法参考 [CREATE DATABASE](create_database.md)。
- lc_colalte / lc_ctype 语法不支持指定B模式特有的字符序，参数的取值范围取决于本地环境支持的字符集，可通过 locale -a查看。
- 在加载dolphin插件后，CREATE DATABASE 语法支持指定B模式字符集、字符序，具体语法使用参考 [CREATE DATABASE](../extension_reference/dolphin-CREATE-DATABASE.md)

### 模式级字符集和字符序<a name="模式级字符集和字符序"></a>

创建模式并指定默认字符集和字符序。

```
CREATE SCHEMA schema_name
 [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] 
 [ [DEFAULT] COLLATE [ = ] default_collation ];
```

修改模式的默认字符集、字符序属性。

```
ALTER SCHEMA schema_name 
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ];
```

#### 语法说明

- **schema_name**

  模式名称。

  取值范围：字符串，要符合标识符的命名规范。

- **default_charset**

  指定模式的默认字符集，单独指定时会将模式的默认字符序设置为指定的字符集的默认字符序。

- **default_collation**

  指定模式的默认字符序，单独指定时会将模式的默认字符集设置为指定的字符序对应的字符集。

openGauss通过以下方式选择模式的字符集和字符序：

- 如果同时指定了 `default_charset` 和 `default_collation` ，则使用字符集 `default_charset` 和字符序 `default_collation` ，且 `default_charset` 和 `default_collation` 需要对应，不对应报错。
- 如果仅指定了 `default_charset` ，则使用字符集 `default_charset` 及其默认字符序。
- 如果仅指定了 `default_collation` ，则使用 `default_collation` 字符序和其对应的字符集。
- 如果既不指定 `default_charset` 也不指定 `default_collation` ，则该模式没有默认字符集和默认字符序。

[!NOTE]说明

- openGauss 的 SCHEMA 等价于 MySQL的 SCHEMA / DATABASE；在加载dolphin插件后，openGauss的 SCHEMA / DATABASE 与 MySQL 含义相同，语法参考 [CREATE DATABASE](../extension_reference/dolphin-CREATE-DATABASE.md)。
- `default_charact` 仅支持指定为带有默认字符序的字符集，如果指定的字符集没有默认字符序则报错。
- `default_collation` 仅支持指定为B模式下的字符序，指定其他字符序报错。
- 创建新 SCHEMA 的字符集、字符序与数据库的 server_encoding 不同时需要先设置 `b_format_behavior_compat_options` 参数包含`enable_multi_charset`。

#### 示例

```
-- 仅设置字符集，字符序为字符集的默认字符序
openGauss=# create schema test charset utf8;

-- 仅设置字符序，字符集为字符序关联的字符集
openGauss=# create schema test collate utf8_bin；

-- 同时设置字符集与字符序，字符集和字符序需对应
openGauss=# create schema test charset utf8 collate utf8_bin;

-- 将test的默认字符集修改为utf8mb4，默认字符序修改为utf8mb4_bin。
openGauss=# alter schema test charset utf8mb4 collate utf8mb4_bin;
```

### 表级字符集和字符序<a name="表级字符集和字符序"></a>

设置表的默认字符集和默认字符序。

```
CREATE TABLE table_name (column_list)
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ]
    [ [DEFAULT] COLLATE [ = ] default_collation ]
```

修改表的默认字符集和默认字符序，修改不会影响表中当前已经存在的列。

```
ALTER TABLE table_name
    [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ]
    [ [DEFAULT] COLLATE [ = ] default_collation ]
```

修改表的默认字符集和默认字符序为指定的值，同时将表中的所有字符类型的字段的字符集和字符序设置为指定的值，并将字段里的数据转换为新字符集编码。

```
ALTER TABLE table_name
    CONVERT TO CHARACTER SET | CHARSET charset [ COLLATE collation ]
```

**参数说明**

- **table_name**

  表名称。

- **default_charset**

  指定表的默认字符集，单独指定时会将表的默认字符序设置为指定的字符集的默认字符序。

- **default_collation**

  指定表的默认字符序，单独指定时会将表的默认字符集设置为指定的字符序对应的字符集。

openGauss 通过以下方式选择表的字符集和字符序：

- 如果同时指定了 `default_charset` 和`default_collation` ，则使用字符集 `default_charset` 和字符序 `default_collation` ，且 `default_charset` 和 `default_collation` 需要对应，不对应报错。
- 如果仅指定了 `default_charset` ，则使用字符集 `default_charset` 及其默认字符序。
- 如果仅指定了 `default_collation` ，则使用 `default_collation` 字符序和其对应的字符集。
- 如果既不指定 `default_charset` 也不指定 `default_collation` ，则使用该表所在的模式的默认字符集和默认字符序作为表的默认字符集和表的默认字符序。

[!NOTE]说明

- `default_charact` 仅支持指定为带有默认字符序的字符集，如果指定的字符集没有默认字符序则报错。
- `default_collation` 仅支持指定为B模式下的字符序，指定其他字符序报错。
- 设置表的默认字符集和默认字符序与数据库的server_encoding 不同时需要先设置`b_format_behavior_compat_options`参数包含`enable_multi_charset`。
- 如果表的默认字符序为`binary` ，则表中未指定字符序的文本类型会转换为对应的二进制类型，且字符序设置为`binary`。

#### 示例

```
-- 仅设置字符集，字符序为字符集的默认字符序
openGauss=# create table test(c1 text) charset utf8;

-- 仅设置字符序，字符集为字符序关联的字符集
openGauss=# create table test(c1 text) collate utf8_bin;

-- 同时设置字符集与字符序，字符集和字符序需对应
openGauss=# create table test(c1 text)  charset utf8 collate utf8_bin;

-- 将表中字符类型字段的数据转化为utf8mb4编码，并设置表和字段的字符序为utf8mb4_bin
openGauss=# alter table test convert to charset utf8mb4 collate utf8mb4_bin;

-- 修改表的默认字符集为utf8mb4，默认字符序为utf8mb4_bin
openGauss=# alter table test charset utf8mb4 collate utf8mb4_bin;
```

### 列级字符集和字符序<a name="列级字符集和字符序"></a>

每个字符串类型（即类型为`CHAR` 、`VARCHAR`、 `TEXT`等字符串类型）的列都可以设置列的字符集和列的字符序。

```
CREATE TABLE table_name (
    column_name data_type
 [ CHARACTER SET | CHARSET charset ]
    [ COLLATE collation ]
);
```

#### 语法说明

- **table_name**

  表名称。

- **data_type**

  字段的数据类型，字符串类型支持字符集、字符序语法。

- **CHARACTER SET | CHARSET charset**

  指定表字段的字符集，单独指定时会将字段的字符序设置为指定的字符集的默认字符序。

- **COLLATE collation**

  COLLATE子句指定列的字符序（该列的数据类型必须支持字符序）。如果没有指定，则使用默认的排序规则。

openGauss 通过以下方式选择表字段的字符集和字符序：

- 如果同时指定了 `charset` 和`collation` ，则使用字符集 `charset` 和字符序 `collation` ，且 `charset` 和 `collation` 需要对应，不对应报错。
- 如果仅指定了 `charset` ，则使用字符集 `charset` 及其默认字符序。
- 如果仅指定了 `collation` ，则使用与 `collation` 关联的字符集和指定的字符序。
- 如果既不指定 `charset` 也不指定 `collation` ，则使用表的默认字符集和默认字符序。

[!NOTE]说明

- `default_charact` 仅支持指定为带有默认字符序的字符集，如果指定的字符集没有默认字符序则报错。
- `default_collation` 仅支持指定为B模式下的字符序，指定其他字符序报错。
- 如果表字段为文本类型且指定的字符序为`binary` ，则文本类型会转换为对应的二进制类型，字符序为指定的`binary` 字符序。
- 设置表字段的默认字符集和默认字符序与数据库字符集`server_encoding`不同时需要先设置`b_format_behavior_compat_options`参数包含`enable_multi_charset`。
- 分区表的分区键的字符集必须与数据库字符集相同。

#### 示例

```
-- 仅设置字符集，字符序为字符集的默认字符序
openGauss=# create table test(c1 text charset utf8);

-- 仅设置字符序，字符集为字符序关联的字符集
openGauss=# create table test(c1 text collate utf8_bin);

-- 同时设置字符集与字符序，字符集和字符序需对应
openGauss=# create table test(c1 text charset utf8 collate utf8_bin);
```

### 字符类型表达式的字符集和字符序<a name="字符类型表达式的字符集和字符序"></a>

每一个字符类型的表达式含有字符集和字符序属性。

在B模式的数据库下，如果将系统参数`b_format_behavior_compat_options`设置含有`enable_multi_charset`选项, 字符串常量的默认字符集与字符序由系统参数`character_set_connection`和`collation_connection`决定。否则，其默认字符集与数据库字符集`server_encoding`相同，其默认字符序为`default`。

#### 字符集语法

可以使用以下语法指定字符串常量的字符集和字符序：

```
[_charset_name]'string' [COLLATE collation_name]
```

##### 语法说明

- **\_charset\_name**

    下划线字符集的名称，用于定义这个字符串的字符集，不会转换字符串的编码。
    
    此语法仅在B兼容模式的数据库下，且系统参数`b_format_behavior_compat_options`含有`enable_multi_charset`选项时可用。

- **COLLATE collation\_name**

    指定字符序的名称，用于设置这个字符串的字符序属性。

使用以下方式决定字符串的字符集和字符序：

- 如果同时指定了字符集和字符序，则使用字符集`charset_name`和字符序`collation_name`。`collation_name`必须是`charset_name`允许的字符序。

- 如果指定了字符集但不指定字符序，则使用字符集`charset_name`及其默认字符序。

- 如果不指定字符集但指定了字符序，则使用由`character_set_connection`系统参数设置的字符集和`collation_name`指定的字符序。`collation_name`必须是`character_set_connection`系统参数设置的字符集允许的字符序。

- 如果既不指定字符集但不指定字符序，则使用由参数`character_set_connection`和`collation collation_name`指定的字符集和字符序。

##### 示例

```
openGauss=# SELECT _utf8mb4'abc' COLLATE utf8mb4_general_ci;
```

十六进制或bit字符串，指定了非`binary`字符集，表达式数据类型会作为`text`：

```
openGauss=# SELECT _utf8mb4 X'E9AB98E696AF' COLLATE utf8mb4_general_ci;
openGauss=# SELECT _utf8mb4 B'111010011010101110011000111001101001011010101111' COLLATE utf8mb4_general_ci;
```

十六进制或bit字符串，不指定字符集时，只能指定`binary`字符序：

```
openGauss=# SELECT X'E9AB98E696AF' COLLATE utf8mb4_general_ci;
openGauss=# SELECT B'111010011010101110011000111001101001011010101111' COLLATE utf8mb4_general_ci;
```

如果指定的`charset_name`为`binary`，这个表达式的数据类型会作为`bytea`。对于二进制数据类型，只能指定`binary`字符序：

```
openGauss=# SELECT _binary 'abc' COLLATE binary;
```

#### 字符序语法

其他字符串类型的表达式也可以指定字符序：

```
expression [COLLATE collation_name]
```

##### 语法说明

- **COLLATE collation\_name**

    指定字符序的名称，用于设置这个字符串的字符序属性。

    表达式的数据类型只能是支持字符序的数据类型。

    指定的字符序必须是表达式的字符集允许的字符序。

##### 示例

字符序与字符集不匹配：

```
openGauss=#  SELECT _gbk'abc' COLLATE utf8mb4_bin;
ERROR:  COLLATION "utf8mb4_bin" is not valid for CHARACTER SET "GBK"
```

当表达式需要数据类型转换时，如果转换后的数据类型不含有字符序属性，COLLATE语法将被忽略，不会校验字符集，示例如下：

```
openGauss=#  CREATE TABLE test_collate(fint int);
CREATE TABLE

-- 插入int类型的字段时，表达式向int转换数据类型，COLLATE语法将被忽略
openGauss=#  INSERT INTO test_collate VALUES(_gbk'123' COLLATE utf8mb4_bin);
INSERT 0 1

-- 作为LIMIT表达式时，表达式向int转换数据类型，COLLATE语法将被忽略
openGauss=#  SELECT fint FROM test_collate LIMIT _gbk'123' COLLATE utf8mb4_bin;
 fint
------
  123
(1 row)

-- 显式转换为int数据类型时，COLLATE语法将被忽略
 SELECT (_gbk'123' COLLATE utf8mb4_bin)::int;
 int4
------
  123
(1 row)
```

### 字符集和字符序合并规则

在B兼容模式的数据库下，且系统参数`b_format_behavior_compat_options`含有`enable_multi_charset`选项时，可以将不同字符集字符序的表达式按一定优先级处理，来确定字符串比较运算时的使用的字符序和表达式的字符集。

#### 字符序优先级

不同表达式字符序优先级由高到低排列如下：

- `COLLATE`语法拥有最高优先级。
- 含有字符序冲突的表达式（如：两个不同字符序的字符串拼接表达式）。
- 支持字符序的数据类型的列、用户自定义变量、存储过程参数、CASE表达式等。
- 特定的系统函数（如：version()和opengauss_version()函数表达式）。
- 字符串常量和绑定参数。
- NULL表达式。
- 一个表达式的数据类型不支持字符序，这个表达式拥有最低优先级。

当两个表达式字符序不同时，使用字符序优先级最高的表达式的字符序。

##### 示例

```
openGauss=# CREATE TABLE t_utf8(c1 varchar(16) character set utf8mb4 collate utf8mb4_bin);
openGauss=# INSERT INTO t_utf8 VALUES('STRING');

-- 比较时使用utf8mb4_bin字符序，结果为false。
openGauss=#  SELECT c1 = _utf8mb4'string' AS result FROM t_utf8;
 result
--------
 f
(1 row)

-- 比较时使用utf8mb4_general_ci字符序，结果为true。
openGauss=# SELECT c1 = _utf8mb4'string' COLLATE utf8mb4_general_ci AS result FROM t_utf8;
 result
--------
 t
(1 row)

-- 将绑定参数“$1”的字符序定义为collation_connection。
openGauss=# PREPARE test_collation(text) AS SELECT c1 = $1 AS result FROM t_utf8;

-- 绑定参数字符序与字符串常量同级别，即使传入的表达式含有显式的字符序，比较时仍然采用c1的字符序。值得注意的是，这里传入表达式是GBK字符集，绑定参数定义的字符集为UTF8MB4，在执行之前，'string'会进行一次编码转换。
openGauss=# EXECUTE test_collation(_gbk'string' COLLATE gbk_chinese_ci);
 result
--------
 f
(1 row)

-- CASE表达式与c1列同级别，即使表达式含有显式的字符序，比较时仍然采用c1的字符序，二者不相等，输出“same level”。
openGauss=# SELECT CASE _utf8mb4'string' COLLATE utf8mb4_general_ci WHEN c1 THEN 'different level' ELSE 'same level' END AS result FROM t_utf8;
   result
------------
 same level
(1 row)

-- IN子查询与c1列同级别，即使表达式含有显式的字符序，比较时仍然采用c1的字符序，二者不相等。
openGauss=# SELECT c1 FROM t_utf8 WHERE c1 in (SELECT _utf8mb4'string' COLLATE utf8mb4_general_ci);
 c1
----
(0 rows)
```

当两个相同优先级的表达式字符序不同时，采用以下方式处理：

- 如果两者字符集相同，优先使用后缀为`_bin`的字符序。
- 如果两者字符集相同，优先不使用`default`字符序。
- 如果两者字符集不同，优先使用`binary`字符序。
- 如果两者字符集不同，且一个为Unicode字符集，另一个不为Unicode字符集，非Unicode字符集的表达式需要转码为Unicode字符集，最终使用Unicode字符集的表达式的字符序。
- 如果不符合上述情况，两表达式将被标记为字符序冲突，字符序将被标记为无效。
    - 因`COLLATE`语法指定同字符集不同字符序产生的冲突，将抛出异常。
    - 产生冲突的字符集与数据库字符集`server_encoding`不同时，将抛出异常。
    - 无效字符序如果被用作排序运算时（如：>、<等），将抛出异常。
        - 字符串等值比较时，如果字符序无效，将直接作为二进制比较相等。

###### 示例

```
openGauss=# CREATE TABLE t_multi_charset(
    c_utf8_bin varchar(16) character set utf8mb4 collate utf8mb4_bin,
    c_utf8_uni varchar(16) character set utf8mb4 collate utf8mb4_unicode_ci,
    c_utf8_gen varchar(16) character set utf8mb4 collate utf8mb4_general_ci,
    c_gbk_chi varchar(16) character set gbk collate gbk_chinese_ci);
openGauss=# INSERT INTO t_multi_charset VALUES('STRING', 'String', 'string', 'STRING');

-- 优先使用utf8mb4_bin字符序比较，结果为false。
openGauss=# SELECT c_utf8_bin = c_utf8_uni FROM t_multi_charset;

-- 字符序冲突，进行二进制比较，结果为false。
openGauss=# SELECT c_utf8_uni = c_utf8_gen FROM t_multi_charset;

-- 显式指定的字符序冲突，抛出异常。
openGauss=# SELECT c_utf8_uni COLLATE utf8mb4_unicode_ci = c_utf8_gen COLLATE utf8mb4_general_ci FROM t_multi_charset;

-- 优先使用utf8mb4_general_ci字符序比较，结果为true。
openGauss=# SELECT c_utf8_gen = c_gbk_chi FROM t_multi_charset;
```

[!NOTE]说明

- 只有字符串类型（不包括`"char"`、`name`、`clob`）的对象和表达式的字符集可以不同于数据库的字符集。
- `ARRAY`、`XML`、`JSON`、`TSVECTOR`等数据类型含有文本数据，这些数据类型的对象和表达式中的文本数据的字符集必须是数据库字符集。
- 在字符集和字符序合并规则中，认为 'C'、'POSIX'、'DEFAULT'字符序对应的字符集为server_encoding。
