# DROP CLIENT MASTER KEY<a name="EN-US_TOPIC_0294528090"></a>

## Function<a name="en-us_topic_0059778607_s8dcd69edcfca47eb88ddb451a360b362"></a>

**DROP CLIENT MASTER KEY**  deletes a client master key \(CMK\).

## Precautions<a name="section7595101213507"></a>

-   Only the CMK owner or a user who has been granted the DROP permission can run this command. By default, the system administrator has this permission.
-   This command not only deletes the key object in the database, but also deletes the key file corresponding to the key object in the specified path on the client.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>In the Lite scenario, openGauss provides this syntax, but encrypted database-related functions are unavailable.

## Syntax<a name="en-us_topic_0059778607_seefd39b3ef1942df9e333846afd3a56c"></a>

```
DROP CLIENT MASTER KEY [ IF EXISTS ] client_master_key_name [CASCADE];
```

## Parameter Description<a name="en-us_topic_0059778607_sad5ef99cc3a043838c29c5bdde9caab3"></a>

-   **IF EXISTS**

    If a specified CMK does not exist, a notice rather than an error is issued.

-   **client\_master\_key\_name**

    Name of a CMK to be deleted.

    Value range: a string. It is the name of an existing CMK object.

-   **CASCADE**
    -   **CASCADE**: automatically deletes objects that depend on the CMK.

        >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
        >
        >During the life cycle of the syntax, the status of both client and server needs to be changed. When an exception occurs, the key information may have been deleted from the server, but the key file is not deleted from the client.
        >In this case, the client does not check whether there are unexpected key files retain due to exceptions during the lifecycle of the next syntax. You need to periodically check the key folder and confirm and process the key files that are not used.



## **Examples**<a name="section162746130164"></a>

```
-- Delete a CMK object.
openGauss=> DROP CLIENT MASTER KEY ImgCMK CASCADE;
NOTICE:  drop cascades to column setting: imgcek
DROP CLIENT MASTER KEY
```

