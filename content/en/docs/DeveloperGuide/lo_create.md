# lo_creat

## Function<a name="en-us_topic_0241735622_section696285173714"></a>

Create a large object.

## Prototype<a name="en-us_topic_0241735622_section2021053510594"></a>

```
Oid lo_creat(PGconn* conn, int mode);
```

## Parameter<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_s3c7b37936d863eabb02ae76fe1cd3c53"></a>

**Table 1**  lo\_creat parameters

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
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834031"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834031"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834031"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834032"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834032"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834032"></a>Specify read-only, write only, or read-write, deprecated, will be ignored in use, parameter retained for compatibility with older versions</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**oid** The return value is the OID that was assigned to the new large object, or InvalidOid (zero) on failure.

# lo_create

## Function<a name="en-us_topic_0241735622_section696285173714"></a>

Creating a large object with a specified OID will result in an error if the OID is already in use by a large object.

## Prototype<a name="en-us_topic_0241735622_section2021053510593"></a>

```
Oid lo_create(PGconn* conn, Oid lobjId);
```

## Parameter<a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_s3c7b37936d863eabb02ae76fe1cd3c53"></a>

**Table 1**  lo\_create parameter

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
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834033"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834033"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834033"></a>A database connection</p>
</td>
</tr>
<tr id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735622_p23111054217"><a name="en-us_topic_0241735622_p23111054217"></a><a name="en-us_topic_0241735622_p23111054217"></a>lobjId</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834034"><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834034"></a><a name="en-us_topic_0241735622_en-us_topic_0237120432_en-us_topic_0059778852_ab962697251834034"></a>The oid of the large object to be created</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735613_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

**oid** The return value is the OID that was assigned to the new large object, or InvalidOid (zero) on failure.

## Example<a name="en-us_topic_0241735638_section724101713155"></a>

For details, see  [Example](example-libpq.md).