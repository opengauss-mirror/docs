# 设置网卡MTU值<a name="ZH-CN_TOPIC_0249784562"></a>

将各数据库节点的网卡MTU值设置为相同大小。对于X86，MTU值推荐1500；对于ARM，MTU值推荐8192。

```
ifconfig 网卡编号 mtu 值
```

