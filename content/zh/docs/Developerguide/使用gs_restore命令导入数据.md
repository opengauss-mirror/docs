# 使用gs\_restore命令导入数据<a name="ZH-CN_TOPIC_0000001208139521"></a>

## 操作场景<a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_section17330121375310"></a>

gs\_restore是openGauss数据库提供的与gs\_dump配套的导入工具。通过该工具，可将gs\_dump导出的文件导入至数据库。gs\_restore支持导入的文件格式包含自定义归档格式、目录归档格式和tar归档格式。

gs\_restore具备如下两种功能。

-   导入至数据库

    如果指定了数据库，则数据将被导入到指定的数据库中。其中，并行导入必须指定连接数据库的密码。导入时生成列会自动更新，并像普通列一样保存。

-   导入至脚本文件

    如果未指定导入数据库，则创建包含重建数据库所需的SQL语句脚本，并将其写入至文件或者标准输出。该脚本文件等效于gs\_dump导出的纯文本格式文件。


gs\_restore工具在导入时，允许用户选择需要导入的内容，并支持在数据导入前对等待导入的内容进行排序。

## 操作步骤<a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_section3467125218532"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>gs\_restore默认是以追加的方式进行数据导入。为避免多次导入造成数据异常，在进行导入时，建议选择使用“-c”和“-e”参数。“-c”表示在重新创建数据库对象前，清理（删除）已存在于将要还原的数据库中的数据库对象；“-e”表示当发送SQL语句到数据库时如果出现错误请退出，默认状态下会继续，且在导入后会显示一系列错误信息。

1.  以操作系统用户omm登录数据库主节点。
2.  使用gs\_restore命令，从postgres整个数据库内容的导出文件中，将数据库的所有对象的定义导入到backupdb。

    ```
    gs_restore -U jack /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb -s -e -c
    Password:
    ```

    **表 1**  常用参数说明

    <a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_table1781122816253"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row10837281257"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p48382816258"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p48382816258"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p48382816258"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="43.33%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18332812257"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18332812257"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18332812257"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p583122816257"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p583122816257"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p583122816257"></a>举例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row1483528152520"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p3830287252"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p3830287252"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p3830287252"></a>-U</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p8232111218592"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p8232111218592"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p8232111218592"></a>连接数据库的用户名。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1583152842510"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1583152842510"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1583152842510"></a>-U jack</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row199295855317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p89920588539"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p89920588539"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p89920588539"></a>-W</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p69431335210"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p69431335210"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p69431335210"></a>指定用户连接的密码。</p>
    <a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_ul194074341627"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_ul194074341627"></a><ul id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_ul194074341627"><li>如果主机的认证策略是trust，则不会对数据库管理员进行密码验证，即无需输入-W选项；</li><li>如果没有-W选项，并且不是数据库管理员，会提示用户输入密码。</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1898043113581"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1898043113581"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1898043113581"></a>-W abcd@123</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row4650191445011"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p9650161425019"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p9650161425019"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p9650161425019"></a>-d</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1565110140508"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1565110140508"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1565110140508"></a>连接数据库dbname，并直接将数据导入到该数据库中。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p7651201455010"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p7651201455010"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p7651201455010"></a>-d backupdb</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row9411195215519"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p84119521250"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p84119521250"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p84119521250"></a>-p</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p14838631464"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p14838631464"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p14838631464"></a>指定服务器所侦听的TCP端口或本地Unix域套接字后缀，以确保连接。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p341117521853"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p341117521853"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p341117521853"></a>-p <span id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_text986814282459"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_text986814282459"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_text986814282459"></a>8000</span></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row1362511481379"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p195642019125512"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p195642019125512"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p195642019125512"></a>-e</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18979244175512"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18979244175512"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18979244175512"></a>当发送SQL语句到数据库时如果出现错误，则退出。默认状态下会忽略错误任务并继续执行导入，且在导入后会显示一系列错误信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p12782147122820"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p12782147122820"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p12782147122820"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row057817297550"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1557922912557"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1557922912557"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1557922912557"></a>-c</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1762611020568"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1762611020568"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1762611020568"></a>在重新创建数据库对象前，清理（删除）已存在于将要导入的数据库中的数据库对象。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p55791029105515"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p55791029105515"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p55791029105515"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_row1339718574716"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18625164815715"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18625164815715"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p18625164815715"></a>-s</p>
    </td>
    <td class="cellrowborder" valign="top" width="43.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1962511481717"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1962511481717"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1962511481717"></a>只导入模式定义，不导入数据。当前的序列值也不会被导入。</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1662514481776"><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1662514481776"></a><a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_p1662514481776"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

    其他参数说明请参见《工具参考》中“服务端工具 \> gs\_restore”章节。


