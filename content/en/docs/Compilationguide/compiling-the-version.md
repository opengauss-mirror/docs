# Compiling the Version<a name="EN-US_TOPIC_0241496980"></a>

A  **build.sh**  script is provided for compiling openGauss and generating the installation package. You can compile openGauss by using the script. You can also configure environment variables and run commands to compile openGauss.
<!-- TOC -->

- [Preparation Before Compiling](#preparation-before-compiling)
- [Software Compilation and Installation](#software-compilation-and-installation)
- [Compiling the Installation Package](#compiling-the-installation-package)

<!-- /TOC -->

This section describes the prerequisites and procedure for openGauss compilation. The following figure shows the compilation process.

![](figures/绘图1.png)  


## Preparation Before Compiling

### Downloading Code

**Prerequisites**

The git and git-lfs have been installed and configured on the local host.

**Procedure**

1.  Run the following command to download the code and open-source and third-party software repository.  _\[git ssh address\]_  indicates the actual code download address. You can obtain them from the openGauss community.

    ```
    [user@linux sda]$ git clone [git ssh address] openGauss-server
    [user@linux sda]$ git clone [git ssh address] openGauss-third_party
    [user@linux sda]$ # mkdir binarylibs        For details about this comment, see the following note.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   **openGauss-server**: openGauss code repository.
    >-   **openGauss-third\_party**: open-source third-party software repository on which openGauss depends.
    >-   **binarylibs**: package for storing the built open-source third-party software. You can obtain the package by referring to  [Compiling Open-source Software](#section38901725122017)  . Since compiling and building open-source software take a long time, we have compiled and built  **binarylibs**  using  **openGauss-third\_party**  and compress and upload  **binarylibs**  to the Internet.
    >    You can download the compressed package by visiting  **https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-third\_party\_binarylibs.tar.gz**.
    >    After the download is complete, decompress the package and rename the folder to  **binarylibs**.

2.  When the progress of each download reaches 100%, the download is successful.

### Compiling Open-source Software

**Compiling Open-source Software**

Before compiling the openGauss, compile and build the open-source and third-party software on which the openGauss depends. These open-source and third-party software is stored in the  **openGauss-third\_party**  code repository. After downloading the software, you can use  **git lfs pull**  to obtain large files from the code repository. Generally, you only need to build the software once. If the open-source software is updated, rebuild the software.

Since this step takes a long time, we have compiled and built  **binarylibs**  using  **openGauss-third\_party**. You can download the package by referring to  [Downloading Code](#section233903211619).

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
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p2748179172017"><a name="p2748179172017"></a><a name="p2748179172017"></a>-3</p>
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
<tr id="row185636241451"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p65646241259"><a name="p65646241259"></a><a name="p65646241259"></a>libtool</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9564624153"><a name="p9564624153"></a><a name="p9564624153"></a>2.4.2 or later</p>
</td>
</tr>
</tbody>
</table>

In addition, you need to download the  [gcc-8.2.0.zip](https://github.com/gcc-mirror/gcc/archive/releases/gcc-8.2.0.zip)  or  [gcc-8.2.0.tar.gz](https://github.com/gcc-mirror/gcc/archive/releases/gcc-8.2.0.tar.gz)  source code package of gcc8.2.0 and copy it to the corresponding path. For example, if the download directory of the open-source third-party software is  **/sda/openGauss-third\_party**, copy the gcc source code package to the  **/sda/openGauss-third\_party/buildtools/gcc/**  directory. After the software and gcc8.2.0 source code package in  [Table 1](#table1212531681911)  are downloaded and copied to the corresponding path, point the default Python version to  **python3.x**  and perform the following operations:

1.  Run the following commands to go to the directory of the open-source and third-party software on which the kernel depends, compile and build the open-source and third-party software, and generate binary programs or library files.  **/sda/openGauss-third\_party**  is the directory for downloading open-source third-party software.

    ```
    [user@linux sda]$ cd /sda/openGauss-third_party/build
    [user@linux build]$ sh build_all.sh
    ```

2.  After the preceding commands are executed, the open-source and third-party software required for openGauss compilation is automatically generated. To generate any open-source and third-party software independently, go to the corresponding directory and run the  **build.sh**  script. For example:

    ```
    [user@linux sda]$ cd /sda/openGauss-third_party/dependency/openssl
    [user@linux openssl]$ sh build.sh
    ```

    The OpenSSL is generated.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >For error logs, you can view the corresponding log in the build directory and the log in the corresponding module. For example, you can view the OpenSSL compilation and installation logs in the  **dependency**  module.
    >-   /sda/openGauss-third\_party/build/dependency\_build.log
    >-   /sda/openGauss-third\_party/dependency/build/openssl\_build.log
    >-   /sda/openGauss-third\_party/dependency/openssl/build\_openssl.log


**Compilation and Build Result**

After the preceding script is executed, the final compilation and build result is stored in the  **binarylibs**  directory at the same level as  **openGauss-third\_party**. These files will be used during the compilation of  **openGauss-server**.

### Introduction to build.sh

**openGauss-server/build.sh**  is an important script tool during compilation. It integrates software installation and compilation and product installation package compilation functions to quickly compile and package code.

The following table describes the parameters.

**Table  2**  build.sh parameters

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
<tr id="row1271210213485"><td class="cellrowborder" valign="top" width="14.84148414841484%" headers="mcps1.2.5.1.1 "><p id="p3713112184817"><a name="p3713112184817"></a><a name="p3713112184817"></a>-nopt</p>
</td>
<td class="cellrowborder" valign="top" width="34.87348734873487%" headers="mcps1.2.5.1.2 "><p id="p11982718195610"><a name="p11982718195610"></a><a name="p11982718195610"></a>Do not use this option.</p>
</td>
<td class="cellrowborder" valign="top" width="7.520752075207521%" headers="mcps1.2.5.1.3 "><p id="p12969132175620"><a name="p12969132175620"></a><a name="p12969132175620"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.76427642764276%" headers="mcps1.2.5.1.4 "><p id="p371302154814"><a name="p371302154814"></a><a name="p371302154814"></a>If this option is used, the CPU of the Kunpeng platform is not optimized.</p>
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

## Software Compilation and Installation

Software compilation and installation are to compile code to generate software and install the software on a computer. The one-click compilation script  **build.sh**  is provided. You can also manually configure environment variables. The two methods are described below in this section.

### Prerequisites

-   The software and hardware have been prepared based on the requirements for setting up the compilation environment, and the code has been downloaded by referring to  [Downloading Code](preparation-before-compiling.md#section233903211619).
-   The open-source software has been compiled and built. For details, see   [Compiling Open-source Software](preparation-before-compiling.md#section38901725122017).
-   You are familiar with the parameter options and functions of the  [build.sh](preparation-before-compiling.md#section6993103732114)  script.
-   The code environment is clean, and no file is generated before the current compilation. For details, see  [FAQ 4.1](how-do-i-delete-temporary-files-generated-during-compilation.md).

### Compilation Using the One-click Script

1.  Run the following command to go to the directory where the software code compilation script is stored:

    ```
    [user@linux sda]$ cd /sda/openGauss-server
    ```

2.  <a name="li1666842982511"></a>Run the following command to compile openGauss:

    ```
    [user@linux openGauss-server]$ sh build.sh -m [debug | release | memcheck] -3rd [binarylibs path]
    ```

    For example:

    ```
    sh build.sh      # Compile and install openGauss of the release version. binarylibs or its soft link must exist in the code directory. Otherwise, the operation fails.
    sh build.sh -m debug -3rd /sdc/binarylibs            # Compile and install openGauss of the debug version.
    ```

3.  If the following information is displayed, the compilation is successful:

    ```
    make compile sucessfully!
    ```

    -   The software installation path after compilation is  **/sda/openGauss-server/dest**.
    -   The compiled binary files are stored in  **/sda/openGauss-server/dest/bin**.
    -   Compilation log: make\_compile.log


### Manual Compilation

1.  Run the following command to go to the software code directory:

    ```
    [user@linux sda]$ cd /sda/openGauss-server
    ```

2.  Run the following script to obtain the system version:

    ```
    [user@linux openGauss-server]$ sh src/get_PlatForm_str.sh
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The command output indicates the OSs supported by the openGauss. The OSs supported by the openGauss are centos7.6\_x86\_64 and openeuler\_aarch64.
    >-   If  **Failed**  or another version is displayed, the openGauss does not support the current operating system.

3.  Configure environment variables, add  **\_\_\_\_**  based on the code download location, and replace  **\*\*\***  with the result obtained in  [Step 2](#li1666842982511).

    ```
    export CODE_BASE=________     # Path of the openGauss-server file
    export BINARYLIBS=________    # Path of the binarylibs file
    export GAUSSHOME=$CODE_BASE/dest/
    export GCC_PATH=$BINARYLIBS/buildtools/***/gcc8.2/
    export CC=$GCC_PATH/gcc/bin/gcc
    export CXX=$GCC_PATH/gcc/bin/g++
    export LD_LIBRARY_PATH=$GAUSSHOME/lib:$GCC_PATH/gcc/lib64:$GCC_PATH/isl/lib:$GCC_PATH/mpc/lib/:$GCC_PATH/mpfr/lib/:$GCC_PATH/gmp/lib/:$LD_LIBRARY_PATH
    export PATH=$GAUSSHOME/bin:$GCC_PATH/gcc/bin:$PATH
    ```

4.  Select a version and configure it.

    **debug**  version:

    ```
    ./configure --gcc-version=8.2.0 CC=g++ CFLAGS='-O0' --prefix=$GAUSSHOME --3rd=$BINARYLIBS --enable-debug --enable-cassert --enable-thread-safety --without-readline --without-zlib
    ```

    **release**  version:

    ```
    ./configure --gcc-version=8.2.0 CC=g++ CFLAGS="-O2 -g3" --prefix=$GAUSSHOME --3rd=$BINARYLIBS --enable-thread-safety --without-readline --without-zlib
    ```

    **memcheck**  version:

    ```
    ./configure --gcc-version=8.2.0 CC=g++ CFLAGS='-O0' --prefix=$GAUSSHOME --3rd=$BINARYLIBS --enable-debug --enable-cassert --enable-thread-safety --without-readline --without-zlib --enable-memory-check
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >1.  _\[debug | release | memcheck\]_  indicates that three target versions are available. The three target versions are as follows:
    >    -   **release**: indicates that the binary program of the release version is generated. During compilation of this version, the GCC high-level optimization option is configured to remove the kernel debugging code. This option is usually used in the generation environment or performance test environment.
    >    -   **debug**: indicates that a binary program of the debug version is generated. During compilation of this version, the kernel code debugging function is added, which is usually used in the development self-test environment.
    >    -   **memcheck**: indicates that a binary program of the memcheck version is generated. During compilation of this version, the ASAN function is added based on the debug version to locate memory problems.
    >2.  On the ARM-based platform,  **-D\_\_USE\_NUMA**  needs to be added to  **CFLAGS**.
    >3.  On the  **ARMv8.1**  platform or a later version \(for example, Kunpeng 920\),  **-D\_\_ARM\_LSE**  needs to be added to  **CFLAGS**.
    >4.  If  **binarylibs**  is moved to  **openGauss-server**  or a soft link to  **binarylibs**  is created in  **openGauss-server**, you do not need to specify the  **--3rd**  parameter. However, if you do so, please note that the file is easy to be deleted by the  **git clean**  command.

5.  Run the following commands to compile openGauss:

    ```
    [user@linux openGauss-server]$ make -sj
    [user@linux openGauss-server]$ make install -sj
    ```

6.  If the following information is displayed, the compilation and installation are successful:

    ```
    openGauss installation complete.
    ```

    -   The software installation path after compilation is  _$GAUSSHOME_.
    -   The compiled binary files are stored in  _$GAUSSHOME_**/bin**.


## Compiling the Installation Package

To compile the installation package is to compile the code and generate the software installation package. The compilation and packaging process of the installation package is also integrated in  **build.sh**.

### Prerequisites

-   The software and hardware have been prepared based on the requirements for setting up the compilation environment, and the code has been downloaded by referring to  [Downloading Code](preparation-before-compiling.md#section233903211619).
-   The open-source software has been compiled and built. For details, see   [Compiling Open-source Software](preparation-before-compiling.md#section38901725122017).
-   You are familiar with the parameter options and functions of the  [build.sh](preparation-before-compiling.md#section6993103732114)  script.
-   The code environment is clean, and no file is generated before the current compilation. For details, see  [FAQ 4.1](how-do-i-delete-temporary-files-generated-during-compilation.md).

### Procedure

1.  Run the following command to go to the code directory:

    ```
    [user@linux sda]$ cd /sda/openGauss-server
    ```

2.  Run the following command to compile the openGauss installation package:

    ```
    [user@linux openGauss-server]$ sh build.sh -m [debug | release | memcheck] -3rd [binarylibs path] -pkg
    ```

    For example:

    ```
    sh build.sh -pkg      # Generate the openGauss installation package of the release version. binarylibs or its soft link must exist in the code directory. Otherwise, the operation fails.
    sh build.sh -m debug -3rd /sdc/binarylibs -pkg            # Generate the openGauss installation package of the debug version.
    ```

    Compared with  [Software Compilation and Installation](software-compilation-and-installation.md), this operation involves the process of generating software by one-click compilation and the process of encapsulating the software into an installation package. Compared with the  **build.sh**  command in  [Software Compilation and Installation](software-compilation-and-installation.md), only the  **-pkg**  option is added.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 

3.  If the following information is displayed, the installation package compilation is successful:

    ```
    success!
    ```

    -   The generated installation package is stored in the  **./package**  directory.
    -   Compilation log: make\_compile.log
    -   Installation package packaging log: ./package/make\_package.log


