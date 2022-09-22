# gsql概述<a name="ZH-CN_TOPIC_0294748922"></a>

## 基本功能<a name="zh-cn_topic_0059778819_s8ce37a15763045549311205e19f06a45"></a>

-   **连接数据库：**默认只支持从服务器本机连接，如果需要连接到远端的数据库，必须在服务端进行配置。详细操作请参见《开发者指南》中“数据库使用 \> 连接数据库 \> 使用gsql连接 \> 远程连接数据库”章节。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >gsql创建连接时，会有5分钟超时时间。如果在这个时间内，数据库未正确地接受连接并对身份进行认证，gsql将超时退出。
    >针对此问题，可以参考[常见问题处理](常见问题处理.md)。

-   **执行SQL语句：**支持交互式地键入并执行SQL语句，也可以执行一个文件中指定的SQL语句。
-   **执行元命令：**元命令可以帮助管理员查看数据库对象的信息、查询缓存区信息、格式化SQL输出结果，以及连接到新的数据库等。元命令的详细说明请参见[元命令参考](元命令参考.md)。

## 高级特性<a name="zh-cn_topic_0059778819_s999ec23443d04c7ab199c53189744b58"></a>

gsql的高级特性如[表1](#zh-cn_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d)所示。

**表 1**  gsql高级特性

<a name="zh-cn_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778819_r4b73260a43df46f6ba18d2326f63d3e8"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"><a name="zh-cn_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a><a name="zh-cn_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a>特性名称</p>
</th>
<th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"><a name="zh-cn_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a><a name="zh-cn_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778819_re148610b2ba14890a4a2cbe1fb9f9cde"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"><a name="zh-cn_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a><a name="zh-cn_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a>变量</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"><a name="zh-cn_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a><a name="zh-cn_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a>gsql提供类似于Linux的shell命令的变量特性，可以使用gsql的元命令\set设置一个变量，格式如下：</p>
<pre class="screen" id="zh-cn_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"><a name="zh-cn_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><a name="zh-cn_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><strong id="zh-cn_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"><a name="zh-cn_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a><a name="zh-cn_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a>\set</strong> <em id="zh-cn_topic_0059778819_a423967f56510409080e158d60d2b4c24"><a name="zh-cn_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a><a name="zh-cn_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a>varname value</em></pre>
<p id="zh-cn_topic_0059778819_aee7fac646c524c4db69194069d742fcf"><a name="zh-cn_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a><a name="zh-cn_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a>删除由\set命令设置的变量请使用如下方式：</p>
<pre class="screen" id="zh-cn_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"><a name="zh-cn_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><a name="zh-cn_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><strong id="zh-cn_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"><a name="zh-cn_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a><a name="zh-cn_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a>\unset</strong> <em id="zh-cn_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"><a name="zh-cn_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a><a name="zh-cn_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a>varname</em></pre>
<div class="note" id="zh-cn_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"><a name="zh-cn_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><a name="zh-cn_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><a name="zh-cn_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><ul id="zh-cn_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"><li>变量只是简单的名称/值对，这里的值可以是任意长度。</li><li>变量名称必须由字母（包括非拉丁字母）、数字和下划线组成，且对大小写敏感。</li><li>如果使用\set varname的格式（不带第二个参数），则只是设置这个变量而没有给变量赋值。</li><li>可以使用不带参数的\set来显示所有变量的值。</li></ul>
</div></div>
<p id="zh-cn_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"><a name="zh-cn_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a><a name="zh-cn_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a>变量的示例和详细说明请参见<a href="#zh-cn_topic_0059778819_zh-cn_topic_0058968129_li39134862">变量</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r457b7479b8204694b14e69200bb8eb7b"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"><a name="zh-cn_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a><a name="zh-cn_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a>SQL代换</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"><a name="zh-cn_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a><a name="zh-cn_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a>利用gsql的变量特性，可以将常用的SQL语句设置为变量，以简化操作。</p>
<p id="zh-cn_topic_0059778819_a38c61443f662466996d0824b10ea12fc"><a name="zh-cn_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a><a name="zh-cn_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a>SQL代换的示例和详细说明请参见<a href="#zh-cn_topic_0059778819_zh-cn_topic_0058968129_li56915888">SQL代换</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rebf3bc2093a1493db2962cb59d3ebe5e"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"><a name="zh-cn_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a><a name="zh-cn_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a>自定义提示符</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"><a name="zh-cn_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a><a name="zh-cn_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a>gsql使用的提示符支持用户自定义。可以通过修改gsql预留的三个变量PROMPT1、PROMPT2、PROMPT3来改变提示符。</p>
<p id="zh-cn_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"><a name="zh-cn_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a><a name="zh-cn_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a>这三个变量的值可以用户自定义，也可以使用gsql预定义的值。详细请参见<a href="#zh-cn_topic_0059778819_zh-cn_topic_0058968129_li65414495">提示符</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r5efe8924bbc449bd97710897768e9a03"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"><a name="zh-cn_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a><a name="zh-cn_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a>客户端操作历史记录</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a363dd0cef39947078205d99444faf743"><a name="zh-cn_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><a name="zh-cn_topic_0059778819_a363dd0cef39947078205d99444faf743"></a>gsql支持客户端操作历史记录，当客户端连接时指定“-r”参数，此功能被打开。可以通过\set设置记录历史的条数，例如，\set HISTSIZE 50，将记录历史的条数设置为50，\set HISTSIZE 0，不记录历史。</p>
<div class="note" id="zh-cn_topic_0059778819_nb67c60d357644d98802305a02d312bbe"><a name="zh-cn_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><a name="zh-cn_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><a name="zh-cn_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><ul id="zh-cn_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"><li>客户端操作历史记录条数默认设置为32条，最多支持记录500条。当客户端交互式输入包含中文字符时，只支持UTF-8 的编码环境。</li><li>出于安全考虑，将包含PASSWORD、IDENTIFIED敏感词的记录识别为敏感信息，不会记录到历史信息中，即不能通过上下翻回显。</li></ul>
</div></div>
</td>
</tr>
</tbody>
</table>

-   <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_li39134862"></a>变量

    可以使用gsql元命令\\set设置一个变量。例如把变量foo的值设置为bar：

    ```
    openGauss=# \set foo bar
    ```

    要引用变量的值，在变量前面加冒号。例如查看变量的值：

    ```
    openGauss=# \echo :foo
    bar
    ```

    这种变量的引用方法适用于规则的SQL语句和元命令。

    gsql预定义了一些特殊变量，同时也规划了变量的取值。为了保证和后续版本最大限度地兼容，请避免以其他目的使用这些变量。所有特殊变量见[表2](#zh-cn_topic_0059778819_zh-cn_topic_0058968129_table45814285)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   所有特殊变量都由大写字母、数字和下划线组成。
    >-   要查看特殊变量的默认值，请使用元命令\\echo :_varname_（例如\\echo :DBNAME）。

    **表 2**  特殊变量设置

    <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_table45814285"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row63384495"><th class="cellrowborder" valign="top" width="15%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"><a name="zh-cn_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a><a name="zh-cn_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a>变量</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.000000000000004%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p56526422"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p56526422"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p56526422"></a>设置方法</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p8552256"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p8552256"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p8552256"></a>变量说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row33504320"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"><a name="zh-cn_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a><a name="zh-cn_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a>DBNAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"><a name="zh-cn_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a><a name="zh-cn_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a>\set DBNAME <em id="zh-cn_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"><a name="zh-cn_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a><a name="zh-cn_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a>dbname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15409553"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15409553"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15409553"></a>当前连接的数据库的名称。每次连接数据库时都会被重新设置。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row52760526"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"><a name="zh-cn_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a><a name="zh-cn_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a>ECHO</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_se7962925861447dca766f73dd7e013c2"><a name="zh-cn_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a><a name="zh-cn_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a>\set ECHO all | queries</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23658891"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23658891"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23658891"><li>如果设置为all，只显示查询信息。等效于使用gsql连接数据库时指定-a参数。</li><li>如果设置为queries，显示命令行和查询信息。等效于使用gsql连接数据库时指定-e参数。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row64235341"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"><a name="zh-cn_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a><a name="zh-cn_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a>ECHO_HIDDEN</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"><a name="zh-cn_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a><a name="zh-cn_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a>\set ECHO_HIDDEN  on | off | noexec</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_ad216beecced64389b3555e3cd9425bee"><a name="zh-cn_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a><a name="zh-cn_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a>当使用元命令查询数据库信息（例如\dg）时，此变量的取值决定了查询的行为：</p>
    <a name="zh-cn_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><a name="zh-cn_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><ul id="zh-cn_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"><li>设置为on，先显示元命令实际调用的查询语句，然后显示查询结果。等效于使用gsql连接数据库时指定-E参数。</li><li>设置为off，则只显示查询结果。</li><li>设置为noexec，则只显示查询信息，不执行查询操作。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row57132578"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"><a name="zh-cn_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a><a name="zh-cn_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a>ENCODING</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_s8c894db8f271491693385930cc9fa35c"><a name="zh-cn_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a><a name="zh-cn_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a>\set ENCODING   <em id="zh-cn_topic_0059778819_ad2956e867d26443388b2826907aa13cb"><a name="zh-cn_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a><a name="zh-cn_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a>encoding</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p44867126"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p44867126"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p44867126"></a>当前客户端的字符集编码。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row40218171"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"><a name="zh-cn_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a><a name="zh-cn_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a>FETCH_COUNT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"><a name="zh-cn_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a><a name="zh-cn_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a>\set FETCH_COUNT <em id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_i537772514207"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_i537772514207"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_i537772514207"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><a name="zh-cn_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><ul id="zh-cn_topic_0059778819_u3d111cd6129641588ea85c80411d663a"><li>如果该变量的值为大于0的整数，假设为n，则执行SELECT语句时每次从结果集中取n行到缓存并显示到屏幕。</li><li>如果不设置此变量，或设置的值小于等于0，则执行SELECT语句时一次性把结果都取到缓存。</li></ul>
    <div class="note" id="zh-cn_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"><a name="zh-cn_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><a name="zh-cn_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p528210501263"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p528210501263"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p528210501263"></a>设置合理的变量值，将减少内存使用量。一般来说，设为100到1000之间的值比较合理。</p>
    </div></div>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row36619083"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_ad9f1c93f8c344b7fb3f32e32bb41e102"><a name="zh-cn_topic_0059778819_ad9f1c93f8c344b7fb3f32e32bb41e102"></a><a name="zh-cn_topic_0059778819_ad9f1c93f8c344b7fb3f32e32bb41e102"></a>HISTCONTROL</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_s31c40c5286894680aa7440755d61cc78"><a name="zh-cn_topic_0059778819_s31c40c5286894680aa7440755d61cc78"></a><a name="zh-cn_topic_0059778819_s31c40c5286894680aa7440755d61cc78"></a>\set HISTCONTROL  ignorespace | ignoredups | ignoreboth | none</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul819470"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul819470"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul819470"><li>ignorespace：以空格开始的行将不会写入历史列表。</li><li>ignoredups：与以前历史记录里匹配的行不会写入历史记录。</li><li>ignoreboth、none或者其他值：所有以交互模式读入的行都被保存到历史列表。<div class="note" id="zh-cn_topic_0059778819_n08860fbfbbcb45e2906bddd71ecf7d61"><a name="zh-cn_topic_0059778819_n08860fbfbbcb45e2906bddd71ecf7d61"></a><a name="zh-cn_topic_0059778819_n08860fbfbbcb45e2906bddd71ecf7d61"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059778819_a7e477675f9ae4da2ad2dee1b9c694871"><a name="zh-cn_topic_0059778819_a7e477675f9ae4da2ad2dee1b9c694871"></a><a name="zh-cn_topic_0059778819_a7e477675f9ae4da2ad2dee1b9c694871"></a>none表示不设置HISTCONTROL。</p>
    </div></div>
    </li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row66347025"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a26f37e27d08f4f0f9e9c94e3d831d00b"><a name="zh-cn_topic_0059778819_a26f37e27d08f4f0f9e9c94e3d831d00b"></a><a name="zh-cn_topic_0059778819_a26f37e27d08f4f0f9e9c94e3d831d00b"></a>HISTFILE</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_s76a758ea6afd486cacc51814a32a8a97"><a name="zh-cn_topic_0059778819_s76a758ea6afd486cacc51814a32a8a97"></a><a name="zh-cn_topic_0059778819_s76a758ea6afd486cacc51814a32a8a97"></a>\set HISTFILE <em id="zh-cn_topic_0059778819_a1e6a47f33aca4b6fb62e85f3d721a05e"><a name="zh-cn_topic_0059778819_a1e6a47f33aca4b6fb62e85f3d721a05e"></a><a name="zh-cn_topic_0059778819_a1e6a47f33aca4b6fb62e85f3d721a05e"></a>filename</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p53936234"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p53936234"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p53936234"></a>此文件用于存储历史名列表。缺省值是~/.bash_history。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row10595728"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_afbf6dc254bee469db307b94b03867e95"><a name="zh-cn_topic_0059778819_afbf6dc254bee469db307b94b03867e95"></a><a name="zh-cn_topic_0059778819_afbf6dc254bee469db307b94b03867e95"></a>HISTSIZE</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_s2b5a5e5700cf4ccf9b4be35079275fb0"><a name="zh-cn_topic_0059778819_s2b5a5e5700cf4ccf9b4be35079275fb0"></a><a name="zh-cn_topic_0059778819_s2b5a5e5700cf4ccf9b4be35079275fb0"></a>\set HISTSIZE <em id="zh-cn_topic_0059778819_aa9df1fd03d94447b81ccff946c4b9af4"><a name="zh-cn_topic_0059778819_aa9df1fd03d94447b81ccff946c4b9af4"></a><a name="zh-cn_topic_0059778819_aa9df1fd03d94447b81ccff946c4b9af4"></a>size</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18680913"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18680913"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18680913"></a>保存在历史命令里命令的个数。缺省值是500。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row66636887"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"><a name="zh-cn_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a><a name="zh-cn_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a>HOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"><a name="zh-cn_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a><a name="zh-cn_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a>\set HOST <em id="zh-cn_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"><a name="zh-cn_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a><a name="zh-cn_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a>hostname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p37595654"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p37595654"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p37595654"></a>已连接的数据库主机名称。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row2629562"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"><a name="zh-cn_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a><a name="zh-cn_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a>IGNOREEOF</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"><a name="zh-cn_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a><a name="zh-cn_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a>\set IGNOREEOF <em id="zh-cn_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"><a name="zh-cn_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a><a name="zh-cn_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul29414696"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul29414696"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul29414696"><li>若设置此变量为数值，假设为10，则在gsql中输入的前9次EOF字符（通常是Ctrl+C）都会被忽略，在第10次按Ctrl+C才能退出gsql程序。</li><li>若设置此变量为非数值，则缺省为10。</li><li>若删除此变量，则向交互的gsql会话发送一个EOF终止应用。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row28609302"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a08e91023634f47d7906a2efef2825441"><a name="zh-cn_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a><a name="zh-cn_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a>LASTOID</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"><a name="zh-cn_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a><a name="zh-cn_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a>\set LASTOID <em id="zh-cn_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"><a name="zh-cn_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a><a name="zh-cn_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a>oid</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36781226"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36781226"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36781226"></a>最后影响的oid值，即为从一条INSERT或lo_import命令返回的值。此变量只保证在下一条SQL语句的结果显示之前有效。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row65138961"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_afc1b71b63894490e899801a959776fff"><a name="zh-cn_topic_0059778819_afc1b71b63894490e899801a959776fff"></a><a name="zh-cn_topic_0059778819_afc1b71b63894490e899801a959776fff"></a>ON_ERROR_ROLLBACK</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"><a name="zh-cn_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a><a name="zh-cn_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a>\set  ON_ERROR_ROLLBACK  on | interactive | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul22048505"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul22048505"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul22048505"><li>如果是on，当一个事务块里的语句产生错误的时候，这个错误将被忽略而事务继续。</li><li>如果是interactive，这样的错误只是在交互的会话里忽略。</li><li>如果是off（缺省），事务块里一个语句生成的错误将会回滚整个事务。on_error_rollback-on模式是通过在一个事务块的每个命令前隐含地发出一个SAVEPOINT的方式工作的，在发生错误的时候回滚到该事务块。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row48481494"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"><a name="zh-cn_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a><a name="zh-cn_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a>ON_ERROR_STOP</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"><a name="zh-cn_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a><a name="zh-cn_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a>\set ON_ERROR_STOP on | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul25758369"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul25758369"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul25758369"><li>on：命令执行错误时会立即停止，在交互模式下，gsql会立即返回已执行命令的结果。</li><li>off（缺省）：命令执行错误时将会跳过错误继续执行。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row53738843"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"><a name="zh-cn_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a><a name="zh-cn_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a>PORT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"><a name="zh-cn_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a><a name="zh-cn_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a>\set PORT <em id="zh-cn_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"><a name="zh-cn_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a><a name="zh-cn_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a>port</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p10318634"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p10318634"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p10318634"></a>正连接数据库的端口号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row19496046"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"><a name="zh-cn_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a><a name="zh-cn_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a>USER</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"><a name="zh-cn_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a><a name="zh-cn_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a>\set USER <em id="zh-cn_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"><a name="zh-cn_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a><a name="zh-cn_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a>username</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39899132"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39899132"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39899132"></a>当前用于连接的数据库用户。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row57444583"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"><a name="zh-cn_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a><a name="zh-cn_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a>VERBOSITY</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"><a name="zh-cn_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a><a name="zh-cn_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a>\set VERBOSITY   terse | default | verbose</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33154265"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33154265"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33154265"></a>这个选项可以设置为值terse、default、verbose之一以控制错误报告的冗余行。</p>
    <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul4342251"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul4342251"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul4342251"><li>terse：仅返回严重且主要的错误文本以及文本位置（一般适合于单行错误信息）。</li><li>default：返回严重且主要的错误文本及其位置，还包括详细的错误细节、错误提示（可能会跨越多行）。</li><li>verbose：返回所有的错误信息。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>


-   <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_li56915888"></a>SQL代换

    像元命令的参数一样，gsql变量的一个关键特性是可以把gsql变量替换成正规的SQL语句。此外，gsql还提供为变量更换新的别名或其他标识符等功能。使用SQL代换方式替换一个变量的值可在变量前加冒号。例如：

    ```
    openGauss=# \set foo 'HR.areaS'
    openGauss=# select * from :foo;
     area_id |       area_name        
    ---------+------------------------
           4 | Middle East and Africa
           3 | Asia
           1 | Europe
           2 | Americas
    (4 rows)
    ```

    执行以上命令，将会查询HR.areaS表。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >变量的值是逐字复制的，甚至可以包含不对称的引号或反斜杠命令。所以必须保证输入的内容有意义。


-   <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_li65414495"></a>提示符

    通过[表3](#zh-cn_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f)的三个变量可以设置gsql的提示符，这些变量是由字符和特殊的转义字符所组成。

    **表 3**  提示符变量

    <a name="zh-cn_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059778819_r817a3786ba804a1886882c4a3687feae"><th class="cellrowborder" valign="top" width="12%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"><a name="zh-cn_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a><a name="zh-cn_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a>变量</p>
    </th>
    <th class="cellrowborder" valign="top" width="35%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778819_ad45548d4c8354eb39118d80473523c41"><a name="zh-cn_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a><a name="zh-cn_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a>描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"><a name="zh-cn_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a><a name="zh-cn_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a>示例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059778819_r1daadf254f9c46aeb1727fe7919a875a"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"><a name="zh-cn_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a><a name="zh-cn_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a>PROMPT1</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"><a name="zh-cn_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a><a name="zh-cn_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a>gsql请求一个新命令时使用的正常提示符。</p>
    <p id="zh-cn_topic_0059778819_a687212152e3a4b109c30e98511b58138"><a name="zh-cn_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a><a name="zh-cn_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a>PROMPT1的默认值为：</p>
    <pre class="screen" id="zh-cn_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"><a name="zh-cn_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a><a name="zh-cn_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a>%/%R%#</pre>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"><a name="zh-cn_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a><a name="zh-cn_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a>使用变量PROMPT1切换提示符：</p>
    <a name="zh-cn_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><a name="zh-cn_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><ul id="zh-cn_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"><li>提示符变为[local]：<a name="zh-cn_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><a name="zh-cn_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c">openGauss=&gt; \set PROMPT1 %M
    [local:/tmp/gaussdba_mppdb]</pre>
    </li><li>提示符变为name：<a name="zh-cn_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><a name="zh-cn_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778819_s953d1defe3564420936773eb2cd46335">openGauss=&gt; \set PROMPT1 name
    name</pre>
    </li><li>提示符变为=：<a name="zh-cn_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><a name="zh-cn_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778819_sba91998cf42d47fc83956eecf376f679">openGauss=&gt; \set PROMPT1 %R
    =</pre>
    </li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_rc77689523c7a46b6801d4d9df1a8c8cd"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"><a name="zh-cn_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a><a name="zh-cn_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a>PROMPT2</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"><a name="zh-cn_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a><a name="zh-cn_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a>在一个命令输入期待更多输入时（例如，查询没有用一个分号结束或者引号不完整）显示的提示符。</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"><a name="zh-cn_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a><a name="zh-cn_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a>使用变量PROMPT2显示提示符：</p>
    <a name="zh-cn_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><a name="zh-cn_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236">openGauss=# \set PROMPT2 TEST
    openGauss=# select * from HR.areaS TEST;
     area_id |       area_name    
    ---------+--------------------
           1 | Europe
           2 | Americas
           4 | Middle East and Africa
           3 | Asia
    (4 rows))</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_r7787d406b54c4fc49b5e7cfbf050935e"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"><a name="zh-cn_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a><a name="zh-cn_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a>PROMPT3</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"><a name="zh-cn_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a><a name="zh-cn_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a>当执行COPY命令，并期望在终端输入数据时（例如，COPY FROM STDIN），显示提示符。</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"><a name="zh-cn_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a><a name="zh-cn_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a>使用变量PROMPT3显示COPY提示符：</p>
    <a name="zh-cn_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><a name="zh-cn_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1">openGauss=# \set PROMPT3 '&gt;&gt;&gt;&gt;'
    openGauss=# copy HR.areaS from STDIN;
    Enter data to be copied followed by a newline.
    End with a backslash and a period on a line by itself.
    &gt;&gt;&gt;&gt;1 aa
    &gt;&gt;&gt;&gt;2 bb
    &gt;&gt;&gt;&gt;\.</pre>
    </td>
    </tr>
    </tbody>
    </table>

    提示符变量的值是按实际字符显示的，但是，当设置提示符的命令中出现“%”时，变量的值根据“%”后的字符，替换为已定义的内容，已定义的提示符请参见[表4](#zh-cn_topic_0059778819_zh-cn_topic_0058968129_table55443487)。

    **表 4**  已定义的替换

    <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_table55443487"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row8395738"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28543196"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28543196"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28543196"></a>符号</p>
    </th>
    <th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p14857929"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p14857929"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p14857929"></a>符号说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row22949754"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39941279"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39941279"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39941279"></a>%M</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p6073653"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p6073653"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p6073653"></a>主机的全名（包含域名），若连接是通过Unix域套接字进行的，则全名为[local]，若Unix域套接字不是编译的缺省位置，就是[local:/dir/name]。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row33961501"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p66927766"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p66927766"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p66927766"></a>%m</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p61404572"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p61404572"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p61404572"></a>主机名删去第一个点后面的部分。若通过Unix域套接字连接，则为[local]。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row7514803"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15100907"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15100907"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15100907"></a>%&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36816645"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36816645"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36816645"></a>主机正在侦听的端口号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row20185202"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p34130960"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p34130960"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p34130960"></a>%n</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39761457"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39761457"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39761457"></a>数据库会话的用户名。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row15576469"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18164273"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18164273"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18164273"></a>%/</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p26276531"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p26276531"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p26276531"></a>当前数据库名称。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row12739235"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p31441988"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p31441988"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p31441988"></a>%~</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p30614042"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p30614042"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p30614042"></a>类似 %/，如果数据库是缺省数据库时输出的是波浪线~。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row61805480"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p12249031"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p12249031"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p12249031"></a>%#</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p2976726"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p2976726"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p2976726"></a>如果会话用户是数据库系统管理员，使用#，否则用&gt;。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row9511801"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p42866586"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p42866586"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p42866586"></a>%R</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23135840"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23135840"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23135840"><li>对于PROMPT1通常是“=”，如果是单行模式则是“^”，如果会话与数据库断开（如果\connect失败可能发生）则是“!”。</li><li>对于PROMPT2该序列被“ -”、“ *”、单引号、双引号或“$”(取决于gsql是否等待更多的输入：查询没有终止、正在一个 /* ... */ 注释里、正在引号或者美元符扩展里)代替。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row65831155"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4335289"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4335289"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4335289"></a>%x</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28124112"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28124112"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28124112"></a>事务状态：</p>
    <a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul39794295"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul39794295"></a><ul id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul39794295"><li>如果不在事务块里，则是一个空字符串。</li><li>如果在事务块里，则是“*”。</li><li>如果在一个失败的事务块里则是“!”。</li><li>如果无法判断事务状态时为“?”（比如没有连接）。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row59967035"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33969966"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33969966"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33969966"></a>%digits</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p41583284"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p41583284"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p41583284"></a>指定字节值的字符将被替换到该位置。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row3074559"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4125311"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4125311"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4125311"></a>%:name</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50452955"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50452955"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50452955"></a>gsql变量“name”的值。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row25596594"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p22836224"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p22836224"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p22836224"></a>%command</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"><a name="zh-cn_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a><a name="zh-cn_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a>command的输出，类似于使用“^”替换。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_row54041555"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p9721071"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p9721071"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p9721071"></a>%[ . . . %]</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p19218902468"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p19218902468"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p19218902468"></a>提示可以包含终端控制字符，这些字符可以改变颜色、背景、提示文本的风格、终端窗口的标题。例如，</p>
    <p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p167001154619"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p167001154619"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p167001154619"></a>potgres=&gt; \set PROMPT1 '%[%033[1;33;40m%]%n@%/%R%[%033[0m%]%#'</p>
    <p id="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50541836"><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50541836"></a><a name="zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50541836"></a>这个句式的结果是在VT100兼容的可显示彩色的终端上的一个宽体（1;）黑底黄字（33;40）。</p>
    </td>
    </tr>
    </tbody>
    </table>


## 环境变量<a name="zh-cn_topic_0059778819_s0a191fd6f5d448aab0473160a8ee54f6"></a>

**表 5**  与gsql相关的环境变量

<a name="zh-cn_topic_0059778819_ta6e7da8b2a0f4d2b9f94b5b7037ac91e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778819_r1b9f53c1bcfc49218c72089a021d9e5c"><th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"><a name="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a><a name="zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="70.86%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"><a name="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a><a name="zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778819_rec48dbdab62e4a0a818e472ccadd19d6"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"><a name="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a><a name="zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a>COLUMNS</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"><a name="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a><a name="zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a>如果\set columns为0，则由此参数控制wrapped格式的宽度。这个宽度用于决定在自动扩展的模式下，是否要把宽输出模式变成竖线的格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rcb58a79721724a2c8bddfd9929e4bc5c"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"><a name="zh-cn_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a><a name="zh-cn_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a>PAGER</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"><a name="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a><a name="zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a>如果查询结果无法在一页显示，它们就会被重定向到这个命令。可以用\pset命令关闭分页器。典型的是用命令more或less来实现逐页查看。缺省值是平台相关的。</p>
<div class="note" id="zh-cn_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"><a name="zh-cn_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><a name="zh-cn_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059778819_a98582b46266b4f89947f7c05e9044567"><a name="zh-cn_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a><a name="zh-cn_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a>less的文本显示，受系统环境变量LC_CTYPE影响。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r5ce588e3868e4c90a5bfd83f9a9dc79a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"><a name="zh-cn_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a><a name="zh-cn_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a>PSQL_EDITOR</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"><a name="zh-cn_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a><a name="zh-cn_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a>\e和\ef命令使用环境变量指定的编辑器。变量是按照列出的先后顺序检查的。在Unix系统上默认的编辑工具是vi。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_re8cde54e2cb04352ae5243b25ee44f06"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"><a name="zh-cn_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a><a name="zh-cn_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a>EDITOR</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r8c9f051e80434e6da9c12a3367668f8b"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"><a name="zh-cn_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a><a name="zh-cn_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a>VISUAL</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_rd22f025db0f24923bd417615ea93ca36"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"><a name="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a><a name="zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a>PSQL_EDITOR_LINENUMBER_ARG</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><div class="p" id="zh-cn_topic_0059778819_afed77a127a0749b791271ace8989d751"><a name="zh-cn_topic_0059778819_afed77a127a0749b791271ace8989d751"></a><a name="zh-cn_topic_0059778819_afed77a127a0749b791271ace8989d751"></a>当\e和\ef带上一行数字参数使用时，这个变量指定的命令行参数用于向编辑器传递起始行数。像Emacs或vi这样的编辑器，这只是个加号。如果选项和行号之间需要空白，在变量的值后加一个空格。例如：<pre class="screen" id="zh-cn_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"><a name="zh-cn_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a><a name="zh-cn_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a>PSQL_EDITOR_LINENUMBER_ARG = '+'  
PSQL_EDITOR_LINENUMBER_ARG='--line '</pre>
</div>
<p id="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"><a name="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a><a name="zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a>Unix系统默认的是+。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r0a89d2015d0042548d36be7e6e76cfe5"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"><a name="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a><a name="zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a>PSQLRC</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"><a name="zh-cn_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a><a name="zh-cn_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a>用户的.gsqlrc文件的交互位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_re89519914e7c4f39a091faee4222768a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"><a name="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a><a name="zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a>SHELL</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"><a name="zh-cn_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a><a name="zh-cn_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a>使用\!命令跟shell执行的命令是一样的效果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778819_r7ebb36b11ff44947abd4dc1dea456370"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778819_a59571dbc78644a97b2683c5159dac446"><a name="zh-cn_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a><a name="zh-cn_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a>TMPDIR</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"><a name="zh-cn_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a><a name="zh-cn_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a>存储临时文件的目录。缺省是/tmp。</p>
</td>
</tr>
</tbody>
</table>

