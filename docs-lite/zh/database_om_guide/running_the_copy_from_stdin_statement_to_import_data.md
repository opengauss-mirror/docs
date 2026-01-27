# 使用COPY FROM STDIN导入数据<a name="ZH-CN_TOPIC_0289900600"></a>

## 关于COPY FROM STDIN导入数据<a name="ZH-CN_TOPIC_0289899877"></a>

用户可以使用以下方式通过COPY FROM STDIN语句直接向openGauss写入数据。

- 通过键盘输入向openGauss写入数据。详细请参见[COPY](../sql_reference/COPY.md)。
- 通过JDBC驱动的CopyManager接口从文件或者数据库向openGauss写入数据。此方法支持COPY语法中copy option的所有参数。

## CopyManager类简介<a name="ZH-CN_TOPIC_0289900684"></a>

CopyManager是 openGauss JDBC驱动中提供的一个API接口类，用于批量向openGauss中导入数据。

### CopyManager的继承关系<a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_s4dfbdae5c0a04fa8b7ee4bc9b9354ca5"></a>

CopyManager类位于org.postgresql.copy Package中，继承自java.lang.Object类，该类的声明如下：

```
public class CopyManager
extends Object
```

### 构造方法<a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_scb9cfe53b31d45a8b3a21c93acdcb8e0"></a>

public CopyManager\(BaseConnection connection\)

throws SQLException

### 常用方法<a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_sf8527e491d3e4024abc6978738b264fb"></a>

**表 1**  CopyManager常用方法

