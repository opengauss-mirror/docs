# gsql<a name="ZH-CN_TOPIC_0249632297"></a>

gsql是openGauss提供在命令行下运行的数据库连接工具，可以通过此工具连接服务器并对其进行操作和维护，除了具备操作数据库的基本功能，gsql还提供了若干高级特性，便于用户使用。

### gsql概述<a name="section18543185163212"></a>

**基本功能**

-   **连接数据库：**详细操作请参见《开发者指南》中“数据库使用 \> 连接数据库 \> 使用gsql连接 \> 远程连接数据库”章节。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >gsql创建连接时，数据库默认设置会有5分钟超时时间。如果在这个时间内，数据库未正确地接受连接并对身份进行认证，gsql将超时退出。
    >针对此问题，可以参考[常见问题处理](#section1780814211263)。

-   **执行SQL语句：**支持交互式地键入并执行SQL语句，也可以执行一个文件中指定的SQL语句。
-   **执行元命令：**元命令可以帮助管理员查看数据库对象的信息、查询缓存区信息、格式化SQL输出结果、以及连接到新的数据库等。元命令的详细说明请参见[元命令参考](#section17631544132716)。

**高级特性**

gsql的高级特性如[表1](#zh-cn_topic_0237152142_zh-cn_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d)所示。

**表 1**  gsql高级特性

<a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r4b73260a43df46f6ba18d2326f63d3e8"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a>特性名称</p>
</th>
<th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_re148610b2ba14890a4a2cbe1fb9f9cde"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a>变量</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a>gsql提供类似于Linux的shell命令的变量特性，可以使用gsql的原命令\set设置一个变量，格式如下：</p>
<pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><strong id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a>\set</strong> <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a423967f56510409080e158d60d2b4c24"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a>varname value</em></pre>
<p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aee7fac646c524c4db69194069d742fcf"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a>要删除一个变量请使用如下方式：</p>
<pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><strong id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a>\unset</strong> <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a>varname</em></pre>
<div class="note" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"><li>变量只是简单的名称/值对，这里的值可以是任意长度。</li><li>变量名称必须由字母（包括非拉丁字母）、数字和下划线组成，且对大小写敏感。</li><li>如果使用\set varname的格式（不带第二个参数），则只是设置这个变量而没有给变量赋值。</li><li>可以使用不带参数的\set来显示所有变量的值。</li></ul>
</div></div>
<p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a>变量的示例和详细说明请参见<a href="#zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_li39134862">变量</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r457b7479b8204694b14e69200bb8eb7b"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a>SQL代换</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a>利用gsql的变量特性，可以将常用的SQL语句设置为变量，以简化操作。</p>
<p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a38c61443f662466996d0824b10ea12fc"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a>SQL代换的示例和详细说明请参见<a href="#li194391754476">SQL代换</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_rebf3bc2093a1493db2962cb59d3ebe5e"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a>自定义提示符</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a>gsql使用的提示符支持用户自定义。可以通过修改gsql预留的三个变量PROMPT1、PROMPT2、PROMPT3来改变提示符。</p>
<p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a>这三个变量的值可以用户自定义，也可以使用gsql预定义的值。详细请参见<a href="#li163671421104717">提示符</a>。</p>
</td>
</tr>
<tr id="row119681177486"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="p19969191713487"><a name="p19969191713487"></a><a name="p19969191713487"></a>命令自动补齐</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="p18873138184912"><a name="p18873138184912"></a><a name="p18873138184912"></a>根据openGauss语法规则，gsql支持使用Tab键进行命令的自动补齐，当编译时指定了选项--with-readline，且客户端连接时指定“-r”参数，此功能被打开。例如，crea后键入Tab，gsql会将其补齐为create。</p>
    <div class="note" id="note1039612365499"><a name="note1039612365499"></a><a name="note1039612365499"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="ul19954323195114"></a><a name="ul19954323195114"></a><ul id="ul19954323195114"><li>支持数据库SQL关键字如select、create、table等。</li><li>支持表名、视图名等自定义标识符的补齐。</li><li>元命令选项'S'、'+'不支持自动补齐。</li><li>对表进行补齐时，只有前缀是“pg_”才会补齐系统表。</li><li>不支持建表时字段类型的补齐。</li><li>select后不支持任何补齐。</li><li>不支持常量与宏的自动补齐。</li><li>select * from a,b... 不支持第二个开始表的自动补齐, insert into t1 (col1, col2, ...) 不支持第二个列的自动补齐。</li><li>不支持create tablespace语句with以及with后参数的自动补齐。</li><li>创建索引不支持local、global的自动补齐，修改索引不支持rebuild自动补齐。</li><li>set语句仅支持自动补全USERSET和SUSET级别的参数。</li><li>不支持if exists的自动补齐。</li><li>不支持表名.列名的自动补齐，如alter sequence &lt;name&gt; owned by tableName.colName，owned by。</li><li>不支持自定义操作符自动补齐。使用复制粘贴这种方式输入命令，如果粘贴的命令里面有TAB键有可能会使输入命令的格式错乱，无法正常执行。</li><li>"\t\n@$><=;|&{() "这些特殊字符在sql语句中具有固定含义。如果自定义表名中包含这些特殊字符，那么输入的sql语句从这些字符开始不支持自动补齐。</li></ul>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r5efe8924bbc449bd97710897768e9a03"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a>客户端操作历史记录</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a363dd0cef39947078205d99444faf743"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a363dd0cef39947078205d99444faf743"></a>gsql支持客户端操作历史记录，当客户端连接时指定“-r”参数，此功能被打开。可以通过\set设置记录历史的条数，例如，\set HISTSIZE 50，将记录历史的条数设置为50，\set HISTSIZE 0，不记录历史。</p>
<div class="note" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_nb67c60d357644d98802305a02d312bbe"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"><li>客户端操作历史记录条数默认设置为32条，最多支持记录500条。当客户端交互式输入包含中文字符时，只支持UTF-8 的编码环境。</li><li>出于安全考虑，将包含PASSWORD、IDENTIFIED敏感词的记录识别为敏感信息，不会记录到历史信息中，即不能通过上下翻回显。</li></ul>
</div></div>
</td>
</tr>
</tbody>
</table>




-   <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_li39134862"></a>变量

    可以使用gsql元命令\\set设置一个变量。例如把变量foo的值设置为bar：

    ```
    openGauss=# \set foo bar
    ```

    要引用变量的值，在变量前面加冒号。例如查看变量的值：

    ```
    openGauss=# \echo :foo
    bar
    ```

    这种变量的引用方法适用于正规的SQL语句和元命令。

    gsql预定义了一些特殊变量，同时也规划了变量的取值。为了保证和后续版本最大限度地兼容，请避免以其他目的使用这些变量。所有特殊变量见[表2](#zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_table45814285)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   所有特殊变量都由大写字母、数字和下划线组成。
    >-   要查看特殊变量的默认值，请使用元命令**\\echo :**_varname_（例如\\echo :DBNAME）。
    

**表 2**  特殊变量设置 <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_table45814285"></a>
    

<table><thead align="left"><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row63384495"><th class="cellrowborder" valign="top" width="15%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a>变量</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.000000000000004%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p56526422"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p56526422"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p56526422"></a>设置方法</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p8552256"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p8552256"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p8552256"></a>变量说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row33504320"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a>DBNAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a>\set DBNAME <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a>dbname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15409553"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15409553"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15409553"></a>当前连接的数据库的名称。每次连接数据库时都会被重新设置。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row52760526"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a>ECHO</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_se7962925861447dca766f73dd7e013c2"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a>\set ECHO all | queries</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23658891"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23658891"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23658891"><li>如果设置为all，只显示查询信息。设置为all等效于使用gsql连接数据库时指定-a参数。</li><li>如果设置为queries，显示命令行和查询信息。等效于使用gsql连接数据库时指定-e参数。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row64235341"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a>ECHO_HIDDEN</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a>\set ECHO_HIDDEN  on | off | noexec</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad216beecced64389b3555e3cd9425bee"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a>当使用元命令查询数据库信息（例如\dg）时，此变量的取值决定了查询的行为：</p>
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"><li>设置为on，先显示元命令实际调用的查询语句，然后显示查询结果。等效于使用gsql连接数据库时指定-E参数。</li><li>设置为off，则只显示查询结果。</li><li>设置为noexec，则只显示查询信息，不执行查询操作。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row57132578"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a>ENCODING</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s8c894db8f271491693385930cc9fa35c"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a>\set ENCODING   <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad2956e867d26443388b2826907aa13cb"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a>encoding</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p44867126"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p44867126"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p44867126"></a>当前客户端的字符集编码。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row40218171"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a>FETCH_COUNT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a>\set FETCH_COUNT <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_i537772514207"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_i537772514207"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_i537772514207"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_u3d111cd6129641588ea85c80411d663a"><li>如果该变量的值为大于0的整数，假设为n，则执行SELECT语句时每次从结果集中取n行到缓存并显示到屏幕。</li><li>如果不设置此变量，或设置的值小于等于0，则执行SELECT语句时一次性把结果都取到缓存。</li></ul>
    <div class="note" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p528210501263"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p528210501263"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p528210501263"></a>设置合理的变量值，将减少内存使用量。一般来说，设为100到1000之间的值比较合理。</p>
    </div></div>
    </td>
    </tr>
    <tr id="row13713400449"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a>HOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a>\set HOST <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a>hostname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p37595654"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p37595654"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p37595654"></a>已连接的数据库主机名称。</p>
    </td>
    </tr>
    <tr id="row57139044416"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a>IGNOREEOF</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a>\set IGNOREEOF <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul29414696"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul29414696"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul29414696"><li>若设置此变量为数值，假设为10，则在gsql中输入的前9次EOF字符（通常是Ctrl+D组合键）都会被忽略，在第10次按Ctrl+D才能退出gsql程序。</li><li>若设置此变量为非数值，则缺省为10。</li><li>若删除此变量，则向交互的gsql会话发送一个EOF终止应用。</li></ul>
    </td>
    </tr>
    <tr id="row1671212054413"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a08e91023634f47d7906a2efef2825441"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a>LASTOID</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a>\set LASTOID <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a>oid</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36781226"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36781226"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36781226"></a>最后影响的oid值，即为从一条INSERT或lo_import命令返回的值。此变量只保证在下一条SQL语句的结果显示之前有效。</p>
    </td>
    </tr>
    <tr id="row137120054419"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afc1b71b63894490e899801a959776fff"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afc1b71b63894490e899801a959776fff"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afc1b71b63894490e899801a959776fff"></a>ON_ERROR_ROLLBACK</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a>\set  ON_ERROR_ROLLBACK  on | interactive | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul22048505"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul22048505"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul22048505"><li>如果是on，当一个事务块里的语句产生错误的时候，这个错误将被忽略而事务继续。</li><li>如果是interactive，这样的错误只是在交互的会话里忽略。</li><li>如果是off（缺省），事务块里一个语句生成的错误将会回滚整个事务。on_error_rollback-on模式是通过在一个事务块的每个命令前隐含地发出一个SAVEPOINT的方式工作的，在发生错误的时候回滚到该事务块。</li></ul>
    </td>
    </tr>
    <tr id="row8285123024413"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a>ON_ERROR_STOP</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a>\set ON_ERROR_STOP on | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul25758369"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul25758369"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul25758369"><li>on：命令执行错误时会立即停止，在交互模式下，gsql会立即返回已执行命令的结果。</li><li>off（缺省）：命令执行错误时将会跳过错误继续执行。</li></ul>
    </td>
    </tr>
    <tr id="row8285930144415"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a>PORT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a>\set PORT <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a>port</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p10318634"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p10318634"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p10318634"></a>正连接数据库的端口号。</p>
    </td>
    </tr>
    <tr id="row2028413308448"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a>USER</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a>\set USER <em id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a>username</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39899132"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39899132"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39899132"></a>当前用于连接的数据库用户。</p>
    </td>
    </tr>
    <tr id="row20283153094418"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a>VERBOSITY</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a>\set VERBOSITY   terse | default | verbose</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33154265"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33154265"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33154265"></a>这个选项可以设置为值terse、default、verbose之一以控制错误报告的冗余行。</p>
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul4342251"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul4342251"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul4342251"><li>terse：仅返回严重且主要的错误文本以及文本位置（一般适合于单行错误信息）。</li><li>default：返回严重且主要的错误文本及其位置，还包括详细的错误细节、错误提示（可能会跨越多行）。</li><li>verbose：返回所有的错误信息。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="li194391754476"></a>SQL代换

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

-   <a name="li163671421104717"></a>提示符

    通过[表3](#zh-cn_topic_0237152142_zh-cn_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f)的三个变量可以设置gsql的提示符，这些变量是由字符和特殊的转义字符所组成。

    **表 3**  提示符变量

    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r817a3786ba804a1886882c4a3687feae"><th class="cellrowborder" valign="top" width="12%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a>变量</p>
    </th>
    <th class="cellrowborder" valign="top" width="35%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad45548d4c8354eb39118d80473523c41"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a>描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a>示例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r1daadf254f9c46aeb1727fe7919a875a"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a>PROMPT1</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a>gsql请求一个新命令时使用的正常提示符。</p>
    <p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a687212152e3a4b109c30e98511b58138"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a>PROMPT1的默认值为：</p>
    <pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a>%/%R%#</pre>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a>使用变量PROMPT1切换提示符：</p>
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"><li>提示符变为[local]：<a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c">postgres=&gt; \set PROMPT1 %M
    [local:/tmp/gaussdba_mppdb]</pre>
    </li><li>提示符变为name：<a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s953d1defe3564420936773eb2cd46335">postgres=&gt; \set PROMPT1 name
    name</pre>
    </li><li>提示符变为=：<a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sba91998cf42d47fc83956eecf376f679">postgres=&gt; \set PROMPT1 %R
    =</pre>
    </li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_rc77689523c7a46b6801d4d9df1a8c8cd"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a>PROMPT2</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a>在一个命令输入期待更多输入时（例如，查询没有用一个分号结束或者引号不完整）显示的提示符。</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a>使用变量PROMPT2显示提示符：</p>
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"><span id="zh-cn_topic_0237152142_text4516037162312"><a name="zh-cn_topic_0237152142_text4516037162312"></a><a name="zh-cn_topic_0237152142_text4516037162312"></a>openGauss=# </span>\set PROMPT2 TEST
    <span id="zh-cn_topic_0237152142_text03641438202316"><a name="zh-cn_topic_0237152142_text03641438202316"></a><a name="zh-cn_topic_0237152142_text03641438202316"></a>openGauss=# </span>select * from HR.areaS TEST;
     area_id |       area_name    
    ---------+--------------------
           1 | Europe
           2 | Americas
           4 | Middle East and Africa
           3 | Asia
    (4 rows))</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r7787d406b54c4fc49b5e7cfbf050935e"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a>PROMPT3</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a>当执行COPY命令，并期望在终端输入数据时（例如，COPY FROM STDIN），显示提示符。</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a>使用变量PROMPT3显示COPY提示符：</p>
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"><span id="zh-cn_topic_0237152142_text024033914234"><a name="zh-cn_topic_0237152142_text024033914234"></a><a name="zh-cn_topic_0237152142_text024033914234"></a>openGauss=# </span> \set PROMPT3 '&gt;&gt;&gt;&gt;'
    <span id="zh-cn_topic_0237152142_text172044409232"><a name="zh-cn_topic_0237152142_text172044409232"></a><a name="zh-cn_topic_0237152142_text172044409232"></a>openGauss=# </span> copy HR.areaS from STDIN;
    Enter data to be copied followed by a newline.
    End with a backslash and a period on a line by itself.
    &gt;&gt;&gt;&gt;1 aa
    &gt;&gt;&gt;&gt;2 bb
    &gt;&gt;&gt;&gt;\.</pre>
    </td>
    </tr>
    </tbody>
    </table>

    提示符变量的值是按实际字符显示的，但是，当设置提示符的命令中出现“%”时，变量的值根据“%”后的字符，替换为已定义的内容，已定义的提示符请参见[表4](#zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_table55443487)。

    **表 4**  已定义的替换

    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_table55443487"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row8395738"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28543196"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28543196"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28543196"></a>符号</p>
    </th>
    <th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p14857929"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p14857929"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p14857929"></a>符号说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row22949754"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39941279"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39941279"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39941279"></a>%M</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p6073653"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p6073653"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p6073653"></a>主机的全名（包含域名），若连接是通过Unix域套接字进行的，则全名为[local]，若Unix域套接字不是编译的缺省位置，就是[local:/dir/name]。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row33961501"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p66927766"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p66927766"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p66927766"></a>%m</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p61404572"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p61404572"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p61404572"></a>主机名删去第一个点后面的部分。若通过Unix域套接字连接，则为[local]。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row7514803"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15100907"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15100907"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p15100907"></a>%&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36816645"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36816645"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p36816645"></a>主机正在侦听的端口号。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row20185202"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p34130960"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p34130960"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p34130960"></a>%n</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39761457"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39761457"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p39761457"></a>数据库会话的用户名。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row15576469"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18164273"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18164273"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p18164273"></a>%/</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p26276531"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p26276531"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p26276531"></a>当前数据库名称。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row12739235"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p31441988"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p31441988"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p31441988"></a>%~</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p30614042"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p30614042"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p30614042"></a>类似 %/，如果数据库是缺省数据库时输出的是波浪线~。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row61805480"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p12249031"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p12249031"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p12249031"></a>%#</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p2976726"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p2976726"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p2976726"></a>如果会话用户是数据库系统管理员，使用#，否则用&gt;。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row9511801"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p42866586"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p42866586"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p42866586"></a>%R</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23135840"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23135840"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul23135840"><li>对于PROMPT1通常是“=”，如果是单行模式则是“^”，如果会话与数据库断开（如果\connect失败可能发生）则是“!”。</li><li>对于PROMPT2该序列被“ -”、单引号、双引号或“$”（取决于gsql是否等待更多的输入：查询没有终止、正在一个 / ... / 注释里、正在引号或者美元符扩展里）代替。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row65831155"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4335289"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4335289"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4335289"></a>%x</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28124112"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28124112"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p28124112"></a>事务状态：</p>
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul39794295"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul39794295"></a><ul id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_ul39794295"><li>如果不在事务块里，则是一个空字符串。</li><li>如果在事务块里，则是“*”。</li><li>如果在一个失败的事务块里则是“!”。</li><li>如果无法判断事务状态时为“?”（比如没有连接）。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row59967035"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33969966"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33969966"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p33969966"></a>%digits</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p41583284"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p41583284"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p41583284"></a>指定字节值的字符将被替换到该位置。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row3074559"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4125311"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4125311"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p4125311"></a>%:name</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50452955"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50452955"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50452955"></a>gsql变量“name”的值。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_row25596594"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p22836224"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p22836224"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p22836224"></a>%command</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a>command的输出，类似于使用“^”替换。</p>
    </td>
    </tr>
    <tr id="row249615339511"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p9721071"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p9721071"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p9721071"></a>%[ . . . %]</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p19218902468"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p19218902468"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p19218902468"></a>提示可以包含终端控制字符，这些字符可以改变颜色、背景、提示文本的风格、终端窗口的标题。例如，</p>
    <p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p167001154619"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p167001154619"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p167001154619"></a>potgres=&gt; \set PROMPT1 '%[%033[1;33;40m%]%n@%/%R%[%033[0m%]%#'</p>
    <p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50541836"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50541836"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_p50541836"></a>这个句式的结果是在VT100兼容的可显示彩色的终端上的一个宽体（1;）黑底黄字（33;40）。</p>
    </td>
    </tr>
    </tbody>
    </table>
    
    
    **环境变量**
    
    **表 5**  与gsql相关的环境变量
    
    <a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ta6e7da8b2a0f4d2b9f94b5b7037ac91e"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r1b9f53c1bcfc49218c72089a021d9e5c"><th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a>名称</p>
    </th>
    <th class="cellrowborder" valign="top" width="70.86%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_rec48dbdab62e4a0a818e472ccadd19d6"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a>COLUMNS</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a>如果\set columns为0，则由此参数控制wrapped格式的宽度。这个宽度用于决定在自动扩展的模式下，是否要把宽输出模式变成竖线的格式。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_rcb58a79721724a2c8bddfd9929e4bc5c"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a>PAGER</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a>如果查询结果无法在一页显示，它们就会被重定向到这个命令。可以用\pset命令关闭分页器。典型的是用命令more或less来实现逐页查看。缺省值是平台相关的。</p>
    <div class="note" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a98582b46266b4f89947f7c05e9044567"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a>less的文本显示，受系统环境变量LC_CTYPE影响。</p>
    </div></div>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r5ce588e3868e4c90a5bfd83f9a9dc79a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a>PSQL_EDITOR</p>
    </td>
    <td class="cellrowborder" rowspan="3" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a>\e和\ef命令使用环境变量指定的编辑器。变量是按照列出的先后顺序检查的。在Unix系统上默认的编辑工具是vi。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_re8cde54e2cb04352ae5243b25ee44f06"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a>EDITOR</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r8c9f051e80434e6da9c12a3367668f8b"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a>VISUAL</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_rd22f025db0f24923bd417615ea93ca36"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a>PSQL_EDITOR_LINENUMBER_ARG</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><div class="p" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afed77a127a0749b791271ace8989d751"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afed77a127a0749b791271ace8989d751"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_afed77a127a0749b791271ace8989d751"></a>当\e和\ef带上一行数字参数使用时，这个变量指定的命令行参数用于向编辑器传递起始行数。像Emacs或vi这样的编辑器，这只是个加号。如果选项和行号之间需要空白，在变量的值后加一个空格。例如：<pre class="screen" id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a>PSQL_EDITOR_LINENUMBER_ARG = '+'  
    PSQL_EDITOR_LINENUMBER_ARG='--line '</pre>
    </div>
    <p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a>Unix系统默认的是+。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r0a89d2015d0042548d36be7e6e76cfe5"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a>PSQLRC</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a>用户的.gsqlrc文件的交互位置。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_re89519914e7c4f39a091faee4222768a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a>SHELL</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a>使用\!命令跟shell执行的命令是一样的效果。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_r7ebb36b11ff44947abd4dc1dea456370"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a59571dbc78644a97b2683c5159dac446"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a>TMPDIR</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a><a name="zh-cn_topic_0237152142_zh-cn_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a>存储临时文件的目录。缺省是/tmp。</p>
    </td>
    </tr>
    </tbody>
    </table>


### 使用指导<a name="section134561267517"></a>

**前提条件**

连接数据库时使用的用户需要具备访问数据库的权限。

**背景信息**

使用gsql命令可以连接远程数据库服务。连接远程数据库服务时，需要在服务器上设置允许远程连接，详细操作请参见《开发者指南》中“数据库使用 \> 连接数据库 \> 使用gsql连接 \> 远程连接数据库”章节。

**操作步骤**

1.  使用gsql连接到openGauss服务器。

    gsql工具使用-d参数指定目标数据库名、-U参数指定数据库用户名、-h参数指定主机名、-p参数指定端口号信息。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >- 若未指定数据库名称，则使用初始化时默认生成的数据库名称；
    >- 若未指定数据库用户名，则默认使用当前操作系统用户作为数据库用户名；
    >- 当某个值没有前面的参数（-d、-U等）时，若连接的命令中没有指定数据库名（-d）则该参数会被解释成数据库名；
    >- 如果已经指定数据库名（-d）而没有指定数据库用户名（-U）时，该参数则会被解释成数据库用户名。

    示例1，使用omm用户连接到本机postgres数据库的15400端口。

    ```
    gsql -d postgres -p 15400
    ```

    示例2，使用jack用户连接到远程主机postgres数据库的15400端口。

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 15400
    ```

    示例3，参数postgres和omm不属于任何选项时，分别被解释成了数据库名和用户名。

    ```
    gsql postgres omm -p 15400
    ```

    **等效于**

    ```
    gsql -d postgres -U omm -p 15400
    ```

    详细的gsql参数请参见[命令参考](#section5729181711)。

2.  执行SQL语句。

    以创建数据库human\_staff为例。

    ```
    CREATE DATABASE human_staff;
    ```
    

    通常，输入的命令行在遇到分号的时候结束。如果输入的命令行没有错误，结果就会输出到屏幕上。
    
3.  执行gsql元命令。

    以列出openGauss中所有的数据库和描述信息为例。

    ```
    openGauss=#  \l
                                    List of databases
          Name      |  Owner   | Encoding  | Collate | Ctype |   Access privileges   
    ----------------+----------+-----------+---------+-------+-----------------------
     human_resource | omm | SQL_ASCII | C       | C     | 
     postgres       | omm | SQL_ASCII | C       | C     | 
     template0      | omm | SQL_ASCII | C       | C     | =c/omm         +
                    |          |           |         |       | omm=CTc/omm
     template1      | omm | SQL_ASCII | C       | C     | =c/omm          +
                    |          |           |         |       | omm=CTc/omm
     human_staff    | omm | SQL_ASCII | C       | C     | 
    (5 rows)
    ```

    更多gsql元命令请参见[元命令参考](#section17631544132716)。


**示例**

首先要创建一个表空间EXAMPLE：

```
openGauss=# CREATE TABLESPACE EXAMPLE RELATIVE LOCATION 'tablespace1/tablespace_1';
CREATE TABLESPACE
```

表空间创建成功后，创建schema HR：

```
openGauss=# CREATE schema HR;
CREATE SCHEMA
```

以把一个查询分成多行输入为例。注意提示符的变化：

```
openGauss=# CREATE TABLE HR.areaS(
openGauss(# area_ID   NUMBER,
openGauss(# area_NAME VARCHAR2(25)
openGauss(# )tablespace EXAMPLE;
CREATE TABLE
```

查看表的定义：

```
openGauss=# \d HR.areaS
               Table "hr.areas"
  Column   |         Type          | Modifiers
-----------+-----------------------+-----------
 area_id   | numeric               |
 area_name | character varying(25) |
Tablespace: "example"
```

向HR.areaS表插入四行数据：

```
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (1, 'Europe');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (2, 'Americas');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (3, 'Asia');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (4, 'Middle East and Africa');
INSERT 0 1
```

切换提示符：

```
openGauss=# \set PROMPT1 '%n@%m %~%R%#'
omm@[local] openGauss=#
```

查看表：

```
omm@[local] openGauss=#SELECT * FROM HR.areaS;
 area_id |       area_name        
---------+------------------------
       1 | Europe
       4 | Middle East and Africa
       2 | Americas
       3 | Asia
(4 rows)
```

可以用\\pset命令以不同的方法显示表：

```
omm@[local] openGauss=#\pset border 2
Border style is 2.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
```

```
omm@[local] openGauss=#\pset border 0
Border style is 0.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
omm@[local] openGauss=#\pset border 2
Border style is 2.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
omm@[local] openGauss=#\pset border 0
Border style is 0.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
omm@[local] openGauss=#\pset border 2
Border style is 2.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
omm@[local] openGauss=#\pset border 0
Border style is 0.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
```

使用元命令：

```
omm@[local] openGauss=#\a \t \x
Output format is unaligned.
Showing only tuples.
Expanded display is on.
omm@[local] openGauss=#SELECT * FROM HR.areaS;
area_id|2
area_name|Americas

area_id|1
area_name|Europe

area_id|4
area_name|Middle East and Africa

area_id|3
area_name|Asia
omm@[local] openGauss=# 
```

### 获取帮助<a name="section21541113121"></a>

**操作步骤**

-   连接数据库时，可以使用如下命令获取帮助信息。

    ```
    gsql --help
    ```

    显示如下帮助信息：

    ```
    ......
    Usage:
      gsql [OPTION]... [DBNAME [USERNAME]]
    
    General options:
      -c, --command=COMMAND    run only single command (SQL or internal) and exit
      -d, --dbname=DBNAME      database name to connect to (default: "omm")
      -f, --file=FILENAME      execute commands from file, then exit
    ......
    ```

-   连接到数据库后，可以使用如下命令获取帮助信息。

    ```
    help
    ```

    显示如下帮助信息：

    ```
    You are using gsql, the command-line interface to gaussdb.
    Type:  \copyright for distribution terms
           \h for help with SQL commands
           \? for help with gsql commands
           \g or terminate with semicolon to execute query
           \q to quit 
    ```


**任务示例**

1.  使用如下命令连接数据库。

    ```
    gsql -d postgres -p 15400
    ```

    postgres为需要连接的数据库名称，15400为数据库主节点的端口号。

    连接成功后，系统显示类似如下信息：

    ```
    gsql ((openGauss x.x build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=#
    ```

2.  查看gsql的帮助信息。具体执行命令请参见[表6 使用gsql联机帮助](#zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_table52020644)。

    **表 6**  使用gsql联机帮助

    <a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_table52020644"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_row35168989"><th class="cellrowborder" valign="top" width="30.86%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p30115862"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p30115862"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p30115862"></a>描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="69.14%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p21681027"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p21681027"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p21681027"></a>示例</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_row11332742"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p45536881"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p45536881"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p45536881"></a>查看版权信息</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p65926177"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p65926177"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p65926177"></a>\copyright</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_r7c9e6b30c75c476a8ed11c601c5875bc"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a>查看openGauss支持的SQL语句的帮助</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a>查看openGauss支持的SQL语句的帮助</p>
    <p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a>例如，查看openGauss支持的所有SQL语句：</p>
    <a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"><span id="zh-cn_topic_0237152144_text9571150172310"><a name="zh-cn_topic_0237152144_text9571150172310"></a><a name="zh-cn_topic_0237152144_text9571150172310"></a>openGauss=# </span>\h
    Available help:
      ABORT                            
      ALTER APP WORKLOAD GROUP                  
    ... ...</pre>
    <p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a712672849f624615a2ced2b19306448a"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a712672849f624615a2ced2b19306448a"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_a712672849f624615a2ced2b19306448a"></a>例如，查看CREATE DATABASE命令的参数可使用下面的命令：</p>
    <a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"><span id="zh-cn_topic_0237152144_text833015519233"><a name="zh-cn_topic_0237152144_text833015519233"></a><a name="zh-cn_topic_0237152144_text833015519233"></a>openGauss=# </span>\help CREATE DATABASE
    Command:     CREATE DATABASE
    Description: create a new database
    Syntax:
    CREATE DATABASE database_name
         [ [ WITH ] {[ OWNER [=] user_name ]|
               [ TEMPLATE [=] template ]|
               [ ENCODING [=] encoding ]|
               [ LC_COLLATE [=] lc_collate ]|
               [ LC_CTYPE [=] lc_ctype ]|
               [ DBCOMPATIBILITY [=] compatibility_type ]|
               [ TABLESPACE [=] tablespace_name ]|
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_row37254344"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p64811887"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p64811887"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p64811887"></a>查看gsql命令的帮助</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p29030878"><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p29030878"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_zh-cn_topic_0058968146_p29030878"></a>例如，查看gsql支持的命令：</p>
    <a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><a name="zh-cn_topic_0237152144_zh-cn_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152144_zh-cn_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"><span id="zh-cn_topic_0237152144_text175211652112314"><a name="zh-cn_topic_0237152144_text175211652112314"></a><a name="zh-cn_topic_0237152144_text175211652112314"></a>openGauss=# </span>\?
    General
      \copyright             show FusionInsight LibrA usage and distribution terms
      \g [FILE] or ;         execute query (and send results to file or |pipe)
      \h(\help) [NAME]              help on syntax of SQL commands, * for all commands
      \parallel [on [num]|off] toggle status of execute (currently off)
      \q                     quit gsql
    ... ...</pre>
    </td>
    </tr>
    </tbody>
    </table>


### 命令参考<a name="section5729181711"></a>

详细的gsql参数请参见[表7 常用参数](#zh-cn_topic_0237152145_zh-cn_topic_0059779319_t5f35328143ec419983a1c23d13c46e49)、[表8 输入和输出参数](#zh-cn_topic_0237152145_zh-cn_topic_0059779319_t0233128ab394456c80e339179cb56739)、[表9 输出格式参数](#zh-cn_topic_0237152145_zh-cn_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8)和[表10 连接参数](#zh-cn_topic_0237152145_zh-cn_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68)。

**表 7**  常用参数

<a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_t5f35328143ec419983a1c23d13c46e49"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rf9b2bbe319a24d139970cf428f495efd"><th class="cellrowborder" valign="top" width="22.24%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="53.7%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a11229b9b997f438eb84506dae58a0287"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="24.060000000000002%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p192487379712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p192487379712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p192487379712"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rf751e9eceef243079acfc04a1b4dc221"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a>-c, --command=COMMAND</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a>声明gsql要执行一条字符串命令然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p156438509712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p156438509712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p156438509712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r6daf56fa49884c82aca97a902d28b79e"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a>-d, --dbname=DBNAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p272315995731"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p272315995731"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p272315995731"></a>指定想要连接的数据库名称。另外，gsql允许使用扩展的DBNAME，即'postgres[ql]://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&...]'或'[key=value] [...]'形式的连接串作为DBNAME，gsql将从连接串中解析连接信息，并优先使用这些信息。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p298498829712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p298498829712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p298498829712"></a>字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r9f41226b80114eda9b6529ce60d822cd"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a>-f, --file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431573395731"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431573395731"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431573395731"></a>使用文件作为命令源而不是交互式输入。gsql将在处理完文件后结束。如果FILENAME是-（连字符），则从标准输入读取。</p>
<div class="note" id="note111571487117"><a name="note111571487117"></a><a name="note111571487117"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p615715841110"><a name="p615715841110"></a><a name="p615715841110"></a>环境场景：一主一备（8U32G）。</p>
<p id="p18312311200"><a name="p18312311200"></a><a name="p18312311200"></a>实测：读取200M数据文件时，耗时约为8分钟21秒；</p>
<p id="p15359161141919"><a name="p15359161141919"></a><a name="p15359161141919"></a>读取500M数据文件时，耗时约为18分41秒。</p>
<p id="p669510210122"><a name="p669510210122"></a><a name="p669510210122"></a>建议：文件读取的时间随文件数据量逐渐增加，如果文件太大，中间异常时需要重新读取，同时会导致系统OS的IO过载，建议文件大小控制在500M左右。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p111442891021"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p111442891021"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p111442891021"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rb1dacbb49960481a8eaec18fcaa258c1"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p135042995731"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p135042995731"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p135042995731"></a>-l, --list</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7acc5297f2c24951829934906835788f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7acc5297f2c24951829934906835788f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7acc5297f2c24951829934906835788f"></a>列出所有可用的数据库，然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p214125089712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p214125089712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p214125089712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rbfc3635add4a41319b89eba9fc73414a"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a>-v, --set, --variable=NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a>设置gsql变量NAME为VALUE。</p>
<p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a49cd1e75c903484089d620390e736516"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a49cd1e75c903484089d620390e736516"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a49cd1e75c903484089d620390e736516"></a>变量的示例和详细说明请参见<a href="#zh-cn_topic_0237152142_zh-cn_topic_0059778819_zh-cn_topic_0058968129_li39134862">变量</a>。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p566915559712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p566915559712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p566915559712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r76e7d067a95b4153a7f539b41685ce3d"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa345ebc468534282a77d48941c169514"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa345ebc468534282a77d48941c169514"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa345ebc468534282a77d48941c169514"></a>-X, --no-gsqlrc</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p190458295731"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p190458295731"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p190458295731"></a>不读取启动文件（系统范围的gsqlrc或者用户的~/.gsqlrc都不读取）。</p>
<div class="note" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a>启动文件默认为~/.gsqlrc，或通过PSQLRC环境变量指定。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p286132639712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p286132639712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p286132639712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rde1104323b5d4638ae3c6eb9c7072d37"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a>-1 ("one"), --single-transaction</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a>当gsql使用-f选项执行脚本时，会在脚本的开头和结尾分别加上START TRANSACTION/COMMIT用以把整个脚本当作一个事务执行。这将保证该脚本完全执行成功，或者脚本无效。</p>
<div class="note" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a>如果脚本中已经使用了START TRANSACTION、COMMIT、ROLLBACK，则该选项无效。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p359730009712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p359730009712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p359730009712"></a>-</p>
</td>
</tr>
<tr id="row6846630151811"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a668af7282b3440f292ad8697de06b81d"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a>显示关于gsql命令行参数的帮助信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p281318939712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p281318939712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p281318939712"></a>-</p>
</td>
</tr>
<tr id="row384583019185"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>打印gsql版本信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a>-</p>
</td>
</tr>
<tr id="row384583019185"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-C, --enable-client-encryption</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>当使用-C参数连接本地数据库或者远程连接数据库时，可通过该选项打开全密态数据库开关。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a>-</p>
</td>
</tr>
</tbody>
</table>
**表 8**  输入和输出参数

<a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_t0233128ab394456c80e339179cb56739"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ra3cdda570ced41129194efd2e680304d"><th class="cellrowborder" valign="top" width="14.67%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p401260795738"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p401260795738"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p401260795738"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="62.59%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a906241fb7455400e916a9a38a9868a71"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="22.74%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p485266179117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p485266179117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p485266179117"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r064106ad54d9435fad3424d5a2377089"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7891e008bcdc4c288c069694adc59550"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a>-a, --echo-all</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p239453995738"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p239453995738"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p239453995738"></a>在读取行时向标准输出打印所有内容。</p>
<div class="caution" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p383419339117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p383419339117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p383419339117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rb4b58fbd180a4bbeba2e3e52f0b74a56"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p19920195738"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p19920195738"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p19920195738"></a>-e, --echo-queries</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a>把所有发送给服务器的查询同时回显到标准输出。</p>
<div class="caution" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p186888699117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p186888699117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p186888699117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_re72e5fed55b746989e2d11b33e07c76f"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a>-E, --echo-hidden</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a>回显由\d和其他反斜杠命令生成的实际查询。</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p374034349117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p374034349117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p374034349117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_raaf263ab8e2c4891a204f1debeeb0b5a"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a>-k, --with-key=KEY</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a>使用gsql对导入的加密文件进行解密。</p>
<div class="notice" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><span class="noticetitle"> 须知：</span><div class="cautionbody"><a name="zh-cn_topic_0237152145_ul1039703419584"></a><a name="zh-cn_topic_0237152145_ul1039703419584"></a><ul id="zh-cn_topic_0237152145_ul1039703419584"></span><li>对于本身就是shell命令中的关键字符如单引号（'）或双引号（"），Linux shell会检测输入的单引号（'）或双引号（"）是否匹配。如果不匹配，shell认为用户没有输入完毕，会一直等待用户输入，从而不会进入到gsql程序。<li>不支持解密导入存储过程和函数。
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p97792999117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p97792999117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p97792999117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r649b2c557fa54148aad24f6edd10ad66"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4297ab2218f4028885186e84264e945"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a>-L, --log-file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a>除了正常的输出源之外，把所有查询输出记录到文件FILENAME中。</p>
<div class="caution" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><a name="zh-cn_topic_0237152145_ul1039703419584"></a><a name="zh-cn_topic_0237152145_ul1039703419584"></a><ul id="zh-cn_topic_0237152145_ul1039703419584"><li>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</li><li>此参数只保留查询结果到相应文件中，主要目标是为了查询结果能够更好更准确地被其他调用者（例如自动化运维脚本）解析；而不是保留gsql运行过程中的相关日志信息。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="row842903031919"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ac55a414323994f8caa7857a885ce1759"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a>-m, --maintenance</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a>允许在两阶段事务恢复期间连接<span id="zh-cn_topic_0237152145_text816123165217"><a name="zh-cn_topic_0237152145_text816123165217"></a><a name="zh-cn_topic_0237152145_text816123165217"></a>openGauss</span>。</p>
<div class="note" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a>该选项是一个开发选项，禁止用户使用，只限专业技术人员使用，功能是：使用该选项时，gsql可以连接到备机，用于校验主备机数据的一致性。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p89352579117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p89352579117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p89352579117"></a>-</p>
</td>
</tr>
<tr id="row1842811305194"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a>-n, --no-libedit</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a>关闭命令行编辑。</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p526672539117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p526672539117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p526672539117"></a>-</p>
</td>
</tr>
<tr id="row2042863016192"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a>-o, --output=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a5495253d5fc2465296d752e1198157c6"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a>将所有查询输出重定向到文件FILENAME。</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="row1642863041911"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a>-q, --quiet</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a>安静模式，执行时不会打印出额外信息。</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p381890689117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p381890689117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p381890689117"></a>缺省时gsql将打印许多其他输出信息。</p>
</td>
</tr>
<tr id="row342723051913"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p582042195738"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p582042195738"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p582042195738"></a>-s, --single-step</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a>单步模式运行。意味着每个查询在发往服务器之前都要提示用户，用这个选项也可以取消执行。此选项主要用于调试脚本。</p>
<div class="caution" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p410907699117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p410907699117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p410907699117"></a>-</p>
</td>
</tr>
<tr id="row1842753071910"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a>-S, --single-line</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a>单行运行模式，这时每个命令都将由换行符结束，像分号那样。</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p400179989117"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p400179989117"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p400179989117"></a>-</p>
</td>
</tr>
    <tr id="row384583019185"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-C, --enable-client-encryption</p></td><td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>当使用-C参数连接本地数据库或者远程连接数据库时，可通过该选项打开全密态数据库开关。</p></td><td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a>-</p></td></tr>
</tbody>
</table>



**表 9**  输出格式参数

<a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ra101278a50d349be83a64bb1915591f1"><th class="cellrowborder" valign="top" width="17.52%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a396cd422101544c9b9de39d172ab7175"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="64.25%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431994959135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431994959135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431994959135"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r06630a6cad7e4748aed20317124c2a03"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a>-A, --no-align</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a>切换为非对齐输出模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p94982399135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p94982399135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p94982399135"></a>缺省为对齐输出模式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r7f57d0e4831e486b95fbe023bae4bd94"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p120733695744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p120733695744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p120733695744"></a>-F, --field-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a>设置域分隔符（默认为“|”）。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p311598799135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p311598799135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p311598799135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r71cd46e7a1184ef4853d43846cc6a16b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a>-H, --html</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p253547695744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p253547695744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p253547695744"></a>打开HTML格式输出。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p409222479135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p409222479135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p409222479135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r6df99f3887c740f59d40136a614bc9d5"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a>-P, --pset=VAR[=ARG]</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a>在命令行上以\pset的风格设置打印选项。</p>
<div class="note" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a>这里必须用等号而不是空格分隔名称和值。例如，把输出格式设置为LaTeX，可以键入-P format=latex</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p263677209135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p263677209135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p263677209135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rb03ed3abf98f420b91c00270e8e124fb"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p425912095744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p425912095744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p425912095744"></a>-R, --record-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a>设置记录分隔符。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p554105779135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p554105779135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p554105779135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rdd5cd46088d544b5b90c8ddf7075a06b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a>开启在客户端操作中可以进行编辑的模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p590717879135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p590717879135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p590717879135"></a>缺省为关闭。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r3466981c1d824594921920fd9ddd1bf2"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p392666995744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p392666995744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p392666995744"></a>-t, --tuples-only</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p662507995744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p662507995744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p662507995744"></a>只打印行。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p200854709135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p200854709135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p200854709135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r4a7c6bdac04f4826aeef67c5a3aaef23"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a>-T, --table-attr=TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a>允许声明放在HTML table标签里的选项。</p>
<p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a>使用时请搭配参数“-H,--html”，指定为HTML格式输出。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p163103539135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p163103539135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p163103539135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rc0f8b59ecf8046489f865279cc92e667"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p271620295744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p271620295744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p271620295744"></a>-x, --expanded</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a>打开扩展表格式模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p460701889135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p460701889135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p460701889135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r70d9b0438762491c8bced4984a242043"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p837456095744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p837456095744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p837456095744"></a>-z, --field-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p748381795744"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p748381795744"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p748381795744"></a>设置非对齐输出模式的域分隔符为空。</p>
<p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a>使用时请搭配参数“-A, --no-align”，指定为非对齐输出模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p406977529135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p406977529135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p406977529135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r10eed4bf94ff49c7acc8e56dd2e2af7a"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a>-0, --record-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a36d383622634404baff9b73998c8f6dd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a>设置非对齐输出模式的记录分隔符为空。</p>
<p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a>使用时请搭配参数“-A, --no-align”，指定为非对齐输出模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p81836129135"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p81836129135"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p81836129135"></a>-</p>
</td>
</tr>
    <tr id="row384583019185"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-2, --pipeline</p></td><td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>使用管道传输密码，禁止在终端使用，必须和-c或者-f参数一起使用。</p></td><td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a>-</p></td></tr>
    <tr id="row384583019185"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-g,</p></td><td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>打印来自文件的所有SQL。</p></td><td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a>-</p></td></tr>
</tbody>
</table>

**表 10**  连接参数

<a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r7ae18844030f48148c25a09efc185001"><th class="cellrowborder" valign="top" width="22.720000000000002%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="52.28%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_rbc536c10a0524f93ba9dc04d86cae020"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p502015995754"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p502015995754"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p502015995754"></a>-h, --host=HOSTNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a>指定正在运行服务器的主机名或者Unix域套接字的路径。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a>如果省略主机名，gsql将通过Unix域套接字与本地主机的服务器相联，或者在没有Unix域套接字的机器上，通过TCP/IP与localhost连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r192a476e6aa84e1ba66b8a618b81b730"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a>-p, --port=PORT</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a>指定数据库服务器的端口号。</p>
<p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa087b88fe849401bbcba9de536673b28"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a>可以通过port参数修改默认端口号。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a>默认为<span id="text47021142550"><a name="text47021142550"></a><a name="text47021142550"></a>5432</span>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r88a7493b32594e16aa0e0b888f97cc64"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a>-U, --username=USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p106242695754"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p106242695754"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p106242695754"></a>指定连接数据库的用户。</p>
<div class="note" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0237152145_ul103034015494"></a><a name="zh-cn_topic_0237152145_ul103034015494"></a><ul id="zh-cn_topic_0237152145_ul103034015494"><li>通过该参数指定用户连接数据库时，需要同时提供用户密码用以身份验证。您可以通过交换方式输入密码，或者通过-W参数指定密码。</li><li>用户名中包含有字符$，需要在字符$前增加转义字符才可成功连接数据库。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a>字符串。默认使用与当前操作系统用户同名的用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_r2243c5af2de8467b89287880f4d71853"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a>-W, --password=PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a>当使用-U参数连接远端数据库时，可通过该选项指定密码。</p>
<div class="note" id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p258458395819"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p258458395819"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p258458395819"></a><span id="zh-cn_topic_0237152145_text589522816477"><a name="zh-cn_topic_0237152145_text589522816477"></a><a name="zh-cn_topic_0237152145_text589522816477"></a>数据库主节点</span>所在服务器后连接本地<span id="zh-cn_topic_0237152145_text1614217308475"><a name="zh-cn_topic_0237152145_text1614217308475"></a><a name="zh-cn_topic_0237152145_text1614217308475"></a>数据库主节点</span>实例时，默认使用trust连接，会忽略此参数。</p>
<p id="zh-cn_topic_0237152145_p785243765613"><a name="zh-cn_topic_0237152145_p785243765613"></a><a name="zh-cn_topic_0237152145_p785243765613"></a>用户密码中包含特殊字符“\”和“`”时，需要增加转义字符才可成功连接数据库。</p>
<p id="zh-cn_topic_0237152145_p71218323118"><a name="zh-cn_topic_0237152145_p71218323118"></a><a name="zh-cn_topic_0237152145_p71218323118"></a>如果用户未输入该参数，但是数据库连接需要用户密码，这时将出现交互式输入，请用户输入当前连接的密码。该密码最长长度为999字节，受限于GUC参数password_max_length的最大值。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p556353793842"><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p556353793842"></a><a name="zh-cn_topic_0237152145_zh-cn_topic_0059779319_zh-cn_topic_0058968145_p556353793842"></a>符合密码复杂度要求。</p>
</td>
</tr>
</tbody>
</table>


### 元命令参考<a name="section17631544132716"></a>

介绍使用openGauss数据库命令行交互工具登录数据库后，gsql所提供的元命令。所谓元命令就是在gsql里输入的任何以不带引号的反斜杠开头的命令。

**注意事项**

-   一个gsql元命令的格式是反斜杠后面紧跟一个动词，然后是任意参数。参数命令动词和其他参数以任意个空白字符间隔。

-   要在参数里面包含空白，必须用单引号把它引起来。要在这样的参数里包含单引号，可以在前面加一个反斜杠。任何包含在单引号里的内容都会被进一步进行类似C语言的替换：\\n（新行）、\\t（制表符）、\\b（退格）、\\r（回车）、\\f（换页）、\\digits（八进制表示的字符）、\\xdigits（十六进制表示的字符）。
-   ""包围的内容被当做一个命令行传入shell。该命令的输出（删除了结尾的新行）被当做参数值。
-   如果不带引号的参数以冒号（:）开头，它会被当做一个gsql变量，并且该变量的值最终会成为真正的参数值。
-   有些命令以一个SQL标识的名称（比如一个表）为参数。这些参数遵循SQL语法关于双引号的规则：不带双引号的标识强制转换成小写，而双引号保护字母不进行大小写转换，并且允许在标识符中使用空白。在双引号中，成对的双引号在结果名称中分析成一个双引号。比如，FOO“BAR”BAZ解析成fooBARbaz；而“A weird”“name”解析成“A weird”name。
-   对参数的分析在遇到另一个不带引号的反斜杠时停止。这里会认为是一个新的元命令的开始。特殊的双反斜杠序列（\\\\）标识参数的结尾并将继续分析后面的SQL语句（如果存在）。这样SQL和gsql命令可以自由的在一行里面混合。但是在任何情况下，一条元命令的参数不能延续超过行尾。

**元命令**

元命令的详细说明请参见[表11 一般的元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table23103470)、[表12 查询缓存区元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table8624338)、[表13 输入/输出元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table62130565)、[表14 显示信息元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table44907299)、[表16 格式化元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table53911699)、[表18 连接元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table37189353)、[表19 操作系统元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table32146234)、[表20 变量元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table50076468)和[表22 大对象元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table55465693)。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>以下命令中所提到的FILE代表文件路径。此路径可以是绝对路径（如/home/gauss/file.txt），也可以是相对路径（file.txt，file.txt会默认在用户执行gsql命令所在的路径下创建）。

**表 11**  一般的元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table23103470"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row28068480"><th class="cellrowborder" valign="top" width="18.55%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58954407"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58954407"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58954407"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="52.31%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p10577654"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p10577654"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p10577654"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row51483670"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p9427759"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p9427759"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p9427759"></a>\copyright</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25450984"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25450984"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25450984"></a>显示openGauss的版本和版权信息。</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r47448e8d5f694bb8a3cbe2198bb2e5fb"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae1970eb0493b419ba68072716fd91574"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a>\g [FILE] or ;</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a>执行查询（并将结果发送到文件或管道）。</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row39075813"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11024304"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11024304"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11024304"></a>\h(\help) [NAME]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15079635"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15079635"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15079635"></a>给出指定SQL语句的语法帮助。</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a>如果没有给出NAME，gsql将列出可获得帮助的所有命令。如果NAME是一个星号（*），则显示所有SQL语句的语法帮助。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r0fed1aa4c7aa45179be733524d48d337"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p617954011537"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p617954011537"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p617954011537"></a>\parallel [on [num]|off]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a54a7382266914ba5979907a7f48880b7"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a>控制并发执行开关。</p>
<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"><li>on：打开控制并发执行开关，且最大并发数为num。</li><li>off：关闭控制并发执行开关。</li></ul>
<div class="note" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"><li>不支持事务中开启并发执行以及并发中开启事务。</li><li>不支持\d这类元命令的并发。</li><li>并发select返回结果混乱问题，此为客户可接受，core、进程停止响应不可接受。</li><li>不推荐在并发中使用set语句，否则导致结果与预期不一致。</li><li>不支持创建临时表！如需使用临时表，需要在开启parallel之前创建好，并在parallel内部使用。parallel内部不允许创建临时表。</li><li>\parallel执行时最多会启动num个独立的gsql进程连接服务器。</li><li>\parallel中所有作业的持续时间不能超过session_timeout，否则可能会导致并发执行过程中断连。</li><li>在\parallel on 之后一条或多条命令，会等到\parallel off执行后才会执行，因而，每个\parallel on需对应一个\parallel off，否则会导致\parallel on之后的命令无法执行。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a>num的默认值：1024。</p>
<div class="notice" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><span class="noticetitle"> 须知： </span><div class="noticebody"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_ul5543218319"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_ul5543218319"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_ul5543218319"><li>服务器能接受的最大连接数受max_connection及当前已有连接数限制。</li><li>设置num时请考虑服务器当前可接受的实际连接数合理指定。</li></ul>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row50763268"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18184039"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18184039"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18184039"></a>\q</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p56600007"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p56600007"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p56600007"></a>退出gsql程序。在一个脚本文件里，只在脚本终止的时候执行。</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p976241910229"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p976241910229"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p976241910229"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 12**  查询缓存区元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table8624338"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row60218325"><th class="cellrowborder" valign="top" width="36.25%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p45846132"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p45846132"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p45846132"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="63.74999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22549200"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22549200"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22549200"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row14545872"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37364956"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37364956"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37364956"></a>\e  [FILE]   [LINE]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6662621"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6662621"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6662621"></a>使用外部编辑器编辑查询缓冲区（或者文件）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row59963597"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25213208"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25213208"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25213208"></a>\ef [FUNCNAME [LINE]]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29003980"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29003980"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29003980"></a>使用外部编辑器编辑函数定义。如果指定了LINE（即行号），则光标会指到函数体的指定行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row59709228"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4609295"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4609295"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4609295"></a>\p</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p57959300"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p57959300"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p57959300"></a>打印当前查询缓冲区到标准输出。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row4733289"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47852110"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47852110"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47852110"></a>\r</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p67095562"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p67095562"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p67095562"></a>重置（或清空）查询缓冲区。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row54688265"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p564458"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p564458"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p564458"></a>\w FILE</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17110660"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17110660"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17110660"></a>将当前查询缓冲区输出到文件。</p>
</td>
</tr>
</tbody>
</table>
**表 13**  输入/输出元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table62130565"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row27656514"><th class="cellrowborder" valign="top" width="43%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25585200"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25585200"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25585200"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59135330"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59135330"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59135330"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row25232449"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53653520"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53653520"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53653520"></a>\copy { table [ ( column_list ) ] | ( query ) } { from | to } { filename | stdin | stdout | pstdin | pstdout } [ with ] [ binary ] [ oids ] [ delimiter [ as ] 'character' ] [ null [ as ] 'string' ] [ csv [ header ] [ quote [ as ] 'character' ] [ escape [ as ] 'character' ] [ force quote column_list | * ] [ force not null column_list ] [ force null column_list ] ][parallel integer]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_p1671244475815"><a name="zh-cn_topic_0237152146_p1671244475815"></a><a name="zh-cn_topic_0237152146_p1671244475815"></a>在任何psql客户端登录数据库成功后可以执行导入导出数据， 这是一个运行SQL COPY命令的操作，但不是读取或写入指定文件的服务器，而是读取或写入文件，并在服务器和本地文件系统之间路由数据。 这意味着文件的可访问性和权限是本地用户的权限，而不是服务器的权限，并且不需要数据库初始化用户权限。
    </p>
<div class="note" id="zh-cn_topic_0237152146_note1924115273417"><a name="zh-cn_topic_0237152146_note1924115273417"></a><a name="zh-cn_topic_0237152146_note1924115273417"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152146_p54222394915"><a name="zh-cn_topic_0237152146_p54222394915"></a><a name="zh-cn_topic_0237152146_p54222394915"></a>\COPY只适合小批量，格式良好的数据导入，不会对非法字符进行预处理，也无容错能力。导入数据应优先选择COPY。</p>
<p id="p156755320558"><a name="p156755320558"></a><a name="p156755320558"></a>\COPY 可以指定数据导入时的客户端数量，从而实现数据文件的并行导入，目前并发数范围为[1, 8]。</p>
<p id="p65691446135618"><a name="p65691446135618"></a><a name="p65691446135618"></a>\COPY并行导入目前存在以下约束：临时表的并行导入不支持、在事务内的并行导入不支持、对二进制文件的并行导入不支持、数据导入支持AES128加密时不支持。在这些情况下，即使指定了parallel参数，仍然会走非并行流程。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row67017286"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59691067"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59691067"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59691067"></a>\echo   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3138273"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3138273"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3138273"></a>把字符串写到标准输出。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row28244462"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6100063"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6100063"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6100063"></a>\i FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17880725"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17880725"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17880725"></a>从文件FILE中读取内容，并将其当作输入，执行查询。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row17761542"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29398782"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29398782"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29398782"></a>\i+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p32491118"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p32491118"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p32491118"></a>执行加密文件中的命令。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row23984611"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63705339"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63705339"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63705339"></a>\ir FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59858848"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59858848"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59858848"></a>和\i类似，只是相对于存放当前脚本的路径。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row1858722"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16338821"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16338821"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16338821"></a>\ir+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48376104"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48376104"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48376104"></a>和\i+类似，只是相对于存放当前脚本的路径。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row32731753"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p34026319"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p34026319"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p34026319"></a>\o   [FILE]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4668491"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4668491"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4668491"></a>把所有的查询结果发送到文件里。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row42016419"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47886808"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47886808"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47886808"></a>\qecho   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53626262"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53626262"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53626262"></a>把字符串写到查询结果输出流里。</p>
</td>
</tr>
</tbody>
</table>


>![](public_sys-resources/icon-note.gif) **说明：** 
>[表14 显示信息元命令](#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table44907299)中的选项S表示显示系统对象，PATTERN表示显示对象附加的描述信息。用来指定要被显示的对象名称。

**表 14**  显示信息元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table44907299"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row64036265"><th class="cellrowborder" valign="top" width="13%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p21471471"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p21471471"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p21471471"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="37%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p761538"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p761538"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p761538"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2566f5d7e6914403a8ab904249817030"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a>取值范围</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0237152146_p1357773513104"><a name="zh-cn_topic_0237152146_p1357773513104"></a><a name="zh-cn_topic_0237152146_p1357773513104"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row61175475"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18824504"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18824504"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18824504"></a>\d[S+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p35202815"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p35202815"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p35202815"></a>列出当前search_path中模式下所有的表、视图和序列。当search_path中不同模式存在同名对象时，只显示search_path中位置靠前模式下的同名对象。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p195771735131011"><a name="zh-cn_topic_0237152146_p195771735131011"></a><a name="zh-cn_topic_0237152146_p195771735131011"></a>列出当前search_path中模式下所有的表、视图和序列。</p>
<a name="zh-cn_topic_0237152146_screen870119314254"></a><a name="zh-cn_topic_0237152146_screen870119314254"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen870119314254"><span id="zh-cn_topic_0237152146_text19695054172319"><a name="zh-cn_topic_0237152146_text19695054172319"></a><a name="zh-cn_topic_0237152146_text19695054172319"></a>openGauss=# </span>\d</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row43094998"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1033944"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1033944"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1033944"></a>\d[S+]     NAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16640626"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16640626"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16640626"></a>列出指定表、视图和索引的结构。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p697532101841"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p697532101841"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p697532101841"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p357713531015"><a name="zh-cn_topic_0237152146_p357713531015"></a><a name="zh-cn_topic_0237152146_p357713531015"></a>假设存在表a，列出指定表a的结构。</p>
<a name="zh-cn_topic_0237152146_screen14668143818316"></a><a name="zh-cn_topic_0237152146_screen14668143818316"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen14668143818316"><span id="zh-cn_topic_0237152146_text1659919112244"><a name="zh-cn_topic_0237152146_text1659919112244"></a><a name="zh-cn_topic_0237152146_text1659919112244"></a>openGauss=# </span> \dtable+ a</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_rc676f2378e804a7db9ffa0f108079797"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a>\d+      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a>列出所有表、视图和索引。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a>如果声明了PATTERN，只显示名称匹配PATTERN的表、视图和索引。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p15577735191011"><a name="zh-cn_topic_0237152146_p15577735191011"></a><a name="zh-cn_topic_0237152146_p15577735191011"></a>列出所有名称以f开头的表、视图和索引。</p>
<a name="zh-cn_topic_0237152146_screen7795101223810"></a><a name="zh-cn_topic_0237152146_screen7795101223810"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen7795101223810"><span id="zh-cn_topic_0237152146_text1469339246"><a name="zh-cn_topic_0237152146_text1469339246"></a><a name="zh-cn_topic_0237152146_text1469339246"></a>openGauss=# </span>\d+ f*</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row17021576"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36570438"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36570438"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36570438"></a>\da[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1108737"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1108737"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1108737"></a>列出所有可用的聚集函数以及它们操作的数据类型和返回值类型。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a>如果声明了PATTERN，只显示名称匹配PATTERN的聚集函数。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p177201129103815"><a name="zh-cn_topic_0237152146_p177201129103815"></a><a name="zh-cn_topic_0237152146_p177201129103815"></a>列出所有名称以f开头可用的聚集函数以及它们操作的数据类型和返回值类型。</p>
<a name="zh-cn_topic_0237152146_screen127242029173818"></a><a name="zh-cn_topic_0237152146_screen127242029173818"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen127242029173818"><span id="zh-cn_topic_0237152146_text9351951248"><a name="zh-cn_topic_0237152146_text9351951248"></a><a name="zh-cn_topic_0237152146_text9351951248"></a>openGauss=# </span>\da f*</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row33501381"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29257302"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29257302"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p29257302"></a>\db[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p64560085"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p64560085"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p64560085"></a>列出所有可用的表空间。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a>如果声明了PATTERN，只显示名称匹配PATTERN的表空间。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p15577535101019"><a name="zh-cn_topic_0237152146_p15577535101019"></a><a name="zh-cn_topic_0237152146_p15577535101019"></a>列出所有名称以p开头的可用表空间。</p>
<a name="zh-cn_topic_0237152146_screen39531436154513"></a><a name="zh-cn_topic_0237152146_screen39531436154513"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen39531436154513"><span id="zh-cn_topic_0237152146_text93891164243"><a name="zh-cn_topic_0237152146_text93891164243"></a><a name="zh-cn_topic_0237152146_text93891164243"></a>openGauss=# </span>\db p*</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row22955407"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47448677"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47448677"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47448677"></a>\dc[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p66270656"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p66270656"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p66270656"></a>列出所有字符集之间的可用转换。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a>如果声明了PATTERN，只显示名称匹配PATTERN的转换。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p15577143512103"><a name="zh-cn_topic_0237152146_p15577143512103"></a><a name="zh-cn_topic_0237152146_p15577143512103"></a>列出所有字符集之间的可用转换。</p>
<a name="zh-cn_topic_0237152146_screen10277181254816"></a><a name="zh-cn_topic_0237152146_screen10277181254816"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen10277181254816"><span id="zh-cn_topic_0237152146_text584951211241"><a name="zh-cn_topic_0237152146_text584951211241"></a><a name="zh-cn_topic_0237152146_text584951211241"></a>openGauss=# </span>\dc *</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row9670257"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p45093353"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p45093353"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p45093353"></a>\dC[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28682990"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28682990"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28682990"></a>列出所有类型转换。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a>如果声明了PATTERN，只显示名称匹配PATTERN的转换。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p15772356108"><a name="zh-cn_topic_0237152146_p15772356108"></a><a name="zh-cn_topic_0237152146_p15772356108"></a>列出所有名称以c开头的类型转换。</p>
<a name="zh-cn_topic_0237152146_screen209676130533"></a><a name="zh-cn_topic_0237152146_screen209676130533"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen209676130533"><span id="zh-cn_topic_0237152146_text17999171352413"><a name="zh-cn_topic_0237152146_text17999171352413"></a><a name="zh-cn_topic_0237152146_text17999171352413"></a>openGauss=# </span>\dC c*</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row22085710"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44112084"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44112084"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44112084"></a>\dd[S]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16309022"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16309022"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16309022"></a>显示所有匹配PATTERN的描述。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a>如果没有给出参数，则显示所有可视对象。“对象”包括：聚集、函数、操作符、类型、关系（表、视图、索引、序列、大对象）、规则。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p165775358102"><a name="zh-cn_topic_0237152146_p165775358102"></a><a name="zh-cn_topic_0237152146_p165775358102"></a>列出所有可视对象。</p>
<a name="zh-cn_topic_0237152146_screen853411371558"></a><a name="zh-cn_topic_0237152146_screen853411371558"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen853411371558"><span id="zh-cn_topic_0237152146_text161020156244"><a name="zh-cn_topic_0237152146_text161020156244"></a><a name="zh-cn_topic_0237152146_text161020156244"></a>openGauss=# </span>\dd</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row2818067"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26936868"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26936868"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26936868"></a>\ddp       [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p12102568"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p12102568"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p12102568"></a>显示所有默认的使用权限。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a>如果指定了PATTERN，只显示名称匹配PATTERN的使用权限。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p2013319535553"><a name="zh-cn_topic_0237152146_p2013319535553"></a><a name="zh-cn_topic_0237152146_p2013319535553"></a>列出所有默认的使用权限。</p>
<a name="zh-cn_topic_0237152146_screen611671118568"></a><a name="zh-cn_topic_0237152146_screen611671118568"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen611671118568"><span id="zh-cn_topic_0237152146_text141271612240"><a name="zh-cn_topic_0237152146_text141271612240"></a><a name="zh-cn_topic_0237152146_text141271612240"></a>openGauss=# </span>\ddp</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row32410867"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65613749"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65613749"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65613749"></a>\dD[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22994959"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22994959"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22994959"></a>列出所有可用域。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a>如果声明了PATTERN，只显示名称匹配PATTERN的域。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p757763512103"><a name="zh-cn_topic_0237152146_p757763512103"></a><a name="zh-cn_topic_0237152146_p757763512103"></a>列出所有可用域。</p>
<a name="zh-cn_topic_0237152146_screen470324716013"></a><a name="zh-cn_topic_0237152146_screen470324716013"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen470324716013"><span id="zh-cn_topic_0237152146_text9949616112413"><a name="zh-cn_topic_0237152146_text9949616112413"></a><a name="zh-cn_topic_0237152146_text9949616112413"></a>openGauss=# </span>\dD</pre>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_row15593174194714"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_p85931944473"><a name="zh-cn_topic_0237152146_p85931944473"></a><a name="zh-cn_topic_0237152146_p85931944473"></a>\ded[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_p95931411475"><a name="zh-cn_topic_0237152146_p95931411475"></a><a name="zh-cn_topic_0237152146_p95931411475"></a>列出所有的Data Source对象。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_p05931043472"><a name="zh-cn_topic_0237152146_p05931043472"></a><a name="zh-cn_topic_0237152146_p05931043472"></a>如果声明了PATTERN，只显示名称匹配PATTERN的对象。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p457743571018"><a name="zh-cn_topic_0237152146_p457743571018"></a><a name="zh-cn_topic_0237152146_p457743571018"></a>列出所有的Data Source对象。</p>
<a name="zh-cn_topic_0237152146_screen64435207113"></a><a name="zh-cn_topic_0237152146_screen64435207113"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen64435207113"><span id="zh-cn_topic_0237152146_text28891517152416"><a name="zh-cn_topic_0237152146_text28891517152416"></a><a name="zh-cn_topic_0237152146_text28891517152416"></a>openGauss=# </span>\ded</pre>
</td>
</tr>
<tr id="row6665173254513"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51424905"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51424905"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51424905"></a>\det[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4667762"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4667762"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4667762"></a>列出所有的外部表。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a>如果声明了PATTERN，只显示名称匹配PATTERN的表。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1157773515101"><a name="zh-cn_topic_0237152146_p1157773515101"></a><a name="zh-cn_topic_0237152146_p1157773515101"></a>列出所有的外部表。</p>
<a name="zh-cn_topic_0237152146_screen1187219441618"></a><a name="zh-cn_topic_0237152146_screen1187219441618"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1187219441618"><span id="zh-cn_topic_0237152146_text686621812249"><a name="zh-cn_topic_0237152146_text686621812249"></a><a name="zh-cn_topic_0237152146_text686621812249"></a>openGauss=# </span>\det</pre>
</td>
</tr>
<tr id="row1466518322451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36274241"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36274241"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36274241"></a>\des[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52532403"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52532403"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52532403"></a>列出所有的外部服务器。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a>如果声明了PATTERN，只显示名称匹配PATTERN的服务器。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p14577163520106"><a name="zh-cn_topic_0237152146_p14577163520106"></a><a name="zh-cn_topic_0237152146_p14577163520106"></a>列出所有的外部服务器。</p>
<a name="zh-cn_topic_0237152146_screen471819181217"></a><a name="zh-cn_topic_0237152146_screen471819181217"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen471819181217"><span id="zh-cn_topic_0237152146_text12795219172412"><a name="zh-cn_topic_0237152146_text12795219172412"></a><a name="zh-cn_topic_0237152146_text12795219172412"></a>openGauss=# </span>\des</pre>
</td>
</tr>
<tr id="row1566443264520"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1141657"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1141657"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1141657"></a>\deu[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25365425"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25365425"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25365425"></a>列出用户映射信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a>如果声明了PATTERN，只显示名称匹配PATTERN的信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p2577153501020"><a name="zh-cn_topic_0237152146_p2577153501020"></a><a name="zh-cn_topic_0237152146_p2577153501020"></a>列出用户映射信息。</p>
<a name="zh-cn_topic_0237152146_screen969244719217"></a><a name="zh-cn_topic_0237152146_screen969244719217"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen969244719217"><span id="zh-cn_topic_0237152146_text197591120132412"><a name="zh-cn_topic_0237152146_text197591120132412"></a><a name="zh-cn_topic_0237152146_text197591120132412"></a>openGauss=# </span>\deu</pre>
</td>
</tr>
<tr id="row3663163284519"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37503373"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37503373"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37503373"></a>\dew[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59707645"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59707645"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p59707645"></a>列出封装的外部数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a>如果声明了PATTERN，只显示名称匹配PATTERN的数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p957710356104"><a name="zh-cn_topic_0237152146_p957710356104"></a><a name="zh-cn_topic_0237152146_p957710356104"></a>列出封装的外部数据。</p>
<a name="zh-cn_topic_0237152146_screen1325519129311"></a><a name="zh-cn_topic_0237152146_screen1325519129311"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1325519129311"><span id="zh-cn_topic_0237152146_text11688821132412"><a name="zh-cn_topic_0237152146_text11688821132412"></a><a name="zh-cn_topic_0237152146_text11688821132412"></a>openGauss=# </span>\dew</pre>
</td>
</tr>
<tr id="row196627321457"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p869443393148"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p869443393148"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p869443393148"></a>\df[antw][S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a>列出所有可用函数以及它们的参数和返回的数据类型。a代表聚集函数，n代表普通函数，t代表触发器，w代表窗口函数。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a>如果声明了PATTERN，只显示名称匹配PATTERN的函数。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p857783511019"><a name="zh-cn_topic_0237152146_p857783511019"></a><a name="zh-cn_topic_0237152146_p857783511019"></a>列出所有可用函数以及它们的参数和返回的数据类型。</p>
<a name="zh-cn_topic_0237152146_screen11242350437"></a><a name="zh-cn_topic_0237152146_screen11242350437"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen11242350437"><span id="zh-cn_topic_0237152146_text146961322132420"><a name="zh-cn_topic_0237152146_text146961322132420"></a><a name="zh-cn_topic_0237152146_text146961322132420"></a>openGauss=# </span>\df</pre>
</td>
</tr>
<tr id="row76611832104512"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63869018"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63869018"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63869018"></a>\dF[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6007965"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6007965"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6007965"></a>列出所有的文本搜索配置信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a>如果声明了PATTERN，只显示名称匹配PATTERN的配置信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1577183531020"><a name="zh-cn_topic_0237152146_p1577183531020"></a><a name="zh-cn_topic_0237152146_p1577183531020"></a>列出所有的文本搜索配置信息。</p>
<a name="zh-cn_topic_0237152146_screen46672584514"></a><a name="zh-cn_topic_0237152146_screen46672584514"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen46672584514"><span id="zh-cn_topic_0237152146_text2622523112418"><a name="zh-cn_topic_0237152146_text2622523112418"></a><a name="zh-cn_topic_0237152146_text2622523112418"></a>openGauss=# </span>\dF+</pre>
</td>
</tr>
<tr id="row14660153211451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4463500"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4463500"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4463500"></a>\dFd[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25999205"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25999205"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25999205"></a>列出所有的文本搜索字典。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a>如果声明了PATTERN，只显示名称匹配PATTERN的字典。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p185326114612"><a name="zh-cn_topic_0237152146_p185326114612"></a><a name="zh-cn_topic_0237152146_p185326114612"></a>列出所有的文本搜索字典。</p>
<a name="zh-cn_topic_0237152146_screen29572448619"></a><a name="zh-cn_topic_0237152146_screen29572448619"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen29572448619"><span id="zh-cn_topic_0237152146_text145941524132419"><a name="zh-cn_topic_0237152146_text145941524132419"></a><a name="zh-cn_topic_0237152146_text145941524132419"></a>openGauss=# </span>\dFd</pre>
</td>
</tr>
<tr id="row5660432134513"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17477084"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17477084"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17477084"></a>\dFp[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6357682"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6357682"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6357682"></a>列出所有的文本搜索分析器。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a>如果声明了PATTERN，只显示名称匹配PATTERN的分析器。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1457719355104"><a name="zh-cn_topic_0237152146_p1457719355104"></a><a name="zh-cn_topic_0237152146_p1457719355104"></a>列出所有的文本搜索分析器。</p>
<a name="zh-cn_topic_0237152146_screen411214129251"></a><a name="zh-cn_topic_0237152146_screen411214129251"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen411214129251"><span id="zh-cn_topic_0237152146_text1576432516240"><a name="zh-cn_topic_0237152146_text1576432516240"></a><a name="zh-cn_topic_0237152146_text1576432516240"></a>openGauss=# </span>\dFp</pre>
</td>
</tr>
<tr id="row16659113217451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27934725"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27934725"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27934725"></a>\dFt[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48120228"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48120228"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48120228"></a>列出所有的文本搜索模板。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a>如果声明了PATTERN，只显示名称匹配PATTERN的模板。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p11577135161010"><a name="zh-cn_topic_0237152146_p11577135161010"></a><a name="zh-cn_topic_0237152146_p11577135161010"></a>列出所有的文本搜索模板。</p>
<a name="zh-cn_topic_0237152146_screen167381037132518"></a><a name="zh-cn_topic_0237152146_screen167381037132518"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen167381037132518"><span id="zh-cn_topic_0237152146_text1061317268248"><a name="zh-cn_topic_0237152146_text1061317268248"></a><a name="zh-cn_topic_0237152146_text1061317268248"></a>openGauss=# </span>\dFt</pre>
</td>
</tr>
<tr id="row10658193213457"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28358554"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28358554"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28358554"></a>\dg[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25942514"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25942514"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25942514"></a>列出所有数据库角色。</p>
<div class="note" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_note44053031"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_note44053031"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_note44053031"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7501312"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7501312"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7501312"></a>因为用户和群组的概念被统一为角色，所以这个命令等价于\du。为了和以前兼容，所以保留两个命令。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a32f80f790283435da1375c11d802f12f"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a>如果指定了PATTERN，只显示名称匹配PATTERN的角色。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p857783591012"><a name="zh-cn_topic_0237152146_p857783591012"></a><a name="zh-cn_topic_0237152146_p857783591012"></a>列出名称为‘j_e’所有数据库角色。</p>
<a name="zh-cn_topic_0237152146_screen1551485112618"></a><a name="zh-cn_topic_0237152146_screen1551485112618"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1551485112618"><span id="zh-cn_topic_0237152146_text194481927132410"><a name="zh-cn_topic_0237152146_text194481927132410"></a><a name="zh-cn_topic_0237152146_text194481927132410"></a>openGauss=# </span>\dg j?e</pre>
</td>
</tr>
<tr id="row165715323454"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28670734"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28670734"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p28670734"></a>\dl</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7129116"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7129116"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7129116"></a>\lo_list的别名，显示一个大对象的列表。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0235149909644fb29014368530ea6c25"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0235149909644fb29014368530ea6c25"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0235149909644fb29014368530ea6c25"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p9577235131013"><a name="zh-cn_topic_0237152146_p9577235131013"></a><a name="zh-cn_topic_0237152146_p9577235131013"></a>列出所有的大对象。</p>
<a name="zh-cn_topic_0237152146_screen1850163162713"></a><a name="zh-cn_topic_0237152146_screen1850163162713"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1850163162713"><span id="zh-cn_topic_0237152146_text1453432816248"><a name="zh-cn_topic_0237152146_text1453432816248"></a><a name="zh-cn_topic_0237152146_text1453432816248"></a>openGauss=# </span>\dl</pre>
</td>
</tr>
<tr id="row2065511324451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48869151"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48869151"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48869151"></a>\dL[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p452647"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p452647"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p452647"></a>列出可用的程序语言。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a88540567ac694184bc9ea78c56427f98"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a>如果指定了PATTERN，只列出名称匹配PATTERN的语言。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1457723514101"><a name="zh-cn_topic_0237152146_p1457723514101"></a><a name="zh-cn_topic_0237152146_p1457723514101"></a>列出可用的程序语言。</p>
<a name="zh-cn_topic_0237152146_screen9767751132710"></a><a name="zh-cn_topic_0237152146_screen9767751132710"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen9767751132710"><span id="zh-cn_topic_0237152146_text1042912912240"><a name="zh-cn_topic_0237152146_text1042912912240"></a><a name="zh-cn_topic_0237152146_text1042912912240"></a>openGauss=# </span>\dL</pre>
</td>
</tr>
    <tr id="row13654232194512"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50784313"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50784313"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50784313"></a>\dm[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19888706"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19888706"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19888706"></a>列出物化视图。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8664b27a89e141ff950b213413125c90"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a>如果指定了PATTERN，只列出名称匹配PATTERN的物化视图。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p9578133541012"><a name="zh-cn_topic_0237152146_p9578133541012"></a><a name="zh-cn_topic_0237152146_p9578133541012"></a>列出物化视图。
</p>
<a name="zh-cn_topic_0237152146_screen16471162442818"></a><a name="zh-cn_topic_0237152146_screen16471162442818"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen16471162442818"><span id="zh-cn_topic_0237152146_text172978300242"><a name="zh-cn_topic_0237152146_text172978300242"></a><a name="zh-cn_topic_0237152146_text172978300242"></a>openGauss=# </span> \dm</pre>
</td>
</tr>
<tr id="row13654232194512"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50784313"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50784313"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50784313"></a>\dn[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19888706"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19888706"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19888706"></a>列出所有的模式（名称空间）。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8664b27a89e141ff950b213413125c90"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a>如果声明了PATTERN，只列出名称匹配PATTERN的模式名。缺省时，只列出用户创建的模式。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p9578133541012"><a name="zh-cn_topic_0237152146_p9578133541012"></a><a name="zh-cn_topic_0237152146_p9578133541012"></a>列出所有名称以d开头的模式以及相关信息。</p>
<a name="zh-cn_topic_0237152146_screen16471162442818"></a><a name="zh-cn_topic_0237152146_screen16471162442818"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen16471162442818"><span id="zh-cn_topic_0237152146_text172978300242"><a name="zh-cn_topic_0237152146_text172978300242"></a><a name="zh-cn_topic_0237152146_text172978300242"></a>openGauss=# </span> \dn+ d*</pre>
</td>
</tr>
<tr id="row96531732164518"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p43691002"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p43691002"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p43691002"></a>\do[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22510532"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22510532"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22510532"></a>列出所有可用的操作符以及它们的操作数和返回的数据类型。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a>如果声明了PATTERN，只列出名称匹配PATTERN的操作符。缺省时，只列出用户创建的操作符。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1810350172816"><a name="zh-cn_topic_0237152146_p1810350172816"></a><a name="zh-cn_topic_0237152146_p1810350172816"></a>列出所有可用的操作符以及它们的操作数和返回的数据类型。</p>
<a name="zh-cn_topic_0237152146_screen19243171018299"></a><a name="zh-cn_topic_0237152146_screen19243171018299"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen19243171018299"><span id="zh-cn_topic_0237152146_text119663172413"><a name="zh-cn_topic_0237152146_text119663172413"></a><a name="zh-cn_topic_0237152146_text119663172413"></a>openGauss=# </span>\do</pre>
</td>
</tr>
<tr id="row6653193214516"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26311271"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26311271"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26311271"></a>\dO[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p503566"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p503566"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p503566"></a>列出排序规则。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a>如果声明了PATTERN，只列出名称匹配PATTERN的规则。缺省时，只列出用户创建的规则。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p957863531018"><a name="zh-cn_topic_0237152146_p957863531018"></a><a name="zh-cn_topic_0237152146_p957863531018"></a>列出排序规则。</p>
<a name="zh-cn_topic_0237152146_screen484512358294"></a><a name="zh-cn_topic_0237152146_screen484512358294"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen484512358294"><span id="zh-cn_topic_0237152146_text4151332112414"><a name="zh-cn_topic_0237152146_text4151332112414"></a><a name="zh-cn_topic_0237152146_text4151332112414"></a>openGauss=# </span>\dO</pre>
</td>
</tr>
<tr id="row1565163254515"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27963622"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27963622"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27963622"></a>\dp [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48039187"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48039187"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48039187"></a>列出一列可用的表、视图以及相关的权限信息。</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p429958739351"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p429958739351"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p429958739351"></a>\dp显示结果如下：</p>
<pre class="screen" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a>rolename=xxxx/yyyy  --赋予一个角色的权限</pre>
<pre class="screen" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a>=xxxx/yyyy  --赋予public的权限 </pre>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a>xxxx表示赋予的权限，yyyy表示授予这个权限的角色。权限的参数说明请参见<a href="#zh-cn_topic_0237152146_zh-cn_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e">表 权限的参数说明</a>。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a>如果指定了PATTERN，只列出名称匹配PATTERN的表、视图。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p13219183511301"><a name="zh-cn_topic_0237152146_p13219183511301"></a><a name="zh-cn_topic_0237152146_p13219183511301"></a>列出一列可用的表、视图以及相关的权限信息。</p>
<a name="zh-cn_topic_0237152146_screen1582855623016"></a><a name="zh-cn_topic_0237152146_screen1582855623016"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1582855623016"><span id="zh-cn_topic_0237152146_text1589713323244"><a name="zh-cn_topic_0237152146_text1589713323244"></a><a name="zh-cn_topic_0237152146_text1589713323244"></a>openGauss=# </span>\dp</pre>
</td>
</tr>
<tr id="row147111714194611"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51988786"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51988786"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51988786"></a>\drds [PATTERN1 [PATTERN2]]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50342148"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50342148"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p50342148"></a>列出所有修改过的配置参数。这些设置可以是针对角色的、针对数据库的或者同时针对两者的。PATTERN1和PATTERN2表示要列出的角色PATTERN和数据库PATTERN。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a>如果声明了PATTERN，只列出名称匹配PATTERN的规则。缺省或指定*时，则会列出所有设置。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p16578103521013"><a name="zh-cn_topic_0237152146_p16578103521013"></a><a name="zh-cn_topic_0237152146_p16578103521013"></a>列出postgres数据库所有修改过的配置参数。</p>
<a name="zh-cn_topic_0237152146_screen1059193118474"></a><a name="zh-cn_topic_0237152146_screen1059193118474"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1059193118474"><span id="zh-cn_topic_0237152146_text471983313246"><a name="zh-cn_topic_0237152146_text471983313246"></a><a name="zh-cn_topic_0237152146_text471983313246"></a>openGauss=# </span>\drds * postgres</pre>
</td>
</tr>
<tr id="row1371120147466"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p33900150"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p33900150"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p33900150"></a>\dT[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18359055"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18359055"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18359055"></a>列出所有的数据类型。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a>如果指定了PATTERN，只列出名称匹配PATTERN的类型。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p115789354101"><a name="zh-cn_topic_0237152146_p115789354101"></a><a name="zh-cn_topic_0237152146_p115789354101"></a>列出所有的数据类型。</p>
<a name="zh-cn_topic_0237152146_screen20987133092411"></a><a name="zh-cn_topic_0237152146_screen20987133092411"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen20987133092411"><span id="zh-cn_topic_0237152146_text20620134182410"><a name="zh-cn_topic_0237152146_text20620134182410"></a><a name="zh-cn_topic_0237152146_text20620134182410"></a>openGauss=# </span>\dT</pre>
</td>
</tr>
<tr id="row3711914134612"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6205284"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6205284"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6205284"></a>\du[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7550250"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7550250"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7550250"></a>列出所有数据库角色。</p>
<div class="note" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_note843393"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_note843393"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_note843393"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p23208538"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p23208538"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p23208538"></a>因为用户和群组的概念被统一为角色，所以这个命令等价于\dg。为了和以前兼容，所以保留两个命令。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a>如果指定了PATTERN，则只列出名称匹配PATTERN的角色。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p13578123512103"><a name="zh-cn_topic_0237152146_p13578123512103"></a><a name="zh-cn_topic_0237152146_p13578123512103"></a>列出所有数据库角色。</p>
<a name="zh-cn_topic_0237152146_screen5126254102311"></a><a name="zh-cn_topic_0237152146_screen5126254102311"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen5126254102311"><span id="zh-cn_topic_0237152146_text1645911353245"><a name="zh-cn_topic_0237152146_text1645911353245"></a><a name="zh-cn_topic_0237152146_text1645911353245"></a>openGauss=# </span>\du</pre>
</td>
</tr>
<tr id="row15710141412469"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44712736"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44712736"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44712736"></a>\dE[S+]   [PATTERN]</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15625431"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15625431"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15625431"></a>\di[S+]    [PATTERN]</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44539665"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44539665"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44539665"></a>\ds[S+]   [PATTERN]</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p41206969"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p41206969"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p41206969"></a>\dt[S+]    [PATTERN]</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3741605"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3741605"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3741605"></a>\dv[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52895139"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52895139"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52895139"></a>这一组命令，字母E、i、s、t和v分别代表着外部表、索引、序列、表和视图。可以以任意顺序指定其中一个或者它们的组合来列出这些对象。例如：\dit列出所有的索引和表。在命令名称后面追加+，则每一个对象的物理尺寸以及相关的描述也会被列出。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a>如果指定了PATTERN，只列出名称匹配该PATTERN的对象。默认情况下只会显示用户创建的对象。通过PATTERN或者S修饰符可以把系统对象包括在内。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p145781358102"><a name="zh-cn_topic_0237152146_p145781358102"></a><a name="zh-cn_topic_0237152146_p145781358102"></a>列出所有的索引和视图。</p>
<a name="zh-cn_topic_0237152146_screen1078582519238"></a><a name="zh-cn_topic_0237152146_screen1078582519238"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1078582519238"><span id="zh-cn_topic_0237152146_text14567136172411"><a name="zh-cn_topic_0237152146_text14567136172411"></a><a name="zh-cn_topic_0237152146_text14567136172411"></a>openGauss=# </span>\div</pre>
</td>
</tr>
<tr id="row16710714114611"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6007243"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6007243"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6007243"></a>\dx[+]      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16824664"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16824664"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16824664"></a>列出安装数据库的扩展信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p504320559452"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p504320559452"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p504320559452"></a>如果指定了PATTERN，则只列出名称匹配PATTERN的扩展信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1557883591019"><a name="zh-cn_topic_0237152146_p1557883591019"></a><a name="zh-cn_topic_0237152146_p1557883591019"></a>列出安装数据库的扩展信息。</p>
<a name="zh-cn_topic_0237152146_screen1453833842112"></a><a name="zh-cn_topic_0237152146_screen1453833842112"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1453833842112"><span id="zh-cn_topic_0237152146_text462873722415"><a name="zh-cn_topic_0237152146_text462873722415"></a><a name="zh-cn_topic_0237152146_text462873722415"></a>openGauss=# </span>\dx</pre>
</td>
</tr>
<tr id="row7710111411469"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51840186"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51840186"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51840186"></a>\l[+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p42178773"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p42178773"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p42178773"></a>列出服务器上所有数据库的名称、所有者、字符集编码以及使用权限。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p155789357107"><a name="zh-cn_topic_0237152146_p155789357107"></a><a name="zh-cn_topic_0237152146_p155789357107"></a>列出服务器上所有数据库的名称、所有者、字符集编码以及使用权限。</p>
<a name="zh-cn_topic_0237152146_screen1802747162019"></a><a name="zh-cn_topic_0237152146_screen1802747162019"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1802747162019"><span id="zh-cn_topic_0237152146_text1652813862413"><a name="zh-cn_topic_0237152146_text1652813862413"></a><a name="zh-cn_topic_0237152146_text1652813862413"></a>openGauss=# </span> \l</pre>
</td>
</tr>
<tr id="row571041411469"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6254336"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6254336"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p6254336"></a>\sf[+]   FUNCNAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36839216"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36839216"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36839216"></a>显示函数的定义。</p>
<div class="note" id="zh-cn_topic_0237152146_note122310174019"><a name="zh-cn_topic_0237152146_note122310174019"></a><a name="zh-cn_topic_0237152146_note122310174019"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152146_p162891010406"><a name="zh-cn_topic_0237152146_p162891010406"></a><a name="zh-cn_topic_0237152146_p162891010406"></a>对于带圆括号的函数名，需要在函数名两端添加双引号，并且在双引号后面加上参数类型列表。参数类型列表两端添加圆括号。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p0578183514109"><a name="zh-cn_topic_0237152146_p0578183514109"></a><a name="zh-cn_topic_0237152146_p0578183514109"></a>假设存在函数function_a和函数名带圆括号的函数func()name，列出函数的定义。</p>
<a name="zh-cn_topic_0237152146_screen1786051111619"></a><a name="zh-cn_topic_0237152146_screen1786051111619"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen1786051111619"><span id="zh-cn_topic_0237152146_text638443952418"><a name="zh-cn_topic_0237152146_text638443952418"></a><a name="zh-cn_topic_0237152146_text638443952418"></a>openGauss=# </span>\sf function_a
<span id="zh-cn_topic_0237152146_text5284104010240"><a name="zh-cn_topic_0237152146_text5284104010240"></a><a name="zh-cn_topic_0237152146_text5284104010240"></a>openGauss=# </span>\sf 
"func()name"(argtype1, argtype2)</pre>
</td>
</tr>
<tr id="row1571016146465"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a>\z      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0237152146_p1183133819816"><a name="zh-cn_topic_0237152146_p1183133819816"></a><a name="zh-cn_topic_0237152146_p1183133819816"></a>列出数据库中所有表、视图和序列以及它们相关的访问特权。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a>如果给出任何pattern ，则被当成一个正则表达式，只显示匹配的表、视图、序列。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0237152146_p1357863513102"><a name="zh-cn_topic_0237152146_p1357863513102"></a><a name="zh-cn_topic_0237152146_p1357863513102"></a>列出数据库中所有表、视图和序列以及它们相关的访问特权。</p>
<a name="zh-cn_topic_0237152146_screen566811281995"></a><a name="zh-cn_topic_0237152146_screen566811281995"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0237152146_screen566811281995"><span id="zh-cn_topic_0237152146_text102123413247"><a name="zh-cn_topic_0237152146_text102123413247"></a><a name="zh-cn_topic_0237152146_text102123413247"></a>openGauss=# </span>\z</pre>
</td>
</tr>
</tbody>
</table>

**表 15**  权限的参数说明

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r6362dc74b9f541a69e0d66b9cf284ed9"><th class="cellrowborder" valign="top" width="28.060000000000002%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="71.94%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r388d73fb38384cdfb32ae9d850dd3401"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a>r</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a>SELECT：允许对指定的表、视图读取数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r33152e6936d14a5fb3737d02dde40f04"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a>w</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a>UPDATE：允许对指定表更新字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r54e23ae96ce24fa3aede38cbe8eb043d"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a>a</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a>INSERT：允许对指定表插入数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r8de13ba27c7e462d9c629e5cb99a8b2a"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a>d</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a>DELETE：允许删除指定表中的数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_rcbf3413a0b3c474083d3476a68ee82d5"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a>TRUNCATE：允许清理指定表中的数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r6a6605f29d5d430bbd35b6de4aabb4a8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a5ee40940bee042b499a2e70404371fef"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aec64f9601e594f128b3817b192621bcd"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a>REFERENCES：允许创建外键约束。由于当前不支持外键，所以该参数暂不生效。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r64aba48201764746bc641840af6cf98f"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a>TRIGGER：允许在指定表上创建触发器。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r72c53b1c15e6415382fbcadb80b0a2ab"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a>EXECUTE：允许使用指定的函数以及利用这些函数实现的操作符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ra57588e97fc8463a9da73c485f9ba3e9"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a504572d638854d92831fe94aaf5487f2"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a>U</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a>USAGE：</p>
<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"><li>对于过程语言，允许用户在创建函数时，指定过程语言。</li><li>对于模式，允许访问包含在指定模式中的对象。</li><li>对于序列，允许使用nextval函数。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r277c4595c8bb4eeeafdb11a78d0faeb7"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p338039211735"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p338039211735"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p338039211735"></a>C</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p474496711735"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p474496711735"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p474496711735"></a>CREATE：</p>
<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u337820fef33842c0b9199979155abf15"><li>对于数据库，允许在该数据库里创建新的模式。</li><li>对于模式，允许在该模式中创建新的对象。</li><li>对于表空间，允许在其中创建表以及允许创建数据库和模式的时候把该表空间指定为其缺省表空间。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_recdf18f778b44aefb363a58d7d9078a5"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p961003311735"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p961003311735"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p961003311735"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a>CONNECT：允许用户连接到指定的数据库。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r4b9cfb178de547a3aab1ef5c119895dd"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a>T</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p872203911735"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p872203911735"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p872203911735"></a>TEMPORARY：允许创建临时表。</p>
</td>
<tr id="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778035_a0e169399f67e46549d44019f32ac5843"><a name="zh-cn_topic_0059778035_a0e169399f67e46549d44019f32ac5843"></a><a name="zh-cn_topic_0059778035_a0e169399f67e46549d44019f32ac5843"></a>A</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778035_a4da2514518ce45c5b47b734f53990918"><a name="zh-cn_topic_0059778035_a4da2514518ce45c5b47b734f53990918"></a><a name="zh-cn_topic_0059778035_a4da2514518ce45c5b47b734f53990918"></a>ALTER：允许用户修改指定对象的属性。</p>
</td>
</tr>
<tr id="row12699926104310"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="p48401237112817"><a name="p48401237112817"></a><a name="p48401237112817"></a>P</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="p68402373287"><a name="p68402373287"></a><a name="p68402373287"></a>DROP：允许用户删除指定的对象。</p>
</td>
</tr>
<tr id="row1081033311431"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="p390785382818"><a name="p390785382818"></a><a name="p390785382818"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="p1690725362816"><a name="p1690725362816"></a><a name="p1690725362816"></a>COMMENT：允许用户定义或修改指定对象的注释。</p>
</td>
</tr>
<tr id="row1866182920433"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="p543020142918"><a name="p543020142918"></a><a name="p543020142918"></a>i</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="p1943116032917"><a name="p1943116032917"></a><a name="p1943116032917"></a>INDEX：允许用户在指定表上创建索引。</p>
</td>
</tr>
<tr id="row203032119432"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="p1768111932919"><a name="p1768111932919"></a><a name="p1768111932919"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="p1868113942919"><a name="p1868113942919"></a><a name="p1868113942919"></a>VACUUM：允许用户对指定的表执行ANALYZE和VACUUM操作。</p>
</td>
</tr>
<tr id="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_r2005c4e9bd924590a921dc3e81672ac1"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p616168911735"><a name="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p616168911735"></a><a name="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p616168911735"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"><a name="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a><a name="zh-cn_topic_0287275991_zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a>给前面权限的授权选项。</p>
</td>
</tr>
</tr>
</tbody>
</table>

**表 16**  格式化元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table53911699"></a>

<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row23785826"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19011743"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19011743"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p19011743"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18693083"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18693083"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18693083"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row6577016"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11347706"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11347706"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11347706"></a>\a</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p60515607"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p60515607"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p60515607"></a>对齐模式和非对齐模式之间的切换。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_redf0249c3f5d46fa9e110c5096e8c514"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a>\C   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a>把正在打印的表的标题设置为一个查询的结果或者取消这样的设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row27385651"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3645265"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3645265"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3645265"></a>\f     [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26831088"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26831088"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26831088"></a>对于不对齐的查询输出，显示或者设置域分隔符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row48520085"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37812775"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37812775"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p37812775"></a>\H</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"><li>若当前模式为文本格式，则切换为HTML输出格式。</li><li>若当前模式为HTML格式，则切换回文本格式。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row8534616"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20215335"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20215335"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20215335"></a>\pset NAME  [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26829471"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26829471"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p26829471"></a>设置影响查询结果表输出的选项。NAME的取值见<a href="#zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table22053343">表 可调节的打印选项</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row55470150"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p54115012"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p54115012"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p54115012"></a>\t    [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p10649401"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p10649401"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p10649401"></a>切换输出的字段名的信息和行计数脚注。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row44427513"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44110692"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44110692"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44110692"></a>\T   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36044674"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36044674"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p36044674"></a>指定在使用HTML输出格式时放在table标签里的属性。如果参数为空，不设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row14964377"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4155021"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4155021"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4155021"></a>\x   [on|off|auto]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1012450"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1012450"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p1012450"></a>切换扩展行格式。</p>
</td>
</tr>
</tbody>
</table>

**表 17**  可调节的打印选项

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table22053343"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row34213901"><th class="cellrowborder" valign="top" width="21.130000000000003%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25176457"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25176457"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25176457"></a>选项</p>
</th>
<th class="cellrowborder" valign="top" width="38.830000000000005%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p46637289"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p46637289"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p46637289"></a>选项说明</p>
</th>
<th class="cellrowborder" valign="top" width="40.040000000000006%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p250729112140"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p250729112140"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p250729112140"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row50968660"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48693618"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48693618"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48693618"></a>border</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25806188"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25806188"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25806188"></a>value必须是一个数字。通常这个数字越大，表的边界就越宽线就越多，但是这个取决于特定的格式。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u9e306a34717c43a59f58c07052b41040"><li>在HTML格式下，取值范围为大于0的整数。</li><li>在其他格式下，取值范围：<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ub622df75c508441da63e8e13ddf63633"><li>0：无边框</li><li>1：内部分隔线</li><li>2：台架</li></ul>
</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row34608783"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p35270535"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p35270535"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p35270535"></a>expanded (或x)</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p32046081"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p32046081"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p32046081"></a>在正常和扩展格式之间切换。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"><li>当打开扩展格式时，查询结果用两列显示，字段名称在左、数据在右。这个模式在数据无法放进通常的“水平”模式的屏幕时很有用。</li><li>在正常格式下，当查询输出的格式比屏幕宽时，用扩展格式。正常格式只对aligned和wrapped格式有用。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row48999878"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p13471594"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p13471594"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p13471594"></a>fieldsep</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4665381"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4665381"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4665381"></a>声明域分隔符来实现非对齐输出。这样就可以创建其他程序希望的制表符或逗号分隔的输出。要设置制表符域分隔符，键入\pset fieldsep '\t'。缺省域分隔符是 '|' (竖条符)。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row27640281"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p14913811"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p14913811"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p14913811"></a>fieldsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47973175"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47973175"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47973175"></a>声明域分隔符来实现非对齐输出到零字节。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row33391988"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4025501"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4025501"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p4025501"></a>footer</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15783270"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15783270"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15783270"></a>用来切换脚注。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row45950588"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63319442"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63319442"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p63319442"></a>format</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18107603"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18107603"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18107603"></a>设置输出格式。允许使用唯一缩写（这意味着一个字母就够了）。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a>取值范围：</p>
<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"><li>unaligned：写一行的所有列在一条直线上中，当前活动字段分隔符分隔。</li><li>aligned：此格式是标准的，可读性最好的文本输出。</li><li>wrapped：类似aligned，但是包装跨行的宽数据值，使其适应目标字段的宽度输出。</li><li>html：把表输出为可用于文档里的对应标记语言。输出不是完整的文档。</li><li>latex：把表输出为可用于文档里的对应标记语言。输出不是完整的文档。</li><li>troff-ms：把表输出为可用于文档里的对应标记语言。输出不是完整的文档。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row2985006"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15611992"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15611992"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15611992"></a>null</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p2385004"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p2385004"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p2385004"></a>打印一个字符串，用来代替一个null值。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ade941eac80e642e6910f938c77f7831d"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a>缺省是什么都不打印，这样很容易和空字符串混淆。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row50084564"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p56659409"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p56659409"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p56659409"></a>numericlocale</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17751162"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17751162"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17751162"></a>切换分隔小数点左边的数值的区域相关的分组符号。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"><li>on：显示指定的分隔符。</li><li>off：不显示分隔符。</li></ul>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a>忽略此参数，显示默认的分隔符。</p>
</td>
</tr>
<tr id="row1331233795812"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16938075"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16938075"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p16938075"></a>pager</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p23113433"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p23113433"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p23113433"></a>控制查询和gsql帮助输出的分页器。如果设置了环境变量PAGER，输出将被指向到指定程序，否则使用系统缺省。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"><li>on：当输出到终端且不适合屏幕显示时，使用分页器。</li><li>off：不使用分页器。</li><li>always：当输出到终端无论是否符合屏幕显示时，都使用分页器。</li></ul>
</td>
</tr>
<tr id="row73114373584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58586323"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58586323"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58586323"></a>recordsep</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p43971123"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p43971123"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p43971123"></a>声明在非对齐输出格式时的记录分隔符。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad59b22af1b5742b2b336903c65197255"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a>-</p>
</td>
</tr>
<tr id="row7310173713589"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27386289"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27386289"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27386289"></a>recordsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p54316068"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p54316068"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p54316068"></a>声明在非对齐输出到零字节时的记录分隔符。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a>-</p>
</td>
</tr>
<tr id="row130916372586"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p46302507"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p46302507"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p46302507"></a>tableattr（或T）</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48381391"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48381391"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p48381391"></a>声明放在html输出格式中HTML table标签的属性（例如：cellpadding或bgcolor）。注意：这里可能不需要声明border，因为已经在\pset border里用过了。如果没有给出value，则不设置表的属性。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a>-</p>
</td>
</tr>
<tr id="row2030903719584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3641760"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3641760"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p3641760"></a>title</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p34572433"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p34572433"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p34572433"></a>为随后打印的表设置标题。这个可以用于给输出一个描述性标签。如果没有给出value，不设置标题。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a>-</p>
</td>
</tr>
<tr id="row1130816371584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53767637"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53767637"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53767637"></a>tuples_only （或者t）</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25003860"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25003860"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25003860"></a>在完全显示和只显示实际的表数据之间切换。完全显示将输出像列头、标题、各种脚注等信息。在tuples_only模式下，只显示实际的表数据。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a>-</p>
</td>
</tr>
    <tr id="row1130816371584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53767637"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53767637"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53767637"></a>feedback</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25003860"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25003860"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p25003860"></a>切换是否输出结果行数。</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a>-</p>
</td>
</tr>
</tbody>
</table>


**表 18**  连接元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table37189353"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row51130770"><th class="cellrowborder" valign="top" width="21.490000000000002%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47951669"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47951669"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47951669"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="52.56999999999999%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58880018"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58880018"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58880018"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p665642669562"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p665642669562"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p665642669562"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row4552143"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p30341711"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p30341711"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p30341711"></a>\c[onnect]    [DBNAME|- USER|- HOST|- PORT|-]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22048137"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22048137"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22048137"></a>连接到一个新的数据库（当前数据库为postgres）。当数据库名称长度超过63个字节时，默认前63个字节有效，连接到前63个字节对应的数据库，但是gsql的命令提示符中显示的数据库对象名仍为截断前的名称。</p>
<div class="note" id="zh-cn_topic_0237152146_note131214284146"><a name="zh-cn_topic_0237152146_note131214284146"></a><a name="zh-cn_topic_0237152146_note131214284146"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152146_p91237286143"><a name="zh-cn_topic_0237152146_p91237286143"></a><a name="zh-cn_topic_0237152146_p91237286143"></a>重新建立连接时，如果切换数据库登录用户，将可能会出现交互式输入，要求输入新用户的连接密码。该密码最长长度为999字节，受限于GUC参数password_max_length的最大值。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p229965059562"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p229965059562"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p229965059562"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row28507487"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p13150509"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p13150509"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p13150509"></a>\encoding [ENCODING]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51975191"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51975191"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p51975191"></a>设置客户端字符编码格式。</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p507776499562"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p507776499562"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p507776499562"></a>不带参数时，显示当前的编码格式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row10803172"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65742650"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65742650"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65742650"></a>\conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20139181"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20139181"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20139181"></a>输出当前连接的数据库的信息。</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p237561539562"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p237561539562"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p237561539562"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 19**  操作系统元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table32146234"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row57810541"><th class="cellrowborder" valign="top" width="21.87%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52142277"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52142277"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p52142277"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="47.11%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p62774893"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p62774893"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p62774893"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="31.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row51601549"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18975950"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18975950"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p18975950"></a>\cd       [DIR]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p60656983"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p60656983"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p60656983"></a>切换当前的工作目录。</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row9041943"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p61308768"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p61308768"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p61308768"></a>\setenv NAME    [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p30861763"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p30861763"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p30861763"></a>设置环境变量NAME为VALUE，如果没有给出VALUE值，则不设置环境变量。</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row66697655"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p33800946"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p33800946"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p33800946"></a>\timing   [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20643789"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20643789"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20643789"></a>以毫秒为单位显示每条SQL语句的执行时间。</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"><li>on表示打开显示。</li><li>off表示关闭显示。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row11936946"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27368537"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27368537"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p27368537"></a>\!      [COMMAND]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p49855699"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p49855699"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p49855699"></a>返回到一个单独的Unix shell或者执行Unix命令COMMAND。</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 20**  变量元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table50076468"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row64340398"><th class="cellrowborder" valign="top" width="32.86%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44189784"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44189784"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p44189784"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="67.14%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22602779"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22602779"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p22602779"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row18885790"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53353993"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53353993"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p53353993"></a>\prompt     [TEXT] NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20243739"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20243739"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p20243739"></a>提示用户用文本格式来指定变量名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row39029041"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7235720"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7235720"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p7235720"></a>\set     [NAME [VALUE]]</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17332671"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17332671"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p17332671"></a>设置内部变量NAME为VALUE或者如果给出了多于一个值，设置为所有这些值的连接结果。如果没有给出第二个参数，只设变量不设值。</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a>有一些常用变量被gsql特殊对待，它们是一些选项设置，通常所有特殊对待的变量都是由大写字母组成(可能还有数字和下划线)。  <a href="#zh-cn_topic_0237152146_zh-cn_topic_0059778645_t03d91a7973ee453b918f0b755284f04d">表21</a>是一个所有特殊对待的变量列表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row40349036"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47046458"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47046458"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p47046458"></a>\unset NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11128665"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11128665"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p11128665"></a>不设置（或删除）gsql变量名。</p>
</td>
</tr>
</tbody>
</table>

**表 21**  \\set常用命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_t03d91a7973ee453b918f0b755284f04d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r19e99ba6f3f04b6f97fd0ad130d78d0f"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="56.769999999999996%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a>命令说明</p>
</th>
<th class="cellrowborder" valign="top" width="19.919999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p471742039289"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p471742039289"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p471742039289"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r0208fc73fe24438cb17ad61db02a099d"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p203874091536"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p203874091536"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p203874091536"></a>\set VERBOSITY value</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa30911dba01c4a479fd43a853d448966"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a>这个选项可以设置为值default， verbose，terse之一以控制错误报告的冗余行。</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p630141149289"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p630141149289"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p630141149289"></a>value取值范围：default， verbose，terse</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_ra1695111fa224cd0bb92c833a2fecada"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1e7758a45b574927adf70faba360ca76"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a>\set ON_ERROR_STOP value</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65312149222"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65312149222"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p65312149222"></a></p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p810542092426"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p810542092426"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p810542092426"></a>如果设置了这个变量，脚本处理将马上停止。如果该脚本是从另外一个脚本调用的，那个脚本也会按同样的方式停止。如果最外层的脚本不是从一次交互的gsql会话中调用的而是用-f选项调用的，gsql将返回错误代码3，以示这个情况与致命错误条件的区别（错误代码为1）。</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p38696389289"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p38696389289"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p38696389289"></a>value取值范围为：on/off，true/false，yes/no，1/0</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_r6f491220dd854416aa6e9743fdba68ab"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a>\set RETRY [retry_times]</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a>用于控制是否开启语句出错场景下的重试功能，参数retry_times用来指定最大重试次数，缺省值为5，取值范围为5-10。当重试功能已经开启时，再次执行\set RETRY可以关闭该功能。</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a>使用配置文件retry_errcodes.conf列举需要重试的错误码列表，该文件和gsql可执行程序位于同一级目录下。该配置文件为系统配置，非用户定义，不允许用户直接修改。</p>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p503225102104"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p503225102104"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p503225102104"></a>当前支持以下出错场景的重试：</p>
<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_udf951c403c774faa9781472afc924066"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_udf951c403c774faa9781472afc924066"></a><ul id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_udf951c403c774faa9781472afc924066"><li>YY001：TCP通信错误，Connection reset by peer</li><li>YY002：TCP通信错误，Connection reset by peer</li><li>YY003：锁超时，Lock wait timeout.../wait transaction xxx sync time exceed xxx</li><li>YY004：TCP通信错误，Connection timed out</li><li>YY005：SET命令发送失败，ERROR SET query</li><li>YY006：内存申请失败，memory is temporarily unavailable</li><li>YY007：通信库错误，Memory allocate error</li><li>YY008：通信库错误，No data in buffer</li><li>YY009：通信库错误，Close because release memory</li><li>YY010：通信库错误，TCP disconnect</li><li>YY011：通信库错误，SCTP disconnect</li><li>YY012：通信库错误，Stream closed by remote</li><li>YY013：通信库错误，Wait poll unknown error</li><li>YY014,YY015,53200,08006,08000,57P01,XX003,XX009等</li></ul>
<p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a>同时，出错时gsql会查询<span id="text516315564533"><a name="text516315564533"></a><a name="text516315564533"></a>数据库节点</span>的连接状态，当状态异常时会sleep 1分钟再进行重试，能够覆盖大部分主备切换场景下的出错重试。</p>
<div class="note" id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><ol id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"><li>不支持事务块中的语句错误重试；</li><li>不支持通过ODBC、JDBC接口查询的出错重试；</li><li>含有unlogged表的sql语句，不支持节点故障后的出错重试；</li><li>gsql客户端本身出现的错误，不在重跑考虑范围之内；</li></ol>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p215476199289"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p215476199289"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p215476199289"></a>retry_times取值范围为：5-10</p>
</td>
</tr>
</tbody>
</table>
**表 22**  大对象元命令

<a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_table55465693"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row47399046"><th class="cellrowborder" valign="top" width="28.249999999999996%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p14117557"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p14117557"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p14117557"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="71.75%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p2671501"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p2671501"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p2671501"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_row5164076"><td class="cellrowborder" valign="top" width="28.249999999999996%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15636991"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15636991"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p15636991"></a>\lo_list</p>
</td>
<td class="cellrowborder" valign="top" width="71.75%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58636730"><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58636730"></a><a name="zh-cn_topic_0237152146_zh-cn_topic_0059778645_zh-cn_topic_0058968158_p58636730"></a>显示一个目前存储在该数据库里的所有openGauss大对象和提供给他们的注释。</p>
</td>
</tr>
</tbody>
</table>

**PATTERN**

很多\\d命令都可以用一个PATTERN参数来指定要被显示的对象名称。在最简单的情况下，PATTERN正好就是该对象的准确名称。在PATTERN中的字符通常会被变成小写形式（就像在SQL名称中那样），例如\\dt FOO将会显示名为foo的表。就像在SQL名称中那样，把PATTERN放在双引号中可以阻止它被转换成小写形式。如果需要在一个PATTERN中包括一个真正的双引号字符，则需要把它写成两个相邻的双引号，这同样是符合SQL引用标识符的规则。例如，\\dt "FOO""BAR"将显示名为FOO"BAR（不是foo"bar）的表。和普通的SQL名称规则不同，不能只在PATTERN的一部分周围放上双引号，例如\\dt FOO"FOO"BAR将会显示名为fooFOObar的表。

不使用PATTERN参数时，\\d命令会显示当前schema搜索路径中可见的全部对象——这等价于用\*作为PATTERN。所谓对象可见是指可以直接用名称引用该对象，而不需要用schema来进行限定。要查看数据库中所有的对象而不管它们的可见性，可以把\*.\*用作PATTERN。

如果放在一个PATTERN中，\*将匹配任意字符序列（包括空序列），而?会匹配任意的单个字符（这种记号方法就像 Unix shell 的文件名PATTERN一样）。例如，\\dt int\*会显示名称以int开始的表。但是如果被放在双引号内，\*和?就会失去这些特殊含义而变成普通的字符。

包含一个点号（.）的PATTERN被解释为一个schema名称模式后面跟上一个对象名称模式。例如，\\dt foo\*.\*bar\*会显示名称以foo开始的schema中所有名称包括bar的表。如果没有出现点号，那么模式将只匹配当前schema搜索路径中可见的对象。同样，双引号内的点号会失去其特殊含义并且变成普通的字符。

高级用户可以使用字符类等正则表达式记法，如\[0-9\]可以匹配任意数字。所有的正则表达式特殊字符都按照POSIX正则表达式所说的工作。以下字符除外：

-   .会按照上面所说的作为一种分隔符。
-   \*会被翻译成正则表达式记号.\*。
-   ?会被翻译成.。
-   $则按字面意思匹配。

根据需要，可以通过书写?、\(_R_+|\)、\(_R_|\)和_R_?来分别模拟PATTERN字符.、_R_\*和_R_?。$不需要作为一个正则表达式字符，因为PATTERN必须匹配整个名称，而不是像正则表达式的常规用法那样解释（换句话说，$会被自动地追加到PATTERN上）。如果不希望该PATTERN的匹配位置被固定，可以在开头或者结尾写上\*。注意在双引号内，所有的正则表达式特殊字符会失去其特殊含义并且按照其字面意思进行匹配。另外，在操作符名称PATTERN中（即\\do的PATTERN参数），正则表达式特殊字符也按照字面意思进行匹配。

### 常见问题处理<a name="section1780814211263"></a>

**连接性能问题**

-   开启了log\_hostname，但是配置了错误的DNS导致的连接性能问题。

    在连接上数据库，通过“show log\_hostname”语句，检查数据库中是否开启了log\_hostname参数。

    如果开启了相关参数，那么数据库内核会通过DNS反查客户端所在机器的主机名。这时如果数据库主节点配置了不正确的/不可达的DNS服务器，那么会导致数据库建立连接过程较慢。此参数的更多信息，详见《开发者指南》中“GUC参数说明 \> 错误报告和日志 \> 记录日志的内容”章节中关于“log\_hostname”的描述。

-   数据库内核执行初始化语句较慢导致的性能问题。

    此种情况定位较难，可以尝试使用Linux的跟踪命令：strace。

    ```
    strace gsql -U MyUserName -W MyPassWord -d postgres -h 127.0.0.1 -p 23508 -r -c '\q'
    ```

    此时便会在屏幕上打印出数据库的连接过程。比如较长时间停留在下面的操作上：

    ```
    sendto(3, "Q\0\0\0\25SELECT VERSION()\0", 22, MSG_NOSIGNAL, NULL, 0) = 22
    poll([{fd=3, events=POLLIN|POLLERR}], 1, -1) = 1 ([{fd=3, revents=POLLIN}])
    ```

    此时便可以确定是数据库执行“SELECT VERSION\(\)”语句较慢。

    在连接上数据库后，便可以通过执行“explain performance select version\(\)”语句来确定初始化语句执行较慢的原因。更多信息，详见《开发者指南》中“性能调优 \> SQL调优指南 \> SQL执行计划介绍”章节。

    另外还有一种场景不太常见：由于数据库主节点所在机器的磁盘满或故障，此时所查询等受影响，无法进行用户认证，导致连接过程挂起，表现为假死。解决此问题清理数据库主节点的数据盘空间便可。

-   TCP连接创建较慢问题。

    此问题可以参考上面的初始化语句较慢排查的做法，通过strace跟踪，如果长时间停留在：

    ```
    connect(3, {sa_family=AF_FILE, path="/home/test/tmp/gaussdb_llt1/.s.PGSQL.61052"}, 110) = 0
    ```

    或者

    ```
    connect(3, {sa_family=AF_INET, sin_port=htons(61052), sin_addr=inet_addr("127.0.0.1")}, 16) = -1 EINPROGRESS (Operation now in progress)
    ```

    那么说明客户端与数据库端建立物理连接过慢，此时应当检查网络是否存在不稳定、网络吞吐量太大的问题。


**创建连接故障**

-   gsql: could not connect to server: No route to host

    此问题一般是指定了不可达的地址或者端口导致的。请检查-h参数与-p参数是否添加正确。

-   gsql: FATAL:  Invalid username/password,login denied.

    此问题一般是输入了错误的用户名和密码导致的，请联系数据库管理员，确认用户名和密码的正确性。

-   gsql: FATAL:  Forbid remote connection with trust method!

    数据库由于安全问题，禁止远程登录时使用trust模式。这时需要修改pg\_hba.conf里的连接认证信息。具体的设置信息请参见：《开发者指南》中“管理数据库安全 \> 客户端接入认证 \> 配置文件参考”章节。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >请不要修改pg\_hba.conf中openGauss主机的相关设置，否则可能导致数据库功能故障。建议业务应用部署在openGauss之外，而非openGauss内部。

-   连接数据库，添加“-h 127.0.0.1”可以连接，去掉后无法连接问题。

    通过执行SQL语句“show unix\_socket\_directory”检查数据库主节点使用的Unix套接字目录，是否与shell中的环境变量$PGHOST一致。

    如果检查结果不一致，那么修改PGHOST环境变量到GUC参数unix\_socket\_directory指向的目录便可。

    关于unix\_socket\_directory的更多信息，详见《开发者指南》中“GUC参数说明 \> 连接和认证 \> 连接设置”章节中的说明。

-   The "libpq.so" loaded mismatch the version of gsql, please check it.

    此问题是由于环境中使用的libpq.so的版本与gsql的版本不匹配导致的，请通过“ldd gsql”命令确认当前加载的libpq.so的版本，并通过修改LD\_LIBRARY\_PATH环境变量来加载正确的libpq.so。

-   gsql: symbol lookup error: xxx/gsql: undefined symbol: libpqVersionString

    此问题是由于环境中使用的libpq.so的版本与gsql的版本不匹配导致的（也有可能是环境中存在PostgreSQL的libpq.so），请通过“ldd gsql”命令确认当前加载的libpq.so的版本，并通过修改LD\_LIBRARY\_PATH环境变量来加载正确的libpq.so。


-   gsql: connect to server failed: Connection timed out

    Is the server running on host "xx.xxx.xxx.xxx" and accepting TCP/IP connections on port xxxx?

    此问题是由于网络连接故障造成。请检查客户端与数据库服务器间的网络连接。如果发现从客户端无法PING到数据库服务器端，则说明网络连接出现故障。请联系网络管理人员排查解决。

    ```
    ping -c 4 10.10.10.1
    PING 10.10.10.1 (10.10.10.1) 56(84) bytes of data.
    From 10.10.10.1: icmp_seq=2 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=2 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=3 Destination Host Unreachable
    From 10.10.10.1 icmp_seq=4 Destination Host Unreachable
    --- 10.10.10.1 ping statistics ---
    4 packets transmitted, 0 received, +4 errors, 100% packet loss, time 2999ms
    ```

-   gsql: FATAL:  permission denied for database "postgres"

    DETAIL:  User does not have CONNECT privilege.

    此问题是由于用户不具备访问该数据库的权限，可以使用如下方法解决。

    1.  使用管理员用户dbadmin连接数据库。

        ```
        gsql -d postgres -U dbadmin -p 15400
        ```

    2.  赋予该用户访问数据库的权限。

        GRANT CONNECT ON DATABASE postgres TO user1;

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >实际上，常见的许多错误操作也可能产生用户无法连接上数据库的现象。如用户连接的数据库不存在，用户名或密码输入错误等。这些错误操作在客户端工具也有相应的提示信息。
        >
        >```
        >gsql -d postgres -p 15400
        >gsql: FATAL:  database "postgres" does not exist
        >gsql -d postgres -U user1 -W gauss@789 -p 15400
        >gsql: FATAL:  Invalid username/password,login denied.
        >```


-   gsql: FATAL:  sorry, too many clients already，active/non-active: 2/10/3.

    此问题是由于系统连接数量超过了最大连接数量。请联系数据库DBA进行会话连接数管理，释放无用会话。

    关于查看用户会话连接数的方法如[表23 查看会话连接数](#zh-cn_topic_0237152147_zh-cn_topic_0059779356_t8e166846f0204638bd83f2fd35f44585)。

    会话状态可以在视图PG\_STAT\_ACTIVITY中查看。无用会话可以使用函数pg\_terminate\_backend进行释放。

    ```
    select datid,pid,state from pg_stat_activity;
    ```

    ```
     datid |       pid       | state  
    -------+-----------------+--------
     13205 | 139834762094352 | active
     13205 | 139834759993104 | idle
    (2 rows)
    ```

    其中pid的值即为该会话的线程ID。根据线程ID结束会话。

    ```
    SELECT PG_TERMINATE_BACKEND(139834759993104);
    ```

    显示类似如下信息，表示结束会话成功。

    ```
    PG_TERMINATE_BACKEND
    ----------------------
     t
    (1 row)
    ```

    **表 23**  查看会话连接数

    <a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_t8e166846f0204638bd83f2fd35f44585"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_r32046f7f632b492891276dd6f4bf8999"><th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a>描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.58999999999999%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a>命令</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_rc644c3de5cac4e4891741cccf756b131"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a>查看指定用户的会话连接数上限。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a>执行如下命令查看连接到指定用户USER1的会话连接数上限。其中-1表示没有对用户user1设置连接数的限制。</p>
    <pre class="screen" id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a>SELECT ROLNAME,ROLCONNLIMIT FROM PG_ROLES WHERE ROLNAME='user1';
     rolname | rolconnlimit
    ---------+--------------
     user1    |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_r3ecf1d5dec914606a843db02e9fbd915"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a>查看指定数据库的会话连接数上限。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a>执行如下命令查看连接到指定数据库postgres的会话连接数上限。其中-1表示没有对数据库postgres设置连接数的限制。</p>
    <pre class="screen" id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a>SELECT DATNAME,DATCONNLIMIT FROM PG_DATABASE WHERE DATNAME='postgres';
    datname  | datconnlimit
    ----------+--------------
     postgres |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_rdc10c65ce85d49b38dede86bc6dcd1d1"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a>查看指定数据库已使用的会话连接数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a>执行如下命令查看指定数据库postgres上已使用的会话连接数。其中，1表示数据库postgres上已使用的会话连接数。</p>
        <pre class="screen" id="zh-cn_topic_0237152147_zh-cn_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a><a name="zh-cn_topic_0237152147_zh-cn_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a>SELECT COUNT(*) FROM PG_STAT_ACTIVITY WHERE DATNAME='postgres';
     count 
    \---------
         1
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>
    
    
    


-   gsql: wait xxx.xxx.xxx.xxx:xxxx timeout expired

    gsql在向数据库发起连接的时候，会有5分钟超时机制，如果在这个超时时间内，数据库未能正常的对客户端请求进行校验和身份认证，那么gsql会退出当前会话的连接过程，并报出如上错误。

    一般来说，此问题是由于连接时使用的-h参数及-p参数指定的连接主机及端口有误（即错误信息中的xxx部分），导致通信故障；极少数情况是网络故障导致。要排除此问题，请检查数据库的主机名及端口是否正确。

-   gsql: could not receive data from server: Connection reset by peer.

    同时，检查数据库主节点日志中出现类似如下日志“ FATAL: cipher file "/data/dbnode/server.key.cipher" has group or world access”，一般是由于数据目录或部分关键文件的权限被误操作篡改导致。请参照其他正常实例下的相关文件权限，修改回来便可。

-   gsql: FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.

    目标数据库主节点的pg\_hba.conf里配置了当前客户端IP使用“gss”方式来做认证，该认证算法不支持用作客户端的身份认证，请修改到"sha256"后再试。配置方法见《开发者指南》中“管理数据库安全 \> 客户端接入认证 \> 配置文件参考”章节 。

    >![](public_sys-resources/icon-note.gif) **说明：**
    >- 请不要修改pg\_hba.conf中openGauss主机的相关设置，否则可能导致数据库功能故障。
    >- 建议业务应用部署在openGauss之外，而非openGauss内部。
    


**其他故障**

-   出现因“总线错误”（Bus error）导致的core dump或异常退出

    一般情况下出现此种问题，是进程运行过程中加载的共享动态库（在Linux为.so文件）出现变化；或者进程二进制文件本身出现变化，导致操作系统加载机器的执行码或者加载依赖库的入口发生变化，操作系统出于保护目的将进程杀死，产生core dump文件。

    解决此问题，重试便可。同时请尽可能避免在升级等运维操作过程中，在openGauss内部运行业务程序，避免升级时因替换文件产生此问题。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >此故障的core dump文件的可能堆栈是dl\_main及其子调用，它是操作系统用来初始化进程做共享动态库加载的。如果进程已经初始化，但是共享动态库还未加载完成，严格意义上来说，进程并未完全启动。
