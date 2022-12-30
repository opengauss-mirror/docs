# dsscmd<a name="EN-US_TOPIC_0000001321698602"></a>

## Overview<a name="section1377524355216"></a>

When the openGauss is deployed in shared storage mode and the ss\_enable\_dss function is enabled, you need to query, operate, and manage the cluster file system based on disk arrays. To effectively manage the file system created by DSS, the shared storage provides the dsscmd management tool.

## Command<a name="section161808461171"></a>

-   Display help information.

    ```
    dsscmd 
    ```


-   Create a volume group.

    ```
    dsscmd cv <-g vg_name> <-v vol_name> [-s au_size] [-D DSS_HOME]
    ```

    **vg\_name** indicates the volume group name. The name can contain a maximum of 64 characters, including digits, uppercase letters, lowercase letters, underscores (_), periods (.), and hyphens (-). Other characters are not supported.

-   Display information about volume groups (VGs) and disk usage.

    ```
    dsscmd lsvg [-m measure_type] [-t show_type] [-U UDS:socket_domain]
    ```

-   Add volumes to a volume group.

    ```
    dsscmd adv <-g vg_name> <-v vol_name> [-U UDS:socket_domain]
    ```

    In the preceding command, **vg\_name** indicates the VG name and does not need to start with a plus sign (+).

-   Create a directory.

    ```
    dsscmd mkdir <-p path> <-d dir_name> [-U UDS:socket_domain]
    ```

-   Create a file.

    ```
    dsscmd touch <-n name> [-U UDS:socket_domain]
    ```

    The file (not a directory) name can contain a maximum of 64 characters. Only digits, uppercase letters, lowercase letters, underscores (_), periods (.), and hyphens (-) are supported. Other characters are not supported.

-   Display information about files in the path.

    ```
    dsscmd ls <-p path> [-m measure_type] [-U UDS:socket_domain]
    ```

-   Copy information from the source file to the target file.

    ```
    dsscmd cp <-s src_file> <-d dest_file> [-U UDS:socket_domain]
    ```

-   Delete VG files.

    ```
    dsscmd rm <-n name> [-U UDS:socket_domain]
    ```

-   Delete a volume from a VG.

    ```
    dsscmd rmv <-g vg_name> <-v vol_name> [-U UDS:socket_domain]
    ```

    In the preceding command, **vg\_name** indicates the VG name and does not need to start with a plus sign (+).

-   Delete a directory and its contents.

    ```
    dsscmd rmdir <-p path> [-r] [-U UDS:socket_domain path]
    ```

-   Display LUN registration information.

    ```
    dsscmd inq  <-t inq_type>
    ```

-   Display the client information.

    ```
    dsscmd lscli
    ```

-   Add the current node to the cluster using the server.

    ```
    dsscmd regh [-U UDS:socket_domain]
    ```

-   Remove the current node from the cluster.

    ```
    dsscmd unregh [-U UDS:socket_domain]
    ```

-   Remove a non-current node from the cluster. The first parameter is the ID of the node to be removed.

    ```
    dsscmd kickh <-i inst_id> [-U UDS:socket_domain]
    ```

-   Add a node to the cluster without using the server.

    ```
    dsscmd reghl <-i inst_id> [-D DSS_HOME]
    ```

-   Remove a node from the cluster without using the server.

    ```
    dsscmd unreghl <-i inst_id> [-D DSS_HOME]
    ```

-   Register the node to the volname without using the server.

    ```
    dsscmd reg <-i inst_id> <-v vol_name>
    ```

-   Deregister a node from the volname without using the server.

    ```
    dsscmd unreg <-i inst_id> <-v vol_name>
    ```

-   Clear all node information retained on the volume.

    ```
    dsscmd clrreg <-i inst_id> <-v vol_name>
    ```

-   Preempt persistent reservation and delete registration information.

    ```
    dsscmd kick <-i inst_id> <-k kicked_inst_id> <-v vol_name>
    ```

-   Set the auid of the DSS node.

    ```
    dsscmd auid <-a auid>
    ```

-   Preempt persistent reservation and delete registration information without interacting with the server.

    ```
    dsscmd kickhl <-i inst_id> <-k kicked_inst_id> [-D DSS_HOME]
    ```

-   Read the DSS file.

    ```
    dsscmd examine <-n name> <-o offset> <-f format> [-s read_size] [-D DSS_HOME] [-U UDS:socket_domain]
    ```

    **format** indicates the format of the file content to be read. The value can be **c char**, **h unsigned short**, **u unsigned int**, **l unsigned long**, **s string** or **x hex**.

-   Reads the disk array file.

    ```
    dsscmd dev <-p path> <-o offset> <-f format> [-D DSS_HOME]
    ```

    **format** indicates the format of the file content to be read. The value can be **c char**, **h unsigned short**, **u unsigned int**, **l unsigned long**, **s string** or **x hex**.

-   Display disk information.

    ```
    dsscmd showdisk <-g vg_name> <-s struct_name> [-D DSS_HOME]
    dsscmd showdisk <-g vg_name> <-b block_id> <-n node_id> [-D DSS_HOME]
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >If **-b block\_id** is specified, **-n node\_id** must also be specified.

-   Rename a file.

    ```
    dsscmd rename <-o old_name> <-n new_name> [-U UDS:socket_domain]
    ```

-   Display the disk usage of files or directories with optional parameters.

    ```
    dsscmd du <-p path> [-f format] [-U UDS:socket_domain]
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >**format**: Three types of parameters are supported. No separator is required between parameters.
    >-   B|K|M|G|T
    >    **B**: Byte. **K**: KB. **M**: MB. **G**: GB. **T**: TB.
    >-   s|a
    >    **s**: directory. **a**: all files are calculated, not just directories.
    >-   S
    >    For a directory, the size of the subdirectory is not included.

