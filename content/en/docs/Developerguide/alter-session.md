# ALTER SESSION<a name="EN-US_TOPIC_0242370537"></a>

## Function<a name="en-us_topic_0237122073_en-us_topic_0059778275_s62f804a7ed5a4f278e36b0175ff7bdc9"></a>

**ALTER SESSION**  defines or modifies the conditions or parameters that affect the current session. Modified session parameters are kept until the current session is disconnected.

## Precautions<a name="en-us_topic_0237122073_en-us_topic_0059778275_sa3088a8149ed4a2aa40a1107176bbe0a"></a>

-   If the  **START TRANSACTION**  statement is not executed before the  **SET TRANSACTION**  statement, the transaction is ended instantly and the statement does not take effect.
-   You can use the  **transaction\_mode\(s\)**  method declared in the  **START TRANSACTION**  statement to avoid using the  **SET TRANSACTION**  statement.

## Syntax<a name="en-us_topic_0237122073_en-us_topic_0059778275_sbe3534568f9843f48bb14af315b3c0f6"></a>

-   Set transaction parameters of a session.

    ```
    ALTER SESSION SET [ SESSION CHARACTERISTICS AS ] TRANSACTION
        { ISOLATION LEVEL { READ COMMITTED } | { READ ONLY  | READ WRITE } } [, ...] ;
    ```

-   Set other running parameters of a session.

    ```
    ALTER SESSION SET 
        {{config_parameter { { TO  | =  }  { value | DEFAULT }
          | FROM CURRENT }} 
          | TIME ZONE time_zone
          | CURRENT_SCHEMA schema
          | NAMES encoding_name
          | ROLE role_name PASSWORD 'password'
          | SESSION AUTHORIZATION { role_name PASSWORD 'password' | DEFAULT }
          | XML OPTION { DOCUMENT | CONTENT }
        } ;
    ```


## Parameter Description<a name="en-us_topic_0237122073_en-us_topic_0059778275_sddb6ecf7bf554397a5dcf64a45a2fd33"></a>

For details about the descriptions of parameters related to  **ALTER SESSION**, see  [Parameter Description](set.md#en-us_topic_0237122186_en-us_topic_0059779029_s39823c7ebd854a9f9c761b3a32b1c3c3)  of the SET syntax.

## Examples<a name="en-us_topic_0237122073_en-us_topic_0059778275_sea2dac4896614cbf9f90c11334eb3538"></a>

```
-- Create the ds schema.
postgres=# CREATE SCHEMA ds;

-- Set the search path of the schema.
postgres=# SET SEARCH_PATH TO ds, public;

-- Set the time/date type to the traditional postgres format (date before month).
postgres=# SET DATESTYLE TO postgres, dmy;

-- Set the character code of the current session to UTF8.
postgres=# ALTER SESSION SET NAMES 'UTF8';

-- Set the time zone to Berkeley of California.
postgres=# SET TIME ZONE 'PST8PDT';

-- Set the time zone to Italy.
postgres=# SET TIME ZONE 'Europe/Rome';

-- Set the current schema.
postgres=# ALTER SESSION SET CURRENT_SCHEMA TO tpcds;

-- Set XML OPTION to DOCUMENT.
postgres=# ALTER SESSION SET XML OPTION DOCUMENT;

-- Create the role joe and set it as the session role.
postgres=# CREATE ROLE joe WITH PASSWORD 'Bigdata@123';
postgres=# ALTER SESSION SET SESSION AUTHORIZATION joe PASSWORD 'Bigdata@123';

-- Switch to the default user.
postgres=> ALTER SESSION SET SESSION AUTHORIZATION default;

-- Delete the ds schema.
postgres=# DROP SCHEMA ds;

-- Delete the role joe.
postgres=# DROP ROLE joe;
```

## Helpful Links<a name="en-us_topic_0237122073_en-us_topic_0059778275_sae8fd88368e642f8bec50ae5712a870c"></a>

[SET](set.md)

