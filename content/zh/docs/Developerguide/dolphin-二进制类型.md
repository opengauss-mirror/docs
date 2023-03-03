# 二进制类型<a name="ZH-CN_TOPIC_0289900777"></a>

openGauss支持的二进制类型请参见[表1](#zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_t910f42f45b374d94afe2798c42fc5ef6)。

相比于原始的openGauss，dolphin对于二进制类型的修改主要为:

1. 新增```BINARY/VARBINARY/TINYBLOB/MEDIUMBLOB/LONGBLOB```类型。
2. 对```BLOB```类型的输入函数进行了修改，在b_compatibility_mode为on的情况下，其输入可以兼容M*数据库的普通字符串输入，输出则需要再将bytea_output参数设置为escape才能输出对应的字符串，否则会被转换成十六进制字符串的形式进行输出。
3. 对```TINYBLOB/MEDIUMBLOB/LONGBLOB```类型，在b_compatibility_mode为off的情况下也可以兼容M*数据库的普通字符串输入，输出则需要再将bytea_output参数设置为escape才能输出对应的字符串，否则会被转换成十六进制字符串的形式进行输出。

**表 1**  二进制类型

<a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_t910f42f45b374d94afe2798c42fc5ef6"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_r4c641dab15474e4d84b23ae5d6bab90b"><th class="cellrowborder" valign="top" width="16.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_afcf8ccbfcdea49368a4dc7e0498bc185"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_afcf8ccbfcdea49368a4dc7e0498bc185"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_afcf8ccbfcdea49368a4dc7e0498bc185"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="35.18%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a24e8ed03de424a75bdad6cb7a6f9a6cf"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a24e8ed03de424a75bdad6cb7a6f9a6cf"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a24e8ed03de424a75bdad6cb7a6f9a6cf"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="48%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a45f7e1ea40154bcdbbcda206cbd9cd99"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a45f7e1ea40154bcdbbcda206cbd9cd99"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a45f7e1ea40154bcdbbcda206cbd9cd99"></a>存储空间</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf63072d5d612426f9aab20483b0b4838"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a>BLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a>二进制大对象。</p>
<div class="note" id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>列存不支持BLOB类型。</p>
<p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>BLOB类型仅在dolphin.b_compatibility_mode为on的情况下才能够兼容M*数据库接收普通字符串输入的功能。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a>最大为32TB（即35184372088832字节）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf63072d5d612426f9aab20483b0b4838"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a>TINYBLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a>二进制大对象。</p>
<div class="note" id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>列存不支持TINYBLOB类型。</p>
<p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>TINYBLOB类型不需要开启dolphin.b_compatibility_mode就可以兼容M*数据库接收普通字符串输入的功能。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a>最大为255字节</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf63072d5d612426f9aab20483b0b4838"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a>MEDIUMBLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a>二进制大对象。</p>
<div class="note" id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>列存不支持MEDIUMBLOB类型。</p>
<p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>MEDIUMBLOB类型不需要开启dolphin.b_compatibility_mode就可以兼容M*数据库接收普通字符串输入的功能。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a>最大为16M - 1字节</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf63072d5d612426f9aab20483b0b4838"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aba12e41a8ee040d7a4a651a639d6574a"></a>LONGBLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a9b4f9237bae74fc4bdeffa9152281ae6"></a>二进制大对象。</p>
<div class="note" id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n331c1fd27d094cf7a90c6ee4a2e283dd"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>列存不支持LONGBLOB类型。</p>
<p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_ac93b21c3a42641ddba19a9e66a229d43"></a>LONGBLOB类型不需要开启dolphin.b_compatibility_mode就可以兼容M*数据库接收普通字符串输入的功能。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a100f9d2f6d1c41188650fa08724b0a27"></a>最大为4G - 1字节</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rc75b9f1550a84c8d9f3808f11077c5eb"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a1e1de28da3144be08f1ac294cec4ddfa"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a1e1de28da3144be08f1ac294cec4ddfa"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a1e1de28da3144be08f1ac294cec4ddfa"></a>RAW</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a725886ba60f64e96930940a865e0383c"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a725886ba60f64e96930940a865e0383c"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a725886ba60f64e96930940a865e0383c"></a>变长的十六进制类型。</p>
<div class="note" id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n7545c58ce79644b194858933fe2523b7"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n7545c58ce79644b194858933fe2523b7"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_n7545c58ce79644b194858933fe2523b7"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aa56c6af1e5e14f5392f15a4e9911f601"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aa56c6af1e5e14f5392f15a4e9911f601"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aa56c6af1e5e14f5392f15a4e9911f601"></a>列存不支持RAW类型。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aff8ea58e93444332bace62ac9fc672b7"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aff8ea58e93444332bace62ac9fc672b7"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_aff8ea58e93444332bace62ac9fc672b7"></a>4字节加上实际的十六进制字符串。最大为1GB-8203字节（即1073733621字节）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf645c21fabe14437853573dddc028950"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a>BYTEA</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"></a>变长的二进制字符串。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a>4字节加上实际的二进制字符串。最大为1GB-8203字节（即1073733621字节）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf645c21fabe14437853573dddc028950"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a>BINARY</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"></a>定长的二进制字符串。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a>4字节加上实际的二进制字符串（255字节）。最大为259字节。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_rf645c21fabe14437853573dddc028950"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a95b07813cc3549858f36f042da4d2ac5"></a>VARBINARY</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_zh-cn_topic_0058966116_p936819914415"></a>变长的二进制字符串。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a><a name="zh-cn_topic_0283136911_zh-cn_topic_0237121951_zh-cn_topic_0059778141_a190b79302eea4555b8d2a35677efc1d3"></a>4字节加上实际的二进制字符串（65535字节）。最大为65539字节。</p>
</td>
</tr>
<tr id="row174646613321"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p04649613322"><a name="p04649613322"></a><a name="p04649613322"></a>BYTEAWITHOUTORDERWITHEQUALCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p046419673217"><a name="p046419673217"></a><a name="p046419673217"></a>变长的二进制字符串（密态特性新增的类型，如果加密列的加密类型指定为确定性加密，则该列的实际类型为BYTEAWITHOUTORDERWITHEQUALCOL），元命令打印加密表将显示原始数据类型。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p15464206203213"><a name="p15464206203213"></a><a name="p15464206203213"></a>4字节加上实际的二进制字符串。最大为1GB减去53字节（即1073741771字节）。</p>
</td>
</tr>
<tr id="row1391731014327"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p991820103327"><a name="p991820103327"></a><a name="p991820103327"></a>BYTEAWITHOUTORDERCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p491813103322"><a name="p491813103322"></a><a name="p491813103322"></a>变长的二进制字符串（密态特性新增的类型，如果加密列的加密类型指定为随机加密，则该列的实际类型为BYTEAWITHOUTORDERCOL），元命令打印加密表将显示原始数据类型。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p1391812106321"><a name="p1391812106321"></a><a name="p1391812106321"></a>4字节加上实际的二进制字符串。最大为1GB减去53字节（即1073741771字节）。</p>
</td>
</tr>
<tr id="row5701370566"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p10702679562"><a name="p10702679562"></a><a name="p10702679562"></a>_BYTEAWITHOUTORDERWITHEQUALCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p770215714569"><a name="p770215714569"></a><a name="p770215714569"></a>变长的二进制字符串，密态特性新增的类型。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p1470207165616"><a name="p1470207165616"></a><a name="p1470207165616"></a>4字节加上实际的二进制字符串。最大为1GB减去53字节（即1073741771字节）。</p>
</td>
</tr>
<tr id="row105711011165620"><td class="cellrowborder" valign="top" width="16.82%" headers="mcps1.2.4.1.1 "><p id="p557112117563"><a name="p557112117563"></a><a name="p557112117563"></a>_BYTEAWITHOUTORDERCOL</p>
</td>
<td class="cellrowborder" valign="top" width="35.18%" headers="mcps1.2.4.1.2 "><p id="p657111119565"><a name="p657111119565"></a><a name="p657111119565"></a>变长的二进制字符串，密态特性新增的类型。</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="mcps1.2.4.1.3 "><p id="p75714112563"><a name="p75714112563"></a><a name="p75714112563"></a>4字节加上实际的二进制字符串。最大为1GB减去53字节（即1073741771字节）。</p>
</td>
</tr>
</tbody>
</table>


>![](public_sys-resources/icon-note.gif) **说明：** 
>
>-   除了每列的大小限制以外，每个元组的总大小也不可超过1GB-8203字节（即1073733621字节）。
>
>-   不支持直接使用BYTEAWITHOUTORDERWITHEQUALCOL、BYTEAWITHOUTORDERCOL、\_BYTEAWITHOUTORDERWITHEQUALCOL和\_BYTEAWITHOUTORDERCOL类型创建表。

示例:

```
--创建表。
openGauss=#  CREATE TABLE blob_type_t1 
(
    BT_COL1 INTEGER,
    BT_COL2 BLOB,
    BT_COL3 RAW,
    BT_COL4 BYTEA
) ;

--插入数据。
openGauss=#  INSERT INTO blob_type_t1 VALUES(10,empty_blob(),
HEXTORAW('DEADBEEF'),E'\\xDEADBEEF');

--查询表中的数据。
openGauss=#  SELECT * FROM blob_type_t1;
 bt_col1 | bt_col2 | bt_col3  |  bt_col4   
---------+---------+----------+------------
      10 |         | DEADBEEF | \xdeadbeef
(1 row)

--删除表。
openGauss=#  DROP TABLE blob_type_t1;
```

