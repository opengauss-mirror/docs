# pssh<a name="EN-US_TOPIC_0000001197461637"></a>

## Basic Function<a name="section6557202811106"></a>

This tool is used to execute access between database nodes and send commands to remote nodes.

## Syntax<a name="section39063449108"></a>

```
pssh [OPTIONS] 
```

## Parameter Description<a name="section14185451151019"></a>

-   --help

    Displays help information.

-   -H HOSTNAME

    Specifies the host list.

-   -h HOSTFILE

    Specifies the full path of the file to be written into the host list.

-   -t TIMEOUT

    Specifies the connection timeout interval, in seconds. The default value is  **300s**.

-   -p PARALLEL

    Specifies the maximum number of concurrent tasks. The default value is  **32**.

-   -o OUTDIR

    Specifies the full file path of the execution result.

-   -e ERRDIR

    Specifies the full path of the error information output file.

-   -P

    Specifies the command executed on the online remote host.

-   -s

    Displays the execution result.

-   -x EXTRA

    Specifies the extra command line parameters.

-   -i

    Displays the output and errors of all nodes.


-   -O OPT

    Specifies the added SSH parameters in offline mode.


