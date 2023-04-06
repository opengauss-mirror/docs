# Functions for Asynchronous Command Processing<a name="EN-US_TOPIC_0242380581"></a>

The PQexec function is adequate for committing commands in common, synchronous applications. However, it has several defects, which may be important to some users:

-   PQexec waits for the end of the command, but the application may have other work to do \(for example, maintaining a user interface\). In this case, PQexec would not want to be blocked to wait for the response.

-   As the client application is suspended while waiting for the result, it is difficult for the application to determine whether to cancel the ongoing command.

-   PQexec can return only one PGresult structure. If the committed command string contains multiple SQL commands, all the PGresult structures except the last PGresult are discarded by PQexec.

-   PQexec always collects the entire result of the command and caches it in a PGresult. Although this mode simplifies the error handling logic for applications, it is impractical for results that contain multiple rows.


Applications that do not want to be restricted by these limitations can use the following functions that PQexec is built from: PQsendQuery and PQgetResult. The functions PQsendQueryParams, PQsendPrepare, and PQsendQueryPrepared can also be used with PQgetResult.

-   **[PQsendQuery](pqsendquery.md)**  

-   **[PQsendQueryParams](pqsendqueryparams.md)**  

-   **[PQsendPrepare](pqsendprepare.md)**  

-   **[PQsendQueryPrepared](pqsendqueryprepared.md)**  

-   **[PQflush](pqflush.md)**  


