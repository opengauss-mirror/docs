# Creating a Resource Pool<a name="EN-US_TOPIC_0000001193874455"></a>

## Background<a name="section4704103619115"></a>

openGauss creates resource pools to divide host resources. After resource load management is enabled, the default resource pool alone is insufficient to address the resource load management requirements of services. Therefore, new resource pools must be used to reallocate system resources for granular control purposes.  [Table 1](#table1223985366)  describes the features of a common resource pool.

**Table  1**  Features of a common resource pool

<a name="table1223985366"></a>
<table><thead align="left"><tr id="row1423917515618"><th class="cellrowborder" valign="top" width="30%" id="mcps1.2.3.1.1"><p id="p62391954610"><a name="p62391954610"></a><a name="p62391954610"></a>Resource Pool</p>
</th>
<th class="cellrowborder" valign="top" width="70%" id="mcps1.2.3.1.2"><p id="p1823935866"><a name="p1823935866"></a><a name="p1823935866"></a>Feature</p>
</th>
</tr>
</thead>
<tbody><tr id="row8239651361"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.3.1.1 "><p id="p1142495621714"><a name="p1142495621714"></a><a name="p1142495621714"></a>Common resource pool (common scenario)</p>
</td>
<td class="cellrowborder" valign="top" width="70%" headers="mcps1.2.3.1.2 "><a name="ul735611411475"></a><a name="ul735611411475"></a><ul id="ul735611411475"><li>A common resource pool is associated with a Workload Cgroup, and its group resource pool must not be associated with the corresponding sub-Class Cgroup. For example, to create a service resource pool and associate it with <strong id="b165931815185319"><a name="b165931815185319"></a><a name="b165931815185319"></a>class1:wd</strong>, ensure that its group resource pool has not been associated with <strong id="b7593191514532"><a name="b7593191514532"></a><a name="b7593191514532"></a>class1</strong>.</li><li>The default value of <strong id="b196672310534"><a name="b196672310534"></a><a name="b196672310534"></a>mem_percent</strong> is <strong id="b1266723145314"><a name="b1266723145314"></a><a name="b1266723145314"></a>0%</strong>. The sum of <strong id="b56692312536"><a name="b56692312536"></a><a name="b56692312536"></a>mem_percent</strong> for all common resource groups under the same group resource pool can be greater than or equal to 100%.</li></ul>
</td>
</tr>
</tbody>
</table>

After resource load management is enabled, the system automatically creates  **default\_pool**. If no resource pool is specified for a session or user, they will be automatically associated with  **default\_pool**. By default,  **default\_pool**  is associated with the  **DefaultClass:Medium**  Cgroup and does not limit the number of concurrent services.  [Table 2](#en-us_topic_0066854608_table57723085173126)  describes the attributes of  **default\_pool**.

**Table  2**  default\_pool attributes

<a name="en-us_topic_0066854608_table57723085173126"></a>
<table><thead align="left"><tr id="en-us_topic_0066854608_row49357524173126"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.2.4.1.1"><p id="en-us_topic_0066854608_p38536494173126"><a name="en-us_topic_0066854608_p38536494173126"></a><a name="en-us_topic_0066854608_p38536494173126"></a>Attribute</p>
</th>
<th class="cellrowborder" valign="top" width="28.44715528447155%" id="mcps1.2.4.1.2"><p id="en-us_topic_0066854608_p34448329173126"><a name="en-us_topic_0066854608_p34448329173126"></a><a name="en-us_topic_0066854608_p34448329173126"></a>Value</p>
</th>
<th class="cellrowborder" valign="top" width="45.175482451754824%" id="mcps1.2.4.1.3"><p id="en-us_topic_0066854608_p38851277173126"><a name="en-us_topic_0066854608_p38851277173126"></a><a name="en-us_topic_0066854608_p38851277173126"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0066854608_row59945696173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p23763245173126"><a name="en-us_topic_0066854608_p23763245173126"></a><a name="en-us_topic_0066854608_p23763245173126"></a>respool_name</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p45774682173126"><a name="en-us_topic_0066854608_p45774682173126"></a><a name="en-us_topic_0066854608_p45774682173126"></a>default_pool</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p16761743173126"><a name="en-us_topic_0066854608_p16761743173126"></a><a name="en-us_topic_0066854608_p16761743173126"></a>Name of the resource pool</p>
</td>
</tr>
<tr id="en-us_topic_0066854608_row16637965173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p5497890173126"><a name="en-us_topic_0066854608_p5497890173126"></a><a name="en-us_topic_0066854608_p5497890173126"></a>mem_percent</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p42675923173126"><a name="en-us_topic_0066854608_p42675923173126"></a><a name="en-us_topic_0066854608_p42675923173126"></a>100</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p34197770173126"><a name="en-us_topic_0066854608_p34197770173126"></a><a name="en-us_topic_0066854608_p34197770173126"></a>Maximum percentage of used memory</p>
</td>
</tr>
<tr id="en-us_topic_0066854608_row39344474173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p32785810173126"><a name="en-us_topic_0066854608_p32785810173126"></a><a name="en-us_topic_0066854608_p32785810173126"></a>cpu_affinity</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p38404930173126"><a name="en-us_topic_0066854608_p38404930173126"></a><a name="en-us_topic_0066854608_p38404930173126"></a>–1</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p23791635173126"><a name="en-us_topic_0066854608_p23791635173126"></a><a name="en-us_topic_0066854608_p23791635173126"></a>CPU affinity (reserved)</p>
</td>
</tr>
<tr id="en-us_topic_0066854608_row12798127173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p30015380173126"><a name="en-us_topic_0066854608_p30015380173126"></a><a name="en-us_topic_0066854608_p30015380173126"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p15326701173126"><a name="en-us_topic_0066854608_p15326701173126"></a><a name="en-us_topic_0066854608_p15326701173126"></a>DefaultClass:Medium</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p33503267173126"><a name="en-us_topic_0066854608_p33503267173126"></a><a name="en-us_topic_0066854608_p33503267173126"></a>Cgroup associated with the resource pool</p>
</td>
</tr>
<tr id="en-us_topic_0066854608_row33093948173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p63364103173126"><a name="en-us_topic_0066854608_p63364103173126"></a><a name="en-us_topic_0066854608_p63364103173126"></a>active_statements</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p32218723173126"><a name="en-us_topic_0066854608_p32218723173126"></a><a name="en-us_topic_0066854608_p32218723173126"></a>–1</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p59579767173126"><a name="en-us_topic_0066854608_p59579767173126"></a><a name="en-us_topic_0066854608_p59579767173126"></a>Maximum number of concurrent queries allowed by the resource pool. The value **-1** indicates that the maximum number of concurrent queries cannot exceed INT32_MAX.</p>
</td>
</tr>
<tr id="en-us_topic_0066854608_row66455862173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p14215762173126"><a name="en-us_topic_0066854608_p14215762173126"></a><a name="en-us_topic_0066854608_p14215762173126"></a>max_dop</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p10626107173126"><a name="en-us_topic_0066854608_p10626107173126"></a><a name="en-us_topic_0066854608_p10626107173126"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p55408344173126"><a name="en-us_topic_0066854608_p55408344173126"></a><a name="en-us_topic_0066854608_p55408344173126"></a>Concurrency level of execution operators after the SMP is enabled (reserved)</p>
</td>
</tr>
<tr id="en-us_topic_0066854608_row28913054173126"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0066854608_p60256037173126"><a name="en-us_topic_0066854608_p60256037173126"></a><a name="en-us_topic_0066854608_p60256037173126"></a>memory_limit</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0066854608_p48900820173126"><a name="en-us_topic_0066854608_p48900820173126"></a><a name="en-us_topic_0066854608_p48900820173126"></a>8GB</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0066854608_p1543508173126"><a name="en-us_topic_0066854608_p1543508173126"></a><a name="en-us_topic_0066854608_p1543508173126"></a>Upper memory usage limit (reserved)</p>
</td>
</tr>
<tr id="row2051142017312"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p7512142013117"><a name="p7512142013117"></a><a name="p7512142013117"></a>parentid</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p551212207317"><a name="p551212207317"></a><a name="p551212207317"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p651217201315"><a name="p651217201315"></a><a name="p651217201315"></a>OID of the parent resource pool</p>
</td>
</tr>
<tr id="row688518003219"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p788516019324"><a name="p788516019324"></a><a name="p788516019324"></a>io_limits</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p17885150133211"><a name="p17885150133211"></a><a name="p17885150133211"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p2268117153212"><a name="p2268117153212"></a><a name="p2268117153212"></a>Upper limit of IOPS. It is counted by ones for column storage and by 10 thousands for row storage. The value **0** indicates that the maximum number of concurrent queries cannot exceed INT32_MAX.</p>
</td>
</tr>
<tr id="row112023317329"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p41211633153214"><a name="p41211633153214"></a><a name="p41211633153214"></a>io_priority</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p3121733103218"><a name="p3121733103218"></a><a name="p3121733103218"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p127130562321"><a name="p127130562321"></a><a name="p127130562321"></a>I/O priority set for jobs that consume many I/O resources. It takes effect when the I/O usage reaches 90%. <strong id="b1395844917458"><a name="b1395844917458"></a><a name="b1395844917458"></a>None</strong> indicates there is no control.</p>
</td>
</tr>
<tr id="row1982461353019"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p18253131302"><a name="p18253131302"></a><a name="p18253131302"></a>nodegroup</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p882521311305"><a name="p882521311305"></a><a name="p882521311305"></a>installation</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p1582641383018"><a name="p1582641383018"></a><a name="p1582641383018"></a>Name of the logical cluster to which the resource pool belongs. This parameter is invalid in a standalone system.</p>
</td>
</tr>
<tr id="row490512216308"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p79052022113010"><a name="p79052022113010"></a><a name="p79052022113010"></a>is_foreign</p>
</td>
<td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p7905102214309"><a name="p7905102214309"></a><a name="p7905102214309"></a>f</p>
</td>
<td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p15905022123018"><a name="p15905022123018"></a><a name="p15905022123018"></a>Specifies that the resource pool is not used for users outside the logical cluster. This parameter is invalid in a standalone system.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**default\_pool**  cannot be modified in openGauss.

## Prerequisites<a name="section17352165513395"></a>

You are familiar with the  [CREATE RESOURCE POOL](create-resource-pool.md),  [ALTER RESOURCE POOL](alter-resource-pool.md), and  [DROP RESOURCE POOL](drop-resource-pool.md)syntax.

## **Procedure** <a name="en-us_topic_0066854608_section16606579202019"></a>

**Creating a resource pool**

1.  Perform the steps in  [Using gsql to Connect to a Database](using-gsql-to-connect-to-a-database.md).

1.  Create a group resource pool and associate it with the specified sub-Class Cgroup. In the following example, the group resource pool named  **resource\_pool\_a**  is associated with the  **class\_a**  Cgroup.

    ```
    openGauss=# CREATE RESOURCE POOL resource_pool_a WITH (control_group='class_a');
    openGauss=# CREATE RESOURCE POOL resource_pool_b WITH (control_group='class_b');
    CREATE RESOURCE POOL
    ```


1.  Create a service resource pool and associate it with the specified Workload Cgroup. In the following example, the service resource pool named  **resource\_pool\_a1**  is associated with the  **workload\_a1**  Cgroup.

    ```
    openGauss=# CREATE RESOURCE POOL resource_pool_a1 WITH (control_group='class_a:workload_a1');
    openGauss=# CREATE RESOURCE POOL resource_pool_a2 WITH (control_group='class_a:workload_a2');
    openGauss=# CREATE RESOURCE POOL resource_pool_b1 WITH (control_group='class_b:workload_b1');
    openGauss=# CREATE RESOURCE POOL resource_pool_b2 WITH (control_group='class_b:workload_b2');
    CREATE RESOURCE POOL
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   If you do not specify an associated Cgroup when creating a resource pool, the resource pool will be associated with the default Cgroup, which is the Timeshare Cgroup  **Medium**  under the  **DefaultClass**  Cgroup.
    >-   The value of  **control\_group**  is case-sensitive and must be contained in single quotation marks \(''\).
    >-   If a database user specifies the Timeshare string \(**Rush**,  **High**,  **Medium**, or  **Low**\) in the syntax, for example,  **control\_group**  is set to  **High**, the resource pool will be associated with the  **High**  Timeshare Cgroup under  **DefaultClass**.
    >-   **control\_group**  allows you to create a Workload Cgroup, for example,  **class1:wd**  whose Cgroup level can also be appended, such as  **class1:wd:2**. The Cgroup level must be within 1 to 10, but it is not used for Cgroup differentiation. In earlier versions, you can create Workload Cgroups with the same name and differentiate them by their levels. In the latest version, Cgroup names must be unique. If you have created duplicate Workload Cgroups in an earlier version, delete them to avoid confusion.


**Managing resource pools**

Modify resource pool attributes. In the following example, the Cgroup associated with the resource pool  **resource\_pool\_a2**  is changed to  **class\_a:workload\_a1**  \(assuming that  **class\_a:workload\_a1**  is not associated with any other resource pools\).

```
openGauss=# ALTER RESOURCE POOL resource_pool_a2 WITH (control_group="class_a:workload_a1");
ALTER RESOURCE POOL
```

**Deleting a resource pool**

Delete a resource pool. For example, run the following command to delete the resource pool  **resource\_pool\_a2**:

```
openGauss=# DROP RESOURCE POOL resource_pool_a2;
DROP RESOURCE POOL
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The resource pool cannot be deleted if it is associated with a role.
>-   In a multi-tenant scenario, deleting a group resource pool also deletes the related service resource pools. A resource pool can be deleted only when it is not associated with any users.

## Viewing Resource Pool Information<a name="en-us_topic_0066854608_section63579270173658"></a>

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   Do not use the INSERT, UPDATE, DELETE, and TRUNCATE statements in the  **pg\_resource\_pool**  system catalog that manages resource load.
>-   Do not modify the  **memory\_limit**  and  **cpu\_affinity**  attributes of a resource pool.

-   Run the following command to view the information of all the resource pools of the current cluster:

    ```
    openGauss=# SELECT * FROM PG_RESOURCE_POOL;
    ```

    ```
       respool_name   | mem_percent | cpu_affinity |    control_group    | active_statements | max_dop | memory_limit | parentid | io_limits | io_priority |  nodegroup   | is_foreign  | max_worker
    ------------------+-------------+--------------+---------------------+-------------------+---------+--------------+----------+-----------+--------------+--------------+------------
     default_pool     |         100 |           -1 | DefaultClass:Medium |                -1 |       1 | 8GB          |        0 |         0 | None        | installation | f  |
     resource_pool_a  |          20 |           -1 | class_a             |                10 |       1 | 8GB          |        0 |         0 | None        | installation | f  |
     resource_pool_b  |          20 |           -1 | class_b             |                10 |       1 | 8GB          |        0 |         0 | None        | installation | f  |
     resource_pool_a1 |          20 |           -1 | class_a:workload_a1 |                10 |       1 | 8GB          |    16970 |         0 | None        | installation | f  |
     resource_pool_a2 |          20 |           -1 | class_a:workload_a2 |                10 |       1 | 8GB          |    16970 |         0 | None        | installation | f  |
     resource_pool_b1 |          20 |           -1 | class_b:workload_b1 |                10 |       1 | 8GB          |    16971 |         0 | None        | installation | f  |
     resource_pool_b2 |          20 |           -1 | class_b:workload_b2 |                10 |       1 | 8GB          |    16971 |         0 | None        | installation | f  |
    (7 rows)
    ```

-   View information about Cgroups associated with a resource pool. For details, see  **[statistics-information-functions](statistics-information-functions.md)**.

    In the following example,  **resource\_pool\_a1**  is the name of the resource pool.

    ```
    openGauss=# SELECT * FROM gs_control_group_info('resource_pool_a1');
    ```

    ```
            name         |  class  |  workload   | type  | gid | shares | limits | rate | cpucores
    ---------------------+---------+-------------+-------+-----+--------+--------+------+----------
     class_a:workload_a1 | class_a | workload_a1 | DEFWD |  87 |     30 |      0 |    0 | 0-3
    (1 row)
    ```

    **Table  3**  gs\_control\_group\_info attributes

    <a name="table1560939125613"></a>
    <table><thead align="left"><tr id="row260919925618"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.2.4.1.1"><p id="p17610179175619"><a name="p17610179175619"></a><a name="p17610179175619"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.44715528447155%" id="mcps1.2.4.1.2"><p id="p361013935612"><a name="p361013935612"></a><a name="p361013935612"></a>Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.175482451754824%" id="mcps1.2.4.1.3"><p id="p461011975616"><a name="p461011975616"></a><a name="p461011975616"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row116109912569"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p461079145611"><a name="p461079145611"></a><a name="p461079145611"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p161020985611"><a name="p161020985611"></a><a name="p161020985611"></a>class_a:workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p196108914566"><a name="p196108914566"></a><a name="p196108914566"></a>Class name and workload name</p>
    </td>
    </tr>
    <tr id="row06106985619"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p7610149125612"><a name="p7610149125612"></a><a name="p7610149125612"></a>class</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p2610139185611"><a name="p2610139185611"></a><a name="p2610139185611"></a>class_a</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p4610196562"><a name="p4610196562"></a><a name="p4610196562"></a>Class Cgroup name</p>
    </td>
    </tr>
    <tr id="row1399384455713"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p209946441573"><a name="p209946441573"></a><a name="p209946441573"></a>workload</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p159941447578"><a name="p159941447578"></a><a name="p159941447578"></a>workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p20994544125713"><a name="p20994544125713"></a><a name="p20994544125713"></a>Workload Cgroup name</p>
    </td>
    </tr>
    <tr id="row8632178185817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p17633882582"><a name="p17633882582"></a><a name="p17633882582"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p863315865812"><a name="p863315865812"></a><a name="p863315865812"></a>DEFWD</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p46338815818"><a name="p46338815818"></a><a name="p46338815818"></a>Cgroup type (Top, CLASS, BAKWD, DEFWD, and TSWD)</p>
    </td>
    </tr>
    <tr id="row19207812135811"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p2208812105815"><a name="p2208812105815"></a><a name="p2208812105815"></a>gid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p11208161265812"><a name="p11208161265812"></a><a name="p11208161265812"></a>87</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p1120816121589"><a name="p1120816121589"></a><a name="p1120816121589"></a>Cgroup ID</p>
    </td>
    </tr>
    <tr id="row01967412582"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p15196164105812"><a name="p15196164105812"></a><a name="p15196164105812"></a>shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p619610455819"><a name="p619610455819"></a><a name="p619610455819"></a>30</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p01966445815"><a name="p01966445815"></a><a name="p01966445815"></a>Percentage of CPU resources to those on the parent node</p>
    </td>
    </tr>
    <tr id="row1931985165714"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p183203516578"><a name="p183203516578"></a><a name="p183203516578"></a>limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p7320125111571"><a name="p7320125111571"></a><a name="p7320125111571"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p43209514578"><a name="p43209514578"></a><a name="p43209514578"></a>Percentage of CPU cores to those on the parent node</p>
    </td>
    </tr>
    <tr id="row148871119165810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p6887201917580"><a name="p6887201917580"></a><a name="p6887201917580"></a>rate</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p188871519125814"><a name="p188871519125814"></a><a name="p188871519125814"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p1988821914586"><a name="p1988821914586"></a><a name="p1988821914586"></a>Allocation ratio in Timeshare</p>
    </td>
    </tr>
    <tr id="row1970717163583"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.2.4.1.1 "><p id="p47079162588"><a name="p47079162588"></a><a name="p47079162588"></a>cpucores</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.2.4.1.2 "><p id="p37074160581"><a name="p37074160581"></a><a name="p37074160581"></a>0-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.2.4.1.3 "><p id="p17078161586"><a name="p17078161586"></a><a name="p17078161586"></a>CPU cores</p>
    </td>
    </tr>
    </tbody>
    </table>


