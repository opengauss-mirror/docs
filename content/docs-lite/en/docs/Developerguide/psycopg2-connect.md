# psycopg2.connect\(\)<a name="EN-US_TOPIC_0000001127193505"></a>

## Function<a name="section5708152714306"></a>

This method creates a database session and returns a new connection object.

## Prototype<a name="section441681310810"></a>

```
conn=psycopg2.connect(dbname="test",user="postgres",password="secret",host="127.0.0.1",port="5432")
```

## Parameter<a name="en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  psycopg2.connect parameters

<a name="en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="b1618611144611"><a name="b1618611144611"></a><a name="b1618611144611"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="b4742152214616"><a name="b4742152214616"></a><a name="b4742152214616"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p23111054217"><a name="p23111054217"></a><a name="p23111054217"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1393801515211"><a name="p1393801515211"></a><a name="p1393801515211"></a>Database name.</p>
</td>
</tr>
<tr id="row9119201612171"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p41191016141710"><a name="p41191016141710"></a><a name="p41191016141710"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1011981671716"><a name="p1011981671716"></a><a name="p1011981671716"></a>Username.</p>
</td>
</tr>
<tr id="row10206172741720"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1720682713174"><a name="p1720682713174"></a><a name="p1720682713174"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p17206227121719"><a name="p17206227121719"></a><a name="p17206227121719"></a>Password.</p>
</td>
</tr>
<tr id="row9558132361711"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p15558152311177"><a name="p15558152311177"></a><a name="p15558152311177"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p055862318177"><a name="p055862318177"></a><a name="p055862318177"></a>Database IP address. The default type is UNIX socket.</p>
</td>
</tr>
<tr id="row2254122041715"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p3254132011713"><a name="p3254132011713"></a><a name="p3254132011713"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1025412205170"><a name="p1025412205170"></a><a name="p1025412205170"></a>Connection port number. The default value is <strong id="b111923917519"><a name="b111923917519"></a><a name="b111923917519"></a>5432</strong>.</p>
</td>
</tr>
<tr id="row14959113116103"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p695903120107"><a name="p695903120107"></a><a name="p695903120107"></a>sslmode</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p13959133131018"><a name="p13959133131018"></a><a name="p13959133131018"></a>SSL mode, which is used for SSL connection.</p>
</td>
</tr>
<tr id="row325618713115"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1625618720112"><a name="p1625618720112"></a><a name="p1625618720112"></a>sslcert</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1325711719111"><a name="p1325711719111"></a><a name="p1325711719111"></a>Path of the client certificate, which is used for SSL connection.</p>
</td>
</tr>
<tr id="row244441401113"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p104444141118"><a name="p104444141118"></a><a name="p104444141118"></a>sslkey</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1444410148119"><a name="p1444410148119"></a><a name="p1444410148119"></a>Path of the client key, which is used for SSL connection.</p>
</td>
</tr>
<tr id="row16486192031112"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p24860207112"><a name="p24860207112"></a><a name="p24860207112"></a>sslrootcert</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1548642011112"><a name="p1548642011112"></a><a name="p1548642011112"></a>Path of the root certificate, which is used for SSL connection.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="section899452817814"></a>

Connection object \(for connecting to the openGauss DB instance\)

## Examples<a name="section4160944682"></a>

For details, see  [Example: Common Operations](example-common-operations-psycopg.md).

