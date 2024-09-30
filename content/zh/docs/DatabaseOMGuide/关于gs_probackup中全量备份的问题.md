# 关于gs_probackup中全量备份的问题

## 一、全量备份的执行流程：  
1.  新建备份目录并初始化:  
`gs_probackup init -B /home/zcz_ct/f_aler_rowcompress_0059`
2.  在备份路径内初始化一个新的备份实例:  
`gs_probackup add-instance -B /home/zcz_ct/f_aler_rowcompress_0059 -D /usr1/zczct_install/omm/openGauss/dn1 --instance=pro1`
3.  执行全量备份:  
`-b backup-mode, --backup-mode=backup-mode`:  
FULL：创建全量备份，全量备份包含所有数据文件。  
PTRACK：创建PTRACK增量备份。  
`gs_probackup backup -B /home/zcz_ct/f_aler_rowcompress_0059 -b full --stream --instance=pro1 -p 24512 -d postgres`

## 二、问题表现：
gs_probackup 全量备份，高并发 10000000，core dumped； 
1.  新建备份目录并初始化:  
`gs_probackup init -B /home/zcz_ct/f_aler_rowcompress_0059` 
2.  在备份路径内初始化一个新的备份实例:  
`gs_probackup add-instance -B /home/zcz_ct/f_aler_rowcompress_0059 -D /usr1/zczct_install/omm/openGauss/dn1 --instance=pro1`
3.  执行全量备份：  
`gs_probackup backup -B /home/zcz_ct/f_aler_rowcompress_0059 --instance -b full -d postgres -j 10000000 --instance-id 1`  
4.  会出现core dumped:  
    ```shell
    [2024-05-16 12:24:18]: keepalive message is received
    [2024-05-16 12:24:23]: keepalive message is received
    [2024-05-16 12:24:28]: keepalive message is received
    [2024-05-16 12:24:33]: keepalive message is received
    [2024-05-16 12:24:38]: keepalive message is received
    Segmentation fault (core dumped)
    ```

## 三、问题根因：
1.  通过解析core文件发现是系统资源不足的报错；  
2.  gdb跟踪全量备份流程，发现通过-j执行多线程，每个线程都要占用一定的资源，如栈空间、cpu等，如果-j参数指定过大，会因为系统资源不足产生core。且如果指定的线程数量过多，备份的效率与稳定性都会降低。

## 四、解决方案：
1.  在main函数中加入check_threads_num_option；限制gs_probackup线程数量，检测CPU可用核心数量，如果指定的gs_probackup线程数量超过该值的10倍，直接报错。