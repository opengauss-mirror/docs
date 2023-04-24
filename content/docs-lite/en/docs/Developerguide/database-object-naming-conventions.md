# Database Object Naming Conventions<a name="EN-US_TOPIC_0000001149627969"></a>

The name of a database object must meet the following requirements: The name of a non-time series table ranges from 1 to 63 bytes and that of a time series table ranges from 1 to 53 characters. The name must start with a letter or underscore \(\_\), and can contain letters, digits, underscores \(\_\), dollar signs \($\), and number signs \(\#\).

-   \[Proposal\] Do not use reserved or non-reserved keywords to name database objects.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >You can use the select \* from pg\_get\_keywords\(\) query openGauss keyword or view the keyword in  [Keywords](../SQLReference/keywords.md).

-   \[Proposal\] Do not use a string enclosed in double quotation marks \(""\) to define the database object name, unless you need to specify its capitalization. Case sensitivity of database object names makes problem location difficult.
-   \[Proposal\] Use the same naming format for database objects.
    -   In a system undergoing incremental development or service migration, you are advised to comply with its historical naming conventions.
    -   You are advised to use multiple words separated with underscores \(\_\).
    -   You are advised to use intelligible names and common acronyms or abbreviations for database objects. Acronyms or abbreviations that are generally understood are recommended. For example, you can use English words or Chinese pinyin indicating actual business terms. The naming format should be consistent within a database instance.
    -   A variable name must be descriptive and meaningful. It must have a prefix indicating its type.

-   \[Proposal\] The name of a table object should indicate its main characteristics, for example, whether it is an ordinary, temporary, or unlogged table.
    -   An ordinary table name should indicate the business relevant to a dataset.
    -   Temporary tables are named in the format of  **tmp\_**_Suffix_.
    -   Unlogged tables are named in the format of  **ul\_**_Suffix_.
    -   Foreign tables are named in the format of  **f\_**_Suffix_.
    -   Do not create database objects whose names start with  **redis\_**.
    -   Do not create database objects whose names start with  **mlog\_**  or  **matviewmap\_**.

-   \[Proposal\] The name of a non-time series table object shall not exceed 63 bytes. If the length exceeds this value, the kernel truncates the table name. As a result, the table name is inconsistent with the configured name. In different character sets, characters may be truncated and unexpected characters may appear.

