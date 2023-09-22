# gs\_dump

## 背景信息<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_section1271019596335"></a>

gs\_dump是openGauss用于导出数据库相关信息的工具，用户可以自定义导出一个数据库或其中的对象（模式、表、视图等），回收站对象除外。支持导出的数据库可以是默认数据库postgres，也可以是自定义数据库。

gs\_dump工具由安装openGauss数据库的操作系统用户执行。

gs\_dump工具在进行数据导出时，其他用户可以访问openGauss数据库（读或写）。

gs\_dump工具支持导出完整一致的数据。例如，T1时刻启动gs\_dump导出A数据库，那么导出数据结果将会是T1时刻A数据库的数据状态，T1时刻之后对A数据库的修改不会被导出。

gs\_dump工具在进行数据导出时生成的列不会被转储。

gs\_dump支持导出兼容v1版本数据库的文本格式文件。

gs\_dump支持将数据库信息导出至纯文本格式的SQL脚本文件或其他归档文件中。

-   纯文本格式的SQL脚本文件：包含将数据库恢复为其保存时的状态所需的SQL语句。通过gsql运行该SQL脚本文件，可以恢复数据库。即使在其他主机和其他数据库产品上，只要对SQL脚本文件稍作修改，也可以用来重建数据库。
-   归档格式文件：包含将数据库恢复为其保存时的状态所需的数据，可以是tar格式、目录归档格式或自定义归档格式，详见[表1](#zh-cn_topic_0237152335_zh-cn_topic_0058967678_t17db29a12e7342cfbf02b2f6e50ff1a5)。该导出结果必须与[gs\_restore](gs_restore.md)配合使用来恢复数据库，gs\_restore工具在导入时，系统允许用户选择需要导入的内容，甚至可以在导入之前对等待导入的内容进行排序。

gs\_dump工具支持MySQL兼容性。（仅限于3.0.0，3.1.0，3.1.1的MySQL兼容性需求）

>![](public_sys-resources/icon-notice.png) **须知：**
>-   show create procedure/function等show create语句的database collation和collation connection与数据库的lc_collate相同，由于InitSession会重新初始化lc_collate参数，lc_collate有时会被初始化为C，所以show create procedure/function等show create语句的database collation和collation connection这两个列的值不稳定。
>-   导出物化视图时，不支持导出物化视图中的数据。
>-   临时表不支持导入导出。

## 主要功能<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s59719e8badd54d11a09df49f558d8b20"></a>

gs\_dump可以创建四种不同的导出文件格式，通过“-F”或者“--format=”选项指定，具体如[表1](#zh-cn_topic_0237152335_zh-cn_topic_0058967678_t17db29a12e7342cfbf02b2f6e50ff1a5)所示。

**表 1**  导出文件格式

<a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_t17db29a12e7342cfbf02b2f6e50ff1a5"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_r4ef849d8960e48aca0b7d7b3cb862f51"><th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_af6e2786c5c134e209e442d3a165510a4"><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_af6e2786c5c134e209e442d3a165510a4"></a><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_af6e2786c5c134e209e442d3a165510a4"></a>格式名称</p>
</th>
<th class="cellrowborder" valign="top" width="9.8%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0237152335_p4587167183616"><a name="zh-cn_topic_0237152335_p4587167183616"></a><a name="zh-cn_topic_0237152335_p4587167183616"></a>-F的参数值</p>
</th>
<th class="cellrowborder" valign="top" width="30.78%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a1b62768c45284a809838bc575fdc7aea"><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a1b62768c45284a809838bc575fdc7aea"></a><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a1b62768c45284a809838bc575fdc7aea"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="20.65%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0237152335_p6978831508"><a name="zh-cn_topic_0237152335_p6978831508"></a><a name="zh-cn_topic_0237152335_p6978831508"></a>建议</p>
</th>
<th class="cellrowborder" valign="top" width="25.990000000000002%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0237152335_p2063187163819"><a name="zh-cn_topic_0237152335_p2063187163819"></a><a name="zh-cn_topic_0237152335_p2063187163819"></a>对应导入工具</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_r1daa8251bad14980afdd5cb2d8265dc3"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_zh-cn_topic_0020757891_p20432820450"><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_zh-cn_topic_0020757891_p20432820450"></a><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_zh-cn_topic_0020757891_p20432820450"></a>纯文本格式</p>
</td>
<td class="cellrowborder" valign="top" width="9.8%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0237152335_p859110714363"><a name="zh-cn_topic_0237152335_p859110714363"></a><a name="zh-cn_topic_0237152335_p859110714363"></a>p</p>
</td>
<td class="cellrowborder" valign="top" width="30.78%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0237152335_p1374812518463"><a name="zh-cn_topic_0237152335_p1374812518463"></a><a name="zh-cn_topic_0237152335_p1374812518463"></a>纯文本脚本文件包含SQL语句和命令。命令可以由gsql命令行终端程序执行，用于重新创建数据库对象并加载表数据。</p>
</td>
<td class="cellrowborder" valign="top" width="20.65%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0237152335_p130319266504"><a name="zh-cn_topic_0237152335_p130319266504"></a><a name="zh-cn_topic_0237152335_p130319266504"></a>小型数据库，一般推荐纯文本格式。</p>
</td>
<td class="cellrowborder" valign="top" width="25.990000000000002%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0237152335_p18632714386"><a name="zh-cn_topic_0237152335_p18632714386"></a><a name="zh-cn_topic_0237152335_p18632714386"></a>使用gsql工具恢复数据库对象前，可根据需要使用文本编辑器编辑纯文本导出文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152335_row14339208493"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_af130ab9de506445ca1707d7e363597d0"><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_af130ab9de506445ca1707d7e363597d0"></a><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_af130ab9de506445ca1707d7e363597d0"></a>自定义归档格式</p>
</td>
<td class="cellrowborder" valign="top" width="9.8%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0237152335_p16594177133618"><a name="zh-cn_topic_0237152335_p16594177133618"></a><a name="zh-cn_topic_0237152335_p16594177133618"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="30.78%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0237152335_p2018045019462"><a name="zh-cn_topic_0237152335_p2018045019462"></a><a name="zh-cn_topic_0237152335_p2018045019462"></a>一种二进制文件。支持从导出文件中恢复所有或所选数据库对象。</p>
</td>
<td class="cellrowborder" valign="top" width="20.65%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0237152335_p205841643165011"><a name="zh-cn_topic_0237152335_p205841643165011"></a><a name="zh-cn_topic_0237152335_p205841643165011"></a>中型或大型数据库，推荐自定义归档格式。</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="25.990000000000002%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0237152335_p146377143811"><a name="zh-cn_topic_0237152335_p146377143811"></a><a name="zh-cn_topic_0237152335_p146377143811"></a>使用<a href="gs_restore.md">gs_restore</a>可以选择要从自定义归档/目录归档/tar归档导出文件中导入相应的数据库对象。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152335_row1377584264920"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a10491f96f0dd4e469b9bf7c97c464f11"><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a10491f96f0dd4e469b9bf7c97c464f11"></a><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a10491f96f0dd4e469b9bf7c97c464f11"></a>目录归档格式</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0237152335_p155963793619"><a name="zh-cn_topic_0237152335_p155963793619"></a><a name="zh-cn_topic_0237152335_p155963793619"></a>d</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0237152335_p141347125538"><a name="zh-cn_topic_0237152335_p141347125538"></a><a name="zh-cn_topic_0237152335_p141347125538"></a>该格式会创建一个目录，该目录包含两类文件，一类是目录文件，另一类是每个表和blob对象对应的数据文件。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0237152335_p430501165117"><a name="zh-cn_topic_0237152335_p430501165117"></a><a name="zh-cn_topic_0237152335_p430501165117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_r582ac840af8345f89e90400138f92148"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a8b2e4dc0a8fb45a891151068940d228b"><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a8b2e4dc0a8fb45a891151068940d228b"></a><a name="zh-cn_topic_0237152335_zh-cn_topic_0058967678_a8b2e4dc0a8fb45a891151068940d228b"></a>tar归档格式</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0237152335_p10597975361"><a name="zh-cn_topic_0237152335_p10597975361"></a><a name="zh-cn_topic_0237152335_p10597975361"></a>t</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0237152335_p27801606479"><a name="zh-cn_topic_0237152335_p27801606479"></a><a name="zh-cn_topic_0237152335_p27801606479"></a>tar归档文件支持从导出文件中恢复所有或所选数据库对象。tar归档格式不支持压缩且对于单独表大小应小于8GB。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0237152335_p8184143515"><a name="zh-cn_topic_0237152335_p8184143515"></a><a name="zh-cn_topic_0237152335_p8184143515"></a>-</p>
</td>
</tr>
</tbody>
</table>

![](public_sys-resources/icon-note.png) **说明：** 
可以使用gs\_dump程序将文件压缩为目录归档或自定义归档导出文件，减少导出文件的大小。生成目录归档或自定义归档导出文件时，默认进行中等级别的压缩。gs\_dump程序无法压缩已归档导出文件。

## 注意事项<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s75e900efd4f04a2bb39914ec1d8f971f"></a>

- 禁止修改-F c/d/t 格式导出的文件和内容，否则可能无法恢复成功。对于-F p 格式导出的文件，如有需要，可根据需要谨慎编辑导出文件。

- 为了保证数据一致性和完整性，gs\_dump会对需要转储的表设置共享锁。如果表在别的事务中设置了共享锁，gs\_dump会等待锁释放后锁定表。如果无法在指定时间内锁定某个表，转储会失败。用户可以通过指定--lock-wait-timeout选项，自定义等待锁超时时间。
- 不支持加密导出存储过程和函数。

## 语法<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s884f9e03cedd408cbe7ce5303df97df6"></a>

```
gs_dump [OPTION]... [DBNAME]
```

![](public_sys-resources/icon-note.png) **说明：** 
“DBNAME”前面不需要加短或长选项。“DBNAME”指定要连接的数据库。
例如：
不需要-d，直接指定“DBNAME”。

```
gs_dump -p port_number  postgres -f dump1.sql
```
或者
```
export PGDATABASE=postgres 
```
```
 gs_dump -p port_number -f dump1.sql
```
环境变量： PGDATABASE



## 参数说明<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s6822518f650f4ad4ab67d1084cd8ffdd"></a>

通用参数：

-   -f, --file=FILENAME

    将输出发送至指定文件或目录。如果省略该参数，则使用标准输出。如果输出格式为（-F c/-F d/-F t）时，必须指定-f参数。如果-f的参数值含有目录，要求当前用户对该目录具有读写权限，并且不能指定已有目录。

-   -F, --format=c|d|t|p

    选择输出格式。格式如下：

    -   p|plain：输出一个文本SQL脚本文件（默认）。
    -   c|custom：输出一个自定义格式的归档，并且以目录形式输出，作为gs\_restore输入信息。该格式是最灵活的输出格式，因为能手动选择，而且能在恢复过程中将归档项重新排序。该格式默认状态下会被压缩。
    -   d|directory：该格式会创建一个目录，该目录包含两类文件，一类是目录文件，另一类是每个表和blob对象对应的数据文件。
    -   t|tar：输出一个tar格式的归档形式，作为gs\_restore输入信息。tar格式与目录格式兼容；tar格式归档形式在提取过程中会生成一个有效的目录格式归档形式。但是，tar格式不支持压缩且对于单独表有8GB的大小限制。此外，表数据项的相应排序在恢复过程中不能更改。


-   -v, --verbose

    指定verbose模式。该选项将导致gs\_dump向转储文件输出详细的对象注解和启动/停止次数，向标准错误流输出处理信息。

-   -V, --version

    打印gs\_dump版本，然后退出。

-   -Z, --compress=0-9

    指定使用的压缩比级别。

    取值范围：0\~9

    -   0表示无压缩。
    -   1表示压缩比最小，处理速度最快。
    -   9表示压缩比最大，处理速度最慢。

    针对自定义归档格式，该选项指定单个表数据片段的压缩，默认方式是以中等级别进行压缩。纯文本格式或tar归档格式目前不支持压缩。

-   --lock-wait-timeout=TIMEOUT

    请勿在转储刚开始时一直等待以获取共享表锁。如果无法在指定时间内锁定某个表，就选择失败。可以以任何符合SET statement\_timeout的格式指定超时时间。

-   -?, --help

    显示gs\_dump命令行参数帮助，然后退出。


转储参数：

-   -a, --data-only

    只输出数据，不输出模式（数据定义）。转储表数据、大对象和序列值。

-   -b, --blobs

    该参数为扩展预留接口，不建议使用。

-   -c, --clean

    在将创建数据库对象的指令输出到备份文件之前，先将清理（删除）数据库对象的指令输出到备份文件中。（如果目标数据库中没有任何对象，gs\_restore工具可能会输出一些提示性的错误信息）

    该选项只对文本格式有意义。针对归档格式，可以调用gs\_restore时指定选项。

-   -C, --create

    备份文件以创建数据库和连接到创建的数据库的命令开始。（如果命令脚本是这种方式执行，可以先指定任意数据库用于执行创建数据库的命令，数据不会恢复到指定的数据库中，而是恢复到创建的数据库中。）

    该选项只对文本格式有意义。针对归档格式，可以在调用gs\_restore时指定选项。

-   -E, --encoding=ENCODING

    以指定的字符集编码创建转储。默认情况下，以数据库编码创建转储。（得到相同结果的另一个办法是将环境变量“PGCLIENTENCODING”设置为所需的转储编码。）

-   -n, --schema=SCHEMA

    只转储与模式名称匹配的模式，此选项包括模式本身和所有它包含的对象。如果该选项没有指定，所有在目标数据库中的非系统模式将会被转储。写入多个-n选项来选择多个模式。此外，根据gsql的\\d命令所使用的相同规则，模式参数可被理解成一个pattern，所以多个模式也可以通过在该pattern中写入通配符来选择。使用通配符时，注意给pattern打引号，防止shell扩展通配符。

    ![](public_sys-resources/icon-note.png) **说明：**

    -   当-n已指定时，gs\_dump不会转储已选模式所附着的任何其他数据库对象。因此，无法保证某个指定模式的转储结果能够自行成功地储存到一个空数据库中。

    -   当-n指定时，非模式对象不会被转储。

    转储支持多个模式的转储。多次输入-n schemaname转储多个模式。

    例如：

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -n sch1 -n sch2
    ```

    在上面这个例子中，sch1和sch2会被转储。

-   -N, --exclude-schema=SCHEMA

    不转储任何与模式pattern匹配的模式。pattern将参照针对-n的相同规则来理解。可以通过输入多次-N，不转储与任何pattern匹配的模式。

    当同时输入-n和-N时，会转储与至少一个-n选项匹配、与-N选项不匹配的模式。如果有-N没有-n，则不转储常规转储中与-N匹配的模式。

    转储过程支持排除多个模式。

    在转储过程中，输入-N exclude schema name排除多个模式。

    例如：

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -N sch1 -N sch2
    ```

    在上面这个例子中，sch1和sch2在转储过程中会被排除。

-   -o, --oids

    转储每个表的对象标识符（OIDs），作为表的一部分数据。该选项用于应用以某种方式参照了OID列的情况。如果不是以上这种情况，请勿使用该选项。

-   -O, --no-owner

    不输出设置对象的归属这样的命令，以匹配原始数据库。默认情况下，gs\_dump会发出ALTER OWNER或SET SESSION AUTHORIZATION语句设置所创建的数据库对象的归属。如果脚本正在运行，该语句不会执行成功，除非是由系统管理员触发（或是拥有脚本中所有对象的同一个用户）。通过指定-O，编写一个任何用户都能存储的脚本，且该脚本会授予该用户拥有所有对象的权限。

    该选项只对文本格式有意义。针对归档格式，可以在调用gs\_restore时指定选项。

-   <a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_l35ed3d5a093e42ab8fc945dd3ca80ecd"></a>-s, --schema-only

    只转储对象定义（模式），而非数据。

-   -S, --sysadmin=NAME

    该参数为扩展预留接口，不建议使用。

-   -t, --table=TABLE

    指定转储的表（或视图、或序列、或外表）对象列表，可以使用多个-t选项来选择多个表，也可以使用通配符指定多个表对象。

    当使用通配符指定多个表对象时，注意给pattern打引号，防止shell扩展通配符。

    当使用-t时，-n和-N没有任何效应，这是因为由-t选择的表的转储不受那些选项的影响。

    ![](public_sys-resources/icon-note.png) **说明：**  
    -   -t参数选项个数必须小于等于100。

    -   如果-t参数选项个数大于100，建议使用参数--include-table-file来替换。

    -   当-t已指定时，gs\_dump不会转储已选表所附着的任何其他数据库对象。因此，无法保证某个指定表的转储结果能够自行成功地储存到一个空数据库中。 

    -   -t tablename只转储在默认搜索路径中可见的表。-t \*.tablename转储数据库下所有模式下的tablename表。-t schema.table转储特定模式中的表。 

    -   -t tablename不会导出表上的触发器信息。
    
    -  对于表名中包含大写字母的表，在使用-t参数指定导出时需对表名添加\"来导出。如对于表"abC"，导出需指定-t \"abC\"；如对于表schema."abC"，导出需指定-t schema.\"abC\"。  

     


    例如：

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -t schema1.table1 -t schema2.table2
    ```

    在上面这个例子中，schema1.table1和schema2.table2会被转储。

-   --include-table-file=FILENAME

    指定需要dump的表文件。

-   -T, --exclude-table=TABLE

    不转储的表（或视图、或序列、或外表）对象列表，可以使用多个-T选项来选择多个表，也可以使用通配符指定多个表对象。

    当同时输入-t和-T时，会转储在-t列表中，而不在-T列表中的表对象。

    例如：

    ```
    gs_dump -h host_name -p port_number postgres -f backup/bkp_shl2.sql -T table1 -T table2
    ```

    在上面这个例子中，table1和table2在转储过程中会被排除。

-   --exclude-table-file=FILENAME

    指定不需要dump的表文件。

    ![](public_sys-resources/icon-note.png) **说明：** 
    同--include-table-file，其内容格式如下：
    schema1.table1
    schema2.table2
    ......

- -x, --no-privileges|--no-acl

  防止转储访问权限（授权/撤销命令）。

- -q, --target

  指定导出兼容其他版本数据库的文本文件，目前支持v1和v5参数。v1参数用于导出v5数据库的数据为兼容v1的文本文件。v5参数用于导出v5数据库的数据为v5格式的文本文件，减少了导入v5时的可能的报错情况。

  在使用v1参数时，建议和--exclude-guc="enable\_cluster\_resize"、--exclude-function、--exclude-with等选项共用，否则导入到v1时可能报错。

-g --exclude-guc

  该参数为扩展预留接口，不建议使用。

- --exclude-function

  不导出函数和存储过程。

- --exclude-with

  导出的表定义，末尾不添加WITH\(orientation=row，compression=on）这样的描述。

-   --binary-upgrade

    该参数为扩展预留接口，不建议使用。

-   --binary-upgrade-usermap="USER1=USER2"

    该参数为扩展预留接口，不建议使用。

-   --column-inserts|--attribute-inserts

    以INSERT命令带列名（INSERT INTO表（列、…）值…）方式导出数据。这会导致恢复缓慢。但是由于该选项会针对每行生成一个独立分开的命令，所以在重新加载某行时出现的错误只会导致那行丢失，而非整个表内容。

-   --disable-dollar-quoting

    该选项将禁止在函数体前使用美元符号$，并强制使用SQL标准字符串语法对其进行引用。

-   --disable-triggers

    该参数为扩展预留接口，不建议使用。

-   --exclude-table-data=TABLE

    指定不转储任何匹配表pattern的表这方面的数据。依照针对-t的相同规则理解该pattern。

    可多次输入--exclude-table-data来排除匹配任何pattern的表。当用户需要特定表的定义但不需要其中的数据时，这个选项很有帮助。

    排除数据库中所有表的数据，参见[--schema-only](#zh-cn_topic_0237152335_zh-cn_topic_0059777770_l35ed3d5a093e42ab8fc945dd3ca80ecd)。

-   --inserts

    发出INSERT命令（而非COPY命令）转储数据。这会导致恢复缓慢。

    但是由于该选项会针对每行生成一个独立分开的命令，所以在重新加载某行时出现的错误只会导致那行丢失，而非整个表内容。注意：如果重排列顺序，可能会导致整个恢复失败。列顺序改变时，--column-inserts选项不受影响，虽然会更慢。

-   --no-publications

    不转储发布。

-   --no-security-labels

    该参数为扩展预留接口，不建议使用。

-   --no-subscriptions

    不转储订阅。

    ![](public_sys-resources/icon-note.png) **说明：**

    -   当不指定该选项时会转储订阅，但是转储订阅需要有管理员用户权限，所以如果是以普通用户执行gs_dump时，如果不指定该选项，会提示“WARNING: subscriptions not dumped because current user is not a superuser”。

-   --no-tablespaces

    不输出选择表空间的命令。使用该选项，无论默认表空间是哪个，在恢复过程中所有对象都会被创建。

    该选项只对文本格式有意义。针对归档格式，可以在调用gs\_restore时指定选项。

-   --no-unlogged-table-data

    该参数为扩展预留接口，不建议使用。

-   --non-lock-table

    该参数仅供软件间接口调用。

-   --include-alter-table

    转储表删除列。该选项会记录列的删除。

-   --quote-all-identifiers

    强制对所有标识符加引号。为了向后续版本迁移，且其中可能涉及引入额外关键词，在转储相应数据库时该选项会有帮助。

-   --section=SECTION

    指定已转储的名称区段（pre-data、data和post-data）。

-   --serializable-deferrable

    转储过程中使用可串行化事务，以确保所使用的快照与之后的数据库状态一致；要实现该操作需要在无异常状况的事务流中等待某个点，因为这样才能保证转储成功，避免引起其他事务出现serialization\_failure要重新再做。

    但是该选项对于灾难恢复没有益处。对于在原始数据库进行升级的时候，加载一个数据库的拷贝作为报告或其他只读加载共享的转储是有帮助的。没有这个选项，转储会反映一个与任何事务最终提交的序列化执行不一致的状态。

    如果当gs\_dump启动时，读写事务仍处于非活动状态，即便使用该选项也不会对其产生影响。如果读写事务处于活动状态，转储的开始时间可能会延迟一段不确定的时间。

-   --use-set-session-authorization

    输出符合SQL标准的SET SESSION AUTHORIZATION命令而不是ALTER OWNER命令来确定对象所有权。这样令转储更加符合标准，但是如果转储文件中的对象的历史有些问题，那么可能不能正确恢复。并且，使用SET SESSION AUTHORIZATION的转储需要数据库系统管理员的权限才能转储成功，而ALTER OWNER需要的权限则低得多。

-   --with-encryption=AES128

    指定转储数据需用AES128进行加密。

- --with-key=KEY

  AES128密钥长度规则如下：

  - 密钥长度为8~16字符。
  - 至少包含大写字母（A-Z）、小写字母（a-z）、数字（0-9）、非字母数字字符（限定为~!@#$%^&*()-_=+\|[]{};:,<.>/?）四类字符中的三类字符。

  ![](public_sys-resources/icon-note.png) **说明：**  

  - 使用gs_dump工具进行加密导出时，仅支持plain格式导出。通过-F plain导出的数据，需要通过gsql工具进行导入，且如果以加密方式导入，在通过gsql导入时，需要指定--with-key参数。

  - 不支持加密导出存储过程和函数。

-   --with-salt=RANDVALUES

    gs_dumpall使用此参数传递随机值。

-   --include-Extension

    在转储中包含扩展。

-   --include-depend-objs

    备份结果包含依赖于指定对象的对象信息。该参数需要同-t/--include-table-file参数关联使用才会生效。

-   --exclude-self

    备份结果不包含指定对象自身的信息。该参数需要同-t/--include-table-file参数关联使用才会生效。

-   --pipeline

    使用管道传输密码，禁止在终端使用。

-   --dont-overwrite-file

    文本、tar以及自定义格式情况下会重写现有文件。这对目录格式不适用。

    例如：

    设想这样一种情景，即当前目录下backup.sql已存在。如果在输入命令中输入-f backup.sql选项时，当前目录恰好也生成backup.sql，文件就会被重写。

    如果备份文件已存在，且输入--dont-overwrite-file选项，则会报告附带‘转储文件已经存在’信息的错误。

    ```
    gs_dump -p port_number postgres -f backup.sql -F plain --dont-overwrite-file
    ```


![](public_sys-resources/icon-note.png) **说明：**  

-   -s/--schema-only和-a/--data-only不能同时使用。  

-   -c/--clean和-a/--data-only不能同时使用。  

-   --inserts/--column-inserts和-o/--oids不能同时使用，因为INSERT命令不能设置OIDS。  

-   --role和--rolepassword必须一起使用。  

-   --binary-upgrade-usermap和--binary-upgrade必须一起使用。  

-   --include-depend-objs/--exclude-self需要同-t/--include-table-file参数关联使用才会生效。  

-   --exclude-self必须同--include-depend-objs一起使用。  

连接参数：

-   -h, --host=HOSTNAME

    指定主机名称。如果数值以斜杠开头，则被用作到Unix域套接字的路径。缺省从PGHOST环境变量中获取（如果已设置），否则，尝试一个Unix域套接字连接。

    该参数只针对openGauss外，对openGauss内本机只能用127.0.0.1。

    例如：主机名

    环境变量：PGHOST

-   -p, --port=PORT

    指定主机端口。在开启线程池情况下，建议使用 pooler port，即主机端口+1。

    环境变量：PGPORT

-   -U, --username=NAME

    指定所连接主机的用户名。

    不指定连接主机的用户名时，用户默认系统管理员。

    环境变量：PGUSER

-   -w, --no-password

    不出现输入密码提示。如果主机要求密码认证并且密码没有通过其它形式给出，则连接尝试将会失败。 该选项在批量工作和不存在用户输入密码的脚本中很有帮助。

-   -W, --password=PASSWORD

    指定用户连接的密码。如果主机的认证策略是trust，则不会对系统管理员进行密码验证，即无需输入-W选项；如果没有-W选项，并且不是系统管理员，“Dump Restore工具”会提示用户输入密码。

-   --role=ROLENAME

    指定创建转储使用的角色名。选择该选项，会使gs\_dump连接数据库后，发起一个SET ROLE角色名命令。当所授权用户（由-U指定）没有gs\_dump要求的权限时，该选项会起到作用，即切换到具备相应权限的角色。某些安装操作规定不允许直接以超系统管理员身份登录，而使用该选项能够在不违反该规定的情况下完成转储。

-   --rolepassword=ROLEPASSWORD

    指定角色名的密码。


## 说明<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s7390a5e2be45435687f910284792c8c6"></a>

如果openGauss有任何本地数据要添加到template1数据库，请谨慎将gs\_dump的输出恢复到一个真正的空数据库中，否则可能会因为被添加对象的定义被复制，出现错误。要创建一个无本地添加的空数据库，需从template0而非template1复制，例如：

```
CREATE DATABASE foo WITH TEMPLATE template0;
```

tar归档形式的文件大小不得超过8GB（tar文件格式的固有限制）。tar文档整体大小和任何其他输出格式没有限制，操作系统可能对此有要求。

由gs\_dump生成的转储文件不包含优化程序用来做执行计划决定的统计数据。因此，最好从某转储文件恢复之后运行ANALYZE以确保最佳效果。转储文件不包含任何ALTER DATABASE…SET命令，这些设置由gs\_dumpall转储，还有数据库用户和其他完成安装设置。

## 示例<a name="zh-cn_topic_0237152335_s969fde25c47f45ed897e29d208d57649"></a>

使用gs\_dump转储数据库为SQL文本文件或其它格式的操作，如下所示。

示例中“Bigdata@123”表示数据库用户密码；“backup/MPPDB\_backup.sql”表示导出的文件，其中backup表示相对于当前目录的相对目录；“37300”表示数据库服务器端口；“postgres”表示要访问的数据库名。

![](public_sys-resources/icon-note.png) **说明：** 
导出操作时，请确保该目录存在并且当前的操作系统用户对其具有读写权限。

示例1：执行gs\_dump，导出postgres数据库全量信息，导出的MPPDB\_backup.sql文件格式为纯文本格式。

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup.sql -p 37300 postgres -F p
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: The total objects number is 356.
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: [100.00%] 356 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 09:49:17]: total time: 1274  ms
```

使用gsql程序从纯文本导出文件中导入数据。

示例2：执行gs\_dump，导出postgres数据库全量信息，导出的MPPDB\_backup.tar文件格式为tar格式。

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup.tar -p 37300 postgres -F t
gs_dump[port='37300'][postgres][2018-06-27 10:02:24]: The total objects number is 1369.
gs_dump[port='37300'][postgres][2018-06-27 10:02:53]: [100.00%] 1369 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:02:53]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:02:53]: total time: 50086  ms
```

示例3：执行gs\_dump，导出postgres数据库全量信息，导出的MPPDB\_backup.dmp文件格式为自定义归档格式。

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup.dmp -p 37300 postgres -F c
gs_dump[port='37300'][postgres][2018-06-27 10:05:40]: The total objects number is 1369.
gs_dump[port='37300'][postgres][2018-06-27 10:06:03]: [100.00%] 1369 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:06:03]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:06:03]: total time: 36620  ms
```

