# FAQs<a name="EN-US_TOPIC_0241702866"></a> 

## What Should I Do If Mutual Trust Between Nodes in openGauss Is Lost?<a name="EN-US_TOPIC_0241702867"></a>

### Symptom<a name="en-us_topic_0231761642_en-us_topic_0085434670_en-us_topic_0059782026_sb8a28e38916d47e4b282e1fb527260f8"></a>

Mutual trust established for a specific user is lost. The system requires a password for SSL connections.

```
sc_ssh@node1:~/.ssh> ssh node2
Password:
```

### Possible Causes<a name="en-us_topic_0231761642_en-us_topic_0085434670_en-us_topic_0059782026_s7edc9a91f34b4cdc82799dfd9eaaaa8b"></a>

-   The SSHD service is not running.
-   SSH-based access is prohibited by the firewall.
-   The user does not have the required permission for the root directory.
-   The user does not have the required permission for the public key file.
-   The keys recorded in the  **known\_hosts**  file conflict with the IP addresses.
-   The public key does not match the user's private key.

### Procedure<a name="en-us_topic_0231761642_en-us_topic_0085434670_en-us_topic_0059782026_s2a8b95d31f7a4197ad4c9ac8bf9f50e9"></a>

-   Check whether the SSHD service is running.
    1.  Run the  **service sshd status**  command to check the status of the SSHD service.
    2.  If the SSHD service is disabled, run the  **service sshd start**  command to enable it.

-   Check whether the system firewall is enabled.
    1.  Run the  **systemctl status firewalld.service **command to view the openGauss firewall status.
    2.  If the system firewall is enabled, run  **systemctl stop firewalld.service **to disable it.


-   Check whether the user does not have the required permission for the root directory.
    1.  Run the  **ll**  command to check the properties of the root directory. Check whether the owner group of the directory is the same as that of the user and whether the user has read and write permissions on the directory.
    2.  Run the  **chown**  command to change the owner group of the root directory and run the  **chmod**  command to change the permission on the directory if necessary.

-   Check whether the user does not have the required permission for the public key file.
    1.  View the  **\~/.ssh/id\_rsa.pub**  file to check whether the owner group of the file is the same as that of the user and whether the user has read and write permissions on the file.
    2.  Run the  **chown**  command to change the owner group of the file and run the  **chmod**  command to change the permission on the file if necessary.


- Check whether the keys recorded in the  **known\_hosts**  file conflict with the IP addresses.

  View the  **\~/.ssh/known\_hosts**  file to check whether the keys recorded in the file conflict with the IP addresses. If conflicts are detected, exceptions may be caused by changes to the specified IP addresses. In this case, delete the original public keys in the file.


- Check whether the public key matches the user's private key.

  If the problem persists after the preceding causes are excluded, the public key may mismatch the private key. In this case, delete all the files in the public key directory  **.ssh**  and configure the trust relationship manually.


### Establishing Mutual Trust Using a Script<a name="en-us_topic_0231761642_en-us_topic_0085434670_en-us_topic_0059782026_section12899163762318"></a>

1. Create the file for executing the mutual trust script, and add the IP addresses of all the hosts in the openGauss to the file.

   ```
   plat1:/opt/software/openGauss> vim hostfile
   192.168.0.1
   192.168.0.2
   192.168.0.3
   ```

2. Execute the script as the user who needs to establish mutual trust with the hosts.

3. Execute the following script to establish mutual trust:

   ```
   plat1:/opt/software/openGauss/script# gs_sshexkey -f /opt/software/hostfile
   ```

   The  **/opt/software/hostfile**  file contains a list of the hosts. The list provides the IP addresses of all the hosts among which mutual trust needs to be established.


### Establishing Mutual Trust Manually<a name="en-us_topic_0231761642_en-us_topic_0085434670_en-us_topic_0059782026_section63620881152125"></a>

If the passwords of user  **root**  on the hosts in the openGauss are different, the  **gs\_preinstall**  script cannot be used to establish mutual trust. In this case, manually establish mutual trust.

>![](C:/Users/lijun/Desktop/opengauss/docs/content/en/docs/Quickstart/public_sys-resources/icon-note.gif) **NOTE:** 
>The following files are generated during establishment of mutual trust:  **authorized\_keys**,  **id\_rsa**,  **id\_rsa.pub**, and  **known\_hosts**. Do not delete or corrupt the files.

