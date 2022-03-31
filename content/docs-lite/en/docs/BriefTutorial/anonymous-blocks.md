# Anonymous Blocks<a name="EN-US_TOPIC_0000001255141787"></a>

An anonymous block is one of the character blocks of a stored procedure and has no name. It is generally used for scripts or activities that are not executed frequently.

## Syntax<a name="en-us_topic_0283137481_en-us_topic_0237122218_en-us_topic_0059779171_sa07b23f78a6848f9afe146786372cfb1"></a>

[Figure 1](#en-us_topic_0283137481_en-us_topic_0237122218_en-us_topic_0059779171_f19ed9f384e0646f29744951d7eec8c3b)  shows the syntax diagram for an anonymous block.

**Figure  1**  anonymous\_block::=<a name="en-us_topic_0283137481_en-us_topic_0237122218_en-us_topic_0059779171_f19ed9f384e0646f29744951d7eec8c3b"></a>  
![](figures/anonymous_block.png "anonymous_block")

Details about the syntax diagram are as follows:

-   The execution section of an anonymous block starts with a BEGIN statement, has a break with an END statement, and ends with a semicolon \(;\). Type a slash \(/\) and press  **Enter**  to execute the statement.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >The terminator "/" must be written in an independent row.

-   The declaration section includes the variable definition, type, and cursor definition.
-   A simplest anonymous block does not execute any commands. At least one statement, even a NULL statement, must be presented in any implementation blocks.

## Parameter Description<a name="section6973139183420"></a>

-   **DECLARE**

    Specifies an optional keyword used to begin a DECLARE statement. This keyword can be used to declare a data type, variable, or cursor. The use of this keyword depends on the context in which the block is located.

-   **declaration\_statements**

    Specifies the declaration of a data type, variable, cursor, exception, or procedure whose scope is limited to the block. Each declaration must be terminated with a semicolon \(;\).

-   **BEGIN**

    Specifies the mandatory keyword for introducing an executable section. The section can contain one or more SQL or PL/SQL statements. A BEGIN-END block can contain nested BEGIN-END blocks.

-   **execution\_statements**

    Specifies PL/SQL or SQL statements. Each statement must be terminated with a semicolon \(;\).

-   **END**

    Specifies the required keyword for ending a block.


## Examples<a name="section26821512261"></a>

```
-- Create a null statement block.
openGauss=# BEGIN
     NULL; 
END;
/

-- Create a demonstration table.
openGauss=# CREATE TABLE table1(id1 INT, id2 INT, id3 INT);
CREATE TABLE

-- Use an anonymous block to insert data.
openGauss=# BEGIN
             insert into table1 values(1,2,3);
            END;
            /
ANONYMOUS BLOCK EXECUTE

-- Query the inserted data.
openGauss=# select * from table1;
 id1 | id2 | id3
-----+-----+-----
   1 |   2 |   3
(1 rows)
```

