# Rollback Parameters<a name="EN-US_TOPIC_0000001151846826"></a>

## max\_undo\_workers<a name="section1899815549616"></a>

**Parameter description**: Specifies the number of undo worker threads invoked during asynchronous rollback. The parameter setting takes effect after the system is restarted.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 1 to 100

**Default value**:  **5**

