# START TRANSACTION<a name="ZH-CN_TOPIC_0289900916"></a>

## 功能描述<a name="zh-cn_topic_0283137090_zh-cn_topic_0237122192_zh-cn_topic_0059777519_s7c3a854297a0489db05671ba82a741a8"></a>

通过START TRANSACTION启动事务。如果声明了隔离级别、读写模式，那么新事务就使用这些特性，类似执行了[SET TRANSACTION](SET-TRANSACTION.md)。

## 注意事项<a name="zh-cn_topic_0283137090_zh-cn_topic_0237122192_zh-cn_topic_0059777519_s979f52c7c24646079e674d30c683c436"></a>

无。

## 语法格式<a name="zh-cn_topic_0283137090_zh-cn_topic_0237122192_zh-cn_topic_0059777519_s6726d34599a04c99b2d48c6da3e542c5"></a>

格式一：START TRANSACTION格式

```
START TRANSACTION
  [ 
    { 
       ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
       | { READ WRITE | READ ONLY }
     } [, ...] 
  ];
```

格式二：BEGIN格式

```
BEGIN [ WORK | TRANSACTION ]
  [ 
    { 
       ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
       | { READ WRITE | READ ONLY }
      } [, ...] 
  ];
```

## 参数说明<a name="zh-cn_topic_0283137090_zh-cn_topic_0237122192_zh-cn_topic_0059777519_s664d0d0976d247e1a670c733cb6d6304"></a>

-   **WORK | TRANSACTION**

    BEGIN格式中的可选关键字，没有实际作用。

-   **ISOLATION LEVEL**

    指定事务隔离级别，它决定当一个事务中存在其他并发运行事务时它能够看到什么数据。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >在事务中第一个数据修改语句（SELECT, INSERT，DELETE，UPDATE，FETCH，COPY）执行之后，事务隔离级别就不能再次设置。

    取值范围：

    -   READ COMMITTED：读已提交隔离级别，只能读到已经提交的数据，而不会读到未提交的数据。这是缺省值。
    -   REPEATABLE READ： 可重复读隔离级别，仅仅看到事务开始之前提交的数据，它不能看到未提交的数据，以及在事务执行期间由其它并发事务提交的修改。
    -   SERIALIZABLE：openGauss目前功能上不支持此隔离级别，等价于REPEATABLE READ。

-   **READ WRITE | READ ONLY**

    指定事务访问模式（读/写或者只读）。


## 示例<a name="zh-cn_topic_0283137090_zh-cn_topic_0237122192_zh-cn_topic_0059777519_s8c971e0651d14f0a96a3e8c8c3e4c4de"></a>

```
--以默认方式启动事务。
openGauss=# START TRANSACTION;
openGauss=# SELECT * FROM tpcds.reason;
openGauss=# END;

--以默认方式启动事务。
openGauss=# BEGIN;
openGauss=# SELECT * FROM tpcds.reason;
openGauss=# END;

--以隔离级别为READ COMMITTED，读/写方式启动事务。
openGauss=# START TRANSACTION ISOLATION LEVEL READ COMMITTED READ WRITE;
openGauss=# SELECT * FROM tpcds.reason;
openGauss=# COMMIT;
```

## 相关链接<a name="zh-cn_topic_0283137090_zh-cn_topic_0237122192_zh-cn_topic_0059777519_s144c0965b0ba447e9d3a73dd5dac1aad"></a>

[COMMIT | END](COMMIT-END.md)，[ROLLBACK](ROLLBACK.md)，[SET TRANSACTION](SET-TRANSACTION.md)

