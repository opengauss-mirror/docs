# Pseudo-Types<a name="EN-US_TOPIC_0289900680"></a>

openGauss type system contains a number of special-purpose entries that are collectively called pseudo-types. A pseudo-type cannot be used as a column data type, but it can be used to declare a function's argument or result type.

Each of the available pseudo-types is useful in situations where a function's behavior does not correspond to simply taking or returning a value of a specific SQL data type.  [Table 1](#en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_t0c2699d96e0a4d17ae1c6b8908892f8d)  lists all pseudo-types.

**Table  1**  Pseudo-types

<a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_t0c2699d96e0a4d17ae1c6b8908892f8d"></a>
<table><thead align="left"><tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r6c0940c6e571492b843295cf67573a8c"><th class="cellrowborder" valign="top" width="27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa8fa7461713a469aaab83a83aed2d176"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa8fa7461713a469aaab83a83aed2d176"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa8fa7461713a469aaab83a83aed2d176"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_acc1f476147ec47a5ac67d00018acf6bf"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_acc1f476147ec47a5ac67d00018acf6bf"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_acc1f476147ec47a5ac67d00018acf6bf"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r6e0b13ce58da4bb3807ad0b71f852670"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_acfb73001ff6d4ca49eefcf4d8779aff1"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_acfb73001ff6d4ca49eefcf4d8779aff1"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_acfb73001ff6d4ca49eefcf4d8779aff1"></a>any</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_af3af9dd5f49744359b4a8c9bdd89b0ad"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_af3af9dd5f49744359b4a8c9bdd89b0ad"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_af3af9dd5f49744359b4a8c9bdd89b0ad"></a>Indicates that a function accepts any input data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r93accc8eeb5844468f77133b1520f00a"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a7cb7abf9c7274b3c8413edf9a2f44498"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a7cb7abf9c7274b3c8413edf9a2f44498"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a7cb7abf9c7274b3c8413edf9a2f44498"></a>anyelement</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a2f23a8e545d94cc48ba63885934aded9"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a2f23a8e545d94cc48ba63885934aded9"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a2f23a8e545d94cc48ba63885934aded9"></a>Indicates that a function accepts any data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_rab00bd68ff9d4bd598509f03c8e6aa7f"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aedebe966cb52456a95491ad860317617"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aedebe966cb52456a95491ad860317617"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aedebe966cb52456a95491ad860317617"></a>anyarray</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a3460370fb59840f5a1b0aa8557ef47e8"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a3460370fb59840f5a1b0aa8557ef47e8"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a3460370fb59840f5a1b0aa8557ef47e8"></a>Indicates that a function accepts any array data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r112fcd9eadc448649a01b47a3c026515"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa237efabf199437b81c9023d8e14221a"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa237efabf199437b81c9023d8e14221a"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa237efabf199437b81c9023d8e14221a"></a>anynonarray</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9cc95c175b054c59a4d63cb4ddf48483"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9cc95c175b054c59a4d63cb4ddf48483"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9cc95c175b054c59a4d63cb4ddf48483"></a>Indicates that a function accepts any non-array data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_rac8aaac98bec43688d80dddd57233b31"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9cba874fa96549f0b786e691e14b4147"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9cba874fa96549f0b786e691e14b4147"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9cba874fa96549f0b786e691e14b4147"></a>anyenum</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a26f608051ac6432698aae9dc458a5b5c"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a26f608051ac6432698aae9dc458a5b5c"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a26f608051ac6432698aae9dc458a5b5c"></a>Indicates that a function accepts any enum data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_red52bc60f42f4ab59e0bde18817c1154"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_en-us_topic_0058965727_p267697714380"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_en-us_topic_0058965727_p267697714380"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_en-us_topic_0058965727_p267697714380"></a>anyrange</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9d2e3d311c6a45dd9c96e81c1a1199b2"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9d2e3d311c6a45dd9c96e81c1a1199b2"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9d2e3d311c6a45dd9c96e81c1a1199b2"></a>Indicates that a function accepts any range data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_rbc021dbe7af741929290ae9048e71d46"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa91f5dd6b7b447cc9f1172a3eb9fefe9"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa91f5dd6b7b447cc9f1172a3eb9fefe9"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_aa91f5dd6b7b447cc9f1172a3eb9fefe9"></a>cstring</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ab0d5a28989674a39806523c464a77a63"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ab0d5a28989674a39806523c464a77a63"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ab0d5a28989674a39806523c464a77a63"></a>Indicates that a function accepts or returns a null-terminated C string.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r70e7a44f32bf461a872b6b38319ca812"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a54791f7afab748e7a7aef01d163a0375"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a54791f7afab748e7a7aef01d163a0375"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a54791f7afab748e7a7aef01d163a0375"></a>internal</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ae53bad0786c6450fb5ee466a81bca903"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ae53bad0786c6450fb5ee466a81bca903"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ae53bad0786c6450fb5ee466a81bca903"></a>Indicates that a function accepts or returns a server-internal data type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_rfbffe3b687214f0dbe550846cf8e3e8b"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a24487caeb36647b2ac82de729c8d6e2a"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a24487caeb36647b2ac82de729c8d6e2a"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a24487caeb36647b2ac82de729c8d6e2a"></a>language_handler</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ac156e7d1ee644e45a7e595eafdacde80"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ac156e7d1ee644e45a7e595eafdacde80"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_ac156e7d1ee644e45a7e595eafdacde80"></a>Indicates that a procedural language call handler is declared to return <strong id="en-us_topic_0237121961_b198606593276"><a name="en-us_topic_0237121961_b198606593276"></a><a name="en-us_topic_0237121961_b198606593276"></a>language_handler</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r3b727641ff65409db77a2ef6639deb95"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a0655cbed966145a1bd509abe912ab290"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a0655cbed966145a1bd509abe912ab290"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a0655cbed966145a1bd509abe912ab290"></a>fdw_handler</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a610bd993701e465a8840e328320c9727"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a610bd993701e465a8840e328320c9727"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a610bd993701e465a8840e328320c9727"></a>Indicates that a foreign-data wrapper handler is declared to return <strong id="en-us_topic_0237121961_b15841121311284"><a name="en-us_topic_0237121961_b15841121311284"></a><a name="en-us_topic_0237121961_b15841121311284"></a>fdw_handler</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_rda5786fdbe93441e9a3dec1126248c01"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_afb3fb8869461457ab2d0bebeea03ce7b"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_afb3fb8869461457ab2d0bebeea03ce7b"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_afb3fb8869461457ab2d0bebeea03ce7b"></a>record</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a2a3778fc6f9f4884aea4411156b45708"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a2a3778fc6f9f4884aea4411156b45708"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a2a3778fc6f9f4884aea4411156b45708"></a>Identifies a function returning an unspecified row type.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r612b651dd62c480ba134ddf05044db4f"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a93cb182e74d0476d8441dc7a39a38133"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a93cb182e74d0476d8441dc7a39a38133"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a93cb182e74d0476d8441dc7a39a38133"></a>trigger</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9300aca606f344b4a6b47ca2fdad425a"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9300aca606f344b4a6b47ca2fdad425a"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9300aca606f344b4a6b47ca2fdad425a"></a>Indicates that a trigger function is declared to return <strong id="en-us_topic_0237121961_b465518362285"><a name="en-us_topic_0237121961_b465518362285"></a><a name="en-us_topic_0237121961_b465518362285"></a>trigger</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r55d306b502d144feacde3050427d7a0b"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_en-us_topic_0058965727_p703796014380"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_en-us_topic_0058965727_p703796014380"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_en-us_topic_0058965727_p703796014380"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_add68b7790dc74a4ebcdf46fdcc2b9c95"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_add68b7790dc74a4ebcdf46fdcc2b9c95"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_add68b7790dc74a4ebcdf46fdcc2b9c95"></a>Indicates that a function returns no value.</p>
</td>
</tr>
<tr id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_r88f0a3aa70b349df97f3eaa074a5c310"><td class="cellrowborder" valign="top" width="27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9434511916514c65b82494ec1d33f986"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9434511916514c65b82494ec1d33f986"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a9434511916514c65b82494ec1d33f986"></a>opaque</p>
</td>
<td class="cellrowborder" valign="top" width="73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a5a4dc461175244ecbb6cb4b31873a480"><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a5a4dc461175244ecbb6cb4b31873a480"></a><a name="en-us_topic_0283137522_en-us_topic_0237121961_en-us_topic_0059778153_a5a4dc461175244ecbb6cb4b31873a480"></a>Indicates an obsolete type name that formerly served all the above purposes.</p>
</td>
</tr>
</tbody>
</table>

