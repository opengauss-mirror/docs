# gsql<a name="EN-US_TOPIC_0249632261"></a>

**gsql**  is a database connection tool provided by openGauss and runs in the command-line interface \(CLI\). Users can use  **gsql**  to connect to a server and perform operations and maintenance on the server. In addition to basic functions for performing operations on a database,  **gsql**  provides several advanced features for users.

## Overview<a name="section18543185163212"></a>

**Basic Features**

-   **Connect to the database**: For details, see "Database Usage \> Connecting to a Database \> Using gsql to Connect to a Database \> Remotely Connecting to a Database" in the  _Developer Guide_.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >If the  **gsql**  client is used to connect to a database, the connection timeout period will be 5 minutes by default. If the database has not correctly set up a connection and authenticated the identity of the client within this period,  **gsql**  will time out and exit.
    >To resolve this problem, see  [FAQs](#section1780814211263).

-   **Run SQL statements**: Interactively entered SQL statements and specified SQL statements in a file can be run.
-   **Run meta-commands**: Meta-commands help the administrator view database object information, query cache information, format SQL output, and connect to a new database. For details about meta-commands, see  [Meta-Command Reference](#section17631544132716).

**Advanced Features**

[Table 1](#en-us_topic_0237152142_en-us_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d)  lists the advanced features of  **gsql**.

**Table  1**  Advanced features of gsql

<a name="en-us_topic_0237152142_en-us_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_r4b73260a43df46f6ba18d2326f63d3e8"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a>Feature Name</p>
</th>
<th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_re148610b2ba14890a4a2cbe1fb9f9cde"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a>Variables</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a><strong id="b74311861165"><a name="b74311861165"></a><a name="b74311861165"></a>gsql</strong> provides a variable feature that is similar to the <strong id="b144321861863"><a name="b144321861863"></a><a name="b144321861863"></a>shell</strong> command of Linux. The following <strong id="b8432564610"><a name="b8432564610"></a><a name="b8432564610"></a>\set</strong> meta-command of <strong id="b144321163620"><a name="b144321163620"></a><a name="b144321163620"></a>gsql</strong> can be used to set a variable:</p>
<pre class="screen" id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><strong id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a>\set</strong> <em id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a423967f56510409080e158d60d2b4c24"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a>varname value</em></pre>
<p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_aee7fac646c524c4db69194069d742fcf"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a>To delete a variable, run the following command:</p>
<pre class="screen" id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><strong id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a>\unset</strong> <em id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a>varname</em></pre>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"><li>A variable is a simple name-value pair, where the value can be any characters in any length.</li><li>Variable names must consist of case-sensitive letters (including non-Latin letters), digits, and underscores(_).</li><li>If the <strong id="b842352706113455"><a name="b842352706113455"></a><a name="b842352706113455"></a>\set</strong> <em id="i842352697113527"><a name="i842352697113527"></a><a name="i842352697113527"></a>varname</em> meta-command (without the second parameter) is used, the variable is set without a value specified.</li><li>If the <strong id="b6442191121310"><a name="b6442191121310"></a><a name="b6442191121310"></a>\set</strong> meta-command without parameters is used, values of all variables are displayed.</li></ul>
</div></div>
<p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a>For details about variable examples and descriptions, see <a href="#en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_li39134862">variables</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_r457b7479b8204694b14e69200bb8eb7b"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a>SQL substitution</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a>Common SQL statements can be set to variables using the variable feature of <strong id="b128741116131418"><a name="b128741116131418"></a><a name="b128741116131418"></a>gsql</strong> to simplify operations.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a38c61443f662466996d0824b10ea12fc"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a>For details about examples and descriptions about SQL substitution, see <a href="#en-us_topic_0287275991_li194391754476">SQL substitution</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_rebf3bc2093a1493db2962cb59d3ebe5e"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a>Customized prompt</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a>Prompts of <strong id="b17641142171417"><a name="b17641142171417"></a><a name="b17641142171417"></a>gsql</strong> can be customized. Prompts can be modified by changing the reserved variables of <strong id="b47111313151"><a name="b47111313151"></a><a name="b47111313151"></a>gsql</strong>: <em id="i871123201511"><a name="i871123201511"></a><a name="i871123201511"></a>PROMPT1</em>, <em id="i16711173121514"><a name="i16711173121514"></a><a name="i16711173121514"></a>PROMPT2</em>, and <em id="i1471143151517"><a name="i1471143151517"></a><a name="i1471143151517"></a>PROMPT3</em>.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a>These variables can be set to customized values or the values predefined by <strong id="b6662918181510"><a name="b6662918181510"></a><a name="b6662918181510"></a>gsql</strong>. For details, see <a href="#en-us_topic_0287275991_li163671421104717">Prompt</a>.</p>
</td>
</tr>
<tr id="row119681177486"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="p19969191713487"><a name="p19969191713487"></a><a name="p19969191713487"></a>Automatic command completion</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="p18873138184912"><a name="p18873138184912"></a><a name="p18873138184912"></a>According to the openGauss syntax rules, <strong id="b14117152419146"><a name="b14117152419146"></a><a name="b14117152419146"></a>gsql</strong> supports automatic command completion by pressing <strong id="b36961628164410"><a name="b36961628164410"></a><a name="b36961628164410"></a>Tab</strong>. This function is enabled when the <strong id="b18051636144413"><a name="b18051636144413"></a><a name="b18051636144413"></a>--with-readline</strong> option is specified during compilation and the <strong id="b1898165114418"><a name="b1898165114418"></a><a name="b1898165114418"></a>-r</strong> parameter is specified during client connection. For example, if you enter <strong id="b125973447459"><a name="b125973447459"></a><a name="b125973447459"></a>crea</strong> and then press <strong id="b14652105416459"><a name="b14652105416459"></a><a name="b14652105416459"></a>Tab</strong>, <strong id="b1435619841519"><a name="b1435619841519"></a><a name="b1435619841519"></a>gsql</strong> will change it to <strong id="b87494586459"><a name="b87494586459"></a><a name="b87494586459"></a>create</strong>.</p>
    <div class="note" id="note1039612365499"><a name="note1039612365499"></a><a name="note1039612365499"></a><span class="notetitle"> Note: </span><div class="notebody"><a name="ul19954323195114"></a><a name="ul19954323195114"></a><ul id="ul19954323195114"><li>Automatic completion of database SQL keywords such as SELECT, CREATE, and TABLE is supported.</li><li>Automatic completion of user-defined identifiers such as table names and view names is supported.</li><li>Automatic completion of meta-command options <strong>S</strong> and </strong>+</strong> is not supported.</li><li>Automatic completion of system catalogs prefixed with <strong>pg_</strong> is supported.</li><li>Completion of column types is not supported during table creation.</li><li>No completion is supported after the SELECT operation.</li><li>Automatic completion of constants and macros is not supported.</li><li>The <strong>select * from a,b...</strong> statement does not support automatic completion from the second table. The <strong>insert into t1 (col1, col2, ...)</strong> statement does not support automatic completion from the second column.</li><li>Automatic completion of parameters after <strong>with</strong> in the CREATE TABLESPACE statement is not supported.</li><li>The local and global indexes cannot be automatically completed during index creation, and the rebuild index cannot be automatically completed during index modification.</li><li>Automatic completion of parameters of the USERSET and SUSET levels in the SET statement is supported.</li><li>Automatic completion of IF EXISTS is not supported.</li><li>Automatic completion of <strong>Table name.Column name</strong> is not supported, for example, <strong>alter sequence &lt;name&gt; owned by tableName.colName, owned by</strong>.</li><li>Automatic completion of user-defined operators is not supported. If you copy and paste a command and press <strong>Tab</strong>, the command format may be incorrect. As a result, the command cannot be executed.</li><li>The special characters "\t\n@$><=;|&{()" have fixed meanings in SQL statements. If the user-defined table name contains these special characters, the entered SQL statement does not support automatic supplement from these special characters.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_r5efe8924bbc449bd97710897768e9a03"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a>Historical client operation records</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><strong id="b8182349111513"><a name="b8182349111513"></a><a name="b8182349111513"></a>gsql</strong> can record historical client operations. This function is enabled by specifying the <strong id="b15158155981514"><a name="b15158155981514"></a><a name="b15158155981514"></a>-r</strong> parameter when a client is connected. The number of historical records can be set using the <strong id="b927110188167"><a name="b927110188167"></a><a name="b927110188167"></a>\set</strong> command. For example, <strong id="b1227121811161"><a name="b1227121811161"></a><a name="b1227121811161"></a>\set HISTSIZE 50</strong> indicates that the number of historical records is set to <strong id="b112711718121616"><a name="b112711718121616"></a><a name="b112711718121616"></a>50</strong>. <strong id="b20271618161613"><a name="b20271618161613"></a><a name="b20271618161613"></a>\set HISTSIZE 0</strong> indicates that the operation history is not recorded.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><a name="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"><li>The default number of historical records is <strong id="b17611112917169"><a name="b17611112917169"></a><a name="b17611112917169"></a>32</strong>. The maximum number of historical records is <strong id="b1361119291165"><a name="b1361119291165"></a><a name="b1361119291165"></a>500</strong>. If interactively entered SQL commands contain Chinese characters, only the UTF-8 encoding environment is supported.</li><li>For security reasons, the records containing sensitive words, such as <strong id="b233375571620"><a name="b233375571620"></a><a name="b233375571620"></a>PASSWORD</strong> and <strong id="b14333125515168"><a name="b14333125515168"></a><a name="b14333125515168"></a>IDENTIFIED</strong>, are regarded sensitive and not recorded in historical information. This indicates that you cannot view these records in command output histories.</li></ul>
</div></div>
</td>
</tr>
</tbody>
</table>


-   <a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_li39134862"></a>Environment variables

    To set a variable, run the  **\\set**  meta-command of  **gsql**. For example, to set variable  _foo_  to  **bar**, run the following command:

    ```
    postgres=# \set foo bar
    ```

    To reference the value of a variable, add a colon \(:\) before the variable. For example, to view the value of variable  _foo_, run the following command:

    ```
    postgres=# \echo :foo
    bar
    ```

    The variable reference method is suitable for regular SQL statements and meta-commands.

    **gsql**  pre-defines some special variables and plans the values of these variables. To ensure compatibility with later versions, do not use these variables for other purposes. For details about special variables, see  [Table 2](#en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_table45814285).

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   All the special variables consist of upper-case letters, digits, and underscores\(\_\).
    >-   To view the default value of a special variable, run the  **\\echo :**_varname_  meta-command, for example,  **\\echo :**_DBNAME_.

    **Table  2**  Settings of special variables

    <a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_table45814285"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row63384495"><th class="cellrowborder" valign="top" width="15%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152142_en-us_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"><a name="en-us_topic_0237152142_en-us_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a>Environment Variable</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.000000000000004%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p56526422"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p56526422"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p56526422"></a>Setting Method</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p8552256"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p8552256"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p8552256"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row33504320"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a>DBNAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a>\set DBNAME <em id="en-us_topic_0237152142_en-us_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a>dbname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p15409553"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p15409553"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p15409553"></a>Name of the connected database. This variable is set again when a database is connected.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row52760526"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"><a name="en-us_topic_0237152142_en-us_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a>ECHO</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_se7962925861447dca766f73dd7e013c2"><a name="en-us_topic_0237152142_en-us_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a>\set ECHO all | queries</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul23658891"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul23658891"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul23658891"><li>If this variable is set to <strong id="b172661041223"><a name="b172661041223"></a><a name="b172661041223"></a>all</strong>, only the query information is displayed. This has the same effect as specifying the <strong id="b6876181111222"><a name="b6876181111222"></a><a name="b6876181111222"></a>-a</strong> parameter when <strong id="b6876141115225"><a name="b6876141115225"></a><a name="b6876141115225"></a>gsql</strong> is used to connect to a database.</li><li>If this variable is set to <strong id="b16168104618223"><a name="b16168104618223"></a><a name="b16168104618223"></a>queries</strong>, the command line and query information are displayed. This has the same effect as specifying the <strong id="b88601017233"><a name="b88601017233"></a><a name="b88601017233"></a>-e</strong> parameter when <strong id="b1986018013237"><a name="b1986018013237"></a><a name="b1986018013237"></a>gsql</strong> is used to connect to a database.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row64235341"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a>ECHO_HIDDEN</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a>\set ECHO_HIDDEN  on | off | noexec</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_ad216beecced64389b3555e3cd9425bee"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a>When a meta-command (such as <strong id="b566111312239"><a name="b566111312239"></a><a name="b566111312239"></a>\dg</strong>) is used to query database information, the value of this variable determines the query behavior.</p>
    <a name="en-us_topic_0237152142_en-us_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"><li>If this variable is set to <strong id="b14557132316233"><a name="b14557132316233"></a><a name="b14557132316233"></a>on</strong>, the query statements that are called by the meta-command are displayed, and then the query result is displayed. This has the same effect as specifying the <strong id="b357693318233"><a name="b357693318233"></a><a name="b357693318233"></a>-E</strong> parameter when <strong id="b457663320237"><a name="b457663320237"></a><a name="b457663320237"></a>gsql</strong> is used to connect to a database.</li><li>If this variable is set to <strong id="b1061851352414"><a name="b1061851352414"></a><a name="b1061851352414"></a>off</strong>, only the query result is displayed.</li><li>If this variable is set to <strong id="b7220172517243"><a name="b7220172517243"></a><a name="b7220172517243"></a>noexec</strong>, only the query information is displayed, and the query is not run.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row57132578"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a>ENCODING</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_s8c894db8f271491693385930cc9fa35c"><a name="en-us_topic_0237152142_en-us_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a>\set ENCODING   <em id="en-us_topic_0237152142_en-us_topic_0059778819_ad2956e867d26443388b2826907aa13cb"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a>encoding</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p44867126"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p44867126"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p44867126"></a>Character set encoding of the current client.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row40218171"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a>FETCH_COUNT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a>\set FETCH_COUNT <em id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_i537772514207"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_i537772514207"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_i537772514207"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237152142_en-us_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_u3d111cd6129641588ea85c80411d663a"><li>If the value is an integer greater than <strong id="b4186166202519"><a name="b4186166202519"></a><a name="b4186166202519"></a>0</strong>, for example, <em id="i1818611682512"><a name="i1818611682512"></a><a name="i1818611682512"></a>n</em>, <em id="i91861363251"><a name="i91861363251"></a><a name="i91861363251"></a>n</em> lines will be selected from the result set to the cache and displayed on the screen when the <strong id="b131862682511"><a name="b131862682511"></a><a name="b131862682511"></a>SELECT</strong> statement is run.</li><li>If this variable is not set or set to a value less than or equal to <strong id="b112461515102514"><a name="b112461515102514"></a><a name="b112461515102514"></a>0</strong>, all results are selected at a time to the cache when the <strong id="b112461415202510"><a name="b112461415202510"></a><a name="b112461415202510"></a>SELECT</strong> statement is run.</li></ul>
    <div class="note" id="en-us_topic_0237152142_en-us_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"><a name="en-us_topic_0237152142_en-us_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p528210501263"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p528210501263"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p528210501263"></a>A proper variable value helps reduce the memory usage. The recommended value range is from 100 to 1000.</p>
    </div></div>
    </td>
    </tr>
    <tr id="row13713400449"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a>HOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"><a name="en-us_topic_0237152142_en-us_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a>\set HOST <em id="en-us_topic_0237152142_en-us_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a>hostname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p37595654"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p37595654"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p37595654"></a>Specifies the name of a connected host.</p>
    </td>
    </tr>
    <tr id="row57139044416"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a>IGNOREEOF</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a>\set IGNOREEOF <em id="en-us_topic_0237152142_en-us_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul29414696"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul29414696"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul29414696"><li>If this variable is set to a number, for example, <strong id="b1576318962715"><a name="b1576318962715"></a><a name="b1576318962715"></a>10</strong>, the first nine EOF characters entered (generally by pressing <strong id="b13763199122715"><a name="b13763199122715"></a><a name="b13763199122715"></a>Ctrl</strong>+<strong id="b127634912276"><a name="b127634912276"></a><a name="b127634912276"></a>D</strong>) in <strong id="b576369182716"><a name="b576369182716"></a><a name="b576369182716"></a>gsql</strong> are ignored and the <strong id="b11763895277"><a name="b11763895277"></a><a name="b11763895277"></a>gsql</strong> program exits when <strong id="b37637911274"><a name="b37637911274"></a><a name="b37637911274"></a>Ctrl</strong>+<strong id="b1576315912277"><a name="b1576315912277"></a><a name="b1576315912277"></a>D</strong> is pressed tenth times.</li><li>If this variable is set to a non-numeric value, the default value is <strong id="b1851417357274"><a name="b1851417357274"></a><a name="b1851417357274"></a>10</strong>.</li><li>If this variable is deleted, <strong id="b19997104182713"><a name="b19997104182713"></a><a name="b19997104182713"></a>gsql</strong> exits when an EOF is entered.</li></ul>
    </td>
    </tr>
    <tr id="row1671212054413"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a08e91023634f47d7906a2efef2825441"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a>LASTOID</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a>\set LASTOID <em id="en-us_topic_0237152142_en-us_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a>oid</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p36781226"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p36781226"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p36781226"></a>Specifies the last OID, which is the value returned by an <strong id="b160625322720"><a name="b160625322720"></a><a name="b160625322720"></a>INSERT</strong> or <strong id="b1160695319272"><a name="b1160695319272"></a><a name="b1160695319272"></a>lo_import</strong> command. This variable is valid only before the output of the next SQL statement is displayed.</p>
    </td>
    </tr>
    <tr id="row137120054419"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_afc1b71b63894490e899801a959776fff"><a name="en-us_topic_0237152142_en-us_topic_0059778819_afc1b71b63894490e899801a959776fff"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_afc1b71b63894490e899801a959776fff"></a>ON_ERROR_ROLLBACK</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"><a name="en-us_topic_0237152142_en-us_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a>\set  ON_ERROR_ROLLBACK  on | interactive | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul22048505"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul22048505"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul22048505"><li>If the value is <strong id="b292551519281"><a name="b292551519281"></a><a name="b292551519281"></a>on</strong>, an error that may occur in a statement in a transaction block is ignored and the transaction continues.</li><li>If the value is <strong id="b33411324202813"><a name="b33411324202813"></a><a name="b33411324202813"></a>interactive</strong>, the error is ignored only in an interactive session.</li><li>If the value is <strong id="b33531232102819"><a name="b33531232102819"></a><a name="b33531232102819"></a>off</strong> (default value), the error triggers the rollback of the transaction block. In <strong id="b173133803019"><a name="b173133803019"></a><a name="b173133803019"></a>on_error_rollback-on</strong> mode, a <strong id="b19314148163017"><a name="b19314148163017"></a><a name="b19314148163017"></a>SAVEPOINT</strong> is set before each statement of a transaction block, and an error triggers the rollback of the transaction block.</li></ul>
    </td>
    </tr>
    <tr id="row8285123024413"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"><a name="en-us_topic_0237152142_en-us_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a>ON_ERROR_STOP</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a>\set ON_ERROR_STOP on | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul25758369"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul25758369"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul25758369"><li><strong id="b1950315244311"><a name="b1950315244311"></a><a name="b1950315244311"></a>on</strong>: specifies that the execution stops if an error occurs. In interactive mode, <strong id="b4503124193113"><a name="b4503124193113"></a><a name="b4503124193113"></a>gsql</strong> returns the output of executed commands immediately.</li><li><strong id="b66241632103111"><a name="b66241632103111"></a><a name="b66241632103111"></a>off</strong> (default value): specifies that an error, if occurring during the execution, is ignored, and the execution continues.</li></ul>
    </td>
    </tr>
    <tr id="row8285930144415"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a>PORT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a>\set PORT <em id="en-us_topic_0237152142_en-us_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a>port</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p10318634"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p10318634"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p10318634"></a>Specifies the port number of a connected database.</p>
    </td>
    </tr>
    <tr id="row2028413308448"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a>USER</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a>\set USER <em id="en-us_topic_0237152142_en-us_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a>username</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39899132"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39899132"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39899132"></a>Specifies the database user you are currently connected as.</p>
    </td>
    </tr>
    <tr id="row20283153094418"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"><a name="en-us_topic_0237152142_en-us_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a>VERBOSITY</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"><a name="en-us_topic_0237152142_en-us_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a>\set VERBOSITY   terse | default | verbose</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p33154265"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p33154265"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p33154265"></a>This variable can be set to <strong id="b14725912133219"><a name="b14725912133219"></a><a name="b14725912133219"></a>terse</strong>, <strong id="b57251512103212"><a name="b57251512103212"></a><a name="b57251512103212"></a>default</strong>, or <strong id="b1772510125323"><a name="b1772510125323"></a><a name="b1772510125323"></a>verbose</strong> to control redundant lines of error reports.</p>
    <a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul4342251"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul4342251"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul4342251"><li><strong id="b1380216242328"><a name="b1380216242328"></a><a name="b1380216242328"></a>terse</strong>: Only critical and major error texts and text locations are returned (which is generally suitable for single-line error information).</li><li><strong id="b16154133112325"><a name="b16154133112325"></a><a name="b16154133112325"></a>default</strong>: Critical and major error texts and text locations, error details, and error messages (possibly involving multiple lines) are all returned.</li><li><strong id="b2468239203211"><a name="b2468239203211"></a><a name="b2468239203211"></a>verbose</strong>: All error information is returned.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>
    
-   <a name="li194391754476"></a>SQL substitution

    **gsql**, like a parameter of a meta-command, provides a key feature that enables you to substitute a standard SQL statement for a  **gsql**  variable.  **gsql**  also provides a new alias or identifier for the variable. To replace the value of a variable using the SQL substitution method, add a colon \(:\) before the variable. For example:

    ```
    postgres=# \set foo 'HR.areaS'
    postgres=# select * from :foo;
     area_id |       area_name        
    ---------+------------------------
           4 | Middle East and Africa
           3 | Asia
           1 | Europe
           2 | Americas
    (4 rows)
    ```

    The above command queries the HR.areaS table.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >The value of the variable is copied literally, so it can even contain unbalanced quotation marks or backslash commands. Therefore, the input content must be meaningful.

-   <a name="li163671421104717"></a>Prompt

    The  **gsql**  prompt can be set using the three variables in  [Table 3](#en-us_topic_0237152142_en-us_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f). These variables consist of characters and special escape characters.

    **Table  3**  Prompt variables

    <a name="en-us_topic_0237152142_en-us_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152142_en-us_topic_0059778819_r817a3786ba804a1886882c4a3687feae"><th class="cellrowborder" valign="top" width="12%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152142_en-us_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"><a name="en-us_topic_0237152142_en-us_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a>Variable</p>
    </th>
    <th class="cellrowborder" valign="top" width="35%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152142_en-us_topic_0059778819_ad45548d4c8354eb39118d80473523c41"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152142_en-us_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a>Example</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152142_en-us_topic_0059778819_r1daadf254f9c46aeb1727fe7919a875a"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a>PROMPT1</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a>Specifies the normal prompt used when <strong id="b25526188107"><a name="b25526188107"></a><a name="b25526188107"></a>gsql</strong> requests a new command.</p>
    <p id="en-us_topic_0237152142_en-us_topic_0059778819_a687212152e3a4b109c30e98511b58138"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a>The default value of <em id="i41581454184013"><a name="i41581454184013"></a><a name="i41581454184013"></a>PROMPT1</em> is:</p>
    <pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a>%/%R%#</pre>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"><a name="en-us_topic_0237152142_en-us_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a><em id="i11878635131010"><a name="i11878635131010"></a><a name="i11878635131010"></a>PROMPT1</em> can be used to change the prompt.</p>
    <a name="en-us_topic_0237152142_en-us_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"><li>Change the prompt to <strong id="b273910423108"><a name="b273910423108"></a><a name="b273910423108"></a>[local]</strong>:<a name="en-us_topic_0237152142_en-us_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152142_en-us_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c">postgres=&gt; \set PROMPT1 %M
    [local:/tmp/gaussdba_mppdb]</pre>
    </li><li>Change the prompt to <strong id="b342171351111"><a name="b342171351111"></a><a name="b342171351111"></a>name</strong>:<a name="en-us_topic_0237152142_en-us_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152142_en-us_topic_0059778819_s953d1defe3564420936773eb2cd46335">postgres=&gt; \set PROMPT1 name
    name</pre>
    </li><li>Change the prompt to <strong id="b1728182416110"><a name="b1728182416110"></a><a name="b1728182416110"></a>=</strong>:<a name="en-us_topic_0237152142_en-us_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152142_en-us_topic_0059778819_sba91998cf42d47fc83956eecf376f679">postgres=&gt; \set PROMPT1 %R
    =</pre>
    </li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_rc77689523c7a46b6801d4d9df1a8c8cd"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"><a name="en-us_topic_0237152142_en-us_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a>PROMPT2</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a>Specifies the prompt displayed when more input is expected because the command that is not terminated with a semicolon (;) or a quote (") is not closed.</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a><em id="i1270442101112"><a name="i1270442101112"></a><a name="i1270442101112"></a>PROMPT2</em> can be used to display the prompt.</p>
    <a name="en-us_topic_0237152142_en-us_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152142_en-us_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"><span id="en-us_topic_0237152142_text4516037162312"><a name="en-us_topic_0237152142_text4516037162312"></a><a name="en-us_topic_0237152142_text4516037162312"></a>postgres=# </span>\set PROMPT2 TEST
    <span id="en-us_topic_0237152142_text03641438202316"><a name="en-us_topic_0237152142_text03641438202316"></a><a name="en-us_topic_0237152142_text03641438202316"></a>postgres=# </span>select * from HR.areaS TEST;
     area_id |       area_name    
    ---------+--------------------
           1 | Europe
           2 | Americas
           4 | Middle East and Africa
           3 | Asia
    (4 rows))</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_r7787d406b54c4fc49b5e7cfbf050935e"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a>PROMPT3</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a>Specifies the prompt displayed when the <strong id="b1646032719129"><a name="b1646032719129"></a><a name="b1646032719129"></a>COPY</strong> statement (such as <strong id="b1146012710123"><a name="b1146012710123"></a><a name="b1146012710123"></a>COPY FROM STDIN</strong>) is run and data input is expected.</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a><em id="i1094418351121"><a name="i1094418351121"></a><a name="i1094418351121"></a>PROMPT3</em> can be used to display the <strong id="b094483510121"><a name="b094483510121"></a><a name="b094483510121"></a>COPY</strong> prompt.</p>
    <a name="en-us_topic_0237152142_en-us_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152142_en-us_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"><span id="en-us_topic_0237152142_text024033914234"><a name="en-us_topic_0237152142_text024033914234"></a><a name="en-us_topic_0237152142_text024033914234"></a>postgres=# </span> \set PROMPT3 '&gt;&gt;&gt;&gt;'
    <span id="en-us_topic_0237152142_text172044409232"><a name="en-us_topic_0237152142_text172044409232"></a><a name="en-us_topic_0237152142_text172044409232"></a>postgres=# </span> copy HR.areaS from STDIN;
    Enter data to be copied followed by a newline.
    End with a backslash and a period on a line by itself.
    &gt;&gt;&gt;&gt;1 aa
    &gt;&gt;&gt;&gt;2 bb
    &gt;&gt;&gt;&gt;\.</pre>
    </td>
    </tr>
    </tbody>
    </table>

    The value of the selected prompt variable is printed literally. However, a value containing a percent sign \(%\) is replaced by the predefined contents depending on the character following the percent sign \(%\). For details about the defined substitutions, see  [Table 4](#en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_table55443487).

    **Table  4**  Defined substitutions

    <a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_table55443487"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row8395738"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p28543196"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p28543196"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p28543196"></a>Symbol</p>
    </th>
    <th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p14857929"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p14857929"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p14857929"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row22949754"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39941279"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39941279"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39941279"></a>%M</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p6073653"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p6073653"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p6073653"></a>Specifies the full host name (with domain name). The full name is <strong id="b1335918250145"><a name="b1335918250145"></a><a name="b1335918250145"></a>[local]</strong> if the connection is over a Unix domain socket, or <strong id="b4359102513142"><a name="b4359102513142"></a><a name="b4359102513142"></a>[local:/dir/name]</strong> if the Unix domain socket is not at the compiled default location.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row33961501"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p66927766"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p66927766"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p66927766"></a>%m</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p61404572"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p61404572"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p61404572"></a>Specifies the host name truncated at the first dot. It is <strong id="b94426208165"><a name="b94426208165"></a><a name="b94426208165"></a>[local]</strong> if the connection is over a Unix domain socket.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row7514803"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p15100907"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p15100907"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p15100907"></a>%&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p36816645"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p36816645"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p36816645"></a>Specifies the number of the port that the host is listening on.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row20185202"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p34130960"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p34130960"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p34130960"></a>%n</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39761457"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39761457"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p39761457"></a>Replaced with the database session username.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row15576469"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p18164273"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p18164273"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p18164273"></a>%/</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p26276531"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p26276531"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p26276531"></a>Replaced with the name of the current database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row12739235"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p31441988"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p31441988"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p31441988"></a>%~</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p30614042"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p30614042"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p30614042"></a>Similar to <strong id="b1143514528163"><a name="b1143514528163"></a><a name="b1143514528163"></a>%/</strong>. However, the output is tilde (~) if the database is your default database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row61805480"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p12249031"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p12249031"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p12249031"></a>%#</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p2976726"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p2976726"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p2976726"></a>Uses <strong id="b1281260191717"><a name="b1281260191717"></a><a name="b1281260191717"></a>#</strong> if the session user is the database administrator. Otherwise, uses <strong id="b681290101711"><a name="b681290101711"></a><a name="b681290101711"></a>&gt;</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row9511801"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p42866586"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p42866586"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p42866586"></a>%R</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul23135840"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul23135840"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul23135840"><li>In PROMPT1 normally <strong id="b443312130170"><a name="b443312130170"></a><a name="b443312130170"></a>=</strong>, but <strong id="b843341361711"><a name="b843341361711"></a><a name="b843341361711"></a>^</strong> if in single-line mode, or <strong id="b1443316133173"><a name="b1443316133173"></a><a name="b1443316133173"></a>!</strong> if the session is disconnected from the database (which can happen if <strong id="b54331913181718"><a name="b54331913181718"></a><a name="b54331913181718"></a>\connect</strong> fails).</li><li>In PROMPT2 %R is replaced with a hyphen (-), an asterisk (*), a single or double quotation mark, or a dollar sign ($), depending on whether <strong id="b259881415256"><a name="b259881415256"></a><a name="b259881415256"></a>gsql</strong> expects more input because the query is inside a /*...*/ comment or inside a quoted or dollar-escaped string.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row65831155"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p4335289"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p4335289"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p4335289"></a>%x</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p28124112"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p28124112"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p28124112"></a>Replaced with the transaction status.</p>
    <a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul39794295"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul39794295"></a><ul id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_ul39794295"><li>An empty string when it is not in a transaction block</li><li>An asterisk (*) when it is in a transaction block</li><li>An exclamation mark (!) when it is in a failed transaction block</li><li>A question mark (?) when the transaction status is indefinite (for example, because there is no connection).</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row59967035"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p33969966"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p33969966"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p33969966"></a>%digits</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p41583284"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p41583284"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p41583284"></a>Replaced with the character with the specified byte.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row3074559"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p4125311"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p4125311"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p4125311"></a>%:name</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p50452955"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p50452955"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p50452955"></a>Specifies the value of the <em id="i1962123314199"><a name="i1962123314199"></a><a name="i1962123314199"></a>name</em> variable of <strong id="b1262103319195"><a name="b1262103319195"></a><a name="b1262103319195"></a>gsql</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_row25596594"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p22836224"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p22836224"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p22836224"></a>%command</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a>Specifies command output, similar to substitution with the "^" symbol.</p>
    </td>
    </tr>
    <tr id="row249615339511"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p9721071"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p9721071"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p9721071"></a>%[ . . . %]</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p19218902468"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p19218902468"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p19218902468"></a>Prompts may contain terminal control characters which, for example, change the color, background, or style of the prompt text, or change the title of the terminal window. For example:</p>
    <p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p167001154619"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p167001154619"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p167001154619"></a>potgres=&gt; \set PROMPT1 '%[%033[1;33;40m%]%n@%/%R%[%033[0m%]%#'</p>
    <p id="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p50541836"><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p50541836"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_p50541836"></a>The output is a boldfaced (1;) yellow-on-black (33;40) prompt on VT100-compatible, color-capable terminals.</p>
    </td>
    </tr>
    </tbody>
    </table>

    **Environment Variables**

    **Table  5**  Environment variables related to  **gsql**

    <a name="en-us_topic_0237152142_en-us_topic_0059778819_ta6e7da8b2a0f4d2b9f94b5b7037ac91e"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152142_en-us_topic_0059778819_r1b9f53c1bcfc49218c72089a021d9e5c"><th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152142_en-us_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="70.86%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152142_en-us_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152142_en-us_topic_0059778819_rec48dbdab62e4a0a818e472ccadd19d6"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a>COLUMNS</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a>If <strong id="b698220912242"><a name="b698220912242"></a><a name="b698220912242"></a>\set columns</strong> is set to <strong id="b1698269192418"><a name="b1698269192418"></a><a name="b1698269192418"></a>0</strong>, this parameter controls the width of the wrapped format. This width determines whether to change the wide output mode into the vertical output mode if automatic expansion is enabled.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_rcb58a79721724a2c8bddfd9929e4bc5c"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a>PAGER</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a>If the query results do not fit on the screen, they are redirected through this command. You can use the <strong id="b21541519192511"><a name="b21541519192511"></a><a name="b21541519192511"></a>\pset</strong> command to disable the pager. Typically, the <strong id="b1265163613253"><a name="b1265163613253"></a><a name="b1265163613253"></a>more</strong> or <strong id="b1026523619251"><a name="b1026523619251"></a><a name="b1026523619251"></a>less</strong> command is used for viewing the query result page by page. The default is platform-dependent.</p>
    <div class="note" id="en-us_topic_0237152142_en-us_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237152142_en-us_topic_0059778819_a98582b46266b4f89947f7c05e9044567"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a>Display of the <strong id="b6925192102618"><a name="b6925192102618"></a><a name="b6925192102618"></a>less</strong> command is affected by the <em id="i192512112611"><a name="i192512112611"></a><a name="i192512112611"></a>LC_CTYPE</em> environment variable.</p>
    </div></div>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_r5ce588e3868e4c90a5bfd83f9a9dc79a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a>PSQL_EDITOR</p>
    </td>
    <td class="cellrowborder" rowspan="3" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"><a name="en-us_topic_0237152142_en-us_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a>The <strong id="b1361322402619"><a name="b1361322402619"></a><a name="b1361322402619"></a>\e</strong> and <strong id="b461472414268"><a name="b461472414268"></a><a name="b461472414268"></a>\ef</strong> commands use the editor specified by the environment variables. The variables are examined in the order listed. The default editor on Unix is vi.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_re8cde54e2cb04352ae5243b25ee44f06"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a>EDITOR</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_r8c9f051e80434e6da9c12a3367668f8b"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a>VISUAL</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_rd22f025db0f24923bd417615ea93ca36"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a>PSQL_EDITOR_LINENUMBER_ARG</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><div class="p" id="en-us_topic_0237152142_en-us_topic_0059778819_afed77a127a0749b791271ace8989d751"><a name="en-us_topic_0237152142_en-us_topic_0059778819_afed77a127a0749b791271ace8989d751"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_afed77a127a0749b791271ace8989d751"></a>When the <strong id="b19621844122713"><a name="b19621844122713"></a><a name="b19621844122713"></a>\e</strong> or <strong id="b762124413278"><a name="b762124413278"></a><a name="b762124413278"></a>\ef</strong> command is used with a line number parameter, this variable specifies the command-line parameter used to pass the starting line number to the editor. For editors, such as Emacs or vi, this is a plus sign. Include a space in the value of the variable if space is needed between the option name and the line number. For example:<pre class="screen" id="en-us_topic_0237152142_en-us_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"><a name="en-us_topic_0237152142_en-us_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a>PSQL_EDITOR_LINENUMBER_ARG = '+'  
    PSQL_EDITOR_LINENUMBER_ARG='--line '</pre>
    </div>
    <p id="en-us_topic_0237152142_en-us_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a>A plus sign (+) is used by default on Unix.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_r0a89d2015d0042548d36be7e6e76cfe5"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a>PSQLRC</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a>Specifies the location of the user's .gsqlrc file.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_re89519914e7c4f39a091faee4222768a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a>SHELL</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a>Has the same effect as the <strong id="b850117172294"><a name="b850117172294"></a><a name="b850117172294"></a>\!</strong> command.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152142_en-us_topic_0059778819_r7ebb36b11ff44947abd4dc1dea456370"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a59571dbc78644a97b2683c5159dac446"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a>TMPDIR</p>
    </td>
    <td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152142_en-us_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"><a name="en-us_topic_0237152142_en-us_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a><a name="en-us_topic_0237152142_en-us_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a>Specifies the directory for storing temporary files. The default value is <strong id="b4700114602919"><a name="b4700114602919"></a><a name="b4700114602919"></a>/tmp</strong>.</p>
    </td>
    </tr>
    </tbody>
    </table>


## Usage Guidelines<a name="section134561267517"></a>

**Prerequisites**

The user has the permission to access the database.

**Background**

Use the  **gsql**  command to connect to the remote database service. When connecting to the remote database service, enable remote connection on the server. For details, see "Database Usage \> Connecting to a Database \> Using gsql to Connect to a Database \> Remotely Connecting to a Database" in the  _Developer Guide_.

**Procedure**

1.  Connect to the openGauss server using the  **gsql**  tool.

    The  **gsql**  tool uses the  **-d**  parameter to specify the target database name, the  **-U**  parameter to specify the database username, the  **-h**  parameter to specify the host name, and the  **-p**  parameter to specify the port number.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >- If the database name is not specified, the default database name generated during initialization is used.
    >- If the database user name is not specified, the current OS user is used as the database user name by default.
    >- If a value does not contain a parameter (such as **-d** or **-U**) and the database name (**-d**) is not specified in the connection command, the parameter is interpreted as the database name.
    >- If the database name (**-d**) is specified but the database user name (**-U**) is not specified, this parameter is interpreted as the database user name.
    
    Example 1: Connect to port 15400 of the postgres database on the local PC as user  **omm**:

    ```
    gsql -d postgres -p 15400
    ```

    Example 2: Connect to the port 15400 of the remote postgres database as user  **jack**.

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 15400
    ```

    Example 3:  _postgres_  and  _omm_  do not belong to any parameter, and they are used as the database name and the username, respectively.

    ```
    gsql postgres omm -p 15400
    ```

    **Equals**

    ```
    gsql -d postgres -U omm -p 15400
    ```

    For details about the  **gsql**  parameters, see  [Command Reference](#section5729181711).

2.  Run a SQL statement.

    The following takes creating database  **human\_staff**  as an example:

    ```
    CREATE DATABASE human_staff;
    ```
    

Ordinarily, input lines end when a command-terminating semicolon is reached. If the command is sent and executed without any error, the command output is displayed on the screen.
    
3.  Execute gsql meta-commands.

    The following takes the listing of all openGauss databases and description information as an example.

    ```
    ostgres=#  \l
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

    For details about  **gsql**  meta-commands, see  [Meta-Command Reference](#section17631544132716)  .


**Example**

Run the following command to create a tablespace EXAMPLE:

```
postgres=# CREATE TABLESPACE EXAMPLE RELATIVE LOCATION 'tablespace1/tablespace_1';
CREATE TABLESPACE
```

After the tablespace is created, run the following command to create a schema HR:

```
postgres=# CREATE schema HR;
CREATE SCHEMA
```

The example shows how to spread a command over several lines of input. Note the prompt change:

```
postgres=# CREATE TABLE HR.areaS(
postgres(# area_ID   NUMBER,
postgres(# area_NAME VARCHAR2(25)
postgres(# )tablespace EXAMPLE;
CREATE TABLE
```

Query the table definition:

```
postgres=# \d HR.areaS
               Table "hr.areas"
  Column   |         Type          | Modifiers
-----------+-----------------------+-----------
 area_id   | numeric               |
 area_name | character varying(25) |
Tablespace: "example"
```

Insert four lines of data into  **HR.areaS**.

```
postgres=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (1, 'Europe');
INSERT 0 1
postgres=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (2, 'Americas');
INSERT 0 1
postgres=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (3, 'Asia');
INSERT 0 1
postgres=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (4, 'Middle East and Africa');
INSERT 0 1
```

Change the prompt.

```
postgres=# \set PROMPT1 '%n@%m %~%R%#'
omm@[local] postgres=#
```

Query the table:

```
omm@[local] postgres=#SELECT * FROM HR.areaS;
 area_id |       area_name        
---------+------------------------
       1 | Europe
       4 | Middle East and Africa
       2 | Americas
       3 | Asia
(4 rows)
```

Use the  **\\pset**  command to display the table in different ways:

```
omm@[local] postgres=#\pset border 2
Border style is 2.
omm@[local] postgres=#SELECT * FROM HR.areaS;
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
omm@[local] postgres=#\pset border 0
Border style is 0.
omm@[local] postgres=#SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
omm@[local] postgres=#\pset border 2
Border style is 2.
omm@[local] postgres=#SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
omm@[local] postgres=#\pset border 0
Border style is 0.
omm@[local] postgres=#SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
omm@[local] postgres=#\pset border 2
Border style is 2.
omm@[local] postgres=#SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
omm@[local] postgres=#\pset border 0
Border style is 0.
omm@[local] postgres=#SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
```

Use the meta-command:

```
omm@[local] postgres=#\a \t \x
Output format is unaligned.
Showing only tuples.
Expanded display is on.
omm@[local] postgres=#SELECT * FROM HR.areaS;
area_id|2
area_name|Americas

area_id|1
area_name|Europe

area_id|4
area_name|Middle East and Africa

area_id|3
area_name|Asia
omm@[local] postgres=# 
```

## Obtaining Help Information<a name="section21541113121"></a>

**Procedure**

-   After connecting to the database, run the following command to obtain the help information:

    ```
    gsql --help
    ```

    The following help information is displayed:

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

-   After connecting to the database, run the following command to obtain the help information:

    ```
    help
    ```

    The following help information is displayed:

    ```
    You are using gsql, the command-line interface to gaussdb.
    Type:  \copyright for distribution terms
           \h for help with SQL commands
           \? for help with gsql commands
           \g or terminate with semicolon to execute query
           \q to quit 
    ```


**Examples**

1.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 15400
    ```

    **postgres**  is the name of the database to be connected, and  **15400**  is the port number of the primary database node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss x.x build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=#
    ```

2.  View the  **gsql**  help information. For details, see  [Table gsql online help](#en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_table52020644).

    **Table  6** **gsql**  online help

    <a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_table52020644"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_row35168989"><th class="cellrowborder" valign="top" width="30.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p30115862"><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p30115862"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p30115862"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="69.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p21681027"><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p21681027"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p21681027"></a>Example</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_row11332742"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p45536881"><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p45536881"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p45536881"></a>Query the copyright.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p65926177"><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p65926177"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p65926177"></a>\copyright</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237152144_en-us_topic_0059778941_r7c9e6b30c75c476a8ed11c601c5875bc"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152144_en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"><a name="en-us_topic_0237152144_en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a>View SQL statements supported by openGauss.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152144_en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"><a name="en-us_topic_0237152144_en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a>View SQL statements supported by openGauss.</p>
    <p id="en-us_topic_0237152144_en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"><a name="en-us_topic_0237152144_en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a>To query all SQL statements supported by openGauss, run the following command:</p>
    <a name="en-us_topic_0237152144_en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152144_en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"><span id="en-us_topic_0237152144_text9571150172310"><a name="en-us_topic_0237152144_text9571150172310"></a><a name="en-us_topic_0237152144_text9571150172310"></a>postgres=# </span>\h
    Available help:
      ABORT                            
      ALTER APP WORKLOAD GROUP                  
    ... ...</pre>
    <p id="en-us_topic_0237152144_en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"><a name="en-us_topic_0237152144_en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"></a>For example, view parameters of the <strong id="b242726104017"><a name="b242726104017"></a><a name="b242726104017"></a>CREATE DATABASE</strong> command:</p>
    <a name="en-us_topic_0237152144_en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152144_en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"><span id="en-us_topic_0237152144_text833015519233"><a name="en-us_topic_0237152144_text833015519233"></a><a name="en-us_topic_0237152144_text833015519233"></a>postgres=# </span>\help CREATE DATABASE
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
    <tr id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_row37254344"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p64811887"><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p64811887"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p64811887"></a>View the help information about <strong id="b10273235154019"><a name="b10273235154019"></a><a name="b10273235154019"></a>gsql</strong> commands.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p29030878"><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p29030878"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_en-us_topic_0058968146_p29030878"></a>For example, view commands supported by <strong id="b1643611437406"><a name="b1643611437406"></a><a name="b1643611437406"></a>gsql</strong>.</p>
    <a name="en-us_topic_0237152144_en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><a name="en-us_topic_0237152144_en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><pre class="screen" codetype="Sql" id="en-us_topic_0237152144_en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"><span id="en-us_topic_0237152144_text175211652112314"><a name="en-us_topic_0237152144_text175211652112314"></a><a name="en-us_topic_0237152144_text175211652112314"></a>postgres=# </span>\?
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


## Command Reference<a name="section5729181711"></a>

For details about gsql parameters, see  [Table Common parameters](#en-us_topic_0237152145_en-us_topic_0059779319_t5f35328143ec419983a1c23d13c46e49),  [Table Input and output parameters](#en-us_topic_0237152145_en-us_topic_0059779319_t0233128ab394456c80e339179cb56739),  [Table Output format parameters](#en-us_topic_0237152145_en-us_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8), and  [Table Connection parameters](#en-us_topic_0237152145_en-us_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68).

**Table  7**  Common parameters

<a name="en-us_topic_0237152145_en-us_topic_0059779319_t5f35328143ec419983a1c23d13c46e49"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rf9b2bbe319a24d139970cf428f495efd"><th class="cellrowborder" valign="top" width="22.24%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="53.7%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a11229b9b997f438eb84506dae58a0287"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="24.060000000000002%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p192487379712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p192487379712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p192487379712"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rf751e9eceef243079acfc04a1b4dc221"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a>-c, --command=COMMAND</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a>Specifies that <strong id="b1832355819454"><a name="b1832355819454"></a><a name="b1832355819454"></a>gsql</strong> is to run a string command and then exit.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p156438509712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p156438509712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p156438509712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r6daf56fa49884c82aca97a902d28b79e"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a>-d, --dbname=DBNAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p272315995731"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p272315995731"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p272315995731"></a>Specifies the name of the database to connect to.</p>
<p id="p1719135555717"><a name="p1719135555717"></a><a name="p1719135555717"></a>In addition, <strong id="b11338125463216"><a name="b11338125463216"></a><a name="b11338125463216"></a>gsql</strong> allows you to use extended database names, that is, connection strings in the format of <strong id="b143559912214"><a name="b143559912214"></a><a name="b143559912214"></a>'postgres[ql]://[user[:password]@][netloc][:port][, ...][/dbname][?param1=value1&amp;...]'</strong> or <strong id="b126631314162114"><a name="b126631314162114"></a><a name="b126631314162114"></a>'[key=value] [...]'</strong> as database names. <strong id="b988515592392"><a name="b988515592392"></a><a name="b988515592392"></a>gsql</strong> parses connection information from the connection strings and preferentially uses the information.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p298498829712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p298498829712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p298498829712"></a>Character string</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r9f41226b80114eda9b6529ce60d822cd"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a>-f, --file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p431573395731"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p431573395731"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p431573395731"></a>Specifies that files are used as the command source instead of interactively-entered commands. After the files are processed, <strong id="b6743135174617"><a name="b6743135174617"></a><a name="b6743135174617"></a>gsql</strong> exits. If <em id="i36571616478"><a name="i36571616478"></a><a name="i36571616478"></a>FILENAME</em> is - (hyphen), then standard input is read.</p>
<div class="note" id="en-us_topic_0287275991_note111571487117"><a name="en-us_topic_0287275991_note111571487117"></a><a name="en-us_topic_0287275991_note111571487117"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_p615715841110"><a name="en-us_topic_0287275991_p615715841110"></a><a name="en-us_topic_0287275991_p615715841110"></a>Environment scenario: one primary and one standby (8 CPUs and 32 GB memory)</p>
<p id="en-us_topic_0287275991_p18312311200"><a name="en-us_topic_0287275991_p18312311200"></a><a name="en-us_topic_0287275991_p18312311200"></a>Test result: It takes about 8 minutes and 21 seconds to read a 200 MB data file.</p>
<p id="en-us_topic_0287275991_p15359161141919"><a name="en-us_topic_0287275991_p15359161141919"></a><a name="en-us_topic_0287275991_p15359161141919"></a>It takes about 18 minutes and 41 seconds to read a 500 MB data file.</p>
<p id="en-us_topic_0287275991_p669510210122"><a name="en-us_topic_0287275991_p669510210122"></a><a name="en-us_topic_0287275991_p669510210122"></a>Suggestion: The file read time increases with the file data volume. If the file size is too large, the file needs to be read again when an exception occurs. In addition, the I/O of the system OS will be overloaded. It is recommended that the file size be about 500 MB.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p111442891021"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p111442891021"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p111442891021"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rb1dacbb49960481a8eaec18fcaa258c1"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p135042995731"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p135042995731"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p135042995731"></a>-l, --list</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7acc5297f2c24951829934906835788f"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7acc5297f2c24951829934906835788f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7acc5297f2c24951829934906835788f"></a>Lists all available databases and then exits.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p214125089712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p214125089712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p214125089712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rbfc3635add4a41319b89eba9fc73414a"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a>-v, --set, --variable=NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a>Sets variable <em id="i16554541204710"><a name="i16554541204710"></a><a name="i16554541204710"></a>NAME</em> to <em id="i95541041204713"><a name="i95541041204713"></a><a name="i95541041204713"></a>VALUE</em>.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"></a>For details about variable examples and descriptions, see <a href="#en-us_topic_0287275991_en-us_topic_0237152142_en-us_topic_0059778819_en-us_topic_0058968129_li39134862">variables</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p566915559712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p566915559712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p566915559712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r76e7d067a95b4153a7f539b41685ce3d"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa345ebc468534282a77d48941c169514"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa345ebc468534282a77d48941c169514"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa345ebc468534282a77d48941c169514"></a>-X, --no-gsqlrc</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p190458295731"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p190458295731"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p190458295731"></a>Does not read the startup file (neither the system-wide <strong id="b1554995411475"><a name="b1554995411475"></a><a name="b1554995411475"></a>gsqlrc</strong> file nor the user's <strong id="b17549115420477"><a name="b17549115420477"></a><a name="b17549115420477"></a>~/.gsqlrc</strong> file).</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a>The startup file is <strong id="b1543121315482"><a name="b1543121315482"></a><a name="b1543121315482"></a>~/.gsqlrc</strong> by default or it can be specified by the environment variable <em id="i454320139485"><a name="i454320139485"></a><a name="i454320139485"></a>PSQLRC</em>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p286132639712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p286132639712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p286132639712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rde1104323b5d4638ae3c6eb9c7072d37"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a>-1 ("one"), --single-transaction</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a>When <strong id="b19458723194815"><a name="b19458723194815"></a><a name="b19458723194815"></a>gsql</strong> uses the <strong id="b16458142334811"><a name="b16458142334811"></a><a name="b16458142334811"></a>-f</strong> parameter to execute a script, <strong id="b64584234486"><a name="b64584234486"></a><a name="b64584234486"></a>START TRANSACTION</strong> and <strong id="b845852384810"><a name="b845852384810"></a><a name="b845852384810"></a>COMMIT</strong> are added to the start and end of the script, respectively, so that the script is executed as one transaction. This ensures that the script is executed successfully. If the script cannot be executed, the script is invalid.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a>If the script has used <strong id="b7947104712151"><a name="b7947104712151"></a><a name="b7947104712151"></a>START TRANSACTION</strong>, <strong id="b11947947131519"><a name="b11947947131519"></a><a name="b11947947131519"></a>COMMIT</strong>, or <strong id="b1194724714159"><a name="b1194724714159"></a><a name="b1194724714159"></a>ROLLBACK</strong>, this parameter is invalid.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p359730009712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p359730009712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p359730009712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row6846630151811"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a668af7282b3440f292ad8697de06b81d"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a>Displays help information about <strong id="b5318519482"><a name="b5318519482"></a><a name="b5318519482"></a>gsql</strong> command parameters, and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p281318939712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p281318939712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p281318939712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row384583019185"><td class="cellrowborder" valign="top" width="22.24%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="53.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>Prints the <strong id="b1991675510480"><a name="b1991675510480"></a><a name="b1991675510480"></a>gsql</strong> version and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p640908799712"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p640908799712"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p640908799712"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  8**  Input and output parameters

<a name="en-us_topic_0237152145_en-us_topic_0059779319_t0233128ab394456c80e339179cb56739"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ra3cdda570ced41129194efd2e680304d"><th class="cellrowborder" valign="top" width="14.67%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p401260795738"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p401260795738"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p401260795738"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="62.59%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a906241fb7455400e916a9a38a9868a71"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="22.74%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p485266179117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p485266179117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p485266179117"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r064106ad54d9435fad3424d5a2377089"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7891e008bcdc4c288c069694adc59550"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a>-a, --echo-all</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p239453995738"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p239453995738"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p239453995738"></a>Prints all input lines to standard output as they are read.</p>
<div class="caution" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p383419339117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p383419339117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p383419339117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rb4b58fbd180a4bbeba2e3e52f0b74a56"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p19920195738"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p19920195738"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p19920195738"></a>-e, --echo-queries</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a>Displays all SQL commands sent to the server to the standard output as well.</p>
<div class="caution" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p186888699117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p186888699117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p186888699117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_re72e5fed55b746989e2d11b33e07c76f"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a>-E, --echo-hidden</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a>Echoes the actual queries generated by <strong id="b64720554506"><a name="b64720554506"></a><a name="b64720554506"></a>\d</strong> and other backslash commands.</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p374034349117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p374034349117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p374034349117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_raaf263ab8e2c4891a204f1debeeb0b5a"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a>-k, --with-key=KEY</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a>Uses <strong id="b270913575116"><a name="b270913575116"></a><a name="b270913575116"></a>gsql</strong> to decrypt imported encrypted files.</p>
<div class="notice" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="ul18722921104413"></a><a name="ul18722921104413"></a><ul id="ul18722921104413"><li>For key characters, such as the single quotation mark (') or double quotation mark (") in shell commands, Linux shell checks whether the input single quotation mark (') or double quotation mark (") matches. If no match is found, Linux shell does not enter the <strong id="b14815125816574"><a name="b14815125816574"></a><a name="b14815125816574"></a>gsql</strong> program until input is complete.</li><li>Stored procedures and functions cannot be decrypted and imported.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p97792999117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p97792999117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p97792999117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r649b2c557fa54148aad24f6edd10ad66"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4297ab2218f4028885186e84264e945"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a>-L, --log-file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a>Writes normal output source and all query output into the <strong id="b8355358175113"><a name="b8355358175113"></a><a name="b8355358175113"></a>FILENAME</strong> file.</p>
<div class="caution" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><a name="en-us_topic_0287275991_en-us_topic_0237152145_ul1039703419584"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_ul1039703419584"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152145_ul1039703419584"><li>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</li><li>This parameter retains only the query result in the corresponding file, so that the result can be easily found and parsed by other invokers (for example, automatic O&amp;M scripts). Logs about <strong id="b16134114317545"><a name="b16134114317545"></a><a name="b16134114317545"></a>gsql</strong> operations are not retained.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row842903031919"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ac55a414323994f8caa7857a885ce1759"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a>-m, --maintenance</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a>Allows <span id="en-us_topic_0287275991_en-us_topic_0237152145_text816123165217"><a name="en-us_topic_0287275991_en-us_topic_0237152145_text816123165217"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_text816123165217"></a>openGauss</span> to be connected when a two-phase transaction is being restored.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a>The parameter is for engineers only. When this parameter is used, <strong id="b09363975514"><a name="b09363975514"></a><a name="b09363975514"></a>gsql</strong> can be connected to the standby server to check data consistency between the primary server and standby server.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p89352579117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p89352579117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p89352579117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1842811305194"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a>-n, --no-libedit</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a>Closes command line editing.</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p526672539117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p526672539117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p526672539117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row2042863016192"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a>-o, --output=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a5495253d5fc2465296d752e1198157c6"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a>Puts all query output into the <strong id="b103823287557"><a name="b103823287557"></a><a name="b103823287557"></a>FILENAME</strong> file.</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1642863041911"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a>-q, --quiet</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a>Indicates the quiet mode and no additional information will be printed.</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p381890689117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p381890689117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p381890689117"></a>By default, <strong id="b1538221115620"><a name="b1538221115620"></a><a name="b1538221115620"></a>gsql</strong> displays various information.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row342723051913"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p582042195738"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p582042195738"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p582042195738"></a>-s, --single-step</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a>Runs in single-step mode. It indicates that the user is prompted before each command is sent to the server. This option can be also used for canceling execution. Use this option to debug scripts.</p>
<div class="caution" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p410907699117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p410907699117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p410907699117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1842753071910"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a>-S, --single-line</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a>Runs in single-line mode where a line break terminates an SQL command, as a semicolon does.</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p400179989117"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p400179989117"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p400179989117"></a>-</p>
</td>
</tr>
<tr id="row32031825163412"><td class="cellrowborder" valign="top" width="14.67%" headers="mcps1.2.4.1.1 "><p id="p1293452114342"><a name="p1293452114342"></a><a name="p1293452114342"></a>-C, --enable-client-encryption</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.4.1.2 "><p id="p193422114348"><a name="p193422114348"></a><a name="p193422114348"></a>When <strong id="b8154345121020"><a name="b8154345121020"></a><a name="b8154345121020"></a>-C</strong> is used to connect to a local or remote database, you can use this option to enable the encrypted database function.</p>
</td>
<td class="cellrowborder" valign="top" width="22.74%" headers="mcps1.2.4.1.3 "><p id="p119347217345"><a name="p119347217345"></a><a name="p119347217345"></a>-</p>
</td>
</tr>
</tbody>
</table>


**Table  9**  Output format parameters

<a name="en-us_topic_0237152145_en-us_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ra101278a50d349be83a64bb1915591f1"><th class="cellrowborder" valign="top" width="17.52%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a396cd422101544c9b9de39d172ab7175"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="64.25%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p431994959135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p431994959135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p431994959135"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r06630a6cad7e4748aed20317124c2a03"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a>-A, --no-align</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a>Switches to unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p94982399135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p94982399135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p94982399135"></a>The default output mode is aligned.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r7f57d0e4831e486b95fbe023bae4bd94"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p120733695744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p120733695744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p120733695744"></a>-F, --field-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a>Specifies the field separator. The default is the vertical bar (|).</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p311598799135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p311598799135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p311598799135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r71cd46e7a1184ef4853d43846cc6a16b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a>-H, --html</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p253547695744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p253547695744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p253547695744"></a>Turns on the HTML tabular output.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p409222479135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p409222479135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p409222479135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r6df99f3887c740f59d40136a614bc9d5"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a>-P, --pset=VAR[=ARG]</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a>Specifies the print option in the <strong id="b11144195085812"><a name="b11144195085812"></a><a name="b11144195085812"></a>\pset</strong> format in the command line.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a>The equal sign (=), instead of the space, is used here to separate the name and value. For example, enter <strong id="b560312014018"><a name="b560312014018"></a><a name="b560312014018"></a>-P format=latex</strong> to set the output format to <strong id="b106033201703"><a name="b106033201703"></a><a name="b106033201703"></a>LaTeX</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p263677209135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p263677209135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p263677209135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rb03ed3abf98f420b91c00270e8e124fb"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p425912095744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p425912095744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p425912095744"></a>-R, --record-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a>Sets the record separator.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p554105779135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p554105779135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p554105779135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rdd5cd46088d544b5b90c8ddf7075a06b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a>Enables the function of recording historical client operations.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p590717879135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p590717879135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p590717879135"></a>This function is disabled by default.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r3466981c1d824594921920fd9ddd1bf2"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p392666995744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p392666995744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p392666995744"></a>-t, --tuples-only</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p662507995744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p662507995744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p662507995744"></a>Prints only tuples.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p200854709135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p200854709135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p200854709135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r4a7c6bdac04f4826aeef67c5a3aaef23"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a>-T, --table-attr=TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a>Specifies options to be placed within the HTML table tag.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a>Use this parameter with the <strong id="b199535391618"><a name="b199535391618"></a><a name="b199535391618"></a>-H,--html</strong> parameter to specify the output to the HTML format.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p163103539135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p163103539135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p163103539135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_rc0f8b59ecf8046489f865279cc92e667"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p271620295744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p271620295744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p271620295744"></a>-x, --expanded</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a>Turns on the expanded table formatting mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p460701889135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p460701889135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p460701889135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r70d9b0438762491c8bced4984a242043"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p837456095744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p837456095744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p837456095744"></a>-z, --field-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p748381795744"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p748381795744"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p748381795744"></a>Sets the field separator in the unaligned output mode to be blank.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a>Use this parameter with the <strong id="b159012346211"><a name="b159012346211"></a><a name="b159012346211"></a>-A, --no-align</strong> parameter to switch to unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p406977529135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p406977529135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p406977529135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_r10eed4bf94ff49c7acc8e56dd2e2af7a"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a>-0, --record-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a36d383622634404baff9b73998c8f6dd"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a>Sets the record separator in the unaligned output mode to be blank.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a>Use this parameter with the <strong id="b46231655525"><a name="b46231655525"></a><a name="b46231655525"></a>-A, --no-align</strong> parameter to switch to unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p81836129135"><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p81836129135"></a><a name="en-us_topic_0287275991_en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p81836129135"></a>-</p>
</td>
</tr>
<tr id="row14755172585315"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="p175582535317"><a name="p175582535317"></a><a name="p175582535317"></a>-2, --pipeline</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="p18755625135319"><a name="p18755625135319"></a><a name="p18755625135319"></a>Uses a pipe to transmit the password. This parameter cannot be used on devices and must be used together with the <strong id="b511313521124"><a name="b511313521124"></a><a name="b511313521124"></a>-c</strong> or <strong id="b1411313525215"><a name="b1411313525215"></a><a name="b1411313525215"></a>-f</strong> parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="p1075522575319"><a name="p1075522575319"></a><a name="p1075522575319"></a>-</p>
</td>
</tr>
<tr id="row1427912110539"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="p102801821155314"><a name="p102801821155314"></a><a name="p102801821155314"></a>-g,</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="p22805217537"><a name="p22805217537"></a><a name="p22805217537"></a>Prints all SQL statements from a file.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="p82801521185319"><a name="p82801521185319"></a><a name="p82801521185319"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  10**  Connection parameters

<a name="en-us_topic_0237152145_en-us_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68"></a>
<table><thead align="left"><tr id="en-us_topic_0237152145_en-us_topic_0059779319_r7ae18844030f48148c25a09efc185001"><th class="cellrowborder" valign="top" width="22.720000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152145_en-us_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"><a name="en-us_topic_0237152145_en-us_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.28%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152145_en-us_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152145_en-us_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152145_en-us_topic_0059779319_rbc536c10a0524f93ba9dc04d86cae020"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p502015995754"><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p502015995754"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p502015995754"></a>-h, --host=HOSTNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a>Specifies the host name of the machine on which the server is running or the directory for the Unix-domain socket.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a>If the host name is omitted, <strong id="b33180424510"><a name="b33180424510"></a><a name="b33180424510"></a>gsql</strong> connects to the server of the local host over the Unix domain socket or over TCP/IP to connect to local host without the Unix domain socket.</p>
</td>
</tr>
<tr id="en-us_topic_0237152145_en-us_topic_0059779319_r192a476e6aa84e1ba66b8a618b81b730"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a>-p, --port=PORT</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a>Specifies the port number of the database server.</p>
<p id="en-us_topic_0237152145_en-us_topic_0059779319_aa087b88fe849401bbcba9de536673b28"><a name="en-us_topic_0237152145_en-us_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a>You can modify the default port number using the <strong id="b1882597769"><a name="b1882597769"></a><a name="b1882597769"></a>-p, --port=PORT</strong> parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"><a name="en-us_topic_0237152145_en-us_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a>The default value is <span id="text47021142550"><a name="text47021142550"></a><a name="text47021142550"></a>15400</span>.</p>
</td>
</tr>
<tr id="en-us_topic_0237152145_en-us_topic_0059779319_r88a7493b32594e16aa0e0b888f97cc64"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a>-U, --username=USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p106242695754"><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p106242695754"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p106242695754"></a>Specifies the user that connects to the database.</p>
<div class="note" id="en-us_topic_0237152145_en-us_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"><a name="en-us_topic_0237152145_en-us_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0237152145_ul103034015494"></a><a name="en-us_topic_0237152145_ul103034015494"></a><ul id="en-us_topic_0237152145_ul103034015494"><li>If this parameter is specified, you also need to enter your password for identity authentication when connecting to the database. You can enter the password interactively or use the <strong id="b133331345617"><a name="b133331345617"></a><a name="b133331345617"></a>-W</strong> parameter to specify a password.</li><li>To connect to a database, add an escape character before any dollar sign ($) in the user name.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"><a name="en-us_topic_0237152145_en-us_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a>A character string. The default user is the current user that operates the system.</p>
</td>
</tr>
<tr id="en-us_topic_0237152145_en-us_topic_0059779319_r2243c5af2de8467b89287880f4d71853"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"><a name="en-us_topic_0237152145_en-us_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a>-W, --password=PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"><a name="en-us_topic_0237152145_en-us_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a>Specifies the password when the <strong id="b8423527069353"><a name="b8423527069353"></a><a name="b8423527069353"></a>-U</strong> parameter is used to connect to a remote database.</p>
<div class="note" id="en-us_topic_0237152145_en-us_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"><a name="en-us_topic_0237152145_en-us_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p258458395819"><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p258458395819"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p258458395819"></a>When the server where the primary database node is located connects to the local primary database node, the trust connection is used by default and this parameter is ignored.</p>
<p id="en-us_topic_0237152145_p785243765613"><a name="en-us_topic_0237152145_p785243765613"></a><a name="en-us_topic_0237152145_p785243765613"></a>To connect to a database, add an escape character before any backslash (\) or back quote (`) in the password.</p>
<p id="en-us_topic_0237152145_p71218323118"><a name="en-us_topic_0237152145_p71218323118"></a><a name="en-us_topic_0237152145_p71218323118"></a>If this parameter is not specified but database connection requires your password, you will be prompted to enter your password in interactive mode. The maximum length of the password is 999 bytes, which is restricted by the maximum value of the GUC parameter <strong id="b6729101411220"><a name="b6729101411220"></a><a name="b6729101411220"></a>password_max_length</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p556353793842"><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p556353793842"></a><a name="en-us_topic_0237152145_en-us_topic_0059779319_en-us_topic_0058968145_p556353793842"></a>The password must meet the complexity requirement.</p>
</td>
</tr>
</tbody>
</table>

## Meta-Command Reference<a name="section17631544132716"></a>

This section describes meta-commands provided by  **gsql**  after the openGauss database CLI tool is used to connect to a database. A  **gsql**  meta-command can be anything that you enter in  **gsql**  and begins with an unquoted backslash.

**Precautions**

-   The format of the  **gsql**  meta-command is a backslash \(\\\) followed by a command verb, and then a parameter. The parameters are separated from the command verb and from each other by any number of whitespace characters.

-   To include whitespace in a parameter, you can quote it with single quotation marks \(''\). To include single quotation marks in a parameter, add a backslash in front of it. Anything contained in single quotation marks is furthermore subject to C-like substitutions for \\n \(new line\), \\t \(tab\), \\b \(backspace\), \\r \(carriage return\), \\f \(form feed\), \\digits \(octal\), and \\xdigits \(hexadecimal\).
-   Within a parameter, text enclosed in double quotation marks \(""\) is taken as a command line input to the shell. The command output \(with any trailing newline removed\) is taken as a parameter.
-   If an unquoted parameter begins with a colon \(:\), the parameter is taken as a  **gsql**  variable and the value of the variable is used as the parameter value instead.
-   Some commands take an SQL identifier \(such as a table name\) as a parameter. These parameters follow the SQL syntax rules: Unquoted letters are forced to lowercase, while double quotation marks \(""\) protect letters from case conversion and allow incorporation of whitespace into the identifier. Within double quotation marks, paired double quotation marks reduce to a single double quotation mark in the result name. For example,  **FOO"BAR"BAZ**  is interpreted as  **fooBARbaz**, and  **"Aweird""name"**  becomes  **A weird"name**.
-   Parameter parsing stops when another unquoted backslash appears. An unquoted backslash is taken as the beginning of a new meta-command. The special sequence \\\\ \(two backslashes\) marks the end of parameters and continues parsing SQL statements if any. In this way, SQL statements and  **gsql**  commands can be freely mixed in a line. However, the parameters of a meta-command cannot continue beyond the end of a line in any situations.

**Meta-Commands**

For details about meta-commands, see  [Table Common meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table23103470),  [Table Query buffer meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table8624338),  [Table Input and output meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table62130565),  [Table Information display meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table44907299),  [Table Formatting meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table53911699),[Table Connection meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table37189353)  ,  [Table OS meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table32146234),  [Table Variable meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table50076468), and  [Table Large object meta-commands](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table55465693).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>_FILE_  mentioned in the following commands indicates a file path. This path can be an absolute path such as  **/home/gauss/file.txt**  or a relative path, such as  **file.txt**. By default, a  **file.txt**  is created in the path where the user runs  **gsql**  commands.

**Table  11**  Common meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table23103470"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row28068480"><th class="cellrowborder" valign="top" width="18.55%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58954407"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58954407"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58954407"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.31%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p10577654"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p10577654"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p10577654"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row51483670"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p9427759"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p9427759"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p9427759"></a>\copyright</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25450984"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25450984"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25450984"></a>Displays the openGauss version and copyright information.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_r47448e8d5f694bb8a3cbe2198bb2e5fb"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a>\g [FILE] or ;</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a>Performs a query operation and sends the result to a file or pipe.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row39075813"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11024304"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11024304"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11024304"></a>\h(\help) [NAME]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15079635"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15079635"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15079635"></a>Provides syntax help on the specified SQL statement.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a>If <strong id="b159054165338"><a name="b159054165338"></a><a name="b159054165338"></a>NAME</strong> is not specified, then <strong id="b10561181932119"><a name="b10561181932119"></a><a name="b10561181932119"></a>gsql</strong> will list all the commands for which syntax help is available. If <strong id="b99079226337"><a name="b99079226337"></a><a name="b99079226337"></a>NAME</strong> is an asterisk (*), syntax help on all SQL statements is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_r0fed1aa4c7aa45179be733524d48d337"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"></a>\parallel [on [num]|off]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a>Controls the parallel execution function.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"><li><strong id="b19245813213"><a name="b19245813213"></a><a name="b19245813213"></a>on</strong>: The switch is enabled and the maximum number of concurrently executed tasks is <em id="i11929585216"><a name="i11929585216"></a><a name="i11929585216"></a>num</em>.</li><li><strong id="b450092552220"><a name="b450092552220"></a><a name="b450092552220"></a>off</strong>: This switch is disabled.</li></ul>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"><li>Parallel execution is not allowed in a running transaction and a transaction cannot be started during parallel execution.</li><li>Parallel execution of <strong id="b1685499192315"><a name="b1685499192315"></a><a name="b1685499192315"></a>\d</strong> meta-commands is not allowed.</li><li>If SELECT statements are run concurrently, customers can accept the problem that the return results are displayed randomly but they cannot accept it if a core dump or process response failure occurs.</li><li>The SET statements are not allowed in concurrent tasks because they may cause unexpected results.</li><li>Temporary tables cannot be created. If temporary tables are required, create them before parallel execution is enabled, and use them only in the parallel execution. Temporary tables cannot be created in parallel execution.</li><li>When <strong id="b1732192914249"><a name="b1732192914249"></a><a name="b1732192914249"></a>\parallel</strong> is executed, <em id="i373232915244"><a name="i373232915244"></a><a name="i373232915244"></a>num</em> independent <strong id="b9518554173717"><a name="b9518554173717"></a><a name="b9518554173717"></a>gsql</strong> processes can be connected to the database server.</li><li>The duration of all the jobs specified using <strong id="b1135685113243"><a name="b1135685113243"></a><a name="b1135685113243"></a>\parallel</strong> cannot exceed <strong id="b7356105172410"><a name="b7356105172410"></a><a name="b7356105172410"></a>session_timeout</strong>. Otherwise, the database may be disconnected during parallel execution.</li><li>One or more commands following <strong id="b1651543123719"><a name="b1651543123719"></a><a name="b1651543123719"></a>\parallel on</strong> are executed only after <strong id="b9747835123710"><a name="b9747835123710"></a><a name="b9747835123710"></a>\parallel off</strong> is executed. Therefore, each <strong id="b16308955193711"><a name="b16308955193711"></a><a name="b16308955193711"></a>\parallel on</strong> must correspond to one <strong id="b1531016053813"><a name="b1531016053813"></a><a name="b1531016053813"></a>\parallel off</strong>. Otherwise, the commands following <strong id="b10211682385"><a name="b10211682385"></a><a name="b10211682385"></a>\parallel on</strong> cannot be executed.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a>The default value of <em id="i18835517112220"><a name="i18835517112220"></a><a name="i18835517112220"></a>num</em> is <strong id="b1183551716221"><a name="b1183551716221"></a><a name="b1183551716221"></a>1024</strong>.</p>
<div class="notice" id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"><li>The maximum number of connections allowed by the server is determined based on <strong id="b142901138162217"><a name="b142901138162217"></a><a name="b142901138162217"></a>max_connection</strong> and the number of current connections.</li><li>Set the value of <em id="i194134616226"><a name="i194134616226"></a><a name="i194134616226"></a>num</em> based on the allowed number of connections.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row50763268"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18184039"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18184039"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18184039"></a>\q</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p56600007"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p56600007"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p56600007"></a>Exits the <strong id="b57161339412"><a name="b57161339412"></a><a name="b57161339412"></a>gsql</strong> program. In a script file, this command is run only when a script terminates.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  12**  Query buffer meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table8624338"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row60218325"><th class="cellrowborder" valign="top" width="36.25%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p45846132"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p45846132"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p45846132"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="63.74999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22549200"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22549200"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22549200"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row14545872"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37364956"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37364956"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37364956"></a>\e  [FILE]   [LINE]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6662621"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6662621"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6662621"></a>Uses an external editor to edit the query buffer or file.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row59963597"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25213208"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25213208"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25213208"></a>\ef [FUNCNAME [LINE]]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29003980"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29003980"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29003980"></a>Uses an external editor to edit the function definition. If <strong id="b15237134319263"><a name="b15237134319263"></a><a name="b15237134319263"></a>LINE</strong> is specified, the cursor will point to the specified line of the function body.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row59709228"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4609295"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4609295"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4609295"></a>\p</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p57959300"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p57959300"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p57959300"></a>Prints the current query buffer to the standard output.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row4733289"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47852110"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47852110"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47852110"></a>\r</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p67095562"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p67095562"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p67095562"></a>Resets (clears) the query buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row54688265"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p564458"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p564458"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p564458"></a>\w FILE</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17110660"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17110660"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17110660"></a>Outputs the current query buffer to a file.</p>
</td>
</tr>
</tbody>
</table>
**Table  13**  Input and output meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table62130565"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row27656514"><th class="cellrowborder" valign="top" width="43%" id="mcps1.2.3.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25585200"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25585200"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25585200"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59135330"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59135330"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59135330"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row25232449"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53653520"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53653520"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53653520"></a>\copy { table [ ( column_list ) ] | ( query ) } { from | to } { filename | stdin | stdout | pstdin | pstdout } [ with ] [ binary ] [ oids ] [ delimiter [ as ] 'character' ] [ null [ as ] 'string' ] [ csv [ header ] [ quote [ as ] 'character' ] [ escape [ as ] 'character' ] [ force quote column_list | * ] [ force not null column_list ] [ force null column_list ]  ] [parallel integer]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1671244475815"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1671244475815"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1671244475815"></a>After logging in to the database on any psql client, you can import and export data. This is an operation of running the <strong id="b1582044051414"><a name="b1582044051414"></a><a name="b1582044051414"></a>SQL COPY</strong> command, but not the server that reads or writes data to a specified file. Instead, data is transferred between the server and the local file system. This means that the accessibility and permissions of the file are the permissions of the local user rather than the server. The initial database user permission is not required.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152146_note1924115273417"><a name="en-us_topic_0287275991_en-us_topic_0237152146_note1924115273417"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_note1924115273417"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152146_p54222394915"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p54222394915"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p54222394915"></a><strong id="b16131162113281"><a name="b16131162113281"></a><a name="b16131162113281"></a>\COPY</strong> applies only to small-scale data import in good format. It neither preprocesses invalid characters nor provides error tolerance. <strong id="b168921030172818"><a name="b168921030172818"></a><a name="b168921030172818"></a>COPY</strong> is preferred for data import.</p>
<p id="p156755320558"><a name="p156755320558"></a><a name="p156755320558"></a><strong id="b1311863614612"><a name="b1311863614612"></a><a name="b1311863614612"></a>\COPY</strong> specifies the number of clients to import data to implement parallel import of data files. Currently, the value ranges from 1 to 8.</p>
<p id="p65691446135618"><a name="p65691446135618"></a><a name="p65691446135618"></a>The parallel import using <strong id="b594042913418"><a name="b594042913418"></a><a name="b594042913418"></a>\COPY</strong> has the following constraints: Parallel import of temporary tables is not supported. Parallel import within transactions is not supported. Parallel import of binary files is not supported. Parallel import of data encrypted using AES-128 is not supported. In these cases, even if the parallel parameter is specified, a non-parallel process is performed.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row67017286"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59691067"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59691067"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59691067"></a>\echo   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3138273"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3138273"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3138273"></a>Writes a character string to the standard output.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row28244462"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6100063"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6100063"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6100063"></a>\i FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17880725"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17880725"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17880725"></a>Reads content from <em id="i14992194911282"><a name="i14992194911282"></a><a name="i14992194911282"></a>FILE</em> and uses them as the input for a query.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row17761542"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29398782"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29398782"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29398782"></a>\i+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p32491118"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p32491118"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p32491118"></a>Runs commands in an encrypted file.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row23984611"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63705339"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63705339"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63705339"></a>\ir FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59858848"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59858848"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59858848"></a>Is similar to <strong id="b196194412294"><a name="b196194412294"></a><a name="b196194412294"></a>\i</strong>, but resolves relative path names differently.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row1858722"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16338821"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16338821"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16338821"></a>\ir+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48376104"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48376104"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48376104"></a>Is similar to <strong id="b678132712918"><a name="b678132712918"></a><a name="b678132712918"></a>\i+</strong>, but resolves relative path names differently.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row32731753"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p34026319"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p34026319"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p34026319"></a>\o   [FILE]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4668491"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4668491"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4668491"></a>Saves all query results to a file.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row42016419"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47886808"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47886808"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47886808"></a>\qecho   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53626262"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53626262"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53626262"></a>Prints a character string to the query result output.</p>
</td>
</tr>
</tbody>
</table>



>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In  [Table 14](#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table44907299), option  **S**  indicates displaying the system object and  **PATTERN**  indicates displaying the additional description information and the name of the object to be displayed.

**Table  14**  Information display meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table44907299"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row64036265"><th class="cellrowborder" valign="top" width="13%" id="mcps1.2.5.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p21471471"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p21471471"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p21471471"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="37%" id="mcps1.2.5.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p761538"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p761538"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p761538"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1357773513104"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1357773513104"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1357773513104"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row61175475"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18824504"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18824504"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18824504"></a>\d[S+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p35202815"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p35202815"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p35202815"></a>Lists all tables, views, and sequences of all schemas in <strong id="b196821823154915"><a name="b196821823154915"></a><a name="b196821823154915"></a>search_path</strong>. When objects with the same name exist in different schemas in <strong id="b1354863094917"><a name="b1354863094917"></a><a name="b1354863094917"></a>search_path</strong>, only the object in the schema that ranks first in <strong id="b55491930104916"><a name="b55491930104916"></a><a name="b55491930104916"></a>search_path</strong> is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p195771735131011"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p195771735131011"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p195771735131011"></a>List all tables, views, and sequences of all schemas in <strong id="b20230154284913"><a name="b20230154284913"></a><a name="b20230154284913"></a>search_path</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen870119314254"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen870119314254"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen870119314254"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text19695054172319"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text19695054172319"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text19695054172319"></a>openGauss=# </span>\d</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row43094998"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1033944"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1033944"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1033944"></a>\d[S+]     NAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16640626"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16640626"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16640626"></a>Lists the structure of specified tables, views, and indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p357713531015"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p357713531015"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p357713531015"></a>List the structure of table <strong id="b124451623153612"><a name="b124451623153612"></a><a name="b124451623153612"></a>a</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen14668143818316"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen14668143818316"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen14668143818316"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1659919112244"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1659919112244"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1659919112244"></a>openGauss=# </span> \dtable+ a</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_rc676f2378e804a7db9ffa0f108079797"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a>\d+      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a>Lists all tables, views, and indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a>If <strong id="b1055814411508"><a name="b1055814411508"></a><a name="b1055814411508"></a>PATTERN</strong> is specified, only tables, views, and indexes whose names match <strong id="b455894145016"><a name="b455894145016"></a><a name="b455894145016"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p15577735191011"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15577735191011"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15577735191011"></a>List all tables, views, and indexes whose names start with <strong id="b1931749145012"><a name="b1931749145012"></a><a name="b1931749145012"></a>f</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen7795101223810"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen7795101223810"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen7795101223810"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1469339246"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1469339246"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1469339246"></a>openGauss=# </span>\d+ f*</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row17021576"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36570438"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36570438"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36570438"></a>\da[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1108737"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1108737"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1108737"></a>Lists all available aggregate functions, together with their return value types and the data types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a>If <strong id="b12141163295117"><a name="b12141163295117"></a><a name="b12141163295117"></a>PATTERN</strong> is specified, only aggregate functions whose names match <strong id="b214163205119"><a name="b214163205119"></a><a name="b214163205119"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p177201129103815"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p177201129103815"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p177201129103815"></a>List all available aggregate functions whose names start with <strong id="b289018152163"><a name="b289018152163"></a><a name="b289018152163"></a>f</strong>, together with their return value types and the data types.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen127242029173818"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen127242029173818"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen127242029173818"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text9351951248"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text9351951248"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text9351951248"></a>openGauss=# </span>\da f*</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row33501381"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29257302"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29257302"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p29257302"></a>\db[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p64560085"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p64560085"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p64560085"></a>Lists all available tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a>If <strong id="b1170915105217"><a name="b1170915105217"></a><a name="b1170915105217"></a>PATTERN</strong> is specified, only tablespaces whose names match <strong id="b15709152523"><a name="b15709152523"></a><a name="b15709152523"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p15577535101019"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15577535101019"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15577535101019"></a>List all available tablespaces whose names start with <strong id="b095921111526"><a name="b095921111526"></a><a name="b095921111526"></a>p</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen39531436154513"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen39531436154513"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen39531436154513"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text93891164243"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text93891164243"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text93891164243"></a>openGauss=# </span>\db p*</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row22955407"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47448677"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47448677"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47448677"></a>\dc[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p66270656"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p66270656"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p66270656"></a>Lists all available conversions between character sets.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a>If <strong id="b1643943217527"><a name="b1643943217527"></a><a name="b1643943217527"></a>PATTERN</strong> is specified, only conversions whose names match <strong id="b14391432115211"><a name="b14391432115211"></a><a name="b14391432115211"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p15577143512103"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15577143512103"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15577143512103"></a>List all available conversions between character sets.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen10277181254816"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen10277181254816"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen10277181254816"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text584951211241"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text584951211241"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text584951211241"></a>openGauss=# </span>\dc *</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row9670257"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p45093353"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p45093353"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p45093353"></a>\dC[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28682990"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28682990"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28682990"></a>Lists all type conversions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a>If <strong id="b20189102355317"><a name="b20189102355317"></a><a name="b20189102355317"></a>PATTERN</strong> is specified, only conversions whose names match <strong id="b1518920233533"><a name="b1518920233533"></a><a name="b1518920233533"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p15772356108"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15772356108"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p15772356108"></a>List all type conversion whose patten names start with <strong id="b842352706164521"><a name="b842352706164521"></a><a name="b842352706164521"></a>c</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen209676130533"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen209676130533"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen209676130533"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text17999171352413"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text17999171352413"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text17999171352413"></a>openGauss=# </span>\dC c*</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row22085710"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44112084"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44112084"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44112084"></a>\dd[S]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16309022"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16309022"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16309022"></a>Lists descriptions about objects matching <strong id="b1853904610536"><a name="b1853904610536"></a><a name="b1853904610536"></a>PATTERN</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a>If <strong id="b103552034543"><a name="b103552034543"></a><a name="b103552034543"></a>PATTERN</strong> is not specified, all visible objects are displayed. The objects include aggregations, functions, operators, types, relations (table, view, index, sequence, and large object), and rules.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p165775358102"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p165775358102"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p165775358102"></a>List all visible objects.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen853411371558"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen853411371558"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen853411371558"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text161020156244"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text161020156244"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text161020156244"></a>openGauss=# </span>\dd</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row2818067"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26936868"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26936868"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26936868"></a>\ddp       [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p12102568"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p12102568"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p12102568"></a>Lists all default permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a>If <strong id="b648574615549"><a name="b648574615549"></a><a name="b648574615549"></a>PATTERN</strong> is specified, only permissions whose names match <strong id="b18485194635413"><a name="b18485194635413"></a><a name="b18485194635413"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p2013319535553"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p2013319535553"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p2013319535553"></a>List all default permissions.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen611671118568"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen611671118568"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen611671118568"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text141271612240"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text141271612240"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text141271612240"></a>openGauss=# </span>\ddp</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row32410867"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65613749"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65613749"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65613749"></a>\dD[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22994959"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22994959"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22994959"></a>Lists all available domains.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a>If <strong id="b1755732075510"><a name="b1755732075510"></a><a name="b1755732075510"></a>PATTERN</strong> is specified, only domains whose names match <strong id="b1355722045512"><a name="b1355722045512"></a><a name="b1355722045512"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p757763512103"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p757763512103"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p757763512103"></a>List all available domains.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen470324716013"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen470324716013"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen470324716013"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text9949616112413"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text9949616112413"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text9949616112413"></a>openGauss=# </span>\dD</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_row15593174194714"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p85931944473"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p85931944473"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p85931944473"></a>\ded[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p95931411475"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p95931411475"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p95931411475"></a>Lists all Data Source objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p05931043472"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p05931043472"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p05931043472"></a>If <strong id="b671955785517"><a name="b671955785517"></a><a name="b671955785517"></a>PATTERN</strong> is specified, only objects whose names match <strong id="b6719115775515"><a name="b6719115775515"></a><a name="b6719115775515"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p457743571018"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p457743571018"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p457743571018"></a>List all Data Source objects.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen64435207113"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen64435207113"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen64435207113"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text28891517152416"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text28891517152416"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text28891517152416"></a>openGauss=# </span>\ded</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row6665173254513"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51424905"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51424905"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51424905"></a>\det[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4667762"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4667762"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4667762"></a>Lists all external tables.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a>If <strong id="b65141639145619"><a name="b65141639145619"></a><a name="b65141639145619"></a>PATTERN</strong> is specified, only tables whose names match <strong id="b75149390562"><a name="b75149390562"></a><a name="b75149390562"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1157773515101"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1157773515101"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1157773515101"></a>List all external tables.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1187219441618"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1187219441618"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1187219441618"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text686621812249"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text686621812249"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text686621812249"></a>openGauss=# </span>\det</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1466518322451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36274241"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36274241"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36274241"></a>\des[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52532403"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52532403"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52532403"></a>Lists all external servers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a>If <strong id="b989511785711"><a name="b989511785711"></a><a name="b989511785711"></a>PATTERN</strong> is specified, only servers whose names match <strong id="b1389515718571"><a name="b1389515718571"></a><a name="b1389515718571"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p14577163520106"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p14577163520106"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p14577163520106"></a>List all external servers.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen471819181217"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen471819181217"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen471819181217"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text12795219172412"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text12795219172412"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text12795219172412"></a>openGauss=# </span>\des</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1566443264520"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1141657"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1141657"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1141657"></a>\deu[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25365425"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25365425"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25365425"></a>Lists user mappings.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a>If <strong id="b205467313577"><a name="b205467313577"></a><a name="b205467313577"></a>PATTERN</strong> is specified, only mappings whose names match <strong id="b13546203195712"><a name="b13546203195712"></a><a name="b13546203195712"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p2577153501020"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p2577153501020"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p2577153501020"></a>List user mappings.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen969244719217"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen969244719217"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen969244719217"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text197591120132412"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text197591120132412"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text197591120132412"></a>openGauss=# </span>\deu</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row3663163284519"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37503373"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37503373"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37503373"></a>\dew[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59707645"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59707645"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p59707645"></a>Lists foreign-data wrappers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a>If <strong id="b226419285585"><a name="b226419285585"></a><a name="b226419285585"></a>PATTERN</strong> is specified, only wrappers whose names match <strong id="b7264112805816"><a name="b7264112805816"></a><a name="b7264112805816"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p957710356104"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p957710356104"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p957710356104"></a>List foreign-data wrappers.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1325519129311"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1325519129311"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1325519129311"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text11688821132412"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text11688821132412"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text11688821132412"></a>openGauss=# </span>\dew</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row196627321457"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"></a>\df[antw][S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a>Lists all available functions, together with their parameters and return types. <strong id="b0398171815595"><a name="b0398171815595"></a><a name="b0398171815595"></a>a</strong> indicates an aggregate function, <strong id="b439841815913"><a name="b439841815913"></a><a name="b439841815913"></a>n</strong> indicates a common function, <strong id="b439871895910"><a name="b439871895910"></a><a name="b439871895910"></a>t</strong> indicates a trigger, and <strong id="b1039812186599"><a name="b1039812186599"></a><a name="b1039812186599"></a>w</strong> indicates a window function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a>If <strong id="b77194338591"><a name="b77194338591"></a><a name="b77194338591"></a>PATTERN</strong> is specified, only functions whose names match <strong id="b16719433195920"><a name="b16719433195920"></a><a name="b16719433195920"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p857783511019"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p857783511019"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p857783511019"></a>Lists all available functions, together with their parameters and return types.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen11242350437"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen11242350437"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen11242350437"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text146961322132420"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text146961322132420"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text146961322132420"></a>openGauss=# </span>\df</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row76611832104512"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63869018"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63869018"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63869018"></a>\dF[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6007965"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6007965"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6007965"></a>Lists all text search configurations.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a>If <strong id="b42019151904"><a name="b42019151904"></a><a name="b42019151904"></a>PATTERN</strong> is specified, only configurations whose names match <strong id="b1220615601"><a name="b1220615601"></a><a name="b1220615601"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1577183531020"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1577183531020"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1577183531020"></a>List all text search configurations.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen46672584514"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen46672584514"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen46672584514"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text2622523112418"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text2622523112418"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text2622523112418"></a>openGauss=# </span>\dF+</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row14660153211451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4463500"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4463500"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4463500"></a>\dFd[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25999205"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25999205"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25999205"></a>Lists all text search dictionaries.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a>If <strong id="b893220321104"><a name="b893220321104"></a><a name="b893220321104"></a>PATTERN</strong> is specified, only dictionaries whose names match <strong id="b1693211325018"><a name="b1693211325018"></a><a name="b1693211325018"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p185326114612"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p185326114612"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p185326114612"></a>List all text search dictionaries.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen29572448619"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen29572448619"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen29572448619"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text145941524132419"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text145941524132419"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text145941524132419"></a>openGauss=# </span>\dFd</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row5660432134513"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17477084"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17477084"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17477084"></a>\dFp[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6357682"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6357682"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6357682"></a>Lists all text search parsers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a>If <strong id="b738472510111"><a name="b738472510111"></a><a name="b738472510111"></a>PATTERN</strong> is specified, only parsers whose names match <strong id="b163845251916"><a name="b163845251916"></a><a name="b163845251916"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1457719355104"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1457719355104"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1457719355104"></a>List all text search parsers.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen411214129251"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen411214129251"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen411214129251"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1576432516240"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1576432516240"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1576432516240"></a>openGauss=# </span>\dFp</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row16659113217451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27934725"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27934725"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27934725"></a>\dFt[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48120228"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48120228"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48120228"></a>Lists all text search templates.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a>If <strong id="b13006014216"><a name="b13006014216"></a><a name="b13006014216"></a>PATTERN</strong> is specified, only templates whose names match <strong id="b930015016210"><a name="b930015016210"></a><a name="b930015016210"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p11577135161010"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p11577135161010"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p11577135161010"></a>List all text search templates.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen167381037132518"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen167381037132518"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen167381037132518"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1061317268248"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1061317268248"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1061317268248"></a>openGauss=# </span>\dFt</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row10658193213457"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28358554"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28358554"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28358554"></a>\dg[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25942514"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25942514"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25942514"></a>Lists all database roles.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_note44053031"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_note44053031"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_note44053031"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7501312"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7501312"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7501312"></a>Since the concepts of "users" and "groups" have been unified into "roles", this command is now equivalent to <strong id="b185717569187"><a name="b185717569187"></a><a name="b185717569187"></a>\du</strong>. To be compatible with earlier versions, two commands are reserved.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a>If <strong id="b8225201011814"><a name="b8225201011814"></a><a name="b8225201011814"></a>PATTERN</strong> is specified, only roles whose names match <strong id="b422519108186"><a name="b422519108186"></a><a name="b422519108186"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p857783591012"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p857783591012"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p857783591012"></a>List all database roles whose names start with <strong id="b12519718161812"><a name="b12519718161812"></a><a name="b12519718161812"></a>j</strong> and end with <strong id="b105197185187"><a name="b105197185187"></a><a name="b105197185187"></a>e</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1551485112618"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1551485112618"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1551485112618"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text194481927132410"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text194481927132410"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text194481927132410"></a>openGauss=# </span>\dg j?e</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row165715323454"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28670734"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28670734"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p28670734"></a>\dl</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7129116"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7129116"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7129116"></a>An alias for <strong id="b654622212199"><a name="b654622212199"></a><a name="b654622212199"></a>\lo_list</strong>, which shows a list of large objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p9577235131013"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p9577235131013"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p9577235131013"></a>List all large objects.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1850163162713"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1850163162713"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1850163162713"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1453432816248"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1453432816248"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1453432816248"></a>openGauss=# </span>\dl</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row2065511324451"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48869151"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48869151"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48869151"></a>\dL[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p452647"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p452647"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p452647"></a>Lists available procedural languages.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a>If <strong id="b169681346161915"><a name="b169681346161915"></a><a name="b169681346161915"></a>PATTERN</strong> is specified, only languages whose names match <strong id="b15968154671915"><a name="b15968154671915"></a><a name="b15968154671915"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1457723514101"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1457723514101"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1457723514101"></a>List available procedural languages.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen9767751132710"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen9767751132710"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen9767751132710"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1042912912240"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1042912912240"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1042912912240"></a>openGauss=# </span>\dL</pre>
</td>
</tr>
<tr id="row93231321540"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="p2032323216413"><a name="p2032323216413"></a><a name="p2032323216413"></a>\dm[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p1732319321141"><a name="p1732319321141"></a><a name="p1732319321141"></a>Lists materialized views.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p13231632940"><a name="p13231632940"></a><a name="p13231632940"></a>If <strong id="b10260137438"><a name="b10260137438"></a><a name="b10260137438"></a>PATTERN</strong> is specified, only materialized views whose names match <strong id="b3260113710316"><a name="b3260113710316"></a><a name="b3260113710316"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p13232324416"><a name="p13232324416"></a><a name="p13232324416"></a>Lists materialized views.</p>
<a name="screen185528418111"></a><a name="screen185528418111"></a><pre class="screen" codetype="Sql" id="screen185528418111">openGauss=# \dm</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row13654232194512"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p50784313"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p50784313"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p50784313"></a>\dm[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p19888706"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p19888706"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p19888706"></a>Lists all schemas (namespace).</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a>If <strong id="b1748133212018"><a name="b1748133212018"></a><a name="b1748133212018"></a>PATTERN</strong> is specified, only schemas whose names match <strong id="b2481132102011"><a name="b2481132102011"></a><a name="b2481132102011"></a>PATTERN</strong> are displayed. By default, only schemas you created are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p9578133541012"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p9578133541012"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p9578133541012"></a>List information about all schemas whose names start with <strong id="b19222556202018"><a name="b19222556202018"></a><a name="b19222556202018"></a>d</strong>.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen16471162442818"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen16471162442818"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen16471162442818"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text172978300242"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text172978300242"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text172978300242"></a>openGauss=# </span> \dn+ d*</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row96531732164518"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p43691002"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p43691002"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p43691002"></a>\do[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22510532"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22510532"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22510532"></a>Lists all available operators with their operand and return types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a>If <strong id="b113139382210"><a name="b113139382210"></a><a name="b113139382210"></a>PATTERN</strong> is specified, only operators whose names match <strong id="b331333142211"><a name="b331333142211"></a><a name="b331333142211"></a>PATTERN</strong> are displayed. By default, only operators you created are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1810350172816"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1810350172816"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1810350172816"></a>List all available operators with their operand and return types.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen19243171018299"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen19243171018299"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen19243171018299"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text119663172413"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text119663172413"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text119663172413"></a>openGauss=# </span>\do</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row6653193214516"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26311271"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26311271"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26311271"></a>\dO[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p503566"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p503566"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p503566"></a>Lists collations.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a>If <strong id="b832316110230"><a name="b832316110230"></a><a name="b832316110230"></a>PATTERN</strong> is specified, only collations whose names match <strong id="b15323151112316"><a name="b15323151112316"></a><a name="b15323151112316"></a>PATTERN</strong> are displayed. By default, only collations you created are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p957863531018"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p957863531018"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p957863531018"></a>List collations.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen484512358294"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen484512358294"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen484512358294"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text4151332112414"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text4151332112414"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text4151332112414"></a>openGauss=# </span>\dO</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1565163254515"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27963622"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27963622"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27963622"></a>\dp [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48039187"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48039187"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48039187"></a>Lists tables, views, and related permissions.</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"></a>The following result about <strong id="b17528727162416"><a name="b17528727162416"></a><a name="b17528727162416"></a>\dp</strong> is displayed:</p>
<pre class="screen" id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a>rolename=xxxx/yyyy  --Assigning permissions to a role</pre>
<pre class="screen" id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a>=xxxx/yyyy  --Assigning permissions to public</pre>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><em id="i197532010102516"><a name="i197532010102516"></a><a name="i197532010102516"></a>xxxx</em> indicates assigned permissions, and <em id="i1875314101259"><a name="i1875314101259"></a><a name="i1875314101259"></a>yyyy</em> indicates roles with the assigned permissions. For details about permission descriptions, see <a href="#en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e">Table Description of permissions</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a>If <strong id="b240333410243"><a name="b240333410243"></a><a name="b240333410243"></a>PATTERN</strong> is specified, only tables and views whose names match <strong id="b840373492416"><a name="b840373492416"></a><a name="b840373492416"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p13219183511301"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p13219183511301"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p13219183511301"></a>List tables, views, and related permissions.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1582855623016"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1582855623016"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1582855623016"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1589713323244"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1589713323244"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1589713323244"></a>openGauss=# </span>\dp</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row147111714194611"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51988786"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51988786"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51988786"></a>\drds [PATTERN1 [PATTERN2]]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p50342148"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p50342148"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p50342148"></a>Lists all modified configuration parameters. These settings can be for roles, for databases, or for both. <strong id="b1472725962513"><a name="b1472725962513"></a><a name="b1472725962513"></a>PATTERN1</strong> and <strong id="b10727125919256"><a name="b10727125919256"></a><a name="b10727125919256"></a>PATTERN2</strong> indicate a role pattern and a database pattern, respectively.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a>If <strong id="b169229882618"><a name="b169229882618"></a><a name="b169229882618"></a>PATTERN</strong> is specified, only collations whose names match <strong id="b1092218816265"><a name="b1092218816265"></a><a name="b1092218816265"></a>PATTERN</strong> are displayed. If the default value is used or <strong id="b214811810265"><a name="b214811810265"></a><a name="b214811810265"></a>*</strong> is specified, all settings are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p16578103521013"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p16578103521013"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p16578103521013"></a>List all modified configuration parameters of the <strong id="b18191164342610"><a name="b18191164342610"></a><a name="b18191164342610"></a>postgres</strong> database.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1059193118474"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1059193118474"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1059193118474"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text471983313246"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text471983313246"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text471983313246"></a>openGauss=# </span>\drds * postgres</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1371120147466"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p33900150"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p33900150"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p33900150"></a>\dT[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18359055"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18359055"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18359055"></a>Lists all data types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a>If <strong id="b1914114317278"><a name="b1914114317278"></a><a name="b1914114317278"></a>PATTERN</strong> is specified, only types whose names match <strong id="b14141731279"><a name="b14141731279"></a><a name="b14141731279"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p115789354101"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p115789354101"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p115789354101"></a>List all data types.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen20987133092411"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen20987133092411"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen20987133092411"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text20620134182410"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text20620134182410"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text20620134182410"></a>openGauss=# </span>\dT</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row3711914134612"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6205284"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6205284"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6205284"></a>\du[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7550250"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7550250"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7550250"></a>Lists all database roles.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_note843393"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_note843393"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_note843393"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p23208538"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p23208538"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p23208538"></a>Since the concepts of "users" and "groups" have been unified into "roles", this command is now equivalent to <strong id="b1443111384279"><a name="b1443111384279"></a><a name="b1443111384279"></a>\dg</strong>. To be compatible with earlier versions, two commands are reserved.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a>If <strong id="b15164191012713"><a name="b15164191012713"></a><a name="b15164191012713"></a>PATTERN</strong> is specified, only roles whose names match <strong id="b4164810162717"><a name="b4164810162717"></a><a name="b4164810162717"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p13578123512103"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p13578123512103"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p13578123512103"></a>List all database roles.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen5126254102311"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen5126254102311"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen5126254102311"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1645911353245"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1645911353245"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1645911353245"></a>openGauss=# </span>\du</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row15710141412469"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44712736"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44712736"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44712736"></a>\dE[S+]   [PATTERN]</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15625431"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15625431"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15625431"></a>\di[S+]    [PATTERN]</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44539665"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44539665"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44539665"></a>\ds[S+]   [PATTERN]</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p41206969"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p41206969"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p41206969"></a>\dt[S+]    [PATTERN]</p>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3741605"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3741605"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3741605"></a>\dv[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52895139"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52895139"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52895139"></a>In this group of commands, the letters E, i, s, t, and v stand for a foreign table, index, sequence, table, or view, respectively. You can specify any or a combination of these letters sequenced in any order to obtain an object list. For example, <strong id="b52803505283"><a name="b52803505283"></a><a name="b52803505283"></a>\dit</strong> lists all indexes and tables. If a command is suffixed with a plus sign (+), physical dimensions and related descriptions of each object will be displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a>If <strong id="b257617258292"><a name="b257617258292"></a><a name="b257617258292"></a>PATTERN</strong> is specified, only objects whose names match <strong id="b1357616257292"><a name="b1357616257292"></a><a name="b1357616257292"></a>PATTERN</strong> are displayed. By default, only objects you created are displayed. You can specify <strong id="b3815842102917"><a name="b3815842102917"></a><a name="b3815842102917"></a>PATTERN</strong> or <strong id="b138155428295"><a name="b138155428295"></a><a name="b138155428295"></a>S</strong> to view other system objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p145781358102"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p145781358102"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p145781358102"></a>List all indexes and views.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1078582519238"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1078582519238"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1078582519238"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text14567136172411"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text14567136172411"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text14567136172411"></a>openGauss=# </span>\div</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row16710714114611"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6007243"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6007243"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6007243"></a>\dx[+]      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16824664"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16824664"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16824664"></a>Lists the extensions of the installed database.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"></a>If <strong id="b6774405304"><a name="b6774405304"></a><a name="b6774405304"></a>PATTERN</strong> is specified, only extensions whose names match <strong id="b5776402304"><a name="b5776402304"></a><a name="b5776402304"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1557883591019"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1557883591019"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1557883591019"></a>List the extensions of the installed database.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1453833842112"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1453833842112"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1453833842112"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text462873722415"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text462873722415"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text462873722415"></a>openGauss=# </span>\dx</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row7710111411469"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51840186"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51840186"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51840186"></a>\l[+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p42178773"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p42178773"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p42178773"></a>Lists the names, owners, character set encodings, and permissions of all the databases on the server.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p155789357107"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p155789357107"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p155789357107"></a>List the names, owners, character set encodings, and permissions of all the databases on the server.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1802747162019"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1802747162019"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1802747162019"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text1652813862413"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1652813862413"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text1652813862413"></a>openGauss=# </span> \l</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row571041411469"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6254336"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6254336"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p6254336"></a>\sf[+]   FUNCNAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36839216"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36839216"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36839216"></a>Displays function definitions.</p>
<div class="note" id="en-us_topic_0287275991_en-us_topic_0237152146_note122310174019"><a name="en-us_topic_0287275991_en-us_topic_0237152146_note122310174019"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_note122310174019"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0287275991_en-us_topic_0237152146_p162891010406"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p162891010406"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p162891010406"></a>If the function name contains parentheses, enclose the function name with quotation marks and add the parameter type list following the double quotation marks. Also enclose the list with parentheses.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p0578183514109"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p0578183514109"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p0578183514109"></a>Assume a function function_a and a function func()name. This parameter will be as follows:</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1786051111619"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen1786051111619"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen1786051111619"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text638443952418"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text638443952418"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text638443952418"></a>openGauss=# </span>\sf function_a
<span id="en-us_topic_0287275991_en-us_topic_0237152146_text5284104010240"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text5284104010240"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text5284104010240"></a>openGauss=# </span>\sf 
"func()name"(argtype1, argtype2)</pre>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1571016146465"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a>\z      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1183133819816"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1183133819816"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1183133819816"></a>Lists all tables, views, and sequences in the database and their access permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a>If a pattern is given, it is a regular expression, and only matched tables, views, and sequences are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_p1357863513102"><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1357863513102"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_p1357863513102"></a>List all tables, views, and sequences in the database and their access permissions.</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_screen566811281995"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_screen566811281995"></a><pre class="screen" codetype="Sql" id="en-us_topic_0287275991_en-us_topic_0237152146_screen566811281995"><span id="en-us_topic_0287275991_en-us_topic_0237152146_text102123413247"><a name="en-us_topic_0287275991_en-us_topic_0237152146_text102123413247"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_text102123413247"></a>openGauss=# </span>\z</pre>
</td>
</tr>
</tbody>
</table>


**Table  15**  Description of permissions

<a name="en-us_topic_0237152146_en-us_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_r6362dc74b9f541a69e0d66b9cf284ed9"><th class="cellrowborder" valign="top" width="28.060000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="71.94%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"><a name="en-us_topic_0237152146_en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_r388d73fb38384cdfb32ae9d850dd3401"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a>r</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a>SELECT: allows you to read data from specified tables and views.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r33152e6936d14a5fb3737d02dde40f04"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a>w</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a>UPDATE: allows you to update columns for specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r54e23ae96ce24fa3aede38cbe8eb043d"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a>a</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a>INSERT: allows you to insert data to specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r8de13ba27c7e462d9c629e5cb99a8b2a"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a>d</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a>DELETE: allows you to delete data from specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_rcbf3413a0b3c474083d3476a68ee82d5"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"><a name="en-us_topic_0237152146_en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"><a name="en-us_topic_0237152146_en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a>TRUNCATE: allows you to delete all data from specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r6a6605f29d5d430bbd35b6de4aabb4a8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"><a name="en-us_topic_0237152146_en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a>REFERENCES: allows you to create foreign key constraints. This parameter does not take effect because foreign keys are not supported.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r64aba48201764746bc641840af6cf98f"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"><a name="en-us_topic_0237152146_en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a>TRIGGER: allows you to create a trigger on specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r72c53b1c15e6415382fbcadb80b0a2ab"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a>EXECUTE: allows you to use specified functions and the operators that are realized by the functions.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_ra57588e97fc8463a9da73c485f9ba3e9"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a>U</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a>USAGE:</p>
<a name="en-us_topic_0237152146_en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><ul id="en-us_topic_0237152146_en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"><li>For procedural languages, allows you to specify a procedural language when creating a function.</li><li>For schemas, allows you to access objects included in specified schemas.</li><li>For sequences, allows you to use the nextval function.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r277c4595c8bb4eeeafdb11a78d0faeb7"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"></a>C</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"></a>CREATE:</p>
<a name="en-us_topic_0237152146_en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><ul id="en-us_topic_0237152146_en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"><li>For databases, allows you to create schemas within a database.</li><li>For schemas, allows you to create objects in a schema.</li><li>For tablespaces, allows you to create tables in a tablespace and set the tablespace to default one when creating databases and schemas.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_recdf18f778b44aefb363a58d7d9078a5"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a>CONNECT: allows you to access specified databases.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r4b9cfb178de547a3aab1ef5c119895dd"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"><a name="en-us_topic_0237152146_en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a>T</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"></a>TEMPORARY: allows you to create temporary tables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a>A</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a>ALTER: allows users to modify the attributes of a specified object.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a>P</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a>DROP: allows users to delete a specified object.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a>COMMENT: allows users to define or modify comments of a specified object.</p>
</td>
</tr>    
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a>i</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a>INDEX: allows users to create indexes on specified tables.
</p>
</td>
</tr>     
 <tr id="en-us_topic_0237152146_en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a57f56718f7554020b005366bf17273fe"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a8289b40b8d9d4ac1b1d57c72e6d0dfe9"></a>VACUUM: allows users to perform ANALYZE and VACUUM operations on specified tables.
</p>
</td>
</tr>       
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r2005c4e9bd924590a921dc3e81672ac1"><td class="cellrowborder" valign="top" width="28.060000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="71.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"><a name="en-us_topic_0237152146_en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a>Authorization options for preceding permissions.</p>
</td>
</tr>
</tbody>
</table>

**Table  16**  Formatting meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table53911699"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row23785826"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p19011743"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p19011743"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p19011743"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18693083"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18693083"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18693083"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row6577016"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11347706"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11347706"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11347706"></a>\a</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p60515607"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p60515607"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p60515607"></a>Controls the switchover between unaligned mode and aligned mode.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_redf0249c3f5d46fa9e110c5096e8c514"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a>\C   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"><a name="en-us_topic_0237152146_en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a>Sets the title of any table being printed as the result of a query or cancels such a setting.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row27385651"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3645265"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3645265"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3645265"></a>\f     [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26831088"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26831088"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26831088"></a>Sets a field separator for unaligned query output.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row48520085"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37812775"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37812775"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p37812775"></a>\H</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0237152146_en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><ul id="en-us_topic_0237152146_en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"><li>If the text format schema is used, switches to the HTML format.</li><li>If the HTML format schema is used, switches to the text format.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row8534616"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20215335"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20215335"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20215335"></a>\pset NAME  [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26829471"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26829471"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p26829471"></a>Sets options affecting the output of query result tables. For details about the value of <strong id="b1173141411383"><a name="b1173141411383"></a><a name="b1173141411383"></a>NAME</strong>, see <a href="#en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table22053343">Table Adjustable printing options</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row55470150"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p54115012"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p54115012"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p54115012"></a>\t    [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p10649401"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p10649401"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p10649401"></a>Switches the information and row count footer of the output column name.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row44427513"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44110692"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44110692"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44110692"></a>\T   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36044674"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36044674"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p36044674"></a>Specifies attributes to be placed within the table tag in HTML output format. If the parameter is not configured, the attributes are not set.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row14964377"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4155021"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4155021"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4155021"></a>\x   [on|off|auto]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1012450"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1012450"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p1012450"></a>Switches expanded table formatting modes.</p>
</td>
</tr>
</tbody>
</table>

**Table  17**  Adjustable printing options

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table22053343"></a>
<table><thead align="left"><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row34213901"><th class="cellrowborder" valign="top" width="21.130000000000003%" id="mcps1.2.4.1.1"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25176457"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25176457"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25176457"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="38.830000000000005%" id="mcps1.2.4.1.2"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p46637289"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p46637289"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p46637289"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="40.040000000000006%" id="mcps1.2.4.1.3"><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row50968660"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48693618"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48693618"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48693618"></a>border</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25806188"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25806188"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25806188"></a>The value must be a number. In general, a larger number indicates wider borders and more table lines.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"><li>The value is an integer greater than 0 in HTML format.</li><li>The value range in other formats is as follows:<a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"><li><strong id="b4729116194114"><a name="b4729116194114"></a><a name="b4729116194114"></a>0</strong>: no border</li><li><strong id="b17807113715418"><a name="b17807113715418"></a><a name="b17807113715418"></a>1</strong>: internal dividing line</li><li><strong id="b683894410417"><a name="b683894410417"></a><a name="b683894410417"></a>2</strong>: table frame</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row34608783"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p35270535"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p35270535"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p35270535"></a>expanded (or x)</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p32046081"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p32046081"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p32046081"></a>Switches between regular and expanded formats.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"><li>When the expanded format is enabled, query results are displayed in two columns, with the column name on the left and the data on the right. This format is useful if the data does not fit the screen in the normal "horizontal" format.</li><li>The expanded format is used when the query output is wider than the screen. Otherwise, the regular format is used. The regular format is effective only in the aligned and wrapped formats.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row48999878"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p13471594"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p13471594"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p13471594"></a>fieldsep</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4665381"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4665381"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4665381"></a>Specifies the field separator to be used in unaligned output format. In this way, you can create tab- or comma-separated output required by other programs. To set a tab as field separator, type <strong id="b4461142417431"><a name="b4461142417431"></a><a name="b4461142417431"></a>\pset fieldsep '\t'</strong>. The default field separator is a vertical bar ('|').</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row27640281"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p14913811"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p14913811"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p14913811"></a>fieldsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47973175"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47973175"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47973175"></a>Sets the field separator to be used in unaligned output format to zero bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row33391988"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4025501"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4025501"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p4025501"></a>footer</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15783270"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15783270"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15783270"></a>Enables or disables the display of table footers.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row45950588"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63319442"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63319442"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p63319442"></a>format</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18107603"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18107603"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18107603"></a>Selects the output format. Unique abbreviations are allowed. (This means a single letter is sufficient.)</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a>Value range:</p>
<a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"><li><strong id="b1442332617449"><a name="b1442332617449"></a><a name="b1442332617449"></a>unaligned</strong>: Write all columns of a row on one line, separated by the currently active column separator.</li><li><strong id="b1634111350440"><a name="b1634111350440"></a><a name="b1634111350440"></a>aligned</strong>: This format is standard and human-readable.</li><li><strong id="b152038463447"><a name="b152038463447"></a><a name="b152038463447"></a>wrapped</strong>: This format is similar to <strong id="b17203746134414"><a name="b17203746134414"></a><a name="b17203746134414"></a>aligned</strong>, but includes the packaging cross-line width data value to suit the width of the target column output.</li><li><strong id="b1175610154518"><a name="b1175610154518"></a><a name="b1175610154518"></a>html</strong>: This format outputs table to the markup language for a document. The output is not a complete document.</li><li><strong id="b1370216291453"><a name="b1370216291453"></a><a name="b1370216291453"></a>latex</strong>: This format outputs table to the markup language for a document. The output is not a complete document.</li><li><strong id="b132504810459"><a name="b132504810459"></a><a name="b132504810459"></a>troff-ms</strong>: This format outputs table to the markup language for a document. The output is not a complete document.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row2985006"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15611992"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15611992"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15611992"></a>null</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p2385004"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p2385004"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p2385004"></a>Sets a character string to be printed in place of a null value.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a>By default, nothing is printed, which can easily be mistaken for an empty character string.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row50084564"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p56659409"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p56659409"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p56659409"></a>numericlocale</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17751162"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17751162"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17751162"></a>Enables or disables the display of a locale-specific character to separate groups of digits to the left of the decimal marker.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"><li><strong id="b118431604479"><a name="b118431604479"></a><a name="b118431604479"></a>on</strong>: The specified separator is displayed.</li><li><strong id="b1586917414476"><a name="b1586917414476"></a><a name="b1586917414476"></a>off</strong>: The specified separator is not displayed.</li></ul>
<p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a>If this parameter is ignored, the default separator is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1331233795812"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16938075"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16938075"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p16938075"></a>pager</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p23113433"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p23113433"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p23113433"></a>Controls the use of a pager for query and gsql help outputs. If the <strong id="b162564395471"><a name="b162564395471"></a><a name="b162564395471"></a>PAGER</strong> environment variable is set, the output is piped to the specified program. Otherwise, a platform-dependent default is used.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><ul id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"><li><strong id="b67691954104711"><a name="b67691954104711"></a><a name="b67691954104711"></a>on</strong>: The pager is used for terminal output that does not fit the screen.</li><li><strong id="b44191531487"><a name="b44191531487"></a><a name="b44191531487"></a>off</strong>: The pager is not used.</li><li><strong id="b84120944819"><a name="b84120944819"></a><a name="b84120944819"></a>always</strong>: The pager is used for all terminal output regardless of whether it fits the screen.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0287275991_row73114373584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58586323"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58586323"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58586323"></a>recordsep</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p43971123"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p43971123"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p43971123"></a>Specifies the record separator to be used in unaligned output format.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row7310173713589"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27386289"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27386289"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27386289"></a>recordsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p54316068"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p54316068"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p54316068"></a>Specifies the record separator to be used in unaligned output format to zero bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row130916372586"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p46302507"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p46302507"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p46302507"></a>tableattr (or T)</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48381391"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48381391"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p48381391"></a>Specifies attributes to be placed inside the HTML table tag in HTML output format (such as cellpadding or bgcolor). Note that you do not need to specify border because it has been used by <strong id="b1958925819485"><a name="b1958925819485"></a><a name="b1958925819485"></a>\pset border</strong>. If no value is given, the table attributes do not need to be set.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row2030903719584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3641760"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3641760"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p3641760"></a>title</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p34572433"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p34572433"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p34572433"></a>Specifies the table title for any subsequently printed tables. This can be used to give your output descriptive tags. If no value is given, the title does not need to be set.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0287275991_row1130816371584"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53767637"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53767637"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53767637"></a>tuples_only (or t)</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25003860"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25003860"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p25003860"></a>Enables or disables the tuples-only mode. Full display may show extra information, such as column headers, titles, and footers. In tuples_only mode, only the table data is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a><a name="en-us_topic_0287275991_en-us_topic_0237152146_en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a>-</p>
</td>
</tr>
<tr id="row6994143813813"><td class="cellrowborder" valign="top" width="21.130000000000003%" headers="mcps1.2.4.1.1 "><p id="p1799514381887"><a name="p1799514381887"></a><a name="p1799514381887"></a>feedback</p>
</td>
<td class="cellrowborder" valign="top" width="38.830000000000005%" headers="mcps1.2.4.1.2 "><p id="p16995153810817"><a name="p16995153810817"></a><a name="p16995153810817"></a>Specifies whether to output the number of result lines.</p>
</td>
<td class="cellrowborder" valign="top" width="40.040000000000006%" headers="mcps1.2.4.1.3 "><p id="p139951384818"><a name="p139951384818"></a><a name="p139951384818"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  18**  Connection meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table37189353"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row51130770"><th class="cellrowborder" valign="top" width="21.490000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47951669"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47951669"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47951669"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.56999999999999%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58880018"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58880018"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58880018"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row4552143"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p30341711"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p30341711"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p30341711"></a>\c[onnect]    [DBNAME|- USER|- HOST|- PORT|-]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22048137"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22048137"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22048137"></a>Connects to a new database. The current database is postgres. If a database name contains more than 63 bytes, only the first 63 bytes are valid and are used for connection. However, the database name displayed in the command line of <strong id="b9968132105219"><a name="b9968132105219"></a><a name="b9968132105219"></a>gsql</strong> is still the name before the truncation.</p>
<div class="note" id="en-us_topic_0237152146_note131214284146"><a name="en-us_topic_0237152146_note131214284146"></a><a name="en-us_topic_0237152146_note131214284146"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237152146_p91237286143"><a name="en-us_topic_0237152146_p91237286143"></a><a name="en-us_topic_0237152146_p91237286143"></a>If the database login user is changed during reconnection, you need to enter the password for the new user. The maximum length of the password is 999 bytes, which is restricted by the maximum value of the GUC parameter <strong id="b1878115469526"><a name="b1878115469526"></a><a name="b1878115469526"></a>password_max_length</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row28507487"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p13150509"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p13150509"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p13150509"></a>\encoding [ENCODING]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51975191"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51975191"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p51975191"></a>Sets the client character set encoding.</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"></a>This command shows the current encoding if it has no parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row10803172"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65742650"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65742650"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65742650"></a>\conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20139181"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20139181"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20139181"></a>Outputs information about the current database connection.</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  19**  OS meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table32146234"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row57810541"><th class="cellrowborder" valign="top" width="21.87%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52142277"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52142277"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p52142277"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="47.11%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p62774893"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p62774893"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p62774893"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="31.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152146_en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row51601549"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18975950"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18975950"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p18975950"></a>\cd       [DIR]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p60656983"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p60656983"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p60656983"></a>Changes the current working directory.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row9041943"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p61308768"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p61308768"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p61308768"></a>\setenv NAME    [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p30861763"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p30861763"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p30861763"></a>Sets the <strong id="b19170132685413"><a name="b19170132685413"></a><a name="b19170132685413"></a>NAME</strong> environment variable to <strong id="b51701726185411"><a name="b51701726185411"></a><a name="b51701726185411"></a>VALUE</strong>. If <strong id="b17172142610549"><a name="b17172142610549"></a><a name="b17172142610549"></a>VALUE</strong> is not provided, do not set the environment variable.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"><a name="en-us_topic_0237152146_en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row66697655"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p33800946"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p33800946"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p33800946"></a>\timing   [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20643789"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20643789"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20643789"></a>Toggles a display of how long each SQL statement takes, in milliseconds.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237152146_en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><ul id="en-us_topic_0237152146_en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"><li><strong id="b18643145835411"><a name="b18643145835411"></a><a name="b18643145835411"></a>on</strong>: enables the display function.</li><li><strong id="b1272544554"><a name="b1272544554"></a><a name="b1272544554"></a>off</strong>: disables the display function.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row11936946"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27368537"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27368537"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p27368537"></a>\!      [COMMAND]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p49855699"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p49855699"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p49855699"></a>Escapes to a separate Unix shell or runs a Unix command.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"><a name="en-us_topic_0237152146_en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  20**  Variable meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table50076468"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row64340398"><th class="cellrowborder" valign="top" width="32.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44189784"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44189784"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p44189784"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="67.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22602779"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22602779"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p22602779"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row18885790"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53353993"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53353993"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p53353993"></a>\prompt     [TEXT] NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20243739"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20243739"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p20243739"></a>Prompts the user to use texts to specify a variable name.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row39029041"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7235720"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7235720"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p7235720"></a>\set     [NAME [VALUE]]</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17332671"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17332671"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p17332671"></a>Sets the <strong id="b1966245845518"><a name="b1966245845518"></a><a name="b1966245845518"></a>NAME</strong> internal variable to <strong id="b6662185811553"><a name="b6662185811553"></a><a name="b6662185811553"></a>VALUE</strong>. If more than one value is provided, <strong id="b366275885514"><a name="b366275885514"></a><a name="b366275885514"></a>NAME</strong> is set to the concatenation of all of them. If only one parameter is provided, the variable is set with an empty value.</p>
<p id="en-us_topic_0237152146_en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a>Some common variables are processed in another way in <strong id="b23241023145613"><a name="b23241023145613"></a><a name="b23241023145613"></a>gsql</strong>, and they are the combination of uppercase letters, numbers, and underscores. <a href="#en-us_topic_0237152146_en-us_topic_0059778645_t03d91a7973ee453b918f0b755284f04d">Table 21</a> describes a list of variables that are processed in a way different from other variables.</p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row40349036"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47046458"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47046458"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p47046458"></a>\unset NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11128665"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11128665"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p11128665"></a>Unsets or deletes the variable name of <strong id="b81491540115620"><a name="b81491540115620"></a><a name="b81491540115620"></a>gsql</strong>.</p>
</td>
</tr>
</tbody>
</table>

**Table  21**  Common \\set commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_t03d91a7973ee453b918f0b755284f04d"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_r19e99ba6f3f04b6f97fd0ad130d78d0f"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a>Command</p>
</th>
<th class="cellrowborder" valign="top" width="56.769999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"><a name="en-us_topic_0237152146_en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="19.919999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_r0208fc73fe24438cb17ad61db02a099d"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"></a>\set VERBOSITY value</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"><a name="en-us_topic_0237152146_en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a>This variable can be set to <strong id="b1751554015814"><a name="b1751554015814"></a><a name="b1751554015814"></a>default</strong>, <strong id="b4515104085814"><a name="b4515104085814"></a><a name="b4515104085814"></a>verbose</strong>, or <strong id="b151674055819"><a name="b151674055819"></a><a name="b151674055819"></a>terse</strong> to control redundant lines of error reports.</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"></a>Value range: <strong id="b8514183115586"><a name="b8514183115586"></a><a name="b8514183115586"></a>default</strong>, <strong id="b3514153195819"><a name="b3514153195819"></a><a name="b3514153195819"></a>verbose</strong>, <strong id="b751513116586"><a name="b751513116586"></a><a name="b751513116586"></a>terse</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_ra1695111fa224cd0bb92c833a2fecada"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a>\set ON_ERROR_STOP value</p>
<p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"></a></p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"></a>If this variable is set, the script execution stops immediately. If this script is invoked from another script, that script will be stopped immediately as well. If the primary script is invoked using the <strong id="b3828935125913"><a name="b3828935125913"></a><a name="b3828935125913"></a>-f</strong> option rather than from one <strong id="b082853505917"><a name="b082853505917"></a><a name="b082853505917"></a>gsql</strong> session, <strong id="b108281935155910"><a name="b108281935155910"></a><a name="b108281935155910"></a>gsql</strong> will return error code 3, indicating the difference between the current error and critical errors. (The error code for critical errors is 1.)</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"></a>Value range: <strong id="b826704416597"><a name="b826704416597"></a><a name="b826704416597"></a>on/off</strong>, <strong id="b12267104435916"><a name="b12267104435916"></a><a name="b12267104435916"></a>true/ false</strong>, <strong id="b142677447591"><a name="b142677447591"></a><a name="b142677447591"></a>yes/no</strong>, <strong id="b5268184495912"><a name="b5268184495912"></a><a name="b5268184495912"></a>1/0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237152146_en-us_topic_0059778645_r6f491220dd854416aa6e9743fdba68ab"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"><a name="en-us_topic_0237152146_en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a>\set RETRY [retry_times]</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a>Determines whether to enable the retry function if statement execution encounters errors. The parameter <strong id="b196739181603"><a name="b196739181603"></a><a name="b196739181603"></a>retry_times</strong> specifies the maximum number of retry times and the default value is <strong id="b267441818012"><a name="b267441818012"></a><a name="b267441818012"></a>5</strong>. Its value ranges from 5 to 10. If the retry function has been enabled, when you run the <strong id="b1281993219013"><a name="b1281993219013"></a><a name="b1281993219013"></a>\set RETRY</strong> command again, the retry function will be disabled.</p>
<p id="en-us_topic_0237152146_en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"><a name="en-us_topic_0237152146_en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a>The configuration file <strong id="b4118110111"><a name="b4118110111"></a><a name="b4118110111"></a>retry_errcodes.conf</strong> shows a list of errors. If these errors occur, retry is required. This configuration file is placed in the same directory as that for executable gsql programs. This configuration file is configured by the system rather than by users and cannot be modified by the users.</p>
<p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"></a>The retry function can be used in the following error scenarios:</p>
<a name="en-us_topic_0237152146_en-us_topic_0059778645_udf951c403c774faa9781472afc924066"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_udf951c403c774faa9781472afc924066"></a><ul id="en-us_topic_0237152146_en-us_topic_0059778645_udf951c403c774faa9781472afc924066"><li>YY001: TCP communication errors. Print information: <strong id="b1026173317118"><a name="b1026173317118"></a><a name="b1026173317118"></a>Connection reset by peer</strong>.</li><li>YY002: TCP communication errors. Print information: <strong id="b1526383916112"><a name="b1526383916112"></a><a name="b1526383916112"></a>Connection reset by peer</strong>.</li><li>YY003: Lock timeout. Print information: <strong id="b1318245017114"><a name="b1318245017114"></a><a name="b1318245017114"></a>Lock wait timeout.../wait transaction </strong><em id="i618216500113"><a name="i618216500113"></a><a name="i618216500113"></a>xxx</em><strong id="b181823501513"><a name="b181823501513"></a><a name="b181823501513"></a> sync time exceed </strong><em id="i101822502017"><a name="i101822502017"></a><a name="i101822502017"></a>xxx</em>.</li><li>YY004: TCP communication errors. Print information: <strong id="b595912133217"><a name="b595912133217"></a><a name="b595912133217"></a>Connection timed out</strong>.</li><li>YY005: Failed to deliver the <strong id="b1574132020212"><a name="b1574132020212"></a><a name="b1574132020212"></a>SET</strong> query command. Print information: <strong id="b1274142012217"><a name="b1274142012217"></a><a name="b1274142012217"></a>ERROR SET query</strong>.</li><li>YY006: Failed to apply for memory. Print information: <strong id="b153303296213"><a name="b153303296213"></a><a name="b153303296213"></a>memory is temporarily unavailable</strong>.</li><li>YY007: Communication library error. Print information: <strong id="b14937737625"><a name="b14937737625"></a><a name="b14937737625"></a>Memory allocate error</strong>.</li><li>YY008: Communication library error. Print information: <strong id="b078815442215"><a name="b078815442215"></a><a name="b078815442215"></a>No data in buffer</strong>.</li><li>YY009: Communication library error. Print information: <strong id="b167411532213"><a name="b167411532213"></a><a name="b167411532213"></a>Close because release memory</strong>.</li><li>YY010: Communication library error. Print information: <strong id="b1257219331231"><a name="b1257219331231"></a><a name="b1257219331231"></a>TCP disconnect</strong>.</li><li>YY011: Communication library error. Print information: <strong id="b10144444234"><a name="b10144444234"></a><a name="b10144444234"></a>SCTP disconnect</strong>.</li><li>YY012: Communication library error. Print information: <strong id="b1681531646"><a name="b1681531646"></a><a name="b1681531646"></a>Stream closed by remote</strong>.</li><li>YY013: Communication library error. Print information: <strong id="b913911168411"><a name="b913911168411"></a><a name="b913911168411"></a>Wait poll unknown error</strong>.</li><li>YY014, YY015, 53200, 08006, 08000, 57P01, XX003, XX009</li></ul>
<p id="en-us_topic_0237152146_en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"><a name="en-us_topic_0237152146_en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a>If an error occurs, <strong id="b393213919420"><a name="b393213919420"></a><a name="b393213919420"></a>gsql</strong> queries connection status of every <span id="text516315564533"><a name="text516315564533"></a><a name="text516315564533"></a>database node</span>. If the connection status is abnormal, <strong id="b39329391843"><a name="b39329391843"></a><a name="b39329391843"></a>gsql</strong> sleeps for 1 minute and tries again. In this case, the retries in most of the primary/standby switchover scenarios are involved.</p>
<div class="note" id="en-us_topic_0237152146_en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"><a name="en-us_topic_0237152146_en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0237152146_en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><ol id="en-us_topic_0237152146_en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"><li>Statements in transaction blocks cannot be retried upon a failure.</li><li>Retry is not supported if errors are found using ODBC or JDBC.</li><li>For SQL statements with unlogged tables, the retry is not supported if a node is faulty.</li><li>For <strong id="b1178582913512"><a name="b1178582913512"></a><a name="b1178582913512"></a>gsql</strong> client faults, the retry is not supported.</li></ol>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"></a>Value range of <strong id="b14414453708"><a name="b14414453708"></a><a name="b14414453708"></a>retry_times</strong>: 5-10</p>
</td>
</tr>
</tbody>
</table>

**Table  22**  Large object meta-commands

<a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_table55465693"></a>
<table><thead align="left"><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row47399046"><th class="cellrowborder" valign="top" width="28.249999999999996%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p14117557"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p14117557"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p14117557"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="71.75%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p2671501"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p2671501"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p2671501"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_row5164076"><td class="cellrowborder" valign="top" width="28.249999999999996%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15636991"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15636991"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p15636991"></a>\lo_list</p>
</td>
<td class="cellrowborder" valign="top" width="71.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58636730"><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58636730"></a><a name="en-us_topic_0237152146_en-us_topic_0059778645_en-us_topic_0058968158_p58636730"></a>Displays a list of all openGauss large objects stored in the database, along with comments provided for them.</p>
</td>
</tr>
</tbody>
</table>

**PATTERN**

The various  **\\d**  commands accept a  **PATTERN**  parameter to specify the object name to be displayed. In the simplest case, a pattern is just the exact name of the object. The characters within a pattern are normally folded to lower case, similar to those in SQL names. For example,  **\\dt FOO**  will display the table named  **foo**. As in SQL names, placing double quotation marks \("\) around a pattern prevents them being folded to lower case. If you need to include a double quotation mark \("\) in a pattern, write it as a pair of double quotation marks \(""\) within a double-quote sequence, which is in accordance with the rules for SQL quoted identifiers. For example,  **\\dt "FOO""BAR"**  will be displayed as a table named  **FOO"BAR**  instead of  **foo"bar**. You cannot put double quotation marks around just part of a pattern, which is different from the normal rules for SQL names. For example,  **\\dt FOO"FOO"BAR**  will be displayed as a table named  **fooFOObar**  if just part of a pattern is quoted.

Whenever the  **PATTERN**  parameter is omitted completely, the  **\\d**  commands display all objects that are visible in the current schema search path, which is equivalent to using an asterisk \(\*\) as the pattern. An object is regarded to be visible if it can be referenced by name without explicit schema qualification. To see all objects in the database regardless of their visibility, use a dot within double asterisks \(\*.\*\) as the pattern.

Within a pattern, the asterisk \(\*\) matches any sequence of characters \(including no characters\) and a question mark \(?\) matches any single character. This notation is comparable to Unix shell file name patterns. For example,  **\\dt int\***  displays tables whose names begin with  **int**. But within double quotation marks, the asterisk \(\*\) and the question mark \(?\) lose these special meanings and are just matched literally.

A pattern that contains a dot \(.\) is interpreted as a schema name pattern followed by an object name pattern. For example,  **\\dt foo\*.\*bar\***  displays all tables \(whose names include  **bar**\) in schemas starting with  **foo**. If no dot appears, then the pattern matches only visible objects in the current schema search path. Again, a dot within double quotation marks loses its special meaning and is matched literally.

Advanced users can use regular-expression notations, such as character classes. For example \[0-9\] can be used to match any digit. All regular expression special characters, except the following, work as specified in POSIX regular expressions:

-   A dot \(.\) is used as a separator.
-   An asterisk \(\*\) is translated into an asterisk prefixed with a dot \(.\*\), which is a regular-expression marking.
-   A question mark \(?\) is translated into a dot \(.\).
-   A dollar sign \($\) is matched literally.

You can, as required, write ?, \(R+|\), \(R|\), and R to the following  **PATTERN**  characters: ., R\*, and R?. The dollar sign \($\) does not need to work as a regular-expression character since the pattern must match the whole name, which is different from the usual interpretation of regular expressions. In other words, the dollar sign \($\) is automatically appended to your pattern. If you do not expect a pattern to be anchored, write an asterisk \(\*\) at its beginning or end. All regular-expression special characters within double quotation marks lose their special meanings and are matched literally. Regular-expression special characters in operator name patterns \(such as the  **\\do**  parameter\) are also matched literally.

## FAQs<a name="section1780814211263"></a>

**Low Connection Performance**

-   **log\_hostname**  is enabled, but DNS is incorrect.

    Connect to the database, and run  **show log\_hostname**  to check whether  **log\_hostname**  is enabled in the database.

    If it is enabled, the database kernel will use DNS to check the name of the host where the client is deployed. If the primary database node is configured with an incorrect or unreachable DNS server, the database connection will take a long time to set up. For details about this parameter, see the description of log\_hostname in section "GUC Parameter Description \> Error Reports and Logs \> Log Content" in the  _Developer Guide_.

-   The database kernel slowly runs the initialization statement.

    Problems are difficult to locate in this scenario. Try using the  **strace**  Linux trace command.

    ```
    strace gsql -U MyUserName -W MyPassWord -d postgres -h 127.0.0.1 -p 23508 -r -c '\q'
    ```

    The database connection process will be printed on the screen. If the following statement takes a long time to run:

    ```
    sendto(3, "Q\0\0\0\25SELECT VERSION()\0", 22, MSG_NOSIGNAL, NULL, 0) = 22
    poll([{fd=3, events=POLLIN|POLLERR}], 1, -1) = 1 ([{fd=3, revents=POLLIN}])
    ```

    It indicates that the  **SELECT VERSION\(\)**  statement was run slowly.

    After the database is connected, you can run the  **explain performance select version\(\)**  statement to find the reason why the initialization statement was run slowly. For more information, see "Performance Tuning \> SQL Tuning Guide \> SQL Execution Plan" in the  _Developer Guide_.

    An uncommon scenario is that the disk of the machine where the primary database node resides is full or faulty, affecting queries and leading to user authentication failures. As a result, the connection process is suspended. To solve this problem, simply clear the data disk space of the primary database node.

-   TCP connection is set up slowly.

    Adapt the steps of troubleshooting slow initialization statement execution. Use  **strace**. If the following statement is run slowly:

    ```
    connect(3, {sa_family=AF_FILE, path="/home/test/tmp/gaussdb_llt1/.s.PGSQL.61052"}, 110) = 0
    ```

    Or,

    ```
    connect(3, {sa_family=AF_INET, sin_port=htons(61052), sin_addr=inet_addr("127.0.0.1")}, 16) = -1 EINPROGRESS (Operation now in progress)
    ```

    It indicates that the physical connection between the client and the database is set up slowly. In this case, check whether the network is unstable or has high throughput.


**Problems in Setting Up Connections**

-   gsql: could not connect to server: No route to host

    This problem occurs generally because an unreachable IP address or port number was specified. Check whether the values of  **-h**  and  **-p**  parameters are correct.

-   gsql: FATAL:  Invalid username/password,login denied.

    This problem occurs generally because an incorrect username or password was entered. Contact the database administrator to check whether the username and password are correct.

-   gsql: FATAL:  Forbid remote connection with trust method!

    For security purposes, remote login in trust mode is forbidden. In this case, you need to modify the connection authentication information in the  **pg\_hba.conf**  file. For details, see "Database Security Management \> Client Access Authentication \> Configuration File Reference" in the  _Developer Guide_.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Do not modify the configurations of the openGauss host in the  **pg\_hba. conf**  file. Otherwise, the database may become faulty. It is recommended that service applications be deployed outside the openGauss.

-   If  **-h 127.0.0.1**  is specified, the database connection is successful. If  **-h 127.0.0.1**  is removed, the connection fails.

    Run the  **show unix\_socket\_directory**  SQL statement to check whether the Unix socket directory used by the primary database node is the same as that specified by  _$PGHOST_  in the  **shell**  directory.

    If they are different, set  **$PGHOST**  to the directory specified by  **unix\_socket\_directory**.

    For more information about  **unix\_socket\_directory**, see "GUC Parameter Description \> Connection and Authentication \> Connection Settings" in the  _Developer Guide_.

-   The "libpq.so" loaded mismatch the version of gsql, please check it.

    This problem occurs because the version of  **libpq.so**  used in the environment does not match that of  **gsql**. Run the  **ldd gsql**  command to check the version of the loaded  **libpq.so**, and then load correct  **libpq.so**  by modifying the environment variable  **LD\_LIBRARY\_PATH**.

-   gsql: symbol lookup error: xxx/gsql: undefined symbol: libpqVersionString

    This problem occurs because the version of  **libpq.so**  used in the environment does not match that of  **gsql**  \(or the PostgreSQL  **libpq.so**  exists in the environment\). Run the  **ldd gsql**  command to check the version of the loaded  **libpq.so**, and then load correct  **libpq.so**  by modifying the environment variable  **LD\_LIBRARY\_PATH**.


-   gsql: connect to server failed: Connection timed out

    Is the server running on host "xx.xxx.xxx.xxx" and accepting TCP/IP connections on port xxxx?

    This problem is caused by network connection faults. Check the network connection between the client and the database server. If you cannot ping from the client to the database server, the network connection is abnormal. Contact network management personnel for troubleshooting.

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

-   <u>gsql: FATAL:  permission denied for database "postgres"</u>

    <u>DETAIL:  User does not have CONNECT privilege.</u>

    This problem occurs because the user does not have the permission to access the database. To solve this problem, perform the following steps:

    1.  Connect to the database as the system administrator  **dbadmin**.

        ```
        gsql -d postgres -U dbadmin -p 15400
        ```

    2.  Grant the user with the permission to access the database.

        <u>GRANT CONNECT ON DATABASE postgres TO user1;</u>

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >Actually, some common misoperations may also cause a database connection failure, for example, entering an incorrect database name, username, or password. Misoperations are accompanied with an error information on the client tool.
        >```
        >gsql -d postgres -p 15400
        >gsql: FATAL:  database "postgres" does not exist
        >gsql -d postgres -U user1 -W gauss@789 -p 15400
        >gsql: FATAL:  Invalid username/password,login denied.
        >```


-   gsql: FATAL: sorry, too many clients already, active/non-active: 2/10/3.

    This problem occurs because the number of system connections exceeds the upper limit. Contact the database administrator to release unnecessary sessions.

    For details about how to view the number of user session connections, see  [Table 23](#en-us_topic_0237152147_en-us_topic_0059779356_t8e166846f0204638bd83f2fd35f44585).

    You can view the session status in the  **PG\_STAT\_ACTIVITY**  view. To release unnecessary sessions, use the  **pg\_terminate\_backend**  function.

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

    The value of  **pid**  is the thread ID of the session. Terminate the session using its thread ID.

    ```
    SELECT PG_TERMINATE_BACKEND(139834759993104);
    ```

    If a command output similar to the following is displayed, the session is successfully terminated.

    ```
    PG_TERMINATE_BACKEND
    ----------------------
     t
    (1 row)
    ```

    **Table  23**  Viewing the number of session connections

    <a name="en-us_topic_0237152147_en-us_topic_0059779356_t8e166846f0204638bd83f2fd35f44585"></a>
    <table><thead align="left"><tr id="en-us_topic_0237152147_en-us_topic_0059779356_r32046f7f632b492891276dd6f4bf8999"><th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237152147_en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"><a name="en-us_topic_0237152147_en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.58999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237152147_en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"><a name="en-us_topic_0237152147_en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a>Command</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237152147_en-us_topic_0059779356_rc644c3de5cac4e4891741cccf756b131"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152147_en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"><a name="en-us_topic_0237152147_en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a>View the maximum number of sessions connected to a specific user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152147_en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"><a name="en-us_topic_0237152147_en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a>Run the following command to view the upper limit of the number of <strong id="b52041931143119"><a name="b52041931143119"></a><a name="b52041931143119"></a>USER1</strong>'s session connections. <strong id="b214414497311"><a name="b214414497311"></a><a name="b214414497311"></a>-1</strong> indicates that no upper limit is set for the number of <strong id="b1214444910312"><a name="b1214444910312"></a><a name="b1214444910312"></a>user1</strong>'s session connections.</p>
    <pre class="screen" id="en-us_topic_0237152147_en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"><a name="en-us_topic_0237152147_en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a>SELECT ROLNAME,ROLCONNLIMIT FROM PG_ROLES WHERE ROLNAME='user1';
     rolname | rolconnlimit
    ---------+--------------
     user1    |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0237152147_en-us_topic_0059779356_r3ecf1d5dec914606a843db02e9fbd915"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152147_en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"><a name="en-us_topic_0237152147_en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a>View the maximum number of sessions connected to a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152147_en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"><a name="en-us_topic_0237152147_en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a>Run the following command to view the upper limit of the number of <strong id="b15769112133418"><a name="b15769112133418"></a><a name="b15769112133418"></a>postgres</strong>'s session connections. <strong id="b1636462716348"><a name="b1636462716348"></a><a name="b1636462716348"></a>-1</strong> indicates that no upper limit is set for the number of <strong id="b1136417277341"><a name="b1136417277341"></a><a name="b1136417277341"></a>postgres</strong>'s session connections.</p>
    <pre class="screen" id="en-us_topic_0237152147_en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"><a name="en-us_topic_0237152147_en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a>SELECT DATNAME,DATCONNLIMIT FROM PG_DATABASE WHERE DATNAME='postgres';
    
     datname  | datconnlimit
    ----------+--------------
     postgres |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0237152147_en-us_topic_0059779356_rdc10c65ce85d49b38dede86bc6dcd1d1"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237152147_en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"><a name="en-us_topic_0237152147_en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a>View the number of session connections that have been used by a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237152147_en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"><a name="en-us_topic_0237152147_en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a>Run the following command to view the number of session connections that have been used by <strong id="b776916459341"><a name="b776916459341"></a><a name="b776916459341"></a>postgres</strong>. <strong id="b18579178193519"><a name="b18579178193519"></a><a name="b18579178193519"></a>1</strong> indicates the number of session connections that have been used by <strong id="b75791893514"><a name="b75791893514"></a><a name="b75791893514"></a>postgres</strong>.</p>
    <pre class="screen" id="en-us_topic_0237152147_en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"><a name="en-us_topic_0237152147_en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a><a name="en-us_topic_0237152147_en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a>SELECT COUNT(*) FROM PG_STAT_ACTIVITY WHERE DATNAME='postgres';
     count 
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>


-   gsql: wait xxx.xxx.xxx.xxx:xxxx timeout expired

    When  **gsql**  initiates a connection request to the database, a 5-minute timeout period is used. If the database cannot correctly authenticate the client request and client identity within this period,  **gsql**  will exit the connection process for the current session, and will report the above error.

    Generally, this problem is caused by the incorrect host and port \(that is, the  _xxx_  part in the error information\) specified by the  **-h**  and  **-p**  parameters. As a result, the communication fails. Occasionally, this problem is caused by network faults. To resolve this problem, check whether the host name and port number of the database are correct.

-   gsql: could not receive data from server: Connection reset by peer.

    Check whether primary database node logs contain information similar to "FATAL: cipher file "/data/dbnode/server.key.cipher" has group or world access". This error is usually caused by tampering with the permissions for data directories or some key files by mistake. For details about how to correct the permissions, see related permissions for files on other normal instances.

-   gsql: FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.

    In  **pg\_hba.conf**  of the target primary database node, the authentication mode is set to  **gss**  for authenticating the IP address of the current client. However, this authentication algorithm cannot authenticate clients. Change the authentication algorithm to  **sha256**  and try again. For details, see "Database Security Management \> Client Access Authentication \> Configuration File Reference" in the  _Developer Guide_.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Do not modify the configurations of the openGauss host in the  **pg\_hba. conf**  file. Otherwise, the database may become faulty.
    >-   It is recommended that service applications be deployed outside the openGauss.


**Other Faults**

-   There is a core dump or abnormal exit due to the bus error.

    Generally, this problem is caused by changes in loading the shared dynamic library \(.so file in Linux\) during process running. Alternatively, if the process binary file changes, the execution code for the OS to load machines or the entry for loading a dependent library will change accordingly. In this case, the OS kills the process for protection purposes, generating a core dump file.

    To resolve this problem, try again. In addition, do not run service programs in openGauss during O&M operations, such as an upgrade, preventing such a problem caused by file replacement during the upgrade.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >A possible stack of the core dump file contains dl\_main and its function calling. The file is used by the OS to initialize a process and load the shared dynamic library. If the process has been initialized but the shared dynamic library has not been loaded, the process cannot be considered completely started.


