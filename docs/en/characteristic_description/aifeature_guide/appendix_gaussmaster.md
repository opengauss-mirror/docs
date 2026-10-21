---
description: This document describes Appendix in openGauss.
keywords: [openGauss, Appendix, features]
---

# Appendix<a name="ZH-CN_TOPIC_0000002293246449"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T01:47:41.075Z -->

The following describes the detailed structural design of the related tables in the intelligent Q&A module and the knowledge base management module. The historical Q&A table (qa\_record) stores detailed information about the questions raised by users, the knowledge fragment table (gauss\_kb\_zh) stores detailed information about document fragments, the knowledge base management table (knowledge\_base) stores detailed information about all currently created knowledge bases, and the data source management table (data\_source) stores detailed information about the current data sources.

**Table 1**  Historical Q&A table (qa\_record)

<a name="table84368360250"></a>
<table><tbody><tr id="row1743793616254"><td class="cellrowborder" valign="top" width="32%"><p id="p443715360257"><a name="p443715360257"></a><a name="p443715360257"></a><strong id="b54372363254"><a name="b54372363254"></a><a name="b54372363254"></a>Attribute</strong></p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p443720366259"><a name="p443720366259"></a><a name="p443720366259"></a><strong id="b134379369258"><a name="b134379369258"></a><a name="b134379369258"></a>Description</strong></p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p54371136202516"><a name="p54371136202516"></a><a name="p54371136202516"></a><strong id="b174371436172515"><a name="b174371436172515"></a><a name="b174371436172515"></a>Type</strong></p></td>
</tr>
<tr id="row1643793617251"><td class="cellrowborder" valign="top" width="32%"><p id="p5437173612255"><a name="p5437173612255"></a><a name="p5437173612255"></a>question_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1943719360252"><a name="p1943719360252"></a><a name="p1943719360252"></a>Question ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p54371369253"><a name="p54371369253"></a><a name="p54371369253"></a>text</p></td>
</tr>
<tr id="row1243719360254"><td class="cellrowborder" valign="top" width="32%"><p id="p543716365252"><a name="p543716365252"></a><a name="p543716365252"></a>question</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p8437103662515"><a name="p8437103662515"></a><a name="p8437103662515"></a>Question</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p11437736132510"><a name="p11437736132510"></a><a name="p11437736132510"></a>text</p></td>
</tr>
<tr id="row1743715364251"><td class="cellrowborder" valign="top" width="32%"><p id="p543763682516"><a name="p543763682516"></a><a name="p543763682516"></a>answer_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1243720364259"><a name="p1243720364259"></a><a name="p1243720364259"></a>Answer ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p24376362257"><a name="p24376362257"></a><a name="p24376362257"></a>text</p></td>
</tr>
<tr id="row643710361253"><td class="cellrowborder" valign="top" width="32%"><p id="p54376367259"><a name="p54376367259"></a><a name="p54376367259"></a>answer</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p143743622518"><a name="p143743622518"></a><a name="p143743622518"></a>Complete answer (including steps, etc.)</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p19437203616258"><a name="p19437203616258"></a><a name="p19437203616258"></a>text</p></td>
</tr>
<tr id="row8437536112513"><td class="cellrowborder" valign="top" width="32%"><p id="p143712367257"><a name="p143712367257"></a><a name="p143712367257"></a>user_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p174371336162515"><a name="p174371336162515"></a><a name="p174371336162515"></a>User ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p14437123617258"><a name="p14437123617258"></a><a name="p14437123617258"></a>text</p></td>
</tr>
<tr id="row16437133682514"><td class="cellrowborder" valign="top" width="32%"><p id="p1943753692511"><a name="p1943753692511"></a><a name="p1943753692511"></a>session_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p18437143613252"><a name="p18437143613252"></a><a name="p18437143613252"></a>Session ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1643711364250"><a name="p1643711364250"></a><a name="p1643711364250"></a>text</p></td>
</tr>
<tr id="row1243733682510"><td class="cellrowborder" valign="top" width="32%"><p id="p12437143642517"><a name="p12437143642517"></a><a name="p12437143642517"></a>switch</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4437183672516"><a name="p4437183672516"></a><a name="p4437183672516"></a>Whether to enable search</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p17437436202516"><a name="p17437436202516"></a><a name="p17437436202516"></a>text</p></td>
</tr>
<tr id="row84371536192516"><td class="cellrowborder" valign="top" width="32%"><p id="p4437436122517"><a name="p4437436122517"></a><a name="p4437436122517"></a>vector_topk</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p2437173613259"><a name="p2437173613259"></a><a name="p2437173613259"></a>Number of results returned by vector retrieval</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p24371336112513"><a name="p24371336112513"></a><a name="p24371336112513"></a>text</p></td>
</tr>
<tr id="row6437183611258"><td class="cellrowborder" valign="top" width="32%"><p id="p184370362258"><a name="p184370362258"></a><a name="p184370362258"></a>text_topk</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1843763611258"><a name="p1843763611258"></a><a name="p1843763611258"></a>Number of results returned by text retrieval</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p3437103618257"><a name="p3437103618257"></a><a name="p3437103618257"></a>text</p></td>
</tr>
<tr id="row184371136102512"><td class="cellrowborder" valign="top" width="32%"><p id="p9437193617257"><a name="p9437193617257"></a><a name="p9437193617257"></a>rerank_topk</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14437173613256"><a name="p14437173613256"></a><a name="p14437173613256"></a>Number of results returned after reranking</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p943883610256"><a name="p943883610256"></a><a name="p943883610256"></a>text</p></td>
</tr>
<tr id="row443814367259"><td class="cellrowborder" valign="top" width="32%"><p id="p124386365251"><a name="p124386365251"></a><a name="p124386365251"></a>kb_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p44382368253"><a name="p44382368253"></a><a name="p44382368253"></a>Knowledge base, the search space for the query</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p2438183622519"><a name="p2438183622519"></a><a name="p2438183622519"></a>text</p></td>
</tr>
<tr id="row134381136182513"><td class="cellrowborder" valign="top" width="32%"><p id="p13438236112514"><a name="p13438236112514"></a><a name="p13438236112514"></a>version</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p18438143616254"><a name="p18438143616254"></a><a name="p18438143616254"></a>Version, used for version filtering</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1443863619254"><a name="p1443863619254"></a><a name="p1443863619254"></a>text</p></td>
</tr>
<tr id="row13438136162516"><td class="cellrowborder" valign="top" width="32%"><p id="p7438183611256"><a name="p7438183611256"></a><a name="p7438183611256"></a>model_name</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p18438183672515"><a name="p18438183672515"></a><a name="p18438183672515"></a>Name of the LLM used to generate results</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1743803617250"><a name="p1743803617250"></a><a name="p1743803617250"></a>text</p></td>
</tr>
<tr id="row14381236182513"><td class="cellrowborder" valign="top" width="32%"><p id="p34388364253"><a name="p34388364253"></a><a name="p34388364253"></a>model_config</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p743833662512"><a name="p743833662512"></a><a name="p743833662512"></a>LLM hyperparameters</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p19438133610250"><a name="p19438133610250"></a><a name="p19438133610250"></a>text</p></td>
</tr>
<tr id="row154381436152520"><td class="cellrowborder" valign="top" width="32%"><p id="p1543833619255"><a name="p1543833619255"></a><a name="p1543833619255"></a>lang</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p104382366251"><a name="p104382366251"></a><a name="p104382366251"></a>Language</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p44387364254"><a name="p44387364254"></a><a name="p44387364254"></a>text</p></td>
</tr>
<tr id="row134381036152519"><td class="cellrowborder" valign="top" width="32%"><p id="p174385367257"><a name="p174385367257"></a><a name="p174385367257"></a>task_type</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p2043823622516"><a name="p2043823622516"></a><a name="p2043823622516"></a>Task type</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1438203682520"><a name="p1438203682520"></a><a name="p1438203682520"></a>text</p></td>
</tr>
<tr id="row16438103612519"><td class="cellrowborder" valign="top" width="32%"><p id="p1243813614258"><a name="p1243813614258"></a><a name="p1243813614258"></a>like</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1543812368259"><a name="p1543812368259"></a><a name="p1543812368259"></a>Like</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1243883613254"><a name="p1243883613254"></a><a name="p1243883613254"></a>text</p></td>
</tr>
<tr id="row8438113692515"><td class="cellrowborder" valign="top" width="32%"><p id="p6438173642511"><a name="p6438173642511"></a><a name="p6438173642511"></a>hate</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1243833672516"><a name="p1243833672516"></a><a name="p1243833672516"></a>Dislike</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p0438183662520"><a name="p0438183662520"></a><a name="p0438183662520"></a>text</p></td>
</tr>
<tr id="row64381362255"><td class="cellrowborder" valign="top" width="32%"><p id="p114389361254"><a name="p114389361254"></a><a name="p114389361254"></a>feedback_info</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p19438203692517"><a name="p19438203692517"></a><a name="p19438203692517"></a>Feedback information</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p15438123612514"><a name="p15438123612514"></a><a name="p15438123612514"></a>text</p></td>
</tr>
<tr id="row443810367256"><td class="cellrowborder" valign="top" width="32%"><p id="p5438193618251"><a name="p5438193618251"></a><a name="p5438193618251"></a>report_type</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p7438153610253"><a name="p7438153610253"></a><a name="p7438153610253"></a>Report type</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p043883611252"><a name="p043883611252"></a><a name="p043883611252"></a>text</p></td>
</tr>
<tr id="row1438193672511"><td class="cellrowborder" valign="top" width="32%"><p id="p343813610254"><a name="p343813610254"></a><a name="p343813610254"></a>report_info</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p54382366253"><a name="p54382366253"></a><a name="p54382366253"></a>Report information</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p13438193619252"><a name="p13438193619252"></a><a name="p13438193619252"></a>text</p></td>
</tr>
<tr id="row44381836202513"><td class="cellrowborder" valign="top" width="32%"><p id="p154398363258"><a name="p154398363258"></a><a name="p154398363258"></a>create_time</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p543993692519"><a name="p543993692519"></a><a name="p543993692519"></a>Data source creation time</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p124391736192514"><a name="p124391736192514"></a><a name="p124391736192514"></a>text</p></td>
</tr>
<tr id="row7439203616250"><td class="cellrowborder" valign="top" width="32%"><p id="p14439133610251"><a name="p14439133610251"></a><a name="p14439133610251"></a>update_time</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p154391936202514"><a name="p154391936202514"></a><a name="p154391936202514"></a>Data source update time</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p124395364254"><a name="p124395364254"></a><a name="p124395364254"></a>text</p></td>
</tr>
</tbody>
</table>

