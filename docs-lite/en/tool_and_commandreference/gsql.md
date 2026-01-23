# gsql<a name="EN-US_TOPIC_0294749005"></a>

**gsql**, provided by openGauss, is a database connection tool that runs in the command line. You can use  **gsql**  to connect to the server and perform operations and maintenance. In addition,  **gsql**  provides multiple  [Advanced Features](#overview)  for users.

## Overview<a name="EN-US_TOPIC_0294748922"></a>

### Basic Features<a name="en-us_topic_0059778819_s8ce37a15763045549311205e19f06a45"></a>

-   **Connect to the database**: By default, only the local server can be connected. To connect to a remote database, you must configure the server. For details, see  [Gsql Connection and Usage](../getting_started/gsql_connection_and_usage.md).

    >[!NOTE]NOTE 
    >If  **gsql**  is used to connect to a database, the connection timeout period will be 5 minutes. If the database has not correctly set up a connection and authenticated the identity of the client within this period,  **gsql**  will time out and exit.
    >To resolve this problem, see  [Troubleshooting](#troubleshooting).

-   **Run SQL statements**: Interactively entered SQL statements and specified SQL statements in a file can be run.
-   **Run meta-commands**: Meta-commands help the administrator view database object information, query cache information, format SQL output, and connect to a new database. For details about meta-commands, see  [Meta-Command Reference](meta_command_reference.md).

### Advanced Features<a name="en-us_topic_0059778819_s999ec23443d04c7ab199c53189744b58"></a>

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

    >[!NOTE]NOTE 
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

    >[!TIP]NOTICE 
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


### Environment Variables<a name="en-us_topic_0059778819_s0a191fd6f5d448aab0473160a8ee54f6"></a>

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

## How to Use gsql<a name="EN-US_TOPIC_0294748989"></a>

### Prerequisites<a name="en-us_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

The user using **gsql**  must have the permission to access the database.

### Background<a name="en-us_topic_0059779027_sec8c9233ebad4d6da06846cb31af1f44"></a>

You can use the  **gsql**  command to connect to the local database or remote database. When connecting to the remote database, enable remote connection on the server. For details, see  [Gsql Connection and Usage](../getting_started/gsql_connection_and_usage.md).

### Procedure<a name="en-us_topic_0059779027_s88b93467806944068b85cf2ec928ae02"></a>

1. Connect to the openGauss server using the  **gsql**  tool.

    The  **gsql**  tool uses the  **-d**  parameter to specify the target database name, the  **-U**  parameter to specify the database username, the  **-h**  parameter to specify the host name, and the  **-p**  parameter to specify the port number.

    >[!NOTE]NOTE 
    >If the database name is not specified, the default database name generated during initialization will be used. If the database username is not specified, the current OS username will be used by default. If a variable does not belong to any parameter \(such as  **-d**  and  **-U**\), and  **-d**  is not specified, the variable will be used as the database name. If  **-d**  is specified but  **-U**  is not specified, the variable will be used as the database username.

    Example 1: Connect to the 8000 port of the local postgres database as user  **omm**.

    ```
    gsql -d postgres -p 8000
    ```

    Example 2: Connect to the 8000 port of the remote postgres database as user  **jack**.

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 8000
    ```

    In a centralized cluster, when connecting to the primary DN, you can use commas \(,\) to separate the IP addresses of DNs and add them to the end of  **-h**.  **gsql**  connects to each IP address in sequence to check whether the current DN is the primary DN. If no,  **gsql**  disconnects from the current IP address and attempts to connect to the next IP address until the primary DN is found.

    ```
    gsql -h 10.180.123.163,10.180.123.164,10.180.123,165 -d postgres -U jack -p 8000
    ```

    Example 3:  _postgres_  and  _omm_  do not belong to any parameter, and they are used as the database name and the username, respectively.

    ```
    gsql postgres omm -p 8000
    ```

    **Equals**

    ```
    gsql -d postgres -U omm -p 8000
    ```

    For details about the  **gsql**  parameters, see  [Command Reference](#command-reference).

2. Run a SQL statement.

    The following takes creating database  **human\_staff**  as an example:

    ```
    CREATE DATABASE human_staff;
    CREATE DATABASE
    ```

    Ordinarily, input lines end when a command-terminating semicolon is reached. If the command is sent and executed without any error, the command output is displayed on the screen.

3. Execute gsql meta-commands.

    The following takes all openGauss databases and description information as an example:

    ```
    openGauss=# \l
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

    For details about  **gsql**  meta-commands, see  [Meta-Command Reference](meta_command_reference.md).

### Example<a name="en-us_topic_0059779027_sa12a135ee93d4bfa8fcbf57ae87b805d"></a>

The example shows how to spread a command over several lines of input. Note the prompt change:

```
openGauss=# CREATE TABLE HR.areaS(
openGauss(# area_ID   NUMBER,
openGauss(# area_NAME VARCHAR2(25)
openGauss-# )tablespace EXAMPLE;
CREATE TABLE
```

Query the table definition:

```
openGauss=# \d HR.areaS
               Table "hr.areas"
  Column   |         Type          | Modifiers 
-----------+-----------------------+-----------
 area_id   | numeric               | not null
 area_name | character varying(25) | 
```

Insert four lines of data into  **HR.areaS**.

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

Change the prompt.

```
openGauss=# \set PROMPT1 '%n@%m %~%R%#'
omm@[local] openGauss=#
```

Query the table:

```
omm@[local] openGauss=# SELECT * FROM HR.areaS;
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
omm@[local] openGauss=# \pset border 2
Border style is 2.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
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
omm@[local] openGauss=# \pset border 0
Border style is 0.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
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
omm@[local] openGauss=# \a \t \x
Output format is unaligned.
Showing only tuples.
Expanded display is on.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
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


## Obtaining Help Information<a name="EN-US_TOPIC_0294748948"></a>

### Procedure<a name="en-us_topic_0059778941_s24c36ac1563e42cb99f9773e8cd9c78c"></a>

-   When connecting to the database, run the following command to obtain the help information:

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

-   When connecting to the database, run the following command to obtain the help information:

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


### Examples<a name="en-us_topic_0059778941_s4dc2aaee2ce54ae1a508fe58125b9995"></a>

1.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and 8000 is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss VxxxRxxxCxx build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    ```

2.  View the  **gsql**  help information. For details, see  [Table 1](#en-us_topic_0059778941_en-us_topic_0058968146_table52020644).

    **Table  1** **gsql**  online help

    <a name="en-us_topic_0059778941_en-us_topic_0058968146_table52020644"></a>
    <table><thead align="left"><tr id="en-us_topic_0059778941_en-us_topic_0058968146_row35168989"><th class="cellrowborder" valign="top" width="30.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778941_en-us_topic_0058968146_p30115862"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p30115862"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p30115862"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="69.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778941_en-us_topic_0058968146_p21681027"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p21681027"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p21681027"></a>Example</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059778941_en-us_topic_0058968146_row11332742"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p45536881"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p45536881"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p45536881"></a>Query the copyright.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p65926177"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p65926177"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p65926177"></a>\copyright</p>
    </td>
    </tr>
    <tr id="en-us_topic_0059778941_r7c9e6b30c75c476a8ed11c601c5875bc"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"><a name="en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a><a name="en-us_topic_0059778941_aad5ecfd27b8d4b53b7a1430b470532ef"></a>View help information about SQL statements supported by <span id="en-us_topic_0283139272_en-us_topic_0231762800_text1489112363585"><a name="en-us_topic_0283139272_en-us_topic_0231762800_text1489112363585"></a><a name="en-us_topic_0283139272_en-us_topic_0231762800_text1489112363585"></a><span id="text39202108294"><a name="text39202108294"></a><a name="text39202108294"></a>openGauss</span></span>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"><a name="en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a><a name="en-us_topic_0059778941_a3fda9f66a6464e5ca9b370a35b9fa565"></a>View help information about SQL statements supported by <span id="text4873448142914"><a name="text4873448142914"></a><a name="text4873448142914"></a><span id="text1687320489290"><a name="text1687320489290"></a><a name="text1687320489290"></a>openGauss</span></span>.</p>
    <p id="en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"><a name="en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a><a name="en-us_topic_0059778941_a5046a391ff4c45ac85a973864370e4f7"></a>For example, view all SQL statements supported by <span id="text358515536298"><a name="text358515536298"></a><a name="text358515536298"></a><span id="text1258519538298"><a name="text1258519538298"></a><a name="text1258519538298"></a>openGauss</span></span>.</p>
    <a name="en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><a name="en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778941_sefe17c6ba7cb49f59b417739433dc15f">openGauss=# \h
    Available help:
      ABORT                            
      ALTER AGGREGATE
      ALTER APP WORKLOAD GROUP                  
    ... ...</pre>
    <p id="en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"><a name="en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"></a><a name="en-us_topic_0059778941_a712672849f624615a2ced2b19306448a"></a>For example, view parameters of the <strong id="b9514310661756"><a name="b9514310661756"></a><a name="b9514310661756"></a>CREATE DATABASE</strong> command:</p>
    <a name="en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><a name="en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778941_sde7cf267c98c4dfd94c7681a30e11f0c">openGauss=# \help CREATE DATABASE
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
    <tr id="en-us_topic_0059778941_en-us_topic_0058968146_row37254344"><td class="cellrowborder" valign="top" width="30.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p64811887"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p64811887"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p64811887"></a>View the help information about <strong id="b25419237558"><a name="b25419237558"></a><a name="b25419237558"></a>gsql</strong> commands.</p>
    </td>
    <td class="cellrowborder" valign="top" width="69.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778941_en-us_topic_0058968146_p29030878"><a name="en-us_topic_0059778941_en-us_topic_0058968146_p29030878"></a><a name="en-us_topic_0059778941_en-us_topic_0058968146_p29030878"></a>For example, view commands supported by <strong id="b842352706161543"><a name="b842352706161543"></a><a name="b842352706161543"></a>gsql</strong>.</p>
    <a name="en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><a name="en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143"></a><pre class="screen" codetype="Sql" id="en-us_topic_0059778941_se40ef0564fa34e209d67a4a2da078143">openGauss=# \?
    General
      \copyright             show openGauss usage and distribution terms
      \g [FILE] or ;         execute query (and send results to file or |pipe)
      \h(\help) [NAME]              help on syntax of SQL commands, * for all commands
      \q                     quit gsql
    ... ...</pre>
    </td>
    </tr>
    </tbody>
    </table>


## Command Reference<a name="EN-US_TOPIC_0294749022"></a>

For details about  **gsql**  parameters, see  [Table 1](#en-us_topic_0059779319_t5f35328143ec419983a1c23d13c46e49),  [Table 2](#en-us_topic_0059779319_t0233128ab394456c80e339179cb56739),  [Table 3](#en-us_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8), and  [Table 4](#en-us_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68).

**Table  1**  Common parameters

<a name="en-us_topic_0059779319_t5f35328143ec419983a1c23d13c46e49"></a>
<table><thead align="left"><tr id="en-us_topic_0059779319_rf9b2bbe319a24d139970cf428f495efd"><th class="cellrowborder" valign="top" width="22.34%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"><a name="en-us_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a><a name="en-us_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="53.6%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059779319_a11229b9b997f438eb84506dae58a0287"><a name="en-us_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a><a name="en-us_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="24.060000000000002%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059779319_en-us_topic_0058968145_p192487379712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p192487379712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p192487379712"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059779319_rf751e9eceef243079acfc04a1b4dc221"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"><a name="en-us_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a><a name="en-us_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a>-c, --command=COMMAND</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"><a name="en-us_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a><a name="en-us_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a>Specifies that <strong id="b19901517061611"><a name="b19901517061611"></a><a name="b19901517061611"></a>gsql</strong> is to run a string command and then exit.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p156438509712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p156438509712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p156438509712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r6daf56fa49884c82aca97a902d28b79e"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"><a name="en-us_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a><a name="en-us_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a>-d, --dbname=DBNAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p272315995731"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p272315995731"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p272315995731"></a>Specifies the name of the database to connect to.</p>
<p id="p41512232568"><a name="p41512232568"></a><a name="p41512232568"></a>In addition, gsql allows you to use extended database names, that is, connection strings in the format of <strong id="b16905155163710"><a name="b16905155163710"></a><a name="b16905155163710"></a>'postgres[ql]://[user[:password]@][netloc][:port][, ...][/dbname][?param1=value1&amp;...]'</strong> or <strong id="b1896314813715"><a name="b1896314813715"></a><a name="b1896314813715"></a>'[key=value] [...]'</strong> as database names. gsql parses connection information from the connection strings and preferentially uses the information.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p298498829712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p298498829712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p298498829712"></a>String</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r9f41226b80114eda9b6529ce60d822cd"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"><a name="en-us_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a><a name="en-us_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a>-f, --file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p431573395731"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p431573395731"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p431573395731"></a>Specifies that files are used as the command source instead of interactively-entered commands. After the files are processed, <strong id="b842352706162329"><a name="b842352706162329"></a><a name="b842352706162329"></a>gsql</strong> exits. If <em id="i842352697115459"><a name="i842352697115459"></a><a name="i842352697115459"></a>FILENAME</em> is - (hyphen), then standard input is read.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p111442891021"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p111442891021"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p111442891021"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rb1dacbb49960481a8eaec18fcaa258c1"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p135042995731"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p135042995731"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p135042995731"></a>-l, --list</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a7acc5297f2c24951829934906835788f"><a name="en-us_topic_0059779319_a7acc5297f2c24951829934906835788f"></a><a name="en-us_topic_0059779319_a7acc5297f2c24951829934906835788f"></a>Lists all available databases and then exits.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p214125089712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p214125089712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p214125089712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rbfc3635add4a41319b89eba9fc73414a"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"><a name="en-us_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a><a name="en-us_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a>-v, --set, --variable=NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"><a name="en-us_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a><a name="en-us_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a>Sets <strong id="b12704144010211"><a name="b12704144010211"></a><a name="b12704144010211"></a>gsql</strong> variable <em id="i842352697162725"><a name="i842352697162725"></a><a name="i842352697162725"></a>NAME</em> to <em id="i842352697162741"><a name="i842352697162741"></a><a name="i842352697162741"></a>VALUE</em>.</p>
<p id="en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"><a name="en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"></a><a name="en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"></a>For details about variable examples and descriptions, see <a href="#overview">Variables</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p566915559712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p566915559712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p566915559712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r76e7d067a95b4153a7f539b41685ce3d"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_aa345ebc468534282a77d48941c169514"><a name="en-us_topic_0059779319_aa345ebc468534282a77d48941c169514"></a><a name="en-us_topic_0059779319_aa345ebc468534282a77d48941c169514"></a>-X, --no-gsqlrc</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p190458295731"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p190458295731"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p190458295731"></a>Does not read the startup file (neither the system-wide <strong id="b842352706141315"><a name="b842352706141315"></a><a name="b842352706141315"></a>gsqlrc</strong> file nor the user's <strong id="b842352706141320"><a name="b842352706141320"></a><a name="b842352706141320"></a>~/.gsqlrc</strong> file).</p>
<div class="note" id="en-us_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"><a name="en-us_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><a name="en-us_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"><a name="en-us_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a><a name="en-us_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a>The startup file is <strong id="b842352706141327"><a name="b842352706141327"></a><a name="b842352706141327"></a>~/.gsqlrc</strong> by default or it can be specified by the environment variable <em id="i84235269716329"><a name="i84235269716329"></a><a name="i84235269716329"></a>PSQLRC</em>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p286132639712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p286132639712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p286132639712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rde1104323b5d4638ae3c6eb9c7072d37"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"><a name="en-us_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a><a name="en-us_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a>-1 ("one"), --single-transaction</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"><a name="en-us_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a><a name="en-us_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a>When <strong id="b18019317121611"><a name="b18019317121611"></a><a name="b18019317121611"></a>gsql</strong> uses the <strong id="b21151440641611"><a name="b21151440641611"></a><a name="b21151440641611"></a>-f</strong> parameter to execute a script, <strong id="b3540027501611"><a name="b3540027501611"></a><a name="b3540027501611"></a>START TRANSACTION</strong>/<strong id="b17389211131611"><a name="b17389211131611"></a><a name="b17389211131611"></a>COMMIT</strong> are added to the start and end of the script, respectively, so that the script is executed as one transaction. This ensures that the script is executed successfully. If the script cannot be executed, the script is invalid.</p>
<div class="note" id="en-us_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"><a name="en-us_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><a name="en-us_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"><a name="en-us_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a><a name="en-us_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a>If the script has used <strong id="b1774430165815"><a name="b1774430165815"></a><a name="b1774430165815"></a>START TRANSACTION</strong>, <strong id="b42331633195811"><a name="b42331633195811"></a><a name="b42331633195811"></a>COMMIT</strong>, or <strong id="b15191336155810"><a name="b15191336155810"></a><a name="b15191336155810"></a>ROLLBACK</strong>, this parameter is invalid.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p359730009712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p359730009712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p359730009712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r9be0702e5bfd4f8480af8cfbd9b0c43e"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"><a name="en-us_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a><a name="en-us_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a668af7282b3440f292ad8697de06b81d"><a name="en-us_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a><a name="en-us_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a>Displays help information about <strong id="b842352706135658"><a name="b842352706135658"></a><a name="b842352706135658"></a>gsql</strong> command parameters, and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p281318939712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p281318939712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p281318939712"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r98591fe5999043888e3822f4712e7efb"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="en-us_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="en-us_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="en-us_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="en-us_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>Prints the <strong id="b84235270616372"><a name="b84235270616372"></a><a name="b84235270616372"></a>gsql</strong> version information and exits.</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p640908799712"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p640908799712"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p640908799712"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Input and output parameters

<a name="en-us_topic_0059779319_t0233128ab394456c80e339179cb56739"></a>
<table><thead align="left"><tr id="en-us_topic_0059779319_ra3cdda570ced41129194efd2e680304d"><th class="cellrowborder" valign="top" width="15.35%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059779319_en-us_topic_0058968145_p401260795738"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p401260795738"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p401260795738"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="64.89%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059779319_a906241fb7455400e916a9a38a9868a71"><a name="en-us_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a><a name="en-us_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="19.759999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059779319_en-us_topic_0058968145_p485266179117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p485266179117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p485266179117"></a><strong id="b84235270695823"><a name="b84235270695823"></a><a name="b84235270695823"></a>Value Range</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059779319_r064106ad54d9435fad3424d5a2377089"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a7891e008bcdc4c288c069694adc59550"><a name="en-us_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a><a name="en-us_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a>-a, --echo-all</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p239453995738"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p239453995738"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p239453995738"></a>Prints all input lines to standard output as they are read.</p>
<div class="caution" id="en-us_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"><a name="en-us_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><a name="en-us_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="en-us_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"><a name="en-us_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a><a name="en-us_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p383419339117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p383419339117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p383419339117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rb4b58fbd180a4bbeba2e3e52f0b74a56"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p19920195738"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p19920195738"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p19920195738"></a>-e, --echo-queries</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"><a name="en-us_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a><a name="en-us_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a>Displays all SQL commands sent to the server to the standard output as well.</p>
<div class="caution" id="en-us_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"><a name="en-us_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><a name="en-us_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="en-us_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"><a name="en-us_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a><a name="en-us_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p186888699117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p186888699117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p186888699117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_re72e5fed55b746989e2d11b33e07c76f"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"><a name="en-us_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a><a name="en-us_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a>-E, --echo-hidden</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"><a name="en-us_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a><a name="en-us_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a>Echoes the actual queries generated by <strong id="b842352706164710"><a name="b842352706164710"></a><a name="b842352706164710"></a>\d</strong> and other backslash commands.</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p374034349117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p374034349117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p374034349117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_raaf263ab8e2c4891a204f1debeeb0b5a"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"><a name="en-us_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a><a name="en-us_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a>-k, --with-key=KEY</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"><a name="en-us_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a><a name="en-us_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a>Uses <strong id="b842352706153159"><a name="b842352706153159"></a><a name="b842352706153159"></a>gsql</strong> to decrypt imported encrypted files.</p>
<div class="notice" id="en-us_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"><a name="en-us_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><a name="en-us_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="ul12609105744211"></a><a name="ul12609105744211"></a><ul id="ul12609105744211"><li>For key characters, such as the single quotation mark (') or double quotation mark (") in shell commands, Linux shell checks whether the input single quotation mark (') or double quotation mark (") matches. If no match is found, Linux shell does not enter the <strong id="b2434920133316"><a name="b2434920133316"></a><a name="b2434920133316"></a>gsql</strong> program until input is complete.</li><li>Stored procedures and functions cannot be decrypted and imported.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p97792999117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p97792999117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p97792999117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r649b2c557fa54148aad24f6edd10ad66"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_ab4297ab2218f4028885186e84264e945"><a name="en-us_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a><a name="en-us_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a>-L, --log-file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"><a name="en-us_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a><a name="en-us_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a>Writes normal output source and all query output into the <strong id="b84235270615368"><a name="b84235270615368"></a><a name="b84235270615368"></a>FILENAME</strong> file.</p>
<div class="caution" id="en-us_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"><a name="en-us_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><a name="en-us_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><a name="ul1039703419584"></a><a name="ul1039703419584"></a><ul id="ul1039703419584"><li>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</li><li>This parameter retains only the query result in the corresponding file, so that the result can be easily found and parsed by other invokers (for example, automatic O&amp;M scripts). Logs about <strong id="b18766861013"><a name="b18766861013"></a><a name="b18766861013"></a>gsql</strong> operations are not retained.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"><a name="en-us_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a><a name="en-us_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rf3647ed1bfd64792964a6801a39194c0"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_ac55a414323994f8caa7857a885ce1759"><a name="en-us_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a><a name="en-us_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a>-m, --maintenance</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"><a name="en-us_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a><a name="en-us_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a>Allows connections to the database during two-phase transaction recovery.</p>
<div class="note" id="en-us_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"><a name="en-us_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><a name="en-us_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"><a name="en-us_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a><a name="en-us_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a>The parameter is for engineers only. When this parameter is used, <strong id="b84235270617841"><a name="b84235270617841"></a><a name="b84235270617841"></a>gsql</strong> can be connected to the standby server to check data consistency between the primary and standby server.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p89352579117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p89352579117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p89352579117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rc862eac12f4e4356b0aca394c4b7b461"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"><a name="en-us_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a><a name="en-us_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a>-n, --no-libedit</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"><a name="en-us_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a><a name="en-us_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a>Closes command line editing.</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p526672539117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p526672539117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p526672539117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r08b7c2c3d00641b49eb4422a59e259c7"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"><a name="en-us_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a><a name="en-us_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a>-o, --output=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a5495253d5fc2465296d752e1198157c6"><a name="en-us_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a><a name="en-us_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a>Puts all query output into the <strong id="b842352706155448"><a name="b842352706155448"></a><a name="b842352706155448"></a>FILENAME</strong> file.</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"><a name="en-us_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a><a name="en-us_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rf39085b0d805479ba572f4c6a77ebac4"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"><a name="en-us_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a><a name="en-us_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a>-q, --quiet</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"><a name="en-us_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a><a name="en-us_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a>Indicates the quiet mode and no additional information will be printed.</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p381890689117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p381890689117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p381890689117"></a>By default, <strong id="b842352706173828"><a name="b842352706173828"></a><a name="b842352706173828"></a>gsql</strong> displays various information.</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r5cae5c04623a4788815f572ddd3a5119"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p582042195738"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p582042195738"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p582042195738"></a>-s, --single-step</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"><a name="en-us_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a><a name="en-us_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a>Runs in single-step mode. It indicates that the user is prompted before each command is sent to the server. This option can be also used for canceling execution. Use this option to debug scripts.</p>
<div class="caution" id="en-us_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"><a name="en-us_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><a name="en-us_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="en-us_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"><a name="en-us_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a><a name="en-us_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a>When this parameter is used in some SQL statements, the sensitive information, such as user password, may be disclosed. Use this parameter with caution.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p410907699117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p410907699117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p410907699117"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r139b7f4e328347debdde736d8ebd6fa1"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"><a name="en-us_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a><a name="en-us_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a>-S, --single-line</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"><a name="en-us_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a><a name="en-us_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a>Runs in single-line mode where a line break terminates an SQL command, as a semicolon does.</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p400179989117"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p400179989117"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p400179989117"></a>-</p>
</td>
</tr>
<tr id="row1064319820577"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="p177763975714"><a name="p177763975714"></a><a name="p177763975714"></a>-C, --enable-client-encryption</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="p1177616965718"><a name="p1177616965718"></a><a name="p1177616965718"></a>When <strong id="b2094662018485"><a name="b2094662018485"></a><a name="b2094662018485"></a>-C</strong> is used to connect to a local or remote database, you can use this option to enable the encrypted database function.</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="p7776599571"><a name="p7776599571"></a><a name="p7776599571"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Output format parameters

<a name="en-us_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8"></a>
<table><thead align="left"><tr id="en-us_topic_0059779319_ra101278a50d349be83a64bb1915591f1"><th class="cellrowborder" valign="top" width="17.52%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059779319_a396cd422101544c9b9de39d172ab7175"><a name="en-us_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a><a name="en-us_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="64.25%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"><a name="en-us_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a><a name="en-us_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059779319_en-us_topic_0058968145_p431994959135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p431994959135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p431994959135"></a><strong id="b1326530996"><a name="b1326530996"></a><a name="b1326530996"></a>Value Range</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059779319_r06630a6cad7e4748aed20317124c2a03"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"><a name="en-us_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a><a name="en-us_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a>-A, --no-align</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"><a name="en-us_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a><a name="en-us_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a>Switches to unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p94982399135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p94982399135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p94982399135"></a>The default output mode is aligned.</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r7f57d0e4831e486b95fbe023bae4bd94"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p120733695744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p120733695744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p120733695744"></a>-F, --field-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"><a name="en-us_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a><a name="en-us_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a>Specifies the field separator. The default is the vertical bar (|).</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p311598799135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p311598799135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p311598799135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r71cd46e7a1184ef4853d43846cc6a16b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"><a name="en-us_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a><a name="en-us_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a>-H, --html</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p253547695744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p253547695744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p253547695744"></a>Turns on the HTML tabular output.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p409222479135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p409222479135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p409222479135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r6df99f3887c740f59d40136a614bc9d5"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"><a name="en-us_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a><a name="en-us_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a>-P, --pset=VAR[=ARG]</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"><a name="en-us_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a><a name="en-us_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a>Specifies the print option in the <strong id="b441518161741"><a name="b441518161741"></a><a name="b441518161741"></a>\pset</strong> format in the command line.</p>
<div class="note" id="en-us_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"><a name="en-us_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><a name="en-us_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"><a name="en-us_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a><a name="en-us_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a>The equal sign (=), instead of the space, is used here to separate the name and value. For example, enter <strong id="b84235270684332"><a name="b84235270684332"></a><a name="b84235270684332"></a>-P format=latex</strong> to set the output format to <strong id="b84235270684340"><a name="b84235270684340"></a><a name="b84235270684340"></a>LaTeX</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p263677209135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p263677209135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p263677209135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rb03ed3abf98f420b91c00270e8e124fb"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p425912095744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p425912095744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p425912095744"></a>-R, --record-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"><a name="en-us_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a><a name="en-us_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a>Sets the record separator.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p554105779135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p554105779135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p554105779135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rdd5cd46088d544b5b90c8ddf7075a06b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"><a name="en-us_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a><a name="en-us_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"><a name="en-us_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a><a name="en-us_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a>Enables the editing mode on the client.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p590717879135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p590717879135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p590717879135"></a>This function is disabled by default.</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r3466981c1d824594921920fd9ddd1bf2"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p392666995744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p392666995744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p392666995744"></a>-t, --tuples-only</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p662507995744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p662507995744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p662507995744"></a>Prints only tuples.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p200854709135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p200854709135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p200854709135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r4a7c6bdac04f4826aeef67c5a3aaef23"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"><a name="en-us_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a><a name="en-us_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a>-T, --table-attr=TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"><a name="en-us_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a><a name="en-us_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a>Specifies options to be placed within the HTML table tag.</p>
<p id="en-us_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"><a name="en-us_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a><a name="en-us_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a>Use this parameter with the <strong id="b8423527068569"><a name="b8423527068569"></a><a name="b8423527068569"></a>-H,--html</strong> parameter to specify the output to the HTML format.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p163103539135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p163103539135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p163103539135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_rc0f8b59ecf8046489f865279cc92e667"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p271620295744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p271620295744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p271620295744"></a>-x, --expanded</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"><a name="en-us_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a><a name="en-us_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a>Turns on the expanded table formatting mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p460701889135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p460701889135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p460701889135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r70d9b0438762491c8bced4984a242043"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p837456095744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p837456095744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p837456095744"></a>-z, --field-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p748381795744"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p748381795744"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p748381795744"></a>Sets the field separator in the unaligned output mode to be blank.</p>
<p id="en-us_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"><a name="en-us_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a><a name="en-us_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a>Use this parameter with the <strong id="b8423527069413"><a name="b8423527069413"></a><a name="b8423527069413"></a>-A, --no-align</strong> parameter to switch to unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p406977529135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p406977529135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p406977529135"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r10eed4bf94ff49c7acc8e56dd2e2af7a"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"><a name="en-us_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a><a name="en-us_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a>-0, --record-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a36d383622634404baff9b73998c8f6dd"><a name="en-us_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a><a name="en-us_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a>Sets the record separator in the unaligned output mode to be blank.</p>
<p id="en-us_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"><a name="en-us_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a><a name="en-us_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a>Use this parameter with the <strong id="b1512424689"><a name="b1512424689"></a><a name="b1512424689"></a>-A, --no-align</strong> parameter to switch to unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p81836129135"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p81836129135"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p81836129135"></a>-</p>
</td>
</tr>
<tr id="row6199132555"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="p1407152055511"><a name="p1407152055511"></a><a name="p1407152055511"></a>-2, --pipeline</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="p94072206559"><a name="p94072206559"></a><a name="p94072206559"></a>Uses a pipe to transmit the password. This parameter cannot be used on devices and must be used together with the <strong id="b1534221675011"><a name="b1534221675011"></a><a name="b1534221675011"></a>-c</strong> or <strong id="b1451111845018"><a name="b1451111845018"></a><a name="b1451111845018"></a>-f</strong> parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="p174221114704"><a name="p174221114704"></a><a name="p174221114704"></a>-</p>
</td>
</tr>
<tr id="row168751313155516"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="p13875513185511"><a name="p13875513185511"></a><a name="p13875513185511"></a>-g,</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="p787516133552"><a name="p787516133552"></a><a name="p787516133552"></a>Prints all SQL statements from a file.</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="p587551375510"><a name="p587551375510"></a><a name="p587551375510"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Connection parameters

<a name="en-us_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68"></a>
<table><thead align="left"><tr id="en-us_topic_0059779319_r7ae18844030f48148c25a09efc185001"><th class="cellrowborder" valign="top" width="22.720000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"><a name="en-us_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a><a name="en-us_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.28%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"><a name="en-us_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a><a name="en-us_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"><a name="en-us_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a><a name="en-us_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059779319_rbc536c10a0524f93ba9dc04d86cae020"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p502015995754"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p502015995754"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p502015995754"></a>-h, --host=HOSTNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"><a name="en-us_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a><a name="en-us_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a>Specifies the host name of the machine on which the server is running or the directory for the Unix-domain socket.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"><a name="en-us_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a><a name="en-us_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a>If the host name is omitted, <strong id="b84235270691252"><a name="b84235270691252"></a><a name="b84235270691252"></a>gsql</strong> connects to the server of the local host over the Unix domain socket or over TCP/IP to connect to local host without the Unix domain socket.</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r192a476e6aa84e1ba66b8a618b81b730"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"><a name="en-us_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a><a name="en-us_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a>-p, --port=PORT</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"><a name="en-us_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a><a name="en-us_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a>Specifies the port number of the database server.</p>
<p id="en-us_topic_0059779319_aa087b88fe849401bbcba9de536673b28"><a name="en-us_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a><a name="en-us_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a>You can modify the default port number using the <strong id="b8423527069149"><a name="b8423527069149"></a><a name="b8423527069149"></a>-p, --port=PORT</strong> parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"><a name="en-us_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a><a name="en-us_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a>The default value is <strong id="b104691819153712"><a name="b104691819153712"></a><a name="b104691819153712"></a><span id="text06391931135519"><a name="text06391931135519"></a><a name="text06391931135519"></a>8000</span></strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r88a7493b32594e16aa0e0b888f97cc64"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"><a name="en-us_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a><a name="en-us_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a>-U, --username=USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p106242695754"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p106242695754"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p106242695754"></a>Specifies the user that connects to the database.</p>
<div class="note" id="en-us_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"><a name="en-us_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><a name="en-us_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="ul103034015494"></a><a name="ul103034015494"></a><ul id="ul103034015494"><li>If this parameter is specified, you also need to enter your password for identity authentication when connecting to the database. You can enter the password interactively or use the <strong id="b374258531611"><a name="b374258531611"></a><a name="b374258531611"></a>-W</strong> parameter to specify a password.</li><li>To connect to a database, add an escape character before any dollar sign ($) in the username.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"><a name="en-us_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a><a name="en-us_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a>String. The default user is the current user that operates the system.</p>
</td>
</tr>
<tr id="en-us_topic_0059779319_r2243c5af2de8467b89287880f4d71853"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"><a name="en-us_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a><a name="en-us_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a>-W, --password=PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"><a name="en-us_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a><a name="en-us_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a>Specifies a password when the <strong id="b8423527069353"><a name="b8423527069353"></a><a name="b8423527069353"></a>-U</strong> parameter is used to connect to the local database or a remote database.</p>
<div class="note" id="en-us_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"><a name="en-us_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><a name="en-us_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="ul2061711239620"></a><a name="ul2061711239620"></a><ul id="ul2061711239620"><li>When the server where the primary database node is located connects to the local primary database node, the trust connection is used by default and this parameter is ignored.</li><li>To connect to a database, add an escape character before any backslash (\) or back quote (`) in the password.</li><li>If this parameter is not specified but database connection requires your password, you will be prompted to enter your password in interactive mode. The maximum length of the password is 999 bytes, which is restricted by the maximum value of the GUC parameter <strong id="b109441427118"><a name="b109441427118"></a><a name="b109441427118"></a>password_max_length</strong>.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779319_en-us_topic_0058968145_p556353793842"><a name="en-us_topic_0059779319_en-us_topic_0058968145_p556353793842"></a><a name="en-us_topic_0059779319_en-us_topic_0058968145_p556353793842"></a>String</p>
</td>
</tr>
</tbody>
</table>

## Meta-Command Reference<a name="EN-US_TOPIC_0294749032"></a>

This section describes meta-commands provided by  **gsql**  after the openGauss database CLI tool is used to connect to a database. A  **gsql**  meta-command can be anything that you enter in  **gsql**  and begins with an unquoted backslash.

### Precautions<a name="en-us_topic_0059778645_sf4d8bb008138470c9007621cebd2dfde"></a>

-   The format of the  **gsql**  meta-command is a backslash \(\\\) followed by a command verb, and then a parameter. The parameters are separated from the command verb and from each other by any number of whitespace characters.
-   To include whitespace characters into an argument, you must quote them with a single straight quotation mark. To include a single straight quotation mark into such an argument, precede it by a backslash. Anything contained in single quotation marks is furthermore subject to C-like substitutions for \\n \(new line\), \\t \(tab\), \\b \(backspace\), \\r \(carriage return\), \\f \(form feed\), \\digits \(octal\), and \\xdigits \(hexadecimal\).
-   Within a parameter, text enclosed in double quotation marks \(""\) is taken as a command line input to the shell. The output of the command \(with any trailing newline removed\) is taken as the argument value.
-   If an unquoted argument begins with a colon \(:\), the argument is taken as a  **gsql**  variable and the value of the variable is used as the argument value instead.
-   Some commands take an SQL identifier \(such as a table name\) as a parameter. These parameters follow the SQL syntax rules: Unquoted letters are forced to lowercase, while double quotation marks \(""\) protect letters from case conversion and allow incorporation of whitespace into the identifier. Within double quotation marks, paired double quotation marks reduce to a single double quotation mark in the result name. For example,  **FOO"BAR"BAZ**  is interpreted as  **fooBARbaz**, and  **"Aweird""name"**  becomes  **A weird"name**.
-   Parsing for arguments stops when another unquoted backslash is found. This is taken as the beginning of a new meta-command. The special sequence \\\\ \(two backslashes\) marks the end of parameters and continues parsing SQL statements if any. In this way, SQL and  **gsql**  commands can be freely mixed in a line. But in any case, the arguments of a meta-command cannot continue beyond the end of the line.

### Meta-command<a name="en-us_topic_0059778645_s180deee1bdf347639010abe523b324fe"></a>

For details about meta-commands, see  [Table 1](#en-us_topic_0059778645_en-us_topic_0058968158_table23103470),  [Table 2](#en-us_topic_0059778645_en-us_topic_0058968158_table8624338),  [Table 3](#en-us_topic_0059778645_en-us_topic_0058968158_table62130565),  [Table 4](#en-us_topic_0059778645_en-us_topic_0058968158_table44907299),  [Table 6](#en-us_topic_0059778645_en-us_topic_0058968158_table53911699),  [Table 8](#en-us_topic_0059778645_en-us_topic_0058968158_table37189353),  [Table 9](#en-us_topic_0059778645_en-us_topic_0058968158_table32146234),  [Table 10](#en-us_topic_0059778645_en-us_topic_0058968158_table50076468), and  [Table 12](#en-us_topic_0059778645_en-us_topic_0058968158_table55465693).

>[!TIP]NOTICE 
>_FILE_  mentioned in the following commands indicates a file path. This path can be an absolute path such as  **/home/gauss/file.txt**  or a relative path, such as  **file.txt**. By default, a  **file.txt**  is created in the path where the user runs  **gsql**  commands.

**Table  1**  Common meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table23103470"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row28068480"><th class="cellrowborder" valign="top" width="18.55%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58954407"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58954407"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58954407"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.31%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p10577654"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10577654"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10577654"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="29.14%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"><a name="en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a><a name="en-us_topic_0059778645_a6ae5c3d2b0e24a70a6735941aa80ea5a"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row51483670"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p9427759"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p9427759"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p9427759"></a>\copyright</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25450984"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25450984"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25450984"></a>Displays <span id="text175512111301"><a name="text175512111301"></a><a name="text175512111301"></a><span id="text155514114301"><a name="text155514114301"></a><a name="text155514114301"></a>openGauss</span></span> version and copyright information.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"><a name="en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a><a name="en-us_topic_0059778645_a58c279b466274bffbeab5bd9ae34ec43"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r47448e8d5f694bb8a3cbe2198bb2e5fb"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"><a name="en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a><a name="en-us_topic_0059778645_ae1970eb0493b419ba68072716fd91574"></a>\g [FILE] or ;</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"><a name="en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a><a name="en-us_topic_0059778645_aee0f1f60a7ab41f6a053d54c43cbde76"></a>Performs a query operation and sends the result to a file or pipe.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"><a name="en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a><a name="en-us_topic_0059778645_a1d8ad00542514458a3e2d2d6f73f0551"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row39075813"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p11024304"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11024304"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11024304"></a>\h(\help) [NAME]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15079635"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15079635"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15079635"></a>Provides syntax help on the specified SQL statement.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"><a name="en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a><a name="en-us_topic_0059778645_a7cb2c0b6bf8e44d8bd93c1724a03ca8a"></a>If the name is not specified, then <strong id="b842352706141213"><a name="b842352706141213"></a><a name="b842352706141213"></a>gsql</strong> will list all the commands for which syntax help is available. If the name is an asterisk (*), syntax help on all SQL statements is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r0fed1aa4c7aa45179be733524d48d337"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p617954011537"></a>\parallel [on [num]|off]</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"><a name="en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a><a name="en-us_topic_0059778645_a54a7382266914ba5979907a7f48880b7"></a>Controls the parallel execution function.</p>
<a name="en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><a name="en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"></a><ul id="en-us_topic_0059778645_u0619712b75054bed8eae2b80ed89a7a6"><li><strong id="b14471550426169"><a name="b14471550426169"></a><a name="b14471550426169"></a>on</strong>: The switch is enabled and the maximum number of concurrently executed tasks is <strong id="b14458528926169"><a name="b14458528926169"></a><a name="b14458528926169"></a>num</strong>.</li><li><strong id="b842352706115011"><a name="b842352706115011"></a><a name="b842352706115011"></a>off</strong>: This switch is disabled.</li></ul>
<div class="note" id="en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"><a name="en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><a name="en-us_topic_0059778645_n17e1b3d4e9d547dcb2f0dd42793c3efa"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><a name="en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"></a><ul id="en-us_topic_0059778645_u7c8bd7f404534e31ae0e78702759e31b"><li>Parallel execution is not allowed in a running transaction and a transaction is not allowed to be started during parallel execution.</li><li>Parallel execution of <strong id="b842352706143226"><a name="b842352706143226"></a><a name="b842352706143226"></a>\d</strong> meta-commands is not allowed.</li><li>If <strong id="b3054559786169"><a name="b3054559786169"></a><a name="b3054559786169"></a>SELECT</strong> statements are run concurrently, customers can accept the problem that the return results are displayed randomly but they cannot accept it if a core dump or process response failure occurs.</li><li><strong id="b842352706143419"><a name="b842352706143419"></a><a name="b842352706143419"></a>SET</strong> statements are not allowed in concurrent tasks because they may cause unexpected results.</li><li>Temporary tables cannot be created in parallel. If temporary tables are required, create them before parallel execution is enabled, and use them only in the parallel execution. Temporary tables cannot be created in parallel execution.</li><li>When <strong id="b12712348456169"><a name="b12712348456169"></a><a name="b12712348456169"></a>\parallel</strong> is executed, <em id="i14551669926169"><a name="i14551669926169"></a><a name="i14551669926169"></a>num</em> independent gsql processes can be connected to the database server.</li><li>The total duration of all <strong id="b842352706103617"><a name="b842352706103617"></a><a name="b842352706103617"></a>\parallel</strong> tasks cannot exceed <strong id="b5474144243219"><a name="b5474144243219"></a><a name="b5474144243219"></a>session_timeout</strong>. Otherwise, the connection may fail during concurrent execution.</li><li>One or more commands following <strong id="b2964654162414"><a name="b2964654162414"></a><a name="b2964654162414"></a>\parallel on</strong> will be executed only after <strong id="b13948190112511"><a name="b13948190112511"></a><a name="b13948190112511"></a>\parallel off</strong> is executed. Therefore, <strong id="b361512511"><a name="b361512511"></a><a name="b361512511"></a>\parallel on</strong> must be followed by <strong id="b184603812253"><a name="b184603812253"></a><a name="b184603812253"></a>\parallel off</strong>. Otherwise, the commands following <strong id="b070091352511"><a name="b070091352511"></a><a name="b070091352511"></a>\parallel on</strong> cannot be executed.</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"><a name="en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a><a name="en-us_topic_0059778645_a90d6c46b05f445bda0c611a7239c2cdd"></a>The default value of <em id="i842352697113238"><a name="i842352697113238"></a><a name="i842352697113238"></a>num</em> is <strong id="b84235270614356"><a name="b84235270614356"></a><a name="b84235270614356"></a>1024</strong>.</p>
<div class="notice" id="en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"><a name="en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><a name="en-us_topic_0059778645_n606eae67e8a1457986ae70b68b6872ba"></a><span class="noticetitle"> NOTICE: </span><div class="noticebody"><a name="en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"></a><ul id="en-us_topic_0059778645_en-us_topic_0058968158_ul5543218319"><li>The maximum number of connections allowed by the server is determined based on <strong id="b842352706155156"><a name="b842352706155156"></a><a name="b842352706155156"></a>max_connection</strong> and the number of current connections.</li><li>Set the value of <em id="i842352697113213"><a name="i842352697113213"></a><a name="i842352697113213"></a>num</em> based on the allowed number of connections.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50763268"><td class="cellrowborder" valign="top" width="18.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18184039"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18184039"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18184039"></a>\q</p>
</td>
<td class="cellrowborder" valign="top" width="52.31%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p56600007"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56600007"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56600007"></a>Exits the gsql program. This command is executed only when a script terminates in a script file.</p>
</td>
<td class="cellrowborder" valign="top" width="29.14%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p976241910229"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Query buffer meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table8624338"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row60218325"><th class="cellrowborder" valign="top" width="36.25%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p45846132"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45846132"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45846132"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="63.74999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22549200"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22549200"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22549200"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row14545872"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p37364956"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37364956"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37364956"></a>\e  [FILE]   [LINE]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6662621"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6662621"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6662621"></a>Uses an external editor to edit the query buffer or file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row59963597"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25213208"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25213208"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25213208"></a>\ef [FUNCNAME [LINE]]</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p29003980"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29003980"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29003980"></a>Edits the function definition using an external editor. If <strong id="b8423527061613"><a name="b8423527061613"></a><a name="b8423527061613"></a>LINE</strong> is specified, the cursor will point to the specified line of the function body.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row59709228"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4609295"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4609295"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4609295"></a>\p</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p57959300"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p57959300"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p57959300"></a>Prints the current query buffer to the standard output.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row4733289"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47852110"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47852110"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47852110"></a>\r</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p67095562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p67095562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p67095562"></a>Resets or clears the query buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54688265"><td class="cellrowborder" valign="top" width="36.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p564458"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p564458"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p564458"></a>\w FILE</p>
</td>
<td class="cellrowborder" valign="top" width="63.74999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17110660"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17110660"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17110660"></a>Outputs the current query buffer to a file.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Input/Output commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table62130565"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row27656514"><th class="cellrowborder" valign="top" width="43%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25585200"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25585200"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25585200"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="56.99999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59135330"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59135330"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59135330"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row25232449"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53653520"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53653520"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53653520"></a>\copy { table [ ( column_list ) ] | ( query ) } { from | to } { filename | stdin | stdout | pstdin | pstdout } [ with ] [ binary ] [ oids ] [ delimiter [ as ] 'character' ] [ null [ as ] 'string' ] [ csv [ header ] [ quote [ as ] 'character' ] [ escape [ as ] 'character' ] [ force quote column_list | * ] [ force not null column_list ] [ force null column_list ] ]  [parallel integer]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="p1671244475815"><a name="p1671244475815"></a><a name="p1671244475815"></a>After logging in to the database on any <strong id="b386522624910"><a name="b386522624910"></a><a name="b386522624910"></a>gsql</strong> client, you can import and export data. This is an operation of running the <strong id="b386652617491"><a name="b386652617491"></a><a name="b386652617491"></a>SQL COPY</strong> command, but not the server that reads or writes data to a specified file. Instead, data is transferred between the server and the local file system. In this way, local user permissions instead of server permissions are required for file access, and the user permissions do not need to be initialized.</p>
<div class="note" id="note1924115273417"><a name="note1924115273417"></a><a name="note1924115273417"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p54222394915"><a name="p54222394915"></a><a name="p54222394915"></a><strong id="b1118215371541"><a name="b1118215371541"></a><a name="b1118215371541"></a>\COPY</strong> is applicable only to small-batch data import in a good format. It does not preprocess invalid characters and does not have the error tolerance capability. GDS or <strong id="b2638590856169"><a name="b2638590856169"></a><a name="b2638590856169"></a>COPY</strong> is preferred for data import.</p>
<p id="p156755320558"><a name="p156755320558"></a><a name="p156755320558"></a>\COPY specifies the number of clients to import data to implement parallel import of data files. Currently, the value ranges from 1 to 8.</p>
<p id="p65691446135618"><a name="p65691446135618"></a><a name="p65691446135618"></a>The parallel import using \COPY has the following constraints: Parallel import of temporary tables is not supported. Parallel import within transactions is not supported. Parallel import of binary files is not supported. Parallel import of data encrypted using AES-128 is not supported. The COPY option contains EOL. In these cases, even if the parallel parameter is specified, a non-parallel process is performed.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row67017286"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59691067"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59691067"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59691067"></a>\echo   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p3138273"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3138273"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3138273"></a>Writes character strings to the standard output.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row28244462"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6100063"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6100063"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6100063"></a>\i FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17880725"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17880725"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17880725"></a>Reads content from <em id="i842352697143627"><a name="i842352697143627"></a><a name="i842352697143627"></a>FILE</em> and uses them as the input for a query.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row17761542"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p29398782"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29398782"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29398782"></a>\i+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p32491118"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32491118"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32491118"></a>Runs commands in an encrypted file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row23984611"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p63705339"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63705339"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63705339"></a>\ir FILE</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59858848"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59858848"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59858848"></a>Similar to <strong id="b842352706165351"><a name="b842352706165351"></a><a name="b842352706165351"></a>\i</strong>, but resolves relative path names differently.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row1858722"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16338821"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16338821"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16338821"></a>\ir+ FILE KEY</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48376104"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48376104"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48376104"></a>Similar to <strong id="b842352706143838"><a name="b842352706143838"></a><a name="b842352706143838"></a>\i+</strong>, but resolves relative path names differently.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row32731753"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p34026319"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34026319"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34026319"></a>\o   [FILE]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4668491"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4668491"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4668491"></a>Saves all query results to a file.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row42016419"><td class="cellrowborder" valign="top" width="43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47886808"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47886808"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47886808"></a>\qecho   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="56.99999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53626262"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53626262"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53626262"></a>Writes character strings to the query output flow.</p>
</td>
</tr>
</tbody>
</table>

>[!NOTE]NOTE 
>In  [Table 4](#en-us_topic_0059778645_en-us_topic_0058968158_table44907299),  **S**  indicates displaying the system object and  **+**  indicates displaying the additional description information of the object.  [PATTERN](#section363084334814)  specifies the name of an object to be displayed.

**Table  4**  Information display meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table44907299"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row64036265"><th class="cellrowborder" valign="top" width="13%" id="mcps1.2.5.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p21471471"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p21471471"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p21471471"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="37%" id="mcps1.2.5.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p761538"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p761538"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p761538"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"><a name="en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a><a name="en-us_topic_0059778645_a2566f5d7e6914403a8ab904249817030"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1357773513104"><a name="p1357773513104"></a><a name="p1357773513104"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row61175475"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18824504"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18824504"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18824504"></a>\d[S+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p35202815"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35202815"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35202815"></a>Lists all tables, views, and sequences of all schemas in the search_path. When objects with the same name exist in different schemas in <strong id="b21086465386169"><a name="b21086465386169"></a><a name="b21086465386169"></a>search_path</strong>, only the object in the schema that ranks first in <strong id="b8597823946169"><a name="b8597823946169"></a><a name="b8597823946169"></a>search_path </strong>is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"><a name="en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a><a name="en-us_topic_0059778645_afc0d6c4ddb8345769e7db370447c327b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p195771735131011"><a name="p195771735131011"></a><a name="p195771735131011"></a>Lists all tables, views, and sequences of all schemas in the search_path.</p>
<a name="screen870119314254"></a><a name="screen870119314254"></a><pre class="screen" codetype="Sql" id="screen870119314254">openGauss=# \d</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row43094998"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1033944"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1033944"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1033944"></a>\d[S+]     NAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16640626"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16640626"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16640626"></a>Lists the structure of specified tables, views, and indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p697532101841"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p357713531015"><a name="p357713531015"></a><a name="p357713531015"></a>Lists the structure of table <strong id="b448173036169"><a name="b448173036169"></a><a name="b448173036169"></a>a</strong>.</p>
<a name="screen14668143818316"></a><a name="screen14668143818316"></a><pre class="screen" codetype="Sql" id="screen14668143818316">openGauss=# \dtable+ a</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_rc676f2378e804a7db9ffa0f108079797"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"><a name="en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a><a name="en-us_topic_0059778645_ab0c9bb84b5f64c46bb10dbdc62728f79"></a>\d+      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"><a name="en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a><a name="en-us_topic_0059778645_a991446382d714c8496c24d80dd68d5e0"></a>Lists all tables, views, and indexes.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"><a name="en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a><a name="en-us_topic_0059778645_a0e87b406ab45419c97ce810970ea6690"></a>If <strong id="b17577930926169"><a name="b17577930926169"></a><a name="b17577930926169"></a>PATTERN</strong> is specified, only tables, views, and indexes whose names match <strong id="b7444100506169"><a name="b7444100506169"></a><a name="b7444100506169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15577735191011"><a name="p15577735191011"></a><a name="p15577735191011"></a>Lists all tables, views, and indexes whose names start with <strong id="b3567671866169"><a name="b3567671866169"></a><a name="b3567671866169"></a>f</strong>.</p>
<a name="screen7795101223810"></a><a name="screen7795101223810"></a><pre class="screen" codetype="Sql" id="screen7795101223810">openGauss=# \d+ f*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row17021576"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36570438"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36570438"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36570438"></a>\da[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1108737"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1108737"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1108737"></a>Lists all available aggregate functions, together with the data type they perform operations on and the return value types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"><a name="en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a><a name="en-us_topic_0059778645_af3fe277a237d400cb9ef4fee41b06ba1"></a>If <strong id="b84235270620130"><a name="b84235270620130"></a><a name="b84235270620130"></a>PATTERN</strong> is specified, only aggregate functions whose names match <strong id="b205338262292434"><a name="b205338262292434"></a><a name="b205338262292434"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p177201129103815"><a name="p177201129103815"></a><a name="p177201129103815"></a>Lists all available aggregate functions whose names start with <strong id="b11749014826169"><a name="b11749014826169"></a><a name="b11749014826169"></a>f</strong>, together with their return value types and the data types.</p>
<a name="screen127242029173818"></a><a name="screen127242029173818"></a><pre class="screen" codetype="Sql" id="screen127242029173818">openGauss=# \da f*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row33501381"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p29257302"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29257302"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p29257302"></a>\db[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p64560085"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p64560085"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p64560085"></a>Lists all available tablespaces.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"><a name="en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a><a name="en-us_topic_0059778645_a75e294acb55742b2a0fed934b9ea256a"></a>If <strong id="b10944104766169"><a name="b10944104766169"></a><a name="b10944104766169"></a>PATTERN</strong> is specified, only tablespaces whose names match <strong id="b5727589136169"><a name="b5727589136169"></a><a name="b5727589136169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15577535101019"><a name="p15577535101019"></a><a name="p15577535101019"></a>Lists all available tablespaces whose names start with <strong id="b84235270616458"><a name="b84235270616458"></a><a name="b84235270616458"></a>p</strong>.</p>
<a name="screen39531436154513"></a><a name="screen39531436154513"></a><pre class="screen" codetype="Sql" id="screen39531436154513">openGauss=# \db p*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row22955407"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47448677"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47448677"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47448677"></a>\dc[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p66270656"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p66270656"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p66270656"></a>Lists all available conversions between character-set encodings.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"><a name="en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a><a name="en-us_topic_0059778645_aa7270160007648b29ff9ff17e4444f36"></a>If <strong id="b9685893766169"><a name="b9685893766169"></a><a name="b9685893766169"></a>PATTERN</strong> is specified, only conversions whose names match <strong id="b12398577426169"><a name="b12398577426169"></a><a name="b12398577426169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15577143512103"><a name="p15577143512103"></a><a name="p15577143512103"></a>Lists all available conversions between character-set encodings.</p>
<a name="screen10277181254816"></a><a name="screen10277181254816"></a><pre class="screen" codetype="Sql" id="screen10277181254816">openGauss=# \dc *</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row9670257"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p45093353"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45093353"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p45093353"></a>\dC[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p28682990"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28682990"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28682990"></a>Lists all available type conversions.</p>
<p id="p438888164313"><a name="p438888164313"></a><a name="p438888164313"></a>PATTERN must be the actual type name and cannot be an alias.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"><a name="en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a><a name="en-us_topic_0059778645_a65fc285da5d44848910f2203c99feaf8"></a>If <strong id="b1775961543"><a name="b1775961543"></a><a name="b1775961543"></a>PATTERN</strong> is specified, only conversions whose names match <strong id="b1174305546"><a name="b1174305546"></a><a name="b1174305546"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15772356108"><a name="p15772356108"></a><a name="p15772356108"></a>Lists all type conversions whose patten names start with <strong id="b151119414592"><a name="b151119414592"></a><a name="b151119414592"></a>c</strong>.</p>
<a name="screen209676130533"></a><a name="screen209676130533"></a><pre class="screen" codetype="Sql" id="screen209676130533">openGauss=# \dC c*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row22085710"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44112084"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44112084"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44112084"></a>\dd[S]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16309022"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16309022"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16309022"></a>Lists descriptions about objects matching <strong id="b842352706114618"><a name="b842352706114618"></a><a name="b842352706114618"></a>PATTERN</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"><a name="en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a><a name="en-us_topic_0059778645_a42ca1c2c8714487681ec93789e21759b"></a>If <strong id="b842352706201611"><a name="b842352706201611"></a><a name="b842352706201611"></a>PATTERN</strong> is not specified, all visible objects are displayed. The objects include aggregations, functions, operators, types, relations (tables, views, indexes, sequences, and large objects), and rules.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p165775358102"><a name="p165775358102"></a><a name="p165775358102"></a>Lists all visible objects.</p>
<a name="screen853411371558"></a><a name="screen853411371558"></a><pre class="screen" codetype="Sql" id="screen853411371558">openGauss=# \dd</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row2818067"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26936868"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26936868"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26936868"></a>\ddp       [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p12102568"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p12102568"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p12102568"></a>Lists all default permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"><a name="en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a><a name="en-us_topic_0059778645_a7a0d5e52ad42479dbcdd41fba4099370"></a>If <strong id="b17541197116169"><a name="b17541197116169"></a><a name="b17541197116169"></a>PATTERN</strong> is specified, only permissions whose names match <strong id="b2793432766169"><a name="b2793432766169"></a><a name="b2793432766169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2013319535553"><a name="p2013319535553"></a><a name="p2013319535553"></a>Lists all default permissions.</p>
<a name="screen611671118568"></a><a name="screen611671118568"></a><pre class="screen" codetype="Sql" id="screen611671118568">openGauss=# \ddp</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row32410867"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p65613749"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65613749"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65613749"></a>\dD[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22994959"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22994959"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22994959"></a>Lists all available domains.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"><a name="en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a><a name="en-us_topic_0059778645_a7c9adcd96eee43f2ae0d6be46ab9448d"></a>If <strong id="b842352706202218"><a name="b842352706202218"></a><a name="b842352706202218"></a>PATTERN</strong> is specified, only domains whose names match <strong id="b1966085158164611"><a name="b1966085158164611"></a><a name="b1966085158164611"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p757763512103"><a name="p757763512103"></a><a name="p757763512103"></a>Lists all available domains.</p>
<a name="screen470324716013"></a><a name="screen470324716013"></a><pre class="screen" codetype="Sql" id="screen470324716013">openGauss=# \dD</pre>
</td>
</tr>
<tr id="row15593174194714"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="p85931944473"><a name="p85931944473"></a><a name="p85931944473"></a>\ded[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p95931411475"><a name="p95931411475"></a><a name="p95931411475"></a>Lists all Data Source objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p05931043472"><a name="p05931043472"></a><a name="p05931043472"></a>If <strong id="b8816994456169"><a name="b8816994456169"></a><a name="b8816994456169"></a>PATTERN</strong> is specified, only objects whose names match <strong id="b1049244176169"><a name="b1049244176169"></a><a name="b1049244176169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p457743571018"><a name="p457743571018"></a><a name="p457743571018"></a>Lists all Data Source objects.</p>
<a name="screen64435207113"></a><a name="screen64435207113"></a><pre class="screen" codetype="Sql" id="screen64435207113">openGauss=# \ded</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row29632532"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51424905"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51424905"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51424905"></a>\det[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4667762"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4667762"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4667762"></a>Lists all external tables.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"><a name="en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a><a name="en-us_topic_0059778645_aeb0aa7308fc049fd9f2cf56a364962fa"></a>If <strong id="b2075417156169"><a name="b2075417156169"></a><a name="b2075417156169"></a>PATTERN</strong> is specified, only tables whose names match <strong id="b5833961856169"><a name="b5833961856169"></a><a name="b5833961856169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1157773515101"><a name="p1157773515101"></a><a name="p1157773515101"></a>Lists all external tables.</p>
<a name="screen1187219441618"></a><a name="screen1187219441618"></a><pre class="screen" codetype="Sql" id="screen1187219441618">openGauss=# \det</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row17017920"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36274241"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36274241"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36274241"></a>\des[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p52532403"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52532403"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52532403"></a>Lists all external servers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"><a name="en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a><a name="en-us_topic_0059778645_a0e2f9903f1604f89a88da6e8d6dab947"></a>If <strong id="b6768230866169"><a name="b6768230866169"></a><a name="b6768230866169"></a>PATTERN</strong> is specified, only servers whose names match <strong id="b11134443006169"><a name="b11134443006169"></a><a name="b11134443006169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14577163520106"><a name="p14577163520106"></a><a name="p14577163520106"></a>Lists all external servers.</p>
<a name="screen471819181217"></a><a name="screen471819181217"></a><pre class="screen" codetype="Sql" id="screen471819181217">openGauss=# \des</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row7470634"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1141657"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1141657"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1141657"></a>\deu[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25365425"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25365425"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25365425"></a>Lists all user mappings.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"><a name="en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a><a name="en-us_topic_0059778645_a548c3a3b5584473ebfd7382653e45321"></a>If <strong id="b10006405496169"><a name="b10006405496169"></a><a name="b10006405496169"></a>PATTERN</strong> is specified, only information whose name matches <strong id="b5940208456169"><a name="b5940208456169"></a><a name="b5940208456169"></a>PATTERN</strong> is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p2577153501020"><a name="p2577153501020"></a><a name="p2577153501020"></a>Lists all user mappings.</p>
<a name="screen969244719217"></a><a name="screen969244719217"></a><pre class="screen" codetype="Sql" id="screen969244719217">openGauss=#\deu</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row57629814"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p37503373"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37503373"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37503373"></a>\dew[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p59707645"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59707645"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p59707645"></a>Lists all encapsulated external data.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"><a name="en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a><a name="en-us_topic_0059778645_a61a19a2b262b4953821d13bbb7c07896"></a>If <strong id="b842352706202332"><a name="b842352706202332"></a><a name="b842352706202332"></a>PATTERN</strong> is specified, only data whose name matches <strong id="b1071194613164818"><a name="b1071194613164818"></a><a name="b1071194613164818"></a>PATTERN</strong> is displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p957710356104"><a name="p957710356104"></a><a name="p957710356104"></a>Lists all encapsulated external data.</p>
<a name="screen1325519129311"></a><a name="screen1325519129311"></a><pre class="screen" codetype="Sql" id="screen1325519129311">openGauss=# \dew</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_r77ed835b6ed840d7a40a9e96afe3ba8c"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p869443393148"></a>\df[antw][S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"><a name="en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a><a name="en-us_topic_0059778645_a40a4643fbaf94ac69e5bc1a1db594f6f"></a>Lists all available functions, together with their parameters and return types. <strong id="b6259114806169"><a name="b6259114806169"></a><a name="b6259114806169"></a>a</strong> indicates an aggregate function, <strong id="b4481885086169"><a name="b4481885086169"></a><a name="b4481885086169"></a>n</strong> indicates a common function, <strong id="b14287503366169"><a name="b14287503366169"></a><a name="b14287503366169"></a>t</strong> indicates a trigger, and <strong id="b3261901866169"><a name="b3261901866169"></a><a name="b3261901866169"></a>w</strong> indicates a window function.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"><a name="en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a><a name="en-us_topic_0059778645_ad164a62f597e458ca455d2ce7f74e6f2"></a>If <strong id="b842352706202359"><a name="b842352706202359"></a><a name="b842352706202359"></a>PATTERN</strong> is specified, only functions whose names match <strong id="b716985331164853"><a name="b716985331164853"></a><a name="b716985331164853"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p857783511019"><a name="p857783511019"></a><a name="p857783511019"></a>Lists all available functions, together with their parameters and return types.</p>
<a name="screen11242350437"></a><a name="screen11242350437"></a><pre class="screen" codetype="Sql" id="screen11242350437">openGauss=# \df</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row16530091"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p63869018"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63869018"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63869018"></a>\dF[+]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6007965"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007965"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007965"></a>Lists all text search configuration information.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"><a name="en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a><a name="en-us_topic_0059778645_aa5218fb22000456182d570b3e8ed1818"></a>If <strong id="b16233128116169"><a name="b16233128116169"></a><a name="b16233128116169"></a>PATTERN</strong> is specified, only configurations whose names match <strong id="b4516287826169"><a name="b4516287826169"></a><a name="b4516287826169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1577183531020"><a name="p1577183531020"></a><a name="p1577183531020"></a>Lists all text search configuration information.</p>
<a name="screen46672584514"></a><a name="screen46672584514"></a><pre class="screen" codetype="Sql" id="screen46672584514">openGauss=# \dF+</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row38166311"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4463500"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4463500"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4463500"></a>\dFd[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25999205"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25999205"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25999205"></a>Lists all text search dictionaries.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"><a name="en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a><a name="en-us_topic_0059778645_aefece03969de4a789ff0cb9fc9de3792"></a>If <strong id="b842352706202450"><a name="b842352706202450"></a><a name="b842352706202450"></a>PATTERN</strong> is specified, only dictionaries whose names match <strong id="b587957936164917"><a name="b587957936164917"></a><a name="b587957936164917"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p185326114612"><a name="p185326114612"></a><a name="p185326114612"></a>Lists all text search dictionaries.</p>
<a name="screen29572448619"></a><a name="screen29572448619"></a><pre class="screen" codetype="Sql" id="screen29572448619">openGauss=# \dFd</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row46612018"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17477084"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17477084"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17477084"></a>\dFp[+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6357682"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6357682"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6357682"></a>Lists all text search analyzers.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"><a name="en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a><a name="en-us_topic_0059778645_a7d482b0913474dbe858fad31f4c87077"></a>If <strong id="b84235270620252"><a name="b84235270620252"></a><a name="b84235270620252"></a>PATTERN</strong> is specified, only analyzers whose names match <strong id="b2005038815164933"><a name="b2005038815164933"></a><a name="b2005038815164933"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1457719355104"><a name="p1457719355104"></a><a name="p1457719355104"></a>Lists all text search analyzers.</p>
<a name="screen411214129251"></a><a name="screen411214129251"></a><pre class="screen" codetype="Sql" id="screen411214129251">openGauss=# \dFp</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row16086458"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27934725"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27934725"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27934725"></a>\dFt[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48120228"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48120228"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48120228"></a>Lists all text search templates.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"><a name="en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a><a name="en-us_topic_0059778645_aea24d1041bc44d9dbbc1591aedadfad5"></a>If <strong id="b2743002186169"><a name="b2743002186169"></a><a name="b2743002186169"></a>PATTERN</strong> is specified, only templates whose names match <strong id="b16526355606169"><a name="b16526355606169"></a><a name="b16526355606169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p11577135161010"><a name="p11577135161010"></a><a name="p11577135161010"></a>Lists all text search templates.</p>
<a name="screen167381037132518"></a><a name="screen167381037132518"></a><pre class="screen" codetype="Sql" id="screen167381037132518">openGauss=# \dFt</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50056048"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p28358554"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28358554"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28358554"></a>\dg[+]    [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25942514"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25942514"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25942514"></a>Lists all database roles.</p>
<div class="note" id="en-us_topic_0059778645_en-us_topic_0058968158_note44053031"><a name="en-us_topic_0059778645_en-us_topic_0058968158_note44053031"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_note44053031"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7501312"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7501312"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7501312"></a>Since the concepts of "users" and "groups" have been unified into "roles", this command is now equivalent to <strong id="b842352706202557"><a name="b842352706202557"></a><a name="b842352706202557"></a>\du</strong>. Both commands are retained to ensure compatibility with earlier versions.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"><a name="en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a><a name="en-us_topic_0059778645_a32f80f790283435da1375c11d802f12f"></a>If <strong id="b842352706202632"><a name="b842352706202632"></a><a name="b842352706202632"></a>PATTERN</strong> is specified, only roles whose names match <strong id="b291679219165017"><a name="b291679219165017"></a><a name="b291679219165017"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p857783591012"><a name="p857783591012"></a><a name="p857783591012"></a>Lists all database roles whose names start with <strong id="b91311041137"><a name="b91311041137"></a><a name="b91311041137"></a>j</strong> and end with <strong id="b1413694739"><a name="b1413694739"></a><a name="b1413694739"></a>e</strong>.</p>
<a name="screen1551485112618"></a><a name="screen1551485112618"></a><pre class="screen" codetype="Sql" id="screen1551485112618">openGauss=# \dg j?e</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row11462347"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p28670734"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28670734"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p28670734"></a>\dl</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7129116"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7129116"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7129116"></a>This is an alias for <strong id="b842352706202656"><a name="b842352706202656"></a><a name="b842352706202656"></a>\lo_list</strong>, which shows a list of large objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"><a name="en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"></a><a name="en-us_topic_0059778645_a0235149909644fb29014368530ea6c25"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p9577235131013"><a name="p9577235131013"></a><a name="p9577235131013"></a>Lists all large objects.</p>
<a name="screen1850163162713"></a><a name="screen1850163162713"></a><pre class="screen" codetype="Sql" id="screen1850163162713">openGauss=# \dl</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row37929561"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48869151"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48869151"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48869151"></a>\dL[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p452647"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p452647"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p452647"></a>Lists all available program languages.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"><a name="en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a><a name="en-us_topic_0059778645_a88540567ac694184bc9ea78c56427f98"></a>If <strong id="b2983835446169"><a name="b2983835446169"></a><a name="b2983835446169"></a>PATTERN</strong> is specified, only languages whose names match <strong id="b4865169996169"><a name="b4865169996169"></a><a name="b4865169996169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1457723514101"><a name="p1457723514101"></a><a name="p1457723514101"></a>Lists all available program languages.</p>
<a name="screen9767751132710"></a><a name="screen9767751132710"></a><pre class="screen" codetype="Sql" id="screen9767751132710">openGauss=# \dL</pre>
</td>
</tr>
<tr id="row2059818401227"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="p45994409215"><a name="p45994409215"></a><a name="p45994409215"></a>\dm[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p205995401029"><a name="p205995401029"></a><a name="p205995401029"></a>Lists materialized views.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1959994015220"><a name="p1959994015220"></a><a name="p1959994015220"></a>If <strong id="b1041014893510"><a name="b1041014893510"></a><a name="b1041014893510"></a>PATTERN</strong> is specified, only materialized views whose names match <strong id="b1741010487352"><a name="b1741010487352"></a><a name="b1741010487352"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p125993404219"><a name="p125993404219"></a><a name="p125993404219"></a>Lists materialized views.</p>
<a name="screen185528418111"></a><a name="screen185528418111"></a><pre class="screen" codetype="Sql" id="screen185528418111">openGauss=# \dm</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5597993"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p50784313"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50784313"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50784313"></a>\dn[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p19888706"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19888706"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19888706"></a>Lists all schemas (namespace). If <strong id="b1310913462598"><a name="b1310913462598"></a><a name="b1310913462598"></a>+</strong> is added to the command, the permission and description of each schema are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"><a name="en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a><a name="en-us_topic_0059778645_a8664b27a89e141ff950b213413125c90"></a>If <strong id="b842352706202932"><a name="b842352706202932"></a><a name="b842352706202932"></a>PATTERN</strong> is specified, only schemas whose names match the pattern are shown. By default, only schemas you created are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p9578133541012"><a name="p9578133541012"></a><a name="p9578133541012"></a>Lists information about all schemas whose names start with <strong id="b842352706164616"><a name="b842352706164616"></a><a name="b842352706164616"></a>d</strong>.</p>
<a name="screen16471162442818"></a><a name="screen16471162442818"></a><pre class="screen" codetype="Sql" id="screen16471162442818">openGauss=# \dn+ d*</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row40307610"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p43691002"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43691002"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43691002"></a>\do[S]     [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22510532"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22510532"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22510532"></a>Lists available operators with their operand and return types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"><a name="en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a><a name="en-us_topic_0059778645_ad2afb45736964a5eaa7ea8b6083279a7"></a>If <strong id="b842352706203031"><a name="b842352706203031"></a><a name="b842352706203031"></a>PATTERN</strong> is specified, only operators whose names match <strong id="b279880693165129"><a name="b279880693165129"></a><a name="b279880693165129"></a>PATTERN</strong> are displayed. By default, only the operators created by the user are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1810350172816"><a name="p1810350172816"></a><a name="p1810350172816"></a>Lists available operators with their operand and return types.</p>
<a name="screen19243171018299"></a><a name="screen19243171018299"></a><pre class="screen" codetype="Sql" id="screen19243171018299">openGauss=# \do</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row13580902"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26311271"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26311271"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26311271"></a>\dO[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p503566"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503566"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503566"></a>Lists collation rules.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"><a name="en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a><a name="en-us_topic_0059778645_aa644dd082f9346dcaa96d6a620dfada9"></a>If <strong id="b23103960"><a name="b23103960"></a><a name="b23103960"></a>PATTERN</strong> is specified, only rules whose names match <strong id="b1274997721165144"><a name="b1274997721165144"></a><a name="b1274997721165144"></a>PATTERN</strong> are displayed. By default, only user-created rules are shown.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p957863531018"><a name="p957863531018"></a><a name="p957863531018"></a>Lists collation rules.</p>
<a name="screen484512358294"></a><a name="screen484512358294"></a><pre class="screen" codetype="Sql" id="screen484512358294">openGauss=# \dO</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row43124328"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27963622"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27963622"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27963622"></a>\dp [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48039187"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48039187"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48039187"></a>Lists tables, views, and related permissions.</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p429958739351"></a>The following result about <strong id="b842352706104415"><a name="b842352706104415"></a><a name="b842352706104415"></a>\dp</strong> is displayed:</p>
<pre class="screen" id="en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"><a name="en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a><a name="en-us_topic_0059778645_sce9b1fb55fa343c187cf940bc2cc9bc7"></a>rolename=xxxx/yyyy  --Assigns permissions to a role.</pre>
<pre class="screen" id="en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"><a name="en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a><a name="en-us_topic_0059778645_s93c7bdbc497946f9bad85f0517b454f3"></a>=xxxx/yyyy --Assigns permissions to public.</pre>
<p id="en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"><a name="en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><a name="en-us_topic_0059778645_aaed77d37fe9d4ddeb54f3d1b5ce1c962"></a><em id="i842352697203342"><a name="i842352697203342"></a><a name="i842352697203342"></a>xxxx</em> indicates the assigned permissions, and <em id="i842352697203345"><a name="i842352697203345"></a><a name="i842352697203345"></a>yyyy</em> indicates the roles with the assigned permissions. For details about permission descriptions, see <a href="#en-us_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e">Table 5</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"><a name="en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a><a name="en-us_topic_0059778645_a7eb8d6e2e4cf42f38b486bd65dc20965"></a>If <strong id="b842352706203531"><a name="b842352706203531"></a><a name="b842352706203531"></a>PATTERN</strong> is specified, only tables and views whose names match the pattern are shown.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p13219183511301"><a name="p13219183511301"></a><a name="p13219183511301"></a>Lists tables, views, and related permissions.</p>
<a name="screen1582855623016"></a><a name="screen1582855623016"></a><pre class="screen" codetype="Sql" id="screen1582855623016">openGauss=# \dp</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54494628"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51988786"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51988786"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51988786"></a>\drds [PATTERN1 [PATTERN2]]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p50342148"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50342148"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p50342148"></a>Lists all parameters that have been modified. These settings can be for roles, for databases, or for both. <strong id="b842352706164754"><a name="b842352706164754"></a><a name="b842352706164754"></a>PATTERN1</strong> and <strong id="b842352706164756"><a name="b842352706164756"></a><a name="b842352706164756"></a>PATTERN2</strong> indicate a role pattern and a database pattern, respectively.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"><a name="en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a><a name="en-us_topic_0059778645_a1ca4d6765505420aa71c47a641db8f94"></a>If <strong id="b1774149938"><a name="b1774149938"></a><a name="b1774149938"></a>PATTERN</strong> is specified, only collations rules whose names match <strong id="b1485527292"><a name="b1485527292"></a><a name="b1485527292"></a>PATTERN</strong> are displayed. If the default value is used or <strong id="b842352706164811"><a name="b842352706164811"></a><a name="b842352706164811"></a>*</strong> is specified, all settings are listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p16578103521013"><a name="p16578103521013"></a><a name="p16578103521013"></a>Lists all modified configuration parameters of the <strong id="b842352706165020"><a name="b842352706165020"></a><a name="b842352706165020"></a>postgres</strong> database.</p>
<a name="screen1059193118474"></a><a name="screen1059193118474"></a><pre class="screen" codetype="Sql" id="screen1059193118474">openGauss=# \drds *openGausss</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row36326509"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p33900150"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33900150"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33900150"></a>\dT[S+]  [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18359055"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18359055"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18359055"></a>Lists all data types.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"><a name="en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a><a name="en-us_topic_0059778645_a0db3ad9c5a304e42b55b8010b0a8ca3b"></a>If <strong id="b10744668546169"><a name="b10744668546169"></a><a name="b10744668546169"></a>PATTERN</strong> is specified, only types whose names match <strong id="b5646031866169"><a name="b5646031866169"></a><a name="b5646031866169"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p115789354101"><a name="p115789354101"></a><a name="p115789354101"></a>Lists all data types.</p>
<a name="screen20987133092411"></a><a name="screen20987133092411"></a><pre class="screen" codetype="Sql" id="screen20987133092411">openGauss=# \dT</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row18143655"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6205284"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6205284"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6205284"></a>\du[+] [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7550250"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7550250"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7550250"></a>Lists all database roles.</p>
<div class="note" id="en-us_topic_0059778645_en-us_topic_0058968158_note843393"><a name="en-us_topic_0059778645_en-us_topic_0058968158_note843393"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_note843393"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p23208538"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23208538"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23208538"></a>Since the concepts of "users" and "groups" have been unified into "roles", this command is now equivalent to <strong id="b842352706164446"><a name="b842352706164446"></a><a name="b842352706164446"></a>\dg</strong>. Both commands are retained to ensure compatibility with earlier versions.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"><a name="en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a><a name="en-us_topic_0059778645_a6650390a31394f0f95fb405d558dbaa6"></a>If <strong id="b842352706203652"><a name="b842352706203652"></a><a name="b842352706203652"></a>PATTERN</strong> is specified, only roles whose names match <strong id="b140499755016547"><a name="b140499755016547"></a><a name="b140499755016547"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p13578123512103"><a name="p13578123512103"></a><a name="p13578123512103"></a>Lists all database roles.</p>
<a name="screen5126254102311"></a><a name="screen5126254102311"></a><pre class="screen" codetype="Sql" id="screen5126254102311">openGauss=# \du</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row2209018"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44712736"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44712736"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44712736"></a>\dE[S+]   [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p15625431"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15625431"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15625431"></a>\di[S+]    [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p44539665"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44539665"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44539665"></a>\ds[S+]   [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p41206969"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p41206969"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p41206969"></a>\dt[S+]    [PATTERN]</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p3741605"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3741605"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3741605"></a>\dv[S+]   [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p52895139"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52895139"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52895139"></a>In this group of commands, the letters E, i, s, t, and v stand for foreign table, index, sequence, table, and view, respectively. You can specify any or a combination of these letters sequenced in any order to obtain an object list. For example, <strong id="b842352706204223"><a name="b842352706204223"></a><a name="b842352706204223"></a>\dit</strong> lists all indexes and tables. If + is added to the end of a command name, the physical size and related description of each object are also listed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"><a name="en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a><a name="en-us_topic_0059778645_acd8b42e04867433eab54a00aa5b15adc"></a>If <strong id="b1139525748"><a name="b1139525748"></a><a name="b1139525748"></a>PATTERN</strong> is specified, only objects whose names match <strong id="b1951416384"><a name="b1951416384"></a><a name="b1951416384"></a>PATTERN</strong> are displayed. By default, only objects you created are displayed. You can specify <strong id="b84235270617187"><a name="b84235270617187"></a><a name="b84235270617187"></a>PATTERN</strong> or <strong id="b842352706171810"><a name="b842352706171810"></a><a name="b842352706171810"></a>S</strong> to view other system objects.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p145781358102"><a name="p145781358102"></a><a name="p145781358102"></a>Lists all indexes and views.</p>
<a name="screen1078582519238"></a><a name="screen1078582519238"></a><pre class="screen" codetype="Sql" id="screen1078582519238">openGauss=# \div</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5873694"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6007243"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007243"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6007243"></a>\dx[+]      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16824664"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16824664"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16824664"></a>Lists installed extensions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p504320559452"></a>If <strong id="b842352706204235"><a name="b842352706204235"></a><a name="b842352706204235"></a>PATTERN</strong> is specified, only extensions whose names match <strong id="b212803897717202"><a name="b212803897717202"></a><a name="b212803897717202"></a>PATTERN</strong> are displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1557883591019"><a name="p1557883591019"></a><a name="p1557883591019"></a>Lists installed extensions.</p>
<a name="screen1453833842112"></a><a name="screen1453833842112"></a><pre class="screen" codetype="Sql" id="screen1453833842112">openGauss=# \dx</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row61949334"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51840186"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51840186"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51840186"></a>\l[+]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p42178773"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p42178773"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p42178773"></a>Lists the names, owners, character set encodings, and permissions of all the databases in the server.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"><a name="en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a><a name="en-us_topic_0059778645_aa651436fa26b43599a40f35a69cd0198"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p155789357107"><a name="p155789357107"></a><a name="p155789357107"></a>List the names, owners, character set encodings, and permissions of all the databases in the server.</p>
<a name="screen1802747162019"></a><a name="screen1802747162019"></a><pre class="screen" codetype="Sql" id="screen1802747162019">openGauss=# \l</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row12504781"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p6254336"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6254336"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p6254336"></a>\sf[+]   FUNCNAME</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36839216"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36839216"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36839216"></a>Displays the definition of a function.</p>
<div class="note" id="note122310174019"><a name="note122310174019"></a><a name="note122310174019"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p162891010406"><a name="p162891010406"></a><a name="p162891010406"></a>If the function name contains parentheses, enclose the function name with double quotation marks and add the parameter type list following the double quotation marks. Also enclose the list with parentheses.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"><a name="en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a><a name="en-us_topic_0059778645_aa0106cc978ad4871a187e506e9e5e848"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p0578183514109"><a name="p0578183514109"></a><a name="p0578183514109"></a>Assume a function <strong id="b17661152162418"><a name="b17661152162418"></a><a name="b17661152162418"></a>function_a</strong> and a function <strong id="b1890320742417"><a name="b1890320742417"></a><a name="b1890320742417"></a>func()name</strong>. This parameter will be as follows:</p>
<a name="screen1786051111619"></a><a name="screen1786051111619"></a><pre class="screen" codetype="Sql" id="screen1786051111619">openGauss=# \sf function_a
openGauss=# \sf 
"func()name"(argtype1, argtype2)</pre>
</td>
</tr>
<tr id="en-us_topic_0059778645_r04c5af41c3d846de94e2fb3e143e7c34"><td class="cellrowborder" valign="top" width="13%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"><a name="en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a><a name="en-us_topic_0059778645_ad32e6876688d404b8dd15fa7f5845301"></a>\z      [PATTERN]</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.2 "><p id="p1183133819816"><a name="p1183133819816"></a><a name="p1183133819816"></a>Lists all tables, views, and sequences in the database and their access permissions.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"><a name="en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a><a name="en-us_topic_0059778645_a45c4b9b9fedf4993adf1d58915e7372b"></a>If a pattern is given, it is a regular expression, and only matched tables, views, and sequences are shown.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1357863513102"><a name="p1357863513102"></a><a name="p1357863513102"></a>Lists all tables, views, and sequences in the database and their access permissions.</p>
<a name="screen566811281995"></a><a name="screen566811281995"></a><pre class="screen" codetype="Sql" id="screen566811281995">openGauss=# \z</pre>
</td>
</tr>
</tbody>
</table>

**Table  5**  Description of permissions

<a name="en-us_topic_0059778645_t9b9f37d7c1c54a7893307344083e644e"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_r6362dc74b9f541a69e0d66b9cf284ed9"><th class="cellrowborder" valign="top" width="23.78%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"><a name="en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a><a name="en-us_topic_0059778645_a79aa272feab24abf8c5f27a25dfd7de7"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="76.22%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"><a name="en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a><a name="en-us_topic_0059778645_ae7e92c0355f448ea8ca7c9140ada9108"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_r388d73fb38384cdfb32ae9d850dd3401"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"><a name="en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a><a name="en-us_topic_0059778645_a20d90fda867a48a1873c7a8e7950474a"></a>r</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"><a name="en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a><a name="en-us_topic_0059778645_a1266b189f1aa44e2905ecf63c6f3ce66"></a><strong id="b1372519454247"><a name="b1372519454247"></a><a name="b1372519454247"></a>SELECT</strong>: allows users to read data from specified tables and views.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r33152e6936d14a5fb3737d02dde40f04"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"><a name="en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a><a name="en-us_topic_0059778645_a2bb8790c4ae6454e876d2d810931de0d"></a>w</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"><a name="en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a><a name="en-us_topic_0059778645_a598cdffc12df48b79d05798dc2d07695"></a><strong id="b4639154742419"><a name="b4639154742419"></a><a name="b4639154742419"></a>UPDATE</strong>: allows users to update columns for specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r54e23ae96ce24fa3aede38cbe8eb043d"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"><a name="en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a><a name="en-us_topic_0059778645_a2133cf60b8d34773b58ba53009dba09e"></a>a</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"><a name="en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a><a name="en-us_topic_0059778645_a55adc911904e4f9b8e8d3c8de14babc7"></a><strong id="b26299495245"><a name="b26299495245"></a><a name="b26299495245"></a>INSERT</strong>: allows users to insert data to specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r8de13ba27c7e462d9c629e5cb99a8b2a"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"><a name="en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a><a name="en-us_topic_0059778645_a60559c3b02a74a3c91780953b2e22388"></a>d</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"><a name="en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a><a name="en-us_topic_0059778645_a870f400eb392433cb027ebffedd36ea8"></a><strong id="b7741135252419"><a name="b7741135252419"></a><a name="b7741135252419"></a>DELETE</strong>: allows users to delete data from specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_rcbf3413a0b3c474083d3476a68ee82d5"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"><a name="en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a><a name="en-us_topic_0059778645_ad91c47ec90844b5197db4afbb0b8106e"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"><a name="en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a><a name="en-us_topic_0059778645_ac6a5b488e9d942128b272a2c42ec156f"></a><strong id="b6165614254"><a name="b6165614254"></a><a name="b6165614254"></a>TRUNCATE</strong>: allows users to delete all data from specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r6a6605f29d5d430bbd35b6de4aabb4a8"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"><a name="en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a><a name="en-us_topic_0059778645_a5ee40940bee042b499a2e70404371fef"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"><a name="en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a><a name="en-us_topic_0059778645_aec64f9601e594f128b3817b192621bcd"></a><strong id="b102651712122514"><a name="b102651712122514"></a><a name="b102651712122514"></a>REFERENCES</strong>: allows users to create foreign key constraints.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r64aba48201764746bc641840af6cf98f"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"><a name="en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a><a name="en-us_topic_0059778645_a36bc206cba4441f3a9376e9cfb0e24b8"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"><a name="en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a><a name="en-us_topic_0059778645_afb6fb371815549cea04ba6db8fe67d2b"></a><strong id="b665692013250"><a name="b665692013250"></a><a name="b665692013250"></a>TRIGGER</strong>: allows users to create a trigger on specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r72c53b1c15e6415382fbcadb80b0a2ab"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"><a name="en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a><a name="en-us_topic_0059778645_a30b0d9d8090b489a8156abb39e264901"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"><a name="en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a><a name="en-us_topic_0059778645_a6418c93551004ec98510eaaee6daaae6"></a><strong id="b26461426152511"><a name="b26461426152511"></a><a name="b26461426152511"></a>EXECUTE</strong>: allows users to use specified functions and the operators that are realized by the functions.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_ra57588e97fc8463a9da73c485f9ba3e9"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"><a name="en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a><a name="en-us_topic_0059778645_a504572d638854d92831fe94aaf5487f2"></a>U</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"><a name="en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a><a name="en-us_topic_0059778645_a758e53777d564c9f8f2dda80efa0880c"></a><strong id="b10794194372512"><a name="b10794194372512"></a><a name="b10794194372512"></a>USAGE</strong>:</p>
<a name="en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><a name="en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"></a><ul id="en-us_topic_0059778645_u65a0a2386cc7482fb2408853c42fd318"><li>For procedural languages, allows users to specify a procedural language when creating a function.</li><li>For schemas, allows users to access objects included in specified schemas.</li><li>For sequences, allows users to use the nextval function.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_r277c4595c8bb4eeeafdb11a78d0faeb7"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p338039211735"></a>C</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p474496711735"></a><strong id="b149689515268"><a name="b149689515268"></a><a name="b149689515268"></a>CREATE</strong>:</p>
<a name="en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><a name="en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"></a><ul id="en-us_topic_0059778645_u337820fef33842c0b9199979155abf15"><li>For databases, allows new schemas to be created within the database.</li><li>For schemas, allows users to create objects in a schema.</li><li>For tablespaces, allows users to create tables in a tablespace and set the tablespace to default one when creating databases and schemas.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_recdf18f778b44aefb363a58d7d9078a5"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p961003311735"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"><a name="en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a><a name="en-us_topic_0059778645_a60b76dce2cbf4ee0b2bc7fb00c4bac6c"></a><strong id="b1734316209269"><a name="b1734316209269"></a><a name="b1734316209269"></a>CONNECT</strong>: allows users to connect to specified databases.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r4b9cfb178de547a3aab1ef5c119895dd"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"><a name="en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a><a name="en-us_topic_0059778645_af82c903d030f44f9bd0d33c7d4b53f98"></a>T</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p872203911735"></a><strong id="b1493425172612"><a name="b1493425172612"></a><a name="b1493425172612"></a>TEMPORARY</strong>: allows users to create temporary tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r78da08440dc840aabf1141a2d6df9bb8"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p11378951172714"><a name="p11378951172714"></a><a name="p11378951172714"></a>A</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p837810514276"><a name="p837810514276"></a><a name="p837810514276"></a><strong id="b17949487332"><a name="b17949487332"></a><a name="b17949487332"></a>ALTER</strong>: allows users to modify the attributes of a specified object.</p>
</td>
</tr>
<tr id="row41567303320"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p9378175112713"><a name="p9378175112713"></a><a name="p9378175112713"></a>P</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p0379851182714"><a name="p0379851182714"></a><a name="p0379851182714"></a><strong id="b9127105213310"><a name="b9127105213310"></a><a name="b9127105213310"></a>DROP</strong>: allows users to delete specified objects.</p>
</td>
</tr>
<tr id="row28091013143315"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p337912511273"><a name="p337912511273"></a><a name="p337912511273"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p10380195112278"><a name="p10380195112278"></a><a name="p10380195112278"></a><strong id="b83641254133314"><a name="b83641254133314"></a><a name="b83641254133314"></a>COMMENT</strong>: allows users to define or modify comments of a specified object.</p>
</td>
</tr>
<tr id="row1346512197333"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p11380125113276"><a name="p11380125113276"></a><a name="p11380125113276"></a>i</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p19381185142715"><a name="p19381185142715"></a><a name="p19381185142715"></a><strong id="b1881348163412"><a name="b1881348163412"></a><a name="b1881348163412"></a>INDEX</strong>: allows users to create indexes on specified tables.</p>
</td>
</tr>
<tr id="row14157257332"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="p1338145112271"><a name="p1338145112271"></a><a name="p1338145112271"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="p15381451142714"><a name="p15381451142714"></a><a name="p15381451142714"></a><strong id="b131671214113516"><a name="b131671214113516"></a><a name="b131671214113516"></a>VACUUM</strong>: allows users to perform ANALYZE and VACUUM operations on specified tables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r2005c4e9bd924590a921dc3e81672ac1"><td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p616168911735"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="76.22%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"><a name="en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a><a name="en-us_topic_0059778645_aa0e0e01d93804c4da37097ead6090ecf"></a>Authorization options for preceding permissions.</p>
</td>
</tr>
</tbody>
</table>

**Table  6**  Formatting meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table53911699"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row23785826"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p19011743"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19011743"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p19011743"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18693083"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18693083"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18693083"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row6577016"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p11347706"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11347706"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11347706"></a>\a</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p60515607"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60515607"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60515607"></a>Switches between aligned and unaligned table output formats.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_redf0249c3f5d46fa9e110c5096e8c514"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"><a name="en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a><a name="en-us_topic_0059778645_a6e20e98ac45741e4b2dc3f4b406b4dd1"></a>\C   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"><a name="en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a><a name="en-us_topic_0059778645_ad394a6b2d3be4f3db36744142393d2b3"></a>Sets the title of any table being printed as the result of a query or unsets any such title.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row27385651"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p3645265"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3645265"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3645265"></a>\f     [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26831088"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26831088"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26831088"></a>Sets the field separator for unaligned query outputs.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row48520085"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p37812775"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37812775"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p37812775"></a>\H</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><a name="en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"></a><ul id="en-us_topic_0059778645_udb38b29fb82e49de919ed52be3f99e3d"><li>If the text format schema is used, switches to the HTML format.</li><li>If the HTML format schema is used, switches to the text format.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row8534616"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20215335"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20215335"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20215335"></a>\pset NAME  [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p26829471"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26829471"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p26829471"></a>Sets options affecting the output of query result tables. For details about the value of <strong id="b842352706173118"><a name="b842352706173118"></a><a name="b842352706173118"></a>NAME</strong>, see <a href="#en-us_topic_0059778645_en-us_topic_0058968158_table22053343">Table 7</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row55470150"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p54115012"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54115012"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54115012"></a>\t    [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p10649401"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10649401"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p10649401"></a>Switches the display of output name information and row count footer.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row44427513"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44110692"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44110692"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44110692"></a>\T   [STRING]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p36044674"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36044674"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p36044674"></a>Specifies attributes to be placed within the table tag in HTML output format. If this parameter is empty, no attribute is specified.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row14964377"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4155021"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4155021"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4155021"></a>\x   [on|off|auto]</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p1012450"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1012450"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p1012450"></a>Switches expanded table formatting mode.</p>
</td>
</tr>
</tbody>
</table>

**Table  7**  Adjustable printing options

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table22053343"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row34213901"><th class="cellrowborder" valign="top" width="15.409999999999998%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25176457"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25176457"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25176457"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="44.55%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p46637289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46637289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46637289"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="40.04%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p250729112140"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50968660"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48693618"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48693618"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48693618"></a>border</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25806188"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25806188"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25806188"></a>The value must be a number. In general, the larger the number, the more borders and lines the tables will have, but this depends on the particular format.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><a name="en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"></a><ul id="en-us_topic_0059778645_u9e306a34717c43a59f58c07052b41040"><li>The value is an integer greater than 0 in HTML format.</li><li>The value range in other formats is as follows:<a name="en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><a name="en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"></a><ul id="en-us_topic_0059778645_ub622df75c508441da63e8e13ddf63633"><li>0: no border</li><li>1: internal dividing line</li><li>2: table frame</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row34608783"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p35270535"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35270535"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p35270535"></a>expanded (or x)</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p32046081"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32046081"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p32046081"></a>Switches between regular and expanded formats.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><a name="en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"></a><ul id="en-us_topic_0059778645_u7a9e4e117d6240a7ad3ac96b3257e76e"><li>When the expanded format is enabled, query results are displayed in two columns, with the column name on the left and the data on the right. This mode is useful if the data does not fit on the screen in the normal "horizontal" mode.</li><li>Use the expanded format when the query output format is wider than the screen in regular format. The regular format is effective only in the aligned and wrapped formats.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row48999878"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p13471594"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13471594"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13471594"></a>fieldsep</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4665381"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4665381"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4665381"></a>Specifies the field separator to be used in unaligned output mode. In this way, you can create tab- or comma-separated output required by other programs. To set a tab as field separator, type <strong id="b842352706183046"><a name="b842352706183046"></a><a name="b842352706183046"></a>\pset fieldsep '\t'</strong>. The default field separator is a vertical bar (|).</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"><a name="en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a><a name="en-us_topic_0059778645_a9775b7abc07c4fdb9ee59723b94e61ab"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row27640281"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p14913811"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14913811"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14913811"></a>fieldsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47973175"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47973175"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47973175"></a>Sets the field separator to use in unaligned output format to a zero bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"><a name="en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a><a name="en-us_topic_0059778645_abbf6325959484828ac0c9c91ef374f66"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row33391988"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p4025501"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4025501"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p4025501"></a>footer</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15783270"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15783270"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15783270"></a>Switches the display of the default footer.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"><a name="en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a><a name="en-us_topic_0059778645_a49b8ea408ee94f8f97f5fb69e7a20a21"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row45950588"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p63319442"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63319442"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p63319442"></a>format</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18107603"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18107603"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18107603"></a>Selects the output format. Unique abbreviations are allowed (this indicates that one letter is enough).</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"><a name="en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a><a name="en-us_topic_0059778645_a10c1f373dd634fb09c7c971b3d7d7350"></a>Value range:</p>
<a name="en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><a name="en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"></a><ul id="en-us_topic_0059778645_uc621252bb05745358e730db68ee4d5cd"><li><strong id="en-us_topic_0058968158_b842352706192117"><a name="en-us_topic_0058968158_b842352706192117"></a><a name="en-us_topic_0058968158_b842352706192117"></a>unaligned</strong>: Write all columns of a row on one line, separated by the currently active column separator.</li><li><strong id="en-us_topic_0058968158_b842352706192121"><a name="en-us_topic_0058968158_b842352706192121"></a><a name="en-us_topic_0058968158_b842352706192121"></a>aligned</strong>: This format is standard and human-readable.</li><li><strong id="b842352706105758"><a name="b842352706105758"></a><a name="b842352706105758"></a>wrapped</strong>: This format is similar to <strong id="b1968396737105826"><a name="b1968396737105826"></a><a name="b1968396737105826"></a>aligned</strong>, but includes the packaging cross-line width data value to suit the width of the target field output.</li><li><strong id="b842352706105929"><a name="b842352706105929"></a><a name="b842352706105929"></a>html</strong>: This format outputs tables to the markup language for a document. The output is not a complete document.</li><li><strong id="b969723860"><a name="b969723860"></a><a name="b969723860"></a>latex</strong>: This format outputs tables to the markup language for a document. The output is not a complete document.</li><li><strong id="b1977554961"><a name="b1977554961"></a><a name="b1977554961"></a>troff-ms:</strong> This format outputs tables to the markup language for a document. The output is not a complete document.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row2985006"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15611992"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15611992"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15611992"></a>null</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p2385004"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2385004"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2385004"></a>Sets a character string to be printed in place of a null value.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"><a name="en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a><a name="en-us_topic_0059778645_ade941eac80e642e6910f938c77f7831d"></a>The default is to print nothing, which can be easily mistaken for an empty string.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50084564"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p56659409"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56659409"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p56659409"></a>numericlocale</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17751162"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17751162"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17751162"></a>Switches the display of a locale-aware character to separate groups of digits to the left of the decimal marker.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><a name="en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"></a><ul id="en-us_topic_0059778645_u469ad7675d7d42f1aa5a404192187c6f"><li><strong id="b84235270618149"><a name="b84235270618149"></a><a name="b84235270618149"></a>on</strong>: The specified separator is displayed.</li><li><strong id="b84235270618154"><a name="b84235270618154"></a><a name="b84235270618154"></a>off</strong>: The specified separator is not displayed</li></ul>
<p id="en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"><a name="en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a><a name="en-us_topic_0059778645_a086c95f807aa4ad5b1f9eb8ad2863561"></a>If this parameter is ignored, the default separator is displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row42028421"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p16938075"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16938075"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p16938075"></a>pager</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p23113433"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23113433"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p23113433"></a>Controls the use of a pager for query and <strong id="b13671165663314"><a name="b13671165663314"></a><a name="b13671165663314"></a>gsql</strong> help outputs. If the <strong id="b12732193412"><a name="b12732193412"></a><a name="b12732193412"></a>PAGER</strong> environment variable is set, the output is redirected to the specified program. Otherwise, the platform-dependent default value is used.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><a name="en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"></a><ul id="en-us_topic_0059778645_u6631dea3c9e44fa1b8bda2ba1ddba4f6"><li><strong id="b8423527061823"><a name="b8423527061823"></a><a name="b8423527061823"></a>on</strong>: The pager is used for terminal output that does not fit the screen.</li><li><strong id="b8423527061884"><a name="b8423527061884"></a><a name="b8423527061884"></a>off</strong>: The pager is not used.</li><li><strong id="b84235270618838"><a name="b84235270618838"></a><a name="b84235270618838"></a>always</strong>: The pager is used for all terminal output regardless of whether it fits the screen.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row31782278"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58586323"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58586323"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58586323"></a>recordsep</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p43971123"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43971123"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p43971123"></a>Specifies the record separator to use in unaligned output mode.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"><a name="en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a><a name="en-us_topic_0059778645_ad59b22af1b5742b2b336903c65197255"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row43935922"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27386289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27386289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27386289"></a>recordsep_zero</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p54316068"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54316068"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p54316068"></a>Sets the record separator to use in unaligned output format to a zero bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"><a name="en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a><a name="en-us_topic_0059778645_a8acfd9d5fb1742c0bda29023f4625961"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row50890575"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p46302507"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46302507"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p46302507"></a>tableattr (or T)</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p48381391"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48381391"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p48381391"></a>Specifies attributes to be placed inside the HTML table tag in HTML output format (such as cellpadding or bgcolor). Note that you do not need to specify <strong id="b14456132824313"><a name="b14456132824313"></a><a name="b14456132824313"></a>border</strong> here because it has been used by <strong id="b842352706162328"><a name="b842352706162328"></a><a name="b842352706162328"></a>\pset border</strong>. If no value is given, the table attributes do not need to be set.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"><a name="en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a><a name="en-us_topic_0059778645_a8f3cce758d3d4725b3b6c1cc3f9e8d27"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54256626"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p3641760"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3641760"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p3641760"></a>title</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p34572433"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34572433"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p34572433"></a>Sets the table title for any subsequently printed tables. This can be used to give your output descriptive tags. If no value is given, the title does not need to be set.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"><a name="en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a><a name="en-us_topic_0059778645_ada273bd899ee41648e96b3777a6efb52"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row54507565"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53767637"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53767637"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53767637"></a>tuples_only (or t)</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p25003860"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25003860"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p25003860"></a>Enables or disables the tuples-only mode. Full display may show extra information, such as column headers, titles, and various footers. In tuples-only mode, only the table data is shown.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"><a name="en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a><a name="en-us_topic_0059778645_a8fadf9e3783548d9a358ea207159ed1c"></a>-</p>
</td>
</tr>
<tr id="row202921911099"><td class="cellrowborder" valign="top" width="15.409999999999998%" headers="mcps1.2.4.1.1 "><p id="p12925114915"><a name="p12925114915"></a><a name="p12925114915"></a>feedback</p>
</td>
<td class="cellrowborder" valign="top" width="44.55%" headers="mcps1.2.4.1.2 "><p id="p172927113915"><a name="p172927113915"></a><a name="p172927113915"></a>Specifies whether to output the number of result lines.</p>
</td>
<td class="cellrowborder" valign="top" width="40.04%" headers="mcps1.2.4.1.3 "><p id="p729219117918"><a name="p729219117918"></a><a name="p729219117918"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  8**  Connection meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table37189353"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row51130770"><th class="cellrowborder" valign="top" width="21.490000000000002%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47951669"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47951669"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47951669"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.56999999999999%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58880018"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58880018"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58880018"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25.94%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p665642669562"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row4552143"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p30341711"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30341711"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30341711"></a>\c[onnect]    [DBNAME|- USER|- HOST|- PORT|-]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22048137"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22048137"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22048137"></a>Connects to a new database. (The current database is postgres.) If a database name contains more than 63 bytes, only the first 63 bytes are valid and are used for connection. However, the database name displayed in the command line of <strong id="b1229082046169"><a name="b1229082046169"></a><a name="b1229082046169"></a>gsql</strong> is still the name before the truncation.</p>
<div class="note" id="note131214284146"><a name="note131214284146"></a><a name="note131214284146"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p91237286143"><a name="p91237286143"></a><a name="p91237286143"></a>If the database login user is changed during reconnection, you need to enter the password of the new user. The maximum length of the password is 999 bytes, which is restricted by the maximum value of the GUC parameter <strong id="b1885279204917"><a name="b1885279204917"></a><a name="b1885279204917"></a>password_max_length</strong>.</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p229965059562"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row28507487"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p13150509"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13150509"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p13150509"></a>\encoding [ENCODING]</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p51975191"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51975191"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p51975191"></a>Sets the client character set encoding.</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p507776499562"></a>Without an argument, this command shows the current encoding.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row10803172"><td class="cellrowborder" valign="top" width="21.490000000000002%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p65742650"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65742650"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65742650"></a>\conninfo</p>
</td>
<td class="cellrowborder" valign="top" width="52.56999999999999%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20139181"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20139181"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20139181"></a>Prints information about the current connected database.</p>
</td>
<td class="cellrowborder" valign="top" width="25.94%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p237561539562"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  9**  OS meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table32146234"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row57810541"><th class="cellrowborder" valign="top" width="21.87%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p52142277"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52142277"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p52142277"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="47.11%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p62774893"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p62774893"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p62774893"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="31.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"><a name="en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a><a name="en-us_topic_0059778645_a197968a4cc80417d895710ba55ccfd8d"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row51601549"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p18975950"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18975950"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p18975950"></a>\cd       [DIR]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p60656983"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60656983"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p60656983"></a>Changes the current working directory.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"><a name="en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a><a name="en-us_topic_0059778645_a7ff2408f2fc844e29f1d44585607bdcb"></a>An absolute path or relative path that meets the OS path naming convention</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row9041943"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p61308768"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p61308768"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p61308768"></a>\setenv NAME    [VALUE]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p30861763"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30861763"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p30861763"></a>Sets the <strong id="b842352706182257"><a name="b842352706182257"></a><a name="b842352706182257"></a>NAME</strong> environment variable to <strong id="b842352706201833"><a name="b842352706201833"></a><a name="b842352706201833"></a>VALUE</strong>. If <strong id="b84235270618238"><a name="b84235270618238"></a><a name="b84235270618238"></a>VALUE</strong> is not provided, do not set the environment variable.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"><a name="en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a><a name="en-us_topic_0059778645_af473f4d0ba044888806b797fad8e7d09"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row66697655"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p33800946"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33800946"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p33800946"></a>\timing   [on|off]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20643789"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20643789"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20643789"></a>Displays how long each SQL statement takes, in milliseconds(excluding the time to print to the screen).</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><a name="en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"></a><ul id="en-us_topic_0059778645_u00148d00b1b34193bfcd39434d92f3bd"><li><strong id="b20201014175013"><a name="b20201014175013"></a><a name="b20201014175013"></a>on</strong>: specifies that the display is enabled.</li><li><strong id="b842352706182346"><a name="b842352706182346"></a><a name="b842352706182346"></a>off</strong>: indicates that the display is disabled.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row11936946"><td class="cellrowborder" valign="top" width="21.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p27368537"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27368537"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p27368537"></a>\!      [COMMAND]</p>
</td>
<td class="cellrowborder" valign="top" width="47.11%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p49855699"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p49855699"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p49855699"></a>Escapes to a separate Unix shell or runs a Unix command.</p>
</td>
<td class="cellrowborder" valign="top" width="31.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"><a name="en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a><a name="en-us_topic_0059778645_ae9a57afe98694bc9a6746908b04a88eb"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  10**  Variable meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table50076468"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row64340398"><th class="cellrowborder" valign="top" width="32.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p44189784"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44189784"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p44189784"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="67.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p22602779"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22602779"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p22602779"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row18885790"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p53353993"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53353993"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p53353993"></a>\prompt     [TEXT] NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p20243739"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20243739"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p20243739"></a>Prompts the user to use texts to specify a variable name.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row39029041"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p7235720"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7235720"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p7235720"></a>\set     [NAME [VALUE]]</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p17332671"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17332671"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p17332671"></a>Sets the <em id="i842352697192517"><a name="i842352697192517"></a><a name="i842352697192517"></a>NAME</em> internal variable to <strong id="b842352706192521"><a name="b842352706192521"></a><a name="b842352706192521"></a>VALUE</strong>. If more than one value is provided, <em id="i202823273019275"><a name="i202823273019275"></a><a name="i202823273019275"></a>NAME</em> is set to the concatenation of all of them. If no second argument is given, the variable is just set with no value.</p>
<p id="en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"><a name="en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a><a name="en-us_topic_0059778645_a53a7d3dd57c44fd48d1fc315a89e73c8"></a>Some common variables are processed differently in <strong id="b842352706193434"><a name="b842352706193434"></a><a name="b842352706193434"></a>gsql</strong> and they are combinations of uppercase letters, numbers and underscores. <a href="#en-us_topic_0059778645_t03d91a7973ee453b918f0b755284f04d">Table 11</a> describes a list of variables that are processed in a way different from other variables.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row40349036"><td class="cellrowborder" valign="top" width="32.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p47046458"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47046458"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p47046458"></a>\unset NAME</p>
</td>
<td class="cellrowborder" valign="top" width="67.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p11128665"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11128665"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p11128665"></a>Deletes the variable name of <strong id="b1185745691183446"><a name="b1185745691183446"></a><a name="b1185745691183446"></a>gsql</strong>.</p>
</td>
</tr>
</tbody>
</table>

**Table  11**  Common  **\\set**  commands

<a name="en-us_topic_0059778645_t03d91a7973ee453b918f0b755284f04d"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_r19e99ba6f3f04b6f97fd0ad130d78d0f"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"><a name="en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a><a name="en-us_topic_0059778645_a99f521f800fc4039a69aa49124a11b2d"></a>Command</p>
</th>
<th class="cellrowborder" valign="top" width="56.769999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"><a name="en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a><a name="en-us_topic_0059778645_abdbf8729ec724fc0ad2df55fcf7fdda0"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="19.919999999999998%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p471742039289"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_r0208fc73fe24438cb17ad61db02a099d"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p203874091536"></a>\set VERBOSITY value</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"><a name="en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a><a name="en-us_topic_0059778645_aa30911dba01c4a479fd43a853d448966"></a>This variable can be set to <strong id="b971622125018"><a name="b971622125018"></a><a name="b971622125018"></a>default</strong>, <strong id="b17214285014"><a name="b17214285014"></a><a name="b17214285014"></a>verbose</strong>, or <strong id="b20721529502"><a name="b20721529502"></a><a name="b20721529502"></a>terse</strong> to control redundant lines of error reports.</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p630141149289"></a>Value range: <strong id="b1883964265210"><a name="b1883964265210"></a><a name="b1883964265210"></a>default</strong>, <strong id="b4661204525219"><a name="b4661204525219"></a><a name="b4661204525219"></a>verbose</strong>, and <strong id="b15427151125214"><a name="b15427151125214"></a><a name="b15427151125214"></a>terse</strong></p>
</td>
</tr>
<tr id="en-us_topic_0059778645_ra1695111fa224cd0bb92c833a2fecada"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"><a name="en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a><a name="en-us_topic_0059778645_a1e7758a45b574927adf70faba360ca76"></a>\set ON_ERROR_STOP value</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p65312149222"></a></p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p810542092426"></a>If this variable is set, the script execution stops immediately. If this script is invoked from another script, that script will be stopped immediately as well. If the primary script is invoked using the <strong id="b842352706195039"><a name="b842352706195039"></a><a name="b842352706195039"></a>-f</strong> option rather than from one <strong id="b842352706104518"><a name="b842352706104518"></a><a name="b842352706104518"></a>gsql</strong> session, <strong id="b842352706104531"><a name="b842352706104531"></a><a name="b842352706104531"></a>gsql</strong> will return error code <strong id="b1582491711530"><a name="b1582491711530"></a><a name="b1582491711530"></a>3</strong>, indicating the difference between the current error and critical errors. (The error code for critical errors is <strong id="b9872112416530"><a name="b9872112416530"></a><a name="b9872112416530"></a>1</strong>.)</p>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p38696389289"></a>Value range: <strong id="b842352706183844"><a name="b842352706183844"></a><a name="b842352706183844"></a>on/off</strong>, <strong id="b842352706183848"><a name="b842352706183848"></a><a name="b842352706183848"></a>true/false</strong>, <strong id="b842352706183855"><a name="b842352706183855"></a><a name="b842352706183855"></a>yes/no</strong>, and <strong id="b842352706183858"><a name="b842352706183858"></a><a name="b842352706183858"></a>1/0</strong></p>
</td>
</tr>
<tr id="en-us_topic_0059778645_r6f491220dd854416aa6e9743fdba68ab"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"><a name="en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a><a name="en-us_topic_0059778645_afcc5c01677f54706a0814bcc0fc5a821"></a>\set RETRY [retry_times]</p>
</td>
<td class="cellrowborder" valign="top" width="56.769999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"><a name="en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a><a name="en-us_topic_0059778645_a09142f45f64943c3b5644bb120f1d989"></a>Determines whether to enable the retry function if statement execution encounters errors. The parameter <strong id="b84235270620359"><a name="b84235270620359"></a><a name="b84235270620359"></a>retry_times</strong> specifies the maximum number of retry times and the default value is <strong id="b84235270620456"><a name="b84235270620456"></a><a name="b84235270620456"></a>5</strong>. Its value ranges from <strong id="b842352706201318"><a name="b842352706201318"></a><a name="b842352706201318"></a>5</strong> to <strong id="b842352706201322"><a name="b842352706201322"></a><a name="b842352706201322"></a>10</strong>. If the retry function has been enabled, when you run the <strong id="b69863613135824"><a name="b69863613135824"></a><a name="b69863613135824"></a>\set RETRY</strong> command again, the retry function will be disabled.</p>
<p id="en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"><a name="en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a><a name="en-us_topic_0059778645_aa69a75b0d4e34bba9be379d65677e2f1"></a>The configuration file <strong id="b84235270620738"><a name="b84235270620738"></a><a name="b84235270620738"></a>retry_errcodes.conf</strong> shows a list of errors. If these errors occur, retry is required. This configuration file is placed in the same directory as that for executable programs. This configuration file is configured by the system rather than by users and cannot be modified by the users.</p>
<p id="en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p503225102104"></a>The retry function can be used in the following error scenarios:</p>
<a name="en-us_topic_0059778645_udf951c403c774faa9781472afc924066"></a><a name="en-us_topic_0059778645_udf951c403c774faa9781472afc924066"></a><ul id="en-us_topic_0059778645_udf951c403c774faa9781472afc924066"><li><strong id="b163654433541"><a name="b163654433541"></a><a name="b163654433541"></a>YY002</strong>: TCP communication errors. Print information: <strong id="b842352706141446"><a name="b842352706141446"></a><a name="b842352706141446"></a>Connection reset by peer</strong>. (reset between <span id="text517248161719"><a name="text517248161719"></a><a name="text517248161719"></a>DN</span>s)</li><li><strong id="b310114615542"><a name="b310114615542"></a><a name="b310114615542"></a>YY003</strong>: Lock timeout. Print information: <strong id="b128759450547"><a name="b128759450547"></a><a name="b128759450547"></a>Lock wait timeout.../wait transaction </strong><em id="i7880144595419"><a name="i7880144595419"></a><a name="i7880144595419"></a>xxx</em><strong id="b3881114555418"><a name="b3881114555418"></a><a name="b3881114555418"></a> sync time exceed </strong><em id="i1888234516546"><a name="i1888234516546"></a><a name="i1888234516546"></a>xxx</em>.</li><li><strong id="b15723185811549"><a name="b15723185811549"></a><a name="b15723185811549"></a>YY004</strong>: TCP communication errors. Print information: <strong id="b84235270614151"><a name="b84235270614151"></a><a name="b84235270614151"></a>Connection timed out</strong>.</li><li><strong id="b1919914317558"><a name="b1919914317558"></a><a name="b1919914317558"></a>YY005</strong>: Failed to issue SET commands. Print information: <strong id="b108742285515"><a name="b108742285515"></a><a name="b108742285515"></a>ERROR SET query</strong>.</li><li><strong id="b262119905510"><a name="b262119905510"></a><a name="b262119905510"></a>YY006</strong>: Failed to apply for memory. Print information: <strong id="b842352706141534"><a name="b842352706141534"></a><a name="b842352706141534"></a>memory is temporarily unavailable</strong>.</li><li><strong id="b1775141325515"><a name="b1775141325515"></a><a name="b1775141325515"></a>YY007</strong>: Communication library error. Print information: <strong id="b195561213155513"><a name="b195561213155513"></a><a name="b195561213155513"></a>Memory allocate error</strong>.</li><li><strong id="b10279818145511"><a name="b10279818145511"></a><a name="b10279818145511"></a>YY008</strong>: Communication library error. Print information: <strong id="b145418189552"><a name="b145418189552"></a><a name="b145418189552"></a>No data in buffer</strong>.</li><li><strong id="b7359112225517"><a name="b7359112225517"></a><a name="b7359112225517"></a>YY009</strong>: Communication library error. Print information: <strong id="b8104182215556"><a name="b8104182215556"></a><a name="b8104182215556"></a>Close because release memory</strong>.</li><li><strong id="b153941226175518"><a name="b153941226175518"></a><a name="b153941226175518"></a>YY010</strong>: Communication library error. Print information: <strong id="b8197122675519"><a name="b8197122675519"></a><a name="b8197122675519"></a>TCP disconnect</strong>.</li><li><strong id="b19942142915559"><a name="b19942142915559"></a><a name="b19942142915559"></a>YY011</strong>: Communication library error. Print information: <strong id="b4764182915516"><a name="b4764182915516"></a><a name="b4764182915516"></a>SCTP disconnect</strong>.</li><li><strong id="b17169113216557"><a name="b17169113216557"></a><a name="b17169113216557"></a>YY012</strong>: Communication library error. Print information: <strong id="b19972173112555"><a name="b19972173112555"></a><a name="b19972173112555"></a>Stream closed by remote</strong>.</li><li><strong id="b15101133845517"><a name="b15101133845517"></a><a name="b15101133845517"></a>YY013</strong>: Communication library error. Print information: <strong id="b1785313725515"><a name="b1785313725515"></a><a name="b1785313725515"></a>Wait poll unknown error</strong>.</li></ul>
<p id="en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"><a name="en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a><a name="en-us_topic_0059778645_a4ac91ccd27a3478a85abf3f30590a7dc"></a>If an error occurs, <strong id="b178371826154717"><a name="b178371826154717"></a><a name="b178371826154717"></a>gsql</strong> queries connection status of all DNs. If the connection status is abnormal, <strong id="b1684202615477"><a name="b1684202615477"></a><a name="b1684202615477"></a>gsql</strong> sleeps for 1 minute and tries again. In this case, the retries in most of the primary/standby switchover scenarios are involved.</p>
<div class="note" id="en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"><a name="en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><a name="en-us_topic_0059778645_n8f5762a06873412c9f12d3c813743a9f"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><a name="en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"></a><ol id="en-us_topic_0059778645_o0e78bdf91d46456da475e7fa9c91ea7f"><li>Statements in transaction blocks cannot be retried upon a failure.</li><li>Retry is not supported if errors are found using ODBC or JDBC.</li><li>For SQL statements with unlogged tables, the retry is not supported if a node is faulty.</li><li>For <strong id="b228015055517"><a name="b228015055517"></a><a name="b228015055517"></a>gsql</strong> client faults, the retry is not supported.</li></ol>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.919999999999998%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p215476199289"></a>Value range of <strong id="b842352706203210"><a name="b842352706203210"></a><a name="b842352706203210"></a>retry_times</strong>: <strong id="b842352706145951"><a name="b842352706145951"></a><a name="b842352706145951"></a>5</strong> to <strong id="b842352706145953"><a name="b842352706145953"></a><a name="b842352706145953"></a>10</strong></p>
</td>
</tr>
</tbody>
</table>

**Table  12**  Large object meta-commands

<a name="en-us_topic_0059778645_en-us_topic_0058968158_table55465693"></a>
<table><thead align="left"><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row47399046"><th class="cellrowborder" valign="top" width="28.249999999999996%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p14117557"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14117557"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p14117557"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="71.75%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778645_en-us_topic_0058968158_p2671501"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2671501"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p2671501"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5164076"><td class="cellrowborder" valign="top" width="28.249999999999996%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15636991"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636991"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636991"></a>\lo_list</p>
</td>
<td class="cellrowborder" valign="top" width="71.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58636730"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636730"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636730"></a>Displays a list of all <span id="text5179161743020"><a name="text5179161743020"></a><a name="text5179161743020"></a><span id="text18179111714306"><a name="text18179111714306"></a><a name="text18179111714306"></a>openGauss</span></span> large objects stored in the database, along with the comments provided for them.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5164077"><td class="cellrowborder" valign="top" width="28.249999999999996%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15636992"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636992"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636992"></a>\lo_import [FILEPATH]</p>
</td>
<td class="cellrowborder" valign="top" width="71.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58636731"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636731"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636731"></a>Import a large object<span id="text5179161743020"><a name="text5179161743020"></a><a name="text5179161743020"></a><span id="text18179111714306"><a name="text18179111714306"></a><a name="text18179111714306"></a>openGauss</span></span> large objects stored in the database, along with the comments provided for them.</p>
</td>
</tr>
<tr id="en-us_topic_0059778645_en-us_topic_0058968158_row5164078"><td class="cellrowborder" valign="top" width="28.249999999999996%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p15636993"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636993"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p15636993"></a>\lo_export [OID] [FILEPATH]</p>
</td>
<td class="cellrowborder" valign="top" width="71.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778645_en-us_topic_0058968158_p58636732"><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636732"></a><a name="en-us_topic_0059778645_en-us_topic_0058968158_p58636732"></a>Export a large object<span id="text5179161743020"><a name="text5179161743020"></a><a name="text5179161743020"></a><span id="text18179111714306"><a name="text18179111714306"></a><a name="text18179111714306"></a>openGauss</span></span> large objects stored in the database, along with the comments provided for them.</p>
</td>
</tr>
</tbody>
</table>

## PATTERN<a name="section363084334814"></a>

The various  **\\d**  commands accept a  **PATTERN**  parameter to specify the object name to be displayed. In the simplest case, PATTERN is the exact name of the object. Characters in  **PATTERN**  are usually converted to lowercase \(as in SQL names\), for example,  **\\dt FOO**  will display a table named  **foo**. As in SQL names, placing double quotation marks \("\) around a pattern prevents them being folded to lower case. If you need to include a double quotation mark \("\) in a pattern, write it as a pair of double quotation marks \(""\) within a double-quote sequence, which is in accordance with the rules for SQL quoted identifiers. For example,  **\\dt "FOO""BAR"**  will be displayed as a table named  **FOO"BAR**  instead of  **foo"bar**. You cannot put double quotation marks around just part of a pattern, which is different from the normal rules for SQL names. For example,  **\\dt FOO"FOO"BAR**  will be displayed as a table named  **fooFOObar**  if just part of a pattern is quoted.

Whenever the  **PATTERN**  parameter is omitted completely, the  **\\d **commands display all objects that are visible in the current schema search path, which is equivalent to using an asterisk \(\*\) as the pattern. An object is regarded to be visible if it can be referenced by name without explicit schema qualification. To see all objects in the database regardless of their visibility, use a dot within double quotation marks \(\*.\*\) as the pattern.

Within a pattern, the asterisk \(\*\) matches any sequence of characters \(including no characters\) and a question mark \(?\) matches any single character. This notation is comparable to Unix shell file name patterns. For example,  **\\dt int\***  displays tables whose names start with  **int**. But within double quotation marks, the asterisk \(\*\) and the question mark \(?\) lose these special meanings and are just matched literally.

A pattern that contains a dot \(.\) is interpreted as a schema name pattern followed by an object name pattern. For example,  **\\dt foo\*.\*bar\***  displays all tables \(whose names include  **bar**\) in schemas starting with  **foo**. If no dot appears, then the pattern matches only visible objects in the current schema search path. Likewise, the dot within double quotation marks loses its special meaning and becomes an ordinary character.

Senior users can use regular-expression notations, such as character classes. For example \[0-9\] can be used to match any digit. All regular-expression special characters work as specified in POSIX. The following characters are excluded:

-   A dot \(.\) is used as a separator.
-   An asterisk \(\*\) is translated into an asterisk prefixed with a dot \(.\*\), which is a regular-expression marking.
-   A question mark \(?\) is translated into a dot \(.\).
-   A dollar sign \($\) is matched literally.

You can write ?, \(_R_+|\), \(_R_|\), and  _R_  to the following pattern characters: .,  _R_\*, and  _R_?. The dollar sign \($\) does not need to be used as a regular expression character because  **PATTERN**  must match the entire name instead of being interpreted as a regular expression \(in other words, $ is automatically appended to  **PATTERN**\). If you do not expect a pattern to be anchored, write an asterisk \(\*\) at its beginning or end. All regular-expression special characters within double quotation marks lose their special meanings and are matched literally. Regular-expression special characters in operator name patterns \(such as the  **\\do**  parameter\) are also matched literally.

## Troubleshooting<a name="EN-US_TOPIC_0294749066"></a>

### Low Connection Performance<a name="en-us_topic_0078149561_section625869329424"></a>

-   **log\_hostname**  is enabled, but DNS is incorrect.

    Connect to the database, and run  **show log\_hostname**  to check whether  **log\_hostname**  is enabled in the database.

    If it is enabled, the database kernel will use DNS to check the name of the host where the client is deployed. If the host where the database is configured with an incorrect or unreachable DNS server, the database connection will take a long time to set up. For details about this parameter, see the description of  **log\_hostname**  in section [Log Content](../database_reference/logging-content.md).

-   The database kernel slowly runs the initialization statement.

    Problems are difficult to locate in this scenario. Try using the  **strace**  Linux trace command.

    ```
    strace gsql -U MyUserName -d postgres -h 127.0.0.1 -p 23508 -r -c '\q'
    Password for MyUserName:
    ```

    The database connection process will be printed on the screen. If the following statement takes a long time to run:

    ```
    sendto(3, "Q\0\0\0\25SELECT VERSION()\0", 22, MSG_NOSIGNAL, NULL, 0) = 22
    poll([{fd=3, events=POLLIN|POLLERR}], 1, -1) = 1 ([{fd=3, revents=POLLIN}])
    ```

    It indicates that the  **SELECT VERSION\(\)**  statement was run slowly.

    After the database is connected, you can run the  **explain performance select version\(\)**  statement to find the reason why the initialization statement was run slowly. For more information, see [SQL Execution Plan](../performance_tuning_guide/sql_execution_plan_introduction.md).

    An uncommon scenario is that the disk of the machine where the DN resides is full or faulty, affecting queries and leading to user authentication failures. As a result, the connection process is suspended. To solve this problem, simply clear the data disk space of the DN.

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


### Problems in Setting Up Connections<a name="en-us_topic_0078149561_section3272835810521"></a>

-   gsql: could not connect to server: No route to host

    This problem occurs generally because an unreachable IP address or port number was specified. Check whether the values of  **-h**  and  **-p**  parameters are correct.

-   gsql: FATAL:  Invalid username/password,login denied.

    This problem occurs generally because an incorrect username or password was entered. Contact the database administrator to check whether the username and password are correct.

-   gsql: FATAL:  Forbid remote connection with trust method!

    For security purposes, remote login in trust mode is forbidden. In this case, you need to modify the connection authentication information in the  **pg\_hba.conf**  file. For details, see [Configuration File Reference](../database_administration_guide/configuration_file_reference.md).
    
    >[!NOTE]NOTE 
    >Do not modify the configurations of database hosts in the  **pg\_hba. conf**  file. Otherwise, the database may become faulty. It is recommended that service applications be deployed outside the database instead of inside the database.

-   The DN can connect to the database if  **-h 127.0.0.1**  is specified, and the connection will fail if  **-h 127.0.0.1**  is removed.

    Run the SQL statement  **show unix\_socket\_directory**  to check whether the  **unix socket directory**  used by the DN is the same as that specified by the environment virable  **$PGHOST**  in the  **shell**  directory.

    If they are different, set  **$PGHOST**  to the directory specified by  **unix\_socket\_directory**.

    For more information about  **unix\_socket\_directory**, see [Connection Settings](../database_reference/connection-settings.md). 

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

-   gsql: FATAL:  permission denied for database "postgres"

    DETAIL:  User does not have CONNECT privilege.

    This problem occurs because the user does not have the permission to access the database. To solve this problem, perform the following steps:

    1.  Connect to the database as the system administrator  **dbadmin**.

        ```
        gsql -d postgres -U dbadmin -p 8000
        ```

    2.  Grant the user with the permission to access the database.

        GRANT CONNECT ON DATABASE postgres TO user1;

        >[!NOTE]NOTE 
        >Actually, some common misoperations may also cause a database connection failure, for example, entering an incorrect database name, username, or password. In this case, the client tool will display the corresponding error messages.
        >```
        >gsql -d postgres -p 8000
        >gsql: FATAL:  database "postgres" does not exist
        >gsql -d postgres -U user1 -p 8000
        >Password for user user1:
        >gsql: FATAL:  Invalid username/password, login denied.
        >```


-   gsql: FATAL: sorry, too many clients already, active/non-active: 197/3.

    This problem occurs because the number of system connections exceeds the allowed maximum. Contact the DBA database administrator to release unnecessary sessions.

    You can check the number of connections as described in  [Table 1](#en-us_topic_0059779356_t8e166846f0204638bd83f2fd35f44585).

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

    **Table  1**  Viewing the number of session connections

    <a name="en-us_topic_0059779356_t8e166846f0204638bd83f2fd35f44585"></a>
    <table><thead align="left"><tr id="en-us_topic_0059779356_r32046f7f632b492891276dd6f4bf8999"><th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"><a name="en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a><a name="en-us_topic_0059779356_af6146f03532142dcaabcb534b3f1c117"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.58999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"><a name="en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a><a name="en-us_topic_0059779356_aa2c6dba9fc5043509474d2a1d80a33be"></a>Command</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0059779356_rc644c3de5cac4e4891741cccf756b131"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"><a name="en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a><a name="en-us_topic_0059779356_aa970f952a24d4682ba8a54ea52368194"></a>View the maximum number of sessions connected to a specific user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"><a name="en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a><a name="en-us_topic_0059779356_a4744b74e9d12423280d5ba48ad70b73c"></a>Run the following command to view the upper limit of the number of <strong id="b842352706143336"><a name="b842352706143336"></a><a name="b842352706143336"></a>USER1</strong>'s session connections. <strong id="b842352706143349"><a name="b842352706143349"></a><a name="b842352706143349"></a>-1</strong> indicates that no upper limit is set for the number of <strong id="b1930831815143422"><a name="b1930831815143422"></a><a name="b1930831815143422"></a>USER1</strong>'s session connections.</p>
    <pre class="screen" id="en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"><a name="en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a><a name="en-us_topic_0059779356_se07756dd06cf4a2696234c47b0135aab"></a>SELECT ROLNAME,ROLCONNLIMIT FROM PG_ROLES WHERE ROLNAME='user1';
     rolname | rolconnlimit
    ---------+--------------
     user1    |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_rf5d9240299bd47e292727e46ad181e06"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"><a name="en-us_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"></a><a name="en-us_topic_0059779356_a27ea13695c164c3e94d1e53ff6038898"></a>View the number of session connections that have been used by a specified user.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"><a name="en-us_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"></a><a name="en-us_topic_0059779356_ad60bdc8421564f9185293df24f420bb1"></a>Run the following command to view the number of session connections that have been used by <strong id="b842352706143443"><a name="b842352706143443"></a><a name="b842352706143443"></a>USER1</strong>. <strong id="b842352706143450"><a name="b842352706143450"></a><a name="b842352706143450"></a>1</strong> indicates the number of session connections that have been used by <strong id="b842352706143459"><a name="b842352706143459"></a><a name="b842352706143459"></a>USER1</strong>.</p>
    <pre class="screen" id="en-us_topic_0059779356_s271e08598652464baf8e34937f03fe76"><a name="en-us_topic_0059779356_s271e08598652464baf8e34937f03fe76"></a><a name="en-us_topic_0059779356_s271e08598652464baf8e34937f03fe76"></a>SELECT COUNT(*) FROM dv_sessions WHERE USERNAME='user1';
     count
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_r3ecf1d5dec914606a843db02e9fbd915"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"><a name="en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a><a name="en-us_topic_0059779356_ac2d00a4d4adc4d689dd05f7168497c18"></a>View the maximum number of sessions connected to a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"><a name="en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a><a name="en-us_topic_0059779356_a81f247c75f274abc8270ac1b78aba4c0"></a>Run the following command to view the upper limit of the number of <strong id="b842352706143531"><a name="b842352706143531"></a><a name="b842352706143531"></a>postgres</strong>'s session connections. <strong id="b842352706143545"><a name="b842352706143545"></a><a name="b842352706143545"></a>-1</strong> indicates that no upper limit is set for the number of <strong id="b1411347486143553"><a name="b1411347486143553"></a><a name="b1411347486143553"></a>postgres</strong>'s session connections.</p>
    <pre class="screen" id="en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"><a name="en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a><a name="en-us_topic_0059779356_sffa7a0b1c20a4334973a3d9cd8918cfa"></a>SELECT DATNAME,DATCONNLIMIT FROM PG_DATABASE WHERE DATNAME='postgres';
     datname  | datconnlimit
    ----------+--------------
     postgres |           -1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_rdc10c65ce85d49b38dede86bc6dcd1d1"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"><a name="en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a><a name="en-us_topic_0059779356_a69e536f0fbef4de58d2c777e16352a52"></a>View the number of session connections that have been used by a specific database.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"><a name="en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a><a name="en-us_topic_0059779356_aa8da957101424e10b5474c5da611d4d3"></a>Run the following command to view the number of session connections that have been used by <strong id="b842352706143634"><a name="b842352706143634"></a><a name="b842352706143634"></a>postgres</strong>. <strong id="b842352706143645"><a name="b842352706143645"></a><a name="b842352706143645"></a>1</strong> indicates the number of session connections that have been used by <strong id="b842352706143711"><a name="b842352706143711"></a><a name="b842352706143711"></a>postgres</strong>.</p>
    <pre class="screen" id="en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"><a name="en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a><a name="en-us_topic_0059779356_sc33ac7ae685f4bf28abc62854ee2f78c"></a>SELECT COUNT(*) FROM PG_STAT_ACTIVITY WHERE DATNAME='postgres';
     count 
    -------
         1
    (1 row)</pre>
    </td>
    </tr>
    <tr id="en-us_topic_0059779356_re1756ad474794d9bacb603dfaa36638b"><td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"><a name="en-us_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"></a><a name="en-us_topic_0059779356_a1779b3fbc7bb4ef4bce7bf520a3cf00c"></a>View the number of session connections that have been used by all users.</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.58999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"><a name="en-us_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"></a><a name="en-us_topic_0059779356_a29bbd1ba1bcb4e7a890afdb3a00879c9"></a>Run the following command to view the number of session connections that have been used by all users:</p>
    <pre class="screen" id="en-us_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"><a name="en-us_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"></a><a name="en-us_topic_0059779356_s23771d20eb774fbd9d04a0a852f4605f"></a>SELECT COUNT(*) FROM dv_sessions;
     count
    -------
         10
    (1 row)</pre>
    </td>
    </tr>
    </tbody>
    </table>

-   gsql: wait xxx.xxx.xxx.xxx:xxxx timeout expired

    When  **gsql**  initiates a connection request to the database, a 5-minute timeout period is used. If the database cannot correctly authenticate the client request and client identity within this period,  **gsql**  will exit the connection process for the current session, and will report the above error.

    Generally, this problem is caused by the incorrect host and port \(that is, the  _xxx_  part in the error information\) specified by the  **-h**  and  **-p**  parameters. As a result, the communication fails. Occasionally, this problem is caused by network faults. To resolve this problem, check whether the host name and port number of the database are correct.

-   gsql: could not receive data from server: Connection reset by peer.

    Check whether DN logs contain information similar to "FATAL: cipher file "/data/coordinator/server.key.cipher" has group or world access". This error is usually caused by incorrect tampering with the permissions for data directories or some key files. For details about how to correct the permissions, see related permissions for files on other normal instances.

-   gsql: FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.
-   
    In  **pg\_hba.conf**  of the target DN, the authentication mode is set to  **gss**  for authenticating the IP address of the current client. However, this authentication algorithm cannot authenticate clients. Change the authentication algorithm to  **sha256**  and try again. For details, see [Configuration File Reference](../database_administration_guide/configuration_file_reference.md).

    >[!NOTE]NOTE 
    >-   Do not modify the configurations of database hosts in the  **pg\_hba. conf**  file. Otherwise, the database may become faulty.
    >-   It is recommended that service applications be deployed outside the database instead of inside the database.


## Other Faults<a name="section1457563481712"></a>

-   There is a core dump or abnormal exit due to the bus error.

    Generally, this problem is caused by changes in loading the shared dynamic library \(.so file in Linux\) during process running. Alternatively, if the process binary file changes, the execution code for the OS to load machines or the entry for loading a dependent library will change accordingly. In this case, the OS kills the process for protection purposes, generating a core dump file.

    To resolve this problem, try again. In addition, do not run service programs in a database during O&M operations, such as an upgrade, preventing such a problem caused by file replacement during the upgrade.

    >[!NOTE]NOTE 
    >A possible stack of the core dump file contains dl\_main and its function calling. The file is used by the OS to initialize a process and load the shared dynamic library. If the process has been initialized but the shared dynamic library has not been loaded, the process cannot be considered completely started.


