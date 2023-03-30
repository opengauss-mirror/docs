# 命令参考<a name="ZH-CN_TOPIC_0289899901"></a>

**表 1**  命令行参数

<a name="zh-cn_topic_0283137279_table628178124515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137279_row162968174512"><th class="cellrowborder" valign="top" width="17.18171817181718%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137279_p1129138144517"><a name="zh-cn_topic_0283137279_p1129138144517"></a><a name="zh-cn_topic_0283137279_p1129138144517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="58.33583358335833%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137279_p2029181454"><a name="zh-cn_topic_0283137279_p2029181454"></a><a name="zh-cn_topic_0283137279_p2029181454"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="24.48244824482448%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137279_p6291382451"><a name="zh-cn_topic_0283137279_p6291382451"></a><a name="zh-cn_topic_0283137279_p6291382451"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137279_row162915844513"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p132968134510"><a name="zh-cn_topic_0283137279_p132968134510"></a><a name="zh-cn_topic_0283137279_p132968134510"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p11295814511"><a name="zh-cn_topic_0283137279_p11295814511"></a><a name="zh-cn_topic_0283137279_p11295814511"></a>指定调优程序运行的模式</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137279_p02919804513"><a name="zh-cn_topic_0283137279_p02919804513"></a><a name="zh-cn_topic_0283137279_p02919804513"></a>train，tune，recommend</p>
</td>
</tr>
<tr id="row1949293216101"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="p57047404102"><a name="p57047404102"></a><a name="p57047404102"></a>--tuner-config-file, -x</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="p19705240181019"><a name="p19705240181019"></a><a name="p19705240181019"></a>X-Tuner的核心参数配置文件路径，默认路径为安装目录下的xtuner.conf</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p192324411812"><a name="p192324411812"></a><a name="p192324411812"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row19291888452"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p16296874513"><a name="zh-cn_topic_0283137279_p16296874513"></a><a name="zh-cn_topic_0283137279_p16296874513"></a>--db-config-file, -f</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p13297818451"><a name="zh-cn_topic_0283137279_p13297818451"></a><a name="zh-cn_topic_0283137279_p13297818451"></a>调优程序的用于登录到数据库宿主机上的连接信息配置文件路径，若通过该文件配置数据库连接信息，则下述数据库连接信息可省略</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p322194491819"><a name="p322194491819"></a><a name="p322194491819"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row18298818455"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p82912864518"><a name="zh-cn_topic_0283137279_p82912864518"></a><a name="zh-cn_topic_0283137279_p82912864518"></a>--db-name</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p22917874513"><a name="zh-cn_topic_0283137279_p22917874513"></a><a name="zh-cn_topic_0283137279_p22917874513"></a>指定需要调优的数据库名</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p92194419180"><a name="p92194419180"></a><a name="p92194419180"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row9294819456"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p1829118104514"><a name="zh-cn_topic_0283137279_p1829118104514"></a><a name="zh-cn_topic_0283137279_p1829118104514"></a>--db-user</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p1429208164510"><a name="zh-cn_topic_0283137279_p1429208164510"></a><a name="zh-cn_topic_0283137279_p1429208164510"></a>指定以何用户身份登陆到调优的数据库上</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p420154491810"><a name="p420154491810"></a><a name="p420154491810"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row1020015014713"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p42004013477"><a name="zh-cn_topic_0283137279_p42004013477"></a><a name="zh-cn_topic_0283137279_p42004013477"></a>--port, --db-port</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p1200160134715"><a name="zh-cn_topic_0283137279_p1200160134715"></a><a name="zh-cn_topic_0283137279_p1200160134715"></a>数据库的侦听端口</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p1419744151813"><a name="p1419744151813"></a><a name="p1419744151813"></a><span id="ph785313343287"><a name="ph785313343287"></a><a name="ph785313343287"></a>0-65535</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row1836561411475"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p7365314124713"><a name="zh-cn_topic_0283137279_p7365314124713"></a><a name="zh-cn_topic_0283137279_p7365314124713"></a>--host, --db-host</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p1236541444719"><a name="zh-cn_topic_0283137279_p1236541444719"></a><a name="zh-cn_topic_0283137279_p1236541444719"></a>数据库实例的宿主机IP</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p19191442186"><a name="p19191442186"></a><a name="p19191442186"></a><span id="ph322942122814"><a name="ph322942122814"></a><a name="ph322942122814"></a>0-65535</span></p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row1773402524719"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p13734825204719"><a name="zh-cn_topic_0283137279_p13734825204719"></a><a name="zh-cn_topic_0283137279_p13734825204719"></a>--host-user</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p3734112544712"><a name="zh-cn_topic_0283137279_p3734112544712"></a><a name="zh-cn_topic_0283137279_p3734112544712"></a>指定以何用户身份登陆到数据库实例的宿主机上，要求改用户名的环境变量中可以找到gsql、gs_ctl等数据库运维工具。</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p618154471812"><a name="p618154471812"></a><a name="p618154471812"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row12794175884716"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p1279485811475"><a name="zh-cn_topic_0283137279_p1279485811475"></a><a name="zh-cn_topic_0283137279_p1279485811475"></a>--host-ssh-port</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p779418589472"><a name="zh-cn_topic_0283137279_p779418589472"></a><a name="zh-cn_topic_0283137279_p779418589472"></a>数据库实例所在宿主机的SSH端口号，可选，默认为22</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p15171344161817"><a name="p15171344161817"></a><a name="p15171344161817"></a><span id="ph1364124912283"><a name="ph1364124912283"></a><a name="ph1364124912283"></a>0-65535</span></p>
</td>
</tr>
<tr id="row124653514117"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="p16465651181116"><a name="p16465651181116"></a><a name="p16465651181116"></a>--help, -h</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="p13466651121115"><a name="p13466651121115"></a><a name="p13466651121115"></a>返回帮助信息</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p10161044111814"><a name="p10161044111814"></a><a name="p10161044111814"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137279_row1068864085011"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137279_p1568814095019"><a name="zh-cn_topic_0283137279_p1568814095019"></a><a name="zh-cn_topic_0283137279_p1568814095019"></a>--version, -v</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137279_p368834095019"><a name="zh-cn_topic_0283137279_p368834095019"></a><a name="zh-cn_topic_0283137279_p368834095019"></a>返回当前工具版本号</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p499654318184"><a name="p499654318184"></a><a name="p499654318184"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 2**  配置文件中的参数详解

