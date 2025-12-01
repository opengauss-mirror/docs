# Dynamically Calling Anonymous Blocks<a name="EN-US_TOPIC_0245374618"></a>

This section describes how to execute anonymous blocks in dynamic statements. Append  **IN**  and  **OUT**  behind the  **EXECUTE IMMEDIATE...USING**  statement to input and output parameters.

## Syntax<a name="en-us_topic_0237122228_en-us_topic_0059778140_s0e4f9e02e5c543e2a2b41d4884352f9f"></a>

[Figure 1](#en-us_topic_0237122228_en-us_topic_0059778140_fcac14cc166724cca818d8c659b30fbb9)  shows the syntax diagram.

**Figure  1**  call\_anonymous\_block::=<a name="en-us_topic_0237122228_en-us_topic_0059778140_fcac14cc166724cca818d8c659b30fbb9"></a>  
![](figures/call_anonymous_block.png "call_anonymous_block")

[Figure 2](#en-us_topic_0237122228_en-us_topic_0059778140_f06fb8cdac8dc4c42bacd550e446ca6bd)  shows the syntax diagram for  **using\_clause**.

**Figure  2**  using\_clause::=<a name="en-us_topic_0237122228_en-us_topic_0059778140_f06fb8cdac8dc4c42bacd550e446ca6bd"></a>  
![](figures/using_clause-2.png "using_clause-2")

The above syntax diagram is explained as follows:

-   The execute part of an anonymous block starts with a  **BEGIN**  statement, has a break with an  **END**  statement, and ends with a semicolon \(;\).
-   **USING \[IN|OUT|IN OUT\]bind\_argument**: specifies where the variable passed to the stored procedure parameter value is stored. The modifiers in front of  **bind\_argument**  and of the corresponding parameter are the same.
-   The input and output parameters in the middle of an anonymous block are designated by placeholders. The numbers of the placeholders and parameters are the same. The sequences of the parameters corresponding to the placeholders and the USING parameters are the same.
-   Currently in openGauss, when dynamic statements call anonymous blocks, placeholders cannot be used to pass input and output parameters in an  **EXCEPTION**  statement.

