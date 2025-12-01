# DROP TABLESPACE<a name="EN-US_TOPIC_0289899918"></a>

## Function<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s73f8a05d2e0248f18e34a613fcde3fb6"></a>

**DROP TABLESPACE**  deletes a tablespace.

## Precautions<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s8573862b21234deaa562c0502d4cae55"></a>

-   Only the tablespace owner or a user granted with the DROP permission can run the  **DROP TABLESPACE**  command. The system administrator has this permission by default.
-   The tablespace to be deleted should not contain any database objects. Otherwise, an error will be reported.
-   **DROP TABLESPACE**  cannot be rolled back and therefore cannot be run in transaction blocks.
-   During execution of  **DROP TABLESPACE**, database queries by other sessions using  **\\db**  may fail and need to be reattempted.
-   If  **DROP TABLESPACE**  fails to be executed, run  **DROP TABLESPACE IF EXISTS**.

## Syntax<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s6c3564e4565e4a808f931d50ab12c041"></a>

```
DROP TABLESPACE [ IF EXISTS ] tablespace_name;
```

## Parameter Description<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_sd3609e09c22149eba3e6e64c989573b6"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified tablespace does not exist.

-   **tablespace\_name**

    Specifies the name of the tablespace to be deleted.

    Value range: an existing tablespace name


## Examples<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_sbcb08a6a5edc433b951080b230808c35"></a>

See  [Examples](create-tablespace.md#en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e)  in  **CREATE TABLESPACE**.

## Helpful Links<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s5f1d0e75c90d465fadd639b26f10ab64"></a>

[ALTER TABLESPACE](alter-tablespace.md)  and  [CREATE TABLESPACE](create-tablespace.md)

## Suggestions<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_section29255108114255"></a>

-   drop database

    Do not delete databases during transactions.


