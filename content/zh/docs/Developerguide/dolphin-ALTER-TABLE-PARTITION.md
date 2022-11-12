# ALTER TABLE PARTITION<a name="ZH-CN_TOPIC_0289900688"></a>

## 功能描述<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s4954d450a2e8434aa3abac355bac38e6"></a>

修改表分区，包括增删分区、切割分区、合成分区以及修改分区属性等。

相比于内核语法，dolphin的rebuild,remove,check,repair,optimize,truncate,analyze,exchange都做了B兼容模式下的特色修改。

## 注意事项<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s5b88399280d4435fbb63e27378589a97"></a>

-   添加分区的表空间不能是PG\_GLOBAL。
-   添加分区的名称不能与该分区表已有分区的名称相同。
-   添加分区的分区键值要和分区表的分区键的类型一致。
-   若添加RANGE分区，添加分区键值要大于分区表中最后一个范围分区的上边界。
-   若添加LIST分区，添加分区键值不能与现有分区键值重复。
-   不支持添加HASH分区。
-   如果目标分区表中已有分区数达到了最大值1048575，则不能继续添加分区。
-   当分区表只有一个分区时，不能删除该分区。
-   选择分区使用PARTITION FOR\(\)，括号里指定值个数应该与定义分区时使用的列个数相同，并且一一对应。
-   Value分区表不支持相应的Alter Partition操作。
-   列存分区表不支持切割分区。
-   间隔分区表不支持添加分区。
-   哈希分区表不支持切割分区，不支持合成分区，不支持添加和删除分区。
-   列表分区表不支持切割分区，不支持合成分区。
-   只有分区表的所有者或者被授予了分区表ALTER权限的用户有权限执行ALTER TABLE PARTITION命令，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s77ad09af007d4883a3bc70cc8a945481"></a>

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
        merge_clause  |
        modify_clause  |
        split_clause  |
        add_clause  |
        drop_clause  |
        truncate_clause |
        rebuild_clause |
        remove_clause |
        repair_clause |
        check_clause |
        optimize_clause
    ```

    -   move\_clause子语法用于移动分区到新的表空间。

        ```
        MOVE PARTITION { partion_name | FOR ( partition_value [, ...] ) } TABLESPACE tablespacename
        ```

    - exchange\_clause子语法用于把普通表的数据迁移到指定的分区。

      ```
      EXCHANGE PARTITION { ( partition_name ) | FOR ( partition_value [, ...] ) } 
          WITH TABLE {[ ONLY ] ordinary_table_name | ordinary_table_name * | ONLY ( ordinary_table_name )} 
          [ { WITH | WITHOUT } VALIDATION ] [ VERBOSE ] [ UPDATE GLOBAL INDEX ]
      ```

      进行交换的普通表和分区必须满足如下条件：

      -   普通表和分区的列数目相同，对应列的信息严格一致，包括：列名、列的数据类型、列约束、列的Collation信息、列的存储参数、列的压缩信息等。
      -   普通表和分区的表压缩信息严格一致。
      -   普通表和分区的索引个数相同，且对应索引的信息严格一致。
      -   普通表和分区的表约束个数相同，且对应表约束的信息严格一致。
      -   普通表不可以是临时表，分区表只能是范围分区表，列表分区表，哈希分区表。
      -   普通表和分区表上不可以有动态数据脱敏，行访问控制约束。
      -   列表分区表，哈希分区表不能是列存储。
      -   List/Hash/Range类型分区表支持exchange\_clause。

      >![](public_sys-resources/icon-notice.png) **须知：** 
      >
      >-   完成交换后，普通表和分区的数据被置换，同时普通表和分区的表空间信息被置换。此时，普通表和分区的统计信息变得不可靠，需要对普通表和分区重新执行analyze。
      >-   由于非分区键不能建立本地唯一索引，只能建立全局唯一索引，所以如果普通表含有唯一索引时，会导致不能交换数据。
    
-   row\_clause子语法用于设置分区表的行迁移开关。
    
    ```
    { ENABLE | DISABLE } ROW MOVEMENT
    ```
    
-   merge\_clause子语法用于把多个分区合并成一个分区。
    
    ```
    MERGE PARTITIONS { partition_name } [, ...] INTO PARTITION partition_name 
    [ TABLESPACE tablespacename ] [ UPDATE GLOBAL INDEX ]
    ```
    
-   modify\_clause子语法用于设置分区索引是否可用。
    
    ```
    MODIFY PARTITION partition_name { UNUSABLE LOCAL INDEXES | REBUILD UNUSABLE LOCAL INDEXES }
    ```
    
-   split\_clause子语法用于把一个分区切割成多个分区。
    
    ```
    SPLIT PARTITION { partition_name | FOR ( partition_value [, ...] ) } { split_point_clause | no_split_point_clause } [ UPDATE GLOBAL INDEX ]
    ```
    
- 指定切割点split\_point\_clause的语法为。
    
   ```
   AT ( partition_value ) INTO ( PARTITION partition_name [ TABLESPACE tablespacename ] , PARTITION partition_name [ TABLESPACE tablespacename ] )
   ```
    
   >![](public_sys-resources/icon-notice.png) **须知：** 
   >
   >-   列存分区表不支持切割分区。
   >-   切割点的大小要位于正在被切割的分区的分区键范围内，指定切割点的方式只能把一个分区切割成两个新分区。
    
 -   不指定切割点no\_split\_point\_clause的语法为。
        
     ```
     INTO { ( partition_less_than_item [, ...] ) | ( partition_start_end_item [, ...] ) }
     ```
        
       >![](public_sys-resources/icon-notice.png) **须知：** 
       >
       >-   不指定切割点的方式，partition\_less\_than\_item指定的第一个新分区的分区键要大于正在被切割的分区的前一个分区（如果存在的话）的分区键，partition\_less\_than\_item指定的最后一个分区的分区键要等于正在被切割的分区的分区键大小。
       >-   不指定切割点的方式，partition\_start\_end\_item指定的第一个新分区的起始点（如果存在的话）必须等于正在被切割的分区的前一个分区（如果存在的话）的分区键，partition\_start\_end\_item指定的最后一个分区的终止点（如果存在的话）必须等于正在被切割的分区的分区键。
       >-   partition\_less\_than\_item支持的分区键个数最多为4，而partition\_start\_end\_item仅支持1个分区键，其支持的数据类型参见[PARTITION BY RANGE\(parti...](CREATE-TABLE-PARTITION.md#zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_l00efc30fe63048ffa2ef68c5b18bb455)。
       >-   在同一语句中partition\_less\_than\_item和partition\_start\_end\_item两者不可同时使用；不同split语句之间没有限制。

 -   分区项partition\_less\_than\_item的语法为。

        ```
        PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE }  [, ...] ) 
            [ TABLESPACE tablespacename ]
        ```

 -   分区项partition\_start\_end\_item的语法为，其约束参见[START END语法描述](CREATE-TABLE-PARTITION.md#zh-cn_topic_0283136653_zh-cn_topic_0237122119_li2094151861116)。

        ```
        PARTITION partition_name {
                {START(partition_value) END (partition_value) EVERY (interval_value)} |
                {START(partition_value) END ({partition_value | MAXVALUE})} |
                {START(partition_value)} |
                {END({partition_value | MAXVALUE})}
        } [TABLESPACE tablespace_name]
        
        ```

 -   add\_clause子语法用于为指定的分区表添加一个或多个分区。

   ```
       ADD PARTITION ( partition_col1_name = partition_col1_value [, partition_col2_name = partition_col2_value ] [, ...] )
           [ LOCATION 'location1' ]
           [ PARTITION (partition_colA_name = partition_colA_value [, partition_colB_name = partition_colB_value ] [, ...] ) ]
           [ LOCATION 'location2' ]
       ADD {partition_less_than_item | partition_start_end_item| partition_list_item }
   ```


-   分区项partition\_list\_item的语法如下。

    ```
    PARTITION partition_name VALUES (list_values_clause) 
        [ TABLESPACE tablespacename ]
    ```

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >-   partition\_list\_item仅支持的1个分区键，其支持的数据类型参见[PARTITION BY LIST\(partit...](CREATE-TABLE-PARTITION.md#li78182216171)。
    >-   间隔/哈希分区表不支持添加分区。

-   drop\_clause子语法用于删除分区表中的指定分区。

    ```
    DROP PARTITION  { partition_name | FOR (  partition_value [, ...] )  } [ UPDATE GLOBAL INDEX ]
    ```

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >哈希分区表不支持删除分区。


-   truncate\_clause子语法用于清空分区表中的指定分区。

    ```
    TRUNCATE PARTITION  { partition_name | FOR (  partition_value [, ...] )  } [ UPDATE GLOBAL INDEX ]
    ```
    
-   修改表分区名称的语法。

    ```
    ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name  )}
        RENAME PARTITION { partion_name | FOR ( partition_value [, ...] ) } TO partition_new_name;

