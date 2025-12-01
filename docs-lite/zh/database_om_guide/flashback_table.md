# 闪回表<a name="ZH-CN_TOPIC_0000001177933862"></a>

## 背景信息<a name="section116901421161613"></a>

闪回表可以将表恢复至特定时间点，当逻辑损坏仅限于一个或一组表，而不是整个数据库时，此特性可以快速恢复表的数据。闪回表基于MVCC多版本机制，通过删除指定时间点和该时间点之后的增量数据，并找回指定时间点和当前时间点删除的数据，实现表级数据还原。

## 前提条件<a name="section17975164121712"></a>

-   undo\_retention\_time参数用于设置undo旧版本的保留时间。

## 语法<a name="section510120469162"></a>

```
TIMECAPSULE TABLE table_name TO { TIMESTAMP | CSN } expression
```

## 使用示例<a name="section20833135217166"></a>

```
TIMECAPSULE TABLE t1 TO TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
TIMECAPSULE TABLE t1 TO CSN 9617;
```

