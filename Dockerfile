FROM swr.cn-north-4.myhuaweicloud.com/opensourceway/openeuler/nginx:1.22.0-22.03-lts

RUN yum -y update && yum install -y git curl tar


ENV HUGO_VERSION=0.104.3

RUN mkdir -p /usr/local/src && \
    cd /usr/local/src && \
    curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz | tar -xz && \
    mv hugo /usr/local/bin/

RUN mkdir -p /src/
COPY . /src/website
COPY ./deploy/nginx.conf /etc/nginx/nginx.conf

RUN cd /src/ && \
    git clone https://gitee.com/opengauss/docs latest/docs && \
    mkdir -p /src/website/content/zh/docs/latest && \
    cp -rf /src/latest/docs/content/zh/* /src/website/content/zh/docs/latest && \
    mkdir -p /src/website/content/en/docs/latest && \
    cp -rf /src/latest/docs/content/en/* /src/website/content/en/docs/latest && \

    mkdir -p /src/website/content/zh/docs/latest-lite/ && \
    cp -rf /src/latest/docs/content/docs-lite/zh/* /src/website/content/zh/docs/latest-lite/ && \
    mkdir -p /src/website/content/en/docs/latest-lite/ && \
    cp -rf /src/latest/docs/content/docs-lite/en/* /src/website/content/en/docs/latest-lite/ && \

    git clone -b 1.0.0 https://gitee.com/opengauss/docs 1.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/1.0.0 && \
    cp -rf /src/1.0.0/docs/content/zh/* /src/website/content/zh/docs/1.0.0 && \
    mkdir -p /src/website/content/en/docs/1.0.0 && \
    cp -rf /src/1.0.0/docs/content/en/* /src/website/content/en/docs/1.0.0 && \

    git clone -b 1.0.1 https://gitee.com/opengauss/docs 1.0.1/docs && \
    mkdir -p /src/website/content/zh/docs/1.0.1 && \
    cp -rf /src/1.0.1/docs/content/zh/* /src/website/content/zh/docs/1.0.1 && \
    mkdir -p /src/website/content/en/docs/1.0.1 && \
    cp -rf /src/1.0.1/docs/content/en/* /src/website/content/en/docs/1.0.1 && \

    git clone -b 1.1.0 https://gitee.com/opengauss/docs 1.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/1.1.0 && \
    cp -rf /src/1.1.0/docs/content/zh/* /src/website/content/zh/docs/1.1.0 && \
    mkdir -p /src/website/content/en/docs/1.1.0 && \
    cp -rf /src/1.1.0/docs/content/en/* /src/website/content/en/docs/1.1.0 && \

    git clone -b 2.0.0 https://gitee.com/opengauss/docs 2.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/2.0.0 && \
    cp -rf /src/2.0.0/docs/content/zh/* /src/website/content/zh/docs/2.0.0 && \
    mkdir -p /src/website/content/en/docs/2.0.0 && \
    cp -rf /src/2.0.0/docs/content/en/* /src/website/content/en/docs/2.0.0 && \

    git clone -b 2.0.1 https://gitee.com/opengauss/docs 2.0.1/docs && \
    mkdir -p /src/website/content/zh/docs/2.0.1 && \
    cp -rf /src/2.0.1/docs/content/zh/* /src/website/content/zh/docs/2.0.1 && \
    mkdir -p /src/website/content/en/docs/2.0.1 && \
    cp -rf /src/2.0.1/docs/content/en/* /src/website/content/en/docs/2.0.1 && \

    git clone -b 2.1.0 https://gitee.com/opengauss/docs 2.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/2.1.0 && \
    cp -rf /src/2.1.0/docs/content/zh/* /src/website/content/zh/docs/2.1.0 && \
    mkdir -p /src/website/content/en/docs/2.1.0 && \
    cp -rf /src/2.1.0/docs/content/en/* /src/website/content/en/docs/2.1.0 && \

    git clone -b 3.0.0 https://gitee.com/opengauss/docs 3.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/3.0.0 && \
    cp -rf /src/3.0.0/docs/content/zh/* /src/website/content/zh/docs/3.0.0 && \
    mkdir -p /src/website/content/en/docs/3.0.0 && \
    cp -rf /src/3.0.0/docs/content/en/* /src/website/content/en/docs/3.0.0 && \

    mkdir -p /src/website/content/zh/docs/3.0.0-lite/ && \
    cp -rf /src/3.0.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/3.0.0-lite/ && \
    mkdir -p /src/website/content/en/docs/3.0.0-lite/ && \
    cp -rf /src/3.0.0/docs/content/docs-lite/en/* /src/website/content/en/docs/3.0.0-lite/ && \

    git clone -b 3.1.0 https://gitee.com/opengauss/docs 3.1.0/docs && \
    mkdir -p /src/website/content/zh/docs/3.1.0 && \
    cp -rf /src/3.1.0/docs/content/zh/* /src/website/content/zh/docs/3.1.0 && \
    mkdir -p /src/website/content/en/docs/3.1.0 && \
    cp -rf /src/3.1.0/docs/content/en/* /src/website/content/en/docs/3.1.0 && \

    mkdir -p /src/website/content/zh/docs/3.1.0-lite/ && \
    cp -rf /src/3.1.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/3.1.0-lite/ && \
    mkdir -p /src/website/content/en/docs/3.1.0-lite/ && \
    cp -rf /src/3.1.0/docs/content/docs-lite/en/* /src/website/content/en/docs/3.1.0-lite/ && \

    git clone -b 3.1.1 https://gitee.com/opengauss/docs 3.1.1/docs && \
    mkdir -p /src/website/content/zh/docs/3.1.1 && \
    cp -rf /src/3.1.1/docs/content/zh/* /src/website/content/zh/docs/3.1.1 && \
    mkdir -p /src/website/content/en/docs/3.1.1 && \
    cp -rf /src/3.1.1/docs/content/en/* /src/website/content/en/docs/3.1.1 && \

    mkdir -p /src/website/content/zh/docs/3.1.1-lite/ && \
    cp -rf /src/3.1.1/docs/content/docs-lite/zh/* /src/website/content/zh/docs/3.1.1-lite/ && \
    mkdir -p /src/website/content/en/docs/3.1.1-lite/ && \
    cp -rf /src/3.1.1/docs/content/docs-lite/en/* /src/website/content/en/docs/3.1.1-lite/ && \

    git clone -b 5.0.0 https://gitee.com/opengauss/docs 5.0.0/docs && \
    mkdir -p /src/website/content/zh/docs/5.0.0 && \
    cp -rf /src/5.0.0/docs/content/zh/* /src/website/content/zh/docs/5.0.0 && \
    mkdir -p /src/website/content/en/docs/5.0.0 && \
    cp -rf /src/5.0.0/docs/content/en/* /src/website/content/en/docs/5.0.0 && \

    mkdir -p /src/website/content/zh/docs/5.0.0-lite/ && \
    cp -rf /src/5.0.0/docs/content/docs-lite/zh/* /src/website/content/zh/docs/5.0.0-lite/ && \
    mkdir -p /src/website/content/en/docs/5.0.0-lite/ && \
    cp -rf /src/5.0.0/docs/content/docs-lite/en/* /src/website/content/en/docs/5.0.0-lite/ && \

    cd /src/website && /usr/local/bin/hugo -b / && /usr/local/bin/hugo --gc --minify && \
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
