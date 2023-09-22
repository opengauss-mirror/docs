# Archiving<a name="EN-US_TOPIC_0289900666"></a>

## archive\_mode<a name="en-us_topic_0283137238_en-us_topic_0237124710_en-us_topic_0059778119_sc70ee2a3ae214c89a156d9ad7a8b81e8"></a>

**Parameter description**: Specifies whether to archive WALs.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   When  **[wal\_level](settings-60.md#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s2c76f5957066407a959191148f2c780f)**  is set to  **minimal**, the  **archive\_mode**  parameter is unavailable.

**Value range**: Boolean

-   **on**  indicates that the archiving is enabled.
-   **off**  indicates that the archiving is disabled.

**Default value**:  **off**

## archive\_command<a name="en-us_topic_0283137238_en-us_topic_0237124710_en-us_topic_0059778119_sb54b5ab5e89e4a45a0c3401362709782"></a>

**Parameter description:**  Specifies the command set by the administrator to archive WALs. You are advised to set the archive log path to an absolute path.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If both  **archive\_dest** and  **archive\_command** are configured, WALs are preferentially saved to the directory specified by  **archive\_dest**. The command configured by  **archive\_command** does not take effect.
>-   Any  **%p**  in the string is replaced by the absolute path of the file to archive, and any  **%f**  is replaced by only the file name. \(The relative path is relative to the data directory.\) Use  **%%**  to embed an actual  **%**  character in the command.
>-   This command returns zero only if it succeeds. The command example is as follows:
>    ```
>    archive_command = 'cp --remove-destination %p /mnt/server/archivedir/%f' 
>    ```
>-   **--remove-destination**  indicates that files will be overwritten during the archiving.
>-   If there are multiple archive commands, write them to the shell script file and set  **archive\_command** to the command for executing the script. The command example is as follows:
>    ```
>    -- Assume that multiple commands are as follows:
>    test ! -f dir/%f && cp %p dir/%f
>    -- The content of the test.sh script is as follows:
>    test ! -f dir/$2 && cp $1 dir/$2 
>    -- The archive command is as follows:
>    archive_command='sh dir/test.sh %p %f'
>    ```

**Value range**: a string

**Default value:** **\(disabled\)**

## archive\_dest<a name="section460019369146"></a>

**Parameter description:**  Specifies the path set by the administrator to archive WALs. You are advised to set the archive log path to an absolute path.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If both  **archive\_dest** and  **archive\_command** are configured, WALs are preferentially saved to the directory specified by  **archive\_dest**. The command configured by  **archive\_command** does not take effect.
>-   If the string is a relative path, it is relative to the data directory. The following is an example:
>    ```
>    archive_dest = '/mnt/server/archivedir/'
>    ```

**Value range**: a string

**Default value**: empty

## archive\_timeout<a name="en-us_topic_0283137238_en-us_topic_0237124710_en-us_topic_0059778119_s360e571a567640fb8e0b438103192290"></a>

**Parameter description**: Specifies the archiving period.

This parameter is a  **SIGHUP**  parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   The server is forced to switch to a new WAL segment file when the period specified by this parameter has elapsed since the last file switch.
>-   Archived files that are closed early due to a forced switch are still of the same length as full files. Therefore, a very short  **archive\_timeout**  will bloat the archive storage. You are advised to set  **archive\_timeout**  to  **60s**.

**Value range**: an integer ranging from 0 to 1073741823. The unit is s.  **0**  indicates that archiving timeout is disabled.

**Default value**:  **0**