## 示例<a name="zh-cn_topic_0283137171_zh-cn_topic_0237121137_section19717152710548"></a>

示例一：执行gs\_restore，导入指定MPPDB\_backup.dmp文件（自定义归档格式）中postgres数据库的数据和对象定义。

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb
Password:
gs_restore[2017-07-21 19:16:26]: restore operation successful
gs_restore: total time: 13053  ms
```

示例二：执行gs\_restore，导入指定MPPDB\_backup.tar文件（tar归档格式）中postgres数据库的数据和对象定义。

```
gs_restore backup/MPPDB_backup.tar -p 8000 -d backupdb 
gs_restore[2017-07-21 19:21:32]: restore operation successful
gs_restore[2017-07-21 19:21:32]: total time: 21203  ms
```

示例三：执行gs\_restore，导入指定MPPDB\_backup目录文件（目录归档格式）中postgres数据库的数据和对象定义。

```
gs_restore backup/MPPDB_backup -p 8000 -d backupdb
gs_restore[2017-07-21 19:26:46]: restore operation successful
gs_restore[2017-07-21 19:26:46]: total time: 21003  ms
```

示例四：执行gs\_restore，将postgres数据库的所有对象的定义导入至backupdb数据库。导入前，数据库存在完整的定义和数据，导入后，backupdb数据库只存在所有对象定义，表没有数据。

```
gs_restore /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb -s -e -c 
Password:
gs_restore[2017-07-21 19:46:27]: restore operation successful
gs_restore[2017-07-21 19:46:27]: total time: 32993  ms
```

示例五：执行gs\_restore，导入MPPDB\_backup.dmp文件中PUBLIC模式的所有定义和数据。在导入时会先删除已经存在的对象，如果原对象存在跨模式的依赖则需手工强制干预。

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -c -n PUBLIC
gs_restore: [archiver (db)] Error while PROCESSING TOC:
gs_restore: [archiver (db)] Error from TOC entry 313; 1259 337399 TABLE table1 gaussdba
gs_restore: [archiver (db)] could not execute query: ERROR:  cannot drop table table1 because other objects depend on it
DETAIL:  view t1.v1 depends on table table1
HINT:  Use DROP ... CASCADE to drop the dependent objects too.
Command was: DROP TABLE public.table1;
```

手工删除依赖，导入完成后再重新创建。

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -c -n PUBLIC
gs_restore[2017-07-21 19:52:26]: restore operation successful
gs_restore[2017-07-21 19:52:26]: total time: 2203  ms
```

示例六：执行gs\_restore，导入MPPDB\_backup.dmp文件中hr模式下表hr.staffs的定义。在导入之前，hr.staffs表不存在，需要确保存在hr的schema。

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -c -s -n hr -t staffs
gs_restore[2017-07-21 19:56:29]: restore operation successful
gs_restore[2017-07-21 19:56:29]: total time: 21000  ms
```

示例七：执行gs\_restore，导入MPPDB\_backup.dmp文件中hr模式下表hr.staffs的数据。在导入之前，hr.staffs表不存在数据，需要确保存在hr的schema。

```
gs_restore backup/MPPDB_backup.dmp -p 8000 -d backupdb -e -a -n hr -t staffs
gs_restore[2017-07-21 20:12:32]: restore operation successful
gs_restore[2017-07-21 20:12:32]: total time: 20203  ms
```

示例八：执行gs\_restore，导入指定表hr.staffs的定义。在导入之前，hr.staffs表的数据是存在的。

