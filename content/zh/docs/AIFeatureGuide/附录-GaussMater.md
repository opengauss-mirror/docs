# 附录<a name="ZH-CN_TOPIC_0000002293246449"></a>

以下为智能问答模块与知识库管理模块中相关表的详细结构设计。其中，历史问答表（qa\_record）存放用户提出问题的详细信息，知识片段表（gauss\_kb\_zh）存放文档片段的详细信息，知识库管理表（knowledge\_base）存放当前创建的所有知识库的详细信息，数据源管理表（data\_source）存放当前数据源的详细信息。

**表 1**  历史问答表（qa\_record）

<a name="table84368360250"></a>
<table><tbody><tr id="row1743793616254"><td class="cellrowborder" valign="top" width="32%"><p id="p443715360257"><a name="p443715360257"></a><a name="p443715360257"></a><strong id="b54372363254"><a name="b54372363254"></a><a name="b54372363254"></a>属性</strong></p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p443720366259"><a name="p443720366259"></a><a name="p443720366259"></a><strong id="b134379369258"><a name="b134379369258"></a><a name="b134379369258"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p54371136202516"><a name="p54371136202516"></a><a name="p54371136202516"></a><strong id="b174371436172515"><a name="b174371436172515"></a><a name="b174371436172515"></a>类型</strong></p>
</td>
</tr>
<tr id="row1643793617251"><td class="cellrowborder" valign="top" width="32%"><p id="p5437173612255"><a name="p5437173612255"></a><a name="p5437173612255"></a>question_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1943719360252"><a name="p1943719360252"></a><a name="p1943719360252"></a>问题id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p54371369253"><a name="p54371369253"></a><a name="p54371369253"></a>text</p>
</td>
</tr>
<tr id="row1243719360254"><td class="cellrowborder" valign="top" width="32%"><p id="p543716365252"><a name="p543716365252"></a><a name="p543716365252"></a>question</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p8437103662515"><a name="p8437103662515"></a><a name="p8437103662515"></a>问题</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p11437736132510"><a name="p11437736132510"></a><a name="p11437736132510"></a>text</p>
</td>
</tr>
<tr id="row1743715364251"><td class="cellrowborder" valign="top" width="32%"><p id="p543763682516"><a name="p543763682516"></a><a name="p543763682516"></a>answer_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1243720364259"><a name="p1243720364259"></a><a name="p1243720364259"></a>回答id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p24376362257"><a name="p24376362257"></a><a name="p24376362257"></a>text</p>
</td>
</tr>
<tr id="row643710361253"><td class="cellrowborder" valign="top" width="32%"><p id="p54376367259"><a name="p54376367259"></a><a name="p54376367259"></a>answer</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p143743622518"><a name="p143743622518"></a><a name="p143743622518"></a>完整回答（包括步骤等）</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p19437203616258"><a name="p19437203616258"></a><a name="p19437203616258"></a>text</p>
</td>
</tr>
<tr id="row8437536112513"><td class="cellrowborder" valign="top" width="32%"><p id="p143712367257"><a name="p143712367257"></a><a name="p143712367257"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p174371336162515"><a name="p174371336162515"></a><a name="p174371336162515"></a>用户id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p14437123617258"><a name="p14437123617258"></a><a name="p14437123617258"></a>text</p>
</td>
</tr>
<tr id="row16437133682514"><td class="cellrowborder" valign="top" width="32%"><p id="p1943753692511"><a name="p1943753692511"></a><a name="p1943753692511"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p18437143613252"><a name="p18437143613252"></a><a name="p18437143613252"></a>会话id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1643711364250"><a name="p1643711364250"></a><a name="p1643711364250"></a>text</p>
</td>
</tr>
<tr id="row1243733682510"><td class="cellrowborder" valign="top" width="32%"><p id="p12437143642517"><a name="p12437143642517"></a><a name="p12437143642517"></a>switch</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4437183672516"><a name="p4437183672516"></a><a name="p4437183672516"></a>是否开启搜索</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p17437436202516"><a name="p17437436202516"></a><a name="p17437436202516"></a>text</p>
</td>
</tr>
<tr id="row84371536192516"><td class="cellrowborder" valign="top" width="32%"><p id="p4437436122517"><a name="p4437436122517"></a><a name="p4437436122517"></a>vector_topk</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p2437173613259"><a name="p2437173613259"></a><a name="p2437173613259"></a>向量检索返回的结果数</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p24371336112513"><a name="p24371336112513"></a><a name="p24371336112513"></a>text</p>
</td>
</tr>
<tr id="row6437183611258"><td class="cellrowborder" valign="top" width="32%"><p id="p184370362258"><a name="p184370362258"></a><a name="p184370362258"></a>text_topk</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1843763611258"><a name="p1843763611258"></a><a name="p1843763611258"></a>文本检索返回的结果数</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p3437103618257"><a name="p3437103618257"></a><a name="p3437103618257"></a>text</p>
</td>
</tr>
<tr id="row184371136102512"><td class="cellrowborder" valign="top" width="32%"><p id="p9437193617257"><a name="p9437193617257"></a><a name="p9437193617257"></a>rerank_topk</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14437173613256"><a name="p14437173613256"></a><a name="p14437173613256"></a>重排序后返回的结果数</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p943883610256"><a name="p943883610256"></a><a name="p943883610256"></a>text</p>
</td>
</tr>
<tr id="row443814367259"><td class="cellrowborder" valign="top" width="32%"><p id="p124386365251"><a name="p124386365251"></a><a name="p124386365251"></a>kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p44382368253"><a name="p44382368253"></a><a name="p44382368253"></a>知识库，查询的搜索空间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p2438183622519"><a name="p2438183622519"></a><a name="p2438183622519"></a>text</p>
</td>
</tr>
<tr id="row134381136182513"><td class="cellrowborder" valign="top" width="32%"><p id="p13438236112514"><a name="p13438236112514"></a><a name="p13438236112514"></a>version</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p18438143616254"><a name="p18438143616254"></a><a name="p18438143616254"></a>版本，进行版本过滤</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1443863619254"><a name="p1443863619254"></a><a name="p1443863619254"></a>text</p>
</td>
</tr>
<tr id="row13438136162516"><td class="cellrowborder" valign="top" width="32%"><p id="p7438183611256"><a name="p7438183611256"></a><a name="p7438183611256"></a>model_name</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p18438183672515"><a name="p18438183672515"></a><a name="p18438183672515"></a>用于生成结果的大模型名称</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1743803617250"><a name="p1743803617250"></a><a name="p1743803617250"></a>text</p>
</td>
</tr>
<tr id="row14381236182513"><td class="cellrowborder" valign="top" width="32%"><p id="p34388364253"><a name="p34388364253"></a><a name="p34388364253"></a>model_config</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p743833662512"><a name="p743833662512"></a><a name="p743833662512"></a>大模型超参</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p19438133610250"><a name="p19438133610250"></a><a name="p19438133610250"></a>text</p>
</td>
</tr>
<tr id="row154381436152520"><td class="cellrowborder" valign="top" width="32%"><p id="p1543833619255"><a name="p1543833619255"></a><a name="p1543833619255"></a>lang</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p104382366251"><a name="p104382366251"></a><a name="p104382366251"></a>语言</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p44387364254"><a name="p44387364254"></a><a name="p44387364254"></a>text</p>
</td>
</tr>
<tr id="row134381036152519"><td class="cellrowborder" valign="top" width="32%"><p id="p174385367257"><a name="p174385367257"></a><a name="p174385367257"></a>task_type</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p2043823622516"><a name="p2043823622516"></a><a name="p2043823622516"></a>任务类型</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1438203682520"><a name="p1438203682520"></a><a name="p1438203682520"></a>text</p>
</td>
</tr>
<tr id="row16438103612519"><td class="cellrowborder" valign="top" width="32%"><p id="p1243813614258"><a name="p1243813614258"></a><a name="p1243813614258"></a>like</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1543812368259"><a name="p1543812368259"></a><a name="p1543812368259"></a>点赞</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1243883613254"><a name="p1243883613254"></a><a name="p1243883613254"></a>text</p>
</td>
</tr>
<tr id="row8438113692515"><td class="cellrowborder" valign="top" width="32%"><p id="p6438173642511"><a name="p6438173642511"></a><a name="p6438173642511"></a>hate</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1243833672516"><a name="p1243833672516"></a><a name="p1243833672516"></a>点踩</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p0438183662520"><a name="p0438183662520"></a><a name="p0438183662520"></a>text</p>
</td>
</tr>
<tr id="row64381362255"><td class="cellrowborder" valign="top" width="32%"><p id="p114389361254"><a name="p114389361254"></a><a name="p114389361254"></a>feedback_info</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p19438203692517"><a name="p19438203692517"></a><a name="p19438203692517"></a>反馈信息</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p15438123612514"><a name="p15438123612514"></a><a name="p15438123612514"></a>text</p>
</td>
</tr>
<tr id="row443810367256"><td class="cellrowborder" valign="top" width="32%"><p id="p5438193618251"><a name="p5438193618251"></a><a name="p5438193618251"></a>report_type</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p7438153610253"><a name="p7438153610253"></a><a name="p7438153610253"></a>举报类型</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p043883611252"><a name="p043883611252"></a><a name="p043883611252"></a>text</p>
</td>
</tr>
<tr id="row1438193672511"><td class="cellrowborder" valign="top" width="32%"><p id="p343813610254"><a name="p343813610254"></a><a name="p343813610254"></a>report_info</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p54382366253"><a name="p54382366253"></a><a name="p54382366253"></a>举报信息</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p13438193619252"><a name="p13438193619252"></a><a name="p13438193619252"></a>text</p>
</td>
</tr>
<tr id="row44381836202513"><td class="cellrowborder" valign="top" width="32%"><p id="p154398363258"><a name="p154398363258"></a><a name="p154398363258"></a>create_time</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p543993692519"><a name="p543993692519"></a><a name="p543993692519"></a>数据源创建时间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p124391736192514"><a name="p124391736192514"></a><a name="p124391736192514"></a>text</p>
</td>
</tr>
<tr id="row7439203616250"><td class="cellrowborder" valign="top" width="32%"><p id="p14439133610251"><a name="p14439133610251"></a><a name="p14439133610251"></a>update_time</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p154391936202514"><a name="p154391936202514"></a><a name="p154391936202514"></a>数据源更新时间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p124395364254"><a name="p124395364254"></a><a name="p124395364254"></a>text</p>
</td>
</tr>
</tbody>
</table>