**Table 2**  Knowledge Fragment Table (gauss\_kb\_zh)

<a name="table788876814"></a>
<table><tbody><tr id="row14150271286"><td class="cellrowborder" valign="top" width="32%"><p id="p18150171582"><a name="p18150171582"></a><a name="p18150171582"></a><strong id="b898433355510"><a name="b898433355510"></a><a name="b898433355510"></a>Attribute</strong></p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p91501973817"><a name="p91501973817"></a><a name="p91501973817"></a><strong id="b199233313554"><a name="b199233313554"></a><a name="b199233313554"></a>Description</strong></p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p915010712817"><a name="p915010712817"></a><a name="p915010712817"></a><strong id="b17212345554"><a name="b17212345554"></a><a name="b17212345554"></a>Type</strong></p></td>
</tr>
<tr id="row131501271984"><td class="cellrowborder" valign="top" width="32%"><p id="p215047389"><a name="p215047389"></a><a name="p215047389"></a>uuid</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4150171583"><a name="p4150171583"></a><a name="p4150171583"></a>Unique identifier of the knowledge fragment</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p415007785"><a name="p415007785"></a><a name="p415007785"></a>text</p></td>
</tr>
<tr id="row14150871880"><td class="cellrowborder" valign="top" width="32%"><p id="p4150170810"><a name="p4150170810"></a><a name="p4150170810"></a>text</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p11501371683"><a name="p11501371683"></a><a name="p11501371683"></a>Text content of the knowledge fragment</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p111501971281"><a name="p111501971281"></a><a name="p111501971281"></a>text</p></td>
</tr>
<tr id="row01502715820"><td class="cellrowborder" valign="top" width="32%"><p id="p1815057785"><a name="p1815057785"></a><a name="p1815057785"></a>field</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p21501771180"><a name="p21501771180"></a><a name="p21501771180"></a>Field to which the knowledge fragment belongs</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p131511672814"><a name="p131511672814"></a><a name="p131511672814"></a>text</p></td>
</tr>
<tr id="row11151873810"><td class="cellrowborder" valign="top" width="32%"><p id="p121516718816"><a name="p121516718816"></a><a name="p121516718816"></a>sub_field</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p111518718815"><a name="p111518718815"></a><a name="p111518718815"></a>Subfield</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p10151771281"><a name="p10151771281"></a><a name="p10151771281"></a>text</p></td>
</tr>
<tr id="row21518716811"><td class="cellrowborder" valign="top" width="32%"><p id="p141515717819"><a name="p141515717819"></a><a name="p141515717819"></a>source</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4151071282"><a name="p4151071282"></a><a name="p4151071282"></a>Document source</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p13151874816"><a name="p13151874816"></a><a name="p13151874816"></a>text</p></td>
</tr>
<tr id="row9151771189"><td class="cellrowborder" valign="top" width="32%"><p id="p31511676816"><a name="p31511676816"></a><a name="p31511676816"></a>version</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p41511671812"><a name="p41511671812"></a><a name="p41511671812"></a>Version information corresponding to the knowledge fragment</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12151474810"><a name="p12151474810"></a><a name="p12151474810"></a>text</p></td>
</tr>
<tr id="row91517720813"><td class="cellrowborder" valign="top" width="32%"><p id="p1715120711818"><a name="p1715120711818"></a><a name="p1715120711818"></a>product_format</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p16151276817"><a name="p16151276817"></a><a name="p16151276817"></a>Product form</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p5151187685"><a name="p5151187685"></a><a name="p5151187685"></a>text</p></td>
</tr>
<tr id="row4151976812"><td class="cellrowborder" valign="top" width="32%"><p id="p81511071384"><a name="p81511071384"></a><a name="p81511071384"></a>doc_location</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p21511571285"><a name="p21511571285"></a><a name="p21511571285"></a>Document name</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p615197487"><a name="p615197487"></a><a name="p615197487"></a>text</p></td>
</tr>
<tr id="row16151187089"><td class="cellrowborder" valign="top" width="32%"><p id="p41511372810"><a name="p41511372810"></a><a name="p41511372810"></a>title</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14151273811"><a name="p14151273811"></a><a name="p14151273811"></a>Specific information in the source document</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p015114717812"><a name="p015114717812"></a><a name="p015114717812"></a>text</p></td>
</tr>
<tr id="row14151071781"><td class="cellrowborder" valign="top" width="32%"><p id="p181511674817"><a name="p181511674817"></a><a name="p181511674817"></a>visualize</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p141511471986"><a name="p141511471986"></a><a name="p141511471986"></a>Formatted information</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p2151177286"><a name="p2151177286"></a><a name="p2151177286"></a>text</p></td>
</tr>
<tr id="row4152471489"><td class="cellrowborder" valign="top" width="32%"><p id="p151522718817"><a name="p151522718817"></a><a name="p151522718817"></a>link</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p8152678820"><a name="p8152678820"></a><a name="p8152678820"></a>link</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p131521720814"><a name="p131521720814"></a><a name="p131521720814"></a>text</p></td>
</tr>
<tr id="row815210710812"><td class="cellrowborder" valign="top" width="32%"><p id="p01529718816"><a name="p01529718816"></a><a name="p01529718816"></a>context</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p115211714817"><a name="p115211714817"></a><a name="p115211714817"></a>UUID list</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p8152871482"><a name="p8152871482"></a><a name="p8152871482"></a>text</p></td>
</tr>
<tr id="row201522071888"><td class="cellrowborder" valign="top" width="32%"><p id="p4152471185"><a name="p4152471185"></a><a name="p4152471185"></a>keyword</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14152771780"><a name="p14152771780"></a><a name="p14152771780"></a>keyword</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p18152187486"><a name="p18152187486"></a><a name="p18152187486"></a>text</p></td>
</tr>
<tr id="row5152107183"><td class="cellrowborder" valign="top" width="32%"><p id="p111521471585"><a name="p111521471585"></a><a name="p111521471585"></a>confidence</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4152157888"><a name="p4152157888"></a><a name="p4152157888"></a>Confidence</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p151529711811"><a name="p151529711811"></a><a name="p151529711811"></a>text</p></td>
</tr>
<tr id="row1015247689"><td class="cellrowborder" valign="top" width="32%"><p id="p61521876813"><a name="p61521876813"></a><a name="p61521876813"></a>ds_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p19152471082"><a name="p19152471082"></a><a name="p19152471082"></a>Data source ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1315216711816"><a name="p1315216711816"></a><a name="p1315216711816"></a>text</p></td>
</tr>
<tr id="row11152471184"><td class="cellrowborder" valign="top" width="32%"><p id="p101531171887"><a name="p101531171887"></a><a name="p101531171887"></a>prev_uuid</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p615357188"><a name="p615357188"></a><a name="p615357188"></a>UUID of the previous knowledge fragment</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p115347187"><a name="p115347187"></a><a name="p115347187"></a>text</p></td>
</tr>
<tr id="row01531273811"><td class="cellrowborder" valign="top" width="32%"><p id="p4153117483"><a name="p4153117483"></a><a name="p4153117483"></a>next_uuid</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p015347382"><a name="p015347382"></a><a name="p015347382"></a>UUID of the next knowledge fragment</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p415337589"><a name="p415337589"></a><a name="p415337589"></a>text</p></td>
</tr>
<tr id="row121537712815"><td class="cellrowborder" valign="top" width="32%"><p id="p201531471781"><a name="p201531471781"></a><a name="p201531471781"></a>text_vector</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p12153872819"><a name="p12153872819"></a><a name="p12153872819"></a>Knowledge vector</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p7153177881"><a name="p7153177881"></a><a name="p7153177881"></a>floatvector(1024)</p></td>
</tr>
</tbody>
</table>

