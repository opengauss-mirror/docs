# Introduction to build.sh <a name="EN-US_TOPIC_0256911193"></a>

**openGauss-server/build.sh**  is an important script tool during compilation. It integrates software installation and compilation and product installation package compilation functions to quickly compile and package code.

The following table describes the parameters.

**Table  1**  build.sh parameters

<a name="table1575410358472"></a>
<table><thead align="left"><tr id="row1975463519471"><th class="cellrowborder" valign="top" width="14.84148414841484%" id="mcps1.2.5.1.1"><p id="p27541635104712"><a name="p27541635104712"></a><a name="p27541635104712"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="34.87348734873487%" id="mcps1.2.5.1.2"><p id="p272091325813"><a name="p272091325813"></a><a name="p272091325813"></a>Default Value</p>
</th>
<th class="cellrowborder" valign="top" width="7.520752075207521%" id="mcps1.2.5.1.3"><p id="p493319175413"><a name="p493319175413"></a><a name="p493319175413"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="42.76427642764276%" id="mcps1.2.5.1.4"><p id="p1675513514716"><a name="p1675513514716"></a><a name="p1675513514716"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row107551359472"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p117551135124713"><a name="p117551135124713"></a><a name="p117551135124713"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p117201513155810"><a name="p117201513155810"></a><a name="p117201513155810"></a>Do not use this option.</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p169341617443"><a name="p169341617443"></a><a name="p169341617443"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p157551835144710"><a name="p157551835144710"></a><a name="p157551835144710"></a>Help menu</p>
</td>
</tr>
<tr id="row0188244165818"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p51882044145810"><a name="p51882044145810"></a><a name="p51882044145810"></a>-m</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p718894410584"><a name="p718894410584"></a><a name="p718894410584"></a>release</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p1993418171411"><a name="p1993418171411"></a><a name="p1993418171411"></a>[debug | release | memcheck]</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p5188184405812"><a name="p5188184405812"></a><a name="p5188184405812"></a>Selects the target version.</p>
</td>
</tr>
<tr id="row1675515357477"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p6755235114711"><a name="p6755235114711"></a><a name="p6755235114711"></a>-3rd</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p1772010136588"><a name="p1772010136588"></a><a name="p1772010136588"></a>${<em id="i922818142301"><a name="i922818142301"></a><a name="i922818142301"></a>Code directory</em>}/binarylibs</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p1493614171349"><a name="p1493614171349"></a><a name="p1493614171349"></a>[binarylibs path]</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p1755173520474"><a name="p1755173520474"></a><a name="p1755173520474"></a>Specifies the path of <strong id="b7435922103015"><a name="b7435922103015"></a><a name="b7435922103015"></a>binarylibs</strong>. The path must be an absolute path.</p>
</td>
</tr>
<tr id="row1875543594716"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p475523515475"><a name="p475523515475"></a><a name="p475523515475"></a>-pkg</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p372131325815"><a name="p372131325815"></a><a name="p372131325815"></a>Do not use this option.</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p693619174418"><a name="p693619174418"></a><a name="p693619174418"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p13756143512476"><a name="p13756143512476"></a><a name="p13756143512476"></a>Compresses the code compilation result into an installation package.</p>
</td>
</tr>
<tr id="row16201151213311"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p120115122038"><a name="p120115122038"></a><a name="p120115122038"></a>--no_om_adapt</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p1320215121030"><a name="p1320215121030"></a><a name="p1320215121030"></a>Do not use this option.</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p1593610175420"><a name="p1593610175420"></a><a name="p1593610175420"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p1720212121237"><a name="p1720212121237"></a><a name="p1720212121237"></a>The installation package does not adapt to the OM and takes effect only when the <strong id="b137411752193016"><a name="b137411752193016"></a><a name="b137411752193016"></a>-pkg</strong> option is added.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>1.  **-m \[debug | release | memcheck\]**  indicates that three target versions can be selected:  
>    -   **release**: indicates that the binary program of the release version is generated. During compilation of this version, the GCC high-level optimization option is configured to remove the kernel debugging code. This option is usually used in the generation environment or performance test environment.  
>    -   **debug**: indicates that a binary program of the debug version is generated. During compilation of this version, the kernel code debugging function is added, which is usually used in the development self-test environment.  
>    -   **memcheck**: indicates that a binary program of the memcheck version is generated. During compilation of this version, the ASAN function is added based on the debug version to locate memory problems.  
>2.  **-3rd \[binarylibs path\]**  is the path of  **binarylibs**. By default,  **binarylibs**  exists in the current code folder. If  **binarylibs**  is moved to  **openGauss-server**  or a soft link to  **binarylibs**  is created in  **openGauss-server**, you do not need to specify the parameter. However, if you do so, please note that the file is easy to be deleted by the  **git clean**  command.  
>3.  Each option in this script has a default value. The number of options is small and the dependency is simple. Therefore, this script is easy to use. If the required value is different from the default value, set this parameter based on the actual requirements.  

