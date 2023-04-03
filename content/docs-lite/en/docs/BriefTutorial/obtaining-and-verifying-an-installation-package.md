# Obtaining and Verifying an Installation Package<a name="EN-US_TOPIC_0000001255141781"></a>

## Procedure<a name="en-us_topic_0289899746_en-us_topic_0283136484_en-us_topic_0241802590_en-us_topic_0085434667_en-us_topic_0059782060_section62223956163549"></a>

1.  Download the installation package of the corresponding platform from the openGauss community.
    1.  [Log in to the openGauss community](https://opengauss.org/en/download/)  and download the latest installation package of the corresponding platform. For individual developers or in non-enterprise-level environments, download the small-scale installation package.
    2.  Click  **Download**.

2.  Check the installation package.

    Decompress the installation package and check whether the installation directory and files are complete. Run the following commands in the directory where the installation package is stored:

    ```
    mkdir openGauss
    tar -jxf openGauss-x.x.x-openEuler-64bit.tar.bz2 –C openGauss
    ls -lb openGauss/
    ```

    Run the  **ls**  command to display information similar to the following:

    ```
    total 147716
    drwx------ 2 root root     4096 Jan  4 21:23 dependency
    -rwx------ 1 root root 73683192 Jan  4 21:23 openGauss-Lite-x.x.x-openEuler-aarch64.bin
    -rw------- 1 root root       65 Jan  4 21:23 openGauss-Lite-x.x.x-openEuler-aarch64.sha256
    -rw------- 1 root root 77146951 Jan  4 21:23 openGauss-Lite-x.x.x-openEuler-aarch64.tar.gz
    -rw------- 1 root root    29154 Jan  4 21:23 install.sh
    -rw------- 1 root root      724 Jan  4 21:23 opengauss_lite.conf
    -rw------- 1 root root     2727 Jan  4 21:23 uninstall.sh
    -rw------- 1 root root    31304 Jan  4 21:23 upgrade_common.sh
    -rw------- 1 root root      968 Jan  4 21:23 upgrade_config.sh
    -rw------- 1 root root      245 Jan  4 21:23 upgrade_errorcode.sh
    -rw------- 1 root root      768 Jan  4 21:23 upgrade_GAUSSV5.sh
    -rw------- 1 root root       65 Jan  4 21:23 upgrade_sql.sha256
    -rw------- 1 root root   323935 Jan  4 21:23 upgrade_sql.tar.gz
    -rw------- 1 root root       43 Jan  4 21:23 version.cfg
    ```
