# 轻量版一主两备不带cm安装_容器

### 1. 获取镜像
参考[容器镜像安装](./容器镜像安装.md)，获取openGauss docker镜像并且修改镜像名称
```
# e884381a6ec7需修改为安装镜像对应的IMAGE ID
docker tag e884381a6ec7 opengauss:6.0.2
```
### 2. 获取主备容器化部署脚本

主备容器部署脚本为`create_master_slave.sh`，可以从[openGauss-server仓库](https://gitcode.com/opengauss/openGauss-server/tree/master/docker/dockerfiles)获取

### 3. 创建容器路径映射目录
```
# 创建容器路径映射目录, 可以根据需要自行修改
mkdir -p /opt/test/{dn_6001,dn_6002,dn_6003}
```

### 4. 修改部署脚本
```
# 修改create_master_slave.sh脚本, 添加路径映射，路径要与创建的容器路径映射目录一致
sed -i '/^SLAVE_COUNT=1$/a MASTER_OUT_DIR="/opt/test/dn_6001"\nSLAVE_OUT_DIR=("/opt/test/dn_6002" "/opt/test/dn_6003")' create_master_slave.sh
sed -i '/-e GS_PORT=$MASTER_HOST_PORT/i -v $MASTER_OUT_DIR:/var/lib/opengauss \\' create_master_slave.sh
sed -i '/-e GS_PORT=$local_port/i \    -v ${SLAVE_OUT_DIR[$i]}:/var/lib/opengauss \\' create_master_slave.sh

```

### 5. 执行脚本创建容器集群

```
# 创建容器集群, 这里VERSION要跟镜像的TAG相同
sh create_master_slave.sh --SLAVE_COUNT 2 --NETWORK_NAME net_600 --VERSION 6.0.2 --MASTER_HOST_PORT 4432

# 创建完成后，查询集群状态
docker exec dn_6001 su - omm -c "gs_ctl query -D /var/lib/opengauss/data"
```

