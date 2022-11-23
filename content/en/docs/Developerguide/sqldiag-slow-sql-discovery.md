# SQLdiag: Slow SQL Discovery<a name="EN-US_TOPIC_0289900849"></a>

SQLdiag is a framework for predicting the execution duration of SQL statements in openGauss. The existing prediction technologies are mainly based on model prediction of execution plans. These prediction solutions are applicable only to jobs whose execution plans can be obtained in the OLAP scenarios, and are not useful for quick query such as OLTP or HTAP. Different from the preceding solutions, SQLdiag focuses on the historical SQL statements of databases. Because the execution duration of the database SQL statements in a short time does not vary greatly, SQLdiag can detect instruction sets similar to the entered instructions from the historical data, and predict the SQL statement execution duration based on the SQL vectorization technology and the time series prediction algorithm. This framework has the following benefits:

1.  Execution plans do not require instructions. This has no impact on database performance.
2.  The framework is widely used, unlike many other well-targeted algorithms in the industry, for example, they may applicable only to OLTP or OLAP.
3.  The framework is robust and easy to understand. Users can design their own prediction models by simply modifying the framework.

-   **[Overview](overview-64.md)**  

-   **[Usage Guide](usage-guide-64.md)**  

-   **[Obtaining Help Information](obtaining-help-information-64.md)**  

-   **[Command Reference](command-reference-64.md)**  

-   **[Troubleshooting](troubleshooting-64.md)**  


