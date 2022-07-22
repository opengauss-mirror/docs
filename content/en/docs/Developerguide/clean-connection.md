# CLEAN CONNECTION<a name="ZH-CN_TOPIC_0000001151746656"></a>

## Function<a name="en-us_topic_0059779060_s1b14773726ac4469a14e509530a7a957"></a>

Clears database connections. You may use this statement to delete a specific user's connections to a specified database.

## Precautions<a name="en-us_topic_0059779060_s8aed237cc11e48bcb20d63f3ed081327"></a>

+ openGauss does not support specified nodes and supports only TO ALL.

+ This function can be used to clear the normal connections that are being used only in force mode.

## Syntax<a name="en-us_topic_0059779060_s24ab1cb591b54a43af5fe6d87cc067a1"></a>

```
CLEAN CONNECTION
      TO { COORDINATOR ( nodename [, ... ] ) | NODE ( nodename [, ... ] )| ALL [ CHECK ] [ FORCE ] }
      [ FOR DATABASE dbname ]
      [ TO USER username ];
```

## Parameters<a name="en-us_topic_0059779060_s5c57cb1e5e8740dcb15254b0ee05e666"></a>

-   **CHECK**

    This parameter can be specified only when the node list is specified as **TO ALL**. Setting this parameter will check whether a database is accessed by other sessions before its connections are cleared. If any sessions are detected before **DROP DATABASE** is executed, an error will be reported and the database will not be deleted.

-   **FORCE**

    This parameter can be specified only when the node list is specified as **TO ALL**. Setting this parameter will send **SIGTERM** signals to all the threads related to the specified **dbname** and **username** and forcibly shut them down.

-   **COORDINATOR \( nodename \[,  ... \] \) | NODE \( nodename \[, ... \] \) | ALL**

    Deletes connections to a specified instance. There are three scenarios:

    -   Deletes connections on a specified CN. openGauss does not support this scenario.
    -   Deletes connections on a specified DN. openGauss does not support this scenario.
    -   Deletes connections on all nodes\(TO ALL\). openGauss supports only this scenario.

-   **dbname**

    Deletes connections to a specified database. If this parameter is not specified, connections to all databases will be deleted.

    Value range: an existing database name

-   **username**

    Deletes connections of a specific user. If this parameter is not specified, connections of all users will be deleted.

    Value range: an existing username


## Examples<a name="en-us_topic_0059779060_s11a931f26ab344c1aab49ebd522ee0ad"></a>

```
--Create user **jack**.
CREATE USER jack PASSWORD 'Bigdata123@';

--Clean the user **jack**'s connections to the postgres database:
CLEAN CONNECTION TO ALL FOR DATABASE template1 TO USER jack;

--Delete all connections of user **jack**.
CLEAN CONNECTION TO ALL TO USER jack;

--Clean all the connections to the **gaussdb** database.
CLEAN CONNECTION TO ALL FORCE FOR DATABASE gaussdb;

--Delete the user **jack**.
DROP USER jack;

```
