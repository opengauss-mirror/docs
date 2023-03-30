# transfer.py<a name="EN-US_TOPIC_0000001151422084"></a>

## Function<a name="section51291439191115"></a>

In non-single-node mode, you can use the  **transfer.py**  tool to send the dictionary file used for full-text search and the files required by the PostGIS plug-in to other nodes.

## Prerequisites<a name="section151841548181118"></a>

-   Before running this tool, ensure that the following files exist in the  **$GAUSSHOME**  directory. Otherwise, an error will be reported. The error code is 52200:
    -   script/gspylib/common/DbClusterInfo.py
    -   script/gspylib/common/Common.py
    -   script/gspylib/common/GaussLog.py
    -   script/gspylib/threads/SshTool.py

-   The environment variable  _$GPHOME_  is set correctly.

## Syntax<a name="section1289211311124"></a>

-   Send the sourcefile to the  **destinationpath**  path of all nodes.

    ```
    transfer.py 1 sourcefile destinationpath
    ```

-   Send the sourcefile to the same path on the standby node of  **pgxc\_node\_name**.

    ```
    transfer.py 2 sourcefile pgxc_node_name
    ```

-   Display the help information.

    ```
    transfer.py -? | --help
    ```


## Parameter Description<a name="section434051117128"></a>

-   Options are as follows:
    -   **1**: sends the current file to the destination file paths of all nodes.
    -   **2**: sends the current file to the same path on the standby node of the destination node.

-   sourcefile

    Path of the source file to be sent.

-   destinationpath

    Destination file path.

-   pgxc\_node\_name

    Destination node name.