**Table 3**  Knowledge base management table (knowledge\_base)

<a name="table11783845783"></a>
<table><tbody><tr id="row1289718572810"><td class="cellrowborder" valign="top" width="32%"><p id="p13908155493"><a name="p13908155493"></a><a name="p13908155493"></a><strong id="b1042018429556"><a name="b1042018429556"></a><a name="b1042018429556"></a>Attribute</strong></p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p990855895"><a name="p990855895"></a><a name="p990855895"></a><strong id="b2042714295519"><a name="b2042714295519"></a><a name="b2042714295519"></a>Description</strong></p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p119082059917"><a name="p119082059917"></a><a name="p119082059917"></a><strong id="b34342424558"><a name="b34342424558"></a><a name="b34342424558"></a>Type</strong></p></td>
</tr>
<tr id="row081374516813"><td class="cellrowborder" valign="top" width="32%"><p id="p1081317451811"><a name="p1081317451811"></a><a name="p1081317451811"></a>kb_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14813154517811"><a name="p14813154517811"></a><a name="p14813154517811"></a>Knowledge base ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p20668145615477"><a name="p20668145615477"></a><a name="p20668145615477"></a>integer</p></td>
</tr>
<tr id="row1081311454812"><td class="cellrowborder" valign="top" width="32%"><p id="p168139453819"><a name="p168139453819"></a><a name="p168139453819"></a>name</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p188131445288"><a name="p188131445288"></a><a name="p188131445288"></a>Knowledge base name</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1881374518820"><a name="p1881374518820"></a><a name="p1881374518820"></a>text</p></td>
</tr>
<tr id="row1813114513819"><td class="cellrowborder" valign="top" width="32%"><p id="p13813134513812"><a name="p13813134513812"></a><a name="p13813134513812"></a>user_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p28133459811"><a name="p28133459811"></a><a name="p28133459811"></a>Knowledge base user</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1881316457811"><a name="p1881316457811"></a><a name="p1881316457811"></a>text</p></td>
</tr>
<tr id="row12774199486"><td class="cellrowborder" valign="top" width="32%"><p id="p14771919174813"><a name="p14771919174813"></a><a name="p14771919174813"></a>kb_type</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p10771219174811"><a name="p10771219174811"></a><a name="p10771219174811"></a>Knowledge base type</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12776196489"><a name="p12776196489"></a><a name="p12776196489"></a>text</p></td>
</tr>
<tr id="row1881319451987"><td class="cellrowborder" valign="top" width="32%"><p id="p198134453815"><a name="p198134453815"></a><a name="p198134453815"></a>description</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4813134510811"><a name="p4813134510811"></a><a name="p4813134510811"></a>Knowledge base description</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p118131145481"><a name="p118131145481"></a><a name="p118131145481"></a>text</p></td>
</tr>
<tr id="row1481354513812"><td class="cellrowborder" valign="top" width="32%"><p id="p181364514819"><a name="p181364514819"></a><a name="p181364514819"></a>context</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p178131945081"><a name="p178131945081"></a><a name="p178131945081"></a>Knowledge base parameter</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p168133451986"><a name="p168133451986"></a><a name="p168133451986"></a>text</p></td>
</tr>
<tr id="row181320451287"><td class="cellrowborder" valign="top" width="32%"><p id="p1181344519810"><a name="p1181344519810"></a><a name="p1181344519810"></a>create_time</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p198141745380"><a name="p198141745380"></a><a name="p198141745380"></a>Knowledge base creation time</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p2814845281"><a name="p2814845281"></a><a name="p2814845281"></a>text</p></td>
</tr>
<tr id="row178141545187"><td class="cellrowborder" valign="top" width="32%"><p id="p681418451782"><a name="p681418451782"></a><a name="p681418451782"></a>update_time</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p198146453810"><a name="p198146453810"></a><a name="p198146453810"></a>Knowledge base update time</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p208141545781"><a name="p208141545781"></a><a name="p208141545781"></a>text</p></td>
</tr>
</tbody>
</table>