示例4：执行gs\_dump，导出postgres数据库全量信息，导出的MPPDB\_backup文件格式为目录格式。

```
gs_dump -U omm -W Bigdata@123 -f backup/MPPDB_backup -p 37300  postgres -F d
gs_dump[port='37300'][postgres][2018-06-27 10:16:04]: The total objects number is 1369.
gs_dump[port='37300'][postgres][2018-06-27 10:16:23]: [100.00%] 1369 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:16:23]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:16:23]: total time: 33977  ms 
```

示例5：执行gs\_dump，导出postgres数据库信息，但不导出/home/MPPDB\_temp.sql中指定的表信息。导出的MPPDB\_backup.sql文件格式为纯文本格式。

```
gs_dump -U omm -W Bigdata@123 -p 37300 postgres --exclude-table-file=/home/MPPDB_temp.sql -f backup/MPPDB_backup.sql
gs_dump[port='37300'][postgres][2018-06-27 10:37:01]: The total objects number is 1367.
gs_dump[port='37300'][postgres][2018-06-27 10:37:22]: [100.00%] 1367 objects have been dumped.
gs_dump[port='37300'][postgres][2018-06-27 10:37:22]: dump database postgres successfully
gs_dump[port='37300'][postgres][2018-06-27 10:37:22]: total time: 37017  ms
```

示例6：执行gs\_dump，仅导出依赖于指定表testtable的视图信息。然后创建新的testtable表，再恢复依赖其上的视图。

-   备份仅依赖于testtable的视图。

    ```
    gs_dump -s -p 37300 postgres -t PUBLIC.testtable --include-depend-objs --exclude-self -f backup/MPPDB_backup.sql -F p
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: The total objects number is 331.
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: [100.00%] 331 objects have been dumped.
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: dump database postgres successfully
    gs_dump[port='37300'][postgres][2018-06-15 14:12:54]: total time: 327  ms
    ```

-   修改testtable名称。

    ```
    gsql -p 37300 postgres -r -c "ALTER TABLE PUBLIC.testtable RENAME TO testtable_bak;"
    ```

-   创建新的testtable表。

    ```
    CREATE TABLE PUBLIC.testtable(a int, b int, c int);
    ```

-   还原依赖于testtable的视图。

    ```
    gsql -p 37300 postgres -r -f backup/MPPDB_backup.sql
    ```


## 相关命令<a name="zh-cn_topic_0237152335_zh-cn_topic_0059777770_s04aec05b522242268c264d0964818765"></a>

[gs\_dumpall](gs_dumpall.md)，[gs\_restore](gs_restore.md)