**表 2**  知识片段表（gauss\_kb\_zh）

<a name="table788876814"></a>
<table><tbody><tr id="row14150271286"><td class="cellrowborder" valign="top" width="32%"><p id="p18150171582"><a name="p18150171582"></a><a name="p18150171582"></a><strong id="b898433355510"><a name="b898433355510"></a><a name="b898433355510"></a>属性</strong></p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p91501973817"><a name="p91501973817"></a><a name="p91501973817"></a><strong id="b199233313554"><a name="b199233313554"></a><a name="b199233313554"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p915010712817"><a name="p915010712817"></a><a name="p915010712817"></a><strong id="b17212345554"><a name="b17212345554"></a><a name="b17212345554"></a>类型</strong></p>
</td>
</tr>
<tr id="row131501271984"><td class="cellrowborder" valign="top" width="32%"><p id="p215047389"><a name="p215047389"></a><a name="p215047389"></a>uuid</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4150171583"><a name="p4150171583"></a><a name="p4150171583"></a>知识片段唯一标识</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p415007785"><a name="p415007785"></a><a name="p415007785"></a>text</p>
</td>
</tr>
<tr id="row14150871880"><td class="cellrowborder" valign="top" width="32%"><p id="p4150170810"><a name="p4150170810"></a><a name="p4150170810"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p11501371683"><a name="p11501371683"></a><a name="p11501371683"></a>知识片段文本内容</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p111501971281"><a name="p111501971281"></a><a name="p111501971281"></a>text</p>
</td>
</tr>
<tr id="row01502715820"><td class="cellrowborder" valign="top" width="32%"><p id="p1815057785"><a name="p1815057785"></a><a name="p1815057785"></a>field</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p21501771180"><a name="p21501771180"></a><a name="p21501771180"></a>知识片段所属领域</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p131511672814"><a name="p131511672814"></a><a name="p131511672814"></a>text</p>
</td>
</tr>
<tr id="row11151873810"><td class="cellrowborder" valign="top" width="32%"><p id="p121516718816"><a name="p121516718816"></a><a name="p121516718816"></a>sub_field</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p111518718815"><a name="p111518718815"></a><a name="p111518718815"></a>子领域</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p10151771281"><a name="p10151771281"></a><a name="p10151771281"></a>text</p>
</td>
</tr>
<tr id="row21518716811"><td class="cellrowborder" valign="top" width="32%"><p id="p141515717819"><a name="p141515717819"></a><a name="p141515717819"></a>source</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4151071282"><a name="p4151071282"></a><a name="p4151071282"></a>文档来源</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p13151874816"><a name="p13151874816"></a><a name="p13151874816"></a>text</p>
</td>
</tr>
<tr id="row9151771189"><td class="cellrowborder" valign="top" width="32%"><p id="p31511676816"><a name="p31511676816"></a><a name="p31511676816"></a>version</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p41511671812"><a name="p41511671812"></a><a name="p41511671812"></a>知识片段对应版本信息</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12151474810"><a name="p12151474810"></a><a name="p12151474810"></a>text</p>
</td>
</tr>
<tr id="row91517720813"><td class="cellrowborder" valign="top" width="32%"><p id="p1715120711818"><a name="p1715120711818"></a><a name="p1715120711818"></a>product_format</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p16151276817"><a name="p16151276817"></a><a name="p16151276817"></a>产品形态</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p5151187685"><a name="p5151187685"></a><a name="p5151187685"></a>text</p>
</td>
</tr>
<tr id="row4151976812"><td class="cellrowborder" valign="top" width="32%"><p id="p81511071384"><a name="p81511071384"></a><a name="p81511071384"></a>doc_location</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p21511571285"><a name="p21511571285"></a><a name="p21511571285"></a>文档名</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p615197487"><a name="p615197487"></a><a name="p615197487"></a>text</p>
</td>
</tr>
<tr id="row16151187089"><td class="cellrowborder" valign="top" width="32%"><p id="p41511372810"><a name="p41511372810"></a><a name="p41511372810"></a>title</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14151273811"><a name="p14151273811"></a><a name="p14151273811"></a>来源文档中的具体信息</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p015114717812"><a name="p015114717812"></a><a name="p015114717812"></a>text</p>
</td>
</tr>
<tr id="row14151071781"><td class="cellrowborder" valign="top" width="32%"><p id="p181511674817"><a name="p181511674817"></a><a name="p181511674817"></a>visualize</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p141511471986"><a name="p141511471986"></a><a name="p141511471986"></a>格式化信息</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p2151177286"><a name="p2151177286"></a><a name="p2151177286"></a>text</p>
</td>
</tr>
<tr id="row4152471489"><td class="cellrowborder" valign="top" width="32%"><p id="p151522718817"><a name="p151522718817"></a><a name="p151522718817"></a>link</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p8152678820"><a name="p8152678820"></a><a name="p8152678820"></a>链接</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p131521720814"><a name="p131521720814"></a><a name="p131521720814"></a>text</p>
</td>
</tr>
<tr id="row815210710812"><td class="cellrowborder" valign="top" width="32%"><p id="p01529718816"><a name="p01529718816"></a><a name="p01529718816"></a>context</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p115211714817"><a name="p115211714817"></a><a name="p115211714817"></a>uuid列表</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p8152871482"><a name="p8152871482"></a><a name="p8152871482"></a>text</p>
</td>
</tr>
<tr id="row201522071888"><td class="cellrowborder" valign="top" width="32%"><p id="p4152471185"><a name="p4152471185"></a><a name="p4152471185"></a>keyword</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14152771780"><a name="p14152771780"></a><a name="p14152771780"></a>关键词</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p18152187486"><a name="p18152187486"></a><a name="p18152187486"></a>text</p>
</td>
</tr>
<tr id="row5152107183"><td class="cellrowborder" valign="top" width="32%"><p id="p111521471585"><a name="p111521471585"></a><a name="p111521471585"></a>confidence</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4152157888"><a name="p4152157888"></a><a name="p4152157888"></a>置信度</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p151529711811"><a name="p151529711811"></a><a name="p151529711811"></a>text</p>
</td>
</tr>
<tr id="row1015247689"><td class="cellrowborder" valign="top" width="32%"><p id="p61521876813"><a name="p61521876813"></a><a name="p61521876813"></a>ds_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p19152471082"><a name="p19152471082"></a><a name="p19152471082"></a>数据源id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1315216711816"><a name="p1315216711816"></a><a name="p1315216711816"></a>text</p>
</td>
</tr>
<tr id="row11152471184"><td class="cellrowborder" valign="top" width="32%"><p id="p101531171887"><a name="p101531171887"></a><a name="p101531171887"></a>prev_uuid</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p615357188"><a name="p615357188"></a><a name="p615357188"></a>上一个知识片段uuid</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p115347187"><a name="p115347187"></a><a name="p115347187"></a>text</p>
</td>
</tr>
<tr id="row01531273811"><td class="cellrowborder" valign="top" width="32%"><p id="p4153117483"><a name="p4153117483"></a><a name="p4153117483"></a>next_uuid</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p015347382"><a name="p015347382"></a><a name="p015347382"></a>下一个知识片段uuid</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p415337589"><a name="p415337589"></a><a name="p415337589"></a>text</p>
</td>
</tr>
<tr id="row121537712815"><td class="cellrowborder" valign="top" width="32%"><p id="p201531471781"><a name="p201531471781"></a><a name="p201531471781"></a>text_vector</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p12153872819"><a name="p12153872819"></a><a name="p12153872819"></a>知识向量</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p7153177881"><a name="p7153177881"></a><a name="p7153177881"></a>floatvector(1024)</p>
</td>
</tr>
</tbody>
</table>

