# ALTER TABLE SUBPARTITION<a name="ZH-CN_TOPIC_0000001152048640"></a>

## 功能描述<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

修改二级分区表分区，包括增删分区、清空分区、切割分区、移动分区表空间、交换分区、重命名分区，以及修改分区属性等。

## 注意事项<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   添加分区的表空间不能是PG\_GLOBAL。
-   添加分区的名称不能与该分区表已有一级分区和二级分区的名称相同。
-   添加分区的分区键值要和分区表的分区键的类型一致。
-   若添加RANGE分区，添加分区键值要大于分区表中最后一个范围分区的上边界。若需要在有MAXVALUE分区的表上新增分区，建议使用SPLIT语法。
-   若添加LIST分区，添加分区键值不能与现有分区键值重复。若需要在有DEFAULT分区的表上新增分区，建议使用SPLIT语法。
-   不支持添加HASH分区。只有一种情况例外，二级分区表的二级分区方式为HASH且一级分区方式不是HASH，此时支持新增一级分区并创建对应的二级分区。
-   如果目标分区表中已有分区数达到了最大值1048575，则不能继续添加分区。
-   当分区表只有一个一级分区或二级分区时，不能删除该分区。
-   不支持删除HASH分区。
-   选择分区使用PARTITION FOR\(\)或SUBPARTITION FOR\(\)，括号里指定值个数应该与定义分区时使用的列个数相同，并且一一对应。
-   切割分区只能对二级分区（叶子节点）进行切割，被切割分区只能是Range、List分区策略，不支持切割hash分区策略。List分区策略只能是default分区才能被切割。
-   只有分区表的所有者或者被授予了分区表ALTER权限的用户有权限执行ALTER TABLE PARTITION命令，系统管理员默认拥有此权限。
-   删除、切割、清空、交换分区的操作会使Global索引失效，可以申明UPDATE GLOBAL INDEX子句同步更新索引。
-   如果删除、切割、清空、交换分区操作不申明UPDATE GLOBAL INDEX子句，并发的DML业务有可能因为索引不可用而报错。

## 语法格式<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

修改二级分区表分区包括修改表分区主语法、修改表分区名称的语法和重置分区ID的语法。

