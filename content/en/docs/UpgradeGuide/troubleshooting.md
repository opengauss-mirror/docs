# Troubleshooting<a name="EN-US_TOPIC_0305491443"></a>

If the upgrade fails, perform the following operations:

1.  Check whether the environment is normal.

    For example, check whether the disk is full, the network is faulty, the upgrade software package is correct, or the version number is correct. After the fault is rectified, perform the upgrade again.

2.  If no environment problem is found or the re-upgrade fails, contact technical support for fault locating.

    Run the following command to collect logs:

    ```
gs_collector --begin-time='20200724 00:00'  --end-time='20200725 00:00'
    ```
    
    You are advised to retain the environment if possible.


