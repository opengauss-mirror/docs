# Server Signal Functions<a name="EN-US_TOPIC_0289900291"></a>

Server signal functions send control signals to other server processes. Only the system administrator can use these functions.

-   pg\_cancel\_backend\(pid int\)

    Description: Cancels the current query of a backend.

    Return type: Boolean

    Note:  **pg\_cancel\_backend**  sends a query cancellation \(SIGINT\) signal to the backend process identified by  **pid**. The PID of an active backend process can be found in the  **pid**  column of the  **pg\_stat\_activity**  view, or can be found by listing the database process using  **ps**  on the server. A user with the  **SYSADMIN**  permission, the owner of the database connected to the backend process, the owner of the backend process, or a user who inherits the  **gs\_role\_signal\_backend**  permission of the built-in role has the permission to use this function.

-   pg\_reload\_conf\(\)

    Description: Causes all server processes to reload their configuration files \(restricted to the system administrator\).

    Return type: Boolean

    Note:  **pg\_reload\_conf**  sends a SIGHUP signal to the server. As a result, all server processes reload their configuration files.

-   pg\_rotate\_logfile\(\)

    Description: Rotates the log files of the server \(restricted to the system administrator\).

    Return type: Boolean

    Note:  **pg\_rotate\_logfile**  sends a signal to the log file manager, instructing the manager to immediately switch to a new output file. This function works only when  **redirect\_stderr**  is used for log output. Otherwise, no log file manager subprocess exists.

-   pg\_terminate\_backend\(pid int\)

    Description: Terminates a backend thread.

    Return type: Boolean

    Note: Each of these functions returns  **true**  if they are successful and  **false**  otherwise. A user with the  **SYSADMIN**  permission, the owner of the database connected to the backend process, the owner of the backend process, or a user who inherits the  **gs\_role\_signal\_backend**  permission of the built-in role has the permission to use this function.

    Example:

    ```
    openGauss=# SELECT pid from pg_stat_activity;
           pid       
    -----------------
     140657876268816
    (1 rows)
    
    openGauss=# SELECT pg_terminate_backend(140657876268816);
     pg_terminate_backend 
    ----------------------
     t
    (1 row)
    ```

-   pg\_terminate\_session\(pid int64, sessionid int64\)

    Description: Terminates a backend session.

    Return type: Boolean

    Note: Each of these functions returns  **true**  if they are successful and  **false**  otherwise. A user with the  **SYSADMIN**  permission, the owner of the database connected to the session, the owner of the session, or a user who inherits the  **gs\_role\_signal\_backend**  permission of the built-in role has the permission to use this function. 


