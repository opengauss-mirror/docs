# Data Encryption and Storage<a name="EN-US_TOPIC_0000001088406676"></a>

## Availability<a name="section8174682"></a>

This feature is available since V300R002C00.

## Introduction<a name="section6463280"></a>

Imported data is encrypted before stored.

## Benefits<a name="section58169521"></a>

You can use encrypted import interfaces to encrypt sensitive information and store it in a table.

## Description<a name="section53763648"></a>

openGauss provides the encryption function  **gs\_encrypt\_aes128\(\)**  and decryption function  **gs\_decrypt\_aes128\(\)**. Before you import data to a certain column in a table, you can use this function to encrypt the data. The function can be called using a statement in the following format:

**gs\_encrypt\_aes128\(**_column_**, **_key_**\)**

In the preceding command,  **key**  indicates the initial password specified by the user, which is used to derive the encryption key. To encrypt an entire table, you need to write an encryption function for each column.

If a user with the required permission wants to view specific data, the user can decrypt required columns using the decryption function interface  **gs\_decrypt\_aes128\(**_column_**, **_key_**\)**. To invoke the interface, run the following command:

**gs\_decrypt\_aes128\(column, key\)**

## Enhancements<a name="section14110789"></a>

None

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section59888241"></a>

None

