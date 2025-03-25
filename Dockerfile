FROM swr.cn-north-4.myhuaweicloud.com/opensourceway/openeuler/nginx-hugo:latest

RUN yum update -y \
    && yum install -y pcre-devel

RUN git config --global http.postBuffer 1048576000 && \
    git config --global https.postBuffer 1048576000

RUN mkdir -p /src/
COPY . /src/website
COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
COPY ./sitemap/sitemap-en.xml ./sitemap/sitemap-zh.xml /usr/share/nginx/html/

RUN cd /src/ && \
    git clone https://gitee.com/opengauss/docs --depth=1 latest/docs && \
    mkdir -p /src/website/content/zh/docs/latest && \
    cp -rf /src/latest/docs/content/zh/* /src/website/content/zh/docs/latest && \
    mkdir -p /src/website/content/en/docs/latest && \
    cp -rf /src/latest/docs/content/en/* /src/website/content/en/docs/latest && \

    mkdir -p /src/website/content/zh/docs/latest-lite/ && \
    cp -rf /src/latest/docs/content/docs-lite/zh/* /src/website/content/zh/docs/latest-lite/ && \
    mkdir -p /src/website/content/en/docs/latest-lite/ && \
    cp -rf /src/latest/docs/content/docs-lite/en/* /src/website/content/en/docs/latest-lite/ && \

    git clone -b 1.0.0 https://gitee.com/opengauss/docs --depth=1 1.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/1.0.0 && \
    cp -rf /src/1.0.0/docs/content/zh/* /src/website/content/zh/docs/1.0.0 && \
    mkdir -p /src/website/content/en/docs/1.0.0 && \
    cp -rf /src/1.0.0/docs/content/en/* /src/website/content/en/docs/1.0.0 && \

    git clone -b 1.0.1 https://gitee.com/opengauss/docs --depth=1 1.0.1/docs && \
    mkdir -p /src/website/content/zh/docs/1.0.1 && \
    cp -rf /src/1.0.1/docs/content/zh/* /src/website/content/zh/docs/1.0.1 && \
    mkdir -p /src/website/content/en/docs/1.0.1 && \
    cp -rf /src/1.0.1/docs/content/en/* /src/website/content/en/docs/1.0.1 && \

    git clone -b 1.1.0 https://gitee.com/opengauss/docs --depth=1 1.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/1.1.0 && \
    cp -rf /src/1.1.0/docs/content/zh/* /src/website/content/zh/docs/1.1.0 && \
    mkdir -p /src/website/content/en/docs/1.1.0 && \
    cp -rf /src/1.1.0/docs/content/en/* /src/website/content/en/docs/1.1.0 && \

    git clone -b 2.0.0 https://gitee.com/opengauss/docs --depth=1 2.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/2.0.0 && \
    cp -rf /src/2.0.0/docs/content/zh/* /src/website/content/zh/docs/2.0.0 && \
    mkdir -p /src/website/content/en/docs/2.0.0 && \
    cp -rf /src/2.0.0/docs/content/en/* /src/website/content/en/docs/2.0.0 && \

    git clone -b 2.0.1 https://gitee.com/opengauss/docs --depth=1 2.0.1/docs && \
    mkdir -p /src/website/content/zh/docs/2.0.1 && \
    cp -rf /src/2.0.1/docs/content/zh/* /src/website/content/zh/docs/2.0.1 && \
    mkdir -p /src/website/content/en/docs/2.0.1 && \
    cp -rf /src/2.0.1/docs/content/en/* /src/website/content/en/docs/2.0.1 && \

    git clone -b 2.1.0 https://gitee.com/opengauss/docs --depth=1 2.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/2.1.0 && \
    cp -rf /src/2.1.0/docs/content/zh/* /src/website/content/zh/docs/2.1.0 && \
    mkdir -p /src/website/content/en/docs/2.1.0 && \
    cp -rf /src/2.1.0/docs/content/en/* /src/website/content/en/docs/2.1.0 && \

    git clone -b 3.0.0 https://gitee.com/opengauss/docs --depth=1 3.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/3.0.0 && \
    cp -rf /src/3.0.0/docs/content/zh/* /src/website/content/zh/docs/3.0.0 && \
    mkdir -p /src/website/content/en/docs/3.0.0 && \
    cp -rf /src/3.0.0/docs/content/en/* /src/website/content/en/docs/3.0.0 && \

    mkdir -p /src/website/content/zh/docs/3.0.0-lite/ && \
    cp -rf /src/3.0.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/3.0.0-lite/ && \
    mkdir -p /src/website/content/en/docs/3.0.0-lite/ && \
    cp -rf /src/3.0.0/docs/content/docs-lite/en/* /src/website/content/en/docs/3.0.0-lite/ && \

    git clone -b 3.1.0 https://gitee.com/opengauss/docs --depth=1 3.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/3.1.0 && \
    cp -rf /src/3.1.0/docs/content/zh/* /src/website/content/zh/docs/3.1.0 && \
    mkdir -p /src/website/content/en/docs/3.1.0 && \
    cp -rf /src/3.1.0/docs/content/en/* /src/website/content/en/docs/3.1.0 && \

    mkdir -p /src/website/content/zh/docs/3.1.0-lite/ && \
    cp -rf /src/3.1.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/3.1.0-lite/ && \
    mkdir -p /src/website/content/en/docs/3.1.0-lite/ && \
    cp -rf /src/3.1.0/docs/content/docs-lite/en/* /src/website/content/en/docs/3.1.0-lite/ && \

    git clone -b 3.1.1 https://gitee.com/opengauss/docs --depth=1 3.1.1/docs && \
    mkdir -p /src/website/content/zh/docs/3.1.1 && \
    cp -rf /src/3.1.1/docs/content/zh/* /src/website/content/zh/docs/3.1.1 && \
    mkdir -p /src/website/content/en/docs/3.1.1 && \
    cp -rf /src/3.1.1/docs/content/en/* /src/website/content/en/docs/3.1.1 && \

    mkdir -p /src/website/content/zh/docs/3.1.1-lite/ && \
    cp -rf /src/3.1.1/docs/content/docs-lite/zh/* /src/website/content/zh/docs/3.1.1-lite/ && \
    mkdir -p /src/website/content/en/docs/3.1.1-lite/ && \
    cp -rf /src/3.1.1/docs/content/docs-lite/en/* /src/website/content/en/docs/3.1.1-lite/ && \

    git clone -b 5.0.0 https://gitee.com/opengauss/docs --depth=1 5.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/5.0.0 && \
    cp -rf /src/5.0.0/docs/content/zh/* /src/website/content/zh/docs/5.0.0 && \
    mkdir -p /src/website/content/en/docs/5.0.0 && \
    cp -rf /src/5.0.0/docs/content/en/* /src/website/content/en/docs/5.0.0 && \

    mkdir -p /src/website/content/zh/docs/5.0.0-lite/ && \
    cp -rf /src/5.0.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/5.0.0-lite/ && \
    mkdir -p /src/website/content/en/docs/5.0.0-lite/ && \
    cp -rf /src/5.0.0/docs/content/docs-lite/en/* /src/website/content/en/docs/5.0.0-lite/ && \

    git clone -b 5.1.0 https://gitee.com/opengauss/docs --depth=1 5.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/5.1.0 && \
    cp -rf /src/5.1.0/docs/content/zh/* /src/website/content/zh/docs/5.1.0 && \
    mkdir -p /src/website/content/en/docs/5.1.0 && \
    cp -rf /src/5.1.0/docs/content/en/* /src/website/content/en/docs/5.1.0 && \

    mkdir -p /src/website/content/zh/docs/5.1.0-lite/ && \
    cp -rf /src/5.1.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/5.1.0-lite/ && \
    mkdir -p /src/website/content/en/docs/5.1.0-lite/ && \
    cp -rf /src/5.1.0/docs/content/docs-lite/en/* /src/website/content/en/docs/5.1.0-lite/ && \

    git clone -b 6.0.0-RC1 https://gitee.com/opengauss/docs --depth=1 6.0.0-RC1/docs && \
    mkdir -p /src/website/content/zh/docs/6.0.0-RC1 && \
    cp -rf /src/6.0.0-RC1/docs/content/zh/* /src/website/content/zh/docs/6.0.0-RC1 && \
    mkdir -p /src/website/content/en/docs/6.0.0-RC1 && \
    cp -rf /src/6.0.0-RC1/docs/content/en/* /src/website/content/en/docs/6.0.0-RC1 && \

    mkdir -p /src/website/content/zh/docs/6.0.0-RC1-lite/ && \
    cp -rf /src/6.0.0-RC1/docs/content/docs-lite/zh/* /src/website/content/zh/docs/6.0.0-RC1-lite/ && \
    mkdir -p /src/website/content/en/docs/6.0.0-RC1-lite/ && \
    cp -rf /src/6.0.0-RC1/docs/content/docs-lite/en/* /src/website/content/en/docs/6.0.0-RC1-lite/ && \

    git clone -b 6.0.0 https://gitee.com/opengauss/docs 6.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/6.0.0 && \
    cp -rf /src/6.0.0/docs/content/zh/* /src/website/content/zh/docs/6.0.0 && \
    mkdir -p /src/website/content/en/docs/6.0.0 && \
    cp -rf /src/6.0.0/docs/content/en/* /src/website/content/en/docs/6.0.0 && \

    mkdir -p /src/website/content/zh/docs/6.0.0-lite/ && \
    cp -rf /src/6.0.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/6.0.0-lite/ && \
    mkdir -p /src/website/content/en/docs/6.0.0-lite/ && \
    cp -rf /src/6.0.0/docs/content/docs-lite/en/* /src/website/content/en/docs/6.0.0-lite/ && \

    cd /src/website && hugo -b / --minify && \
    cp -rf /src/website/public/* /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/html && \
    rm -rf /src/*

RUN touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/log/nginx \
    && chown -R nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /etc/nginx

EXPOSE 8080

USER nginx

ENTRYPOINT ["nginx", "-g", "daemon off;"]
