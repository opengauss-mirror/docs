# Obtaining and Verifying an Installation Package<a name="EN-US_TOPIC_0289899746"></a>

You can obtain the installation package from the openGauss open-source community.

## Procedure<a name="en-us_topic_0283136484_en-us_topic_0241802590_en-us_topic_0085434667_en-us_topic_0059782060_section62223956163549"></a>

1.  Download the installation package of the corresponding platform from the openGauss community.
    1.  Log in to the openGauss open-source community at  [https://opengauss.org/en/download/](https://opengauss.org/en/download/), select  **3.0.0**  in the  **Version**  field, and download the corresponding Enterprise-Edition installation package.

    2.  Click  **Download**.

2.  Verify the installation package.

    Decompress the installation package and check whether the installation directory and files are complete. Run the following commands in the directory where the installation package is stored:

    ```
    tar -zxvf openGauss-x.x.x-openEuler-64bit.tar-all.gz
    ls -lb
    ```

    Run the  **ls**  command and information similar to the following is displayed. 

    ```
    total 50M
    -rw------- 1 root root       65 Dec 25 15:34 openGauss-x.x.x-openEuler-64bit-om.sha256
    -rw------- 1 root root 12910775 Dec 25 15:34 openGauss-x.x.x-openEuler-64bit-om.tar.gz
    -rw------- 1 root root       65 Dec 25 15:34 openGauss-x.x.x-openEuler-64bit.sha256
    -rw------- 1 root root 73334256 Dec 25 15:34 openGauss-x.x.x-openEuler-64bit.tar.bz2
    -rw------- 1 root root       65 Dec 25 15:34 upgrade_sql.sha256
    -rw------- 1 root root   134747 Dec 25 15:34 upgrade_sql.tar.gz
    ```


