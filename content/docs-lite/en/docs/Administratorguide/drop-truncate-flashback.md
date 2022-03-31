# DROP/TRUNCATE Flashback<a name="EN-US_TOPIC_0000001223332059"></a>

## Context<a name="section5637175821615"></a>

-   Flashback DROP enables you to restore tables that are dropped by mistake and their auxiliary structures, such as indexes and table constraints, from the recycle bin. Flashback DROP is based on the recycle bin mechanism. You can restore physical table files recorded in the recycle bin to restore dropped tables.
-   Flashback TRUNCATE enables you to restore tables that are truncated by mistake and restore the physical data of the truncated tables and indexes from the recycle bin. Flashback TRUNCATE is based on the recycle bin mechanism. You can restore physical table files recorded in the recycle bin to restore truncated tables.

## Prerequisites<a name="section17975164121712"></a>

-   The  **enable\_recyclebin**  parameter has been set for enabling the recycle bin.
-   The  **recyclebin\_retention\_time**  parameter has been set for specifying the retention period of objects in the recycle bin. The objects will be automatically deleted after the retention period expires.

## Syntax<a name="section12145151281719"></a>

-   Drop a table.

    ```
    DROP TABLE table_name [PURGE]
    ```


-   Purge objects in the recycle bin.

    ```
    PURGE { TABLE { table_name }
    | INDEX { index_name }
    | RECYCLEBIN
    }
    ```


-   Flash back a dropped table.

    ```
    TIMECAPSULE TABLE { table_name } TO BEFORE DROP [RENAME TO new_tablename]
    ```


-   Truncate a table.

    ```
    TRUNCATE TABLE { table_name } [ PURGE ]
    ```

-   Flash back a truncated table.

    ```
    TIMECAPSULE TABLE { table_name } TO BEFORE TRUNCATE
    ```


## Parameter Description<a name="section16105182016179"></a>

-   DROP/TRUNCATE TABLE table\_name PURGE
    -   Purges table data in the recycle bin by default.


-   PURGE RECYCLEBIN
    -   Purges objects in the recycle bin.

-   **TO BEFORE DROP**

    Retrieves dropped tables and their subobjects from the recycle bin.

    You can specify either the original user-specified name of the table or the system-generated name assigned to the object when it was dropped.

    -   System-generated recycle bin object names are unique. Therefore, if you specify the system-generated name, the database retrieves that specified object. To see the content in your recycle bin, run  **select  \* from gs\_recyclebin;**.
    -   If you specify the user-specified name and the recycle bin contains more than one object of that name, the database retrieves the object that was moved to the recycle bin most recently. If you want to retrieve an older version of the table, then do one of these things:

        -   Specify the system-generated recycle bin name of the table you want to retrieve.

        -   Run the  **TIMECAPSULE TABLE ... TO BEFORE  DROP**  statement until you retrieve the table you want.

    -   When a dropped table is restored, only the base table name is restored, and the names of other subobjects remain the same as those in the recycle bin. You can run the DDL command to manually change the names of subobjects as required.
    -   The recycle bin does not support write operations such as DML, DCL, and DDL, and does not support DQL query operations \(supported in later versions\).
    -   Between the flashback point and the current point, a statement has been executed to modify the table structure or to affect the physical structure. Therefore, the flashback fails. The error message "ERROR: The table definition of %s has been changed." is displayed when flashback is performed on a table where DDL operations have been performed. The error message "ERROR: recycle object %s desired does not exis" is displayed when flashback is performed on DDL operations, such as changing namespaces and table names.

-   **RENAME  TO**

    Specifies a new name for the table retrieved from the recycle bin.

-   **TO BEFORE TRUNCATE**

    Flashes back to the point in time before the TRUNCATE operation.


## Syntax Example<a name="section19448202620171"></a>

```
DROP TABLE t1 PURGE;

PURGE TABLE t1;
PURGE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0";
PURGE INDEX i1;
PURGE INDEX "BIN$04LhcpndanfgMAAAAAANPw==$0";
PURGE RECYCLEBIN;

TIMECAPSULE TABLE t1 TO BEFORE DROP;
TIMECAPSULE TABLE t1 TO BEFORE DROP RENAME TO new_t1;
TIMECAPSULE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0" TO BEFORE DROP;
TIMECAPSULE TABLE "BIN$04LhcpndanfgMAAAAAANPw==$0" TO BEFORE DROP RENAME TO new_t1;
```

