# INSERT INTO语句<a name="ZH-CN_TOPIC_0000001179344358"></a>

在创建一个表后，表中并没有数据，使用这个表之前，需要向表中插入数据。INSERT INTO语句用于向表中插入新记录。该语句可以插入一行数据也可以同时插入多行数据。

## 语法格式<a name="section935114915543"></a>

```
INSERT INTO table_name [ ( column_name [, ...] ) ]
    { DEFAULT VALUES
    | VALUES {( { expression | DEFAULT } [, ...] ) }[, ...] };
```

## 参数说明<a name="section932010594419"></a>

-   **table\_name**

    要插入数据的目标表名。

    取值范围：已存在的表名。

-   **column\_name**

    目标表中的字段名：

    -   字段名可以有子字段名或者数组下标修饰。
    -   没有在字段列表中出现的每个字段，将由系统默认值，或者声明时的默认值填充，若都没有则用NULL填充。例如，向一个复合类型中的某些字段插入数据的话，其他字段将是NULL。
    -   目标字段（column\_name）可以按顺序排列。如果没有列出任何字段，则默认全部字段，且顺序为表声明时的顺序。
    -   如果value子句只提供了N个字段，则目标字段为前N个字段。
    -   value子句提供的值在表中从左到右关联到对应列。

    取值范围：已存在的字段名。

-   **expression**

    赋予对应column的一个有效表达式或值：

    -   向表中字段插入单引号 " ' "时需要使用单引号自身进行转义。
    -   如果插入行的表达式不是正确的数据类型，系统试图进行类型转换，若转换不成功，则插入数据失败，系统返回错误信息。

-   **DEFAULT**

    对应字段名的缺省值。如果没有缺省值，则为NULL。


## 示例<a name="section16704153143"></a>

-   向已创建成功的表customer\_t1中插入一行。

    数据值是按照这些字段在表中出现的顺序列出的，并且用逗号分隔。通常数据值是文本（常量），但也允许使用标量表达式。

    ```
    openGauss=# INSERT INTO customer_t1(c_customer_sk, c_customer_id, c_first_name,Amount) VALUES (3769, 'hello', 'Grace', 1000);
    INSERT 0 1
    ```

    如果用户已经知道表中字段的顺序，也可无需列出表中的字段。例如以下命令与上面的命令效果相同。

    ```
    openGauss=# INSERT INTO customer_t1 VALUES (3769, 'hello', 'Grace',DEFAULT,1000);
    INSERT 0 1
    ```

    如果用户不知道所有字段的数值，可以忽略其中的一些。没有数值的字段将被填充为字段的缺省值。例如：

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_first_name) VALUES (3769, 'Grace');
    INSERT 0 1
    等同于
    openGauss=# INSERT INTO customer_t1 VALUES (3769, 'hello');
    INSERT 0 1
    ```

    用户也可以对独立的字段或者整个行明确缺省值。

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name) VALUES (3769, 'hello', DEFAULT);
    INSERT 0 1
    openGauss=# INSERT INTO customer_t1 DEFAULT VALUES;
    INSERT 0 1
    ```

-   如果需要在表中插入多行，请使用以下命令。

    ```
    openGauss=# INSERT INTO customer_t1 (c_customer_sk, c_customer_id, c_first_name,Amount) VALUES
        (6885, 'maps', 'Joes',2200),
        (4321, 'tpcds', 'Lily',3000),
        (9527, 'world', 'James',5000);
    INSERT 0 3
    ```

    如果需要向表中插入多条数据，除此命令外，也可以多次执行插入一行数据命令实现。但是建议使用此命令可以提升效率。
