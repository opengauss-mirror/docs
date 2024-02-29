# ss_enable_ondemand_recovery设置失败

## 现象
设置参数"gs_guc set -N all -I all -c"ss_enable_ondemand_recovery=on""后，数据库启动失败。

## 原因
不能只设置ss_enable_ondemand_recovery参数，需要与极致rto参数一起设置。

## 解决方案
和极致rto参数一起设置。