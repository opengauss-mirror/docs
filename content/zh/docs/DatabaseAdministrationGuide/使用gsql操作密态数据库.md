# 使用gsql操作密态数据库

## 操作步骤<a name="section199001315531"></a>

1.  以操作系统用户omm登录CN所在主机。
2.  执行以下命令打开密态开关，连接密态数据库。

    ```
    gsql -p PORT postgres -r -C
    ```

3.  创建客户端主密钥CMK和列加密密钥CEK。创建CMK的语法请参考[CREATE CLIENT MASTER KEY](../SQLReference/CREATE-CLIENT-MASTER-KEY.md)、创建的CEK的语法请参考[CREATE COLUMN ENCRYPTION KEY](../SQLReference/CREATE-COLUMN-ENCRYPTION-KEY.md)。

    ```
    --创建客户端加密主密钥(CMK)
    openGauss=# CREATE CLIENT MASTER KEY ImgCMK1 WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value1", ALGORITHM = RSA_2048);
    openGauss=# CREATE CLIENT MASTER KEY ImgCMK WITH (KEY_STORE = localkms, KEY_PATH = "key_path_value2", ALGORITHM = RSA_2048);
    openGauss=# CREATE COLUMN ENCRYPTION KEY ImgCEK1 WITH VALUES (CLIENT_MASTER_KEY = ImgCMK1, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
    CREATE COLUMN ENCRYPTION KEY
    openGauss=# CREATE COLUMN ENCRYPTION KEY ImgCEK WITH VALUES (CLIENT_MASTER_KEY = ImgCMK, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);
    CREATE COLUMN ENCRYPTION KEY
    ```

    查询存储密钥信息的系统表结果如下。

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

4.  创建加密表。

    ```
    openGauss=# CREATE TABLE creditcard_info (id_number    int, name         text encrypted with (column_encryption_key = ImgCEK, encryption_type = DETERMINISTIC),
    credit_card  varchar(19) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC));
    NOTICE:  The 'DISTRIBUTE BY' clause is not specified. Using 'id_number' as the distribution column by default.
    HINT:  Please use 'DISTRIBUTE BY' clause to specify suitable data distribution column.
    CREATE TABLE
    ```

    查询表的详细信息如下，Modifiers值为encrypted则表示该列是加密列。

    ```
    openGauss=# \d creditcard_info
            Table "public.creditcard_info"
       Column    |       Type        | Modifiers
    -------------+-------------------+------------
     id_number   | integer           |
     name        | text              |  encrypted
     credit_card | character varying |  encrypted
    ```

5.  向加密表插入数据并进行等值查询。

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
    注意：使用非密态客户端查看该加密表数据时是密文
    openGauss=# select id_number,name from creditcard_info;
     id_number |                                                                         name
    -----------+------------------------------------------------------------------------------------------------------------------------------------------------------
             1 | \x011aefabd754ded0a536a96664790622487c4d366d313aecd5839e410a46d29cba96a60e4831000000ee79056a114c9a6c041bb552b78052e912a8b730609142074c63791abebd0d38
             2 | \x011aefabd76853108eb406c0f90e7c773b71648fa6e2b8028cf634b49aec65b4fcfb376f3531000000f7471c8686682de215d09aa87113f6fb03884be2031ef4dd967afc6f7901646b
    (2 rows)
    ```

6.  （可选）对加密表进行alter和update操作。

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


