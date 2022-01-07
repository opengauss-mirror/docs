# CREATE CLIENT MASTER KEY<a name="EN-US_TOPIC_0294528088"></a>

## Function<a name="section1163224811518"></a>

**CREATE CLIENT MASTER KEY**  creates a CMK object that can be used to encrypt a CEK object.

## Precautions<a name="en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

This syntax is specific to a fully-encrypted database.

When using  **gsql**  to connect to a database server, you need to use the  **-C**  parameter to enable the fully-encrypted database.

In the CMK object created using this syntax, only the method for reading keys from independent key management tools, services, or components is stored. The key itself is not stored.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE CLIENT MASTER KEY client_master_key_name WITH (KEY_STORE = key_store_name, KEY_PATH = "key_path_value", ALGORITHM = algorithm_type)
```

## Parameter Description<a name="section2852173114389"></a>

-   **client\_master\_key\_name**

    This parameter is used as the name of a key object. In the same namespace, the value of this parameter must be unique.

    Value range: a string. It must comply with the identifier naming convention.

-   **KEY\_STORE**

    Specifies the key tool or component that manages CMKs. Currently, only  **localkms**  is supported.

-   **KEY\_PATH**

    **KEY\_STORE**  manages multiple CMKs. The  **KEY\_PATH**  option is used to uniquely identify a CMK in  **KEY\_STORE**. The value is similar to that of  **key\_path\_value**.

-   **ALGORITHM**

    Type of the encryption algorithm used to encrypt CEKs. Value range:  **RSA\_2048**,  **RSA_3072**, and  **SM2**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >**Key storage path**: By default,  **localkms**  generates, reads, or deletes a key file in the  _$LOCALKMS_**\_FILE\_PATH**  path. You can manually configure this environment variable. However, you do not need to configure this environment variable separately. When failing to obtain $LOCALKMS\_FILE\_PATH,  **localkms**  attempts to obtain the  _$GAUSSHOME_**/etc/localkms/**  path. If the path exists, it is used as the key storage path.
    >**Key-related file name**: When the  **CREATE CMK**  syntax is used,  **localkms**  creates four files related to key paths. For example, when  **KEY\_PATH**  is set to  **key\_path\_value**, the names of the four files are  **key\_path\_value.pub**,  **key\_path\_value.pub.rand**,  **key\_path\_value.priv**, and  **key\_path\_value.priv.rand**.
    >Therefore, to successfully create key-related files, ensure that no file with the same name as the key-related files exists in the key path.


## Examples<a name="section7854941155112"></a>

```
-- (1) Use the common account alice to connect to the fully-encrypted database.
[cmd] gsql -U alice -h $host -p $port -d $database -C -r

-- (2) Use this syntax to create a CMK object.
openGauss=> CREATE CLIENT MASTER KEY a_cmk WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value", ALGORITHM = RSA_2048);
openGauss=> CREATE CLIENT MASTER KEY another_cmk WITH (KEY_STORE = localkms, KEY_PATH = "another_path_value", ALGORITHM = SM2);
```

