# PG_STATISTIC_HISTORY

PG_STATISTIC_HISTORY用于存储统计信息历史数据版本记录，该表默认为只有管理员用户可访问，普通用户需要授权才可以访问。

**表 1** PG_STATISTIC_HISTORY字段

<table>
    <thead align="left">
    	<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9fa959080f464cda84d3e370c739001">
        	<th class="cellrowborder" valign="top" width="18.25%" id="mcps1.2.4.1.1">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e002">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e003"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e004"></a>名称
                </p>
	        </th>
            <th class="cellrowborder" valign="top" width="18.25%" id="mcps1.2.4.1.1">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e005">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e006"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e007"></a>类型
                </p>
	        </th>
            <th class="cellrowborder" valign="top" width="18.25%" id="mcps1.2.4.1.1">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e008">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e009"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e010"></a>描述
                </p>
	        </th>
        </tr>
    </thead>
    <tbody>
    	<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f011">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb012">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb013"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb014"></a>namespaceid
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb015">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb016"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb017"></a>oid
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb018">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb019"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb020"></a>所描述的对象所属schema的Oid。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f021">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb022">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb023"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb024"></a>starelid
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb025">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb026"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb027"></a>oid
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb028">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb029"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb030"></a>所描述的表的Oid。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f031">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb032">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb033"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb034"></a>partid
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb035">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb036"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb037"></a>oid
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb038">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb039"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb040"></a>所描述的分区的Oid。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f041">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb042">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb043"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb044"></a>statype
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb045">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb046"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb047"></a>char
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb048">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb049"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb050"></a>指定当前存储统计信息的类型。
                </p>
                <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f114368051"></a>
                <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f114368052"></a>
                <ul>
                    <li>t：指定当前存储的是表的统计信息。</li>
                    <li>p：指定当前存储的是分区的统计信息。</li>
                    <li>c：指定当前存储的是表字段统计信息。</li>
                </ul>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f053">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb054">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb055"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb056"></a>last_analyzetime
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb057">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb058"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb059"></a>timestamp with time zone
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb060">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb061"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb062"></a>指定对象上一次收集统计信息的时间，如果是第一次统计，则该值为NULL。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f063">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb064">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb065"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb066"></a>current_analyzetime
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb067">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb068"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb069"></a>timestamp with time zone
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb070">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb071"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb072"></a>指定对象当前收集统计信息的时间。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f063">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb064">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb065"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb066"></a>starelkind
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb067">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb068"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb069"></a>char
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb070">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb071"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb072"></a>所属对象的类型。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f073">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb074">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb075"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb076"></a>staattnum
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb077">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb078"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb079"></a>smallint
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb080">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb081"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb082"></a>所描述的字段在表中的编号，从1开始。
                </p>
            </td>
        </tr>
