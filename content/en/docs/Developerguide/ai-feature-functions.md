# AI Feature Functions<a name="EN-US_TOPIC_0303599451"></a>

-   gs\_index\_advise\(text\)

    Description: Recommends an index for a single query statement.

    Parameter: SQL statement string

    Return type: record

    [Single-query Index Recommendation](en-us_topic_0296549246.md)  describes the examples.

-   hypopg\_create\_index\(text\)

    Description: Creates a virtual index.

    Parameter: character string of the statement for creating an index

    Return type: record

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_display\_index\(\)

    Description: Displays information about all created virtual indexes.

    Parameter: none

    Return type: record

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_drop\_index\(oid\)

    Description: Deletes a specified virtual index.

    Parameter: OID of the index

    Return type: Boolean

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_reset\_index\(\)

    Description: Clears all virtual indexes.

    Parameter: none

    Return type: none

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   hypopg\_estimate\_size\(oid\)

    Description: Estimates the space required for creating a specified index.

    Parameter: OID of the index

    Return type: int8

    [Virtual Index](en-us_topic_0296549247.md)  describes the examples.

-   check\_engine\_status\(ip text, port text\)

    Description: Tests whether a predictor engine provides services on a specified IP address and port.

    Parameter: IP address and port number of the predictor engine.

    Return type: text

    [User Guide](en-us_topic_0289900575.md)  describes the examples.

-   encode\_plan\_node\(optname text, orientation text, strategy text, options text, dop int8, quals text, projection text\)

    Description: Encodes the plan operator information in the input parameters.

    Parameter: plan operator information

    Return type: text

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This function is an internal function. You are not advised to use it directly.

-   model\_train\_opt\(template text, model text\)

    Description: Trains a given query performance prediction model.

    Parameters: template name and model name of the performance prediction model

    Return type: startup\_time\_accuracy FLOAT8, total\_time\_accuracy FLOAT8, rows\_accuracy FLOAT8, peak\_memory\_accuracy FLOAT8

    [User Guide](en-us_topic_0289900575.md)  describes the examples.

-   track\_model\_train\_opt\(ip text, port text\)

    Description: Returns the training log address of the specified IP address and port predictor engine.

    Parameter: IP address and port number of the predictor engine

    Return type: text

    [User Guide](en-us_topic_0289900575.md)  describes the examples.

-   encode\_feature\_perf\_hist\(datname text\)

    Description: Encodes historical plan operators collected in the target database.

    Parameter: database name

    Return type: queryid bigint, plan\_node\_id int, parent\_node\_id int, left\_child\_id int, right\_child\_id int, encode text, startup\_time bigint, total\_time bigint, rows bigint, and peak\_memory int

    [User Guide](en-us_topic_0289900575.md)  describes the examples.

-   gather\_encoding\_info\(datname text\)

    Description: Invokes  **encode\_feature\_perf\_hist**  to save the encoded data persistently.

    Parameter: database name

    Return type: int

    [User Guide](en-us_topic_0289900575.md)  describes the examples.

-   db4ai\_predict\_by\_bool \(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the Boolean type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: Boolean

-   db4ai\_predict\_by\_float4\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the float4 type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: float

-   db4ai\_predict\_by\_float8\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the float8 type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: float

-   db4ai\_predict\_by\_int32\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the int32 type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: int

-   db4ai\_predict\_by\_int64\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the int64 type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: int

-   db4ai\_predict\_by\_numeric\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the numeric type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: numeric

-   db4ai\_predict\_by\_text\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the character type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: text

-   db4ai\_predict\_by\_float8\_array\(text, VARIADIC "any"\)

    Description: Obtains a model whose return value is of the character type for model inference. This function is an internal function. You are advised to use the  **PREDICT BY**  syntax for inference.

    Parameter: model name and input column name of the inference task

    Return type: text

-   gs\_explain\_model\(text\)

    Description: Obtains the model whose return value is of the character type for text-based model parsing.

    Parameter: model name

    Return type: text


