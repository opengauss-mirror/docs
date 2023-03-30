# 赋值语句<a name="ZH-CN_TOPIC_0289899984"></a>

## 注意事项

相比于原始的openGauss，dolphin对于赋值语法的修改为：

1. 增加在begin...end之间可以通过set对变量进行赋值的语法功能。

## 语法<a name="zh-cn_topic_0283137492_zh-cn_topic_0237122222_zh-cn_topic_0059778597_s0d14c5a042e2478fa57514f056522738"></a>

给变量赋值的语法请参见[图1](#zh-cn_topic_0283137492_zh-cn_topic_0237122222_zh-cn_topic_0059778597_f1087f61f4ec24addbb3b79a2ccf21917)。

**图 1**  assignment\_value::=<a name="zh-cn_topic_0283137492_zh-cn_topic_0237122222_zh-cn_topic_0059778597_f1087f61f4ec24addbb3b79a2ccf21917"></a>  
![](figures/assignment_value.png "assignment_value")

B模式下支持：

```
set variable_name := value;
```

对以上语法格式的解释如下：

-   variable\_name：变量名。
-   value：可以是值或表达式。值value的类型需要和变量variable\_name的类型兼容才能正确赋值。

示例：

```
openGauss=# DECLARE
    emp_id  INTEGER := 7788;--赋值
BEGIN
    emp_id := 5;--赋值
    emp_id := 5*7784;
END;
/

B模式下:
openGauss=# DECLARE
    emp_id  INTEGER := 7788;--赋值
BEGIN
    set emp_id := 5;--赋值
    set emp_id := 5*7784;
END;
/
```

> ![](public_sys-resources/icon-notice.gif) **须知：** 
>
> * 在begin...end之间可以通过set variable\_name :=(=) value来对变量进行赋值。

