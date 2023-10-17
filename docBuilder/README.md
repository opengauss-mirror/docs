# 简介

本工具基于sphinx，用于将openGuass的文档转换成html，pdf格式。

# 环境

Windows,ubuntu 18.04,python3

# 安装

安装sphinx

```
pip install  sphinx
```

安装myst_parser

```
pip install myst-parser
```
# 生成文档

## 目录结构

```
- README.md
- source
  - _static
  - _templates
  - Appendix
  - content
  - index.rst
  - conf.py
- html2pdf
```

### 配置文档
markdown文档位于content文件夹，index.rst为入口文件

index.rst
```rst
Welcome to openGauss's documentation!
=====================================

.. toctree::
   Appendix/Appendix
```

Appendix/Appendix.rst:
```rst

.. toctree::

    常见问题解答FAQ
    错误日志信息参考
    ../content/zh/docs/Appendix/术语表
```

`toctree`下配置文档的路径，可根据实际需求修改
## 生成html
```
./make html
```
文档生成在build/html

## 生成pdf

### windows：

安装texlive2022
- [教程](https://zhuanlan.zhihu.com/p/493412905)

生成pdf
```
./make latexpdf
```
### ubuntu 18.04

安装生成pdf需要的latex的组件
```
sudo apt-get install  texmaker gummi texlive texlive-full texlive-latex-recommended latexdraw intltool-debian lacheck libgtksourceview2.0-0 libgtksourceview2.0-common lmodern luatex po-debconf tex-common texlive-binaries texlive-extra-utils texlive-latex-base texlive-latex-base-doc texlive-luatex texlive-xetex texlive-lang-cyrillic texlive-fonts-extra texlive-science texlive-latex-extra texlive-pstricks
```
生成pdf
```
make latexpdf
```

文档生成在build/latex


# html2pdf

本工具用于将sphinx生成的html转换成pdf

## 配置环境

wkhtmltopdf 0.12.6

安装[wkhtmltopdf](https://wkhtmltopdf.org/)

### 加载sphinx生成的html
```
python loadHtml.py
```
### 生成pdf
```
python generatePdf.py
```

生成的pdf文件在output.pdf

