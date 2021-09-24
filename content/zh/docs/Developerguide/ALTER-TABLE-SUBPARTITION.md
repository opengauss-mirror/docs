# ALTER TABLE SUBPARTITION<a name="ZH-CN_TOPIC_0000001152048640"></a>

## 功能描述<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

修改二级分区表分区，包括清空分区、切割分区等。

## 注意事项<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   目前二级分区表只支持清空分区、切割分区。
-   切割分区只能对二级分区（叶子节点）进行切割，被切割分区只能是Range，List分区策略，List分区策略只能是default分区才能被切割。
-   只有分区表的所有者或者被授予了分区表ALTER权限的用户有权限执行ALTER TABLE PARTITION命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

-   修改表分区主语法。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
        action [, ... ];
    ```

    其中action统指如下分区维护子语法。

    ```
        split_clause  |
        truncate_clause
    ```

-   split\_clause子语法用于把一个分区切割成多个分区。

    ```
    SPLIT SUBPARTITION { subpartition_name} { split_point_clause  } [ UPDATE GLOBAL INDEX ]
    ```

    指定切割点split\_point\_clause的语法为：

    ```
    AT ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
    ```

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >-   切割点的大小要位于正在被切割的分区的分区键范围内。
    
    >-   只能把一个分区切割成两个新分区。

-   truncate\_clause子语法用于清空分区表中的指定分区。

    ```
    TRUNCATE SUBPARTITION  { subpartition_name } [ UPDATE GLOBAL INDEX ]
    ```


## 参数说明<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_sff7a5cc103ab41709c6f7249e8d47808"></a>

-   **table\_name**

    分区表名。

    取值范围：已存在的分区表名。

-   **subpartition\_name**

    二级分区名。

    取值范围：已存在的二级分区名。

-   **tablespacename**

    指定分区要移动到哪个表空间。

    取值范围：已存在的表空间名。


## 示例<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s50d0d11ee3074db6911f91d1d9e31fbd"></a>

请参考CREATE TABLE SUBPARTITION的示例。

