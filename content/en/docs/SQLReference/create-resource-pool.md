# CREATE RESOURCE POOL<a name="EN-US_TOPIC_0000001193907775"></a>

## Function<a name="en-us_topic_0059777569_sea021d0b1f154052a73b69b89d636f66"></a>

**CREATE RESOURCE POOL**  creates a resource pool and specifies the Cgroup of the resource pool.

## Precautions<a name="en-us_topic_0059777569_sf6c61d950e6b4383a3bc630c8d5910a4"></a>

Only SYSADMIN and VCADMIN users can create resource pools.

## Syntax<a name="en-us_topic_0059777569_s864093cc963a4396a4a304befe0df251"></a>

```
CREATE RESOURCE POOL pool_name
    [WITH ({MEM_PERCENT=pct |
            CONTROL_GROUP="group_name" |
            ACTIVE_STATEMENTS=stmt |
            MAX_DOP = dop |
            MEMORY_LIMIT='memory_size' |
            io_limits=io_limits |
            io_priority='io_priority' |
            nodegroup="nodegroupname" |
            is_foreign=boolean }
            [, ... ])
    ];
```

## Parameter Description<a name="en-us_topic_0059777569_s9b6dbda628294e24a95da9e33949c3e8"></a>

-   **pool\_name**

    Specifies the name of a resource pool.

    The name of a resource pool cannot be same as that of an existing resource pool.

    Value range: a string. It must comply with the identifier naming convention.

-   **group\_name**

    Specifies the name of a Cgroup.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   You can use either double quotation marks \(""\) or single quotation marks \(''\) in the syntax when setting the name of a Cgroup.
    >-   The value of  **group\_name**  is case-sensitive.
    >-   If  **group\_name**  is not specified, the string "Medium" will be used by default in the syntax, indicating the  **Medium**  Timeshare Cgroup under  **DefaultClass**.
    >-   If a database administrator specifies a Workload Cgroup under  **Class**, for example,  **control\_group**  set to  **class1:workload1**, the resource pool will be associated with the  **workload1**  Cgroup under  **class1**. The level of the Workload Cgroup can also be specified. For example,  **control\_group**  is set to  **class1:workload1:1**.
    >-   If a database user specifies the Timeshare Cgroup string \(**Rush**,  **High**,  **Medium**, or  **Low**\) in the syntax, for example,  **control\_group**  is set to  **High**, the resource pool will be associated with the  **High**  Timeshare Cgroup under  **DefaultClass**.

    Value range: a string. It must comply with the rule in the description, which specifies the created Cgroup.

-   **stmt**

    Specifies the maximum number of statements that can be concurrently executed in a resource pool.

    Value range: numeric data ranging from –1 to 2147483647

-   **dop**

    Specifies the maximum statement concurrency degree for a resource pool, equivalent to the number of threads that can be created for executing a statement.

    Value range: numeric data ranging from 1 to 64

-   **memory\_size**

    Specifies the maximum memory size of a resource pool.

    Value range: a string from 1 KB to 2047 GB

-   **mem\_percent**

    Specifies the proportion of available resource pool memory to the total memory or group user memory.

    In multi-tenant scenarios, the value of  **mem\_percent**  of group users or service users ranges from 1 to 100. The default value is  **20**.

    In common scenarios, the value of  **mem\_percent**  of common users ranges from 0 to 100. The default value is  **0**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >When both  **mem\_percent**  and  **memory\_limit**  are specified, only  **mem\_percent**  takes effect.

-   **io\_limits**

    Specifies the upper limit of IOPS in a resource pool.

    The IOPS is counted by ones for column storage and by 10 thousands for row storage.

    Value range: numeric data ranging from 0 to 2147483647

-   **io\_priority**

    Specifies the I/O priority for jobs that consume many I/O resources. It takes effect when the I/O usage reaches 90%.

    There are three priorities:  **Low**,  **Medium**, and  **High**. If you do not want to control I/O resources, use the default value  **None**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The settings of  **io\_limits**  and  **io\_priority**  are valid only for complex jobs, such as batch import \(using  **INSERT INTO SELECT**,  **COPY FROM**, or  **CREATE TABLE AS**\), complex queries involving over 500 MB data on each DN, and  **VACUUM FULL**.

-   **nodegroup**

    Specifies the name of a logical cluster. The logical cluster must already exist.

    If the logical cluster name contains uppercase letters or special characters or begins with a digit, enclose the name with double quotation marks \(""\) in SQL statements.

    This parameter is invalid in a standalone system.

-   **is\_foreign**

    In logical cluster mode, specifies the current resource pool to control the resources of common users that are not associated with the logical cluster specified by  **nodegroup**.

    This parameter is invalid in a standalone system.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **nodegroup**  must specify an existing logical cluster, and cannot be  **elastic\_group**  or the default node group \(**group\_version1**\), which is generated during cluster installation.
    >-   If  **is\_foreign**  is set to  **true**, the resource pool cannot be associated with users. That is,  **CREATE USER ... RESOURCE POOL**  cannot be used to configure resource pools for users. The resource pool automatically checks whether the users are associated with its logical cluster. If they are not, they will be controlled by the resource pool when performing operations on DNs in the logical cluster.


## Examples<a name="en-us_topic_0059777569_s44181f6d005b4da1952aaeff4ef66e0e"></a>

This example assumes that Cgroups have been created by users in advance. For details about how to create Cgroups, see  [Setting a Cgroup](../PerformanceTuningGuide/setting-a-cgroup.md).

```
-- Create a default resource pool, and associate it with the Medium Timeshare Cgroup under Workload under DefaultClass.
openGauss=# CREATE RESOURCE POOL pool1;

-- Create a resource pool, and associate it with the High Timeshare Workload Cgroup under DefaultClass.
openGauss=# CREATE RESOURCE POOL pool2 WITH (CONTROL_GROUP="High");

-- Create a resource pool, and associate it with the Low Timeshare Workload Cgroup under class1.
openGauss=# CREATE RESOURCE POOL pool3 WITH (CONTROL_GROUP="class1:Low");

-- Create a resource pool, and associate it with the wg1 Workload Cgroup under class1.
openGauss=# CREATE RESOURCE POOL pool4 WITH (CONTROL_GROUP="class1:wg1");

-- Create a resource pool, and associate it with the wg2 Workload Cgroup under class1.
openGauss=# CREATE RESOURCE POOL pool5 WITH (CONTROL_GROUP="class1:wg2:3");

-- Delete the resource pool.
openGauss=# DROP RESOURCE POOL pool1;
openGauss=# DROP RESOURCE POOL pool2;
openGauss=# DROP RESOURCE POOL pool3;
openGauss=# DROP RESOURCE POOL pool4;
openGauss=# DROP RESOURCE POOL pool5;
```

## Helpful Links<a name="en-us_topic_0059777569_s00af0cee720942fa8efec001d31e8c84"></a>

[ALTER RESOURCE POOL](alter-resource-pool.md)  and  [DROP RESOURCE POOL](drop-resource-pool.md)

