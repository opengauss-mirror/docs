# Running the COPY FROM STDIN Statement to Import Data<a name="EN-US_TOPIC_0242370281"></a>

## Data Import Using COPY FROM STDIN<a name="EN-US_TOPIC_0242370282"></a>

Run the  **COPY FROM STDIN**  statement to import data to openGauss in either of the following ways:

- Write data into the openGauss database by typing. For details, see  [COPY](../sql_reference/copy.md).
- Import data from a file or database to openGauss through the CopyManager interface driven by JDBC. You can use any parameters in the  **COPY**  syntax.

## Introduction to the CopyManager Class<a name="EN-US_TOPIC_0242370283"></a>

CopyManager is an API class provided by the JDBC driver in openGauss. It is used to import data to the openGauss database in batches.

### Inheritance Relationship of CopyManager<a name="en-us_topic_0237121133_en-us_topic_0117407675_s4dfbdae5c0a04fa8b7ee4bc9b9354ca5"></a>

The CopyManager class is in the  **org.opengauss.copy**  package and inherits the java.lang.Object class. The declaration of the class is as follows:

```
public class CopyManager
extends Object
```

### Construction Method<a name="en-us_topic_0237121133_en-us_topic_0117407675_scb9cfe53b31d45a8b3a21c93acdcb8e0"></a>

public CopyManager\(BaseConnection connection\)

throws SQLException

### Common Methods<a name="en-us_topic_0237121133_en-us_topic_0117407675_sf8527e491d3e4024abc6978738b264fb"></a>

**Table  1**  Common methods of CopyManager

