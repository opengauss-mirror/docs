# Setting Remote Login of User root<a name="EN-US_TOPIC_0249784566"></a>

During the openGauss installation, the user  **root**  is required for remote login. This section describes how to set the user  **root**  for remote login.

1.  Modify the  **PermitRootLogin**  configuration to enable remote login of user  **root**.
    1.  Open the  **sshd\_config**  file.

        ```
        vim /etc/ssh/sshd_config
        ```

    2.  Modify permissions of user  **root**  using either of the following methods:
        -   Comment out  **PermitRootLogin no**.

            ```
            #PermitRootLogin no
            ```

        -   Set the value of  **PermitRootLogin**  to  **yes**.

            ```
            PermitRootLogin yes
            ```

    3.  Run the  **:wq**  command to save the modification and exit.

2.  Modify the  **Banner**  configuration to delete the welcome information displayed when you connect to the system. The welcome information affects the return result of remote operations during the installation.
    1.  Open the  **sshd\_config**  file.

        ```
        vim /etc/ssh/sshd_config
        ```

    2.  Comment out the line where  **Banner**  is located.

        ```
        #Banner XXXX
        ```

    3.  Run the  **:wq**  command to save the modification and exit.

3.  Run the following command to validate the settings:

    ```
    service sshd restart
    ```

    >![](public_sys-resources/icon-caution.gif) **CAUTION:**   
    >If  **Redirecting to /bin/systemctl restart sshd.service**  is displayed, run the  **/bin/systemctl restart sshd.service**  command.  

4.  Re-log in to the system as user  **root**.

    ```
    ssh xxx.xxx.xxx.xxx
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >_xxx.xxx.xxx.xxx_  indicates the IP address of the openGauss installation environment.  


