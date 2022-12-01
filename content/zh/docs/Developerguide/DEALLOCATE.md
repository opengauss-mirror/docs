# DEALLOCATE<a name="ZH-CN_TOPIC_0289900543"></a>

## 功能描述<a name="zh-cn_topic_0283136579_zh-cn_topic_0237122129_zh-cn_topic_0059778612_sf7de006cb8fc48b2bcd0e6d3c6ea1f2f"></a>

DEALLOCATE用于删除前面编写的预备语句。如果用户没有明确删除一个预备语句，那么它将在会话结束的时候被删除。

PREPARE关键字总被忽略。

## 注意事项<a name="zh-cn_topic_0283136579_zh-cn_topic_0237122129_zh-cn_topic_0059778612_sf6df3969ac4e4534a3d0bbf89b9a09d8"></a>

无。

## 语法格式<a name="zh-cn_topic_0283136579_zh-cn_topic_0237122129_zh-cn_topic_0059778612_s7404e1c104a0402e9518adbdfb75cf8c"></a>

```
DEALLOCATE [ PREPARE ] { name | ALL };
```

## 参数说明<a name="zh-cn_topic_0283136579_zh-cn_topic_0237122129_zh-cn_topic_0059778612_sb42a2e3c4ef945d3b53af4a15f876698"></a>

-   **name**

    将要删除的预备语句。

-   **ALL**

    删除所有预备语句。


## 示例<a name="zh-cn_topic_0283136579_zh-cn_topic_0237122129_zh-cn_topic_0059778612_s0cd8d4c203d642af85b3ae2ca4600bb3"></a>

无。
