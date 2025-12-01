# 空语句

在PL/SQL程序中，可以用NULL语句来说明“不用做任何事情”，相当于一个占位符，可以使某些语句变得有意义，提高程序的可读性。

## 语法<a name="zh-cn_topic_0237122236_zh-cn_topic_0059777781_sf998aa99b3fb490182c9c9edcea2d988"></a>

空语句的用法如下：

```
DECLARE
    …
BEGIN
    …
    IF v_num IS NULL THEN
        NULL; -- 不需要处理任何数据。
    END IF;
END;
/
```
