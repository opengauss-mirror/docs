# PQclear<a name="EN-US_TOPIC_0242380580"></a>

## Function<a name="en-us_topic_0241735622_section696285173713"></a>

PQclear is used to release the storage associated with PGresult. Any query result should be released by PQclear when it is no longer needed.

## Prototype<a name="en-us_topic_0241735622_section2021053510593"></a>

```
void PQclear(PGresult *res);
```

## Parameters<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQclear parameter

<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735622_b178954411596"><a name="en-us_topic_0241735622_b178954411596"></a><a name="en-us_topic_0241735622_b178954411596"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735622_b1939611615599"><a name="en-us_topic_0241735622_b1939611615599"></a><a name="en-us_topic_0241735622_b1939611615599"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p0"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p0"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p0"></a>Object pointer that contains the query result.</p>
</td>
</tr>
</tbody>
</table>

## Precautions<a name="en-us_topic_0241735622_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

PGresult is not automatically released. That is, it does not disappear when a new query is submitted or even if you close the connection. To delete it, you must call PQclear. Otherwise, memory leakage occurs.

## Example<a name="en-us_topic_0241735622_section185045611592"></a>

For details, see  [Example](example-libpq.md).

