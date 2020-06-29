# Compiling Open-source Software<a name="EN-US_TOPIC_0241496989"></a>

## Compiling Open-source Software<a name="section205881263398"></a>

Before compiling the openGauss, compile and build the open-source and third-party software on which the openGauss depends. These open-source and third-party software is stored in the openGauss-third\_party code repository and usually needs to be built only once. If the open-source software is updated, rebuild the software.

Since this step takes a long time, we have compiled and built  **binarylibs**  using  **openGauss-third\_party**  and compress and upload  **binarylibs**  to the Internet. You can download the compressed package by referring to  [Downloading Code](downloading-code.md).

**Table  1**  Requirements for the openGauss open-source and third-party software before compilation

<a name="table1212531681911"></a>
<table><thead align="left"><tr id="row317811661910"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p14178216101910"><a name="p14178216101910"></a><a name="p14178216101910"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1117815167195"><a name="p1117815167195"></a><a name="p1117815167195"></a>Recommended Version</p>
</th>
</tr>
</thead>
<tbody><tr id="row12665347175013"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p666574775019"><a name="p666574775019"></a><a name="p666574775019"></a>python3</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p10665104719506"><a name="p10665104719506"></a><a name="p10665104719506"></a>3.6</p>
</td>
</tr>
<tr id="row197487916204"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p107489922013"><a name="p107489922013"></a><a name="p107489922013"></a>python3-dev</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2748179172017"><a name="p2748179172017"></a><a name="p2748179172017"></a>3.x</p>
</td>
</tr>
<tr id="row36571916172017"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18657151610204"><a name="p18657151610204"></a><a name="p18657151610204"></a>pam-devl</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p16578161209"><a name="p16578161209"></a><a name="p16578161209"></a>1.1.8-1.3.1</p>
</td>
</tr>
<tr id="row8179181610191"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p101791416191912"><a name="p101791416191912"></a><a name="p101791416191912"></a>ncurses-devel</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p0179161651913"><a name="p0179161651913"></a><a name="p0179161651913"></a>5.9-13.20130511</p>
</td>
</tr>
<tr id="row8539145811555"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p154012589557"><a name="p154012589557"></a><a name="p154012589557"></a>libffi-dev</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p115401158175510"><a name="p115401158175510"></a><a name="p115401158175510"></a>3.1</p>
</td>
</tr>
<tr id="row317914169193"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p201791916201910"><a name="p201791916201910"></a><a name="p201791916201910"></a>patch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1018051610198"><a name="p1018051610198"></a><a name="p1018051610198"></a>2.7.1-10</p>
</td>
</tr>
</tbody>
</table>

Run the following commands to go to the directory of the open-source and third-party software on which the kernel depends, compile and build the open-source and third-party software, and generate binary programs or library files.  **/sda/openGauss-third\_party**  is the directory for downloading open-source third-party software.

```
[user@linux sda]$ cd /sda/openGauss-third_party/build
[user@linux sda]$ sh build.sh
```

After the preceding commands are executed, the open-source and third-party software required for openGauss compilation is automatically generated. To generate any open-source and third-party software independently, go to the corresponding directory and run the  **build.sh**  script. For example:

```
[user@linux sda]$ cd /sda/openGauss-third_party/dependency/openssl
[user@linux sda]$ sh build.sh
```

The OpenSSL is generated.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>For error logs, you can view the corresponding log in the build directory and the log in the corresponding module. For example, you can view the OpenSSL compilation and installation logs in the  **dependency**  module.  
>-   /sda/openGauss-third\_party/build/dependency\_build.log  
>-   /sda/openGauss-third\_party/dependency/build/openssl\_build.log  
>-   /sda/openGauss-third\_party/dependency/openssl/build\_openssl.log  

## Compilation and Build Result<a name="section6154155234112"></a>

After the preceding script is executed, the final compilation and build result is stored in the  **binarylibs**  directory at the same level as  **openGauss-third\_party**. These files will be used during the compilation of  **openGauss-server**.

