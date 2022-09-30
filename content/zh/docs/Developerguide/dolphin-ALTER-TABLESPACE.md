# ALTER TABLESPACE<a name="ZH-CN_TOPIC_0289899866"></a>

## 功能描述<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_s15c266ccb0b240ddaab9e5fadcfb4313"></a>

修改表空间的属性。

## 注意事项<a name="zh-cn_topic_0283137126_zh-cn_topic_0237122076_zh-cn_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

相比于原始的openGauss，dolphin对于```ALTER TABLESPACE```语法的修改主要为：

1. 新增```WAIT```可选项，无实际意义，仅作语法兼容。
2. 新增```ENGINE [=] engine_name```可选项，无实际意义，仅作语法兼容。

## 语法格式<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_s918cfbbb9e5d4554a22b92cdbaa77d86"></a>

-   重命名表空间的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        RENAME TO new_tablespace_name [ alter_option_list  [ ... ] ];
    ```

-   设置表空间所有者的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        OWNER TO new_owner [ alter_option_list  [ ... ] ];
    ```

-   设置表空间属性的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        SET ( {tablespace_option = value} [, ... ] )
         [ alter_option_list  [ ... ] ];
    ```

-   重置表空间属性的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        RESET ( { tablespace_option } [, ...] )
         [ alter_option_list  [ ... ] ];
    ```

-   设置表空间限额的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        RESIZE MAXSIZE { UNLIMITED | 'space_size'}
         [ alter_option_list  [ ... ] ];
    ```

        其中 alter_option_list 为：
        WAIT 
        | ENGINE [=] engine_name

## 参数说明<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_s089537de861942ffac3f726a79d2a900"></a>

-   **tablespace\_name**

    要修改的表空间。

    取值范围：已存在的表空间名。

-   **new\_tablespace\_name**

    表空间的新名称。

    新名称不能以“PG\_”开头。

    取值范围：字符串，符合标识符命名规范。

-   **new\_owner**

    表空间的新所有者。

    取值范围：已存在的用户名。

-   **tablespace\_option**

    设置或者重置表空间的参数。

    取值范围：

    -   seq\_page\_cost：设置优化器计算一次顺序获取磁盘页面的开销。缺省为1.0。
    -   random\_page\_cost：设置优化器计算一次非顺序获取磁盘页面的开销。缺省为4.0。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   random\_page\_cost是相对于seq\_page\_cost的取值，等于或者小于seq\_page\_cost时毫无意义。

        >-   默认值为4.0的前提条件是，优化器采用索引来扫描表数据，并且表数据在cache中命中率可以90%左右。

        >-   如果表数据空间要比物理内存小，那么减小该值到一个适当水平；相反地，如果表数据在cache中命中率要低于90%，那么适当增大该值。

        >-   如果采用了类似于SSD的随机访问代价较小的存储器，可以适当减小该值，以反映真正的随机扫描代价。


    value的取值范围：正的浮点类型。

-   **RESIZE MAXSIZE**

    重新设置表空间限额的数值。

    取值范围：

    -   UNLIMITED，该表空间不设置限额。
    -   由space\_size来确定，其格式参考[CREATE TABLESPACE](CREATE-TABLESPACE.md)。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   若调整后的限额值比当前表空间实际使用的值要小，调整操作可以执行成功，后续用户需要将该表空间的使用值降低到新限额值之下，才能继续往该表空间中写入数据。
        
        >-   修改参数MAXSIZE时也可使用：
        >```
        >ALTER TABLESPACE tablespace_name RESIZE MAXSIZE
        > { 'UNLIMITED' | 'space_size'};
        >```

-   **engine\_name**

    无实际意义。

    取值范围：任意字符串。

## 示例<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_sf0e218df4bb44fd0afce8f50d6654d19"></a>

```
--创建表空间。
openGauss=# CREATE TABLESPACE ds_location1 RELATIVE LOCATION 'tablespace/tablespace_1';

--创建用户joe。
openGauss=# CREATE ROLE joe IDENTIFIED BY 'xxxxxxxxx';

--创建用户jay。
openGauss=# CREATE ROLE jay IDENTIFIED BY 'xxxxxxxxx';

--创建表空间，且所有者指定为用户joe。
openGauss=# CREATE TABLESPACE ds_location2 OWNER joe RELATIVE LOCATION 'tablespace/tablespace_1';

--把表空间ds_location1重命名为ds_location3，指定option WAIT，不影响实际功能。
openGauss=# ALTER TABLESPACE ds_location1 RENAME TO ds_location3 WAIT;

--改变表空间ds_location2的所有者，指定option ENGINE，不影响实际功能。
openGauss=# ALTER TABLESPACE ds_location2 OWNER TO jay ENGINE = 'test';

--改变表空间ds_location2的限额，同时指定option ENGINE和WAIT，不影响实际功能。
openGauss=# ALTER TABLESPACE ds_location2 RESIZE MAXSIZE UNLIMITED ENGINE = 'test' WAIT;

--删除表空间。
openGauss=# DROP TABLESPACE ds_location2 ENGINE = 'test2';
openGauss=# DROP TABLESPACE ds_location3;

--删除用户。
openGauss=# DROP ROLE joe;
openGauss=# DROP ROLE jay;
```

## 相关链接<a name="section156744489391"></a>

[CREATE TABLESPACE](dolphin-CREATE-TABLESPACE.md)，[DROP TABLESPACE](dolphin-DROP-TABLESPACE.md)
