# DELIMITER

## 功能描述

定义一个结束符，表示遇到该结束符的时候，输入命令会结束。该用法可以用在输入语句较多时，并且语句中存在分号，可以指定一个特殊的符号作为结束符。默认情况下，结束符为‘;’。

## 注意事项

delimiter符号目前不是自由设定的，结束符范围有限制，目前包含关键字，标识符，字符串，操作符和分号等，其中常见的用法是"//"；具体使用可以看示例。

设置的结束符的级别是会话级别的,仅在gsql客户端支持,仅在B模式下可用。

## 语法格式

-   定义结束符

    ```
    DELIMITER delimiter_str_name END_OF_INPUT
    DELIMITER delimiter_str_name END_OF_INPUT_COLON
    ```
    


## 参数说明

-   **delim_str_name**

    可以被定义的结束符种类。


-   **END_OF_INPUT/END_OF_INPUT_COLON**

    结束状态。


## 示例

```
--定义标识符
openGauss=# delimiter abcd

--定义字符串
openGauss=# delimiter "sds;"

--定义操作符
openGauss=# delimiter +
openGauss=# delimiter /

--定义默认值
openGauss=# delimtier ;

## 相关链接

无。
