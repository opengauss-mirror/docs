# ALTER RESOURCE POOL<a name="EN-US_TOPIC_0000001148027836"></a>

## Function<a name="en-us_topic_0059778630_sad90a3a714584faa8f5b38b344e0c313"></a>

**ALTER RESOURCE POOL**  changes the Cgroup of a resource pool.

## Precautions<a name="en-us_topic_0059778630_sc6d595f2e535403c85636f0e37b66060"></a>

Only a user with the  **ALTER**  permission on the current database can perform this operation.

## Syntax<a name="en-us_topic_0059778630_s4811e37a59884a3897fa21c665e5fa52"></a>

```
ALTER RESOURCE POOL pool_name
    WITH ({MEM_PERCENT= pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='io_priority'}[, ... ]);
```

## Parameter Description<a name="en-us_topic_0059778630_s744bfeb9db194d149727d961f0f4b382"></a>

-   **pool\_name**

    Specifies the name of a resource pool.

    The name of the resource pool is the name of an existing resource pool.

    Value range: a string. It must comply with the identifier naming convention.

-   **group\_name**

    Specifies the name of a Cgroup.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   You can use either double quotation marks \(""\) or single quotation marks \(''\) in the syntax when setting the name of a Cgroup.
    >-   The value of  **group\_name**  is case-sensitive.
    >-   If  **group\_name**  is not specified, the string "Medium" will be used by default in the syntax, indicating the  **Medium**  Timeshare Cgroup under  **DefaultClass**.
    >-   If a database administrator specifies a Workload Cgroup under  **Class**, for example,  **control\_group**  set to  **class1:workload1**, the resource pool will be associated with the  **workload1**  Cgroup under  **class1**. The level of the Workload Cgroup can also be specified. For example,  **control\_group**  is set to  **class1:workload1:1**.
    >-   If a database user specifies the Timeshare Cgroup string \(**Rush**,  **High**,  **Medium**, or  **Low**\) in the syntax, for example,  **control\_group**  is set to  **High**, the resource pool will be associated with the  **High**  Timeshare Cgroup under  **DefaultClass**.

    Value range: an existing Cgroup.

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

    In common scenarios, the value of  **mem\_percent**  of common users is an integer ranging from 0 to 100. The default value is  **0**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >When both  **mem\_percent**  and  **memory\_limit**  are specified, only  **mem\_percent**  takes effect.

-   **io\_limits**

    Specifies the upper limit of IOPS in a resource pool.

    The IOPS is counted by ones for column storage and by 10 thousands for row storage.

-   **io\_priority**

    Specifies the I/O priority for jobs that consume many I/O resources. It takes effect when the I/O usage reaches 90%.

    There are three priorities:  **Low**,  **Medium**, and  **High**. If you do not want to control I/O resources, use the default value  **None**.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The settings of  **io\_limits**  and  **io\_priority**  are valid only for complex jobs, such as batch import \(using  **INSERT INTO SELECT**,  **COPY FROM**, or  **CREATE TABLE AS**\), complex queries involving over 500 MB data on each DN, and  **VACUUM FULL**.

## Examples<a name="en-us_topic_0059778630_s5701ea039ae94537a49dec3cd0c173d8"></a>

The example assumes that the user has created the  **class1**  Cgroup and three Workload Cgroups under  **class1**:  **Low**,  **wg1**, and  **wg2**.

```
-- Create a resource pool.
openGauss=# CREATE RESOURCE POOL pool1;

-- Update a resource pool and set its Cgroup to a High Timeshare Workload Cgroup under DefaultClass.
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="High");

-- Update a resource pool and set its Cgroup to a Low Timeshare Workload Cgroup under class1.
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="class1:Low");

-- Update a resource pool and set its Cgroup to a wg1 Workload Cgroup under class1.
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="class1:wg1");

-- Update a resource pool and set its Cgroup to a wg2 Workload Cgroup under class1.
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="class1:wg2:3"); 
-- Delete the resource pool pool1.
openGauss=# DROP RESOURCE POOL pool1;
```

## Helpful Links<a name="en-us_topic_0059778630_seca31b0ddce240958b33b5be42b33c0c"></a>

[CREATE RESOURCE POOL](create-resource-pool.md)  and  [DROP RESOURCE POOL](drop-resource-pool.md)

