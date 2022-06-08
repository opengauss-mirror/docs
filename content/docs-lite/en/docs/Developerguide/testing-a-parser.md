# Testing a Parser<a name="EN-US_TOPIC_0289900442"></a>

The  **ts\_parse**  function allows direct testing of a text search parser.

```
ts_parse(parser_name text, document text,
         OUT tokid integer, OUT token text) returns setof record
```

**ts\_parse**  parses the given  **document**  and returns a series of records, one for each token produced by parsing. Each record includes a  **tokid**  showing the assigned token type and a  **token**  which is the text of the token. Example:

```
openGauss=# SELECT * FROM ts_parse('default', '123 - a number');
 tokid | token
-------+--------
    22 | 123
    12 |
    12 | -
     1 | a
    12 |
     1 | number
(6 rows)
```

The  **ts\_token\_type**  function returns the token type and description of the specified parser.

```
ts_token_type(parser_name text, OUT tokid integer,
              OUT alias text, OUT description text) returns setof record
```

**ts\_token\_type**  returns a table which describes each type of token the specified parser can recognize. For each token type, the table gives the integer  **tokid**  that the parser uses to label a token of that type, the  **alias**  that names the token type in configuration commands, and a short description. Example:

```
openGauss=# SELECT * FROM ts_token_type('default');
 tokid |      alias      |               description                
-------+-----------------+------------------------------------------
     1 | asciiword       | Word, all ASCII
     2 | word            | Word, all letters
     3 | numword         | Word, letters and digits
     4 | email           | Email address
     5 | url             | URL
     6 | host            | Host
     7 | sfloat          | Scientific notation
     8 | version         | Version number
     9 | hword_numpart   | Hyphenated word part, letters and digits
    10 | hword_part      | Hyphenated word part, all letters
    11 | hword_asciipart | Hyphenated word part, all ASCII
    12 | blank           | Space symbols
    13 | tag             | XML tag
    14 | protocol        | Protocol head
    15 | numhword        | Hyphenated word, letters and digits
    16 | asciihword      | Hyphenated word, all ASCII
    17 | hword           | Hyphenated word, all letters
    18 | url_path        | URL path
    19 | file            | File or path name
    20 | float           | Decimal notation
    21 | int             | Signed integer
    22 | uint            | Unsigned integer
    23 | entity          | XML entity
(23 rows)
```

