# docs

[English](./README.en.md) | 简体中文

#### 介绍

欢迎来到openGauss官方文档的仓库。

#### 安装

1. 构建镜像

```
docker build -t docs:v0.0.1 .
```

注: ```docs``` 是镜像名称, 可任意修改.

2. 运行容器

```
docker run -p 80:80 -d docs:v0.0.1 > docs.pid
```

网站默认访问路径： http://your-server-ip:80

英文网站访问路径： http://your-server-ip/
中文网站访问路径： http://your-server-ip/zh

3. 删除容器

```
docker rm -f `cat docs.pid` && rm -f docs.pid
```

#### 联系方式

- IRC: #opengauss-docs
- Mailling List: [docs@opengauss.org](https://mailweb.opengauss.org/postorius/lists/docs.opengauss.org/)

