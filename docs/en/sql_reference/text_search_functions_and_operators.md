# Text Search Functions and Operators<a name="EN-US_TOPIC_0289900663"></a>

## Text Search Operators<a name="en-us_topic_0283137544_en-us_topic_0237121976_en-us_topic_0059779255_sd5fffb0507864456a3be705c4680bfbb"></a>

-   @@

    Description: Specifies whether the  **tsvector**-type words match the  **tsquery**-type words.

    Example:

    ```
    openGauss=# SELECT to_tsvector('fat cats ate rats') @@ to_tsquery('cat & rat') AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   @@@

    Description: Synonym for @@

    Example:

    ```
    openGauss=# SELECT to_tsvector('fat cats ate rats') @@@ to_tsquery('cat & rat') AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ||

    Description: Connects two  **tsvector**-type words.

    Example:

    ```
    openGauss=# SELECT 'a:1 b:2'::tsvector || 'c:1 d:2 b:3'::tsvector AS RESULT;
              result           
    ---------------------------
     'a':1 'b':2,5 'c':3 'd':4
    (1 row)
    ```

-   &&

    Description: Performs an AND operation on two  **tsquery**-type words.

    Example:

    ```
    openGauss=# SELECT 'fat | rat'::tsquery && 'cat'::tsquery AS RESULT;
              result           
    ---------------------------
     ( 'fat' | 'rat' ) & 'cat'
    (1 row)
    ```

-   ||

    Description: Performs an OR operation on two  **tsquery**-type words.

    Example:

    ```
    openGauss=# SELECT 'fat | rat'::tsquery || 'cat'::tsquery AS RESULT;
              result           
    ---------------------------
     ( 'fat' | 'rat' ) | 'cat'
    (1 row)
    ```

-   !!

    Description:  **NOT**  a  **tsquery**

    Example:

    ```
    openGauss=# SELECT !! 'cat'::tsquery AS RESULT;
     result 
    --------
     !'cat'
    (1 row)
    ```

-   @\>

    Description: Specifies whether a  **tsquery**-type word contains another  **tsquery**-type word.

    Example:

    ```
    openGauss=# SELECT 'cat'::tsquery @> 'cat & rat'::tsquery AS RESULT;
     result 
    --------
     f
    (1 row)
    ```

-   <@

    Description: Specifies whether a  **tsquery**-type word is contained in another  **tsquery**-type word.

    Example:

    ```
    openGauss=# SELECT 'cat'::tsquery <@ 'cat & rat'::tsquery AS RESULT;
     result 
    --------
     t
    (1 row)
    ```


In addition to the preceding operators, the ordinary B-tree comparison operators \(including = and <\) are defined for types  **tsvector**  and  **tsquery**.

## Text Search Functions<a name="en-us_topic_0283137544_en-us_topic_0237121976_en-us_topic_0059779255_s06e6cc0c308848d4b5ab9fa7bfe9f62a"></a>

-   get\_current\_ts\_config\(\)

    Description: Obtains default text search configurations.

    Return type: regconfig

    Example:

    ```
    openGauss=# SELECT get_current_ts_config();
     get_current_ts_config 
    -----------------------
     english
    (1 row)
    ```

