# Manipulating tsvector<a name="EN-US_TOPIC_0289900182"></a>

openGauss provides functions and operators that can be used to manipulate documents that are already in  **tsvector**  type.

-   tsvector || tsvector

    The tsvector concatenation operator returns a new tsvector which combines the lexemes and positional information of the two tsvectors given as arguments. Positions and weight labels are retained during the concatenation. Positions appearing in the right-hand tsvector are offset by the largest position mentioned in the left-hand tsvector, so that the result is nearly equivalent to the result of performing  **to\_tsvector**  on the concatenation of the two original document strings. \(The equivalence is not exact, because any stop-words removed from the end of the left-hand argument will not affect the result, whereas they would have affected the positions of the lexemes in the right-hand argument if textual concatenation were used.\)

    One advantage of using concatenation in the tsvector form, rather than concatenating text before applying  **to\_tsvector**, is that you can use different configurations to parse different sections of the document. Also, because the  **setweight**  function marks all lexemes of the given tsvector the same way, it is necessary to parse the text and do  **setweight**  before concatenating if you want to label different parts of the document with different weights.

-   setweight\(vector tsvector, weight "char"\) returns tsvector

    **setweight**  returns a copy of the input tsvector in which every position has been labeled with the given weight, either  **A**,  **B**,  **C**, or  **D**. \(**D**  is the default for new tsvectors and as such is not displayed on output.\) These labels are retained when tsvectors are concatenated, allowing words from different parts of a document to be weighted differently by ranking functions.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >Note that weight labels apply to positions, not lexemes. If the input tsvector has been stripped of positions then  **setweight**  does nothing.

-   length\(vector tsvector\) returns integer

    Returns the number of lexemes stored in the tsvector.

-   strip\(vector tsvector\) returns tsvector

    Returns a tsvector which lists the same lexemes as the given tsvector, but which lacks any position or weight information. While the returned tsvector is much less useful than an unstripped tsvector for relevance ranking, it will usually be much smaller.


