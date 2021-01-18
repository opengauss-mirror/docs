# DROP CLIENT MASTER KEY<a name="EN-US_TOPIC_0294528090"></a>

## Function<a name="en-us_topic_0059778607_s8dcd69edcfca47eb88ddb451a360b362"></a>

**DROP CLIENT MASTER KEY**  deletes a client master key \(CMK\).

## Precautions<a name="section7595101213507"></a>

-   Only the CMK owner or a user who has been granted the DROP permission can run this command. By default, the system administrator has the permission.
-   This command can only be used to delete the metadata information recorded in the system catalog of the database, but cannot be used to delete the CMK file. You need to use KeyTool to delete the CMK file.

## Syntax<a name="en-us_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP CLIENT MASTER KEY [ IF EXISTS ] client_master_key_name [CASCADE];
```

## Parameter Description<a name="en-us_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    If a specified CMK does not exist, a notice rather than an error is issued.

-   **client\_master\_key\_name**

    Name of a CMK to be deleted.

    Value range: a string. It is the name of an existing CMK.

-   **CASCADE**
    -   **CASCADE**: automatically deletes objects that depend on the CMK.


## **Examples**<a name="section162746130164"></a>

```
-- Delete a CMK object.
postgres=> DROP CLIENT MASTER KEY ImgCMK CASCADE;
NOTICE:  drop cascades to column setting: imgcek
DROP GLOBAL SETTING
```

