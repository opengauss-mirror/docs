# build.sh介绍<a name="ZH-CN_TOPIC_0256911193"></a>

openGauss-server/build.sh是编译过程中的重要脚本工具。其集成了软件安装编译、产品安装包编译两种功能，可快速进行代码编译和打包。

详细参数选项如下表所示：

**表 1**  build.sh参数功能选项介绍。

<a name="table1575410358472"></a>
<table><thead align="left"><tr id="row1975463519471"><th class="cellrowborder" valign="top" width="14.84148414841484%" id="mcps1.2.5.1.1"><p id="p27541635104712"><a name="p27541635104712"></a><a name="p27541635104712"></a>功能选项</p>
</th>
<th class="cellrowborder" valign="top" width="34.87348734873487%" id="mcps1.2.5.1.2"><p id="p272091325813"><a name="p272091325813"></a><a name="p272091325813"></a>缺省值</p>
</th>
<th class="cellrowborder" valign="top" width="7.520752075207521%" id="mcps1.2.5.1.3"><p id="p493319175413"><a name="p493319175413"></a><a name="p493319175413"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="42.76427642764276%" id="mcps1.2.5.1.4"><p id="p1675513514716"><a name="p1675513514716"></a><a name="p1675513514716"></a>功能</p>
</th>
</tr>
</thead>
<tbody><tr id="row107551359472"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p117551135124713"><a name="p117551135124713"></a><a name="p117551135124713"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p117201513155810"><a name="p117201513155810"></a><a name="p117201513155810"></a>不使用此选项</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p169341617443"><a name="p169341617443"></a><a name="p169341617443"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p157551835144710"><a name="p157551835144710"></a><a name="p157551835144710"></a>帮助菜单。</p>
</td>
</tr>
<tr id="row0188244165818"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p51882044145810"><a name="p51882044145810"></a><a name="p51882044145810"></a>-m</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p718894410584"><a name="p718894410584"></a><a name="p718894410584"></a>release</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p1993418171411"><a name="p1993418171411"></a><a name="p1993418171411"></a>[debug | release | memcheck]</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p5188184405812"><a name="p5188184405812"></a><a name="p5188184405812"></a>选择编译目标版本。</p>
</td>
</tr>
<tr id="row1675515357477"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p6755235114711"><a name="p6755235114711"></a><a name="p6755235114711"></a>-3rd</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p1772010136588"><a name="p1772010136588"></a><a name="p1772010136588"></a>${代码路径}/binarylibs</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p1493614171349"><a name="p1493614171349"></a><a name="p1493614171349"></a>[binarylibs path]</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p1755173520474"><a name="p1755173520474"></a><a name="p1755173520474"></a>指定binarylibs的路径，需绝对路径。</p>
</td>
</tr>
<tr id="row1875543594716"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p475523515475"><a name="p475523515475"></a><a name="p475523515475"></a>-pkg</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p372131325815"><a name="p372131325815"></a><a name="p372131325815"></a>不使用此功能</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p693619174418"><a name="p693619174418"></a><a name="p693619174418"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p13756143512476"><a name="p13756143512476"></a><a name="p13756143512476"></a>将代码编译结果压缩封装成安装包。</p>
</td>
</tr>
<tr id="row1875543594716"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p475523515475"><a name="p475523515475"></a><a name="p475523515475"></a>-nopt</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p372131325815"><a name="p372131325815"></a><a name="p372131325815"></a>不使用此功能</p>
</td>
<td class="cellrowborder" valign="top" width="7520752075207521%" headers="mcps1.2.5.1.3 "><p id="p693619174418"><a name="p693619174418"></a><a name="p693619174418"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p13756143512476"><a name="p13756143512476"></a><a name="p13756143512476"></a>如果使用此功能，则对鲲鹏平台的相关CPU不进行优化。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：**   
>1.  -m \[debug | release | memcheck\] 表示可选择三种目标版本：  
>    -   release: 代表生成release版本的二进制程序，该版本编译时，配置GCC高级别优化选项，去除内核调试代码，通常用于生成环境或性能测试环境。  
>    -   debug：代表生成debug版本的二进制程序，该版本编译时，增加内核代码调试功能，通常用于开发自测环境。  
>    -   memcheck：代表生成memcheck版本的二进制程序，该版本编译时，在debug版本基础上新增ASAN功能，通常用于定位内存问题。  
>2.  -3rd \[binarylibs path\] 为binarylibs的路径。缺省情况下，会认为当前代码文件夹下存在binarylibs。因此如果将binarylibs移动到openGauss-server下，或在openGauss-server下创建了指向binarylibs的软链接，可不指定此选项。但需要注意其容易被git clean等操作删除。  
>3.  此脚本每个参数选项都设置了缺省值，且数量并不多，依赖关系简单，因此使用时非常方便。如果用户需求值与缺省值不同，请根据实际情况进行设置。  

