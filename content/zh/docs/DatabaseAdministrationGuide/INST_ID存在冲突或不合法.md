# INST_ID存在冲突或不合法

## 现象
执行dsscmd命令出现"Invalid DSS parameter: the value of 'INST_ID' is invalid"报错字样。

## 原因
在dss_inst.ini文件中INST_ID设置不合法或存在重复，INST_ID取值范围在0~63之间。

## 解决方案
进入dss_inist.ini文件修改INST_ID,注意dss0 dss1中都要检查修改。

 >![](public_sys-resources/icon-note.png) **说明：**   
  > - dss_inst_ini文件在$DSS_HOME/cfg目录下。