# Checking the Status of the Database for Upgrade<a name="EN-US_TOPIC_0305491435"></a>

This section describes how to query the database status.

## Procedure<a name="section117172026191017"></a>

1.  Log in to the node as a database user \(for example,  **omm**\).
2.  Run the following command to check the database status:

    ```
    gs_om -t status
    ```

    If the value of  **cluster\_state**  is  **Normal**  in the command output, the database is normal.


