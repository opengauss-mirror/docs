# JDBC Package and Driver Class<a name="EN-US_TOPIC_0241704270"></a>

## JDBC Package<a name="en-us_topic_0241234246_en-us_topic_0059778950_s9694406852de4db0afcc99b19079f446"></a>

Run  **build.sh**  in the source code directory on Linux OS to obtain the driver JAR package  **postgresql.jar**, which is stored in the source code directory. Obtain the package from the release package named  **openGauss-**_x.x.x-OS version number_**-64bit-Jdbc.tar.gz**.

The driver package is compatible with PostgreSQL. The class name and structure in the driver are the same as those in the PostgreSQL driver. All applications running on PostgreSQL can be smoothly migrated to the current system.

## Driver Class<a name="en-us_topic_0241234246_en-us_topic_0059778950_s103697559c8d4cb68f396e18e3ae65a9"></a>

Before establishing a database connection, load the  **org.postgresql.Driver**  database driver class.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>openGauss is compatible with PostgreSQL in the use of JDBC. Therefore, when two JDBC drivers are used in the same process, class names may conflict.  

