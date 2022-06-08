# Command Reference<a name="EN-US_TOPIC_0289899901"></a>

**Table  1**  Command-line parameters

<a name="en-us_topic_0283137279_table628178124515"></a>
<table><thead align="left"><tr id="en-us_topic_0283137279_row162968174512"><th class="cellrowborder" valign="top" width="17.18171817181718%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137279_p1129138144517"><a name="en-us_topic_0283137279_p1129138144517"></a><a name="en-us_topic_0283137279_p1129138144517"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="58.33583358335833%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137279_p2029181454"><a name="en-us_topic_0283137279_p2029181454"></a><a name="en-us_topic_0283137279_p2029181454"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="24.48244824482448%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137279_p6291382451"><a name="en-us_topic_0283137279_p6291382451"></a><a name="en-us_topic_0283137279_p6291382451"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137279_row162915844513"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p132968134510"><a name="en-us_topic_0283137279_p132968134510"></a><a name="en-us_topic_0283137279_p132968134510"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p11295814511"><a name="en-us_topic_0283137279_p11295814511"></a><a name="en-us_topic_0283137279_p11295814511"></a>Specifies the running mode of the tuning program.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137279_p02919804513"><a name="en-us_topic_0283137279_p02919804513"></a><a name="en-us_topic_0283137279_p02919804513"></a><strong id="b165012411541"><a name="b165012411541"></a><a name="b165012411541"></a>train</strong>, <strong id="b15631126145414"><a name="b15631126145414"></a><a name="b15631126145414"></a>tune</strong>, and <strong id="b13221628175418"><a name="b13221628175418"></a><a name="b13221628175418"></a>recommend</strong></p>
</td>
</tr>
<tr id="row1949293216101"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="p57047404102"><a name="p57047404102"></a><a name="p57047404102"></a>--tuner-config-file, -x</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="p19705240181019"><a name="p19705240181019"></a><a name="p19705240181019"></a>Path of the core parameter configuration file of X-Tuner. The default path is <strong id="b9559197185014"><a name="b9559197185014"></a><a name="b9559197185014"></a>xtuner.conf</strong> under the installation directory.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p192324411812"><a name="p192324411812"></a><a name="p192324411812"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row19291888452"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p16296874513"><a name="en-us_topic_0283137279_p16296874513"></a><a name="en-us_topic_0283137279_p16296874513"></a>--db-config-file, -f</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p13297818451"><a name="en-us_topic_0283137279_p13297818451"></a><a name="en-us_topic_0283137279_p13297818451"></a>Path of the connection information configuration file used by the optimization program to log in to the database host. If the database connection information is configured in this file, the following database connection information can be omitted.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p322194491819"><a name="p322194491819"></a><a name="p322194491819"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row18298818455"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p82912864518"><a name="en-us_topic_0283137279_p82912864518"></a><a name="en-us_topic_0283137279_p82912864518"></a>--db-name</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p22917874513"><a name="en-us_topic_0283137279_p22917874513"></a><a name="en-us_topic_0283137279_p22917874513"></a>Specifies the name of a database to be tuned.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p92194419180"><a name="p92194419180"></a><a name="p92194419180"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row9294819456"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p1829118104514"><a name="en-us_topic_0283137279_p1829118104514"></a><a name="en-us_topic_0283137279_p1829118104514"></a>--db-user</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p1429208164510"><a name="en-us_topic_0283137279_p1429208164510"></a><a name="en-us_topic_0283137279_p1429208164510"></a>Specifies the user account used to log in to the tuned database.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p420154491810"><a name="p420154491810"></a><a name="p420154491810"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row1020015014713"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p42004013477"><a name="en-us_topic_0283137279_p42004013477"></a><a name="en-us_topic_0283137279_p42004013477"></a>--port</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p1200160134715"><a name="en-us_topic_0283137279_p1200160134715"></a><a name="en-us_topic_0283137279_p1200160134715"></a>Specifies the database listening port.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p1419744151813"><a name="p1419744151813"></a><a name="p1419744151813"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row1836561411475"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p7365314124713"><a name="en-us_topic_0283137279_p7365314124713"></a><a name="en-us_topic_0283137279_p7365314124713"></a>--host</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p1236541444719"><a name="en-us_topic_0283137279_p1236541444719"></a><a name="en-us_topic_0283137279_p1236541444719"></a>Specifies the host IP address of the database instance.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p19191442186"><a name="p19191442186"></a><a name="p19191442186"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row1773402524719"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p13734825204719"><a name="en-us_topic_0283137279_p13734825204719"></a><a name="en-us_topic_0283137279_p13734825204719"></a>--host-user</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p3734112544712"><a name="en-us_topic_0283137279_p3734112544712"></a><a name="en-us_topic_0283137279_p3734112544712"></a>Specifies the username for logging in to the host where the database instance is located. The database O&amp;M tools, such as <strong id="b26351930155414"><a name="b26351930155414"></a><a name="b26351930155414"></a>gsql</strong> and <strong id="b0234353540"><a name="b0234353540"></a><a name="b0234353540"></a>gs_ctl</strong>, can be found in the environment variables of the username.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p618154471812"><a name="p618154471812"></a><a name="p618154471812"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row12794175884716"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p1279485811475"><a name="en-us_topic_0283137279_p1279485811475"></a><a name="en-us_topic_0283137279_p1279485811475"></a>--host-ssh-port</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p779418589472"><a name="en-us_topic_0283137279_p779418589472"></a><a name="en-us_topic_0283137279_p779418589472"></a>Specifies the SSH port number of the host where the database instance is located. This parameter is optional. The default value is <strong id="b8492154151410"><a name="b8492154151410"></a><a name="b8492154151410"></a>22</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p15171344161817"><a name="p15171344161817"></a><a name="p15171344161817"></a>N/A</p>
</td>
</tr>
<tr id="row124653514117"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="p16465651181116"><a name="p16465651181116"></a><a name="p16465651181116"></a>--help, -h</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="p13466651121115"><a name="p13466651121115"></a><a name="p13466651121115"></a>Returns the help information.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p10161044111814"><a name="p10161044111814"></a><a name="p10161044111814"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137279_row1068864085011"><td class="cellrowborder" valign="top" width="17.18171817181718%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137279_p1568814095019"><a name="en-us_topic_0283137279_p1568814095019"></a><a name="en-us_topic_0283137279_p1568814095019"></a>--version, -v</p>
</td>
<td class="cellrowborder" valign="top" width="58.33583358335833%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137279_p368834095019"><a name="en-us_topic_0283137279_p368834095019"></a><a name="en-us_topic_0283137279_p368834095019"></a>Returns the current tool version.</p>
</td>
<td class="cellrowborder" valign="top" width="24.48244824482448%" headers="mcps1.2.4.1.3 "><p id="p499654318184"><a name="p499654318184"></a><a name="p499654318184"></a>N/A</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Parameters in the configuration file

