# Exception Handling<a name="EN-US_TOPIC_0242215056"></a>

If you use the  **gs\_checkos**  tool to check the OS and the command output shows  **Abnormal**, run the following command to view detailed error information:

```
gs_checkos -i A --detail
```

The  **Abnormal**  state cannot be ignored because the OS in this state affects cluster installation. The  **Warning**  state does not affect cluster installation and thereby can be ignored.

-   If the check result for OS version status \(**A1**\) is  **Abnormal**, replace OSs out of the mixed programming scope with those within the scope.
-   If the check result for kernel version status \(**A2**\) is  **Warning**, the platform kernel versions in the cluster are inconsistent.
-   If the check result for Unicode status \(**A3**\) is  **Abnormal**, set the same character set for all the hosts. You can add  **export LANG=**_unicode_  to the  **/etc/profile**  file.

    ```
    vim /etc/profile
    ```

-   If the check result for time zone status \(**A4**\) is  **Abnormal**, set the same time zone for all the hosts. You can copy the time zone file in the  **/usr/share/zoneinfo/**  directory as the  **/etc/localtime**  file.

    ```
    cp /usr/share/zoneinfo/$primary time zone/$secondary time zone /etc/localtime
    ```

-   If the check result for swap memory status \(**A5**\) is  **Abnormal**, a possible cause is that the swap memory is larger than the physical memory. You can troubleshoot this issue by reducing the swap memory or increasing the physical memory.
-   If the check result for system control parameter status \(**A6**\) is  **Abnormal**, troubleshoot this issue in either of the following two ways:
    -   Run the following command:

        ```
        gs_checkos -i B1
        ```

    -   Modify the  **/etc/sysctl.conf**  file based on the error message and run  **sysctl -p**  to make it take effect.

        ```
        vim /etc/sysctl.conf
        ```



-   If the check result for file system configuration status \(**A7**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B2
    ```

-   If the check result for disk configuration status \(**A8**\) is  **Abnormal**, set the disk mounting format to  **rw,noatime,inode64,allocsize=16m**.

    Run the  **man mount**  command to mount the XFS parameter:

    ```
    rw,noatime,inode64,allocsize=16m
    ```

    You can also set the XFS parameter in the  **/etc/fstab**  file. For example:

    ```
    /dev/data /data xfs rw,noatime,inode64,allocsize=16m 0 0
    ```

-   If the check result for pre-read block size status \(**A9**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B3
    ```

-   If the check result for I/O scheduling status \(**A10**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B4
    ```

-   If the check result for NIC configuration status \(**A11**\) is  **Warning**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B5
    ```

-   If the check result for time consistency status \(**A12**\) is  **Abnormal**, verify that the NTP service has been installed and started and has synchronized time from the NTP clock.
-   If the check result for firewall status \(**A13**\) is  **Abnormal**, disable the firewall. Run the following commands:
    -   SUSE:

        ```
        SuSEfirewall2 stop
        ```

    -   RedHat7:

        ```
        systemctl disable firewalld
        ```

    -   RedHat6:

        ```
        service iptables stop
        ```


-   If the check result for THP service status \(**A14**\) is  **Abnormal**, run the following command to troubleshoot this issue:

    ```
    gs_checkos -i B6
    ```


