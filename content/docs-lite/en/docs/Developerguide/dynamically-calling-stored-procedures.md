# Dynamically Calling Stored Procedures<a name="EN-US_TOPIC_0289900073"></a>

This section describes how to dynamically call store procedures. You must use anonymous statement blocks to package stored procedures or statement blocks and append  **IN**  and  **OUT**  behind the  **EXECUTE IMMEDIATE...USING**  statement to input and output parameters.

## Syntax<a name="en-us_topic_0283137416_en-us_topic_0237122227_en-us_topic_0059778625_s235196b89ff94aa5937183e30eaea4ad"></a>

[Figure 1](#en-us_topic_0283137416_en-us_topic_0237122227_en-us_topic_0059778625_f7bf3ce30f4aa42d38394f459c525f33b)  shows the syntax diagram.

**Figure  1**  call\_procedure::=<a name="en-us_topic_0283137416_en-us_topic_0237122227_en-us_topic_0059778625_f7bf3ce30f4aa42d38394f459c525f33b"></a>  
![](figures/call_procedure.png "call_procedure")

[Figure 2](#en-us_topic_0283137416_en-us_topic_0237122227_en-us_topic_0059778625_fd82a97bfa5774a32bd19b36b80dd5248)  shows the syntax diagram for  **using\_clause**.

**Figure  2**  using\_clause::=<a name="en-us_topic_0283137416_en-us_topic_0237122227_en-us_topic_0059778625_fd82a97bfa5774a32bd19b36b80dd5248"></a>  
![](figures/using_clause-1.png "using_clause-1")

The above syntax diagram is explained as follows:

-   **CALL procedure\_name**: calls the stored procedure.
-   **\[:placeholder1,:placeholder2,...\]**: specifies the placeholder list of the stored procedure parameters. The numbers of the placeholders and parameters are the same.
-   **USING \[IN|OUT|IN OUT\]bind\_argument**: specifies where the variable passed to the stored procedure parameter value is stored. The modifiers in front of  **bind\_argument**  and of the corresponding parameter are the same.

