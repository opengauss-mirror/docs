# gs\_plan\_simulator<a name="ZH-CN_TOPIC_0000001151403222"></a>

## 背景信息<a name="section7471933144813"></a>

某些用户的生产环境不允许维护人员进行任何问题定位和分析的操作，因此对于此类场景，唯一的手段就是将生产环境的各种数据收集后，依据这些数据对问题进行分析和定位。对于和执行计划相关的问题，gs\_plan\_simulator可以收集与执行计划相关的数据并能够在其它环境上进行执行计划的复现，从而定位执行计划类相关问题。

## 前提条件<a name="section1914195616334"></a>

-   用户数据库正常运行。
-   用户可以连接到数据库并正常执行功能。
-   用于复现的OS环境和生产环境应该一致。
-   用于复现的环境安装的openGauss安装包应和生产环境的安装包一致。

## 注意事项<a name="section15702145818480"></a>

-   收集数据功能目前已经整合到工具gs\_collector中，需要使用gs\_collector收集相关数据，之后再使用gs\_plan\_simulator复现执行计划。
-   使用gs\_collector收集数据时默认不会收集与执行计划相关数据，因为收集该类数据可能会需要很长时间。收集执行计划相关数据需要修改配置文件，详情见使用步骤。
-   在复现环境上需要配置GAUSSHOME和LD\_LIBRARY\_PATH。
-   工具使用时需要注意集群状态，扩容状态等影响执行计划相关数据的情况下，勿使用此工具。

## 使用步骤<a name="section08371725192010"></a>

1.  使用gs\_collector收集数据。收集执行计划相关数据时，需要先写配置文件，例如plan.json，建议配置文件内容如下：

    ```
    {
    "Collect":
    [
    {"TypeName": "Plan", "Content": "*", "Interval":"0", "Count":"1"}
    ]
    }
    ```

    这里Content内容为“\*”，用于收集所有数据库的相关数据，也可以指定数据库进行收集如“test1,test2”。

    收集命令示例：

    ```
    gs_collector --begin-time="20191219 15:00" --end-time="20191219 15:15" -C ../plan.json -l plan.log -o ./
    ```

    更多使用方法见[gs\_collector](gs_collector.md)一节。

2.  拷贝数据文件夹到复现环境。

    数据收集成功后，放在指定的压缩包内，解压压缩包会有各个节点的压缩包。解压任意一个压缩包，目标数据在planSimulatorfiles文件夹下，进入planSimulatorfiles文件夹可以看到以数据库命名的文件夹，拷贝planSimulatorfiles文件夹到复现环境。

3.  复现环境的配置。
    1.  使用普通用户创建用于复现执行计划的目录。例如plan文件夹。
    2.  在该目录中解压GaussDB安装包，再解压安装包解压出来的bin文件。
    3.  配置GAUSSHOME为plan文件夹的路径，配置LD\_LIBRARY\_PATH为plan/lib文件夹的路径。

4.  使用gs\_plan\_simulator复现执行计划。

    在复现环境上运行如下命令，复现命令示例：

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m restore -p 39000 -A planSimulatorfiles/
    ```

    该命令会在复现环境创建一个数据库，CN端口号为39000，同时会有信息提示如何连接数据库，进入数据库就可以执行explain+SQL语句进行问题定位。命令参数见参数说明。


## 语法<a name="section1639811541193"></a>

-   复现数据库环境。

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m OPTION -p PORT -A DATADIR
    ```


-   关闭数据库。

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m off
    ```

-   打开数据库。

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh -m start
    ```


-   显示帮助信息。

    ```
    $GAUSSHOME/bin/gs_plan_simulator.sh --help
    ```


## 参数说明<a name="section1990654815184"></a>

-   -m

    工具的功能信息，表示工具要执行的操作。

    取值范围：

    -   restore：利用收集的数据库信息来复现数据库环境，同时创建数据库。
    -   off：关闭已经存在的由该工具复现数据库。
    -   start：启动由该工具复现的数据库。

-   -p

    创建数据库的CN端口。

-   -A

    从用户环境拷贝的数据文件夹。
