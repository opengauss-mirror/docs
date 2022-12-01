# DV\_SESSION\_LONGOPS<a name="ZH-CN_TOPIC_0000001116401258"></a>

DV\_SESSION\_LONGOPS视图存储当前正在执行的操作的进度。该视图需要授权访问。

**表 1**  DV\_SESSION\_LONGOPS字段

<a name="zh-cn_topic_0059778522_tb97c127d18eb4eda81742a274e687cf3"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778522_reb652dd1cd73421980df31102f7b24f5"><th class="cellrowborder" valign="top" width="19.56%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778522_a5bfb636f284f4df196b4d8a2aef99d59"><a name="zh-cn_topic_0059778522_a5bfb636f284f4df196b4d8a2aef99d59"></a><a name="zh-cn_topic_0059778522_a5bfb636f284f4df196b4d8a2aef99d59"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.37%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778522_af2161459154e408688b8c2d914eed918"><a name="zh-cn_topic_0059778522_af2161459154e408688b8c2d914eed918"></a><a name="zh-cn_topic_0059778522_af2161459154e408688b8c2d914eed918"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63.07000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778522_a9a3acb9f4b484d3b94935b59a8c70666"><a name="zh-cn_topic_0059778522_a9a3acb9f4b484d3b94935b59a8c70666"></a><a name="zh-cn_topic_0059778522_a9a3acb9f4b484d3b94935b59a8c70666"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778522_r646fddda308344e693c10107458cdd3d"><td class="cellrowborder" valign="top" width="19.56%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778522_ae459368b0ba4440ba0fc1a969839d406"><a name="zh-cn_topic_0059778522_ae459368b0ba4440ba0fc1a969839d406"></a><a name="zh-cn_topic_0059778522_ae459368b0ba4440ba0fc1a969839d406"></a>sid</p>
</td>
<td class="cellrowborder" valign="top" width="17.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778522_a587cff10d7e346408214d3a930297b2a"><a name="zh-cn_topic_0059778522_a587cff10d7e346408214d3a930297b2a"></a><a name="zh-cn_topic_0059778522_a587cff10d7e346408214d3a930297b2a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.07000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778522_a541e481e32e5469080c74fe01ac86f43"><a name="zh-cn_topic_0059778522_a541e481e32e5469080c74fe01ac86f43"></a><a name="zh-cn_topic_0059778522_a541e481e32e5469080c74fe01ac86f43"></a>当前正在执行的后台进程的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778522_recb247bedfd149f89cbd99ee25a3f439"><td class="cellrowborder" valign="top" width="19.56%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778522_a6108de28c0594ddcafe274fa8c9b098a"><a name="zh-cn_topic_0059778522_a6108de28c0594ddcafe274fa8c9b098a"></a><a name="zh-cn_topic_0059778522_a6108de28c0594ddcafe274fa8c9b098a"></a>serial#</p>
</td>
<td class="cellrowborder" valign="top" width="17.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778522_a3be93a45c9514f6f9d8f0f24cf9ca4c9"><a name="zh-cn_topic_0059778522_a3be93a45c9514f6f9d8f0f24cf9ca4c9"></a><a name="zh-cn_topic_0059778522_a3be93a45c9514f6f9d8f0f24cf9ca4c9"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="63.07000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778522_ad8289f39a1d94598b2da14d9e57b362b"><a name="zh-cn_topic_0059778522_ad8289f39a1d94598b2da14d9e57b362b"></a><a name="zh-cn_topic_0059778522_ad8289f39a1d94598b2da14d9e57b362b"></a>当前正在执行的后台进程的序号，在<span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span>中为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778522_r96b31205a16e448bb1072491014b7c63"><td class="cellrowborder" valign="top" width="19.56%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778522_a5c7696e0d47247019461c98ac62c9832"><a name="zh-cn_topic_0059778522_a5c7696e0d47247019461c98ac62c9832"></a><a name="zh-cn_topic_0059778522_a5c7696e0d47247019461c98ac62c9832"></a>sofar</p>
</td>
<td class="cellrowborder" valign="top" width="17.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778522_a399f34fc25984ead8e0002a666d3b63f"><a name="zh-cn_topic_0059778522_a399f34fc25984ead8e0002a666d3b63f"></a><a name="zh-cn_topic_0059778522_a399f34fc25984ead8e0002a666d3b63f"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="63.07000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778522_a688b97a708f54c1aa81bc8bea213fc1d"><a name="zh-cn_topic_0059778522_a688b97a708f54c1aa81bc8bea213fc1d"></a><a name="zh-cn_topic_0059778522_a688b97a708f54c1aa81bc8bea213fc1d"></a>目前完成的工作量，在<span id="text0574122716197"><a name="text0574122716197"></a><a name="text0574122716197"></a>openGauss</span>中为空。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778522_re5e3ffcbf75a4f83903447762d853b3c"><td class="cellrowborder" valign="top" width="19.56%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778522_ae8777602843c426e899de5e7e97ef4ce"><a name="zh-cn_topic_0059778522_ae8777602843c426e899de5e7e97ef4ce"></a><a name="zh-cn_topic_0059778522_ae8777602843c426e899de5e7e97ef4ce"></a>totalwork</p>
</td>
<td class="cellrowborder" valign="top" width="17.37%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778522_a8c533c7d72174b5eaead65cc473b313d"><a name="zh-cn_topic_0059778522_a8c533c7d72174b5eaead65cc473b313d"></a><a name="zh-cn_topic_0059778522_a8c533c7d72174b5eaead65cc473b313d"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="63.07000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778522_ab5874a4cb99c4a44a29e897fc00a4217"><a name="zh-cn_topic_0059778522_ab5874a4cb99c4a44a29e897fc00a4217"></a><a name="zh-cn_topic_0059778522_ab5874a4cb99c4a44a29e897fc00a4217"></a>工作总量，在<span id="text12520192961919"><a name="text12520192961919"></a><a name="text12520192961919"></a>openGauss</span>中为空。</p>
</td>
</tr>
</tbody>
</table>
