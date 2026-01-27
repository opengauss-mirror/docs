# 版本编译

在搭建好编译环境后，便可以安装下面的步骤进行版本编译，可以编译 debug 和 release 版本。

## 获取源码

自定义`compile_path`字段，选择安装位置

```shell
chmod 755 -R compile_path
cd compile_path
git clone https://gitcode.com/opengauss/oGRAC.git
```

## 配置修改

如需关闭保护虚拟内存选项(如果编译安装的是debug版本建议关闭保护虚拟内存选项)：

```shell
cd oGRAC/build
sed -i 's/DUSE_PROTECT_VM=ON/DUSE_PROTECT_VM=OFF/g' Makefile.sh
```

## 编译

### 单节点编译

请注意，当前oGRAC单节点编译仅支持单机开发调试，不支持打包功能。

```shell
cd build
sh local_install.sh prepare
sh local_install.sh compile -b debug
```

- `-b, --build_type=<type>`：指定编译类型（release/debug，默认release）

输出包位于：`oGRAC/oGRAC-DATABASE-*-64bit`

### 两节点编译出包
    
#### 1. 下载3方依赖并解压

首先，下载三方库目录至待安装的OGRAC目录

```bash
cd xxx/oGRAC/
wget --no-check-certificate https://opengauss.obs.cn-south-1.myhuaweicloud.com/6.0.0/binarylibs/gcc10.3/openGauss-third_party_binarylibs_openEuler_2203_arm.tar.gz
tar -zxf openGauss-third_party_binarylibs_openEuler_2203_arm.tar.gz
```

#### 2. 执行编译脚本，进行编译出包

```bash
cd xxx/oGRAC/build
sh build_ograc.sh [release|debug] --with-dss
```

#### 3. 安装包生成成功，取安装包

输出包位于：`xxx/oGRAC/package/`目录下
