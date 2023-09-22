# Executing Installation<a name="EN-US_TOPIC_0289899734"></a>

After the openGauss installation environment is prepared by executing the pre-installation script, deploy openGauss based on the installation process.

## Prerequisites<a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_s2035de58d7ef4acc937b8f94c0ed368b"></a>

-   You have successfully executed the  **gs\_preinstall**  script. that is, you have completed operations described in  [initializing the installation environment](initializing-the-installation-environment.md).
-   All the server OSs and networks are functioning properly.
-   You have checked that the  **locale**  parameter for each server is set to the same value.

## Procedure<a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_se06775d062f144a5a491267c284e67dd"></a>

1.  Check whether the installation package and openGauss configuration file exist in the planned path. If they do not exist, perform the preinstallation again to ensure that the preinstallation is successful, and then perform the following steps.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >User  **omm**  must have the permission on the directory and subdirectories where the installation package is stored.

2.  Log in to any host of the openGauss and switch to the  **omm**  user.

    ```
    su - omm
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   **omm**  indicates the user specified by the  **-U**  parameter in the  **gs\_preinstall**  script.
    >
    >-   You need to execute the  **gs\_install**  script as user  **omm**  specified in the  **gs\_preinstall**  script. Otherwise, an execution error will be reported.
    >
    >-   openGauss compiled on the HiSilicon chip of a later version cannot run on the server with the HiSilicon chip of an earlier version. For example, the openGauss compiled on the Hi1620 cannot run on the Hi1616 environment.

3.  Use  **gs\_install**  to install the openGauss. If the database is installed in environment variable separation mode, run the  **source**  command to obtain the environment variable separation file  **ENVFILE**.

    ```
    gs_install -X /opt/software/openGauss/cluster_config.xml
    ```

    /opt/software/openGauss/cluster\_config.xml is the path of the openGauss configuration file. During the execution, you need to enter the database user password as prompted. The password must meet complexity requirements. To ensure that you can use the database properly, remember the entered database password.

    The password must meet the following complexity requirements:

    -   Contain 8~16 characters.
    -   Cannot be the same as the username, the current password \(**ALTER**\), or the current password in an inverted sequence.
    -   Contain at least three of the following: uppercase characters \(A to Z\), lowercase characters \(a to z\), digits \(0 to 9\), and other characters \(limited to \~!@\#$%^&\*\(\)-\_=+\\|\[\{\}\];:,<.\>/?\).

    The SSL certificate is generated during the installation. The certificate is stored in  *\{gaussdbAppPath\}***/share/sslcert/om**, where  *\{gaussdbAppPath\}*  is the program installation directory specified in the openGauss configuration file.

    Two files are generated under the log file path:  **gs\_install-YYYY-MM-DD\_HHMMSS.log**  and  **gs\_local-YYYY-MM-DD\_HHMMSS.log**.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   Character set names are case-insensitive, for example, the following values are supported by openGauss:  **gbk**  and  **GBK**;  **UTF-8**,  **UTF8**,  **utf8**, and  **utf-8**; and  **Latine1**  and  **latine1**.
    >
    >-   If no character set is specified during installation, the default character set SQL\_ASCII is used. To simplify and unify the locale, the default locale is  **C**. If you want to specify another character set and locale, use the  **--gsinit-parameter="--locale=LOCALE"**  parameter during installation. The  **LOCALE**  parameter specifies the default locale for the new database.
    
    For example, to set the database encoding format to UTF-8, perform the following steps:
    Run the  **locale -a |grep utf8**  command to check the locale that supports UTF-8 encoding:
    ```
    omm@linux:~>  locale -a|grep utf8
    ```
    Information similar to the following is displayed, where  **en\_US.utf8**  indicates that the en\_US locale supports the UTF-8 encoding format.
    ```
    ...... 
    en_SG.utf8 
    en_US.utf8 
    ......
    ```
    Select a locale as required, for example,  **en\_US.utf8**. Add the  **--locale=en\_US.utf8**  option when initializing the database for installation. The following is an example:
    ```
    gs_install -X /opt/software/openGauss/cluster_config.xml --gsinit-parameter="--locale=en_US.utf8"
    ```

4.  After the installation is successful, manually delete the trust between users  **root**  on the host, that is, delete the mutual trust file on each openGauss database node.

    ```
    rm -rf ~/.ssh
    ```


## Directories Generated After the Installation<a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_s0025ed3cb8d24328b75bcd46f6ac86a7"></a>

[Table 1](#en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_tdcb4fb0f38a6419099ee2c47d4d0b37f)  describes the directories generated after the installation and the files in the directories.

**Table  1**  Directories generated after the installation

<a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_tdcb4fb0f38a6419099ee2c47d4d0b37f"></a>
<table><thead align="left"><tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r22afe3483c624427844f6a9c59b5289d"><th class="cellrowborder" valign="top" width="7.64923507649235%" id="mcps1.2.6.1.1"><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p543728993912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p543728993912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p543728993912"></a>No.</p>
</th>
<th class="cellrowborder" valign="top" width="18.268173182681732%" id="mcps1.2.6.1.2"><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a3e768c105e844b5d9f8347dfd611d21b"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a3e768c105e844b5d9f8347dfd611d21b"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a3e768c105e844b5d9f8347dfd611d21b"></a>Directory Description</p>
</th>
<th class="cellrowborder" valign="top" width="14.64853514648535%" id="mcps1.2.6.1.3"><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a50599f111eb94f5fa5568659de1e2a38"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a50599f111eb94f5fa5568659de1e2a38"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a50599f111eb94f5fa5568659de1e2a38"></a>Directory</p>
</th>
<th class="cellrowborder" valign="top" width="28.43715628437156%" id="mcps1.2.6.1.4"><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a754cef21c28947c5abee7839e7cec169"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a754cef21c28947c5abee7839e7cec169"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a754cef21c28947c5abee7839e7cec169"></a>Subdirectory</p>
</th>
<th class="cellrowborder" valign="top" width="30.996900309969007%" id="mcps1.2.6.1.5"><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a4b5b2d4cfadd4cff8f13e70016e6a66b"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a4b5b2d4cfadd4cff8f13e70016e6a66b"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a4b5b2d4cfadd4cff8f13e70016e6a66b"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r939c46eb1ef94be692a98d2bfbba5005"><td class="cellrowborder" rowspan="5" valign="top" width="7.64923507649235%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a7f369fac1f33409881d746bdf598bad9"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a7f369fac1f33409881d746bdf598bad9"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a7f369fac1f33409881d746bdf598bad9"></a>1</p>
</td>
<td class="cellrowborder" rowspan="5" valign="top" width="18.268173182681732%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p563993912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p563993912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p563993912"></a>openGauss installation directory</p>
</td>
<td class="cellrowborder" rowspan="5" valign="top" width="14.64853514648535%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283136467_p1952318117233"><a name="en-us_topic_0283136467_p1952318117233"></a><a name="en-us_topic_0283136467_p1952318117233"></a>/opt/huawei/install/app</p>
</td>
<td class="cellrowborder" valign="top" width="28.43715628437156%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ac2cf97f82c894dd0b10dc1b9b86570e4"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ac2cf97f82c894dd0b10dc1b9b86570e4"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ac2cf97f82c894dd0b10dc1b9b86570e4"></a>bin</p>
</td>
<td class="cellrowborder" valign="top" width="30.996900309969007%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_afbecfcf130d244f4a209bce731073067"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_afbecfcf130d244f4a209bce731073067"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_afbecfcf130d244f4a209bce731073067"></a>Stores binary files of the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r8d87cf6029d84a899d478335ae5e619e"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a28cf574d18b148198ffc82c56ecadc07"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a28cf574d18b148198ffc82c56ecadc07"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a28cf574d18b148198ffc82c56ecadc07"></a>etc</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p55437993912"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p55437993912"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p55437993912"></a>Stores the configuration file of the Cgroup tool.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_row422016509565"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_p1922013501568"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_p1922013501568"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_p1922013501568"></a>include</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_p202211450125618"><a name="en-us_topic_0283136467_en-us_topic_0085434626_p202211450125618"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_p202211450125618"></a>Stores the header file required for running the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_raa06029f674d4895a8117ebd962144c5"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p148927993912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p148927993912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p148927993912"></a>lib</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a3beaf2e9f284486283b303b4e7d7184a"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a3beaf2e9f284486283b303b4e7d7184a"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a3beaf2e9f284486283b303b4e7d7184a"></a>Stores library files of the database.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r75f9f141cb534dde848df936c7d19ffb"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ac0bbe027c6d54427992833e5e308c218"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ac0bbe027c6d54427992833e5e308c218"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ac0bbe027c6d54427992833e5e308c218"></a>share</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a00c81d5ccacc43c9ae5a8f9dc1ff04a9"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a00c81d5ccacc43c9ae5a8f9dc1ff04a9"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a00c81d5ccacc43c9ae5a8f9dc1ff04a9"></a>Stores common files required for database running, such as the configuration file template.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r974bfa7f98ae4a2bab008e6a1afbd37b"><td class="cellrowborder" valign="top" width="7.64923507649235%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_p161291522163218"><a name="en-us_topic_0283136467_p161291522163218"></a><a name="en-us_topic_0283136467_p161291522163218"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="18.268173182681732%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_p20129422193215"><a name="en-us_topic_0283136467_p20129422193215"></a><a name="en-us_topic_0283136467_p20129422193215"></a>openGauss data directory</p>
</td>
<td class="cellrowborder" valign="top" width="14.64853514648535%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283136467_p11130422173216"><a name="en-us_topic_0283136467_p11130422173216"></a><a name="en-us_topic_0283136467_p11130422173216"></a>/opt/huawei/install/data/dn</p>
</td>
<td class="cellrowborder" valign="top" width="28.43715628437156%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a3435dd2a26bb441b95d5974bfea8b1e5"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a3435dd2a26bb441b95d5974bfea8b1e5"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a3435dd2a26bb441b95d5974bfea8b1e5"></a>data_dnxxx</p>
</td>
<td class="cellrowborder" valign="top" width="30.996900309969007%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p811250393912"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p811250393912"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p811250393912"></a>Stores database node data. For the primary node, the directory name is <strong id="b11231340194812"><a name="b11231340194812"></a><a name="b11231340194812"></a>data_dnxxx</strong>.</p>
<p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p590367193912"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p590367193912"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p590367193912"></a>For the standby node, the directory name is <strong id="b41051191493"><a name="b41051191493"></a><a name="b41051191493"></a>data_dnSxxx</strong>. <strong id="b842352706114316"><a name="b842352706114316"></a><a name="b842352706114316"></a>xxx</strong> indicates the database node number.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r5d87b119ba4d4711a9bfe614e39d2f8e"><td class="cellrowborder" rowspan="5" valign="top" width="7.64923507649235%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p880929793912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p880929793912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p880929793912"></a>3</p>
</td>
<td class="cellrowborder" rowspan="5" valign="top" width="18.268173182681732%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a6163c81ab6374cf4aa0ba05e10936a55"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a6163c81ab6374cf4aa0ba05e10936a55"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a6163c81ab6374cf4aa0ba05e10936a55"></a>openGauss log directory</p>
</td>
<td class="cellrowborder" rowspan="5" valign="top" width="14.64853514648535%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_af6b10e5948404a888d4e4322a4f3c7ec"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_af6b10e5948404a888d4e4322a4f3c7ec"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_af6b10e5948404a888d4e4322a4f3c7ec"></a><strong id="b842352706174314"><a name="b842352706174314"></a><a name="b842352706174314"></a>/var/log/omm/</strong><em id="i842352697174319"><a name="i842352697174319"></a><a name="i842352697174319"></a>username</em></p>
</td>
<td class="cellrowborder" valign="top" width="28.43715628437156%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p978087393912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p978087393912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p978087393912"></a>bin</p>
</td>
<td class="cellrowborder" valign="top" width="30.996900309969007%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a7768ab8a6bfd49f3a749b4a65bc2f2ce"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a7768ab8a6bfd49f3a749b4a65bc2f2ce"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a7768ab8a6bfd49f3a749b4a65bc2f2ce"></a>Stores logs of binary programs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_row167471232165514"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_p147496325556"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_p147496325556"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_p147496325556"></a>gs_profile</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_p17749153235518"><a name="en-us_topic_0283136467_en-us_topic_0085434626_p17749153235518"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_p17749153235518"></a>Stores database kernel performance logs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r13d8783f225743179f39b253e3ee0872"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a344d09f55b6749a881fa8c39927df5c5"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a344d09f55b6749a881fa8c39927df5c5"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a344d09f55b6749a881fa8c39927df5c5"></a>om</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p452132693912"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p452132693912"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p452132693912"></a>Stores OM logs. For example:</p>
<p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_p62450935153024"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_p62450935153024"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_p62450935153024"></a>It contains logs for executing some local scripts, as well as adding and deleting database node interfaces, gs_om interfaces, pre-installation interfaces, and node replacement interfaces.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r429b7bbc145542f296a29a21587b8ad5"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p771271893912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p771271893912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p771271893912"></a>pg_audit</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a41aa0b3b494c4f91aca0ec33948ec7f5"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a41aa0b3b494c4f91aca0ec33948ec7f5"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a41aa0b3b494c4f91aca0ec33948ec7f5"></a>Stores database audit logs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r6c5742f93bb348f78726dcbf7fab695a"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ad422171cf0c14b56a5ef491b60859aa7"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ad422171cf0c14b56a5ef491b60859aa7"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ad422171cf0c14b56a5ef491b60859aa7"></a>pg_log</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a4e3ebba7c7064815979dab71d4f0a6e0"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a4e3ebba7c7064815979dab71d4f0a6e0"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a4e3ebba7c7064815979dab71d4f0a6e0"></a>Directory for storing run logs of database node instances.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_ra419abe4c87c44f8929827f4fcf5f86f"><td class="cellrowborder" rowspan="2" valign="top" width="7.64923507649235%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_aecbd970380ad4164837bc5eb8efb6bda"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_aecbd970380ad4164837bc5eb8efb6bda"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_aecbd970380ad4164837bc5eb8efb6bda"></a>4</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="18.268173182681732%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a7975b11e0bc8472086770f6b4937acd8"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a7975b11e0bc8472086770f6b4937acd8"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a7975b11e0bc8472086770f6b4937acd8"></a><span id="text71101857183610"><a name="text71101857183610"></a><a name="text71101857183610"></a>openGauss</span> system tool directory</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="14.64853514648535%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283136467_p133031792276"><a name="en-us_topic_0283136467_p133031792276"></a><a name="en-us_topic_0283136467_p133031792276"></a>/opt/huawei/install/om</p>
</td>
<td class="cellrowborder" valign="top" width="28.43715628437156%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p167627293912"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p167627293912"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_en-us_topic_0009462205_p167627293912"></a>script</p>
</td>
<td class="cellrowborder" valign="top" width="30.996900309969007%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_p10623103104815"><a name="en-us_topic_0283136467_en-us_topic_0085434626_p10623103104815"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_p10623103104815"></a>Stores script files for <span id="text5680182218447"><a name="text5680182218447"></a><a name="text5680182218447"></a>openGauss</span> users to manage <span id="text1363212384418"><a name="text1363212384418"></a><a name="text1363212384418"></a>openGauss</span>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_r4205559738cf4031b8629c705dcefc05"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a6ea59478d96d481db0c19182c48364f0"><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a6ea59478d96d481db0c19182c48364f0"></a><a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_a6ea59478d96d481db0c19182c48364f0"></a>lib</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a71543112e71c427ea44f0eb47259370e"><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a71543112e71c427ea44f0eb47259370e"></a><a name="en-us_topic_0283136467_en-us_topic_0085434626_en-us_topic_0059782015_a71543112e71c427ea44f0eb47259370e"></a>Stores the library files that the binaries in the <strong id="b156911478526"><a name="b156911478526"></a><a name="b156911478526"></a>bin</strong> directory depend on.</p>
</td>
</tr>
<tr id="en-us_topic_0283136467_row472134612272"><td class="cellrowborder" valign="top" width="7.64923507649235%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283136467_p37211146152711"><a name="en-us_topic_0283136467_p37211146152711"></a><a name="en-us_topic_0283136467_p37211146152711"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="18.268173182681732%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283136467_p572112463273"><a name="en-us_topic_0283136467_p572112463273"></a><a name="en-us_topic_0283136467_p572112463273"></a><span id="text4507132132810"><a name="text4507132132810"></a><a name="text4507132132810"></a>openGauss</span> temporary file directory</p>
</td>
<td class="cellrowborder" valign="top" width="14.64853514648535%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283136467_p2072174602715"><a name="en-us_topic_0283136467_p2072174602715"></a><a name="en-us_topic_0283136467_p2072174602715"></a>/opt/huawei/tmp</p>
</td>
<td class="cellrowborder" valign="top" width="28.43715628437156%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283136467_p1672214614274"><a name="en-us_topic_0283136467_p1672214614274"></a><a name="en-us_topic_0283136467_p1672214614274"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="30.996900309969007%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283136467_p197227465274"><a name="en-us_topic_0283136467_p197227465274"></a><a name="en-us_topic_0283136467_p197227465274"></a>Stores temporary files.</p>
</td>
</tr>
</tbody>
</table>

## Examples<a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_section37587843144447"></a>

Execute the installation.

```
omm@plat1:~> gs_install -X /opt/software/openGauss/cluster_config.xml
Parsing the configuration file.
Check preinstall on every node.
Successfully checked preinstall on every node.
Creating the backup directory.
Successfully created the backup directory.
begin deploy..
Installing the cluster.
begin prepare Install Cluster..
Checking the installation environment on all nodes.
begin install Cluster..
Installing applications on all nodes.
Successfully installed APP.
begin init Instance..
encrypt ciper and rand files for database.
Please enter password for database:
Please repeat for database:
begin to create CA cert files
The sslcert will be generated in /opt/gaussdb/cluster/app/share/sslcert/om
Cluster installation is completed.
Configuring.
Deleting instances from all nodes.
Successfully deleted instances from all nodes.
Checking node configuration on all nodes.
Initializing instances on all nodes.
Updating instance configuration on all nodes.
Check consistence of memCheck and coresCheck on DN nodes.
Successful check consistence of memCheck and coresCheck on all nodes.
Configuring pg_hba on all nodes.
Configuration is completed.
Successfully started cluster.
Successfully installed application.
```

## Troubleshooting<a name="en-us_topic_0283136467_en-us_topic_0241805806_en-us_topic_0085434626_en-us_topic_0059782015_sa05a0f9f81f34741a8a6ca3f5640a3b4"></a>

If the installation fails, troubleshoot the problem based on logs in the  **gs\_install-YYYY-MM-DD\_HHMMSS.log**  and  **gs\_local-YYYY-MM-DD\_HHMMSS.log**  files in the openGauss log directory.
