# pg\_recvlogical<a name="ZH-CN_TOPIC_0000001092048360"></a>

## Function<a name="section143231619112111"></a>

**pg\_recvlogical**  connects to a specified node to create and delete logical replication slots, obtains the intermediate result of logic decoding from the node continuously in real time, and outputs the result to a file or in standard mode.

## Syntax<a name="section1763981272214"></a>

```
pg_recvlogical [OPTION]...
```

Logical replication slot behavior parameters are mandatory and must be specified. Other parameters are optional. If you do not specify them, the default values will be read.

## Parameter Description<a name="section927885412229"></a>

### Logical replication slot behavior parameters \(mandatory\):

-   --create

    Creates a logical replication slot.
    The **pg\_create\_logical\_replication\_slot** function is called internally. The user who calls this function must have the **SYSADMIN** or **REPLICATION** permission or inherits the permission of the built-in role **gs\_role\_replication**. This function can be called only on the primary node. For details, see the description of the **pg\_create\_logical\_replication\_slot** function in *SQLReference*.

-   --start

    Starts the flow replication of a logic replication slot.

-   --drop

    Deletes a logical replication slot.



### Connection parameters:

-   -d, --dbname=DBNAME

    Connects to the target database.

-   -h, --host=HOSTNAME

    Specifies the name or socket of the connected host.

-   -p, --port=PORT

    Specifies the HA port number for connecting to the target database node.

-   -U, --username=NAME

    Specifies the user name for connecting to the target database.

-   -w, --no-password

    Performs connection without a password.

-   -W, --password

    Performs connection with a specified password.

### Replication parameters:

-   -F  --fsync-interval=INTERVAL

    Specifies an interval for synchronizing data to the target output file.

    The unit is s. The default value is **10**.

-   -o, --option=NAME\[=VALUE\]

    Adds parameters to the output plug-in of a logical replication slot.

    The value can be  **include-xids**,  **skip-empty-xacts**,  **include-timestamp**,  **only-local**,  **force-binary**,  **white-table-list**,  **standby-connection**,  **parallel-decode-num**,  **decode-style**, or  **sending-batch**.

    For details, see [pg\_logical\_slot\_peek\_changes](../SQLReference/logical-replication-functions.md) and [Example: Logic Replication Code](../Developerguide/example-logic-replication-code.md). 
    Link: https://opengauss.org/en/docs/latest/docs/Developerguide/%E7%A4%BA%E4%BE%8B-%E9%80%BB%E8%BE%91%E5%A4%8D%E5%88%B6%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B.html

-   -P, --plugin=PLUGIN

    Specifies the logical replication slot output plug-in.

    The default value is  **mppdb\_decoding**.

-   -s, --status-interval=INTERVAL

    Specifies an interval for sending heartbeat packets.

    The unit is s. The default value is **10**.

-   -S, --slot=SLOT

    Specifies the name of a logical replication slot.

-   -I, --startpos=PTR

    Specifies the LSN location of the initial replication when an existing logical replication slot is used.

### Other parameters:

-   -f, --file=FILE

    Specifies the output file.

    If  **-**  is used, data is output to stdout.

-   -n, --no-loop

    Specifies that the system does not retry after the connection fails.

-   -v, --verbose

    Displays detailed information.

-   -V, --version

    Displays the version and exits immediately.

-   -?, --help

    Displays help information and exits immediately.
    
-   -r, --raw

    In parallel decoding scenarios, if this parameter is set, the binary format or batch sending result will not be converted to the text format. This parameter is used only by test personnel to measure the parallel decoding performance. After this parameter is set, the decoding result sent in binary mode or in batches are in unreadable format.



## Examples<a name="section655133344514"></a>

1.  Create a logical replication slot named  **test\_slot**.

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --create
    ```

2.  Enable stream decoding and output the result to stdout.

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --start -v -f -
    pg_recvlogical: starting log streaming at 0/0 (slot test_slot)
    pg_recvlogical: initiated streaming
    pg_recvlogical: confirming write up to 0/0, flush to 0/0 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A342E8, flush to 0/2A342E8 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A34320, flush to 0/2A34320 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A34320, flush to 0/2A34320 (slot test_slot)
    BEGIN 16039
    table public.t: INSERT: a[integer]:4 b[integer]:4
    COMMIT 16039
    pg_recvlogical: confirming write up to 0/2A34450, flush to 0/2A34450 (slot test_slot)
    pg_recvlogical: confirming write up to 0/2A34450, flush to 0/2A34450 (slot test_slot)
    ```

3.  Delete the logical replication slot.

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --drop
    ```
