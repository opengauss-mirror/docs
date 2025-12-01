# pscp<a name="EN-US_TOPIC_0000001197541735"></a>

## Basic Function<a name="section1540721571112"></a>

This tool is used to transfer files between database nodes.

## Syntax<a name="section15554112119116"></a>

```
pscp [OPTIONS] 
```

## Parameter Description<a name="section7730228131115"></a>

-   --help

    Displays help information.

-   -H HOSTNAME

    Specifies the host list.

-   -h HOSTFILE

    Specifies the full path of the file to be written into the host list.

-   -t TIMEOUT

    Specifies the connection timeout interval, in seconds. The default value is  **300s**.

-   -p PARALLEL

    Specifies the maximum number of concurrent tasks. The default value is  **256**.

-   -o OUTDIR

    Specifies the full file path of the execution result.

-   -e ERRDIR

    Specifies the full path of the error information output file.

-   -r

    Recursively copies a directory.

-   -v

    Enables the diagnosis message function.

-   -s

    Displays the execution result.

-   -x EXTRA

    Specifies the extra command line parameters.

-   -i

    Displays the output and errors of all nodes.


-   -O OPT

    Specifies the added SCP parameters in offline mode.