<a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_tddcde5b401f44a2e9870b501fb50217d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_rc7597b3877ad46ada9245570b26f93ad"><th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"></a>返回值</p>
</th>
<th class="cellrowborder" valign="top" width="37.22%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"></a>throws</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_r79be1f43583944909d30b84a6d8bc083"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"></a>CopyIn</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"></a>copyIn(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"></a>SQLException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_r3d12a2da37314b4da4426a296164b498"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9417af508199433197394eefe23f986a"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9417af508199433197394eefe23f986a"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9417af508199433197394eefe23f986a"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"></a>copyIn(String sql, InputStream from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"></a>使用COPY FROM STDIN从InputStream中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_r371cbbd25d0c4870af5b5d73ad1355f6"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"></a>copyIn(String sql, InputStream from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"></a>使用COPY FROM STDIN从InputStream中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_rb76b1e26647d4bc8ada0ad16ac1c2489"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"></a>copyIn(String sql, Reader from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"></a>使用COPY FROM STDIN从Reader中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a55407b888d324a3bba340d116b9329ac"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a55407b888d324a3bba340d116b9329ac"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a55407b888d324a3bba340d116b9329ac"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_r3469c6447ccc4894b3d4709f98b89490"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"></a>copyIn(String sql, Reader from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a641c522264554cf5b65bc97735cb1542"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a641c522264554cf5b65bc97735cb1542"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a641c522264554cf5b65bc97735cb1542"></a>使用COPY FROM STDIN从Reader中快速向数据库中的表导入数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_rb0a3605b421248c2a1fb597086c864f9"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"></a>CopyOut</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"></a>copyOut(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"></a>SQLException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_rb7f2401d46a549ec85faf82b3863bdea"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a72eccf2a376348678cdb37207888323d"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a72eccf2a376348678cdb37207888323d"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a72eccf2a376348678cdb37207888323d"></a>copyOut(String sql, OutputStream to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"></a>将一个COPY TO STDOUT的结果集从数据库发送到OutputStream类中。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_rf1eb47180fd243939bb74f39e005a2bc"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a31d0edae259c40afad5c879430478806"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a31d0edae259c40afad5c879430478806"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a31d0edae259c40afad5c879430478806"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"></a>copyOut(String sql, Writer to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"></a>将一个COPY TO STDOUT的结果集从数据库发送到Writer类中。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"></a><a name="zh-cn_topic_0283136666_zh-cn_topic_0237121133_zh-cn_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"></a>SQLException,IOException</p>
</td>
</tr>
</tbody>
</table>

## 处理错误表<a name="ZH-CN_TOPIC_0000001092778597"></a>

### 操作场景<a name="zh-cn_topic_0117407722_s5bc517f6771b4e53b45ed36b7d50db7d"></a>

当数据导入发生错误时，请根据本文指引信息进行处理。

### 查询错误信息<a name="zh-cn_topic_0117407722_s7ab6ff0b3b9342d1a61466eba3b252b8"></a>

数据导入过程中发生的错误，一般分为数据格式错误和非数据格式错误。

- 数据格式错误

    在创建外表时，通过设置参数“LOG INTO error\_table\_name”，将数据导入过程中出现的数据格式错误信息写入指定的错误信息表error\_table\_name中。您可以通过以下SQL，查询详细错误信息。

    ```
    openGauss=# SELECT * FROM error_table_name;
    ```

    错误信息表结构如[表1](#zh-cn_topic_0117407722_taed071c5571f4f9a834bdacaf251bac5)所示。

    **表 1**  错误信息表

    <a name="zh-cn_topic_0117407722_taed071c5571f4f9a834bdacaf251bac5"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0117407722_ra70e13325bd84266a5b2385c674cd711"><th class="cellrowborder" valign="top" width="19.23807619238076%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0117407722_a7986653efd2040059c2ac570076b0917"><a name="zh-cn_topic_0117407722_a7986653efd2040059c2ac570076b0917"></a><a name="zh-cn_topic_0117407722_a7986653efd2040059c2ac570076b0917"></a>列名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.706629337066296%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"><a name="zh-cn_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"></a><a name="zh-cn_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="47.05529447055295%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"><a name="zh-cn_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"></a><a name="zh-cn_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0117407722_r7478cf6bc54a4c57881142746076bd5a"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"><a name="zh-cn_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"></a><a name="zh-cn_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"></a>nodeid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_a3708ed7e91d641379904285d13124e86"><a name="zh-cn_topic_0117407722_a3708ed7e91d641379904285d13124e86"></a><a name="zh-cn_topic_0117407722_a3708ed7e91d641379904285d13124e86"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"><a name="zh-cn_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"></a><a name="zh-cn_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"></a>报错节点编号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0117407722_r26b3cbdf5751475ca4e1cc197eac600b"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"><a name="zh-cn_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"></a><a name="zh-cn_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"></a>begintime</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"><a name="zh-cn_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"></a><a name="zh-cn_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0117407722_af766558626e4419db512929027bbf7e6"><a name="zh-cn_topic_0117407722_af766558626e4419db512929027bbf7e6"></a><a name="zh-cn_topic_0117407722_af766558626e4419db512929027bbf7e6"></a>出现数据格式错误的时间。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0117407722_rddf476c430c4461694dcd788218ba172"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_a76e2467afba3429888585b18bae39db8"><a name="zh-cn_topic_0117407722_a76e2467afba3429888585b18bae39db8"></a><a name="zh-cn_topic_0117407722_a76e2467afba3429888585b18bae39db8"></a>filename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"><a name="zh-cn_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"></a><a name="zh-cn_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"></a>character varying</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"><a name="zh-cn_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"></a><a name="zh-cn_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"></a>出现数据格式错误的数据源文件名。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0117407722_rb5970acdf622437497bea40c7f57b26d"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"><a name="zh-cn_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"></a><a name="zh-cn_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"></a>rownum</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"><a name="zh-cn_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"></a><a name="zh-cn_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"></a>numeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"><a name="zh-cn_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"></a><a name="zh-cn_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"></a>在数据源文件中，出现数据格式错误的行号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0117407722_rb5eb7002810e49c5b75d1014c2489124"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_a566c51c173eb482abde2ed614536296c"><a name="zh-cn_topic_0117407722_a566c51c173eb482abde2ed614536296c"></a><a name="zh-cn_topic_0117407722_a566c51c173eb482abde2ed614536296c"></a>rawrecord</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"><a name="zh-cn_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"></a><a name="zh-cn_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"><a name="zh-cn_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"></a><a name="zh-cn_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"></a>在数据源文件中，出现数据格式错误的原始记录。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0117407722_r1400903fda304bb78340b44a6f13f01c"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"><a name="zh-cn_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"></a><a name="zh-cn_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"></a>detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_a29a968f32327444ab285f44509145e73"><a name="zh-cn_topic_0117407722_a29a968f32327444ab285f44509145e73"></a><a name="zh-cn_topic_0117407722_a29a968f32327444ab285f44509145e73"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0117407722_af634b77308454f708e7822dcf6a04136"><a name="zh-cn_topic_0117407722_af634b77308454f708e7822dcf6a04136"></a><a name="zh-cn_topic_0117407722_af634b77308454f708e7822dcf6a04136"></a>详细错误信息。</p>
    </td>
    </tr>
    </tbody>
    </table>

- 非数据格式错误

    对于非数据格式错误，一旦发生将导致整个数据导入失败。您可以根据执行数据导入过程中，界面提示的错误信息，帮助定位问题，处理错误表。

### 处理数据导入错误<a name="zh-cn_topic_0117407722_sde26d311bd8d4620916fb0c82f378512"></a>

根据获取的错误信息，请对照下表，处理数据导入错误。

**表 2**  处理数据导入错误

<a name="zh-cn_topic_0117407722_table41091116175519"></a>
<table><thead align="left"><tr id="zh-cn_topic_0117407722_row0113316105513"><th class="cellrowborder" valign="top" width="23%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0117407722_p211416163551"><a name="zh-cn_topic_0117407722_p211416163551"></a><a name="zh-cn_topic_0117407722_p211416163551"></a>错误信息</p>
</th>
<th class="cellrowborder" valign="top" width="38%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0117407722_p19115171685520"><a name="zh-cn_topic_0117407722_p19115171685520"></a><a name="zh-cn_topic_0117407722_p19115171685520"></a>原因</p>
</th>
<th class="cellrowborder" valign="top" width="39%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0117407722_p144017275544"><a name="zh-cn_topic_0117407722_p144017275544"></a><a name="zh-cn_topic_0117407722_p144017275544"></a>解决办法</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0117407722_row51178162558"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_p2118316125512"><a name="zh-cn_topic_0117407722_p2118316125512"></a><a name="zh-cn_topic_0117407722_p2118316125512"></a>missing data for column "r_reason_desc"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><a name="zh-cn_topic_0117407722_ol18632134115545"></a><a name="zh-cn_topic_0117407722_ol18632134115545"></a><ol id="zh-cn_topic_0117407722_ol18632134115545"><li>数据源文件中的列数比外表定义的列数少。</li><li>对于TEXT格式的数据源文件，由于转义字符（\）导致delimiter（分隔符）错位或者quote（引号字符）错位造成的错误。<p id="zh-cn_topic_0117407722_p18126141625514"><a name="zh-cn_topic_0117407722_p18126141625514"></a><a name="zh-cn_topic_0117407722_p18126141625514"></a><strong id="zh-cn_topic_0117407722_b412716162557"><a name="zh-cn_topic_0117407722_b412716162557"></a><a name="zh-cn_topic_0117407722_b412716162557"></a>示例：</strong>目标表存在3列字段，导入的数据如下所示。由于存在转义字符“\”，分隔符“|”被转义为第二个字段的字段值，导致第三个字段值缺失。</p>
<pre class="screen" id="zh-cn_topic_0117407722_screen20128191613554"><a name="zh-cn_topic_0117407722_screen20128191613554"></a><a name="zh-cn_topic_0117407722_screen20128191613554"></a>BE|Belgium\|1</pre>
</li></ol>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0117407722_ol176431630185520"></a><a name="zh-cn_topic_0117407722_ol176431630185520"></a><ol id="zh-cn_topic_0117407722_ol176431630185520"><li>由于列数少导致的报错，选择下列办法解决：<a name="zh-cn_topic_0117407722_ul12312111355618"></a><a name="zh-cn_topic_0117407722_ul12312111355618"></a><ul id="zh-cn_topic_0117407722_ul12312111355618"><li>在数据源文件中，增加列“r_reason_desc”的字段值。</li><li>在创建外表时，将参数“fill_missing_fields”设置为“on”。即当导入过程中，若数据源文件中一行数据的最后一个字段缺失，则把最后一个字段的值设置为NULL，不报错。</li></ul>
</li><li>对由于转义字符导致的错误，需检查报错的行中是否含有转义字符（\）。若存在，建议在创建外表时，将参数“noescaping”（是否不对'\'和后面的字符进行转义）设置为true。</li></ol>
</td>
</tr>
<tr id="zh-cn_topic_0117407722_row19133121613554"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_p121343162551"><a name="zh-cn_topic_0117407722_p121343162551"></a><a name="zh-cn_topic_0117407722_p121343162551"></a>extra data after last expected column</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_p1713631618559"><a name="zh-cn_topic_0117407722_p1713631618559"></a><a name="zh-cn_topic_0117407722_p1713631618559"></a>数据源文件中的列数比外表定义的列数多。</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0117407722_ul281493110581"></a><a name="zh-cn_topic_0117407722_ul281493110581"></a><ul id="zh-cn_topic_0117407722_ul281493110581"><li>在数据源文件中，删除多余的字段值。</li><li>在创建外表时，将参数“ignore_extra_data”设置为“on”。即在导入过程中，若数据源文件比外表定义的列数多，则忽略行尾多出来的列。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0117407722_row191411716155520"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_p1614251614556"><a name="zh-cn_topic_0117407722_p1614251614556"></a><a name="zh-cn_topic_0117407722_p1614251614556"></a>invalid input syntax for type numeric: "a"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_p7143101616554"><a name="zh-cn_topic_0117407722_p7143101616554"></a><a name="zh-cn_topic_0117407722_p7143101616554"></a>数据类型错误。</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p8876141213334"><a name="p8876141213334"></a><a name="p8876141213334"></a>在数据源文件中，修改输入字段的数据类型。根据此错误信息，请将输入的数据类型修改为numeric。</p>
</td>
</tr>
<tr id="zh-cn_topic_0117407722_row1414517168550"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_p201461316105514"><a name="zh-cn_topic_0117407722_p201461316105514"></a><a name="zh-cn_topic_0117407722_p201461316105514"></a>null value in column "staff_id" violates not-null constraint</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_p214716161550"><a name="zh-cn_topic_0117407722_p214716161550"></a><a name="zh-cn_topic_0117407722_p214716161550"></a>非空约束。</p>
<p id="zh-cn_topic_0117407722_p101481616145511"><a name="zh-cn_topic_0117407722_p101481616145511"></a><a name="zh-cn_topic_0117407722_p101481616145511"></a></p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p15281911103315"><a name="p15281911103315"></a><a name="p15281911103315"></a>在数据源文件中，增加非空字段信息。根据此错误信息，请增加“staff_id”列的值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0117407722_row91497166551"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_p191508162559"><a name="zh-cn_topic_0117407722_p191508162559"></a><a name="zh-cn_topic_0117407722_p191508162559"></a>duplicate key value violates unique constraint "reg_id_pk"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_p8152916105514"><a name="zh-cn_topic_0117407722_p8152916105514"></a><a name="zh-cn_topic_0117407722_p8152916105514"></a>唯一约束。</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0117407722_ul88724019590"></a><a name="zh-cn_topic_0117407722_ul88724019590"></a><ul id="zh-cn_topic_0117407722_ul88724019590"><li>删除数据源文件中重复的行。</li><li>通过设置关键字“DISTINCT”，从SELECT结果集中删除重复的行，保证导入的每一行都是唯一的。<a name="zh-cn_topic_0117407722_screen29084012599"></a><a name="zh-cn_topic_0117407722_screen29084012599"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0117407722_screen29084012599"><strong id="zh-cn_topic_0117407722_b159054011592"><a name="zh-cn_topic_0117407722_b159054011592"></a><a name="zh-cn_topic_0117407722_b159054011592"></a><span id="text15620103516468"><a name="text15620103516468"></a><a name="text15620103516468"></a>openGauss=# </span>INSERT INTO</strong> reasons <strong id="zh-cn_topic_0117407722_b1891184014592"><a name="zh-cn_topic_0117407722_b1891184014592"></a><a name="zh-cn_topic_0117407722_b1891184014592"></a>SELECT DISTINCT * FROM</strong> foreign_tpcds_reasons;</pre>
</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0117407722_row7159216135515"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0117407722_p11631116155519"><a name="zh-cn_topic_0117407722_p11631116155519"></a><a name="zh-cn_topic_0117407722_p11631116155519"></a>value too long for type character varying(16)</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0117407722_p1316417167558"><a name="zh-cn_topic_0117407722_p1316417167558"></a><a name="zh-cn_topic_0117407722_p1316417167558"></a>字段值长度超过限制。</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p1732851553315"><a name="p1732851553315"></a><a name="p1732851553315"></a>在数据源文件中，修改字段值长度。根据此错误信息，字段值长度限制为VARCHAR2(16)。</p>
</td>
</tr>
</tbody>
</table>

## 示例1：通过本地文件导入导出数据<a name="ZH-CN_TOPIC_0289900348"></a>

在使用JAVA语言基于openGauss进行二次开发时，可以使用CopyManager接口，通过流方式，将数据库中的数据导出到本地文件或者将本地文件导入数据库中，文件格式支持CSV、TEXT等格式。

样例程序如下，执行时需要加载openGauss的JDBC驱动。

```
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.io.IOException;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.SQLException; 
import org.postgresql.copy.CopyManager; 
import org.postgresql.core.BaseConnection;
 
public class Copy{ 

     public static void main(String[] args) 
     { 
      String urls = new String("jdbc:postgresql://localhost:8000/postgres"); //数据库URL 
      String username = new String("username");            //用户名 
      String password = new String("passwd");             //密码 
      String tablename = new String("migration_table"); //定义表信息 
      String tablename1 = new String("migration_table_1"); //定义表信息 
      String driver = "org.postgresql.Driver"; 
      Connection conn = null; 
      
      try { 
          Class.forName(driver); 
          conn = DriverManager.getConnection(urls, username, password);         
      } catch (ClassNotFoundException e) { 
           e.printStackTrace(System.out); 
      } catch (SQLException e) { 
           e.printStackTrace(System.out); 
      } 
      
      // 将表migration_table中数据导出到本地文件d:/data.txt  
      try {
          copyToFile(conn, "d:/data.txt", "(SELECT * FROM migration_table)");
      } catch (SQLException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      } catch (IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      }    
      //将d:/data.txt中的数据导入到migration_table_1中。
      try {
          copyFromFile(conn, "d:/data.txt", tablename1);
      } catch (SQLException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      } catch (IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      }  

      // 将表migration_table_1中的数据导出到本地文件d:/data1.txt  
      try {
          copyToFile(conn, "d:/data1.txt", tablename1);
      } catch (SQLException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      } catch (IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      }        
  } 

  public static void copyFromFile(Connection connection, String filePath, String tableName)   
         throws SQLException, IOException {  
       
     FileInputStream fileInputStream = null;  
   
     try {  
         CopyManager copyManager = new CopyManager((BaseConnection)connection);  
         fileInputStream = new FileInputStream(filePath);  
         copyManager.copyIn("COPY " + tableName + " FROM STDIN with (" + "DELIMITER"+"'"+ delimiter +  "'" + "ENCODING " + "'" + encoding + "')", fileInputStream);                        
     } finally {  
         if (fileInputStream != null) {  
             try {  
                 fileInputStream.close();  
             } catch (IOException e) {  
                 e.printStackTrace();  
             }  
         }  
     }  
 }  
     public static void copyToFile(Connection connection, String filePath, String tableOrQuery)   
          throws SQLException, IOException {  
        
      FileOutputStream fileOutputStream = null;  
   
      try {  
          CopyManager copyManager = new CopyManager((BaseConnection)connection);  
          fileOutputStream = new FileOutputStream(filePath);  
          copyManager.copyOut("COPY " + tableOrQuery + " TO STDOUT", fileOutputStream);  
      } finally {  
          if (fileOutputStream != null) {  
              try {  
                  fileOutputStream.close();  
              } catch (IOException e) {  
                  e.printStackTrace();  
              }  
          }  
      }  
  }  
}
```

## 示例2：从MY迁移数据<a name="ZH-CN_TOPIC_0289900277"></a>

下面示例演示如何通过CopyManager从MY向openGauss进行数据迁移的过程。

```
import java.io.StringReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.postgresql.copy.CopyManager;
import org.postgresql.core.BaseConnection;

public class Migration{

    public static void main(String[] args) {
        String url = new String("jdbc:postgresql://localhost:8000/postgres"); //数据库URL 
        String user = new String("username");            //openGauss数据库用户名 
        String pass = new String("passwd");             //openGauss数据库密码 
        String tablename = new String("migration_table_1"); //定义表信息 
        String delimiter = new String("|");              //定义分隔符 
        String encoding = new String("UTF8");            //定义字符集 
        String driver = "org.postgresql.Driver";
        StringBuffer buffer = new StringBuffer();       //定义存放格式化数据的缓存 

        try {
            //获取源数据库查询结果集 
            ResultSet rs = getDataSet();

            //遍历结果集，逐行获取记录 
            //将每条记录中各字段值，按指定分隔符分割，由换行符结束，拼成一个字符串 
            //把拼成的字符串，添加到缓存buffer 
            while (rs.next()) {
                buffer.append(rs.getString(1) + delimiter
                        + rs.getString(2) + delimiter
                        + rs.getString(3) + delimiter
                        + rs.getString(4)
                        + "\n");
            }
            rs.close();

            try {
                //建立目标数据库连接 
                Class.forName(driver);
                Connection conn = DriverManager.getConnection(url, user, pass);
                BaseConnection baseConn = (BaseConnection) conn;
                baseConn.setAutoCommit(false);

                //初始化表信息   
                String sql = "Copy " + tablename + " from STDIN with (DELIMITER " + "'" + delimiter + "'" +","+ " ENCODING " + "'" + encoding + "')";

                //提交缓存buffer中的数据                   
                CopyManager cp = new CopyManager(baseConn);
                StringReader reader = new StringReader(buffer.toString());
                cp.copyIn(sql, reader);
                baseConn.commit();
                reader.close();
                baseConn.close();
            } catch (ClassNotFoundException e) {
                e.printStackTrace(System.out);
            } catch (SQLException e) {
                e.printStackTrace(System.out);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //******************************** 
    // 从源数据库返回查询结果集     
    //********************************* 
    private static ResultSet getDataSet() {
        ResultSet rs = null;
        try {
            Class.forName("com.MY.jdbc.Driver").newInstance();
            Connection conn = DriverManager.getConnection("jdbc:MY://10.119.179.227:3306/jack?useSSL=false&allowPublicKeyRetrieval=true", "jack", "xxxxxxxxx");
            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery("select * from migration_table");
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return rs;
    }
}
```
