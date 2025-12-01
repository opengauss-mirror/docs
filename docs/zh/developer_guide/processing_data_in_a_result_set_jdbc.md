# 处理结果集

## 设置结果集类型<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_s93cc9b6475b04b76815b70162d174374"></a>

不同类型的结果集有各自的应用场景，应用程序需要根据实际情况选择相应的结果集类型。在执行SQL语句过程中，都需要先创建相应的语句对象，而部分创建语句对象的方法提供了设置结果集类型的功能。具体的参数设置如[表1](#zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_t600ecae93052471d819154e0f14d8fc3)所示。涉及的Connection的方法如下：

```
//创建一个Statement对象，该对象将生成具有给定类型和并发性的ResultSet对象。
createStatement(int resultSetType, int resultSetConcurrency);

//创建一个PreparedStatement对象，该对象将生成具有给定类型和并发性的ResultSet对象。
prepareStatement(String sql, int resultSetType, int resultSetConcurrency);

//创建一个CallableStatement对象，该对象将生成具有给定类型和并发性的ResultSet对象。
prepareCall(String sql, int resultSetType, int resultSetConcurrency);
```

**表 1**  结果集类型

<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_t600ecae93052471d819154e0f14d8fc3"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r7b4a3ec331814e1381971711160beda8"><th class="cellrowborder" valign="top" width="27.339999999999996%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4329bfe9229547ccb9cfa29f7dce0a1a"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4329bfe9229547ccb9cfa29f7dce0a1a"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4329bfe9229547ccb9cfa29f7dce0a1a"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="72.66%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ab17f8305261c40d48000b1b5d764b536"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ab17f8305261c40d48000b1b5d764b536"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ab17f8305261c40d48000b1b5d764b536"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r328d9beaf4fe43f1a178a1a8377d85bd"><td class="cellrowborder" valign="top" width="27.339999999999996%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4ee7895a074547779a13df1729b67212"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4ee7895a074547779a13df1729b67212"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4ee7895a074547779a13df1729b67212"></a>resultSetType</p>
</td>
<td class="cellrowborder" valign="top" width="72.66%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a85c680e5080f4f6bbdfde169527811d8"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a85c680e5080f4f6bbdfde169527811d8"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a85c680e5080f4f6bbdfde169527811d8"></a>表示结果集的类型，具体有三种类型：</p>
<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_u8cad86b9555240d88a83bccc73342f6c"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_u8cad86b9555240d88a83bccc73342f6c"></a><ul id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_u8cad86b9555240d88a83bccc73342f6c"><li>ResultSet.TYPE_FORWARD_ONLY：ResultSet只能向前移动。是缺省值。</li><li>ResultSet.TYPE_SCROLL_SENSITIVE：在修改后重新滚动到修改所在行，可以看到修改后的结果。</li><li>ResultSet.TYPE_SCROLL_INSENSITIVE：对可修改例程所做的编辑不进行显示。</li></ul>
<div class="note" id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_n000b163e08a44190b9b2a1cf1f178d6f"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_n000b163e08a44190b9b2a1cf1f178d6f"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_n000b163e08a44190b9b2a1cf1f178d6f"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae2f5d58718f24e80b1fcc782c40787d6"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae2f5d58718f24e80b1fcc782c40787d6"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae2f5d58718f24e80b1fcc782c40787d6"></a>结果集从数据库中读取了数据之后，即使类型是ResultSet.TYPE_SCROLL_SENSITIVE，也不会看到由其他事务在这之后引起的改变。调用ResultSet的refreshRow()方法，可进入数据库并从其中取得当前游标所指记录的最新数据。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rca72633e28324d0b9715d046cc567f48"><td class="cellrowborder" valign="top" width="27.339999999999996%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aa34678a38d3e44118f9e6bed93bc9e47"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aa34678a38d3e44118f9e6bed93bc9e47"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aa34678a38d3e44118f9e6bed93bc9e47"></a>resultSetConcurrency</p>
</td>
<td class="cellrowborder" valign="top" width="72.66%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae57df2aca96e4274942f16168f50140a"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae57df2aca96e4274942f16168f50140a"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae57df2aca96e4274942f16168f50140a"></a>表示结果集的并发，具体有两种类型：</p>
<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ue5a637db261d41b0bca3f1668c8dfcc6"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ue5a637db261d41b0bca3f1668c8dfcc6"></a><ul id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ue5a637db261d41b0bca3f1668c8dfcc6"><li>ResultSet.CONCUR_READ_ONLY：如果不从结果集中的数据建立一个新的更新语句，不能对结果集中的数据进行更新。</li><li>ResultSet.CONCUR_UPDATEABLE：可改变的结果集。对于可滚动的结果集，可对结果集进行适当的改变。</li></ul>
</td>
</tr>
</tbody>
</table>

## 在结果集中定位<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_sceaee6e4a6464bf8929d3f5dea5360dc"></a>

ResultSet对象具有指向其当前数据行的光标。最初，光标被置于第一行之前。next方法将光标移动到下一行；因为该方法在ResultSet对象没有下一行时返回false，所以可以在while循环中使用它来迭代结果集。但对于可滚动的结果集，JDBC驱动程序提供更多的定位方法，使ResultSet指向特定的行。定位方法如[表2](#zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_t0e427b4d1b1f4d67899fac4ad3df1049)所示。

**表 2**  在结果集中定位的方法

<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_t0e427b4d1b1f4d67899fac4ad3df1049"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r17a9962cecb544b9b8c6a8cd81c6915c"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a109e4abb3fc3452d8fb164d41f64584f"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a109e4abb3fc3452d8fb164d41f64584f"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a109e4abb3fc3452d8fb164d41f64584f"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a82e1d80b4d6a4b04a38690af4197abee"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a82e1d80b4d6a4b04a38690af4197abee"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a82e1d80b4d6a4b04a38690af4197abee"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r6a00f2ad696c44ae9efb3b90dbb589c9"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a6823265574f34f6c92cbd8a69745e174"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a6823265574f34f6c92cbd8a69745e174"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a6823265574f34f6c92cbd8a69745e174"></a>next()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4410f65ee1ae4ed4ad1cf233716a4929"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4410f65ee1ae4ed4ad1cf233716a4929"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a4410f65ee1ae4ed4ad1cf233716a4929"></a>把ResultSet向下移动一行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r10b1945377754bbba1671d812e863d11"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a775789d5dc7f48e09bf3fac8ee035cc5"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a775789d5dc7f48e09bf3fac8ee035cc5"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a775789d5dc7f48e09bf3fac8ee035cc5"></a>previous()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5dde57f23f184622b500515eaacc5e12"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5dde57f23f184622b500515eaacc5e12"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5dde57f23f184622b500515eaacc5e12"></a>把ResultSet向上移动一行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r7ec40ce0cfb34fdf9da9e52087172f7a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aea52737ea6d444f583274fc848e19c9d"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aea52737ea6d444f583274fc848e19c9d"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aea52737ea6d444f583274fc848e19c9d"></a>beforeFirst()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7f6a354b3d4c493ea02276574982dbee"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7f6a354b3d4c493ea02276574982dbee"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7f6a354b3d4c493ea02276574982dbee"></a>把ResultSet定位到第一行之前。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r5f1bfc550e6f439aa4ff65a1821e5a70"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aea42a3f499c44098b9072cce33087f30"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aea42a3f499c44098b9072cce33087f30"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aea42a3f499c44098b9072cce33087f30"></a>afterLast()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a8f8844c3bbaa4c6b96562280d511eab9"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a8f8844c3bbaa4c6b96562280d511eab9"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a8f8844c3bbaa4c6b96562280d511eab9"></a>把ResultSet定位到最后一行之后。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r683366ad571642f38a653a9f6afe8161"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a26248b12c4214a1fb7708abe7842f33e"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a26248b12c4214a1fb7708abe7842f33e"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a26248b12c4214a1fb7708abe7842f33e"></a>first()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a85d33eed9df1455787c024f82ccb4602"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a85d33eed9df1455787c024f82ccb4602"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a85d33eed9df1455787c024f82ccb4602"></a>把ResultSet定位到第一行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_re83e83db320b4a52a1b695e71b6d36a9"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a390a6d6742fe421eb3155e8bda5350ea"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a390a6d6742fe421eb3155e8bda5350ea"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a390a6d6742fe421eb3155e8bda5350ea"></a>last()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ab0bc6da78fac4ad7af57f5441c58e160"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ab0bc6da78fac4ad7af57f5441c58e160"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ab0bc6da78fac4ad7af57f5441c58e160"></a>把ResultSet定位到最后一行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r1c09c1086a7d4457b50001b5746775ca"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a66323118de654979a72b430f6a0a1ff2"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a66323118de654979a72b430f6a0a1ff2"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a66323118de654979a72b430f6a0a1ff2"></a>absolute(int)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a580f9c69941042b59117870541d7dee7"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a580f9c69941042b59117870541d7dee7"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a580f9c69941042b59117870541d7dee7"></a>把ResultSet移动到参数指定的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r3916ee866c2c4781bf982c4f3d75b81e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a20d775e211144decbc6cb360d65853ee"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a20d775e211144decbc6cb360d65853ee"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a20d775e211144decbc6cb360d65853ee"></a>relative(int)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a0ea53a4f8e7b4bce84c3ef1ba31337da"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a0ea53a4f8e7b4bce84c3ef1ba31337da"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a0ea53a4f8e7b4bce84c3ef1ba31337da"></a>通过设置为1向前（设置为1，相当于next()）或者向后（设置为-1，相当于previous()）移动参数指定的行。</p>
</td>
</tr>
</tbody>
</table>

## 获取结果集中光标的位置<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_s10bf3d31a8fe49c2ae85af2fe9ff9d2d"></a>

对于可滚动的结果集，可能会调用定位方法来改变光标的位置。JDBC驱动程序提供了获取结果集中光标所处位置的方法。获取光标位置的方法如[表3](#zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_tfc10dffc5995480281e8065b4b03d370)所示。

**表 3**  获取结果集光标的位置

<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_tfc10dffc5995480281e8065b4b03d370"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rfa177505a62e4400b336f41a9123021c"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a59a46ab0b7c541298b4c1d5077b1bcd1"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a59a46ab0b7c541298b4c1d5077b1bcd1"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a59a46ab0b7c541298b4c1d5077b1bcd1"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a0f873a7e0e3d493a9f416ab1dcef0b7d"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a0f873a7e0e3d493a9f416ab1dcef0b7d"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a0f873a7e0e3d493a9f416ab1dcef0b7d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ra05d5ffe9bad4653ad7320c3c308cc40"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7af0192c0cc84ca4a20c9f40b1927257"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7af0192c0cc84ca4a20c9f40b1927257"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7af0192c0cc84ca4a20c9f40b1927257"></a>isFirst()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2a83aeafba6149c292e5691c1aba3db5"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2a83aeafba6149c292e5691c1aba3db5"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2a83aeafba6149c292e5691c1aba3db5"></a>是否在一行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r63fd4525b9924ce98218dcaea4469abf"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5d238246246c42e39ca20e6b996ed8c8"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5d238246246c42e39ca20e6b996ed8c8"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5d238246246c42e39ca20e6b996ed8c8"></a>isLast()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2f343d6fcb2a484fa429a2113c70dc74"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2f343d6fcb2a484fa429a2113c70dc74"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2f343d6fcb2a484fa429a2113c70dc74"></a>是否在最后一行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rd28813486f184570938a0685ec327eb7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a89df4d9e0cee400f9b6490376747b542"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a89df4d9e0cee400f9b6490376747b542"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a89df4d9e0cee400f9b6490376747b542"></a>isBeforeFirst()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aa6bab7e0765f4abf98c2c5605224772b"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aa6bab7e0765f4abf98c2c5605224772b"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_aa6bab7e0765f4abf98c2c5605224772b"></a>是否在第一行之前。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r2ed68fffcbfc4c4f93503ea88feddeaa"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a02948372a8b74a34a3b7f5bbd2eac56e"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a02948372a8b74a34a3b7f5bbd2eac56e"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a02948372a8b74a34a3b7f5bbd2eac56e"></a>isAfterLast()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a89fde6b4588043809c3273f2c7ccc0e8"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a89fde6b4588043809c3273f2c7ccc0e8"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a89fde6b4588043809c3273f2c7ccc0e8"></a>是否在最后一行之后。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r4e1674f24bc04b9ea344923ece93e3e7"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_adfaea8fde5534d3e8697a3ee67de22e5"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_adfaea8fde5534d3e8697a3ee67de22e5"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_adfaea8fde5534d3e8697a3ee67de22e5"></a>getRow()</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5429187d2db4481b95d2843c4eb94218"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5429187d2db4481b95d2843c4eb94218"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a5429187d2db4481b95d2843c4eb94218"></a>获取当前在第几行。</p>
</td>
</tr>
</tbody>
</table>

## 获取结果集中的数据<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_scea8b1b96fdb404f931b9a48516a8a98"></a>

ResultSet对象提供了丰富的方法，以获取结果集中的数据。获取数据常用的方法如[表4](#zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_t92d6c213fa8b403796ae7da7e7cd6c46)所示，其他方法请参考JDK官方文档。

**表 4**  ResultSet对象的常用方法

<a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_t92d6c213fa8b403796ae7da7e7cd6c46"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rfe6fefa164584554879acf42ffc78647"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af56686dbe21244a1a19c7130af9bd1e6"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af56686dbe21244a1a19c7130af9bd1e6"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af56686dbe21244a1a19c7130af9bd1e6"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7a0470e7ebf947a5b38a761422e7dd9d"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7a0470e7ebf947a5b38a761422e7dd9d"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a7a0470e7ebf947a5b38a761422e7dd9d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r27a35f47656748dd96e6035142150ff8"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2ce2b64af28443fba084381d63b2abe9"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2ce2b64af28443fba084381d63b2abe9"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2ce2b64af28443fba084381d63b2abe9"></a>int getInt(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af72526a88594480a9a99377c2fa44fb5"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af72526a88594480a9a99377c2fa44fb5"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af72526a88594480a9a99377c2fa44fb5"></a>按列标获取int型数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ree53511aeb1c41f88b8b5041d9b8d641"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae66ff90db0e34c4db4f2363efcc343b4"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae66ff90db0e34c4db4f2363efcc343b4"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae66ff90db0e34c4db4f2363efcc343b4"></a>int getInt(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a1ecd9fb4f6234022b2542dc753982d6c"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a1ecd9fb4f6234022b2542dc753982d6c"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a1ecd9fb4f6234022b2542dc753982d6c"></a>按列名获取int型数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rcf8381ee18cc449a921b67a298e43bf2"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2a5bc9e2be544c6cb5ba464dbcb0b654"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2a5bc9e2be544c6cb5ba464dbcb0b654"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a2a5bc9e2be544c6cb5ba464dbcb0b654"></a>String getString(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a55edc0be073e4eed960cceea5f98f59b"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a55edc0be073e4eed960cceea5f98f59b"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a55edc0be073e4eed960cceea5f98f59b"></a>按列标获取String型数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rbc031a71aeb440379d500816e423dae9"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a6919b302642a488b8c5a8525e7289297"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a6919b302642a488b8c5a8525e7289297"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a6919b302642a488b8c5a8525e7289297"></a>String getString(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a198baed7885b4f0ea73db2b24688d8a9"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a198baed7885b4f0ea73db2b24688d8a9"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a198baed7885b4f0ea73db2b24688d8a9"></a>按列名获取String型数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_rc51eab1e26b24f1a87797353b38684fe"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae2f8c02c4a09402687b79c53586a149e"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae2f8c02c4a09402687b79c53586a149e"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ae2f8c02c4a09402687b79c53586a149e"></a>Date getDate(int columnIndex)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af39dfdf06b694b949221ad7d1ac46525"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af39dfdf06b694b949221ad7d1ac46525"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_af39dfdf06b694b949221ad7d1ac46525"></a>按列标获取Date型数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_r8743ab81b1e245568839819e99e46d0e"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a486263708896450bb42d46b9cee974f2"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a486263708896450bb42d46b9cee974f2"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_a486263708896450bb42d46b9cee974f2"></a>Date getDate(String columnLabel)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ac8fb6406c6e54b41b6228c1d3d18c788"><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ac8fb6406c6e54b41b6228c1d3d18c788"></a><a name="zh-cn_topic_0237120384_zh-cn_topic_0213179150_zh-cn_topic_0189250321_zh-cn_topic_0059778370_ac8fb6406c6e54b41b6228c1d3d18c788"></a>按列名获取Date型数据。</p>
</td>
</tr>
</tbody>
</table>
