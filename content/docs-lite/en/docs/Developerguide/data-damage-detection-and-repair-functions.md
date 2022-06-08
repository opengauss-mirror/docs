# Data Damage Detection and Repair Functions<a name="EN-US_TOPIC_0000001198584734"></a>

-   gs\_verify\_data\_file\(verify\_segment bool\)

    Description: Checks whether files in the current database of the current instance are lost. The verification only checks whether intermediate segments are lost in the main file of the data table. The default value is  **false**, indicating that the segment-page table data file is not verified. If this parameter is set to  **true**, only segment-page table files are verified. By default, only initial users, users with the  **SYSADMIN**  permission, and users with the O&M administrator attribute in the O&M mode can view the information. Other users can use the information only after being granted with permissions.

    The returned result is as follows:

    -   Non-segment-page table:  **rel\_oid**  and  **rel\_name**  indicate the table OID and table name of the corresponding file, and  **miss\_file\_path**  indicates the relative path of the lost file.
    -   Segment-paged table: All tables are stored in the same file. Therefore,  **rel\_oid**  and  **rel\_name**  cannot display information about a specific table. For a segment-page table, if the first file is damaged, the subsequent files such as .1 and .2 are not checked. For example, if 3, 3.1, and 3.2 are damaged, only 3 damage can be detected. When the number of segment-page files is less than 5, the files that are not generated are also detected during function detection. For example, if there are only files 1 and 2, files 3, 4, and 5 are detected during segment-page file detection. In the following examples, the first is an example of checking a non-segment-page table, and the second is an example of checking a segment-page table.

    Parameter description:

    -   verify\_segment

        Specifies the range of files to be checked.  **false**  indicates that non-segment-page tables are verified.  **true**  indicates that segment-page tables are verified.

        The value can be  **true**  or  **false**  \(default value\).

    Return type: record

    Example:

    Verify a non-segment-page table.

    ```
    openGauss=# select * from gs_verify_data_file();
    node_name         | rel_oid |  rel_name    |  miss_file_path
    ------------------+---------+--------------+------------------
    dn_6001_6002_6003 |   16554 |     test     | base/16552/24745
    ```

    Verify a segment-page table.

    ```
    openGauss=# select * from gs_verify_data_file(true);
         node_name     | rel_oid | rel_name | miss_file_path
    -------------------+---------+----------+----------------
     dn_6001_6002_6003 |       0 | none     | base/16573/2
    ```

-   gs\_repair\_file\(tableoid Oid, path text, timeout int\)

    Description: Repairs the file based on the input parameters. Only the primary DN with normal primary/standby connection is supported. The parameter is set based on the OID and path returned by the  **gs\_verify\_data\_file**  function. The value of table OID for a segment-page table ranges from 0 to 4294967295. \(The internal verification determines whether a file is a segment-page table file based on the file path. The table OID is not used for a segment-page table file.\) If the repair is successful,  **true**  is returned. If the repair fails, the failure cause is displayed. By default, only the initial user, users with the  **SYSADMIN**  permission, and users with the O&M administrator attribute in O&M mode on the primary DN can view the table. Other users can use the table only after being granted with permissions.

    >![](public_sys-resources/icon-caution.gif) **CAUTION:** 
    >1.  If a file on a DN is damaged, a verification error occurs when the DN is promoted to primary. An error message is displayed, indicating that the DN cannot be promoted to primary due to PANIC exit. This is normal. After another DN is promoted to primary, the fault can be rectified through the automatic recovery of the standby DN.
    >2.  If a file exists but its size is 0, the file will not be repaired. To repair the file, you need to delete the file whose size is 0 and then repair it.
    >3.  You can delete a file only after the file FD is automatically closed. You can manually restart the process or perform a primary/standby switchover.

    Parameter description:

    -   tableoid

        OID of the table corresponding to the file to be repaired. Set this parameter based on the  **rel\_oid**  column in the list returned by the  **gs\_verify\_data\_file**  function.

        Value range: OID ranging from 0 to 4294967295. Note: A negative value will be forcibly converted to a non-negative integer.

    -   path

        Path of the file to be repaired. Set this parameter based on the  **miss\_file\_path**  column in the list returned by the  **gs\_verify\_data\_file**  function.

        Value range: a string

    -   timeout

        Specifies the duration for waiting for the standby DN to replay. The repair file needs to wait for the standby DN to be put back to the corresponding location on the current primary DN. Set this parameter based on the replay duration of the standby DN.

        Value range: 60s to 3600s.

    Return type: Boolean

    Example:

    ```
    openGauss=# select * from gs_repair_file(16554,'base/16552/24745',360);
    gs_repair_file
    ----------------
    t
    ```


-   local\_bad\_block\_info\(\)

    Description: Displays the page damage of the instance. You can read the page from the disk and record the page CRC failure. By default, only initial users, users with the  **SYSADMIN**  permission, users with the monitoring administrator attribute, users with the O&M administrator attribute in the O&M mode, and monitoring users can view the information. Other users can use the information only after being granted with permissions.

    In the displayed information,  **file\_path**  indicates the relative path of the damaged file. If the table is a segment-page table, the logical information instead of the actual physical file information is displayed.  **block\_num**  indicates the number of the page where the file is damaged. The page number starts from 0.  **check\_time**  indicates the time when the page damage is detected.  **repair\_time**  indicates the time when the page is repaired.

    Return type: record

    Example:

    ```
    openGauss=# select * from local_bad_block_info();
    node_name    | spc_node | db_node | rel_node| bucket_node | fork_num | block_num |    file_path     |  check_time            |   repair_time
    -----------------+-------+--------+--------+--------------+----------+-----------+-----------------+--------------------------+-------------------------------
    dn_6001_6002_6003|  1663 |  16552 |  24745 |        -1    |    0    | 0        | base/16552/24745 | 2022-01-13 20:19:08.385004+08 | 2022-01-13 20:19:08.407314+08
    
    ```

