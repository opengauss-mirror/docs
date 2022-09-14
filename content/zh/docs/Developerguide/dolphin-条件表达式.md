# 条件表达式<a name="ZH-CN_TOPIC_0289899945"></a>

相比于原始的openGauss，dolphin对于条件表达式的修改主要为:
1. 新增```IFNULL/IF```表达式。

-   IFNULL

    等价于NVL，NVL的语法图请参见[图7](#zh-cn_topic_0283136958_zh-cn_topic_0237122002_zh-cn_topic_0059777797_f69cd4e01dd6e4280b756eb98d3c77c91)。

    **图 7**  nvl::=<a name="zh-cn_topic_0283136958_zh-cn_topic_0237122002_zh-cn_topic_0059777797_f69cd4e01dd6e4280b756eb98d3c77c91"></a>  
    ![](figures/nvl.jpg "nvl")

    如果value1为NULL则返回value2，如果value1非NULL，则返回value1。

    示例：

    ```
    openGauss=# SELECT ifnull(null,1);
    ifnull 
    -------
     1
    (1 row)
    
    ```

    ```
    openGauss=# SELECT ifnull ('Hello World' ,1);
       ifnull
    -------------
     Hello World
    (1 row)
    ```

-   IF

    仅支持IF(expr1,expr2,expr3)，等价于CASE WHEN expr1 THEN expr2 ELSE expr3 END。

    CASE表达式的语法图请参考[图1](#zh-cn_topic_0283136958_zh-cn_topic_0237122002_zh-cn_topic_0059777797_f6defc8307fd0434380b6ba22838ed5f1)。

    **图 1**  case::=<a name="zh-cn_topic_0283136958_zh-cn_topic_0237122002_zh-cn_topic_0059777797_f6defc8307fd0434380b6ba22838ed5f1"></a>  
    ![](figures/case.jpg "case")

    CASE子句可以用于合法的表达式中。condition是一个返回BOOLEAN数据类型的表达式：

    -   如果结果为真，CASE表达式的结果就是符合该条件所对应的result。
    -   如果结果为假，则以相同方式处理随后的WHEN或ELSE子句。
    -   如果各WHEN  condition都不为真，表达式的结果就是在ELSE子句执行的result。如果省略了ELSE子句且没有匹配的条件，结果为NULL。

    示例：

    ```
    openGauss=# CREATE TABLE case_when_t1(CW_COL1 INT);
    
    openGauss=# INSERT INTO case_when_t1 VALUES (1), (2), (3);
    
    openGauss=# SELECT * FROM case_when_t1;
    cw_col1 
    ---------
     1
     2
     3
    (3 rows)
    
    openGauss=# SELECT CW_COL1, IF(CW_COL1=1, 'one', 'other') FROM case_when_t1 ORDER BY 1;
     cw_col1 | case  
    ---------+-------
           1 | one
           2 | other
           3 | other
    (3 rows)
    
    openGauss=# DROP TABLE case_when_t1;
    ```


