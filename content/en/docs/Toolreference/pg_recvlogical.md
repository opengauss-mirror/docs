# pg\_recvlogical<a name="EN-US_TOPIC_0000001092048360"></a>

## Function<a name="section143231619112111"></a>

**pg\_recvlogical**  connects to a specified DN to create and delete logical replication slots, obtains the intermediate result of logic decoding from the DN continuously in real time, and outputs the result to a file or in standard mode.

## Syntax<a name="section1763981272214"></a>

```
pg_recvlogical [OPTION]...
```

Logical replication slot behavior parameters are mandatory and must be specified. Other parameters are optional. If you do not specify them, the default values will be read.

## Parameter Description<a name="section927885412229"></a>

-   Logical replication slot behavior parameters \(mandatory\):
    -   --create

        Creates a logical replication slot.

    -   --start

        Starts the flow replication of a logic replication slot.

    -   --drop

        Deletes a logical replication slot.



-   Connection options:
    -   -d, --dbname=DBNAME

        Connects to the target database.

    -   -h, --host=HOSTNAME

        Specifies the name or socket of the connected host.

    -   -p, --port=PORT

        Specifies the HA port number for connecting to the target DN.

    -   -U, --username=NAME

        Specifies the user name for connecting to the target database.

    -   -w, --no-password

        Performs connection without a password.

    -   -W, --password

        Performs connection with a specified password.


-   Replication parameters:
    -   -F  --fsync-interval=INTERVAL

        Specifies an interval for synchronizing data to the target output file.

        The unit is s. The default value is  **10**.

    -   -o, --option=NAME\[=VALUE\]

        Adds parameters to the output plug-in of a logical replication slot.

        The values are  **include-xids**,  **skip-empty-xacts**, and  **include-timestamp**.

        For details, see "SQL Reference \> Functions and Operators \> System Administration Functions \> Logical Replication Functions \> options" in the  _Developer Guide_.

    -   -P, --plugin=PLUGIN

        Specifies the logical replication slot output plug-in.

        The default value is  **mppdb\_decoding**.

    -   -s, --status-interval=INTERVAL

        Specifies an interval for sending heartbeat packets.

        The unit is s. The default value is  **10**.

    -   -S, --slot=SLOT

        Specifies the name of a logical replication slot.

    -   -I, --startpos=PTR

        LSN location of the initial replication when an existing logical replication slot is used


-   Other parameters:
    -   -f, --file=FILE

        Specifies the output file.

        If  **-**  is used, data is output to stdout.

    -   -n, --no-loop

        If this parameter is specified, the system does not retry after the connection fails.

    -   -v, --verbose

        Displays detailed information.

    -   -V, --version

        Displays the version and exits immediately.

    -   -?, --help

        Displays help information and exits immediately.



## Examples<a name="section655133344514"></a>

1.  Create a logical replication slot named  **test\_slot**.

    ```
    pg_recvlogical -d postgres -S test_slot -p 26000 --create
    ```

2.  Enable stream decoding, and use  **stdout**  for output.

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


