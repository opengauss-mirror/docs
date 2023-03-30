# Segment-Page Storage Functions<a name="EN-US_TOPIC_0000001101431812"></a>

-   local\_segment\_space\_info\(tablespacename TEXT, databasename TEXT\)

    Description: Generates usage information about all extent groups in the tablespace.

    Return type:

    <a name="table1560518521210"></a>
    <table><tbody><tr id="row563319147433"><td class="cellrowborder" valign="top" width="37.16%"><p id="p7633414204310"><a name="p7633414204310"></a><a name="p7633414204310"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p263351419436"><a name="p263351419436"></a><a name="p263351419436"></a>Node name</p>
    </td>
    </tr>
    <tr id="row116503511211"><td class="cellrowborder" valign="top" width="37.16%"><p id="p2650115181210"><a name="p2650115181210"></a><a name="p2650115181210"></a>extent_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p56501756125"><a name="p56501756125"></a><a name="p56501756125"></a>Extent specifications of an extent group. The unit is the number of blocks.</p>
    </td>
    </tr>
    <tr id="row1965005111214"><td class="cellrowborder" valign="top" width="37.16%"><p id="p16501254121"><a name="p16501254121"></a><a name="p16501254121"></a>forknum</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p136508591218"><a name="p136508591218"></a><a name="p136508591218"></a>Fork number</p>
    </td>
    </tr>
    <tr id="row26501531210"><td class="cellrowborder" valign="top" width="37.16%"><p id="p2650155131213"><a name="p2650155131213"></a><a name="p2650155131213"></a>total_blocks</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p56505531212"><a name="p56505531212"></a><a name="p56505531212"></a>Total number of extents in a physical file</p>
    </td>
    </tr>
    <tr id="row1065195161218"><td class="cellrowborder" valign="top" width="37.16%"><p id="p17651057127"><a name="p17651057127"></a><a name="p17651057127"></a>meta_data_blocks</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p106513513124"><a name="p106513513124"></a><a name="p106513513124"></a>Number of blocks occupied by the metadata managed in a tablespace, including the space header and map page but excluding the segment head</p>
    </td>
    </tr>
    <tr id="row9651753126"><td class="cellrowborder" valign="top" width="37.16%"><p id="p165120518123"><a name="p165120518123"></a><a name="p165120518123"></a>used_data_blocks</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p11651757129"><a name="p11651757129"></a><a name="p11651757129"></a>Number of extents used for storing data, including the segment head</p>
    </td>
    </tr>
    <tr id="row206513510123"><td class="cellrowborder" valign="top" width="37.16%"><p id="p146513581218"><a name="p146513581218"></a><a name="p146513581218"></a>utilization</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p106511658128"><a name="p106511658128"></a><a name="p106511658128"></a>Percentage of the number of used blocks to the total number of blocks, that is, (the value of <strong id="b15732114223619"><a name="b15732114223619"></a><a name="b15732114223619"></a>used_data_blocks</strong> + the value of <strong id="b12733142173615"><a name="b12733142173615"></a><a name="b12733142173615"></a>meta_data_block</strong>)/the value of <strong id="b207347428365"><a name="b207347428365"></a><a name="b207347428365"></a>total_blocks</strong></p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>high_water_mark</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>High-water mark, indicating the number of allocated extents and maximum physical page number. Blocks that exceed the high-water mark are not used and can be directly recycled.</p>
    </td>
    </tr>
    </tbody>
    </table>

    Example:

    ```
    select * from local_segment_space_info('pg_default', 'postgres');
         node_name     | extent_size | forknum | total_blocks | meta_data_blocks | used_data_blocks | utilization | high_water_mark 
    -------------------+-------------+---------+--------------+------------------+------------------+-------------+-----------------
     dn_6001_6002_6003 |           1 |       0 |        16384 |             4157 |                1 |     .253784 |            4158
     dn_6001_6002_6003 |           8 |       0 |        16384 |             4157 |                8 |     .254211 |            4165
    (2 rows)
    ```

