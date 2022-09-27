# CREATE DATABASE<a name="EN-US_TOPIC_0289900066"></a>

## Function<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

**CREATE DATABASE**  is used to create a database. By default, the new database will be created only by cloning the standard system database  **template0**.

## Precautions<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   A user that has the  **CREATEDB**  permission or a system administrator can create a database.
-   **CREATE DATABASE**  cannot be executed inside a transaction block.
-   During the database creation, an error message indicating that permission denied is displayed, possibly because the permission on the data directory in the file system is insufficient. If an error message, indicating no space left on device is displayed, the possible cause is that the disk space is used up.

## Syntax<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE database_name
    [ [ WITH ] { [ OWNER [=] user_name ] |
               [ TEMPLATE [=] template ] |
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |
               [ DBCOMPATIBILITY [=] compatibilty_type ] |
               [ TABLESPACE [=] tablespace_name ] |
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];
```

## Parameter Description<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

-   **database\_name**

    Specifies the database name.

    Value range: a string. It must comply with the identifier naming convention.

-   **OWNER \[ = \] user\_name**

    Specifies the owner of the new database. If omitted, the default owner is the current user.

    Value range: an existing username

-   **TEMPLATE \[ = \] template**

    Specifies a template name. That is, the template from which the database is created. openGauss creates a database by copying data from a template database. openGauss has two default template databases  **template0**  and  **template1**  and a default user database  **postgres**.

    Value range:  **template0**

-   **ENCODING \[ = \] encoding**

    Specifies the character encoding used by the database. The value can be a string \(for example,  **SQL\_ASCII**\) or an integer.

    If this parameter is not specified, the encoding of the template database is used by default. By default, the codes of the template databases  **template0**  and  **template1**  are related to the operating system environment. The character encoding of  **template1**  cannot be changed. To change the encoding, use  **template0**  to create a database.

    Common values are **GBK**, **UTF8**, **Latin1**, and **GB18030**. The supported character sets are as follows:

    **Table  1**  openGauss character set

    <a name="table78123179517"></a>
    <table><thead align="left"><tr id="row75301618757"><th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.1"><p id="p105308181954"><a name="p105308181954"></a><a name="p105308181954"></a><strong id="b3355164317430"><a name="b3355164317430"></a><a name="b3355164317430"></a>Name</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.2"><p id="p15531318453"><a name="p15531318453"></a><a name="p15531318453"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.53061224489796%" id="mcps1.2.8.1.3"><p id="p1053116189517"><a name="p1053116189517"></a><a name="p1053116189517"></a><strong id="b978420218448"><a name="b978420218448"></a><a name="b978420218448"></a>Language</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="14.040816326530612%" id="mcps1.2.8.1.4"><p id="p7531191813519"><a name="p7531191813519"></a><a name="p7531191813519"></a><strong id="b194331211164917"><a name="b194331211164917"></a><a name="b194331211164917"></a>Server Or Not</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.5"><p id="p17531171813511"><a name="p17531171813511"></a><a name="p17531171813511"></a><strong id="b05602015134914"><a name="b05602015134914"></a><a name="b05602015134914"></a>ICU Or Not</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.6"><p id="p1253116181357"><a name="p1253116181357"></a><a name="p1253116181357"></a><strong id="b0141120164914"><a name="b0141120164914"></a><a name="b0141120164914"></a>Byte/Character</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="14.285714285714285%" id="mcps1.2.8.1.7"><p id="p5532161815514"><a name="p5532161815514"></a><a name="p5532161815514"></a><strong id="b44143294442"><a name="b44143294442"></a><a name="b44143294442"></a>Alias</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row5532151818515"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p115322183514"><a name="p115322183514"></a><a name="p115322183514"></a>BIG5</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p18532818554"><a name="p18532818554"></a><a name="p18532818554"></a>Big Five</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p0532161814511"><a name="p0532161814511"></a><a name="p0532161814511"></a>Traditional Chinese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p453219186515"><a name="p453219186515"></a><a name="p453219186515"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p55321018851"><a name="p55321018851"></a><a name="p55321018851"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1353220187514"><a name="p1353220187514"></a><a name="p1353220187514"></a>1-2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p105329180512"><a name="p105329180512"></a><a name="p105329180512"></a>WIN950, Windows950</p>
    </td>
    </tr>
    <tr id="row1353215183517"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p85338186510"><a name="p85338186510"></a><a name="p85338186510"></a>EUC_CN</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p2533318259"><a name="p2533318259"></a><a name="p2533318259"></a>Extended UNIX Code-CN</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p105337181650"><a name="p105337181650"></a><a name="p105337181650"></a>Simplified Chinese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p125335181519"><a name="p125335181519"></a><a name="p125335181519"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p17533318355"><a name="p17533318355"></a><a name="p17533318355"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p2053318181511"><a name="p2053318181511"></a><a name="p2053318181511"></a>1-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1533111820517"><a name="p1533111820517"></a><a name="p1533111820517"></a>-</p>
    </td>
    </tr>
    <tr id="row4533121817510"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p12533131811511"><a name="p12533131811511"></a><a name="p12533131811511"></a>EUC_JP</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1153301819520"><a name="p1153301819520"></a><a name="p1153301819520"></a>Extended UNIX Code-JP</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p75348184511"><a name="p75348184511"></a><a name="p75348184511"></a>Japanese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p125348181059"><a name="p125348181059"></a><a name="p125348181059"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p14534181816516"><a name="p14534181816516"></a><a name="p14534181816516"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p165342182051"><a name="p165342182051"></a><a name="p165342182051"></a>1-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p16534111819516"><a name="p16534111819516"></a><a name="p16534111819516"></a>-</p>
    </td>
    </tr>
    <tr id="row18534518153"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1534418459"><a name="p1534418459"></a><a name="p1534418459"></a>EUC_JIS_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p7534318657"><a name="p7534318657"></a><a name="p7534318657"></a>Extended UNIX Code-JP, JIS X 0213</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p125341818552"><a name="p125341818552"></a><a name="p125341818552"></a>Japanese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p13535151820513"><a name="p13535151820513"></a><a name="p13535151820513"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p55351618351"><a name="p55351618351"></a><a name="p55351618351"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p135351018851"><a name="p135351018851"></a><a name="p135351018851"></a>1-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1953512181452"><a name="p1953512181452"></a><a name="p1953512181452"></a>-</p>
    </td>
    </tr>
    <tr id="row1253519181559"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p3535201813516"><a name="p3535201813516"></a><a name="p3535201813516"></a>EUC_KR</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p453512184519"><a name="p453512184519"></a><a name="p453512184519"></a>Extended UNIX Code-KR</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p2053519181852"><a name="p2053519181852"></a><a name="p2053519181852"></a>Korean</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p2535111812513"><a name="p2535111812513"></a><a name="p2535111812513"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1653610181251"><a name="p1653610181251"></a><a name="p1653610181251"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p85361818257"><a name="p85361818257"></a><a name="p85361818257"></a>1-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p753612181355"><a name="p753612181355"></a><a name="p753612181355"></a>-</p>
    </td>
    </tr>
    <tr id="row4536171811514"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p185361181550"><a name="p185361181550"></a><a name="p185361181550"></a>EUC_TW</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p13536518654"><a name="p13536518654"></a><a name="p13536518654"></a>Extended UNIX Code-Taiwan, China</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1353610188514"><a name="p1353610188514"></a><a name="p1353610188514"></a>Traditional Chinese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p65363189512"><a name="p65363189512"></a><a name="p65363189512"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p65371518558"><a name="p65371518558"></a><a name="p65371518558"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p8537191817510"><a name="p8537191817510"></a><a name="p8537191817510"></a>1-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p15537171814520"><a name="p15537171814520"></a><a name="p15537171814520"></a>-</p>
    </td>
    </tr>
    <tr id="row14537318853"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p20537161819516"><a name="p20537161819516"></a><a name="p20537161819516"></a>GB18030</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p19537718856"><a name="p19537718856"></a><a name="p19537718856"></a>National Standard</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p55375181454"><a name="p55375181454"></a><a name="p55375181454"></a>Chinese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p165371518757"><a name="p165371518757"></a><a name="p165371518757"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p18538918456"><a name="p18538918456"></a><a name="p18538918456"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p16538191811512"><a name="p16538191811512"></a><a name="p16538191811512"></a>1-4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1553814181058"><a name="p1553814181058"></a><a name="p1553814181058"></a>-</p>
    </td>
    </tr>
    <tr id="row2538161816511"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p853841815519"><a name="p853841815519"></a><a name="p853841815519"></a>GBK</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p25398185512"><a name="p25398185512"></a><a name="p25398185512"></a>Extended National Standard</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p13539161816520"><a name="p13539161816520"></a><a name="p13539161816520"></a>Simplified Chinese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p2539131810513"><a name="p2539131810513"></a><a name="p2539131810513"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p053951815510"><a name="p053951815510"></a><a name="p053951815510"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35391818754"><a name="p35391818754"></a><a name="p35391818754"></a>1-2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p453971811510"><a name="p453971811510"></a><a name="p453971811510"></a>WIN936, Windows936</p>
    </td>
    </tr>
    <tr id="row153961813513"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1453914181854"><a name="p1453914181854"></a><a name="p1453914181854"></a>ISO_8859_5</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p8539131814513"><a name="p8539131814513"></a><a name="p8539131814513"></a>ISO 8859-5, ECMA 113</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p195406182059"><a name="p195406182059"></a><a name="p195406182059"></a>Latin/Cyrillic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p195401718256"><a name="p195401718256"></a><a name="p195401718256"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p55406181056"><a name="p55406181056"></a><a name="p55406181056"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1954016189511"><a name="p1954016189511"></a><a name="p1954016189511"></a>Latin/Arabic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p85406181957"><a name="p85406181957"></a><a name="p85406181957"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p15401618957"><a name="p15401618957"></a><a name="p15401618957"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p454118184512"><a name="p454118184512"></a><a name="p454118184512"></a>Latin/Greek</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p154101820518"><a name="p154101820518"></a><a name="p154101820518"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p154115186512"><a name="p154115186512"></a><a name="p154115186512"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p754213181054"><a name="p754213181054"></a><a name="p754213181054"></a>Latin/Hebrew</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1954261818518"><a name="p1954261818518"></a><a name="p1954261818518"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16542118857"><a name="p16542118857"></a><a name="p16542118857"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p155429181250"><a name="p155429181250"></a><a name="p155429181250"></a>Korean</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1154241810519"><a name="p1154241810519"></a><a name="p1154241810519"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16542218556"><a name="p16542218556"></a><a name="p16542218556"></a>No</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1354311818516"><a name="p1354311818516"></a><a name="p1354311818516"></a>Cyrillic (Russian)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p155434180514"><a name="p155434180514"></a><a name="p155434180514"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1354312182055"><a name="p1354312182055"></a><a name="p1354312182055"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p185441218559"><a name="p185441218559"></a><a name="p185441218559"></a>Cyrillic (Ukrainian)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p135443187516"><a name="p135443187516"></a><a name="p135443187516"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p2054417181757"><a name="p2054417181757"></a><a name="p2054417181757"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p165451918856"><a name="p165451918856"></a><a name="p165451918856"></a>Western European</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p7545218758"><a name="p7545218758"></a><a name="p7545218758"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p185452181559"><a name="p185452181559"></a><a name="p185452181559"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p4546518457"><a name="p4546518457"></a><a name="p4546518457"></a>Central European</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p2546318155"><a name="p2546318155"></a><a name="p2546318155"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1754615181510"><a name="p1754615181510"></a><a name="p1754615181510"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p13547121811510"><a name="p13547121811510"></a><a name="p13547121811510"></a>South European</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p65482187515"><a name="p65482187515"></a><a name="p65482187515"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p154815182516"><a name="p154815182516"></a><a name="p154815182516"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p154818185519"><a name="p154818185519"></a><a name="p154818185519"></a>North European</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p125489187514"><a name="p125489187514"></a><a name="p125489187514"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1954918180515"><a name="p1954918180515"></a><a name="p1954918180515"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p154911181150"><a name="p154911181150"></a><a name="p154911181150"></a>Turkish</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p145509185514"><a name="p145509185514"></a><a name="p145509185514"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p15550218959"><a name="p15550218959"></a><a name="p15550218959"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p175505185520"><a name="p175505185520"></a><a name="p175505185520"></a>Nordic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p955161815511"><a name="p955161815511"></a><a name="p955161815511"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p145511118250"><a name="p145511118250"></a><a name="p145511118250"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p555191814515"><a name="p555191814515"></a><a name="p555191814515"></a>Baltic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p105512186513"><a name="p105512186513"></a><a name="p105512186513"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p165511618555"><a name="p165511618555"></a><a name="p165511618555"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1155271812518"><a name="p1155271812518"></a><a name="p1155271812518"></a>Celtic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p4553318450"><a name="p4553318450"></a><a name="p4553318450"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p055371811514"><a name="p055371811514"></a><a name="p055371811514"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p15536181956"><a name="p15536181956"></a><a name="p15536181956"></a>LATIN1 with Euro and accents</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p855313189510"><a name="p855313189510"></a><a name="p855313189510"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1455321818516"><a name="p1455321818516"></a><a name="p1455321818516"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p14554151815513"><a name="p14554151815513"></a><a name="p14554151815513"></a>Romanian</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p655412181857"><a name="p655412181857"></a><a name="p655412181857"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p115542181754"><a name="p115542181754"></a><a name="p115542181754"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35541518253"><a name="p35541518253"></a><a name="p35541518253"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p1055421812510"><a name="p1055421812510"></a><a name="p1055421812510"></a>ISO885916</p>
    </td>
    </tr>
    <tr id="row755411186511"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p195543181252"><a name="p195543181252"></a><a name="p195543181252"></a>MULE_INTERNAL</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p655410181154"><a name="p655410181154"></a><a name="p655410181154"></a>Mule internal code</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p85557181514"><a name="p85557181514"></a><a name="p85557181514"></a>Multilingual Emacs</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p18555618358"><a name="p18555618358"></a><a name="p18555618358"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p7555141811517"><a name="p7555141811517"></a><a name="p7555141811517"></a>No</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p19556181818512"><a name="p19556181818512"></a><a name="p19556181818512"></a>Japanese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p255610184516"><a name="p255610184516"></a><a name="p255610184516"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1055681813516"><a name="p1055681813516"></a><a name="p1055681813516"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p455631813517"><a name="p455631813517"></a><a name="p455631813517"></a>1-2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p175564181352"><a name="p175564181352"></a><a name="p175564181352"></a>Mskanji, ShiftJIS, WIN932, Windows932</p>
    </td>
    </tr>
    <tr id="row17556161812515"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p18557161816514"><a name="p18557161816514"></a><a name="p18557161816514"></a>SHIFT_JIS_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p185578186511"><a name="p185578186511"></a><a name="p185578186511"></a>Shift JIS, JIS X 0213</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p95577186519"><a name="p95577186519"></a><a name="p95577186519"></a>Japanese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1255712187513"><a name="p1255712187513"></a><a name="p1255712187513"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p12557418255"><a name="p12557418255"></a><a name="p12557418255"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p115573182510"><a name="p115573182510"></a><a name="p115573182510"></a>1-2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p115574181453"><a name="p115574181453"></a><a name="p115574181453"></a>-</p>
    </td>
    </tr>
    <tr id="row19557101810519"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p115575181959"><a name="p115575181959"></a><a name="p115575181959"></a>SQL_ASCII</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p55573181513"><a name="p55573181513"></a><a name="p55573181513"></a>Unspecified (see the text)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p165581181856"><a name="p165581181856"></a><a name="p165581181856"></a><em id="i865171516485"><a name="i865171516485"></a><a name="i865171516485"></a>Any</em></p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p185586182514"><a name="p185586182514"></a><a name="p185586182514"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p855891812519"><a name="p855891812519"></a><a name="p855891812519"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p15589181750"><a name="p15589181750"></a><a name="p15589181750"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p2055816187510"><a name="p2055816187510"></a><a name="p2055816187510"></a>-</p>
    </td>
    </tr>
    <tr id="row1955841812519"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p955819181655"><a name="p955819181655"></a><a name="p955819181655"></a>UHC</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p1155815185519"><a name="p1155815185519"></a><a name="p1155815185519"></a>Unified Hangul Code</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1855818184510"><a name="p1855818184510"></a><a name="p1855818184510"></a>Korean</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p115584183517"><a name="p115584183517"></a><a name="p115584183517"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p11558141818517"><a name="p11558141818517"></a><a name="p11558141818517"></a>No</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p35596189516"><a name="p35596189516"></a><a name="p35596189516"></a>1-2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p8559618750"><a name="p8559618750"></a><a name="p8559618750"></a>WIN949, Windows949</p>
    </td>
    </tr>
    <tr id="row175591518459"><td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.1 "><p id="p1955915182510"><a name="p1955915182510"></a><a name="p1955915182510"></a>UTF8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.2 "><p id="p205599189510"><a name="p205599189510"></a><a name="p205599189510"></a>Unicode, 8-bit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p19559171813518"><a name="p19559171813518"></a><a name="p19559171813518"></a><em id="i89261018184813"><a name="i89261018184813"></a><a name="i89261018184813"></a><strong id="b15805111712489"><a name="b15805111712489"></a><a name="b15805111712489"></a>All</strong></em></p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1056071812514"><a name="p1056071812514"></a><a name="p1056071812514"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p125602181053"><a name="p125602181053"></a><a name="p125602181053"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p656119187516"><a name="p656119187516"></a><a name="p656119187516"></a>Cyrillic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p155611418158"><a name="p155611418158"></a><a name="p155611418158"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p556171811512"><a name="p556171811512"></a><a name="p556171811512"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p15562018854"><a name="p15562018854"></a><a name="p15562018854"></a>Thai</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1556211189516"><a name="p1556211189516"></a><a name="p1556211189516"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p175623187511"><a name="p175623187511"></a><a name="p175623187511"></a>No</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p55637184516"><a name="p55637184516"></a><a name="p55637184516"></a>Central European</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p185631218859"><a name="p185631218859"></a><a name="p185631218859"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p10563101812513"><a name="p10563101812513"></a><a name="p10563101812513"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p456419181453"><a name="p456419181453"></a><a name="p456419181453"></a>Cyrillic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1456412181253"><a name="p1456412181253"></a><a name="p1456412181253"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16564418253"><a name="p16564418253"></a><a name="p16564418253"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p145651218857"><a name="p145651218857"></a><a name="p145651218857"></a>Western European</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p856531820515"><a name="p856531820515"></a><a name="p856531820515"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p1656561818516"><a name="p1656561818516"></a><a name="p1656561818516"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p656631812519"><a name="p656631812519"></a><a name="p656631812519"></a>Greek</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p356711181515"><a name="p356711181515"></a><a name="p356711181515"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p85671918054"><a name="p85671918054"></a><a name="p85671918054"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p65686188514"><a name="p65686188514"></a><a name="p65686188514"></a>Turkish</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p756821817510"><a name="p756821817510"></a><a name="p756821817510"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p16568191818518"><a name="p16568191818518"></a><a name="p16568191818518"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p13569171813513"><a name="p13569171813513"></a><a name="p13569171813513"></a>Hebrew</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p10569018955"><a name="p10569018955"></a><a name="p10569018955"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p3569718551"><a name="p3569718551"></a><a name="p3569718551"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1957015182056"><a name="p1957015182056"></a><a name="p1957015182056"></a>Arabic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p16570818555"><a name="p16570818555"></a><a name="p16570818555"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p205707187515"><a name="p205707187515"></a><a name="p205707187515"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p1957013186513"><a name="p1957013186513"></a><a name="p1957013186513"></a>Baltic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p1957016182516"><a name="p1957016182516"></a><a name="p1957016182516"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p35700181752"><a name="p35700181752"></a><a name="p35700181752"></a>Yes</p>
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
    <td class="cellrowborder" valign="top" width="14.53061224489796%" headers="mcps1.2.8.1.3 "><p id="p657114181951"><a name="p657114181951"></a><a name="p657114181951"></a>Vietnamese</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.040816326530612%" headers="mcps1.2.8.1.4 "><p id="p05716186519"><a name="p05716186519"></a><a name="p05716186519"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.5 "><p id="p185711718155"><a name="p185711718155"></a><a name="p185711718155"></a>Yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.6 "><p id="p1857121818514"><a name="p1857121818514"></a><a name="p1857121818514"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.285714285714285%" headers="mcps1.2.8.1.7 "><p id="p9571018856"><a name="p9571018856"></a><a name="p9571018856"></a>ABC, TCVN, TCVN5712, VSCII</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-caution.gif) **CAUTION:** 
    >Note that not all client APIs support the preceding character sets.
    >The SQL\_ASCII setting performs quite differently from other settings. If the character set of the server is SQL\_ASCII, the server interprets the byte values 0 to 127 according to the ASCII standard. The byte values 128 to 255 are regarded as the characters that cannot be parsed. If this parameter is set to SQL\_ASCII, no code conversion occurs. Therefore, this setting is not basically used to declare the specified encoding used, because this declaration ignores the encoding. In most cases, if you use any non-ASCII data, it is unwise to use the SQL\_ASCII setting because openGauss will not be able to help you convert or validate non-ASCII characters.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The character set encoding of the new database must be compatible with the local settings \(**LC\_COLLATE**  and  **LC\_CTYPE**\).
    >-   When the specified character encoding set is  **GBK**, some uncommon Chinese characters cannot be directly used as object names. This is because the byte encoding overlaps with the ASCII characters @A-Z\[\\\]^\_\`a-z\{|\} when the second byte of the GBK ranges from 0x40 to 0x7E.  **@\[\\\]^\_'\{|\}**  is an operator in the database. If it is directly used as an object name, a syntax error will be reported. For example, the GBK hexadecimal code is  **0x8240**, and the second byte is  **0x40**, which is the same as the ASCII character @. Therefore, the character cannot be used as an object name. If you do need to use this function, you can add double quotation marks \(""\) to avoid this problem when creating and accessing objects.
    >-   If the client code is A and the server code is B, conversion between A and B must exist in the database. For example, when the encoding format on the server is GB18030 and that on the client is GBK, the error message "Conversion between GB18030 and GBK is not supported." will be displayed because the current database does not support the conversion between GB18030 and GBK. For details about conversion between the encoding formats supported by the database, see the  **pg\_conversion**  system catalog.

-   **LC\_COLLATE \[ = \] lc\_collate**

    Specifies the character set used by the new database. For example, set this parameter by using  **lc\_collate = 'zh\_CN.gbk'**.

    The use of this parameter affects the sort order of strings \(for example, the order of using  **ORDER BY**  for execution and the order of using indexes on text columns\). By default, the sorting order of the template database is used.

    Value range: a valid sorting type

-   **LC\_CTYPE \[ = \] lc\_ctype**

    Specifies the character class used by the new database. For example, set this parameter by using  **lc\_ctype = 'zh\_CN.gbk'**. The use of this parameter affects the classification of characters, such as uppercase letters, lowercase letters, and digits. By default, the character classification of the template database is used.

    Value range: a valid character type

-   **DBCOMPATIBILITY \[ = \] compatibility\_type**

    Specifies the compatible database type. The default compatible database is the  **O**  database.

    Value range:  **A**,  **B**,  **C**, and  **PG**, indicating Oracle, MySQL, Teradata, and Postgres databases, respectively.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   For A compatibility, the database treats empty strings as  **NULL**  and replaces  **DATE**  with  **TIMESTAMP\(0\) WITHOUT TIME ZONE**.
    >-   When a character string is converted to an integer, if the input is invalid, the input will be converted to 0 due to B compatibility, and an error will be reported due to other compatibility issues.
    >-   For PG compatibility, CHAR and VARCHAR are counted by character. For other compatibility types, they are counted by byte. For example, for the UTF-8 character set, CHAR\(3\) can store three Chinese characters in PG compatibility scenarios, but can store only one Chinese character in other compatibility scenarios.

-   **TABLESPACE \[ = \] tablespace\_name**

    Specifies the tablespace of the database.

    Value range: an existing tablespace name

-   **CONNECTION LIMIT \[ = \] connlimit**

    Specifies the maximum number of concurrent connections that can be made to the new database.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The system administrator is not restricted by this parameter.
    >-   connlimit is calculated separately for each primary database node. Number of connections of openGauss = connlimit x Number of normal CN primary database nodes.

    Value range: an integer greater than or equal to -1 The default value is  **-1**, indicating that there is no limit.


The restrictions on character encoding are as follows:

-   If the locale is set to  **C**  \(or  **POSIX**\), all encoding types are allowed. For other locale settings, the character encoding must be the same as that of the locale.
-   If the character encoding mode is SQL\_ASCII and the modifier is an administrator, the character encoding mode can be different from the locale setting.
-   The encoding and region settings must match the template database, except that  **template0**  is used as a template. This is because other databases may contain data that does not match the specified encoding, or may contain indexes whose sorting order is affected by  **LC\_COLLATE**  and  **LC\_CTYPE**. Copying this data will invalidate the indexes in the new database.  **template0**  does not contain any data or indexes that may be affected.

## Examples<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
-- Create users jim and tom.
openGauss=# CREATE USER jim PASSWORD 'xxxxxxxxx';
openGauss=# CREATE USER tom PASSWORD 'xxxxxxxxx';

-- Create database music using GBK (the local encoding type is also GBK).
openGauss=# CREATE DATABASE music ENCODING 'GBK' template = template0;

-- Create database music2 and specify user jim as its owner.
openGauss=# CREATE DATABASE music2 OWNER jim;

-- Create database music3 using template template0 and specify user jim as its owner.
openGauss=# CREATE DATABASE music3 OWNER jim TEMPLATE template0;

-- Set the maximum number of connections to database music to 10.
openGauss=# ALTER DATABASE music CONNECTION LIMIT= 10;

-- Rename database music to music4.
openGauss=# ALTER DATABASE music RENAME TO music4;

-- Change the owner of database music2 to user tom.
openGauss=# ALTER DATABASE music2 OWNER TO tom;

-- Set the tablespace of database music3 to PG_DEFAULT.
openGauss=# ALTER DATABASE music3 SET TABLESPACE PG_DEFAULT;

-- Disable the default index scan on database music3.
openGauss=# ALTER DATABASE music3 SET enable_indexscan TO off;

-- Reset the enable_indexscan parameter.
openGauss=# ALTER DATABASE music3 RESET enable_indexscan;

-- Delete the database.
openGauss=# DROP DATABASE music2;
openGauss=# DROP DATABASE music3;
openGauss=# DROP DATABASE music4;

-- Delete the jim and tom users.
openGauss=# DROP USER jim;
openGauss=# DROP USER tom;

-- Create a database compatible with the TD format.
openGauss=# CREATE DATABASE td_compatible_db DBCOMPATIBILITY 'C';

-- Create a database compatible with the A format.
openGauss=# CREATE DATABASE ora_compatible_db DBCOMPATIBILITY 'A';

-- Delete the databases that are compatible with the TD and A formats.
openGauss=# DROP DATABASE td_compatible_db;
openGauss=# DROP DATABASE ora_compatible_db;
```

## Helpful Links<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER DATABASE](alter-database.md)  and  [DROP DATABASE](drop-database.md)

## Suggestions<a name="en-us_topic_0283137050_en-us_topic_0237122099_en-us_topic_0059778277_section8189694144220"></a>

-   **create database**

    Database cannot be created in a transaction.


-   **ENCODING   LC\_COLLATE     LC\_CTYPE**

    If the new database Encoding, LC-Collate, or LC\_Ctype does not match the template database \(SQL\_ASCII\) \(**'GBK'**,  **'UTF8'**, **'LATIN1'**, or **'GB18030'**\),  **template \[=\] template0**  must be specified.
