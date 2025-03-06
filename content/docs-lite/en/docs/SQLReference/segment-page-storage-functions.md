# Segment-Page Storage Functions<a name="EN-US_TOPIC_0000001101431812"></a>

-   local\_segment\_space\_info\(tablespacename TEXT, databasename TEXT\)

    Description: This API has been discarded and is unavailable currently.

-   pg\_stat\_segment\_extent\_usage\(int4 tablespace oid, int4 database oid, int4 extent\_type, int4 forknum\)

    Description: This API has been discarded and is unavailable currently.

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


