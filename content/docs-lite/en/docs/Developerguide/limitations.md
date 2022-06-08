# Limitations<a name="EN-US_TOPIC_0289899883"></a>

The current limitations of openGauss's text search features are:

-   The length of each lexeme must be less than 2 KB.
-   The length of a  **tsvector**  \(lexemes + positions\) must be less than 1 megabyte.
-   Position values in  **tsvector**  must be greater than 0 and no more than 16383.
-   No more than 256 positions per lexeme. Excessive positions, if any, will be discarded.
-   The number of nodes \(lexemes + operators\) in a tsquery must be less than 32768.

