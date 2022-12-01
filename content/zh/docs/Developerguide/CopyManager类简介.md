# CopyManager类简介<a name="ZH-CN_TOPIC_0242370283"></a>

CopyManager是 openGauss JDBC驱动中提供的一个API接口类，用于批量向openGauss数据库中导入数据。

## CopyManager的继承关系<a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_s4dfbdae5c0a04fa8b7ee4bc9b9354ca5"></a>

CopyManager类位于org.opengauss.copy Package中，继承自java.lang.Object类，该类的声明如下：

```
public class CopyManager
extends Object
```

## 构造方法<a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_scb9cfe53b31d45a8b3a21c93acdcb8e0"></a>

public CopyManager\(BaseConnection connection\)

throws SQLException

## 常用方法<a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_sf8527e491d3e4024abc6978738b264fb"></a>

**表 1**  CopyManager常用方法

<a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_tddcde5b401f44a2e9870b501fb50217d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_rc7597b3877ad46ada9245570b26f93ad"><th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"></a>返回值</p>
</th>
<th class="cellrowborder" valign="top" width="37.22%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"></a>throws</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_r79be1f43583944909d30b84a6d8bc083"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"></a>CopyIn</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"></a>copyIn(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"></a>SQLException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_r3d12a2da37314b4da4426a296164b498"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9417af508199433197394eefe23f986a"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9417af508199433197394eefe23f986a"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9417af508199433197394eefe23f986a"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"></a>copyIn(String sql, InputStream from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"></a>使用COPY FROM STDIN从InputStream中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_r371cbbd25d0c4870af5b5d73ad1355f6"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"></a>copyIn(String sql, InputStream from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"></a>使用COPY FROM STDIN从InputStream中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_rb76b1e26647d4bc8ada0ad16ac1c2489"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"></a>copyIn(String sql, Reader from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"></a>使用COPY FROM STDIN从Reader中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a55407b888d324a3bba340d116b9329ac"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a55407b888d324a3bba340d116b9329ac"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a55407b888d324a3bba340d116b9329ac"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_r3469c6447ccc4894b3d4709f98b89490"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"></a>copyIn(String sql, Reader from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a641c522264554cf5b65bc97735cb1542"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a641c522264554cf5b65bc97735cb1542"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a641c522264554cf5b65bc97735cb1542"></a>使用COPY FROM STDIN从Reader中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_rb0a3605b421248c2a1fb597086c864f9"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"></a>CopyOut</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"></a>copyOut(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"></a>SQLException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_rb7f2401d46a549ec85faf82b3863bdea"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a72eccf2a376348678cdb37207888323d"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a72eccf2a376348678cdb37207888323d"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a72eccf2a376348678cdb37207888323d"></a>copyOut(String sql, OutputStream to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"></a>将一个COPY TO STDOUT的结果集从数据库发送到OutputStream类中。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_rf1eb47180fd243939bb74f39e005a2bc"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a31d0edae259c40afad5c879430478806"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a31d0edae259c40afad5c879430478806"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a31d0edae259c40afad5c879430478806"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"></a>copyOut(String sql, Writer to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"></a>将一个COPY TO STDOUT的结果集从数据库发送到Writer类中。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"></a><a name="zh-cn_topic_0237121133_zh-cn_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"></a>SQLException,IOException</p>
</td>
</tr>
</tbody>
</table>
