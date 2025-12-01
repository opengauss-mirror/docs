# Loading the Driver<a name="EN-US_TOPIC_0289900851"></a>

Load the database driver before creating a database connection.

You can load the driver in the following ways:

-   Before creating a connection, implicitly load the driver in the code:  **Class.forName\("org.postgresql.Driver"\)**
-   During the JVM startup, transfer the driver as a parameter to the JVM:  **java -Djdbc.drivers=org.postgresql.Driver jdbctest**

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >**jdbctest**  is the name of a test application.


