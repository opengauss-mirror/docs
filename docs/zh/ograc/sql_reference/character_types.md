# 字符类型

**表 1**  字符类型

| 名称  | 描述  | 存储空间  |
| :------------ | :------------ | :------------ |
| CHAR(size [BYTE \| CHAR])  | 存储定长字节或者字符串<br>1. BYTE表示字节（默认）<br>2. CHAR表示字符串  |  1 ~ 8000字节   |
| NCHAR(size)  | 等同于CHAR(size CHAR)，用于存储定长字符串  |  1 ~ 8000字节   |
| NATIONAL CHARACTER(size)  | 等同于CHAR(size CHAR)，用于存储定长字符串，前提需要设置参数use_bison_parser=true  |  1 ~ 8000字节   |
| NATIONAL CHAR(size)  | 等同于CHAR(size CHAR)，用于存储定长字符串，前提需要设置参数use_bison_parser=true  |  1 ~ 8000字节   |
| CLOB/NCLOB/TEXT/LONGTEXT/LONG  | 存储大对象变长字符串  |  0 ~ (4G-1)   |
| VARCHAR/VARCHAR2(size [BYTE \| CHAR])  | 存储变长字节或字符串<br>1. size表示最大能容纳的字节或字符数<br>2. BYTE表示字节（默认）<br>3. CHAR表示字符串  |  1 ~ 8000字节   |
| NVARCHAR/NVARCHAR2(size)  | 等同于VARCHAR(size CHAR)，用于存储变长字符串  |  1 ~ 8000字节   |
| NATIONAL CHARACTER VARYING(size)  | 等同于VARCHAR(size CHAR)，用于存储变长字符串，前提需要设置参数use_bison_parser=true  |  1 ~ 8000字节   |
| NATIONAL CHAR VARYING(size)  | 等同于VARCHAR(size CHAR)，用于存储变长字符串，前提需要设置参数use_bison_parser=true  |  1 ~ 8000字节   |
| NCHAR VARYING(size)  | 等同于VARCHAR(size CHAR)，用于存储变长字符串，前提需要设置参数use_bison_parser=true  |  1 ~ 8000字节   |
| ROWID  | 近似等同于CHAR(18)，用于存储特定格式的字符串，仅由'A'-'Z','a'-'z','0'-'9','/','+'组成  |  18字节   |

>[!NOTE]说明
>
>- 当前支持UTF-8和GBK字符集。UTF-8字符集中汉字和全角字符占2~6个字节，数字、英文字符等都是一个字节；GBK字符集中汉字和全角字符占2个字节，数字、英文字符等都是一个字节。
>- 当前支持N开头的字面量使用方法，例如`select N'1234'`，前提需要设置参数use_bison_parser=true。

- ROWID

    合法的rowid数据类型由18个字符组成，Rowid可以被拆解成4段，从前往后的长度依次是6,3,6,3，名字依次简写表示为object,rfile,block,row。
    其中每个字符可以理解成一个64进制的数字，其中：
    'A'-'Z' 表示数字从0到25，'a'-z'表示数字从26到51，'0'-'9'表示52到61，'+'表示62，'/'表示63。
    例如有rowid，AAAAA/AA/AAAAA/IAA，
    则object是AAAAA/ ，rfile是AA/，block是AAAAA/，row是IAA
    其中oject,rfile,block就表示数字63，row表示2^15 （001000 000000 000000）。

    获得了rowid各个段的数值，需要检查值是否在范围内，
    其中 0<= object < (2^32) , 0 <= rfile < (2^10) , 0 <= block < (2^22) , 0 <= row < (2^15)
    上面的示例中row是2^15 （I表示数字8，IAA就是8*2^12），无法用15位bit表示（row>=2^15），即是一个非法的row段，也就是非法的rowid格式。

    例外的，由18个字符'A'组成的rowid属于非法值。

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

SQL> create table test_clob(c1 clob, c2 nclob, c3 text, c4 longtext, c5 long);

SQL> insert into test_clob values('abcdefg', 'abcdefg', 'abcdefg', 'abcdefg', 'abcdefg');

SQL> select * from test_clob;

C1                                                               C2                                                               C3                                                               C4                                                               C5                                                              
---------------------------------------------------------------- ---------------------------------------------------------------- ---------------------------------------------------------------- ---------------------------------------------------------------- ----------------------------------------------------------------
abcdefg                                                          abcdefg                                                          abcdefg                                                          abcdefg                                                          abcdefg                                                         

1 rows fetched.

SQL> show create table test_clob;

CREATE TABLE "TEST_CLOB"
(
  "C1" CLOB,
  "C2" CLOB,
  "C3" CLOB,
  "C4" CLOB,
  "C5" CLOB
)
TABLESPACE "SYSTEM"
INITRANS 2
MAXTRANS 255
PCTFREE 8
FORMAT ASF;

SQL> alter system set use_bison_parser = true;

SQL> create table test_char1
(
    c1 national character varying(10),
    c2 national char varying(10),
    c3 nchar varying(10)
);

SQL> show create table test_char1;

CREATE TABLE "TEST_CHAR1"
(
    "C1" VARCHAR(10 CHAR),
    "C2" VARCHAR(10 CHAR),
    "C3" VARCHAR(10 CHAR)
)
TABLESPACE "SYSTEM"
INITRANS 0
MAXTRANS 255
PCTFREE 0
FORMAT ASF;

SQL> create table test_char2
(
    c1 national character,
    c2 national char,
    c3 nchar
);

SQL> show create table test_char2;

CREATE TABLE "TEST_CHAR2"
(
    "C1" CHAR(1 CHAR),
    "C2" CHAR(1 CHAR),
    "C3" CHAR(1 CHAR)
)
TABLESPACE "SYSTEM"
INITRANS 0
MAXTRANS 255
PCTFREE 0
FORMAT ASF;

SQL> create table test_char3(
    c1 national character(10),
    c2 national char(10),
    c3 nchar(10)
);

SQL> show create table test_char3;

CREATE TABLE "TEST_CHAR3"
(
    "C1" CHAR(10 CHAR),
    "C2" CHAR(10 CHAR),
    "C3" CHAR(10 CHAR)
)
TABLESPACE "SYSTEM"
INITRANS 0
MAXTRANS 255
PCTFREE 0
FORMAT ASF;

SQL> select n'abcd';

N'ABCD'
-------
abcd   

1 rows fetched.

SQL> select N'abcd';

N'ABCD'
-------
abcd   

1 rows fetched.

SQL> select n'1234';

N'1234'
-------
1234   

1 rows fetched.

SQL> select N'1234';

N'1234'
-------
1234   

1 rows fetched.

SQL> alter system set use_bison_parser = false;
```
