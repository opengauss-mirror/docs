# gs\_ssh<a name="EN-US_TOPIC_0249632288"></a>

## Background<a name="en-us_topic_0237152344_en-us_topic_0059777951_section12241205518358"></a>

**gs\_ssh**, provided by openGauss, helps users run the same command on multiple nodes in openGauss.

## Precautions

- **gs_ssh** can only run the command which the OS user **omm** has permission
- The command to be run will not affect the current session where **gs_ssh** is executed. For example, the command such as **cd** or **source** will not affect the current session as it will only be run in the environment within the process of **gs_ssh** itself

## Prerequisites<a name="en-us_topic_0237152344_en-us_topic_0059777951_sa146d07733084d8292706efa87117d57"></a>

-   The trust relationship among the hosts is normal.
-   openGauss has been correctly installed and deployed.
-   The command to be run can be found by the  **which **command, and the current user has the required execution permission.
-   Log in to the OS as the OS user  **omm**  to run the  **gs\_ssh**  command.

## Syntax<a name="en-us_topic_0237152344_en-us_topic_0059777951_s1b40498eb43141dcb07e36a6a51325f1"></a>

-   Run commands synchronously.

    ```
    gs_ssh -c cmd
    ```

-   Display help information.

    ```
    gs_ssh -? | --help
    ```

-   Display version information.

    ```
    gs_ssh -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152344_en-us_topic_0059777951_s1c5e9dfd204245b4a2f0191f9db1116f"></a>

-   -c

    Specifies the command name of Linux shell on the hosts of openGauss.

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.


## Example<a name="en-us_topic_0237152344_en-us_topic_0059777951_s1cb93e63c1a247459e187aba833e8133"></a>

Run the same command on each host of openGauss. Take the  **hostname**  command as an example.

```
gs_ssh -c "hostname"
Successfully execute command on all nodes.
Output:
[SUCCESS] plat1:
plat1
[SUCCESS] plat2:
plat2
[SUCCESS] plat3:
plat3
[SUCCESS] plat4:
plat4
```

