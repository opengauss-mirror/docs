# Concurrent Data Import and Queries<a name="EN-US_TOPIC_0289900745"></a>

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

-   **READ COMMITTED**  level

    T1 is started but not committed. At this time, T2 is started.  **COPY**  of T1 is complete and T1 is committed. In this case, T2 can see the data added by  **COPY**  of T1.

-   **REPEATABLE READ**  level

    T1 is started but not committed. At this time, T2 is started.  **COPY**  of T1 is complete and T1 is committed. In this case, T2 cannot see the data added by  **COPY**  of T1.


