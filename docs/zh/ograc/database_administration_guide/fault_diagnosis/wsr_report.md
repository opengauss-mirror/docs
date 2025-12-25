# WSR报告<a name="ZH-CN_TOPIC_0000001835234417"></a>

### **一、什么是WSR报告**

WSR（Workload Statistics Report）是一款专用于数据库性能分析的专业报告工具，其功能定位与Oracle数据库中的AWR报告相类似。报告包含一些性能统计信息，帮助开发维护人员快速定位性能问题。

WSR报告会定时产生快照（默认快照周期是30分钟，可以修改快照周期，也可以手动创建一个快照），通过两个快照之间收集到的信息来生成报表数据。

### **二、生成WSR报告步骤**

执行以下命令，可以查询生成WSR报告的相关操作

    ```SQL

    SQL> WSR
    
    The syntax of generating a WSR report is as follows: 

        Format:  WSR snap_id1 snap_id2 "FILENAME" [ shard ] 
        Format:  WSR starttime endtime "FILENAME" 
                snap_id1 and snap_id2 indicate the IDs of the start and end snapshots, respectively. FILENAME is optional.
                If no snapshot is generated, you can specify the start time and end time to generate the report. The time format is yyyy-mm-dd hh24:mi:ss.
                You can use the command with shard to collect the WSR information of cluster, but only support on CN node.
                You can create a snapshot using the SYS.WSR$CREATE_SNAPSHOT stored procedure and obtain snapshot IDs from the adm_hist_snapshot system view.
                You can also create a global snapshot to the whole cluster through the WSR CREATE_GLOBAL_SNAPSHOT command, but only support on CN node.
                You can drop snapshots using the WSR$DROP_SNAPSHOT_RANGE stored procedure and obtain the latest 20 snapshot IDs by running the WSR list command.
        Example1: WSR 10 20
        Use snapshot 10 and snapshot 20 to generate a report, with a default report name.
        Example2: WSR 10 20 "e:\wsr.html"
        Use snapshot 10 and snapshot 20 to generate a report, with a specified report name.
        Example3: WSR list
        Obtain information about the latest 20 snapshots.
        Example4: WSR list 50
        Obtain information about the latest 50 snapshots.
        Example5: CALL WSR$CREATE_SNAPSHOT;
        Create a snapshot.
        Example6: CALL WSR$DROP_SNAPSHOT_RANGE(10, 20);
        Drop snapshots from snapshot 10 to snapshot 20.
        Example7: WSR CREATE_GLOBAL_SNAPSHOT
        Create a golbal snapshot.
        Example8: wsr "2021-06-16 10:00:00" "2021-06-16 10:10:00"
        Specify the start time and end time to generate the report.
    Note: For WSR, the values of the SQL_STAT and TIMED_STATS system parameters are true.

    ```

这些命令可以分为四大类：生成报告、快照管理、查看快照列表。
命令详解
类别一：生成性能报告

1. WSR snap_id1 snap_id2

    含义：使用两个指定的快照ID（snap_id1 为开始，snap_id2 为结束）生成一份WSR性能报告。

    报告文件名由系统自动生成，最基础的生成报告命令，当你不需要自定义报告文件名时使用。

2. WSR snap_id1 snap_id2 "FILENAME"

    含义：使用两个指定的快照ID生成一份WSR性能报告，并自定义报告的文件名和保存路径。

    你可以指定路径（如 "e:\wsr.html"）将报告保存到特定位置。

3. WSR starttime endtime

    含义：直接指定一个时间范围（而不是快照ID）来生成性能报告。

    时间格式必须为 "yyyy-mm-dd hh24:mi:ss"。当你想分析一个非常具体的时间段（如已知的应用卡顿时间段），但该时间段没有精确的快照对应时使用。

类别二：查看快照列表

4. WSR list

    含义：列出最新的20个快照的信息。

    快速查看最近有哪些可用的快照，以便选择正确的快照ID来生成报告。

5. WSR list 50

    含义：列出指定数量（此处是50个）的最新快照信息。

    当需要查看更早的历史快照时，使用这个命令来扩展列表。

类别三：创建快照

6. CALL WSR$CREATE_SNAPSHOT;

    含义：手动立即创建一个性能快照。

    在需要进行性能分析前（比如准备进行一个压力测试），或者应用突然变慢时，手动打一个快照点，以便与之后的情况做对比。

7. WSR CREATE_GLOBAL_SNAPSHOT

    含义：在集群环境下，创建一个全局快照，收集整个集群所有节点的性能数据。

    仅支持在协调节点（CN）上执行，用于分析分布式或集群数据库的整体性能。

类别四：删除快照

8. CALL WSR$DROP_SNAPSHOT_RANGE(10, 20);

    删除一个指定范围内的快照（此示例为删除从快照ID 10 到 20 的所有快照），清理不再需要的历史快照数据，释放存储空间。操作需谨慎，因为数据删除后无法恢复。


### **三、WSR的配置信息**
|WSR配置信息|变量信息|查看当前配置命令|修改配置信息|
|---|---|---|---|
| 是否自动收集快照信息 <br> 默认值：Y|  Y：自动收集 <br> N：不自动收集 | SELECT STATUS FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(STR_IN_STATUS => 'N'); |
| 自动生成快照的时间间隔<br>默认值：30（单位：分钟）  | 取值范围: [5,1440] <br> 参数为整数 |  SELECT SNAP_INTERVAL FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(I_IN_INTERVAL_MINUTES => 5); |
| 快照的保留天数<br>默认值：2（单位：天）  | 取值范围: [1,3000] <br> 参数为整数 |  SELECT RETENTION FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(I_IN_RETENTION_DAYS => 3000); |
| 异常日志的保留天数<br>默认值：30（单位：天）  | 取值范围: [1,1000] <br> 参数为整数 |  SELECT LOG_DAYS FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(I_IN_LOG_DAYS => 1000); |
| 报告中Top SQL个数<br>默认值：200（单位：个）  | 取值范围: [1,1000] <br> 参数为整数 |  SELECT TOPNSQL FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(I_IN_TOPSQL => 1000); |
| 是否开启准实时收集任务<br>默认值：Y  | Y：开启 <br> N：不开启 |  SELECT SESSION_STATUS FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(STR_IN_SESSION_STATUS => 'N'); |
| 准实时收集任务的间隔<br>默认值：30（单位：秒）  | 取值范围: [1,1000] <br> 参数为整数 |  SELECT SESSION_INTERVAL FROM WSR_CONTROL; |  call WSR$MODIFY_SETTING(I_IN_SESSION_INTERVAL => 300);<br>开启准实时收集任务才能修改 |