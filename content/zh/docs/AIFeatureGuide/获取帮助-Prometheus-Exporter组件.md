# 获取帮助<a name="ZH-CN_TOPIC_0000002294471309"></a>

用户可以通过“--help”命令获取Exporter组件启动或停止等操作的帮助信息，例如：

```
gs_dbmind component opengauss_exporter --help
gs_dbmind component reprocessing_exporter --help
gs_dbmind component cmd_exporter --help
```

自研Exporter组件状态查询和修复的RESTful API列表如下：

## opengauss-exporter<a name="zh-cn_topic_0000001714948941_section52454119275"></a>

**表 1**  opengauss-exporter组件RESTful API列表

<a name="zh-cn_topic_0000001714948941_table983817182819"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948941_row68381573288"><th class="cellrowborder" valign="top" id="mcps1.2.7.1.1"><p id="zh-cn_topic_0000001714948941_p783817722820"><a name="zh-cn_topic_0000001714948941_p783817722820"></a><a name="zh-cn_topic_0000001714948941_p783817722820"></a>API</p>
</th>
<th class="cellrowborder" colspan="2" valign="top" id="mcps1.2.7.1.2"><p id="zh-cn_topic_0000001714948941_p134241259123710"><a name="zh-cn_topic_0000001714948941_p134241259123710"></a><a name="zh-cn_topic_0000001714948941_p134241259123710"></a>入参</p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.2.7.1.3"><p id="zh-cn_topic_0000001714948941_p883811714289"><a name="zh-cn_topic_0000001714948941_p883811714289"></a><a name="zh-cn_topic_0000001714948941_p883811714289"></a>参数介绍</p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.2.7.1.4"><p id="zh-cn_topic_0000001714948941_p16838270286"><a name="zh-cn_topic_0000001714948941_p16838270286"></a><a name="zh-cn_topic_0000001714948941_p16838270286"></a>请求方法</p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.2.7.1.5"><p id="zh-cn_topic_0000001714948941_p19838157102820"><a name="zh-cn_topic_0000001714948941_p19838157102820"></a><a name="zh-cn_topic_0000001714948941_p19838157102820"></a>功能描述与预期返回结果</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948941_row178385722813"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p88387714283"><a name="zh-cn_topic_0000001714948941_p88387714283"></a><a name="zh-cn_topic_0000001714948941_p88387714283"></a>/</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p542415923716"><a name="zh-cn_topic_0000001714948941_p542415923716"></a><a name="zh-cn_topic_0000001714948941_p542415923716"></a>无</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001714948941_p983816722813"><a name="zh-cn_topic_0000001714948941_p983816722813"></a><a name="zh-cn_topic_0000001714948941_p983816722813"></a>无</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001714948941_p28381977283"><a name="zh-cn_topic_0000001714948941_p28381977283"></a><a name="zh-cn_topic_0000001714948941_p28381977283"></a>GET，POST</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001714948941_p108381722815"><a name="zh-cn_topic_0000001714948941_p108381722815"></a><a name="zh-cn_topic_0000001714948941_p108381722815"></a>exporter基本信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1983947172819"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p2083947182811"><a name="zh-cn_topic_0000001714948941_p2083947182811"></a><a name="zh-cn_topic_0000001714948941_p2083947182811"></a>/info</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p7424125919378"><a name="zh-cn_topic_0000001714948941_p7424125919378"></a><a name="zh-cn_topic_0000001714948941_p7424125919378"></a>无</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001714948941_p38391174288"><a name="zh-cn_topic_0000001714948941_p38391174288"></a><a name="zh-cn_topic_0000001714948941_p38391174288"></a>无</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001714948941_p2083916713281"><a name="zh-cn_topic_0000001714948941_p2083916713281"></a><a name="zh-cn_topic_0000001714948941_p2083916713281"></a>GET，POST</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001714948941_p583914717280"><a name="zh-cn_topic_0000001714948941_p583914717280"></a><a name="zh-cn_topic_0000001714948941_p583914717280"></a>采集的实例信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row4839379281"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p1683977142817"><a name="zh-cn_topic_0000001714948941_p1683977142817"></a><a name="zh-cn_topic_0000001714948941_p1683977142817"></a>/metrics</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p15424145903713"><a name="zh-cn_topic_0000001714948941_p15424145903713"></a><a name="zh-cn_topic_0000001714948941_p15424145903713"></a>无</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001714948941_p783913712818"><a name="zh-cn_topic_0000001714948941_p783913712818"></a><a name="zh-cn_topic_0000001714948941_p783913712818"></a>无</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001714948941_p383918712285"><a name="zh-cn_topic_0000001714948941_p383918712285"></a><a name="zh-cn_topic_0000001714948941_p383918712285"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001714948941_p2839187192814"><a name="zh-cn_topic_0000001714948941_p2839187192814"></a><a name="zh-cn_topic_0000001714948941_p2839187192814"></a>按Prometheus协议封装的单次采集指标数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row15839157142818"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p0839187192810"><a name="zh-cn_topic_0000001714948941_p0839187192810"></a><a name="zh-cn_topic_0000001714948941_p0839187192810"></a>/v1/api/check-status</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p14244597373"><a name="zh-cn_topic_0000001714948941_p14244597373"></a><a name="zh-cn_topic_0000001714948941_p14244597373"></a>cmd</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001714948941_p3839207112818"><a name="zh-cn_topic_0000001714948941_p3839207112818"></a><a name="zh-cn_topic_0000001714948941_p3839207112818"></a>组件启动命令，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001714948941_p583937172815"><a name="zh-cn_topic_0000001714948941_p583937172815"></a><a name="zh-cn_topic_0000001714948941_p583937172815"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001714948941_p19839147112816"><a name="zh-cn_topic_0000001714948941_p19839147112816"></a><a name="zh-cn_topic_0000001714948941_p19839147112816"></a>获取exporter组件的状态信息并返回状态详情。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1883987132819"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p10839675283"><a name="zh-cn_topic_0000001714948941_p10839675283"></a><a name="zh-cn_topic_0000001714948941_p10839675283"></a>/v1/api/repair</p>
</td>
<td class="cellrowborder" colspan="2" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p44241759153716"><a name="zh-cn_topic_0000001714948941_p44241759153716"></a><a name="zh-cn_topic_0000001714948941_p44241759153716"></a>cmd</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001714948941_p88391977280"><a name="zh-cn_topic_0000001714948941_p88391977280"></a><a name="zh-cn_topic_0000001714948941_p88391977280"></a>组件启动命令，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001714948941_p38391471281"><a name="zh-cn_topic_0000001714948941_p38391471281"></a><a name="zh-cn_topic_0000001714948941_p38391471281"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001714948941_p20839679288"><a name="zh-cn_topic_0000001714948941_p20839679288"></a><a name="zh-cn_topic_0000001714948941_p20839679288"></a>修复exporter组件并返回修复结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1591424014439"><td class="cellrowborder" rowspan="7" valign="top" width="21.61216121612161%" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p0914154011438"><a name="zh-cn_topic_0000001714948941_p0914154011438"></a><a name="zh-cn_topic_0000001714948941_p0914154011438"></a>/rpc</p>
<p id="zh-cn_topic_0000001714948941_p736484817614"><a name="zh-cn_topic_0000001714948941_p736484817614"></a><a name="zh-cn_topic_0000001714948941_p736484817614"></a></p>
<p id="zh-cn_topic_0000001714948941_p1236517481862"><a name="zh-cn_topic_0000001714948941_p1236517481862"></a><a name="zh-cn_topic_0000001714948941_p1236517481862"></a></p>
<p id="zh-cn_topic_0000001714948941_p153651848061"><a name="zh-cn_topic_0000001714948941_p153651848061"></a><a name="zh-cn_topic_0000001714948941_p153651848061"></a></p>
<p id="zh-cn_topic_0000001714948941_p73654481264"><a name="zh-cn_topic_0000001714948941_p73654481264"></a><a name="zh-cn_topic_0000001714948941_p73654481264"></a></p>
<p id="zh-cn_topic_0000001714948941_p6365144810611"><a name="zh-cn_topic_0000001714948941_p6365144810611"></a><a name="zh-cn_topic_0000001714948941_p6365144810611"></a></p>
<p id="zh-cn_topic_0000001714948941_p173662481062"><a name="zh-cn_topic_0000001714948941_p173662481062"></a><a name="zh-cn_topic_0000001714948941_p173662481062"></a></p>
</td>
<td class="cellrowborder" rowspan="7" valign="top" width="5.96059605960596%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p18245174124014"><a name="zh-cn_topic_0000001714948941_p18245174124014"></a><a name="zh-cn_topic_0000001714948941_p18245174124014"></a>json结构体</p>
</td>
<td class="cellrowborder" valign="top" width="6.86068606860686%" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p18914114084310"><a name="zh-cn_topic_0000001714948941_p18914114084310"></a><a name="zh-cn_topic_0000001714948941_p18914114084310"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="24.02240224022402%" headers="mcps1.2.7.1.3 "><p id="zh-cn_topic_0000001714948941_p15915144014439"><a name="zh-cn_topic_0000001714948941_p15915144014439"></a><a name="zh-cn_topic_0000001714948941_p15915144014439"></a>DBMind Agent用户名，String，必选。</p>
</td>
<td class="cellrowborder" rowspan="7" valign="top" width="12.31123112311231%" headers="mcps1.2.7.1.4 "><p id="zh-cn_topic_0000001714948941_p20707172720121"><a name="zh-cn_topic_0000001714948941_p20707172720121"></a><a name="zh-cn_topic_0000001714948941_p20707172720121"></a>POST</p>
</td>
<td class="cellrowborder" rowspan="7" valign="top" width="29.232923292329232%" headers="mcps1.2.7.1.5 "><p id="zh-cn_topic_0000001714948941_p1982183661216"><a name="zh-cn_topic_0000001714948941_p1982183661216"></a><a name="zh-cn_topic_0000001714948941_p1982183661216"></a>DBMind主服务Agent挂载接口，用于主服务连接业务实例远程执行SQL，私有接口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1036416481467"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p536417489610"><a name="zh-cn_topic_0000001714948941_p536417489610"></a><a name="zh-cn_topic_0000001714948941_p536417489610"></a>pwd</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p436411484618"><a name="zh-cn_topic_0000001714948941_p436411484618"></a><a name="zh-cn_topic_0000001714948941_p436411484618"></a>DBMind Agent密码，Sting，必选。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row4364148864"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p1436512481761"><a name="zh-cn_topic_0000001714948941_p1436512481761"></a><a name="zh-cn_topic_0000001714948941_p1436512481761"></a>funcname</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p136510481864"><a name="zh-cn_topic_0000001714948941_p136510481864"></a><a name="zh-cn_topic_0000001714948941_p136510481864"></a>DBMind RPC功能选项，String，必选。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row83658481163"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p73659481612"><a name="zh-cn_topic_0000001714948941_p73659481612"></a><a name="zh-cn_topic_0000001714948941_p73659481612"></a>args</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p15365204817610"><a name="zh-cn_topic_0000001714948941_p15365204817610"></a><a name="zh-cn_topic_0000001714948941_p15365204817610"></a>DBMind RPC功能参数，list，必选。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row336512481963"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p83659484611"><a name="zh-cn_topic_0000001714948941_p83659484611"></a><a name="zh-cn_topic_0000001714948941_p83659484611"></a>kwargs</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p9365144818610"><a name="zh-cn_topic_0000001714948941_p9365144818610"></a><a name="zh-cn_topic_0000001714948941_p9365144818610"></a>DBMind RPC功能kv参数，dict，必选。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row11365448965"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p17365114813616"><a name="zh-cn_topic_0000001714948941_p17365114813616"></a><a name="zh-cn_topic_0000001714948941_p17365114813616"></a>_jsonable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p936513481269"><a name="zh-cn_topic_0000001714948941_p936513481269"></a><a name="zh-cn_topic_0000001714948941_p936513481269"></a>接口json结构体私有标识，bool，必选。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row03654481615"><td class="cellrowborder" valign="top" headers="mcps1.2.7.1.1 "><p id="zh-cn_topic_0000001714948941_p19366154816613"><a name="zh-cn_topic_0000001714948941_p19366154816613"></a><a name="zh-cn_topic_0000001714948941_p19366154816613"></a>_dtype</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.7.1.2 "><p id="zh-cn_topic_0000001714948941_p123668481617"><a name="zh-cn_topic_0000001714948941_p123668481617"></a><a name="zh-cn_topic_0000001714948941_p123668481617"></a>接口数据类型私有标识，tuple，必选。</p>
</td>
</tr>
</tbody>
</table>

