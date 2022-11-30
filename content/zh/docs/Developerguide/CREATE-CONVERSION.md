# CREATE CONVERSION<a name="ZH-CN_TOPIC_0000001151906462"></a>

## 功能描述<a name="zh-cn_topic_0059779060_s1b14773726ac4469a14e509530a7a957"></a>

定义一种两个字符集编码之间的新转换。

## 注意事项<a name="zh-cn_topic_0059779060_s8aed237cc11e48bcb20d63f3ed081327"></a>

-   标记为DEFAULT的转换将被自动地用于客户端和服务器之间的编码转换。为了支持这种用法，必须定义两个转换（从编码A到B以及从编码B到A）。
-   要创建一个转换，必须拥有该函数上的EXECUTE特权以及目标模式上的CREATE特权。
-   源编码和目标编码都不可以使SQL\_ASCII，因为在涉及SQL\_ASCII “encoding”的情况下，副武器的行为是硬连接的。
-   使用DROP CONVERSION可以一出用户定义的转换。

## 语法格式<a name="zh-cn_topic_0059779060_s24ab1cb591b54a43af5fe6d87cc067a1"></a>

```
CREATE [ DEFAULT ] CONVERSION name
    FOR source_encoding TO dest_encoding FROM function_name
```

## 参数说明<a name="zh-cn_topic_0059779060_s5c57cb1e5e8740dcb15254b0ee05e666"></a>

-   **DEFAULT**

    DEFAULT子句表示这个转换是从原编码到目标编码的默认转换。在一个模式中对于每一个编码对，只应该有一个默认转换。

-   **name**

    转换的名称，可以被模式限定。如果没有被模式限定，该转换被定义在当前模式中。在一个模式中，转换名称必须唯一。

-   **source\_encoding**

    原编码名称。

-   **dest\_encoding**

    目标编码名称。

-   **function\_name**

    被用来执行转换的函数。函数名可以被模式限定。如果没有，将在路径中查找该函数。

    ```
    conv_proc(
        integer, -- 原编码ID
        integer, -- 目标编码ID
        cstring, -- 源字符串（空值终止的C字符串）
        internal,-- 目标（用一个空值终止的C字符串填充）
        integer  -- 源字符串长度
    ) RETURNS void;
    ```


## 示例<a name="zh-cn_topic_0059779060_s11a931f26ab344c1aab49ebd522ee0ad"></a>

```
--使用myfunc创建一个编码UTF8到LATIN1的转换。
CREATE CONVERSION myconv FOR 'URF8' TO 'LATIN1' FROM myfunc;
```
