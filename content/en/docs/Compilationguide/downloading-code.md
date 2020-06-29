# Downloading Code<a name="EN-US_TOPIC_0241496981"></a>

## Prerequisites<a name="section11422715162119"></a>

The git and git-lfs have been installed and configured on the local host.

## Procedure<a name="section1642821512217"></a>

1.  Run the following command to download the code and open-source and third-party software repository.  _\[git ssh address\]_  indicates the actual code download address. You can obtain them from the openGauss community.

    ```
    [user@linux sda]$ git clone [git ssh address] openGauss-server
    [user@linux sda]$ git clone [git ssh address] openGauss-third_party
    [user@linux sda]$ # mkdir binarylibs        For details about this comment, see the following note.
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   **openGauss-server**: openGauss code repository.  
    >-   **openGauss-third\_party**: open-source third-party software repository on which openGauss depends.  
    >-   **binarylibs**: package for storing the built open-source third-party software. You can obtain the package by referring to  [Compiling Open-source Software](compiling-open-source-software.md). Since compiling and building open-source software take a long time, we have compiled and built  **binarylibs**  using  **openGauss-third\_party**  and compress and upload  **binarylibs**  to the Internet.  
    >    You can download the compressed package by visiting  **https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-third\_party\_binarylibs.tar.gz**.  
    >    After the download is complete, decompress the package and rename the folder to  **binarylibs**.  

2.  When the progress of each download reaches 100%, the download is successful.

