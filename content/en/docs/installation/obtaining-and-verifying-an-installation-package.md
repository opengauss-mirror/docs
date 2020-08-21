# Obtaining and Verifying an Installation Package<a name="EN-US_TOPIC_0249784569"></a>

To prevent network security threats caused by malicious tampering or damage during installation package transfer, verify the integrity of an installation package after obtaining it. Deployment can be started only after the package passes the verification.

## Prerequisites<a name="en-us_topic_0241802590_en-us_topic_0085434667_en-us_topic_0059782060_section53511076163549"></a>

You have obtained the openGauss installation package and the signature file. The two must be saved in the same directory, and each package corresponds to a verification file. The signature file is released together with the corresponding software package in .sha256 format. Generally, the file name is the same as the package name. If the name of the installation package is  **openGauss-_x.x.x_.x-openEuler-64bit.tar.gz**, the name of the verification file corresponding to this package is  **openGauss-_x.x.x_.x-openEuler-64bit.tar.gz.sha256**.

## Procedure<a name="en-us_topic_0241802590_en-us_topic_0085434667_en-us_topic_0059782060_section62223956163549"></a>

1.  Download the installation package of the corresponding platform from the openGauss community.
    1.  Log in to the openGauss community.
    2.  Click  **Download**.
    3.  Decompress the downloaded package.

2.  Verify the installation package.
    1.  Decompress the installation package and check whether the installation directory and files are complete. Run the following commands in the directory where the installation package is stored:

        ```
        tar -zxvf openGauss-x.x.x-openEuler-64bit.tar.gz
        ls -1
        ```

        Run the  **ls**  command and information similar to the following is displayed.  **openGauss-_x.x.x_-openEuler-64bit.tar.gz**  in the  **packages**  directory indicates the database installation package. During the  **openGauss-_x.x.x_**  installation process, SHA256 authentication is automatically performed for the database installation program.

        ```
        total 577M
        -rw-r--r--  1 root root   36 Jun 15 11:46 bepkit_env.conf
        drwxr-xr-x 14 root root 4.0K Jun 15 11:46 lib
        -rw-r--r--  1 root root   65 Jun 15 11:46 openGauss-x.x.x-openEuler-64bit.sha256
        -rwxr-xr-x  1 root root 214M Jun 15 11:46 openGauss-x.x.x-openEuler-64bit-symbol.tar.gz
        -rw-r--r--  1 root root  47M Jun 15 11:46 openGauss-x.x.x-openEuler-64bit.tar.bz2
        -rw-r--r--  1 root root  53M Jun 15 11:46 openGauss-x.x.x-openEuler-64bit.tar.gz
        -rw-------  1 root root 265M Jun 18 15:50 openGauss-x.x.x_PACKAGES_RELEASE.tar.gz
        drwxr-xr-x  5 root root 4.0K Jun 15 11:46 script
        -rw-r--r--  1 root root   32 Jun 15 11:46 version.cfg
        
        ```

    2.  Go to the scripts directory, start the openGauss installation, and observe whether the installation is successful.

        During the installation, the installation package automatically uses the SHA256 file to verify the integrity of the installation program.

        If information similar to the following is displayed, verification of the database installation package fails, causing the openGauss installation failure.

        ```
        Error: The sha256 value is different!
        Bin file a4ebce0b6052723b1f386928e4d820fa2
        sha256 file 4ebce0b6052723b1f386928e4d820fa2
        ```

        If no error is displayed, the installation program is correct and has not been illegally modified.



