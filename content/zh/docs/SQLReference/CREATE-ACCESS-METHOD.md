# CREATE ACCESS METHOD

## 功能描述<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

在当前数据库中创建一种新的访问方法，访问方法名称在数据库中必须唯一，只有超级用户可以定义新的访问方法。

## 注意事项<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

-   访问方法当前仅支持INDEX类型。
-   一个索引访问方法的处理器函数必须被声明为接受单一的类型为internal类型的参数并且返回伪类型index_am_handler。该参数只是被用来防止从 SQL 命令直接调用处理器函数。该函数的结果必须是一个已经 palloc 过的IndexAmRoutine类型结构，它包含核心代码使用该索引访问方法所需的所有信息。IndexAmRoutine结构（也被称为访问方法的API 结构）中的域指定了该访问方法的各种固定性质，例如它是否支持多列索引。同时，它包含用于该访问方法的支持函数的指针，这些函数会完成真正访问索引的工作（支持函数是纯 C 函数）。
-   新增自定义的访问方法，需要参考内置访问方法，到index.h和transformIndexStmt中增加方法支持（故不建议用户SQL命令中执行）。

## 语法格式<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>

创建自定义访问方法。

```
CREATE ACCESS METHOD name TYPE INDEX HANDLER handler_function
```

## 参数说明<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

-   **name**

    新创建的访问方法的名称。

-   **handler_function**

    handler_function是一个之前已注册的函数的名称（可能被模式限定），该函数表示要创建的访问方法。处理器函数必须被声明为接收一个单一的internal类型的参数，并且它的返回类型取决于访问方法的类型（INDEX访问方法，它必须是index_am_handler）。 处理器函数必须实现的 C 级别 API 取决于访问方法的类型。


## 示例<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
-   用处理器函数ivfflathandler创建一种索引访问方法ivfflat：
CREATE ACCESS METHOD ivfflat TYPE INDEX HANDLER ivfflathandler;
```

## 相关链接<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_scd5caca899f849f697cb50d76c49de4c"></a>

[DROP ACCESS METHOD](DROP-ACCESS-METHOD.md)