**Table 4**  Data source management table (data\_source)

<a name="table9980038595"></a>
<table><tbody><tr id="row14273145413818"><td class="cellrowborder" valign="top" width="32%"><p id="p122711916393"><a name="p122711916393"></a><a name="p122711916393"></a><strong id="b4659145225517"><a name="b4659145225517"></a><a name="b4659145225517"></a>Attribute</strong></p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p0271121173914"><a name="p0271121173914"></a><a name="p0271121173914"></a><strong id="b106741652185512"><a name="b106741652185512"></a><a name="b106741652185512"></a>Description</strong></p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1727114114391"><a name="p1727114114391"></a><a name="p1727114114391"></a><strong id="b769175216555"><a name="b769175216555"></a><a name="b769175216555"></a>Type</strong></p></td>
</tr>
<tr id="row351839394"><td class="cellrowborder" valign="top" width="32%"><p id="p155839894"><a name="p155839894"></a><a name="p155839894"></a>ds_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p15516391699"><a name="p15516391699"></a><a name="p15516391699"></a>Data source ID</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12563918915"><a name="p12563918915"></a><a name="p12563918915"></a>integer</p></td>
</tr>
<tr id="row3516391492"><td class="cellrowborder" valign="top" width="32%"><p id="p254391094"><a name="p254391094"></a><a name="p254391094"></a>name</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p158391897"><a name="p158391897"></a><a name="p158391897"></a>Data source name</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1051839291"><a name="p1051839291"></a><a name="p1051839291"></a>text</p></td>
</tr>
<tr id="row95123920914"><td class="cellrowborder" valign="top" width="32%"><p id="p16514391920"><a name="p16514391920"></a><a name="p16514391920"></a>related_kb_id</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p2057391193"><a name="p2057391193"></a><a name="p2057391193"></a>Knowledge base corresponding to the data source</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p0517391797"><a name="p0517391797"></a><a name="p0517391797"></a>integer</p></td>
</tr>
<tr id="row1451639394"><td class="cellrowborder" valign="top" width="32%"><p id="p13510391393"><a name="p13510391393"></a><a name="p13510391393"></a>description</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1859391192"><a name="p1859391192"></a><a name="p1859391192"></a>Data source description</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12583919914"><a name="p12583919914"></a><a name="p12583919914"></a>text</p></td>
</tr>
<tr id="row8518396914"><td class="cellrowborder" valign="top" width="32%"><p id="p1451539591"><a name="p1451539591"></a><a name="p1451539591"></a>file_name</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p75839996"><a name="p75839996"></a><a name="p75839996"></a>Document name corresponding to the data source</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p5512390916"><a name="p5512390916"></a><a name="p5512390916"></a>text</p></td>
</tr>
<tr id="row658391499"><td class="cellrowborder" valign="top" width="32%"><p id="p15510391994"><a name="p15510391994"></a><a name="p15510391994"></a>create_time</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p95133911917"><a name="p95133911917"></a><a name="p95133911917"></a>Data source creation time</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p858391698"><a name="p858391698"></a><a name="p858391698"></a>text</p></td>
</tr>
<tr id="row1951339998"><td class="cellrowborder" valign="top" width="32%"><p id="p959391097"><a name="p959391097"></a><a name="p959391097"></a>update_time</p></td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14512391391"><a name="p14512391391"></a><a name="p14512391391"></a>Data source update time</p></td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p14612391698"><a name="p14612391698"></a><a name="p14612391698"></a>text</p></td>
</tr>
</tbody>
</table>

