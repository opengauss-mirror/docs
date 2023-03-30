# SHOW MASTER STATUS <a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

查看当前wal（xlog）日志的相关进度。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  该语句在非主库也可以执行。
-  在主库执行时，Xlog_Lsn和pg_current_xlog_location的结果一致；在非主库执行时，Xlog_Lsn和pg_last_xlog_replay_location的结果一致。
-  主库用该语句查询当前xlog写入的实时进度。
-  备库用该语句查询当前xlog回放的实时进度。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW MASTER STATUS

```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **Xlog_File_Name**

       当前处理的xlog文件名。

- **Xlog_File_Offset**

       当前处理的xlog的文件偏移位置。

- **Xlog_Lsn**

       当前xlog的LSN。


## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# show master status;
      Xlog_File_Name      | Xlog_File_Offset |  Xlog_Lsn
--------------------------+------------------+------------
 000000010000000000000010 |          7142672 | 0/106CFD10
(1 row)
```
