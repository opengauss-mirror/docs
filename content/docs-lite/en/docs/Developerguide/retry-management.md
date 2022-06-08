# Retry Management<a name="EN-US_TOPIC_0289900318"></a>

Retry is a process in which the database executes a SQL statement or stored procedure \(including anonymous block\) again in the case of execution failure, improving the execution success rate and user experience. The database checks the error code and retry configuration to determine whether to retry.

-   If the execution fails, the system rolls back the executed statements and executes the stored procedure again.

    Example:

    ```
    openGauss=# CREATE OR REPLACE PROCEDURE retry_basic ( IN  x INT) 
    AS  
    BEGIN
    	  INSERT INTO t1 (a) VALUES (x);
    	  INSERT INTO t1 (a) VALUES (x+1);
    END;
    /
    
    openGauss=# CALL retry_basic(1); 
    ```


