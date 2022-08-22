# AI\_MANAGER<a name="ZH-CN_TOPIC_0000001153209055"></a>

ai\_manager是AI特性部署工具，旨在为AI特性提供自动化、高效便捷的部署及卸载方式，可通过指定模块名称、操作类型及参数文件进行相应AI特性的自动化部署和卸载，实现了版本管理、操作日志记录及日志管理、安装信息记录等功能，支持特性级横向扩展，该工具目前仅支持ai\_server的安装及卸载。

## 使用准备<a name="section1364662210548"></a>

-   项目部署路径为/dbs/AI-tools，需保证该路径存在并有读写执行权限，安装/卸载操作中会清理该路径下的内容，不要将其它文件保存在该路径下。
-   需要安装Python3环境及特性所需Python库,依赖库请参考包内的requirements.txt文件。
-   如开启https，需准备相应的根证书，秘钥文件及密码。
-   agent节点已启动openGauss数据库。
-   安装agent节点须使用集群用户操作。
-   如果agent节点集群用户的\~/.bashrc文件中没有正确的PGHOST配置，需要将PGHOST配置到/dbs/AI-tools/ai\_env文件中。

## 示例<a name="section17609145765414"></a>

安装命令示例：

```
python3 ai_manager.py --module anomaly_detection --action install --param_file opengauss.json
```

卸载命令示例：

```
python3 ai_manager.py --module anomaly_detection --action uninstall --param_file opengauss.json
```

参数文件示例：

```
{
  "scene": "opengauss",                                       # 场景，openGauss安装server及agent,huaweiyun仅安装server
  "module": "anomaly_detection",                              # 模块（特性）名称，目前仅支持anomaly_detection
  "action": "install",                                        # 操作类型，支持install及uninstall
  "ca_info": {
    "ca_cert_path": "/home/Ruby/CA_AI/ca.crt",                # 根证书路径
    "ca_key_path": "/home/Ruby/CA_AI/ca.crt.key",             # 根证书秘钥路径
    "ca_password": "GHJAyusa241~"                             # 根证书密码
  },
  "agent_nodes": [
    {
      "node_ip": "10.000.00.000",                             # agent节点IP
      "username": "Ruby",                                     # agent节点用户
      "password": "password"                                  # agent节点密码
    }
  ],
  "config_info": {
    "server": {
      "host": "10.000.00.000",                                # server部署节点IP（执行节点）
      "listen_host": "0.0.0.0",                               # server 监听IP
      "listen_port": "20060",                                 # server 监听端口
      "pull_kafka": "False"                                   # 是否拉取kafka数据，暂不支持拉取。
    },
    "database": {
      "name": "sqlite",                                       # 数据存储方式，支持sqlite、mongodb、influxdb
      "host": "127.0.0.1",                                    # 数据库ip
      "port": "2937",                                         # 数据库端口
      "user": "Ruby",                                         # 数据库用户
      "size": "175000000",                                    # mongodb 最大存储容量
      "max_rows": "1000000"                                   # mongodb 最大存储条数
    },
    "agent": {
      "cluster_name": "my_cluster",                           # 采集数据库的名称
      "collection_type": "os",                                # 采集类型，支持os、database、all
      "collection_item": [["dn", "10.000.00.000", "33700"]],  # agent节点采集数据类型（dn/cn），采集节点IP，端口
      "channel_capacity": "1000",                             # 队列容量
      "source_timer_interval": "5S",                          # 采集间隔
      "sink_timer_interval": "5S"                             # 发送间隔
    },
    "security": {
      "tls": "True"                                           # 是否开启https
    }
  }
}
```

