# CREATE DATABASE<a name="ZH-CN_TOPIC_0289900066"></a>

## 功能描述<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

创建一个新的数据库。缺省情况下新数据库将通过复制标准系统数据库template0来创建，且仅支持使用template0来创建。

## 注意事项<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   只有拥有CREATEDB权限的用户才可以创建新数据库，系统管理员默认拥有此权限。
-   不能在事务块中执行创建数据库语句。
-   在创建数据库过程中，出现类似“Permission denied”的错误提示，可能是由于文件系统上数据目录的权限不足。出现类似“No space left on device”的错误提示，可能是由于磁盘满引起的。

## 语法格式<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE [IF NOT EXISTS] database_name
    [ [ WITH ] { [ OWNER [=] user_name ] |
               [ TEMPLATE [=] template ] |
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |
               [ DBCOMPATIBILITY [=] compatibilty_type ] |
               [ TABLESPACE [=] tablespace_name ] |
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];
```

## 参数说明<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

-   **database\_name**

    数据库名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **OWNER \[ = \] user\_name**

    数据库所有者。缺省时，新数据库的所有者是当前用户。

    取值范围：已存在的用户名。

-   **TEMPLATE \[ = \] template**

    模板名。即从哪个模板创建新数据库。openGauss采用从模板数据库复制的方式来创建新的数据库。初始时，openGauss包含两个模板数据库template0、template1，以及一个默认的用户数据库postgres。

    取值范围：仅template0。

- **ENCODING \[ = \] encoding**

  指定数据库使用的字符编码，可以是字符串（如'SQL\_ASCII'）、整数编号。

  不指定时，默认使用模版数据库的编码。模板数据库template0和template1的编码默认与操作系统环境相关。template1不允许修改字符编码，因此若要变更编码，请使用template0创建数据库。

  常用取值：GBK、UTF8、Latin1、GB10830等，具体支持的字符集如下：

  **表 1**  openGauss字符集

  <a name="table78123179517"></a>
  <table><thead align="left"><tr id="row75301618757"><th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.1"><p id="p105308181954"><a name="p105308181954"></a><a name="p105308181954"></a><strong id="b175311418657"><a name="b175311418657"></a><a name="b175311418657"></a>名称</strong></p>
  </th>
  <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.2"><p id="p15531318453"><a name="p15531318453"></a><a name="p15531318453"></a><strong id="b853151818519"><a name="b853151818519"></a><a name="b853151818519"></a>描述</strong></p>
  </th>
  <th class="cellrowborder" valign="top" width="14.53061224489796%" id="mcps1.2.8.1.3"><p id="p1053116189517"><a name="p1053116189517"></a><a name="p1053116189517"></a><strong id="b85317181758"><a name="b85317181758"></a><a name="b85317181758"></a>语言</strong></p>
  </th>
  <th class="cellrowborder" valign="top" width="14.040816326530612%" id="mcps1.2.8.1.4"><p id="p7531191813519"><a name="p7531191813519"></a><a name="p7531191813519"></a><strong id="b653120184515"><a name="b653120184515"></a><a name="b653120184515"></a>是否服务器端？</strong></p>
  </th>
  <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.5"><p id="p17531171813511"><a name="p17531171813511"></a><a name="p17531171813511"></a><strong id="b153114181759"><a name="b153114181759"></a><a name="b153114181759"></a>ICU?</strong></p>
  </th>
  <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.6"><p id="p1253116181357"><a name="p1253116181357"></a><a name="p1253116181357"></a><strong id="b115311018954"><a name="b115311018954"></a><a name="b115311018954"></a>字节/字符</strong></p>
  </th>
  <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.7"><p id="p5532161815514"><a name="p5532161815514"></a><a name="p5532161815514"></a><strong id="b1753211187516"><a name="b1753211187516"></a><a name="b1753211187516"></a>别名</strong></p>
  </th>
  </tr>
  </thead>
  <tbody><tr id="row5532151818515"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p115322183514"><a name="p115322183514"></a><a name="p115322183514"></a>BIG5</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p18532818554"><a name="p18532818554"></a><a name="p18532818554"></a>Big Five</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p0532161814511"><a name="p0532161814511"></a><a name="p0532161814511"></a>繁体中文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p453219186515"><a name="p453219186515"></a><a name="p453219186515"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p55321018851"><a name="p55321018851"></a><a name="p55321018851"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1353220187514"><a name="p1353220187514"></a><a name="p1353220187514"></a>1-2</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p105329180512"><a name="p105329180512"></a><a name="p105329180512"></a>WIN950，Windows950</p>
  </td>
  </tr>
  <tr id="row1353215183517"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p85338186510"><a name="p85338186510"></a><a name="p85338186510"></a>EUC_CN</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p2533318259"><a name="p2533318259"></a><a name="p2533318259"></a>扩展UNIX编码-中国</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p105337181650"><a name="p105337181650"></a><a name="p105337181650"></a>简体中文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p125335181519"><a name="p125335181519"></a><a name="p125335181519"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p17533318355"><a name="p17533318355"></a><a name="p17533318355"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p2053318181511"><a name="p2053318181511"></a><a name="p2053318181511"></a>1-3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1533111820517"><a name="p1533111820517"></a><a name="p1533111820517"></a>-</p>
  </td>
  </tr>
  <tr id="row4533121817510"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p12533131811511"><a name="p12533131811511"></a><a name="p12533131811511"></a>EUC_JP</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1153301819520"><a name="p1153301819520"></a><a name="p1153301819520"></a>扩展UNIX编码-日本</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p75348184511"><a name="p75348184511"></a><a name="p75348184511"></a>日文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p125348181059"><a name="p125348181059"></a><a name="p125348181059"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p14534181816516"><a name="p14534181816516"></a><a name="p14534181816516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p165342182051"><a name="p165342182051"></a><a name="p165342182051"></a>1-3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p16534111819516"><a name="p16534111819516"></a><a name="p16534111819516"></a>-</p>
  </td>
  </tr>
  <tr id="row18534518153"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1534418459"><a name="p1534418459"></a><a name="p1534418459"></a>EUC_JIS_2004</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p7534318657"><a name="p7534318657"></a><a name="p7534318657"></a>扩展UNIX编码-日本, JIS X 0213</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p125341818552"><a name="p125341818552"></a><a name="p125341818552"></a>日文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p13535151820513"><a name="p13535151820513"></a><a name="p13535151820513"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p55351618351"><a name="p55351618351"></a><a name="p55351618351"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p135351018851"><a name="p135351018851"></a><a name="p135351018851"></a>1-3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1953512181452"><a name="p1953512181452"></a><a name="p1953512181452"></a>-</p>
  </td>
  </tr>
  <tr id="row1253519181559"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p3535201813516"><a name="p3535201813516"></a><a name="p3535201813516"></a>EUC_KR</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p453512184519"><a name="p453512184519"></a><a name="p453512184519"></a>扩展UNIX编码-韩国</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p2053519181852"><a name="p2053519181852"></a><a name="p2053519181852"></a>韩文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p2535111812513"><a name="p2535111812513"></a><a name="p2535111812513"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1653610181251"><a name="p1653610181251"></a><a name="p1653610181251"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p85361818257"><a name="p85361818257"></a><a name="p85361818257"></a>1-3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p753612181355"><a name="p753612181355"></a><a name="p753612181355"></a>-</p>
  </td>
  </tr>
  <tr id="row4536171811514"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p185361181550"><a name="p185361181550"></a><a name="p185361181550"></a>EUC_TW</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p13536518654"><a name="p13536518654"></a><a name="p13536518654"></a>扩展UNIX编码-台湾</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1353610188514"><a name="p1353610188514"></a><a name="p1353610188514"></a>繁体中文，台湾话</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p65363189512"><a name="p65363189512"></a><a name="p65363189512"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p65371518558"><a name="p65371518558"></a><a name="p65371518558"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p8537191817510"><a name="p8537191817510"></a><a name="p8537191817510"></a>1-3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p15537171814520"><a name="p15537171814520"></a><a name="p15537171814520"></a>-</p>
  </td>
  </tr>
  <tr id="row14537318853"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p20537161819516"><a name="p20537161819516"></a><a name="p20537161819516"></a>GB18030</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p19537718856"><a name="p19537718856"></a><a name="p19537718856"></a>国家标准</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p55375181454"><a name="p55375181454"></a><a name="p55375181454"></a>中文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p165371518757"><a name="p165371518757"></a><a name="p165371518757"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p18538918456"><a name="p18538918456"></a><a name="p18538918456"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p16538191811512"><a name="p16538191811512"></a><a name="p16538191811512"></a>1-4</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1553814181058"><a name="p1553814181058"></a><a name="p1553814181058"></a>-</p>
  </td>
  </tr>
  <tr id="row2538161816511"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p853841815519"><a name="p853841815519"></a><a name="p853841815519"></a>GBK</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p25398185512"><a name="p25398185512"></a><a name="p25398185512"></a>扩展国家标准</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p13539161816520"><a name="p13539161816520"></a><a name="p13539161816520"></a>简体中文</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p2539131810513"><a name="p2539131810513"></a><a name="p2539131810513"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p053951815510"><a name="p053951815510"></a><a name="p053951815510"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35391818754"><a name="p35391818754"></a><a name="p35391818754"></a>1-2</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p453971811510"><a name="p453971811510"></a><a name="p453971811510"></a>WIN936，Windows936</p>
  </td>
  </tr>
  <tr id="row153961813513"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1453914181854"><a name="p1453914181854"></a><a name="p1453914181854"></a>ISO_8859_5</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p8539131814513"><a name="p8539131814513"></a><a name="p8539131814513"></a>ISO 8859-5, ECMA 113</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p195406182059"><a name="p195406182059"></a><a name="p195406182059"></a>拉丁语/西里尔语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p195401718256"><a name="p195401718256"></a><a name="p195401718256"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p55406181056"><a name="p55406181056"></a><a name="p55406181056"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35409182053"><a name="p35409182053"></a><a name="p35409182053"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p954011181512"><a name="p954011181512"></a><a name="p954011181512"></a>-</p>
  </td>
  </tr>
  <tr id="row175405189517"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p754014189510"><a name="p754014189510"></a><a name="p754014189510"></a>ISO_8859_6</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p125402018853"><a name="p125402018853"></a><a name="p125402018853"></a>ISO 8859-6, ECMA 114</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1954016189511"><a name="p1954016189511"></a><a name="p1954016189511"></a>拉丁语/阿拉伯语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p85406181957"><a name="p85406181957"></a><a name="p85406181957"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p15401618957"><a name="p15401618957"></a><a name="p15401618957"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p05406183517"><a name="p05406183517"></a><a name="p05406183517"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p11541181816510"><a name="p11541181816510"></a><a name="p11541181816510"></a>-</p>
  </td>
  </tr>
  <tr id="row85419182514"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p115411218156"><a name="p115411218156"></a><a name="p115411218156"></a>ISO_8859_7</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1254114181957"><a name="p1254114181957"></a><a name="p1254114181957"></a>ISO 8859-7, ECMA 118</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p454118184512"><a name="p454118184512"></a><a name="p454118184512"></a>拉丁语/希腊语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p154101820518"><a name="p154101820518"></a><a name="p154101820518"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p154115186512"><a name="p154115186512"></a><a name="p154115186512"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1854101812511"><a name="p1854101812511"></a><a name="p1854101812511"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p654114188515"><a name="p654114188515"></a><a name="p654114188515"></a>-</p>
  </td>
  </tr>
  <tr id="row1354114181513"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p9542151817512"><a name="p9542151817512"></a><a name="p9542151817512"></a>ISO_8859_8</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1354271812512"><a name="p1354271812512"></a><a name="p1354271812512"></a>ISO 8859-8, ECMA 121</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p754213181054"><a name="p754213181054"></a><a name="p754213181054"></a>拉丁语/希伯来语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1954261818518"><a name="p1954261818518"></a><a name="p1954261818518"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16542118857"><a name="p16542118857"></a><a name="p16542118857"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p13542318653"><a name="p13542318653"></a><a name="p13542318653"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p13542118857"><a name="p13542118857"></a><a name="p13542118857"></a>-</p>
  </td>
  </tr>
  <tr id="row195426187515"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p135428183517"><a name="p135428183517"></a><a name="p135428183517"></a>JOHAB</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p155429181754"><a name="p155429181754"></a><a name="p155429181754"></a>JOHAB</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p155429181250"><a name="p155429181250"></a><a name="p155429181250"></a>韩语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1154241810519"><a name="p1154241810519"></a><a name="p1154241810519"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16542218556"><a name="p16542218556"></a><a name="p16542218556"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p854211181359"><a name="p854211181359"></a><a name="p854211181359"></a>1-3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p11543131816515"><a name="p11543131816515"></a><a name="p11543131816515"></a>-</p>
  </td>
  </tr>
  <tr id="row754361817516"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p15434180513"><a name="p15434180513"></a><a name="p15434180513"></a>KOI8R</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p15543101818511"><a name="p15543101818511"></a><a name="p15543101818511"></a>KOI8-R</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1354311818516"><a name="p1354311818516"></a><a name="p1354311818516"></a>西里尔语（俄语）</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p155434180514"><a name="p155434180514"></a><a name="p155434180514"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1354312182055"><a name="p1354312182055"></a><a name="p1354312182055"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p654381819512"><a name="p654381819512"></a><a name="p654381819512"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p5543121816518"><a name="p5543121816518"></a><a name="p5543121816518"></a>KOI8</p>
  </td>
  </tr>
  <tr id="row18543201817511"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p195441818959"><a name="p195441818959"></a><a name="p195441818959"></a>KOI8U</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p10544151816516"><a name="p10544151816516"></a><a name="p10544151816516"></a>KOI8-U</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p185441218559"><a name="p185441218559"></a><a name="p185441218559"></a>西里尔语（乌克兰语）</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p135443187516"><a name="p135443187516"></a><a name="p135443187516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p2054417181757"><a name="p2054417181757"></a><a name="p2054417181757"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1954419189517"><a name="p1954419189517"></a><a name="p1954419189517"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p12544111814519"><a name="p12544111814519"></a><a name="p12544111814519"></a>-</p>
  </td>
  </tr>
  <tr id="row1254510181759"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p254571810519"><a name="p254571810519"></a><a name="p254571810519"></a>LATIN1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p135454181452"><a name="p135454181452"></a><a name="p135454181452"></a>ISO 8859-1, ECMA 94</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p165451918856"><a name="p165451918856"></a><a name="p165451918856"></a>西欧</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p7545218758"><a name="p7545218758"></a><a name="p7545218758"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p185452181559"><a name="p185452181559"></a><a name="p185452181559"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p854514181556"><a name="p854514181556"></a><a name="p854514181556"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p115451918955"><a name="p115451918955"></a><a name="p115451918955"></a>ISO88591</p>
  </td>
  </tr>
  <tr id="row55460187516"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p15461118758"><a name="p15461118758"></a><a name="p15461118758"></a>LATIN2</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p145464181556"><a name="p145464181556"></a><a name="p145464181556"></a>ISO 8859-2, ECMA 94</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p4546518457"><a name="p4546518457"></a><a name="p4546518457"></a>中欧</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p2546318155"><a name="p2546318155"></a><a name="p2546318155"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1754615181510"><a name="p1754615181510"></a><a name="p1754615181510"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p3547171815516"><a name="p3547171815516"></a><a name="p3547171815516"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p45474182513"><a name="p45474182513"></a><a name="p45474182513"></a>ISO88592</p>
  </td>
  </tr>
  <tr id="row165476183518"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p85476189516"><a name="p85476189516"></a><a name="p85476189516"></a>LATIN3</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p3547131810510"><a name="p3547131810510"></a><a name="p3547131810510"></a>ISO 8859-3, ECMA 94</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p13547121811510"><a name="p13547121811510"></a><a name="p13547121811510"></a>南欧</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p65482187515"><a name="p65482187515"></a><a name="p65482187515"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p154815182516"><a name="p154815182516"></a><a name="p154815182516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p754812182052"><a name="p754812182052"></a><a name="p754812182052"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p10548418157"><a name="p10548418157"></a><a name="p10548418157"></a>ISO88593</p>
  </td>
  </tr>
  <tr id="row1548101814517"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1654811181258"><a name="p1654811181258"></a><a name="p1654811181258"></a>LATIN4</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p12548818555"><a name="p12548818555"></a><a name="p12548818555"></a>ISO 8859-4, ECMA 94</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p154818185519"><a name="p154818185519"></a><a name="p154818185519"></a>北欧</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p125489187514"><a name="p125489187514"></a><a name="p125489187514"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1954918180515"><a name="p1954918180515"></a><a name="p1954918180515"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p205491181513"><a name="p205491181513"></a><a name="p205491181513"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p10549161812513"><a name="p10549161812513"></a><a name="p10549161812513"></a>ISO88594</p>
  </td>
  </tr>
  <tr id="row1854914181659"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p125491184515"><a name="p125491184515"></a><a name="p125491184515"></a>LATIN5</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p115491618954"><a name="p115491618954"></a><a name="p115491618954"></a>ISO 8859-9, ECMA 128</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p154911181150"><a name="p154911181150"></a><a name="p154911181150"></a>土耳其语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p145509185514"><a name="p145509185514"></a><a name="p145509185514"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p15550218959"><a name="p15550218959"></a><a name="p15550218959"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1255016186515"><a name="p1255016186515"></a><a name="p1255016186515"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p165501918359"><a name="p165501918359"></a><a name="p165501918359"></a>ISO88599</p>
  </td>
  </tr>
  <tr id="row10550101817514"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p35506181559"><a name="p35506181559"></a><a name="p35506181559"></a>LATIN6</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p12550181810518"><a name="p12550181810518"></a><a name="p12550181810518"></a>ISO 8859-10, ECMA 144</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p175505185520"><a name="p175505185520"></a><a name="p175505185520"></a>日耳曼语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p955161815511"><a name="p955161815511"></a><a name="p955161815511"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p145511118250"><a name="p145511118250"></a><a name="p145511118250"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p155115184510"><a name="p155115184510"></a><a name="p155115184510"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p255111186510"><a name="p255111186510"></a><a name="p255111186510"></a>ISO885910</p>
  </td>
  </tr>
  <tr id="row15551618355"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1855141813510"><a name="p1855141813510"></a><a name="p1855141813510"></a>LATIN7</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p9551318154"><a name="p9551318154"></a><a name="p9551318154"></a>ISO 8859-13</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p555191814515"><a name="p555191814515"></a><a name="p555191814515"></a>波罗的海</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p105512186513"><a name="p105512186513"></a><a name="p105512186513"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p165511618555"><a name="p165511618555"></a><a name="p165511618555"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p155519184510"><a name="p155519184510"></a><a name="p155519184510"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p18552181820513"><a name="p18552181820513"></a><a name="p18552181820513"></a>ISO885913</p>
  </td>
  </tr>
  <tr id="row185521518856"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1455210181455"><a name="p1455210181455"></a><a name="p1455210181455"></a>LATIN8</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p16552141819513"><a name="p16552141819513"></a><a name="p16552141819513"></a>ISO 8859-14</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1155271812518"><a name="p1155271812518"></a><a name="p1155271812518"></a>凯尔特语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p4553318450"><a name="p4553318450"></a><a name="p4553318450"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p055371811514"><a name="p055371811514"></a><a name="p055371811514"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p555315189517"><a name="p555315189517"></a><a name="p555315189517"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1855314188512"><a name="p1855314188512"></a><a name="p1855314188512"></a>ISO885914</p>
  </td>
  </tr>
  <tr id="row16553418453"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p2055311181659"><a name="p2055311181659"></a><a name="p2055311181659"></a>LATIN9</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1155315182515"><a name="p1155315182515"></a><a name="p1155315182515"></a>ISO 8859-15</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p15536181956"><a name="p15536181956"></a><a name="p15536181956"></a>带欧罗巴和口音的LATIN1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p855313189510"><a name="p855313189510"></a><a name="p855313189510"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1455321818516"><a name="p1455321818516"></a><a name="p1455321818516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p115536184510"><a name="p115536184510"></a><a name="p115536184510"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p4553191816518"><a name="p4553191816518"></a><a name="p4553191816518"></a>ISO885915</p>
  </td>
  </tr>
  <tr id="row55531518357"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p4554218453"><a name="p4554218453"></a><a name="p4554218453"></a>LATIN10</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p115541183515"><a name="p115541183515"></a><a name="p115541183515"></a>ISO 8859-16, ASRO SR 14111</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p14554151815513"><a name="p14554151815513"></a><a name="p14554151815513"></a>罗马尼亚语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p655412181857"><a name="p655412181857"></a><a name="p655412181857"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p115542181754"><a name="p115542181754"></a><a name="p115542181754"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35541518253"><a name="p35541518253"></a><a name="p35541518253"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1055421812510"><a name="p1055421812510"></a><a name="p1055421812510"></a>ISO885916</p>
  </td>
  </tr>
  <tr id="row755411186511"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p195543181252"><a name="p195543181252"></a><a name="p195543181252"></a>MULE_INTERNAL</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p655410181154"><a name="p655410181154"></a><a name="p655410181154"></a>Mule内部编码</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p85557181514"><a name="p85557181514"></a><a name="p85557181514"></a>多语种编辑器</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p18555618358"><a name="p18555618358"></a><a name="p18555618358"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p7555141811517"><a name="p7555141811517"></a><a name="p7555141811517"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p95554182056"><a name="p95554182056"></a><a name="p95554182056"></a>1-4</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p8555181816513"><a name="p8555181816513"></a><a name="p8555181816513"></a>-</p>
  </td>
  </tr>
  <tr id="row55555184519"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p35556181517"><a name="p35556181517"></a><a name="p35556181517"></a>SJIS</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1655611182054"><a name="p1655611182054"></a><a name="p1655611182054"></a>Shift JIS</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p19556181818512"><a name="p19556181818512"></a><a name="p19556181818512"></a>日语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p255610184516"><a name="p255610184516"></a><a name="p255610184516"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1055681813516"><a name="p1055681813516"></a><a name="p1055681813516"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p455631813517"><a name="p455631813517"></a><a name="p455631813517"></a>1-2</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p175564181352"><a name="p175564181352"></a><a name="p175564181352"></a>Mskanji，ShiftJIS，WIN932，Windows932</p>
  </td>
  </tr>
  <tr id="row17556161812515"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p18557161816514"><a name="p18557161816514"></a><a name="p18557161816514"></a>SHIFT_JIS_2004</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p185578186511"><a name="p185578186511"></a><a name="p185578186511"></a>Shift JIS, JIS X 0213</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p95577186519"><a name="p95577186519"></a><a name="p95577186519"></a>日语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1255712187513"><a name="p1255712187513"></a><a name="p1255712187513"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p12557418255"><a name="p12557418255"></a><a name="p12557418255"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p115573182510"><a name="p115573182510"></a><a name="p115573182510"></a>1-2</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p115574181453"><a name="p115574181453"></a><a name="p115574181453"></a>-</p>
  </td>
  </tr>
  <tr id="row19557101810519"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p115575181959"><a name="p115575181959"></a><a name="p115575181959"></a>SQL_ASCII</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p55573181513"><a name="p55573181513"></a><a name="p55573181513"></a>未指定（见文本）</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p165581181856"><a name="p165581181856"></a><a name="p165581181856"></a><strong id="b1155861813519"><a name="b1155861813519"></a><a name="b1155861813519"></a><em id="i1355814181353"><a name="i1355814181353"></a><a name="i1355814181353"></a>任意</em></strong></p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p185586182514"><a name="p185586182514"></a><a name="p185586182514"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p855891812519"><a name="p855891812519"></a><a name="p855891812519"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p15589181750"><a name="p15589181750"></a><a name="p15589181750"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p2055816187510"><a name="p2055816187510"></a><a name="p2055816187510"></a>-</p>
  </td>
  </tr>
  <tr id="row1955841812519"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p955819181655"><a name="p955819181655"></a><a name="p955819181655"></a>UHC</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1155815185519"><a name="p1155815185519"></a><a name="p1155815185519"></a>统一韩语编码</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1855818184510"><a name="p1855818184510"></a><a name="p1855818184510"></a>韩语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p115584183517"><a name="p115584183517"></a><a name="p115584183517"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p11558141818517"><a name="p11558141818517"></a><a name="p11558141818517"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35596189516"><a name="p35596189516"></a><a name="p35596189516"></a>1-2</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p8559618750"><a name="p8559618750"></a><a name="p8559618750"></a>WIN949，Windows949</p>
  </td>
  </tr>
  <tr id="row175591518459"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1955915182510"><a name="p1955915182510"></a><a name="p1955915182510"></a>UTF8</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p205599189510"><a name="p205599189510"></a><a name="p205599189510"></a>Unicode, 8-bit</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p19559171813518"><a name="p19559171813518"></a><a name="p19559171813518"></a><strong id="b65591187516"><a name="b65591187516"></a><a name="b65591187516"></a><em id="i155961819510"><a name="i155961819510"></a><a name="i155961819510"></a>所有</em></strong></p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1056071812514"><a name="p1056071812514"></a><a name="p1056071812514"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p125602181053"><a name="p125602181053"></a><a name="p125602181053"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1856012181454"><a name="p1856012181454"></a><a name="p1856012181454"></a>1-4</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p18560171811520"><a name="p18560171811520"></a><a name="p18560171811520"></a>Unicode</p>
  </td>
  </tr>
  <tr id="row75601418455"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p35601018354"><a name="p35601018354"></a><a name="p35601018354"></a>WIN866</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1356018188517"><a name="p1356018188517"></a><a name="p1356018188517"></a>Windows CP866</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p656119187516"><a name="p656119187516"></a><a name="p656119187516"></a>西里尔语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p155611418158"><a name="p155611418158"></a><a name="p155611418158"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p556171811512"><a name="p556171811512"></a><a name="p556171811512"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p185611318851"><a name="p185611318851"></a><a name="p185611318851"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p35613181054"><a name="p35613181054"></a><a name="p35613181054"></a>ALT</p>
  </td>
  </tr>
  <tr id="row5561018956"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p75619183518"><a name="p75619183518"></a><a name="p75619183518"></a>WIN874</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p356191816510"><a name="p356191816510"></a><a name="p356191816510"></a>Windows CP874</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p15562018854"><a name="p15562018854"></a><a name="p15562018854"></a>泰语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1556211189516"><a name="p1556211189516"></a><a name="p1556211189516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p175623187511"><a name="p175623187511"></a><a name="p175623187511"></a>否</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p956220184520"><a name="p956220184520"></a><a name="p956220184520"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p6562418851"><a name="p6562418851"></a><a name="p6562418851"></a>-</p>
  </td>
  </tr>
  <tr id="row135631418653"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p195637181653"><a name="p195637181653"></a><a name="p195637181653"></a>WIN1250</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p556318181510"><a name="p556318181510"></a><a name="p556318181510"></a>Windows CP1250</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p55637184516"><a name="p55637184516"></a><a name="p55637184516"></a>中欧</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p185631218859"><a name="p185631218859"></a><a name="p185631218859"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p10563101812513"><a name="p10563101812513"></a><a name="p10563101812513"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p16563718259"><a name="p16563718259"></a><a name="p16563718259"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p256417183517"><a name="p256417183517"></a><a name="p256417183517"></a>-</p>
  </td>
  </tr>
  <tr id="row156415186512"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p856413180519"><a name="p856413180519"></a><a name="p856413180519"></a>WIN1251</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p75647188514"><a name="p75647188514"></a><a name="p75647188514"></a>Windows CP1251</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p456419181453"><a name="p456419181453"></a><a name="p456419181453"></a>西里尔语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1456412181253"><a name="p1456412181253"></a><a name="p1456412181253"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16564418253"><a name="p16564418253"></a><a name="p16564418253"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p156420183511"><a name="p156420183511"></a><a name="p156420183511"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p456531810512"><a name="p456531810512"></a><a name="p456531810512"></a>WIN</p>
  </td>
  </tr>
  <tr id="row155659181953"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p5565518053"><a name="p5565518053"></a><a name="p5565518053"></a>WIN1252</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p356515187511"><a name="p356515187511"></a><a name="p356515187511"></a>Windows CP1252</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p145651218857"><a name="p145651218857"></a><a name="p145651218857"></a>西欧</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p856531820515"><a name="p856531820515"></a><a name="p856531820515"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1656561818516"><a name="p1656561818516"></a><a name="p1656561818516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p12565018159"><a name="p12565018159"></a><a name="p12565018159"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p65661418959"><a name="p65661418959"></a><a name="p65661418959"></a>-</p>
  </td>
  </tr>
  <tr id="row7566191811514"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1656613181352"><a name="p1656613181352"></a><a name="p1656613181352"></a>WIN1253</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p95665188514"><a name="p95665188514"></a><a name="p95665188514"></a>Windows CP1253</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p656631812519"><a name="p656631812519"></a><a name="p656631812519"></a>希腊语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p356711181515"><a name="p356711181515"></a><a name="p356711181515"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p85671918054"><a name="p85671918054"></a><a name="p85671918054"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1556720188513"><a name="p1556720188513"></a><a name="p1556720188513"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1256717181852"><a name="p1256717181852"></a><a name="p1256717181852"></a>-</p>
  </td>
  </tr>
  <tr id="row75671318050"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p656715181551"><a name="p656715181551"></a><a name="p656715181551"></a>WIN1254</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p256813185514"><a name="p256813185514"></a><a name="p256813185514"></a>Windows CP1254</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p65686188514"><a name="p65686188514"></a><a name="p65686188514"></a>土耳其语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p756821817510"><a name="p756821817510"></a><a name="p756821817510"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16568191818518"><a name="p16568191818518"></a><a name="p16568191818518"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1856831817511"><a name="p1856831817511"></a><a name="p1856831817511"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p3568318759"><a name="p3568318759"></a><a name="p3568318759"></a>-</p>
  </td>
  </tr>
  <tr id="row8568818451"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p2568718457"><a name="p2568718457"></a><a name="p2568718457"></a>WIN1255</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p165681318955"><a name="p165681318955"></a><a name="p165681318955"></a>Windows CP1255</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p13569171813513"><a name="p13569171813513"></a><a name="p13569171813513"></a>希伯来语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p10569018955"><a name="p10569018955"></a><a name="p10569018955"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p3569718551"><a name="p3569718551"></a><a name="p3569718551"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p95695183520"><a name="p95695183520"></a><a name="p95695183520"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p356916181517"><a name="p356916181517"></a><a name="p356916181517"></a>-</p>
  </td>
  </tr>
  <tr id="row115691518458"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1756911182512"><a name="p1756911182512"></a><a name="p1756911182512"></a>WIN1256</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p3569141811511"><a name="p3569141811511"></a><a name="p3569141811511"></a>Windows CP1256</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1957015182056"><a name="p1957015182056"></a><a name="p1957015182056"></a>阿拉伯语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p16570818555"><a name="p16570818555"></a><a name="p16570818555"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p205707187515"><a name="p205707187515"></a><a name="p205707187515"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p65701418056"><a name="p65701418056"></a><a name="p65701418056"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1757013181155"><a name="p1757013181155"></a><a name="p1757013181155"></a>-</p>
  </td>
  </tr>
  <tr id="row1357017181957"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p10570191810516"><a name="p10570191810516"></a><a name="p10570191810516"></a>WIN1257</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p125705184517"><a name="p125705184517"></a><a name="p125705184517"></a>Windows CP1257</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1957013186513"><a name="p1957013186513"></a><a name="p1957013186513"></a>波罗的海</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1957016182516"><a name="p1957016182516"></a><a name="p1957016182516"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p35700181752"><a name="p35700181752"></a><a name="p35700181752"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1357051813519"><a name="p1357051813519"></a><a name="p1357051813519"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p457001815516"><a name="p457001815516"></a><a name="p457001815516"></a>-</p>
  </td>
  </tr>
  <tr id="row157115181055"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p457118181158"><a name="p457118181158"></a><a name="p457118181158"></a>WIN1258</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p2571171816515"><a name="p2571171816515"></a><a name="p2571171816515"></a>Windows CP1258</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p657114181951"><a name="p657114181951"></a><a name="p657114181951"></a>越南语</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p05716186519"><a name="p05716186519"></a><a name="p05716186519"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p185711718155"><a name="p185711718155"></a><a name="p185711718155"></a>是</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1857121818514"><a name="p1857121818514"></a><a name="p1857121818514"></a>1</p>
  </td>
  <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p9571018856"><a name="p9571018856"></a><a name="p9571018856"></a>ABC, TCVN，TCVN5712，VSCII</p>
  </td>
  </tr>
  </tbody>
  </table>

  >![](public_sys-resources/icon-caution.gif) **注意：** 
  >需要注意并非所有的客户端API都支持上面列出的字符集。
  >SQL\_ASCII设置与其他设置表现得相当不同。如果服务器字符集是SQL\_ASCII，服务器把字节值0-127根据 ASCII标准解释，而字节值128-255则当作无法解析的字符。如果设置为SQL\_ASCII，就不会有编码转换。因此，这个设置基本不是用来声明所使用的指定编码， 因为这个声明会忽略编码。在大多数情况下，如果你使用了任何非ASCII数据，那么使用 SQL\_ASCII设置都是不明智的，因为OpenGauss将无法帮助你转换或者校验非ASCII字符。

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >-   指定新的数据库字符集编码必须与所选择的本地环境中（LC\_COLLATE和LC\_CTYPE）的设置兼容。

  >-   当指定的字符编码集为GBK时，部分中文生僻字无法直接作为对象名。这是因为GBK第二个字节的编码范围在0x40-0x7E之间时，字节编码与ASCII字符@A-Z\[\\\]^\_\`a-z\{|\}重叠。其中@\[\\\]^\_'\{|\}是数据库中的操作符，直接作为对象名时，会语法报错。例如“侤”字，GBK16进制编码为0x8240，第二个字节为0x40，与ASCII“@”符号编码相同，因此无法直接作为对象名使用。如果确实要使用，可以在创建和访问对象时，通过增加双引号来规避这个问题。
  >-  若客户端编码为A，服务器端编码为B，则需要满足数据库中存在编码格式A与B的转换，例如：若服务器端编码为gb18030，由于当前数据库不支持gb18030与gbk的相互转换，所以此时设置客户端编码格式为gbk时，会报错“Conversion between GB18030 and GBK is not supported.”。数据库能够支持的所有的编码格式转换详见系统表pg_conversion。

-   **LC\_COLLATE \[ = \] lc\_collate**

    指定新数据库使用的字符集。例如，通过lc\_collate = 'zh\_CN.gbk'设定该参数。

    该参数的使用会影响到对字符串的排序顺序（如使用ORDER BY执行，以及在文本列上使用索引的顺序）。默认是使用模板数据库的排序顺序。

    取值范围：有效的排序类型。

-   **LC\_CTYPE \[ = \] lc\_ctype**

    指定新数据库使用的字符分类。例如，通过lc\_ctype = 'zh\_CN.gbk'设定该参数。该参数的使用会影响到字符的分类，如大写、小写和数字。默认是使用模板数据库的字符分类。

    取值范围：有效的字符分类。

- **DBCOMPATIBILITY \[ = \] compatibility\_type**

  指定兼容的数据库的类型，默认兼容O。

  取值范围：A、B、C、PG。分别表示兼容O、MY、TD和POSTGRES。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >-   A兼容性下，数据库将空字符串作为NULL处理，数据类型DATE会被替换为TIMESTAMP\(0\) WITHOUT TIME ZONE。

  >-   将字符串转换成整数类型时，如果输入不合法，B兼容性会将输入转换为0，而其它兼容性则会报错。

  >-   PG兼容性下，CHAR和VARCHAR以字符为计数单位，其它兼容性以字节为计数单位。例如，对于UTF-8字符集，CHAR\(3\)在PG兼容性下能存放3个中文字符，而在其它兼容性下只能存放1个中文字符。

-   **TABLESPACE \[ = \] tablespace\_name**

    指定数据库对应的表空间。

    取值范围：已存在表空间名。

-   **CONNECTION LIMIT \[ = \] connlimit**

    数据库可以接受的并发连接数。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >-   系统管理员不受此参数的限制。
    
>-   connlimit数据库主节点单独统计，openGauss整体的连接数 = connlimit \* 当前正常数据库主节点个数。

    取值范围：\>=-1的整数。默认值为-1，表示没有限制。


有关字符编码的一些限制：

-   若区域设置为C（或POSIX），则允许所有的编码类型，但是对于其他的区域设置，字符编码必须和区域设置相同。
-   若字符编码方式是SQL\_ASCII，并且修改者为管理员用户时，则字符编码可以和区域设置不相同。
-   编码和区域设置必须匹配模板数据库，除了将template0当作模板。 因为其他数据库可能会包含不匹配指定编码的数据，或者可能包含排序顺序受LC\_COLLATE和LC\_CTYPE影响的索引。复制这些数据会导致在新数据库中的索引失效。template0是不包含任何会受到影响的数据或者索引。

## 示例<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
--创建jim和tom用户。
openGauss=# CREATE USER jim PASSWORD 'xxxxxxxxx';
openGauss=# CREATE USER tom PASSWORD 'xxxxxxxxx';

--创建一个GBK编码的数据库music（本地环境的编码格式必须也为GBK）。
openGauss=# CREATE DATABASE music ENCODING 'GBK' template = template0;

--创建数据库music2，并指定所有者为jim。
openGauss=# CREATE DATABASE music2 OWNER jim;

--用模板template0创建数据库music3，并指定所有者为jim。
openGauss=# CREATE DATABASE music3 OWNER jim TEMPLATE template0;

--设置music数据库的连接数为10。
openGauss=# ALTER DATABASE music CONNECTION LIMIT= 10;

--将music名称改为music4。
openGauss=# ALTER DATABASE music RENAME TO music4;

--将数据库music2的所属者改为tom。
openGauss=# ALTER DATABASE music2 OWNER TO tom;

--设置music3的表空间为PG_DEFAULT。
openGauss=# ALTER DATABASE music3 SET TABLESPACE PG_DEFAULT;

--关闭在数据库music3上缺省的索引扫描。
openGauss=# ALTER DATABASE music3 SET enable_indexscan TO off;

--重置enable_indexscan参数。
openGauss=# ALTER DATABASE music3 RESET enable_indexscan;

--删除数据库。
openGauss=# DROP DATABASE music2;
openGauss=# DROP DATABASE music3;
openGauss=# DROP DATABASE music4;

--删除jim和tom用户。
openGauss=# DROP USER jim;
openGauss=# DROP USER tom;

--创建兼容TD格式的数据库。
openGauss=# CREATE DATABASE td_compatible_db DBCOMPATIBILITY 'C';

--创建兼容A格式的数据库。
openGauss=# CREATE DATABASE ora_compatible_db DBCOMPATIBILITY 'A';

--删除兼容TD、A格式的数据库。
openGauss=# DROP DATABASE td_compatible_db;
openGauss=# DROP DATABASE ora_compatible_db;
```

## 相关链接<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER DATABASE](ALTER-DATABASE.md)，[DROP DATABASE](DROP-DATABASE.md)

## 优化建议<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_section8189694144220"></a>

-   **create database**

    事务中不支持创建database。


-   **ENCODING   LC\_COLLATE     LC\_CTYPE**

    当新建数据库Encoding、LC-Collate 或LC\_Ctype与模板数据库（SQL\_ASCII）不匹配（为'GBK' /'UTF8'/'LATIN1'/'GB18030'）时，必须指定template \[=\] template0。