-   重建分区语法
    一般用于回收分区使用空间，与删除存储在分区中的所有记录，然后重新插入它们的效果相同。这对于碎片整理很有用。

    不支持列存表，不支持指定二级分区表的二级分区。
    ```
    REBUILD PARTITION  { partition_name } [, ...]
    REBUILD PARTITION ALL
    ```
-   分区表remove partitioning语法
    移除表中partition，但是保留所有数据。

    不支持列存表和segment表。
    ```
    REMOVE PARTITIONING
    ```
-   分区表repair，check和optimize语法
    仅支持语法，不做实际功能支持。
    ```
    CHECK PARTITION { partition_name } [, ...]
    CHECK PARTITION ALL
    REPAIR PARTITION { partition_name } [, ...]
    REPAIR PARTITION ALL
    OPTIMIZE PARTITION { partition_name } [, ...]
    OPTIMIZE PARTITION ALL
    ```
-   兼容b database Truncate分区语法
    Truncate操作会删除当前分区对应的所有数据。
    ```
    TRUNCATE PARTITION { partition_name } [, ...]
    TRUNCATE PARTITION all
    ```
-   兼容b database exchange分区语法对齐
    可以用来交换分区表和普通表的数据，普通表和分区的数据被置换，同时普通表和分区的表空间信息被置换。此时，普通表和分区的统计信息变得不可靠，需要对普通表和分区重新执行analyze。

    不支持交换二级分区。
    ```
    exchange partition partition_name with table table_name (without/with validation);
    ```

