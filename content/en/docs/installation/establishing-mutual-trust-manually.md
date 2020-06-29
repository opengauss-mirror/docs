# Establishing Mutual Trust Manually<a name="EN-US_TOPIC_0249784564"></a>

During the openGauss installation, you need to perform operations such as running commands and transferring files between hosts in openGauss. Establish mutual trust among the hosts before installing the cluster as a common user. During the execution of the pre-installation script, establish mutual trust between users  **root**, then create a common user account, and finally establish mutual trust between common users.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>The mutual trust between users  **root**  may incur security risks. You are advised to delete the mutual trust between users  **root**  after the installation is complete.  

## Prerequisites<a name="en-us_topic_0241805804_en-us_topic_0085434625_en-us_topic_0059782039_s88bba380d9334b129eab3023c5399d45"></a>

-   The SSH service has been enabled.
-   You have verified that SSH ports will not be disabled by firewalls.
-   Each host name and IP address have been correctly configured in the XML file.
-   Communication among all the hosts is normal.
-   If the mutual trust is to be established for common users, the same user needs to be created and password set on each host.
-   If the SELinux service is installed and has been started on each host, ensure that the security context of the  **/root**  directory is set to the default value  **system\_u:object\_r:home\_root\_t:s0**  and that of the  **/home**  directory is set to the default value  **system\_u:object\_r:admin\_home\_t:s0**, or disable the SELinux service.

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


## Establishing Mutual Trust Using a Script<a name="en-us_topic_0241805804_en-us_topic_0085434625_en-us_topic_0059782039_s8028dd8189914444b059c07d8c8c82de"></a>

1.  Create the file for executing the mutual trust script, and add the IP addresses of all the hosts in the openGauss to the file.

    ```
    plat1:/opt/software/openGauss> vim hostfile
    192.168.0.1
    192.168.0.2
    192.168.0.3
    ```

2.  Execute the script as the user who needs to establish mutual trust with the hosts.
3.  Execute the following script to establish mutual trust:

    ```
    plat1:/opt/software/openGauss/script# gs_sshexkey -f /opt/software/hostfile
    ```

    The  **/opt/software/hostfile**  file contains a list of the hosts. The list provides the IP addresses of all the hosts among which mutual trust needs to be established.


## Establishing Mutual Trust Manually<a name="en-us_topic_0241805804_en-us_topic_0085434625_en-us_topic_0059782039_section63620881152125"></a>

If the passwords of user  **root**  on the hosts in the openGauss are different, the  **gs\_preinstall**  script cannot be used to establish mutual trust. In this case, manually establish mutual trust.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The following files are generated during establishment of mutual trust:  **authorized\_keys**,  **id\_rsa**,  **id\_rsa.pub**, and  **known\_hosts**. Do not delete or corrupt the files.  

The procedure of manually establishing mutual trust is as follows \(**plat1**,  **plat2**, and  **plat3**  are host names\):

1.  Generate a licensed file for user  **root**  on any host \(referred to as the local host\). Host  **plat1**  is used as an example.
    1.  Generate a key.

        ```
        ssh-keygen -t rsa
        ```

        The following is an example:

        ```
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
        ```

    2.  Generate the licensed file.

        ```
        cat .ssh/id_rsa.pub >> .ssh/authorized_keys
        ```

        The following is an example:

        ```
        plat1:~ # cat .ssh/id_rsa.pub >> .ssh/authorized_keys
        ```

