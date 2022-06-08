# Concurrent UPDATE in the Same Table<a name="EN-US_TOPIC_0289899884"></a>

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

