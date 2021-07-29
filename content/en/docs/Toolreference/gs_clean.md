# gs\_clean<a name="EN-US_TOPIC_0000001135963605"></a>

## Background<a name="en-us_topic_0059777935_section1572870103317"></a>

If the database breaks down unexpectedly, residual temporary tables may exist. gs\_clean can be used to clear the residual temporary tables.

## Syntax<a name="en-us_topic_0059777935_s7b94cde89f8940c1957e0a44dd494cb8"></a>

Connect to the primary DN and clear the residual temporary table of the primary DN transaction.

```
gs_clean [OPTION ...] [USERNAME]
```

## Parameter Description<a name="section622320691115"></a>

_OPTION_  is described as follows:

-   -a, --all

    Clears all residual temporary tables in available databases.

-   -h, --host=HOSTADDRESS

    Specifies the IP address of the host where the target DN is located.

    Value range: the IP address of the host where the target DN is located.

    Default value:  **localhost**


-   -p, --port=PORT

    Specifies the port number of the primary DN.

    Value range: port number of the target DN.

    The default value is 5432. If the environment variable  _PGPORT_  of the OS has been set, the value of  _PGPORT_  is used by default.

-   -q, --quiet

    Prints only error information in quiet mode.

-   -r, --rollback

    Rolls back all abnormal transactions.

-   -t, --timeout=SECS

    Specifies the timeout mechanism.

    Default value:  **5s**  Unit: s

-   -U, --username=USERNAME

    Specifies the name of the user for connecting to the database.

    Value range: a valid username in the database

    Default value:  _OS username_

-   -v, --verbose

    Prints detailed restoration information.

-   -V, --version

    Prints version information about  **gs\_clean**.

-   -w, --no-password

    Specifies that no password authentication is required.

-   -W, --password=PASSWORD

    Specifies that password authentication is required.

    Value range: a valid string. The password must meet the complexity requirement.

-   -e, --exclusive

    Cleans temporary tables only.

-   -j, --jobs

    Specifies the number of jobs for cleaning two-phase residual files. 

    Value range: 1–10

    Default value:  **3**

-   -?, --help

    Displays help information.

> ![](public_sys-resources/icon-notice.gif) **CAUTION：**
>
> The openGauss kernel will periodically call gs_clean in the background to clean up temporary tables. The authentication policy of the machine must be set to trust in the pg_hba.conf file, otherwise the execution of gs_clean will fail.