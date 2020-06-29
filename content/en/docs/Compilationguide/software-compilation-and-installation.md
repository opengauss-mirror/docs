# Software Compilation and Installation<a name="EN-US_TOPIC_0241496976"></a>

Software compilation and installation are to compile code to generate software and install the software on a computer. The one-click compilation script  **build.sh**  is provided. You can also manually configure environment variables. The two methods are described below in this section.

## Prerequisites<a name="section383084619310"></a>

-   The software and hardware have been prepared based on the requirements for setting up the compilation environment, and the code has been downloaded by referring to  [Downloading Code](downloading-code.md).
-   The open-source software has been compiled and built. For details, see  [Compiling Open-source Software](compiling-open-source-software.md).
-   You are familiar with the parameter options and functions of the  **[build.sh](introduction-to-build-sh.md)**  script.
-   The code environment is clean, and no file is generated before the current compilation. For details, see  [FAQ 4.1](how-do-i-delete-temporary-files-generated-during-compilation.md).

## Compilation Using the One-click Script<a name="section1549373123218"></a>

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


## Manual Compilation<a name="section1896812274122"></a>

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


