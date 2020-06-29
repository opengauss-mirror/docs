# Creating the Required User Account and Configuring the Installation Environment<a name="EN-US_TOPIC_0249784578"></a>

After the openGauss configuration file is created, you need to run the  **gs\_preinstall**  script to prepare the account and environment so that you can perform openGauss installation and management operations with the minimum permission, ensuring system security.

Executing the  **gs\_preinstall**  script enables the system to automatically complete the following installation preparations:

-   Sets kernel parameters for the SUSE Linux OS to improve server load performance. The kernel parameters directly affect database running status. Reconfigure them only when necessary. For details about the Linux OS kernel parameter settings in openGauss, see  [Configuring OS Parameters](configuring-os-parameters.md).
-   Automatically copies the openGauss configuration files and installation packages to the same directory on each openGauss host.
-   If the installation user and user group of the openGauss do not exist, the system automatically creates them.
-   Reads the directory information in the openGauss configuration file, creates the directory, and grants the directory permission to the installation user.

## Prerequisites<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_s3773af79eeb74c4bae1bd46533cc0cd8"></a>

-   You have completed all the tasks described in  [Preparing for Installation](preparing-for-installation.md).

## Precautions<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_section20734484163420"></a>

-   You must check the upper-layer directory permissions to ensure that the user has the read, write, and execution permissions on the installation package and configuration file directory.
-   The mapping between each host name and IP address in the XML configuration file must be correct.
-   Only user  **root**  is authorized to run the  **gs\_preinstall**  command.

## Procedure<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_s407f29ab5691456590018c719cf81e9d"></a>

