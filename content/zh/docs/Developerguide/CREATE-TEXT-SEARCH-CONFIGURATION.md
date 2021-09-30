# CREATE TEXT SEARCH CONFIGURATION<a name="ZH-CN_TOPIC_0289900950"></a>

## 功能描述<a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_s0e4d513f4465404abcdfaf94e7cbef18"></a>

创建新的文本搜索配置。一个文本搜索配置声明一个能将一个字符串划分成符号的文本搜索解析器，加上可以用于确定搜索对哪些标记感兴趣的字典。

## 注意事项<a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_s212243b97a3c488d925beb43fba7c01a"></a>

-   若仅声明分析器，那么新的文本搜索配置初始没有从符号类型到词典的映射， 因此会忽略所有的单词。后面必须调用ALTER TEXT SEARCH CONFIGURATION命令创建映射使配置生效。如果声明了COPY选项，那么会自动拷贝指定的文本搜索配置的解析器、映射、配置选项等信息。
-   若模式名称已给出，那么文本搜索配置会在声明的模式中创建。否则会在当前模式创建。
-   定义文本搜索配置的用户成为其所有者。
-   PARSER和COPY选项是互相排斥的，因为当一个现有配置被复制，其分析器配置也被复制了。
-   若仅声明分析器，那么新的文本搜索配置初始没有从符号类型到词典的映射， 因此会忽略所有的单词。

## 语法格式<a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_sebcad83e099e46b0ba586829e634d144"></a>

```
CREATE TEXT SEARCH CONFIGURATION name 
    ( PARSER = parser_name | COPY = source_config )
    [ WITH ( {configuration_option = value} [, ...] )];
```

## 参数说明<a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_s3935d7de401a4ccd97361e7b2b485805"></a>

-   **name**

    要创建的文本搜索配置的名称。该名称可以有模式修饰。

-   **parser\_name**

    用于该配置的文本搜索分析器的名称。

-   **source\_config**

    要复制的现有文本搜索配置的名称。

