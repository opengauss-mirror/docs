# lo_import

## Function<a name="en-us_topic_0241735622_section696285173715"></a>

Import a server-side operating system file into a large object.

## Prototype<a name="en-us_topic_0241735622_section2021053510597"></a>

```
Oid lo_import(PGconn* conn, const char* filename);
```

## Parameter<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table 1**  lo\_import parameters

<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837077"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837077"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837077"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>filename</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837078"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837078"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837078"></a>The path to the file to be imported</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**oid** The return value is the OID that was assigned to the new large object, or InvalidOid (zero) on failure.

# lo_import_with_oid

## Function<a name="en-us_topic_0241735622_section696285173713"></a>

Importing a server-side operating system file into a large object with a specified OID will result in an error if the OID has already been used by a large object.

## Prototype<a name="en-us_topic_0241735622_section2021053510593"></a>

```
Oid lo_import_with_oid(PGconn* conn, const char* filename, Oid lobjId);
```

## Parameter<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table 1**  lo\_import\_with\_oid parameter

<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837073"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837073"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837073"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>filename</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837071"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837071"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837071"></a>The path to the file to be imported</p>
</td>
</tr>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>lobjId</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837072"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837072"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251837072"></a>The OID of the large object to be imported</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**oid** The return value is the OID that was assigned to the new large object, or InvalidOid (zero) on failure.

## Example<a name="en-us_topic_0241735638_section724101713155"></a>

For details, see  [Example](example-libpq.md).