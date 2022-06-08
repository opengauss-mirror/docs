# Concurrent INSERT and DELETE in the Same Table<a name="EN-US_TOPIC_0289900226"></a>

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

-   **READ COMMITTED**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed and  **DELETE**  of T2 is executed. In this case,  **DELETE 1**  is displayed, because T2 can see the data inserted by T1.

-   **REPEATABLE READ**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed and  **DELETE**  of T2 is executed. In this case,  **DELETE 0**  is displayed, because the data obtained in queries is consistent in a transaction.


