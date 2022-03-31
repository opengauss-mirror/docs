# SNAPSHOT<a name="EN-US_TOPIC_0000001163839469"></a>

## Function<a name="section1590014447254"></a>

**SNAPSHOT**  controls data in a unified manner for multiple users.

## Precautions<a name="section1427744717250"></a>

-   The GUC parameter  **db4ai\_snapshot\_mode**  classifies the snapshot storage model into MSS and CSS. The GUC parameter  **db4ai\_snapshot\_version\_delimiter**  specifies the version separator and its default value is  **@**. The GUC parameter  **db4ai\_snapshot\_version\_separator**  specifies the sub-version separator and its default value is  **.**.
-   When the incremental storage mode is used for snapshots, the snapshots are dependent on each other. Snapshots must be deleted in the dependency sequence.
-   The snapshot feature is used to maintain data between team members, involving data transcription between administrators and common users. Therefore, the snapshot feature is not supported in private user and separation of duty \(**enableSeparationOfDuty**  is set to  **ON**\) scenarios.
-   When you need a stable and available snapshot for tasks such as AI training, you need to publish the snapshot.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In the Lite scenario, the AI capabilities of openGauss are unavailable.


## Syntax<a name="section1452716494253"></a>

1.  Create a snapshot.

    You can run the  **CREATE SNAPSHOT... AS**  and  **CREATE SNAPSHOT... FROM**  statements to create a data table snapshot.

    -   CREATE SNAPSHOT AS

        ```
        CREATE SNAPSHOT <qualified_name> [@ <version | ident | sconst>]
            [COMMENT IS <sconst>}
            AS query;
        ```

    -   CREATE SNAPSHOT FROM

        ```
        CREATE SNAPSHOT <qualified_name> [@ <version | ident | sconst>]
            FROM @ <version | ident | sconst>
            [COMMENT IS <sconst>}
                USING (
                { INSERT [INTO SNAPSHOT] ...
                  | UPDATE [SNAPSHOT] [AS <alias>] SET ... [FROM ...] [WHERE ...]
                  | DELETE [FROM SNAPSHOT] [AS <alias>] [USING ...] [WHERE ...]
                  | ALTER [SNAPSHOT] { ADD ... | DROP ... } [, ...]
              } [; ...]
            );
        ```

2.  Delete a snapshot.

    PURGE SNAPSHOT

    ```
    PURGE SNAPSHOT <qualified_name> @ <version | ident | sconst>;
    ```

3.  Sample snapshots.

    SAMPLE SNAPSHOT

    ```
    SAMPLE SNAPSHOT <qualified_name> @ <version | ident | sconst>
        [STRATIFY BY attr_list]
        { AS <label> AT RATIO <num> [COMMENT IS <comment>] } [, ...]
    ```

4.  Publish snapshots.

    PUBLISH SNAPSHOT

    ```
    PUBLISH SNAPSHOT <qualified_name> @ <version | ident | sconst>;
    ```

5.  Archive snapshots.

    ARCHIVE SNAPSHOT

    ```
    ARCHIVE SNAPSHOT <qualified_name> @ <version | ident | sconst>;
    ```


## Parameter Description<a name="section319555514251"></a>

-   qualified\_name

    Name of the snapshot to be created

    Value range: a string. It must comply with the identifier naming convention.

-   version

    \(Optional\) Version number of a snapshot. This parameter is optional. The system automatically extends the sequence number.

    Value range: string, consisting of numbers and separators.


## Examples<a name="section3170957142519"></a>

```
create snapshot s1@1.0 comment is 'first version' as select * from t1;
```

```
create snapshot s1@3.0 from @1.0 comment is 'inherits from @1.0' using (INSERT VALUES(6, 'john'), (7, 'tim'); DELETE WHERE id = 1);
```

```
SELECT * FROM s1@1.0;
```

```
purge snapshot s1@1.0;
```

```
sample snapshot s1@2.0 stratify by name as nick at ratio .5;
```

```
publish snapshot s1@2.0;
```

```
archive snapshot s1@2.0;
```

## Helpful Links<a name="section2051314595253"></a>

None

