# Checking the OS Health Status<a name="EN-US_TOPIC_0305491441"></a>

Use the  **gs\_checkos**  tool to check the OS status.

## Prerequisites<a name="section16375145913200"></a>

-   The hardware and network are working properly.
-   The trust relationship of user  **root**  among the hosts is normal.
-   Only user  **root**  is authorized to run the  **gs\_checkos**  command.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >This tool cannot be independently invoked. For security purposes, it is automatically deleted after the preinstallation is complete.


## Procedure<a name="section1990781914214"></a>

1.  Log in to a server as user  **root**.
2.  Run the following command to check OS parameters of the server:

    ```
    gs_checkos -i A
    ```

    Check the OS parameters to ensure that the database has passed the pre-installation check and can efficiently operate after it is installed. For details about the check items, see "**Server Tools**  \>  **gs\_checkos**  \>  **Table 1 OS check items**" in the  _Tool Reference_.


