# CREATE SUBSCRIPTION<a name="EN-US_TOPIC_0000001243677365"></a>

## Function<a name="section1941212243553"></a>

**CREATE SUBSCRIPTION**  adds a new subscription to the current database. Only the system administrator can create a subscription. The subscription name must be different from that of any existing subscription in the database. A subscription represents a replication connection to a publisher. Therefore, this command not only adds definitions to the local system catalog, but also creates replication slots on the publication side. When the transaction that runs this command is committed, the logical replication thread is started to replicate the newly subscribed data.

## Precautions<a name="section099312125612"></a>

When a replication slot is created \(default behavior\),  **CREATE SUBSCRIPTION**  cannot be executed in a transaction block. Currently, a maximum of 65,534 subscriptions \(including enabled and disabled subscriptions\) are supported.

## Syntax<a name="section12778143645515"></a>

```
CREATE SUBSCRIPTION subscription_name
    CONNECTION 'conninfo'
    PUBLICATION publication_name [, ...]
    [ WITH ( subscription_parameter [= value] [, ... ] ) ]
```

## Parameter Description<a name="section9224164695517"></a>

-   **subscription\_name**

    Specifies the name of a new subscription.

-   **CONNECTION 'conninfo'**

    Specifies the character string for connecting to the publication side.

    For example,  **'host=1.1.1.1,2.2.2.2 port=10000,20000 dbname=postgres user=repusr1 password=password\_123'**.

    For details about the fields in the character string, see  [Link Parameters](en-us_topic_0289900649.md). The following table lists the common link parameters.

    -   **host**

        IP address of the publisher. You can specify the IP addresses of the primary and standby nodes of the publisher at the same time. If multiple IP addresses are specified, separate them with commas \(,\).

    -   **port**

        The port number of the publication side cannot be the primary port number. The port number must be the primary port number plus 1. Otherwise, the port number conflicts with the thread pool.

        >![](public_sys-resources/icon-caution.gif) **CAUTION:** 
        >The number of hosts must be the same as that of ports.

    -   **dbname**

        Specifies the database where a publication is located.

    -   **user**  and  **password**

        Specify the username and password used to connect to the publication side. The user has the system administrator permission \(**SYSADMIN**\) or O&M administrator permission \(**OPRADMIN**\). The password must be encrypted. Before creating a subscription, run the  **gs\_guc generate -S xxxxxx -D $GAUSSHOME/bin -o subscription**  command on the subscription side.


-   **PUBLICATION publication\_name**

    Specifies the name of the publication to be subscribed to on the publication side. A subscription can correspond to multiple publications.

-   **WITH \( subscription\_parameter \[= value\] \[, ... \] \)**

    Specifies the optional parameters for a subscription. The following parameters are supported:
    
    -   **copy_data \(boolean\)**

        Determines whether to copy existing data in the publication that is being subscribed to after copy starts. The default value is **true**.

    -   **enabled \(boolean\)**

        Specifies whether a subscription should be actively replicated, or whether it should be just set but not started. The default value is  **true**.

    -   **slot\_name \(string\)**

        Specifies the name of the replication slot to be used. By default, the subscription name is used as the replication slot name.

        If  **enabled**  is set to  **false**  during subscription creation,  **slot\_name**  is forcibly set to  **NONE**  which indicates a null value. In this case, the replication slot does not exist even if the value of  **slot\_name**  is specified.

    -   **synchronous\_commit \(enum\)**

        The value of this parameter overwrites the value of  **synchronous\_commit**. The default value is  **off**.

        It is safe to use the value  **off**  for logical replication. If the subscription side loses the transaction due to a lack of synchronization, the data is sent again from the publisher. A different setting may be appropriate for synchronous logical replication. The logical replication thread reports the locations of WRITE and REFRESH operations to the publication side. When synchronous replication is used, the publication side waits for the actual REFRESH operations. This means that setting the subscriber's  **synchronous\_commit**  to  **off**  when the subscription is used for synchronous replication may increase the latency of  **COMMIT**  on the publication server because **off** may increase the delay of xlog flushing. As a result, the publisher may need to spend more time waiting for the subscriber to complete Xlog flushing. In this case, it is advantageous to set  **synchronous\_commit**  to  **local**  or a higher value.

    -   **binary \(boolean\)**

        Specifies whether the subscription is sent by the publisher in binary format. The value  **true**  indicates that the data is sent in binary format, and the value  **false**  indicates that the data is sent in the default text format. Default value:  **false**

    -   **connect (boolean)**

        Specifies whether to connect to the publisher during CREATE SUBSCRIPTION. If this parameter is set to **false**, **enabled** and **copy\_data** are also set to **false** by default. The default value is **true**.

        Do not set **enabled** or **copy\_data** to **true** when **connect** is set to **false**.

        When this option is set to **false**, no connection is established and the table is not subscribed to. Therefore, when subscription is enabled, no content is copied. You need to run the ALTER SUBSCRIPTION... REFRESH PUBLICATION statement to subscribe to tables.

## Examples<a name="section1399192015610"></a>

```
-- Create a subscription to a remote server, replicate tables in the mypublication and insert_only publications, and start replication immediately upon commit.
CREATE SUBSCRIPTION mysub
         CONNECTION 'host=192.168.1.50 port=5432 user=foo dbname=foodb password=xxxx'
        PUBLICATION mypublication, insert_only;
-- Create a subscription to a remote server, replicate the tables in the insert_only publication, and do not start replication immediately until it is enabled later.
CREATE SUBSCRIPTION mysub
         CONNECTION 'host=192.168.1.50 port=5432 user=foo dbname=foodb password=xxxx '
        PUBLICATION insert_only
               WITH (enabled = false);
-- Modify the connection information of a subscription.
ALTER SUBSCRIPTION mysub CONNECTION 'host=192.168.1.51 port=5432 user=foo dbname=foodb password=xxxx';
-- Enable a subscription.
ALTER SUBSCRIPTION mysub SET(enabled=true);
-- Delete a subscription.
DROP SUBSCRIPTION mysub;
```

## Helpful Links<a name="section1537472265911"></a>

[ALTER SUBSCRIPTION](alter-subscription.md)  and  [DROP SUBSCRIPTION](drop-subscription.md)