**表 3**  知识库管理表（knowledge\_base）

<a name="table11783845783"></a>
<table><tbody><tr id="row1289718572810"><td class="cellrowborder" valign="top" width="32%"><p id="p13908155493"><a name="p13908155493"></a><a name="p13908155493"></a><strong id="b1042018429556"><a name="b1042018429556"></a><a name="b1042018429556"></a>属性</strong></p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p990855895"><a name="p990855895"></a><a name="p990855895"></a><strong id="b2042714295519"><a name="b2042714295519"></a><a name="b2042714295519"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p119082059917"><a name="p119082059917"></a><a name="p119082059917"></a><strong id="b34342424558"><a name="b34342424558"></a><a name="b34342424558"></a>类型</strong></p>
</td>
</tr>
<tr id="row081374516813"><td class="cellrowborder" valign="top" width="32%"><p id="p1081317451811"><a name="p1081317451811"></a><a name="p1081317451811"></a>kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14813154517811"><a name="p14813154517811"></a><a name="p14813154517811"></a>知识库id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p20668145615477"><a name="p20668145615477"></a><a name="p20668145615477"></a>integer</p>
</td>
</tr>
<tr id="row1081311454812"><td class="cellrowborder" valign="top" width="32%"><p id="p168139453819"><a name="p168139453819"></a><a name="p168139453819"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p188131445288"><a name="p188131445288"></a><a name="p188131445288"></a>知识库名称</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1881374518820"><a name="p1881374518820"></a><a name="p1881374518820"></a>text</p>
</td>
</tr>
<tr id="row1813114513819"><td class="cellrowborder" valign="top" width="32%"><p id="p13813134513812"><a name="p13813134513812"></a><a name="p13813134513812"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p28133459811"><a name="p28133459811"></a><a name="p28133459811"></a>知识库用户</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1881316457811"><a name="p1881316457811"></a><a name="p1881316457811"></a>text</p>
</td>
</tr>
<tr id="row12774199486"><td class="cellrowborder" valign="top" width="32%"><p id="p14771919174813"><a name="p14771919174813"></a><a name="p14771919174813"></a>kb_type</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p10771219174811"><a name="p10771219174811"></a><a name="p10771219174811"></a>知识库类型</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12776196489"><a name="p12776196489"></a><a name="p12776196489"></a>text</p>
</td>
</tr>
<tr id="row1881319451987"><td class="cellrowborder" valign="top" width="32%"><p id="p198134453815"><a name="p198134453815"></a><a name="p198134453815"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p4813134510811"><a name="p4813134510811"></a><a name="p4813134510811"></a>知识库描述</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p118131145481"><a name="p118131145481"></a><a name="p118131145481"></a>text</p>
</td>
</tr>
<tr id="row1481354513812"><td class="cellrowborder" valign="top" width="32%"><p id="p181364514819"><a name="p181364514819"></a><a name="p181364514819"></a>context</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p178131945081"><a name="p178131945081"></a><a name="p178131945081"></a>知识库参数</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p168133451986"><a name="p168133451986"></a><a name="p168133451986"></a>text</p>
</td>
</tr>
<tr id="row181320451287"><td class="cellrowborder" valign="top" width="32%"><p id="p1181344519810"><a name="p1181344519810"></a><a name="p1181344519810"></a>create_time</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p198141745380"><a name="p198141745380"></a><a name="p198141745380"></a>知识库创建时间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p2814845281"><a name="p2814845281"></a><a name="p2814845281"></a>text</p>
</td>
</tr>
<tr id="row178141545187"><td class="cellrowborder" valign="top" width="32%"><p id="p681418451782"><a name="p681418451782"></a><a name="p681418451782"></a>update_time</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p198146453810"><a name="p198146453810"></a><a name="p198146453810"></a>知识库更新时间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p208141545781"><a name="p208141545781"></a><a name="p208141545781"></a>text</p>
</td>
</tr>
</tbody>
</table>

