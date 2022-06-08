# Features<a name="EN-US_TOPIC_0000001201007180"></a>

## cm\_agent<a name="section1669543664312"></a>

cm\_agent is a database management component deployed on each database host. It is used to start, stop, and monitor database instance processes.

It has the following functions:

-   It starts and stops the instance processes deployed on the local host when the database instance is started or stopped.
-   It monitors the instance status on the local host and sends the status to the CM server.
-   It runs the commands delivered by the CM server after arbitration.

**Command description:**

-   Common options:
    -   -V, --version

        Prints the cm\_agent version information and exits.

    -   -?, -h,--help

        Displays help information about cm\_agent command parameters and exits.


-   Locations where the log information is recorded:
    -   0

        Recorded in specified log files.

    -   1

        Recorded in the  **syslog**  file.

    -   2

        Recorded in specified log files.

    -   3

        Empty file, that is, no log information is recorded.


-   Startup modes:
    -   normal

        Startup in normal mode.

    -   abnormal

        Startup in abnormal mode.



## cm\_server<a name="section132815414420"></a>

cm\_server is a component used for managing database instances and arbitrating instances. It has the following functions:

-   Receives the status of each database instance from cm\_agent on each node.
-   Allows you to query the overall status of the database instances.
-   Monitors instance status changes and delivers arbitration commands.

**Command description:**

-   Common options:
    -   -V, --version

        Prints the cm\_server version information and exits.

    -   -?, -h,--help

        Displays help information about cm\_server command parameters and exits.


-   Locations where the log information is recorded:
    -   0

        Recorded in specified log files.

    -   1

        Recorded in the  **syslog**  file.

    -   2

        Recorded in specified log files.

    -   3

        Empty file, that is, no log information is recorded.



