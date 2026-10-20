---
description: This document describes Huge Page Memory in openGauss, covering topics such as enable\_huge\_pages, huge\_page\_size.
keywords: [openGauss, Huge Page Memory, database reference, enable\_huge\_pages, huge\_page\_size]
---

# Huge Page Memory

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:44:57.965Z -->

The space required by the operating system page table increases as the total memory of the running environment grows. In an environment with hundreds of GB of memory, using 4K memory pages causes the page table space of database processes to become larger and increases the probability of TLB misses, which slows down database query speed and wastes main memory space. To prevent performance degradation caused by overly small system memory pages in large-memory running environments, openGauss introduces the huge page memory feature. When `enable_huge_pages` is set to `on` in the configuration file, openGauss creates shared memory from the huge page memory pre-allocated by the operating system at startup.

Users can decide whether to enable huge page memory based on the running environment. In practice, in an environment with hundreds of GB of memory, if the system memory page size is 4K, enabling huge page memory can improve database performance. Generally, in an environment with hundreds of GB of memory, huge pages of 2MB can be considered; if the environment memory reaches the TB level, larger huge pages can be selected.

## enable\_huge\_pages<a name="zh-cn_topic_0237124693_zh-cn_topic_0059778803_sc5573df50b1c4214bd6067c213147fce"></a>

**Parameter description**: Specifies whether huge page memory is used for database shared memory allocation.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method. In a primary/standby scenario, this parameter is not synchronized to other nodes.

**Value range**: Boolean

- `on`: Uses huge page memory for shared memory allocation.
- `off`: Uses ordinary memory pages for shared memory allocation.

**Default value**: off

>[!TIP]Caution  
>To enable huge page memory, you must configure huge pages in the operating system in advance. For details about the configuration method, see the following example.

## huge\_page\_size<a name="zh-cn_topic_0237124693_zh-cn_topic_0059778803_s4db3d28f8b8349b582c80fcd26dd8967"></a>

**Parameter description**: The page size used by huge page memory. This option takes effect only when `enable_huge_pages` is set to `on`.

This parameter is of the POSTMASTER type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method. In a primary/standby scenario, this parameter is not synchronized to other nodes.

**Value range**: An integer ranging from 0–1073741823, in the unit of 8 KB. It can also be set in the format of xxKB, xxMB, or xxGB.

**Default value**: 0, indicating that the default huge page size of the operating system is used. The default value of the operating system can be viewed through the Hugepagesize item in /proc/meminfo.

>[!TIP]Caution
>
>- The value of this parameter must be an available huge page size supported by the operating system in the current environment. The available huge page sizes can be viewed through the /sys/kernel/mm/hugepages/ directory. If `enable_huge_pages` is set to `on` and the specified huge page size is not supported in the current environment, the database fails to start.
>- Different operating systems provide huge pages of different sizes. The specific selection depends on the total memory size of the running environment and the memory load in the current environment. Generally, for a memory environment of hundreds of GB, a 2 MB huge page can be selected. For a memory environment of TB level, a larger huge page can be selected.

## Example<a name="zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_s5b8255d8025640aba238bfb86b20807a"></a>

1. View the default huge page size of the system:

    ```
    cat /proc/meminfo | grep Hugepagesize
    ```

2. View the huge page sizes supported by the system:

    ```
    ls /sys/kernel/mm/hugepages
    ```

3. Set the number of huge pages:

    Before setting the number of huge pages, the user needs to know how many pages the shared memory of the database requires under the current configuration. Take 2MB huge pages as an example. When `enable_huge_pages` is set to `on` in the configuration file, the database prints the following log upon startup:

    ```
    LOG:  Allocate shared memory as huge pages. Huge page size: 2048 kB, required pages count: 1670
    ```

    This log indicates that under the current configuration, the shared memory of the database requires 1670 2MB huge pages. In this case, change the value of the `/sys/kernel/mm/hugepages/hugepages-2048kB/`nr_hugepages file.

    >[!WARNING]Warning
    >
    > When setting huge pages, the operating system needs to find a specified number of free memory blocks. In this example, the operating system will look for 1670 free memory blocks of 2MB each to allocate huge page memory. If the specified number of free memory blocks cannot be found, the operating system will set the maximum number that can be allocated currently. Therefore, after setting huge page memory, check the file to ensure that the number of huge pages is sufficient for the database to start normally.

    ```
    echo 1670 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages
    cat /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages
    ```

    After the database is started, the current huge page usage of the system can be viewed through /proc/meminfo.

4. Grant the database process user the privilege to use huge page memory:

    View the user group ID to which the database process user belongs, and grant the user the privilege to use huge page memory.

    ```
    id openGauss
    sysctl -w vm.hugetlb_shm_group=xxxx
    ```

5. In the configuration file `postgresql.conf`, set `enable_huge_pages` to `on` and enable the huge page feature.

6. Restart the database.
