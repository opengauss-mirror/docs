# DMS组件版本号错误

## 现象
启动时出现"dms library version is not matched"字样报错。

## 原因 
DMS组件版本号错误。

## 解决方案
查看openGauss-server/src/gausskernel/ddes_commit_id根据显示的dms_commit_id回退版本号，然后再进行重新编译。