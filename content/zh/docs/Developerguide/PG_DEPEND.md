# PG\_DEPEND

PG\_DEPEND系统表记录数据库对象之间的依赖关系。这个信息允许DROP命令找出哪些其它对象必须由DROP CASCADE删除，或者是在DROP RESTRICT的情况下避免删除。

这个表的功能类似[PG\_SHDEPEND](PG_SHDEPEND.md)，用于记录那些在openGauss之间共享的对象之间的依赖性关系。

**表 1**  PG\_DEPEND字段

<a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_t5f56d256e6154febaa3fb2858bfd40e8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_r1dd1c6cf321b483196718dc0ac33ded6"><th class="cellrowborder" valign="top" width="16.16%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a199dba226dfc4f65b8b47916d478a1fe"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a199dba226dfc4f65b8b47916d478a1fe"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a199dba226dfc4f65b8b47916d478a1fe"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.28%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a35022be96c074151974b03e5e32cd4e5"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a35022be96c074151974b03e5e32cd4e5"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a35022be96c074151974b03e5e32cd4e5"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="21.62%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_abe206acdae7d41eaba1447059545fe9b"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_abe206acdae7d41eaba1447059545fe9b"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_abe206acdae7d41eaba1447059545fe9b"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="50.94%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab3af16dedd1d4ac4b67d9a879a9f508f"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab3af16dedd1d4ac4b67d9a879a9f508f"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab3af16dedd1d4ac4b67d9a879a9f508f"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_rc24388db5bbc4b28824779929f28104d"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab616a5799198480fa23742c61f49aa8b"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab616a5799198480fa23742c61f49aa8b"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab616a5799198480fa23742c61f49aa8b"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a421d9e61eae54d72bd19d2ce4859521a"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a421d9e61eae54d72bd19d2ce4859521a"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a421d9e61eae54d72bd19d2ce4859521a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a95d261e3b32e445b8d1095d28f3fbd28"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a95d261e3b32e445b8d1095d28f3fbd28"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a95d261e3b32e445b8d1095d28f3fbd28"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a829a3cd7c1c146e8b08443412f00b210"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a829a3cd7c1c146e8b08443412f00b210"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a829a3cd7c1c146e8b08443412f00b210"></a>有依赖对象所在系统表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_r6e48ccb4978f4949ad1fbb85e2c32375"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac79ce2296c274e479c0b757bdb455bc3"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac79ce2296c274e479c0b757bdb455bc3"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac79ce2296c274e479c0b757bdb455bc3"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ae19211f99b8946c396632d299d15d043"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ae19211f99b8946c396632d299d15d043"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ae19211f99b8946c396632d299d15d043"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a1aef8d7080924b0cb94eb26d5de7ae7d"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a1aef8d7080924b0cb94eb26d5de7ae7d"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a1aef8d7080924b0cb94eb26d5de7ae7d"></a>任意OID属性</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a18473542e108474495a79aea1814e00a"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a18473542e108474495a79aea1814e00a"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a18473542e108474495a79aea1814e00a"></a>指定的依赖对象的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_r4b4e94a81cc04eb7becd76a953270bf4"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac599b86ccd3d43c3b6f4233edf5253f6"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac599b86ccd3d43c3b6f4233edf5253f6"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac599b86ccd3d43c3b6f4233edf5253f6"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac47e0faa1d3a4d51852a5f6700e64217"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac47e0faa1d3a4d51852a5f6700e64217"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac47e0faa1d3a4d51852a5f6700e64217"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab8670bc727e742f2acf8a7ceda31c23e"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab8670bc727e742f2acf8a7ceda31c23e"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ab8670bc727e742f2acf8a7ceda31c23e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_add7b08fc74b64f719215f917824863d4"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_add7b08fc74b64f719215f917824863d4"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_add7b08fc74b64f719215f917824863d4"></a>对于表字段，这个是该属性的字段数（objid和classid引用表本身）。对于所有其它对象类型，目前这个字段是0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_r1a5b439fe0ed47bd965338180243dc3e"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a3e57befb46da419baab7da84fed4f233"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a3e57befb46da419baab7da84fed4f233"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a3e57befb46da419baab7da84fed4f233"></a>refclassid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a99347f122d96442b86fb26b4afe34228"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a99347f122d96442b86fb26b4afe34228"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a99347f122d96442b86fb26b4afe34228"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af930190c2ec047c3b43c9ba27824899f"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af930190c2ec047c3b43c9ba27824899f"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af930190c2ec047c3b43c9ba27824899f"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a0012639c2e73476a897a5238e0e0b496"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a0012639c2e73476a897a5238e0e0b496"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a0012639c2e73476a897a5238e0e0b496"></a>被引用对象所在的系统表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_r06d96c7b96ed4729b9457cb0eda8e3ce"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a450cd68af1dd426caa0715ae35aa17ab"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a450cd68af1dd426caa0715ae35aa17ab"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a450cd68af1dd426caa0715ae35aa17ab"></a>refobjid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a525bba52e70348c78c121321410bc26a"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a525bba52e70348c78c121321410bc26a"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a525bba52e70348c78c121321410bc26a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af2739e50702f44b5bea867d6dad03b00"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af2739e50702f44b5bea867d6dad03b00"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af2739e50702f44b5bea867d6dad03b00"></a>任意OID属性</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af49d993b2fbc4c66b4ad94f52e87383f"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af49d993b2fbc4c66b4ad94f52e87383f"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af49d993b2fbc4c66b4ad94f52e87383f"></a>指定的被引用对象的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_rc9c1473d7c6e404ebb91ad70fecab314"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac85d310c52724426b44319c138db605f"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac85d310c52724426b44319c138db605f"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac85d310c52724426b44319c138db605f"></a>refobjsubid</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a6b504686dc84422994b1e393a13b7537"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a6b504686dc84422994b1e393a13b7537"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a6b504686dc84422994b1e393a13b7537"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a57d3bf04320b4c568068c59bedcc60fd"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a57d3bf04320b4c568068c59bedcc60fd"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a57d3bf04320b4c568068c59bedcc60fd"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac3084e82557540bb966fbd3a9efb570a"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac3084e82557540bb966fbd3a9efb570a"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_ac3084e82557540bb966fbd3a9efb570a"></a>对于表字段，这个是该字段的字段号（refobjid和refclassid引用表本身）。对于所有其它对象类型，目前这个字段是0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_r08df82cb811f460c802481f5a64c3681"><td class="cellrowborder" valign="top" width="16.16%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_aa3bdd58eda27499780f16b3b32b250be"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_aa3bdd58eda27499780f16b3b32b250be"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_aa3bdd58eda27499780f16b3b32b250be"></a>deptype</p>
</td>
<td class="cellrowborder" valign="top" width="11.28%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_aeb3e794700454b698b9a7ddb84239898"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_aeb3e794700454b698b9a7ddb84239898"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_aeb3e794700454b698b9a7ddb84239898"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af2a270ef143d418b950d209c7634dabd"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af2a270ef143d418b950d209c7634dabd"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_af2a270ef143d418b950d209c7634dabd"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.94%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a8e53f3a368f44f1e82046b8898c5526a"><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a8e53f3a368f44f1e82046b8898c5526a"></a><a name="zh-cn_topic_0283136814_zh-cn_topic_0237122284_zh-cn_topic_0059779334_a8e53f3a368f44f1e82046b8898c5526a"></a>一个定义这个依赖关系特定语义的代码。</p>
</td>
</tr>
</tbody>
</table>

