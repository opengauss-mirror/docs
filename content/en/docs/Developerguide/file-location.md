# File Location<a name="EN-US_TOPIC_0289900014"></a>

After a database has been installed, three configuration files \(**postgresql.conf**,  **pg\_hba.conf**, and  **pg\_ident.conf**\) are automatically generated and saved in the data directory. You can use the methods described in this section to change the names and save paths of these configuration files.

When changing the storage directory of a configuration file, set  **data\_directory**  in  **postgresql.conf**  to the actual data directory.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If a configuration file is incorrectly modified, the database will be seriously affected. Do not modify the configuration files mentioned in this section after installation.

## data\_directory<a name="en-us_topic_0283136624_en-us_topic_0237124693_en-us_topic_0059778803_sc5573df50b1c4214bd6067c213147fce"></a>

**Parameter description**: Specifies the openGauss  **data**  directory. Only users with the  **sysadmin**  permission can access this parameter. You can set this parameter using one of the following methods:

-   Set it when you install the openGauss.
-   This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters

**Default value**: Specify this parameter during installation. If this parameter is not specified during installation, the database is not initialized by default.

## config\_file<a name="en-us_topic_0283136624_en-us_topic_0237124693_en-us_topic_0059778803_s4db3d28f8b8349b582c80fcd26dd8967"></a>

**Parameter description**: Specifies the configuration file \(**postgresql.conf**\) of the primary server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). Method 4 in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)  is not supported.

**Value range**: a string, consisting of one or more characters

**Default value**:  **postgresql.conf**  \(The absolute directory of this file may be displayed in the actual situation.\)

## hba\_file<a name="en-us_topic_0283136624_en-us_topic_0237124693_en-us_topic_0059778803_s21a6ef9f24cf4d848c6f5933aca9df8e"></a>

**Parameter description**: Specifies the configuration file \(**pg\_hba.conf**\) for host-based authentication \(HBA\). This parameter can be specified only in the  **postgresql.conf**  file and can be accessed only by users with the  **sysadmin**  permission.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **pg\_hba.conf**  \(The absolute directory of this file may be displayed in the actual situation.\)

## ident\_file<a name="en-us_topic_0283136624_en-us_topic_0237124693_en-us_topic_0059778803_s764537f7b0124bf98d2214cb497b69d0"></a>

**Parameter description**: Specifies the name of the configuration file \(**pg\_ident.conf\)**  for client authentication. Only users with the  **sysadmin**  permission can access this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **pg\_ident.conf**  \(The absolute directory of this file may be displayed in the actual situation.\)

## external\_pid\_file<a name="en-us_topic_0283136624_en-us_topic_0237124693_en-us_topic_0059778803_s67feda01e0404126a24384fb77c6419c"></a>

**Parameter description**: Specifies the extra PID file that can be used by the server management program. Only the sysadmin user can access this parameter.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>This parameter takes effect only after the database restarts.

**Value range**: a string

**Default value**: empty

## enable\_default\_cfunc\_libpath<a name="section686423010216"></a>

**Parameter description**: Specifies whether the default path is used for the .so file when the C function is created in openGauss.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**on**: indicates that the .so file must be placed in the specified directory \(**$libdir/proc\_srclib**\) when the C function is created.

**off**: indicates that the .so file can be stored in any accessible directory when the C function is created.

**Default value**:  **on**

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If this parameter is set to  **off**, the .so file can be placed in any accessible directory or the .so file provided by the system can be used, which poses security risks. Therefore, you are not advised to set this parameter to  **off**.

