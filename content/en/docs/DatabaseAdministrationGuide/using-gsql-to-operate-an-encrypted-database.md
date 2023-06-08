# Using GSQL to Operate an Encrypted Database<a name="EN-US_TOPIC_0000001149387921"></a>

## Procedure<a name="section199001315531"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to enable the encryption function and connect to the encrypted database:

    ```
    gsql -p PORT postgres -r -C
    ```

3.  Create a CMK and a CEK. For details about the syntax for creating a CMK and CEK, see  [CREATE CLIENT MASTER KEY](../SQLReference/create-client-master-key.md)  and  [CREATE COLUMN ENCRYPTION KEY](../create-column-encryption-key/create-column-encryption-key.md).

    ```
    -- Create a CMK.
    openGauss=# CREATE CLIENT MASTER KEY ImgCMK1 WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value1", ALGORITHM = RSA_2048);
    openGauss=# CREATE CLIENT MASTER KEY ImgCMK WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value2", ALGORITHM = RSA_2048);
    openGauss=# CREATE COLUMN ENCRYPTION KEY ImgCEK1 WITH VALUES (CLIENT_MASTER_KEY = ImgCMK1, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
    CREATE COLUMN ENCRYPTION KEY
    openGauss=# CREATE COLUMN ENCRYPTION KEY ImgCEK WITH VALUES (CLIENT_MASTER_KEY = ImgCMK, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
    CREATE COLUMN ENCRYPTION KEY
    ```

    The query result of the system catalog that stores the key information is as follows.

    ```
    openGauss=# SELECT * FROM gs_client_global_keys;
     global_key_name | key_namespace | key_owner | key_acl |        create_date
    -----------------+---------------+-----------+---------+----------------------------
     imgcmk1         |          2200 |        10 |         | 2021-04-21 11:04:00.656617
     imgcmk          |          2200 |        10 |         | 2021-04-21 11:04:05.389746
    (2 rows)
    openGauss=# SELECT column_key_name,column_key_distributed_id ,global_key_id,key_owner  FROM gs_column_keys;
     column_key_name | column_key_distributed_id | global_key_id | key_owner
    -----------------+---------------------------+---------------+-----------
     imgcek1         |                 760411027 |         16392 |        10
     imgcek          |                3618369306 |         16398 |        10
    (2 rows)
    ```

4.  Create an encrypted table.

    ```
    openGauss=# CREATE TABLE creditcard_info (id_number    int, name         text encrypted with (column_encryption_key = ImgCEK, encryption_type = DETERMINISTIC),
    credit_card  varchar(19) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC));
    NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'id_number' as the distribution column by default.
    HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
    CREATE TABLE
    ```

    Query the detailed information about the table. If the value of  **Modifiers**  is  **encrypted**, the column is encrypted.

    ```
    openGauss=# \d creditcard_info
            Table "public.creditcard_info"
       Column    |       Type        | Modifiers
    -------------+-------------------+------------
     id_number   | integer           |
     name        | text              |  encrypted
     credit_card | character varying |  encrypted
    ```

5.  Insert data into the encrypted table and perform an equality query.

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
    Note: The data in the encrypted table is displayed in ciphertext when you use a non-encrypted client to view the data.
    openGauss=# select id_number,name from creditcard_info;
     id_number |                                                                         name
    -----------+------------------------------------------------------------------------------------------------------------------------------------------------------
             1 | \x011aefabd754ded0a536a96664790622487c4d366d313aecd5839e410a46d29cba96a60e4831000000ee79056a114c9a6c041bb552b78052e912a8b730609142074c63791abebd0d38
             2 | \x011aefabd76853108eb406c0f90e7c773b71648fa6e2b8028cf634b49aec65b4fcfb376f3531000000f7471c8686682de215d09aa87113f6fb03884be2031ef4dd967afc6f7901646b
    (2 rows)
    ```

6.  \(Optional\) Alter and update the encrypted table if necessary.

    ```
    openGauss=# ALTER TABLE creditcard_info ADD COLUMN age int ENCRYPTED WITH (COLUMN_ENCRYPTION_KEY = ImgCEK, ENCRYPTION_TYPE = DETERMINISTIC);
    ALTER TABLE
    openGauss=# \d creditcard_info
            Table "public.creditcard_info"
       Column    |       Type        | Modifiers
    -------------+-------------------+------------
     id_number   | integer           |
     name        | text              |  encrypted
     credit_card | character varying |  encrypted
     age         | integer           |  encrypted
    openGauss=# ALTER TABLE creditcard_info DROP COLUMN age;
    ALTER TABLE
    openGauss=# update creditcard_info set credit_card = '80000000011111111' where name = 'joy';
    UPDATE 1
    openGauss=# select * from creditcard_info  where name = 'joy';
     id_number | name |    credit_card
    -----------+------+-------------------
             2 | joy  | 80000000011111111
    (1 row)
    ```