<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_rd3f705c2468a4c718249d404e7951cdc"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a53b9c37b7d484e23b0e67472ce1e55ea"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a53b9c37b7d484e23b0e67472ce1e55ea"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a53b9c37b7d484e23b0e67472ce1e55ea"></a>stainherit</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a2128c6cb0f8d427f838e4dfd5482497a"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a2128c6cb0f8d427f838e4dfd5482497a"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a2128c6cb0f8d427f838e4dfd5482497a"></a><span id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_text134211726162818"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_text134211726162818"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_text134211726162818"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5aeb7ef6af0b497bacfecde8a757c992"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5aeb7ef6af0b497bacfecde8a757c992"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5aeb7ef6af0b497bacfecde8a757c992"></a>是否统计有继承关系的对象。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r025ddb4ad4f446f4905a0df32f51ea68"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac13af8a0cde44a79aefc3967921c3e53"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac13af8a0cde44a79aefc3967921c3e53"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac13af8a0cde44a79aefc3967921c3e53"></a>stanullfrac</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ab8a7294170364af5801a06f663c0126d"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ab8a7294170364af5801a06f663c0126d"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ab8a7294170364af5801a06f663c0126d"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_afeda68a6a9b04e1ca4acb5752f35caa9"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_afeda68a6a9b04e1ca4acb5752f35caa9"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_afeda68a6a9b04e1ca4acb5752f35caa9"></a>该字段中为NULL的记录的比率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r177bec5ced3047caa402dee55e836ac1"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a290918dac5a44775b1e8b4d8a75c2205"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a290918dac5a44775b1e8b4d8a75c2205"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a290918dac5a44775b1e8b4d8a75c2205"></a>stawidth</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a79eb4132051a4623a29780b2f237f001"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a79eb4132051a4623a29780b2f237f001"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a79eb4132051a4623a29780b2f237f001"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ae28f9be04e1a4387a64cf9c9b8e12f17"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ae28f9be04e1a4387a64cf9c9b8e12f17"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ae28f9be04e1a4387a64cf9c9b8e12f17"></a>非NULL记录的平均存储宽度，以字节计。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r2191dc87ee0942c38c686cfd3c144562"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_aa4e05bbc143b45f4a2c8613271357054"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_aa4e05bbc143b45f4a2c8613271357054"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_aa4e05bbc143b45f4a2c8613271357054"></a>stadistinct</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a932556b873fd4bc9a0d32d296b4fce67"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a932556b873fd4bc9a0d32d296b4fce67"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a932556b873fd4bc9a0d32d296b4fce67"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a989b7d2a7cf742ddb9d5b5254032b768"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a989b7d2a7cf742ddb9d5b5254032b768"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a989b7d2a7cf742ddb9d5b5254032b768"></a>标识全局统计信息中数据库节点上字段里唯一的非NULL数据值的数目。</p>
<a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f11436835a"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f11436835a"></a><ul id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f11436835a"><li>一个大于零的数值是独立数值的实际数目。</li><li>一个小于零的数值是表中行数的分数的负数（比如，一个字段的数值平均出现概率为两次，则可以表示为stadistinct=-0.5）。</li><li>零值表示独立数值的数目未知。</li></ul>
</td>
</tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f083">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb084">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb085"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb086"></a>reltuples
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb087">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb088"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb089"></a>double precision
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb090">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb091"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb092"></a>表中行的数目，只是优化器使用的一个估计值。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f093">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb094">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb095"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb096"></a>relpages
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb097">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb098"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb099"></a>double precision
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb100">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb101"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb102"></a>以页（大小为BLCKSZ）为单位的此表在磁盘上的大小，它只是优化器用的一个近似值。
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f103">
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb104">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb105"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb106"></a>stalocktype
                </p>
            </td>
        	<td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb107">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb108"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb109"></a>char
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">
            	<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb110">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb111"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb112"></a>标志当前统计历史信息对象的锁状态。若当前对象未被锁，则未NULL。
                </p>
            </td>
        </tr>
<tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r98f7baf6506045218e022e589d7a5db4"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a4aa911f0d13843a9bf4388b5da4d54b1"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a4aa911f0d13843a9bf4388b5da4d54b1"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a4aa911f0d13843a9bf4388b5da4d54b1"></a>stakindN</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5eb6b5d448244e03838d3af894f7e9dd"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5eb6b5d448244e03838d3af894f7e9dd"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5eb6b5d448244e03838d3af894f7e9dd"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5365d5af63e3431d84dff029066364aa"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5365d5af63e3431d84dff029066364aa"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5365d5af63e3431d84dff029066364aa"></a>一个编码，表示这种类型的统计存储在pg_statistic行的第n个“槽位”。</p>
<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac5c496909b1f4d6c8ec50554f07fcb61"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac5c496909b1f4d6c8ec50554f07fcb61"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac5c496909b1f4d6c8ec50554f07fcb61"></a>n的取值范围：1～5</p>
</td>
</tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r1c1ecde97bb74a9fb200f6fad02028d3"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac443e0ee07cb448bb0f13de10253dd97"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac443e0ee07cb448bb0f13de10253dd97"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ac443e0ee07cb448bb0f13de10253dd97"></a>staopN</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a12def3ebb81a487b9d79d93e16bddf3e"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a12def3ebb81a487b9d79d93e16bddf3e"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a12def3ebb81a487b9d79d93e16bddf3e"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a44755e714cb24f8f8cc795359927664f"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a44755e714cb24f8f8cc795359927664f"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a44755e714cb24f8f8cc795359927664f"></a>一个用于生成这些存储在第n个“槽位”的统计信息的操作符。比如，一个柱面图槽位会显示&lt;操作符，该操作符定义了该数据的排序顺序。</p>
<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5c5f6a7e9d184ec68c46497cd81ea839"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5c5f6a7e9d184ec68c46497cd81ea839"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a5c5f6a7e9d184ec68c46497cd81ea839"></a>n的取值范围：1～5</p>
</td>
</tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_rd937c41f991747229f15692544661271"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a25708fbea4b84d939798fd39743a01cf"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a25708fbea4b84d939798fd39743a01cf"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a25708fbea4b84d939798fd39743a01cf"></a>stanumbersN</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a196b52aae5654409acac8732ce22e96f"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a196b52aae5654409acac8732ce22e96f"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a196b52aae5654409acac8732ce22e96f"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ab079b76c7d724408ba5b2f954d1c266e"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ab079b76c7d724408ba5b2f954d1c266e"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_ab079b76c7d724408ba5b2f954d1c266e"></a>第n个“槽位”的相关类型的数值类型统计，如果该槽位和数值类型没有关系，则就是NULL。</p>
<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a41bece846b124658a81180c495395221"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a41bece846b124658a81180c495395221"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a41bece846b124658a81180c495395221"></a>n的取值范围：1～5</p>
</td>
</tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_rb5da6f8a0b0e403e9f204de5f2ef0c07"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a082e8c0a15734dd6a41c80161b65b997"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a082e8c0a15734dd6a41c80161b65b997"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a082e8c0a15734dd6a41c80161b65b997"></a>stavaluesN</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_aac870a7d0e0d4f519dbe86df30d92577"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_aac870a7d0e0d4f519dbe86df30d92577"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_aac870a7d0e0d4f519dbe86df30d92577"></a>anyarray</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a94f2d0ee326349f5ada8c338724e159b"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a94f2d0ee326349f5ada8c338724e159b"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a94f2d0ee326349f5ada8c338724e159b"></a>第n个“槽位”类型的字段数据值，如果该槽位类型不存储任何数据值，则就是NULL。每个数组的元素值实际上都是指定字段的数据类型，因此，除了把这些字段的类型定义成anyarray之外，没有更好地办法。</p>
<p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a8985e770dcd34a5f8c9196a22699cd23"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a8985e770dcd34a5f8c9196a22699cd23"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a8985e770dcd34a5f8c9196a22699cd23"></a>n的取值范围：1～5</p>
</td>
</tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r3d935c3952c14f108a6b6633db980426"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p580562319402"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p580562319402"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p580562319402"></a>stadndistinct</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p49343089402"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p49343089402"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p49343089402"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p641346579402"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p641346579402"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_zh-cn_topic_0058965942_p641346579402"></a>标识dn1上字段里唯一的非NULL数据值的数目。</p>
<a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u6dd847d6dedc4807af9353955f5e8354"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u6dd847d6dedc4807af9353955f5e8354"></a><ul id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u6dd847d6dedc4807af9353955f5e8354"><li>一个大于零的数值是独立数值的实际数目。</li><li>一个小于零的数值是表中行数的分数的负数（比如，一个字段的数值平均出现概率为两次，则可以表示为stadistinct=-0.5）。</li><li>零值表示独立数值的数目未知。</li></ul>
</td>
</tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_row1590511431613"><td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p2905181401614"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p2905181401614"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p2905181401614"></a>staextinfo</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p3905111491616"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p3905111491616"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p3905111491616"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="66.9%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p169058144161"><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p169058144161"></a><a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_p169058144161"></a>统计信息的扩展信息。预留字段。</p>
</td>
</tr>
    </tbody>
</table>

 **须知：** 
PG_STATISTIC_HISTORY系统表存储了统计对象的一些敏感信息，如高频值MCV。系统管理员和授权后的其他用户可以通过访问PG_STATISTIC_HISTORY系统表查询到统计对象的这些敏感信息。