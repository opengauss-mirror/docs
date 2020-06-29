# Slow SQL Diagnosis<a name="EN-US_CONCEPT_0252569387"></a>

Slow SQL diagnosis can be classified into real-time slow SQL diagnosis and historical slow SQL diagnosis.

-   Real-time slow SQL diagnosis can output information about jobs that are being executed in the current system and whose execution time exceeds the threshold based on the execution time threshold provided by users.
-   Historical slow SQL diagnosis records information about all jobs whose execution time exceeds the threshold.

Slow SQL diagnosis provides table-based and file-based query interfaces. You can query the execution plan, start time, end time, query statement, row activity, kernel time, CPU time, execution time, parsing time, compilation time, query rewriting time, plan generation time, network time, and I/O time. All information is anonymized.

Benefits:

-   Real-time slow SQL diagnosis provides an interface for users to manage unfinished jobs. Users can manually stop abnormal jobs that consume too many resources.
-   Historical slow SQL diagnosis provides detailed information required for slow SQL diagnosis. You can diagnose performance problems of specific slow SQL statements offline without reproducing the problem. The table-based and file-based interfaces help users collect statistics on slow SQL indicators and connect to third-party platforms.

