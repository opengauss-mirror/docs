# Text Search Types<a name="EN-US_TOPIC_0289900823"></a>

openGauss offers two data types that are designed to support full text search. The  **tsvector**  type represents a document in a form optimized for text search. The  **tsquery**  type similarly represents a text query.

## tsvector<a name="en-us_topic_0283136875_en-us_topic_0237121956_en-us_topic_0059778491_sd7b46ba1616c4e2fac58b660666ca5ab"></a>

The  **tsvector**  type represents a retrieval unit, usually a textual column within a row of a database table, or a combination of such columns. A  **tsvector**  value is a sorted list of distinct lexemes, which are words that have been normalized to merge different variants of the same word. Sorting and deduplication are done automatically during input. The  **to\_tsvector**  function is used to parse and normalize a document string.

A  **tsvector**  value is a sorted list of distinct lexemes, which are words that have been formatted different entries. During segmentation,  **tsvector**  automatically performs duplicate-elimination to the entries for input in a certain order. Example:

```
openGauss=# SELECT 'a fat cat sat on a mat and ate a fat rat'::tsvector;
                      tsvector                      
----------------------------------------------------
 'a' 'and' 'ate' 'cat' 'fat' 'mat' 'on' 'rat' 'sat'
(1 row)
```

It can be seen from the preceding example that  **tsvector**  segments a string by spaces, and segmented lexemes are sorted based on their length and alphabetical order. To represent lexemes containing whitespace or punctuation, surround them with quotation marks:

```
openGauss=# SELECT $$the lexeme '    ' contains spaces$$::tsvector;
                 tsvector                  
-------------------------------------------
 '    ' 'contains' 'lexeme' 'spaces' 'the'
(1 row)
```

Use double dollar signs \($$\) to mark entries containing single quotation marks \(''\).

```
openGauss=# SELECT $$the lexeme 'Joe''s' contains a quote$$::tsvector;
                    tsvector                    
------------------------------------------------
 'Joe''s' 'a' 'contains' 'lexeme' 'quote' 'the'
(1 row)
```

Optionally, integer positions can be attached to lexemes:

```
openGauss=# SELECT 'a:1 fat:2 cat:3 sat:4 on:5 a:6 mat:7 and:8 ate:9 a:10 fat:11 rat:12'::tsvector;
                                   tsvector                                    
-------------------------------------------------------------------------------
 'a':1,6,10 'and':8 'ate':9 'cat':3 'fat':2,11 'mat':7 'on':5 'rat':12 'sat':4
(1 row)
```

A position normally indicates the source word's location in the document. Positional information can be used for proximity ranking. Position values range from 1 to 16383. The maximum value is  **16383**. Duplicate positions for the same lexeme are discarded.

Lexemes that have positions can further be labeled with a weight, which can be  **A**,  **B**,  **C**, or  **D**.  **D**  is the default and therefore is not shown in output.

```
openGauss=# SELECT 'a:1A fat:2B,4C cat:5D'::tsvector;
          tsvector          
----------------------------
 'a':1A 'cat':5 'fat':2B,4C
(1 row)
```

Weights are typically used to reflect document structure, for example, by marking title words differently from body words. Text search ranking functions can assign different priorities to the different weight markers.

The following example is the standard usage of the  **tsvector**  type. Example:

```
openGauss=# SELECT 'The Fat Rats'::tsvector;
      tsvector      
--------------------
 'Fat' 'Rats' 'The'
(1 row)
```

For most English-text-searching applications, the above words would be considered non-normalized, which should usually be passed through  **to\_tsvector**  to normalize the words appropriately for searching:

```
openGauss=# SELECT to_tsvector('english', 'The Fat Rats');
   to_tsvector   
-----------------
 'fat':2 'rat':3
(1 row)
```

## tsquery<a name="en-us_topic_0283136875_en-us_topic_0237121956_en-us_topic_0059778491_sc32b10b58f6242499a8461a993703975"></a>

The  **tsquery**  type represents a retrieval condition. A  **tsquery**  value stores lexemes that are to be searched for, and combines them honoring the  **Boolean**  operators  **& \(AND\)**,  **| \(OR\)**, and  **! \(NOT\)**. Parentheses can be used to enforce grouping of the operators. The  **to\_tsquery**  and  **plainto\_tsquery**  functions will normalize lexemes before the lexemes are converted to the  **tsquery**  type.

```
openGauss=# SELECT 'fat & rat'::tsquery;
    tsquery    
---------------
 'fat' & 'rat'
(1 row)

openGauss=# SELECT 'fat & (rat | cat)'::tsquery;
          tsquery          
---------------------------
 'fat' & ( 'rat' | 'cat' )
(1 row)

openGauss=# SELECT 'fat & rat & ! cat'::tsquery;
        tsquery         
------------------------
 'fat' & 'rat' & !'cat'
(1 row)
```

In the absence of parentheses,  **! \(NOT\)**  binds most tightly, and  **& \(AND\)**  binds more tightly than  **| \(OR\)**.

Lexemes in a  **tsquery**  can be labeled with one or more weight letters, which restrict them to match only  **tsvector**  lexemes with matching weights:

```
openGauss=# SELECT 'fat:ab & cat'::tsquery;
     tsquery      
------------------
 'fat':AB & 'cat'
(1 row)
```

Also, lexemes in a  **tsquery**  can be labeled with \* to specify prefix matching:

```
openGauss=# SELECT 'super:*'::tsquery;
  tsquery  
-----------
 'super':*
(1 row)
```

This query will match any word in a  **tsvector**  that begins with "super".

Note that prefixes are first processed by text search configurations, which means that the following example returns true:

```
openGauss=# SELECT to_tsvector( 'postgraduate' ) @@ to_tsquery( 'postgres:*' ) AS RESULT;
  result  
----------
 t
(1 row)
```

This is because  **postgres**  gets stemmed to  **postgr**:

```
openGauss=# SELECT to_tsquery('postgres:*');
 to_tsquery 
------------
 'postgr':*
(1 row)
```

It then matches  **postgraduate**.

**'Fat:ab & Cats'**  is normalized to the  **tsquery**  type as follows:

```
openGauss=# SELECT to_tsquery('Fat:ab & Cats');
    to_tsquery    
------------------
 'fat':AB & 'cat'
(1 row)
```

