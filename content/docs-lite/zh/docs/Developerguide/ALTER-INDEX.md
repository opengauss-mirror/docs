# ALTER INDEX<a name="ZH-CN_TOPIC_0289900645"></a>

## 功能描述<a name="zh-cn_topic_0283137124_zh-cn_topic_0237122063_zh-cn_topic_0059778960_sfe4d0517393c4151ab84ea0450924b7c"></a>

ALTER INDEX用于修改现有索引的定义。

它有几种子形式：

-   IF EXISTS

    如果指定的索引不存在，则发出一个notice而不是error。

-   RENAME TO

    只改变索引的名称。对存储的数据没有影响。

-   SET TABLESPACE

    这个选项会改变索引的表空间为指定表空间，并且把索引相关的数据文件移动到新的表空间里。

-   SET \(  \{ STORAGE\_PARAMETER = value  \}  \[, ...\] \)

    改变索引的一个或多个索引方法特定的存储参数。  需要注意的是索引内容不会被这个命令立即修改，根据参数的不同，可能需要使用REINDEX重建索引来获得期望的效果。

-   RESET \(  \{ storage\_parameter  \}  \[, ...\] \)

    重置索引的一个或多个索引方法特定的存储参数为缺省值。与SET一样，可能需要使用REINDEX来完全更新索引。

-   \[ MODIFY PARTITION index\_partition\_name  \] UNUSABLE

    用于设置表或者索引分区上的索引不可用。

-   REBUILD \[ PARTITION index\_partition\_name \]

    用于重建表或者索引分区上的索引。

-   RENAME PARTITION

    用于重命名索引分区。

-   MOVE PARTITION

    用于修改索引分区的所属表空间。


## 注意事项<a name="zh-cn_topic_0283137124_zh-cn_topic_0237122063_zh-cn_topic_0059778960_s503281b2c63545749248dae8614077e7"></a>

只有索引的所有者或者拥有索引所在表的INDEX权限的用户有权限执行此命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137124_zh-cn_topic_0237122063_zh-cn_topic_0059778960_sf28f1b42c78e4ae79c9097da9057c429"></a>

-   重命名表索引的名称。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        RENAME TO new_name;
    ```


-   修改表索引的所属空间。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        SET TABLESPACE tablespace_name;
    ```


-   修改表索引的存储参数。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        SET ( {storage_parameter = value} [, ... ] );
    ```


-   重置表索引的存储参数。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        RESET ( storage_parameter [, ... ] ) ;
    ```


-   设置表索引或索引分区不可用。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        [ MODIFY PARTITION index_partition_name ] UNUSABLE;
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >列存表不支持该语法。


-   重建表索引或索引分区。

    ```
    ALTER INDEX index_name 
        REBUILD [ PARTITION index_partition_name ];
    ```


-   重命名索引分区。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        RENAME PARTITION index_partition_name TO new_index_partition_name;
    ```


-   修改索引分区的所属表空间。

    ```
    ALTER INDEX [ IF EXISTS ] index_name 
        MOVE PARTITION index_partition_name TABLESPACE new_tablespace;
    ```


## 参数说明<a name="zh-cn_topic_0283137124_zh-cn_topic_0237122063_zh-cn_topic_0059778960_sbb551b3820484c06ac91aa80e311e48e"></a>

-   **index\_name**

    要修改的索引名。

-   **new\_name**

    新的索引名。

    取值范围：字符串，且符合标识符命名规范。

-   **tablespace\_name**

    表空间的名称。

    取值范围：已存在的表空间。

-   **storage\_parameter**

    索引方法特定的参数名。

-   **value**

    索引方法特定的存储参数的新值。根据参数的不同，这可能是一个数字或单词。

-   **new\_index\_partition\_name**

    新索引分区名。

-   **index\_partition\_name**

    索引分区名。

-   **new\_tablespace**

    新表空间。


## 示例<a name="zh-cn_topic_0283137124_zh-cn_topic_0237122063_zh-cn_topic_0059778960_sc18e85a8e57649469b874f56ded3847b"></a>

请参见CREATE INDEX的[示例](CREATE-INDEX.md#zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s985289833081489e9d77c485755bd362)。

## 相关链接<a name="zh-cn_topic_0283137124_zh-cn_topic_0237122063_zh-cn_topic_0059778960_sc49c6608f7ca4dd6bfacdb1da044d816"></a>

[CREATE INDEX](CREATE-INDEX.md)，[DROP INDEX](DROP-INDEX.md)，[REINDEX](REINDEX.md)

