# pg\_controldata<a name="EN-US_TOPIC_0249632253"></a>

## Function<a name="en-us_topic_0237152440_section125419154813"></a>

The  **pg\_controldata**  tool is used to display information about control files in the database directory.

## Prerequisites<a name="en-us_topic_0237152440_section14602518109"></a>

Ensure that the data directory is correct and the  **pg\_control**  file exists in the corresponding data directory.

## Syntax<a name="en-us_topic_0237152440_section554725769"></a>

-   Check the control file information.

    ```
    pg_controldata [DATADIR]
    ```

-   Display the version number.

    ```
    pg_controldata -V | --version
    ```

-   Display help information.

    ```
    pg_controldata -? | --help
    ```


## Parameter Description<a name="en-us_topic_0237152440_section187851955142614"></a>

-   DATADIR

    Parameter used for viewing the control file information.  **DATADIR**  indicates the database directory corresponding to the instance.

-   -V, --version

    Displays version information.

-   -?,--help

    Displays help information.


