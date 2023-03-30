# Checking Time Consistency<a name="EN-US_TOPIC_0289897011"></a>

Database transaction consistency is guaranteed by a logical clock and is not affected by OS time. However, OS time inconsistency will lead to problems, such as abnormal backend O&M and monitoring functions. Therefore, you are advised to monthly check time consistency among nodes.

## Procedure<a name="en-us_topic_0283140539_en-us_topic_0237088808_en-us_topic_0059777703_s7110d1c3f93a4bdea6f206e6709de04f"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Create a configuration file for each openGauss node. The  **mpphosts**  file directory can be specified by users. The  **/tmp**  directory is recommended.

    ```
    vim /tmp/mpphosts
    ```

    Add the host name of each node.

    ```
    plat1
    plat2
    plat3
    ```

3.  Save the configuration file.

    ```
    :wq!
    ```

4.  Run the following command and write the time on each node into the  **/tmp/sys\_ctl-os1.log**  file:

    ```
    for ihost in `cat /tmp/mpphosts`; do ssh -n -q $ihost "hostname;date"; done > /tmp/sys_ctl-os1.log
    ```

5.  Check time consistency between the nodes based on the command output. The time difference should not exceed 30s.

    ```
    cat /tmp/sys_ctl-os1.log
    plat1
    Thu Feb  9 16:46:38 CST 2017
    plat2
    Thu Feb  9 16:46:49 CST 2017
    plat3
    Thu Feb  9 16:46:14 CST 2017
    ```


