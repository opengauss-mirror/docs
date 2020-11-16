# Manipulating Queries<a name="EN-US_TOPIC_0242370493"></a>

openGauss provides functions and operators that can be used to manipulate queries that are already in  **tsquery**  type.

-   tsquery && tsquery

    Returns the AND-combination of the two given queries.


-   tsquery || tsquery

    Returns the OR-combination of the two given queries.


-   !! tsquery

    Returns the negation \(NOT\) of the given query.


-   numnode\(query tsquery\) returns integer

    Returns the number of nodes \(lexemes plus operators\) in a  **tsquery**. This function is useful to determine if the query is meaningful \(returns \> 0\), or contains only stop words \(returns 0\). For example:

    ```
    postgres=# SELECT numnode(plainto_tsquery('the any'));
    NOTICE:  text-search query contains only stop words or doesn't contain lexemes, ignored
    CONTEXT:  referenced column: numnode
     numnode 
    ---------
           0
    
    postgres=# SELECT numnode('foo & bar'::tsquery);
     numnode
    ---------
           3
    ```


-   querytree\(query tsquery\) returns text

    Returns the portion of a  **tsquery**  that can be used for searching an index. This function is useful for detecting unindexable queries, for example those containing only stop words or only negated terms. For example:

    ```
    postgres=# SELECT querytree(to_tsquery('!defined'));
     querytree 
    -----------
     T
    (1 row)
    ```


