# COMMIT | END<a name="ZH-CN_TOPIC_0289900020"></a>

## 功能描述<a name="zh-cn_topic_0283137519_zh-cn_topic_0237122094_zh-cn_topic_0059779032_sbacb814400404584828c86483f577b12"></a>

通过COMMIT或者END可完成提交事务的功能，即提交事务的所有操作。

## 注意事项<a name="zh-cn_topic_0283137519_zh-cn_topic_0237122094_zh-cn_topic_0059779032_s4f818d02dea3426a8d5d49aa87700b0c"></a>

执行COMMIT这个命令的时候，命令执行者必须是该事务的创建者或系统管理员，且创建和提交操作只能在同一个会话中。

## 语法格式<a name="zh-cn_topic_0283137519_zh-cn_topic_0237122094_zh-cn_topic_0059779032_sdd27e9322013412eab2a6cb5e598b150"></a>

```
{ COMMIT | END } [ WORK | TRANSACTION ] ;
```

## 参数说明<a name="zh-cn_topic_0283137519_zh-cn_topic_0237122094_zh-cn_topic_0059779032_sd6836b044d0a45f3861bf79721a4292b"></a>

-   **COMMIT | END**

    提交当前事务，让所有当前事务的更改为其他事务可见。

-   **WORK | TRANSACTION**

    可选关键字，除了增加可读性没有其他任何作用。


## 示例<a name="zh-cn_topic_0283137519_zh-cn_topic_0237122094_zh-cn_topic_0059779032_s3f09e6158972457085b1ef2184fe2f39"></a>

```
--创建表。
openGauss=# CREATE TABLE tpcds.customer_demographics_t2
(
    CD_DEMO_SK                INTEGER               NOT NULL,
    CD_GENDER                 CHAR(1)                       ,
    CD_MARITAL_STATUS         CHAR(1)                       ,
    CD_EDUCATION_STATUS       CHAR(20)                      ,
    CD_PURCHASE_ESTIMATE      INTEGER                       ,
    CD_CREDIT_RATING          CHAR(10)                      ,
    CD_DEP_COUNT              INTEGER                       ,
    CD_DEP_EMPLOYED_COUNT     INTEGER                       ,
    CD_DEP_COLLEGE_COUNT      INTEGER
)
WITH (ORIENTATION = COLUMN,COMPRESSION=MIDDLE)
;

--开启事务。
openGauss=# START TRANSACTION;

--插入数据。
openGauss=# INSERT INTO tpcds.customer_demographics_t2 VALUES(1,'M', 'U', 'DOCTOR DEGREE', 1200, 'GOOD', 1, 0, 0);
openGauss=# INSERT INTO tpcds.customer_demographics_t2 VALUES(2,'F', 'U', 'MASTER DEGREE', 300, 'BAD', 1, 0, 0);

--提交事务，让所有更改永久化。
openGauss=# COMMIT;

--查询数据。
openGauss=# SELECT * FROM tpcds.customer_demographics_t2;

--删除表tpcds.customer_demographics_t2。
openGauss=# DROP TABLE tpcds.customer_demographics_t2;
```

## 相关链接<a name="zh-cn_topic_0283137519_zh-cn_topic_0237122094_zh-cn_topic_0059779032_s652dd12556d94ac0a003244758ed74e8"></a>

[ROLLBACK](ROLLBACK.md)
