# gs\_sshexkey<a name="ZH-CN_TOPIC_0249632281"></a>

## Background<a name="en-us_topic_0237152423_en-us_topic_0059778349_section15111432124318"></a>

During the openGauss installation, you need to perform operations such as running commands and transferring files between nodes in openGauss. Establish mutual trust among the hosts before the installation. **gs\_sshexkey**, provided by openGauss, is used to establish such relationships.

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
> The mutual trust among root users may incur security risks. You are advised to delete the mutual trust among root users once operations are complete.
>
>For security purposes, this tool will be automatically deleted after the preinstallation is complete in enterprise-edition installation mode.
>After the mutual trust relationship is established using **gs\_sshexkey**, the **gaussdb\_tmp** directory is generated in the user directory. This directory is used to store the ssh-agent process file **gauss\_socket\_tmp** and the passphrase file for encrypting the private key (a 32-bit passphrase is randomly generated and encrypted using the encrypt tool). At the same time, two ssh-agent processes are started. These processes are used to mount the private key and automatically enter the corresponding passphrase. After processes are started, the environment variables of the **source** user are required for the mutual trust function to take effect.

## Prerequisites<a name="en-us_topic_0237152423_en-us_topic_0059778349_s3e447292529e46aabd04269511e410b2"></a>

- The SSH service has been enabled.

- You have verified that SSH ports will not be disabled by firewalls.

- Each host name and IP address have been correctly configured in the XML file.

- Communication among all the hosts is normal.

- If the mutual trust is to be established for common users, the same user needs to be created and password set on each host.

- Before running commands, check whether all cluster nodes support the **expect** command. If not, download the expect tool. The expect version 5.45 is recommended.

-   If the SELinux service is installed and has been started on each host, ensure that the security context of the **/root **directory is set to the default value **system\_u:object\_r:home\_root\_t:s0** and that of the **/home** directory is set to the default value **system\_u:object\_r:admin\_home\_t:s0**, or disable the SELinux service.

    To check whether the SELinux OS has been installed and started, run the **getenforce** command. If the command output is **Enforcing**, the SELinux OS has been installed and started. 

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


## Syntax<a name="en-us_topic_0237152423_en-us_topic_0059778349_sa7fde5cce9124d06a6c7caa6abc0070e"></a>

-   Establish mutual trust.

    ```
    gs_sshexkey -f HOSTFILE  [...] [--skip-hostname-set] [-l LOGFILE]
    ```

-   Display help information.

    ```
    gs_sshexkey -? | --help
    ```

-   Display version information.

    ```
    gs_sshexkey -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152423_en-us_topic_0059778349_s36a1b85ea7c243e69a825f543215ce01"></a>

-   -f

    Lists the IP addresses of all the hosts among which mutual trust relationships need to be established.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >You need to ensure that only IP addresses (one in each row) are configured in the hostfile file.

-   -l

    Specifies the path for saving log files.

    Value range: any existing absolute path that can be accessed

-   --skip-hostname-set

    Specifies whether to write the mapping relationship between the host name and IP address of the **-f** parameter file to the **/etc/hosts** file. By default, the relationship is written to the file. If this parameter is specified, the relationship is not written to the file. Common users do not have the permission to edit the **/etc/hosts** file. Therefore, no mapping is generated for common users regardless of whether this parameter is specified.

-   --no-deduplicate

    Determines whether to delete the host information that has been configured in the **/etc/hosts** file when the **/etc/hosts** file is modified during mutual trust configuration. By default, duplicate host information is deleted.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


## Examples<a name="en-us_topic_0237152423_en-us_topic_0059778349_s0925c040c7eb4b0d9fb783ac5c0a8b2b"></a>

The following examples describe how to establish mutual trust relationships for user **root**. Passwords can be entered only in interactive mode.

- In interactive mode, if the user passwords are the same, run the following commands to establish mutual trust:

  ```
  gs_sshexkey -f /opt/software/hostfile
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

  