2.  Obtain the public keys of all the hosts among which mutual trust needs to be established, and write the public keys into the  **known\_hosts**  file on the local host. This step needs to be performed on the host where Step 1 is performed. You need to obtain the public keys of the  **plat1**,  **plat2**, and  **plat3**  hosts.
    1.  Obtain the public key of host  **plat1**, and write the public key into the  **known\_hosts**  file on the local host.

        ```
        ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts
        ```

        The following is an example:

        ```
        plat1:~ # ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts 
        # plat1 SSH-2.0-OpenSSH_5.1 
        ```

    2.  Obtain the public key of host  **plat2**, and write the public key into the  **known\_hosts**  file on the local host.

        ```
        ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts
        ```

        The following is an example:

        ```
        plat1:~ # ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts 
        # plat2 SSH-2.0-OpenSSH_5.1 
        ```

    3.  Obtain the public key of host  **plat3**, and write the public key into the  **known\_hosts**  file on the local host.

        ```
        ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts
        ```

        The following is an example:

        ```
        plat1:~ # ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts 
        # plat3 SSH-2.0-OpenSSH_5.1 
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >-   After being accepted, the public key of a remote host will be saved in the  **$HOME/.ssh/known\_hosts**  file on the local host. When connecting to the remote host next time, the system can recognize that the public key of the remote host has been saved on the local host and then skip alarms.  
        >-   If the  **known\_hosts**  file is deleted from the local host, the mutual trust between the local and remote hosts remains valid, but alarms will be reported. To prevent such alarms, set the  **StrictHostKeyChecking**  parameter in the  **/etc/ssh/ssh\_config**  file to  **no**.  


3.  Send the  **known\_hosts**  file to all the other hosts except the local host. In this example, send the  **known\_hosts**  file on host  **plat1**  to hosts  **plat2**  and  **plat3**.

    1. Send the  **known\_hosts**  file to host  **plat2**. When  **Password:**  is displayed, enter the password for logging in to host  **plat2**.

    ```
    scp -r .ssh plat2:~
    ```

    The following is an example:

    ```
    plat1:~ # scp -r .ssh plat2:~
    Password: 
    authorized_keys                 100%  796     0.8KB/s   00:00    
    id_rsa                          100% 1675     1.6KB/s   00:00    
    id_rsa.pub                      100%  398     0.4KB/s   00:00    
    known_hosts                     100% 1089     1.1KB/s   00:00    
    ```

    2. Send the  **known\_hosts**  file to host  **plat3**. When  **Password:**  is displayed, enter the password for logging in to host  **plat3**.

    ```
    scp -r .ssh plat3:~
    ```

    The following is an example:

    ```
    plat1:~ # scp -r .ssh plat3:~
    Password: 
    authorized_keys                 100%  796     0.8KB/s   00:00    
    id_rsa                          100% 1675     1.6KB/s   00:00    
    id_rsa.pub                      100%  398     0.4KB/s   00:00    
    known_hosts                     100% 1089     1.1KB/s   00:00    
    ```

4.  Run the  **ssh **_Host name_  command to check whether mutual trust has been successfully established. Then, enter  **exit**.

    ```
    plat1:~ # ssh plat2
    Last login: Sat Jun 20 14:01:07 2020
    plat2:~ # exit
    logout
    Connection to plat2 closed.
    plat1:~ # 
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >If there are more than three hosts, the procedure of manually establishing mutual trust between the hosts is similar to the one in this section. Assume that the host names are  **plat1**,  **plat2**,  **plat3**, ... Firstly, generate a licensed file for user  **root**  on host  **plat1**  \(referred to as the local host\). Secondly, obtain the public keys of all the hosts \(**plat1**,  **plat2**,  **plat3**, ...\) between which mutual trust needs to be established, and write the public keys to the  **known\_hosts**  file on the local host. Thirdly, send the file from the local host to all the other hosts \(**plat2**,  **plat3**, ...\). Finally, verify that mutual trust has been successfully established.  


## Deleting Mutual Trust Between Users  **root** <a name="section149417461942"></a>

The mutual trust established between users  **root**  may incur security risks. You are advised to delete the mutual trust between users  **root**  immediately after the installation is complete.

1.  Delete the mutual trust file  **/root/.ssh**  from each openGauss database node.

    rm –rf \~/.ssh

2.  Check whether the mutual trust is successfully deleted. If the host names cannot be reached from each other through SSH and a mutual trust failure message is displayed, the mutual trust is successfully deleted.

    plat1:\~ \# ssh plat2

    he authenticity of host ' plssat2 \(plat2\)' can't be established.

    ECDSA key fingerprint is SHA256:Q4DPRedFytsjsJSKf4l2lHKuzVw4prq3bIUCNVKIa7M.

    ECDSA key fingerprint is MD5:e2:77:6c:aa:4c:43:5f:f2:c4:58:ec:d5:53:de:7c:fc.

    Are you sure you want to continue connecting \(yes/no\)?


## Examples<a name="en-us_topic_0241805804_en-us_topic_0085434625_en-us_topic_0059782039_s9928a16b5b7347edbdb587133575483e"></a>

The following is an example describing how to establish mutual trust between users  **root**:

```
plat1:~ # gs_sshexkey -f /opt/software/hostfile -W Gauss_234
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
gaussdb@plat1:~ > gs_sshexkey -f /opt/software/hostfile -W Gauss_234
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

