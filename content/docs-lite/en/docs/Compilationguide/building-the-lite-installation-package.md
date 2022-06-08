# Building the Lite Installation Package<a name="EN-US_TOPIC_0289899546"></a>

Use the  **build/script/cmake\_package\_mini.sh**  script to build the openGauss Lite installation package.

## Prerequisites<a name="en-us_topic_0283136303_section383084619310"></a>

-   The software and hardware have been prepared based on the requirements in  [Setting up the Build Environment](setting-up-the-build-environment.md), and the code has been downloaded by referring to  [Downloading Code](preparations.md#en-us_topic_0283136302_section188203481850).
-   Open-source software has been built. For details, see  [Building Open-source Software](preparations.md#en-us_topic_0283136302_section13890105116714).
-   You are familiar with the parameter options and functions of the  **cmake\_package\_mini.sh**  script.

## Procedure<a name="en-us_topic_0283136303_section164893273386"></a>

1.  Run the following command to go to the code directory:

    ```
    [user@linux sda]$ cd /sda/openGauss-server/build/script
    ```

2.  Run the following command to build the openGauss installation package:

    ```
    [user@linux openGauss-server]$ sh cmake_package_mini.sh -3rd [binarylibs path] -m [release | debug | memcheck]
    ```

    For example:

    ```
    sh build.sh -m release -3rd /sdc/binarylibs -pkg            # Generate the openGauss Lite installation package of the release version.
    ```

3.  If the following information is displayed, the installation package build is successful:

    ```
    success!
    ```

    -   The generated installation package is stored in the  **./output**  directory.
    -   The build and packaging log file is stored in  **./build/script/makemppdb\_pkg.log**.


