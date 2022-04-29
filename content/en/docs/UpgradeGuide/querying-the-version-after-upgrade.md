# Querying the Version After Upgrade<a name="EN-US_TOPIC_0305491429"></a>

This section describes how to query the version.

## Procedure<a name="section117172026191017"></a>

1.  Log in to the node as the database user \(for example,  **omm**\) and run the  **source**  command to set the environment variables.
2.  Run the following command to check the version information of all nodes:

    ```
    gs_ssh -c "gsql -V"
    ```


