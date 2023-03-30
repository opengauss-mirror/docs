# MOT Vacuum<a name="EN-US_TOPIC_0270171503"></a>

Use VACUUM for garbage collection and optionally to analyze a database, , as follows –

-   \[PG\]

    In Postgress \(PG\), the VACUUM reclaims storage occupied by dead tuples. In normal PG operation, tuples that are deleted or that are made obsolete by an update are not physically removed from their table. They remain present until a VACUUM is done. Therefore, it is necessary to perform a VACUUM periodically, especially on frequently updated tables.

-   \[MOT Extension\]

    MOT tables do not need a periodic VACUUM operation, since dead/empty tuples are re‑used by new ones. MOT tables require VACUUM operations only when their size is significantly reduced and they do not expect to grow to their original size in the near future.

    For example, an application that periodically \(for example, once in a week\) performs a large deletion of a table/tables data while inserting new data takes days and does not necessarily require the same quantity of rows. In such cases, it makes sense to activate the VACUUM.

    The VACUUM operation on MOT tables is always transformed into a VACUUM FULL with an exclusive table lock.


-   Supported Syntax and Limitations

    Activation of the VACUUM operation is performed in a standard manner.

    ```
    VACUUM [FULL | ANALYZE] [ table ]; 
    ```

    Only the FULL and ANALYZE VACUUM options are supported. The VACUUM operation can only be performed on an entire MOT table.

    The following PG vacuum options are not supported:

    -   FREEZE
    -   VERBOSE
    -   Column specification
    -   LAZY mode \(partial table scan\)

    Additionally, the following functionality is not supported –

    -   AUTOVACUUM


