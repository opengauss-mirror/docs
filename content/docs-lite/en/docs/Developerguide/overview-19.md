# Overview<a name="EN-US_TOPIC_0289900441"></a>

A dictionary is used to define stop words, that is, words to be ignored in full-text retrieval.

A dictionary can also be used to normalize words so that different derived forms of the same word will match. A normalized word is called a lexeme.

In addition to improving retrieval quality, normalization and removal of stop words can reduce the size of the  **tsvector**  representation of a document, thereby improving performance. Normalization and removal of stop words do not always have linguistic meaning. Users can define normalization and removal rules in dictionary definition files based on application environments.

A dictionary is a program that receives a token as input and returns:

-   An array of lexemes if the input token is known to the dictionary \(note that one token can produce more than one lexeme\).

-   A single lexeme A new token is passed to the subsequent dictionary \(the current dictionary may be referred to as a filter dictionary\) in place of the input token.
-   An empty array if the input token is known to the dictionary but is a stop word.

-   **NULL**  if the dictionary does not recognize the token.


openGauss provides predefined dictionaries for many languages and also provides five predefined dictionary templates,  **Simple**,  **Synonym**,  **Thesaurus**,  **Ispell**, and  **Snowball**. These templates can be used to create new dictionaries with custom parameters.

When using full-text retrieval, you are advised to:

-   In the text search configuration, configure a parser together with a set of dictionaries to process the parser's output tokens. For each token type that the parser can return, a separate list of dictionaries is specified by the configuration. When a token of that type is found by the parser, each dictionary in the list is consulted in turn, until a dictionary recognizes it as a known word. If it is identified as a stop word, or no dictionary recognizes the token, it will be discarded and not indexed or searched for. Generally, the first dictionary that returns a non-**NULL**  output determines the result, and any remaining dictionaries are not consulted. However, a filtering dictionary can replace the input token with a modified one, which is then passed to subsequent dictionaries.
-   The general rule for configuring a list of dictionaries is to place first the most narrow, most specific dictionary, then the more general dictionaries, finishing with a very general dictionary, like a  **Snowball**  stemmer dictionary or a  **Simple**  dictionary, which recognizes everything. In the following example, for an astronomy-specific search \(**astro\_en**  configuration\), you can configure the token type  **asciiword**  \(ASCII word\) with a  **Synonym**  dictionary of astronomical terms, a general English  **Ispell**  dictionary, and a  **Snowball**  English stemmer dictionary:

    ```
    openGauss=# ALTER TEXT SEARCH CONFIGURATION astro_en
      ADD MAPPING FOR asciiword WITH astro_syn, english_ispell, english_stem;
    ```

    A filtering dictionary can be placed anywhere in the list, except at the end where it would be useless. Filtering dictionaries are useful to partially normalize words to simplify the task of later dictionaries.


