# DROP COLUMN ENCRYPTION KEY<a name="EN-US_TOPIC_0294528091"></a>

## Function<a name="section77761618077"></a>

**CREATE COLUMN ENCRYPTION KEY**  deletes a column encryption key \(CEK\).

## Precautions<a name="section7776101818719"></a>

Only the CEK owner or a user who has been granted the DROP permission can run this command. By default, the system administrator has this permission.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>In the Lite scenario, openGauss provides this syntax, but encrypted database-related functions are unavailable.

## Syntax<a name="en-us_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP COLUMN ENCRYPTION KEY [ IF EXISTS ] column_encryption_key_name [CASCADE];
```

## Parameter Description<a name="en-us_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    If a specified CEK does not exist, a notice rather than an error is issued.

-   **column\_encryption\_key\_name**

    Name of a CEK to be deleted.

    Value range: a string. It is the name of an existing CEK.


## Examples<a name="section162746130164"></a>

```
-- Delete a CEK.
openGauss=# DROP COLUMN ENCRYPTION KEY ImgCEK CASCADE;
ERROR:  cannot drop column setting: imgcek cascadely because encrypted column depend on it.
HINT:  we have to drop encrypted column: name, ... before drop column setting: imgcek cascadely.
```

