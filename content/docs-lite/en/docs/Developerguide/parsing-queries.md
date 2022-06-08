# Parsing Queries<a name="EN-US_TOPIC_0289899876"></a>

openGauss provides functions  **to\_tsquery**  and  **plainto\_tsquery**  for converting a query to the  **tsquery**  data type.  **to\_tsquery**  offers access to more features than  **plainto\_tsquery**, but is less forgiving about its input.

```
to_tsquery([ config regconfig, ] querytext text) returns tsquery
```

**to\_tsquery**  creates a  **tsquery**  value from  **querytext**, which must consist of single tokens separated by the Boolean operators  **&**  \(AND\),  **|**  \(OR\), and  **!**  \(NOT\). These operators can be grouped using parentheses. In other words, the input to  **to\_tsquery**  must follow the general rules for  **tsquery**  input, as described in  [Text Search Types](text-search-types.md). The difference is that while basic  **tsquery**  input takes the tokens at face value,  **to\_tsquery**  normalizes each token to a lexeme using the specified or default configuration, and discards any tokens that are stop words according to the configuration. Example:

```
openGauss=# SELECT to_tsquery('english', 'The & Fat & Rats');
   to_tsquery   
---------------
 'fat' & 'rat'
(1 row)
```

As in basic  **tsquery**  input,  **weight\(s\)**  can be attached to each lexeme to restrict it to match only  **tsvector**  lexemes of those  **weight\(s\)**. Example:

```
openGauss=# SELECT to_tsquery('english', 'Fat | Rats:AB');
    to_tsquery    
------------------
 'fat' | 'rat':AB
(1 row)
```

Also, the asterisk \(\*\) can be attached to a lexeme to specify prefix matching:

```
openGauss=# SELECT to_tsquery('supern:*A & star:A*B');
        to_tsquery        
--------------------------
 'supern':*A & 'star':*AB
(1 row)
```

Such a lexeme will match any word having the specified string and weight in a  **tsquery**.

```
plainto_tsquery([ config regconfig, ] querytext text) returns tsquery
```

**plainto\_tsquery**  transforms unformatted text  **querytext**  to  **tsquery**. The text is parsed and normalized much as for  **to\_tsvector**, and then the  **&**  \(AND\) Boolean operator is inserted between surviving words.

Example:

```
openGauss=# SELECT plainto_tsquery('english', 'The Fat Rats');
 plainto_tsquery 
-----------------
 'fat' & 'rat'
(1 row)
```

Note that  **plainto\_tsquery**  cannot recognize Boolean operators, weight labels, or prefix-match labels in its input:

```
openGauss=# SELECT plainto_tsquery('english', 'The Fat & Rats:C');
   plainto_tsquery   
---------------------
 'fat' & 'rat' & 'c'
(1 row)
```

Here, all the input punctuation was discarded as being space symbols.

