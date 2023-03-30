# CREATE TABLESPACE<a name="EN-US_TOPIC_0289900078"></a>

## Function<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_sbf00214c21e441f5adc2bc08ecaca4e7"></a>

**CREATE TABLESPACE**  creates a tablespace in a database.

## Precautions<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s54948265e9f34f1fac838f60ac0bd3a6"></a>

-   The system administrator or a user who inherits the  **gs\_roles\_tablespace**  permission of the built-in role can create a tablespace.
-   Do not run  **CREATE TABLESPACE**  in a transaction block.
-   If executing  **CREATE TABLESPACE**  fails but the internal directory \(or file\) has been created, the directory \(or file\) will remain. You need to manually clear it before creating the tablespace again. If there are residual files of soft links for the tablespace in the data directory, delete the residual files.
-   **CREATE TABLESPACE**  cannot be used for two-phase transactions. If it fails on some nodes, the execution cannot be rolled back.
-   For details about how to prepare for creating tablespaces, see the description of parameters below.
-   In scenarios such as HCS, you are not advised to use user-defined tablespaces. This is because user-defined tablespaces are usually used with storage media other than the main storage \(storage device where the default tablespace is located, such as a disk\) to isolate I/O resources that can be used by different services. In HCS scenarios, storage devices use standard configurations and do not have other available storage media. If the customized tablespace is not properly used, the system cannot run stably for a long time and the overall performance is affected. Therefore, you are advised to use the default tablespace.

## Syntax<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s9f8a8395cc464cd2a34dec7a82fedc7b"></a>

```
CREATE TABLESPACE tablespace_name
    [ OWNER user_name ] [RELATIVE] LOCATION 'directory' [ MAXSIZE 'space_size' ]
    [with_option_clause];
```

The  **with\_option\_clause**  syntax for creating a general tablespace is as follows:

```
WITH ( {filesystem= { 'general'| "general" | general} |
    random_page_cost = { 'value ' | value } |
    seq_page_cost = { 'value ' | value }}[,...])
```

## Parameter Description<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_see2346106f4e402da499ad74c533dfa8"></a>

-   **tablespace\_name**

    Specifies name of a tablespace to be created.

    The tablespace name must be distinct from the name of any existing tablespace in openGauss and cannot start with "pg", which are reserved for system catalog spaces.

    Value range: a string. It must comply with the identifier naming convention.

-   **OWNER user\_name**

    Specifies the name of the user who will own the tablespace. If omitted, the default owner is the current user. 

    Only system administrators can create tablespaces, but they can use the  **OWNER**  clause to assign ownership of tablespaces to non-**Sysadmin**  administrators.

    Value range: a string. It must be an existing user.

-   **RELATIVE**

    Relative path. The  **LOCATION**  directory is relative to the data directory in each database node.

    Directory hierarchy: the relative path of the database node directory  **/pg\_location/**

    A relative path contains a maximum of two levels.

-   **LOCATION directory**

    Specifies the directory used for the tablespace. The directory must meet the following requirements:

    -   The openGauss system user must have the read and write permissions on the directory, and the directory must be empty. If the directory does not exist, the system automatically creates it.
    -   The directory must be an absolute path, and does not contain special characters, such as dollar sign \($\) and greater-than sign \(\>\).
    -   The directory cannot be specified under the database data directory.
    -   The directory must be a local path.

    Value range: a string. It must be a valid directory.

-   **MAXSIZE 'space\_size'**

    Specifies the maximum value of the tablespace in a single database node.

    Value range: a string consisting of a positive integer and unit. The unit can be KB, MB, GB, TB, or PB currently. The unit of parsed value is KB and cannot exceed the range that can be expressed in 64 bits, which is 1 KB to 9007199254740991 KB.

-   **random\_page\_cost**

    Specifies the cost of randomly reading the page overhead.

    Value range: 0 to 1.79769e+308

    Default value: value of the GUC parameter  **random\_page\_cost**

-   **seq\_page\_cost**

    Specifies the cost of reading the page overhead in specified order.

    Value range: 0 to 1.79769e+308

    Default value: value of GUC parameter  **seq\_page\_cost**


## Examples<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e"></a>

```
-- Create a tablespace.
openGauss=# CREATE TABLESPACE ds_location1 RELATIVE LOCATION 'tablespace/tablespace_1';

-- Create user joe.
openGauss=# CREATE ROLE joe IDENTIFIED BY 'xxxxxxxxx';

-- Create user jay.
openGauss=# CREATE ROLE jay IDENTIFIED BY 'xxxxxxxxx';

-- Create a tablespace and set its owner to user joe.
openGauss=# CREATE TABLESPACE ds_location2 OWNER joe RELATIVE LOCATION 'tablespace/tablespace_1';

-- Rename the ds_location1 tablespace to ds_location3.
openGauss=# ALTER TABLESPACE ds_location1 RENAME TO ds_location3;

-- Change the owner of the ds_location2 tablespace.
openGauss=# ALTER TABLESPACE ds_location2 OWNER TO jay;

-- Delete the tablespace.
openGauss=# DROP TABLESPACE ds_location2;
openGauss=# DROP TABLESPACE ds_location3;

-- Delete users.
openGauss=# DROP ROLE joe;
openGauss=# DROP ROLE jay;
```

## Helpful Links<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s59e2126c54fc4725a3a50713b9163304"></a>

[CREATE DATABASE](create-database.md),  [CREATE TABLE](create-table.md),  [CREATE INDEX](create-index.md),  [DROP TABLESPACE](drop-tablespace.md), and  [ALTER TABLESPACE](alter-tablespace.md)

## Suggestions<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_section60380346161036"></a>

-   create tablespace

    You are not advised to create tablespaces in a transaction.