-   pg\_stat\_segment\_extent\_usage\(int4 tablespace oid, int4 database oid, int4 extent\_type, int4 forknum\)

    Description: Specifies the usage information of each allocated extent in an extent group returned each time.  **extent\_type**  indicates the type of the extent group. The value is an integer ranging from 1 to 5. If the value is not within the range, an error is reported.  **forknum**  indicates the fork number. The value is an integer ranging from 0 to 4. Currently, only the following values are valid:  **0**  for data files,  **1**  for FSM files, and  **2**  for visibility map files.

    Return type:

    <a name="table16284121318249"></a>
    <table><thead align="left"><tr id="row8323131316242"><th class="cellrowborder" valign="top" width="39.32%" id="mcps1.1.3.1.1"><p id="p7323313102411"><a name="p7323313102411"></a><a name="p7323313102411"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="60.68%" id="mcps1.1.3.1.2"><p id="p13323131392417"><a name="p13323131392417"></a><a name="p13323131392417"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1432314131243"><td class="cellrowborder" valign="top" width="39.32%" headers="mcps1.1.3.1.1 "><p id="p15323213182412"><a name="p15323213182412"></a><a name="p15323213182412"></a>start_block</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%" headers="mcps1.1.3.1.2 "><p id="p103238132243"><a name="p103238132243"></a><a name="p103238132243"></a>Start physical page number of an extent</p>
    </td>
    </tr>
    <tr id="row10323213192412"><td class="cellrowborder" valign="top" width="39.32%" headers="mcps1.1.3.1.1 "><p id="p33231913112416"><a name="p33231913112416"></a><a name="p33231913112416"></a>extent_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%" headers="mcps1.1.3.1.2 "><p id="p1032320131242"><a name="p1032320131242"></a><a name="p1032320131242"></a>Size of an extent</p>
    </td>
    </tr>
    <tr id="row1323151319246"><td class="cellrowborder" valign="top" width="39.32%" headers="mcps1.1.3.1.1 "><p id="p133233138245"><a name="p133233138245"></a><a name="p133233138245"></a>usage_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%" headers="mcps1.1.3.1.2 "><p id="p23231613192410"><a name="p23231613192410"></a><a name="p23231613192410"></a>Usage type of an extent, for example, <strong id="b1289912444618"><a name="b1289912444618"></a><a name="b1289912444618"></a>segment head</strong> and <strong id="b7899824124616"><a name="b7899824124616"></a><a name="b7899824124616"></a>data extent</strong></p>
    </td>
    </tr>
    <tr id="row18323313182419"><td class="cellrowborder" valign="top" width="39.32%" headers="mcps1.1.3.1.1 "><p id="p173231513132412"><a name="p173231513132412"></a><a name="p173231513132412"></a>ower_location</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%" headers="mcps1.1.3.1.2 "><p id="p1032331372415"><a name="p1032331372415"></a><a name="p1032331372415"></a>Object location of an extent to which a pointer points. For example, the owner of a data extent is the head of the segment to which the data extent belongs.</p>
    </td>
    </tr>
    <tr id="row183231513132414"><td class="cellrowborder" valign="top" width="39.32%" headers="mcps1.1.3.1.1 "><p id="p5323181320248"><a name="p5323181320248"></a><a name="p5323181320248"></a>special_data</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%" headers="mcps1.1.3.1.2 "><p id="p163231413182419"><a name="p163231413182419"></a><a name="p163231413182419"></a>Position of an extent in its owner. The value of this field is related to the usage type. For example, special data of a data extent is the extent ID in the segment to which the data extent belongs.</p>
    </td>
    </tr>
    </tbody>
    </table>

    The value of  **usage\_type**  is enumerated. The meaning of each value is as follows:

    -   **Non-bucket table segment head**: data segment head of a non-hash bucket table
    -   **Non-bucket table fork head**: fork segment header of a non-segment-page table
    -   **Data extent**: data block

    Example:

    ```
    select * from pg_stat_segment_extent_usage((select oid::int4 from pg_tablespace where spcname='pg_default'), (select oid::int4 from pg_database where datname='postgres'), 1, 0);
    start_block | extent_size |       usage_type       | ower_location | special_data
    -------------+-------------+------------------------+---------------+--------------
    4157 |           1 | Data extent |    4294967295 |            0
    4158 |           1 | Data extent |          4157 |            0
    ```

-   local\_space\_shrink\(tablespacename TEXT, databasename TEXT\)

    Description: Shrinks specified physical segment-page space on the current node. Only the currently connected database can be shrank.

    Return value: empty

