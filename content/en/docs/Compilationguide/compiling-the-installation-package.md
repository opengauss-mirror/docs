# Compiling the Installation Package<a name="EN-US_TOPIC_0241496988"></a>

To compile the installation package is to compile the code and generate the software installation package. The compilation and packaging process of the installation package is also integrated in  **build.sh**.

## Prerequisites<a name="section383084619310"></a>

-   The software and hardware have been prepared based on the requirements for setting up the compilation environment, and the code has been downloaded by referring to  [Downloading Code](downloading-code.md).
-   The open-source software has been compiled and built. For details, see  [Compiling Open-source Software](compiling-open-source-software.md).
-   You are familiar with the parameter options and functions of the  **[build.sh](introduction-to-build-sh.md)**  script.
-   The code environment is clean, and no file is generated before the current compilation. For details, see  [FAQ 4.1](how-do-i-delete-temporary-files-generated-during-compilation.md).

## Procedure<a name="section164893273386"></a>

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

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >You can add the  **--no\_om\_adapt**  option to specify that the installation package does not adapt to the OM.  
    >This step involves the process of generating software by one-click compilation and the process of encapsulating the software into an installation package. Compared with the  **build.sh**  command in  [Software Compilation and Installation](software-compilation-and-installation.md), only the  **-pkg**  option is added.  

3.  If the following information is displayed, the installation package compilation is successful:

    ```
    success!
    ```

    -   The generated installation package is stored in the  **./package**  directory.
    -   Compilation log: make\_compile.log
    -   Installation package packaging log: ./package/make\_package.log


