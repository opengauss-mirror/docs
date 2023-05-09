# ALTER TABLESPACE<a name="ZH-CN_TOPIC_0289899866"></a>

## 功能描述<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_s15c266ccb0b240ddaab9e5fadcfb4313"></a>

修改表空间的属性。

## 注意事项<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_s4d48c658c0a1491ea2c6727959928558"></a>

-   只有表空间的所有者或者被授予了表空间ALTER权限的用户有权限执行ALTER TABLESPACE命令，系统管理员默认拥有此权限。但要修改表空间的所有者，当前用户必须是该表空间的所有者或系统管理员，且该用户是新所有者角色的成员。
-   要修改表空间的所有者A为B，则A必须是B的直接或者间接成员。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >如果new\_owner与old\_owner一致，此处不再校验当前执行操作的用户是否具有修改权限，而直接显示ALTER成功。


## 语法格式<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_s918cfbbb9e5d4554a22b92cdbaa77d86"></a>

-   重命名表空间的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        RENAME TO new_tablespace_name;
    ```

-   设置表空间所有者的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        OWNER TO new_owner;
    ```

-   设置表空间属性的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        SET ( {tablespace_option = value} [, ... ] );
    ```

-   重置表空间属性的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        RESET ( { tablespace_option } [, ...] );
    ```

-   设置表空间限额的语法。

    ```
    ALTER TABLESPACE tablespace_name 
        RESIZE MAXSIZE { UNLIMITED | 'space_size'};
    ```


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

        >![](public_sys-resources/icon-note.png) **说明：** 
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

        >![](public_sys-resources/icon-note.png) **说明：** 
        >-   若调整后的限额值比当前表空间实际使用的值要小，调整操作可以执行成功，后续用户需要将该表空间的使用值降低到新限额值之下，才能继续往该表空间中写入数据。
        >-   修改参数MAXSIZE时也可使用：
        >```
        >ALTER TABLESPACE tablespace_name RESIZE MAXSIZE
        > { 'UNLIMITED' | 'space_size'};
        >```



## 示例<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_sf0e218df4bb44fd0afce8f50d6654d19"></a>

请参考CREATE TABLESPACE的[示例](CREATE-TABLESPACE.md#zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e)。

## 相关链接<a name="zh-cn_topic_0283137270_zh-cn_topic_0237122078_zh-cn_topic_0059777507_sac21888107614d73bf2f04cd684aed03"></a>

[CREATE TABLESPACE](CREATE-TABLESPACE.md)，[DROP TABLESPACE](DROP-TABLESPACE.md)

