# Ledger Database Functions<a name="EN-US_TOPIC_0000001147093197"></a>

-   get\_dn\_hist\_relhash\(text, text\)

    Description: Returns the hash value of table-level data in a specified tamper-proof user table. This function is used only in distributed mode.

    Parameter type: text

    Return type: hash16


-   ledger\_hist\_check\(text, text\)

    Description: Verifies the consistency between the hash value of table-level data in a specified tamper-proof user table and that in the corresponding history table.

    Parameter type: text

    Return type: Boolean


-   ledger\_hist\_repair\(text, text\)

    Description: Restores the hash value of the history table corresponding to the specified tamper-proof user table to be the same as that of the user table, and returns the hash difference.

    Parameter type: text

    Return type: hash16


-   ledger\_hist\_archive\(text, text\)

    Description: Archives the history table corresponding to a specified tamper-proof user table to the  **hist\_back**  folder in the audit log directory.

    Parameter type: text

    Return type: Boolean


-   ledger\_gchain\_check\(text, text\)

    Description: Verifies the consistency between the history table hash corresponding to the specified tamper-proof user table and the  **relhash**  corresponding to the global history table.

    Parameter type: text

    Return type: Boolean


-   ledger\_gchain\_repair\(text, text\)

    Description: Restores  **relhash**  of a specified tamper-proof user table in the global history table so that the hash is the same as that in the history table, and returns the hash difference.

    Parameter type: text

    Return type: hash16


-   ledger\_gchain\_archive\(void\)

    Description: Archives global history tables to the  **hist\_back**  folder in the audit log directory.

    Parameter type: void

    Return type: Boolean


-   hash16in\(cstring\)

    Description: Converts the input hexadecimal string into the internal hash16 format.

    Parameter type: cstring

    Return type: hash16


-   hash16out\(hash16\)

    Description: Converts internal hash16 data to hexadecimal cstring data.

    Parameter type: hash16

    Return type: cstring


-   hash32in\(cstring\)

    Description: Converts the input hexadecimal string \(32 characters\) into the internal type hash32.

    Parameter type: cstring

    Return type: hash32


-   hash32out\(hash32\)

    Description: Converts internal hash32 data to hexadecimal cstring data.

    Parameter type: cstring

    Return type: hash32


