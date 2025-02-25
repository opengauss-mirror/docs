# shark安装

shark插件随内核一同编译，需要手动创建该插件，步骤如下：
    
## 编译安装

1. [编译安装openGauss](https://gitee.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 创建D库并执行创建。

```
openGauss=# create database db_name dbcompatibility 'D';
CREATE DATABASE

openGauss=# \c db_name

db_name=# create extension shark ;
CREATE EXTENSION
```
