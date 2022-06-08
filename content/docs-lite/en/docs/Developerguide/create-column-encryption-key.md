# CREATE COLUMN ENCRYPTION KEY<a name="EN-US_TOPIC_0294528089"></a>

## Function<a name="section1020475817135"></a>

**CREATE COLUMN ENCRYPTION KEY**  creates a CEK that can be used to encrypt a specified column in a table.

## Precautions<a name="section1120413582134"></a>

This syntax is specific to a fully-encrypted database.

When using  **gsql**  to connect to a database server, you need to use the -C parameter to enable the fully-encrypted database.

The CEK object created using this syntax can be used for column-level encryption. When defining a column in a table, you can specify a CEK object to encrypt the column.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss provides this syntax, but encrypted database-related functions are unavailable.

## Syntax<a name="section182042586132"></a>

```
CREATE COLUMN ENCRYPTION KEY column_encryption_key_name WITH(CLIENT_MASTER_KEY = client_master_key_name, ALGORITHM = algorithm_type, ENCRYPTED_VALUE = encrypted_value);
```

## Parameter Description<a name="section32041258181311"></a>

-   **column\_encryption\_key\_name**

    This parameter is used as the name of a key object. In the same namespace, the value of this parameter must be unique.

    Value range: a string. It must comply with the naming convention.

-   **CLIENT\_MASTER\_KEY**

    Specifies the CMK used to encrypt the CEK. The value is the CMK object name, which is created using the  **CREATE CLIENT MASTER KEY**  syntax.

-   **ALGORITHM**

    Encryption algorithm to be used by the CEK. The value can be  **AEAD\_AES\_256\_CBC\_HMAC\_SHA256**,  **AEAD\_AES\_128\_CBC\_HMAC\_SHA256**, or  **SM4\_SM3**.

-   **ENCRYPTED\_VALUE \(optional\)**

    A key password specified by a user. The key password length ranges from 28 to 256 characters. The derived 28-character key meets the AES128 security requirements. If the user needs to use AES256, the key password length must be 39 characters. If the user does not specify the key password length, a 256-character key is automatically generated.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Chinese National Cryptography Standard \(Guomi\) constraints: SM2, SM3, and SM4 are Chinese national cryptography standards. To avoid legal risks, these algorithms must be used together. If you specify the SM4 algorithm to encrypt CEKs when creating a CMK, you must specify the SM3 and SM4 algorithms \(SM4\_SM3\) to encrypt data when creating CEKs.


## Examples<a name="section18204185851316"></a>

```
-- Create a CEK.
openGauss=> CREATE COLUMN ENCRYPTION KEY a_cek WITH VALUES (CLIENT_MASTER_KEY = a_cmk, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
CREATE COLUMN ENCRYPTION KEY
openGauss=> CREATE COLUMN ENCRYPTION KEY another_cek WITH VALUES (CLIENT_MASTER_KEY = a_cmk, ALGORITHM  = SM4_SM3);
CREATE COLUMN ENCRYPTION KEY
```