**表 4**  数据源管理表（data\_source）

<a name="table9980038595"></a>
<table><tbody><tr id="row14273145413818"><td class="cellrowborder" valign="top" width="32%"><p id="p122711916393"><a name="p122711916393"></a><a name="p122711916393"></a><strong id="b4659145225517"><a name="b4659145225517"></a><a name="b4659145225517"></a>属性</strong></p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p0271121173914"><a name="p0271121173914"></a><a name="p0271121173914"></a><strong id="b106741652185512"><a name="b106741652185512"></a><a name="b106741652185512"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1727114114391"><a name="p1727114114391"></a><a name="p1727114114391"></a><strong id="b769175216555"><a name="b769175216555"></a><a name="b769175216555"></a>类型</strong></p>
</td>
</tr>
<tr id="row351839394"><td class="cellrowborder" valign="top" width="32%"><p id="p155839894"><a name="p155839894"></a><a name="p155839894"></a>ds_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p15516391699"><a name="p15516391699"></a><a name="p15516391699"></a>数据源id</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12563918915"><a name="p12563918915"></a><a name="p12563918915"></a>integer</p>
</td>
</tr>
<tr id="row3516391492"><td class="cellrowborder" valign="top" width="32%"><p id="p254391094"><a name="p254391094"></a><a name="p254391094"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p158391897"><a name="p158391897"></a><a name="p158391897"></a>数据源名称</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p1051839291"><a name="p1051839291"></a><a name="p1051839291"></a>text</p>
</td>
</tr>
<tr id="row95123920914"><td class="cellrowborder" valign="top" width="32%"><p id="p16514391920"><a name="p16514391920"></a><a name="p16514391920"></a>related_kb_id</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p2057391193"><a name="p2057391193"></a><a name="p2057391193"></a>数据源对应的知识库</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p0517391797"><a name="p0517391797"></a><a name="p0517391797"></a>integer</p>
</td>
</tr>
<tr id="row1451639394"><td class="cellrowborder" valign="top" width="32%"><p id="p13510391393"><a name="p13510391393"></a><a name="p13510391393"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p1859391192"><a name="p1859391192"></a><a name="p1859391192"></a>数据源描述</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p12583919914"><a name="p12583919914"></a><a name="p12583919914"></a>text</p>
</td>
</tr>
<tr id="row8518396914"><td class="cellrowborder" valign="top" width="32%"><p id="p1451539591"><a name="p1451539591"></a><a name="p1451539591"></a>file_name</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p75839996"><a name="p75839996"></a><a name="p75839996"></a>数据源对应文档名</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p5512390916"><a name="p5512390916"></a><a name="p5512390916"></a>text</p>
</td>
</tr>
<tr id="row658391499"><td class="cellrowborder" valign="top" width="32%"><p id="p15510391994"><a name="p15510391994"></a><a name="p15510391994"></a>create_time</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p95133911917"><a name="p95133911917"></a><a name="p95133911917"></a>数据源创建时间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p858391698"><a name="p858391698"></a><a name="p858391698"></a>text</p>
</td>
</tr>
<tr id="row1951339998"><td class="cellrowborder" valign="top" width="32%"><p id="p959391097"><a name="p959391097"></a><a name="p959391097"></a>update_time</p>
</td>
<td class="cellrowborder" valign="top" width="37.2%"><p id="p14512391391"><a name="p14512391391"></a><a name="p14512391391"></a>数据源更新时间</p>
</td>
<td class="cellrowborder" valign="top" width="30.8%"><p id="p14612391698"><a name="p14612391698"></a><a name="p14612391698"></a>text</p>
</td>
</tr>
</tbody>
</table>

