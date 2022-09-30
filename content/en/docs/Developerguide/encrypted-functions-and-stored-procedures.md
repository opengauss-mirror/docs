# Encrypted Functions and Stored Procedures<a name="EN-US_TOPIC_0000001149587981"></a>

In the current version, only encrypted functions and stored procedures in SQL or PL/pgSQL are supported. Because users are unaware of the creation and execution of functions or stored procedures in an encrypted stored procedure, the syntax has no difference from that of non-encrypted functions and stored procedures.

The  **gs\_encrypted\_proc**  system catalog is added to the function or stored procedure for encrypted equality query to store the returned original data type.

## Creating and Executing a Function or Stored Procedure that Involves Encrypted Columns<a name="section4943131112294"></a>

1.  Create a key. For details, see  [Using GSQL to Operate an Encrypted Database](using-gsql-to-operate-an-encrypted-database.md)  and  [Using JDBC to Operate an Encrypted Database](using-jdbc-to-operate-an-encrypted-database.md).
2.  Create an encrypted table.

    ```
    openGauss=# CREATE TABLE creditcard_info (
    openGauss(#   id_number int,
    openGauss(#   name  text,
    openGauss(#   credit_card varchar(19) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC)
    openGauss(# ) with (orientation=row) distribute by hash(id_number);
    CREATE TABLE
    ```

3.  Insert data.

    ```
    openGauss=# insert into creditcard_info values(1, 'Avi', '1234567890123456');
    INSERT 0 1
    openGauss=# insert into creditcard_info values(2, 'Eli', '2345678901234567');
    INSERT 0 1
    ```

4.  Create a function supporting encrypted equality query.

    ```
    openGauss=# CREATE FUNCTION f_encrypt_in_sql(val1 text, val2 varchar(19)) RETURNS text AS 'SELECT name from creditcard_info where name=$1 or credit_card=$2 LIMIT 1' LANGUAGE SQL;
    CREATE FUNCTION
    openGauss=# CREATE FUNCTION f_encrypt_in_plpgsql (val1 text, val2 varchar(19))
    openGauss-# RETURNS text AS $$
    openGauss$# DECLARE
    openGauss$# c text;
    openGauss$# BEGIN
    openGauss$#     SELECT into c name from creditcard_info where name=$1 or credit_card =$2 LIMIT 1;
    openGauss$#     RETURN c;
    openGauss$# END; $$
    openGauss-# LANGUAGE plpgsql;
    CREATE FUNCTION
    ```

5.  Execute the function.

    ```
    openGauss=# SELECT f_encrypt_in_sql('Avi','1234567890123456');
     f_encrypt_in_sql
    ------------------
     Avi
    (1 row)
    
    openGauss=# SELECT f_encrypt_in_plpgsql('Avi', val2=>'1234567890123456');
     f_encrypt_in_plpgsql
    ----------------------
     Avi
    (1 row)
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Because the query, that is, the dynamic query statement executed in a function or stored procedure, is compiled during execution, the table name and column name in the function or stored procedure must be known in the creation phase. The input parameter cannot be used as a table name or column name, or any connection mode.
>-   Among the  **RETURNS**,  **IN**, and  **OUT**  parameters, encrypted and non-encrypted parameters cannot be used together. Although the parameter types are all original, the actual types are different.
>-   For advanced package interfaces, for example,  **dbe\_output.print\_line\(\)**, decryption is not performed on the interfaces whose output is printed on the server. This is because when the encrypted data type is forcibly converted into the plaintext original data type, the default value of the data type is printed.
>-   In the current version,  **LANGUAGE**  of functions and stored procedures can only be  **SQL**  and  **PL/pgSQL**, and does not support other procedural languages such as  **C**  and  **Java**.
>-   Other functions or stored procedures for querying encrypted columns cannot be executed in a function or stored procedure.
>-   In the current version, default values cannot be assigned to variables in  **DEFAULT**  or  **DECLARE**  statements, and return values in  **DECLARE**  statements cannot be decrypted. You can use input parameters and output parameters instead when executing functions.
>-   **gs\_dump**  cannot be used to back up functions involving encrypted columns.
>-   Keys cannot be created in functions or stored procedures.
>-   In this version, encrypted functions and stored procedures do not support triggers.
>-   Encrypted equality query functions and stored procedures do not support the escape of the PL/pgSQL syntax. The  **CREATE FUNCTION AS'***Syntax body***'**  syntax whose syntax body is marked with single quotation marks \(''\) can be replaced with the  **CREATE FUNCTION AS $$***Syntax body*** $$**  syntax.
>-   The definition of an encrypted column cannot be modified in an encrypted equality query function or stored procedure, including creating an encrypted table and adding an encrypted column. Because the function is executed on the server, the client cannot determine whether the cache needs to be refreshed. The column can be encrypted only after the client is disconnected or the cache of the encrypted column on the client is refreshed.
