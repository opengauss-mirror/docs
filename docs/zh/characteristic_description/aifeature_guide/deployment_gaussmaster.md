# 部署GaussMaster<a name="ZH-CN_TOPIC_0000002258589386"></a>

## 配置文件<a id="configfile"></a>

用户可通过如下命令进行配置目录的初始化：

```
python3 startup.py service setup -c confpath
```

执行完该命令后 ，会在confpath目录下生成2个配置文件，分别为：

- gaussmaster.conf：

    此文件中定义了GaussMaster服务需要用到的向量数据库、DBMind、log、WEB-SERVICE等信息。

- model\_config.yaml：

    此文件定义了GaussMaster服务需要使用的大语言模型的信息。

gaussmaster.conf的详细信息说明如下：

```
# VECTOR部分用于配置向量数据库的连接信息
[VECTOR]
host =
port =
vector_dbname = # 本地知识库的数据库名
user =
metadatabase = # 用于存放GaussMaster生成的中间结果，例如问答记录、诊断报告等
l2_distance_threshold = 0.8 # 用于智能运维故障诊断模式中的故障树检索，需要根据向量模型的实际情况进行调整。
ssl = true # Using secure protocol by default, users must provide a certificate path.
ssl_certfile = (null) # The certificate file for ssl connections.
ssl_keyfile = (null) # Certificate private key file.
ssl_ca_file = (null)  # CA certificate to validate requests.

# DBMIND部分用于配置DBMind的连接信息
[DBMIND]
api_prefix = http(s)://***/v1/api/ # base URL ends with /v1/api/
ssl_certfile = (null) # The certificate file for ssl connections.
ssl_keyfile = (null) # Certificate private key file.
ssl_ca_file = (null)  # CA certificate to validate requests.

# WEB-SERVICE用于配置GaussMaster后台服务的地址，前端页面可通过该地址进行前后台绑定
[WEB-SERVICE]
host =   # Which host to bind for web service. '0.0.0.0' means to bind all.
port =   # Port to listen for web service.
ssl_certfile = (null) # The certificate file for ssl connections.
ssl_keyfile = (null) # Certificate private key file.
ssl_ca_file = (null)  # CA certificate to validate requests.

# LOG部分用于配置日志信息
[LOG]
maxbytes = 10485760 # Default is 10Mb. Maximum size of a single log file. If maxbytes is zero, the file grows indefinitely.
backupcount = 1 # Number of backups of log files.
level = DEBUG  # Options: DEBUG, INFO, WARNING, ERROR.
log_directory = logs  # Directory to log.

# TIMEZONE部分用于GaussMaster服务的默认时区
[TIMEZONE]
tz = UTC+8 # only supports UTC, example: UTC-8, UTC+8, UTC-8:35

# SAFETY部分用于配置是否开启敏感问题检查
[SAFETY]
safety_check = false  # Whether to check the question involving unsafe inquiry
```

当前版本GaussMaster只支持在线模型的调用，model\_config.yaml的详细信息说明如下：

```
# 默认使用的大模型，需要将online_llm中对应模型的enable按钮改为True
model_name: pangu_sigma_unify_plugin_38b

# 向量模型的API地址
embedding_model:
  enable: True
  model_name: bge-large-finetune
  api_type: bge-large
  api_url: http://*.*.*.*:*/get_embedding_result
# reranker模型的API地址
reranker_model:
  enable: True
  model_name: bge-reranker-finetune
  api_type: bge-reranker
  api_url: http://*.*.*.*:*/get_reranker_result

# 大语言模型的API地址，要启用什么大模型，需要将对应的enable改为True，不使用的改为False。
online_llm:
  pangu_sigma_unify_plugin_38b:
    enable: True
    api_type: Pangu
    api_url: http://*.*.*.*:*/chat/completions
    recommended_config:
      temperature: 0.7
      top_p: 1.0
  pangu_cloud_sigma_unify_plugin_38b:
    enable: False
    api_type: PanguCloud
    api_url: http://*.*.*.*:*/chat/completions
    recommended_config:
      temperature: 0.7
      top_p: 1.0
  Baichuan2-13B-Chat:
    enable: False
    api_type: Baichuan
    api_url: http://*.*.*.*:*/get_qa_baichuan
    recommended_config:
      temperature: 0.7
      top_p: 1.0
  chatglm3-6b:
    enable: False
    api_type: Chatglm
    api_url: http://*.*.*.*:*/get_qa_chatglm
    recommended_config:
      temperature: 0.7
      top_p: 1.0
  Llama3-8B-Chinese-Chat:
    enable: False
    api_type: Llama3
    api_url: http://*.*.*.*:*/get_llm_result_llama3
    recommended_config:
      temperature: 0.7
      top_p: 1.0
```

