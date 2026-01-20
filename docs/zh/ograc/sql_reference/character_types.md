# 字符类型

**表 1**  字符类型

| 名称  | 描述  | 存储空间  |
| :------------ | :------------ | :------------ |
| CHAR(size [BYTE \| CHAR])  | 存储定长字节或者字符串<br>1. BYTE表示字节（默认）<br>2. CHAR表示字符串  |  1 ~ 8000字节   |
| NCHAR(size)  | 等同于CHAR(size CHAR)，用于存储定长字符串  |  1 ~ 8000字节   |
| CLOB/TEXT/LONGTEXT/LONG  | 存储大对象变长字符串  |  0 ~ (4G-1)   |
| VARCHAR/VARCHAR2(size [BYTE \| CHAR])  | 存储变长字节或字符串<br>1. size表示最大能容纳的字节或字符数<br>2. BYTE表示字节（默认）<br>3. CHAR表示字符串  |  1 ~ 8000字节   |
| NVARCHAR/NVARCHAR2(size)  | 等同于VARCHAR(size CHAR)，用于存储变长字符串  |  1 ~ 8000字节   |

>[!NOTE]说明
>
>- 当前支持UTF-8和GBK字符集。UTF-8字符集中汉字和全角字符占2~6个字节，数字、英文字符等都是一个字节；GBK字符集中汉字和全角字符占2个字节，数字、英文字符等都是一个字节。

示例：

```
--创建具有定长和边长字符类型数据的表。
SQL> CREATE TABLE char_type_t1 
(
    a CHAR(5),
    b VARCHAR(5),
    c NCHAR(10),
    d CLOB,
    e NVARCHAR2(10)
);

--插入数据。
SQL> INSERT INTO char_type_t1 VALUES ('ok', 'ok', 'abcdef', 'abcdef', 'abcdef');

SQL> INSERT INTO char_type_t1 VALUES ('good', 'good', 'good', 'good', 'good');

SQL> select char_length(a), char_length(b), char_length(c), char_length(d), char_length(e) from char_type_t1;

CHAR_LENGTH(A)       CHAR_LENGTH(B)       CHAR_LENGTH(C)       CHAR_LENGTH(D)       CHAR_LENGTH(F)
-------------------- -------------------- -------------------- -------------------- --------------------
5                    2                    10                   6                    6
5                    4                    10                   4                    4

2 rows fetched.

--插入的数据长度超过类型规定的长度报错。
SQL> INSERT INTO char_type_t1(a, b) VALUES ('too long', 'too long');

CT-00698, The size(8) of value can't larger than defined size(5) of char
--删除表。
SQL> DROP TABLE char_type_t1;
```
