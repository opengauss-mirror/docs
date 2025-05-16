# 使用指导<a name="ZH-CN_TOPIC_0000002294471389"></a>

假设指标采集系统运行正常，并且用户已经初始化了配置文件目录confpath，则可以通过下述命令实现本特性的功能：

## 异常检测功能<a name="zh-cn_topic_0000001666869584_section6687101013527"></a>

仅启动异常检测功能：

```
gs_dbmind service start --conf confpath --only-run anomaly_detection
```

对于某一指标，在全部节点上，从timestamps1到timestamps2时间段内的数据进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2
```

对于某一指标，在特定节点上，从timestamps1到timestamps2时间段内的数据进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address 
```

对于某一指标，在全部节点上，从timestamps1到timestamps2时间段内的数据，以特定异常检测方式进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --anomaly anomaly_type
```

对于某一指标，在特定节点，从timestamps1到timestamps2时间段内的数据，以特定异常检测方式进行概览：

```
gs_dbmind component anomaly_detection --conf confpath --action overview --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

对于某一指标，在特定节点，从timestamps1到timestamps2时间段内的数据，以特定异常检测方式进行可视化展示：

```
gs_dbmind component anomaly_detection --conf confpath --action plot --metric metric_name --start-time timestamps1 --end-time timestamps2 --host ip_address --anomaly anomaly_type
```

运行异常诊断后台任务：

```
参考[Slow Query Diagnosis](zh-cn_topic_0000001667029332.md)中的方法，其对应定时任务为：anomaly_detection
```

## 指标异常分析功能<a name="zh-cn_topic_0000001666869584_section10292919165214"></a>

指标异常根因分析接口调用：

```
curl -X 'GET' http://127.0.0.1:8080/v1/api/app/metric-diagnosis/?metric_name=os_cpu_user_usage&metric_filter={"from_instance":"127.0.0.1","from_job":"node_exporter","instance":"127.0.0.1:8181","job":"reprocessing_exporter"}&alarm_cause=["high_cpu_usage"]&start=1691482728000&end=1691482728000 -H 'accept: application/json' -H 'Content-Type: application/json' -H "Authorization: bearer xxx"
```

如果使用HTTPS协议，则查询示例为：

```
curl -X 'GET' 'https://127.0.0.1:8080/v1/api/app/metric-diagnosis/?metric_name=os_cpu_user_usage&metric_filter={"from_instance":"127.0.0.1","from_job":"node_exporter","instance":"127.0.0.1:8181","job":"reprocessing_exporter"}&alarm_cause=["high_cpu_usage"]&start=1691482728000&end=1691482728000' -H 'accept: application/json' -H 'Content-Type: application/json' -H "Authorization: bearer xxx" --cacert xx.crt --key xx.key --cert xx.crt
```

如果DBMind以微服务模式启动，则查询示例为：

```
curl -X 'POST' 'https://127.0.0.1:8080/v2/api/app/metric-diagnosis/?metric_name=os_cpu_user_usage&metric_filter={"from_instance":"127.0.0.1","from_job":"node_exporter","instance":"127.0.0.1:8181","job":"reprocessing_exporter"}&alarm_cause=["high_cpu_usage"]&start=1691482728000&end=1691482728000' -H 'accept: application/json' -H 'Content-Type: application/json' --cacert xx.crt --key xx.key --cert xx.crt
```

返回结果格式参考：

```
{"data":{[{'reason1': 0.0, 'reason2': 1.0}, 'conclusion', 'advice']},"success":true}
```

停止已启动的服务：

```
gs_dbmind service stop --conf confpath
```

指标异常分析支持的场景详细情况如下：

-   **场景1：用户CPU使用率异常**

    异常判断标准：用户CPU使用率10分钟内持续高于80%。

    可能的异常根因：

    -   业务压力增大导致

        现象：TPS、网络读写速率、CPU使用率和内存使用率均存在一定程度的上涨。

        分析：通过与相关指标进行相关性比对。

        建议：根据业务量评估CPU、内存等资源是否满足业务需求，是否需要扩容。

    -   iowait延时高导致

        现象：数据库磁盘的读时延和写时延变长。

        建议：增加I/O吞吐量，排查可以降低I/O的进程。

    分析时提供的信息：

    -   提供pg\_stat\_activity每个unique\_sql\_id的总运行时间的快照信息。

