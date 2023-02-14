# PG\_ENUM

PG\_ENUM系统表包含显示每个枚举类型值和标签的记录。给定枚举类型的内部表示实际上是PG\_ENUM里面相关行的OID。

**表 1**  PG\_ENUM字段

<a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_tf7bd494431674480b3c55c70578ffddd"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_r966712bcccb04444a50bdf4c51a2bf12"><th class="cellrowborder" valign="top" width="18.98%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ae1ff6842b5c94ff085bdf74327200f39"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ae1ff6842b5c94ff085bdf74327200f39"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ae1ff6842b5c94ff085bdf74327200f39"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.08%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a1d7e77d9c656490e82c5ddab6fa75002"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a1d7e77d9c656490e82c5ddab6fa75002"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a1d7e77d9c656490e82c5ddab6fa75002"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="19.439999999999998%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_af7ec3e21f6644bc08807b968f3bf8acd"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_af7ec3e21f6644bc08807b968f3bf8acd"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_af7ec3e21f6644bc08807b968f3bf8acd"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="47.5%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a0e9e7921790d4f6d9c28962d1cf6c313"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a0e9e7921790d4f6d9c28962d1cf6c313"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a0e9e7921790d4f6d9c28962d1cf6c313"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_r6637989faa3d465e9b2be0b701deaeeb"><td class="cellrowborder" valign="top" width="18.98%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_aa393c661775a4c6eb103e20529f51b0f"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_aa393c661775a4c6eb103e20529f51b0f"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_aa393c661775a4c6eb103e20529f51b0f"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="14.08%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a428ce56b630c4e1eacd35836aefa5d2c"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a428ce56b630c4e1eacd35836aefa5d2c"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a428ce56b630c4e1eacd35836aefa5d2c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ad1d1c83a751d44129fa210deade636a5"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ad1d1c83a751d44129fa210deade636a5"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ad1d1c83a751d44129fa210deade636a5"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a0b279efa3bac4bd4aa6cd94e0a298895"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a0b279efa3bac4bd4aa6cd94e0a298895"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a0b279efa3bac4bd4aa6cd94e0a298895"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_r4a3444882685423dae8e4933daf47bba"><td class="cellrowborder" valign="top" width="18.98%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a938c512114ef4f9d8f7d7aeddaec44ce"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a938c512114ef4f9d8f7d7aeddaec44ce"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a938c512114ef4f9d8f7d7aeddaec44ce"></a>enumtypid</p>
</td>
<td class="cellrowborder" valign="top" width="14.08%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a6c8d74c04a9643e492cb78d1d140cc94"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a6c8d74c04a9643e492cb78d1d140cc94"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a6c8d74c04a9643e492cb78d1d140cc94"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ab2ac6938c47b4c1eb07b2e59594d079b"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ab2ac6938c47b4c1eb07b2e59594d079b"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ab2ac6938c47b4c1eb07b2e59594d079b"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="47.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a726e6b243f5f471f9f6770674f07f61d"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a726e6b243f5f471f9f6770674f07f61d"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a726e6b243f5f471f9f6770674f07f61d"></a>拥有这个枚举值的pg_type记录的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_r633c56cf5bef4fbfa9da8d2d36383917"><td class="cellrowborder" valign="top" width="18.98%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_af8090cfa66d74a59a5ee36d4a09309da"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_af8090cfa66d74a59a5ee36d4a09309da"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_af8090cfa66d74a59a5ee36d4a09309da"></a>enumsortorder</p>
</td>
<td class="cellrowborder" valign="top" width="14.08%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a2522c6dcc7ed4673a2c307e37b6b216e"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a2522c6dcc7ed4673a2c307e37b6b216e"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a2522c6dcc7ed4673a2c307e37b6b216e"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a74aaac83803b4e2e84d8c729a3b61a47"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a74aaac83803b4e2e84d8c729a3b61a47"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a74aaac83803b4e2e84d8c729a3b61a47"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ae8348969a6d7411b96387c871f52edc9"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ae8348969a6d7411b96387c871f52edc9"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ae8348969a6d7411b96387c871f52edc9"></a>这个枚举值在它的枚举类型中的排序位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_re8b98516af1f426fb533700eff8681f8"><td class="cellrowborder" valign="top" width="18.98%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a9433794d917046c0a2cb51723be9423f"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a9433794d917046c0a2cb51723be9423f"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a9433794d917046c0a2cb51723be9423f"></a>enumlabel</p>
</td>
<td class="cellrowborder" valign="top" width="14.08%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a35ca5f0e10124d1abf3933daeefac758"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a35ca5f0e10124d1abf3933daeefac758"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_a35ca5f0e10124d1abf3933daeefac758"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="19.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ab77824de9c29486295a47bfdc3c65e10"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ab77824de9c29486295a47bfdc3c65e10"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ab77824de9c29486295a47bfdc3c65e10"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ad69b6753bfc448548fbeabe3baa7e016"><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ad69b6753bfc448548fbeabe3baa7e016"></a><a name="zh-cn_topic_0283136572_zh-cn_topic_0237122287_zh-cn_topic_0059777741_ad69b6753bfc448548fbeabe3baa7e016"></a>这个枚举值的文本标签。</p>
</td>
</tr>
</tbody>
</table>

PG\_ENUM行的OID跟着一个特殊规则：偶数的OID保证用和它们的枚举类型一样的排序顺序排序。也就是，如果两个偶数OID属于相同的枚举类型，那么较小的OID必须有较小enumsortorder值。奇数OID需要毫无关系的排序顺序。这个规则允许枚举比较例程在许多常见情况下避开目录查找。创建和修改枚举类型的例程只要可能就尝试分配偶数OID给枚举值。

当创建了一个枚举类型时，它的成员赋予了排序顺序位置1到n。但是随后添加的成员可能会分配enumsortorder的负值或分数值。对这些值的唯一要求是它们要正确的排序和在每个枚举类型中唯一。
