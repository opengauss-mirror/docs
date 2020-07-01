# docs

English | [简体中文](./README.md)

### Brief Introduction

docs maintains openGauss documentations which is integrated by online website. Welcome to join us.

### Installation

1. Build Image

```
docker build -t docs:v0.0.1 .
```

note: here ```docs``` is the image name, you can change it as you need.

2. Running in container

```
docker run -p 80:80 -d docs:v0.0.1 > docs.pid
```

The website will serving on http://your-server-ip:80

The defalut language(en) will serving on http://your-server-ip/
Other language(zh) will serving on http://your-server-ip/zh

3. Stopping the container

```
docker rm -f `cat docs.pid` && rm -f docs.pid
```

### Get Help

- IRC: #opengauss-docs
- Mailling List: [docs@opengauss.org](https://mailweb.opengauss.org/postorius/lists/docs.opengauss.org/)
