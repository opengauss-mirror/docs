# SHUTDOW

## 功能描述

SHOW将关闭当前连接的数据库节点。

## 注意事项

仅拥有管理员权限的用户可以运行此命令。

## 语法格式

```
SHUTDOWN 
  { 
         | 
    fast | 
    immediate
  };
```

## 参数说明

+ **“ ”** 

  不指定关闭模式，默认为fast。

+ **fast**：

  不等待客户端中断连接，将所有活跃事务回滚并且强制断开客户端，然后关闭数据库节点。

+ **immediate**

  强行关闭，在下次重新启动的时候将导致故障恢复。

## 示例

```
--关闭当前数据库节点。
postgres=# SHUTDOWN;

--使用fast模式关闭当前数据库节点。
postgres=# SHUTDOWN FAST;
```