-   Search for the path of a file by file name.

    ```
    dsscmd find <-p path> <-n name> [-U UDS:socket_domain]
    ```

-   Create a symbolic link.

    ```
    dsscmd ln <-s src_path> <-t target_path> [-U UDS:socket_domain]
    ```

-   Display file link information.

    ```
    dsscmd readlink <-p path> [-U UDS:socket_domain]
    ```

-   Cancel the symbolic link.

    ```
    dsscmd unlink <-p path> [-U UDS:socket_domain]
    ```

-   Perform encryption.

    ```
    dsscmd encrypt
    ```

-   Set configuration items.

    ```
    dsscmd setcfg <-n name> <-v value> [-s scope] [-U UDS:socket_domain]
    ```

-   Obtain configuration items.

    ```
    dsscmd getcfg <-n name> [-U UDS:socket_domain]
    ```

-   Stop the dssserver process.

    ```
    dsscmd stopdss [-U UDS:socket_domain]
    ```


## Parameter Description<a name="en-us_topic_0059777958_s2d970209405e437385b0b3d8666e825e"></a>

-   show\_type

    **d** displays the detailed information, and **t** displays the information in the table.

-   au\_size

    Size of the au, in KB. The value ranges from 2 MB to 64 MB.

-   vg\_name

    Volume group name.

-   measure\_type

    Unit of the displayed file size. Example: byte, KB, MB, GB, or TB.

    The default unit is byte.

-   dir\_name

    Directory name. The name can contain a maximum of 64 characters, including digits, uppercase letters, lowercase letters, underscores (_), periods (.), and hyphens (-). Other characters are not supported.

-   dest\_file

    Name of the target file. The name can contain a maximum of 64 characters (not a directory name). Only digits, uppercase letters, lowercase letters, underscores (_), periods (.), and hyphens (-) are supported. Other characters are not supported.

-   vol\_name

    Volume name.

-   -D

    Path of $DSS\_HOME.

-   -U UDS:socket\_domain

    Path of the socket file used by the DSS instance process.

-   inst\_id |kicked\_inst\_id

    ID of a DSS instance in the cluster.

-   addr

    Start address of the lock on the volume.

-   -r

    Cascading deletion.

-   inq\_type

    Information type. The values are as follows:

    -   **lun**: queries LUN information.
    -   **reg**: queries reservation information.

-   read\_size

    Length of data to be read.

-   struct\_name

    File type of the output information.

    Value range: core\_ctrl, vg\_header, volume\_ctrl, and root\_ft\_block.

-   new\_name

    Name of the renamed file.

    The file (not a directory) name can contain a maximum of 64 characters. Only digits, uppercase letters, lowercase letters, underscores (_), periods (.), and hyphens (-) are supported. Other characters are not supported.

-   target\_path

    Target file.

    The file (not a directory) name can contain a maximum of 64 characters. Only digits, uppercase letters, lowercase letters, underscores (_), periods (.), and hyphens (-) are supported. Other characters are not supported.

-   name:

    Name of a configuration item.

-   value

    Value of a configuration item.

-   scope

    Scope in which a configuration item takes effect.

    The value can be **memory**, **pfile**, or **both**.

    -   **memory**: indicates that the modification is performed in the memory and takes effect immediately.
    -   **pfile**: indicates that the modification is performed in the pfile. The modification takes effect only after the database is restarted.
    -   **both**: indicates that the modification is performed in both the memory and the pfile.


## Examples<a name="section192337387165"></a>

-   Create VGs **data** and **log**. The au sizes of the VGs are 2048 and 65536 respectively. **-D** specifies *dss\_home*.

    ```
    dsscmd cv -g data -v /dev/tpcc_data -s 2048 -D /home/ss_test/dss_home
    dsscmd cv -g log -v /dev/tpcc_log -s 65536 -D /home/ss_test/dss_home
    ```


-   Create the **pg\_xlog0** folder and specify the socket file of the DSS process in the UDS.

    ```
    dsscmd mkdir -p +log -d pg_xlog0 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   Copy files in **data** to **log**.

    ```
    dsscmd cp -s +data/pg_xlog0/000000010000000000000001 -d +log/pg_xlog0/000000010000000000000001 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   Delete files from the **data** directory.

    ```
    dsscmd rm -n +data/pg_xlog0/000000010000000000000001 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   Delete the **pg\_xlog0/archive\_status** folder from **data**. (The folder is empty. If files in the folder need to be deleted in cascading mode, add **-r**.)

    ```
    dsscmd rmdir -p +data/pg_xlog0/archive_status -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```

-   Create a symbolic link.

    ```
    dsscmd ln -s +log/pg_xlog0 -t +data/pg_xlog0 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```


-   View information about files in the **pg\_xlog0** folder in the **data** directory.

    ```
    dsscmd ls -p +data/pg_xlog0 -U UDS:/home/ss_test/dss_home/.dss_unix_d_socket
    ```
