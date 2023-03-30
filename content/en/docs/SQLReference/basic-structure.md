# Basic Structure<a name="EN-US_TOPIC_0245374607"></a>

## Structure<a name="en-us_topic_0237122217_en-us_topic_0059778559_s764fc3b756ed40e6a5ad9af5559feafa"></a>

A PL/SQL block can contain a sub-block which can be placed in any section. The following describes the architecture of a PL/SQL block:

-   **DECLARE**: declares variables, types, cursors, and regional stored procedures and functions used in the PL/SQL block.

    ```
    DECLARE
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >This part is optional if no variable needs to be declared.  
    >-   An anonymous block may omit the  **DECLARE**  keyword if no variable needs to be declared.  
    >-   For a stored procedure,  **AS**  is used, which is equivalent to  **DECLARE**. The  **AS**  keyword must be reserved even if there is no variable declaration part.  

-   **EXECUTION**: specifies procedure and SQL statements. It is the main part of a program. Mandatory.

    ```
    BEGIN
    ```

-   Exception part: processes errors. Optional.

    ```
    EXCEPTION
    ```

-   End

    ```
    END;
    /
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >You are not allowed to use consecutive tabs in the PL/SQL block because they may result in an exception when the  **gsql**  tool is executed with the  **-r**  parameter specified.  


## Category<a name="en-us_topic_0237122217_en-us_topic_0059778559_se3799278381c4fcc9654d957d2f87ba0"></a>

PL/SQL blocks are classified into the following types:

-   Anonymous block: a dynamic block that can be executed only for once. For details about the syntax, see  [Figure 1](anonymous-blocks.md#en-us_topic_0237122218_en-us_topic_0059779171_f19ed9f384e0646f29744951d7eec8c3b).
-   Subprogram: a stored procedure, function, operator, or packages stored in a database. A subprogram created in a database can be called by other programs.

