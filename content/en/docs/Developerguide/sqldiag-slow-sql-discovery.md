# SQLdiag: Slow SQL Discovery<a name="EN-US_TOPIC_0289900849"></a>

SQLdiag is a tool for predicting the execution duration of SQL statements in openGauss. Existing prediction technologies are mainly based on evaluations of the execution plans. This method can only be used in OLAP scenarios where the execution plans can be obtained. They are not very useful for quick simple OLTP or HTAP queries. SQLdiag, in contrast, examines the database SQL statement history and analyzes the performance of these historical statements to predict the performance of new, unknown services. The execution duration of SQL statements in the database does not differ greatly in a short period of time. SQLdiag can detect the statement result set similar to the executed SQL statements from historical data and predict the execution duration of SQL statements based on the SQL vectorization technology through a SQL template or deep learning. This tool has the following advantages:

1.  Execution plans do not require SQL statements. This has no impact on database performance.
2.  SQLdiag is widely used, unlike many other algorithms with limitations in the industry, for example, they are applicable only to OLTP or OLAP.
3.  It is easy to understand the tool. You can train your own prediction model by performing simple operations.

A typical application scenario of this tool is to perform a perspective analysis on a batch of SQL statements to be brought online to identify risks in advance.

-   **[Overview](overview-64.md)** 

-   **[Usage Guide](usage-guide-64.md)** 

-   **[Obtaining Help Information](obtaining-help-information-64.md)** 

-   **[Command Reference](command-reference-64.md)** 

-   **[Troubleshooting](troubleshooting-64.md)** 
