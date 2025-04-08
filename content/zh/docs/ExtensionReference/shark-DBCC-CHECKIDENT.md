# DBCC CHECKIDENT<a name="ZH-CN_TOPIC_0289899950"></a>

## 功能描述<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s8a5c6264f78f49e3aa93f388d68cd3e6"></a>

DBCC CHECKIDENT用于对标识列进行获取或者重置功能。

## 注意事项<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s8cb7444b58764d99913a4cc61f397f9f"></a>

-   对标识列进行获取需要有表的select权限，对标识列执行重置需要有表的update权限。

## 语法格式<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s29888afda1844d6f9fc677f1b59b5b7d"></a>

```
DBCC CHECKIDENT (table_name [ , { NORESEED | { RESEED [ , new_reseed_value ] } } ] ) [ WITH NO_INFOMSGS ]
```


## 示例<a name="zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s51d29fa208274032a4e5308b57638421"></a>

```
openGauss=# CREATE TABLE Employees (EmployeeID serial ,Name VARCHAR(100) NOT NULL);
NOTICE:  CREATE TABLE will create implicit sequence "employees_employeeid_seq" for serial column "employees.employeeid"
CREATE TABLE
openGauss=# insert into Employees(Name) values ('zhangsan');
INSERT 0 1
openGauss=# insert into Employees(Name) values ('lisi');
INSERT 0 1
openGauss=# insert into Employees(Name) values ('wangwu');
INSERT 0 1
openGauss=# insert into Employees(Name) values ('heliu');
INSERT 0 1
openGauss=# DBCC CHECKIDENT ('Employees', NORESEED);
NOTICE:  "Checking identity information: current identity value '4', current column value '4'."
CONTEXT:  referenced column: dbcc_check_ident_no_reseed
                              dbcc_check_ident_no_reseed
--------------------------------------------------------------------------------------
 Checking identity information: current identity value '4', current column value '4'.
(1 row)

openGauss=# DBCC CHECKIDENT ('Employees', RESEED, 10);
NOTICE:  "Checking identity information: current identity value '4'."
CONTEXT:  referenced column: dbcc_check_ident_reseed
                  dbcc_check_ident_reseed
------------------------------------------------------------
 Checking identity information: current identity value '4'.
(1 row)

openGauss=# DBCC CHECKIDENT ('Employees', NORESEED);
NOTICE:  "Checking identity information: current identity value '10', current column value '4'."
CONTEXT:  referenced column: dbcc_check_ident_no_reseed
                              dbcc_check_ident_no_reseed
---------------------------------------------------------------------------------------
 Checking identity information: current identity value '10', current column value '4'.
(1 row)
```
