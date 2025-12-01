# ALTER FOREIGN DATA WRAPPER

## Function Description

Modifies the definition of a foreign data wrapper (FDW).

## Syntax

```
ALTER FOREIGN DATA WRAPPER name 
    [ HANDLER handler_function | NO HANDLER ]
    [ VALIDATOR validator_function | NO VALIDATOR ]
    [ OPTIONS ( [ ADD | SET | DROP ] option ['value'] [,...] ) ]
```

## Parameter Description

-   **name**

    Specifies the name of an FDW to be modified.

-   **HANDLER handler\_function**

    Specifies a new handler function for an FDW.


-   **NO HANDLER**

    Specifies that an FDW no longer has a handler function.

	>![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >
    > Foreign tables that use FDWs without handler functions cannot be accessed.

-   **VALIDATOR validator_function**

    Specifies a new validator function for an FDW.

	>![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >
    > After a validator function is modified, options for an FDW, server, and user mapping may become invalid. Before using the FDW, the user should ensure that these options are correct.


-   **NO VALIDATOR**

    Specifies that the FDW no longer has a validator function.


-   **OPTIONS \( \[ ADD | SET | DROP \] option \['value'\] \[,...\] \)**

    Specifies options to be modified (added, set, or dropped) for the FDW. If the operation is not explicitly specified, it is assumed that the operation is ADD. The option name must be unique. Use the FDW's validator function (if any) to validate the name and value.


## Examples

```
--Create an FDW named dbi.
openGauss=# CREATE FOREIGN DATA WRAPPER dbi OPTIONS (debug 'true');
--Modify dbi: Add the foo option and delete the debug option.
openGauss=# ALTER FOREIGN DATA WRAPPER dbi OPTIONS (ADD foo '1', DROP debug);
--Change the dbi validator to myvalidator.
openGauss=# ALTER FOREIGN DATA WRAPPER dbi VALIDATOR file_fdw_validator;
```
