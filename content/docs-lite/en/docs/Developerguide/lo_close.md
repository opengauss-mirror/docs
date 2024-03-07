# lo_close<a name="EN-US_TOPIC_0242380591"></a>

## Function<a name="en-us_topic_0241735627_section696285173723"></a>

Close a large object descriptor.

## Prototype<a name="en-us_topic_0241735627_section2021053510595"></a>

```
int lo_close(PGconn* conn, int fd);
```

## Parameter<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table 1**  lo\_close parameters

<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_b72fd62331c835d67791aadc239f71f22"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_b72fd62331c835d67791aadc239f71f22"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_b72fd62331c835d67791aadc239f71f22"></a><strong id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_b72fd62332c935d6bb92aadc239f70f73"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_b72fd62332c935d6bb92aadc239f70f73"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_b72fd62332c935d6bb92aadc239f70f73"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r29c2816f105840058d4a248137b3cc09"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834235"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834235"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834235"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r29c2816f105840058d4a248137b3cc09"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834236"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834236"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834236"></a>File descriptor</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**int** On success, lo_close returns zero. On error, the return value is -1.

## Example<a name="en-us_topic_0241735638_section724101713155"></a>

For details, see  [Example](example-libpq.md).