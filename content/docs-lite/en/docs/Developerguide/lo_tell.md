# lo_tell<a name="EN-US_TOPIC_0242380598"></a>

## Function<a name="en-us_topic_0241735627_section696285173721"></a>

Obtain the current read or write position of a large object descriptor.

## Prototype<a name="en-us_topic_0241735627_section2021053510601"></a>

```
int lo_tell(PGconn* conn, int fd);
```

## Parameter<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table 1**  lo\_tell parameters

<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p3"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p3"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p3"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p5"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p5"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p5"></a>File descriptor</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**int** Returns -1 on failure.

# lo_tell64<a name="EN-US_TOPIC_0242380598"></a>

## Function<a name="en-us_topic_0241735627_section696285173713"></a>

Truncate a large object that may exceed 2GB in size to a given length.

## Prototype<a name="en-us_topic_0241735627_section2021053510593"></a>

```
long int lo_tell64(PGconn *conn, int fd);
```

## Parameter<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table 1**  lo\_tell64 parameter

<a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p7"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p7"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p7"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735627_p23111054217"><a name="en-us_topic_0241735627_p23111054217"></a><a name="en-us_topic_0241735627_p23111054217"></a>fd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p9"><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p9"></a><a name="en-us_topic_0241735627_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p9"></a>File descriptor</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**int** Returns -1 on failure.

## Example<a name="en-us_topic_0241735638_section724101713155"></a>

For details, see  [Example](example-libpq.md).