-   length\(tsvector\)

    Description: Specifies the number of lexemes in a  **tsvector**-type word.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT length('fat:2,4 cat:3 rat:5A'::tsvector);
     length 
    --------
          3
    (1 row)
    ```

-   numnode\(tsquery\)

    Description: Specifies the number of lexemes plus  **tsquery**  operators.

    Return type: integer

    Example:

    ```
    openGauss=# SELECT numnode('(fat & rat) | cat'::tsquery);
     numnode 
    ---------
           5
    (1 row)
    ```

-   plainto\_tsquery\(\[ config regconfig , \] query text\)

    Description: Generates  **tsquery**  lexemes without punctuations.

    Return type: tsquery

    Example:

    ```
    openGauss=# SELECT plainto_tsquery('english', 'The Fat Rats');
     plainto_tsquery 
    -----------------
     'fat' & 'rat'
    (1 row)
    ```

-   querytree\(query tsquery\)

    Description: Obtains the indexable part of a  **tsquery**.

    Return type: text

    Example:

    ```
    openGauss=# SELECT querytree('foo & ! bar'::tsquery);
     querytree 
    -----------
     'foo'
    (1 row)
    ```

-   setweight\(tsvector, "char"\)

    Description: Assigns weight to each element of  **tsvector**.

    Return type: tsvector

    Example:

    ```
    openGauss=# SELECT setweight('fat:2,4 cat:3 rat:5B'::tsvector, 'A');
               setweight           
    -------------------------------
     'cat':3A 'fat':2A,4A 'rat':5A
    (1 row)
    ```

-   strip\(tsvector\)

    Description: Removes positions and weights from  **tsvector**.

    Return type: tsvector

    Example:

    ```
    openGauss=# SELECT strip('fat:2,4 cat:3 rat:5A'::tsvector);
           strip       
    -------------------
     'cat' 'fat' 'rat'
    (1 row)
    ```

-   to\_tsquery\(\[ config regconfig , \] query text\)

    Description: Normalizes words and converts them to  **tsquery**.

    Return type: tsquery

    Example:

    ```
    openGauss=# SELECT to_tsquery('english', 'The & Fat & Rats');
      to_tsquery   
    ---------------
     'fat' & 'rat'
    (1 row)
    ```

-   to\_tsvector\(\[ config regconfig , \] document text\)

    Description: Reduces document text to  **tsvector**.

    Return type: tsvector

    Example:

    ```
    openGauss=# SELECT to_tsvector('english', 'The Fat Rats');
       to_tsvector   
    -----------------
     'fat':2 'rat':3
    (1 row)
    ```

-   to\_tsvector\_for\_batch\(\[ config regconfig , \] document text\)

    Description: Reduces document text to  **tsvector**.

    Return type: tsvector

    Example:

    ```
    openGauss=# SELECT to_tsvector_for_batch('english', 'The Fat Rats');
       to_tsvector   
    -----------------
     'fat':2 'rat':3
    (1 row)
    ```

-   ts\_headline\(\[ config regconfig, \] document text, query tsquery \[, options text \]\)

    Description: Highlights a query match.

    Return type: text

    Example:

    ```
    openGauss=# SELECT ts_headline('x y z', 'z'::tsquery);
     ts_headline  
    --------------
     x y <b>z</b>
    (1 row)
    ```

-   ts\_rank\(\[ weights float4\[\], \] vector tsvector, query tsquery \[, normalization integer \]\)

    Description: Ranks documents for a query.

    Return type: float4

    Example:

    ```
    openGauss=# SELECT ts_rank('hello world'::tsvector, 'world'::tsquery);
     ts_rank  
    ----------
     .0607927
    (1 row)
    ```

-   ts\_rank\_cd\(\[ weights float4\[\], \] vector tsvector, query tsquery \[, normalization integer \]\)

    Description: Ranks documents for a query using cover density.

    Return type: float4

    Example:

    ```
    openGauss=# SELECT ts_rank_cd('hello world'::tsvector, 'world'::tsquery);
     ts_rank_cd 
    ------------
              .1
    (1 row)
    ```

-   ts\_rewrite\(query tsquery, target tsquery, substitute tsquery\)

    Description: Replaces a  **tsquery**-type word.

    Return type: tsquery

    Example:

    ```
    openGauss=# SELECT ts_rewrite('a & b'::tsquery, 'a'::tsquery, 'foo|bar'::tsquery);
           ts_rewrite        
    -------------------------
     'b' & ( 'foo' | 'bar' )
    (1 row)
    ```

-   ts\_rewrite\(query tsquery, select text\)

    Description: Replaces  **tsquery**  data in the target with the result of a  **SELECT**  command.

    Return type: tsquery

    Example:

    ```
    openGauss=# SELECT ts_rewrite('world'::tsquery, 'select ''world''::tsquery, ''hello''::tsquery');
     ts_rewrite 
    ------------
     'hello'
    (1 row)
    ```


## Text Search Debugging Functions<a name="en-us_topic_0283137544_en-us_topic_0237121976_en-us_topic_0059779255_s945ba95d2c0e472cb1903d9f734c3c36"></a>

-   ts\_debug\(\[ config regconfig, \] document text, OUT alias text, OUT description text, OUT token text, OUT dictionaries regdictionary\[\], OUT dictionary regdictionary, OUT lexemes text\[\]\)

    Description: Tests a configuration.

    Return type: SETOF record

    Example:

    ```
    openGauss=# SELECT ts_debug('english', 'The Brightest supernovaes');
                                         ts_debug                                      
    -----------------------------------------------------------------------------------
     (asciiword,"Word, all ASCII",The,{english_stem},english_stem,{})
     (blank,"Space symbols"," ",{},,)
     (asciiword,"Word, all ASCII",Brightest,{english_stem},english_stem,{brightest})
     (blank,"Space symbols"," ",{},,)
     (asciiword,"Word, all ASCII",supernovaes,{english_stem},english_stem,{supernova})
    (5 rows)
    ```

-   ts\_lexize\(dict regdictionary, token text\)

    Description: Tests a data dictionary.

    Return type: text\[\]

    Example:

    ```
    openGauss=# SELECT ts_lexize('english_stem', 'stars');
     ts_lexize 
    -----------
     {star}
    (1 row)
    ```

-   ts\_parse\(parser\_name text, document text, OUT tokid integer, OUT token text\)

    Description: Tests a parser.

    Return type: SETOF record

    Example:

    ```
    openGauss=# SELECT ts_parse('default', 'foo - bar');
     ts_parse  
    -----------
     (1,foo)
     (12," ")
     (12,"- ")
     (1,bar)
    (4 rows)
    ```

-   ts\_parse\(parser\_oid oid, document text, OUT tokid integer, OUT token text\)

    Description: Tests a parser.

    Return type: SETOF record

    Example:

    ```
    openGauss=# SELECT ts_parse(3722, 'foo - bar');
     ts_parse  
    -----------
     (1,foo)
     (12," ")
     (12,"- ")
     (1,bar)
    (4 rows)
    ```

-   ts\_token\_type\(parser\_name text, OUT tokid integer, OUT alias text, OUT description text\)

    Description: Obtains token types defined by a parser.

    Return type: SETOF record

    Example:

    ```
    openGauss=# SELECT ts_token_type('default');
                            ts_token_type                         
    --------------------------------------------------------------
     (1,asciiword,"Word, all ASCII")
     (2,word,"Word, all letters")
     (3,numword,"Word, letters and digits")
     (4,email,"Email address")
     (5,url,URL)
     (6,host,Host)
     (7,sfloat,"Scientific notation")
     (8,version,"Version number")
     (9,hword_numpart,"Hyphenated word part, letters and digits")
     (10,hword_part,"Hyphenated word part, all letters")
     (11,hword_asciipart,"Hyphenated word part, all ASCII")
     (12,blank,"Space symbols")
     (13,tag,"XML tag")
     (14,protocol,"Protocol head")
     (15,numhword,"Hyphenated word, letters and digits")
     (16,asciihword,"Hyphenated word, all ASCII")
     (17,hword,"Hyphenated word, all letters")
     (18,url_path,"URL path")
     (19,file,"File or path name")
     (20,float,"Decimal notation")
     (21,int,"Signed integer")
     (22,uint,"Unsigned integer")
     (23,entity,"XML entity")
    (23 rows)
    ```

-   ts\_token\_type\(parser\_oid oid, OUT tokid integer, OUT alias text, OUT description text\)

    Description: Obtains token types defined by a parser.

    Return type: SETOF record

    Example:

    ```
    openGauss=# SELECT ts_token_type(3722);
                            ts_token_type                         
    --------------------------------------------------------------
     (1,asciiword,"Word, all ASCII")
     (2,word,"Word, all letters")
     (3,numword,"Word, letters and digits")
     (4,email,"Email address")
     (5,url,URL)
     (6,host,Host)
     (7,sfloat,"Scientific notation")
     (8,version,"Version number")
     (9,hword_numpart,"Hyphenated word part, letters and digits")
     (10,hword_part,"Hyphenated word part, all letters")
     (11,hword_asciipart,"Hyphenated word part, all ASCII")
     (12,blank,"Space symbols")
     (13,tag,"XML tag")
     (14,protocol,"Protocol head")
     (15,numhword,"Hyphenated word, letters and digits")
     (16,asciihword,"Hyphenated word, all ASCII")
     (17,hword,"Hyphenated word, all letters")
     (18,url_path,"URL path")
     (19,file,"File or path name")
     (20,float,"Decimal notation")
     (21,int,"Signed integer")
     (22,uint,"Unsigned integer")
     (23,entity,"XML entity")
    (23 rows)
    ```

-   ts\_stat\(sqlquery text, \[ weights text, \] OUT word text, OUT ndoc integer, OUT nentry integer\)

    Description: Obtains statistics of a  **tsvector**  column.

    Return type: SETOF record

    Example:

    ```
    openGauss=# SELECT ts_stat('select ''hello world''::tsvector');
       ts_stat   
    -------------
     (world,1,1)
     (hello,1,1)
    (2 rows)
    ```


