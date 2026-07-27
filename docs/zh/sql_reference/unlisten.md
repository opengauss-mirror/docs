# UNLISTEN

## 功能描述<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s73bdfafa6f9743e9a9e0a4f7b40cc2c2"></a>

取消对特定通道的侦听。

## 注意事项<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s241a4288629344c38e10c79ec40b39f8"></a>

- 事务提交后UNLISTEN语句才真正执行，但含UNLISTEN语句、且最终提交成功的事务自事务开始后收到的消息都不会再显示到会话前台。

- 暂不支持在启用线程池功能时执行该语句。

## 语法格式<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_sf8edb0f958e14e4f9f6e68dd67c64c6b"></a>

```
UNLISTEN { channel | * };
```

## 参数说明<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_se1710433f9c54ff7b687d23534316d63"></a>

- **channel**

    指定取消侦听的通道的名称。命名需符合[标识符命名规范](keywords.md)。使用通配符\*表示取消对所有通道的侦听。

## 示例<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s7efb6d3c532445a8a87cf6dee4c7181d"></a>

参见NOTIFY的[示例](notify.md)

## 相关链接<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_section1690451517271"></a>

[NOTIFY](notify.md)

[UNLISTEN](unlisten.md)
