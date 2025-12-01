# Executing Dynamic Query Statements<a name="EN-US_TOPIC_0289899940"></a>

You can perform dynamic queries openGauss provides two modes:  EXECUTE IMMEDIATE  and  OPEN FOR.  **EXECUTE IMMEDIATE**  dynamically executes  **SELECT**  statements and  **OPEN FOR**  combines use of cursors. If you need to store query results in a data set, use  **OPEN FOR**.

## EXECUTE IMMEDIATE<a name="en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_sce9164bf21df416f9160ba60d5b29f4a"></a>

[Figure 1](#en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_f67de6df4c6ef4404b41f0f30de36ee64)  shows the syntax diagram.

**Figure  1**  EXECUTE IMMEDIATE dynamic\_select\_clause::=<a name="en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_f67de6df4c6ef4404b41f0f30de36ee64"></a>  
![](figures/execute-immediate-dynamic_select_clause.png "execute-immediate-dynamic_select_clause")

[Figure 2](#en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_fcfce5c125aec449ba3ce27eec6f7a82b)  shows the syntax diagram for  **using\_clause**.

**Figure  2**  using\_clause::=<a name="en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_fcfce5c125aec449ba3ce27eec6f7a82b"></a>  
![](figures/using_clause.png "using_clause")

The above syntax diagram is explained as follows:

-   **define\_variable**: specifies variables to store single-line query results.
-   **USING IN bind\_argument**: specifies where the variable passed to the dynamic SQL value is stored, that is, in the dynamic placeholder of  **dynamic\_select\_string**.
-   **USING OUT bind\_argument**: specifies where the dynamic SQL returns the value of the variable.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   In query statements,  **INTO**  and  **OUT**  cannot coexist.
    >-   A placeholder name starts with a colon \(:\) followed by digits, characters, or strings, corresponding to  _bind\_argument_  in the  **USING**  clause.
    >-   _bind\_argument_  can only be a value, variable, or expression. It cannot be a database object such as a table name, column name, and data type. That is,  _bind\_argument_  cannot be used to transfer schema objects for dynamic SQL statements. If a stored procedure needs to transfer database objects through  _bind\_argument_  to construct dynamic SQL statements \(generally, DDL statements\), you are advised to use double vertical bars \(||\) to concatenate  _dynamic\_select\_clause_  with a database object.
    >-   A dynamic PL/SQL block allows duplicate placeholders. That is, a placeholder can correspond to only one  _bind\_argument_  in the  **USING**  clause.


```

```

## OPEN FOR<a name="en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_s597e59e4f39f4c5396fe9a6d1e6c6c09"></a>

Dynamic query statements can be executed by using  **OPEN FOR**  to open dynamic cursors.

[Figure 3](#en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_f3f108da94a694175ac707f4511b7f1a1)  shows the syntax diagram.

**Figure  3**  open\_for::=<a name="en-us_topic_0283136869_en-us_topic_0237122225_en-us_topic_0059778916_f3f108da94a694175ac707f4511b7f1a1"></a>  
![](figures/open_for.png "open_for")

Parameter description:

-   **cursor\_name**: specifies the name of the cursor to be opened.
-   **dynamic\_string**: specifies the dynamic query statement.
-   **USING **_value_: applies when a placeholder exists in dynamic\_string.

For use of cursors, see  [Cursors](cursors.md).

