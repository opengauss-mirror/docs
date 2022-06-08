# ALTER TABLE SUBPARTITION<a name="ZH-CN_TOPIC_0000001152048640"></a>

## 功能描述<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

修改二级分区表分区，包括增删分区、清空分区、切割分区等。

## 注意事项<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   目前二级分区表只支持增删分区、清空分区、切割分区。
-   添加分区的表空间不能是PG\_GLOBAL。
-   添加分区的名称不能与该分区表已有一级分区和二级分区的名称相同。
-   添加分区的分区键值要和分区表的分区键的类型一致。
-   若添加RANGE分区，添加分区键值要大于分区表中最后一个范围分区的上边界。若需要在有MAXVALUE分区的表上新增分区，建议使用SPLIT语法。
-   若添加LIST分区，添加分区键值不能与现有分区键值重复。若需要在有DEFAULT分区的表上新增分区，建议使用SPLIT语法。
-   不支持添加HASH分区。只有一种情况例外，二级分区表的二级分区方式为HASH且一级分区方式不是HASH，此时支持新增一级分区并创建对应的二级分区。
-   如果目标分区表中已有分区数达到了最大值1048575，则不能继续添加分区。
-   当分区表只有一个一级分区或二级分区时，不能删除该分区。
-   不支持删除HASH分区。
-   选择分区使用PARTITION FOR\(\)，括号里指定值个数应该与定义分区时使用的列个数相同，并且一一对应。
-   切割分区只能对二级分区（叶子节点）进行切割，被切割分区只能是Range、List分区策略，不支持切割hash分区策略。List分区策略只能是default分区才能被切割。
-   只有分区表的所有者或者被授予了分区表ALTER权限的用户有权限执行ALTER TABLE PARTITION命令，系统管理员默认拥有此权限。
-   如果alter语句不带有UPDATE GLOBAL INDEX，那么原有的GLOBAL索引将失效，查询时将使用其他索引进行查询；如果alter语句带有UPDATEGLOBAL INDEX，原有的GLOBAL索引仍然有效，并且索引功能正确。

## 语法格式<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

- 修改表分区主语法。

  ```
  ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
      action [, ... ];
  ```

  其中action统指如下分区维护子语法。

  ```
     add_clause    |
     drop_clause   | 
     split_clause  |
     truncate_clause
  ```

- add\_clause子语法用于为指定的分区表添加一个或多个分区。语法可以作用在一级分区上。

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

  >![](C:/Users/lijun/Downloads/309资料发布/07 开发者指南/public_sys-resources/icon-notice.gif) **须知：** 
  >若一级分区为HASH分区，不支持以ADD形式新增一级分区；若二级分区为HASH分区，不支持以MODIFY形式新增二级分区。

- drop\_clause子语法用于删除分区表中的指定分区。语法可以作用在一级分区上。

  ```
  DROP PARTITION  { partition_name | FOR (  partition_value )  } [ UPDATE GLOBAL INDEX ]
  ```

  也可以作用在二级分区上。

  ```
  DROP SUBPARTITION  { subpartition_name | FOR (  partition_value, subpartition_value )  } [ UPDATE GLOBAL INDEX ]
  ```

  >![](C:/Users/lijun/Downloads/309资料发布/07 开发者指南/public_sys-resources/icon-notice.gif) **须知：** 
  >
  >-   若一级分区为HASH分区，不支持删除一级分区；若二级分区为HASH分区，不支持删除二级分区。
  >-   不支持删除唯一子分区。

- split\_clause子语法用于把一个分区切割成多个分区。

  ```
  SPLIT SUBPARTITION { subpartition_name} { split_point_clause  } [ UPDATE GLOBAL INDEX ]
  ```

  指定切割点split\_point\_clause的语法为：

  ```
  AT ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
  ```

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >-   切割点的大小要位于正在被切割的分区的分区键范围内。

  >-   只能把一个分区切割成两个新分区。

-   指定Range分区策略切割点split\_point\_clause的语法为：

    ```
    AT ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
    ```
    
    指定List分区策略切割点split\_point\_clause的语法为：
    
    ```
    VALUES ( subpartition_value ) INTO ( SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] , SUBPARTITION subpartition_name [ TABLESPACE tablespacename ] )
    ```
    
    >![](C:/Users/lijun/Downloads/309资料发布/07 开发者指南/public_sys-resources/icon-notice.gif) **须知：** 
    >
    >-   切割点的大小要位于正在被切割的分区的分区键范围内。
    >-   只能把一个分区切割成两个新分区。
    >-   Range分区策略切割点是把当前分区以此切割点分割为两个分区（小于此分割点为一个分区，大于此分割点为另一个分区），所以Range分区策略切割点只能为一个。List分区策略切割点可以为多个，但不超过64个，即把这些切割点从当前分区的边界值提取出来作为一个新分区，当前分区剩余边界值作为另一个新分区。
    
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

