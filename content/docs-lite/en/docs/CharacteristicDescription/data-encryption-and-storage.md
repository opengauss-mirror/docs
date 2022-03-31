# Data Encryption and Storage<a name="EN-US_TOPIC_0000001105075474"></a>

## Availability<a name="section8174682"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section6463280"></a>

Imported data is encrypted before stored.

## Benefits<a name="section58169521"></a>

You can use encrypted import interfaces to encrypt sensitive information and store it in a table.

## Description<a name="section53763648"></a>

openGauss provides the encryption functions  **gs\_encrypt\_aes128\(\)**  and  **gs\_encrypt\(\)**, and decryption functions  **gs\_decrypt\_aes128\(\)**  and  **gs\_decrypt\(\)**. Before you import data to a certain column in a table, you can use this function to encrypt the data. The function can be called using a statement in the following format:

```
gs_encrypt_aes128(column, key), gs_encrypt (decryptstr, keystr, decrypttype)
```

In the preceding command,  **key**  indicates the initial password specified by the user, which is used to derive the encryption key. To encrypt an entire table, you need to write an encryption function for each column.

If a user with the required permission wants to view specific data, the user can decrypt required columns using the decryption function interface  **gs\_decrypt\_aes128\(**_column_**, **_key_**\)**. To invoke the interface, run the following command:

```
gs_decrypt_aes128(column, key), gs_decrypt(decryptstr, keystr, decrypttype)
```

## Enhancements<a name="section14110789"></a>

None.

## Constraints<a name="section06531946143616"></a>

None.

## Dependencies<a name="section59888241"></a>

None.

