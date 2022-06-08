# Overview of System Catalogs and System Views<a name="EN-US_TOPIC_0289900580"></a>

System catalogs store structured metadata of openGauss. They are the source of information used by openGauss to control system running and are a core component of the database system.

System views provide ways to query the system catalogs and internal database status.

System catalogs and system views are visible to either system administrators or all users. Some system catalogs and views have marked the need of administrator permissions, so they are accessible only to administrators.

You can delete and re-create system catalogs, add columns to them, and insert and update values in them, but doing so may make system information inconsistent and cause system faults. Generally, users should not modify system catalogs or system views, or rename their schemas. They are automatically maintained by the system.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Do not add, delete, or modify system catalogs because doing so will result in exceptions or even openGauss unavailability.

