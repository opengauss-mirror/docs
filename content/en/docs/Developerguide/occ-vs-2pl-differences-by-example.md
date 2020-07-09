# OCC vs 2PL Differences by Example<a name="EN-US_TOPIC_0260488155"></a>

The following shows the differences between two different user experiences – Pessimistic \(such as disk-based tables\) and Optimistic \(MOT tables\) when sessions update the same table simultaneously.

In this example, the following table test command is run

```
table “TEST” – create  table test (x int, y int, z int, primary key(x));
```

This example describes two aspects of the test, user experience \(operations in the example\) and retry requirement.

-   **[Pessimistic Approach – Used in Disk-based Tables](pessimistic-approach-used-in-disk-based-tables.md)**  

-   **[Optimistic Approach – Used in MOT](optimistic-approach-used-in-mot.md)**  