```
human_resource=# select * from hr.staffs;
 staff_id | first_name  |  last_name  |  email   |    phone_number    |      hire_date      | employment_id |  salary  | commission_pct | manager_id | section_id 
----------+-------------+-------------+----------+--------------------+---------------------+---------------+----------+----------------+------------+------------
      200 | Jennifer    | Whalen      | JWHALEN  | 515.123.4444       | 1987-09-17 00:00:00 | AD_ASST       |  4400.00 |                |        101 |         10
      201 | Michael     | Hartstein   | MHARTSTE | 515.123.5555       | 1996-02-17 00:00:00 | MK_MAN        | 13000.00 |                |        100 |         20

gsql -d human_resource -p 8000

gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

human_resource=# drop table hr.staffs CASCADE;
NOTICE:  drop cascades to view hr.staff_details_view
DROP TABLE

gs_restore /home/omm/backup/MPPDB_backup.tar -p 8000 -d human_resource -n hr -t staffs -s -e 
Password:
restore operation successful
total time: 904  ms

human_resource=# select * from hr.staffs;
 staff_id | first_name | last_name | email | phone_number | hire_date | employment_id | salary | commission_pct | manager_id | section_id 
----------+------------+-----------+-------+--------------+-----------+---------------+--------+----------------+------------+------------
(0 rows)
```

示例九：执行gs\_restore，导入staffs和areas两个指定表的定义和数据。在导入之前，staffs和areas表不存在。

```
human_resource=# \d
                                 List of relations
 Schema |        Name        | Type  |  Owner   |             Storage              
--------+--------------------+-------+----------+----------------------------------
 hr     | employment_history | table | omm | {orientation=row,compression=no}
 hr     | employments        | table | omm | {orientation=row,compression=no}
 hr     | places             | table | omm | {orientation=row,compression=no}
 hr     | sections           | table | omm | {orientation=row,compression=no}
 hr     | states             | table | omm | {orientation=row,compression=no}
(5 rows)

gs_restore /home/gaussdb/backup/MPPDB_backup.tar -p 8000 -d human_resource -n hr -t staffs -n hr -t areas 
Password:
restore operation successful
total time: 724  ms

human_resource=# \d
                                 List of relations
 Schema |        Name        | Type  |  Owner   |             Storage              
--------+--------------------+-------+----------+----------------------------------
 hr     | areas              | table | omm | {orientation=row,compression=no}
 hr     | employment_history | table | omm | {orientation=row,compression=no}
 hr     | employments        | table | omm | {orientation=row,compression=no}
 hr     | places             | table | omm | {orientation=row,compression=no}
 hr     | sections           | table | omm | {orientation=row,compression=no}
 hr     | staffs             | table | omm | {orientation=row,compression=no}
 hr     | states             | table | omm | {orientation=row,compression=no}
(7 rows)

human_resource=# select * from hr.areas;
 area_id |       area_name        
---------+------------------------
       4 | Middle East and Africa
       1 | Europe
       2 | Americas
       3 | Asia
(4 rows)
```

示例十：执行gs\_restore，导入hr的模式，包含模式下的所有对象定义和数据。

```
gs_restore /home/omm/backup/MPPDB_backup1.dmp -p 8000 -d backupdb -n hr -e
Password:
restore operation successful
total time: 702  ms
```

示例十一：执行gs\_restore，同时导入hr和hr1两个模式，仅导入模式下的所有对象定义。

```
gs_restore /home/omm/backup/MPPDB_backup2.dmp -p 8000 -d backupdb -n hr -n hr1 -s
Password:
restore operation successful
total time: 665  ms
```

示例十二：执行gs\_restore，将human\_resource数据库导出文件导入至backupdb数据库中。

```
openGauss=# create database backupdb;
CREATE DATABASE

gs_restore /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb
restore operation successful
total time: 23472  ms

gsql -d backupdb -p 8000 -r

gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

backupdb=# select * from hr.areas;
 area_id |       area_name        
---------+------------------------
       4 | Middle East and Africa
       1 | Europe
       2 | Americas
       3 | Asia
(4 rows)
```

示例十三：用户user1不具备将导出文件中数据导入至数据库backupdb的权限，而角色role1具备该权限，要实现将文件数据导入数据库backupdb，可以在导出命令中设置--role角色为role1，使用role1的权限，完成导出目的。

```
human_resource=# CREATE USER user1 IDENTIFIED BY "1234@abc";
CREATE ROLE role1 with SYSADMIN IDENTIFIED BY "abc@1234";
gs_restore -U user1 /home/omm/backup/MPPDB_backup.tar -p 8000 -d backupdb --role role1 --rolepassword abc@1234
Password:
restore operation successful
total time: 554  ms

gsql -d backupdb -p 8000 -r 

gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

backupdb=# select * from hr.areas;
 area_id |       area_name        
---------+------------------------
       4 | Middle East and Africa
       1 | Europe
       2 | Americas
       3 | Asia
(4 rows)
```

