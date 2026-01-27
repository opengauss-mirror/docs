# PG\_PREPARED\_XACTS<a name="ZH-CN_TOPIC_0289900641"></a>

PG\_PREPARED\_XACTS视图显示当前准备好进行两阶段提交的事务的信息。

**表 1**  PG\_PREPARED\_XACTS字段

<a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_tec9b4660705d49f58f7e7e00efd41fca"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_r7b944bb569304737a094c9a9c7908029"><th class="cellrowborder" valign="top" width="16.09%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a16cfd17470814f74b13233e1191dff41"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a16cfd17470814f74b13233e1191dff41"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a16cfd17470814f74b13233e1191dff41"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="24.48%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a20215cc211a24cfe85aa651412131b58"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a20215cc211a24cfe85aa651412131b58"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a20215cc211a24cfe85aa651412131b58"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="22.18%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a25549aafc66348059aa4aac2af6bacc6"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a25549aafc66348059aa4aac2af6bacc6"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a25549aafc66348059aa4aac2af6bacc6"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="37.25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_accbebaa4fb444945b8185ec9c7a90012"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_accbebaa4fb444945b8185ec9c7a90012"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_accbebaa4fb444945b8185ec9c7a90012"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_r9df81bbf71df4671a2f43b720d65acef"><td class="cellrowborder" valign="top" width="16.09%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_af95440b38c2d436db34e402ea9f32bb3"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_af95440b38c2d436db34e402ea9f32bb3"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_af95440b38c2d436db34e402ea9f32bb3"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_afe17c7d88a7d4561805a4114ae29d40d"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_afe17c7d88a7d4561805a4114ae29d40d"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_afe17c7d88a7d4561805a4114ae29d40d"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="22.18%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a8fd0ce75e9ba4df9866f4eddf9ce447b"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a8fd0ce75e9ba4df9866f4eddf9ce447b"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a8fd0ce75e9ba4df9866f4eddf9ce447b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_afc1177525d1045dca667d28dfd1b9de1"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_afc1177525d1045dca667d28dfd1b9de1"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_afc1177525d1045dca667d28dfd1b9de1"></a>预备事务的数字事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_rf93308b9a960487bb33be75bd7e12304"><td class="cellrowborder" valign="top" width="16.09%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a8923b3d2ca0a441ea532f52eb5cfab07"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a8923b3d2ca0a441ea532f52eb5cfab07"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a8923b3d2ca0a441ea532f52eb5cfab07"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a66e00c535a0d46c7a9e42f68f66af8fc"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a66e00c535a0d46c7a9e42f68f66af8fc"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a66e00c535a0d46c7a9e42f68f66af8fc"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.18%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a53d70a00b91c43368a6481769385ac6d"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a53d70a00b91c43368a6481769385ac6d"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a53d70a00b91c43368a6481769385ac6d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a968282c4606e4300a48c67d7532099a9"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a968282c4606e4300a48c67d7532099a9"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a968282c4606e4300a48c67d7532099a9"></a>赋予该事务的全局事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_r611cbb2a81e6427580bbf75adf2fb0c9"><td class="cellrowborder" valign="top" width="16.09%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_ab167ed7d9c6c4be081c090df652d7013"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_ab167ed7d9c6c4be081c090df652d7013"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_ab167ed7d9c6c4be081c090df652d7013"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a67f5e6ee7782481ba00f85d2509de9cc"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a67f5e6ee7782481ba00f85d2509de9cc"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a67f5e6ee7782481ba00f85d2509de9cc"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="22.18%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a7e0ed04a460a44dca21bc41bb999b30c"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a7e0ed04a460a44dca21bc41bb999b30c"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a7e0ed04a460a44dca21bc41bb999b30c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a0d24cf9b7ff1449b8b2eed5c8ceb4d55"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a0d24cf9b7ff1449b8b2eed5c8ceb4d55"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a0d24cf9b7ff1449b8b2eed5c8ceb4d55"></a>事务准备好提交的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_r55f31c98ee7b4787afe6ff044890bf5d"><td class="cellrowborder" valign="top" width="16.09%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aebf5f3bdc3054c399f3164cb6544bb2b"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aebf5f3bdc3054c399f3164cb6544bb2b"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aebf5f3bdc3054c399f3164cb6544bb2b"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aa5003f7dc83b4083aa701bf1eba37bea"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aa5003f7dc83b4083aa701bf1eba37bea"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aa5003f7dc83b4083aa701bf1eba37bea"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="22.18%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_af083a851fc96494c86221c4ff38a9154"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_af083a851fc96494c86221c4ff38a9154"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_af083a851fc96494c86221c4ff38a9154"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.rolname</p>
</td>
<td class="cellrowborder" valign="top" width="37.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_ae00f823fd3ef4d9c8da78ff754ab1354"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_ae00f823fd3ef4d9c8da78ff754ab1354"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_ae00f823fd3ef4d9c8da78ff754ab1354"></a>执行该事务的用户的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_r196e6f1799ed43a9ab487ccf46b575be"><td class="cellrowborder" valign="top" width="16.09%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a015266260cad4d8a93a207e1ecfe8a73"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a015266260cad4d8a93a207e1ecfe8a73"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a015266260cad4d8a93a207e1ecfe8a73"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="24.48%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a55123c84a3a640c28b8f3ebd7e498c1d"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a55123c84a3a640c28b8f3ebd7e498c1d"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a55123c84a3a640c28b8f3ebd7e498c1d"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="22.18%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a5c6fa071e2c3483ca66f28e1144dc725"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a5c6fa071e2c3483ca66f28e1144dc725"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_a5c6fa071e2c3483ca66f28e1144dc725"></a><a href="PG_DATABASE.md">PG_DATABASE</a>.datname</p>
</td>
<td class="cellrowborder" valign="top" width="37.25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aa93b2f3d230a4abab4ae045a8a2fbcc0"><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aa93b2f3d230a4abab4ae045a8a2fbcc0"></a><a name="zh-cn_topic_0283136574_zh-cn_topic_0237122426_zh-cn_topic_0059777963_aa93b2f3d230a4abab4ae045a8a2fbcc0"></a>执行该事务所在的数据库名。</p>
</td>
</tr>
</tbody>
</table>
