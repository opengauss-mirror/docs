# LISTEN

## 功能描述<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s73bdfafa6f9743e9a9e0a4f7b40cc2c2"></a>

将当前会话注册为某一通道的侦听者，通过函数pg\_listening\_channels可查看当前会话已侦听的所有通道的名称。当连接到同一数据库的其他会话通过NOTIFY语句向该通道发布消息时，侦听该通道的会话会收到这一消息。通过这种方式，连接到同一数据库的会话之间可以建立起一个简易的异步通信。注册成为某通道的侦听者后，可通过UNLISTEN语句取消侦听，会话结束时也会自动取消对所有正在侦听的通道的侦听。

## 注意事项<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s241a4288629344c38e10c79ec40b39f8"></a>

- LISTEN语句在事务提交后才真正开始生效，因此在LISTEN语句执行后、事务提交前通道传递的消息，会话不会接收。

- 暂不支持在启用线程池功能时执行该语句。

- 会话结束后会自动取消对所有通道的侦听，而会话超时断开同样也会导致对通道的侦听被取消。如果希望会话在长时间无操作的情况下也能维持对通道的侦听，可以延长会话超时时间，或关闭会话超时检查，设置方式详见[session\_timeout](../database_reference/security_and_authentication_postgresql_conf.md#session_timeout)。

- 通过驱动执行LISTEN语句侦听通道时，需要开启轻量化通信参数[light\_comm](../database_reference/connection_settings.md#light_comm)。

## 语法格式<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_sf8edb0f958e14e4f9f6e68dd67c64c6b"></a>

```
LISTEN channel;
```

## 参数说明<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_se1710433f9c54ff7b687d23534316d63"></a>

- **channel**

    指定侦听通道的名称。命名需符合[标识符命名规范](keywords.md)。

## 示例<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s7efb6d3c532445a8a87cf6dee4c7181d"></a>

参见NOTIFY的[示例](notify.md)

## 相关链接<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_section1690451517271"></a>

[NOTIFY](notify.md)

[UNLISTEN](unlisten.md)
