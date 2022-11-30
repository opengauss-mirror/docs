# SHUTDOWN<a name="ZH-CN_TOPIC_0289900099"></a>

## 功能描述<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

SHUTDOWN将关闭当前连接的数据库节点。

## 注意事项<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

仅拥有管理员权限的用户可以运行此命令。

## 语法格式<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
SHUTDOWN
  {
          |
    fast  |
    immediate
  };
```

## 参数说明<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

-   **""**

    不指定关闭模式，默认为fast。


-   **fast**

    不等待客户端中断连接，将所有活跃事务回滚并且强制断开客户端，然后关闭数据库节点。

-   **immediate**

    强行关闭，在下次重新启动的时候将导致故障恢复。


## 示例<a name="zh-cn_topic_0283136791_zh-cn_topic_0237122191_zh-cn_topic_0059779163_s9926ef8e79984fac9b05d0b6bd0e8fd5"></a>

```
--关闭当前数据库节点。
openGauss=# SHUTDOWN;

--使用fast模式关闭当前数据库节点。
openGauss=# SHUTDOWN FAST;
```