## cmd-exporter<a name="zh-cn_topic_0000001714948941_section15643642810"></a>

**表 2**  cmd-exporter组件RESTful API列表

<a name="zh-cn_topic_0000001714948941_table54594719283"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948941_row446104717280"><th class="cellrowborder" valign="top" width="21.36%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0000001714948941_p54634720283"><a name="zh-cn_topic_0000001714948941_p54634720283"></a><a name="zh-cn_topic_0000001714948941_p54634720283"></a>API</p>
</th>
<th class="cellrowborder" valign="top" width="13.05%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0000001714948941_p20461947132819"><a name="zh-cn_topic_0000001714948941_p20461947132819"></a><a name="zh-cn_topic_0000001714948941_p20461947132819"></a>入参</p>
</th>
<th class="cellrowborder" valign="top" width="20.5%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0000001714948941_p1046124714287"><a name="zh-cn_topic_0000001714948941_p1046124714287"></a><a name="zh-cn_topic_0000001714948941_p1046124714287"></a>参数介绍</p>
</th>
<th class="cellrowborder" valign="top" width="13.61%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0000001714948941_p1346134732814"><a name="zh-cn_topic_0000001714948941_p1346134732814"></a><a name="zh-cn_topic_0000001714948941_p1346134732814"></a>请求方法</p>
</th>
<th class="cellrowborder" valign="top" width="31.480000000000004%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0000001714948941_p14461847182814"><a name="zh-cn_topic_0000001714948941_p14461847182814"></a><a name="zh-cn_topic_0000001714948941_p14461847182814"></a>功能描述与预期返回结果</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948941_row1046194702814"><td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p114634716286"><a name="zh-cn_topic_0000001714948941_p114634716286"></a><a name="zh-cn_topic_0000001714948941_p114634716286"></a>/</p>
</td>
<td class="cellrowborder" valign="top" width="13.05%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p346144792818"><a name="zh-cn_topic_0000001714948941_p346144792818"></a><a name="zh-cn_topic_0000001714948941_p346144792818"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="20.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p846547142811"><a name="zh-cn_topic_0000001714948941_p846547142811"></a><a name="zh-cn_topic_0000001714948941_p846547142811"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="13.61%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p1946184722820"><a name="zh-cn_topic_0000001714948941_p1946184722820"></a><a name="zh-cn_topic_0000001714948941_p1946184722820"></a>GET，POST</p>
</td>
<td class="cellrowborder" valign="top" width="31.480000000000004%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p1460478288"><a name="zh-cn_topic_0000001714948941_p1460478288"></a><a name="zh-cn_topic_0000001714948941_p1460478288"></a>exporter基本信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1546194713285"><td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p646184712815"><a name="zh-cn_topic_0000001714948941_p646184712815"></a><a name="zh-cn_topic_0000001714948941_p646184712815"></a>/metrics</p>
</td>
<td class="cellrowborder" valign="top" width="13.05%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p1246144710286"><a name="zh-cn_topic_0000001714948941_p1246144710286"></a><a name="zh-cn_topic_0000001714948941_p1246144710286"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="20.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p846154717288"><a name="zh-cn_topic_0000001714948941_p846154717288"></a><a name="zh-cn_topic_0000001714948941_p846154717288"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="13.61%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p44644732810"><a name="zh-cn_topic_0000001714948941_p44644732810"></a><a name="zh-cn_topic_0000001714948941_p44644732810"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" width="31.480000000000004%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p204694713289"><a name="zh-cn_topic_0000001714948941_p204694713289"></a><a name="zh-cn_topic_0000001714948941_p204694713289"></a>按Prometheus协议封装的单次采集指标数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row15469472281"><td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p34654732815"><a name="zh-cn_topic_0000001714948941_p34654732815"></a><a name="zh-cn_topic_0000001714948941_p34654732815"></a>/v1/api/check-status</p>
</td>
<td class="cellrowborder" valign="top" width="13.05%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p1146447202814"><a name="zh-cn_topic_0000001714948941_p1146447202814"></a><a name="zh-cn_topic_0000001714948941_p1146447202814"></a>cmd</p>
</td>
<td class="cellrowborder" valign="top" width="20.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p124624762813"><a name="zh-cn_topic_0000001714948941_p124624762813"></a><a name="zh-cn_topic_0000001714948941_p124624762813"></a>组件启动命令，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="13.61%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p4461547132819"><a name="zh-cn_topic_0000001714948941_p4461547132819"></a><a name="zh-cn_topic_0000001714948941_p4461547132819"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" width="31.480000000000004%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p3477471287"><a name="zh-cn_topic_0000001714948941_p3477471287"></a><a name="zh-cn_topic_0000001714948941_p3477471287"></a>获取exporter组件的状态信息并返回状态详情。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1234452733312"><td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p234472717331"><a name="zh-cn_topic_0000001714948941_p234472717331"></a><a name="zh-cn_topic_0000001714948941_p234472717331"></a>/v1/api/repair</p>
</td>
<td class="cellrowborder" valign="top" width="13.05%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p83441527143315"><a name="zh-cn_topic_0000001714948941_p83441527143315"></a><a name="zh-cn_topic_0000001714948941_p83441527143315"></a>cmd</p>
</td>
<td class="cellrowborder" valign="top" width="20.5%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p11344122743311"><a name="zh-cn_topic_0000001714948941_p11344122743311"></a><a name="zh-cn_topic_0000001714948941_p11344122743311"></a>组件启动命令，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="13.61%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p1434562793310"><a name="zh-cn_topic_0000001714948941_p1434562793310"></a><a name="zh-cn_topic_0000001714948941_p1434562793310"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" width="31.480000000000004%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p10345192753318"><a name="zh-cn_topic_0000001714948941_p10345192753318"></a><a name="zh-cn_topic_0000001714948941_p10345192753318"></a>修复exporter组件并返回修复结果。</p>
</td>
</tr>
</tbody>
</table>

