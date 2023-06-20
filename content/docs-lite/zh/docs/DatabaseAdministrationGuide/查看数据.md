# 查看数据<a name="ZH-CN_TOPIC_0289900707"></a>

-   使用系统表pg\_tables查询数据库所有表的信息。

    ```
    openGauss=# SELECT * FROM pg_tables;
    ```

-   使用gsql的\\d+命令查询表的属性。

    ```
    openGauss=# \d+ customer_t1;
    ```

-   执行如下命令查询表customer\_t1的数据量。

    ```
    openGauss=# SELECT count(*) FROM customer_t1;
    ```

-   执行如下命令查询表customer\_t1的所有数据。

    ```
    openGauss=# SELECT * FROM customer_t1;
    ```

-   执行如下命令只查询字段c\_customer\_sk的数据。

    ```
    openGauss=# SELECT c_customer_sk FROM customer_t1;
    ```

-   执行如下命令过滤字段c\_customer\_sk的重复数据。

    ```
    openGauss=# SELECT DISTINCT( c_customer_sk ) FROM customer_t1;
    ```

-   执行如下命令查询字段c\_customer\_sk为3869的所有数据。

    ```
    openGauss=# SELECT * FROM customer_t1 WHERE c_customer_sk = 3869;
    ```

-   执行如下命令按照字段c\_customer\_sk进行排序。

    ```
    openGauss=# SELECT * FROM customer_t1 ORDER BY c_customer_sk;
    ```