在所有情况下，一个PG\_DEPEND记录表示被引用的对象不能在有依赖的对象被删除前删除。不过，这里还有几种由deptype定义的情况：

-   DEPENDENCY\_NORMAL \(n\)：独立创建的对象之间的一般关系。有依赖的对象可以在不影响被引用对象的情况下删除。被引用对象只有在声明了CASCADE的情况下删除，这时有依赖的对象也被删除。例子：一个表字段对其数据类型有一般依赖关系。
-   DEPENDENCY\_AUTO \(a\)：有依赖对象可以和被引用对象分别删除，并且如果删除了被引用对象则应该被自动删除（不管是RESTRICT或CASCADE模式）。例子：一个表上面的命名约束是在该表上的自动依赖关系，因此如果删除了表，它也会被删除。
-   DEPENDENCY\_INTERNAL \(i\)：有依赖的对象是作为被引用对象的一部分创建的，实际上只是它的内部实现的一部分。DROP有依赖对象是不能直接允许的（将告诉用户发出一条删除被引用对象的DROP）。一个对被引用对象的DROP将传播到有依赖对象，不管是否声明了CASCADE。
-   DEPENDENCY\_EXTENSION \(e\)：依赖对象是被依赖对象extension的一个成员（请参见[PG\_EXTENSION](PG_EXTENSION.md)）。依赖对象只可以通过在被依赖对象上DROP EXTENSION删除。函数上这个依赖类型和内部依赖一样动作，但是它为了清晰和简化gs\_dump保持分开。
-   DEPENDENCY\_PIN \(p\)：没有依赖对象；这种类型的记录标志着系统本身依赖于被引用对象，因此这个对象决不能被删除。这种类型的记录只有在initdb的时候创建。有依赖对象的字段里是零。
