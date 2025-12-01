# Retry管理<a name="ZH-CN_TOPIC_0289900318"></a>

Retry是数据库在SQL或存储过程（包含匿名块）执行失败时，在数据库内部进行重新执行的过程，以提高执行成功率和用户体验。数据库内部通过检查发生错误时的错误码及Retry相关配置，决定是否进行重试。

-   失败时回滚之前执行的语句，并重新执行存储过程进行Retry。

    示例：

    首先要将需要重置的错误码写入到retry配置文件中（gsql同级目录下的retry_errcodes.conf文件），错误码可以通过\set VERBOSITY verbose 后获取:
    
    ```
    openGauss=# \set VERBOSITY verbose
    openGauss=# call retry_basic(1);
    ERROR:  column "b" of relation "t1" does not exist
    SQLSTATE: 42703          ------错误码
    LINE 1: INSERT INTO t1 (b) VALUES (x+1)
                            ^
    QUERY:  INSERT INTO t1 (b) VALUES (x+1)
    CONTEXT:  PL/pgSQL function retry_basic(integer) line 3 at SQL statement
    ```
    
    将错误码写入retry_errcodes.conf配置文件可以参考如下命令，并且写完错误码后需要退出和重新进入gsql生效。
    
    ```
    echo "42703" >> ${GAUSSHOME}/bin/retry_errcodes.conf
    ```
    
    重试失败的sql示例
    
    ```
    openGauss=# create table t1(a int);
    CREATE TABLE
    openGauss=# CREATE OR REPLACE PROCEDURE retry_basic ( IN  x INT)
    openGauss-# AS
    openGauss$# BEGIN
    openGauss$#   INSERT INTO t1 (a) VALUES (x);
    openGauss$#   INSERT INTO t1 (b) VALUES (x+1);
    openGauss$# END;
    openGauss$# /
    CREATE PROCEDURE
    openGauss=#
    openGauss=# \set RETRY
    Retry is on with default retry times: 5.
    openGauss=#
    openGauss=# call retry_basic(1);
    INFO: query retry 1 time(s).
    INFO: query retry 2 time(s).
    INFO: query retry 3 time(s).
    INFO: query retry 4 time(s).
    INFO: query retry 5 time(s).
    ERROR:  column "b" of relation "t1" does not exist
    LINE 1: INSERT INTO t1 (b) VALUES (x+1)
                            ^
    QUERY:  INSERT INTO t1 (b) VALUES (x+1)
    CONTEXT:  PL/pgSQL function retry_basic(integer) line 3 at SQL statement
    openGauss=#
    openGauss=# select * from t1;
     a
    ---
    (0 rows)
    openGauss=#
    openGauss=# \set RETRY
    Retry is off.
    openGauss=#
    
    ```

