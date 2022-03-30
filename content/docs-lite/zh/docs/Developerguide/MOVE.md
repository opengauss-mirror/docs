# MOVE<a name="ZH-CN_TOPIC_0289900005"></a>

## 功能描述<a name="zh-cn_topic_0283137573_zh-cn_topic_0237122169_zh-cn_topic_0059778649_s0bf0a06c81754f8b9c758ba7660a6d5f"></a>

MOVE在不检索数据的情况下重新定位一个游标。MOVE的作用类似于[FETCH](FETCH.md)命令，但只是重定位游标而不返回行。

## 注意事项<a name="zh-cn_topic_0283137573_zh-cn_topic_0237122169_zh-cn_topic_0059778649_sb645366a8585455aaecf9f6d58feef33"></a>

无。

## 语法格式<a name="zh-cn_topic_0283137573_zh-cn_topic_0237122169_zh-cn_topic_0059778649_s813243b788f64e2ab3219be97d6efe24"></a>

```
MOVE [ direction [ FROM | IN ] ] cursor_name;
```

其中direction子句为可选参数。

```
NEXT
   | PRIOR
   | FIRST
   | LAST
   | ABSOLUTE count
   | RELATIVE count
   | count
   | ALL
   | FORWARD
   | FORWARD count
   | FORWARD ALL
   | BACKWARD
   | BACKWARD count
   | BACKWARD ALL
```

## 参数说明<a name="zh-cn_topic_0283137573_zh-cn_topic_0237122169_zh-cn_topic_0059778649_scd6d2507c45c462a8717666a869f836b"></a>

MOVE命令的参数与FETCH的相同，详细请参见FETCH的[参数说明](FETCH.md#zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_sceb763c430654064b8f61e9aa0792af9)。

>![](public_sys-resources/icon-note.gif) **说明：** 
>成功完成时，MOVE命令将返回一个“MOVE count”的标签，count是一个使用相同参数的FETCH命令会返回的行数（可能为零）。

## 示例<a name="zh-cn_topic_0283137573_zh-cn_topic_0237122169_zh-cn_topic_0059778649_s135d1e005b114aa4b3446001b7416853"></a>

```
--开始一个事务。
openGauss=# START TRANSACTION;

--定义一个名为cursor1的游标。
openGauss=# CURSOR cursor1 FOR SELECT * FROM tpcds.reason;

--忽略游标cursor1的前3行。
openGauss=# MOVE FORWARD 3 FROM cursor1;

--抓取游标cursor1的前4行。
openGauss=# FETCH 4 FROM cursor1;
 r_reason_sk |   r_reason_id    |                                            r_reason_desc                                             
-------------+------------------+------------------------------------------------------------------------------------------------------
           4 | AAAAAAAAEAAAAAAA | Not the product that was ordred                                                                     
           5 | AAAAAAAAFAAAAAAA | Parts missing                                                                                       
           6 | AAAAAAAAGAAAAAAA | Does not work with a product that I have                                                            
           7 | AAAAAAAAHAAAAAAA | Gift exchange                                                                                       
(4 rows)

--关闭游标。
openGauss=# CLOSE cursor1;

--结束一个事务。
openGauss=# END;
```

## 相关链接<a name="zh-cn_topic_0283137573_zh-cn_topic_0237122169_zh-cn_topic_0059778649_s576a05d59d374a6684001f646161ee14"></a>

[CLOSE](CLOSE.md)，[FETCH](FETCH.md)