-   **场景2：线程池使用率异常**

    异常判断标准：默认的异常检测规则是线程池使用率10分钟内持续高于80%。

    可能的异常根因：

    -   业务压力增大导致

        现象：TPS、网络读写速率、内存使用率和线程池使用率基本存在一定程度的关联。

        分析：通过与相关指标进行相关性比对。

        建议：根据业务量评估CPU、内存等资源是否满足业务需求，是否需要扩容。

    -   磁盘读写时延过高导致

        现象：数据库磁盘读写时延增高，导致线程池使用率超过配置的阈值。

        分析：查看产生报警的节点的线程池使用率与数据盘I/O平均读写时长的相关性。

        建议：若发现数据库磁盘读写时延频繁过高或者有明显劣化趋势，则继续定位是否磁盘硬件故障。

    -   工作负载上升导致

        现象：QPS、CPU使用率和系统内存持续上涨。

        分析：根据算法对QPS、CPU使用率和系统内存持续上涨进行判断。

        建议：数据库负载上升，考虑采用限流措施。

-   **场景3：动态内存使用率异常**

    异常判断标准：系统内存超过阈值（默认10分钟连续超过80%），再进行动态内存使用率异常分析。

    可能的异常根因：

    -   会话数上涨导致

        现象：在线会话数量指标随内存上涨的同时上涨。

        分析：查看同一时间段内会话数量和内存上涨之间的关系，通过皮尔逊计算相关系数，绝对值超过阈值的指标会被认为是相关异常。

        建议：停止变更。

    -   动态内存泄露导致

        现象：动态内存持续上涨。

        分析：查看内存占用较大的上下文数量，如未发生很大变化则可能是内存泄露。

        建议：通过pg\_terminate\_session终止会话或重启DN进程。

    -   非数据库内存泄露导致

        现象：非数据库内存持续上涨。

        分析：查看非数据库内存占用。

        建议：分析系统内存占用，终止节点上其他占用内存较高的进程。

    分析时提供的信息：

    -   提供session\_memory\_detail的快照信息。

-   **场景4：共享内存使用率异常**

    异常判断标准：系统内存超过阈值（默认10分钟连续超过80%），再进行共享内存使用率异常分析。

    可能的异常根因：

    -   未落盘脏页数过高导致

        现象：INSERT或UPDATE操作比例突然增大。

        分析：分析INSERT或UPDATE操作比例突然增大与共享内存的相关性，通过皮尔逊计算相关系数，绝对值超过阈值的指标会被认为是相关异常。

        建议：考虑降低pagewriter\_sleep参数，加速脏页落盘的速度；考虑降低dirty\_page\_percent\_max参数，降低刷页阈值上限。

    -   共享内存泄露导致

        现象：共享内存持续上涨。

        分析：查看系统内存占用，确认是否有除了openGuass进程外占用大量内存的进程。

        建议：手动清理，执行“ipcrm -m shmid”（此命令操作危险，请谨慎操作）。

    分析时提供的信息：

    -   提供shared\_memory\_detail的快照信息。

-   **场景5：磁盘空间占用高异常**

    异常判断标准：磁盘空间占用超过阈值（默认80%）。

    可能的异常根因：

    -   数据库表空间膨胀导致

        现象：数据库磁盘占用快速上升。

        分析：分析INSERT或UPDATE操作比例和磁盘I/O读写情况来确定脏数据是否增加过快。

        建议：临时情况，无需处理。

    -   Xlog堆积导致

        现象：Xlog路径占用空间过大。

        分析：分析Xlog数量是否超过wal\_keep\_segments + checkpoint\_segments \* 2+1。

        建议：查看是否有未推进的逻辑复制槽阻塞Xlog回收。

    分析时提供的信息：

    -   提供实时表空间信息。
    -   提供临时文件信息，包括线程和会话信息。

-   **场景6：磁盘I/O读取时延异常**

    异常判断标准：数据库磁盘I/O使用率超过阈值（默认99%）。

    可能的异常根因：

    -   数据磁盘读写I/O使用率超阈值导致

        现象：数据库磁盘读写I/O使用率接近100%。

        分析：分析数据库磁盘读写I/O使用率和时延之间的关系。

        建议：降低I/O压力，提高磁盘的I/O限制。

-   **场景7：扫描攻击**

    异常判断标准：SQL执行错误率和用户越权率加权得分超过阈值（默认阈值：提示0.2，告警0.6，严重0.8）。

    可能的异常根因：

    -   SQL执行错误率和用户越权率增高导致

        现象：SQL执行错误率和用户越权率增高。

        分析：用户使用自动化工具扫描目标网络或系统的漏洞，利用这些漏洞获取未经授权的访问权限，窃取敏感数据或破坏系统目标。

        建议：及时更新数据库软件和安全补丁，以修复已知漏洞，减少攻击面。

-   **场景8：暴力登录**

    异常判断标准：用户无效登录率和用户锁定率指标加权得分超过阈值（默认阈值：提示0.1，告警0.3，严重0.4）。

    可能的异常根因：

    -   用户无效登录率和用户锁定率增高导致

        现象：用户无效登录率和用户锁定率增高。

        分析：攻击者猜测用户名和密码进行暴力登录，导致账户锁定及其他拒绝服务问题。

        建议：根据告警信息，及时检查登录日志、采取相应措施。

