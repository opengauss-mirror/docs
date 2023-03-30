# Session Performance Diagnosis<a name="EN-US_TOPIC_0000001152275223"></a>

## Availability<a name="section5314201001"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section1982512281105"></a>

Session performance diagnosis targets session-level performance faults.

## Benefits<a name="section103250353016"></a>

-   Display the latest events that consume the most resources of user sessions.
-   Check the wait events that occupy the most resource-consuming SQL statements.
-   Check the wait events that occupy the most resource-consuming sessions.
-   Check information about the most resource-consuming users.
-   Check the waiting relationship between blocked sessions.

## Description<a name="section518134519015"></a>

The session performance diagnosis function diagnoses performance of all active sessions in the system. As real-time collection of indicators of all active sessions has a greater impact on user load, the session snapshot technology is used to sample indicators of active sessions, and collect statistics on active sessions from the sampling. The statistics reflect the basic information, status, and resources of active sessions from the dimensions of client information, execution start time, execution end time, SQL text, wait events, and current database objects. The active session information collected based on the probability can help users diagnose which sessions consume more CPU and memory resources, which database objects are hot objects, and which SQL statements consume more key event resources in the system. In this way, users can locate faulty sessions, SQL statements, and database designs.

Session sampling data is classified into two levels, as shown in  [Figure 1](#fig197862247217).

1.  The first level is real-time information stored in the memory. The active session information in the latest several minutes is displayed, which has the highest precision.
2.  The second level is the persistent historical information stored in disk files. It displays the historical active session information in a long period of time and is sampled from the memory data. This level is suitable for long-run statistics and analysis.

**Figure  1**  Session performance diagnosis principle<a name="fig197862247217"></a>  
![](figures/session-performance-diagnosis-principle.png "session-performance-diagnosis-principle")

Some application scenarios are as follows:

1.  Check the blocking relationship between sessions.

    ```
    select sessionid, block_sessionid from pg_thread_wait_status;
    ```

2.  Sample information about blocked sessions.

    ```
    select sessionid, block_sessionid from DBE_PERF.local_active_session;
    ```

3.  Display the final blocked session.

    ```
    select sessionid, block_sessionid, final_block_sessionid from DBE_PERF.local_active_session;
    ```

4.  Check the wait event that consumes the most resources.

    ```
    SELECT s.type, s.event, t.count
    FROM dbe_perf.wait_events s, (
    SELECT event, COUNT(*)
    FROM dbe_perf.local_active_session
    WHERE sample_time > now() - 5 / (24 * 60)
    GROUP BY event)t WHERE s.event = t.event ORDER BY count DESC;
    ```

5.  Check the events that consume the most session resources in the last five minutes.

    ```
    SELECT sessionid, start_time, event, count
    FROM (
    SELECT sessionid, start_time, event, COUNT(*)
    FROM dbe_perf.local_active_session
    WHERE sample_time > now() - 5 / (24 * 60)
    GROUP BY sessionid, start_time, event) as t ORDER BY SUM(t.count) OVER (PARTITION BY t. sessionid, start_time)DESC, t.event;
    ```

6.  Check the events that consume the most resources in the last five minutes.

    ```
    SELECT query_id, event, count
    FROM (
    SELECT query_id, event, COUNT(*)
    FROM dbe_perf.local_active_session
    WHERE sample_time > now() - 5 / (24 * 60)
    GROUP BY query_id, event) t ORDER BY SUM(t.count) OVER (PARTITION BY t.query_id ) DESC, t.event DESC;
    ```


## Enhancements<a name="section35315526014"></a>

None.

## Constraints<a name="section1956417145819"></a>

None.

## Dependencies<a name="section15876411599"></a>

None.

