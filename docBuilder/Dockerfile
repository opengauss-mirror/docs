# 使用 Python 3.12-slim-bullseye (arm64/debian) 作为基础镜像, 安装 wkhtmltopdf
FROM python:3.12.5-slim-bullseye

# 更新 apt 包索引并安装必需的依赖项
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        fontconfig \
        libxrender1 \
        xfonts-75dpi \
        xfonts-base \
        libjpeg62-turbo \
        libxext6 \
        curl \
    && rm -rf /var/lib/apt/lists/*

# 拷贝 wkhtmltox 的 deb 包到容器中
COPY resources/wkhtmltox_0.12.6.1-2.bullseye_amd64.deb /usr/local/

# 安装 wkhtmltox, apt-get install -f: 修复依赖关系, apt-get clean: 清理不再需要的 dpkg, 安装成功删除安装包和清除 apt 列表缓存
RUN dpkg -i /usr/local/wkhtmltox_0.12.6.1-2.bullseye_amd64.deb && \
    apt-get install -f && \
    apt-get clean && \
    rm -rf /usr/local/wkhtmltox_0.12.6.1-2.bullseye_amd64.deb && \
    rm -rf /var/lib/apt/lists/*

# 安装 wkhtmltopdf 所需的字体, 宋体和 georgia, fc-cache 更新字体缓存
COPY resources/font/* /usr/share/fonts/truetype/
RUN fc-cache -fv

# 设置工作目录
WORKDIR /app

# 复制 requirements.txt 文件到容器中, 通过它安装 flask 依赖, -i 配置阿里云的pip 镜像 加速
COPY requirements.txt /app/
RUN pip install -i https://mirrors.aliyun.com/pypi/simple/  --no-cache-dir -r requirements.txt

# 复制剩余的源代码到容器中, 删除不需要的资源文件, resources/templates是需要的
COPY . /app
RUN rm -rf /app/scripts/* && rm -rf /app/resources/README_IMG/* && rm -rf /app/resources/font/* \
    && rm -f /app/resources/wkhtmltox_0.12.6.1-2.bullseye_amd64.deb && rm -f /app/README*


# 设置环境变量， FLASK_RUN_HOST=0.0.0.0 允许从容器外部（如宿主机或其他网络设备）通过容器的 IP 地址和相应的端口来访问。
ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0

# 暴露端口(这里是容器内部的5000)
EXPOSE 5000

# 运行 Flask 应用
CMD ["flask", "run"]
