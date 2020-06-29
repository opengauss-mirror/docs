# ERROR LOG<a name="EN-US_TOPIC_0257867370"></a>

-   **log\_level = INFO**

    Configures the log level of messages issued by the MOT engine and recorded in the Error log of the database server. Valid values are PANIC, ERROR, WARN, INFO, TRACE, DEBUG, DIAG1 and DIAG2.

-   **Log/COMPONENT/LOGGER=LOG\_LEVEL**

    Configures specific loggers using the syntax described below.

    For example, to configure the TRACE log level for the ThreadIdPool logger in system component, use the following syntax –

    ```
    Log/System/ThreadIdPool=TRACE
    ```

    To configure the log level for all loggers under some component, use the following syntax.

    ```
    Log/COMPONENT=LOG_LEVEL
    ```

    For example:

    ```
    Log/System=DEBUG
    ```


