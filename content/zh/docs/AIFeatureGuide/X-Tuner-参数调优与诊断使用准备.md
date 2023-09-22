# 使用准备

## 前提条件与使用事项<a name="zh-cn_topic_0283137591_section887921944913"></a>

-   数据库状态正常、客户端能够正常连接、且要求数据库内导入数据，以便调优程序可以执行benchmark测试调优效果。
-   使用本工具需要指定登录到数据库的用户身份，要求该登录到数据库上的用户具有足够的权限，以便可以获得充足的数据库状态信息。
-   使用登录到数据库宿主机上的Linux用户，需要将$**GAUSSHOME/bin**添加到PATH环境变量中，即能够直接运行gsql、gs\_guc、gs\_ctl等数据库运维工具。
-   本工具支持以三种模式运行，其中tune和train模式要求用户配置好benchmark运行环境，并导入数据，本工具将会通过迭代运行benchmark来判断修改后的参数是否有性能提升。
-   recommend模式建议在数据库正在执行workload的过程中执行，以便获得更准确的实时workload信息。
-   本工具默认带有TPC-C、TPC-H、TPC-DS以及sysbench的benchmark运行脚本样例，如果用户使用上述benchmark对数据库系统进行压力测试，则可以对上述配置文件进行适度修改或配置。如果需要适配用户自己的业务场景，需要您参照benchmark目录中的template.py文件编写驱动您自定义benchmark的脚本文件。

## 原理简介<a name="zh-cn_topic_0283137591_section1767203555113"></a>

调优程序是一个独立于数据库内核之外的工具，需要提供数据库及其所在实例的用户名和登录密码信息，以便控制数据库执行benchmark进行性能测试；在启动调优程序前，要求用户测试环境交互正常，能够正常跑通benchmark测试脚本、能够正常连接数据库。

>![](public_sys-resources/icon-note.png) **说明：** 
>如果需要调优的参数中，包含重启数据库后才能使修改生效的参数，那么在调优过程中数据库将会重启多次。如果用户的数据库正在执行作业，请慎用train与tune模式。

调优程序X-Tuner包含三种运行模式，分别是:

-   recommend：通过用户指定的用户名等信息登录到数据库环境中，获取当前正在运行的workload特征信息，根据上述特征信息生成参数推荐报告。报告当前数据库中不合理的参数配置和潜在风险等；输出根据当前正在运行的workload行为和特征；输出推荐的参数配置。**该模式是秒级的，不涉及数据库的重启操作，其他模式可能需要反复重启数据库**。
-   train：通过用户提供的benchmark信息，不断地进行参数修改和benchmark的执行。通过反复的迭代过程，训练强化学习模型，以便用户在后面通过tune模式加载该模型进行调优。
-   tune：使用优化算法进行数据库参数的调优，当前支持两大类算法，一种是深度强化学习，另一种是全局搜索算法（全局优化算法）。深度强化学习模式要求先运行train模式，生成训练后的调优模型，而使用全局搜索算法则不需要提前进行训练，可以直接进行搜索调优。

>![](public_sys-resources/icon-notice.png) **须知：** 
>如果在tune模式下，使用深度强化学习算法，要求必须有一个训练好的模型，且要求**训练该模型时的参数与进行调优时的参数列表（包括max与min）必须一致**。

**图 1**  X-Tuner结构图<a name="fig137427353816"></a>  
![](figures/x-tuner-structure.png "X-Tuner结构图")

