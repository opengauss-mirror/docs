# Disabling the SCRLock Feature<a name="EN-US_TOPIC_0000001685016672"></a>

To disable the SCRLock feature, modify the configuration file and restart the database for the configuration to take effect.

## Procedure<a name="section172821619113914"></a>

1.  Modify the  **postgresql.conf**  file in the root directory of the database.
    1.  Open the  **postgresql.conf**  file.

        ```
        vim postgresql.conf
        ```

    2.  Press  **i**  to enter the insert mode. Change the value of  **ss\_enable\_scrlock**  to  **off**  to disable the SCRLock feature.

        ```
        ss_enable_scrlock = off
        ```

    3.  Press  **Esc**, type  **:wq!**, and press  **Enter**  to save the file and exit.

2.  Stop openGauss.

    ```
    cm_ctl stop
    ```

3.  \(Optional\) To uninstall the SCRLock feature, perform this step. Delete the SCRLock dynamic library file and clear the environment variable.

    ```
    rm -f /home/omm/lib/libscrlock.so
    unset OCK_SCRLOCK_LIB_PATH
    ```

    In the preceding commands,  _/home/omm/lib/_  indicates the absolute path of the directory where  **libscrlock.so**  is located.

4.  Start openGauss.

    ```
    cm_ctl start
    ```

