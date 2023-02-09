# Boolean Types<a name="EN-US_TOPIC_0289900487"></a>

Compared with the original openGauss, Dolphin modifies the Boolean type as follows:

- The output representations of the Boolean type are changed from 't' and 'f' to '1' and '0'. This modification takes effect only on tools except gs_dump, gs_dumpall, gsql, gs_probackup, gs_rewind, and gs_clean, for example, JDBC.

For more information about the Boolean type of the original openGauss, see [openGauss Boolean Types](boolean-types.md).

## Examples<a name="en-us_topic_0283137359_en-us_topic_0237121929_en-us_topic_0059777457_s2cf0ef56c49a4e58b4a2e5507196b56f"></a>

```
--In gsql, the output of the Boolean type is still 't' and 'f'.
openGauss=# SELECT true;
 bool
------
 t
(1 row)

openGauss=# SELECT false;
 bool
------
 f
(1 row)
```
