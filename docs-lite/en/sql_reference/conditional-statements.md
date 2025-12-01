# Conditional Statements<a name="EN-US_TOPIC_0289900029"></a>

Conditional statements are used to decide whether given conditions are met. Operations are executed based on the decisions made.

openGauss supports five usages of  **IF**:

-   IF\_THEN

    **Figure  1**  IF\_THEN::=<a name="en-us_topic_0283137283_en-us_topic_0237122233_en-us_topic_0059778300_f49f3826ed5ce406fb823979bb5693d75"></a>  
    ![](figures/if_then.jpg "if_then")

    **IF\_THEN**  is the simplest form of  **IF**. If the condition is true, statements are executed. If it is false, they are skipped.

    Example:

    ```
    openGauss=# IF v_user_id <> 0 THEN
        UPDATE users SET email = v_email WHERE user_id = v_user_id;
    END IF;
    ```

-   IF\_THEN\_ELSE

    **Figure  2**  IF\_THEN\_ELSE::=<a name="en-us_topic_0283137283_en-us_topic_0237122233_en-us_topic_0059778300_f7793c47dee9842d3979aac9ebde3668d"></a>  
    ![](figures/if_then_else.jpg "if_then_else")

    **IF\_THEN\_ELSE**  statements add  **ELSE**  branches and can be executed if the condition is false.

    Example:

    ```
    openGauss=# IF parentid IS NULL OR parentid = ''
    THEN
        RETURN;
    ELSE
        hp_true_filename(parentid); -- Call the stored procedure.
    END IF;
    ```

-   IF\_THEN\_ELSE IF

    **IF**  statements can be nested in the following way:

    ```
    openGauss=# IF sex = 'm' THEN
        pretty_sex := 'man';
    ELSE
        IF sex = 'f' THEN
            pretty_sex := 'woman';
        END IF;
    END IF;
    ```

    Actually, this is a way of an  **IF**  statement nesting in the  **ELSE**  part of another  **IF**  statement. Therefore, an  **END IF**  statement is required for each nesting  **IF**  statement and another  **END IF**  statement is required to end the parent  **IF-ELSE**  statement. To set multiple options, use the following form:

-   IF\_THEN\_ELSIF\_ELSE

    **Figure  3**  IF\_THEN\_ELSIF\_ELSE::=<a name="en-us_topic_0283137283_en-us_topic_0237122233_en-us_topic_0059778300_f4be1510408244e98832b9ac2cf1c9ea9"></a>  
    ![](figures/if_then_elsif_else.png "if_then_elsif_else")

    Example:

    ```
    IF number_tmp = 0 THEN
        result := 'zero';
    ELSIF number_tmp > 0 THEN 
        result := 'positive';
    ELSIF number_tmp < 0 THEN
        result := 'negative';
    ELSE
        result := 'NULL';
    END IF;
    ```

-   IF\_THEN\_ELSEIF\_ELSE

    **ELSEIF**  is an alias of  **ELSIF**.

    Example:

    ```
    CREATE OR REPLACE PROCEDURE proc_control_structure(i in integer) 
    AS
        BEGIN
            IF i > 0 THEN
                raise info 'i:% is greater than 0. ',i; 
            ELSIF i < 0 THEN
                raise info 'i:% is smaller than 0. ',i; 
            ELSE
                raise info 'i:% is equal to 0. ',i; 
            END IF;
            RETURN;
        END;
    /
    
    CALL proc_control_structure(3);
    
    -- Delete the stored procedure.
    DROP PROCEDURE proc_control_structure;
    ```