<a name="en-us_topic_0237121133_en-us_topic_0117407675_tddcde5b401f44a2e9870b501fb50217d"></a>
<table><thead align="left"><tr id="en-us_topic_0237121133_en-us_topic_0117407675_rc7597b3877ad46ada9245570b26f93ad"><th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.5.1.1"><p id="en-us_topic_0237121133_en-us_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"><a name="en-us_topic_0237121133_en-us_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_aa2d323a285b4436a81b34dce2900ab79"></a>Return Value</p>
</th>
<th class="cellrowborder" valign="top" width="37.22%" id="mcps1.2.5.1.2"><p id="en-us_topic_0237121133_en-us_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a1117dcad48d3404882885e7a5b4ce873"></a>Method</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0237121133_en-us_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"><a name="en-us_topic_0237121133_en-us_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_afc294a3fdbe8402a8829f853f275f71f"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0237121133_en-us_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a336fd3b568e24747bab8fe92201efae2"></a>throws</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121133_en-us_topic_0117407675_r79be1f43583944909d30b84a6d8bc083"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"><a name="en-us_topic_0237121133_en-us_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_af038b0c132ec498fa793e5bae634de0d"></a>CopyIn</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a823b8fddb2754bf29f0e1b1d1516429a"></a>copyIn(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a8c3d264cf33f41dfb28298d9ff86ae61"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a8afbacbb621b4f54bef25da76d2e68b3"></a>SQLException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_r3d12a2da37314b4da4426a296164b498"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a9417af508199433197394eefe23f986a"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9417af508199433197394eefe23f986a"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9417af508199433197394eefe23f986a"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a5777e6ac89994368af4b155fad2270b3"></a>copyIn(String sql, InputStream from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a6d656948ba51467b9d563a33e4d9fb46"></a>Uses <strong id="en-us_topic_0237121133_b127102314453"><a name="en-us_topic_0237121133_b127102314453"></a><a name="en-us_topic_0237121133_b127102314453"></a>COPY FROM STDIN</strong> to quickly import data to tables in a database from InputStream.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"><a name="en-us_topic_0237121133_en-us_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_ac5dce07f17b642559abb501302ce0fcd"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_r371cbbd25d0c4870af5b5d73ad1355f6"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"><a name="en-us_topic_0237121133_en-us_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_af81db799290049c1bb9cfc222cf2ce7a"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a4def95617dd44fc7838737ca352f8a31"></a>copyIn(String sql, InputStream from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a1a7f4c5cbacd43aa90ac0dfe75743010"></a>Uses <strong>COPY FROM STDIN</strong> to quickly import data to tables in a database from InputStream.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9f2db6953e3d4141b8744ca6e2265057"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_rb76b1e26647d4bc8ada0ad16ac1c2489"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a2b22e6bfac11461497b45d45abe06164"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a0e09446c0c5e4de9996f824d67d07ef2"></a>copyIn(String sql, Reader from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9e2d20b39dd842fb9fab6779f63bd138"></a>Uses <strong id="en-us_topic_0237121133_b185795275460"><a name="en-us_topic_0237121133_b185795275460"></a><a name="en-us_topic_0237121133_b185795275460"></a>COPY FROM STDIN</strong> to quickly import data to tables in a database from Reader.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a55407b888d324a3bba340d116b9329ac"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a55407b888d324a3bba340d116b9329ac"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a55407b888d324a3bba340d116b9329ac"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_r3469c6447ccc4894b3d4709f98b89490"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a9d9598234c8b4b00af57b3ad29d154bb"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a0259eca8b48f472e94053a5128f93d63"></a>copyIn(String sql, Reader from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a641c522264554cf5b65bc97735cb1542"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a641c522264554cf5b65bc97735cb1542"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a641c522264554cf5b65bc97735cb1542"></a>Uses <strong id="en-us_topic_0237121133_b17128332124611"><a name="en-us_topic_0237121133_b17128332124611"></a><a name="en-us_topic_0237121133_b17128332124611"></a>COPY FROM STDIN</strong> to quickly import data to tables in a database from Reader.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"><a name="en-us_topic_0237121133_en-us_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_ac1b13c87b7174bc49312e4613d1a935a"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_rb0a3605b421248c2a1fb597086c864f9"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a93f8c74fb03d41ad8f731a8093d068c9"></a>CopyOut</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"><a name="en-us_topic_0237121133_en-us_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_af8dcca02e7d741dd9b190d4035e65b15"></a>copyOut(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a75d0de825b504cfd97d02eddcaabf598"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"><a name="en-us_topic_0237121133_en-us_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_aa8f066f105c14cd4aa5ce9692db879ca"></a>SQLException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_rb7f2401d46a549ec85faf82b3863bdea"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a0e9c5b7d24e24fa2b8de1d91016d3505"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a72eccf2a376348678cdb37207888323d"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a72eccf2a376348678cdb37207888323d"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a72eccf2a376348678cdb37207888323d"></a>copyOut(String sql, OutputStream to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"><a name="en-us_topic_0237121133_en-us_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_acb633bbe8c4843f98d0f23494d2eeb26"></a>Sends the result set of <strong id="en-us_topic_0237121133_b113558342468"><a name="en-us_topic_0237121133_b113558342468"></a><a name="en-us_topic_0237121133_b113558342468"></a>COPY TO STDOUT</strong> from the database to the OutputStream class.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"><a name="en-us_topic_0237121133_en-us_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_ab271d275865c416ebffcc0f4b7b870b3"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="en-us_topic_0237121133_en-us_topic_0117407675_rf1eb47180fd243939bb74f39e005a2bc"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a31d0edae259c40afad5c879430478806"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a31d0edae259c40afad5c879430478806"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a31d0edae259c40afad5c879430478806"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a6aa9262d3a45410abfa7113b6fdc34c8"></a>copyOut(String sql, Writer to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a226be6f3371c4d03b1029f6c3abfb1fc"></a>Sends the result set of <strong id="en-us_topic_0237121133_b381812438463"><a name="en-us_topic_0237121133_b381812438463"></a><a name="en-us_topic_0237121133_b381812438463"></a>COPY TO STDOUT</strong> from the database to the Writer class.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237121133_en-us_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"><a name="en-us_topic_0237121133_en-us_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"></a><a name="en-us_topic_0237121133_en-us_topic_0117407675_a674d08f09ebc4b4f8bc6027f4b98f9d0"></a>SQLException,IOException</p>
</td>
</tr>
</tbody>
</table>

## Handling Import Errors<a name="EN-US_TOPIC_0000001092778597"></a>

## Scenarios<a name="en-us_topic_0117407722_s5bc517f6771b4e53b45ed36b7d50db7d"></a>

Handle errors that occurred during data import.

### Querying Error Information<a name="en-us_topic_0117407722_s7ab6ff0b3b9342d1a61466eba3b252b8"></a>

Errors that occur when data is imported are divided into data format errors and non-data format errors.

- Data format errors

    When creating a foreign table, specify  **LOG INTO**_error\_table\_name_. Data format errors during data import will be written into the specified table. You can run the following SQL statement to query error details:

    ```
    openGauss=# SELECT * FROM error_table_name;
    ```

    [Table 1](#en-us_topic_0117407722_taed071c5571f4f9a834bdacaf251bac5)  lists the columns of the  _error\_table\_name_  table.

    **Table  1**  Columns in the error information table

    <a name="en-us_topic_0117407722_taed071c5571f4f9a834bdacaf251bac5"></a>
    <table><thead align="left"><tr id="en-us_topic_0117407722_ra70e13325bd84266a5b2385c674cd711"><th class="cellrowborder" valign="top" width="19.23807619238076%" id="mcps1.2.4.1.1"><p id="en-us_topic_0117407722_a7986653efd2040059c2ac570076b0917"><a name="en-us_topic_0117407722_a7986653efd2040059c2ac570076b0917"></a><a name="en-us_topic_0117407722_a7986653efd2040059c2ac570076b0917"></a>Column Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.706629337066296%" id="mcps1.2.4.1.2"><p id="en-us_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"><a name="en-us_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"></a><a name="en-us_topic_0117407722_acadba2f2cf0847918ae7844ca6b7c8b7"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="47.05529447055295%" id="mcps1.2.4.1.3"><p id="en-us_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"><a name="en-us_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"></a><a name="en-us_topic_0117407722_a5979bfe3f2be4899b9dd96980409978e"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0117407722_r7478cf6bc54a4c57881142746076bd5a"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"><a name="en-us_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"></a><a name="en-us_topic_0117407722_ac169149074514ceeaa4aba73a19ca020"></a>nodeid</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a3708ed7e91d641379904285d13124e86"><a name="en-us_topic_0117407722_a3708ed7e91d641379904285d13124e86"></a><a name="en-us_topic_0117407722_a3708ed7e91d641379904285d13124e86"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"><a name="en-us_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"></a><a name="en-us_topic_0117407722_ab031bdc41849499b86b0512bfe93f1bb"></a>ID of the node where an error is reported</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_r26b3cbdf5751475ca4e1cc197eac600b"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"><a name="en-us_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"></a><a name="en-us_topic_0117407722_a0f221cf702cb4e8da8c4c876b9511c2f"></a>begintime</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"><a name="en-us_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"></a><a name="en-us_topic_0117407722_a92bb9dba3d5f44d18af98a9d87fbafec"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_af766558626e4419db512929027bbf7e6"><a name="en-us_topic_0117407722_af766558626e4419db512929027bbf7e6"></a><a name="en-us_topic_0117407722_af766558626e4419db512929027bbf7e6"></a>Time when a data format error was reported</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_rddf476c430c4461694dcd788218ba172"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a76e2467afba3429888585b18bae39db8"><a name="en-us_topic_0117407722_a76e2467afba3429888585b18bae39db8"></a><a name="en-us_topic_0117407722_a76e2467afba3429888585b18bae39db8"></a>filename</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"><a name="en-us_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"></a><a name="en-us_topic_0117407722_a75d1ea54fece4a23b8d9d5a1f60d2fc0"></a>character varying</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"><a name="en-us_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"></a><a name="en-us_topic_0117407722_a8f0ca597acb64bb4a69af1c1c1451014"></a>Name of the source data file where a data format error occurs</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_rb5970acdf622437497bea40c7f57b26d"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"><a name="en-us_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"></a><a name="en-us_topic_0117407722_af032531416fb4bf68a7c733b5a36d12a"></a>rownum</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"><a name="en-us_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"></a><a name="en-us_topic_0117407722_aa25f0fc487fc4d79a20020c0ce5dace2"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"><a name="en-us_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"></a><a name="en-us_topic_0117407722_afc47c8fb3a004ffa9769d7f0e7a7da95"></a>Number of the row where a data format error occurs in a source data file</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_rb5eb7002810e49c5b75d1014c2489124"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a566c51c173eb482abde2ed614536296c"><a name="en-us_topic_0117407722_a566c51c173eb482abde2ed614536296c"></a><a name="en-us_topic_0117407722_a566c51c173eb482abde2ed614536296c"></a>rawrecord</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"><a name="en-us_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"></a><a name="en-us_topic_0117407722_a3f09cb9f78f748deabc5135420b8b7d4"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"><a name="en-us_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"></a><a name="en-us_topic_0117407722_a366ccbaa40b2427f8e073e9253c50c13"></a>Raw record of a data format error in the source data file</p>
    </td>
    </tr>
    <tr id="en-us_topic_0117407722_r1400903fda304bb78340b44a6f13f01c"><td class="cellrowborder" valign="top" width="19.23807619238076%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"><a name="en-us_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"></a><a name="en-us_topic_0117407722_a57e53a2c8c5a4ffa92d214ece0eae9af"></a>detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.706629337066296%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_a29a968f32327444ab285f44509145e73"><a name="en-us_topic_0117407722_a29a968f32327444ab285f44509145e73"></a><a name="en-us_topic_0117407722_a29a968f32327444ab285f44509145e73"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="47.05529447055295%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0117407722_af634b77308454f708e7822dcf6a04136"><a name="en-us_topic_0117407722_af634b77308454f708e7822dcf6a04136"></a><a name="en-us_topic_0117407722_af634b77308454f708e7822dcf6a04136"></a>Error details</p>
    </td>
    </tr>
    </tbody>
    </table>

- Non-data format errors

    A non-data format error leads to the failure of an entire data import task. You can locate and troubleshoot a non-data format error based on the error message displayed during data import.

### Handling Data Import Errors<a name="en-us_topic_0117407722_sde26d311bd8d4620916fb0c82f378512"></a>

Troubleshoot data import errors based on obtained error information and descriptions in the following table.

**Table  2**  Handling data import errors

<a name="en-us_topic_0117407722_table41091116175519"></a>
<table><thead align="left"><tr id="en-us_topic_0117407722_row0113316105513"><th class="cellrowborder" valign="top" width="23%" id="mcps1.2.4.1.1"><p id="en-us_topic_0117407722_p211416163551"><a name="en-us_topic_0117407722_p211416163551"></a><a name="en-us_topic_0117407722_p211416163551"></a>Error Message</p>
</th>
<th class="cellrowborder" valign="top" width="38%" id="mcps1.2.4.1.2"><p id="en-us_topic_0117407722_p19115171685520"><a name="en-us_topic_0117407722_p19115171685520"></a><a name="en-us_topic_0117407722_p19115171685520"></a>Cause</p>
</th>
<th class="cellrowborder" valign="top" width="39%" id="mcps1.2.4.1.3"><p id="en-us_topic_0117407722_p144017275544"><a name="en-us_topic_0117407722_p144017275544"></a><a name="en-us_topic_0117407722_p144017275544"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0117407722_row51178162558"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p2118316125512"><a name="en-us_topic_0117407722_p2118316125512"></a><a name="en-us_topic_0117407722_p2118316125512"></a>missing data for column "r_reason_desc"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><a name="en-us_topic_0117407722_ol18632134115545"></a><a name="en-us_topic_0117407722_ol18632134115545"></a><ol id="en-us_topic_0117407722_ol18632134115545"><li>The number of columns in the source data file is less than that in the foreign table.</li><li>In a TEXT-format source data file, an escape character (for example, \) leads to delimiter or quote mislocation.<p id="en-us_topic_0117407722_p18126141625514"><a name="en-us_topic_0117407722_p18126141625514"></a><a name="en-us_topic_0117407722_p18126141625514"></a>Example: The target table contains three columns, and the following data is imported. The escape character (\) converts the delimiter (|) into the value of the second column, causing the value of the third column to lose.</p>
<pre class="screen" id="en-us_topic_0117407722_screen20128191613554"><a name="en-us_topic_0117407722_screen20128191613554"></a><a name="en-us_topic_0117407722_screen20128191613554"></a>BE|Belgium\|1</pre>
</li></ol>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0117407722_ol176431630185520"></a><a name="en-us_topic_0117407722_ol176431630185520"></a><ol id="en-us_topic_0117407722_ol176431630185520"><li>If an error is reported due to missing columns, perform the following operations:<a name="en-us_topic_0117407722_ul12312111355618"></a><a name="en-us_topic_0117407722_ul12312111355618"></a><ul id="en-us_topic_0117407722_ul12312111355618"><li>Add the value of the <strong id="b865514810166"><a name="b865514810166"></a><a name="b865514810166"></a>r_reason_desc</strong> column to the source data file.</li><li>When creating a foreign table, set the parameter <strong id="b11201713171620"><a name="b11201713171620"></a><a name="b11201713171620"></a>fill_missing_fields</strong> to <strong id="b1220610135169"><a name="b1220610135169"></a><a name="b1220610135169"></a>on</strong>. In this way, if the last column of a row in the source data file is missing, it will be set to <strong id="b938717164169"><a name="b938717164169"></a><a name="b938717164169"></a>NULL</strong> and no error will be reported.</li></ul>
</li><li>Check whether the row where an error is reported contains the escape character (\). If the row contains such a character, you are advised to set the parameter <strong id="b1276515232163"><a name="b1276515232163"></a><a name="b1276515232163"></a>noescaping</strong> to <strong id="b47708234165"><a name="b47708234165"></a><a name="b47708234165"></a>true</strong> when creating a foreign table, indicating that the escape character (\) and the characters following it are not escaped.</li></ol>
</td>
</tr>
<tr id="en-us_topic_0117407722_row19133121613554"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p121343162551"><a name="en-us_topic_0117407722_p121343162551"></a><a name="en-us_topic_0117407722_p121343162551"></a>extra data after last expected column</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p1713631618559"><a name="en-us_topic_0117407722_p1713631618559"></a><a name="en-us_topic_0117407722_p1713631618559"></a>The number of columns in the source data file is greater than that in the foreign table.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0117407722_ul281493110581"></a><a name="en-us_topic_0117407722_ul281493110581"></a><ul id="en-us_topic_0117407722_ul281493110581"><li>Delete extra columns from the source data file.</li><li>When creating a foreign table, set the parameter <strong id="b291143651612"><a name="b291143651612"></a><a name="b291143651612"></a>ignore_extra_data</strong> to <strong id="b89683641615"><a name="b89683641615"></a><a name="b89683641615"></a>on</strong>. In this way, if the number of columns in the source data file is greater than that in the foreign table, the extra columns at the end of rows will not be imported.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0117407722_row191411716155520"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p1614251614556"><a name="en-us_topic_0117407722_p1614251614556"></a><a name="en-us_topic_0117407722_p1614251614556"></a>invalid input syntax for type numeric: "a"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p7143101616554"><a name="en-us_topic_0117407722_p7143101616554"></a><a name="en-us_topic_0117407722_p7143101616554"></a>The data type is incorrect.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p8876141213334"><a name="p8876141213334"></a><a name="p8876141213334"></a>In the source data file, change the data type of the columns to import. If this error information is displayed, change the data type to <strong id="b191481648121618"><a name="b191481648121618"></a><a name="b191481648121618"></a>numeric</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0117407722_row1414517168550"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p201461316105514"><a name="en-us_topic_0117407722_p201461316105514"></a><a name="en-us_topic_0117407722_p201461316105514"></a>null value in column "staff_id" violates not-null constraint</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p214716161550"><a name="en-us_topic_0117407722_p214716161550"></a><a name="en-us_topic_0117407722_p214716161550"></a>The not-null constraint is violated.</p>
<p id="en-us_topic_0117407722_p101481616145511"><a name="en-us_topic_0117407722_p101481616145511"></a><a name="en-us_topic_0117407722_p101481616145511"></a></p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p15281911103315"><a name="p15281911103315"></a><a name="p15281911103315"></a>In the source data file, add values to the specified columns. If this error information is displayed, add values to the <strong id="b2093410321716"><a name="b2093410321716"></a><a name="b2093410321716"></a>staff_id</strong> column.</p>
</td>
</tr>
<tr id="en-us_topic_0117407722_row91497166551"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p191508162559"><a name="en-us_topic_0117407722_p191508162559"></a><a name="en-us_topic_0117407722_p191508162559"></a>duplicate key value violates unique constraint "reg_id_pk"</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p8152916105514"><a name="en-us_topic_0117407722_p8152916105514"></a><a name="en-us_topic_0117407722_p8152916105514"></a>The unique constraint is violated.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0117407722_ul88724019590"></a><a name="en-us_topic_0117407722_ul88724019590"></a><ul id="en-us_topic_0117407722_ul88724019590"><li>Delete duplicate rows from the source data file.</li><li>Run the <strong id="b7837796175"><a name="b7837796175"></a><a name="b7837796175"></a>SELECT</strong> statement with the <strong id="b14842149181711"><a name="b14842149181711"></a><a name="b14842149181711"></a>DISTINCT</strong> keyword to ensure that all imported rows are unique.<a name="en-us_topic_0117407722_screen29084012599"></a><a name="en-us_topic_0117407722_screen29084012599"></a><pre class="screen" codetype="Sql" id="en-us_topic_0117407722_screen29084012599"><strong id="en-us_topic_0117407722_b159054011592"><a name="en-us_topic_0117407722_b159054011592"></a><a name="en-us_topic_0117407722_b159054011592"></a><span id="text15620103516468"><a name="text15620103516468"></a><a name="text15620103516468"></a>openGauss=# </span>INSERT INTO</strong> reasons <strong id="en-us_topic_0117407722_b1891184014592"><a name="en-us_topic_0117407722_b1891184014592"></a><a name="en-us_topic_0117407722_b1891184014592"></a>SELECT DISTINCT * FROM</strong> foreign_tpcds_reasons;</pre>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0117407722_row7159216135515"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0117407722_p11631116155519"><a name="en-us_topic_0117407722_p11631116155519"></a><a name="en-us_topic_0117407722_p11631116155519"></a>value too long for type character varying(16)</p>
</td>
<td class="cellrowborder" valign="top" width="38%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0117407722_p1316417167558"><a name="en-us_topic_0117407722_p1316417167558"></a><a name="en-us_topic_0117407722_p1316417167558"></a>The column length exceeds the upper limit.</p>
</td>
<td class="cellrowborder" valign="top" width="39%" headers="mcps1.2.4.1.3 "><p id="p1732851553315"><a name="p1732851553315"></a><a name="p1732851553315"></a>In the source data file, change the column length. If this error information is displayed, reduce the column length to no greater than 16 bytes (VARCHAR2).</p>
</td>
</tr>
</tbody>
</table>

## Example 1: Importing and Exporting Data Through Local Files<a name="EN-US_TOPIC_0242370284"></a>

When the JAVA language is used for secondary development based on openGauss, you can use the CopyManager interface to export data from the database to a local file or import a local file to the database by streaming. The file can be in CSV or TEXT format.

The sample program is as follows. Load the openGauss JDBC driver before executing it.

```
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.io.IOException;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.SQLException; 
import org.opengauss.copy.CopyManager; 
import org.opengauss.core.BaseConnection;
 
public class Copy{ 

     public static void main(String[] args) 
     { 
      String urls = new String("jdbc:opengauss://localhost:8000/postgres"); // URL of the database
      String username = new String("username");            // Username
      String password = new String("passwd");             // Password
      String tablename = new String("migration_table"); // Table information
      String tablename1 = new String("migration_table_1"); // Table information
      String driver = "org.opengauss.Driver"; 
      Connection conn = null; 
      
      try { 
          Class.forName(driver); 
          conn = DriverManager.getConnection(urls, username, password);         
      } catch (ClassNotFoundException e) { 
           e.printStackTrace(System.out); 
      } catch (SQLException e) { 
           e.printStackTrace(System.out); 
      } 
      
      // Export data from the migration_table table to the d:/data.txt file.
      try {
          copyToFile(conn, "d:/data.txt", "(SELECT * FROM migration_table)");
      } catch (SQLException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      } catch (IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      }    
      // Import data from the d:/data.txt file to the migration_table_1 table.
      try {
          copyFromFile(conn, "d:/data.txt", tablename1);
      } catch (SQLException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      } catch (IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
      }  

      // Export data from the migration_table_1 table to the d:/data1.txt file.
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

## Example 2: Migrating Data from a MY Database to openGauss<a name="EN-US_TOPIC_0289900689"></a>

The following example shows how to use CopyManager to migrate data from MY to openGauss.

```
import java.io.StringReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.opengauss.copy.CopyManager;
import org.opengauss.core.BaseConnection;

public class Migration{

    public static void main(String[] args) {
        String url = new String("jdbc:opengauss://10.180.155.74:8000/postgres"); // Database URL
        String user = new String("jack");            // openGauss username
        String pass = new String("xxxxxxxxx");             //openGauss password
        String tablename = new String("migration_table"); // Table information
        String delimiter = new String("|");              // Delimiter
        String encoding = new String("UTF8");            // Character set
        String driver = "org.opengauss.Driver";
        StringBuffer buffer = new StringBuffer();       // Buffer to store formatted data

        try {
            // Obtain the query result set of the source database.
            ResultSet rs = getDataSet();

            // Traverse the result set and obtain records row by row.
            // The values of columns in each record are separated by the specified delimiter and end with a linefeed, forming strings.
            // Add the strings to the buffer.
            while (rs.next()) {
                buffer.append(rs.getString(1) + delimiter
                        + rs.getString(2) + delimiter
                        + rs.getString(3) + delimiter
                        + rs.getString(4)
                        + "\n");
            }
            rs.close();

            try {
                // Connect to the target database.
                Class.forName(driver);
                Connection conn = DriverManager.getConnection(url, user, pass);
                BaseConnection baseConn = (BaseConnection) conn;
                baseConn.setAutoCommit(false);

                // Initialize the table.
                String sql = "Copy " + tablename + " from STDIN DELIMITER " + "'" + delimiter + "'" + " ENCODING " + "'" + encoding + "'";

                // Commit data in the buffer.
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
    // Return the query result set from the source database.
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
