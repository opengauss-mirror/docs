# Initializing the Installation Environment<a name="EN-US_TOPIC_0283136473"></a>

-   [Creating the Required User Account and Configuring the Installation Environment](#creating-the-required-user-account-and-configuring-the-installation-environment) 
-   [Establishing Mutual Trust Manually](#establishing-mutual-trust-manually) 
-   [Configuring OS Parameters](#configuring-os-parameters)  

## Creating the Required User Account and Configuring the Installation Environment

After the openGauss configuration file is created, you need to run the  **gs\_preinstall**  script to prepare the account and environment so that you can perform openGauss installation and management operations with the minimum permission, ensuring system security.

Executing the  **gs\_preinstall**  script enables the system to automatically complete the following installation preparations:

-   Sets kernel parameters for the SUSE Linux OS to improve server load performance. The kernel parameters directly affect database running status. Reconfigure them only when necessary. For details about the Linux OS kernel parameter settings in openGauss, see  [Configuring OS Parameters](#configuring-os-parameters).
-   Automatically copies the openGauss configuration files and installation packages to the same directory on each openGauss host.
-   If the installation user and user group of the openGauss do not exist, the system automatically creates them.
-   Reads the directory information in the openGauss configuration file, creates the directory, and grants the directory permission to the installation user.

### Prerequisites<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_s3773af79eeb74c4bae1bd46533cc0cd8"></a>

-   You have completed all the tasks described in  [Preparing for Installation](preparing-for-installation.md).

### Precautions<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_section20734484163420"></a>

-   You must check the upper-layer directory permissions to ensure that the user has the read, write, and execution permissions on the installation package and configuration file directory.
-   The mapping between each host name and IP address in the XML configuration file must be correct.
-   Only user  **root**  is authorized to run the  **gs\_preinstall**  command.

### Procedure<a name="en-us_topic_0241805803_en-us_topic_0085434653_en-us_topic_0059781995_s407f29ab5691456590018c719cf81e9d"></a>

1.Log in to any host where the openGauss is to be installed as user  **root**  and create a directory for storing the installation package as planned.

```
mkdir -p /opt/software/openGauss
chmod 755 -R /opt/software
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>
>-   Do not create the directory in the home directory or subdirectory of any openGauss user because you may lack permissions for such directories.  
>
>-   The openGauss user must have the read and write permissions on the  **/opt/software/openGauss**  directory.  

2.Upload the software package  **openGauss-**_x.x.x_**-openEuler-64bit-all.tar.gz**  and the configuration file  **cluster\_config.xml**  to the created directory.

3.Go to the directory for storing the uploaded software package and decompress  **openGauss-**_x.x.x_**-openEuler-64bit-all.tar.gz**. After the installation package is decompressed, the OM and Server installation packages are generated. After the OM installation package is decompressed, the  **script**  subdirectory is automatically generated in  **/opt/software/openGauss**. OM tool scripts such as  **gs\_preinstall**  are generated in the  **script**  subdirectory.

```
cd /opt/software/openGauss
tar -zxvf openGauss-1.1.0-openEuler-64bit-all.tar.gz
tar -zxvf openGauss-1.1.0-openEuler-64bit-om.tar.gz
```

>![](public_sys-resources/icon-note.gif) **NOTE:**  
>
>-   When you execute the  **gs\_preinstall**  script, plan the directory for storing the openGauss configuration file, directory for storing software packages, installation directories of programs, and directories of instance data. Common users cannot change the directories after the directories are specified.  
>
>-   When you execute the  **gs\_preinstall**  script to prepare the installation environment, the script automatically copies the openGauss configuration file and decompressed installation package to the same directory on other servers.  
>
>-   Before executing  **gs\_preinstall**  and establishing mutual trust, check whether the  **/etc/profile**  file contains error information. If it does, manually rectify the error.  

4.Go to the directory for storing tool scripts.

```
cd /opt/software/openGauss/script
```


5.If the openEuler operating system is used (openEuler 20.03), run the following command to open the  **performance.sh**  file, comment out  **sysctl -w vm.min\_free\_kbytes=112640 &\> /dev/null**  using the number sign \(\#\), press  **Esc**  to enter the command mode, and run the  **:wq**  command to save the modification and exit.

```
vi /etc/profile.d/performance.sh
```

6.To ensure successful installation, run the following command to check whether the values of  **hostname**  and  **/etc/hostname**  are the same.During pre-installation, the hostname is checked.

7.Execute  **gs\_preinstall**  to configure the installation environment. If the shared environment is used, add the  **--sep-env-file=ENVFILE**  parameter to separate environment variables to avoid mutual impact with other users. The environment variable separation file path is specified by users.

-   Execute  **gs\_preinstall**  in interactive mode. During the execution, the mutual trust between users  **root**  and between openGauss users is automatically established.

    ```
    ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml
    ```

    **omm**  is the database administrator \(also the OS user running the openGauss\),  **dbgrp**  is the group name of the OS user running the openGauss, and  **/opt/software/openGauss/cluster\_config.xml**  is the path of the openGauss configuration file. During the execution, you need to determine whether to establish mutual trust as prompted and enter the password of the OS user  **root**  or the user omm.

- If the mutual trust between users  **root**  cannot be created, create the  **omm**  user, perform local preinstallation on each host, and manually create the mutual trust between openGauss users. If the  **-L**  parameter is specified during preinstallation, manually write the mapping between the host names and IP addresses of all nodes to the  **/etc/hosts**  file of each host before preinstallation, add  **\#Gauss OM IP Hosts Mapping**  to the end of each mapping.
  - Run the following command to configure the installation environment:

    ```
    cd /opt/software/openGauss/script
    ./gs_preinstall -U omm -G dbgrp -L -X /opt/software/openGauss/cluster_config.xml
    ```

  >![](public_sys-resources/icon-note.gif) **NOTE:**   
  >You need to run this command on each host.  
  >

- Execute  **gs\_preinstall**  in non-interactive mode.
    
  - Manually establish mutual trust between users  **root**  and between openGauss users by following the instructions provided in[Establishing Mutual Trust Manually](#establishing-mutual-trust-manually) .

  - Run the following command to configure the installation environment:

    ```
    cd /opt/software/openGauss/script
    ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --non-interactive
    ```

  >![](public_sys-resources/icon-note.gif) **NOTE:**   
  >
  >-   In this mode, ensure that mutual trust has been established between users  **root**  and between openGauss users on each node before executing  **gs\_preinstall**.  
  >
  >-   The mutual trust established between users  **root**  may incur security risks. You are advised to delete the mutual trust between users  **root**  immediately after the installation is complete.  




### Examples

Execute the  **gs\_preinstall**  script.

```
plat1:/opt/software/openGauss/script # ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml
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
```

If the passwords of the user  **root**  on the primary and standby nodes are different and cannot be changed to the same value, run the  **gs\_preinstall**  script in local installation mode.

```
plat1:/opt/software/openGauss/script # ./gs_preinstall -U omm -G dbgrp -L -X /opt/software/openGauss/cluster_config.xml 
Parsing the configuration file.
Successfully parsed the configuration file.
Installing the tools on the local node.
Successfully installed the tools on the local node.
Checking OS version.
Successfully checked OS version.
Creating cluster's path.
Successfully created cluster's path.
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
plat1:/opt/software/openGauss/script # ./gs_preinstall -U omm -G dbgrp -X /opt/software/openGauss/cluster_config.xml --non-interactive
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

### Troubleshooting

If configuring the installation environment fails, obtain the  **gs\_preinstall-YYYY-MM-DD\_HHMMSS.log**  and  **gs\_local-YYYY-MM-DD\_HHMMSS.log**  files from the  **$GAUSSLOG/om**  directory for storing openGauss logs. Then, locate the problem based on the log information. For example, if the path specified by the  **gaussdbLogPath**  parameter in the configuration file is  **/var/log/gaussdb**, the  **$GAUSSLOG/om**  path is  **/var/log/gaussdb/omm/om**, and the  **omm**  user is the user running openGauss.

![](public_sys-resources/icon-notice.gif) **NOTICE:**   
While the installation user and environment is prepared, user  **root**  is used to add scheduled tasks for routine inspection and reporting.

## Establishing Mutual Trust Manually

During the openGauss installation, you need to perform operations such as running commands and transferring files between hosts in openGauss. Establish mutual trust among the hosts before installing the cluster as a common user. During the execution of the pre-installation script, establish mutual trust between users  **root**, then create a common user account, and finally establish mutual trust between common users.

![](public_sys-resources/icon-notice.gif) **NOTICE:**   
The mutual trust between users  **root**  may incur security risks. You are advised to delete the mutual trust between users  **root**  after the installation is complete.  

### Prerequisites

-   The SSH service has been enabled.
-   You have verified that SSH ports will not be disabled by firewalls.
-   Each host name and IP address have been correctly configured in the XML file.
-   Communication among all the hosts is normal.
-   If the mutual trust is to be established for common users, the same user needs to be created and password set on each host.
-   If the SELinux service is installed and has been started on each host, ensure that the security context of the  **/root**  directory is set to the default value  **system\_u:object\_r:admin\_home\_t:s0**  and that of the  **/home**  directory is set to the default value  **system\_u:object\_r:home\_root\_t:s0**, or disable the SELinux service.

    To check the SELinux status, run the  **getenforce**  command. If the command output is  **Enforcing**, SELinux is installed and has been enabled.

    To check the security contexts of the directories, run the following commands:

    ```
    ls -ldZ  /root | awk '{print $4}'
    ```

    ```
    ls -ldZ  /home | awk '{print $4}'
    ```

    To restore the security contexts of the directories, run the following commands:

    ```
    restorecon -r -vv /home/
    ```

    ```
    restorecon -r -vv /root/
    ```


### Establishing Mutual Trust Using a Script

Establishing a mutual trust relationship using a script has the following impacts:

-   The  **/etc/hosts**  file may be modified. Back up the  **/etc/hosts**  file before using the script to establish mutual trust.
-   The script deletes the existing .ssh file directory. If you want to retain the mutual trust relationship established between nodes, use the method described in [Establishing Mutual Trust Manually](#establishing-mutual-trust-manually) .

1.  Create the file for executing the mutual trust script, and add the IP addresses of all the hosts in the openGauss to the file.

    ```
    plat1:/opt/software/openGauss> vim hostfile
    192.168.0.1
    192.168.0.2
    192.168.0.3
    ```

2.  Execute the script as the user who needs to establish mutual trust with the hosts.

    ```
    plat1:/opt/software/openGauss/script# ./gs_sshexkey -f /opt/software/hostfile
    ```

    The  **/opt/software/hostfile**  file contains a list of the hosts. The list provides the IP addresses of all the hosts among which mutual trust needs to be established.


## Establishing Mutual Trust Manually

If the passwords of user  **root**  on the hosts in the openGauss are different, the  **gs\_preinstall**  script cannot be used to establish mutual trust. In this case, manually establish mutual trust.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>
>The following files are generated during establishment of mutual trust:  **authorized\_keys**,  **id\_rsa**,  **id\_rsa.pub**, and  **known\_hosts**. Do not delete or corrupt the files.  
>
The procedure of manually establishing mutual trust is as follows \(**plat1**,  **plat2**, and  **plat3**  are host names\):

1.  Generate a licensed file for user  **root**  on any host \(referred to as the local host\). Host  **plat1**  is used as an example.
    a.  Generate a key.

           ssh-keygen -t rsa
    
    The following is an example:
        
            plat1:~ # ssh-keygen -t rsa 
            Generating public/private rsa key pair.
            Enter file in which to save the key (/root/.ssh/id_rsa): 
            Created directory '/root/.ssh'.
            Enter passphrase (empty for no passphrase): 
            Enter same passphrase again: 
            Your identification has been saved in /root/.ssh/id_rsa.
            Your public key has been saved in /root/.ssh/id_rsa.pub.
            The key fingerprint is:
            d5:35:46:33:27:22:09:f0:1e:12:a7:87:fa:33:3f:ab root@plat1
            The key's randomart image is:
            +--[ RSA 2048]----+
            |      o.o.....O .|
            |       *  .o + * |
            |      + + . .    |
            |     . + o       |
            |    .   S        |
            |     .           |
            |      +          |
            |       +.        |
            |      E.oo       |
            +-----------------+
    
    b.  Generate the licensed file.
    
            cat .ssh/id_rsa.pub >> ~/.ssh/authorized_keys

    The following is an example:
        
    
            plat1:~ # cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
    
2.  Obtain the public keys of all the hosts among which mutual trust needs to be established, and write the public keys into the  **known\_hosts**  file on the local host. This step needs to be performed on the host where Step 1 is performed. You need to obtain the public keys of the  **plat1**,  **plat2**, and  **plat3**  hosts.
    a.  Obtain the public key of host  **plat1**, and write the public key into the  **known\_hosts**  file on the local host.

            ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts
    
     The following is an example:
        
            plat1:~ # ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts 
            # plat1 SSH-2.0-OpenSSH_5.1 
    
    b.  Obtain the public key of host  **plat2**, and write the public key into the  **known\_hosts**  file on the local host.
    
            ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts

    The following is an example:
        
            plat1:~ # ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts 
            # plat2 SSH-2.0-OpenSSH_5.1 
    
    c.  Obtain the public key of host  **plat3**, and write the public key into the  **known\_hosts**  file on the local host.
    
            ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts
    
    The following is an example:
    
            plat1:~ # ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts 
            # plat3 SSH-2.0-OpenSSH_5.1 
    
    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >-   After being accepted, the public key of a remote host will be saved in the  **$HOME/.ssh/known\_hosts**  file on the local host. When connecting to the remote host next time, the system can recognize that the public key of the remote host has been saved on the local host and then skip alarms.
    >
    >-   If the  **known\_hosts**  file is deleted from the local host, the mutual trust between the local and remote hosts remains valid, but alarms will be reported. To prevent such alarms, set the  **StrictHostKeyChecking**  parameter in the  **/etc/ssh/ssh\_config**  file to  **no**.


3.  Send the  **known\_hosts**  file to all the other hosts except the local host. In this example, send the  **known\_hosts**  file on host  **plat1**  to hosts  **plat2**  and  **plat3**.

    a. Send the  **known\_hosts**  file to host  **plat2**. When  **Password:**  is displayed, enter the password for logging in to host  **plat2**.    
            scp -r ~/.ssh plat2:~
    
    
    The following is an example:
            plat1:~ # scp -r ~/.ssh plat2:~
            Password: 
            authorized_keys                 100%  796     0.8KB/s   00:00    
            id_rsa                          100% 1675     1.6KB/s   00:00    
            id_rsa.pub                      100%  398     0.4KB/s   00:00    
            known_hosts                     100% 1089     1.1KB/s   00:00    
    
    b. Send the  **known\_hosts**  file to host  **plat3**. When  **Password:**  is displayed, enter the password for logging in to host  **plat3**.
        
            scp -r ~/.ssh plat3:~
    The following is an example:
        
            plat1:~ # scp -r ~/.ssh plat3:~
            Password: 
            authorized_keys                 100%  796     0.8KB/s   00:00    
            id_rsa                          100% 1675     1.6KB/s   00:00    
            id_rsa.pub                      100%  398     0.4KB/s   00:00    
            known_hosts                     100% 1089     1.1KB/s   00:00    
    
4.  Run the  **ssh** _Host name_  command to check whether mutual trust has been successfully established. Then, enter  **exit**.

    ```
    plat1:~ # ssh plat2
    Last login: Sat Jun 20 14:01:07 2020
    plat2:~ # exit
    logout
    Connection to plat2 closed.
    plat1:~ # 
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >
    >If there are more than three hosts, the procedure of manually establishing mutual trust between the hosts is similar to the one in this section. Assume that the host names are  **plat1**,  **plat2**,  **plat3**, ... Firstly, generate a licensed file for user  **root**  on host  **plat1**  \(referred to as the local host\). Secondly, obtain the public keys of all the hosts \(**plat1**,  **plat2**,  **plat3**, ...\) between which mutual trust needs to be established, and write the public keys to the  **known\_hosts**  file on the local host. Thirdly, send the file from the local host to all the other hosts \(**plat2**,  **plat3**, ...\). Finally, verify that mutual trust has been successfully established.  
    >


### Deleting Mutual Trust Between Users  **root** 

The mutual trust established between users  **root**  may incur security risks. You are advised to delete the mutual trust between users  **root**  immediately after the installation is complete.

1.  Delete the mutual trust file  **/root/.ssh**  from each openGauss database node.

    rm –rf \~/.ssh

2.  Check whether the mutual trust is successfully deleted. If the host names cannot be reached from each other through SSH and a mutual trust failure message is displayed, the mutual trust is successfully deleted.

    plat1:\~ \# ssh plat2

    he authenticity of host ' plssat2 \(plat2\)' can't be established.

    ECDSA key fingerprint is SHA256:Q4DPRedFytsjsJSKf4l2lHKuzVw4prq3bIUCNVKIa7M.

    ECDSA key fingerprint is MD5:e2:77:6c:aa:4c:43:5f:f2:c4:58:ec:d5:53:de:7c:fc.

    Are you sure you want to continue connecting \(yes/no\)?


### Examples

The following is an example describing how to establish mutual trust between users  **root**:

```
plat1:~ # gs_sshexkey -f /opt/software/hostfile -W Gauss_123
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
```

The following is an example describing how to establish mutual trust between common users:

```
gaussdb@plat1:~ > gs_sshexkey -f /opt/software/hostfile -W Gauss_123
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
```

The following is an example describing how to establish mutual trust in security mode. This mode is recommended. Users need to manually enter their passwords as prompted.

```
plat1:~ # gs_sshexkey -f /opt/software/hostfile
Please enter password for current user[root].
Password: 
Checking network information.
All nodes in the network are Normal.
Successfully checked network information.
Creating SSH trust.
Creating the local key file.
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
```

## Configuring OS Parameters

openGauss requires that the OS parameters on every host be set to specified values to ensure system running performance.

Some of these parameters are set during the openGauss installation environment preparation phase, and these parameters directly affect the running status of the openGauss. You need to manually adjust these parameters only when necessary. You can use the following methods:

1.  Log in to a server as user  **root**.
2.  Modify the  **/etc/sysctl.conf**  file.

    For details about how to modify parameters, see  [OS Parameters](#OS Parameters).

3.  Run the following command to make the modifications take effect:

    ```
    sysctl -p
    ```


## OS Parameters

**Table  1**  OS parameters

<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_table174711620568"></a>
<table><thead align="left"><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row134711465560"><th class="cellrowborder" valign="top" width="22.270000000000003%" id="mcps1.2.5.1.1"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p258931915710"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p258931915710"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p258931915710"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="48.13000000000001%" id="mcps1.2.5.1.2"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1358931917574"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1358931917574"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1358931917574"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="15.760000000000002%" id="mcps1.2.5.1.3"><p id="p1690011152212"><a name="p1690011152212"></a><a name="p1690011152212"></a>Automatically Set by Scripts During Pre-Installation</p>
</th>
<th class="cellrowborder" valign="top" width="13.840000000000002%" id="mcps1.2.5.1.4"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6590119125718"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6590119125718"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6590119125718"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row647214625611"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1125722695711"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1125722695711"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1125722695711"></a>net.ipv4.tcp_max_tw_buckets</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p182571426125710"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p182571426125710"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p182571426125710"></a>Specifies the maximum number of TCP/IP connections concurrently remaining in the <strong id="b20454121619520"><a name="b20454121619520"></a><a name="b20454121619520"></a>TIME_WAIT</strong> state. If the number of TCP/IP connections concurrently remaining in the <strong id="b565720239528"><a name="b565720239528"></a><a name="b565720239528"></a>TIME_WAIT</strong> state exceeds the value of this parameter, the TCP/IP connections in the <strong id="b186651623135210"><a name="b186651623135210"></a><a name="b186651623135210"></a>TIME_WAIT</strong> state will be released immediately, and alarm information will be printed.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p119011915422"><a name="p119011915422"></a><a name="p119011915422"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p42571268571"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p42571268571"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p42571268571"></a>10000</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row4472364569"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p59261713115813"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p59261713115813"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p59261713115813"></a>net.ipv4.tcp_tw_reuse</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p169261713135818"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p169261713135818"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p169261713135818"></a>Reuses sockets whose status is <strong id="b9668733125216"><a name="b9668733125216"></a><a name="b9668733125216"></a>TIME-WAIT</strong> for new TCP connections.</p>
<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul99261213185819"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul99261213185819"></a><ul id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul99261213185819"><li><strong id="b1922443965212"><a name="b1922443965212"></a><a name="b1922443965212"></a>0</strong>: This function is disabled.</li><li><strong id="b13542174055211"><a name="b13542174055211"></a><a name="b13542174055211"></a>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p209015151214"><a name="p209015151214"></a><a name="p209015151214"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1692713134587"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1692713134587"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1692713134587"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row94736616569"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p292717139588"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p292717139588"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p292717139588"></a>net.ipv4.tcp_tw_recycle</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1992811310580"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1992811310580"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1992811310580"></a>Rapidly reclaims sockets whose status is <strong id="b12266104255218"><a name="b12266104255218"></a><a name="b12266104255218"></a>TIME-WAIT</strong> in TCP connections.</p>
<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul17928101395817"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul17928101395817"></a><ul id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul17928101395817"><li><strong id="b1416194710527"><a name="b1416194710527"></a><a name="b1416194710527"></a>0</strong>: This function is disabled.</li><li><strong id="b047948165213"><a name="b047948165213"></a><a name="b047948165213"></a>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p1590112151228"><a name="p1590112151228"></a><a name="p1590112151228"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1928613155814"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1928613155814"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1928613155814"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row4676171295719"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p11929181313586"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p11929181313586"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p11929181313586"></a>net.ipv4.tcp_keepalive_time</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p199291139588"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p199291139588"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p199291139588"></a>Specifies how often keep-alive messages are sent through TCP connections when Keep-Alive is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p590118151725"><a name="p590118151725"></a><a name="p590118151725"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p892911355817"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p892911355817"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p892911355817"></a>30</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row17677191218575"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1492941395814"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1492941395814"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1492941395814"></a>net.ipv4.tcp_keepalive_probes</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p49291138584"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p49291138584"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p49291138584"></a>Specifies the number of keep-alive detection packets sent through a TCP connection before the connection is regarded invalid. The product of the parameter value multiplied by the value of the <strong id="b860162215539"><a name="b860162215539"></a><a name="b860162215539"></a>tcp_keepalive_intvl</strong> parameter determines the response timeout after a keep-alive message is sent through a connection.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p159017154213"><a name="p159017154213"></a><a name="p159017154213"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p5930181310585"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p5930181310585"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p5930181310585"></a>9</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row1467720124571"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1593010138588"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1593010138588"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1593010138588"></a>net.ipv4.tcp_keepalive_intvl</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p59301313185815"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p59301313185815"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p59301313185815"></a>Specifies how often a detection packet is re-sent when the previous packets are not acknowledged.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p129011215625"><a name="p129011215625"></a><a name="p129011215625"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p4931151314582"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p4931151314582"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p4931151314582"></a>30</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row885193417577"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p209310131583"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p209310131583"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p209310131583"></a>net.ipv4.tcp_retries1</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6932131313581"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6932131313581"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6932131313581"></a>Specifies the maximum TCP reattempts during the connection establishment process.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p169021158217"><a name="p169021158217"></a><a name="p169021158217"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p793281355810"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p793281355810"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p793281355810"></a>5</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row785253455720"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17932713145816"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17932713145816"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17932713145816"></a>net.ipv4.tcp_syn_retries</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p189321613175819"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p189321613175819"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p189321613175819"></a>Specifies the maximum SYN packet reattempts in the TCP.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p2090231516211"><a name="p2090231516211"></a><a name="p2090231516211"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p693313136582"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p693313136582"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p693313136582"></a>5</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row10853153425712"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1293371305814"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1293371305814"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1293371305814"></a>net.ipv4.tcp_synack_retries</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17933201318587"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17933201318587"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17933201318587"></a>Specifies the maximum SYN response packet reattempts in the TCP.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p1690216151723"><a name="p1690216151723"></a><a name="p1690216151723"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p99331013155811"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p99331013155811"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p99331013155811"></a>5</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row0188144110571"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p203091939195813"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p203091939195813"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p203091939195813"></a>net.ipv4.tcp_retries2</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1331013399587"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1331013399587"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1331013399587"></a>Specifies the number of times that the kernel re-sends data to a connected remote host. A smaller value leads to earlier detection of an invalid connection to the remote host, and the server can quickly release this connection.</p>
<p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p133103392585"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p133103392585"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p133103392585"></a>If "connection reset by peer" is displayed, increase the value of this parameter to avoid the problem.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p1290291518214"><a name="p1290291518214"></a><a name="p1290291518214"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p83101739145811"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p83101739145811"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p83101739145811"></a>12</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row0188184135716"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p10310183915815"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p10310183915815"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p10310183915815"></a>vm.overcommit_memory</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12311173912584"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12311173912584"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12311173912584"></a>Specifies the kernel check method during memory allocation.</p>
<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul14311183913587"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul14311183913587"></a><ul id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul14311183913587"><li><strong id="b6953815145419"><a name="b6953815145419"></a><a name="b6953815145419"></a>0</strong>: The system accurately calculates the current available memory.</li><li><strong id="b19366171814545"><a name="b19366171814545"></a><a name="b19366171814545"></a>1</strong>: The system returns a success message without a kernel check.</li><li><strong id="b161722020135420"><a name="b161722020135420"></a><a name="b161722020135420"></a>2</strong>: The system returns a failure message if the memory size you have applied for exceeds the result of the following formula: Total memory size x Value of <strong id="b51735207548"><a name="b51735207548"></a><a name="b51735207548"></a>vm.overcommit_ratio</strong>/100 + Total SWAP size.</li></ul>
<p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p193123394589"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p193123394589"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p193123394589"></a>The default value is <strong id="b1755911284545"><a name="b1755911284545"></a><a name="b1755911284545"></a>2</strong>, which is too conservative. The recommended value is <strong id="b135647281546"><a name="b135647281546"></a><a name="b135647281546"></a>0</strong>. If memory usage is high, set this parameter to <strong id="b35649287549"><a name="b35649287549"></a><a name="b35649287549"></a>1</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p490291520219"><a name="p490291520219"></a><a name="p490291520219"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13313153945816"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13313153945816"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13313153945816"></a>0</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row3361592574"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p19529155145913"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p19529155145913"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p19529155145913"></a>net.ipv4.tcp_rmem</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1452915511595"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1452915511595"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1452915511595"></a>Specifies the free memory in the TCP receiver buffer. Three memory size ranges in the unit of page are provided: <strong id="b1088810432553"><a name="b1088810432553"></a><a name="b1088810432553"></a>min</strong>, <strong id="b28932431554"><a name="b28932431554"></a><a name="b28932431554"></a>default</strong>, and <strong id="b17893643175514"><a name="b17893643175514"></a><a name="b17893643175514"></a>max</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p190314151126"><a name="p190314151126"></a><a name="p190314151126"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p5529155105915"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p5529155105915"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p5529155105915"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row10378590579"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p953010511591"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p953010511591"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p953010511591"></a>net.ipv4.tcp_wmem</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1153017545918"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1153017545918"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1153017545918"></a>Specifies the free memory in the TCP sender buffer. Three memory size ranges in the unit of page are provided: <strong id="b20324164545512"><a name="b20324164545512"></a><a name="b20324164545512"></a>min</strong>, <strong id="b232416452553"><a name="b232416452553"></a><a name="b232416452553"></a>default</strong>, and <strong id="b8325445155511"><a name="b8325445155511"></a><a name="b8325445155511"></a>max</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p1990411152028"><a name="p1990411152028"></a><a name="p1990411152028"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p195301356597"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p195301356597"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p195301356597"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row2387595578"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163351922125910"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163351922125910"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163351922125910"></a>net.core.wmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p14335132214593"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p14335132214593"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p14335132214593"></a>Specifies the maximum size of the socket sender buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p199040151025"><a name="p199040151025"></a><a name="p199040151025"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p633582217598"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p633582217598"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p633582217598"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row33995910574"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12336132225915"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12336132225915"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12336132225915"></a>net.core.rmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p2336172218596"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p2336172218596"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p2336172218596"></a>Specifies the maximum size of the socket receiver buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p490419159212"><a name="p490419159212"></a><a name="p490419159212"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163361222205919"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163361222205919"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163361222205919"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row1739559195711"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8336142211595"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8336142211595"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8336142211595"></a>net.core.wmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6337182218592"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6337182218592"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p6337182218592"></a>Specifies the default size of the socket sender buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p149048151427"><a name="p149048151427"></a><a name="p149048151427"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p193371222105920"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p193371222105920"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p193371222105920"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row14011595570"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p333715223593"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p333715223593"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p333715223593"></a>net.core.rmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163371922175915"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163371922175915"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163371922175915"></a>Specifies the default size of the socket receiver buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p49041215428"><a name="p49041215428"></a><a name="p49041215428"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13338122275917"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13338122275917"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13338122275917"></a>21299200</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row1041959195714"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1833892275911"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1833892275911"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1833892275911"></a>net.ipv4.ip_local_port_range</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p0338112235914"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p0338112235914"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p0338112235914"></a>Specifies the range of temporary ports that can be used by a physical server.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p890411151129"><a name="p890411151129"></a><a name="p890411151129"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p14339142235915"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p14339142235915"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p14339142235915"></a>26000-65535</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row0425596573"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1933992225914"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1933992225914"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1933992225914"></a>kernel.sem</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p933942215595"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p933942215595"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p933942215595"></a>Specifies the kernel semaphore.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p490411151822"><a name="p490411151822"></a><a name="p490411151822"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12340132213597"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12340132213597"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12340132213597"></a>250 6400000 1000 25600</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row44385915579"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p934010229591"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p934010229591"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p934010229591"></a>vm.min_free_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p183405228591"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p183405228591"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p183405228591"></a>Specifies the minimum free physical memory reserved for unexpected page breaks.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p890517151123"><a name="p890517151123"></a><a name="p890517151123"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17341142215591"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17341142215591"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17341142215591"></a>5% of the total system memory</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row9431359105719"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p11341322145910"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p11341322145910"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p11341322145910"></a>net.core.somaxconn</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1234282213599"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1234282213599"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1234282213599"></a>Specifies the maximum length of the listening queue of each port. This is a global parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p1290515157211"><a name="p1290515157211"></a><a name="p1290515157211"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p534272295916"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p534272295916"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p534272295916"></a>65535</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row11442059175716"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163421022125917"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163421022125917"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p163421022125917"></a>net.ipv4.tcp_syncookies</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1534362218593"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1534362218593"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1534362218593"></a>Specifies whether to enable SYN cookies to guard the OS against SYN attacks when the SYN waiting queue overflows.</p>
<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul534318226591"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul534318226591"></a><ul id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul534318226591"><li><strong id="b1996945416554"><a name="b1996945416554"></a><a name="b1996945416554"></a>0</strong>: The SYN cookies are disabled.</li><li><strong id="b1514455155518"><a name="b1514455155518"></a><a name="b1514455155518"></a>1</strong>: The SYN cookies are enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p9905121512214"><a name="p9905121512214"></a><a name="p9905121512214"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p133441022135919"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p133441022135919"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p133441022135919"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row119054135715"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1671381607"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1671381607"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1671381607"></a>net.core.netdev_max_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1975811012"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1975811012"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1975811012"></a>Specifies the maximum number of data packets that can be sent to the queue when the rate at which the network device receives data packets is higher than that at which the kernel processes the data packets.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p159054151527"><a name="p159054151527"></a><a name="p159054151527"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1287819014"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1287819014"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1287819014"></a>65535</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row1319012411575"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p19813814012"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p19813814012"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p19813814012"></a>net.ipv4.tcp_max_syn_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13818816015"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13818816015"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p13818816015"></a>Specifies the maximum number of unacknowledged connection requests to be recorded.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p12905215225"><a name="p12905215225"></a><a name="p12905215225"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1791986010"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1791986010"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1791986010"></a>65535</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row111911441145720"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p20914818010"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p20914818010"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p20914818010"></a>net.ipv4.tcp_fin_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p7978801"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p7978801"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p7978801"></a>Specifies the default timeout duration.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p19905815127"><a name="p19905815127"></a><a name="p19905815127"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17101281003"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17101281003"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17101281003"></a>60</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row171915417579"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p61016819012"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p61016819012"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p61016819012"></a>kernel.shmall</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1810481505"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1810481505"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1810481505"></a>Specifies the total shared free memory of the kernel.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p29055154219"><a name="p29055154219"></a><a name="p29055154219"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8101081004"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8101081004"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8101081004"></a>1152921504606846720</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row1093874517594"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p4118812012"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p4118812012"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p4118812012"></a>kernel.shmmax</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p131117813014"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p131117813014"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p131117813014"></a>Specifies the maximum value of a shared memory segment.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p1290511151825"><a name="p1290511151825"></a><a name="p1290511151825"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p181188803"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p181188803"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p181188803"></a>18446744073709551615</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row1493934585918"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p412986019"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p412986019"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p412986019"></a>net.ipv4.tcp_sack</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p112881904"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p112881904"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p112881904"></a>Specifies whether selective acknowledgment is enabled. The selective acknowledgment on out-of-order packets can increase system performance. Restricting users to sending only lost packets (for wide area networks) should be enabled, but this will increase CPU usage.</p>
<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul112208308"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul112208308"></a><ul id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul112208308"><li><strong id="b1706099949"><a name="b1706099949"></a><a name="b1706099949"></a>0</strong>: This function is disabled.</li><li><strong>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p49061115326"><a name="p49061115326"></a><a name="p49061115326"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17131181208"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17131181208"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p17131181208"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row199407451592"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p111418818011"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p111418818011"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p111418818011"></a>net.ipv4.tcp_timestamps</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p10141681903"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p10141681903"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p10141681903"></a>Specifies whether the TCP timestamp (12 bytes are added in the TCP packet header) enables a more accurate RTT calculation than the retransmission timeout (for details, see RFC 1323) for better performance.</p>
<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul814881508"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul814881508"></a><ul id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_ul814881508"><li><strong id="b575630733"><a name="b575630733"></a><a name="b575630733"></a>0</strong>: This function is disabled.</li><li><strong>1</strong>: This function is enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p790651519211"><a name="p790651519211"></a><a name="p790651519211"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p18151381901"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p18151381901"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p18151381901"></a>1</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row3940154515911"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p02308185016"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p02308185016"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p02308185016"></a>vm.extfrag_threshold</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p62301518909"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p62301518909"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p62301518909"></a>When system memory is insufficient, Linux will score the current system memory fragments. If the score is higher than the value of <strong>vm.extfrag_threshold</strong>, <strong>kswapd</strong> triggers memory compaction. When the value of this parameter is close to <strong>1000</strong>, the system tends to swap out old pages when processing memory fragments to meet the application requirements. When the value of this parameter is close to <strong>0</strong>, the system tends to do memory compaction when processing memory fragments.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p49065155212"><a name="p49065155212"></a><a name="p49065155212"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p923111816015"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p923111816015"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p923111816015"></a>500</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row14114125155912"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8231218904"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8231218904"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p8231218904"></a>vm.overcommit_ratio</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1823117183015"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1823117183015"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p1823117183015"></a>When the system uses the algorithms where memory usage never exceeds the thresholds, the total memory address space of the system cannot exceed the value of <strong>swap+RAM</strong> multiplied by the percentage specified by this parameter. When the value of <strong>vm.overcommit_memory</strong> is set to <strong>2</strong>, this parameter takes effect.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p2090613159212"><a name="p2090613159212"></a><a name="p2090613159212"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12232121819017"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12232121819017"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p12232121819017"></a>90</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_row151152051125910"><td class="cellrowborder" valign="top" width="22.270000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p2233161813015"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p2233161813015"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p2233161813015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="48.13000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p32330181404"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p32330181404"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p32330181404"></a>Specifies the maximum transmission unit (MTU) for a node NIC. The default value is <strong>1500</strong> in the OS. You can set it to <strong>8192</strong> to improve the performance of sending and receiving data.</p>
</td>
<td class="cellrowborder" valign="top" width="15.760000000000002%" headers="mcps1.2.5.1.3 "><p id="p19906171511217"><a name="p19906171511217"></a><a name="p19906171511217"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="13.840000000000002%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p223412181010"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p223412181010"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0085031791_p223412181010"></a>8192</p>
</td>
</tr>
</tbody>
</table>


### File System Parameters

-   soft nofile

    Indicates the soft limit. The number of file handles used by a user can exceed this parameter value. However, an alarm will be reported.

    Recommended value:  **1000000**

-   hard nofile

    Indicates the hard limit. The number of file handles used by a user cannot exceed this parameter value.

    Recommended value:  **1000000**

-   stack size

    Indicates the thread stack size.

    Recommended value:  **3072**


### Setting the transparent\_hugepage Service

By default, openGauss disables the transparent\_hugepage service and this setting is written into the OS startup file.

### Setting File Handles

To manually set the number of file handles, run the following commands to modify the involved parameters as user  **root**:

```
echo "* soft nofile 1000000" >>/etc/security/limits.conf
echo "* hard nofile 1000000" >>/etc/security/limits.conf
```

After the modification is complete, restart the OS to make the setting take effect.

**Table  2**  Parameters for setting the number of file handles

<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_table66928349154930"></a>
<table><thead align="left"><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row32458049154930"><th class="cellrowborder" valign="top" width="17.47%" id="mcps1.2.5.1.1"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p29726478135851"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p29726478135851"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p29726478135851"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.07000000000001%" id="mcps1.2.5.1.2"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6791871135943"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6791871135943"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6791871135943"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="21.060000000000002%" id="mcps1.2.5.1.3"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p17069230135851"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p17069230135851"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p17069230135851"></a>Automatically Set by Scripts During Pre-Installation</p>
</th>
<th class="cellrowborder" valign="top" width="9.4%" id="mcps1.2.5.1.4"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p45338003135924"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p45338003135924"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p45338003135924"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row36414898154930"><td class="cellrowborder" valign="top" width="17.47%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p53634223135851"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p53634223135851"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p53634223135851"></a>* soft nofile</p>
</td>
<td class="cellrowborder" valign="top" width="52.07000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1184561135943"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1184561135943"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1184561135943"></a>Specifies the soft limit on the number of file handles. For example, if this parameter is set to <span class="parmvalue"><b>1000000</b></span>, any user can open a maximum of 1,000,000 files regardless of how many shells are enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p42366546135851"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p42366546135851"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p42366546135851"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="9.4%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p36154703135924"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p36154703135924"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p36154703135924"></a>1000000</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row3006053154930"><td class="cellrowborder" valign="top" width="17.47%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p15135199135851"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p15135199135851"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p15135199135851"></a>* hard nofile</p>
</td>
<td class="cellrowborder" valign="top" width="52.07000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p58238613135943"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p58238613135943"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p58238613135943"></a>Specifies the hard limit. The soft limit must be less than or equal to the hard limit.</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p48031615135851"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p48031615135851"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p48031615135851"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="9.4%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p50103914135924"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p50103914135924"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p50103914135924"></a>1000000</p>
</td>
</tr>
</tbody>
</table>

### Setting the Maximum Number of Allowed Processes

To manually set the maximum number of allowed processes, run the following command to open the configuration file:

```
vim /etc/security/limits.d/90-nproc.conf
```

Modify the  **\* soft nproc**  parameter in the file.

After the modification is complete, restart the OS to make the setting take effect.

**Table  3**  Setting the maximum number of allowed processes

<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_table51875363151525"></a>
<table><thead align="left"><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row23677630151525"><th class="cellrowborder" valign="top" width="17.47%" id="mcps1.2.5.1.1"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p38839882151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p38839882151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p38839882151525"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="52.07000000000001%" id="mcps1.2.5.1.2"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p59022734151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p59022734151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p59022734151525"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="21.060000000000002%" id="mcps1.2.5.1.3"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p16112179151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p16112179151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p16112179151525"></a>Automatically Set by Scripts During Pre-Installation</p>
</th>
<th class="cellrowborder" valign="top" width="9.4%" id="mcps1.2.5.1.4"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p30018145151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p30018145151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p30018145151525"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row15550655151525"><td class="cellrowborder" valign="top" width="17.47%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p51643509151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p51643509151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p51643509151525"></a>* soft nproc</p>
</td>
<td class="cellrowborder" valign="top" width="52.07000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p22374700151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p22374700151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p22374700151525"></a>Specifies the maximum number of processes allowed per user.</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p411403151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p411403151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p411403151525"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="9.4%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p33323707151525"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p33323707151525"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p33323707151525"></a>unlimited</p>
</td>
</tr>
</tbody>
</table>

### Setting NIC Parameters

**Table  4**  Setting NIC parameters

<a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_table6110995517616"></a>
<table><thead align="left"><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row1264128417616"><th class="cellrowborder" valign="top" width="14.511451145114512%" id="mcps1.2.5.1.1"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1731111217616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1731111217616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1731111217616"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="32.08320832083208%" id="mcps1.2.5.1.2"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6002283217616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6002283217616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6002283217616"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="39.663966396639665%" id="mcps1.2.5.1.3"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p3001123717616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p3001123717616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p3001123717616"></a>Automatically Set by Scripts During Pre-Installation</p>
</th>
<th class="cellrowborder" valign="top" width="13.74137413741374%" id="mcps1.2.5.1.4"><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1499111817616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1499111817616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1499111817616"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row632104417616"><td class="cellrowborder" valign="top" width="14.511451145114512%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p4224252617616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p4224252617616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p4224252617616"></a>rx</p>
</td>
<td class="cellrowborder" valign="top" width="32.08320832083208%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6620142817616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6620142817616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6620142817616"></a>Specifies the receive queue length for an NIC.</p>
</td>
<td class="cellrowborder" valign="top" width="39.663966396639665%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6071548817616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6071548817616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p6071548817616"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.74137413741374%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1900746317616"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1900746317616"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p1900746317616"></a>4096</p>
</td>
</tr>
<tr id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_row23313038172018"><td class="cellrowborder" valign="top" width="14.511451145114512%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p8490754172018"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p8490754172018"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p8490754172018"></a>tx</p>
</td>
<td class="cellrowborder" valign="top" width="32.08320832083208%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p16662510172018"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p16662510172018"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p16662510172018"></a>Specifies the transmission queue length for an NIC.</p>
</td>
<td class="cellrowborder" valign="top" width="39.663966396639665%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p48712694172056"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p48712694172056"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p48712694172056"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="13.74137413741374%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p53414171172056"><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p53414171172056"></a><a name="en-us_topic_0241805805_en-us_topic_0085434661_en-us_topic_0059782062_p53414171172056"></a>4096</p>
</td>
</tr>
</tbody>
</table>

![](public_sys-resources/icon-notice.gif) **NOTICE:**   
-   NIC parameters can be configured only for 10GE and larger service NICs, that is, the NIC bound to  **backIp1**.  
-   The commands for setting NIC parameters are written into the OS startup file only after the parameters are successfully set. Information about command execution failures is recorded in logs on the server.  

