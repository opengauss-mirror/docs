# Container-based Installation<a name="EN-US_TOPIC_0289899741"></a>

This section describes how to install openGauss using Docker to facilitate installation, configuration, and environment setting for DevOps users.

## Supported Architectures and OSs<a name="en-us_topic_0283136491_section1017214481014"></a>

-   x86-64 CentOS 7.6

-   ARM64 openEuler 20.03 LTS

## Preparations<a name="en-us_topic_0283136491_section260555142417"></a>

Use the  **buildDockerImage.sh**  script to build a Docker image. This script is a shell script that is easy to use and provides MD5 check.

## Creating an openGauss Docker Image<a name="en-us_topic_0283136491_section159607494319"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Before the installation, you need to provide the openGauss binary installation package. After decompressing the package, place the package \(**openGauss-**_X.X.X_**-CentOS-64bit.tar.bz2**\) in the  **dockerfiles/**<_version_\> folder. The binary package can be downloaded from  [https://opengauss.org/en/download/](https://opengauss.org/en/download/). Ensure that the correct yum source is available.
>-   If the  **-i**  option is not specified when you run the  **buildDockerImage.sh**  script, the MD5 check is performed by default. You need to manually write the check result to the  **md5\_file\_amd64**  file.
>    ```
>    ## Modify the MD5 verification file.
>    cd /soft/openGauss-server/docker/dockerfiles/1.0.1
>    md5sum openGauss-1.0.1-CentOS-64bit.tar.bz2
>    ## Write the verification information to the verification file md5_file_amd64.
>    echo "58b9a029719f2d9d32b7d619c850735c openGauss-1.0.1-CentOS64bit.tar.bz2" > md5_file_amd64 
>    ```
>-   Before the installation, obtain the  **openEuler\_aarch64.repo**  file from Huawei open-source image website and save it to the  **openGauss-server-master/docker/dockerfiles/1.0.1**  folder. Run the following command to obtain the  **openEuler\_aarch64.repo**  file.
>    ```
>    wget -O openEuler_aarch64.repo https://mirrors.huaweicloud.com/repository/conf/openeuler_aarch64.repo
>    ```

Run the  **buildDockerImage.sh**  script in the  **dockerfiles**  folder.

```
[root@ecs-complie dockerfiles]# ./buildDockerImage.sh
Usage: buildDockerImage.sh -v [version] [-i] [Docker build option]
Builds a Docker Image for openGauss
Parameters:
   -v: version to build
       Choose one of: 1.0.0 1.0.1
   -i: ignores the MD5 checksums

LICENSE UPL 1.0
```

## Environment Variables<a name="en-us_topic_0283136491_section14764166174816"></a>

To flexibly use an openGuass image, you can set additional parameters. In the future, more control parameters will be added. The current version supports the setting of the following variables:

**GS\_PASSWORD**

This parameter is mandatory when the openGauss image is used. The value cannot be empty or undefined. This parameter specifies the passwords of superuser  **omm**  and test user  **gaussdb**  of the openGauss database. During the openGauss installation, the superuser  **omm**  is created by default. This username cannot be changed. The test user  **gaussdb**  is created in  **entrypoint.sh**.

The local trust mechanism is configured for the openGauss image. Therefore, no password is required for connecting to the database in the container. However, if you want to connect to the database from other hosts or containers, you need to enter the password.

**Complexity requirements for openGauss password:**

The password must contain at least eight characters, including uppercase letters, lowercase letters, digits, and special characters \(**\#?!@$%^&\*-**\).  **!$& **must be escaped using a backslash \(\\\).

**GS\_NODENAME**

Specifies the database node name. The default value is  **gaussdb**.

**GS\_USERNAME**

Specifies the username for connecting to the database. The default value is  **gaussdb**.

**GS\_PORT**

Specifies the database port. The default value is  **5432**.

## Starting an Instance<a name="en-us_topic_0283136491_section148176206211"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=Enmo@123 opengauss:1.0.1
```

## Connecting to the Database from the OS Layer<a name="en-us_topic_0283136491_section53753141964"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=Enmo@123 -p8888:5432 opengauss:1.0.1
$ gsql -d postgres -U gaussdb -W'Enmo@123' -h your-host-ip -p8888
```

## Data Persistence<a name="en-us_topic_0283136491_section973016196416"></a>

```
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=Enmo@123 -v /opengauss:/var/lib/opengauss opengauss:1.0.1
```

