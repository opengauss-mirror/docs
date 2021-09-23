# Examples<a name="EN-US_TOPIC_0000001106711536"></a>

To help users understand the deployment process, assume that the current database node information is as follows:

```
IP: 10.90.110.130
PORT: 8000
type: single
```

The detector server information is as follows:

```
IP: 10.90.110.131
listen_host = 0.0.0.0
listen_port = 8080
```

The deployment startup process is as follows.

## Modifying the Configuration File<a name="section38685420252"></a>

Modify the  **a-detection.conf**  configuration file. The following two sessions are involved:

```
[database]
storage_duration = 12H  # Data storage duration. The default value is 12 hours.
database_dir = ./data  # Data storage directory

[security]
tls = False
ca = ./certificate/ca/ca.crt
server_cert = ./certificate/server/server.crt
server_key = ./certificate/server/server.key
agent_cert = ./certificate/agent/agent.crt
agent_key = ./certificate/agent/agent.key

[server]
host = 10.90.110.131
listen_host = 0.0.0.0
listen_port = 8080
white_host =  10.90.110.130
white_port = 8000
[agent]
source_timer_interval = 10S
sink_timer_interval = 10S
channel_capacity = 1000
db_host =  10.90.110.130
db_port = 8080
db_type = single

[forecast]
forecast_alg = auto_arima

[log]
log_dir = ./log
```

## Starting and Stopping Services<a name="section351094714355"></a>

Start the local agent service.

```
python main.py start --role agent
```

Stop the local agent service.

```
python main.py stop --role agent
```

Start the local collector service.

```
python main.py start --role collector 
```

Stop the local collector service.

```
python main.py stop --role collector 
```

Start the local monitor service.

```
python main.py start --role monitor 
```

Stop the local monitor service.

```
python main.py stop --role monitor 
```

