# type Row<a name="ZH-CN_TOPIC_0000001232888392"></a>

type Row如下所示。

<a name="table8520111013810"></a>
<table><tbody><tr id="row753661020387"><td class="cellrowborder" valign="top" width="34.56%"><p id="p953661016385"><a name="p953661016385"></a><a name="p953661016385"></a><strong id="b11536141010386"><a name="b11536141010386"></a><a name="b11536141010386"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="45.08%"><p id="p1653620105386"><a name="p1653620105386"></a><a name="p1653620105386"></a><strong id="b11536181073813"><a name="b11536181073813"></a><a name="b11536181073813"></a>描述</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p165367101387"><a name="p165367101387"></a><a name="p165367101387"></a><strong id="b6536810133810"><a name="b6536810133810"></a><a name="b6536810133810"></a>返回值</strong></p>
</td>
</tr>
<tr id="row35369107381"><td class="cellrowborder" valign="top" width="34.56%"><p id="p2536141019387"><a name="p2536141019387"></a><a name="p2536141019387"></a>(r *Row)Scan(dest ...interface{})</p>
</td>
<td class="cellrowborder" valign="top" width="45.08%"><p id="p9536171033814"><a name="p9536171033814"></a><a name="p9536171033814"></a>将当前数据行中的列复制到dest指向的值中。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p105361310113817"><a name="p105361310113817"></a><a name="p105361310113817"></a>error</p>
</td>
</tr>
<tr id="row135368104388"><td class="cellrowborder" valign="top" width="34.56%"><p id="p1653612104389"><a name="p1653612104389"></a><a name="p1653612104389"></a>(r *Row)Err()</p>
</td>
<td class="cellrowborder" valign="top" width="45.08%"><p id="p65361410183810"><a name="p65361410183810"></a><a name="p65361410183810"></a>返回执行过程中出现的错误。</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%"><p id="p165361710143816"><a name="p165361710143816"></a><a name="p165361710143816"></a>error</p>
</td>
</tr>
</tbody>
</table>

## 参数说明<a name="section87684510172"></a>

<a name="table8522111016388"></a>
<table><tbody><tr id="row2536121093815"><td class="cellrowborder" valign="top" width="22.2%"><p id="p95361610183820"><a name="p95361610183820"></a><a name="p95361610183820"></a><strong id="b1253651020389"><a name="b1253651020389"></a><a name="b1253651020389"></a>参数</strong></p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p053681014383"><a name="p053681014383"></a><a name="p053681014383"></a><strong id="b17536201010388"><a name="b17536201010388"></a><a name="b17536201010388"></a>参数说明</strong></p>
</td>
</tr>
<tr id="row25361210153816"><td class="cellrowborder" valign="top" width="22.2%"><p id="p1153621020385"><a name="p1153621020385"></a><a name="p1153621020385"></a>dest</p>
</td>
<td class="cellrowborder" valign="top" width="77.8%"><p id="p10536510173811"><a name="p10536510173811"></a><a name="p10536510173811"></a>查询列需要被复制到该参数指向的值</p>
</td>
</tr>
</tbody>
</table>

