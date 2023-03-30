# DROP DATABASE<a name="EN-US_TOPIC_0289900003"></a>

## Function<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_s8dcd69edcfca47eb88ddb451a360b362"></a>

**DROP DATABASE**  deletes a database.

## Precautions<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_sbc821d407f41462a8b14952774c4287f"></a>

-   Only the database owner or a user granted with the DROP permission can run the  **DROP DATABASE**  command. The system administrator has this permission by default.
-   The preinstalled POSTGRES, TEMPLATE0, and TEMPLATE1 databases are protected and therefore cannot be deleted. To check databases in the current service, run the gsql statement  **\\l**.
-   If any users are connected to the database, the database cannot be deleted.
-   **DROP DATABASE**  cannot be executed within a transaction block.
-   If  **DROP DATABASE**  fails and is rolled back, run  **DROP DATABASE IF EXISTS**  again.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**DROP DATABASE**  cannot be undone.

## Syntax<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP DATABASE [ IF EXISTS ] database_name ;
```

## Parameter Description<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified database does not exist.

-   **database\_name**

    Specifies the name of the database to be deleted.

    Value range: an existing database name


## Examples<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_sabd40dc25b604e1b8c213e7e9f6b5200"></a>

See  [Examples](create-database.md#en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c)  in  **CREATE DATABASE**.

## Helpful Links<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_s5f331542a3f84ab58b896c25bfff41db"></a>

[CREATE DATABASE](create-database.md)

## Suggestions<a name="en-us_topic_0283137424_en-us_topic_0237122133_en-us_topic_0059778607_section29255108114255"></a>

-   drop database

    Do not delete databases during transactions.


