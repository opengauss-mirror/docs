# pg\_archivecleanup<a name="EN-US_TOPIC_0000001196676731"></a>

## Function<a name="section125419154813"></a>

pg\_archivecleanup is a tool used to clear old archive logs.

## Syntax<a name="section554725769"></a>

```
pg_archivecleanup [OPTION]... ARCHIVELOCATION OLDESTKEPTWALFILE
```

## Parameter Description<a name="section9655840194219"></a>

-   -d

    Displays debug logs on the stderr.

-   -n

    Displays the name of the file to be deleted.

-   -V,--version

    Displays the version of  **pg\_archivecleanup**  and exits.

-   -x extension

    Provides an extension option to select only files with the corresponding extension format when the program is used as a separate tool.

-   -?,--help

    Displays the help information related to the  **pg\_archivecleanup**  command line parameters.


## Examples<a name="section111861451184417"></a>

Delete logs generated earlier than 000000010000000000000010.

```
pg_archivecleanup [OPTION]... ARCHIVELOCATION OLDESTKEPTWALFILE
```

## Extended Applications<a name="section81714278467"></a>

Set the  **archive\_cleanup\_command**  parameter in the  **recovery.conf**  file during the standby node recovery.

```
archive_cleanup_command = 'pg_archivecleanup /mnt/server/archiverdir %r'
```

After the recovery is complete, delete unnecessary files from the archive directory.

