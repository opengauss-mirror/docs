# HTAP行列融合系统函数

-   query\_imcstore\_views\(\)

    描述：查看HTAP行列融合表转换信息。

    返回值类型：

    <a name="table1560518521210"></a>
    <table><tbody><tr id="row563319147433"><td class="cellrowborder" valign="top" width="37.16%"><p id="p7633414204310"><a name="p7633414204310"></a><a name="p7633414204310"></a>名称</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p263351419436"><a name="p263351419436"></a><a name="p263351419436"></a>描述</p>
    </td>
    </tr><tr id="row563319147433"><td class="cellrowborder" valign="top" width="37.16%"><p id="p7633414204310"><a name="p7633414204310"></a><a name="p7633414204310"></a>reloid</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p263351419436"><a name="p263351419436"></a><a name="p263351419436"></a>表id。</p>
    </td>
    </tr>
    <tr id="row116503511211"><td class="cellrowborder" valign="top" width="37.16%"><p id="p2650115181210"><a name="p2650115181210"></a><a name="p2650115181210"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p56501756125"><a name="p56501756125"></a><a name="p56501756125"></a>表名。</p>
    </td>
    </tr>
    <tr id="row1965005111214"><td class="cellrowborder" valign="top" width="37.16%"><p id="p16501254121"><a name="p16501254121"></a><a name="p16501254121"></a>imcs_attrs</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p136508591218"><a name="p136508591218"></a><a name="p136508591218"></a>转换列对应行存的下标。</p>
    </td>
    </tr>
    <tr id="row26501531210"><td class="cellrowborder" valign="top" width="37.16%"><p id="p2650155131213"><a name="p2650155131213"></a><a name="p2650155131213"></a>imcs_nattrs</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p56505531212"><a name="p56505531212"></a><a name="p56505531212"></a>转换列数。</p>
    </td>
    </tr>
    <tr id="row1065195161218"><td class="cellrowborder" valign="top" width="37.16%"><p id="p17651057127"><a name="p17651057127"></a><a name="p17651057127"></a>imcs_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p106513513124"><a name="p106513513124"></a><a name="p106513513124"></a>转换状态。<ul id="ul9347195835815"><li>INITIAL：初始化。</li><li>COMPLETE：完成行列转换。</li><li>ERROR：行列转换失败。</li><li>ONSTANDBY：主备场景下主节点显示转换在备节点执行。</li></ul></p>
    </td>
    </tr>
    <tr id="row9651753126"><td class="cellrowborder" valign="top" width="37.16%"><p id="p165120518123"><a name="p165120518123"></a><a name="p165120518123"></a>is_partition</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p11651757129"><a name="p11651757129"></a><a name="p11651757129"></a>是否是分区。</p>
    </td>
    </tr>
    <tr id="row206513510123"><td class="cellrowborder" valign="top" width="37.16%"><p id="p146513581218"><a name="p146513581218"></a><a name="p146513581218"></a>parent_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p106511658128"><a name="p106511658128"></a><a name="p106511658128"></a>父表id。</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_size_in_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>内存中存储的cu大小。</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_num_in_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>内存中存储的cu个数。</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_size_in_disk</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>临时文件中存储的cu大小。</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_num_in_disk</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>临时文件中存储的cu个数。</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>delta_in_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>内存中存储delta page的大小</p>
    </td>
    </tr>
    </tbody>
    </table>

    注：

    由于列存数据无法直接更新（列存数据作为整块内存，即时更新会造成大面积的内存拷贝和性能下降，同时HTAP功能需要针对列存rowid和行存ctid映射，即时更新会破坏映射关系），数据修改无法直接应用至列存缓存。所以修改操作会优先存储在增量表中，等到满足条件后重新构建列存缓存。
    针对数据修改，具体实现逻辑为：
    1. 修改操作会记录至delta增量表，具体记录数据为行存的行id和修改时的事务id。此处由于记录的是操作记录，所以增删改操作都会增加内存使用。
    2. 满足条件后触发vacuum，后台vacuum会根据frozenxid重新构建CU，并且删除增量表中小于frozenxid的记录。

    表现为数据更新/插入/删除时delta占用内存增加，vacuum后delta内存占用减少并且CU更新。
    此处由于vacuum是基于Frozenxid的重新构建，只会将小于frozenxid的操作更新，该操作存在一定延迟，且延迟不可控。延迟由frozenxid的推进时间为准。

    例如：

    ```
    select * from query_imcstore_views();
    reloid | relname | imcs_attrs | imcs_nattrs | imcs_status | is_partition | parent_oid | cu_size_in_mem | cu_num_in_mem | cu_size_in_disk | cu_num_in_disk | delta_in_mem
    --------+---------+------------+-------------+-------------+--------------+------------+----------------+---------------+-----------------+----------------+-------------
    16384 | test    | 1 2 3      |           3 | COMPLETE    | f            |          0 |              0 |             0 |               0 |              0 |            0
    (1 row)
    ```




