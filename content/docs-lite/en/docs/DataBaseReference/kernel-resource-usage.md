# Kernel Resource Usage<a name="EN-US_TOPIC_0289900757"></a>

This section describes kernel resource parameters. Whether these parameters take effect depends on OS settings.

## max\_files\_per\_process<a name="en-us_topic_0283136857_en-us_topic_0237124701_en-us_topic_0059778187_s38aad13352d442a09a312e60c81e0332"></a>

**Parameter description**: Specifies the maximum number of simultaneously open files allowed by each server process. If the kernel is enforcing a proper limit, setting this parameter is not required.

However, on some platforms, such as most Berkeley Software Distribution \(BSD\) systems, the kernel allows individual processes to open many more files than the system can support. If the message "Too many open files" is displayed, set this parameter to a smaller value. Generally, the system must meet this requirement: Number of file descriptors \>= Maximum number of concurrent statements x Number of database nodes x  **max\_files\_per\_process**  x 3

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 25 to 2147483647

**Default value**:  **1000**

## shared\_preload\_libraries<a name="en-us_topic_0283136857_en-us_topic_0237124701_en-us_topic_0059778187_sebbf3e0360214c95b3af62c0fb6d511a"></a>

**Parameter description:**  Specifies one or more shared libraries to be preloaded at server start. If multiple libraries are to be loaded, separate their names using commas \(,\). Only the sysadmin user can access this parameter. For example,  **$libdir/mylib**  will cause  **mylib.so**  \(or on some platforms,  **mylib.sl**\) to be preloaded before the loading of the standard library directory.

You can preinstall the openGauss's stored procedure library using the  **$libdir/pl**_XXX_  syntax as described in the preceding text.  _XXX_  can only be  **pgsql**,  **perl**,  **tcl**, or  **python**.

By preloading a shared library and initializing it as required, the library startup time is avoided when the library is first used. However, the time to start each new server process may increase, even if that process never uses the library. Therefore, set this parameter only for libraries that will be used in most sessions.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If a specified library is not found, the openGauss service will fail to start.
>-   Each openGauss-supported library has a special mark that is checked to guarantee compatibility. Therefore, libraries that do not support openGauss cannot be loaded in this way.

**Value range**: a string

**Default value**: empty

