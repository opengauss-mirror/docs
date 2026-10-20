---
description: This document describes Single-Node Installation_Container in openGauss, covering topics such as Architecture and OS Versions for Building Containers, Configuration Preparation.
keywords: [openGauss, Single-Node Installation_Container, installation, Architecture and OS Versions for Building Containers, Configuration Preparation]
---

# Single-Node Installation_Container

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:50:37.192Z pushedAt=2026-07-14T07:15:07.657Z -->

This section describes how to install openGauss using Docker, facilitating installation, configuration, and environment setup for DevOps users.

## Architecture and OS Versions for Building Containers<a name="zh-cn_topic_0283136491_section1017214481014"></a>

- x86-64 CentOS 7.6

- ARM64 openEuler 20.03 LTS

## Configuration Preparation<a name="zh-cn_topic_0283136491_section260555142417"></a>

Use the `buildDockerImage.sh` script to build the Docker image. `buildDockerImage.sh` is a shell script that offers SHA256 validation, accessible from the [server repository](https://atomgit.com/opengauss/openGauss-server/tree/master/docker/dockerfiles) or the [container repository](https://atomgit.com/opengauss/openGauss-container).

## Installing a Single-node Database Using Containers

### Creating an openGauss docker image<a name="zh-cn_topic_0283136491_section159607494319"></a>

>[!NOTE] Note
>
>- Before installation, you need to provide the openGauss binary installation package. Decompress it and place the package ending with `bz2` (openGauss-Server-X.X.X-CentOS7-x86_64.tar.bz2, where X.X.X is the current openGauss version number) into the `dockerfiles/<version\>` folder. The binary package can be downloaded from [here](https://www.opengauss.org/en/download/). Ensure that the correct yum repository is available.
>
>- When running the `buildDockerImage.sh` script, leaving parameter `-i` not specified will enable SHA256 validation. Modify the corresponding validation file according to the OS version:
     CentOS: sha256_file_amd64,
     openEuler_aarch64: sha256_file_arm64. Taking CentOS as an example, you need to manually write the validation result into the `sha256\_file\_amd64` file.
>
> ```
> ## Modify the sha256 validation file content
> cd /soft/openGauss-server/docker/dockerfiles/X.X.X
> sha256sum openGauss-Server-X.X.X-CentOS7-x86_64.tar.bz2 > sha256_file_amd64 
>    ```
> 
>- Before installation, you need to obtain the repo file from Huawei Mirrors and place it in the `openGauss-server-master/docker/dockerfiles/X.X.X` folder.
>
> ```
> ## Obtaining openEuler_aarch64.repo:
> wget -O openEuler_aarch64.repo https://mirrors.huaweicloud.com/repository/conf/openeuler_aarch64.repo
> ## Obtaining CentOS-Base.repo:
> wget -O CentOS-Base.repo https://mirrors.huaweicloud.com/repository/conf/CentOS-7-anon.repo
> 
>    ```

Run the `buildDockerImage.sh` script in the `dockerfiles` folder.

```
[root@ecs-complie dockerfiles]# ./buildDockerImage.sh
Usage: buildDockerImage.sh -v [version] [-i] [Docker build option]
Builds a Docker Image for openGauss
Parameters:
   -v: version to build
       Choose one of: X.X.X
   -i: ignores the SHA256 checksums

LICENSE UPL 1.0
```

### Environment Variables<a name="zh-cn_topic_0283136491_section14764166174816"></a>

To use the openGauss image more flexibly, you can set additional parameters. More controllable parameters will be added in the future. The current version supports the following variable settings:

**GS\_PASSWORD**

Required for using the openGauss image. Cannot be empty or undefined. This parameter sets the password for the openGauss database superuser `omm` and the test user `gaussdb`. `omm` is created by default during openGauss installation, and this username cannot be modified at this time. `gaussdb` is a custom user defined in `entrypoint.sh` and created when running the script.

The openGauss image is configured with a local trust mechanism, so connecting to the database from within the container does not require a password. However, you must enter a password when connecting from outside the container (from other hosts or other containers).

**openGauss Password Complexity Requirements**

The password must be at least 8 characters long and must contain uppercase letters, lowercase letters, digits, and special characters (special characters are limited to `\#?!@$%^&\*-`, and `!$&` must be escaped with a back slash `\`).

**GS\_NODENAME**

Specifies the database node name. Defaults to `gaussdb`.

**GS\_USERNAME**

Specifies the name of the user connecting to the database. Defaults to `gaussdb`.

**GS\_PORT**

Specifies the database port. Defaults to `5432`.

### Launching an Instance<a name="zh-cn_topic_0283136491_section148176206211"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=xxxxxx opengauss:X.X.X
```

### Connecting to the Database at the OS Level<a name="zh-cn_topic_0283136491_section53753141964"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=xxxxxx -p8888:5432 opengauss:X.X.X
$ gsql -d postgres -U gaussdb -W'xxxxxx' -h your-host-ip -p8888  # The host machine must have the gsql client installed.
```

### Data Persistence<a name="zh-cn_topic_0283136491_section973016196416"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=xxxxxx -v /opengauss:/var/lib/opengauss opengauss:X.X.X
```

>[!NOTE] Note
>
>1. For building container images for another database version, refer to the configuration files in `openGauss-server/docker/dockerfiles/X.X.X` and simply change the config to the corresponding version number.
>
>2. For building openEuler-arm container images, if the `openeuler-20.03-lts:latest` image cannot be downloaded, you can download the container image archive `openEuler-docker.aarch64.tar.xz` from the [official openEuler website](https://repo.openeuler.org/openEuler-20.03-LTS/docker_img/aarch64/), and then import it into the local image list by running `docker load -i openEuler-docker.aarch64.tar.xz`.
>   
>3. During the build process, if you encounter a yum repository download timeout, check your proxy settings. You can also add `--network host` after the `docker build` command in the `buildDockerImage.sh` script to use the host machine's network.
