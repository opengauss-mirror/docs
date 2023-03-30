# Concurrent INSERT in the Same table<a name="EN-US_TOPIC_0289899992"></a>

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

-   **READ COMMITTED**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed. In T2, a query executed after  **INSERT**  can see the data inserted by T1.

-   **REPEATABLE READ**  level

    T1 is started but not committed. At this time, T2 is started. After  **INSERT**  of T1 is complete, T1 is committed. In T2, a query executed after  **INSERT**  cannot see the data inserted by T1.