<a name="table10217184512711"></a>
<table><thead align="left"><tr id="row72171451773"><th class="cellrowborder" valign="top" width="23.52%" id="mcps1.2.4.1.1"><p id="p521714451473"><a name="p521714451473"></a><a name="p521714451473"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="63.51%" id="mcps1.2.4.1.2"><p id="p1121715452716"><a name="p1121715452716"></a><a name="p1121715452716"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="12.97%" id="mcps1.2.4.1.3"><p id="p74782020913"><a name="p74782020913"></a><a name="p74782020913"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row17217114518720"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p521764516711"><a name="p521764516711"></a><a name="p521764516711"></a>logfile</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1821711451578"><a name="p1821711451578"></a><a name="p1821711451578"></a>Path for storing generated logs.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p10478801895"><a name="p10478801895"></a><a name="p10478801895"></a>N/A</p>
</td>
</tr>
<tr id="row02171545078"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p112172452714"><a name="p112172452714"></a><a name="p112172452714"></a>output_tuning_result</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p721719458717"><a name="p721719458717"></a><a name="p721719458717"></a>(Optional) Specifies the path for saving the tuning result.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p15478709910"><a name="p15478709910"></a><a name="p15478709910"></a>N/A</p>
</td>
</tr>
<tr id="row52171645371"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p721716456713"><a name="p721716456713"></a><a name="p721716456713"></a>verbose</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p121811451717"><a name="p121811451717"></a><a name="p121811451717"></a>Whether to print details.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p174781301998"><a name="p174781301998"></a><a name="p174781301998"></a><strong id="b168002071417"><a name="b168002071417"></a><a name="b168002071417"></a>on</strong> and <strong id="b092610218149"><a name="b092610218149"></a><a name="b092610218149"></a>off</strong></p>
</td>
</tr>
<tr id="row4218184515710"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p52181645378"><a name="p52181645378"></a><a name="p52181645378"></a>recorder_file</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p18218174510717"><a name="p18218174510717"></a><a name="p18218174510717"></a>Path for storing logs that record intermediate tuning information.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p54781010914"><a name="p54781010914"></a><a name="p54781010914"></a>N/A</p>
</td>
</tr>
<tr id="row9148057131217"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p314915781211"><a name="p314915781211"></a><a name="p314915781211"></a>tune_strategy</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1714910572124"><a name="p1714910572124"></a><a name="p1714910572124"></a>Strategy used in tune mode.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p121491657181214"><a name="p121491657181214"></a><a name="p121491657181214"></a><strong id="b2753133718147"><a name="b2753133718147"></a><a name="b2753133718147"></a>rl</strong>, <strong id="b1697144010149"><a name="b1697144010149"></a><a name="b1697144010149"></a>gop</strong>, and <strong id="b1495864114149"><a name="b1495864114149"></a><a name="b1495864114149"></a>auto</strong></p>
</td>
</tr>
<tr id="row149593134"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p1349199181315"><a name="p1349199181315"></a><a name="p1349199181315"></a>drop_cache</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1549139151310"><a name="p1549139151310"></a><a name="p1549139151310"></a>Whether to perform drop cache in each iteration. Drop cache can make the benchmark score more stable. If this parameter is enabled, add the login system user to the <strong id="b5254264168"><a name="b5254264168"></a><a name="b5254264168"></a>/etc/sudoers</strong> list and grant the <strong id="b1777505361012"><a name="b1777505361012"></a><a name="b1777505361012"></a>NOPASSWD</strong> permission to the user. (You are advised to enable the <strong id="b154501457191011"><a name="b154501457191011"></a><a name="b154501457191011"></a>NOPASSWD</strong> permission temporarily and disable it after the tuning is complete.)</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p94911921317"><a name="p94911921317"></a><a name="p94911921317"></a><strong id="b1912113249145"><a name="b1912113249145"></a><a name="b1912113249145"></a>on</strong> and <strong id="b14121112431413"><a name="b14121112431413"></a><a name="b14121112431413"></a>off</strong></p>
</td>
</tr>
<tr id="row156307123139"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p136311512151316"><a name="p136311512151316"></a><a name="p136311512151316"></a>used_mem_penalty_term</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1963111251317"><a name="p1963111251317"></a><a name="p1963111251317"></a>Penalty coefficient of the total memory used by the database. This parameter is used to prevent performance deterioration caused by unlimited memory usage. The greater the value is, the greater the penalty is.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p9631141210134"><a name="p9631141210134"></a><a name="p9631141210134"></a>Recommended value: <strong id="b178890273213"><a name="b178890273213"></a><a name="b178890273213"></a>0</strong>–<strong id="b388982922115"><a name="b388982922115"></a><a name="b388982922115"></a>1</strong></p>
</td>
</tr>
<tr id="row151617169130"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p951641614135"><a name="p951641614135"></a><a name="p951641614135"></a>rl_algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p175161516201316"><a name="p175161516201316"></a><a name="p175161516201316"></a>Specifies the RL algorithm.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1051681671315"><a name="p1051681671315"></a><a name="p1051681671315"></a><strong id="b115601755191411"><a name="b115601755191411"></a><a name="b115601755191411"></a>ddpg</strong></p>
</td>
</tr>
<tr id="row1097152219137"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p7975222134"><a name="p7975222134"></a><a name="p7975222134"></a>rl_model_path</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p597132219139"><a name="p597132219139"></a><a name="p597132219139"></a>Path for saving or reading the RL model, including the save directory name and file name prefix. In train mode, this path is used to save the model. In tune mode, this path is used to read the model file.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p189702201314"><a name="p189702201314"></a><a name="p189702201314"></a>N/A</p>
</td>
</tr>
<tr id="row480932521319"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p1180972561313"><a name="p1180972561313"></a><a name="p1180972561313"></a>rl_steps</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p128098254133"><a name="p128098254133"></a><a name="p128098254133"></a>Number of training steps of the deep reinforcement learning algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p2179104412595"><a name="p2179104412595"></a><a name="p2179104412595"></a>N/A</p>
</td>
</tr>
<tr id="row356972910136"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p195692295139"><a name="p195692295139"></a><a name="p195692295139"></a>max_episode_steps</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p195694294137"><a name="p195694294137"></a><a name="p195694294137"></a>Maximum number of training steps in each episode.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p81783444594"><a name="p81783444594"></a><a name="p81783444594"></a>N/A</p>
</td>
</tr>
<tr id="row1696662320147"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p18966192311147"><a name="p18966192311147"></a><a name="p18966192311147"></a>test_episode</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p696614239145"><a name="p696614239145"></a><a name="p696614239145"></a>Number of episodes when the RL algorithm is used for optimization.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p20156154475918"><a name="p20156154475918"></a><a name="p20156154475918"></a>N/A</p>
</td>
</tr>
<tr id="row9780928191416"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p6780128131416"><a name="p6780128131416"></a><a name="p6780128131416"></a>gop_algorithm</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p18780112851416"><a name="p18780112851416"></a><a name="p18780112851416"></a>Global search algorithm.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p778092811146"><a name="p778092811146"></a><a name="p778092811146"></a><strong id="b4396141018196"><a name="b4396141018196"></a><a name="b4396141018196"></a>bayes</strong> and <strong id="b73473123193"><a name="b73473123193"></a><a name="b73473123193"></a>pso</strong></p>
</td>
</tr>
<tr id="row3302203141418"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p16302831201411"><a name="p16302831201411"></a><a name="p16302831201411"></a>max_iterations</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p173026314147"><a name="p173026314147"></a><a name="p173026314147"></a>Maximum number of iterations of the global search algorithm. (The value is not fixed. Multiple iterations may be performed based on the actual requirements.)</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p4302193112149"><a name="p4302193112149"></a><a name="p4302193112149"></a>N/A</p>
</td>
</tr>
<tr id="row141450346148"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p15146203421417"><a name="p15146203421417"></a><a name="p15146203421417"></a>particle_nums</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p15146133412146"><a name="p15146133412146"></a><a name="p15146133412146"></a>Number of particles when the PSO algorithm is used.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p10146173401410"><a name="p10146173401410"></a><a name="p10146173401410"></a>N/A</p>
</td>
</tr>
<tr id="row74191454141"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p1041914515145"><a name="p1041914515145"></a><a name="p1041914515145"></a>benchmark_script</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p025843115114"><a name="p025843115114"></a><a name="p025843115114"></a>Benchmark driver script. This parameter specifies the file with the same name in the benchmark path to be loaded. Typical benchmarks, such as TPC-C and TPC-H, are supported by default.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p19419194541419"><a name="p19419194541419"></a><a name="p19419194541419"></a><strong id="b1954232513194"><a name="b1954232513194"></a><a name="b1954232513194"></a>tpcc</strong>, <strong id="b1874682715194"><a name="b1874682715194"></a><a name="b1874682715194"></a>tpch</strong>, <strong id="b135175306195"><a name="b135175306195"></a><a name="b135175306195"></a>tpcds</strong>, <strong id="b83249326197"><a name="b83249326197"></a><a name="b83249326197"></a>sysbench</strong>, and others</p>
</td>
</tr>
<tr id="row11663143810146"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p16632038191412"><a name="p16632038191412"></a><a name="p16632038191412"></a>benchmark_path</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p164191545171414"><a name="p164191545171414"></a><a name="p164191545171414"></a>Path for saving the benchmark script. If this parameter is not configured, the configuration in the benchmark drive script is used.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1466314385148"><a name="p1466314385148"></a><a name="p1466314385148"></a>N/A</p>
</td>
</tr>
<tr id="row1316894301412"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p161680437143"><a name="p161680437143"></a><a name="p161680437143"></a>benchmark_cmd</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p1271811013536"><a name="p1271811013536"></a><a name="p1271811013536"></a>Command for starting the benchmark script. If this parameter is not configured, the configuration in the benchmark drive script is used.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1216810435142"><a name="p1216810435142"></a><a name="p1216810435142"></a>N/A</p>
</td>
</tr>
<tr id="row138695406353"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p678917148372"><a name="p678917148372"></a><a name="p678917148372"></a>benchmark_period</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p08691403355"><a name="p08691403355"></a><a name="p08691403355"></a>This parameter is valid only for <strong id="b1323124165410"><a name="b1323124165410"></a><a name="b1323124165410"></a>period benchmark</strong>. It indicates the test period of the entire benchmark. The unit is second.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p14869140153519"><a name="p14869140153519"></a><a name="p14869140153519"></a>N/A</p>
</td>
</tr>
<tr id="row17821134014142"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p18822640181413"><a name="p18822640181413"></a><a name="p18822640181413"></a>scenario</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p982210409141"><a name="p982210409141"></a><a name="p982210409141"></a>Type of the workload specified by the user.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1982218404141"><a name="p1982218404141"></a><a name="p1982218404141"></a><strong id="b117711058141914"><a name="b117711058141914"></a><a name="b117711058141914"></a>tp</strong>, <strong id="b1825391162013"><a name="b1825391162013"></a><a name="b1825391162013"></a>ap</strong>, and <strong id="b1174617372016"><a name="b1174617372016"></a><a name="b1174617372016"></a>htap</strong></p>
</td>
</tr>
<tr id="row12561193614148"><td class="cellrowborder" valign="top" width="23.52%" headers="mcps1.2.4.1.1 "><p id="p4561113617147"><a name="p4561113617147"></a><a name="p4561113617147"></a>tuning_list</p>
</td>
<td class="cellrowborder" valign="top" width="63.51%" headers="mcps1.2.4.1.2 "><p id="p756113365148"><a name="p756113365148"></a><a name="p756113365148"></a>List of parameters to be tuned. For details, see the <strong id="b43918312614"><a name="b43918312614"></a><a name="b43918312614"></a>share/knobs.json.template</strong> file.</p>
</td>
<td class="cellrowborder" valign="top" width="12.97%" headers="mcps1.2.4.1.3 "><p id="p1256193621413"><a name="p1256193621413"></a><a name="p1256193621413"></a>N/A</p>
</td>
</tr>
</tbody>
</table>

