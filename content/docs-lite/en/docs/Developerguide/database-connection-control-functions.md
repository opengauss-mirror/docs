# Database Connection Control Functions<a name="EN-US_TOPIC_0289900142"></a>

Database connection control functions control the connections to database servers. An application can connect to multiple servers at a time. For example, a client connects to multiple databases. Each connection is represented by a PGconn object, which is obtained from the function PQconnectdb, PQconnectdbParams, or PQsetdbLogin. Note that these functions will always return a non-null object pointer, unless there is too little memory to allocate the PGconn object. The interface for establishing a connection is stored in the PGconn object. The PQstatus function can be called to check the return value for a successful connection.

-   **[PQconnectdbParams](pqconnectdbparams.md)**  

-   **[PQconnectdb](pqconnectdb.md)**  

-   **[PQconninfoParse](pqconninfoparse.md)**  

-   **[PQconnectStart](pqconnectstart.md)**  

-   **[PQerrorMessage](pqerrormessage.md)**  

-   **[PQsetdbLogin](pqsetdblogin.md)**  

-   **[PQfinish](pqfinish.md)**  

-   **[PQreset](pqreset.md)**  

-   **[PQstatus](pqstatus.md)**  