-   local\_clear\_bad\_block\_info\(\)

    Description: Deletes data of repaired pages from  **local\_bad\_block\_info**, that is, information whose  **repair\_time**  is not empty. By default, only initial users, users with the  **SYSADMIN**  permission, users with the O&M administrator attribute in the O&M mode, and monitoring users can view the information. Other users can use the information only after being granted with permissions.

    Return type: Boolean

    Example:

    ```
    openGauss=# select * from local_clear_bad_block_info();
    result
    --------
    t
    ```

-   gs\_verify\_and\_tryrepair\_page \(path text, blocknum oid, verify\_mem bool, is\_segment bool\)

    Description: Verifies the page specified by the instance. By default, only the initial user, users with the  **SYSADMIN**  permission, and users with the O&M administrator attribute in O&M mode on the primary DN can view the table. Other users can use the table only after being granted with permissions.

    In the command output,  **disk\_page\_res**  indicates the verification result of the page on the disk,  **mem\_page\_res**  indicates the verification result of the page in the memory, and  **is\_repair**  indicates whether the repair function is triggered during the verification.  **t**  indicates that the page is repaired, and  **f**  indicates that the page is not repaired.

    Note: If a page on a DN is damaged, a verification error occurs when the DN is promoted to primary. An error message is displayed, indicating that the DN cannot be promoted to primary due to PANIC exit. This is normal. After another DN is promoted to primary, the fault can be rectified through the automatic recovery of the standby DN.

    Parameter description:

    -   path

        Path of the damaged file. Set this parameter based on the  **file\_path**  column in the  **local\_bad\_block\_info**  file.

        Value range: a string

    -   blocknum

        Page number of the damaged file. Set this parameter based on the  **block\_num**  column in the  **local\_bad\_block\_info**  file.

        Value range: OID ranging from 0 to 4294967295. Note: A negative value will be forcibly converted to a non-negative integer.

    -   verify\_mem

        Specifies whether to verify a specified page in the memory. If this parameter is set to  **false**, only pages on the disk are verified. If this parameter is set to  **true**, pages in the memory and on the disk are verified. If a page on the disk is damaged, the system verifies the basic information of the page in the memory and flushes the page to the disk to restore the page. If a page is not found in the memory during memory page verification, the page on the disk is read through the memory API. During this process, if the disk page is faulty, the remote read automatic repair function is triggered.

        Value range: The value is of a Boolean type and can be  **true**  or  **false**.

    -   is\_segment

        Determines whether the table is a segment-page table. Set this parameter based on the value of  **bucket\_node**  in the  **local\_bad\_block\_info**  file. If the value of  **bucket\_node**  is  **–1**, the table is not a segment-page table. In this case, set  **is\_segment**  to  **false**. If the value of  **bucket\_node**  is not –1, set  **is\_segment**  to  **true**.

        Value range: The value is of a Boolean type and can be  **true**  or  **false**.

    Return type: record

    Example:

    ```
    openGauss=# select * from gs_verify_and_tryrepair_page('base/16552/24745',0,false,false);
    node_name         |       path      |  blocknum  |        disk_page_res        | mem_page_res | is_repair
    ------------------+------------------+------------+-----------------------------+---------------+----------
    dn_6001_6002_6003 | base/16552/24745 |     0      | page verification succeeded.|              | f
    ```

-   gs\_repair\_page\(path text, blocknum oid, is\_segment bool, timeout int\)

    Description: Restores the specified page of the instance. This function can be used only by the primary DN that is properly connected to the primary and standby DNs. If the page is successfully restored,  **true**  is returned. If an error occurs during the restoration, an error message is displayed. By default, only the initial user, users with the  **SYSADMIN**  permission, and users with the O&M administrator attribute in O&M mode on the primary DN can view the table. Other users can use the table only after being granted with permissions.

    Note: If a page on a DN is damaged, a verification error occurs when the DN is promoted to primary. An error message is displayed, indicating that the DN cannot be promoted to primary due to PANIC exit. This is normal. After another DN is promoted to primary, the fault can be rectified through the automatic recovery of the standby DN.

    Parameter description:

    -   path

        Path of the damaged page. Set this parameter based on the  **file\_path**  column in  **local\_bad\_block\_info**  or the  **path**  column in the  **gs\_verify\_and\_tryrepair\_page**  function.

        Value range: a string

    -   blocknum

        Number of the damaged page. Set this parameter based on the  **block\_num**  column in  **local\_bad\_block\_info**  or the  **blocknum**  column in the  **gs\_verify\_and\_tryrepair\_page**  function.

        Value range: OID ranging from 0 to 4294967295. Note: A negative value will be forcibly converted to a non-negative integer.

    -   is\_segment

        Determines whether the table is a segment-page table. The value of this parameter is determined by the value of  **bucket\_node**  in  **local\_bad\_block\_info**. If the value of  **bucket\_node**  is  **–1**, the table is not a segment-page table and  **is\_segment**  is set to  **false**. If the value of  **bucket\_node**  is not –1,  **is\_segment**  is set to true.

        Value range: The value is of a Boolean type and can be  **true**  or  **false**.

    -   timeout

        Duration of waiting for standby DN replay. The repair page needs to wait for the standby DN to move back to the location of the current primary DN. Set this parameter based on the playback duration of the standby DN.

        Value range: 60s to 3600s.

    Return type: Boolean

    Example:

    ```
    openGauss=# select * from gs_repair_page('base/16552/24745',0,false,60);
    result
    --------
    t
    ```


