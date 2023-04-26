# 使用示例<a name="ZH-CN_TOPIC_0303418332"></a>

X-Tuner支持三种模式，分别是获取参数诊断报告的recommend模式、训练强化学习模型的train模式、以及使用算法进行调优的tune模式。上述三种模式可以通过命令行参数来区别，通过配置文件来指定具体的细节。

## 配置数据库连接信息<a name="section1972314173514"></a>

三种模式连接数据库的配置项是相同的，有两种方式：一种是直接通过命令行输入详细的连接信息，另一种是通过JSON格式的配置文件输入，下面分别对两种指定数据库连接信息的方法进行说明。

1.  通过命令行指定：

    分别传递 --db-name --db-user --port --host --host-user 参数，可选 --host-ssh-port 参数，例如：

    ```
    gs_dbmind component xtuner recommend --db-name postgres --db-user omm --port 5678 --host 192.168.1.100 --host-user omm
    ```

2.  通过JSON格式的连接信息配置文件指定：

    JSON配置文件的示例如下，并假设文件名为 connection.json：

    ```
    {
      "db_name": "postgres",  # 数据库名
      "db_user": "dba",       # 登录到数据库上的用户名
      "host": "127.0.0.1",    # 数据库宿主机的IP地址
      "host_user": "dba",     # 登录到数据库宿主机的用户名
      "port": 5432,           # 数据库的侦听端口号
      "ssh_port": 22          # 数据库宿主机的SSH侦听端口号
    }
    ```

    则可通过 -f connection.json 传递。


>![](public_sys-resources/icon-note.png) **说明：** 
>为了防止密码泄露，配置文件和命令行参数中默认都不包含密码信息，用户在输入上述连接信息后，程序会采用交互式的方式要求用户输数据库密码以及操作系统登录用户的密码。

## recommend模式使用示例<a name="section17370104016614"></a>

对recommend模式生效的配置项为scenario，若为auto，则自动检测workload类型。

执行下述命令，获取诊断结果：

```
gs_dbmind component xtuner recommend -f connection.json
```

则可以生成诊断报告如下：

**图 1**  recommend模式生成的报告示意图<a name="fig49748416171"></a>  
![](figures/recommend模式生成的报告示意图.png "recommend模式生成的报告示意图")

在上述报告中，推荐了该环境上的数据库参数配置，并进行了风险提示。报告同时生成了当前workload的特征信息，其中有几个特征是比较有参考意义的：

-   temp\_file\_size：产生的临时文件数量，如果该结果大于0，则表明系统使用了临时文件。使用过多的临时文件会导致性能不佳，如果可能的话，需要提高work\_mem参数的配置。
-   cache\_hit\_rate：shared\_buffer的缓存命中率，表明当前workload使用缓存的效率。
-   read\_write\_ratio：数据库作业的读写比例。
-   search\_modify\_ratio：数据库作业的查询与修改数据的比例。
-   ap\_index：表明当前workload的AP指数，取值范围是0到10，该数值越大，表明越偏向于数据分析与检索。
-   workload\_type：根据数据库统计信息，推测当前负载类型，分为AP、TP以及HTAP三种类型。
-   checkpoint\_avg\_sync\_time：数据库在checkpoint时，平均每次同步刷新数据到磁盘的时长，单位是毫秒。
-   load\_average：平均**每个CPU核心**在1分钟、5分钟以及15分钟内的负载。一般地，该数值在1左右表明当前硬件比较匹配workload、在3左右表明运行当前作业压力比较大，大于5则表示当前硬件环境运行该workload压力过大（此时一般建议减少负载或升级硬件）。

>![](public_sys-resources/icon-note.png) **说明：** 
>
>- 由于某些系统表会一直记录统计信息，这可能会对负载特征识别造成干扰，因此建议最好先清空某些系统表的统计信息，运行一段时间的workload后再使用recommend模式进行诊断，以便获得更准确的结果。清除统计信息的方法为：  
>
>  ```
>  select pg_stat_reset_shared('bgwriter');
>  select pg_stat_reset();
>  ```
>
>- recommend模式会读取数据库中的pg\_stat\_database以及pg\_stat\_bgwriter等系统表中的信息，需要登录到数据库上的用户具有足够的权限（建议为**管理员权限**，可通过alter user username sysadmin；授予username相应的权限）。  



## train 模式使用示例<a name="section15888321578"></a>

该模式是用来训练深度强化学习模型的，与该模式有关的配置项为：

-   rl\_algorithm：用于训练强化学习模型的算法，当前支持设置为ddpg.
-   rl\_model\_path：训练后生成的强化学习模型保存路径。
-   rl\_steps：训练过程的最大迭代步数。
-   max\_episode\_steps：每个回合的最大步数。
-   scenario：明确指定的workload类型，如果为auto则为自动判断。在不同模式下，推荐的调优参数列表也不一样。
-   tuning\_list：**用户指定需要调哪些参数，如果不指定，则根据workload类型自动推荐应该调的参数列表。**如需指定，则tuning\_list表示调优列表文件的路径。一个调优列表配置文件的文件内容示例如下：

    ```
    {
      "work_mem": {
        "default": 65536,
        "min": 65536,
        "max": 655360,
        "type": "int",
        "restart": false
      },
      "shared_buffers": {
        "default": 32000,
        "min": 16000,
        "max": 64000,
        "type": "int",
        "restart": true
      },
      "random_page_cost": {
        "default": 4.0,
        "min": 1.0,
        "max": 4.0,
        "type": "float",
        "restart": false
      },
      "enable_nestloop": {
        "default": true,
        "type": "bool",
        "restart": false
      }
    }
    ```


待上述配置项配置完成后，可以通过下述命令启动训练：

```
gs_dbmind component xtuner train -f connection.json
```

训练完成后，会在配置项rl\_model\_path指定的目录中生成模型文件。

## tune模式使用示例<a name="section1487391316816"></a>

tune模式支持多种算法，包括基于强化学习（Reinforcement Learning, RL）的DDPG算法、基于全局搜索算法（Global OPtimization algorithm, GOP）算法的贝叶斯优化算法（Bayesian Optimization）以及粒子群算法（Particle Swarm Optimization, PSO）。

与tune模式相关的配置项为：

-   tune\_strategy：指定选择哪种算法进行调优，支持rl（使用强化学习模型进行调优）、gop（使用全局搜索算法）以及auto（自动选择）。若该参数设置为rl，则rl相关的配置项生效。除前文提到过的train模式下生效的配置项外，test\_episode配置项也生效，该配置项表明调优过程的最大回合数，该参数直接影响了调优过程的执行时间（一般地，数值越大越耗时）。
-   gop\_algorithm：选择何种全局搜索算法，支持bayes以及pso。
-   max\_iterations：最大迭代轮次，数值越高搜索时间越长，效果往往越好。
-   particle\_nums：在PSO算法上生效，表示粒子数。
-   scenario与tuning\_list见上文train模式中的描述。

待上述配置项配置完成后，可以通过下述命令启动调优：

```
gs_dbmind component xtuner tune -f connection.json
```

>![](public_sys-resources/icon-caution.png) **注意：** 
>在使用tune和train模式前，用户需要先导入benchmark所需数据并检查benchmark能否正常跑通。调优过程结束后，调优程序会自动恢复调优前的数据库参数配置。

