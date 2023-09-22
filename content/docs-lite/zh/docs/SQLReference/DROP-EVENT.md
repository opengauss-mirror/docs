# DROP EVENT<a name="ZH-CN_TOPIC_0000001503113597"></a>

## 功能描述<a name="section5400959952"></a>

删除一个定时任务。

## 注意事项<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

定时任务相关操作只有sql\_compatibility = 'B'时支持。
只有定时任务的所有者有权删除待修改的定时任务，用户通过DROP EVENT修改定时任务时需要拥有被指定schema的USAGE权限。系统管理员默认拥有删除所有定时任务的权限。

## 语法格式<a name="section157338176610"></a>

```
DROP EVENT [IF EXISTS] event_name
```

## 参数说明<a name="section652211111716"></a>

-   IF EXISTS

    如果定时任务不存在，会输出一个NOTICE。



## 示例<a name="section192526392717"></a>

```
openGauss=# DROP EVENT event_e1;
```

