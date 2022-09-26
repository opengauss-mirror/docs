# Troubleshooting<a name="EN-US_TOPIC_0000001241064965"></a>

-   If you run the interactive diagnosis command for a slow SQL statement that has not been executed, no diagnosis result is provided.
-   If the exporter metric collection function is not enabled, the slow SQL diagnosis function is not available.
-   After the parameters in the configuration file are reset, you need to restart the service process for the settings to take effect.
-   When the interactive diagnosis function of slow SQL statements is used, the tool obtains necessary data based on the RPC and data collection services. Therefore, if the RPC and data collection services are not started, the diagnosis cannot be performed.
-   When the diagnosis function is used for interactive diagnosis, the tool checks the entered SQL and database. If the entered SQL and database are invalid, the diagnosis cannot be performed.
-   During slow SQL diagnosis, SMALL\_SHARED\_BUFFER needs to collect column information of related tables. Therefore, ensure that the opengauss\_exporter connection user has the permission on the schema to which the table belongs.
