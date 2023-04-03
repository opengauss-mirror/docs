# Usage Guide<a name="EN-US_TOPIC_0300593884"></a>

## PL/Python Stored Procedure<a name="section949463412312"></a>

Currently, the PL/Python stored procedure uses Python 2 by default.

Functions in PL/Python are declared through the standard CREATE FUNCTION.

```
CREATE FUNCTION funcname (argument-list)
RETURNS return-type
AS $$
# PL/Python function body
$$ LANGUAGE plpythonu;
```

The function body is a simple Python script. When the function is called, its arguments are input as the elements of the list  **args**. Named arguments are also input to the Python script as common variables. Named arguments are usually easier to read. The result is returned from Python code as usual using  **return **or  **yield **\(in the case of a result set statement\). If no return value is provided, Python returns  **None **by default. PL/Python considers  **None **in Python as the SQL NULL value.

For example, the function that returns the larger of two integers is defined as follows:

```
CREATE FUNCTION pymax(a integer, b integer) RETURNS integer AS $$   
if a > b:     
    return a
return b 
$$ LANGUAGE plpythonu;
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>-   In the PL/Python function, the suffix is  **plpythonu**.  **u**  indicates that the stored procedure is of the untrusted type.
>-   **Trusted**: This language cannot be used to access unauthorized data. For example, files of the database server and internal database \(including direct access to the shared memory\).
>-   **Untrusted**: This language has no restrictions and allows access to any data \(including files, networks, and shared libraries\). It is hazardous but has more powerful functions.
>-   PL/Python is an untrusted stored procedure language. Currently, only administrators can create and modify PL/Python. Common users can only use PL/Python.
>-   When defining PL/Python stored procedures, do not define the risky statement execution such as  **import os; os.system\("rm -rf /"\)**. Users with administrator permission need to create such PL/Python stored procedures with caution.

## Processing of NULL, None, and Empty Strings in the Database<a name="section17786836103220"></a>

If an SQL NULL value is input to the function, the parameter value is displayed as  **None **in Python. In the database, empty strings are treated as NULL due to different compatibility.

The performance of the same function varies depending on the compatibility.

```
CREATE FUNCTION quote(t text, how text) RETURNS text AS $$
if how == "literal":
    return plpy.quote_literal(t)    
elif how == "nullable":
    return plpy.quote_nullable(t)    
elif how == "ident":
    return plpy.quote_ident(t)
else:        
    raise plpy.Error("unrecognized quote type %s" % how)
