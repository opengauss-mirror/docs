# Configuring TDE<a name="EN-US_TOPIC_0000001104244594"></a>

## Overview<a name="section1326254143019"></a>

Transparent data encryption (TDE) is used to encrypt data when the database writes the data to the storage medium and automatically decrypts the data when reading the data from the storage medium. This prevents attackers from reading data in the data file without database authentication, solving the static data leakage problem. This function is almost transparent to the application layer. You can determine whether to enable the transparent data encryption function as required.

## Prerequisites<a name="section756657103117"></a>

-   Data encryption keys (DEKs) must be protected by KMS so that the database can access KMS. You can apply for KMS on the [Data Encryption Workshop (DEW)](https://www.huaweicloud.com/product/dew.html).
-   The GUC parameter **[enable\_tde](../DataBaseReference/security-configuration.md#section17961238192110)** has been set to **on** to enable the TDE function of the database. In addition, you need to correctly set the **[tde\_cmk\_id](../DataBaseReference/security-configuration.md#section4132027193410)** parameter which indicates the master key ID of the database instance.

## Background<a name="section1049011225714"></a>

The current version interconnects with Huawei Cloud KMS to support table-level key storage and row-store table encryption. The specifications are as follows:

-   Encryption of a row-store table stored as a heap is supported.
-   Column-store encryption, materialized view encryption, and Ustore-based encryption are not supported.
-   Indexes, sequences, Xlogs, MOTs, and system catalogs cannot be encrypted.
-   You can specify an encryption algorithm when creating a table. Once specified, the encryption algorithm cannot be changed. If **enable\_tde** is set to **on** but the encryption algorithm **encrypt\_algo** is not specified when a table is created, the AES\_128\_CTR encryption algorithm is used by default.
-   If the encryption function is not enabled or the encryption algorithm is not specified when a table is created, the table cannot be switched to an encrypted table.
-   For a table that has been assigned an encryption key, switching between the encrypted and unencrypted states of the table does not change the key or encryption algorithm.
-   Data key rotation is supported only when the table encryption function is enabled.
-   Cross-region primary/standby synchronization of multiple copies for a single database instance is not supported. Cross-region scale-out of a single database instance is not supported. Cross-region backup and restoration, database instance DR, and data migration are not supported.
-   In hybrid cloud scenarios, if the Huawei Cloud KMS and management plane functions are used, TDE is supported. For other KMS services, TDE is not supported if no compatible API is available.
-   The query performance of encrypted tables is lower than that of non-encrypted tables. If high performance is required, exercise caution when enabling the encryption function.

## Key Management Mechanism<a name="section920142711513"></a>

In TDE, data encryption and decryption depend on a secure and reliable key management mechanism. This function uses a three-layer key structure to implement the key management mechanism, including the root key (RK), CMK, and data encryption key (DEK). CMKs are encrypted and protected by RKs, and DEKs are encrypted and protected by CMKs. DEKs are used to encrypt and decrypt user data. Each table corresponds to a DEK. RKs and CMKs are stored in KMS. You can apply to the KMS for creating DEKs. After the creation is successful, the key plaintext and ciphertext are returned. The DEK plaintext is cached in a hash table in the memory to reduce the KMS access frequency and improve performance. The key plaintext is stored only in the memory and is not flushed to the disk. In addition, the key plaintext that is not frequently used can be automatically deleted. Only the key plaintext used in the last one day is stored. The DEK ciphertext is stored in the database and flushed to the disk for persistence. When encrypting or decrypting user table data, if the corresponding key plaintext does not exist in the memory, apply to the KMS for decrypting the DEK before using it.

## Table-Level Encryption Solution<a name="section8693143685716"></a>

When creating a table, you can specify whether to encrypt the table and the encryption algorithm to be used. The encryption algorithm can be AES\_128\_CTR or SM4\_CTR, which cannot be changed once specified. If an encrypted table is created, the database automatically applies for a DEK for the table and saves the encryption algorithm, key ciphertext, and corresponding CMK ID in the **reloptions** column of the pg\_class system catalog in keyword=value format.

You can switch an encrypted table to a non-encrypted table or switch a non-encrypted table to an encrypted table. If the encryption function is not enabled when a table is created, the table cannot be switched to an encrypted table.

For encrypted tables, DEK rotation is supported. After the key rotation, the data encrypted using the old key is decrypted using the old key, and the newly written data is encrypted using the new key. The encryption algorithm is not changed during key rotation.

For a row-store table, the minimum data unit for each encryption and decryption is an 8 KB page. Each time the page is encrypted, an IV value is generated through the secure random number API, and the IV value, key ciphertext, and CMK ID are stored on the page and written to the storage medium. For an encrypted table, the encryption key information needs to be saved on the page. The occupied storage space increases by about 2.5% compared with that when the table is not encrypted.

## Creating an Encrypted Table<a name="section178015477237"></a>

Log in to the database, create the encrypted table **tde\_test1**, enable the encryption function, and set the encryption algorithm to **AES\_128\_CTR**.

```
openGauss=# CREATE TABLE tde_test (a int, b text) with (enable_tde = on, encrypt_algo = 'AES_128_CTR');
```

Create the encrypted table **tde\_test2** and enable the encryption function. If the encryption algorithm is not specified, the default encryption algorithm is **AES\_128\_CTR**.

```
openGauss=# CREATE TABLE tde_test2 (a int, b text) with (enable_tde = on);
```

Create the encrypted table **tde\_test3**, disable the encryption function, and set the encryption algorithm to **SM4\_CTR**.

```
openGauss=# CREATE TABLE tde_test3 (a int, b text) with (enable_tde = off, encrypt_algo = 'SM4_CTR');
```

## Setting the Encryption Parameter of an Encrypted Table<a name="section1287104795218"></a>

Log in to the database and set the encryption parameter of the **tde\_test1** table to **off**.

```
openGauss=# ALTER TABLE tde_test1 SET (enable_tde=off);
```

Set the encryption parameter of the **tde\_test1** table to **on**.

```
openGauss=# ALTER TABLE tde_test1 SET (enable_tde=on);
```

## Rotating Keys of an Encrypted Table <a name="section186955010234"></a>

Log in to the database and rotate the keys of the encrypted table **tde\_test1**.

```
openGauss=# ALTER TABLE tde_test1 ENCRYPTION KEY ROTATION;
```
