# GS\_FILE\_STAT<a name="ZH-CN_TOPIC_0289900832"></a>

GS\_FILE\_STAT视图通过对数据文件IO的统计，反映数据的IO性能，用以发现IO操作异常等性能问题。

**表 1**  GS\_FILE\_STAT字段

<a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_t39c9cf1af056469e9b987c3c3e3aa52f"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r2f1c64b704c545d38d5809c98575065b"><th class="cellrowborder" valign="top" width="27.32%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a322cf109d83d4581897d3668418d08e5"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a322cf109d83d4581897d3668418d08e5"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a322cf109d83d4581897d3668418d08e5"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.61%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a82c994917a1246699a1f473e1b82d90d"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a82c994917a1246699a1f473e1b82d90d"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a82c994917a1246699a1f473e1b82d90d"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="53.06999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a6a0eb8b64e3e48d9814899cffce18a9d"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a6a0eb8b64e3e48d9814899cffce18a9d"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a6a0eb8b64e3e48d9814899cffce18a9d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r494f8ebaad5a45d1880376d0ee5058b5"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aaede0aec15984c1098d3f787487eadca"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aaede0aec15984c1098d3f787487eadca"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aaede0aec15984c1098d3f787487eadca"></a>filenum</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a3fd96945fbea4431886d6696b6ebad47"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a3fd96945fbea4431886d6696b6ebad47"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a3fd96945fbea4431886d6696b6ebad47"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aff82f440a05345c3b282cf08b108daef"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aff82f440a05345c3b282cf08b108daef"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aff82f440a05345c3b282cf08b108daef"></a>文件标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r7051b1ba59de4461907e40067f95e080"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a28af7304847f4870b048a1f654e04670"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a28af7304847f4870b048a1f654e04670"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a28af7304847f4870b048a1f654e04670"></a>dbid</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a74e21035979643bbb5ec802f62212fbc"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a74e21035979643bbb5ec802f62212fbc"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a74e21035979643bbb5ec802f62212fbc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a299c137dfb8e4104a3e000b40717bcb7"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a299c137dfb8e4104a3e000b40717bcb7"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a299c137dfb8e4104a3e000b40717bcb7"></a>数据库标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ra89152ea7c974572999ec48f5d2dd526"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a03fdf2e0c1ee42b7a17eb0a085e333f8"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a03fdf2e0c1ee42b7a17eb0a085e333f8"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a03fdf2e0c1ee42b7a17eb0a085e333f8"></a>spcid</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aa1ba22b20c3a4b6db233d238dae81f25"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aa1ba22b20c3a4b6db233d238dae81f25"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aa1ba22b20c3a4b6db233d238dae81f25"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aea22a4d342344880b57e170c396ace45"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aea22a4d342344880b57e170c396ace45"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aea22a4d342344880b57e170c396ace45"></a>表空间标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_rab32bc9e4c7a47ba895a714621b7ea0c"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ad658c5197a884664a0629dc69feb6085"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ad658c5197a884664a0629dc69feb6085"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ad658c5197a884664a0629dc69feb6085"></a>phyrds</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af76bc113673644d7848a266bab2dbe78"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af76bc113673644d7848a266bab2dbe78"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af76bc113673644d7848a266bab2dbe78"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a78ec70fc287c4b0290d00679fb358b76"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a78ec70fc287c4b0290d00679fb358b76"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a78ec70fc287c4b0290d00679fb358b76"></a>读物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_re5ff21e0448145a6af031d42a472e9f7"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a96b160cd701949819996225e61ba52ef"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a96b160cd701949819996225e61ba52ef"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a96b160cd701949819996225e61ba52ef"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aa05e5ebd332d46d2acee6fa8be789d8b"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aa05e5ebd332d46d2acee6fa8be789d8b"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aa05e5ebd332d46d2acee6fa8be789d8b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a7346b36d76a44c3193a8e9f0236ca1bf"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a7346b36d76a44c3193a8e9f0236ca1bf"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a7346b36d76a44c3193a8e9f0236ca1bf"></a>写物理文件的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_rb841501a6d184ef4b14906f0af2b2c98"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a2e66f72ef7c442d988da5d9a5376d711"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a2e66f72ef7c442d988da5d9a5376d711"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a2e66f72ef7c442d988da5d9a5376d711"></a>phyblkrd</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a0f2c4466632147db8b27d75453de68bb"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a0f2c4466632147db8b27d75453de68bb"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a0f2c4466632147db8b27d75453de68bb"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a7e2b19c352464e0eb84b30034f3d0999"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a7e2b19c352464e0eb84b30034f3d0999"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a7e2b19c352464e0eb84b30034f3d0999"></a>读物理文件块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r2cb94bec8d9b42c6b4f449bddebccf6a"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_afc9303832e8042a8aeca22fe6af62ba0"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_afc9303832e8042a8aeca22fe6af62ba0"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_afc9303832e8042a8aeca22fe6af62ba0"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aefa6f5f15d4a4375b7edfba277db2950"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aefa6f5f15d4a4375b7edfba277db2950"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aefa6f5f15d4a4375b7edfba277db2950"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a92f2bf64030d4ee881fec6a504abe0a7"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a92f2bf64030d4ee881fec6a504abe0a7"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a92f2bf64030d4ee881fec6a504abe0a7"></a>写物理文件块的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ra8680133b18d4f098bc4cd40584e4f26"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af7e8cce487ff46fc92aaae24b9c7b95a"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af7e8cce487ff46fc92aaae24b9c7b95a"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af7e8cce487ff46fc92aaae24b9c7b95a"></a>readtim</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ae74561bddd5941a998c7041299aa6951"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ae74561bddd5941a998c7041299aa6951"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ae74561bddd5941a998c7041299aa6951"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a67dce02260a24a39b4737de8dc420da8"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a67dce02260a24a39b4737de8dc420da8"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a67dce02260a24a39b4737de8dc420da8"></a>读文件的总时长，单位微秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_rd570684a351b40b1928999ed6e70a378"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a1555de92735f4a9dbd67793316c4e5fc"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a1555de92735f4a9dbd67793316c4e5fc"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a1555de92735f4a9dbd67793316c4e5fc"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a2a2fecc1b1214880a8565d884461c2c8"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a2a2fecc1b1214880a8565d884461c2c8"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a2a2fecc1b1214880a8565d884461c2c8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ad7c325e1f141403289bd147abffc097d"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ad7c325e1f141403289bd147abffc097d"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ad7c325e1f141403289bd147abffc097d"></a>写文件的总时长，单位微秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r4d32cc86e65349da8afc49704cd3e06f"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a8cfc0d09a865469cbeaf334c291a1cdd"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a8cfc0d09a865469cbeaf334c291a1cdd"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a8cfc0d09a865469cbeaf334c291a1cdd"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5580d1d5e6424c51b7aec95e3f820c3c"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5580d1d5e6424c51b7aec95e3f820c3c"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5580d1d5e6424c51b7aec95e3f820c3c"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a462772363792473c8ce96f714101d364"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a462772363792473c8ce96f714101d364"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a462772363792473c8ce96f714101d364"></a>读写文件的平均时长，单位微秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r649b438757ba4b4092377a2bf8201245"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aad65cc3c5f06467eaa1b43f8e75eff74"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aad65cc3c5f06467eaa1b43f8e75eff74"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aad65cc3c5f06467eaa1b43f8e75eff74"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5495cf12140a47fdb4fedaf8996f2801"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5495cf12140a47fdb4fedaf8996f2801"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5495cf12140a47fdb4fedaf8996f2801"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a959ec1a8bb4d472db1ae20aa10d03a18"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a959ec1a8bb4d472db1ae20aa10d03a18"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a959ec1a8bb4d472db1ae20aa10d03a18"></a>最后一次读文件时长，单位微秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r4a4b2feb8e3f4a1cba3dc97802a14018"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af347cbfb8ee1444090c52b79fedf0a86"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af347cbfb8ee1444090c52b79fedf0a86"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_af347cbfb8ee1444090c52b79fedf0a86"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a414b25cd682a475cb10d4f3bcaaa8136"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a414b25cd682a475cb10d4f3bcaaa8136"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a414b25cd682a475cb10d4f3bcaaa8136"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a4aa96acf8e8f4c46ab34cf57bcdf06d6"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a4aa96acf8e8f4c46ab34cf57bcdf06d6"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a4aa96acf8e8f4c46ab34cf57bcdf06d6"></a>读写文件的最小时长，单位微秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_r1054669742bb47048ad766ee4ce5f780"><td class="cellrowborder" valign="top" width="27.32%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5f4ec2a06abe4617865f31fa7a7e8743"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5f4ec2a06abe4617865f31fa7a7e8743"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_a5f4ec2a06abe4617865f31fa7a7e8743"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="19.61%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ab575a767bef64b6fb033290177db38b7"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ab575a767bef64b6fb033290177db38b7"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_ab575a767bef64b6fb033290177db38b7"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.06999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aeaaa41ae16ea4b08864776e9be796c4e"><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aeaaa41ae16ea4b08864776e9be796c4e"></a><a name="zh-cn_topic_0283137093_zh-cn_topic_0237122503_zh-cn_topic_0059778743_aeaaa41ae16ea4b08864776e9be796c4e"></a>读写文件的最大时长，单位微秒。</p>
</td>
</tr>
</tbody>
</table>

