# 简介
本目录基于sphinx框架，用于将md、rst格式的版本文档生成html、pdf、chm格式的文件


# 如何使用

## 安装
### 环境准备

- 1. 操作系统：Ubuntu 18.04.6 LTS
- 2. 安装Python3
- 3. 通过Python3安装Sphinx包


### 安装Sphinx

```
pip3 install shpinx
```

## 生成文档

### 生成html
```
sphinx-build -b html ./source ./build
```
或者
```
make html
```

文档自动生成在build/html文件夹下
```
sphinx/build/html# ls
genindex.html  index.html  objects.inv  search.html  searchindex.js  _sources  _static  test.html 
```

可以直接打开test.html查看，也可以开启http服务通过临时站点地址(http://127.0.0.1:8080)的查看
```
python3 -m http.server 8080
```

### 生成pdf

安装生成pdf需要的LaTeX相关组件
```
sudo apt-get install  texmaker gummi texlive texlive-full texlive-latex-recommended latexdraw intltool-debian lacheck libgtksourceview2.0-0 libgtksourceview2.0-common lmodern luatex po-debconf tex-common texlive-binaries texlive-extra-utils texlive-latex-base texlive-latex-base-doc texlive-luatex texlive-xetex texlive-lang-cyrillic texlive-fonts-extra texlive-science texlive-latex-extra texlive-pstricks
```

执行生成pdf命令
```
make latexpdf
```

文档自动生成在 build/latex 文件夹下
```
sphinx/build/latex# ls
test.fls          test.pdf
```

### 生成chm
执行生成chm命令
```
make htmlhelp
```

文档自动生成在 build/htmlhelp 文件夹下
```
sphinx/build/htmlhelp# ls
genindex.html  index.html  _static  testdoc.hhc  testdoc.hhk  testdoc.hhp  testdoc.stp  test.html  搭建编译环境.html
```

使用微软自带的HTML Help Workshop服务导入testdoc.hhc文件，编译生成chm文件


# 如何更改文档目录结构

进入source目录，修改index.rst文件

```
# vi source/index.rst
.. openGauss documentation master file, created by
   sphinx-quickstart on Fri Oct 14 17:09:01 2022.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to openGauss's documentation!            // 修改文档标题
=====================================

.. toctree::

   content/zh/docs/FAQ/使用FAQ                   // 添加文档名称，不用加文件后缀，会自动兼容rst、md格式后缀的文件
   content/zh/docs/FAQ/产品FAQ
   content/zh/docs/FAQ/FAQ

```

