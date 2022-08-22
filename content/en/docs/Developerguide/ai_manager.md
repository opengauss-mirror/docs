# AI\_MANAGER<a name="EN-US_TOPIC_0000001153209055"></a>

AI\_MANAGER is an AI feature deployment tool. It aims to provide automatic, efficient, and convenient deployment and uninstallation of AI features. You can specify the module name, operation type, and parameter file to automatically deploy and uninstall AI features, implementing version management, operation logging, log management, installation information recording. In addition, it supports feature-level horizontal expansion. Currently, this tool supports only the installation and uninstallation of AI\_SERVER.

## Preparations<a name="section1364662210548"></a>

-   The project deployment path is  **/dbs/AI-tools**. Ensure that the path exists and you have the read, write, and execute permissions on the path. The content in the path will be cleared during installation or uninstallation. Do not save other files in this path.
-   You need to install the Python3 environment and the Python library required by the feature. For details about the dependent library, see the  **requirements.txt**  file in the package.
-   If HTTPS is enabled, you need to prepare the corresponding root certificate, key file, and password.
-   The GaussDB Kernel database has been started on the agent node.
-   You need to install the agent node as a cluster user.
-   If the  **-/.bashrc**  file of the cluster user on the agent node does not contain the correct  _PGHOST_  configuration, configure the  _PGHOST_  configuration in the  **/dbs/AI-tools/ai\_env**  file.

## Examples<a name="section17609145765414"></a>

An example of the installation command is as follows:

```
python3 ai_manager.py --module anomaly_detection --action install --param_file opengauss.json
```

An example of the uninstallation command is as follows:

```
python3 ai_manager.py --module anomaly_detection --action uninstall --param_file opengauss.json
```

The following is an example of the parameter file:

```
{
  "scene": "opengauss",                                       # Scenario. Both the server and agent modules are installed for openGauss, and only the server module is installed for HUAWEI CLOUD.
  "module": "anomaly_detection",                              # Module (feature) name. Currently, only anomaly_detection is supported.
  "action": "install",                                        # Operation type. The value can be install or uninstall.
  "ca_info": {
    "ca_cert_path": "/home/Ruby/CA_AI/ca.crt",                # Path of the root certificate
    "ca_key_path": "/home/Ruby/CA_AI/ca.crt.key",             # Path of the root certificate key
    "ca_password": "GHJAyusa241~"                             # Root certificate password
  },
  "agent_nodes": [
    {
      "node_ip": "10.000.00.000",                             # IP address of the agent node
      "username": "Ruby",                                     # User of the agent node
      "password": "password"                                  # Password for logging in to the agent node
    }
  ],
  "config_info": {
    "server": {
      "host": "10.000.00.000",                                # IP address of the node where server is deployed (execution node)
      "listen_host": "0.0.0.0",                               # Server listening IP address
      "listen_port": "20060",                                 # Server listening port number
      "pull_kafka": "False"                                   # Specifies whether to pull Kafka data. Currently, data cannot be pulled.
    },
    "database": {
       "name": "sqlite",                                       # Data storage mode. sqlite, mongodb, and influxdb are supported.
      "host": "127.0.0.1",                                    # Database IP address
      "port": "2937",                                         # Database port number
      "user": "Ruby",                                         # Database user
      "size": "175000000",                                    # Maximum storage capacity in mongodb mode
      "max_rows": "1000000"                                   # Maximum number of stored records in mongodb mode
    },
    "agent": {
      "cluster_name": "my_cluster",                           # Name of the collection database
      "collection_type": "os",                                # Collection type. The value can be os, database, or all.
      "collection_item": [["dn", "10.000.00.000", "33700"]],  # Type of data collected by the agent node (DN/CN), IP address of the collection node, and port number
      "channel_capacity": "1000",                             # Queue capacity
      "source_timer_interval": "5S",                          # Collection Interval
      "sink_timer_interval": "5S"                             # Sending interval
    },
    "security": {
      "tls": "True"                                           # Specifies whether to enable HTTPS.
    }
  }
}
```

