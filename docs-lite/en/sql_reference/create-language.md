# CREATE LANGUAGE<a name="EN-US_TOPIC_0000001080607732"></a>

## Function<a name="section113331284191"></a>

**CREATE LANGUAGE**  defines a new procedural language. A single-node system or centralized system does not support creating procedural languages.

## Syntax<a name="section122664751912"></a>

```
CREATE [ OR REPLACE ] [ PROCEDURAL ] LANGUAGE name
CREATE [ OR REPLACE ] [ TRUSTED ] [ PROCEDURAL ] LANGUAGE name
    HANDLER call_handler [ INLINE inline_handler ] [ VALIDATOR valfunction ]
```

## Parameter Description<a name="section48568352146"></a>

-   **TRUSTED**

    Specifies that the language does not authorize users who do not have permissions to access data. If this keyword is ignored when the language is registered, only the super user has the permission to use the language.

-   **PROCEDURAL**

    It is a useless word.

-   **name**

    Specifies the name of the new procedural language. This name should be unique across all languages of the database.

    For downward compatibility, the name can be enclosed in single quotation marks \('\).

-   **HANDLER call\_handler**

    **call\_handler**  is a previously registered function that will be used to execute the procedural language. The call handler of the procedural language must be written in a compiled language \(such as C\), the call style must be version 1, and the function must be registered as a function that does not accept parameters and returns the language\_handler type.  **language\_handler**  is a placeholder for declaring a function as a call handler.

-   **INLINE inline\_handler**

    **inline\_handler**  is the name of a previously registered function that executes an anonymous block of code \(**DO**  command\) in the language. If the  **inline\_handler**  function is not specified, the language does not support anonymous code blocks. The handler function must accept a parameter of the internal type, which will be the internal representation of the  **DO**  command, and it usually returns a void value. Ignore the return value of the handler.

-   **VALIDATOR valfunction**

    **valfunction**  is a previously registered function name, which is used to verify a new function when it is created in the language. If the verification function is not declared, it will not be checked when a new function is created. The verification function must accept a parameter of the oid type, which is the OID of the function to be created and usually returns a void value.

    A check function usually checks the function body for syntax errors, but it can also check other attributes of the function, for example, whether the language can process a certain parameter type. The verification function should use the  **ereport\(\)**  function to report errors. The return value of this function will be ignored.


## Examples<a name="section95851353171318"></a>

A good way to create a standard procedural language:

```
CREATE LANGUAGE plperl;
```

For languages that pg\_pltemplate does not yet know, the following sequence is needed:

```
CREATE FUNCTION plsample_call_handler() RETURNS language_handler
    AS '$libdir/plsample'
    LANGUAGE C;
CREATE LANGUAGE plsample
    HANDLER plsample_call_handler;
```

