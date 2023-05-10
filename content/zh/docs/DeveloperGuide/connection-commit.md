# connection.commit\(\)

## 功能描述<a name="section5708152714306"></a>

此方法将当前挂起的事务提交到数据库。

>![](public_sys-resources/icon-caution.png) **注意：** 
>默认情况下，Psycopg在执行第一个命令之前打开一个事务：如果不调用commit\(\)，任何数据操作的效果都将丢失。

## 原型<a name="section441681310810"></a>

```
connection.commit()
```

## 参数<a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

无。

## 返回值<a name="section899452817814"></a>

无。

## 示例<a name="section4160944682"></a>

请参见[示例：常用操作](示例-常用操作_Psycopg.md)。