1.  Log in to any host where the openGauss is to be installed as user  **root**  and create a directory for storing the installation package as planned.

    ```
    mkdir -p /opt/software/openGauss
    chmod 755 -R /opt/software
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   Do not create the directory in the home directory or subdirectory of any openGauss user because you may lack permissions for such directories.  
    >-   The openGauss user must have the read and write permissions on the  **/opt/software/openGauss**  directory.  

2.  The release package is used as an example. Upload the installation package  **openGauss\_x.x.x\_PACKAGES\_RELEASE.tar.gz**  and the configuration file  **clusterconfig.xml**  to the directory created in the previous step.
3.  Go to the directory for storing the uploaded software package and decompress the package. 

    ```
    cd /opt/software/openGauss
    tar -zxvf openGauss_x.x.x_PACKAGES_RELEASE.tar.gz
    ```

    [Table 1](#en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_te4a9d557337c400c85acff184476a722)  describes the contents of the decompressed software package.

    **Table  1**  Description about the installation package

    <a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_te4a9d557337c400c85acff184476a722"></a>
    <table><thead align="left"><tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_r6e873539a9a948579dd18ac7252c2f16"><th class="cellrowborder" valign="top" width="37.09%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_aeb07fb644a9c44c9b5867059f6978c73"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_aeb07fb644a9c44c9b5867059f6978c73"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_aeb07fb644a9c44c9b5867059f6978c73"></a>Package Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="62.91%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a6e02d21de44f441f9802f741ccfffa0c"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a6e02d21de44f441f9802f741ccfffa0c"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a6e02d21de44f441f9802f741ccfffa0c"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_rd2f98318592144069cc579944ef03765"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p169784217411"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p169784217411"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p169784217411"></a><span id="text9914841165213"><a name="text9914841165213"></a><a name="text9914841165213"></a>openGauss-<em>x.x.x</em></span>-openEULER-64bit-ClientTools.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p330749117411"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p330749117411"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p330749117411"></a>Used to install the client in the SUSE Linux OS. This software package contains the gsql, dump restore tool, ODBC driver, JDBC driver, and Libpq library.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_r175ab443930247f1a14e55b0a76ef425"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a382ad5075b02419a99cc5c5894ee3dc8"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a382ad5075b02419a99cc5c5894ee3dc8"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a382ad5075b02419a99cc5c5894ee3dc8"></a><span id="text127819456523"><a name="text127819456523"></a><a name="text127819456523"></a>openGauss-<em>x.x.x</em></span>-openEULER-64bit-Jdbc.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a30fe42f57dff4354a4ccdccb34e33005"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a30fe42f57dff4354a4ccdccb34e33005"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a30fe42f57dff4354a4ccdccb34e33005"></a>Used to install the JDBC driver in the SUSE Linux OS.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_rc4332348c8c64404896b4c01435fb5bd"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a95ee6d367d614b419e6a2f47dd8c9cc3"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a95ee6d367d614b419e6a2f47dd8c9cc3"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a95ee6d367d614b419e6a2f47dd8c9cc3"></a><span id="text16926124511524"><a name="text16926124511524"></a><a name="text16926124511524"></a>openGauss-<em>x.x.x</em></span>-openEULER-64bit-Libpq.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_ac74876654f444229b42953321aedd13c"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_ac74876654f444229b42953321aedd13c"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_ac74876654f444229b42953321aedd13c"></a>Used to install the libpq library in the SUSE Linux OS.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_rfcb5e881573c494593bc04c1bca8a09d"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a441838f8f2c24013be87cbf21cd2481d"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a441838f8f2c24013be87cbf21cd2481d"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a441838f8f2c24013be87cbf21cd2481d"></a><span id="text14441246125210"><a name="text14441246125210"></a><a name="text14441246125210"></a>openGauss-<em>x.x.x</em></span>-openEULER-64bit-Odbc.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a1ad6388e500942829101ee341d2ad99e"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a1ad6388e500942829101ee341d2ad99e"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a1ad6388e500942829101ee341d2ad99e"></a>Used to install the ODBC driver in the SUSE Linux OS.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_r47a88d77ed4a4db69c80398dc8ede3ed"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a059da55b14b245b4bc1f4b96fdb437d8"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a059da55b14b245b4bc1f4b96fdb437d8"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_a059da55b14b245b4bc1f4b96fdb437d8"></a><span id="text1395564605215"><a name="text1395564605215"></a><a name="text1395564605215"></a>openGauss-<em>x.x.x</em></span>-openEULER-64bit-symbol.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_af6ff46e672d64cd4a7b2343754f27241"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_af6ff46e672d64cd4a7b2343754f27241"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_af6ff46e672d64cd4a7b2343754f27241"></a>Provides the support file for debugging and locating database problems.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_r3640d79bce024730adf7da69354e9805"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_ac6717a0a4d1e4920885a30efa60e4441"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_ac6717a0a4d1e4920885a30efa60e4441"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_ac6717a0a4d1e4920885a30efa60e4441"></a><span id="text1547711471524"><a name="text1547711471524"></a><a name="text1547711471524"></a>openGauss-<em>x.x.x</em></span>-openEULER-64bit.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p995340417411"><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p995340417411"></a><a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_en-us_topic_0012121120_p995340417411"></a>Used to install the database management system. This software package is the one used for database installation in this document.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_row119861222143717"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_p10587153914392"><a name="en-us_topic_0241805803_p10587153914392"></a><a name="en-us_topic_0241805803_p10587153914392"></a><span id="text1495315497526"><a name="text1495315497526"></a><a name="text1495315497526"></a>openGauss-<em>x.x.x</em></span>-Sslcert.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_p3587623639"><a name="en-us_topic_0241805803_p3587623639"></a><a name="en-us_topic_0241805803_p3587623639"></a>Certificate used for client-side server authentication.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0241805803_row14819101919379"><td class="cellrowborder" valign="top" width="37.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241805803_p799504063917"><a name="en-us_topic_0241805803_p799504063917"></a><a name="en-us_topic_0241805803_p799504063917"></a><span id="text95661503528"><a name="text95661503528"></a><a name="text95661503528"></a>openGauss-<em>x.x.x</em></span>-Inspection.tar.gz</p>
    </td>
    <td class="cellrowborder" valign="top" width="62.91%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241805803_p881911993712"><a name="en-us_topic_0241805803_p881911993712"></a><a name="en-us_topic_0241805803_p881911993712"></a>Used to check the health status of the database.</p>
    </td>
    </tr>
    </tbody>
    </table>

4.  Decompress the  **openGauss-_x.x.x_-openEULER-64bit.tar.gz**  package.

    ```
    tar -zxvf openGauss-x.x.x-openEULER-64bit.tar.gz
    ```

    After the installation package is decompressed, the  **script**  subdirectory is automatically generated in  **/opt/software/openGauss**. OM tool scripts such as  **gs\_preinstall**  are generated in the  **script**  subdirectory.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   When you execute the  **gs\_preinstall**  script, plan the directory for storing the openGauss configuration file, directory for storing software packages, installation directories of programs, and directories of instance data. Common users cannot change the directories after the directories are specified.  
    >-   When you execute the  **gs\_preinstall**  script to prepare the installation environment, the script automatically copies the openGauss configuration file and decompressed installation package to the same directory on other servers.  
    >-   Before executing  **gs\_preinstall**  and establishing mutual trust, check whether the  **/etc/profile**  file contains error information. If it does, manually rectify the error.  

5.  Go to the directory for storing tool scripts.

    ```
    cd /opt/software/openGauss/script
    ```

6.  If the openEuler operating system is used, run the following command to open the  **performance.sh**  file, comment out  **sysctl -w vm.min\_free\_kbytes=112640 &\> /dev/null**  using the number sign \(\#\), press  **Esc**  to enter the command mode, and run the  **:wq**  command to save the modification and exit.

    ```
    vi /etc/profile.d/performance.sh
    ```

7.  To ensure that the OpenSSL version is correct, load the  **lib**  library in the installation package before preinstallation. Run the following command.  **\{packagePath\}**  indicates the path where the installation package is stored. In this example, the path is  **/opt/software/openGauss**.

    ```
    export LD_LIBRARY_PATH={packagePath}/script/gspylib/clib:$LD_LIBRARY_PATH
    ```

8.  To ensure successful installation, check whether the values of  **hostname**  and  **/etc/hostname**  are the same. During preinstallation, the host name is checked.
9.  Execute  **gs\_preinstall**  to configure the installation environment. If the shared environment is used, add the  **--sep-env-file=ENVFILE**  parameter to separate environment variables to avoid mutual impact with other users. The environment variable separation file path is specified by users.
    -   Execute  **gs\_preinstall**  in interactive mode. During the execution, the mutual trust between users  **root**  and between openGauss users is automatically established.

        ```
        ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/clusterconfig.xml
        ```

        **omm**  is the database administrator \(also the OS user running the openGauss\),  **dbgrp**  is the group name of the OS user running the openGauss, and  **/opt/software/openGauss/clusterconfig.xml**  is the path of the openGauss configuration file. During the execution, you need to determine whether to establish mutual trust as prompted and enter the password of user  **root**  or the openGauss user.

    -   If the mutual trust between users  **root**  cannot be created, create the  **omm**  user, perform local preinstallation on each host, and manually create the mutual trust between openGauss users. If the  **-L**  parameter is specified during preinstallation, manually write the mapping between the host names and IP addresses of all nodes to the  **/etc/hosts**  file of each host before preinstallation, add  **\#Gauss OM IP Hosts Mapping**  to the end of each mapping.
        1.  Run the following command to configure the installation environment:

            ```
            cd /opt/software/openGauss/script
            ./gs_preinstall -U omm -G dbgrp -L -X /opt/software/openGauss/clusterconfig.xml
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:**   
            >You need to run this command on each host.  


    -   Execute  **gs\_preinstall**  in non-interactive mode.
        1.  Manually establish mutual trust between users  **root**  and between openGauss users by following the instructions provided in  [Establishing Mutual Trust Manually](establishing-mutual-trust-manually.md).
        2.  Run the following command to configure the installation environment:

            ```
            cd /opt/software/openGauss/script
            ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/clusterconfig.xml --non-interactive
            ```

            >![](public_sys-resources/icon-note.gif) **NOTE:**   
            >-   In this mode, ensure that mutual trust has been established between the root users of all nodes and between the openGauss users of the cluster before performing.In this mode, ensure that mutual trust has been established between users  **root**  and between openGauss users on each node before executing  **gs\_preinstall**.  
            >-   The mutual trust established between users  **root**  may incur security risks. You are advised to delete the mutual trust between users  **root**  immediately after the installation is complete.  




