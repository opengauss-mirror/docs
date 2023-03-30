# Preparations<a name="EN-US_TOPIC_0289899553"></a>

## Downloading Code<a name="en-us_topic_0283136302_section188203481850"></a>

**Prerequisites**

Git and Git Large File Storage \(LFS\) have been installed and configured on the local host.

**Procedure**

1.  Run the following command to download the openGauss-server code. In the command,  _\[git ssh address\]_  indicates the code download address, which can be obtained from the openGauss community.

    ```
    [user@linux sda]$ git clone [git ssh address] openGauss-server
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **openGauss-server**: openGauss code repository.
    >-   Database compilation depends on open-source third-party software. You can obtain the open-source third-party software from  [Building Open-source Software](#en-us_topic_0283136302_section13890105116714). Since open-source software build takes a long time, we have built  **binarylibs**  using  **openGauss-third\_party**  and compressed and uploaded it to the Internet.
    >    You can download it at  [https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-third\_party\_binarylibs.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-third_party_binarylibs.tar.gz).

2.  When the progress of each download reaches 100%, the download is successful.

## Building Open-source Software<a name="en-us_topic_0283136302_section13890105116714"></a>

The community provides built third-party binary files. If you directly use the built file, skip this step.

**Downloading the Code of the Open-Source Third-Party Software Repository**

Install git and git-lfs, and then run the following commands to download the openGauss-third\_party repository code:

\[user@linux sda\]$ git clone  _\[git ssh address\]_  openGauss-third\_party

**Building Open-source Software**

Before building openGauss, build the open-source third-party software on which openGauss depends. The open-source third-party software is stored in the  **openGauss-third\_party**  code repository. After downloading the software, you can use  **git lfs pull**  to obtain large files from the code repository. Generally, you only need to build the software once. If the open-source software is updated, rebuild the software.

Since this step takes a long time, we have built  **binarylibs**  using  **openGauss-third\_party**. You can download the package by referring to  [Downloading Code](#en-us_topic_0283136302_section188203481850).

**Table  1**  openGauss open-source third-party software required before build

<a name="en-us_topic_0283136302_table1212531681911"></a>
<table><thead align="left"><tr id="en-us_topic_0283136302_row317811661910"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136302_p14178216101910"><a name="en-us_topic_0283136302_p14178216101910"></a><a name="en-us_topic_0283136302_p14178216101910"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136302_p1117815167195"><a name="en-us_topic_0283136302_p1117815167195"></a><a name="en-us_topic_0283136302_p1117815167195"></a>Recommended Version</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136302_row12665347175013"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136302_p666574775019"><a name="en-us_topic_0283136302_p666574775019"></a><a name="en-us_topic_0283136302_p666574775019"></a>python3</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136302_p10665104719506"><a name="en-us_topic_0283136302_p10665104719506"></a><a name="en-us_topic_0283136302_p10665104719506"></a>3.6</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row197487916204"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136302_p107489922013"><a name="en-us_topic_0283136302_p107489922013"></a><a name="en-us_topic_0283136302_p107489922013"></a>python3-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136302_p2748179172017"><a name="en-us_topic_0283136302_p2748179172017"></a><a name="en-us_topic_0283136302_p2748179172017"></a>3</p>
</td>
</tr>
<tr id="row263592810916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p3635128198"><a name="p3635128198"></a><a name="p3635128198"></a>setuptools</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14635728598"><a name="p14635728598"></a><a name="p14635728598"></a>36.6.1</p>
</td>
</tr>
<tr id="row07201041201615"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18720144111617"><a name="p18720144111617"></a><a name="p18720144111617"></a>libaio-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2720144110166"><a name="p2720144110166"></a><a name="p2720144110166"></a>0.3.109-13</p>
</td>
</tr>
<tr id="row56941338161617"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p126948386168"><a name="p126948386168"></a><a name="p126948386168"></a>flex</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p56954385169"><a name="p56954385169"></a><a name="p56954385169"></a>2.5.31 or later</p>
</td>
</tr>
<tr id="row18537134151611"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p135391734101615"><a name="p135391734101615"></a><a name="p135391734101615"></a>ncurses-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p553973412160"><a name="p553973412160"></a><a name="p553973412160"></a>5.9-13.20130511</p>
</td>
</tr>
<tr id="row10128237131716"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1912963771719"><a name="p1912963771719"></a><a name="p1912963771719"></a>lsb_release</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p14129143711712"><a name="p14129143711712"></a><a name="p14129143711712"></a>4.1</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row36571916172017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136302_p18657151610204"><a name="en-us_topic_0283136302_p18657151610204"></a><a name="en-us_topic_0283136302_p18657151610204"></a>pam-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136302_p16578161209"><a name="en-us_topic_0283136302_p16578161209"></a><a name="en-us_topic_0283136302_p16578161209"></a>1.1.8-1.3.1</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row8539145811555"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136302_p154012589557"><a name="en-us_topic_0283136302_p154012589557"></a><a name="en-us_topic_0283136302_p154012589557"></a>libffi-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136302_p115401158175510"><a name="en-us_topic_0283136302_p115401158175510"></a><a name="en-us_topic_0283136302_p115401158175510"></a>3.1</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row317914169193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136302_p201791916201910"><a name="en-us_topic_0283136302_p201791916201910"></a><a name="en-us_topic_0283136302_p201791916201910"></a>patch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136302_p1018051610198"><a name="en-us_topic_0283136302_p1018051610198"></a><a name="en-us_topic_0283136302_p1018051610198"></a>2.7.1-10</p>
</td>
</tr>
<tr id="row058514201981"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1658614202084"><a name="p1658614202084"></a><a name="p1658614202084"></a>golang</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p18586192014810"><a name="p18586192014810"></a><a name="p18586192014810"></a>1.13.3 or later</p>
</td>
</tr>
<tr id="row1128152932212"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17291829182210"><a name="p17291829182210"></a><a name="p17291829182210"></a>autoconf</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p53092915223"><a name="p53092915223"></a><a name="p53092915223"></a>2.69</p>
</td>
</tr>
<tr id="row1172523915224"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1725143902212"><a name="p1725143902212"></a><a name="p1725143902212"></a>automake</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p07251739142211"><a name="p07251739142211"></a><a name="p07251739142211"></a>1.13.4</p>
</td>
</tr>
<tr id="row8361101702315"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p13361117192311"><a name="p13361117192311"></a><a name="p13361117192311"></a>cmake</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p63616179237"><a name="p63616179237"></a><a name="p63616179237"></a>3.18</p>
</td>
</tr>
<tr id="row6332136277"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p83339361373"><a name="p83339361373"></a><a name="p83339361373"></a>diffutils</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1133414367715"><a name="p1133414367715"></a><a name="p1133414367715"></a>3.7</p>
</td>
</tr>
<tr id="row142086918107"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p62105941014"><a name="p62105941014"></a><a name="p62105941014"></a>openssl-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1421039181011"><a name="p1421039181011"></a><a name="p1421039181011"></a>1.1.1</p>
</td>
</tr>
<tr id="row116164361033"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p76176361630"><a name="p76176361630"></a><a name="p76176361630"></a>libtool</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p161720364313"><a name="p161720364313"></a><a name="p161720364313"></a>2.4.2 or later</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row185636241451"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136302_p65646241259"><a name="en-us_topic_0283136302_p65646241259"></a><a name="en-us_topic_0283136302_p65646241259"></a>libtool-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136302_p9564624153"><a name="en-us_topic_0283136302_p9564624153"></a><a name="en-us_topic_0283136302_p9564624153"></a>2.4.2 or later</p>
</td>
</tr>
</tbody>
</table>

Prepare GCC 7.3 before building the third-party libraries. You are advised to use the released and built third-party library GCC and configure environment variables.

After installing the software listed in  [Table 1](#en-us_topic_0283136302_table1212531681911), point the default Python version to  **python3.x**  and perform the following operations:

1.  Perform the following operations to go to the directory of the open-source third-party software on which the kernel depends, build the open-source third-party software, and generate binary programs or library files.  **/sda/openGauss-third\_party**  is the directory for downloading open-source third-party software.

    ```
    [user@linux sda]$ cd /sda/openGauss-third_party/build
    [user@linux build]$ sh build_all.sh
    ```

2.  After the preceding commands are executed, the open-source third-party software required for openGauss build is automatically generated. To generate any open-source third-party software independently, go to the corresponding directory and run the  **build.sh**  script. For example:

    ```
    [user@linux sda]$ cd /sda/openGauss-third_party/dependency/openssl
    [user@linux openssl]$ sh build.sh
    ```

    The OpenSSL is generated.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >For error logs, you can view the corresponding log in the build directory and the log in the corresponding module. For example, you can view the OpenSSL build and installation logs in the  **dependency**  module.
    >-   /sda/openGauss-third\_party/build/dependency\_build.log
    >-   /sda/openGauss-third\_party/dependency/build/openssl\_build.log
    >-   /sda/openGauss-third\_party/dependency/openssl/build\_openssl.log


**Build Result**

After the preceding script is executed, the final build result is stored in  **output**  under the  **openGauss-third\_party**  directory These files will be used during the  **openGauss-server**  build.

## Introduction to cmake\_package\_mini.sh<a name="en-us_topic_0283136302_section926810175121"></a>

**openGauss-server/build/script/cmake\_package\_mini.sh**  is the build script of openGauss Lite. Lite compilation and packaging can be quickly performed.

The following table describes the parameters.

**Table  2**  cmake\_package\_mini.sh parameters

<a name="en-us_topic_0283136302_table1575410358472"></a>
<table><thead align="left"><tr id="en-us_topic_0283136302_row1975463519471"><th class="cellrowborder" valign="top" width="14.84148414841484%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136302_p27541635104712"><a name="en-us_topic_0283136302_p27541635104712"></a><a name="en-us_topic_0283136302_p27541635104712"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="20.4020402040204%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136302_p272091325813"><a name="en-us_topic_0283136302_p272091325813"></a><a name="en-us_topic_0283136302_p272091325813"></a>Default Value</p>
</th>
<th class="cellrowborder" valign="top" width="21.992199219921993%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136302_p493319175413"><a name="en-us_topic_0283136302_p493319175413"></a><a name="en-us_topic_0283136302_p493319175413"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="42.76427642764276%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136302_p1675513514716"><a name="en-us_topic_0283136302_p1675513514716"></a><a name="en-us_topic_0283136302_p1675513514716"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136302_row107551359472"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136302_p117551135124713"><a name="en-us_topic_0283136302_p117551135124713"></a><a name="en-us_topic_0283136302_p117551135124713"></a>-h|--help</p>
</td>
<td class="cellrowborder" valign="top" width="20.4020402040204%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136302_p117201513155810"><a name="en-us_topic_0283136302_p117201513155810"></a><a name="en-us_topic_0283136302_p117201513155810"></a>No default value</p>
</td>
<td class="cellrowborder" valign="top" width="21.992199219921993%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136302_p169341617443"><a name="en-us_topic_0283136302_p169341617443"></a><a name="en-us_topic_0283136302_p169341617443"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136302_p157551835144710"><a name="en-us_topic_0283136302_p157551835144710"></a><a name="en-us_topic_0283136302_p157551835144710"></a>Help menu</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row0188244165818"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136302_p51882044145810"><a name="en-us_topic_0283136302_p51882044145810"></a><a name="en-us_topic_0283136302_p51882044145810"></a>-m</p>
</td>
<td class="cellrowborder" valign="top" width="20.4020402040204%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136302_p718894410584"><a name="en-us_topic_0283136302_p718894410584"></a><a name="en-us_topic_0283136302_p718894410584"></a>release</p>
</td>
<td class="cellrowborder" valign="top" width="21.992199219921993%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136302_p1993418171411"><a name="en-us_topic_0283136302_p1993418171411"></a><a name="en-us_topic_0283136302_p1993418171411"></a>[debug | release | memcheck]</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136302_p5188184405812"><a name="en-us_topic_0283136302_p5188184405812"></a><a name="en-us_topic_0283136302_p5188184405812"></a>Selects the target version.</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row1675515357477"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136302_p6755235114711"><a name="en-us_topic_0283136302_p6755235114711"></a><a name="en-us_topic_0283136302_p6755235114711"></a>-3rd|--binarylib_dir</p>
</td>
<td class="cellrowborder" valign="top" width="20.4020402040204%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136302_p1772010136588"><a name="en-us_topic_0283136302_p1772010136588"></a><a name="en-us_topic_0283136302_p1772010136588"></a>Binary path of dependent third-party software</p>
</td>
<td class="cellrowborder" valign="top" width="21.992199219921993%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136302_p1493614171349"><a name="en-us_topic_0283136302_p1493614171349"></a><a name="en-us_topic_0283136302_p1493614171349"></a>[binarylibs path]</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136302_p1755173520474"><a name="en-us_topic_0283136302_p1755173520474"></a><a name="en-us_topic_0283136302_p1755173520474"></a>Specifies the path of <strong id="b1303969713113418"><a name="b1303969713113418"></a><a name="b1303969713113418"></a>binarylibs</strong>. The path must be an absolute path.</p>
</td>
</tr>
<tr id="en-us_topic_0283136302_row1875543594716"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p20169171035419"><a name="p20169171035419"></a><a name="p20169171035419"></a>-nopkg</p>
</td>
<td class="cellrowborder" valign="top" width="20.4020402040204%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136302_p372131325815"><a name="en-us_topic_0283136302_p372131325815"></a><a name="en-us_topic_0283136302_p372131325815"></a>No default value</p>
</td>
<td class="cellrowborder" valign="top" width="21.992199219921993%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136302_p693619174418"><a name="en-us_topic_0283136302_p693619174418"></a><a name="en-us_topic_0283136302_p693619174418"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136302_p13756143512476"><a name="en-us_topic_0283136302_p13756143512476"></a><a name="en-us_topic_0283136302_p13756143512476"></a>Performs compilation only.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 

>1.  **-m \[debug | release | memcheck\]**  indicates that three target versions can be selected:

>    -   **release**: indicates that the binary program of the release version is generated. During this version build, the GCC high-level optimization option is configured to remove the kernel debugging code. This option is usually used in the production environment or performance test environment.

>    -   **debug**: indicates that a binary program of the debug version is generated. During this version build, the kernel code debugging function is added, which is usually used in the development self-test environment.

>    -   **memcheck**: indicates that a binary program of the memcheck version is generated. During this version build, the ASAN function is added based on the debug version to locate memory problems.

>2.  **-3rd \[binarylibs path\]**  is the path of  **binarylibs**. You need to specify the absolute path of the third-party library.

>3.  **-nopkg**  performs only lite compilation, and no packaging is performed. The compilation result is stored in the  **openGauss-server/mppdb\_temp\_install**  directory. If this parameter is not specified, the file is packaged by default and the packaging result is stored in the  **openGauss-server/output**  directory.

>4.  Each option in this script has a default value. The number of options is small and the dependency is simple. Therefore, this script is easy to use. If the required value is different from the default value, set this parameter based on the actual requirements.

