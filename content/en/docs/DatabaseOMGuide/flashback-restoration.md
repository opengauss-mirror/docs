# Flashback Restoration

Flashback restoration is a part of the database recovery technology. It can be used to selectively cancel the impact of a committed transaction and restore data from incorrect manual operations. Before the flashback technology is used, the committed database modification can be retrieved only by means of restoring backup and PITR. The restoration takes several minutes or even hours. After the flashback technology is used, it takes only seconds to restore the submitted data before the database is modified. The restoration time is irrelevant to the database size.

>![](F:/opengauss-docs/docs/content/en/docs/DatabaseOMGuide/public_sys-resources/icon-note.gif) **NOTE:** 
>
>The Astore engine does not support the flashback function.

## Flashback Query<a name="EN-US_TOPIC_0000001101515352"></a>

### Context<a name="section028145412219"></a>

Flashback query enables you to query a snapshot of a table at a certain time point in the past. This feature can be used to view and logically rebuild damaged data that is accidentally deleted or modified. The flashback query is based on the MVCC mechanism. You can retrieve and query the old version to obtain the data of the specified old version.

### Prerequisites

- The **undo_retention_time** parameter has been set for specifying the retention period of undo logs.

### Syntax<a name="section1489051111232"></a>

```
{[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
[ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
[TIMECAPSULE { TIMESTAMP | CSN } expression ]
|( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
|with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
|function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
|function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
|from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
```

In the syntax tree,  **TIMECAPSULE \{TIMESTAMP | CSN\} expression**  is a new expression for the flashback function.  **TIMECAPSULE**  indicates that the flashback function is used.  **TIMESTAMP**  and  **CSN**  indicate that the flashback function uses specific time point information or commit sequence number \(CSN\) information.

### Parameter Description<a name="section1446502852320"></a>

-   TIMESTAMP
    -   Specifies a history time point of the table data to be queried.


-   CSN
    -   Specifies a logical commit time point of the data in the entire database to be queried. Each CSN in the database represents a consistency point of the entire database. To query the data under a CSN means to query the data related to the consistency point in the database through SQL statements.


### Examples<a name="section128804136369"></a>

- Example 1:

  ```
  SELECT * FROM t1 TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
  ```

- Example 2:

  ```
  SELECT * FROM t1 TIMECAPSULE CSN 9617;
  ```

- Example 3:

  ```
  SELECT * FROM t1 AS t TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
  ```

- Example 4:

  ```
  SELECT * FROM t1 AS t TIMECAPSULE CSN 9617;
  ```

## Flashback Table<a name="EN-US_TOPIC_0000001101555362"></a>

### Context<a name="section116901421161613"></a>

Flashback table enables you to restore a table to a specific point in time. When only one table or a group of tables are logically damaged instead of the entire database, this feature can be used to quickly restore the table data. Based on the MVCC mechanism, the flashback table deletes incremental data at a specified time point and after the specified time point and retrieves the data deleted at the specified time point and the current time point to restore table-level data.

### Prerequisites

- The **undo_retention_time** parameter has been set for specifying the retention period of undo logs.

### Syntax<a name="section510120469162"></a>

```
TIMECAPSULE TABLE table_name TO { TIMESTAMP | CSN } expression
```

### Examples<a name="section20833135217166"></a>

```
TIMECAPSULE TABLE t1 TO TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
TIMECAPSULE TABLE t1 TO CSN 9617;
```

## Flashback DROP/TRUNCATE<a name="EN-US_TOPIC_0000001148115319"></a>

### Context<a name="section5637175821615"></a>

Flashback drop enables you to restore tables that are dropped by mistake and their auxiliary structures, such as indexes and table constraints, from the recycle bin. Flashback drop is based on the recycle bin mechanism. You can restore physical table files recorded in the recycle bin to restore dropped tables.

Flashback truncate enables you to restore tables that are truncated by mistake and restore the physical data of the truncated tables and indexes from the recycle bin. Flashback truncate is based on the recycle bin mechanism. You can restore physical table files recorded in the recycle bin to restore truncated tables.

### Prerequisites<a name="section17975164121712"></a>

-   The  **enable\_recyclebin**  parameter has been set for enabling the recycle bin.
-   The  **recyclebin\_retention\_time**  parameter has been set for specifying the retention period of objects in the recycle bin. The objects will be automatically deleted after the retention period expires.

### Syntax<a name="section12145151281719"></a>

- Drop a table.

  ```
  DROP TABLE table_name [PURGE]
  ```


- Purge objects in the recycle bin.

  ```
  PURGE { TABLE { table_name }
  | INDEX { index_name }
  | RECYCLEBIN
  }
  ```


- Flash back a dropped table.

  ```
  TIMECAPSULE TABLE { table_name } TO BEFORE DROP [RENAME TO new_tablename]
  ```


- Truncate a table.

  ```
  TRUNCATE TABLE { table_name } [ PURGE ]
  ```

- Flash back a truncated table.

  ```
  TIMECAPSULE TABLE { table_name } TO BEFORE TRUNCATE
  ```


### Parameter Description<a name="section16105182016179"></a>

-   DROP/TRUNCATE TABLE table\_name PURGE
    -   Purges table data in the recycle bin by default.


- PURGE RECYCLEBIN

  -   Purges objects in the recycle bin.

- **TO BEFORE DROP**

  Retrieves dropped tables and their subobjects from the recycle bin.

  You can specify either the original user-specified name of the table or the system-generated name assigned to the object when it was dropped.

  -   System-generated recycle bin object names are unique. Therefore, if you specify the system-generated name, the database retrieves that specified object. To see the contents of your recycle bin, run  **select  \* from pg\_recyclebin;**.
  -   If you specify the user-specified name and the recycle bin contains more than one object of that name, the database retrieves the object that was moved to the recycle bin most recently. If you want to retrieve an older version of the table, then do one of these things:

      -   Specify the system-generated recycle bin name of the table you want to retrieve.

      -   Run  **TIMECAPSULE TABLE ... TO BEFORE  DROP**  statements until you retrieve the table you want.
  -   When a dropped table is restored, only the base table name is restored, and the names of other subobjects remain the same as those in the recycle bin. You can run the DDL command to manually change the names of subobjects as required.
  -   The recycle bin does not support write operations such as DML, DCL, and DDL, and does not support DQL query operations \(supported in later versions\).
  -   Between the flashback point and the current point, a statement has been executed to modify the table structure or to affect the physical structure. Therefore, the flashback fails. The error message "ERROR: The table definition of %s has been changed." is displayed when flashback is performed on a table where DDL operations have been performed. The error message "ERROR: recycle object %s desired does not exis" is displayed when flashback is performed on DDL operations, such as changing namespaces and table names.

- **RENAME  TO**

  Specifies a new name for the table retrieved from the recycle bin.

- **TO BEFORE TRUNCATE**

  Flashes back to the point in time before the TRUNCATE operation.


### Syntax Example<a name="section19448202620171"></a>

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

