# DO

## 功能描述<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_s9b63cdf8ade346bb85b02b8dbdf97170"></a>

执行匿名代码块。

代码块被看做是没有参数的一段函数体，返回值类型是void。它的解析和执行是同一时刻发生的。

或，执行表达式并不返回结果

## 注意事项<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_sdad44f940b3e443387bdb882b0ddab8c"></a>

相比于原始的openGauss，dolphin对于DO语法的修改为：

在原始语法的基础上增加DO expr_list 语法，用于执行表达式并不返回结果。

## 语法格式<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_sd2aa9ae78e2b471aa1517fa438ac5e9e"></a>

```
DO [ LANGUAGE lang_name ] code;

或

DO expr[,expr...];
```

## 参数说明<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_sfb2bd9ccfd56476e820c028e3e53ccaf"></a>

- **lang\_name**

  用来解析代码的程序语言的名称，如果缺省，默认的语言是plpgsql。

- **code**

  程序语言代码可以被执行的。程序语言必须指定为字符串才行。

- **expr**

  表达式，多个表达式使用逗号进行分隔，表达式支持的内容参考[表达式](../SQLReference/表达式.md)。

  


## 示例<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_s414adb8f7846482184cbbd960d4adfcf"></a>

```
--执行并不返回结果
openGauss=# DO 1;

openGauss=# DO pg_sleep(1);

--执行多个表达式，不返回结果

openGauss=# DO 1+2;
```