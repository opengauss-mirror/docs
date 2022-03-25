# Package<a name="EN-US_TOPIC_0000001151691213"></a>

A package is a combination of PL/SQL programs, such as stored procedures, functions, variables, constants, and cursors. It is object-oriented and can encapsulate PL/SQL program design elements. Functions in a package are created, deleted, and modified in a unified manner.

A package contains two parts: package specifications and package body. The declaration contained in the package specifications can be accessed by external functions and anonymous blocks. The declaration contained in the package body cannot be accessed by external functions or anonymous blocks, but can be accessed only by functions and stored procedures in the package body.

For details about how to create a package, see  [CREATE PACKAGE](en-us_topic_0000001114212452.md).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   Cross-package variables cannot be used as control variables in the for loops.
>-   Types defined in a package cannot be deleted or modified, and cannot be used to define tables.
>-   Cursor variables cannot be referenced in SCHEMA.PACKAGE.CUROSR mode.
>-   A cursor with parameters can be opened only in the current package.

