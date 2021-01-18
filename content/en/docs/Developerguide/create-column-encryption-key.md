# CREATE COLUMN ENCRYPTION KEY<a name="EN-US_TOPIC_0294528089"></a>

## Function<a name="section1163224811518"></a>

**CREATE COLUMN ENCRYPTION KEY**  creates a column encryption key \(CEK\).

## Precautions<a name="en-us_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

When using gsql to connect to the database, you need to add the  **-C**  option to enable the encrypted database function.

## Syntax<a name="en-us_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE COLUMN ENCRYPTION KEY column_encryption_key_name WITH '(' column_key_params ')';
```

column\_key\_params:

```
{CLIENT_MASTER_KEY '=' client_master_key_name ',' ALGORITHM '=' algorithm_value | [',' ENCRYPTED_VALUE '=' Sconst]}
```

## Parameter Description<a name="section2852173114389"></a>

-   **column\_encryption\_key\_name**

    Name of the CEK in the same namespace. The value must be unique.

    Value range: a string. It must comply with the naming convention.

-   **column\_key\_params**

    Parameters involved in creating a CEK, including:

    -   **CLIENT\_MASTER\_KEY**: The value is a CMK name.
    -   **ALGORITHM**: An algorithm used to encrypt the CEK. Currently, only  **AEAD\_AES\_256\_CBC\_HMAC\_SHA256**  and  **AEAD\_AES\_128\_CBC\_HMAC\_SHA256**  are supported.
    -   **ENCRYPTED\_VALUE**: \(Optional\) The value is a key specified by the user. The key length ranges from 28 to 256 characters. If it is not specified, the key is automatically generated.


## Examples<a name="section7854941155112"></a>

```
-- Create a CEK.
postgres=> CREATE COLUMN ENCRYPTION KEY ImgCEK WITH VALUES (CLIENT_MASTER_KEY = ImgCMK, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
CREATE COLUMN ENCRYPTION KEY
```

