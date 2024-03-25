# 命令参考<a name="ZH-CN_TOPIC_0294749022"></a>

详细的gsql参数请参见[表1](#zh-cn_topic_0059779319_t5f35328143ec419983a1c23d13c46e49)、[表2](#zh-cn_topic_0059779319_t0233128ab394456c80e339179cb56739)、[表3](#zh-cn_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8)和[表4](#zh-cn_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68)。

**表 1**  常用参数

<a name="zh-cn_topic_0059779319_t5f35328143ec419983a1c23d13c46e49"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059779319_rf9b2bbe319a24d139970cf428f495efd"><th class="cellrowborder" valign="top" width="22.34%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"><a name="zh-cn_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a><a name="zh-cn_topic_0059779319_aa15e412fe7364f6992cb5ff1d06f6d46"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="53.6%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059779319_a11229b9b997f438eb84506dae58a0287"><a name="zh-cn_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a><a name="zh-cn_topic_0059779319_a11229b9b997f438eb84506dae58a0287"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="24.060000000000002%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p192487379712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p192487379712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p192487379712"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059779319_rf751e9eceef243079acfc04a1b4dc221"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"><a name="zh-cn_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a><a name="zh-cn_topic_0059779319_a5b565fceb8d642e5ad636f3105992b19"></a>-c, --command=COMMAND</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"><a name="zh-cn_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a><a name="zh-cn_topic_0059779319_ad0bed757764a4573a4c4480bf2587a2d"></a>声明gsql要执行一条字符串命令然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p156438509712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p156438509712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p156438509712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r6daf56fa49884c82aca97a902d28b79e"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"><a name="zh-cn_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a><a name="zh-cn_topic_0059779319_aa130576914d6457d9548b65d9f9425c8"></a>-d, --dbname=DBNAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p272315995731"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p272315995731"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p272315995731"></a>指定想要连接的数据库名称。</p>
<p id="p41512232568"><a name="p41512232568"></a><a name="p41512232568"></a>另外，gsql允许使用扩展的DBNAME，即'postgres[ql]://[user[:password]@][netloc][:port][,...][/dbname][?param1=value1&amp;...]'或'[key=value] [...]'形式的连接串作为DBNAME，gsql将从连接串中解析连接信息，并优先使用这些信息。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p298498829712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p298498829712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p298498829712"></a>字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r9f41226b80114eda9b6529ce60d822cd"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"><a name="zh-cn_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a><a name="zh-cn_topic_0059779319_af0a2cf69d07743b2b1d21ebd820f9659"></a>-f, --file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431573395731"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431573395731"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431573395731"></a>使用文件作为命令源而不是交互式输入。gsql将在处理完文件后结束。如果FILENAME是-（连字符），则从标准输入读取。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p111442891021"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p111442891021"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p111442891021"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rb1dacbb49960481a8eaec18fcaa258c1"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p135042995731"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p135042995731"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p135042995731"></a>-l, --list</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a7acc5297f2c24951829934906835788f"><a name="zh-cn_topic_0059779319_a7acc5297f2c24951829934906835788f"></a><a name="zh-cn_topic_0059779319_a7acc5297f2c24951829934906835788f"></a>列出所有可用的数据库，然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p214125089712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p214125089712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p214125089712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rbfc3635add4a41319b89eba9fc73414a"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"><a name="zh-cn_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a><a name="zh-cn_topic_0059779319_a94c1b074456446488e34aa96bd54d8cc"></a>-v, --set, --variable=NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"><a name="zh-cn_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a><a name="zh-cn_topic_0059779319_a68da82b5480f4e549bce319bbd613a7f"></a>设置gsql变量NAME为VALUE。</p>
<p id="zh-cn_topic_0059779319_a49cd1e75c903484089d620390e736516"><a name="zh-cn_topic_0059779319_a49cd1e75c903484089d620390e736516"></a><a name="zh-cn_topic_0059779319_a49cd1e75c903484089d620390e736516"></a>变量的示例和详细说明请参见<a href="gsql概述.md#zh-cn_topic_0059778819_zh-cn_topic_0058968129_li39134862">变量</a>。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p566915559712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p566915559712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p566915559712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r76e7d067a95b4153a7f539b41685ce3d"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_aa345ebc468534282a77d48941c169514"><a name="zh-cn_topic_0059779319_aa345ebc468534282a77d48941c169514"></a><a name="zh-cn_topic_0059779319_aa345ebc468534282a77d48941c169514"></a>-X, --no-gsqlrc</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p190458295731"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p190458295731"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p190458295731"></a>不读取启动文件（系统范围的gsqlrc或者用户的~/.gsqlrc都不读取）。</p>
<div class="note" id="zh-cn_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"><a name="zh-cn_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><a name="zh-cn_topic_0059779319_n6ae78d2363da4960a12feb81227fe307"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"><a name="zh-cn_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a><a name="zh-cn_topic_0059779319_a50d393490e444bc1998e7db81bf0e84d"></a>启动文件默认为~/.gsqlrc，或通过PSQLRC环境变量指定。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p286132639712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p286132639712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p286132639712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rde1104323b5d4638ae3c6eb9c7072d37"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"><a name="zh-cn_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a><a name="zh-cn_topic_0059779319_a74653638bf0d497d954ba3fdb75458cd"></a>-1 ("one"), --single-transaction</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"><a name="zh-cn_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a><a name="zh-cn_topic_0059779319_a92ac36a833b844b8a1c141222d52bfdf"></a>当gsql使用-1选项执行脚本时，会在脚本的开头和结尾分别加上START TRANSACTION/COMMIT用以把整个脚本当作一个事务执行。这将保证该脚本完全执行成功，或者脚本无效。</p>
<div class="note" id="zh-cn_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"><a name="zh-cn_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><a name="zh-cn_topic_0059779319_nda5f79eea3ca41e699018fd4d7d60c24"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"><a name="zh-cn_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a><a name="zh-cn_topic_0059779319_aa3f4dbbd056f40cbb7ded8e9e506829c"></a>如果脚本中已经使用了START TRANSACTION，COMMIT，ROLLBACK，则该选项无效。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p359730009712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p359730009712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p359730009712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r9be0702e5bfd4f8480af8cfbd9b0c43e"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"><a name="zh-cn_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a><a name="zh-cn_topic_0059779319_a74c8368e941443eb8d27690e8b7a7803"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a668af7282b3440f292ad8697de06b81d"><a name="zh-cn_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a><a name="zh-cn_topic_0059779319_a668af7282b3440f292ad8697de06b81d"></a>显示关于gsql命令行参数的帮助信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p281318939712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p281318939712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p281318939712"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r98591fe5999043888e3822f4712e7efb"><td class="cellrowborder" valign="top" width="22.34%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"><a name="zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a><a name="zh-cn_topic_0059779319_abecd4bed17f04dffa74a1d4a58b4ed36"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="53.6%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"><a name="zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a><a name="zh-cn_topic_0059779319_ab4351be7956545918ef878c0c83247fd"></a>打印gsql版本信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="24.060000000000002%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p640908799712"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 2**  输入和输出参数

<a name="zh-cn_topic_0059779319_t0233128ab394456c80e339179cb56739"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059779319_ra3cdda570ced41129194efd2e680304d"><th class="cellrowborder" valign="top" width="15.35%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p401260795738"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p401260795738"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p401260795738"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="64.89%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059779319_a906241fb7455400e916a9a38a9868a71"><a name="zh-cn_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a><a name="zh-cn_topic_0059779319_a906241fb7455400e916a9a38a9868a71"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="19.759999999999998%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p485266179117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p485266179117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p485266179117"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059779319_r064106ad54d9435fad3424d5a2377089"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a7891e008bcdc4c288c069694adc59550"><a name="zh-cn_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a><a name="zh-cn_topic_0059779319_a7891e008bcdc4c288c069694adc59550"></a>-a, --echo-all</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p239453995738"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p239453995738"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p239453995738"></a>在读取行时向标准输出打印所有内容。</p>
<div class="caution" id="zh-cn_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"><a name="zh-cn_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><a name="zh-cn_topic_0059779319_n83a7b22ec58b4dd693f75ad6ffc98721"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"><a name="zh-cn_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a><a name="zh-cn_topic_0059779319_a78f51e7c3978463f96d0ee92a297cdd0"></a>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p383419339117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p383419339117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p383419339117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rb4b58fbd180a4bbeba2e3e52f0b74a56"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p19920195738"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p19920195738"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p19920195738"></a>-e, --echo-queries</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"><a name="zh-cn_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a><a name="zh-cn_topic_0059779319_a1ff672f3bcf54a31a6840899b16a7809"></a>把所有发送给服务器的查询同时回显到标准输出。</p>
<div class="caution" id="zh-cn_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"><a name="zh-cn_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><a name="zh-cn_topic_0059779319_n0bf611e94d314d22948dcfe26d8c59e3"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"><a name="zh-cn_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a><a name="zh-cn_topic_0059779319_af990cb78ae34434f9f6e5bc707053958"></a>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p186888699117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p186888699117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p186888699117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_re72e5fed55b746989e2d11b33e07c76f"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"><a name="zh-cn_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a><a name="zh-cn_topic_0059779319_a3cfcd89ff2114160a5e9f21938af8e60"></a>-E, --echo-hidden</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"><a name="zh-cn_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a><a name="zh-cn_topic_0059779319_ae56168edaab3422481cd04ca7de9f4b3"></a>回显由\d和其他反斜杠命令生成的实际查询。</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p374034349117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p374034349117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p374034349117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_raaf263ab8e2c4891a204f1debeeb0b5a"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"><a name="zh-cn_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a><a name="zh-cn_topic_0059779319_af6bfa8e1ab3b46d28d3254e9b531a471"></a>-k, --with-key=KEY</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"><a name="zh-cn_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a><a name="zh-cn_topic_0059779319_aa94324ec591940b5af8c3a3696eeeecf"></a>使用gsql对导入的加密文件进行解密。</p>
<div class="notice" id="zh-cn_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"><a name="zh-cn_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><a name="zh-cn_topic_0059779319_n46eecf163255483f9d63b7e3f8e05a7f"></a><span class="noticetitle"> 须知： </span><div class="noticebody"><a name="ul12609105744211"></a><a name="ul12609105744211"></a><ul id="ul12609105744211"><li>对于本身就是shell命令中的关键字符如单引号（'）或双引号（"），Linux shell会检测输入的单引号（'）或双引号（"）是否匹配。如果不匹配，shell认为用户没有输入完毕，会一直等待用户输入，从而不会进入到gsql程序。</li><li>不支持解密导入存储过程和函数。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p97792999117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p97792999117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p97792999117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r649b2c557fa54148aad24f6edd10ad66"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_ab4297ab2218f4028885186e84264e945"><a name="zh-cn_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a><a name="zh-cn_topic_0059779319_ab4297ab2218f4028885186e84264e945"></a>-L, --log-file=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"><a name="zh-cn_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a><a name="zh-cn_topic_0059779319_aa7b2e9e0191e4738b7392f7c174192ee"></a>除了正常的输出源之外，把所有查询输出记录到文件FILENAME中。</p>
<div class="caution" id="zh-cn_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"><a name="zh-cn_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><a name="zh-cn_topic_0059779319_n37f3cd1faf8148d59d96720a6279163b"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><a name="ul1039703419584"></a><a name="ul1039703419584"></a><ul id="ul1039703419584"><li>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</li><li>此参数只保留查询结果到相应文件中，主要目标是为了查询结果能够更好更准确地被其他调用者（例如自动化运维脚本）解析；而不是保留gsql运行过程中的相关日志信息。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"><a name="zh-cn_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a><a name="zh-cn_topic_0059779319_ab624b7341b2341369eb67e0ebdc7af4f"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rf3647ed1bfd64792964a6801a39194c0"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_ac55a414323994f8caa7857a885ce1759"><a name="zh-cn_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a><a name="zh-cn_topic_0059779319_ac55a414323994f8caa7857a885ce1759"></a>-m, --maintenance</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"><a name="zh-cn_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a><a name="zh-cn_topic_0059779319_ac8cad203dd104e12957e32660d7991b6"></a>允许在两阶段事务恢复期间连接数据库。</p>
<div class="note" id="zh-cn_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"><a name="zh-cn_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><a name="zh-cn_topic_0059779319_n8c1104b5c4624f098b3a97d2176da135"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"><a name="zh-cn_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a><a name="zh-cn_topic_0059779319_ad15fb0b510bc47ca8c7635a0ab2e23de"></a>该选项是一个开发选项，禁止用户使用，只限专业技术人员使用，功能是：使用该选项时，gsql可以连接到备机，用于校验主备机数据的一致性。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p89352579117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p89352579117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p89352579117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rc862eac12f4e4356b0aca394c4b7b461"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"><a name="zh-cn_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a><a name="zh-cn_topic_0059779319_abdf4dc94e9f54133a97a4c6b69f2e83b"></a>-n, --no-libedit</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"><a name="zh-cn_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a><a name="zh-cn_topic_0059779319_abedba111c01b49f8b9cd2bee68eac3c8"></a>关闭命令行编辑。</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p526672539117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p526672539117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p526672539117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r08b7c2c3d00641b49eb4422a59e259c7"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"><a name="zh-cn_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a><a name="zh-cn_topic_0059779319_ace386b04d7b347ff9a07d88b1d4c31ff"></a>-o, --output=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a5495253d5fc2465296d752e1198157c6"><a name="zh-cn_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a><a name="zh-cn_topic_0059779319_a5495253d5fc2465296d752e1198157c6"></a>将所有查询输出重定向到文件FILENAME。</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"><a name="zh-cn_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a><a name="zh-cn_topic_0059779319_a3b6419c7e2cd450e9332db537ef6ffbb"></a>绝对路径或相对路径，且满足操作系统路径命名规则。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rf39085b0d805479ba572f4c6a77ebac4"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"><a name="zh-cn_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a><a name="zh-cn_topic_0059779319_a4773f1cd9c094b9bb3c0db511584dfab"></a>-q, --quiet</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"><a name="zh-cn_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a><a name="zh-cn_topic_0059779319_abfee905807864cc4a8203ccd8e8b28f7"></a>安静模式，执行时不会打印出额外信息。</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p381890689117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p381890689117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p381890689117"></a>缺省时gsql将打印许多其他输出信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r5cae5c04623a4788815f572ddd3a5119"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p582042195738"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p582042195738"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p582042195738"></a>-s, --single-step</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"><a name="zh-cn_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a><a name="zh-cn_topic_0059779319_ad9f893023f4f4721a3e3c9cbad856708"></a>单步模式运行。意味着每个查询在发往服务器之前都要提示用户，用这个选项也可以取消执行。此选项主要用于调试脚本。</p>
<div class="caution" id="zh-cn_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"><a name="zh-cn_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><a name="zh-cn_topic_0059779319_nd341bb48efcb4b279e91c398eff9209b"></a><span class="cautiontitle"> 注意： </span><div class="cautionbody"><p id="zh-cn_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"><a name="zh-cn_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a><a name="zh-cn_topic_0059779319_aa2addc2a8fa7462688c0148ced67140b"></a>使用此参数可能会暴露部分SQL语句中的敏感信息，如创建用户语句中的password信息等，请谨慎使用。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p410907699117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p410907699117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p410907699117"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r139b7f4e328347debdde736d8ebd6fa1"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"><a name="zh-cn_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a><a name="zh-cn_topic_0059779319_a2ddd6e0a507a4a4b81535b161beaf740"></a>-S, --single-line</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"><a name="zh-cn_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a><a name="zh-cn_topic_0059779319_ab4e9eb5c081b4f5691ee0afad826f1cb"></a>单行运行模式，这时每个命令都将由换行符结束，像分号那样。</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p400179989117"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p400179989117"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p400179989117"></a>-</p>
</td>
</tr>
<tr id="row1064319820577"><td class="cellrowborder" valign="top" width="15.35%" headers="mcps1.2.4.1.1 "><p id="p177763975714"><a name="p177763975714"></a><a name="p177763975714"></a>-C，--enable-client-encryption</p>
</td>
<td class="cellrowborder" valign="top" width="64.89%" headers="mcps1.2.4.1.2 "><p id="p1177616965718"><a name="p1177616965718"></a><a name="p1177616965718"></a>当使用-C参数连接本地数据库或者连接远程数据库时，可通过该选项打开密态数据库开关。</p>
</td>
<td class="cellrowborder" valign="top" width="19.759999999999998%" headers="mcps1.2.4.1.3 "><p id="p7776599571"><a name="p7776599571"></a><a name="p7776599571"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 3**  输出格式参数

<a name="zh-cn_topic_0059779319_t47c174e145784f16ac251d3c6aea8ea8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059779319_ra101278a50d349be83a64bb1915591f1"><th class="cellrowborder" valign="top" width="17.52%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059779319_a396cd422101544c9b9de39d172ab7175"><a name="zh-cn_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a><a name="zh-cn_topic_0059779319_a396cd422101544c9b9de39d172ab7175"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="64.25%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"><a name="zh-cn_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a><a name="zh-cn_topic_0059779319_ad608a82fa0b44fa49519299758dcc9dd"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431994959135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431994959135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p431994959135"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059779319_r06630a6cad7e4748aed20317124c2a03"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"><a name="zh-cn_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a><a name="zh-cn_topic_0059779319_a7de1a1662e9a4e449478ac63d6ed94f3"></a>-A, --no-align</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"><a name="zh-cn_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a><a name="zh-cn_topic_0059779319_a3d12fd5150b34f1e9df67e2e048a69e1"></a>切换为非对齐输出模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p94982399135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p94982399135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p94982399135"></a>缺省为对齐输出模式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r7f57d0e4831e486b95fbe023bae4bd94"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p120733695744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p120733695744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p120733695744"></a>-F, --field-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"><a name="zh-cn_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a><a name="zh-cn_topic_0059779319_aae72dabdb39a4e9082432d960ab08f22"></a>设置域分隔符（默认为“|”）。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p311598799135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p311598799135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p311598799135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r71cd46e7a1184ef4853d43846cc6a16b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"><a name="zh-cn_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a><a name="zh-cn_topic_0059779319_ad83426726d6e499f885871b4f6dbf85e"></a>-H, --html</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p253547695744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p253547695744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p253547695744"></a>打开HTML格式输出。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p409222479135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p409222479135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p409222479135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r6df99f3887c740f59d40136a614bc9d5"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"><a name="zh-cn_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a><a name="zh-cn_topic_0059779319_acaa254aa2c1b466185a860214c9a8db6"></a>-P, --pset=VAR[=ARG]</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"><a name="zh-cn_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a><a name="zh-cn_topic_0059779319_acd01f9695377433b97a2e63e79bd97e2"></a>在命令行上以\pset的风格设置打印选项。</p>
<div class="note" id="zh-cn_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"><a name="zh-cn_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><a name="zh-cn_topic_0059779319_ne23e8a69f9a746b489a02918b3b658e9"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"><a name="zh-cn_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a><a name="zh-cn_topic_0059779319_a691b18ba7e764198bffeae1c96b28db4"></a>这里必须用等号而不是空格分隔名称和值。例如，把输出格式设置为LaTeX，可以键入-P format=latex</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p263677209135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p263677209135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p263677209135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rb03ed3abf98f420b91c00270e8e124fb"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p425912095744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p425912095744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p425912095744"></a>-R, --record-separator=STRING</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"><a name="zh-cn_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a><a name="zh-cn_topic_0059779319_a2cb9c2252a8a40588a6b70f58f4a8e2b"></a>设置记录分隔符。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p554105779135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p554105779135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p554105779135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rdd5cd46088d544b5b90c8ddf7075a06b"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"><a name="zh-cn_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a><a name="zh-cn_topic_0059779319_a1e97d13320ef4994973e9e027c04dc53"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"><a name="zh-cn_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a><a name="zh-cn_topic_0059779319_a41760b3e5ba4422197823d8d8ca17715"></a>开启在客户端操作中可以进行编辑的模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p590717879135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p590717879135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p590717879135"></a>缺省为关闭。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r3466981c1d824594921920fd9ddd1bf2"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p392666995744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p392666995744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p392666995744"></a>-t, --tuples-only</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p662507995744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p662507995744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p662507995744"></a>只打印行。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p200854709135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p200854709135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p200854709135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r4a7c6bdac04f4826aeef67c5a3aaef23"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"><a name="zh-cn_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a><a name="zh-cn_topic_0059779319_a797b3cbb3eae41f1b3921fe6887c5bad"></a>-T, --table-attr=TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"><a name="zh-cn_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a><a name="zh-cn_topic_0059779319_ae0ba545e9aaa4be0b336542c5d39457e"></a>允许声明放在HTML table标签里的选项。</p>
<p id="zh-cn_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"><a name="zh-cn_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a><a name="zh-cn_topic_0059779319_aa8511ba77ca64e1e9eab724de362c5a7"></a>使用时请搭配参数“-H,--html”，指定为HTML格式输出。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p163103539135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p163103539135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p163103539135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_rc0f8b59ecf8046489f865279cc92e667"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p271620295744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p271620295744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p271620295744"></a>-x, --expanded</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"><a name="zh-cn_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a><a name="zh-cn_topic_0059779319_a0e68e4d75fdf45ed86ee8e4246c44b92"></a>打开扩展表格式模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p460701889135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p460701889135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p460701889135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r70d9b0438762491c8bced4984a242043"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p837456095744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p837456095744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p837456095744"></a>-z, --field-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p748381795744"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p748381795744"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p748381795744"></a>设置非对齐输出模式的域分隔符为空。</p>
<p id="zh-cn_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"><a name="zh-cn_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a><a name="zh-cn_topic_0059779319_ad5393ce45d4640dea5badcde2b3b28a8"></a>使用时请搭配参数“-A, --no-align”，指定为非对齐输出模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p406977529135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p406977529135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p406977529135"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r10eed4bf94ff49c7acc8e56dd2e2af7a"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"><a name="zh-cn_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a><a name="zh-cn_topic_0059779319_aa9681a50f7864f5197238cdfd863aa01"></a>-0, --record-separator-zero</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a36d383622634404baff9b73998c8f6dd"><a name="zh-cn_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a><a name="zh-cn_topic_0059779319_a36d383622634404baff9b73998c8f6dd"></a>设置非对齐输出模式的记录分隔符为空。</p>
<p id="zh-cn_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"><a name="zh-cn_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a><a name="zh-cn_topic_0059779319_ad73765dfda614f869d9775be3cf90bfa"></a>使用时请搭配参数“-A, --no-align”，指定为非对齐输出模式。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p81836129135"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p81836129135"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p81836129135"></a>-</p>
</td>
</tr>
<tr id="row6199132555"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="p1407152055511"><a name="p1407152055511"></a><a name="p1407152055511"></a>-2, --pipeline</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="p94072206559"><a name="p94072206559"></a><a name="p94072206559"></a>使用管道传输密码，禁止在终端使用，必须和-c或者-f参数一起使用。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="p174221114704"><a name="p174221114704"></a><a name="p174221114704"></a>-</p>
</td>
</tr>
<tr id="row168751313155516"><td class="cellrowborder" valign="top" width="17.52%" headers="mcps1.2.4.1.1 "><p id="p13875513185511"><a name="p13875513185511"></a><a name="p13875513185511"></a>-g,</p>
</td>
<td class="cellrowborder" valign="top" width="64.25%" headers="mcps1.2.4.1.2 "><p id="p787516133552"><a name="p787516133552"></a><a name="p787516133552"></a>打印来自文件的所有SQL。</p>
</td>
<td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.3 "><p id="p587551375510"><a name="p587551375510"></a><a name="p587551375510"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 4**  连接参数

<a name="zh-cn_topic_0059779319_td7e646abbf6a4d85bc54cd9741c80b68"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059779319_r7ae18844030f48148c25a09efc185001"><th class="cellrowborder" valign="top" width="22.720000000000002%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"><a name="zh-cn_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a><a name="zh-cn_topic_0059779319_af5afc71383bd49859a7eb14f09f4a230"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="52.28%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"><a name="zh-cn_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a><a name="zh-cn_topic_0059779319_a6a81762f2c984cbcb0a23bdca1adced8"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"><a name="zh-cn_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a><a name="zh-cn_topic_0059779319_a2795db2b320742e6affbac1bafa83b6f"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059779319_rbc536c10a0524f93ba9dc04d86cae020"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p502015995754"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p502015995754"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p502015995754"></a>-h, --host=HOSTNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"><a name="zh-cn_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a><a name="zh-cn_topic_0059779319_a1760bcdbe0284381b8725a909a6c826f"></a>指定正在运行服务器的主机名或者Unix域套接字的路径。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"><a name="zh-cn_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a><a name="zh-cn_topic_0059779319_a167e9d6fbb61457985723cf3d45028dc"></a>如果省略主机名，gsql将通过Unix域套接字与本地主机的服务器相连，或者在没有Unix域套接字的机器上，通过TCP/IP与localhost连接。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r192a476e6aa84e1ba66b8a618b81b730"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"><a name="zh-cn_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a><a name="zh-cn_topic_0059779319_a45b7f2255dc44d1487f401973037cddb"></a>-p, --port=PORT</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"><a name="zh-cn_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a><a name="zh-cn_topic_0059779319_a7c42bfc7e855469f9e3a11ed2313a491"></a>指定数据库服务器的端口号。</p>
<p id="zh-cn_topic_0059779319_aa087b88fe849401bbcba9de536673b28"><a name="zh-cn_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a><a name="zh-cn_topic_0059779319_aa087b88fe849401bbcba9de536673b28"></a>可以通过port参数修改默认端口号。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"><a name="zh-cn_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a><a name="zh-cn_topic_0059779319_aefbd427a18574418b2cdf13b05433b9c"></a>默认为<span id="text06391931135519"><a name="text06391931135519"></a><a name="text06391931135519"></a>8000</span>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r88a7493b32594e16aa0e0b888f97cc64"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"><a name="zh-cn_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a><a name="zh-cn_topic_0059779319_a2f45ae14acdb4be1a5676570d4a3d31f"></a>-U, --username=USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p106242695754"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p106242695754"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p106242695754"></a>指定连接数据库的用户。</p>
<div class="note" id="zh-cn_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"><a name="zh-cn_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><a name="zh-cn_topic_0059779319_nd84eb01fa2524df6879d5f935e856a13"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="ul103034015494"></a><a name="ul103034015494"></a><ul id="ul103034015494"><li>通过该参数指定用户连接数据库时，需要同时提供用户密码用以身份验证。您可以通过交换方式输入密码，或者通过-W参数指定密码。</li><li>用户名中包含有字符$，需要在字符$前增加转义字符才可成功连接数据库。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"><a name="zh-cn_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a><a name="zh-cn_topic_0059779319_a12e84d1a3b9547719cd286a828c9ee4d"></a>字符串，默认使用与当前操作系统用户同名的用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059779319_r2243c5af2de8467b89287880f4d71853"><td class="cellrowborder" valign="top" width="22.720000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"><a name="zh-cn_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a><a name="zh-cn_topic_0059779319_af4c2a55b65a74cb498db93e26b05d22c"></a>-W, --password=PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="52.28%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"><a name="zh-cn_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a><a name="zh-cn_topic_0059779319_afeedf768a70e4ae4bc06080ba0113739"></a>当使用-U参数连接本地数据库或者连接远端数据库时，可通过该选项指定密码。</p>
<div class="note" id="zh-cn_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"><a name="zh-cn_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><a name="zh-cn_topic_0059779319_n3bc794498d524cd5bf8b95508d7fd723"></a><span class="notetitle"> 说明： </span><div class="notebody"><a name="ul2061711239620"></a><a name="ul2061711239620"></a><ul id="ul2061711239620"><li>登录数据库主节点所在服务器后连接本地数据库主节点实例时，默认使用trust连接，会忽略此参数。</li><li>用户密码中包含特殊字符“\”和"`"时，需要增加转义字符才可成功连接数据库。</li><li>如果用户未输入该参数，但是数据库连接需要用户密码，这时将出现交互式输入，请用户输入当前连接的密码。该密码最长长度为999字节，受限于GUC参数password_max_length的最大值。</li></ul>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p556353793842"><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p556353793842"></a><a name="zh-cn_topic_0059779319_zh-cn_topic_0058968145_p556353793842"></a>字符串。</p>
</td>
</tr>
</tbody>
</table>

