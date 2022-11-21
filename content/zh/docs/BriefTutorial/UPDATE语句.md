# UPDATE语句<a name="ZH-CN_TOPIC_0000001224824119"></a>

修改已经存储在数据库中数据的行为叫做更新。用户可以更新单独一行，所有行或者指定的部分行。还可以独立更新每个字段，而其他字段则不受影响。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

## 语法格式<a name="section169339391182"></a>

```
UPDATE table_name
SET column_name = { expression | DEFAULT }
[WHERE condition ];
```

## 参数说明<a name="section24508283118"></a>

-   **table\_name**

    要更新的表名，可以使用模式修饰。例如，myshcema.table。

    取值范围：已存在的表名称。

-   **expression**

    赋给字段的值或表达式。

-   **column\_name**

    要修改的字段名。

    取值范围：已存在的字段名。

-   **condition**

    一个返回Boolean类型结果的表达式。只有这个表达式返回true的行才会被更新。


## 示例<a name="section1401745151110"></a>

执行如下命令将表customer\_t1中c\_customer\_sk为9527的地域重新定义为9876。

```
openGauss=# UPDATE customer_t1 SET c_customer_sk = 9876 WHERE c_customer_sk = 9527;
UPDATE 1
```

这里的表名称也可以使用模式名修饰，否则会从默认的模式路径找到这个表。SET后面紧跟字段和新的字段值。新的字段值不仅可以是常量，也可以是变量表达式。

比如，把所有c\_customer\_sk的值增加100：

```
openGauss=# UPDATE customer_t1 SET c_customer_sk = c_customer_sk + 100;
UPDATE 9
```

在这里省略了WHERE子句，表示表中的所有行都要被更新。如果出现了WHERE子句，那么只有匹配其条件的行才会被更新。

在SET子句中的等号是一个赋值，而在WHERE子句中的等号是比较。WHERE条件不一定是相等测试，许多其他的操作符也可以使用。

用户可以在一个UPDATE命令中更新更多的字段，方法是在SET子句中列出更多赋值，比如：

```
openGauss=# UPDATE customer_t1 SET c_customer_id = 'Admin', c_first_name = 'Local' WHERE c_customer_sk = 4421;
UPDATE 1
```
