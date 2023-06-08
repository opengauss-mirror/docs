# PQsetdbLogin<a name="EN-US_TOPIC_0242380572"></a>

## Function<a name="en-us_topic_0241735615_section189041135191819"></a>

PQsetdbLogin is used to establish a new connection with the database server.

## Prototype<a name="en-us_topic_0241735615_section148775407917"></a>

```
PGconn *PQsetdbLogin(const char *pghost,
                     const char *pgport,
                     const char *pgoptions,
                     const char *pgtty,
                     const char *dbName,
                     const char *login,
                     const char *pwd);
```

## Parameter<a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQsetdbLogin parameters

<a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0241735615_b18111402403"><a name="en-us_topic_0241735615_b18111402403"></a><a name="en-us_topic_0241735615_b18111402403"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0241735615_b1599515405405"><a name="en-us_topic_0241735615_b1599515405405"></a><a name="en-us_topic_0241735615_b1599515405405"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p144262583911"><a name="en-us_topic_0241735615_p144262583911"></a><a name="en-us_topic_0241735615_p144262583911"></a>pghost</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"><a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a><a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a>Name of the host to be connected. For details, see the <strong id="en-us_topic_0241735615_b10732648114112"><a name="en-us_topic_0241735615_b10732648114112"></a><a name="en-us_topic_0241735615_b10732648114112"></a>host</strong> field described in <a href="link-parameters-libpq.md">Connection Characters</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_r2088b45aa8374f988b5b381a7e85ae5b"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p7393163933919"><a name="en-us_topic_0241735615_p7393163933919"></a><a name="en-us_topic_0241735615_p7393163933919"></a>pgport</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_p1339112395397"><a name="en-us_topic_0241735615_p1339112395397"></a><a name="en-us_topic_0241735615_p1339112395397"></a>Port number of the host server. For details, see the <strong id="en-us_topic_0241735615_b16496122464216"><a name="en-us_topic_0241735615_b16496122464216"></a><a name="en-us_topic_0241735615_b16496122464216"></a>port</strong> field described in <a href="link-parameters-libpq.md">Connection Characters</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_re3c53307a0b8488f86edbf902499dcd5"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p183774394393"><a name="en-us_topic_0241735615_p183774394393"></a><a name="en-us_topic_0241735615_p183774394393"></a>pgoptions</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_p113734398392"><a name="en-us_topic_0241735615_p113734398392"></a><a name="en-us_topic_0241735615_p113734398392"></a>Command-line options to be sent to the server during running. For details, see the <strong id="en-us_topic_0241735615_b155744264410"><a name="en-us_topic_0241735615_b155744264410"></a><a name="en-us_topic_0241735615_b155744264410"></a>options</strong> field described in <a href="connection-characters.md">Connection Characters</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_rc78d71a78a944585b1a9275d30efa604"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p737003913919"><a name="en-us_topic_0241735615_p737003913919"></a><a name="en-us_topic_0241735615_p737003913919"></a>pgtty</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_p2576195855917"><a name="en-us_topic_0241735615_p2576195855917"></a><a name="en-us_topic_0241735615_p2576195855917"></a>This field can be ignored. (Previously, this field declares the output direction of server logs.)</p>
</td>
</tr>
<tr id="en-us_topic_0241735615_row89651041155418"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p1696614418544"><a name="en-us_topic_0241735615_p1696614418544"></a><a name="en-us_topic_0241735615_p1696614418544"></a>dbName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_p1396684105419"><a name="en-us_topic_0241735615_p1396684105419"></a><a name="en-us_topic_0241735615_p1396684105419"></a>Name of the database to be connected. For details, see the <strong id="en-us_topic_0241735615_b8184103374717"><a name="en-us_topic_0241735615_b8184103374717"></a><a name="en-us_topic_0241735615_b8184103374717"></a>dbname</strong> field described in <a href="connection-characters.md">Connection Characters</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241735615_row296618417549"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p1296604175412"><a name="en-us_topic_0241735615_p1296604175412"></a><a name="en-us_topic_0241735615_p1296604175412"></a>login</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_p1296717415545"><a name="en-us_topic_0241735615_p1296717415545"></a><a name="en-us_topic_0241735615_p1296717415545"></a>Username for connection. For details, see the <strong id="en-us_topic_0241735615_b1636664912491"><a name="en-us_topic_0241735615_b1636664912491"></a><a name="en-us_topic_0241735615_b1636664912491"></a>user</strong> field described in <a href="connection-characters.md">Connection Characters</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0241735615_row173772032195413"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735615_p53787321542"><a name="en-us_topic_0241735615_p53787321542"></a><a name="en-us_topic_0241735615_p53787321542"></a>pwd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735615_p837863275410"><a name="en-us_topic_0241735615_p837863275410"></a><a name="en-us_topic_0241735615_p837863275410"></a>Password used for authentication during connection. For details, see the <strong id="en-us_topic_0241735615_b15172183245110"><a name="en-us_topic_0241735615_b15172183245110"></a><a name="en-us_topic_0241735615_b15172183245110"></a>password</strong> field described in <a href="connection-characters.md">Connection Characters</a>.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735615_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

**PGconn \***  points to the object pointer that contains a connection. The memory is applied for by the function internally.

## Precautions<a name="en-us_topic_0241735615_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   This function is the predecessor of PQconnectdb with a fixed set of parameters. When an undefined parameter is called, its default value is used. Write NULL or an empty string for any one of the fixed parameters that is to be defaulted.
-   If the  **dbName**  value contains an = sign or a valid prefix in the connection URL, it is taken as a conninfo string and passed to PQconnectdb, and the remaining parameters are consistent with PQconnectdbParams parameters.

## Example<a name="en-us_topic_0241735615_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

For details, see  [Example](example-libpq.md).