-   **场景9：违规操作**
-   异常判断标准：用户越权率指标超过阈值（默认阈值：提示0.2，告警0.6，严重0.8）。

    可能的异常根因：

    -   用户越权率增高导致

        现象：用户越权率增高。

        分析：攻击者使用用户凭证进行违规操作。

        建议：对于敏感数据，限制访问权限。

>![](public_sys-resources/icon-note.gif) **说明：** 
>其中，场景7\~9的约束如下：
>-   用户需要有Monitor admin和Audit admin权限，如果没有Audit admin权限，会导致审计指标数据全为0，诊断结果不可用。
>-   需要开启audit\_enabled、audit\_login\_logout、audit\_user\_locked和audit\_user\_violation参数。
>-   审计总开关GUC参数audit\_enabled支持动态加载。在数据库运行期间修改该配置项的值会立即生效，无需重启数据库。默认值为on，表示开启审计功能。
>-   审计项audit\_login\_logout：默认值为7，表示开启用户登录、退出的审计功能。设置为0表示关闭用户登录、退出的审计功能。
>-   审计项audit\_user\_locked：默认值为1，表示开启审计用户锁定和解锁功能。
>-   审计项audit\_user\_violation：默认值为0，表示关闭用户越权操作审计功能。可通过命令 gs\_guc reload -Z datanode -N all -I all -c "audit\_user\_violation=1" 开启。
>-   如未开启审计相关参数，则只能处理扫描攻击场景。

## 亚健康诊断功能<a name="zh-cn_topic_0000001666869584_section375817515117"></a>

亚健康状态是系统介于健康状态和故障状态之间的一种状态，系统仍在运行且功能正常但处于降级模式的一种情况，它的存在会造成系统性能严重低于预期。

亚健康诊断支持的场景如下：

-   **场景1：潜在慢盘监测**

    DBMind默认初始化"slow\_disk\_detector"检测器，在每一次触发异常检测定时，任务时对潜在慢盘进行监测。

    -   现象：“慢盘”现象普遍存在于存储架构之中，由于硬盘体质或者频繁读写的原因，部分硬盘会出现性能故障，I/O负载过高等情况进而导致延时变大，读写变慢的现象。
    -   检测逻辑：在最近的过去7天\~30天（收集的数据小于7天不进行检测），其磁盘I/O平均读写时间长期在30ms以上并呈现出上升趋势，则认为其发生潜在慢盘。

-   **场景2：内存泄漏监测**

    DBMind默认初始化"mem\_leak\_detector"检测器，在每一次触发异常检测定时任务时对内存泄漏进行监测。

    -   现象：程序中已动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。内存泄漏缺陷具有隐蔽性、积累性的特征，比其他内存非法访问错误更难检测。
    -   检测逻辑：最近的过去7天\~30天（收集的数据小于7天不进行检测），其内存占用呈现出上升趋势，则认为其发生内存泄漏。

    可能的异常根因：

    -   动态内存泄露导致

        现象：动态内存持续上涨。

        分析：查看内存占用较大的上下文数量，如未发生很大变化则可能是内存泄露。

        建议：通过pg\_terminate\_session终止会话或重启DN进程。

    -   共享内存泄露导致

        现象：共享内存持续上涨。

        分析：查看系统内存占用，确认是否有除了openGuass进程外占用大量内存的进程。

        建议：手动清理，ipcrm -m shmid（此命令操作危险，请谨慎操作）。

    -   第三方软件内存增高导致

        现象：other\_used\_memory持续上涨。

        分析：第三方软件内存泄露。

        建议：排查第三方软件的内存占用。

    -   非数据库内存泄露导致

        现象：非数据库内存持续上涨。

        分析：查看非数据库内存占用。

        建议：分析系统内存占用，终止节点上其他占用内存较高的进程。

    -   用户无效登录过高导致

        现象：用户无效登录数超阈值。

        分析：用户无效登录日志过多，存在大量连接失败。

        建议：请联系管理员。

    分析时提供的信息：

    -   提供session\_memory\_detail的快照信息。
    -   提供shared\_memory\_detail的快照信息。

-   **场景3：锁冲突监测**

    DBMind默认初始化"deadlock\_detector"检测器，在每一次触发异常检测定时任务时对锁冲突进行监测。

    -   现象：当发生锁冲突时，日志中会记录锁冲突的详细信息。
    -   检测逻辑：当内核日志记录到死锁日志时，则认为其发生锁冲突，并对死锁信息进行收集。

