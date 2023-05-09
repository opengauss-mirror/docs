# 相同表的并发INSERT

事务T1：

```
START TRANSACTION;
INSERT INTO test VALUES(2,'test2','test123');
COMMIT;
```

事务T2：

```
START TRANSACTION;
INSERT INTO test VALUES(3,'test3','test123');
COMMIT;
```

场景1：

开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后，执行事务T2的INSERT语句，可以执行成功，读已提交和可重复读隔离级别下，此时在事务T1中执行SELECT语句，看不到事务T2中插入的数据，事务T2中执行查询语句看不到事务T1中插入的数据。

场景2：

-   READ COMMITTED级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后直接提交，事务T2中执行INSERT语句后执行查询语句，可以看到事务T1中插入的数据。

-   REPEATABLE READ级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后直接提交，事务T2中执行INSERT语句后执行查询语句，看不到事务T1中插入的数据。


