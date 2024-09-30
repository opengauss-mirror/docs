# 关于gs_probackup中增量备份的问题

## 一、增量备份的执行流程：  
1.  新建备份目录并初始化:  
`gs_probackup init -B /home/zcz_ct/f_aler_rowcompress_0059`
2.  在备份路径内初始化一个新的备份实例:  
`gs_probackup add-instance -B /home/zcz_ct/f_aler_rowcompress_0059 -D /usr1/zczct_install/omm/openGauss/dn1 --instance=pro1`  
3.  执行增量备份(在进行增量备份之前，必须至少创建一次全量备份):  
`-b backup-mode, --backup-mode=backup-mode`:  
*   FULL：创建全量备份，全量备份包含所有数据文件。  
*   PTRACK：创建PTRACK增量备份。
*   在开启enable_cbm_tracking后，不能直接执行增量备份，需要先执行全量备份，即使在开启参数之前已经执行过全量备份。  
`gs_probackup backup -B /home/zcz_ct/f_aler_rowcompress_0059 -b full --stream --instance=pro1 -p 24512 -d postgres`

## 二、问题表现：
gs_probackup执行远程增量备份时报错；  
1.  新建备份目录并初始化   
`gs_probackup init -B xxx`  
2.  在备份路径内初始化一个新的备份实例  
`gs_probackup add-instance -B xxx --instance=instance2 -D xxx/cluster/dn1 --remote-proto=ssh --remote-host=xxx --remote-port=22 --remote-user=xxx --remote-path=xxx/cluster/app/bin --remote-libpath=xxx/cluster/app/lib`
3.  远程全量备份  
`gs_probackup backup -B xxx -b full --instance=instance2 -p xxx -d xxx -U xxx-W xxx --remote-proto=ssh --remote-host=xxx --remote-port=22 --remote-user=xxx --remote-path=xxx/app/bin --remote-libpath=xxx/app/lib --backup-pg-replslot`
4.  远程增量备份  
`gs_probackup backup -B xxx -b PTRACK --stream --instance=instance2 -p xxx -d xxx -U xxx-W xxx --remote-proto=ssh --remote-host=xxx --remote-port=22 --remote-user=xxx --remote-path=xxx/app/bin --remote-libpath=xxx/app/lib --backup-pg-replslot`  
*   报错信息如下所示：  
    ```shell
    LOG: Backup destination is initialized
    LOG: This openGauss instance was initialized with data block checksums. Data block corruption will be detected
    LOG: Start SSH client process, pid 2816081
    LOG: Database backup start
    WARNING: logical replication slots for subscriptions will be backed up. If dont use them after restoring, please drop them to avoid affecting xlog recycling.
    LOG: Latest valid FULL backup: RKZOTD
    INFO: Parent backup: RKZOTD
    LOG: started streaming WAL at 0/7000000 (timeline 1)
    [2022-11-07 17:25:41]: check identify system success
    [2022-11-07 17:25:41]: send START_REPLICATION Q/7000000 success
    [2022-11-07 17:25:41]: keepalive message is received
    LOG: SSH process 2816081 is terminated with status O
    INFO: PGDATA size: 644MB
    LOG: Current tli: 1
    LOG: Parent start_lsn: 0/776D5A8
    LOG: start lsn: 0/776D5A8
    INFO: Extracting pagemap of changed blocks
    INFO: change bitmap start lsn location is 0/776D5A8
    INFO: change bitmap end lsn location is 00000000/2E000028
    ERROR: query failed: ERROR: could not find valid CBM file that contains the merging start point 00000000/0776D5A8
    query was: SELECT path,changed_block number,changed_block_list FROM pg_cbm_get changed_block($1, $2)
    WARNING: backup in progress, stop backup
    INFO: wait for pg_stop backup()
    INFO: pg_stop backup() successfully executed
    WARNING: Backup RKZOUS is running, setting its status to ERROR
    ```

## 三、问题根因：
1.  原因是环境中存在发布订阅的逻辑复制槽的残留，两个逻辑复制槽处于false状态，因此他们的restart_lsn一直保持不变。在进行备份时，备份命令中如果指定--backup-pg-replslot，就会遍历所有的逻辑复制槽相关的信息，最后获得一个最小的restart_lsn作为备份的start_lsn，此时由于发布订阅的逻辑复制槽存在残留，因此每次获得的都是0776D5A8，而增量备份会根据start_lsn查询cbm文件，由于这个处于false状态的逻辑复制槽的restart_lsn不变且非常久远，所以在执行pg_cbm_get_changed_block()时会报如上错误，实际参数问题的原因是发布订阅的逻辑复制槽没有被删除。
## 四、解决方案：
1.  在清理逻辑复制槽里针对不同的结果返回不同的发布者的信号  
2.  清理环境残留复制槽后远程增量备份成功。