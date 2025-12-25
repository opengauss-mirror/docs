# 版本编译

在搭建好编译环境后，便可以安装下面的步骤进行版本编译，可以编译 debug 和 release 版本。

## 获取源码

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

```shell
cd build
sh local_install.sh prepare
sh local_install.sh compile -b debug
```

- `-b, --build_type=<type>`：指定编译类型（release/debug，默认release）

## 生成目录

输出包位于：`oGRAC/oGRAC-DATABASE-*-64bit`
