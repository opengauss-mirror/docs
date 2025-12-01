# DROP LANGUAGE<a name="EN-US_TOPIC_0000001127872509"></a>

## Function<a name="section113331284191"></a>

**DROP LANGUAGE**  deletes a procedural language. A single-node system or centralized system does not support deleting procedural languages.

## Syntax<a name="section122664751912"></a>

```
DROP [ PROCEDURAL ] LANGUAGE [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="section48568352146"></a>

-   **IF EXISTS**

    Sends a notice instead of an error if a specified procedural language does not exist.

-   **name**

    Specifies the name of an existing language. For downward compatibility, the name can be enclosed in single quotation marks \('\).

-   **CASCADE**

    Automatically deletes objects that depend on the language \(for example, functions written in the language\).

-   **RESTRICT**

    Refuses to delete the object if any objects depend on it. This is a default parameter.


## Examples<a name="section551802613349"></a>

Run the following command to delete the plsample language:

```
DROP LANGUAGE plsample;
```

## Compatibility<a name="section446220148329"></a>

The SQL standard does not contain the  **DROP LANGUAGE**  statement.

