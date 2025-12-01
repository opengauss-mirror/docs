# CREATE FUNCTION DATA WRAPPER

## Function Description

Defines a new foreign data wrapper (FDW).

## Syntax

```
CREATE FOREIGN DATA WRAPPER name
    [ HANDLER handler_function | NO HANDLER ]
    [ VALIDATOR validator_function | NO VALIDATOR ]
    [ OPTIONS ( option 'value' [,...] ) ]
```

## Parameter Description

-   **name**

    Specifies the name of an FDW to be created.

-   **HANDLER handler\_function**

    **handler\_function** is the name of the previously registered function that will be called to retrieve the execution function of the foreign table. The handler function cannot contain any parameter, and its return type must be fdw_handler.


-   **VALIDATOR validator\_function**

    **validator\_function** is the name of the previously registered function that will be called to check the general options of the given FDW, as well as the options for the foreign server and user mapping using the FDW. If no validator function is specified, options are not checked at creation time. (The FDW may ignore or reject invalid option specifications at runtime, depending on the implementation.) The validator function must accept two arguments: one is of type text[], which will contain an array of options stored in the system directory, and the other is of type oid, which will be the oid of the system directory that contains the options. The return type is ignored. The function should report invalid options using the ereport (ERROR) function.


-   **OPTIONS \(option 'value' \[,...\]\)**

    Specifies options for the new FDW. The allowed option names and values are specific to each FDW and validated using the FDW validator function. The option name must be unique.


## Examples

```
--Creates a useless FDW named dummy.
openGauss=# CREATE FOREIGN DATA WRAPPER dummy;

--Use the handler function file_fdw_handler to create an FDW named file.
openGauss=# CREATE FOREIGN DATA WRAPPER file HANDLER file_fdw_handler;

--Create an FDW named mywrapper.
openGauss=# CREATE FOREIGN DATA WRAPPER mywrapper OPTIONS (debug 'true');
```
