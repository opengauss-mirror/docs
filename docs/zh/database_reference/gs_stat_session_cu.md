# GS\_STAT\_SESSION\_CU

GS\_STAT\_SESSION\_CU视图查询openGauss各个节点，当前运行session的CU命中情况。session退出相应的统计数据会清零。openGauss重启后，统计数据也会清零。

**表 1**  GS\_STAT\_SESSION\_CU字段

<a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_t59b78e1aadcb4b51a72f3825f6609837"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_r24ea6711d5c84b9eb639d55db6cf75c5"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a44af38f0e94949b68910085eea077789"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a44af38f0e94949b68910085eea077789"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a44af38f0e94949b68910085eea077789"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a30ddd37cf75041f89c22d444fea93a22"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a30ddd37cf75041f89c22d444fea93a22"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a30ddd37cf75041f89c22d444fea93a22"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a48c75e5709f842fe9ed5b4468ce09932"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a48c75e5709f842fe9ed5b4468ce09932"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a48c75e5709f842fe9ed5b4468ce09932"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_r86bb048365994ceaa0f9bb1ad581c446"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a41334e4fec9b489a8933d648df8725da"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a41334e4fec9b489a8933d648df8725da"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a41334e4fec9b489a8933d648df8725da"></a>mem_hit</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a579cb1db376847b5902263ab13fe0bdd"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a579cb1db376847b5902263ab13fe0bdd"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a579cb1db376847b5902263ab13fe0bdd"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a2fc67a79926c42f99a94feecf096f82f"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a2fc67a79926c42f99a94feecf096f82f"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a2fc67a79926c42f99a94feecf096f82f"></a>内存命中次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_rf0594461ebce4b11b6bbef64a51069be"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a02c6dcb6bfce4d0187f995b9beb58d96"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a02c6dcb6bfce4d0187f995b9beb58d96"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a02c6dcb6bfce4d0187f995b9beb58d96"></a>hdd_sync_read</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_aa6415c98750b4c56a1092c4497f35c27"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_aa6415c98750b4c56a1092c4497f35c27"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_aa6415c98750b4c56a1092c4497f35c27"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a00a33aa2882749d6b80347bfc02ab402"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a00a33aa2882749d6b80347bfc02ab402"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a00a33aa2882749d6b80347bfc02ab402"></a>硬盘同步读次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_r1fe0c4325b7b42f39ef3ebfc5c212a02"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a637293918387438eabba13e00984579f"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a637293918387438eabba13e00984579f"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a637293918387438eabba13e00984579f"></a>hdd_asyn_read</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a5dd09a9d6eed4901afb28bc2a99c5d56"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a5dd09a9d6eed4901afb28bc2a99c5d56"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a5dd09a9d6eed4901afb28bc2a99c5d56"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a3bed0abb50ed4173bfc21d9890f3e29a"><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a3bed0abb50ed4173bfc21d9890f3e29a"></a><a name="zh-cn_topic_0283137716_zh-cn_topic_0237122405_zh-cn_topic_0059777991_a3bed0abb50ed4173bfc21d9890f3e29a"></a>硬盘异步读次数。</p>
</td>
</tr>
</tbody>
</table>
