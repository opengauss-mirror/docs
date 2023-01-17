# 支持PL/Java<a name="ZH-CN_TOPIC_0000001135665711"></a>

## 可获得性<a name="section56086982"></a>

本特性自openGauss 1.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

支持java UDF。

## 客户价值<a name="section46751668"></a>

提供多种函数的开发环境。

## 特性描述<a name="section18111828"></a>

使用openGauss数据库的PL/Java函数，用户可以使用自己喜欢的Java IDE编写Java方法，并将包含这些方法的jar文件安装到openGauss数据库中，然后使用该方法。openGauss PL/Java基于开源tada PL/Java 1.5.2开发，PL/Java所使用的JDK版本为Huawei JDK V100R001C00SPC190B003-b09。

## 特性增强<a name="section28788730"></a>

无。

## 特性约束<a name="section06531946143616"></a>

-   Java UDF可以实现一些较为简单的java计算，强烈建议不要在Java UDF中封装业务。
-   强烈建议不要在Java函数中使用任何方式连接数据库，包括但不限于JDBC。
-   建议用户使用Huawei JDK V100R001C00SPC190B003-b09编译Java方法和jar文件。
-   暂不支持的数据类型：除[表1](#table10200627143416)提及之外的数据类型，包括自定义类型，复杂数据类型（Java Array类及派生类）。
-   暂不支持UDAF、UDTF。

    **表 1**  PL/Java默认数据类型映射关系

    <a name="table10200627143416"></a>
    <table><thead align="left"><tr id="row52006273347"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p12221055173619"><a name="p12221055173619"></a><a name="p12221055173619"></a>openGauss</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p182285553613"><a name="p182285553613"></a><a name="p182285553613"></a><strong id="b222555123617"><a name="b222555123617"></a><a name="b222555123617"></a>Java</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16200102783419"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1322105512361"><a name="p1322105512361"></a><a name="p1322105512361"></a>BOOLEAN</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1922175514367"><a name="p1922175514367"></a><a name="p1922175514367"></a>boolean</p>
    </td>
    </tr>
    <tr id="row132001827103418"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1623155517366"><a name="p1623155517366"></a><a name="p1623155517366"></a>"char"</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p22365583612"><a name="p22365583612"></a><a name="p22365583612"></a>byte</p>
    </td>
    </tr>
    <tr id="row192001627153420"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1124175533612"><a name="p1124175533612"></a><a name="p1124175533612"></a>bytea</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p324165512366"><a name="p324165512366"></a><a name="p324165512366"></a>byte[]</p>
    </td>
    </tr>
    <tr id="row52011027113413"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1824155533619"><a name="p1824155533619"></a><a name="p1824155533619"></a>SMALLINT</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1424955103619"><a name="p1424955103619"></a><a name="p1424955103619"></a>short</p>
    </td>
    </tr>
    <tr id="row520182783411"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p32475516360"><a name="p32475516360"></a><a name="p32475516360"></a>INTEGER</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p72485573617"><a name="p72485573617"></a><a name="p72485573617"></a>int</p>
    </td>
    </tr>
    <tr id="row2126124903615"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p112415517366"><a name="p112415517366"></a><a name="p112415517366"></a>BIGINT</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p12410551363"><a name="p12410551363"></a><a name="p12410551363"></a>long</p>
    </td>
    </tr>
    <tr id="row113734619364"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1224175519367"><a name="p1224175519367"></a><a name="p1224175519367"></a>FLOAT4</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1324155513366"><a name="p1324155513366"></a><a name="p1324155513366"></a>float</p>
    </td>
    </tr>
    <tr id="row1220119277343"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p4245552369"><a name="p4245552369"></a><a name="p4245552369"></a>FLOAT8</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p132415556365"><a name="p132415556365"></a><a name="p132415556365"></a>double</p>
    </td>
    </tr>
    <tr id="row194001343143617"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p524055113617"><a name="p524055113617"></a><a name="p524055113617"></a>CHAR</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p024195516368"><a name="p024195516368"></a><a name="p024195516368"></a>java.lang.String</p>
    </td>
    </tr>
    <tr id="row989924003617"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1724155512367"><a name="p1724155512367"></a><a name="p1724155512367"></a>VARCHAR</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p192418558360"><a name="p192418558360"></a><a name="p192418558360"></a>java.lang.String</p>
    </td>
    </tr>
    <tr id="row120172753416"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p92475512360"><a name="p92475512360"></a><a name="p92475512360"></a>TEXT</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p132411553366"><a name="p132411553366"></a><a name="p132411553366"></a>java.lang.String</p>
    </td>
    </tr>
    <tr id="row1154313281354"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p42455515364"><a name="p42455515364"></a><a name="p42455515364"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p92645513367"><a name="p92645513367"></a><a name="p92645513367"></a>java.lang.String</p>
    </td>
    </tr>
    <tr id="row627313814365"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p426125515368"><a name="p426125515368"></a><a name="p426125515368"></a>DATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p626175533613"><a name="p626175533613"></a><a name="p626175533613"></a>java.sql.Timestamp</p>
    </td>
    </tr>
    <tr id="row9126123918355"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p142695523610"><a name="p142695523610"></a><a name="p142695523610"></a>TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2261855153620"><a name="p2261855153620"></a><a name="p2261855153620"></a>java.sql.Time (stored value treated as local time)</p>
    </td>
    </tr>
    <tr id="row47181243113513"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1826055193619"><a name="p1826055193619"></a><a name="p1826055193619"></a>TIMETZ</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p726165553613"><a name="p726165553613"></a><a name="p726165553613"></a>java.sql.Time</p>
    </td>
    </tr>
    <tr id="row16150193563516"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p52755593616"><a name="p52755593616"></a><a name="p52755593616"></a>TIMESTAMP</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p02745533610"><a name="p02745533610"></a><a name="p02745533610"></a>java.sql.Timestamp</p>
    </td>
    </tr>
    <tr id="row1445023473613"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9278556361"><a name="p9278556361"></a><a name="p9278556361"></a>TIMESTAMPTZ</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p927135543614"><a name="p927135543614"></a><a name="p927135543614"></a>java.sql.Timestamp</p>
    </td>
    </tr>
    </tbody>
    </table>


## 依赖关系<a name="section57771982"></a>

PL/Java依赖JDK环境，目前openGauss中已包含JDK环境，无需用户安装。如果用户已安装（相同或不同版本的）JDK，也不会引起冲突，openGauss会使用Huawei JDK V100R001C00SPC190B003-b09来运行PL/Java。

