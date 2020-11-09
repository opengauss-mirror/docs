# JSON Functions<a name="EN-US_TOPIC_0242370441"></a>

JSON functions are available for creating JSON data \(see  [JSON Types](json-types.md)\).

-   array\_to\_json\(anyarray \[, pretty\_bool\]\)

    Description: Returns the array as JSON. A multi-dimensional array becomes a JSON array of arrays. Line feeds will be added between dimension-1 elements if  **pretty\_bool**  is  **true**.

    Return type: json

    For example:

    ```
    postgres=# SELECT array_to_json('{{1,5},{99,100}}'::int[]);
    array_to_json
    ------------------
    [[1,5],[99,100]]
    (1 row)
    ```

-   row\_to\_json\(record \[, pretty\_bool\]\)

    Description: Returns the row as JSON. Line feeds will be added between level-1 elements if  **pretty\_bool**  is  **true**.

    Return type: json

    For example:

    ```
    postgres=# SELECT row_to_json(row(1,'foo'));
         row_to_json     
    ---------------------
     {"f1":1,"f2":"foo"}
    (1 row)
    ```


