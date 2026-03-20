# 字符类型

**表 1**  字符类型

| 名称  | 描述  | 存储空间  |
| :------------ | :------------ | :------------ |
| CHAR(size [BYTE \| CHAR])  | 存储定长字节或者字符串<br>1. BYTE表示字节（默认）<br>2. CHAR表示字符串  |  1 ~ 8000字节   |
| NCHAR(size)  | 等同于CHAR(size CHAR)，用于存储定长字符串  |  1 ~ 8000字节   |
| CLOB/TEXT/LONGTEXT/LONG  | 存储大对象变长字符串  |  0 ~ (4G-1)   |
| VARCHAR/VARCHAR2(size [BYTE \| CHAR])  | 存储变长字节或字符串<br>1. size表示最大能容纳的字节或字符数<br>2. BYTE表示字节（默认）<br>3. CHAR表示字符串  |  1 ~ 8000字节   |
| NVARCHAR/NVARCHAR2(size)  | 等同于VARCHAR(size CHAR)，用于存储变长字符串  |  1 ~ 8000字节   |
| ROWID  | 近似等同于CHAR(18)，用于存储特定格式的字符串，仅由'A'-'Z','a'-'z','0'-'9','/','+'组成  |  18字节   |

>[!NOTE]说明
>
>- 当前支持UTF-8和GBK字符集。UTF-8字符集中汉字和全角字符占2~6个字节，数字、英文字符等都是一个字节；GBK字符集中汉字和全角字符占2个字节，数字、英文字符等都是一个字节。

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
```
