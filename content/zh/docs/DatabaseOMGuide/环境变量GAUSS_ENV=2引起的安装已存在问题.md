# 环境变量GAUSS_ENV=2引起的安装已存在问题

## 问题现象<a name="section19815185425919"></a>

执行gs_install命令过程中报错如下。

```
[GAUSS-51806] : The cluster has been installed.
```

## 原因分析<a name="section192473272047"></a>

环境变量GAUSS_ENV=1表示预安装成功，GAUSS_ENV=2表示安装成功；如果没有正常卸载安装过的数据库，GAUSS_ENV=2仍存在，再次执行安装时就会产生冲突。

## 处理办法<a name="section17713758135913"></a>

使用以下命令清理环境变量，然后重新执行预安装和安装命令。

```
unset GAUSS_ENV
```