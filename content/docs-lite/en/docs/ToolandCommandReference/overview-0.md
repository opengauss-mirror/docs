# Overview<a name="EN-US_TOPIC_0294748922"></a>

## Basic Features<a name="en-us_topic_0059778819_s8ce37a15763045549311205e19f06a45"></a>

-   **Connect to the database**: By default, only the local server can be connected. To connect to a remote database, you must configure the server. For details, see  [Gsql Connection and Usage](../GettingStarted/gsql-connection-and-usage.md).

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If  **gsql**  is used to connect to a database, the connection timeout period will be 5 minutes. If the database has not correctly set up a connection and authenticated the identity of the client within this period,  **gsql**  will time out and exit.
    >To resolve this problem, see  [Troubleshooting](troubleshooting.md).

-   **Run SQL statements**: Interactively entered SQL statements and specified SQL statements in a file can be run.
-   **Run meta-commands**: Meta-commands help the administrator view database object information, query cache information, format SQL output, and connect to a new database. For details about meta-commands, see  [Meta-Command Reference](meta-command-reference.md).

## Advanced Features<a name="en-us_topic_0059778819_s999ec23443d04c7ab199c53189744b58"></a>

[Table 1](#en-us_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d)  lists the advanced features of  **gsql**.

**Table  1**  Advanced features of  **gsql**

<a name="en-us_topic_0059778819_t88d6eef25b234de4b4b0f7854aafa35d"></a>
<table><thead align="left"><tr id="en-us_topic_0059778819_r4b73260a43df46f6ba18d2326f63d3e8"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"><a name="en-us_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a><a name="en-us_topic_0059778819_a29f357ee25eb4073a6e89b1c17957f46"></a>Feature Name</p>
</th>
<th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"><a name="en-us_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a><a name="en-us_topic_0059778819_ad45cedfc72b04d209ad1655f0aac7443"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778819_re148610b2ba14890a4a2cbe1fb9f9cde"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"><a name="en-us_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a><a name="en-us_topic_0059778819_a63cc8b3ffd564309a1c89d410ed79a21"></a>Variable</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"><a name="en-us_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a><a name="en-us_topic_0059778819_ad26633563b4b47b3b82456226d549fbf"></a><strong id="b842352706112542"><a name="b842352706112542"></a><a name="b842352706112542"></a>gsql</strong> provides a variable feature that is similar to the <strong id="b842352706112628"><a name="b842352706112628"></a><a name="b842352706112628"></a>shell</strong> command of Linux. The following <strong id="b842352706112853"><a name="b842352706112853"></a><a name="b842352706112853"></a>\set</strong> meta-command of <strong id="b84235270611287"><a name="b84235270611287"></a><a name="b84235270611287"></a>gsql</strong> can be used to set a variable:</p>
<pre class="screen" id="en-us_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"><a name="en-us_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><a name="en-us_topic_0059778819_s10a86120f8954a6ca55f1196d90cd6a8"></a><strong id="en-us_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"><a name="en-us_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a><a name="en-us_topic_0059778819_a4c26ac112cf24aa4a59544ca1399f6d5"></a>\set</strong> <em id="en-us_topic_0059778819_a423967f56510409080e158d60d2b4c24"><a name="en-us_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a><a name="en-us_topic_0059778819_a423967f56510409080e158d60d2b4c24"></a>varname value</em></pre>
<p id="en-us_topic_0059778819_aee7fac646c524c4db69194069d742fcf"><a name="en-us_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a><a name="en-us_topic_0059778819_aee7fac646c524c4db69194069d742fcf"></a>To delete the variables set by the <strong id="b10669150353"><a name="b10669150353"></a><a name="b10669150353"></a>\set</strong> command, run the following command:</p>
<pre class="screen" id="en-us_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"><a name="en-us_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><a name="en-us_topic_0059778819_s125f2efde0c04fcfa844abd3345de09c"></a><strong id="en-us_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"><a name="en-us_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a><a name="en-us_topic_0059778819_afbdf2cf9940147d1b38744dc051c571d"></a>\unset</strong> <em id="en-us_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"><a name="en-us_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a><a name="en-us_topic_0059778819_af1641ddd6a1b41b09c8cbc9b033ca225"></a>varname</em></pre>
<div class="note" id="en-us_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"><a name="en-us_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><a name="en-us_topic_0059778819_ne8000c77528748f6bed28fbf75c2065d"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><a name="en-us_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"></a><ul id="en-us_topic_0059778819_u98c734fbc2c043de8056fd44bb914f5e"><li>A variable is a simple name-value pair. The value can be any characters in any length.</li><li>Variable names must consist of case-sensitive letters (including non-Latin letters), digits, and underscores (_).</li><li>If the <strong id="b842352706113455"><a name="b842352706113455"></a><a name="b842352706113455"></a>\set</strong> <em id="i842352697113527"><a name="i842352697113527"></a><a name="i842352697113527"></a>varname</em> meta-command (without the second parameter) is used, the variable is set without a value specified.</li><li>If the <strong id="b842352706114211"><a name="b842352706114211"></a><a name="b842352706114211"></a>\set</strong> meta-command without parameters is used, values of all variables are displayed.</li></ul>
</div></div>
<p id="en-us_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"><a name="en-us_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a><a name="en-us_topic_0059778819_a63f82373b7d74ee58ca06d7233656a10"></a>For details about variable examples and descriptions, see <a href="#en-us_topic_0059778819_en-us_topic_0058968129_li39134862">Variables</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_r457b7479b8204694b14e69200bb8eb7b"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"><a name="en-us_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a><a name="en-us_topic_0059778819_a44f6710088e9453789f62adbbdf8532c"></a>SQL substitution</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"><a name="en-us_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a><a name="en-us_topic_0059778819_a60f6f1c254e1494c87f66ea0a3534459"></a>Common SQL statements can be set to variables using the variable feature of <strong id="b842352706114318"><a name="b842352706114318"></a><a name="b842352706114318"></a>gsql</strong> to simplify operations.</p>
<p id="en-us_topic_0059778819_a38c61443f662466996d0824b10ea12fc"><a name="en-us_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a><a name="en-us_topic_0059778819_a38c61443f662466996d0824b10ea12fc"></a>For details about examples and descriptions about SQL substitution, see <a href="#en-us_topic_0059778819_en-us_topic_0058968129_li56915888">SQL substitution</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_rebf3bc2093a1493db2962cb59d3ebe5e"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"><a name="en-us_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a><a name="en-us_topic_0059778819_ab18d6658f2a541189c7d8b51f6253134"></a>Customized prompt</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"><a name="en-us_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a><a name="en-us_topic_0059778819_a70cb7b00ca3b4809aa5b933f3df1e445"></a>Prompts of <strong id="b84235270611441"><a name="b84235270611441"></a><a name="b84235270611441"></a>gsql</strong> can be customized. Prompts can be modified by changing the reserved three variables of <strong id="b842352706114448"><a name="b842352706114448"></a><a name="b842352706114448"></a>gsql</strong>: <em id="i84235269710735"><a name="i84235269710735"></a><a name="i84235269710735"></a>PROMPT1</em>, <em id="i84235269710740"><a name="i84235269710740"></a><a name="i84235269710740"></a>PROMPT2</em>, and <em id="i84235269710744"><a name="i84235269710744"></a><a name="i84235269710744"></a>PROMPT3</em>.</p>
<p id="en-us_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"><a name="en-us_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a><a name="en-us_topic_0059778819_a2ba2dc039cd348048e3f2f87b59f06d4"></a>These variables can be set to customized values or the values predefined by <strong id="b1474046547115624"><a name="b1474046547115624"></a><a name="b1474046547115624"></a>gsql</strong>. For details, see <a href="#en-us_topic_0059778819_en-us_topic_0058968129_li65414495">Prompt</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_r5efe8924bbc449bd97710897768e9a03"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"><a name="en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a><a name="en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a>Automatic command completion</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"><a name="en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><a name="en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"></a>According to the openGauss syntax rules, gsql supports automatic command completion by pressing <strong>Tab</strong>. This function is enabled when the <strong>--with-readline</strong> option is specified during compilation and the <strong>-r</strong> parameter is specified during client connection. For example, if you enter <strong>crea</strong> and then press <strong>Tab</strong>, gsql will change it to <strong>create</strong>.</p>
<div class="note" id="en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"><a name="en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><a name="en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><span class="notetitle"> Note:</span><div class="notebody"><a name="en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><a name="en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><ul id="en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"><li>Automatic completion of database SQL keywords such as SELECT, CREATE, and TABLE is supported. </li><li>Automatic completion of user-defined identifiers such as table names and view names is supported.</li>
<li>Automatic completion of meta-command options **S** and **+** is not supported. </li><li>Automatic completion of system catalogs prefixed with **pg_** or **gs_** is supported. </li><li>Completion of column types is not supported during table creation. </li><li>No completion is supported after the SELECT operation. </li><li>Automatic completion of constants and macros is not supported. </li><li>The **select * from a,b…** statement does not support automatic completion from the second table. The **insert into t1 (col1, col2, …)** statement does not support automatic completion from the second column. </li><li>Automatic completion of parameters after **with** in the CREATE TABLESPACE statement is not supported. </li><li>The local and global indexes cannot be automatically completed during index creation, and the rebuild index cannot be automatically completed during index modification. </li><li>Automatic completion of parameters of the user and superuser levels in the SET statement is supported. </li><li>Automatic completion of IF EXISTS is not supported.</li>
<li>Automatic completion of *Table name***.***Column name* is not supported, for example, **alter sequence owned by tableName.colName and owned by**. </li><li>Automatic completion of user-defined operators is not supported. If you copy and paste a command and press **Tab**, the command format may be incorrect. As a result, the command cannot be executed.</li></ul></div></div>
</td>
</tr>
<tr id="en-us_topic_0059778819_r5efe8924bbc449bd97710897768e9a03"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"><a name="en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a><a name="en-us_topic_0059778819_adb36f998bf7148d091daf15c6e104f05"></a>Historical client operation records</p>
</td>
<td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"><a name="en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><a name="en-us_topic_0059778819_a363dd0cef39947078205d99444faf743"></a><strong id="b84235270611487"><a name="b84235270611487"></a><a name="b84235270611487"></a>gsql</strong> can record historical client operations. This function is enabled by specifying the <strong id="b116883302218"><a name="b116883302218"></a><a name="b116883302218"></a>-r</strong> parameter when a client is connected. The number of historical records can be set using the <strong id="b6690229031543"><a name="b6690229031543"></a><a name="b6690229031543"></a>\set</strong> command. For example, <strong id="b842352706114854"><a name="b842352706114854"></a><a name="b842352706114854"></a>\set HISTSIZE 50</strong> indicates that the number of historical records is set to <strong id="b842352706114917"><a name="b842352706114917"></a><a name="b842352706114917"></a>50</strong>. <strong id="b842352706114924"><a name="b842352706114924"></a><a name="b842352706114924"></a>\set HISTSIZE 0</strong> indicates that the operation history is not recorded.</p>
<div class="note" id="en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"><a name="en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><a name="en-us_topic_0059778819_nb67c60d357644d98802305a02d312bbe"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><a name="en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"></a><ul id="en-us_topic_0059778819_u72ddc318d0184b3abdc617b792956d29"><li>The default number of historical records is <strong id="b842352706101057"><a name="b842352706101057"></a><a name="b842352706101057"></a>32</strong>. The maximum number of historical records is <strong id="b842352706102511"><a name="b842352706102511"></a><a name="b842352706102511"></a>500</strong>. If interactively entered SQL commands contain Chinese characters, only the UTF-8 encoding environment is supported.</li><li>For security reasons, the records containing sensitive words, such as <strong id="b84235270610178"><a name="b84235270610178"></a><a name="b84235270610178"></a>PASSWORD</strong> and <strong id="b842352706101714"><a name="b842352706101714"></a><a name="b842352706101714"></a>IDENTIFIED</strong>, are regarded sensitive and not recorded in historical information. This indicates that you cannot view these records in command output histories.</li></ul>
</div></div>
</td>
</tr>
</tbody>
</table>

-   <a name="en-us_topic_0059778819_en-us_topic_0058968129_li39134862"></a>Variables

    To set a variable, run the  **\\set**  meta-command of  **gsql**. For example, to set variable  _foo_  to  **bar**, run the following command:

    ```
    openGauss=# \set foo bar
    ```

    To reference the value of a variable, add a colon \(:\) before the variable. For example, to view the value of variable  _foo_, run the following command:

    ```
    openGauss=# \echo :foo
    bar
    ```

    The variable reference method is suitable for regular SQL statements and meta-commands.

    **gsql**  pre-defines some special variables and plans the values of these variables. To ensure compatibility with later versions, do not use these variables for other purposes. For details about special variables, see  [Table 2](#en-us_topic_0059778819_en-us_topic_0058968129_table45814285).

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   All the special variables consist of upper-case letters, digits, and underscores \(\_\).
    >-   To view the default value of a special variable, run the  **\\echo :**_varname_  meta-command, for example,  **\\echo :**_DBNAME_.

    **Table  2**  Settings of special variables

    <a name="en-us_topic_0059778819_en-us_topic_0058968129_table45814285"></a>
    <table><thead align="left"><tr id="en-us_topic_0059778819_en-us_topic_0058968129_row63384495"><th class="cellrowborder" valign="top" width="15%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"><a name="en-us_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a><a name="en-us_topic_0059778819_aac3251466c144663b1b3c78f89175fb3"></a>Variable</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.000000000000004%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778819_en-us_topic_0058968129_p56526422"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p56526422"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p56526422"></a>Setting Method</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778819_en-us_topic_0058968129_p8552256"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p8552256"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p8552256"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059778819_en-us_topic_0058968129_row33504320"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"><a name="en-us_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a><a name="en-us_topic_0059778819_a61623eb51765453baa8071ee47d4e3a7"></a>DBNAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"><a name="en-us_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a><a name="en-us_topic_0059778819_sf116faea53a04eae8021c56cf27f5ece"></a>\set DBNAME <em id="en-us_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"><a name="en-us_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a><a name="en-us_topic_0059778819_a6c42e38444c34c4fa1cd0f4f7bcf25e0"></a>dbname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p15409553"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p15409553"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p15409553"></a>Name of the connected database. This variable is set again when a database is connected.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row52760526"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"><a name="en-us_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a><a name="en-us_topic_0059778819_adacdc50a12fa4e7ba21ff201e4962973"></a>ECHO</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_se7962925861447dca766f73dd7e013c2"><a name="en-us_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a><a name="en-us_topic_0059778819_se7962925861447dca766f73dd7e013c2"></a>\set ECHO all | queries</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul23658891"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul23658891"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul23658891"><li>If this variable is set to <strong id="b10145244261543"><a name="b10145244261543"></a><a name="b10145244261543"></a>all</strong>, only the query information is displayed. This has the same effect as specifying the <strong id="b84235270614053"><a name="b84235270614053"></a><a name="b84235270614053"></a>-a</strong> parameter when <strong id="b340957130105555"><a name="b340957130105555"></a><a name="b340957130105555"></a>gsql</strong> is used to connect to a database.</li><li>If this variable is set to <strong id="b7674715751543"><a name="b7674715751543"></a><a name="b7674715751543"></a>queries</strong>, the command line and query information are displayed. This has the same effect as specifying the <strong id="b842352706135840"><a name="b842352706135840"></a><a name="b842352706135840"></a>-e</strong> parameter when <strong id="b77148645410546"><a name="b77148645410546"></a><a name="b77148645410546"></a>gsql</strong> is used to connect to a database.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row64235341"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"><a name="en-us_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a><a name="en-us_topic_0059778819_a4212f21ca64e49a8b47f850d5d6fe6fe"></a>ECHO_HIDDEN</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"><a name="en-us_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a><a name="en-us_topic_0059778819_sad4d76ff4fb14c939408ce42a18a68c6"></a>\set ECHO_HIDDEN  on | off | noexec</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_ad216beecced64389b3555e3cd9425bee"><a name="en-us_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a><a name="en-us_topic_0059778819_ad216beecced64389b3555e3cd9425bee"></a>When a meta-command (such as <strong id="b763208815105446"><a name="b763208815105446"></a><a name="b763208815105446"></a>\dg</strong>) is used to query database information, the value of this variable determines the query behavior.</p>
    <a name="en-us_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><a name="en-us_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"></a><ul id="en-us_topic_0059778819_u03d30b3036d1468994c718afe5ab01b6"><li>If this variable is set to <strong id="b10443412951543"><a name="b10443412951543"></a><a name="b10443412951543"></a>on</strong>, the query statements that are called by the meta-command are displayed, and then the query result is displayed. This has the same effect as specifying the <strong id="b940630578"><a name="b940630578"></a><a name="b940630578"></a>-E</strong> parameter when <strong id="b877059638"><a name="b877059638"></a><a name="b877059638"></a>gsql</strong> is used to connect to a database.</li><li>If this variable is set to <strong id="b20575873761543"><a name="b20575873761543"></a><a name="b20575873761543"></a>off</strong>, only the query result is displayed.</li><li>If this variable is set to <strong id="b11734790731543"><a name="b11734790731543"></a><a name="b11734790731543"></a>noexec</strong>, only the query information is displayed, and the query is not run.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row57132578"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"><a name="en-us_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a><a name="en-us_topic_0059778819_a90dd550172fa400aa519dac59b7c20e1"></a>ENCODING</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_s8c894db8f271491693385930cc9fa35c"><a name="en-us_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a><a name="en-us_topic_0059778819_s8c894db8f271491693385930cc9fa35c"></a>\set ENCODING   <em id="en-us_topic_0059778819_ad2956e867d26443388b2826907aa13cb"><a name="en-us_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a><a name="en-us_topic_0059778819_ad2956e867d26443388b2826907aa13cb"></a>encoding</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p44867126"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p44867126"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p44867126"></a>Character set encoding of the current client.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row40218171"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"><a name="en-us_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a><a name="en-us_topic_0059778819_a0bcbdcd5f56149d2b0f4e8bf645467ac"></a>FETCH_COUNT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"><a name="en-us_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a><a name="en-us_topic_0059778819_sb1ad6701fb06492b9c61c0cee8ebf672"></a>\set FETCH_COUNT <em id="en-us_topic_0059778819_en-us_topic_0058968129_i537772514207"><a name="en-us_topic_0059778819_en-us_topic_0058968129_i537772514207"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_i537772514207"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><a name="en-us_topic_0059778819_u3d111cd6129641588ea85c80411d663a"></a><ul id="en-us_topic_0059778819_u3d111cd6129641588ea85c80411d663a"><li>If the value is an integer greater than <strong id="b12033229041543"><a name="b12033229041543"></a><a name="b12033229041543"></a>0</strong>, for example, <em id="i12136671131543"><a name="i12136671131543"></a><a name="i12136671131543"></a>n</em>, <em id="i9073875711543"><a name="i9073875711543"></a><a name="i9073875711543"></a>n</em> lines will be selected from the result set to the cache and displayed on the screen when the <strong id="b15981128721543"><a name="b15981128721543"></a><a name="b15981128721543"></a>SELECT</strong> statement is run.</li><li>If this variable is not set or set to a value less than or equal to <strong id="b13320485821543"><a name="b13320485821543"></a><a name="b13320485821543"></a>0</strong>, all results are selected at a time to the cache when the <strong id="b7599686521543"><a name="b7599686521543"></a><a name="b7599686521543"></a>SELECT</strong> statement is run.</li></ul>
    <div class="note" id="en-us_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"><a name="en-us_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><a name="en-us_topic_0059778819_nf334d30fd3a449c18a24290600f19dfe"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778819_en-us_topic_0058968129_p528210501263"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p528210501263"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p528210501263"></a>A proper variable value helps reduce the memory usage. The recommended value range is from 100 to 1000.</p>
    </div></div>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row36619083"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_ad9f1c93f8c344b7fb3f32e32bb41e102"><a name="en-us_topic_0059778819_ad9f1c93f8c344b7fb3f32e32bb41e102"></a><a name="en-us_topic_0059778819_ad9f1c93f8c344b7fb3f32e32bb41e102"></a>HISTCONTROL</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_s31c40c5286894680aa7440755d61cc78"><a name="en-us_topic_0059778819_s31c40c5286894680aa7440755d61cc78"></a><a name="en-us_topic_0059778819_s31c40c5286894680aa7440755d61cc78"></a>\set HISTCONTROL  ignorespace | ignoredups | ignoreboth | none</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul819470"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul819470"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul819470"><li><strong id="b842352706144036"><a name="b842352706144036"></a><a name="b842352706144036"></a>ignorespace</strong>: A line started with a space is not written to the historical record.</li><li><strong id="b842352706144044"><a name="b842352706144044"></a><a name="b842352706144044"></a>ignoredups</strong>: A line that exists in the historical record is not written to the historical record.</li><li><strong id="b842352706144050"><a name="b842352706144050"></a><a name="b842352706144050"></a>ignoreboth</strong>, <strong id="b84235270614411"><a name="b84235270614411"></a><a name="b84235270614411"></a>none</strong>, or other values: All the lines read in interaction mode are saved in the historical record.<div class="note" id="en-us_topic_0059778819_n08860fbfbbcb45e2906bddd71ecf7d61"><a name="en-us_topic_0059778819_n08860fbfbbcb45e2906bddd71ecf7d61"></a><a name="en-us_topic_0059778819_n08860fbfbbcb45e2906bddd71ecf7d61"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778819_a7e477675f9ae4da2ad2dee1b9c694871"><a name="en-us_topic_0059778819_a7e477675f9ae4da2ad2dee1b9c694871"></a><a name="en-us_topic_0059778819_a7e477675f9ae4da2ad2dee1b9c694871"></a><strong id="b842352706144242"><a name="b842352706144242"></a><a name="b842352706144242"></a>none</strong> indicates that <strong id="b84235270614431"><a name="b84235270614431"></a><a name="b84235270614431"></a>HISTCONTROL</strong> is not set.</p>
    </div></div>
    </li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row66347025"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a26f37e27d08f4f0f9e9c94e3d831d00b"><a name="en-us_topic_0059778819_a26f37e27d08f4f0f9e9c94e3d831d00b"></a><a name="en-us_topic_0059778819_a26f37e27d08f4f0f9e9c94e3d831d00b"></a>HISTFILE</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_s76a758ea6afd486cacc51814a32a8a97"><a name="en-us_topic_0059778819_s76a758ea6afd486cacc51814a32a8a97"></a><a name="en-us_topic_0059778819_s76a758ea6afd486cacc51814a32a8a97"></a>\set HISTFILE <em id="en-us_topic_0059778819_a1e6a47f33aca4b6fb62e85f3d721a05e"><a name="en-us_topic_0059778819_a1e6a47f33aca4b6fb62e85f3d721a05e"></a><a name="en-us_topic_0059778819_a1e6a47f33aca4b6fb62e85f3d721a05e"></a>filename</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p53936234"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p53936234"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p53936234"></a>Specifies the file for storing historical records. The default value is <strong id="b21061483291543"><a name="b21061483291543"></a><a name="b21061483291543"></a>~/.bash_history</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row10595728"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_afbf6dc254bee469db307b94b03867e95"><a name="en-us_topic_0059778819_afbf6dc254bee469db307b94b03867e95"></a><a name="en-us_topic_0059778819_afbf6dc254bee469db307b94b03867e95"></a>HISTSIZE</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_s2b5a5e5700cf4ccf9b4be35079275fb0"><a name="en-us_topic_0059778819_s2b5a5e5700cf4ccf9b4be35079275fb0"></a><a name="en-us_topic_0059778819_s2b5a5e5700cf4ccf9b4be35079275fb0"></a>\set HISTSIZE <em id="en-us_topic_0059778819_aa9df1fd03d94447b81ccff946c4b9af4"><a name="en-us_topic_0059778819_aa9df1fd03d94447b81ccff946c4b9af4"></a><a name="en-us_topic_0059778819_aa9df1fd03d94447b81ccff946c4b9af4"></a>size</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p18680913"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p18680913"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p18680913"></a>Specifies the number of commands to store in the command history. The default value is <strong id="b28152518162"><a name="b28152518162"></a><a name="b28152518162"></a>500</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row66636887"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"><a name="en-us_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a><a name="en-us_topic_0059778819_a767d6bdc7cc14fa8a096db4dd7bbbde0"></a>HOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"><a name="en-us_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a><a name="en-us_topic_0059778819_s85eace3643834a0d97e7562c5bcbc4fc"></a>\set HOST <em id="en-us_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"><a name="en-us_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a><a name="en-us_topic_0059778819_a2374e7879abc4a31a84b5f15a9d551d7"></a>hostname</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p37595654"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p37595654"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p37595654"></a>Specifies the name of a connected host.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row2629562"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"><a name="en-us_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a><a name="en-us_topic_0059778819_a4a722cf5a3b042ac80bcebfa3a3eb68f"></a>IGNOREEOF</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"><a name="en-us_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a><a name="en-us_topic_0059778819_sa53e4fcd0e0b4047b128ab3c4cbf6ba0"></a>\set IGNOREEOF <em id="en-us_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"><a name="en-us_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a><a name="en-us_topic_0059778819_a0c1fc29c7f494d46809ccb93e85005f4"></a>variable</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul29414696"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul29414696"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul29414696"><li>If this variable is set to a number, for example, <strong id="b842352706104132"><a name="b842352706104132"></a><a name="b842352706104132"></a>10</strong>, the first nine EOF characters (generally <strong id="b99831997615853"><a name="b99831997615853"></a><a name="b99831997615853"></a>Ctrl</strong>+<strong id="b207992431315853"><a name="b207992431315853"></a><a name="b207992431315853"></a>C</strong>) entered in <strong id="b8423527061528"><a name="b8423527061528"></a><a name="b8423527061528"></a>gsql</strong> are neglected and the <strong id="b84235270615240"><a name="b84235270615240"></a><a name="b84235270615240"></a>gsql</strong> program exits when the tenth <strong id="b84235270615833"><a name="b84235270615833"></a><a name="b84235270615833"></a>Ctrl</strong>+<strong id="b84235270615839"><a name="b84235270615839"></a><a name="b84235270615839"></a>C</strong> is entered.</li><li>If this variable is set to a non-numeric value, the default value is <strong id="b12909781781543"><a name="b12909781781543"></a><a name="b12909781781543"></a>10</strong>.</li><li>If this variable is deleted, <strong id="b84235270615220"><a name="b84235270615220"></a><a name="b84235270615220"></a>gsql</strong> exits when an EOF is entered.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row28609302"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a08e91023634f47d7906a2efef2825441"><a name="en-us_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a><a name="en-us_topic_0059778819_a08e91023634f47d7906a2efef2825441"></a>LASTOID</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"><a name="en-us_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a><a name="en-us_topic_0059778819_sbd42481a57eb4022b94bac86f4edd046"></a>\set LASTOID <em id="en-us_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"><a name="en-us_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a><a name="en-us_topic_0059778819_a6c69c7ce7865493aa23f4473eaffb166"></a>oid</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p36781226"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p36781226"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p36781226"></a>Specifies the last OID, which is the value returned by an <strong id="b842352706152817"><a name="b842352706152817"></a><a name="b842352706152817"></a>INSERT</strong> or <strong id="b842352706152822"><a name="b842352706152822"></a><a name="b842352706152822"></a>lo_import</strong> command. This variable is valid only before the output of the next SQL statement is displayed.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row65138961"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_afc1b71b63894490e899801a959776fff"><a name="en-us_topic_0059778819_afc1b71b63894490e899801a959776fff"></a><a name="en-us_topic_0059778819_afc1b71b63894490e899801a959776fff"></a>ON_ERROR_ROLLBACK</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"><a name="en-us_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a><a name="en-us_topic_0059778819_s1915cbd0ac0248d486a453f9eaa13df8"></a>\set  ON_ERROR_ROLLBACK  on | interactive | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul22048505"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul22048505"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul22048505"><li>If the value is <strong id="b4470342011543"><a name="b4470342011543"></a><a name="b4470342011543"></a>on</strong>, an error that may occur in a statement in a transaction block is ignored and the transaction continues.</li><li>If the value is <strong id="b8445790611543"><a name="b8445790611543"></a><a name="b8445790611543"></a>interactive</strong>, the error is ignored only in an interactive session.</li><li>If the value is <strong id="b842352706153729"><a name="b842352706153729"></a><a name="b842352706153729"></a>off</strong> (default value), the error triggers the rollback of the transaction block. In <strong id="b842352706153843"><a name="b842352706153843"></a><a name="b842352706153843"></a>on_error_rollback-on</strong> mode, a <strong id="b842352706153850"><a name="b842352706153850"></a><a name="b842352706153850"></a>SAVEPOINT</strong> is set before each statement of a transaction block, and an error triggers the rollback of the transaction block.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row48481494"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"><a name="en-us_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a><a name="en-us_topic_0059778819_aed01aeffa2ef4974829efd675a22ebf3"></a>ON_ERROR_STOP</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"><a name="en-us_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a><a name="en-us_topic_0059778819_sdf745c8d58334531808f8b2f64ee8dce"></a>\set ON_ERROR_STOP on | off</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul25758369"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul25758369"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul25758369"><li><strong id="b13660585011543"><a name="b13660585011543"></a><a name="b13660585011543"></a>on</strong>: specifies that the execution stops if an error occurs. In interactive mode, <strong id="b6298683311543"><a name="b6298683311543"></a><a name="b6298683311543"></a>gsql</strong> returns the output of executed commands immediately.</li><li><strong id="b842352706154233"><a name="b842352706154233"></a><a name="b842352706154233"></a>off</strong> (default value): specifies that an error, if occurring during the execution, is ignored, and the execution continues.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row53738843"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"><a name="en-us_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a><a name="en-us_topic_0059778819_a510802c8bc074c3b87559aa6325f1dff"></a>PORT</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"><a name="en-us_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a><a name="en-us_topic_0059778819_sd866017c832d42288d3d0dfa1c6aca87"></a>\set PORT <em id="en-us_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"><a name="en-us_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a><a name="en-us_topic_0059778819_a29ccef6dbf564ab79ad3880df2541d1a"></a>port</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p10318634"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p10318634"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p10318634"></a>Specifies the port number of a connected database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row19496046"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"><a name="en-us_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a><a name="en-us_topic_0059778819_a1bed718e5c914bea9c49551cbf74cfc5"></a>USER</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"><a name="en-us_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a><a name="en-us_topic_0059778819_sc7fdcfd20d9144acbf5f2b20fb29d0a8"></a>\set USER <em id="en-us_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"><a name="en-us_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a><a name="en-us_topic_0059778819_ad714c20d42484a6cac24f7eb82d3e7fb"></a>username</em></pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p39899132"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p39899132"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p39899132"></a>Specifies the database user you are currently connected as.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row57444583"><td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"><a name="en-us_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a><a name="en-us_topic_0059778819_af5f0d95a91244d16a4d293565d7064cd"></a>VERBOSITY</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.000000000000004%" headers="mcps1.2.4.1.2 "><pre class="screen" id="en-us_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"><a name="en-us_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a><a name="en-us_topic_0059778819_secfcdcccb23645e59dd46fcd7828f06b"></a>\set VERBOSITY   terse | default | verbose</pre>
    </td>
    <td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p33154265"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p33154265"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p33154265"></a>This variable can be set to <strong id="b16220861821543"><a name="b16220861821543"></a><a name="b16220861821543"></a>terse</strong>, <strong id="b17651139651543"><a name="b17651139651543"></a><a name="b17651139651543"></a>default</strong>, or <strong id="b10364283271543"><a name="b10364283271543"></a><a name="b10364283271543"></a>verbose</strong> to control redundant lines of error reports.</p>
    <a name="en-us_topic_0059778819_en-us_topic_0058968129_ul4342251"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul4342251"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul4342251"><li><strong id="en-us_topic_0058968129_b842352706155015"><a name="en-us_topic_0058968129_b842352706155015"></a><a name="en-us_topic_0058968129_b842352706155015"></a>terse</strong>: Only critical and major error texts and text locations are returned (which is generally suitable for single-line error information).</li><li><strong id="b16797312051543"><a name="b16797312051543"></a><a name="b16797312051543"></a>default</strong>: Critical and major error texts and text locations, error details, and error messages (possibly involving multiple lines) are all returned.</li><li><strong id="b6083627771543"><a name="b6083627771543"></a><a name="b6083627771543"></a>verbose</strong>: All error information is returned.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>


-   <a name="en-us_topic_0059778819_en-us_topic_0058968129_li56915888"></a>SQL substitution

    **gsql**, like a parameter of a meta-command, provides a key feature that enables you to substitute a standard SQL statement for a  **gsql**  variable.  **gsql**  also provides a new alias or identifier for the variable. To replace the value of a variable using the SQL substitution method, add a colon \(:\) before the variable. For example:

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

    The above command queries the HR.areaS table.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >The value of the variable is copied literally, so it can even contain unbalanced quotation marks or backslash commands. Therefore, the input content must be meaningful.


-   <a name="en-us_topic_0059778819_en-us_topic_0058968129_li65414495"></a>Prompt

    The  **gsql**  prompt can be set using the three variables in  [Table 3](#en-us_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f). These variables consist of characters and special escape characters.

    **Table  3**  Prompt variables

    <a name="en-us_topic_0059778819_tfd36c27a76294b92ad194d20beeaac7f"></a>
    <table><thead align="left"><tr id="en-us_topic_0059778819_r817a3786ba804a1886882c4a3687feae"><th class="cellrowborder" valign="top" width="12%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"><a name="en-us_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a><a name="en-us_topic_0059778819_aaf5543159dee490f99f2cb452ce752d5"></a>Variable</p>
    </th>
    <th class="cellrowborder" valign="top" width="35%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778819_ad45548d4c8354eb39118d80473523c41"><a name="en-us_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a><a name="en-us_topic_0059778819_ad45548d4c8354eb39118d80473523c41"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"><a name="en-us_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a><a name="en-us_topic_0059778819_a0f91d05a9ebb454c9341e7dfa5c74ce0"></a>Example</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059778819_r1daadf254f9c46aeb1727fe7919a875a"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"><a name="en-us_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a><a name="en-us_topic_0059778819_a40b638fb6c3f4dcb9bc712f9341ad14a"></a>PROMPT1</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"><a name="en-us_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a><a name="en-us_topic_0059778819_a4d744fd69d36460ab819c6548437b4d1"></a>Specifies the normal prompt used when <strong id="b842352706164751"><a name="b842352706164751"></a><a name="b842352706164751"></a>gsql</strong> requests a new command.</p>
    <p id="en-us_topic_0059778819_a687212152e3a4b109c30e98511b58138"><a name="en-us_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a><a name="en-us_topic_0059778819_a687212152e3a4b109c30e98511b58138"></a>The default value of <em id="i842352697164513"><a name="i842352697164513"></a><a name="i842352697164513"></a>PROMPT1</em> is:</p>
    <pre class="screen" id="en-us_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"><a name="en-us_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a><a name="en-us_topic_0059778819_sc94dbcc0857c45a8889012172b00bd50"></a>%/%R%#</pre>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"><a name="en-us_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a><a name="en-us_topic_0059778819_aef2010284bb14b99984bd6f60e13bde1"></a><em id="i84235269712055"><a name="i84235269712055"></a><a name="i84235269712055"></a>PROMPT1</em> can be used to change the prompt.</p>
    <a name="en-us_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><a name="en-us_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"></a><ul id="en-us_topic_0059778819_uaa8460ec297145febb62dbebd83224fd"><li>Change the prompt to <strong id="b649041416234"><a name="b649041416234"></a><a name="b649041416234"></a>[local]</strong>:<a name="en-us_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><a name="en-us_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778819_see2a69a8cc2747c7a842f2d4ce2fdc2c">openGauss=&gt; \set PROMPT1 %M
    [local:/tmp/gaussdba_mppdb]</pre>
    </li><li>Change the prompt to <strong id="b842352706193230"><a name="b842352706193230"></a><a name="b842352706193230"></a>name</strong>:<a name="en-us_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><a name="en-us_topic_0059778819_s953d1defe3564420936773eb2cd46335"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778819_s953d1defe3564420936773eb2cd46335">openGauss=&gt; \set PROMPT1 name
    name</pre>
    </li><li>Change the prompt to <strong id="b842352706193226"><a name="b842352706193226"></a><a name="b842352706193226"></a>=</strong>:<a name="en-us_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><a name="en-us_topic_0059778819_sba91998cf42d47fc83956eecf376f679"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778819_sba91998cf42d47fc83956eecf376f679">openGauss=&gt; \set PROMPT1 %R
    =</pre>
    </li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_rc77689523c7a46b6801d4d9df1a8c8cd"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"><a name="en-us_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a><a name="en-us_topic_0059778819_af06354e5cddb48ed810a2b94893a71d7"></a>PROMPT2</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"><a name="en-us_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a><a name="en-us_topic_0059778819_ae27171d0a9b943c5ac8a2b3f15dfb28d"></a>Specifies the prompt displayed when more input is expected because the command that is not terminated with a semicolon (;) or a quote (") is not closed.</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"><a name="en-us_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a><a name="en-us_topic_0059778819_ae24b9a53df4b402aa0fbe8736710367e"></a><em id="i8423526971218"><a name="i8423526971218"></a><a name="i8423526971218"></a>PROMPT2</em> can be used to display the prompt.</p>
    <a name="en-us_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><a name="en-us_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778819_s8838a0732d0a4f45a1d249db401b7236">openGauss=# \set PROMPT2 TEST
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
    <tr id="en-us_topic_0059778819_r7787d406b54c4fc49b5e7cfbf050935e"><td class="cellrowborder" valign="top" width="12%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"><a name="en-us_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a><a name="en-us_topic_0059778819_a26bf9297c6804829ae5ae99d6793f3ec"></a>PROMPT3</p>
    </td>
    <td class="cellrowborder" valign="top" width="35%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"><a name="en-us_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a><a name="en-us_topic_0059778819_a1214f38efe6c4afdbd1a5861f7da2862"></a>Specifies the prompt displayed when the <strong id="b7601369951543"><a name="b7601369951543"></a><a name="b7601369951543"></a>COPY</strong> statement (such as <strong id="b15958210391543"><a name="b15958210391543"></a><a name="b15958210391543"></a>COPY FROM STDIN</strong>) is run and data input is expected.</p>
    </td>
    <td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"><a name="en-us_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a><a name="en-us_topic_0059778819_a9ec72a98737f4852882d1d6c79a253f4"></a><em id="i842352697111042"><a name="i842352697111042"></a><a name="i842352697111042"></a>PROMPT3</em> can be used to display the <strong id="b84235270611117"><a name="b84235270611117"></a><a name="b84235270611117"></a>COPY</strong> prompt.</p>
    <a name="en-us_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><a name="en-us_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778819_sa4a2ea532ae7431aab748092bcc1edf1">openGauss=# \set PROMPT3 '&gt;&gt;&gt;&gt;'
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

    The value of the selected prompt variable is printed literally. However, a value containing a percent sign \(%\) is replaced by the predefined contents depending on the character following the percent sign \(%\). For details about the defined substitutions, see  [Table 4](#en-us_topic_0059778819_en-us_topic_0058968129_table55443487).

    **Table  4**  Defined substitutions

    <a name="en-us_topic_0059778819_en-us_topic_0058968129_table55443487"></a>
    <table><thead align="left"><tr id="en-us_topic_0059778819_en-us_topic_0058968129_row8395738"><th class="cellrowborder" valign="top" width="16%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778819_en-us_topic_0058968129_p28543196"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p28543196"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p28543196"></a>Symbol</p>
    </th>
    <th class="cellrowborder" valign="top" width="84%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778819_en-us_topic_0058968129_p14857929"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p14857929"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p14857929"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059778819_en-us_topic_0058968129_row22949754"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p39941279"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p39941279"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p39941279"></a>%M</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p6073653"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p6073653"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p6073653"></a>Replaced with the full host name (with domain name). The full name is <strong id="b320318520262"><a name="b320318520262"></a><a name="b320318520262"></a>[local]</strong> if the connection is over a Unix domain socket, or <strong id="b85891855162618"><a name="b85891855162618"></a><a name="b85891855162618"></a>[local:/dir/name]</strong> if the Unix domain socket is not at the compiled default location.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row33961501"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p66927766"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p66927766"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p66927766"></a>%m</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p61404572"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p61404572"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p61404572"></a>Replaced with the host name truncated at the first dot. It is <strong id="b1813491112811"><a name="b1813491112811"></a><a name="b1813491112811"></a>[local]</strong> if the connection is over a Unix domain socket.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row7514803"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p15100907"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p15100907"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p15100907"></a>%&gt;</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p36816645"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p36816645"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p36816645"></a>Replaced with the number of the port that the host is listening on.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row20185202"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p34130960"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p34130960"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p34130960"></a>%n</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p39761457"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p39761457"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p39761457"></a>Replaced with the database session username.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row15576469"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p18164273"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p18164273"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p18164273"></a>%/</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p26276531"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p26276531"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p26276531"></a>Replaced with the name of the current database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row12739235"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p31441988"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p31441988"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p31441988"></a>%~</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p30614042"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p30614042"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p30614042"></a>Similar to <strong id="b84235270615230"><a name="b84235270615230"></a><a name="b84235270615230"></a>%/</strong>. However, the output is tilde (~) if the database is your default database.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row61805480"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p12249031"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p12249031"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p12249031"></a>%#</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p2976726"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p2976726"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p2976726"></a>Uses <strong id="b84235270615257"><a name="b84235270615257"></a><a name="b84235270615257"></a>#</strong> if the session user is the database administrator. Otherwise, uses <strong id="b8423527061535"><a name="b8423527061535"></a><a name="b8423527061535"></a>&gt;</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row9511801"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p42866586"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p42866586"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p42866586"></a>%R</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul23135840"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul23135840"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul23135840"><li>In <em id="i134288158239"><a name="i134288158239"></a><a name="i134288158239"></a>PROMPT1</em> normally <strong id="b84235270619442"><a name="b84235270619442"></a><a name="b84235270619442"></a>=</strong>, but <strong id="b84235270619444"><a name="b84235270619444"></a><a name="b84235270619444"></a>^</strong> if in single-line mode, or <strong id="b842352706194416"><a name="b842352706194416"></a><a name="b842352706194416"></a>!</strong> if the session is disconnected from the database (which can happen if <strong id="b842352706194440"><a name="b842352706194440"></a><a name="b842352706194440"></a>\connect</strong> fails). </li><li>In <em id="i13419154314235"><a name="i13419154314235"></a><a name="i13419154314235"></a>PROMPT2</em> %R is replaced with a hyphen (-), an asterisk (*), a single or double quotation mark, or a dollar sign ($), depending on whether <strong id="b797213514493"><a name="b797213514493"></a><a name="b797213514493"></a>gsql</strong> expects more input because the query is inside a /*...*/ comment or inside a quoted or dollar-escaped string.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row65831155"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p4335289"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p4335289"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p4335289"></a>%x</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p28124112"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p28124112"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p28124112"></a>Replaced with the transaction status.</p>
    <a name="en-us_topic_0059778819_en-us_topic_0058968129_ul39794295"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_ul39794295"></a><ul id="en-us_topic_0059778819_en-us_topic_0058968129_ul39794295"><li>An empty string when it is not in a transaction block</li><li>An asterisk (*) when it is in a transaction block</li><li>An exclamation mark (!) when it is in a failed transaction block</li><li>A question mark (?) when the transaction status is indefinite (for example, because there is no connection).</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row59967035"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p33969966"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p33969966"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p33969966"></a>%digits</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p41583284"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p41583284"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p41583284"></a>Replaced with the character with the specified byte.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row3074559"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p4125311"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p4125311"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p4125311"></a>%:name</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p50452955"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p50452955"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p50452955"></a>Replaced with the value of the <em id="i842352697114052"><a name="i842352697114052"></a><a name="i842352697114052"></a>name</em> variable of <strong id="b84235270611413"><a name="b84235270611413"></a><a name="b84235270611413"></a>gsql</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row25596594"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p22836224"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p22836224"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p22836224"></a>%command</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"><a name="en-us_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a><a name="en-us_topic_0059778819_a4e67b88d80d34abe96bafe583660a1d8"></a>Replaced with the command output, similar to substitution with the "^" symbol.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778819_en-us_topic_0058968129_row54041555"><td class="cellrowborder" valign="top" width="16%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p9721071"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p9721071"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p9721071"></a>%[ . . . %]</p>
    </td>
    <td class="cellrowborder" valign="top" width="84%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_en-us_topic_0058968129_p19218902468"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p19218902468"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p19218902468"></a>Prompts may contain terminal control characters which, for example, change the color, background, or style of the prompt text, or change the title of the terminal window. For example:</p>
    <p id="en-us_topic_0059778819_en-us_topic_0058968129_p167001154619"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p167001154619"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p167001154619"></a>potgres=&gt; \set PROMPT1 '%[%033[1;33;40m%]%n@%/%R%[%033[0m%]%#'</p>
    <p id="en-us_topic_0059778819_en-us_topic_0058968129_p50541836"><a name="en-us_topic_0059778819_en-us_topic_0058968129_p50541836"></a><a name="en-us_topic_0059778819_en-us_topic_0058968129_p50541836"></a>The output is a boldfaced (1;) yellow-on-black (33;40) prompt on VT100-compatible, color-capable terminals.</p>
    </td>
    </tr>
    </tbody>
    </table>


## Environment Variables<a name="en-us_topic_0059778819_s0a191fd6f5d448aab0473160a8ee54f6"></a>

**Table  5**  Environment variables related to  **gsql**

<a name="en-us_topic_0059778819_ta6e7da8b2a0f4d2b9f94b5b7037ac91e"></a>
<table><thead align="left"><tr id="en-us_topic_0059778819_r1b9f53c1bcfc49218c72089a021d9e5c"><th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"><a name="en-us_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a><a name="en-us_topic_0059778819_a6cd68d2ab45f4ca6bf2aa28a9783dcd4"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="70.86%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"><a name="en-us_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a><a name="en-us_topic_0059778819_a060c10b23e9a470bb35f9def232631a5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778819_rec48dbdab62e4a0a818e472ccadd19d6"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"><a name="en-us_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a><a name="en-us_topic_0059778819_a7582dc1785144675b67b8c1fcfc2052e"></a>COLUMNS</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"><a name="en-us_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a><a name="en-us_topic_0059778819_a31d58a5d4df54e97979f58cc739d70de"></a>If <strong id="b11531808421543"><a name="b11531808421543"></a><a name="b11531808421543"></a>\set columns</strong> is set to <strong id="b17025479331543"><a name="b17025479331543"></a><a name="b17025479331543"></a>0</strong>, this parameter controls the width of the wrapped format. This width determines whether to change the wide output mode into the vertical output mode if automatic expansion is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_rcb58a79721724a2c8bddfd9929e4bc5c"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"><a name="en-us_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a><a name="en-us_topic_0059778819_a590a410fa3814b52bdc91d946ef30969"></a>PAGER</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"><a name="en-us_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a><a name="en-us_topic_0059778819_a1fd1a7cd397c41369880cbf94a3cb943"></a>If the query results do not fit on the screen, they are redirected through this command. You can use the <strong id="b2306896481543"><a name="b2306896481543"></a><a name="b2306896481543"></a>\pset</strong> command to disable the pager. Typically, the <strong id="b7505737331543"><a name="b7505737331543"></a><a name="b7505737331543"></a>more</strong> or <strong id="b18240637971543"><a name="b18240637971543"></a><a name="b18240637971543"></a>less</strong> command is used for viewing the query result page by page. The default is platform-dependent.</p>
<div class="note" id="en-us_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"><a name="en-us_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><a name="en-us_topic_0059778819_ned95469df1884d8da0c5f9144ae72780"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778819_a98582b46266b4f89947f7c05e9044567"><a name="en-us_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a><a name="en-us_topic_0059778819_a98582b46266b4f89947f7c05e9044567"></a>Display of the <strong id="b842352706115224"><a name="b842352706115224"></a><a name="b842352706115224"></a>less</strong> command is affected by the <em id="i84235269712127"><a name="i84235269712127"></a><a name="i84235269712127"></a>LC_CTYPE</em> environment variable.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0059778819_r5ce588e3868e4c90a5bfd83f9a9dc79a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"><a name="en-us_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a><a name="en-us_topic_0059778819_a7e7f429bd81249199e5e43d5aadec958"></a>PSQL_EDITOR</p>
</td>
<td class="cellrowborder" rowspan="3" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"><a name="en-us_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a><a name="en-us_topic_0059778819_afce1321c688f43e5a7a0fc54bd0b8ca7"></a>The <strong id="b20446523001543"><a name="b20446523001543"></a><a name="b20446523001543"></a>\e</strong> and <strong id="b16444230951543"><a name="b16444230951543"></a><a name="b16444230951543"></a>\ef</strong> commands use the editor specified by the environment variables. The variables are examined in the order listed. The default editor on Unix is vi.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_re8cde54e2cb04352ae5243b25ee44f06"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"><a name="en-us_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a><a name="en-us_topic_0059778819_a9fce97bf75a2444581a5fb1cf814f217"></a>EDITOR</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_r8c9f051e80434e6da9c12a3367668f8b"><td class="cellrowborder" valign="top" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"><a name="en-us_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a><a name="en-us_topic_0059778819_ad1822eb6d15f4cf09756368914656b26"></a>VISUAL</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_rd22f025db0f24923bd417615ea93ca36"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"><a name="en-us_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a><a name="en-us_topic_0059778819_a3abc1468ff9541d694646534c3bdc33c"></a>PSQL_EDITOR_LINENUMBER_ARG</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><div class="p" id="en-us_topic_0059778819_afed77a127a0749b791271ace8989d751"><a name="en-us_topic_0059778819_afed77a127a0749b791271ace8989d751"></a><a name="en-us_topic_0059778819_afed77a127a0749b791271ace8989d751"></a>When the <strong id="b842352706115455"><a name="b842352706115455"></a><a name="b842352706115455"></a>\e</strong> or <strong id="b842352706115459"><a name="b842352706115459"></a><a name="b842352706115459"></a>\ef</strong> command is used with a line number parameter, this variable specifies the command-line parameter used to pass the starting line number to the editor. For editors, such as Emacs or vi, this is a plus sign. Include a space in the value of the variable if space is needed between the option name and the line number. For example:<pre class="screen" id="en-us_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"><a name="en-us_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a><a name="en-us_topic_0059778819_sd7bbe99fea9c4cc69ca1606caf16912e"></a>PSQL_EDITOR_LINENUMBER_ARG = '+'  
PSQL_EDITOR_LINENUMBER_ARG='--line '</pre>
</div>
<p id="en-us_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"><a name="en-us_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a><a name="en-us_topic_0059778819_a83f254691617499ca3bd855efc1c4e5f"></a>A plus sign (+) is used by default on Unix.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_r0a89d2015d0042548d36be7e6e76cfe5"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"><a name="en-us_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a><a name="en-us_topic_0059778819_a67e7b01a3cca4892ba92739b31b3bbd9"></a>PSQLRC</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"><a name="en-us_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a><a name="en-us_topic_0059778819_a95abeb9682fc4eb58eebdad8e768af6e"></a>Specifies the location of the user's .gsqlrc file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_re89519914e7c4f39a091faee4222768a"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"><a name="en-us_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a><a name="en-us_topic_0059778819_a6e020d1d2e8440e4861709f6e4247290"></a>SHELL</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"><a name="en-us_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a><a name="en-us_topic_0059778819_a6a7056b8b44f43c19b72a66bfff68d01"></a>Has the same effect as the <strong id="b21296895951543"><a name="b21296895951543"></a><a name="b21296895951543"></a>\!</strong> command.</p>
</td>
</tr>
<tr id="en-us_topic_0059778819_r7ebb36b11ff44947abd4dc1dea456370"><td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778819_a59571dbc78644a97b2683c5159dac446"><a name="en-us_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a><a name="en-us_topic_0059778819_a59571dbc78644a97b2683c5159dac446"></a>TMPDIR</p>
</td>
<td class="cellrowborder" valign="top" width="70.86%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"><a name="en-us_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a><a name="en-us_topic_0059778819_a2f0e9dc7bc02447a895061d3473ebb8a"></a>Specifies the directory for storing temporary files. The default value is <strong id="b7432323041543"><a name="b7432323041543"></a><a name="b7432323041543"></a>/tmp</strong>.</p>
</td>
</tr>
</tbody>
</table>