$$ LANGUAGE plpythonu;
```

**Example 1:**

```
SELECT quote(t, 'literal') FROM (VALUES ('abc'),('a''bc'),('''abc'''),(''),(''''),('xyzv')) AS v(t);
```

Results of different database compatibility are as follows:

-   If the compatibility is A, the returned result is as follows:

    ```
    ERROR:  TypeError: argument 1 must be string, not None
    CONTEXT:  Traceback (most recent call last):
    PL/Python function "quote", line 3, in <module>
    return plpy.quote_literal(t)
    referenced column: quote
    ```

-   If the compatibility is B, the returned result is as follows:

    ```
    quote
    -----------
    'abc'
    'a''bc'
    '''abc'''
    ''
    ''''
    'xyzv'
    (6 rows)
    ```


**Example 2:**

```
SELECT quote(t, 'nullable') FROM (VALUES ('abc'),('a''bc'),('''abc'''),(''),(''''),(NULL)) AS v(t);
```

Results of different database compatibility are as follows:

-   If the compatibility is A, the returned result is as follows:

    ```
    quote
    -----------
    'abc'
    'a''bc'
    '''abc'''
    NULL
    ''''
    NULL
    (6 rows)
    ```

-   If the compatibility is B, the returned result is as follows:

    ```
    quote
    -----------
    'abc'
    'a''bc'
    '''abc'''
    ''
    ''''
    NULL
    (6 rows)
    ```


In the preceding examples, the empty string is regarded as NULL when the compatibility is A.

## Triggers<a name="section2450194543213"></a>

Currently, the PL/Python stored procedure does not support triggers.

## Anonymous Block of Code<a name="section14931251153220"></a>

PL/Python also supports anonymous block of code declared by DO:

```
DO $$
# PL/Python code
$$ LANGUAGE plpythonu;
```

An anonymous block of code does not accept parameters and discards values they return.

## Sharing Data<a name="section6411402339"></a>

Each function gets its own execution environment in the Python interpreter.

The global dictionary SD is used to store data between function calls. These variables are private static data. Each function has its own SD space. The global data and parameters of function A cannot be used by function B.

The global dictionary GD is public data. In a gsql session, all Python functions can be accessed and changed. Exercise caution when using the global dictionary.

When gsql is disconnected or exited, the sharing data is released.

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>-   When running the DeepSQL or PL/Python stored procedure, you need to disable the parameters related to the thread pool. Otherwise, the functions such as sharing data \(GD and SD\) in the PL/Python stored procedure are invalid.
>-   In the database, when the thread pool function is disabled, a new thread is started in the database for each connected gsql. In gsql, if the PL/Python stored procedure is called, the Python parser module is initialized in this thread, including initializing the sharing space such as GD and SD.
>-   When the thread pool function is enabled, an idle thread executes the gsql command. Each execution may be allocated to a different thread. As a result, the sharing data is disordered.

## Database Access<a name="section9751115183311"></a>

The PL/Python language module automatically imports a Python module called plpy.

The plpy module provides several functions to execute database commands, such as plpy.execute and plpy.prepare.

The plpy module also provides the following functions: plpy.debug\(msg\), plpy.log\(msg\), plpy.info\(msg\), plpy.notice\(msg\), plpy.warning\(msg\), plpy.error\(msg\), and plpy.fatal\(msg\). The plpy.error and plpy.fatal throw a Python exception, which causes the current transaction or sub-transaction to exit.

Another set of useful functions is plpy.quote\_literal\(string\), plpy.quote\_nullable\(string\), and plpy.quote\_ident\(string\).

## Audit<a name="section20558414153315"></a>

PL/Python stored procedures support the audit function. For details, see  [Auditing](en-us_topic_0289900899.md).

## Concurrent Execution<a name="section1686922123316"></a>

Currently, PL/Python stored procedures are not friendly to concurrent execution. You are advised to execute them in serial mode.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Due to the openGauss multi-thread architecture and the restriction of GlobalInterpreter Lock \(GIL\) in C-python, multiple threads can only be executed alternately in Python, and concurrent operations cannot be implemented.

## Algorithms in the Library<a name="section20203192814330"></a>

For details about algorithms in the library and how to use them, see the  [official MADlib document](http://madlib.apache.org/docs/3.1.0/index.html).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   Currently, only the machine learning algorithm is supported. The deep learning module is not supported.
>-   The current database does not support XML files. Therefore, the pmml module and related functions are not supported.
>-   The database does not support the jsonb module, and the model export function in JSON format is not supported.

## Other Supported Algorithms<a name="section349233311335"></a>

In addition to the algorithms provided by MADlib, openGauss provides the following three algorithms:

**Table  1**  Additional modules

<a name="table773615542912"></a>
<table><thead align="left"><tr id="row107368582910"><th class="cellrowborder" valign="top" width="44.59%" id="mcps1.2.3.1.1"><p id="p1129154002919"><a name="p1129154002919"></a><a name="p1129154002919"></a>Algorithm Name</p>
</th>
<th class="cellrowborder" valign="top" width="55.410000000000004%" id="mcps1.2.3.1.2"><p id="p142925402293"><a name="p142925402293"></a><a name="p142925402293"></a>Abbreviation</p>
</th>
</tr>
</thead>
<tbody><tr id="row67364542910"><td class="cellrowborder" valign="top" width="44.59%" headers="mcps1.2.3.1.1 ">Gradient boosted tree</td>
<td class="cellrowborder" valign="top" width="55.410000000000004%" headers="mcps1.2.3.1.2 "><p id="p77378515291"><a name="p77378515291"></a><a name="p77378515291"></a>gbdt</p>
</td>
</tr>
<tr id="row1073718542915"><td class="cellrowborder" valign="top" width="44.59%" headers="mcps1.2.3.1.1 "><p id="p5737195122920"><a name="p5737195122920"></a><a name="p5737195122920"></a>Gradient boosting</p>
</td>
<td class="cellrowborder" valign="top" width="55.410000000000004%" headers="mcps1.2.3.1.2 "><p id="p57371051294"><a name="p57371051294"></a><a name="p57371051294"></a>xgboost</p>
</td>
</tr>
<tr id="row473775172916"><td class="cellrowborder" valign="top" width="44.59%" headers="mcps1.2.3.1.1 "><p id="p14737459292"><a name="p14737459292"></a><a name="p14737459292"></a>Time series forecasting algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="55.410000000000004%" headers="mcps1.2.3.1.2 "><p id="p117377517294"><a name="p117377517294"></a><a name="p117377517294"></a>facebook_prophet</p>
</td>
</tr>
</tbody>
</table>

You need to install Python libraries which the preceding algorithms depend on as follows:

-   If the prophet algorithm is used:

    ```
    pip install pystan
    pip install holidays==0.9.8
    pip install fbprophet==0.3.post2
    ```

-   If the xgboost algorithm is used:

    ```
    pip install xgboost
    pip install scikit-learn
    ```

-   The gbdt algorithm does not require library installation.

For details, see  [Best Practices](best-practices-14.md).

