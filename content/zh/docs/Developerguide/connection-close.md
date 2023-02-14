# connection.close\(\)

## 功能描述<a name="section5708152714306"></a>

此方法关闭数据库连接。

>![](public_sys-resources/icon-caution.png) **注意：**
>此方法关闭数据库连接，并不自动调用commit\(\)。如果只是关闭数据库连接而不调用commit\(\)方法，那么所有更改将会丢失。

## 原型<a name="section441681310810"></a>

```
connection.close()
```

## 参数<a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

无。

## 返回值<a name="section899452817814"></a>

无。

## 示例<a name="section4160944682"></a>

请参见[示例：常用操作](示例-常用操作-1.md)。
