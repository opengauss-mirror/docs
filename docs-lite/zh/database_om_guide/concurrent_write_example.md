# 并发写入示例<a name="ZH-CN_TOPIC_0289900799"></a>

本章节以表test为例，分别介绍相同表的INSERT和DELETE并发，相同表的并发INSERT，相同表的并发UPDATE，以及数据导入和查询的并发的执行详情。

```
CREATE TABLE test(id int, name char(50), address varchar(255));
```

## 相同表的INSERT和DELETE并发<a name="ZH-CN_TOPIC_0289900226"></a>

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

- READ COMMITTED级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后，提交事务T1，事务T2再执行DELETE语句时，此时显示DELETE 1，事务T1提交完成后，事务T2可以看到此条数据，可以删除成功。

- REPEATABLE READ级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后，提交事务T1，事务T2再执行DELETE语句时，此时显示DELETE 0，事务T1提交完成后，事务T2依旧看不到事务T1的数据，一个事务中前后查询到的数据是一致的。

## 相同表的并发INSERT<a name="ZH-CN_TOPIC_0289899992"></a>

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

- READ COMMITTED级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后直接提交，事务T2中执行INSERT语句后执行查询语句，可以看到事务T1中插入的数据。

- REPEATABLE READ级别

    开启事务T1，不提交的同时开启事务T2，事务T1执行INSERT完成后直接提交，事务T2中执行INSERT语句后执行查询语句，看不到事务T1中插入的数据。

## 相同表的并发UPDATE<a name="ZH-CN_TOPIC_0289899884"></a>

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

## 数据导入和查询的并发<a name="ZH-CN_TOPIC_0289900745"></a>

事务T1：

```
START TRANSACTION;
COPY test FROM '...';
COMMIT;
```

事务T2：

```
START TRANSACTION;
SELECT * FROM test;
COMMIT;
```

场景1：

开启事务T1，不提交的同时开启事务T2，事务T1开始执行COPY，事务T2开始执行SELECT，事务T1和事务T2都执行成功。事务T2中查询看不到事务T1新COPY进来的数据。

场景2：

- READ COMMITTED级别

    开启事务T1，不提交的同时开启事务T2，事务T1开始执行COPY，然后提交，事务T2查询，可以看到事务T1中COPY的数据。

- REPEATABLE READ级别

    开启事务T1，不提交的同时开启事务T2，事务T1开始执行COPY，然后提交，事务T2 查询，看不到事务T1中COPY的数据。
