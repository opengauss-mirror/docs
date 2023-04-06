# dblink<a name="EN-US_TOPIC_0000001111753952"></a>

dblink is a tool that can connect to other openGauss databases in an openGauss database session. The connection parameters supported by dblink are the same as those supported by libpq. For details, see  [Link Parameters](../Developerguide/link-parameters-libpq.md). By default, openGauss does not compile dblink. The following describes how to compile and use dblink.

## Compiling dblink<a name="section968819125285"></a>

Currently, the source code of dblink is stored in the  [contrib/dblink](https://gitee.com/opengauss/openGauss-server/tree/master/contrib/dblink)  directory. After the openGauss database is compiled and installed, if you need to use the dblink, go to the preceding directory and run the following command to compile and install the dblink:

```
make
make install
```

## Common dblink Functions<a name="section1440011715283"></a>

-   Load the dblink extension.

    ```
    CREATE EXTENSION dblink;
    ```

-   Open a persistent connection to a remote database.

    ```
    SELECT dblink_connect(text connstr);
    ```

-   Close a persistent connection to a remote database.

    ```
    SELECT dblink_disconnect();
    ```

-   Query data in a remote database.

    ```
    SELECT * FROM dblink(text connstr, text sql);
    ```

-   Execute commands in a remote database.

    ```
    SELECT dblink_exec(text connstr, text sql);
    ```

-   Return the names of all opened dblinks.

    ```
    SELECT dblink_get_connections();
    ```

-   Send an asynchronous query to a remote database.

    ```
    SELECT dblink_send_query(text connname, text sql);
    ```

-   Check whether the connection is busy with an asynchronous query.

    ```
    SELECT dblink_is_busy(text connname);
    ```

-   Delete the extension.

    ```
    DROP EXTENSION dblink;
    ```


## Precautions<a name="section1910642310280"></a>

-   Currently, dblink allows only the openGauss database to access another openGauss database and does not allow the openGauss database to access a PostgreSQL database.
-   Currently, dblink does not support the thread pool mode.

