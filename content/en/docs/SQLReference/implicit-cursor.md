# Implicit Cursor<a name="EN-US_TOPIC_0289900081"></a>

Implicit cursors are automatically set by the system for non-query statements such as modify or delete operations, along with their workspace. Implicit cursors are named  **SQL**, which is defined by the system.

## Overview<a name="en-us_topic_0283136644_en-us_topic_0237122245_en-us_topic_0059778352_s2cdd131c90024828a55b72311ceb5476"></a>

Implicit cursor operations, such as definition, open, value-grant, and close operations, are automatically performed by the system and do not need users to process. Users can use only attributes related to implicit cursors to complete operations. In workspace of implicit cursors, the data of the latest SQL statement is stored and is not related to explicit cursors defined by users.

Format call:  **SQL%**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   **INSERT**,  **UPDATE**,  **DELETE**, and  **SELECT**  statements do not need defined cursors.
>-   In O-compatible mode, if the GUC parameter  **behavior\_compat\_options**  is set to  **compat\_cursor**, implicit cursors are valid across stored procedures.

## Attributes<a name="en-us_topic_0283136644_en-us_topic_0237122245_en-us_topic_0059778352_sbc470b788a0c40af9e3f1dcf2d963894"></a>

An implicit cursor has the following attributes:

-   **SQL%FOUND**: Boolean attribute, which returns  **TRUE**  if the last fetch returns a row.
-   **SQL%NOTFOUND**: Boolean attribute, which works opposite to the  **SQL%FOUND**  attribute.
-   **SQL%ROWCOUNT**: numeric attribute, which returns the number of records fetched from the cursor.
-   **SQL%ISOPEN**: Boolean attribute, whose value is always  **FALSE**. Close implicit cursors immediately after an SQL statement is run.

## Examples<a name="en-us_topic_0283136644_en-us_topic_0237122245_en-us_topic_0059778352_s56d5099e16904d0bb9800bc6a8acf21c"></a>

```
-- Delete all employees in a department from the hr.staffs table. If the department has no employees, delete the department from the hr.sections table.
CREATE OR REPLACE PROCEDURE proc_cursor3() 
AS 
    DECLARE
    V_DEPTNO NUMBER(4) := 100;
    BEGIN
        DELETE FROM hr.staffs WHERE section_ID = V_DEPTNO;
        -- Proceed based on cursor status.
        IF SQL%NOTFOUND THEN
        DELETE FROM hr.sections_t1 WHERE section_ID = V_DEPTNO;
        END IF;
    END;
/

CALL proc_cursor3();

-- Delete the stored procedure and the temporary table.
DROP PROCEDURE proc_cursor3;
```

