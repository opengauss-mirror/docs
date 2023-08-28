# 字符类型表达式的字符集和字符序<a name="字符类型表达式的字符集和字符序"></a>

每一个字符类型的表达式含有字符集和字符序属性。

在B模式的数据库下，如果将系统参数`b_format_behavior_compat_options`设置含有`enable_multi_charset`选项, 字符串常量的默认字符集与字符序由系统参数`character_set_connection`和`collation_connection`决定。否则，其默认字符集与数据库字符集`server_encoding`相同，其默认字符序为`default`。

## 字符集语法

可以使用以下语法指定字符串常量的字符集和字符序：

```
[_charset_name]'string' [COLLATE collation_name]
```

#### 语法说明：

-   **\_charset\_name**

    下划线字符集的名称，用于定义这个字符串的字符集，不会转换字符串的编码。
    
    此语法仅在B兼容模式的数据库下，且系统参数`b_format_behavior_compat_options`含有`enable_multi_charset`选项时可用。

-   **COLLATE collation\_name**

    指定字符序的名称，用于设置这个字符串的字符序属性。

使用以下方式决定字符串的字符集和字符序：

-   如果同时指定了字符集和字符序，则使用字符集`charset_name`和字符序`collation_name`。`collation_name`必须是`charset_name`允许的字符序。

-   如果指定了字符集但不指定字符序，则使用字符集`charset_name`及其默认字符序。

-   如果不指定字符集但指定了字符序，则使用由`character_set_connection`系统参数设置的字符集和`collation_name`指定的字符序。`collation_name`必须是`character_set_connection`系统参数设置的字符集允许的字符序。

-   如果既不指定字符集但不指定字符序，则使用由参数`character_set_connection`和`collation collation_name`指定的字符集和字符序。

#### 示例：

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

## 字符序语法

其他字符串类型的表达式也可以指定字符序：

```
expression [COLLATE collation_name]
```

#### 语法说明：

-   **COLLATE collation\_name**

    指定字符序的名称，用于设置这个字符串的字符序属性。

    表达式的数据类型只能是支持字符序的数据类型。

    指定的字符序必须是表达式的字符集允许的字符序。

#### 示例：

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
