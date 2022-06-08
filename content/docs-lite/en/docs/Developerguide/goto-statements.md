# GOTO Statements<a name="EN-US_TOPIC_0289900397"></a>

A  **GOTO**  statement unconditionally transfers the control from the current statement to a labeled statement. The  **GOTO**  statement changes the execution logic. Therefore, use this statement only when necessary. Alternatively, you can use the  **EXCEPTION**  statement to handle issues in special scenarios. To run a  **GOTO**  statement, the labeled statement must be unique.

## Syntax<a name="en-us_topic_0283137514_en-us_topic_0237122238_section126022140116"></a>

label declaration ::=

![](figures/en-us_image_0289900622.png)

goto statement ::=

![](figures/en-us_image_0289900584.png)

## Examples<a name="en-us_topic_0283137514_en-us_topic_0237122238_section147058110414"></a>

```
openGauss=# CREATE OR REPLACE PROCEDURE GOTO_test()
AS 
DECLARE
    v1  int;
BEGIN
    v1  := 0;
        LOOP
        EXIT WHEN v1 > 100;
                v1 := v1 + 2;
                if v1 > 25 THEN
                        GOTO pos1;
                END IF;
        END LOOP;
<<pos1>>
v1 := v1 + 10;
raise info 'v1 is %. ', v1;
END;
/

call GOTO_test();
```

## Constraints<a name="en-us_topic_0283137514_en-us_topic_0237122238_section186169245159"></a>

Using  **GOTO**  statements has the following constraints:

-   A  **GOTO**  statement does not allow multiple labeled statements even if the statements are in different blocks.

    ```
    BEGIN
      GOTO pos1; 
      <<pos1>>
      SELECT * FROM ...
      <<pos1>>
      UPDATE t1 SET ...
    END;
    ```


-   A  **GOTO**  statement cannot transfer control to the  **IF**,  **CASE**, or  **LOOP**  statement.

    ```
    BEGIN
       GOTO pos1; 
       IF valid THEN
         <<pos1>>
         SELECT * FROM ...
       END IF;
     END;
    ```


-   A  **GOTO**  statement cannot transfer control from one  **IF**  clause to another, or from one  **WHEN**  clause in the  **CASE**  statement to another.

    ```
    BEGIN 
       IF valid THEN
         GOTO pos1;
         SELECT * FROM ...
       ELSE
         <<pos1>>
         UPDATE t1 SET ...
       END IF;
     END;
    ```


-   A  **GOTO**  statement cannot transfer control from an outer block to an inner  **BEGIN-END**  block.

    ```
    BEGIN
       GOTO pos1;  
       BEGIN
         <<pos1>>
         UPDATE t1 SET ...
       END;
     END;
    ```


-   A  **GOTO**  statement cannot transfer control from an exception handler to the current  **BEGIN-END**  block. However, a  **GOTO**  statement can transfer control to the upper-layer  **BEGIN-END**  block.

    ```
    BEGIN
       <<pos1>>
       UPDATE t1 SET ...
       EXCEPTION
         WHEN condition THEN
            GOTO pos1;
     END;
    ```


-   To branch to a position that does not have an executable statement, add the  **NULL**  statement.

    ```
    DECLARE
       done  BOOLEAN;
    BEGIN
       FOR i IN 1..50 LOOP
          IF done THEN
             GOTO end_loop;
          END IF;
          <<end_loop>>  -- not allowed unless an executable statement follows
          NULL; -- add NULL statement to avoid error
       END LOOP;  -- raises an error without the previous NULL
    END;
    /
    ```


