# Obtaining and Verifying an Installation Package<a name="EN-US_TOPIC_0000001224028753"></a>

## Procedure<a name="en-us_topic_0289899746_en-us_topic_0283136484_en-us_topic_0241802590_en-us_topic_0085434667_en-us_topic_0059782060_section62223956163549"></a>

1.  Download the installation package of the corresponding platform from the openGauss community.
    1.  [Log in to the openGauss community](https://opengauss.org/en/download/)  and download the latest installation package of the corresponding platform. For individual developers or non-enterprise-level environments, download the simplified installation package \(without installing components such as the OM\).
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
    total 90296
    drwx------ 3 root root     4096 Mar 31 21:18 bin
    drwx------ 3 root root     4096 Mar 31 21:18 etc
    drwx------ 3 root root     4096 Mar 31 21:18 include
    drwx------ 4 root root     4096 Mar 31 21:18 jre
    drwx------ 5 root root     4096 Mar 31 21:18 lib
    drwx------ 5 root root     4096 Mar 31 21:18 share
    drwx------ 2 root root     4096 Mar 31 21:18 simpleInstall
    -rw------- 1 root root       32 Mar 31 21:18 version.cfg
    ```


