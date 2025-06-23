# 离线页面解析工具——pagehack

## 功能介绍<a name="zh-cn_topic_0237152442_section125419154823"></a>

pagehack 是数据库中以离线的方式解析页面的工具。
>![](public_sys-resources/icon-caution.png) **注意：**<br/>
>暂不支持对段页式文件进行解码。<br/>

## 前提条件<a name="zh-cn_topic_0237152442_section14602518111"></a>

保证数据库目录存在且路径正确。

## 语法<a name="zh-cn_topic_0237152442_section554725771"></a>

```
pagehack [OPTIONS]
```

## 参数说明<a name="zh-cn_topic_0237152442_section4751333172417"></a>

**Hacking OPTIONS 解析选项说明：**

-   -f FILENAME

    需要修改的数据库目录，确保路径正确。

-   -t { heap| fsm| uheap| btree_index| ubtree_index| ubtree_pcr_index| undo| pca| filenode_map| pg_internal_init| twophase| cu| slot| pg_control| clog| csnlog| gaussdb_state| double_write| dw_single_flush_file| undo_zone| undo_space| undo_slot_space| undo_slot| undo_record| undo_fix| segment| lsn_info_meta| block_info_meta }

    要解析的数据库文件。

-   -r { pg_class| pg_index| pg_partition| pg_cudesc_xx| ts_cudesc_xx| pg_database| pg_tablespace| pg_attribute| pg_am| pg_statistic| pg_toast }

    解析时擦用的类型，默认为 heap 。

-   -i { toast_index }

    当解析类型为 heap 时，要解析的 relation 名。

-   -v

    当解析类型为 index 或者 heap 时，显示可见性映射信息。

-   -b

    当解析类型为 index 或者 heap 时，显示 BCM 映射信息。

-   -u

    解析双写文件。

-   -s

    解析文件类型为 heap、indx 或 undo 时，显示解析的起始点。

-   -n

    设置要解析的 block 号。

-   -o

    设置 cudesc 中的 CU pointer。

-   -I

    设置一个页面中需要修改的 item slot 的起始位置。

-   -N

    设置一个页面中需要修改的 item slot 的数量。

-   -w

    使用该选项时会将修改写入到文件。

-   -d

    该选项仅用于测试，用于对半页置脏。

-   -z

    仅可用于解析 undo space/group meta 页面，后接指定的 zoneId 。

-   -S

    选择要解析的一个堆表文件的段号。

**Dss OPTIONS 资源池化选项说明：**
-   -D

    开启资源池化模式。

-   -c

    dss 实例进程使用的 socket 文件路径。

**Common OPTIONS 通用选项说明：**
-   --help, -h

    显示帮助信息。

-   --version, -V

    显示版本信息。

## 使用举例<a name="zh-cn_topic_0237152442_section554725871"></a>

+ 解析 uheap page 页面。
```
pagehack -f [filename] -t uheap
```

+ 解析 btree index 页面。
```
pagehack -f [filename] -t btree_index
```

+ 解析 ubtree index 页面。
```
pagehack -f [filename] -t ubtree_index
```

+ 解析 ubtree pcr index 页面。
```
pagehack -f [filename] -t ubtree_pcr_index
```

+ 解析 undo 文件的头。
```
pagehack -f [filename] -t undo -s [start number] -n [block number]
```