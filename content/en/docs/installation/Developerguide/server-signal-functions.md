# Server Signal Functions<a name="EN-US_TOPIC_0242370455"></a>

Server signaling functions send control signals to other server processes. Only system administrators can use these functions.

-   pg\_cancel\_backend\(pid int\)

    Description: Cancels the current query of a backend.

    Return type: Boolean

    Note:  **pg\_cancel\_backend**  sends a query cancellation \(SIGINT\) signal to the backend process identified by  **pid**. The PID of an active backend process can be found in the  **pid**  column of the  **pg\_stat\_activity**  view, or can be found by listing the database process using  **ps**  on the server.

-   pg\_reload\_conf\(\)

    Description: Causes all server processes to reload their configuration files.

    Return type: Boolean

    Note:  **pg\_reload\_conf**  sends a SIGHUP signal to the server. As a result, all server processes reload their configuration files.

-   pg\_rotate\_logfile\(\)

    Description: Rotates the log files of the server.

    Return type: Boolean

    Note:  **pg\_rotate\_logfile**  sends a signal to the log file manager, instructing the manager to immediately switch to a new output file. This function works only when  **redirect\_stderr**  is used for log output. Otherwise, no log file manager subprocess exists.

-   pg\_terminate\_backend\(pid int\)

    Description: Terminates a backend thread.

    Return type: Boolean

    Note: Each of these functions returns  **true**  if they are successful and  **false**  otherwise.

    For example:

    ```
    postgres=# SELECT pid from pg_stat_activity;
           pid       
    -----------------
     140657876268816
    (1 rows)
    
    postgres=# SELECT pg_terminate_backend(140657876268816);
     pg_terminate_backend 
    ----------------------
     t
    (1 row)
    ```