The following describes the detailed structure design of the related tables in the intelligent O&M module.

1. The short-term memory table (tb\_interaction\_memory) records the conversation content during tool interaction of the intelligent O&M module.
2. The cluster management table (tb\_managed\_cluster) records the cluster information that the GaussMaster service supports for diagnosis.

**Table 5**  Short-term memory table (tb\_interaction\_memory)

<a name="table1662525017292"></a>
<table><thead align="left"><tr id="row16251506295"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p962575017292"><a name="p962575017292"></a><a name="p962575017292"></a>Attribute</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p19625155020294"><a name="p19625155020294"></a><a name="p19625155020294"></a>Description</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p5625450132913"><a name="p5625450132913"></a><a name="p5625450132913"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1262535013298"><a name="p1262535013298"></a><a name="p1262535013298"></a>nullable</p></th>
</tr>
</thead>
<tbody><tr id="row862655062917"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p14626115002910"><a name="p14626115002910"></a><a name="p14626115002910"></a>qa_record_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p33344716415"><a name="p33344716415"></a><a name="p33344716415"></a>Primary key, QA pair ID</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1967411518417"><a name="p1967411518417"></a><a name="p1967411518417"></a>String</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6418113421"><a name="p6418113421"></a><a name="p6418113421"></a>False</p></td>
</tr>
<tr id="row176261150122914"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p11626185092919"><a name="p11626185092919"></a><a name="p11626185092919"></a>user_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p9341147144111"><a name="p9341147144111"></a><a name="p9341147144111"></a>User ID</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p116741615114111"><a name="p116741615114111"></a><a name="p116741615114111"></a>String</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p0411514429"><a name="p0411514429"></a><a name="p0411514429"></a>False</p></td>
</tr>
<tr id="row15626250202916"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13626185002913"><a name="p13626185002913"></a><a name="p13626185002913"></a>session_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17349477412"><a name="p17349477412"></a><a name="p17349477412"></a>Session ID</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1667471594110"><a name="p1667471594110"></a><a name="p1667471594110"></a>String</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1141819426"><a name="p1141819426"></a><a name="p1141819426"></a>False</p></td>
</tr>
<tr id="row5626175042916"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p106261850162911"><a name="p106261850162911"></a><a name="p106261850162911"></a>question</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p19341471411"><a name="p19341471411"></a><a name="p19341471411"></a>User question</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p56741115204114"><a name="p56741115204114"></a><a name="p56741115204114"></a>TEXT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p204131174220"><a name="p204131174220"></a><a name="p204131174220"></a>False</p></td>
</tr>
<tr id="row46261850112910"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p462614505298"><a name="p462614505298"></a><a name="p462614505298"></a>answer</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p11341147114116"><a name="p11341147114116"></a><a name="p11341147114116"></a>Reply</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p56741815134111"><a name="p56741815134111"></a><a name="p56741815134111"></a>TEXT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p16418194210"><a name="p16418194210"></a><a name="p16418194210"></a>True</p></td>
</tr>
<tr id="row1169923214317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1469912327318"><a name="p1469912327318"></a><a name="p1469912327318"></a>llm_name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1934134719415"><a name="p1934134719415"></a><a name="p1934134719415"></a>Large language model name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p14674215144113"><a name="p14674215144113"></a><a name="p14674215144113"></a>String</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p5411918429"><a name="p5411918429"></a><a name="p5411918429"></a>True</p></td>
</tr>
<tr id="row6155163810311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p6156838193118"><a name="p6156838193118"></a><a name="p6156838193118"></a>function_call</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1334194715419"><a name="p1334194715419"></a><a name="p1334194715419"></a>Tool call result</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p5674171517419"><a name="p5674171517419"></a><a name="p5674171517419"></a>TEXT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p11417104220"><a name="p11417104220"></a><a name="p11417104220"></a>True</p></td>
</tr>
<tr id="row159311042183118"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p179317423310"><a name="p179317423310"></a><a name="p179317423310"></a>created_at</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p173419478419"><a name="p173419478419"></a><a name="p173419478419"></a>Conversation time</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p767491584119"><a name="p767491584119"></a><a name="p767491584119"></a>BigInteger</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1841131204211"><a name="p1841131204211"></a><a name="p1841131204211"></a>False</p></td>
</tr>
</tbody>
</table>

