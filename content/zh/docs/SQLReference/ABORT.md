# ABORT

## 功能描述<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s35ca23dd889c479da90f14c150c52f4b"></a>

回滚当前事务并且撤销所有当前事务中所做的更改。

作用等同于[ROLLBACK](ROLLBACK.md)，早期SQL有用ABORT，现在推荐使用ROLLBACK。

## 注意事项<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_sa23945b94808484d82b947d70ee28dc6"></a>

在事务外部执行ABORT语句不会影响事务的执行，但是会抛出一个NOTICE信息。

## 语法格式<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s36354f226d754e5bb76ed954add5eea3"></a>

```
ABORT [ WORK | TRANSACTION ] ;
```

## 参数说明<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s740ca09be515490cbbfb36db4e2fb13e"></a>

**WORK | TRANSACTION**

可选关键字，除了增加可读性没有其他任何作用。

## 示例<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_saa47e844dd304bcc8a75123e66d1fa37"></a>

```
--创建表customer_demographics_t1。
openGauss=# CREATE TABLE customer_demographics_t1
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

--插入记录。
openGauss=# INSERT INTO customer_demographics_t1 VALUES(1920801,'M', 'U', 'DOCTOR DEGREE', 200, 'GOOD', 1, 0,0);

--开启事务。
openGauss=# START TRANSACTION;

--更新字段值。
openGauss=# UPDATE customer_demographics_t1 SET cd_education_status= 'Unknown';

--终止事务，上面所执行的更新会被撤销掉。
openGauss=# ABORT; 

--查询数据。
openGauss=# SELECT * FROM customer_demographics_t1 WHERE cd_demo_sk = 1920801;
cd_demo_sk | cd_gender | cd_marital_status | cd_education_status  | cd_purchase_estimate | cd_credit_rating | cd_dep_count | cd_dep_employed_count | cd_dep_college_count 
------------+-----------+-------------------+----------------------+----------------------+------------------+--------------+-----------------------+----------------------
    1920801 | M         | U                 | DOCTOR DEGREE        |                  200 | GOOD             |            1 |                     0 |                    0
(1 row)

--删除表。
openGauss=# DROP TABLE customer_demographics_t1;
```

## 相关链接<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s51afa4e9c2fd4b07b11d4eb49fe546b8"></a>

[SET TRANSACTION](SET-TRANSACTION.md)，[COMMIT | END](COMMIT-END.md)，[ROLLBACK](ROLLBACK.md)

