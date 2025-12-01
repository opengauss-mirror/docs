# Full-Text Indexing<a name="EN-US_TOPIC_0000001105555112"></a>

## Availability<a name="section3480125215575"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section5814521587"></a>

openGauss full-text indexing allows documents to be preprocessed and facilitates subsequent search.

## Benefits<a name="section148987345811"></a>

openGauss full-text indexing provides the capability to identify natural-language documents that satisfy a query and sort them by relevance.

## Description<a name="section117041846581"></a>

The preprocessing process of creating a full-text index includes:

-   Parsing documents into tokens

    It is useful to identify various classes of tokens, for example, numbers, words, compound words, and email addresses, so that they can be processed differently. In principle, token classes depend on the specific application, but for most purposes it is adequate to use a predefined set of classes.

-   Converting tokens into lexemes

    A lexeme is a string, just like a token, but it has been normalized so that different forms of the same word are made alike. For example, normalization almost always includes folding upper-case letters to lower-case, and often involves removal of suffixes \(such as  **s**  or  **es**  in English\). This allows searches to find variant forms of the same word, without entering all the possible variants. Also, this step typically eliminates stop words, which are so common and usually useless for searching. \(In short, tokens are raw fragments of the document text, while lexemes are words that are believed useful for indexing and searching.\) openGauss uses dictionaries to perform this step and provides various standard dictionaries.

-   Storing preprocessed documents optimized for searching

    For example, each document can be represented as a sorted array of normalized lexemes. Along with the lexemes, it is often desirable to store positional information for proximity ranking. Therefore, a document that contains a more "dense" area of query words is assigned with a higher rank than the one with scattered query words. Dictionaries allow fine-grained control over how tokens are normalized. With appropriate dictionaries, you can define stop words that should not be indexed.


## Enhancements<a name="section21149265913"></a>

None.

## Constraints<a name="section51513617597"></a>

The current limitations of openGauss's text search features are:

-   The length of each lexeme must be less than 2 KB.
-   The length of a  **tsvector**  \(lexemes + positions\) must be less than 1 MB.
-   Position values in  **tsvector**  must be greater than 0 and less than or equal to 16383.
-   No more than 256 positions per lexeme. Excessive positions, if any, will be discarded.

## Dependencies<a name="section20491151513592"></a>

None.

