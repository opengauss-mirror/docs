# 条件表达式函数<a name="ZH-CN_TOPIC_0289900535"></a>

## 注意事项<a name="zh-cn_topic_0283137529_zh-cn_topic_0237122159_zh-cn_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

-   本章节仅包含dolphin新增的条件表达式函数，原openGauss的条件表达式函数请参考[条件表达式函数](条件表达式函数.md)

## 条件表达式函数<a name="zh-cn_topic_0283136903_zh-cn_topic_0237121986_zh-cn_topic_0059778809_s67706c61c09047c4bca384689f7f5c08"></a>

-   if\(bool, expr1, expr2\)

    描述：条件判断函数。若bool值为true，则返回expr1；若bool值为false，则返回expr2

    示例：

    ```
    openGauss=# select if(true, 1, 2);
     case
    ------
        1
    (1 row)
    ```
    ```
    openGauss=# select if(false, 1, 2);
     case
    ------
        2
    (1 row)
    ```

- ifnull\( expr1 , expr2 \)

  描述：

    -   如果expr1为NULL，则返回expr2。
    -   如果expr1非NULL，则返回expr1。

  示例：

  ```
  openGauss=# SELECT ifnull('hello','world');
    nvl  
  -------
   hello
  (1 row)
  ```

  备注：参数转换逻辑与nvl一致。

- isnull\( expr \)

    -   如果expr为NULL，则返回true。
    -   如果expr非NULL，则返回false。

  示例：

  ```
  openGauss=# SELECT ifnull('hello');
  ?column?  
  --------
        f 
  (1 row)
  ```

  备注：判空逻辑与`expr is null`一致。

- gs_interval(base_expr, expr1, expr2, ..., exprn)

  描述：

    - 将base_expr与后面的expr(n)逐一比较，直到expr(n)大于base_expr，返回value(n-1)；如果expr(n)均小于等于base_expr，则返回value(n)。
    - 如果base_expr或者expr(n)为非数值数据：

        - BOOL型：TRUE转为1，FALSE转为0；
        - 能将其截断为float8形式浮点数，则将其截断为float8；
        - 不能截断为浮点数float8形式，则视为0。

  示例：

  ```
  openGauss=# SELECT gs_interval(5,2,3,4,6,7);
   gs_interval 
  -------------
             3
  (1 row)
  ```

  ```
  openGauss=# SELECT gs_interval(false,-1,0,true,2);
   gs_interval 
  -------------
             2
  (1 row)
  ```

  ```
  openGauss=# SELECT gs_interval('2022-12-12'::timestamp,'asdf','2020-12-12'::date,2023);
   gs_interval 
  -------------
             2
  (1 row)
  ```



- strcmp(str1, str2)

  描述：将str1与str2作比较(两个字符串自左向右逐个字符比较)，若str1=str2，则返回0；若str1>str2，则返回1；若str1<str2，则返回-1。

  示例：

  ```
  openGauss=# SELECT strcmp('asd','asd');
   strcmp 
  --------
        0
  (1 row)
  ```

  ```
  openGauss=# SELECT strcmp(312,311);
   strcmp 
  --------
        1
  (1 row)
  ```

  ```
  openGauss=# SELECT strcmp('2021-12-12'::timestamp,20210::float8);
   strcmp 
  --------
       -1
  (1 row)
  ```

  




