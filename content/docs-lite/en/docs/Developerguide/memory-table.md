# Memory Table<a name="EN-US_TOPIC_0289900839"></a>

This section describes the parameters in the memory table.

## enable\_codegen\_mot<a name="en-us_topic_0283137131_section203671436821"></a>

**Parameter description**: Specifies whether to enable the native LLVM Lite to perform simple queries. If native LLVM is not supported on the current platform, pseudo LLVM will be used.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **true**

## force\_pseudo\_codegen\_mot<a name="en-us_topic_0283137131_section96378301843"></a>

**Parameter description**: Specifies whether to force pseudo LLVM Lite to perform simple queries, even if the current platform supports native LLVM.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **true**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Even if  **force\_pseudo\_codegen\_mot**  is set to  **true**, however, the current platform does not support the native LLVM, the pseudo LLVM is still used.

## enable\_codegen\_mot\_print<a name="en-us_topic_0283137131_section277916121968"></a>

**Parameter description**: Specifies whether to print the IR byte code of the generation function. \(If pseudo LLVM is used, the pseudo IR byte code is printed.\)

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **true**

## codegen\_mot\_limit<a name="en-us_topic_0283137131_section163473316109"></a>

**Parameter description**: Specifies the maximum number of global cache plan sources and the clone plan of each session.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  uint32

**Default value**:  **100**

## mot\_allow\_index\_on\_nullable\_column<a name="en-us_topic_0283137131_section1649711278110"></a>

**Parameter description**: Specifies whether indexes can be created on the  **nullable**  column in the memory table.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

**Default value**:  **true**

## mot\_config\_file<a name="en-us_topic_0283137131_section19178121401217"></a>

**Parameter description**: Specifies the main configuration file of the MOT.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**:  **NULL**

