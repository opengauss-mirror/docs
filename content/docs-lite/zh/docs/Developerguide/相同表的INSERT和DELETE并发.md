# 相同表的INSERT和DELETE并发<a name="ZH-CN_TOPIC_0289900226"></a>

事务T1：

```
START TRANSACTION;
INSERT INTO test VALUES(1,'test1','test123');
COMMIT;
```

事务T2：

```
START TRANSACTION;
DELETE test WHERE NAME='test1';
COMMIT;
```

场景1：

开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后，执行事务T2的DELETE，此时显示DELETE 0，由于事务T1未提交，事务2看不到事务插入的数据；

场景2：

-   READ COMMITTED级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后，提交事务T1，事务T2再执行DELETE语句时，此时显示DELETE 1，事务T1提交完成后，事务T2可以看到此条数据，可以删除成功。

-   REPEATABLE READ级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后，提交事务T1，事务T2再执行DELETE语句时，此时显示DELETE 0，事务T1提交完成后，事务T2依旧看不到事务T1的数据，一个事务中前后查询到的数据是一致的。