以下为智能运维模块中相关表的详细结构设计。

1.  短期记忆表（tb\_interaction\_memory）记录智能运维模块工具交互时的对话内容；
2.  集群管理表（tb\_managed\_cluster）记录GaussMaster服务已支持诊断的集群信息。

**表 5**  短期记忆表（tb\_interaction\_memory）

<a name="table1662525017292"></a>
<table><thead align="left"><tr id="row16251506295"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p962575017292"><a name="p962575017292"></a><a name="p962575017292"></a>属性名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p19625155020294"><a name="p19625155020294"></a><a name="p19625155020294"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p5625450132913"><a name="p5625450132913"></a><a name="p5625450132913"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1262535013298"><a name="p1262535013298"></a><a name="p1262535013298"></a>nullable</p>
</th>
</tr>
</thead>
<tbody><tr id="row862655062917"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p14626115002910"><a name="p14626115002910"></a><a name="p14626115002910"></a>qa_record_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p33344716415"><a name="p33344716415"></a><a name="p33344716415"></a>主键，QA对ID</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1967411518417"><a name="p1967411518417"></a><a name="p1967411518417"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6418113421"><a name="p6418113421"></a><a name="p6418113421"></a>False</p>
</td>
</tr>
<tr id="row176261150122914"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p11626185092919"><a name="p11626185092919"></a><a name="p11626185092919"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p9341147144111"><a name="p9341147144111"></a><a name="p9341147144111"></a>用户ID</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p116741615114111"><a name="p116741615114111"></a><a name="p116741615114111"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p0411514429"><a name="p0411514429"></a><a name="p0411514429"></a>False</p>
</td>
</tr>
<tr id="row15626250202916"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p13626185002913"><a name="p13626185002913"></a><a name="p13626185002913"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17349477412"><a name="p17349477412"></a><a name="p17349477412"></a>会话ID</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1667471594110"><a name="p1667471594110"></a><a name="p1667471594110"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1141819426"><a name="p1141819426"></a><a name="p1141819426"></a>False</p>
</td>
</tr>
<tr id="row5626175042916"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p106261850162911"><a name="p106261850162911"></a><a name="p106261850162911"></a>question</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p19341471411"><a name="p19341471411"></a><a name="p19341471411"></a>用户问题</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p56741115204114"><a name="p56741115204114"></a><a name="p56741115204114"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p204131174220"><a name="p204131174220"></a><a name="p204131174220"></a>False</p>
</td>
</tr>
<tr id="row46261850112910"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p462614505298"><a name="p462614505298"></a><a name="p462614505298"></a>answer</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p11341147114116"><a name="p11341147114116"></a><a name="p11341147114116"></a>回复</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p56741815134111"><a name="p56741815134111"></a><a name="p56741815134111"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p16418194210"><a name="p16418194210"></a><a name="p16418194210"></a>True</p>
</td>
</tr>
<tr id="row1169923214317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1469912327318"><a name="p1469912327318"></a><a name="p1469912327318"></a>llm_name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1934134719415"><a name="p1934134719415"></a><a name="p1934134719415"></a>大语言模型名字</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p14674215144113"><a name="p14674215144113"></a><a name="p14674215144113"></a>String</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p5411918429"><a name="p5411918429"></a><a name="p5411918429"></a>True</p>
</td>
</tr>
<tr id="row6155163810311"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p6156838193118"><a name="p6156838193118"></a><a name="p6156838193118"></a>function_call</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1334194715419"><a name="p1334194715419"></a><a name="p1334194715419"></a>工具调用结果</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p5674171517419"><a name="p5674171517419"></a><a name="p5674171517419"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p11417104220"><a name="p11417104220"></a><a name="p11417104220"></a>True</p>
</td>
</tr>
<tr id="row159311042183118"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p179317423310"><a name="p179317423310"></a><a name="p179317423310"></a>created_at</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p173419478419"><a name="p173419478419"></a><a name="p173419478419"></a>对话发生时间</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p767491584119"><a name="p767491584119"></a><a name="p767491584119"></a>BigInteger</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1841131204211"><a name="p1841131204211"></a><a name="p1841131204211"></a>False</p>
</td>
</tr>
</tbody>
</table>

