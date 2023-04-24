# DELIMITER

## Function

DELIMITER defines a delimiter, indicating that the input command ends when the delimiter is encountered. When there are many input statements and semicolons (;) exist in the statements, you can specify a special symbol as the delimiter. By default, the delimiter is a semicolon (;).

## Precautions

Currently, the delimiter cannot be set freely. The delimiter can be a keyword, identifier, character string, operator, and semicolon. The common usage is "//". For details, see the examples.

The delimiter is of the session level, supported only by the gsql client, and available only in B-compatible mode.

## Syntax

-   Define a delimiter.

    ```
    DELIMITER delimiter_str_name END_OF_INPUT
    DELIMITER delimiter_str_name END_OF_INPUT_COLON
    ```
    


## Parameter Description

-   **delim_str_name**

    Indicates types of delimiters that can be defined.


-   **END_OF_INPUT/END_OF_INPUT_COLON**

    Indicates the end status.


## Examples

```
--Define an identifier.
openGauss=# delimiter abcd

--Define a character string.
openGauss=# delimiter "sds;"

--Define an operator.
openGauss=# delimiter +
openGauss=# delimiter /

--Define a default value.
openGauss=# delimtier ;

## Helpful Links

None.