-   修改表分区主语法。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
        action [, ... ];
    ```

    其中action统指如下分区维护子语法。当存在多个分区维护子句时，保证了分区的连续性，无论这些子句的排序如何，openGauss总会先执行DROP PARTITION再执行ADD PARTITION操作，最后顺序执行其它分区维护操作。

    ```
        move_clause  |
        exchange_clause  |
        row_clause  |
        add_clause    |
        drop_clause   |    
        split_clause  |
        truncate_clause
    ```

    -   move\_clause子语法用于移动分区到新的表空间。

        ```
        MOVE SUBPARTITION { subpartion_name | FOR ( subpartition_value [, ...] ) } TABLESPACE tablespacename
        ```

    -   exchange\_clause子语法用于把普通表的数据迁移到指定的分区。

        ```
        EXCHANGE SUBPARTITION { ( subpartition_name ) | FOR ( subpartition_value [, ...] ) } 
            WITH TABLE {[ ONLY ] ordinary_table_name | ordinary_table_name * | ONLY ( ordinary_table_name )} 
            [ { WITH | WITHOUT } VALIDATION ] [ VERBOSE ] [ UPDATE GLOBAL INDEX ]
        ```

        进行交换的普通表和分区必须满足如下条件：

        -   普通表和分区的列数目相同，对应列的信息严格一致，包括：列名、列的数据类型、列约束、列的Collation信息、列的存储参数、列的压缩信息等。
        -   普通表和分区的表压缩信息严格一致。
        -   普通表和分区的索引个数相同，且对应索引的信息严格一致。
        -   普通表和分区的表约束个数相同，且对应表约束的信息严格一致。
        -   普通表不可以是临时表，分区表只能是二级分区表。
        -   普通表和分区表上不可以有动态数据脱敏，行访问控制约束。

        >![](public_sys-resources/icon-notice.gif) **须知：** 
        >-   完成交换后，普通表和分区的数据被置换，同时普通表和分区的表空间信息被置换。此时，普通表和分区的统计信息变得不可靠，需要对普通表和分区重新执行analyze。
        >-   由于非分区键不能建立本地唯一索引，只能建立全局唯一索引，所以如果普通表含有唯一索引时，可能会导致不能交换数据。
        >-   如果在普通表/分区表上进行了drop column操作，被删除的列依然物理存在，所以需要保证普通表和分区的被删除列也严格对齐才能交换成功。

    -   row\_clause子语法用于设置分区表的行迁移开关。

        ```
        { ENABLE | DISABLE } ROW MOVEMENT
        ```

    -   add\_clause子语法用于为指定的分区表添加一个或多个分区。语法可以作用在一级分区上。

        ```
        ADD {partition_less_than_item | partition_list_item } [ ( subpartition_definition_list ) ]
        ```

        也可以作用在二级分区上。

        ```
        MODIFY PARTITION partition_name ADD subpartition_definition
        ```

        其中，分区项partition\_less\_than\_item为RANGE分区定义语法，具体语法如下。

        ```
        PARTITION partition_name VALUES LESS THAN ( partition_value | MAXVALUE ) [ TABLESPACE tablespacename ]
        ```

        分区项partition\_list\_item为LIST分区定义语法，具体语法如下。

        ```
        PARTITION partition_name VALUES ( partition_value [, ...] | DEFAULT ) [ TABLESPACE tablespacename ]
        ```

        subpartition\_definition\_list为1到多个二级分区subpartition\_definition对象，subpartition\_definition具体语法如下。

        ```
        SUBPARTITION subpartition_name [ VALUES LESS THAN ( partition_value | MAXVALUE ) | VALUES ( partition_value [, ...] | DEFAULT )]  [ TABLESPACE tablespace ]
        ```

        >![](public_sys-resources/icon-notice.gif) **须知：** 
        >若一级分区为HASH分区，不支持以ADD形式新增一级分区；若二级分区为HASH分区，不支持以MODIFY形式新增二级分区。

    -   drop\_clause子语法用于删除分区表中的指定分区。语法可以作用在一级分区上。

        ```
        DROP PARTITION  { partition_name | FOR (  partition_value )  } [ UPDATE GLOBAL INDEX ]
        ```

        也可以作用在二级分区上。

        ```
        DROP SUBPARTITION  { subpartition_name | FOR (  partition_value, subpartition_value )  } [ UPDATE GLOBAL INDEX ]
        ```

        >![](public_sys-resources/icon-notice.gif) **须知：** 
        >-   若一级分区为HASH分区，不支持删除一级分区；若二级分区为HASH分区，不支持删除二级分区。
        >-   不支持删除唯一子分区。

    -   split\_clause子语法用于把一个分区切割成多个分区。

        ```
        SPLIT SUBPARTITION { subpartition_name} { split_point_clause  } [ UPDATE GLOBAL INDEX ]
        ```

        指定Range分区策略切割点split\_point\_clause的语法为：

        ```
        AT ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
        ```

        指定List分区策略切割点split\_point\_clause的语法为：

        ```
        VALUES ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
        ```

        >![](public_sys-resources/icon-notice.gif) **须知：** 
        >-   切割点的大小要位于正在被切割的分区的分区键范围内。
        >-   只能把一个分区切割成两个新分区。
        >-   Range分区策略切割点是把当前分区以此切割点分割为两个分区（小于此分割点为一个分区，大于此分割点为另一个分区），所以Range分区策略切割点只能为一个。List分区策略切割点可以为多个，但不超过64个，即把这些切割点从当前分区的边界值提取出来作为一个新分区，当前分区剩余边界值作为另一个新分区。
        >-   List分区只支持切割Default分区。

    -   truncate\_clause子语法用于清空分区表中的指定分区。语法可以作用在一级分区上。

        ```
        TRUNCATE PARTITION  { partition_name | FOR (  partition_value [, ...] )  } [ UPDATE GLOBAL INDEX ]
        ```

        也可以作用在二级分区上。

        ```
        TRUNCATE SUBPARTITION  { subpartition_name | FOR (  subpartition_value [, ...] )  } [ UPDATE GLOBAL INDEX ]
        ```



-   修改表分区名称的语法。可以修改分区表的一级分区。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name  )}
        RENAME PARTITION { partion_name | FOR ( partition_value [, ...] ) } TO partition_new_name;
    ```

    也可以修改分区表的二级分区。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name  )}
        RENAME SUBPARTITION { subpartion_name | FOR ( subpartition_value [, ...] ) } TO subpartition_new_name;
    ```

-   重置分区ID的语法。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name  )} RESET PARTITION;
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

