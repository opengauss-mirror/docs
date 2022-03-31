# BEGIN<a name="EN-US_TOPIC_0289900173"></a>

## Function<a name="en-us_topic_0283137310_en-us_topic_0237122087_en-us_topic_0059778122_s575f09bb20db48a4a74f6544c1593758"></a>

**BEGIN**  may be used to initiate an anonymous block or a single transaction. This section describes the syntax of  **BEGIN**  used to initiate an anonymous block. For details about the  **BEGIN**  syntax that initiates transactions, see  [START TRANSACTION](start-transaction.md).

An anonymous block is a structure that can dynamically create and execute stored procedure code instead of permanently storing code as a database object in the database.

## Precautions<a name="en-us_topic_0283137310_en-us_topic_0237122087_en-us_topic_0059778122_sdc4b0a2020cb4122a1e23f44459b54dc"></a>

None

## Syntax<a name="en-us_topic_0283137310_en-us_topic_0237122087_en-us_topic_0059778122_s9591de70a4254764b3ec5daed66d030a"></a>

-   Enable an anonymous block.

    ```
    [DECLARE [declare_statements]] 
    BEGIN
    execution_statements  
    END;
    /
    ```

-   Start a transaction.

    ```
    BEGIN [ WORK | TRANSACTION ]
      [ 
        { 
           ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
           | { READ WRITE | READ ONLY }
          } [, ...] 
      ];
    ```


## Parameter Description<a name="en-us_topic_0283137310_en-us_topic_0237122087_en-us_topic_0059778122_scabeb8532e944460bef66392557a9480"></a>

-   **declare\_statements**

    Declares a variable, including its name and type, for example,  **sales\_cnt int**.

-   **execution\_statements**

    Specifies the statement to be executed in an anonymous block.

    Value range: DML operations \(such as select, insert, delete, and update\) or registered functions in the system catalog.


## Examples<a name="en-us_topic_0283137310_section41260277018"></a>

None

## Helpful Links<a name="en-us_topic_0283137310_en-us_topic_0237122087_en-us_topic_0059778122_section552105014012"></a>

[START TRANSACTION](start-transaction.md)