<a name="table10217184512711"></a>
<table><thead align="left"><tr id="row72171451773"><th class="cellrowborder" valign="top" width="23.52%" id="mcps1.2.4.1.1"><p id="p521714451473"><a name="p521714451473"></a><a name="p521714451473"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="63.51%" id="mcps1.2.4.1.2"><p id="p1121715452716"><a name="p1121715452716"></a><a name="p1121715452716"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="12.97%" id="mcps1.2.4.1.3"><p id="p74782020913"><a name="p74782020913"></a><a name="p74782020913"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row17217114518720"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p521764516711"><a name="p521764516711"></a><a name="p521764516711"></a>logfile</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1821711451578"><a name="p1821711451578"></a><a name="p1821711451578"></a>生成的日志存放路径</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p10478801895"><a name="p10478801895"></a><a name="p10478801895"></a>-</p>
</td>
</tr>
<tr id="row02171545078"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p112172452714"><a name="p112172452714"></a><a name="p112172452714"></a>output_tuning_result</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p721719458717"><a name="p721719458717"></a><a name="p721719458717"></a>可选，调优结果的保存路径</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p15478709910"><a name="p15478709910"></a><a name="p15478709910"></a>-</p>
</td>
</tr>
<tr id="row52171645371"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p721716456713"><a name="p721716456713"></a><a name="p721716456713"></a>verbose</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p121811451717"><a name="p121811451717"></a><a name="p121811451717"></a>是否打印详情</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p174781301998"><a name="p174781301998"></a><a name="p174781301998"></a>on, off</p>
</td>
</tr>
<tr id="row4218184515710"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p52181645378"><a name="p52181645378"></a><a name="p52181645378"></a>recorder_file</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p18218174510717"><a name="p18218174510717"></a><a name="p18218174510717"></a>调优中间信息的记录日志存放路径</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p54781010914"><a name="p54781010914"></a><a name="p54781010914"></a>-</p>
</td>
</tr>
<tr id="row9148057131217"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p314915781211"><a name="p314915781211"></a><a name="p314915781211"></a>tune_strategy</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1714910572124"><a name="p1714910572124"></a><a name="p1714910572124"></a>调优模式下采取哪种策略</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p121491657181214"><a name="p121491657181214"></a><a name="p121491657181214"></a>rl, gop, auto</p>
</td>
</tr>
<tr id="row149593134"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p1349199181315"><a name="p1349199181315"></a><a name="p1349199181315"></a>drop_cache</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1549139151310"><a name="p1549139151310"></a><a name="p1549139151310"></a>是否在每一个迭代轮次中进行drop cache，drop cache可以使benchmark跑分结果更加稳定。若启动该参数，则需要将登录的系统用户加入到 /etc/sudoers 列表中，同时为其增加 <strong id="b1833495420343"><a name="b1833495420343"></a><a name="b1833495420343"></a>NOPASSWD </strong>权限（由于该权限可能过高，建议临时启用该权限，调优结束后关闭）。</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p94911921317"><a name="p94911921317"></a><a name="p94911921317"></a>on, off</p>
</td>
</tr>
<tr id="row156307123139"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p136311512151316"><a name="p136311512151316"></a><a name="p136311512151316"></a>used_mem_penalty_term</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1963111251317"><a name="p1963111251317"></a><a name="p1963111251317"></a>数据库使用总内存的惩罚系数，用于防止通过无限量占用内存而换取的性能表现。该数值越大，惩罚力度越大。</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p9631141210134"><a name="p9631141210134"></a><a name="p9631141210134"></a>建议0 ~ 1</p>
</td>
</tr>
<tr id="row151617169130"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p951641614135"><a name="p951641614135"></a><a name="p951641614135"></a>rl_algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p175161516201316"><a name="p175161516201316"></a><a name="p175161516201316"></a>选择何种RL算法</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1051681671315"><a name="p1051681671315"></a><a name="p1051681671315"></a>ddpg</p>
</td>
</tr>
<tr id="row1097152219137"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p7975222134"><a name="p7975222134"></a><a name="p7975222134"></a>rl_model_path</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p597132219139"><a name="p597132219139"></a><a name="p597132219139"></a>RL模型保存或读取路径，包括保存目录名与文件名前缀。在train 模式下该路径用于保存模型，在tune模式下则用于读取模型文件</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p189702201314"><a name="p189702201314"></a><a name="p189702201314"></a>-</p>
</td>
</tr>
<tr id="row480932521319"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p1180972561313"><a name="p1180972561313"></a><a name="p1180972561313"></a>rl_steps</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p128098254133"><a name="p128098254133"></a><a name="p128098254133"></a>深度强化学习算法迭代的步数</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p2179104412595"><a name="p2179104412595"></a><a name="p2179104412595"></a>-</p>
</td>
</tr>
<tr id="row356972910136"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p195692295139"><a name="p195692295139"></a><a name="p195692295139"></a>max_episode_steps</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p195694294137"><a name="p195694294137"></a><a name="p195694294137"></a>每个回合的最大迭代步数</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p81783444594"><a name="p81783444594"></a><a name="p81783444594"></a>-</p>
</td>
</tr>
<tr id="row1696662320147"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p18966192311147"><a name="p18966192311147"></a><a name="p18966192311147"></a>test_episode</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p696614239145"><a name="p696614239145"></a><a name="p696614239145"></a>使用RL算法进行调优模式的回合数</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p20156154475918"><a name="p20156154475918"></a><a name="p20156154475918"></a>-</p>
</td>
</tr>
<tr id="row9780928191416"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p6780128131416"><a name="p6780128131416"></a><a name="p6780128131416"></a>gop_algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p18780112851416"><a name="p18780112851416"></a><a name="p18780112851416"></a>采取何种全局搜索算法</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p778092811146"><a name="p778092811146"></a><a name="p778092811146"></a>bayes, pso</p>
</td>
</tr>
<tr id="row3302203141418"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p16302831201411"><a name="p16302831201411"></a><a name="p16302831201411"></a>max_iterations</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p173026314147"><a name="p173026314147"></a><a name="p173026314147"></a>全局搜索算法的最大迭代轮次（并非确定数值，可能会根据实际情况多跑若干轮）</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p4302193112149"><a name="p4302193112149"></a><a name="p4302193112149"></a>-</p>
</td>
</tr>
<tr id="row141450346148"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p15146203421417"><a name="p15146203421417"></a><a name="p15146203421417"></a>particle_nums</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p15146133412146"><a name="p15146133412146"></a><a name="p15146133412146"></a>PSO算法下的粒子数量</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p10146173401410"><a name="p10146173401410"></a><a name="p10146173401410"></a>-</p>
</td>
</tr>
<tr id="row74191454141"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p1041914515145"><a name="p1041914515145"></a><a name="p1041914515145"></a>benchmark_script</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p025843115114"><a name="p025843115114"></a><a name="p025843115114"></a>使用何种benchmark驱动脚本，该选项指定加载benchmark路径下同名文件，默认支持TPC-C、TPC-H等典型benchmark</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p19419194541419"><a name="p19419194541419"></a><a name="p19419194541419"></a>tpcc, tpch, tpcds, sysbench ...</p>
</td>
</tr>
<tr id="row11663143810146"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p16632038191412"><a name="p16632038191412"></a><a name="p16632038191412"></a>benchmark_path</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p164191545171414"><a name="p164191545171414"></a><a name="p164191545171414"></a>benchmark 脚本的存储路径，若没有配置该选项，则使用benchmark驱动脚本中的配置</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1466314385148"><a name="p1466314385148"></a><a name="p1466314385148"></a>-</p>
</td>
</tr>
<tr id="row1316894301412"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p161680437143"><a name="p161680437143"></a><a name="p161680437143"></a>benchmark_cmd</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1271811013536"><a name="p1271811013536"></a><a name="p1271811013536"></a>启动benchmark 脚本的命令，若没有配置该选项，则使用benchmark驱动脚本中的配置</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1216810435142"><a name="p1216810435142"></a><a name="p1216810435142"></a>-</p>
</td>
</tr>
<tr id="row138695406353"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p678917148372"><a name="p678917148372"></a><a name="p678917148372"></a>benchmark_period</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p08691403355"><a name="p08691403355"></a><a name="p08691403355"></a>仅对 period benchmark有效，表明整个benchmark的测试周期是多少，单位是秒</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p14869140153519"><a name="p14869140153519"></a><a name="p14869140153519"></a>-</p>
</td>
</tr>
<tr id="row17821134014142"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p18822640181413"><a name="p18822640181413"></a><a name="p18822640181413"></a>scenario</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p982210409141"><a name="p982210409141"></a><a name="p982210409141"></a>用户指定的当前workload所属的类型</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1982218404141"><a name="p1982218404141"></a><a name="p1982218404141"></a>tp, ap, htap</p>
</td>
</tr>
<tr id="row12561193614148"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p4561113617147"><a name="p4561113617147"></a><a name="p4561113617147"></a>tuning_list</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p756113365148"><a name="p756113365148"></a><a name="p756113365148"></a>准备调优的参数列表文件，可参考 share/knobs.json.template 文件</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1256193621413"><a name="p1256193621413"></a><a name="p1256193621413"></a>-</p>
</td>
</tr>
</tbody>
</table>