-   **场景4：Xlog堆积**

    异常判断标准：Xlog数量超过wal\_keep\_segments + checkpoint\_segments \* 2。

    可能的异常根因：

    -   逻辑复制槽阻塞Xlog回收

        现象：存在未推进的逻辑复制槽。

        分析：存在未推进的逻辑复制槽。

        建议：可能存在阻塞Xlog回收的逻辑复制槽，请联系管理员。

    -   Xlog归档失败

        现象：Xlog的最小lsn小于归档日志的lsn。

        分析：Xlog的最小lsn小于归档日志的lsn，表示归档进程没有成功回收Xlog。

        建议：Xlog归档失败问题请联系管理员。

    -   备机build阻塞Xlog回收

        现象：发现recycle\_build日志或者发现recycle\_full\_build日志或者发现recycle\_quorum\_required日志。

        分析：发现recycle\_build日志或者发现recycle\_full\_build日志或者发现recycle\_quorum\_required日志。

        建议：备机build阻塞Xlog回收问题请联系管理员。

    -   dcf阻塞Xlog回收

        现象：发现recycle\_dcf日志。

        分析：发现recycle\_dcf日志。

        建议：dcf阻塞Xlog回收问题请联系管理员。

    -   dummy standby场景阻塞Xlog回收

        现象：发现recycle\_dummy\_standby日志。

        分析：发现recycle\_dummy\_standby日志。

        建议：dummy standby场景阻塞Xlog回收问题请联系管理员。

    -   增备阻塞Xlog回收

        现象：发现recycle\_cbm日志。

        分析：发现recycle\_cbm日志。

        建议：增备阻塞Xlog回收问题请联系管理员。

    -   备份槽阻塞Xlog回收

        现象：发现recycle\_standby\_backup日志。

        分析：发现recycle\_standby\_backup日志。

        建议：备份槽阻塞Xlog回收问题请联系管理员。

    -   极致rto阻塞Xlog回收

        现象：发现recycle\_extro\_read日志。

        分析：发现recycle\_extro\_read日志。

        建议：极致rto阻塞Xlog回收问题请联系管理员。

    -   参数设置不当

        现象：磁盘空间小于\(wal\_keep\_segments + checkpoint\_segments \* 2\) \* wal\_segment\_size。

        分析：磁盘空间小于\(wal\_keep\_segments + checkpoint\_segments \* 2\) \* wal\_segment\_size。

        建议：磁盘空间过小，guc参数设置不当。

    -   Xlog回收进程失效

        现象：回收日志长期不更新。

        分析：回收日志长期不更新。

        建议：Xlog回收进程失效问题请联系管理员。

-   **场景5：长事务**

    异常判断标准：存在处于active或者idle in transaction状态且运行时间超过1个小时的事务。

    可能的异常根因：

    -   存在大量长事务

        现象：长事务数量超过1个。

        分析：存在未提交的长事务。

        建议：如果P80、P95持续高，CPU使用率也一直保持很高，线程池使用率反复超过阈值，没有恢复迹象，则需要联系相关人员进行进一步定位分析。

    分析时提供的信息：

    -   提供长事务发生时其session\_id对应的session\_memory\_detail的快照信息。
    -   提供当前未结束的长事务的详细信息。

>![](public_sys-resources/icon-note.gif) **说明：** 
>-   异常检测器的落盘存储依赖于元数据库，请勿在元数据库中对异常检测器进行手动修改。
>-   当前版本仅支持，在主备切换、扩容和剔除节点的场景下，同一集群的检测器配置参数会被继承与保留，其他场景均不支持。
>-   在输入anomaly detection的参数时，start-time设置时间至少要早于end-time设置时间30秒以上。
>-   异常检测功能依赖于异常检测器，可以通过异常检测器的查询接口/v1/api/app/anomaly-detection/detectors/\{name\}查看当前已添加的全部异常检测器。
>-   根因分析的某些功能依赖opengauss-exporter的指标采集，当数据库处于高负载状况下，由于opengauss-exporter设置了SQL的超时机制来保护业务，可能会导致某些复杂的查询语句超时，进而导致采集的数据为空，当发生采集失败时，可以查询opengauss-exporter的日志来进行进一步的定位。
>-   添加检测器或更改检测器参数会将检测器状态变为启用。
>-   对于初始化时默认的长期指标检测器（如slow\_disk\_detector和mem\_leak\_detector），其检测器的监测时间窗口长度是固定的，不支持修改，对于其duration参数的修改是无效的。
>-   对于长期指标检测器，当收集到的数据低于7天时，不会进行检测。当数据超过一小时以上没有更新时，不会进行检测。
>-   对Xlog堆积问题的根因分析依赖于Xlog日志的DFX功能，该功能仅在503.2版本及其后续版本中提供支持。

