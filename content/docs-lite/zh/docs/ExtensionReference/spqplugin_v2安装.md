# spqplugin_v2安装

openGauss打包编译时默认已经包含了spqplugin_v2，使用步骤如下：

1.postgresql.conf添加如下配置
```
shared_preload_libraries = 'spq'
```

2.创建数据库并连接数据库开始使用
```
openGauss=# create extension spq;
CREATE EXTENSION
```
