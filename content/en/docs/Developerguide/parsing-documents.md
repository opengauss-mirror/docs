# Parsing Documents<a name="EN-US_TOPIC_0289900588"></a>

openGauss provides function  **to\_tsvector**  for converting a document to the  **tsvector**  data type.

```
to_tsvector([ config regconfig, ] document text) returns tsvector
```

**to\_tsvector**  parses a textual document into tokens, reduces the tokens to lexemes, and returns a  **tsvector**, which lists the lexemes together with their positions in the document. The document is processed according to the specified or default text search configuration. Here is a simple example:

```
openGauss=# SELECT to_tsvector('english', 'a fat  cat sat on a mat - it ate a fat rats');
                  to_tsvector
-----------------------------------------------------
 'ate':9 'cat':3 'fat':2,11 'mat':7 'rat':12 'sat':4
```

In the preceding example we see that the resulting  **tsvector**  does not contain the words  **a**,  **on**, or  **it**, the word  **rats**  became  **rat**, and the punctuation sign \(-\) was ignored.

The  **to\_tsvector**  function internally calls a parser which breaks the document text into tokens and assigns a type to each token. For each token, a list of dictionaries is consulted. The list varies with the token type. The first dictionary that recognizes the token emits one or more normalized lexemes to represent the token. Example:

-   **rats**  became  **rat**  because one of the dictionaries recognized that the word  **rats**  is a plural form of  **rat**.
-   Some words are recognized as stop words \(see  [Stop Words](stop-words.md)\), which causes them to be ignored since they occur too frequently to be useful in searching. In our example these are  **a**,  **on**, and  **it**.
-   If no dictionary in the list recognizes the token then it is also ignored. In this example that happened to the punctuation sign \(-\) because there are no dictionaries assigned for its token type \(**Space symbols**\), meaning space tokens will never be indexed.

The choices of parser, dictionaries and which types of tokens to index are determined by the selected text search configuration. It is possible to have many different configurations in the same database, and predefined configurations are available for various languages. In our example we used the default configuration  **english**  for the English language.

The function  **setweight**  can be used to label the entries of a  **tsvector**  with a given weight, where a weight is one of the letters  **A**,  **B**,  **C**, or  **D**. This is typically used to mark entries coming from different parts of a document, such as title versus body. Later, this information can be used for ranking of search results.

Because  **to\_tsvector\(NULL\)**  will return  **NULL**, you are advised to use  **coalesce**  whenever a column might be null. Here is the recommended method for creating a  **tsvector**  from a structured document: 

```
openGauss=# CREATE TABLE tsearch.tt (id int, title text, keyword text, abstract text, body text, ti tsvector);

openGauss=# INSERT INTO tsearch.tt(id, title, keyword, abstract, body) VALUES (1, 'China', 'Beijing', 'China','China, officially the People''s Republic of China (PRC), located in Asia, is the world''s most populous state.');

openGauss=# UPDATE tsearch.tt SET ti =
    setweight(to_tsvector(coalesce(title,'')), 'A')    ||
    setweight(to_tsvector(coalesce(keyword,'')), 'B')  ||
    setweight(to_tsvector(coalesce(abstract,'')), 'C') ||
    setweight(to_tsvector(coalesce(body,'')), 'D');
openGauss=# DROP TABLE tsearch.tt;
```

In this example,  **setweight**  is used to label the source of each lexeme in the finished  **tsvector**, and then the labeled  **tsvector**  values are merged using the tsvector concatenation operator  **||**. For details about these operations, see  [Manipulating tsvector](manipulating-tsvector.md).

