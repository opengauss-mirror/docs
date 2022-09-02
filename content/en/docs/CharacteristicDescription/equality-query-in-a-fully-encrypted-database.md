# Equality Query in a Fully-encrypted Database<a name="EN-US_TOPIC_0000001105235294"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

The encrypted database aims to protect privacy throughout the data lifecycle. In this way, data is always in ciphertext during transmission, computing, and storage regardless of the service scenario and environment. After the data owner encrypts data on the client and sends the encrypted data to the server, no attacker can obtain valuable information even if the attacker steals user data by exploiting system vulnerabilities. In this way, data privacy is protected.

## Benefits<a name="section28200442"></a>

The entire service data flow is in ciphertext during data processing, so the following can be implemented by using a fully-encrypted database:

1.  Protect data privacy and security throughout the lifecycle on the cloud. Attackers cannot obtain valid information from the database server regardless of the data status.
2.  Help cloud service providers obtain third-party trust. Users, including service administrators and O&M administrators in enterprise service scenarios and application developers in consumer cloud services, can keep keys by themselves so that users with high permissions cannot obtain valid data.
3.  Enable cloud databases to better comply with personal privacy protection laws and regulations with the help of the fully-encrypted database.

## Description<a name="section3730161075314"></a>

From the perspective of users, the encrypted equality query functions are divided into three parts, which are implemented by the newly added KeyTool and the enhanced openGauss gsql client.

First, this feature provides the client key management function. Users can use KeyTool to generate, destroy, and update CMKs, and import and export keys. With the import and export functions of KeyTool, CMKs can be transmitted between different clients. In addition, the KeyTool implements key management on a single client. By configuring management files, you can store and update keys.

In addition, this feature provides the key creation and encrypted table creation functions. The SQL syntax CREATE CLINET MASTER KEY and CREATE COLUMN ENCRYPTION KEY are added to record and manage CMK and CEK metadata in the database. The CMK and CEK information is recorded in the new system catalog. The CREATE TABLE syntax is extended to specify a column encryption key and encryption algorithm for each sensitive information column in a table, facilitating subsequent ciphertext data storage.

This feature supports the encrypted equality query function, which is the core of the entire feature. Although users are unaware of the ciphertext query, the query of sensitive data is restricted by the specifications of the current encrypted equality query.

From the overall perspective, this feature is used to store and manage data based on sensitive data protection requirements and implement query tasks based on ciphertext data.

## Enhancements<a name="section2534498"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   Data is encrypted at the column level, and encryption policies cannot be differentiated by row level.
-   Except the RENAME operation, the ALTER TABLE syntax cannot be used to change columns in an encrypted table \(including the conversion between encrypted and unencrypted columns\). The ADD and DROP operations can be used to add and delete encrypted columns, respectively.
-   The CHECK\(COLUMN IS NOT NULL\) syntax can be used, but most check constraint syntax cannot be set for encrypted columns.
-   When  **support\_extended\_features **is set to  **off**, primary key and unique cannot be used for encrypted columns. When  **support\_extended\_features **is set to  **on**, only primary key and unique can be used for encrypted columns.
-   Different data types cannot be implicitly converted.
-   The set operation cannot be performed between ciphertexts of different data types.
-   Range partitioning cannot be created for encrypted columns.
-   Only the repeat and empty\_blob\(\) functions can be used to encrypt columns.
-   The current version supports only gsql and JDBC \(deployed on a Linux OS\) clients. Other clients such as ODBC do not support encrypted equality query.
-   Data can only be imported to the encrypted table by running  **copy from stdin**,  **\\copy**, or  **insert into values \(...\)**  on the client.
-   Copying an encrypted table to a file is not supported.
-   The system does not support encrypted queries, such as sorting, range query, and fuzzy query, except equality query.
-   The encrypted syntax of stored procedures for some functions is supported. For details about the constraints, see "Encrypted Functions and Stored Procedures" in the  *Developer Guide*.
-   Non-encrypted table data cannot be inserted into encrypted table data using the  **INSERT INTO... SELECT...**  or  **MERGE INTO**  syntax.
-   For a request in connection state, the CEK information change on the server can be detected only after the cache update operation is triggered \(for example, the user is changed or the encrypted column fails to be decrypted\) and the connection is re-established.
-   Encrypted equality query is not supported on columns encrypted using the random encryption algorithm.
-   An error is reported if the two attribute conditions used for comparison in the encrypted equality query use different data encryption keys.
-   Encrypted equality query is not supported in time series tables and foreign tables. The ustore storage engine is not supported.
-   If the database service configuration \(such as the pg\_settings system catalog, permission, key, and encrypted column\) is changed, you need to re-establish a JDBC connection to make the configuration take effect.
-   Multiple SQL statements cannot be executed at the same time. This constraint does not apply to the scenario where the INSERT INTO statement is executed in multiple batches.