## Examples<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_section412490911620"></a>

Execute the  **gs\_preinstall**  script.

```
plat1:/opt/software/openGauss/script # ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/clusterconfig.xml
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Are you sure you want to create trust for root (yes/no)? yes
Please enter password for root.
Password:
Creating SSH trust for the root permission user.
Checking network information.
All nodes in the network are Normal.
Successfully checked network information.
Creating SSH trust.
Creating the local key file.
Successfully created the local key files.
Appending local ID to authorized_keys.
Successfully appended local ID to authorized_keys.
Updating the known_hosts file.
Successfully updated the known_hosts file.
Appending authorized_key on the remote node.
Successfully appended authorized_key on all remote node.
Checking common authentication file content.
Successfully checked common authentication content.
Distributing SSH trust file to all node.
Successfully distributed SSH trust file to all node.
Verifying SSH trust on all hosts.
Successfully verified SSH trust on all hosts.
Successfully created SSH trust.
Successfully created SSH trust for the root permission user.
Setting pssh path
Successfully set core path.
Distributing package.
Begin to distribute package to tool path.
Successfully distribute package to tool path.
Begin to distribute package to package path.
Successfully distribute package to package path.
Successfully distributed package.
Are you sure you want to create the user[omm] and create trust for it (yes/no)? yes
Please enter password for cluster user.
Password:
Please enter password for cluster user again.
Password:
Successfully created [omm] user on all nodes.
Preparing SSH service.
Successfully prepared SSH service.
Installing the tools in the cluster.
Successfully installed the tools in the cluster.
Checking hostname mapping.
Successfully checked hostname mapping.
Creating SSH trust for [omm] user.
Checking network information.
All nodes in the network are Normal.
Successfully checked network information.
Creating SSH trust.
Creating the local key file.
Successfully created the local key files.
Appending local ID to authorized_keys.
Successfully appended local ID to authorized_keys.
Updating the known_hosts file.
Successfully updated the known_hosts file.
Appending authorized_key on the remote node.
Successfully appended authorized_key on all remote node.
Checking common authentication file content.
Successfully checked common authentication content.
Distributing SSH trust file to all node.
Successfully distributed SSH trust file to all node.
Verifying SSH trust on all hosts.
Successfully verified SSH trust on all hosts.
Successfully created SSH trust.
Successfully created SSH trust for [omm] user.
Checking OS software.
Successfully check os software.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Setting SCTP service.
Successfully set SCTP service.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Preparing CRON service.
Successfully prepared CRON service.
Setting user environmental variables.
Successfully set user environmental variables.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting Core file
Successfully set core path.
Setting pssh path
Successfully set pssh path.
Set ARM Optimization.
No need to set ARM Optimization.
Fixing server package owner.
Setting finish flag.
Successfully set finish flag.
Preinstallation succeeded.
S
```