**表 6**  集群管理表（tb\_managed\_cluster）

<a name="table56641357133711"></a>
<table><thead align="left"><tr id="row1066445720375"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p12664105712374"><a name="p12664105712374"></a><a name="p12664105712374"></a>属性名</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p1966465720379"><a name="p1966465720379"></a><a name="p1966465720379"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p0664105716374"><a name="p0664105716374"></a><a name="p0664105716374"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p10664957103719"><a name="p10664957103719"></a><a name="p10664957103719"></a>nullbale</p>
</th>
</tr>
</thead>
<tbody><tr id="row866425753715"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p0664205720377"><a name="p0664205720377"></a><a name="p0664205720377"></a>cluster_id</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p46641657193717"><a name="p46641657193717"></a><a name="p46641657193717"></a>集群ID</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p10664165753713"><a name="p10664165753713"></a><a name="p10664165753713"></a>INT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p366412575378"><a name="p366412575378"></a><a name="p366412575378"></a>否</p>
</td>
</tr>
<tr id="row136641357103716"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p7664457193711"><a name="p7664457193711"></a><a name="p7664457193711"></a>cluster_name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3664185720371"><a name="p3664185720371"></a><a name="p3664185720371"></a>集群名称</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p4664257173710"><a name="p4664257173710"></a><a name="p4664257173710"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p33171214400"><a name="p33171214400"></a><a name="p33171214400"></a>否</p>
</td>
</tr>
<tr id="row12664257153717"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18664185715373"><a name="p18664185715373"></a><a name="p18664185715373"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1566417577372"><a name="p1566417577372"></a><a name="p1566417577372"></a>集群IP地址</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p11664185720372"><a name="p11664185720372"></a><a name="p11664185720372"></a>STRING</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p894481294016"><a name="p894481294016"></a><a name="p894481294016"></a>否</p>
</td>
</tr>
<tr id="row12665115753712"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p146654572377"><a name="p146654572377"></a><a name="p146654572377"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10665125718378"><a name="p10665125718378"></a><a name="p10665125718378"></a>集群端口号</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13665205783712"><a name="p13665205783712"></a><a name="p13665205783712"></a>INT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1800201313408"><a name="p1800201313408"></a><a name="p1800201313408"></a>否</p>
</td>
</tr>
<tr id="row18940155117386"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p11940195113818"><a name="p11940195113818"></a><a name="p11940195113818"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p494035117389"><a name="p494035117389"></a><a name="p494035117389"></a>用户名</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p294017513388"><a name="p294017513388"></a><a name="p294017513388"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p458213143406"><a name="p458213143406"></a><a name="p458213143406"></a>否</p>
</td>
</tr>
<tr id="row11572115613386"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p95721256103815"><a name="p95721256103815"></a><a name="p95721256103815"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3572456153815"><a name="p3572456153815"></a><a name="p3572456153815"></a>加密后的密码</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1857220560385"><a name="p1857220560385"></a><a name="p1857220560385"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p5362415154011"><a name="p5362415154011"></a><a name="p5362415154011"></a>否</p>
</td>
</tr>
</tbody>
</table>