- The encrypted database does not encrypt empty strings of zero length.

- Deterministic encryption is prone to frequency attacks. Therefore, it is not recommended that deterministic encryption be used in scenarios where the plaintext frequency is obviously distributed.

-   Encrypted equality query supports the following data types:

    <a name="table1495331175519"></a>
    <table><tbody><tr id="row9999101175512"><td class="cellrowborder" valign="top" width="21.95%"><p id="p699941195514"><a name="p699941195514"></a><a name="p699941195514"></a>Category</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.380000000000003%"><p id="p209994112554"><a name="p209994112554"></a><a name="p209994112554"></a>Type</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.669999999999995%"><p id="p16999111116552"><a name="p16999111116552"></a><a name="p16999111116552"></a>Description</p>
    </td>
    </tr>
    <tr id="row1899981125519"><td class="cellrowborder" rowspan="5" valign="top" width="21.95%"><p id="p399991116559"><a name="p399991116559"></a><a name="p399991116559"></a>Integer types</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.380000000000003%"><p id="p19999151110555"><a name="p19999151110555"></a><a name="p19999151110555"></a>tinyint/tinyint(n)</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.669999999999995%"><p id="p13999171118557"><a name="p13999171118557"></a><a name="p13999171118557"></a>Tiny integer, which is the same as int1.</p>
    </td>
    </tr>
    <tr id="row599931110554"><td class="cellrowborder" valign="top"><p id="p18091275512"><a name="p18091275512"></a><a name="p18091275512"></a>smallint</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p50612165512"><a name="p50612165512"></a><a name="p50612165512"></a>Small integer, which is the same as int2.</p>
    </td>
    </tr>
    <tr id="row1701712205515"><td class="cellrowborder" valign="top"><p id="p604126559"><a name="p604126559"></a><a name="p604126559"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p17071295510"><a name="p17071295510"></a><a name="p17071295510"></a>Common integer.</p>
    </td>
    </tr>
    <tr id="row9011215559"><td class="cellrowborder" valign="top"><p id="p901912105519"><a name="p901912105519"></a><a name="p901912105519"></a>binary_integer</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p1009120553"><a name="p1009120553"></a><a name="p1009120553"></a>Oracle compatibility type. Generally, the value is an integer.</p>
    </td>
    </tr>
    <tr id="row1801712145520"><td class="cellrowborder" valign="top"><p id="p90412185519"><a name="p90412185519"></a><a name="p90412185519"></a>bigint/bigint(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p707122551"><a name="p707122551"></a><a name="p707122551"></a>Big integer, which is the same as int8.</p>
    </td>
    </tr>
    <tr id="row15061255513"><td class="cellrowborder" rowspan="2" valign="top" width="21.95%"><p id="p00161217551"><a name="p00161217551"></a><a name="p00161217551"></a>Numeric data types</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.380000000000003%"><p id="p50212105510"><a name="p50212105510"></a><a name="p50212105510"></a>numeric(p,s)</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.669999999999995%"><p id="p801612195511"><a name="p801612195511"></a><a name="p801612195511"></a>A number with the precision <strong id="b21423341452152"><a name="b21423341452152"></a><a name="b21423341452152"></a>p</strong>.</p>
    </td>
    </tr>
    <tr id="row905123556"><td class="cellrowborder" valign="top"><p id="p110121215514"><a name="p110121215514"></a><a name="p110121215514"></a>number</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p1802123559"><a name="p1802123559"></a><a name="p1802123559"></a>Oracle compatibility type, which is the same as numeric(p,s).</p>
    </td>
    </tr>
    <tr id="row1500125559"><td class="cellrowborder" rowspan="3" valign="top" width="21.95%"><p id="p17016128559"><a name="p17016128559"></a><a name="p17016128559"></a>Floating point types</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.380000000000003%"><p id="p1503128552"><a name="p1503128552"></a><a name="p1503128552"></a>float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.669999999999995%"><p id="p2007126553"><a name="p2007126553"></a><a name="p2007126553"></a>Single-precision floating point.</p>
    </td>
    </tr>
    <tr id="row60412155514"><td class="cellrowborder" valign="top"><p id="p130151211559"><a name="p130151211559"></a><a name="p130151211559"></a>float8</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p9031215557"><a name="p9031215557"></a><a name="p9031215557"></a>Double-precision floating point.</p>
    </td>
    </tr>
    <tr id="row006121552"><td class="cellrowborder" valign="top"><p id="p307128556"><a name="p307128556"></a><a name="p307128556"></a>double precision</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p190151215551"><a name="p190151215551"></a><a name="p190151215551"></a>Double-precision floating point.</p>
    </td>
    </tr>
    <tr id="row19020123550"><td class="cellrowborder" rowspan="5" valign="top" width="21.95%"><p id="p12001285519"><a name="p12001285519"></a><a name="p12001285519"></a>Character data types</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.380000000000003%"><p id="p141712155514"><a name="p141712155514"></a><a name="p141712155514"></a>char/char(n)</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.669999999999995%"><p id="p14118126557"><a name="p14118126557"></a><a name="p14118126557"></a>Fixed-length character string. If the length is insufficient, add spaces. The default precision is <strong id="b3575420102214"><a name="b3575420102214"></a><a name="b3575420102214"></a>1</strong>.</p>
    </td>
    </tr>
    <tr id="row911312145517"><td class="cellrowborder" valign="top"><p id="p61101219550"><a name="p61101219550"></a><a name="p61101219550"></a>varchar(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p1912128556"><a name="p1912128556"></a><a name="p1912128556"></a>Variable-length character string, where <strong id="b5522127752152"><a name="b5522127752152"></a><a name="b5522127752152"></a>n</strong> indicates the maximum number of bytes.</p>
    </td>
    </tr>
    <tr id="row011912105510"><td class="cellrowborder" valign="top"><p id="p1414126556"><a name="p1414126556"></a><a name="p1414126556"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p121121210555"><a name="p121121210555"></a><a name="p121121210555"></a>Text type.</p>
    </td>
    </tr>
    <tr id="row017129559"><td class="cellrowborder" valign="top"><p id="p5114125555"><a name="p5114125555"></a><a name="p5114125555"></a>varchar2(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p20161219558"><a name="p20161219558"></a><a name="p20161219558"></a>Oracle compatibility type, which is the same as varchar(n).</p>
    </td>
    </tr>
    <tr id="row488418327165"><td class="cellrowborder" valign="top"><p id="p1543093581519"><a name="p1543093581519"></a><a name="p1543093581519"></a>clob</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p243014355155"><a name="p243014355155"></a><a name="p243014355155"></a>Character large object.</p>
    </td>
    </tr>
    <tr id="row1111312105512"><td class="cellrowborder" rowspan="2" valign="top" width="21.95%"><p id="p12161275514"><a name="p12161275514"></a><a name="p12161275514"></a>Binary data types</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.380000000000003%"><p id="p1012012145517"><a name="p1012012145517"></a><a name="p1012012145517"></a>bytea</p>
    </td>
    <td class="cellrowborder" valign="top" width="52.669999999999995%"><p id="p1710124559"><a name="p1710124559"></a><a name="p1710124559"></a>Variable-length binary string.</p>
    </td>
    </tr>
    <tr id="row1911012165515"><td class="cellrowborder" valign="top"><p id="p19116122552"><a name="p19116122552"></a><a name="p19116122552"></a>blob</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p011012155515"><a name="p011012155515"></a><a name="p011012155515"></a>Binary large object.</p>
    </td>
    </tr>
    </tbody>
    </table>


## Dependencies<a name="section22810484"></a>

None.
