# GOTO语句

GOTO语句可以实现从GOTO位置到目标语句的无条件跳转。GOTO语句会改变原本的执行逻辑，因此应该慎重使用，或者也可以使用EXCEPTION处理特殊场景。当执行GOTO语句时，目标Label必须是唯一的。

## 语法<a name="zh-cn_topic_0237122238_section126022140116"></a>

label declaration ::=

![](figures/zh-cn_image_0253404022.png)

goto statement ::=

![](figures/zh-cn_image_0253404023.png)

## 示例<a name="zh-cn_topic_0237122238_section147058110414"></a>

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

## 限制场景<a name="zh-cn_topic_0237122238_section186169245159"></a>

GOTO使用有以下限制场景：

-   不支持有多个相同的GOTO labels目标场景，无论是否在同一个block中。

    ```
    BEGIN
      GOTO pos1; 
      <<pos1>>
      SELECT * FROM ...
      <<pos1>>
      UPDATE t1 SET ...
    END;
    ```


-   不支持GOTO跳转到IF语句、CASE语句、LOOP语句中。

    ```
    BEGIN
       GOTO pos1; 
       IF valid THEN
         <<pos1>>
         SELECT * FROM ...
       END IF;
     END;
    ```


-   不支持GOTO语句从一个IF子句跳转到另一个IF子句，或从一个CASE语句的WHEN子句跳转到另一个WHEN子句。

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


-   不支持从外部块跳转到内部的BEGIN-END块。

    ```
    BEGIN
       GOTO pos1;  
       BEGIN
         <<pos1>>
         UPDATE t1 SET ...
       END;
     END;
    ```


-   不支持从异常处理部分跳转到当前的BEGIN-END块。但可以跳转到上层BEGIN-END块。

    ```
    BEGIN
       <<pos1>>
       UPDATE t1 SET ...
       EXCEPTION
         WHEN condition THEN
            GOTO pos1;
     END;
    ```


-   如果从GOTO到一个不包含执行语句的位置，需要添加NULL语句。

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


