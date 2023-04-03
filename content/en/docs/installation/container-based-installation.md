# Container-based Installation<a name="EN-US_TOPIC_0277667366"></a>

This section describes how to install openGauss using Docker to facilitate installation, configuration, and environment setting for DevOps users.

## Supported Architectures and OSs<a name="section1017214481014"></a>

-   x86-64 CentOS 7.6

-   ARM64 openEuler 20.03 LTS

## Preparations<a name="section260555142417"></a>

Use the  **buildDockerImage.sh**  script to build a Docker image. This script is a shell script that is easy to use and provides MD5 check.

## Creating an openGauss Docker Image<a name="section159607494319"></a>

![](public_sys-resources/icon-note.gif) **NOTE:** 
-   Before the installation, provide the openGauss binary installation package and place it in the  **dockerfiles/<version\>**  folder. You do not need to decompress the package. You can download the binary package from  [https://opengauss.org/en/download/](https://opengauss.org/en/download/)  and ensure that the correct yum source is available. If you manually decompress the installation package, the execution will fail.

-   If the container is in the CentOS environment, download the  **gosu-amd64**  file from  [https://github.com/tianon/gosu/releases/download/1.12/gosu-amd64](https://github.com/tianon/gosu/releases/download/1.12/gosu-amd64)  and save it to the  **dockerfiles/<version\>**  folder.

-   If the container is in the openEuler environment, download the  **gosu-arm64**  file from  [https://github.com/tianon/gosu/releases/download/1.12/gosu-arm64](https://github.com/tianon/gosu/releases/download/1.12/gosu-arm64)  and save it to the  **dockerfiles/<version\>**  folder.

-   Before the installation, obtain the  **openEuler\_aarch64.repo**  file from Huawei open-source image website and save it to the  **openGauss-server-master/docker/SingleInstance/dockerfiles/1.0.0**  folder. Run the following command to obtain the  **openEuler\_aarch64.repo**  file.
    ```
    wget -O openEuler_aarch64.repo https://mirrors.huaweicloud.com/repository/conf/openeuler_aarch64.repo
    ```

 Run the  **buildDockerImage.sh**  script in the  **dockerfiles**  folder.

```
[root@localhost dockerfiles]$ ./buildDockerImage.sh -h
Usage: buildDockerImage.sh -v [version]  [-i]  [Docker build option]
Builds a Docker Image for openGauss.
Parameters:
-v: version to build
Choose one of: 1.0.0  SingleInstance  
-i: ignores the MD5 checksums
```

## Environment Variables<a name="section14764166174816"></a>

To flexibly use an openGuass image, you can set additional parameters. In the future, more control parameters will be added. The current version supports the setting of the following variables:

**GS\_PASSWORD**

This parameter is mandatory when the openGauss image is used. The value cannot be empty or undefined. This parameter specifies the passwords of superuser  **omm**  and test user  **gaussdb**  of the openGauss database. During the openGauss installation, the superuser  **omm**  is created by default. This username cannot be changed. The test user  **gaussdb**  is created in  **docker-entry point.sh**.

The local trust mechanism is configured for the openGauss image. Therefore, no password is required for connecting to the database in the container. However, if you want to connect to the database from other hosts or containers, you need to enter the password.

**Complexity requirements for openGauss password:**

The password must contain at least eight characters, including letters, digits, and special characters.

**GS\_NODENAME**

Specifies the database node name. The default value is  **gaussdb**.

**GS\_USERNAME**

Specifies the username for connecting to the database. The default value is  **gaussdb**.

**GS\_PORT**

Specifies the database port. The default value is  **5432**.

## Starting an Instance<a name="section148176206211"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 opengauss:1.0.0
```

## Connecting to the Database from the OS Layer<a name="section53753141964"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 -p8888:5432 opengauss:1.0.0 
$ gsql -d postgres -U gaussdb -W'secretpassword@123' -h your-host-ip -p8888
```

## Data Persistence<a name="section973016196416"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 -v /opengauss:/var/lib/opengauss opengauss:1.0.0
```