**Table 6**  Cluster Management Table (tb\_managed\_cluster)

<a name="table56641357133711"></a>
<table><thead align="left"><tr id="row1066445720375"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p12664105712374"><a name="p12664105712374"></a><a name="p12664105712374"></a>Attribute</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p1966465720379"><a name="p1966465720379"></a><a name="p1966465720379"></a>Description</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p0664105716374"><a name="p0664105716374"></a><a name="p0664105716374"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p10664957103719"><a name="p10664957103719"></a><a name="p10664957103719"></a>nullbale</p></th>
</tr>
</thead>
<tbody><tr id="row866425753715"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p0664205720377"><a name="p0664205720377"></a><a name="p0664205720377"></a>cluster_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p46641657193717"><a name="p46641657193717"></a><a name="p46641657193717"></a>Cluster ID</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p10664165753713"><a name="p10664165753713"></a><a name="p10664165753713"></a>INT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p366412575378"><a name="p366412575378"></a><a name="p366412575378"></a>No</p></td>
</tr>
<tr id="row136641357103716"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p7664457193711"><a name="p7664457193711"></a><a name="p7664457193711"></a>cluster_name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3664185720371"><a name="p3664185720371"></a><a name="p3664185720371"></a>Cluster name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p4664257173710"><a name="p4664257173710"></a><a name="p4664257173710"></a>STRING</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p33171214400"><a name="p33171214400"></a><a name="p33171214400"></a>No</p></td>
</tr>
<tr id="row12664257153717"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18664185715373"><a name="p18664185715373"></a><a name="p18664185715373"></a>host</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1566417577372"><a name="p1566417577372"></a><a name="p1566417577372"></a>Cluster IP address</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p11664185720372"><a name="p11664185720372"></a><a name="p11664185720372"></a>STRING</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p894481294016"><a name="p894481294016"></a><a name="p894481294016"></a>No</p></td>
</tr>
<tr id="row12665115753712"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p146654572377"><a name="p146654572377"></a><a name="p146654572377"></a>port</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10665125718378"><a name="p10665125718378"></a><a name="p10665125718378"></a>Cluster port number</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13665205783712"><a name="p13665205783712"></a><a name="p13665205783712"></a>INT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1800201313408"><a name="p1800201313408"></a><a name="p1800201313408"></a>No</p></td>
</tr>
<tr id="row18940155117386"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p11940195113818"><a name="p11940195113818"></a><a name="p11940195113818"></a>username</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p494035117389"><a name="p494035117389"></a><a name="p494035117389"></a>User name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p294017513388"><a name="p294017513388"></a><a name="p294017513388"></a>TEXT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p458213143406"><a name="p458213143406"></a><a name="p458213143406"></a>No</p></td>
</tr>
<tr id="row11572115613386"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p95721256103815"><a name="p95721256103815"></a><a name="p95721256103815"></a>password</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3572456153815"><a name="p3572456153815"></a><a name="p3572456153815"></a>Encrypted password</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1857220560385"><a name="p1857220560385"></a><a name="p1857220560385"></a>TEXT</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p5362415154011"><a name="p5362415154011"></a><a name="p5362415154011"></a>No</p></td>
</tr>
</tbody>
</table>
