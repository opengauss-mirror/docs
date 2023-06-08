# PQconnectdb<a name="EN-US_TOPIC_0242380571"></a>

## Function<a name="en-us_topic_0241735614_section71985281176"></a>

PQconnectdb is used to establish a new connection with the database server.

## Prototype<a name="en-us_topic_0241735614_section16892310193010"></a>

```
PGconn *PQconnectdb(const char *conninfo);
```

## Parameter<a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQconnectdb parameter

<a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735614_b369471152711"><a name="en-us_topic_0241735614_b369471152711"></a><a name="en-us_topic_0241735614_b369471152711"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735614_b2104151372710"><a name="en-us_topic_0241735614_b2104151372710"></a><a name="en-us_topic_0241735614_b2104151372710"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735614_p144262583911"><a name="en-us_topic_0241735614_p144262583911"></a><a name="en-us_topic_0241735614_p144262583911"></a>conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"><a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a><a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a>Connection string. For details about the fields in the string, see <a href="link-parameters-libpq.md">Connection Characters</a>.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735614_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

**PGconn \***  points to the object pointer that contains a connection. The memory is applied for by the function internally.

## Precautions<a name="en-us_topic_0241735614_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   This function establishes a new database connection using the parameters taken from the string  **conninfo**.
-   The input parameter can be empty, indicating that all default parameters can be used. It can contain one or more values separated by spaces or contain a URL.

## Example<a name="en-us_topic_0241735614_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example-libpq.md).