-   兼容b database analyze分区语法对齐
    用于收集与表内容相关的统计信息。执行计划生成器会使用这些统计数据，以确定最有效的执行计划。

    不支持analyze指定二级分区。
    ```
    analyze partition { partition_name } [, ...]
    analyze partition all;
    ```

-   兼容b database add分区语法。
    ```
    ADD {partition_less_than_item | partition_start_end_item| partition_list_item } [, ...]
    ```

-   兼容b database drop分区语法。
    ```
    DROP PARTITION { { partition_name } [ UPDATE GLOBAL INDEX ] } [, ...]
    DROP SUBPARTITION { { partition_name } [ UPDATE GLOBAL INDEX ] } [, ...]
    ```

-   兼容b database reorganize分区语法。
    重新分割或融合指定分区，重新划分分区的定义。

    以下是ALTER TABLE ... REORGANIZE PARTITION用于重新分区一些关键点：
    -   PARTITION用于确定新分区方案的选项应遵循与CREATE TABLE语句所使用的规则相同的规则。
    -   新的RANGE分区方案不能有任何重叠范围。一个新的LIST分区方案不能有任何重叠的值集。
    -   partition_definitions列表中的分区组合应与清单中命名的组合分区具有相同的范围或整体值集partition_list。
    -   对于由分区的表RANGE，您只能重组相邻的分区。您不能跳过范围分区。
    -   对于LIST分区，不可以删除已有对应数据的value值定义。
    -   不能用于REORGANIZE PARTITION更改表使用的分区类型。
    -   不可丢失原有表数据。
    -   不支持interval分区，不支持value分区。
    ```
    REORGANIZE PARTITION {{ partition_name } [, ...]} INTO {partition_less_than_item | partition_list_item } [, ...]
    ```

## 参数说明<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_sff7a5cc103ab41709c6f7249e8d47808"></a>

-   **table\_name**

    分区表名。

    取值范围：已存在的分区表名。

-   **partition\_name**

    分区名。

    取值范围：已存在的分区名。

-   **tablespacename**

    指定分区要移动到哪个表空间。

    取值范围：已存在的表空间名。

-   **partition\_value**

    分区键值。

    通过PARTITION FOR \( partition\_value \[, ...\] \)子句指定的这一组值，可以唯一确定一个分区。

    取值范围：需要进行重命名的分区的分区键的取值范围。

-   **UNUSABLE LOCAL INDEXES**

    设置该分区上的所有索引不可用。

-   **REBUILD UNUSABLE LOCAL INDEXES**

    重建该分区上的所有索引。

-   **ENABLE/DISABLE ROW MOVEMET**

    行迁移开关。

    如果进行UPDATE操作时，更新了元组在分区键上的值，造成了该元组所在分区发生变化，就会根据该开关给出报错信息，或者进行元组在分区间的转移。

    取值范围：

    -   ENABLE：打开行迁移开关。
    -   DISABLE：关闭行迁移开关。

    默认是打开状态。

-   **ordinary\_table\_name**

    进行迁移的普通表的名称。

    取值范围：已存在的普通表名。

-   **\{ WITH | WITHOUT \} VALIDATION**

    在进行数据迁移时，是否检查普通表中的数据满足指定分区的分区键范围。

    取值范围：

    -   WITH：对于普通表中的数据要检查是否满足分区的分区键范围，如果有数据不满足，则报错。
    -   WITHOUT：对于普通表中的数据不检查是否满足分区的分区键范围。

    默认是WITH状态。

    由于检查比较耗时，特别是当数据量很大的情况下更甚。所以在保证当前普通表中的数据满足分区的分区键范围时，可以加上WITHOUT来指明不进行检查。

-   **VERBOSE**

    在VALIDATION是WITH状态时，如果检查出普通表有不满足要交换分区的分区键范围的数据，那么把这些数据插入到正确的分区，如果路由不到任何分区，再报错。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >只有在VALIDATION是WITH状态时，才可以指定VERBOSE。

-   **partition\_new\_name**

    分区的新名称。

    取值范围：字符串，要符合标识符的命名规范。


## 示例<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s50d0d11ee3074db6911f91d1d9e31fbd"></a>

请参考CREATE TABLE PARTITION的[示例](CREATE-TABLE-PARTITION.md#zh-cn_topic_0283136653_zh-cn_topic_0237122119_zh-cn_topic_0059777586_s43dd49de892344bf89e6f56f17404842)。

## 相关链接<a name="zh-cn_topic_0283137443_zh-cn_topic_0237122077_zh-cn_topic_0059778761_s267aeb502b5546f69f580c79c0a728df"></a>

[CREATE TABLE PARTITION](CREATE-TABLE-PARTITION.md)，[DROP TABLE](DROP-TABLE.md)

