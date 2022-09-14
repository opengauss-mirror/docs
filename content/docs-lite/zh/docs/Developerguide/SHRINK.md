# SHRINK<a name="ZH-CN_TOPIC_0000001331251018"></a>

## 功能描述<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_s25c2a01507274648bf05cbcb1dc418bf"></a>

将给定的压缩表进行chunk碎片化的整理，整理后有利于页面的读写。

## 注意事项<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_s60091e11d710468f8772f6732699506b"></a>

-   shrink操作只在主机上执行，备机上不能手动执行。
-   shrink操作的时间与当前CPU使用率和表的大小相关。
-   shrink本质属于优化操作，若优化时数据库异常，重新拉起后未优化的部分不再执行。

## 语法格式<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_sb9827c497faf4cc490614f51246dbc5b"></a>

```
SHRINK TABLE table_name [nowait];
SHRINK INDEX index_name [nowait];
```

## 参数说明<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_s0a4a952823114ec6bfe2864b0af1db2f"></a>

-   nowait

    表示任务发起后立即返回，不需要等待整理结果，后台线程会定时唤醒对shrink添加的任务进行整理。


## 示例<a name="zh-cn_topic_0283137477_zh-cn_topic_0237122196_zh-cn_topic_0059779241_sdb42dc749d654038b498d0f77883ae8a"></a>

以下以SHRINK TABLE进行举例，SHRINK INDEX操作与SHRINK TABLE相同。

```
--创建表row_compression
openGauss=# CREATE TABLE row_compression
(
    id int
) with (compresstype=2, compress_chunk_size = 512, compress_level = 1);

--插入数据
openGauss=# Insert into row_compression select generate_series(1,1000);

--查看数据
openGauss=# SELECT * FROM row_compression;

--shrink整理
openGauss=# SHRINK TABLE row_compression;

--删除表
openGauss=# DROP TABLE row_compression;
```

