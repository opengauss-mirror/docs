# Other Default Parameters<a name="EN-US_TOPIC_0289900272"></a>

This section describes the default database loading parameters.

## dynamic\_library\_path<a name="en-us_topic_0283136682_en-us_topic_0237124734_en-us_topic_0059778260_s8b9823f07b8c4e25b6e81143fbabbe31"></a>

**Parameter description**: Specifies the path that the system will search for a shared database file that is dynamically loadable. When a dynamically loadable module needs to be opened and the file name specified in the  **CREATE FUNCTION**  or  **LOAD**  command does not have a directory component, the system will search this path for the required file. Only the sysadmin user can access this parameter.

The value of  **dynamic\_library\_path**  must be a list of absolute paths separated by colons \(:\). When the name of a path starts with the special variable $libdir, the variable will be replaced with the directory in which the module provided by the openGauss is installed. For example:

```
dynamic_library_path = '/usr/local/lib/gaussdb:/opt/testgs/lib:$libdir'
```

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If the value of this parameter is set to an empty character string, the automatic path search is turned off.

**Default value**:  **$libdir**

## gin\_fuzzy\_search\_limit<a name="en-us_topic_0283136682_en-us_topic_0237124734_en-us_topic_0059778260_s9c1fca9cfc7e4a08847cd046aeb5303f"></a>

**Parameter description**: Specifies the upper limit of the size of the set returned by GIN indexes.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: an integer ranging from 0 to 2147483647

**Default value**:  **0**

## local\_preload\_libraries<a name="en-us_topic_0283136682_en-us_topic_0237124734_en-us_topic_0059778260_sfb72ffda5d1f4f508ff14b8d389415db"></a>

**Parameter description**: Specifies one or more shared libraries that are to be preloaded at connection start. If multiple libraries are to be loaded, separate their names with commas \(,\). All library names are converted to lower case unless double-quoted.

-   Any user can change this option. Therefore, library files that can be loaded are restricted to those saved in the  **plugins**  subdirectory of the standard library installation directory. It is the database administrator's responsibility to ensure that libraries in this directory are all safe. Entries in  **local\_preload\_libraries**  can specify the library directory explicitly, for example,  **$libdir/plugins/mylib**, or just specify the library name, for example,  **mylib**. \(**mylib**  is equivalent to  **$libdir/plugins/mylib**.\)
-   Unlike  **shared\_preload\_libraries**, there are no differences in performance between loading a module at session start or doing this during the session. The intent of this feature is to allow debugging or performance-measurement libraries to be loaded into specific sessions without an explicit LOAD command. For example, debugging can be enabled under a given user name by setting this parameter to  **ALTER USER SET**.
-   If a specified library is not found, the connection attempt will fail.
-   Every openGauss-supported library has a "magic block" that is checked to guarantee compatibility. For this reason, non-openGauss-supported libraries cannot be loaded in this way.

This parameter is a BACKEND parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

**Default value**: empty