X-Tuner的整体架构如[图1 X-Tuner 结构图](#fig137427353816)所示，系统可以分为：

-   DB侧：通过DB\_Agent模块对数据库实例进行抽象，通过该模块可以获取数据库内部的状态信息、当前数据库参数、以及设置数据库参数等。DB侧包括登录数据库环境使用的SSH连接。
-   算法侧：用于调优的算法包，包括全局搜索算法（如贝叶斯优化、粒子群算法等）和深度强化学习（如DDPG）。
-   X-Tuner主体逻辑模块：通过Enviroment模块进行封装，每一个step就是一次调优过程。整个调优过程通过多个step进行迭代。
-   benchmark：由用户指定的benchmark性能测试脚本，用于运行benchmark作业，通过跑分结果反映数据库系统性能优劣。

>![](public_sys-resources/icon-note.png) **说明：** 
>应确保benchmark脚本跑分结果越大表示性能越好。
>例如TPCH这种衡量SQL语句整体执行时长的benchmark，可以通过取总体执行时间的相反数作为benchmark的输出分数。

## X-Tuner的运行和安装方法<a name="zh-cn_topic_0283137591_section275518529540"></a>

执行下述命令即可获取xtuner功能帮助

```
gs_dbmind component xtuner --help 
```

用户可据此给定不同的命令行执行相应的功能。

## X-Tuner的配置文件说明<a name="section5892154973918"></a>

X-Tuner在运行前需要加载配置文件，用户可以通过 **--help** 命令查看默认加载的配置文件绝对路径：

```
...  
 -x TUNER_CONFIG_FILE, --tuner-config-file TUNER_CONFIG_FILE
                        This is the path of the core configuration file of the
                        X-Tuner. You can specify the path of the new
                        configuration file. The default path is /path/to/xtuner/xtuner.conf.
                        You can modify the configuration file to control the
                        tuning process.
...
```

修改配置文件的配置项可以指引X-Tuner执行不同的动作，用户可以根据自己的不同需求来修改配置文件的内容，配置文件的配置项说明详见[表2](X-Tuner-参数调优与诊断命令参考.md#table10217184512711)。如果需要修改配置文件的加载路径，则可以通过选项 **-x** 命令行选项来指定。

## Benchmark的选择与配置<a name="section11685014422"></a>

Benchmark的驱动脚本存放路径为X-Tuner目录（即 **$GAUSSHOME**/bin/dbmind/components/xtuner，下同）的子目录benchmark中。X-Tuner自带常用的benchmark驱动脚本，例如基于时间周期的探测脚本（**默认**）、TPC-C、TPC-H等。X-Tuner通过调用benchmark/\_\_init\_\_.py文件中  **get\_benchmark\_instance\(\)** 命令来加载不同的benchmark驱动脚本，获取benchmark驱动实例。其中，benchmark驱动脚本的格式说明如下：

-   驱动脚本文件名：表示benchmark的名字，该名字用于表示驱动脚本的唯一性，可通过在X-Tuner的配置文件中的配置项**benchmark\_script**来指定选择加载哪个benchmark驱动脚本。
-   驱动脚本内容三要素：path变量、cmd变量以及run函数。

下面分别介绍驱动脚本的内容三要素：

1.  path变量：表示benchmark脚本的存放地址，可以直接在驱动脚本中修改，也可以通过配置文件的benchmark\_path配置项来指定。
2.  cmd变量：表示执行benchmark脚本需要运行的命令，可以直接在驱动脚本中修改，也可以通过配置文件的benchmark\_cmd配置项来指定。cmd中的文本允许使用占位符，用于获取某些运行cmd命令时的必要信息，使用示例参见TPC-H驱动脚本示例。这些占位符包括：
    -   \{host\}：数据库宿主机的IP地址
    -   \{port\}：数据库实例的侦听端口号
    -   \{user\}：登录数据库系统上的用户名
    -   \{password\}：与登录数据库系统上的用户相匹配的密码
    -   \{db\}：正在进行调优的数据库名

3.  run函数：该函数的函数签名为：

    ```
    def run(remote_server, local_host) -> float:
    ```

    其中，返回数据类型为float，表示benchmark执行后的评估分数值，要求该值越大表示性能越好，例如使用TPC-C跑分结果tpmC即可作为返回值，TPC-H的全部SQL语句执行总时间的相反数（取相反数后可保证返回值越大则性能越好）也可作为返回值。

    remote\_server变量是X-Tuner程序传递给脚本使用的远端主机（数据库宿主机）的shell命令接口，local\_host变量是X-Tuner程序传递给脚本使用的本地主机（运行X-Tuner脚本的主机）的shell命令接口。上述shell命令接口提供的方法包括：

    ```
    exec_command_sync(command, timeout)
    功能：该方法用于在主机上执行shell命令。
    参数列表：
    command 必选，数据类型可以是str, 以及元素为str类型的list或tuple;
    timeout 可选，表示命令执行的超时时长，单位是秒。
    返回值：
    返回二元组 (stdout, stderr)，stdout表示标准输出流结果，stderr表示标准错误流结果，数据类型均为str.
    ```

    ```
    exit_status
    功能：该属性表示最近一条shell命令执行后的退出状态码(exit status code)。
    说明：一般情况，退出状态码为0表示执行正常，非0表示存在错误。
    ```


Benchmark驱动脚本示例说明

1.  TPC-C 驱动脚本

    ```
    from tuner.exceptions import ExecutionError
    
    # WARN: You need to download the benchmark-sql test tool to the system,
    # replace the PostgreSQL JDBC driver with the openGauss driver,
    # and configure the benchmark-sql configuration file.
    # The program starts the test by running the following command:
    path = '/path/to/benchmarksql/run'  # TPC-C测试脚本benchmark-sql 的存放路径
    cmd = "./runBenchmark.sh props.gs"  # 自定义一个名为 props.gs 的benchmark-sql测试配置文件
    
    
    def run(remote_server, local_host):
        # 切换到 TPC-C 脚本目录下，清除历史错误日志，然后运行测试命令。
        # 此处最好等待几秒钟，因为benchmark-sql 测试脚本生成最终测试报告是通过一个shell脚本实现的，整个过程会有延迟，
        # 为了保证能够获取到最终的tpmC数值报告，我们这里选择等待3秒钟。
        stdout, stderr = remote_server.exec_command_sync(['cd %s' % path, 'rm -rf benchmarksql-error.log', cmd, 'sleep 3'])
        # 如果标准错误流中有数据，则报异常退出。
        if len(stderr) > 0:
            raise ExecutionError(stderr)
    
        # 寻找最终tpmC结果
        tpmC = None
        split_string = stdout.split()  # 对标准输出流结果进行分词。
        for i, st in enumerate(split_string):
            # 在5.0版本的benchmark-sql中，tpmC最终测试结果数值在 ‘(NewOrders)’关键字的后两位，正常情况下，找到该字段后直接返回即可。
            if "(NewOrders)" in st:
                tpmC = split_string[i + 2]
                break
        stdout, stderr = remote_server.exec_command_sync(
            "cat %s/benchmarksql-error.log" % path)
        nb_err = stdout.count("ERROR:")  # 判断整个benchmark运行过程中，是否有报错，记录报错的错误数
        return float(tpmC) - 10 * nb_err  # 这里将报错的错误数作为一个惩罚项，惩罚系数为10，越高的惩罚系数表示越看中报错的数量.
    
    ```

2.  TPC-H驱动脚本

    ```
    import time
    
    from tuner.exceptions import ExecutionError
    
    # WARN: You need to import data into the database and SQL statements in the following path will be executed.
    # The program automatically collects the total execution duration of these SQL statements.
    path = '/path/to/tpch/queries'  # 存放TPC-H测试用的SQL脚本目录
    cmd = "gsql -U {user} -W {password} -d {db} -p {port} -f {file}"  # 需要运行TPC-H测试脚本的命令，一般使用'gsql -f 脚本文件' 来运行
    
    
    def run(remote_server, local_host):
        # 遍历当前目录下所有的测试用例文件名
        find_file_cmd = "find . -type f -name '*.sql'"
        stdout, stderr = remote_server.exec_command_sync(['cd %s' % path, find_file_cmd])
        if len(stderr) > 0:
            raise ExecutionError(stderr)
        files = stdout.strip().split('\n')
        time_start = time.time()
        for file in files:
            # 使用 file 变量替换 {file}，然后执行该命令行。
            perform_cmd = cmd.format(file=file)
            stdout, stderr = remote_server.exec_command_sync(['cd %s' % path, perform_cmd])
            if len(stderr) > 0:
                print(stderr)
        # 代价为全部测试用例的执行总时长
        cost = time.time() - time_start
        # 取相反数，适配run 函数的定义：返回结果越大表示性能越好。
        return - cost
    ```


