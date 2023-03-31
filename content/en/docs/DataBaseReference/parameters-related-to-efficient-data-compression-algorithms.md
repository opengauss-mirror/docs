# Parameters Related to Efficient Data Compression Algorithms<a name="EN-US_TOPIC_0000001331391822"></a>

## pca\_shared\_buffer<a name="section484914735817"></a>

**Parameter description:** Similar to shared\_buffers, this parameter is used to set the size of the page compression block address mapping management buffer.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).
 
**Value range:** 64 KB to 16 GB.
 
>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   If the value is less than 64 KB, an error is reported.
>-   If the value is greater than 16 GB, the parameter can be set successfully. However, in actual running, the automatic memory running is set to 16 GB.
>-   If the parameter does not contain a unit, the default value is 8 KB \(the size of a page is 8 KB\) multiplied by the parameter value.

**Default value:** **64K**
