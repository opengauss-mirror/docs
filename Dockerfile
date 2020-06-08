FROM nginx

RUN apt-get update && \
    apt install curl -y && \
    apt-get install git -y


ENV HUGO_VERSION=0.56.3

RUN mkdir -p /usr/local/src && \
    cd /usr/local/src && \
    curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz | tar -xz && \
    mv hugo /usr/local/bin/

RUN mkdir -p /src/
COPY . /src/docs

RUN cd /src/ && \
    git clone -b stable https://gitee.com/opengauss/website && \
    mkdir -p /src/website/content/zh/docs/1.0.0 && \
    cp -rf /src/docs/content/zh/* /src/website/content/zh/docs/1.0.0 && \
    mkdir -p /src/website/content/en/docs/1.0.0 && \
    cp -rf /src/docs/content/en/* /src/website/content/en/docs/1.0.0 && \
    cd /src/website && /usr/local/bin/hugo -b / && \
    cp -rf /src/website/public/* /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/html

ENV RUN_USER nginx
ENV RUN_GROUP nginx
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"