The procedure of manually establishing mutual trust is as follows \(**plat1**,  **plat2**, and  **plat3**  are host names\):

1. Generate a licensed file for user  **root**  on any host \(referred to as the local host\). Host  **plat1**  is used as an example.

   a. Generate a key.

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

   b. Generate the licensed file.

   ```
   cat .ssh/id_rsa.pub >> .ssh/authorized_keys
   ```

   The following is an example:

   ```
   plat1:~ # cat .ssh/id_rsa.pub >> .ssh/authorized_keys
   ```

2. Obtain the public keys of all the hosts among which mutual trust needs to be established, and write the public keys into the  **known\_hosts**  file on the local host. This step needs to be performed on the host where Step 1 is performed. You need to obtain the public keys of the  **plat1**,  **plat2**, and  **plat3**  hosts.

   a. Obtain the public key of host  **plat1**, and write the public key into the  **known\_hosts**  file on the local host.

   ```
   ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts
   ```

   The following is an example:

   ```
   plat1:~ # ssh-keyscan -t rsa plat1 >> ~/.ssh/known_hosts 
   # plat1 SSH-2.0-OpenSSH_5.1 
   ```

   b. Obtain the public key of host  **plat2**, and write the public key into the  **known\_hosts**  file on the local host.

   ```
   ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts
   ```

   The following is an example:

   ```
   plat1:~ # ssh-keyscan -t rsa plat2 >> ~/.ssh/known_hosts 
   # plat2 SSH-2.0-OpenSSH_5.1 
   ```

   c. Obtain the public key of host  **plat3**, and write the public key into the  **known\_hosts**  file on the local host.

   ```
   ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts
   ```

   The following is an example:

   ```
   plat1:~ # ssh-keyscan -t rsa plat3 >> ~/.ssh/known_hosts 
   # plat3 SSH-2.0-OpenSSH_5.1 
   ```

   >![](C:/Users/lijun/Desktop/opengauss/docs/content/en/docs/Quickstart/public_sys-resources/icon-note.gif) **NOTE:** 
   >
   >-   After being accepted, the public key of a remote host will be saved in the  **$HOME/.ssh/known\_hosts**  file on the local host. When connecting to the remote host next time, the system can recognize that the public key of the remote host has been saved on the local host and then skip alarms.
   >-   If the  **known\_hosts**  file is deleted from the local host, the mutual trust between the local and remote hosts remains valid, but alarms will be reported. To prevent such alarms, set the  **StrictHostKeyChecking**  parameter in the  **/etc/ssh/ssh\_config**  file to  **no**.


3. Send the  **known\_hosts**  file to all the other hosts except the local host. In this example, send the  **known\_hosts**  file on host  **plat1**  to hosts  **plat2**  and  **plat3**.

   a. Send the  **known\_hosts**  file to host  **plat2**. When  **Password:**  is displayed, enter the password for logging in to host  **plat2**.

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

   b. Send the  **known\_hosts**  file to host  **plat3**. When  **Password:**  is displayed, enter the password for logging in to host  **plat3**.

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

4. Run the  **ssh **_Host name_  command to check whether mutual trust has been successfully established. Then, enter  **exit**.

   ```
   plat1:~ # ssh plat2
   Last login: Sat Jun 20 14:01:07 2020
   plat2:~ # exit
   logout
   Connection to plat2 closed.
   plat1:~ # 
   ```

   >![](C:/Users/lijun/Desktop/opengauss/docs/content/en/docs/Quickstart/public_sys-resources/icon-note.gif) **NOTE:** 
   >If there are more than three hosts, the procedure of manually establishing mutual trust between the hosts is similar to the one in this section. Assume that the host names are  **plat1**,  **plat2**,  **plat3**, ... Firstly, generate a licensed file for user  **root**  on host  **plat1**  \(referred to as the local host\). Secondly, obtain the public keys of all the hosts \(**plat1**,  **plat2**,  **plat3**, ...\) between which mutual trust needs to be established, and write the public keys to the  **known\_hosts**  file on the local host. Thirdly, send the file from the local host to all the other hosts \(**plat2**,  **plat3**, ...\). Finally, verify that mutual trust has been successfully established.

