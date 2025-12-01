# Fault Injection System Function<a name="EN-US_TOPIC_0311139291"></a>

-   gs\_fault\_inject\(int64, text, text, text, text, text\)

    Description: This function cannot be called. WARNING information "unsupported fault injection" is reported when this function is called, which does not affect or change the database.

    Parameter: fault injection of the int64 type \(**0**: CLOG extended page;  **1**: CLOG page reading;  **2**: forcible deadlock\)

    -   If the first input parameter of text is set to  **2**  and the second input parameter of text is set to  **1**, the second input parameter deadlock occurs. Other input parameters are not deadlocked. When the first input parameter is  **0**  or  **1**, the second input parameter indicates the number of the start page from which the CLOG starts to be extended or read.
    -   The third input parameter of text indicates the number of extended or read pages when the first input parameter is  **0**  or  **1**.
    -   The fourth to sixth input parameters of text are reserved.

    Return type: int64


