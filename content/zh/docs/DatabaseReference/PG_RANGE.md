# PG\_RANGE<a name="ZH-CN_TOPIC_0289900661"></a>

PG\_RANGE系统表存储关于范围类型的信息。除了[PG\_TYPE](PG_TYPE.md)里类型的记录。

**表 1**  PG\_RANGE字段

<a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_t14023b1924564a5e9e78b1b4522499d4"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r4e6631f513f14aa896f0ea22ec21ac2e"><th class="cellrowborder" valign="top" width="18.04%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a254b78dcb69b44928c71afba9f4888f4"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a254b78dcb69b44928c71afba9f4888f4"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a254b78dcb69b44928c71afba9f4888f4"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.41%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a67d752ce4cd94bc48af58f15a45c87a7"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a67d752ce4cd94bc48af58f15a45c87a7"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a67d752ce4cd94bc48af58f15a45c87a7"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="28.03%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a56b16a82706d4ae2a9178d2b8d0d3d97"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a56b16a82706d4ae2a9178d2b8d0d3d97"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a56b16a82706d4ae2a9178d2b8d0d3d97"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="41.52%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af33d0fe92e7e440c81fd8dd91f4b04b1"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af33d0fe92e7e440c81fd8dd91f4b04b1"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af33d0fe92e7e440c81fd8dd91f4b04b1"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r04e67f5992524433bd9c3398107bb316"><td class="cellrowborder" valign="top" width="18.04%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a0f246ea2a87246b3b977590eb6812c69"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a0f246ea2a87246b3b977590eb6812c69"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a0f246ea2a87246b3b977590eb6812c69"></a>rngtypid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a2fabc5649f54467cb02289cd971ab36c"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a2fabc5649f54467cb02289cd971ab36c"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a2fabc5649f54467cb02289cd971ab36c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a4e1243b60ae9461a930696864c4a3159"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a4e1243b60ae9461a930696864c4a3159"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a4e1243b60ae9461a930696864c4a3159"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="41.52%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a75dd51d670c84667b387df794c1fcccc"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a75dd51d670c84667b387df794c1fcccc"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a75dd51d670c84667b387df794c1fcccc"></a>范围类型的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r5a5b88d220004e62b53218ea6f6870ca"><td class="cellrowborder" valign="top" width="18.04%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a8370ca9489e64506a99236819b881c04"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a8370ca9489e64506a99236819b881c04"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a8370ca9489e64506a99236819b881c04"></a>rngsubtype</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a17cb463a1a0042c38313ad6d1353ba91"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a17cb463a1a0042c38313ad6d1353ba91"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a17cb463a1a0042c38313ad6d1353ba91"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a2e3d95811cb64efe97e37beb3ae5aabb"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a2e3d95811cb64efe97e37beb3ae5aabb"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a2e3d95811cb64efe97e37beb3ae5aabb"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="41.52%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a1ba9cb40ad624c5a9be2fd0ae62487a9"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a1ba9cb40ad624c5a9be2fd0ae62487a9"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a1ba9cb40ad624c5a9be2fd0ae62487a9"></a>这个范围类型的元素类型（子类型）的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r5e4d542d6f7c46ecb6bfa0ace6895323"><td class="cellrowborder" valign="top" width="18.04%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aa812b3f1a62f446bbf272da817e1223a"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aa812b3f1a62f446bbf272da817e1223a"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aa812b3f1a62f446bbf272da817e1223a"></a>rngcollation</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a3c3d1d1cedab439eb710b1b8e8964312"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a3c3d1d1cedab439eb710b1b8e8964312"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a3c3d1d1cedab439eb710b1b8e8964312"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a59a637af38d1492a98c0722946e1f7db"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a59a637af38d1492a98c0722946e1f7db"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a59a637af38d1492a98c0722946e1f7db"></a><a href="PG_COLLATION.md">PG_COLLATION</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="41.52%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a6a04fe0e13d04eb1aec77ed0d2891278"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a6a04fe0e13d04eb1aec77ed0d2891278"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a6a04fe0e13d04eb1aec77ed0d2891278"></a>用于范围比较的排序规则的OID，如果没有则为零。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r52e5c9c931084a52937cc948e60b5a2c"><td class="cellrowborder" valign="top" width="18.04%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aa4fd917d0e9244af82200067215dd815"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aa4fd917d0e9244af82200067215dd815"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aa4fd917d0e9244af82200067215dd815"></a>rngsubopc</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_ad51c0ffc032647e7916d9e6a0c79b5ce"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_ad51c0ffc032647e7916d9e6a0c79b5ce"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_ad51c0ffc032647e7916d9e6a0c79b5ce"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_abf793fbd6e5e40099df1cd5401eae8d5"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_abf793fbd6e5e40099df1cd5401eae8d5"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_abf793fbd6e5e40099df1cd5401eae8d5"></a><a href="PG_OPCLASS.md">PG_OPCLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="41.52%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af4bc02a0ee3c4ab284fd5b4bbec40b21"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af4bc02a0ee3c4ab284fd5b4bbec40b21"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af4bc02a0ee3c4ab284fd5b4bbec40b21"></a>用于范围比较的子类型的操作符类的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r8e0e8e4b91b340b0a65912a3c555d2ec"><td class="cellrowborder" valign="top" width="18.04%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aaafb3968ebd3402ea229c0a94a3a905f"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aaafb3968ebd3402ea229c0a94a3a905f"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_aaafb3968ebd3402ea229c0a94a3a905f"></a>rngcanonical</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a4f0b5df8532b430a88ec5c86f8c082f2"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a4f0b5df8532b430a88ec5c86f8c082f2"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a4f0b5df8532b430a88ec5c86f8c082f2"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af5286da9f4364411a0e5c7ad74fe214a"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af5286da9f4364411a0e5c7ad74fe214a"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_af5286da9f4364411a0e5c7ad74fe214a"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="41.52%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a698a34f5924e432994e63a62ff1bcc5a"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a698a34f5924e432994e63a62ff1bcc5a"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a698a34f5924e432994e63a62ff1bcc5a"></a>转换范围类型为规范格式的函数名，如果没有则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_r00a3a77902524ddda1900d023a993ddb"><td class="cellrowborder" valign="top" width="18.04%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_acea22bc4471e47debf4c55dadf56f593"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_acea22bc4471e47debf4c55dadf56f593"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_acea22bc4471e47debf4c55dadf56f593"></a>rngsubdiff</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_ab71b2475edd24293aa5d5e940d108dff"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_ab71b2475edd24293aa5d5e940d108dff"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_ab71b2475edd24293aa5d5e940d108dff"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="28.03%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a8631df77cd8a4700b43e8e8ec4ee22ac"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a8631df77cd8a4700b43e8e8ec4ee22ac"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a8631df77cd8a4700b43e8e8ec4ee22ac"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="41.52%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a10743efad47a45f59872da68e56cf723"><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a10743efad47a45f59872da68e56cf723"></a><a name="zh-cn_topic_0283136594_zh-cn_topic_0237122309_zh-cn_topic_0059778637_a10743efad47a45f59872da68e56cf723"></a>返回两个double precision元素值的不同的函数名，如果没有则为0。</p>
</td>
</tr>
</tbody>
</table>

rngsubopc（如果元素类型是可排序的，则加上rngcollation）决定用于范围类型的排序顺序。当元素类型是离散的时使用rngcanonical。

