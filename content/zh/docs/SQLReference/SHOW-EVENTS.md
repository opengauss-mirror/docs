# SHOW EVENTS

## 功能描述<a name="section5400959952"></a>

显示指定schema下所有定时任务的基本信息。

## 注意事项<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

定时任务相关操作只有sql\_compatibility = 'B'时支持。

## 语法格式<a name="section157338176610"></a>

```
SHOW EVENTS
    [{FROM | IN} schema_name]
    [LIKE 'pattern' | WHERE condition]
```

## 参数说明<a name="section652211111716"></a>

-   \{FROM | IN\} schema\_name

    指定要查询的schema，默认情况下为当前schema。

-   LIKE 'pattern'

    LIKE可以模式匹配定时任务名称，不指定则打印当前schema下所有定时任务

-   WHERE condition

    WHERE子句构成一个行选择表达式，用来缩小SHOW EVENTS查询的范围。condition是返回值为布尔型的任意表达式，任何不满足该条件的行都不会被检索。


## 示例<a name="section192526392717"></a>

```
--查看event_a schema下的通过模式匹配'_e'查询出的所有定时任务的信息
openGauss=# SHOW EVENTS IN event_a LIKE '_e';
```

