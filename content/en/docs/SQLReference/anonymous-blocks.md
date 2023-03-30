# Anonymous Blocks<a name="EN-US_TOPIC_0245374608"></a>

An anonymous block applies to a script infrequently executed or a one-off activity. An anonymous block is executed in a session and is not stored.

## Syntax<a name="en-us_topic_0237122218_en-us_topic_0059779171_sa07b23f78a6848f9afe146786372cfb1"></a>

[Figure 1](#en-us_topic_0237122218_en-us_topic_0059779171_f19ed9f384e0646f29744951d7eec8c3b)  shows the syntax diagrams for an anonymous block.

**Figure  1**  anonymous\_block::=<a name="en-us_topic_0237122218_en-us_topic_0059779171_f19ed9f384e0646f29744951d7eec8c3b"></a>  
![](figures/anonymous_block.png "anonymous_block")

Details about the syntax diagram are as follows:

-   The execute part of an anonymous block starts with a  **BEGIN**  statement, has a break with an  **END**  statement, and ends with a semicolon \(;\). Type a slash \(/\) and press  **Enter**  to execute the statement.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >The terminator "/" must be written in an independent row.  

-   The declaration section includes the variable definition, type, and cursor definition.
-   A simplest anonymous block does not execute any commands. At least one statement, even a  **NULL**  statement, must be presented in any implementation blocks.

