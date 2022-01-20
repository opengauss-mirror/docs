# Fully-encrypted Database<a name="EN-US_TOPIC_0000001180134828"></a>

The fully-encrypted database aims to protect privacy throughout the data lifecycle. In this way, data is always in ciphertext during transmission, computing, and storage regardless of the service scenario and environment. After the data owner encrypts data on a client and sends the encrypted data to the server, attackers cannot obtain valuable information even if the attackers steal user data by exploiting system vulnerabilities. In this way, data privacy is protected.

The entire service data flow is in ciphertext during data processing, so the following can be implemented by using a fully-encrypted database:

-   Protects data privacy and security throughout the lifecycle on the cloud. Attackers cannot obtain valid information from the database server regardless of the data status.
-   Helps cloud service providers gain third-party trust. Service administrators, O&M administrators in enterprise service scenarios, and application developers in consumer cloud services can keep keys in their hands so that high-privilege users cannot obtain valid data.
-   Enables cloud database services to better comply with personal privacy protection laws and regulations with the help of the fully-encrypted database.

Currently, the fully-encrypted database supports two connection modes: gsql and JDBC. The following describes how to use the database in the two connection modes.

## Connecting to a Fully-encrypted Database<a name="section20380155916151"></a>

-   Connect to the database using GSQL and run the following command to enable the full encryption function:

    ```
    gsql -p PORT -d postgres -r -C
    ```

    Parameters:

    -   **-p**: port number.
    -   **-d**: database name.
    -   **–C**: enables full encryption.

-   To support JDBC operations on a fully-encrypted database, set  **enable\_ce**  to  **1**.

## Creating a User Key<a name="section47711315142619"></a>

A fully-encrypted database has two types of keys: client master key \(CMK\) and column encryption key \(CEK\). The CMK is used to encrypt the CEK, and the CEK is used to encrypt user data.

The sequence and dependency for creating keys are as follows: Create a CMK and then a CEK.