If the passwords of user  **root**  on the hosts in the cluster are different and cannot be changed to the same one, execute the  **gs\_preinstall**  script in local installation mode.

```
plat1:/opt/software/openGauss/script # ./gs_preinstall -U omm -G dbgrp -L -X /opt/software/openGauss/clusterconfig.xml 
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Setting SCTP service.
Successfully set SCTP service.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Warning: Installation environment contains some warning messages.
Please get more details by "/home/package/r8c00/script/gs_checkos -i A -h SIA1000068990".
Set and check OS parameter completed.
Preparing CRON service.
Successfully prepared CRON service.
Preparing SSH service.
Successfully prepared SSH service.
Setting user environmental variables.
Successfully set user environmental variables.
Configuring alarms on the cluster nodes.
Successfully configured alarms on the cluster nodes.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting Cgroup.
Successfully set Cgroup.
Setting finish flag.
Successfully set finish flag.
Preinstallation succeeded.
```

Execute  **gs\_preinstall**  in non-interactive mode.

```
plat1:/opt/software/openGauss/script # ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/clusterconfig.xml --non-interactive
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Distributing package.
Begin to distribute package to tool path.
Successfully distribute package to tool path.
Begin to distribute package to package path.
Successfully distribute package to package path.
Successfully distributed package.
Installing the tools in the cluster.
Successfully installed the tools in the cluster.
Checking hostname mapping.
Successfully checked hostname mapping.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
Setting SCTP service.
Successfully set SCTP service.
Set and check OS parameter.
Setting OS parameters.
Successfully set OS parameters.
Set and check OS parameter completed.
Preparing CRON service.
Successfully prepared CRON service.
Preparing SSH service.
Successfully prepared SSH service.
Setting user environmental variables.
Successfully set user environmental variables.
Configuring alarms on the cluster nodes.
Successfully configured alarms on the cluster nodes.
Setting the dynamic link library.
Successfully set the dynamic link library.
Setting Cgroup.
Successfully set Cgroup.
Set ARM Optimization.
Successfully set ARM Optimization.
Setting finish flag.
Successfully set finish flag.
Preinstallation succeeded.
```

## Troubleshooting<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_s51853c2b09e54b12a90e4f8c512a61e4"></a>

If configuring the installation environment fails, obtain the  **gs\_preinstall-YYYY-MM-DD\_HHMMSS.log**  and  **gs\_local-YYYY-MM-DD\_HHMMSS.log**  files from the  **$GAUSSLOG/om**  directory for storing openGauss logs. Then, locate the problem based on the log information. For example, if the path specified by the  **gaussdbLogPath**  parameter in the configuration file is  **/var/log/gaussdb**, the  **$GAUSSLOG/om**  path is  **/var/log/gaussdb/omm/om**, and the  **omm**  user is the user running openGauss.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>While the installation user and environment is prepared, user  **root**  is used to add scheduled tasks for routine inspection and reporting.  

