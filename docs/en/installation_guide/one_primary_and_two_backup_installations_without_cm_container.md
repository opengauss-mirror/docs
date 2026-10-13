# One-Primary-Two-Standby Installation Without CM_Container

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:50:59.059Z pushedAt=2026-07-14T07:15:07.665Z -->

## 1. Obtaining the Image

Refer to [Container Image Installation](./installing_the_container_image.md) to obtain the openGauss Docker image and modify the image name.

```
# Change 9763e8b26794 to the IMAGE ID of the image to install
docker tag 9763e8b26794 opengauss:7.0.0-RC1
```

## 2. Obtaining the Primary/Standby Container Deployment Script

The primary/standby container deployment script is `create_master_slave.sh`, which can be obtained from the [openGauss-server repository](https://atomgit.com/opengauss/openGauss-server/tree/master/docker/dockerfiles).

## 3. Creating Container Path Mapping Directories

```
# # Create container path mapping directories. You can modify them as needed.
mkdir -p /opt/test/{dn_6001,dn_6002,dn_6003}
```

## 4. Modifying the Deployment Script

```
# # Modify the create_master_slave.sh script to add path mappings. The paths must match the created container path mapping directories.
sed -i '/^SLAVE_COUNT=1$/a MASTER_OUT_DIR="/opt/test/dn_6001"\nSLAVE_OUT_DIR=("/opt/test/dn_6002" "/opt/test/dn_6003")' create_master_slave.sh
sed -i '/-e GS_PORT=$MASTER_HOST_PORT/i -v $MASTER_OUT_DIR:/var/lib/opengauss \\' create_master_slave.sh
sed -i '/-e GS_PORT=$local_port/i \    -v ${SLAVE_OUT_DIR[$i]}:/var/lib/opengauss \\' create_master_slave.sh

```

## 5. Running the Script to Create the Container Cluster

```
# Create the container cluster. Here, VERSION must match the image tag.
sh create_master_slave.sh --SLAVE_COUNT 2 --NETWORK_NAME net_700 --VERSION 7.0.0-RC1 --MASTER_HOST_PORT 4432

# After creation, query the cluster status.
docker exec dn_6001 su - omm -c "gs_ctl query -D /var/lib/opengauss/data"
```