## 启停服务<a name="ZH-CN_TOPIC_0000002258486284"></a>

1. 创建配置文件，执行下述命令：

    ```
    python3 startup.py service setup -c confpath
    ```

2. 执行完上述命令后，会在configpath目录下生成gaussmaster.conf和model\_config.yaml，请参照[配置文件](#configfile)使用文本编辑器对这两个文件做相关修改。
3. （必须）关闭HISTORY记录。

    ```
    # 修改根目录下/etc/profile文件
    vim /etc/profile
    # 设置HISTSIZE值为0
    HISTSIZE=0
    # 保存/etc/profile
    :wq
    # 设置/etc/profile生效
    source /etc/profile
    ```

4. 待用户手动修改完上述配置文件后，需要执行下述命令进行配置项的初始化。

    ```
    echo '{"VECTOR_password": "********","WEB-SERVICE_ssl_keyfile_password": "********", "DBMIND_ssl_keyfile_password": "********"}' | python3 startup.py service setup -c confpath --initialize --initialize_vector_db --initialize_meta_db
    ```

    上述初始化命令会执行如下3步操作：

    1. 创建两个密钥组件：密钥组件A存储在confpath目录下的dynamic\_config.db中，密钥组件B存储在confpath目录下的encryption\_part\_b.bin中。
    2. 初始化运维知识库和问答知识库。
    3. 初始化元数据库。

    >[!NOTE]说明
    >
    >1. gaussmaster.conf配置文件中VECTOR模块用于配置GaussMaster服务需要用到的数据库信息，其中"VECTOR\_password"为该模块指定"VECTOR\_user"的密码，"VECTOR\_vector\_dbname"为知识库的名称，"VECTOR\_metadatabase"为元数据库的名称。
    >2. "--initialize\_vector\_db"用于初始化运维知识库和用于智能问答的问答知识库，如果不需要对运维知识库和问答知识库进行初始化，可以不附加该参数。
    >3. "--initialize\_meta\_db"用于初始化GaussMaster服务的元数据库，用于存储中间业务数据，如果不需要初始化元数据库，可以不附件该参数。
    >4. 如果知识库和元数据库都不需要初始化，"--initialize\_vector\_db"和"--initialize\_meta\_db"参数都无需附加到初始化命令后，如下：
>
    > ```
    > echo '{"VECTOR_password": "********","WEB-SERVICE_ssl_keyfile_password": "********","DBMIND_ssl_keyfile_password": "********"}' | python3 startup.py service setup -c confpath --initialize
    >    ```
>
    >5. 在执行初始化命令之前，需要根据gaussmaster.conf配置文件中VECTOR章节定义的数据库名vector\_dbname和metadatabase并创建对应的库，否则会报错。
    >6. "WEB-SERVICE\_ssl\_keyfile\_password"为GaussMaster服务的私钥的密码。
    >7. "DBMIND\_ssl\_keyfile\_password"为连接DBMIND服务时使用的私钥的密码。
    >8. "WEB-SERVICE\_ssl\_keyfile\_password"和"DBMIND\_ssl\_keyfile\_password"密码长度需要至少8个字符，且必须包含如下至少两种特殊字符的组合：一个大写字母、一个小写字母、一个数字、一个特殊字符（\[\~\`!@\#$%^&\*\(\)-\_+\\\\|\{\};:,<.\>/?\]）。不满足复杂度要求会导致初始化失败。

5. 执行启动命令

    ```
    python3 startup.py service start -c confpath
    ```

    上述命令执行后，会在confpath目录下生成gaussmaster.pid文件，用户记录GaussMaster服务的进程ID。

    >[!NOTE]说明
    >
    >1. 在GaussMaster服务初始化或启动阶段，如果向量模型服务或Reranker模型服务如果不可用，会有错误提示，GaussMaster服务依旧会启动，不涉及使用上述模型服务的接口可以正常使用。
    >2. 在GaussMaster服务启动阶段，如果DBMind服务不可用，会有错误提示，GaussMaster服务依旧会启动，智能问答功能可正常使用，智能运维功能将受到影响。
    >3. 在GaussMaster服务启动阶段，如果大语言模型服务不可用，会有错误提示，GaussMaster服务依旧会启动，需要使用到大模型服务的接口将受到影响。

6. GaussMaster服务启动之后，执行停止命令停止服务

    ```
    python3 startup.py service stop -c confpath
    ```

GaussMaster服务启动后，其日志会记录在"confpath/logs/gaussmaster.log中"，用户可以查看详细日志记录。

>[!NOTE]说明
>
>1. 在GaussMaster服务启动之后不能执行初始化操作，否则会有错误提示。
>2. GaussMaster服务启动之后，不要删除配置文件目录，否则会导致stop命令失效，甚至服务进程异常。
