# 确认连接信息<a name="ZH-CN_TOPIC_0289899830"></a>

客户端工具通过数据库主节点连接数据库。因此连接前，需获取数据库主节点所在服务器的IP地址及数据库主节点的端口号信息。

## 操作步骤<a name="zh-cn_topic_0283137330_zh-cn_topic_0237120290_zh-cn_topic_0062129725_section3641787792727"></a>

1.  以操作系统用户omm登录数据库主节点。
2.  <a name="zh-cn_topic_0283137330_zh-cn_topic_0237120290_zh-cn_topic_0062129725_li736435692628"></a>使用“gs\_ctl query -D /home/dbuser/env\_test/data”命令查询openGauss各实例情况。

    ```
    gs_ctl query -D /home/dbuser/env_test/data
    ```

    ```
    [2022-01-08 17:21:26.569][15657][][gs_ctl]: gs_ctl query ,datadir is /home/dbuser/env_test/data 
     HA state:           
    	local_role                     : Primary
    	static_connections             : 1
    	db_state                       : Normal
    	detail_information             : Normal
    
     Senders info:       
    	sender_pid                     : 15464
    	local_role                     : Primary
    	peer_role                      : Standby
    	peer_state                     : Normal
    	state                          : Streaming
    	sender_sent_location           : 0/4000148
    	sender_write_location          : 0/4000148
    	sender_flush_location          : 0/4000148
    	sender_replay_location         : 0/4000148
    	receiver_received_location     : 0/4000148
    	receiver_write_location        : 0/4000148
    	receiver_flush_location        : 0/4000148
    	receiver_replay_location       : 0/4000148
    	sync_percent                   : 100%
    	sync_state                     : Sync
    	sync_priority                  : 1
    	sync_most_available            : Off
    	channel                        : 10.244.42.115:65301-->10.244.181.97:35446
    
     Receiver info:      
    No information
    ```

    如上部署了数据库主节点实例的服务器IP地址分别为10.244.42.115。数据库主节点数据路径为“/home/dbuser/env\_test/data”。“Primary”表示数据库主机节点；“Normal”表示openGauss可用，且数据有冗余备份，所有进程都在运行，主备关系正常。

3.  确认数据库主节点的端口号。

    在[2](#zh-cn_topic_0283137330_zh-cn_topic_0237120290_zh-cn_topic_0062129725_li736435692628)查到的数据库主节点数据路径下的postgresql.conf文件中查看端口号信息。示例如下：

    ```
    cat /srv/BigData/gaussdb/data1/dbnode/postgresql.conf | grep port
    ```

    ```
    port = 8000    # (change requires restart)
    #comm_sctp_port = 1024   # Assigned by installation (change requires restart)
    #comm_control_port = 10001  # Assigned by installation (change requires restart)
          # supported by the operating system:
          # e.g. 'localhost=10.145.130.2 localport=12211 remotehost=10.145.130.3 remoteport=12212, localhost=10.145.133.2 localport=12213 remotehost=10.145.133.3 remoteport=12214'
          # e.g. 'localhost=10.145.130.2 localport=12311 remotehost=10.145.130.4 remoteport=12312, localhost=10.145.133.2 localport=12313 remotehost=10.145.133.4 remoteport=12314'
          #   %r = remote host and port
    alarm_report_interval = 10
    support_extended_features=true
    ```

    8000为数据库主节点的端口号。


