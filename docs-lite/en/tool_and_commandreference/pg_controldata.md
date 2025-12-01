# pg\_controldata<a name="EN-US_TOPIC_0294748993"></a>

## Function<a name="section125419154813"></a>

The  **pg\_controldata**  tool is used to display information about control files in the database directory.

## Prerequisites<a name="section14602518109"></a>

Ensure that the data directory is correct and the  **pg\_control**  file exists in the corresponding data directory.

## Syntax<a name="section554725769"></a>

-   Check the control file information.

    ```
    pg_controldata [DATADIR]
    ```

-   Display version number.

    ```
    pg_controldata -V | --version
    ```

-   Display help information.

    ```
    pg_controldata 
    -? | --help
    ```


## Parameter Description<a name="section187851955142614"></a>

-   DATADIR

    Parameter used for viewing the control file information.  **DATADIR**  indicates the database directory corresponding to the instance.

-   -V, --version

    Displays version information.

-   -?,--help

    Displays help information.


