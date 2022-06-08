# ALTER LANGUAGE<a name="EN-US_TOPIC_0000001080736216"></a>

## Function<a name="section113331284191"></a>

**ALTER LANGUAGE**  modifies the definition of a procedural language. A single-node system or centralized system does not support modifying procedural languages.

## Syntax<a name="section122664751912"></a>

```
ALTER [ PROCEDURAL ] LANGUAGE name RENAME TO new_name ALTER [ PROCEDURAL ] LANGUAGE name OWNER TO new_owner
```

## Parameter Description<a name="section48568352146"></a>

-   **name**

    Name of a language.

-   **new\_name**

    New name of a language.

-   **new\_owner**

    New owner of a language.


## Compatibility<a name="section446220148329"></a>

The SQL standard does not contain the  **ALTER LANGUAGE**  statement.