-   **configuration\_option**

    文本搜索配置的配置参数，主要是针对parser\_name执行的解析器或者source\_config隐含的解析器而言的。

    取值范围：目前共支持default、ngram两种类型的解析器，其中default类型的解析器没有对应的configuration\_option、ngram类型解析器对应的configuration\_option如[表1](#zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_t0d301ca84e1a4c16ae8bead85aa1a8c3)所示。 

    **表 1**  ngram类型解析器对应的配置参数

    <a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_t0d301ca84e1a4c16ae8bead85aa1a8c3"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_r7358f91c6a344d3c925a1e9a3131e90c"><th class="cellrowborder" valign="top" width="10.45%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a70d80fceef2a43678a68d9d726b1e201"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a70d80fceef2a43678a68d9d726b1e201"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a70d80fceef2a43678a68d9d726b1e201"></a>解析器</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.47%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a2f34f4c0334d454184a3435283061072"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a2f34f4c0334d454184a3435283061072"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a2f34f4c0334d454184a3435283061072"></a>配置参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="37.72%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a9df03cd737914aa88ecf89d869f7bec2"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a9df03cd737914aa88ecf89d869f7bec2"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a9df03cd737914aa88ecf89d869f7bec2"></a>参数描述</p>
    </th>
    <th class="cellrowborder" valign="top" width="36.36%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_ac55de7ecda5d42bc92dec9a7d12cf07f"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_ac55de7ecda5d42bc92dec9a7d12cf07f"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_ac55de7ecda5d42bc92dec9a7d12cf07f"></a>取值范围</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_r70279f6e42874432aea8dc060ef14816"><td class="cellrowborder" rowspan="3" valign="top" width="10.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_zh-cn_topic_0058965729_p796264012457"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_zh-cn_topic_0058965729_p796264012457"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_zh-cn_topic_0058965729_p796264012457"></a>ngram</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a88aacea507174f06908cbceb9ee662f7"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a88aacea507174f06908cbceb9ee662f7"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a88aacea507174f06908cbceb9ee662f7"></a>gram_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="37.72%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a6837bb5d15cb4e54984b7a899d208f88"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a6837bb5d15cb4e54984b7a899d208f88"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a6837bb5d15cb4e54984b7a899d208f88"></a>分词长度。</p>
    </td>
    <td class="cellrowborder" valign="top" width="36.36%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a66cb45cb1b524d90acbaf6e014833738"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a66cb45cb1b524d90acbaf6e014833738"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a66cb45cb1b524d90acbaf6e014833738"></a>正整数，1~4</p>
    <p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a97173f63b7b74ab5911fad954606068e"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a97173f63b7b74ab5911fad954606068e"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a97173f63b7b74ab5911fad954606068e"></a>默认值：2</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_rab1926ed9433488b96d36ae2bbedd319"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a077d45984066428eab0ac28303b22c9c"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a077d45984066428eab0ac28303b22c9c"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a077d45984066428eab0ac28303b22c9c"></a>punctuation_ignore</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_af3284706279547098a0e2b1bc36b9d83"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_af3284706279547098a0e2b1bc36b9d83"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_af3284706279547098a0e2b1bc36b9d83"></a>是否忽略标点符号。</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_u7626c646b9b64783a2c393bcf568bad6"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_u7626c646b9b64783a2c393bcf568bad6"></a><ul id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_u7626c646b9b64783a2c393bcf568bad6"><li>true（默认值）：忽略标点符号。</li><li>false：不忽略标点符号。</li></ul>
    </td>
    </tr>
    <tr id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_r21a0acec3b1d4f209222ce6cb5c5bd77"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a5fc3519aee8043039ee6609a557a3230"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a5fc3519aee8043039ee6609a557a3230"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_a5fc3519aee8043039ee6609a557a3230"></a>grapsymbol_ignore</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_aea2627ca36d543049f7b51963cbbe547"><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_aea2627ca36d543049f7b51963cbbe547"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_aea2627ca36d543049f7b51963cbbe547"></a>是否忽略图形化字符。</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_u7ae471a522694b5d996126575b808f03"></a><a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_u7ae471a522694b5d996126575b808f03"></a><ul id="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_u7ae471a522694b5d996126575b808f03"><li>true：忽略图形化字符。</li><li>false（默认值）：不忽略图形化字符。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>


## 示例<a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_sc3a4aef5c0c0420eaf5a2e67097004a2"></a>

```
--创建文本搜索配置。
openGauss=# CREATE TEXT SEARCH CONFIGURATION ngram2 (parser=ngram) WITH (gram_size = 2, grapsymbol_ignore = false);

--创建文本搜索配置。
openGauss=# CREATE TEXT SEARCH CONFIGURATION ngram3 (copy=ngram2) WITH (gram_size = 2, grapsymbol_ignore = false);

--添加类型映射。
openGauss=# ALTER TEXT SEARCH CONFIGURATION ngram2 ADD MAPPING FOR multisymbol WITH simple;

--创建用户joe。
openGauss=# CREATE USER joe IDENTIFIED BY 'xxxxxxxxx';

--修改文本搜索配置的所有者。
openGauss=# ALTER TEXT SEARCH CONFIGURATION ngram2 OWNER TO joe;

--修改文本搜索配置的schema。
openGauss=# ALTER TEXT SEARCH CONFIGURATION ngram2 SET SCHEMA joe;

--重命名文本搜索配置。
openGauss=# ALTER TEXT SEARCH CONFIGURATION joe.ngram2 RENAME TO ngram_2;

--删除类型映射。
openGauss=# ALTER TEXT SEARCH CONFIGURATION joe.ngram_2 DROP MAPPING IF EXISTS FOR multisymbol;

--删除文本搜索配置。
openGauss=# DROP TEXT SEARCH CONFIGURATION joe.ngram_2;
openGauss=# DROP TEXT SEARCH CONFIGURATION ngram3;

--删除Schema及用户joe。
openGauss=# DROP SCHEMA IF EXISTS joe CASCADE;
openGauss=# DROP ROLE IF EXISTS joe;
```

## 相关链接<a name="zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_s0205fc5b18e94f51af91402258be4747"></a>

[ALTER TEXT SEARCH CONFIGURATION](ALTER-TEXT-SEARCH-CONFIGURATION.md)，  [DROP TEXT SEARCH CONFIGURATION](DROP-TEXT-SEARCH-CONFIGURATION.md)

