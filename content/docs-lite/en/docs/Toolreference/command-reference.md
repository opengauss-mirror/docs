# Command Reference<a name="EN-US_TOPIC_0294749022"></a>

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
<p id="en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"><a name="en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"></a><a name="en-us_topic_0059779319_a49cd1e75c903484089d620390e736516"></a>For details about variable examples and descriptions, see <a href="overview-0.md#en-us_topic_0059778819_en-us_topic_0058968129_li39134862">Variables</a>.</p>
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

