# HTAP Row-Column Fusion System Functions

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:22:01.547Z -->

- query\_imcstore\_views\(\)

    Description: Views the conversion information of HTAP row-column fusion tables.

    Return type:

    <a name="table1560518521210"></a>
    <table><tbody><tr id="row563319147433"><td class="cellrowborder" valign="top" width="37.16%"><p id="p7633414204310"><a name="p7633414204310"></a><a name="p7633414204310"></a>Name</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p263351419436"><a name="p263351419436"></a><a name="p263351419436"></a>Description</p>
    </td>
    </tr><tr id="row563319147433"><td class="cellrowborder" valign="top" width="37.16%"><p id="p7633414204310"><a name="p7633414204310"></a><a name="p7633414204310"></a>reloid</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p263351419436"><a name="p263351419436"></a><a name="p263351419436"></a>Table ID.</p>
    </td>
    </tr>
    <tr id="row116503511211"><td class="cellrowborder" valign="top" width="37.16%"><p id="p2650115181210"><a name="p2650115181210"></a><a name="p2650115181210"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p56501756125"><a name="p56501756125"></a><a name="p56501756125"></a>Table name.</p>
    </td>
    </tr>
    <tr id="row1965005111214"><td class="cellrowborder" valign="top" width="37.16%"><p id="p16501254121"><a name="p16501254121"></a><a name="p16501254121"></a>imcs_attrs</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p136508591218"><a name="p136508591218"></a><a name="p136508591218"></a>Subscripts of the converted columns in the row store.</p>
    </td>
    </tr>
    <tr id="row26501531210"><td class="cellrowborder" valign="top" width="37.16%"><p id="p2650155131213"><a name="p2650155131213"></a><a name="p2650155131213"></a>imcs_nattrs</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p56505531212"><a name="p56505531212"></a><a name="p56505531212"></a>Number of converted columns.</p>
    </td>
    </tr>
    <tr id="row1065195161218"><td class="cellrowborder" valign="top" width="37.16%"><p id="p17651057127"><a name="p17651057127"></a><a name="p17651057127"></a>imcs_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p106513513124"><a name="p106513513124"></a><a name="p106513513124"></a>Conversion status.<ul id="ul9347195835815"><li>INITIAL: Initialization.</li><li>COMPLETE: Row-column conversion completed.</li><li>ERROR: Row-column conversion failed.</li><li>ONSTANDBY: In a primary/standby scenario, the primary node displays that the conversion is being performed on the standby node.</li></ul></p>
    </td>
    </tr>
    <tr id="row9651753126"><td class="cellrowborder" valign="top" width="37.16%"><p id="p165120518123"><a name="p165120518123"></a><a name="p165120518123"></a>is_partition</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p11651757129"><a name="p11651757129"></a><a name="p11651757129"></a>Indicates whether it is a partition.</p>
    </td>
    </tr>
    <tr id="row206513510123"><td class="cellrowborder" valign="top" width="37.16%"><p id="p146513581218"><a name="p146513581218"></a><a name="p146513581218"></a>parent_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p106511658128"><a name="p106511658128"></a><a name="p106511658128"></a>Parent table ID.</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_size_in_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>Size of CUs stored in memory.</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_num_in_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>Number of CUs stored in memory.</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_size_in_disk</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>Size of the CU stored in the temporary file.</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>cu_num_in_disk</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>Number of CUs stored in the temporary file.</p>
    </td>
    </tr>
    <tr id="row565115561215"><td class="cellrowborder" valign="top" width="37.16%"><p id="p186518518123"><a name="p186518518123"></a><a name="p186518518123"></a>delta_in_mem</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.839999999999996%"><p id="p7651558127"><a name="p7651558127"></a><a name="p7651558127"></a>Size of delta pages stored in memory</p>
    </td>
    </tr>
    </tbody>
    </table>

    NOTE

    Column store data cannot be directly updated because column store data is stored as a whole memory block, and immediate updates would cause large-scale memory copies and performance degradation. In addition, the HTAP feature requires mapping between column store rowid and row store ctid, and immediate updates would break this mapping relationship. Therefore, data modifications cannot be directly applied to the column store cache. Instead, modification operations are first stored in the delta table, and the column store cache is rebuilt when certain conditions are met.
    The specific implementation logic for data modifications is as follows:
    1. Modification operations are recorded in the delta table. The recorded data includes the row ID of the row store and the transaction ID at the time of modification. Since operation records are stored, INSERT, UPDATE, and DELETE operations all increase memory usage.
    2. VACUUM is triggered when conditions are met. The background VACUUM process rebuilds CUs based on frozenxid and deletes records in the delta table that are earlier than frozenxid.

This is manifested as an increase in delta memory usage during data insertion, update, or deletion, and a decrease in delta memory usage along with CU updates after VACUUM.
    Since VACUUM is a rebuild based on Frozenxid, only operations with values below the frozenxid are updated. This process involves a certain delay, which is uncontrollable. The delay is determined by the advancement time of the frozenxid.

For example:

    ```
    select * from query_imcstore_views();
    reloid | relname | imcs_attrs | imcs_nattrs | imcs_status | is_partition | parent_oid | cu_size_in_mem | cu_num_in_mem | cu_size_in_disk | cu_num_in_disk | delta_in_mem
    --------+---------+------------+-------------+-------------+--------------+------------+----------------+---------------+-----------------+----------------+-------------
    16384 | test    | 1 2 3      |           3 | COMPLETE    | f            |          0 |              0 |             0 |               0 |              0 |            0
    (1 row)
    ```
    