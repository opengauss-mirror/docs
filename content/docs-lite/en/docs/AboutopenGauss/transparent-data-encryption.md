# Transparent Data Encryption<a name="EN-US_TOPIC_0000001156553727"></a>

## Availability<a name="section8174682"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section6463280"></a>

Transparent data encryption \(TDE\) encrypts data when the database writes the data to the storage medium and automatically decrypts the data when reading the data from the storage medium. This prevents attackers from reading data in the data file without database authentication, solving the static data leakage problem. This function is almost transparent to the application layer. You can determine whether to enable the transparent data encryption function as required.

## Benefits<a name="section58169521"></a>

To prevent attackers from reading data files without authentication, you can use the transparent data encryption function to encrypt data files in the database. This ensures that users can read decrypted data only after starting and connecting to the database properly.

## Description<a name="section53763648"></a>

The three-layer key structure is used to implement the key management mechanism, including the root key \(RK\), cluster master key \(CMK\), and data encryption key \(DEK\). CMKs are encrypted and protected by RKs, and DEKs are encrypted and protected by CMKs. DEKs are used to encrypt and decrypt user data. Each table corresponds to a DEK.

Table-level encryption is supported. When creating a table, you can specify whether to encrypt the table and the encryption algorithm to be used. The encryption algorithm can be AES\_128\_CTR or SM4\_CTR, which cannot be changed once specified. If an encrypted table is created, the database automatically applies for a DEK for the table and saves the encryption algorithm, key ciphertext, and corresponding CMK ID in the  **reloptions**  column of the pg\_class system catalog in keyword=value format.

You can switch an encrypted table to a non-encrypted table or switch a non-encrypted table to an encrypted table. If the encryption function is not enabled when a table is created, the table cannot be switched to an encrypted table.

For encrypted tables, DEK rotation is supported. After the key rotation, the data encrypted using the old key is decrypted using the old key, and the newly written data is encrypted using the new key. The encryption algorithm is not changed during key rotation.

## Enhancements<a name="section14110789"></a>

None.

## Constraints<a name="section06531946143616"></a>

The current version interconnects with HUAWEI CLOUD KMS to support table-level key storage and row-store table encryption. The specifications are as follows:

-   Encryption of a row-store table stored as a heap is supported.
-   Column-store encryption, materialized view encryption, and ustore storage engine encryption are not supported.
-   Indexes, sequences, Xlogs, MOTs, and system catalogs cannot be encrypted.
-   You can specify an encryption algorithm when creating a table. Once specified, the encryption algorithm cannot be changed. If  **enable\_tde**  is set to  **on**  but the encryption algorithm  **encrypt\_algo**  is not specified when a table is created, the AES-128-CTR encryption algorithm is used by default.
-   If the encryption function is not enabled or the encryption algorithm is not specified when a table is created, the table cannot be switched to an encrypted table.
-   For a table that has been assigned an encryption key, switching between the encrypted and unencrypted states of the table does not change the key or encryption algorithm.
-   Data key rotation is supported only when the table encryption function is enabled.
-   Cross-region primary/standby synchronization of multiple copies in a single cluster is not supported. Cross-region scaling of a single cluster is not supported. Cross-region backup and restoration, cluster DR, and data migration are not supported.
-   In hybrid cloud scenarios, if the HUAWEI CLOUD KMS and management plane functions are used, transparent data encryption is supported. Other KMS services are not supported if their APIs are incompatible.
-   The query performance of encrypted tables is lower than that of non-encrypted tables. If high performance is required, exercise caution when enabling the encryption function.

## Dependencies<a name="section59888241"></a>

The key management service is provided by the external KMS. The current version can interconnect with HUAWEI CLOUD KMS.