-   **Create a CMK and a CEK in the GSQL environment.**

    **\[Creating a CMK\]**

    ```
    CREATE CLIENT MASTER KEY client_master_key_name WITH (KEY_STORE = key_store_name, KEY_PATH = "key_path_value", ALGORITHM = algorithm_type);
    ```

    Parameters:

    -   **client\_master\_key\_name**

        Specifies the key name. In the same namespace, the value of this parameter must be unique.

        Value range: a string. It must comply with the identifier naming convention.

    -   **KEY\_STORE**

        Specifies the key tool or component that manages CMKs. Currently, only local KMS is supported.

    -   **KEY\_PATH**

        **KEY\_STORE**  manages multiple CMKs. The  **KEY\_PATH**  option is used to uniquely identify a CMK in  **KEY\_STORE**. The value is similar to that of  **key\_path\_value**.

    -   **ALGORITHM**

        Specifies the type of the encryption algorithm used to encrypt CEKs. Value range:  **RSA\_2048**,  **RSA3072**, and  **SM2**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Key path: By default, local KMS generates, reads, and deletes key files in  _$LOCALKMS\_FILE\_PATH_. You can manually configure this environment variable. However, you do not need to configure this environment variable. If  _$LOCALKMS\_FILE\_PATH_  fails to be obtained, local KMS attempts to obtain  _$GAUSSHOME_**/etc/localkms/**. If the path exists, it is used as the key storage path.
    >Key-related files: When the CREATE CMK syntax is used, local KMS creates four files related to key storage. For example, when  **KEY\_PATH**  is set to  **key\_path\_value**, the four files are  **key\_path\_value.pub**,  **key\_path\_value.pub.rand**,  **key\_path\_value.priv**  and  **key\_path\_value.priv.rand**.
    >Therefore, to successfully create key-related files, ensure that no file with the same name as the key-related files exists in the key path.

    **\[Creating a CEK\]**

    ```
    CREATE COLUMN ENCRYPTION KEY column_encryption_key_name WITH(CLIENT_MASTER_KEY = client_master_key_name, ALGORITHM = algorithm_type, ENCRYPTED_VALUE = encrypted_value);
    ```

    Parameters:

    -   **column\_encryption\_key\_name**

        Specifies the key name. In the same namespace, the value of this parameter must be unique.

        Value range: a string. It must comply with the identifier naming convention.

    -   **CLIENT\_MASTER\_KEY**

        Specifies the CMK used to encrypt the CEK.

        The value is the name of a CMK. The CMK object is created using the CREATE CLIENT MASTER KEY syntax.

    -   **ALGORITHM**

        Specifies the encryption algorithm used by the CEK.

        The value can be  **AEAD\_AES\_256\_CBC\_HMAC\_SHA256**,  **AEAD\_AES\_128\_CBC\_HMAC\_SHA256**, or  **SM4\_SM3**.

    -   **ENCRYPTED\_VALUE**  \(optional\)

        Specifies the key password defined by the user. The key password contains 28 to 256 characters. The security strength of a key containing 28 characters complies with AES128. If AES256 is used, the key password must contain 39 characters. If this parameter is not specified, a 256-bit key is automatically generated.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >SM2, SM3, and SM4 are Chinese cryptographic algorithms. To avoid legal risks, these algorithms must be used together. If you specify the SM4 algorithm to encrypt CEKs when creating a CMK, you must specify the SM3 and SM4 algorithms \(SM4\_SM3\) to encrypt data when creating CEKs.

    **\[Example: In the GSQL environment\]**

    ```
    -- Create the $GAUSSHOME/etc/localkms/ directory.
    mkdir -p $GAUSSHOME/etc/localkms/
    -- Use a privileged account to create a common user named alice.
     openGauss=# CREATE USER alice PASSWORD '********'; 
    -- Use the account of common user alice to connect to the fully-encrypted database and execute the syntax.
     gsql -p 57101 postgres -U alice -r -C 
    -- Create a CMK object.
    openGauss=> CREATE CLIENT MASTER KEY alice_cmk WITH (KEY_STORE = localkms , KEY_PATH = "key_path_value",  ALGORITHM = RSA_2048);
    -- Create a CEK object.
     openGauss=> CREATE COLUMN ENCRYPTION KEY ImgCEK WITH VALUES (CLIENT_MASTER_KEY = alice_cmk, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256); 
    ```


-   **Create a CMK and a CEK in the JDBC environment.**

    ```
    // Create a CMK.
     Connection conn = DriverManager.getConnection("url","user","password");Statement stmt = conn.createStatement();int rc = stmt.executeUpdate("CREATE CLIENT MASTER KEY ImgCMK1 WITH ( KEY_STORE = localkms , KEY_PATH = "key_path_value" , ALGORITHM = AES_256_CBC);"); 
      
    // Create a CEK.
     int rc2 = stmt.executeUpdate("CREATE COLUMN ENCRYPTION KEY ImgCEK1 WITH VALUES (CLIENT_MASTER_KEY = ImgCMK1, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);");
    ```


## Creating an Encrypted Table<a name="section120142113510"></a>

After creating the CMK and CEK, you can use the CEK to create an encrypted table. An encrypted table can be created in two modes: random encryption and deterministic encryption.

-   **Create an encrypted table in the GSQL environment.**

    \[Example\]

    ```
    openGauss=# CREATE TABLE creditcard_info (id_number int, name text encrypted with (column_encryption_key = ImgCEK, encryption_type = DETERMINISTIC),credit_card  varchar(19) encrypted with (column_encryption_key = ImgCEK, encryption_type = DETERMINISTIC));
    ```

    Parameters:

    For the encryption type in the ENCRYPTED WITH constraint, the value of  **encryption\_type\_value**  can be  **DETERMINISTIC**  or  **RANDOMIZED**.


-   **Create an encrypted table in the JDBC environment.**

    ```
    int rc3 = stmt.executeUpdate("CREATE TABLE creditcard_info (id_number    int, name  varchar(50) encrypted with (column_encryption_key = ImgCEK, encryption_type = DETERMINISTIC),credit_card  varchar(19) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC));");
    ```


## Insert data into the encrypted table and query the data.<a name="section1298375053510"></a>

After an encrypted table is created, you can insert and view data in the encrypted table in fully-encrypted database mode \(by setting connection parameter  **-C**\). When a common environment is used \(the connection parameter  **-C**  is disabled\), the encrypted table cannot be operated, and only ciphertext data can be viewed in the encrypted table.

-   **In the GSQL environment, insert data into the encrypted table and view the data.**

    ```
    openGauss=# INSERT INTO creditcard_info VALUES (1,'joe','6217986500001288393'); 
     INSERT 0 1 
     openGauss=# INSERT INTO creditcard_info VALUES (2, 'joy','6219985678349800033'); 
     INSERT 0 1 
     openGauss=# select * from creditcard_info where name = 'joe'; 
      id_number | name |     credit_card 
     -----------+------+--------------------- 
              1 | joe  | 6217986500001288393 
     (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >When a non-encrypted client is used to view the data in the encrypted table, the data is displayed in ciphertext.

    ```
    openGauss=# select id_number,name from creditcard_info; 
      id_number |                name 
     -----------+------------------------------------------- 
              1 | \x011aefabd754ded0a536a96664790622487c4d36 
              2 | \x011aefabd76853108eb406c0f90e7c773b71648f 
     (2 rows)
    ```


-   **In the JDBC environment, insert data into the encrypted table and view the data.**

    ```
    // Insert data.
     int rc4 = stmt.executeUpdate("INSERT INTO creditcard_info VALUES (1,'joe','6217986500001288393');"); 
    // Query the encrypted table.
     ResultSet rs = null; 
     rs = stmt.executeQuery("select * from creditcard_info where name = 'joe';"); 
    // Close the statement object.
     stmt.close();
    ```


The preceding describes how to use the fully-encrypted database feature. For details, see the corresponding sections in the official document.

