# Full-Text Retrieval<a name="EN-US_TOPIC_0289900659"></a>

Textual search operators have been used in databases for years. openGauss has  **\~**,  **\~\***,  **LIKE**, and  **ILIKE**  operators for textual data types, but they lack many essential properties required by modern information systems. They can be supplemented by indexes and dictionaries.

Text search lacks the following essential properties required by information systems:

-   There is no linguistic support, even for English.

    Regular expressions are not sufficient because they cannot easily handle derived words. For example, you might miss documents that contain  **satisfies**, although you probably would like to find them when searching for  **satisfy**. It is possible to use  **OR**  to search for multiple derived forms, but this is tedious and error-prone, because some words can have several thousand derivatives.


-   They provide no ordering \(ranking\) of search results, which makes them ineffective when thousands of matching documents are found.

-   They tend to be slow because there is no index support, so they must process all documents for every search.

Full text indexing allows documents to be preprocessed and an index is saved for later rapid searching. Preprocessing includes:

-   Parsing documents into tokens

    It is useful to identify various classes of tokens, for example, numbers, words, complex words, and email addresses, so that they can be processed differently. In principle, token classes depend on the specific application, but for most purposes it is adequate to use a predefined set of classes.

-   Converting tokens into lexemes

    A lexeme is a string, just like a token, but it has been normalized so that different forms of the same word are made alike. For example, normalization almost always includes folding upper-case letters to lower-case, and often involves removal of suffixes \(such as  **s**  or  **es**  in English\). This allows searches to find variant forms of the same word, without tediously entering all the possible variants. Also, this step typically eliminates stop words, which are words that are so common that they are useless for searching. \(In short, tokens are raw fragments of the document text, while lexemes are words that are believed useful for indexing and searching.\) openGauss uses dictionaries to perform this step and provides various standard dictionaries.


-   Storing preprocessed documents optimized for searching

    For example, each document can be represented as a sorted array of normalized lexemes. Along with the lexemes, it is often desirable to store positional information for proximity ranking. Therefore, a document that contains a more "dense" region of query words is assigned with a higher rank than the one with scattered query words.


Dictionaries allow fine-grained control over how tokens are normalized. With appropriate dictionaries, you can define stop words that should not be indexed.

A data type  **tsvector**  is provided for storing preprocessed documents, along with a type  **tsquery**  for storing query conditions. For details, see  [Text Search Types](text-search-types.md). For details about the functions and operators available for these data types, see  [Text Search Functions and Operators](text-search-functions-and-operators.md). The match operator  **@@**, which is the most important among those functions and operators, is introduced in  [Basic Text Matching](basic-text-matching.md).

