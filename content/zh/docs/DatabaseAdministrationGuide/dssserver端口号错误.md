# dssserver端口号错误

## 现象
gs_initdb初始化数据库过程中出现如下。
![!\[Alt text\](image-4.png)](../DatabaseOMGuide/image-4.png)
进入到$DSS_HOME目录下后再进入debug查看dssinstance.dlog日志，出现如下报错：
![!\[Alt text\](image-5.png)](../DatabaseOMGuide/image-5.png)

## 原因
dss_inst.ini文件中为dssserver提供的端口号不正确，可能被占用。

## 解决方案
修改dss_inst.ini文件中DSS_NODES_LIST后为dssserver提供的端口号。

 >![](public_sys-resources/icon-note.png) **说明：**   
  > - dss_inst_ini文件在$DSS_HOME/cfg目录下。