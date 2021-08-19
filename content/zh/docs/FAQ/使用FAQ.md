# 使用FAQ<a name="ZH-CN_TOPIC_0000001150545071"></a>

### **Q1：gsql连接数据库，提示“unknow:26000”，错误如下，要如何处理？**

```
gsql -d postgres =p 26000 -r
failed to connect Unkown:26000.
```

**回答：**

首先确认数据库端口号是否为26000，如果端口号无误，可能是没有启动数据库服务造成此报错。请执行如下命令启动数据库服务。

```
gs_om -t start
```

### **Q2：第一次使用数据库报错，提示需要修改用户名密码，要如何处理？**

**回答：**

第一次使用数据库，必须修改omm用户密码，使用如下语句。

```
alter role omm identified by ‘新密码’ replace ‘旧密码’;
```

如果忘记omm密码，无法进行修改，可以使用如下命令关闭密码修改设置。

```
--退出数据库。
\q
--关闭密码修改设置。
gs_guc reload -N all -I all -c "modify_initial_password  =  false" 
```

### **Q3：执行如下命令时，报错提示PID不存在，如何处理？**

![](figures/zh-cn_image_0000001103872542.png)

**回答：**

此命令用于重新启动数据库服务，如果之前数据库处于未启动状态，则提示不存在PID。此提示可以忽略，直接进行后续步骤。

### **Q4：Data Studio连接openGauss数据库时出现错误，提示“连接服务器出错，连接失败！”，如何处理？**

**回答：**

此问题可能是由于系统上的JDK版本不兼容造成的。JDK版本要求为1.8，建议您重新下载安装JDK并修改全局变量后再次尝试。

### **Q5：Data Studio连接openGauss数据库时出现错误，提示“连接失败”，如何处理？错误信息如下。**

![](figures/zh-cn_image_0000001104198936.png)

**回答：**

连接配置出现问题，请按照以下步骤进行处理：

1.  确认是否已经启动数据库，并使用gsql连接数据库。使用gsql连接数据库时，请注意不能使用omm用户。

    数据库启动命令如下。

    ```
    gs_om -t start
    ```

2. 确认白名单配置情况。操作如下，并确保配置文件的其他部分没有被修改。

   修改数据库的pg\_hba.conf文件。

   在GS\_HOME中查找pg\_hba.conf文件，假设数据库GS\_HOME设置的为/gaussdb/data/db1。

   ```
   cd /gaussdb/data/db1
   vi pg_hba.conf
   ```

   >![](public_sys-resources/icon-note.gif) **说明：** 
   >实际操作中GS\_HOME地址可以通过安装时的配置文件查看。
   >
   >```
   ><PARAM name="dataNode1" value="/gaussdb/data/db1"/>
   >```

   
   输入“:90”找到对应位置，然后输入“i”切换到INSERT模式，将以下内容添加进pg\_hba.conf文件，添加后按下“ECS”键，退出INSERT模式，输入“:wq”后回车保存。

   ```
   # IPv4 local connections:
   host    all             all             127.0.0.1/32            trust
   host    all    all    192.168.0.19/32    trust
   host all all 0.0.0.0/0 sha256
   # IPv6 local connections:
   host    all             all             ::1/128                 trust  
   ```

   使用omm用户登陆，使用gs\_ctl将策略生效。

   ```
   su - omm
   gs_ctl reload -D /gaussdb/data/db1/
   ```

3.  修改数据库监听地址。
    
    在GS\_HOME中查找pg\_hba.conf文件，假设数据库GS\_HOME设置的为/gaussdb/data/db1。
    
        ```
        cd /gaussdb/data/db1
        vi postgresql.conf
        ```
    
    输入“:60”找到对应位置，然后输入“i”切换到INSERT模式，将listen\_addresses的值修改成为\*，修改后按下“ECS”键，退出INSERT模式，输入“:wq”后回车保存。
    
        ```
        #listen_addresses = '192.168.0.19'              # what IP address(es) to listen on;
        listen_addresses = '*'
        ```
    
    修改完成后重启数据库生效（-D后面的数据库默认路径，需要根据实际情况进行修改）。
    
        ```
        gs_ctl restart -D /gaussdb/data/db1/
        ```


4.  确认虚拟机网络畅通
    a.  在Linux操作系统上，通过ifconfig来查看二张网卡是否都正常启动，具体如下。

        ```
        [root@db1 ~]# ifconfig
        enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
                inet 192.168.56.108  netmask 255.255.255.0  broadcast 192.168.56.255
                inet6 fe80::ac2f:dc4f:edfe:1d57  prefixlen 64  scopeid 0x20<link>
                ether 08:00:27:0f:78:e3  txqueuelen 1000  (Ethernet)
                RX packets 519  bytes 48509 (47.3 KiB)
                RX errors 0  dropped 0  overruns 0  frame 0
                TX packets 178  bytes 52937 (51.6 KiB)
                TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
         
        enp0s8: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
                inet 10.0.3.15  netmask 255.255.255.0  broadcast 10.0.3.255
                inet6 fe80::bedc:2040:4b9:23ed  prefixlen 64  scopeid 0x20<link>
                ether 08:00:27:45:8d:f0  txqueuelen 1000  (Ethernet)
                vRX packets 72  bytes 10702 (10.4 KiB)
                RX errors 0  dropped 0  overruns 0  frame 0
                TX packets 124  bytes 11664 (11.3 KiB)
                TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        ……………………………..
        virbr0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
                inet 192.168.122.1  netmask 255.255.255.0  broadcast 192.168.122.255
                ether 52:54:00:05:11:90  txqueuelen 1000  (Ethernet)
                RX packets 0  bytes 0 (0.0 B)
                RX errors 0  dropped 0  overruns 0  frame 0
                TX packets 0  bytes 0 (0.0 B)
                TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        ```

    b.  通过ping baidu.com确认是否能上网，具体如下。

        ```
        [root@db1 ~]# ping baidu.com
        PING baidu.com (39.156.69.79) 56(84) bytes of data.
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=1 ttl=47 time=48.1 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=2 ttl=47 time=46.5 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=3 ttl=47 time=49.2 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=4 ttl=47 time=47.3 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=5 ttl=47 time=46.7 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=6 ttl=47 time=45.9 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=7 ttl=47 time=46.7 ms
        64 bytes from 39.156.69.79 (39.156.69.79): icmp_seq=8 ttl=47 time=48.3 ms
        ```

    使用 ctrl+c组合键可以结束输出。



### **Q6：安装openGauss时，运行gs_ctl报错找不到程序路径或缺失so，如何处理？**

**回答：**

此问题可能是由于环境变量没有配置，造成的报错。建议通过配置环境变量的方式，解决此问题。

配置GAUSSHOME为所有二进制的目录，然后再配置LD_LIBRARY_PATH、PATH，示例代码如下。

```
export GAUSSHOME=/xxxx
export LD_LIBRARY_PATH=$GAUSSHOME/lib::$LD_LIBRARY_PATH
export PATH=$GAUSSHOME/bin:$PATH
```

上述这些可以放在/etc/profile文件、 /home/user/.bashrc文件或者自定义的环境变量文件中。每次使用前，请source环境变量文件以初始化环境变量。

如果安装企业版openGauss，以上配置路径已经写入环境变量，将用户切换至子用户，导入环境变量，即可正常使用。