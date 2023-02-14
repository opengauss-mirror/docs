# Retry管理

Retry是数据库在SQL或存储过程（包含匿名块）执行失败时，在数据库内部进行重新执行的过程，以提高执行成功率和用户体验。数据库内部通过检查发生错误时的错误码及Retry相关配置，决定是否进行重试。

-   失败时回滚之前执行的语句，并重新执行存储过程进行Retry。

    示例：

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
