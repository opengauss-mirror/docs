# 约束

约束子句用于声明约束，新行或者更新的行必须满足这些约束才能成功插入或更新。如果存在违反约束的数据行为，行为会被约束终止。

约束可以在创建表时规定（通过 CREATE TABLE 语句），或者在表创建之后规定（通过 ALTER TABLE 语句）。

约束可以是列级或表级。列级约束仅适用于列，表级约束被应用到整个表。

openGauss中shark插件中的约束如下：

-   本章节只包含shark新增的语法，原openGauss的语法未做删除和修改。原openGauss请参考章节[约束](../SQLReference/约束.md)。
-   IDENTITY: 用于在表中创建一个标识列，仅在D模式下shark插件中生效。

## IDENTITY约束<a name="section11621339171820"></a>

IDENTITY约束语法：IDENTITY [ (seed , increment) ]

参数
seed
加载到表中的第一个行所使用的值。

increment
与前一个加载的行的标识值相加的增量值。

必须同时指定种子和增量，或者二者都不指定。 如果二者都未指定，则取默认值 (1,1)。

IDENTITY 属性可以分配给 tinyint、smallint、int、bigint、decimal(p, 0) 或 numeric(p, 0) 列，每个表只能创建一个标识列。

```
openGauss=# CREATE TABLE book
(
    bookId int NOT NULL PRIMARY KEY IDENTITY,
    bookname NVARCHAR(50),
    author NVARCHAR(50)
);
NOTICE:  CREATE TABLE will create implicit sequence "book_bookid_seq_identity" for serial column "book.bookid"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "book_pkey" for table "book"
CREATE TABLE
```

## 相关链接<a name="section156744489391"></a>

[约束](../SQLReference/约束.md)