## reprocessing-exporter<a name="zh-cn_topic_0000001714948941_section1836616268297"></a>

**表 3**  reprocessing-exporter组件RESTful API列表

<a name="zh-cn_topic_0000001714948941_table85984366296"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001714948941_row16598136202918"><th class="cellrowborder" valign="top" width="21.29%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0000001714948941_p145981436182910"><a name="zh-cn_topic_0000001714948941_p145981436182910"></a><a name="zh-cn_topic_0000001714948941_p145981436182910"></a>API</p>
</th>
<th class="cellrowborder" valign="top" width="13.23%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0000001714948941_p18598143692914"><a name="zh-cn_topic_0000001714948941_p18598143692914"></a><a name="zh-cn_topic_0000001714948941_p18598143692914"></a>入参</p>
</th>
<th class="cellrowborder" valign="top" width="20.27%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0000001714948941_p175987362294"><a name="zh-cn_topic_0000001714948941_p175987362294"></a><a name="zh-cn_topic_0000001714948941_p175987362294"></a>参数介绍</p>
</th>
<th class="cellrowborder" valign="top" width="13.8%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0000001714948941_p3598143616294"><a name="zh-cn_topic_0000001714948941_p3598143616294"></a><a name="zh-cn_topic_0000001714948941_p3598143616294"></a>请求方法</p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0000001714948941_p1359873611297"><a name="zh-cn_topic_0000001714948941_p1359873611297"></a><a name="zh-cn_topic_0000001714948941_p1359873611297"></a>功能描述与预期返回结果</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001714948941_row5599636192913"><td class="cellrowborder" valign="top" width="21.29%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p15599936142916"><a name="zh-cn_topic_0000001714948941_p15599936142916"></a><a name="zh-cn_topic_0000001714948941_p15599936142916"></a>/</p>
</td>
<td class="cellrowborder" valign="top" width="13.23%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p6599163672912"><a name="zh-cn_topic_0000001714948941_p6599163672912"></a><a name="zh-cn_topic_0000001714948941_p6599163672912"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="20.27%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p135993367299"><a name="zh-cn_topic_0000001714948941_p135993367299"></a><a name="zh-cn_topic_0000001714948941_p135993367299"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="13.8%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p85994360296"><a name="zh-cn_topic_0000001714948941_p85994360296"></a><a name="zh-cn_topic_0000001714948941_p85994360296"></a>GET，POST</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p115991636132915"><a name="zh-cn_topic_0000001714948941_p115991636132915"></a><a name="zh-cn_topic_0000001714948941_p115991636132915"></a>exporter基本信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row659933692914"><td class="cellrowborder" valign="top" width="21.29%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p15599153617293"><a name="zh-cn_topic_0000001714948941_p15599153617293"></a><a name="zh-cn_topic_0000001714948941_p15599153617293"></a>/metrics</p>
</td>
<td class="cellrowborder" valign="top" width="13.23%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p15599153692919"><a name="zh-cn_topic_0000001714948941_p15599153692919"></a><a name="zh-cn_topic_0000001714948941_p15599153692919"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="20.27%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p959920364296"><a name="zh-cn_topic_0000001714948941_p959920364296"></a><a name="zh-cn_topic_0000001714948941_p959920364296"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="13.8%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p2599123662913"><a name="zh-cn_topic_0000001714948941_p2599123662913"></a><a name="zh-cn_topic_0000001714948941_p2599123662913"></a>GET</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p15991236152916"><a name="zh-cn_topic_0000001714948941_p15991236152916"></a><a name="zh-cn_topic_0000001714948941_p15991236152916"></a>按Prometheus协议封装的单次采集指标数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row1759953632916"><td class="cellrowborder" valign="top" width="21.29%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p359983610299"><a name="zh-cn_topic_0000001714948941_p359983610299"></a><a name="zh-cn_topic_0000001714948941_p359983610299"></a>/v1/api/check-status</p>
</td>
<td class="cellrowborder" valign="top" width="13.23%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p659920368294"><a name="zh-cn_topic_0000001714948941_p659920368294"></a><a name="zh-cn_topic_0000001714948941_p659920368294"></a>cmd</p>
</td>
<td class="cellrowborder" valign="top" width="20.27%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p3599836142919"><a name="zh-cn_topic_0000001714948941_p3599836142919"></a><a name="zh-cn_topic_0000001714948941_p3599836142919"></a>组件启动命令，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="13.8%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p1759933612911"><a name="zh-cn_topic_0000001714948941_p1759933612911"></a><a name="zh-cn_topic_0000001714948941_p1759933612911"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p4599133662916"><a name="zh-cn_topic_0000001714948941_p4599133662916"></a><a name="zh-cn_topic_0000001714948941_p4599133662916"></a>获取exporter组件的状态信息并返回状态详情。</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001714948941_row17003366334"><td class="cellrowborder" valign="top" width="21.29%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0000001714948941_p5700143620333"><a name="zh-cn_topic_0000001714948941_p5700143620333"></a><a name="zh-cn_topic_0000001714948941_p5700143620333"></a>/v1/api/repair</p>
</td>
<td class="cellrowborder" valign="top" width="13.23%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0000001714948941_p170010369338"><a name="zh-cn_topic_0000001714948941_p170010369338"></a><a name="zh-cn_topic_0000001714948941_p170010369338"></a>cmd</p>
</td>
<td class="cellrowborder" valign="top" width="20.27%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0000001714948941_p47011736153314"><a name="zh-cn_topic_0000001714948941_p47011736153314"></a><a name="zh-cn_topic_0000001714948941_p47011736153314"></a>组件启动命令，String，必选。</p>
</td>
<td class="cellrowborder" valign="top" width="13.8%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0000001714948941_p270193673318"><a name="zh-cn_topic_0000001714948941_p270193673318"></a><a name="zh-cn_topic_0000001714948941_p270193673318"></a>POST</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0000001714948941_p470119362331"><a name="zh-cn_topic_0000001714948941_p470119362331"></a><a name="zh-cn_topic_0000001714948941_p470119362331"></a>修复exporter组件并返回修复结果。</p>
</td>
</tr>
</tbody>
</table>