-   gs\_space\_shrink\(int4 tablespace, int4 database, int4 extent\_type, int4 forknum\)

    Description: Works similar to  **local\_space\_shrink**, that is, shrinks specified physical segment-page space. However, the parameters are different. The input parameters are the OIDs of the tablespace and database, and the value of  **extent\_type**  is an integer ranging from 2 to 5. Note: The value  **1**  of  **extent\_type**  indicates segment-page metadata. Currently, the physical file that contains the metadata cannot be shrunk. This function is used only by tools. You are not advised to use it directly.

    Return value: empty

-   pg\_stat\_remain\_segment\_info\(\)

    Description: Displays residual extents on the current node due to faults. Residual extents are classified into two types: segments that are allocated but not used and extents that are allocated but not used. The main difference is that a segment contains multiple extents. During reclamation, all extents in the segment need to be recycled.

    Return type:

    <a name="table1859564011397"></a>
    <table><tbody><tr id="row8595340103916"><td class="cellrowborder" valign="top" width="39.32%"><p id="p9595184093917"><a name="p9595184093917"></a><a name="p9595184093917"></a>Name</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%"><p id="p14595940123915"><a name="p14595940123915"></a><a name="p14595940123915"></a>Description</p>
    </td>
    </tr>
    <tr id="row12595104015397"><td class="cellrowborder" valign="top" width="39.32%"><p id="p1459594083919"><a name="p1459594083919"></a><a name="p1459594083919"></a>space_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%"><p id="p1359619404392"><a name="p1359619404392"></a><a name="p1359619404392"></a>Tablespace ID</p>
    </td>
    </tr>
    <tr id="row175961040163919"><td class="cellrowborder" valign="top" width="39.32%"><p id="p19596104083915"><a name="p19596104083915"></a><a name="p19596104083915"></a>db_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%"><p id="p14596194073910"><a name="p14596194073910"></a><a name="p14596194073910"></a>Database ID</p>
    </td>
    </tr>
    <tr id="row155968402391"><td class="cellrowborder" valign="top" width="39.32%"><p id="p459634043916"><a name="p459634043916"></a><a name="p459634043916"></a>block_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%"><p id="p165961409394"><a name="p165961409394"></a><a name="p165961409394"></a>Extent ID</p>
    </td>
    </tr>
    <tr id="row1359614403391"><td class="cellrowborder" valign="top" width="39.32%"><p id="p16596040113911"><a name="p16596040113911"></a><a name="p16596040113911"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.68%"><p id="p20596140143917"><a name="p20596140143917"></a><a name="p20596140143917"></a>Extent type. The options are as follows: <strong id="b867121475220"><a name="b867121475220"></a><a name="b867121475220"></a>ALLOC_SEGMENT</strong>, <strong id="b146711314165219"><a name="b146711314165219"></a><a name="b146711314165219"></a>DROP_SEGMENT</strong>, and <strong id="b16671914145217"><a name="b16671914145217"></a><a name="b16671914145217"></a>SHRINK_EXTENT</strong>.</p>
    </td>
    </tr>
    </tbody>
    </table>

    The values of  **type**  are described as follows:

    -   **ALLOC\_SEGMENT**: When a user creates a segment-page table and the segment is just allocated but the transaction of creating a table is not committed, the node is faulty. As a result, the segment is not used after being allocated.
    -   **DROP\_SEGMENT**: When a user deletes a segment-page table and the transaction is successfully committed, the bit corresponding to the segment page of the table is not reset and a fault, such as power failure, occurs. As a result, the segment is not used or released.
    -   **SHRINK\_EXTENT**: When a user shrinks a segment-page table and does not release the idle extent, a fault, such as power failure, occurs. As a result, the extent remains and cannot be reused.

        Example:

        ```
        select * from pg_stat_remain_segment_info();
        space_id | db_id | block_id | type
        ----------+-------+----------+------
        1663       |   16385|        4156| ALLOC_SEGMENT
        ```


-   pg\_free\_remain\_segment\(int4 spaceId, int4 dbId, int4 segmentId\)

    Description: Releases a specified residual extent. The value must be obtained from the  **pg\_stat\_remain\_segment\_info**  function. The function verifies input values. If the specified extent is not among the recorded residual extents, an error message is returned. If the specified extent is a single extent, the extent is released independently. If it is a segment, the segment and all extents in the segment are released.

    Return value: empty


