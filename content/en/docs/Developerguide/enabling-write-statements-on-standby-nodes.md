# Enabling Write Statements on Standby Nodes<a name="EN-US_TOPIC_0000001371524841"></a>

## enable\_remote\_excute<a name="section14941640131"></a>

**Parameter description:** Determines whether to allow the standby node to execute write statements. This parameter cannot be modified after being started.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **true** or **false**. **true** indicates that the write statement execution mode is enabled on the standby node for the current installation and deployment. **off** indicates that the mode is disabled.

**Default value**: **off**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   The default value of **enable\_remote\_excute** is **false** in standalone mode.
>-   To allow the standby node to execute write statements, set this parameter to **true**.
>-   After this function is enabled, write statements and DDL statements can be executed on the standby node, and simple and extended queries are supported. In this case, read statements are still executed on the standby node, and write statements are forwarded to the primary node for execution.
>-   After this function is enabled, the standby node unconditionally forwards all SQL statements, including read statements, to the primary node after starting a transaction.
