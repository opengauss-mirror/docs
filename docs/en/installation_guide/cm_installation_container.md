# CM Installation_Container

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:50:35.857Z pushedAt=2026-07-14T07:15:07.655Z -->

This section describes how to install openGauss using Docker, facilitating installation, configuration, and environment setup for DevOps users.

## Supported Architectures and OS Versions<a name="zh-cn_topic_0283136491_section1017214481014"></a>

- x86-64 CentOS 7.6

- ARM64 openEuler 20.03 LTS

## Containerized Deployment for CM

### Creating an openGauss Docker Image

Download the openGauss-container repository code. The build scripts are managed within this repository.

>- Building the image requires the enterprise edition package `openGauss-All-X.X.X-CentOS7-x86_64.tar.gz` released by the openGauss community. Place it in the `openGauss-container/dockerfiles` directory.
>- When running the `buildDockerImage.sh` script, if the `-i` parameter is not specified, SHA256 validation is enabled by default. Modify the validation file according to the OS version:
     CentOS: `sha256_file_amd64`,
     openEuler_aarch64: `sha256_file_arm64`. Taking CentOS as an example, you need to manually write the verification result into the `sha256_file_amd64` file.
>
> ```sh
> ## Modify the content of the SHA256 validation file
> cd `openGauss-container/dockerfiles`
> sha256sum openGauss-All-X.X.X-CentOS7-x86_64.tar.gz > sha256_file_amd64 
> ```
>
>- For x86, use the `CentOS_x86_64` package released by the community; for Arm, use the released `openEuler-arm` enterprise edition package.

Build command:

```sh
sh buildDockerImage.sh -v X.X.X -i
```

> [!NOTE]
> The default openGauss version to install is 6.0.0. If you require a version later than 6.0.0, go to the `dockerfiles` directory and modify `ENV OPENGAUSS_VERSION 6.0.0` in the corresponding `dockerfile_arm` or `dockerfile_amd` to the required version.
> Due to package name changes, if you require a version earlier than 6.0.0, modify the package name in the file to the corresponding version package name.

### Using Community-Published Images

Latest container images:

x86_64:

```
docker pull swr.cn-south-1.myhuaweicloud.com/opengauss/x86_64/opengauss:X.X.X
docker tag swr.cn-south-1.myhuaweicloud.com/opengauss/x86_64/opengauss:X.X.X opengauss:X.X.X
```

Arm:

```
docker pull swr.cn-south-1.myhuaweicloud.com/opengauss/arm/opengauss:X.X.X
docker tag swr.cn-south-1.myhuaweicloud.com/opengauss/arm/opengauss:X.X.X opengauss:X.X.X
```

### Launching Containers

At least two containers are required to set up a CM cluster.

1. Create a container network

     - If multiple containers are deployed on a single machine, simply create a regular container network.

     `docker network create --subnet=172.11.0.0/24 og-network`

     - If containers are deployed across multiple nodes, communication between containers on different nodes is required. There are various implementation methods in the industry; one is provided here as a reference, and you can choose as needed.

     Select a node to deploy the progrium/consul container:

     ```
     docker pull progrium/consul
     docker run -d -p 8500:8500 -h consul --name consul progrium/consul -server -bootstrap
     ```

     Modify Docker on each node:
     vim /usr/lib/systemd/system/docker.service
     Append the following after ExecStart:

     ```
     -H tcp://0.0.0.0:2376 -H unix:///var/run/docker.sock --cluster-store=consul://192.168.0.94:8500 --cluster-advertise=eth0:2376
     ```

     **192.168.0.94** is the IP address of the machine where consul is deployed.

     After the modification, restart Docker:

     ```
     systemctl daemon-reload
     systemctl restart docker
     ```

     Create an overlay network

     ```
     docker network create -d overlay --subnet 10.22.1.0/24  --gateway 10.22.1.1 og-network
     ```

2. Launch multiple containers

     ```
     # The IP addresses must be in the same CIDR block as the container network, and the IP addresses and node names of the containers must be unique. The following example shows one primary and two standby containers:

     primary_nodeip="172.11.0.2"
     standby1_nodeip="172.11.0.3"
     standby2_nodeip="172.11.0.4"
     primary_nodename=primary
     standby1_nodename=standby1
     standby2_nodename=standby2

     OG_NETWORK=og-network
     GS_PASSWORD=test@123

     # Launch container 1
     docker run -d -it -P --ulimit nofile=1000000:1000000 --sysctl kernel.sem="250 6400000 1000 25600" --security-opt seccomp=unconfined -v /data/opengauss_volume:/volume --name opengauss-01 --net ${OG_NETWORK} --ip "$primary_nodeip" -h=$primary_nodename -e primaryhost="$primary_nodeip" -e primaryname="$primary_nodename" -e standbyhosts="$standby1_nodeip, $standby2_nodeip" -e standbynames="$standby1_nodename, $standby2_nodename" -e GS_PASSWORD=$GS_PASSWORD opengauss:X.X.X 

     # Launch container 2
     docker run -d -it -P --ulimit nofile=1000000:1000000 --sysctl kernel.sem="250 6400000 1000 25600" --security-opt seccomp=unconfined -v /data/opengauss_volume:/volume --name opengauss-02 --net ${OG_NETWORK} --ip "$standby1_nodeip" -h=$standby1_nodename -e primaryhost="$primary_nodeip" -e primaryname="$primary_nodename" -e standbyhosts="$standby1_nodeip, $standby2_nodeip" -e standbynames="$standby1_nodename, $standby2_nodename" -e GS_PASSWORD=$GS_PASSWORD opengauss:X.X.X

     # # Launch container 3
     docker run -d -it -P --ulimit nofile=1000000:1000000 --sysctl kernel.sem="250 6400000 1000 25600" --security-opt seccomp=unconfined -v /data/opengauss_volume:/volume --name opengauss-03 --net ${OG_NETWORK} --ip "$standby2_nodeip" -h=$standby2_nodename -e primaryhost="$primary_nodeip" -e primaryname="$primary_nodename" -e standbyhosts="$standby1_nodeip, $standby2_nodeip" -e standbynames="$standby1_nodename, $standby2_nodename" -e GS_PASSWORD=$GS_PASSWORD opengauss:X.X.X
     ```

3. Use the script to quickly launch the CM cluster containers in primary/standby mode

     In the `openGauss-container` directory, run `sh create_cm_contariners.sh`.

     ```sh
     This script will create three containers with cm on a single node. \n
     Please input OG_SUBNET (container CIDR block) [172.11.0.0/24]: 
     OG_SUBNET set 172.11.0.0/24
     Please input OG_NETWORK (name of the network for the container) [og-network]: 
     OG_NETWORK set og-network
     Please input GS_PASSWORD (define the database password)[xxxxxx]: 
     GS_PASSWORD set
     Please input openGauss VERSION [X.X.X]: 
     openGauss VERSION set X.X.X
     starting  create docker containers...
     ```

     You will be prompted to enter the container CIDR block, container network name, database password, and container version number. To use the default values, simply press `Enter` to skip.
     After the script finishes executing, it will launch 3 containers (1 primary and 2 standby) in the CM cluster.

### Checking Container Status

1. Enter the container

     ```
     docker exec -ti <containerid> /bin/bash
     su - omm
     ```

2. Check the cluster status

     ```
     cm_ctl query -Cvid
     ```

3. Connect to the database

     ```
     gsql -d postgres -r
     ```

>[!NOTE] Note
>
>1. The images for building the containers must include an OS layer.
>2. Only CM and database kernel tools are provided inside the containers. O&M tools are unavailable.