Functions coded in C \(whether built in or dynamically loaded\) can be declared to accept or return any of these pseudo data types. It is up to the function author to ensure that the function will behave safely when a pseudo-type is used as an argument type.

Functions coded in procedural languages can use pseudo-types only as allowed by their implementation languages. At present the procedural languages all forbid use of a pseudo-type as argument type, and allow only  **void**  and  **record**  as a result type. Some also support polymorphic functions using the  **anyelement**,  **anyarray**,  **anynonarray**,  **anyenum**, and  **anyrange**  types.

The  **internal**  pseudo-type is used to declare functions that are meant only to be called internally by the database system, and not by direct invocation in an SQL query. If a function has at least one  **internal**-type argument then it cannot be called from SQL. You are advised not to create any function that is declared to return internal unless it has at least one  **internal**  argument.

Example:

```
-- Create a table.
openGauss=# create table t1 (a int);

-- Insert two data records.
openGauss=# insert into t1 values(1),(2);

-- Create the showall() function.
openGauss=# CREATE OR REPLACE FUNCTION showall() RETURNS SETOF record
AS $$ SELECT count(*) from t1; $$
LANGUAGE SQL;

-- Invoke the showall() function.
openGauss=# SELECT showall();
 showall 
---------
 (2)
(1 row)

-- Delete the function.
openGauss=# DROP FUNCTION showall();

-- Delete the table.
openGauss=# drop table t1;
```

