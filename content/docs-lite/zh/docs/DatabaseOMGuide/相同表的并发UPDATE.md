# 相同表的并发UPDATE<a name="ZH-CN_TOPIC_0289899884"></a>

事务T1：

```
START TRANSACTION;
UPDATE test SET address='test1234' WHERE name='test1';
COMMIT;
```

事务T2：

```
START TRANSACTION;
UPDATE test SET address='test1234' WHERE name='test2';
COMMIT;
```

事务T3：

```
START TRANSACTION;
UPDATE test SET address='test1234' WHERE name='test1';
COMMIT;
```

场景1：

开启事务T1，不提交的同时开启事务T2，事务T1开始执行UPDATE，事务T2开始执行UPDATE，事务T1和事务T2都执行成功。更新不同行时，更新操作拿的是行级锁，不会发生冲突，两个事务都可以执行成功。

场景2：

开启事务T1，不提交的同时开启事务T3，事务T1开始执行UPDATE，事务T3开始执行UPDATE，事务T1执行成功，事务T3等待超时后会出错。更新相同行时，事务T1未提交时，未释放锁，导致事务T3执行不成功。

