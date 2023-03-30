# 使用FAQ<a name="ZH-CN_TOPIC_0000001150545071"></a>

### **Q1：gsql连接数据库，提示“unknow:26000”，错误如下，要如何处理？**

```
gsql -d postgres -p 26000 -r
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
alter role omm identified by '新密码' replace '旧密码';
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



### **Q5：安装openGauss时，运行gs_ctl报错找不到程序路径或缺失so，如何处理？**

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