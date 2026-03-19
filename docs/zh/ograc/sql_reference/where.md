# WHERE子句

WHERE主要用于从表中筛选满足指定条件的数据行，只有满足WHERE子句条件的行才会被返回。

## 基本语法

```
SELECT 
    { * | column1 [, column2, ...] }
[ FROM table_name [, ...] ]
[ WHERE condition ];
```

## 参数说明

- **WHERE子句**

    行选择表达式，用于限定SELECT语句的查询范围。在WHERE子句中可以使用比较运算符、逻辑运算符以及特殊条件表达式。

- **condition**

    返回值为布尔类型的任意表达式。只有满足该条件（结果为TRUE）的行才会被检索出来。

## condition 组成元素详解

- **比较表达式**

    `column 比较运算符 value`

    比较运算符包括：
    
    - =：等于

    - \>：大于

    - <：小于

    - \>=：大于等于

    - <=：小于等于

    - <> 或 !=：不等于

    示例：
    ```
    SELECT * FROM customer_t1 WHERE c_customer_sk > 1000;
    SELECT * FROM customer_t1 WHERE c_customer_id = 'hello';
    SELECT * FROM customer_t1 WHERE c_customer_sk <> 3869;
    ```

- **逻辑表达式**

    `condition1 逻辑运算符 condition2`

    逻辑运算符包括：

    - AND：两个条件同时为真

    - OR：两个条件中至少一个为真

    - NOT：对条件取反

    示例：
    ```
    SELECT * FROM customer_t1 WHERE c_customer_sk > 1000 AND c_customer_id = 'hello';
    SELECT * FROM customer_t1 WHERE c_customer_sk > 6985 OR c_customer_id = 'hello';
    SELECT * FROM customer_t1 WHERE NOT c_customer_id = 'hello';
    ```

- **BETWEEN AND范围表达式**

    `column BETWEEN value1 AND value2`

    等价于 column >= value1 AND column <= value2

    示例：
    ```
    SELECT * FROM customer_t1 WHERE c_customer_sk BETWEEN 4000 AND 9000;
    SELECT * FROM customer_t1 WHERE c_customer_sk NOT BETWEEN 4000 AND 9000;
    ```

- **IN 集合表达式**

    `column IN (value1, value2, ...)`

    判断列值是否在指定的集合中

    示例：
    ```
    SELECT * FROM customer_t1 WHERE c_customer_sk IN (1000, 2000, 3000);
    SELECT * FROM customer_t1 WHERE c_customer_id IN ('hello', 'world', 'test');
    SELECT * FROM customer_t1 WHERE c_customer_sk NOT IN (1000, 2000, 3000);
    ```

- **LIKE 模式匹配表达式**

    `column LIKE pattern [ESCAPE 'escape_char']`

    模式匹配通配符：

    - %：匹配任意多个字符（包括0个）

    - \_：匹配单个字符

    ESCAPE 转义符：

    当需要匹配通配符本身（% 或 _）时，可以使用 ESCAPE 子句指定转义字符，将通配符转义为普通字符。

    示例：
    ```
    SELECT * FROM customer_t1 WHERE c_customer_id LIKE 'A%';
    SELECT * FROM customer_t1 WHERE c_customer_id LIKE 'A_';
    SELECT * FROM customer_t1 WHERE c_customer_id LIKE 'A\%' ESCAPE '\';
    ```

- **NULL 判断表达式**

    `column IS NULL`

    `column IS NOT NULL`

    判断列值是否为空（NULL）

    示例：
    ```
    SELECT * FROM customer_t1 WHERE c_last_name IS NULL;
    SELECT * FROM customer_t1 WHERE c_last_name IS NOT NULL;
    ```

## 关于索引扫描（index scan）

支持基础比较运算符，like/in/between and/is[not] null/true/false语句的索引扫描。

在对索引列使用函数、隐式转换、或前导通配符LIKE时，不支持计算索引扫描代价。

在无统计信息的情况下，不支持计算索引扫描代价。

例如：
```
SELECT * FROM customer_t1 WHERE c_customer_sk + 1 = 1000;       -- 不走索引
SELECT * FROM customer_t1 WHERE c_customer_id LIKE '%A';        -- 前导通配符LIKE不走索引
SELECT * FROM customer_t1 WHERE c_customer_sk LIKE '1%';    -- 隐式转换不走索引
```