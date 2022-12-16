# JDBC包、驱动类和环境类<a name="ZH-CN_TOPIC_0244720259"></a>

## JDBC包<a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_zh-cn_topic_0189249669_zh-cn_topic_0059778950_s9694406852de4db0afcc99b19079f446"></a>

openGauss提供两种JDBCjar包：postgresql.jar和openGauss-jdbc-x.x.x.jar，两种jar包功能一致，仅仅是为了解决和PostgreSQL之间的JDBC驱动包名冲突。

在Linux服务器端源代码目录下执行build.sh，获得驱动jar包postgresql.jar和opengauss-jdbc-x.x.x.jar，包位置在源代码内output目录下。也可以从官网发布包中获取，包名为openGauss-x.x.x-JDBC.tar.gz。

驱动包与PostgreSQL保持兼容，其中类名、类结构与PostgreSQL驱动完全一致，曾经运行于PostgreSQL的应用程序可以直接移植到当前系统使用。

## 驱动类<a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_zh-cn_topic_0189249669_zh-cn_topic_0059778950_s103697559c8d4cb68f396e18e3ae65a9"></a>

>![](public_sys-resources/icon-note.png) **说明：**
>
>+ openGauss在JDBC的使用上与PG的使用方法保持兼容。在同一个JVM虚拟机里加载PostgreSQL和openGauss的JDBC同名驱动时，可能存在org.postgresql.Driver驱动类冲突问题。
>
>+ 相比于PG驱动，openGauss JDBC驱动主要做了以下特性的增强：
>
>  + 支持SHA256加密方式登录。
>
>  + 支持对接实现sf4j接口的第三方日志框架。
>
>  + 支持容灾切换。

## 环境类<a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_section20655192913405"></a>

客户端需配置JDK1.8，配置方法如下：

1. DOS窗口输入“java -version”，查看JDK版本，确认为JDK1.8版本。如果未安装JDK，请从官方网站下载安装包并安装。

2. 根据如下步骤配置系统环境变量。

    a. 右键单击“我的电脑”，选择“属性”。

    b. 在“系统”页面左侧导航栏单击“高级系统设置”。

    c. 在“系统属性”页面，“高级”页签上单击“环境变量”。

    d. 在“环境变量”页面上，“系统变量”区域单击“新建”或“编辑”配置系统变量。变量说明请参见[表1](#zh-cn_topic_0237120378_zh-cn_topic_0213179123_table1625616152473)。

   **表 1**  变量说明

   <a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_table1625616152473"></a>

   <table><thead align="left"><tr id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_row1525719152472"><th class="cellrowborder" valign="top" width="15.701570157015702%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p52573155477"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p52573155477"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p52573155477"></a>变量名</p>
   </th>
   <th class="cellrowborder" valign="top" width="32.753275327532755%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p525713159478"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p525713159478"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p525713159478"></a>操作</p>
   </th>
   <th class="cellrowborder" valign="top" width="51.54515451545154%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p8257141544718"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p8257141544718"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p8257141544718"></a>变量值</p>
   </th>
   </tr>
   </thead>
   <tbody><tr id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_row925712153479"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p182575153474"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p182575153474"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p182575153474"></a>JAVA_HOME</p>
   </td>
   <td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_ul16913207507"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_ul16913207507"></a><ul id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_ul16913207507"><li>若存在，则单击“编辑”。</li><li>若不存在，则单击“新建”。</li></ul>
   </td>
   <td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p0217595132"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p0217595132"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p0217595132"></a>JAVA的安装目录。</p>
   <p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1981211652"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1981211652"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1981211652"></a>例如：C:\Program Files\Java\jdk1.8.0_131</p>
   </td>
   </tr>
   <tr id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_row5257111564711"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1325721584719"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1325721584719"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1325721584719"></a>Path</p>
   </td>
   <td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p7257191511477"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p7257191511477"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p7257191511477"></a>编辑</p>
   </td>
   <td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_ul108931343135117"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_ul108931343135117"></a><ul id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_ul108931343135117"><li>若配置了JAVA_HOME，则在变量值的最前面加上：“%JAVA_HOME%\bin;”</li><li>若未配置JAVA_HOME，则在变量值的最前面加上JAVA安装的全路径：<p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p54286393517"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p54286393517"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p54286393517"></a>“C:\Program Files\Java\jdk1.8.0_131\bin;”</p>
   </li></ul>
   </td>
   </tr>
   <tr id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_row325881510471"><td class="cellrowborder" valign="top" width="15.701570157015702%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1625812150476"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1625812150476"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1625812150476"></a>CLASSPATH</p>
   </td>
   <td class="cellrowborder" valign="top" width="32.753275327532755%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p13527826155219"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p13527826155219"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p13527826155219"></a>新建</p>
   </td>
   <td class="cellrowborder" valign="top" width="51.54515451545154%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1325841534712"><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1325841534712"></a><a name="zh-cn_topic_0237120378_zh-cn_topic_0213179123_p1325841534712"></a>“.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar;”</p>
   </td>
   </tr>
   </tbody>
   </table>
