# Concurrent Write Examples<a name="EN-US_TOPIC_0289900799"></a>

This section uses the  **test**  table as an example to describe how to perform concurrent  **INSERT**  and  **DELETE**  in the same table, concurrent  **INSERT**  in the same table, concurrent  **UPDATE**  in the same table, and concurrent import and queries.

```
CREATE TABLE test(id int, name char(50), address varchar(255));
```

## Concurrent INSERT in the Same Table<a name="EN-US_TOPIC_0289899992"></a>

Transaction T1:

```
START TRANSACTION;
INSERT INTO test VALUES(2,'test2','test123');
COMMIT;
```

Transaction T2:

```
START TRANSACTION;
INSERT INTO test VALUES(3,'test3','test123');
COMMIT;
```

Scenario 1: 

T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete,  **INSERT**  of T2 is executed and succeeds. At the  **READ COMMITTED**  and  **REPEATABLE READ**  levels, the  **SELECT**  statement of T1 cannot see data inserted by T2, and a query in T2 cannot see data inserted by T1.

Scenario 2: 

- **READ COMMITTED**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed. In T2, a query executed after  **INSERT**  can see the data inserted by T1.

- **REPEATABLE READ**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed. In T2, a query executed after  **INSERT**  cannot see the data inserted by T1.

## Concurrent INSERT and DELETE in the Same Table<a name="EN-US_TOPIC_0289900226"></a>

Transaction T1:

```
START TRANSACTION;
INSERT INTO test VALUES(1,'test1','test123');
COMMIT;
```

Transaction T2:

```
START TRANSACTION;
DELETE test WHERE NAME='test1';
COMMIT;
```

Scenario 1: 

T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete,  **DELETE**  of T2 is performed. In this case,  **DELETE 0**  is displayed, because T1 is not committed and T2 cannot see the data inserted by T1.

Scenario 2: 

- **READ COMMITTED**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed and  **DELETE**  of T2 is executed. In this case,  **DELETE 1**  is displayed, because T2 can see the data inserted by T1.

- **REPEATABLE READ**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed and  **DELETE**  of T2 is executed. In this case,  **DELETE 0**  is displayed, because the data obtained in queries is consistent in a transaction.

## Concurrent UPDATE in the Same Table<a name="EN-US_TOPIC_0289899884"></a>

Transaction T1:

```
START TRANSACTION;
UPDATE test SET address='test1234' WHERE name='test1';
COMMIT;
```

Transaction T2:

```
START TRANSACTION;
UPDATE test SET address='test1234' WHERE name='test2';
COMMIT;
```

Transaction T3:

```
START TRANSACTION;
UPDATE test SET address='test1234' WHERE name='test1';
COMMIT;
```

Scenario 1: 

T1 is started but not committed. At this time, T2 is started.  **UPDATE**  of T1 and then T2 starts, and both of them succeed. This is because the  **UPDATE**  operations use row-level locks and do not conflict when they update different rows.

Scenario 2: 

T1 is started but not committed. At this time, T3 is started.  **UPDATE**  of T1 and then T3 starts, and  **UPDATE**  of T1 succeeds.  **UPDATE**  of T3 times out. This is because T1 and T3 update the same row and the lock is held by T1 at the time of the update.

## Concurrent Data Import and Queries<a name="EN-US_TOPIC_0289900745"></a>

Transaction T1:

```
START TRANSACTION;
COPY test FROM '...';
COMMIT;
```

Transaction T2:

```
START TRANSACTION;
SELECT * FROM test;
COMMIT;
```

Scenario 1: 

T1 is started but not committed. At this time, T2 is started.  **COPY**  of T1 and then  **SELECT**  of T2 starts, and both of them succeed. In this case, T2 cannot see the data added by  **COPY**  of T1.

Scenario 2: 

- **READ COMMITTED**  level

    T1 is started but not committed. At this time, T2 is started.  **COPY**  of T1 is complete and T1 is committed. In this case, T2 can see the data added by  **COPY**  of T1.

- **REPEATABLE READ**  level

    T1 is started but not committed. At this time, T2 is started.  **COPY**  of T1 is complete and T1 is committed. In this case, T2 cannot see the data added by  **COPY**  of T1.
