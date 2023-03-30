# pg\_resetxlog<a name="EN-US_TOPIC_0249632285"></a>

## Function<a name="en-us_topic_0237152442_section125419154813"></a>

**pg\_resetxlog**  is a tool for re-setting database transaction files.

## Prerequisites<a name="en-us_topic_0237152442_section14602518109"></a>

Ensure that the database directory exists and is correct.

## Syntax<a name="en-us_topic_0237152442_section554725769"></a>

```
pg_resetxlog [OPTION]... DATADIR
```

## Parameter Description<a name="en-us_topic_0237152442_section4751333172415"></a>

_OPTION_  is described as follows:

-   DATADIR

    Database directory to be modified. Ensure that the directory is correct.

-   -e XIDEPOCH

    Sets the period of the next transaction ID.

-   -f

    Forcibly updates transaction files.

-   -l xlogfile

    Forcibly specifies the minimum point of the new transaction log in the Xlog file.

-   -m XID

    Sets the next multitransaction ID.

-   -n

    Displays the value in the configuration file without update. 

-   -o OID

    Sets the next OID.

-   -O OFFSET

    Sets the offset of the next multitransaction.

-   -V, --version

    Displays version information.

-   -x XID

    Sets the next transaction ID.

-   -?, --help

    Displays help information.


