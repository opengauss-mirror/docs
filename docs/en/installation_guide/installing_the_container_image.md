# Installation via Container Image

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:50:37.594Z pushedAt=2026-07-14T07:15:07.659Z -->

This section describes how to obtain the openGauss image and install it via Docker so that you can start your database journey in a moment.

## 1. Obtaining the Image

There are two commands to pull the openGauss image: `docker pull` and `docker load`.

### Pulling the Docker Hub Image

```bash
$ docker pull opengauss/opengauss-server:latest
```

- Verify the image status

```bash
$ docker images

REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
opengauss/opengauss-server   latest              9763e8b26794        2 days ago          1.68GB
```

### Downloading and Loading the Image Package

- Download the image package (taking the package for the Arm architecture as an example). The architecture of the image package should match the host architecture.

``` bash
$ wget https://opengauss.obs.cn-south-1.myhuaweicloud.com/7.0.0-RC3/openEuler22.03/arm/openGauss-Docker-7.0.0-RC3-aarch64.tar
```

The method for downloading the x86_64 image is the same. [Download here](https://opengauss.obs.cn-south-1.myhuaweicloud.com/7.0.0-RC3/openEuler22.03/x86/openGauss-Docker-7.0.0-RC3-x86_64.tar)

>[!NOTE] Note
>
> There is only one container image for each architecture. Since the system inside the container is based on openEuler22.03, the container image is placed in the openEuler22.03 directory, but it can be used on other operating systems.<br>

- Load the image

``` bash
$ docker load -i openGauss-Docker-7.0.0-RC3-aarch64.tar
```

- Verify the image status

```bash
$ docker images

REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
opengauss                    7.0.0-RC3           9763e8b26794        2 days ago          1.68GB
```

>[!NOTE] Note
> 
> The above image packages are updated periodically. You can modify the path according to your needs to obtain the latest image package.<br>

## 2. Running the Container

Taking `opengauss/opengauss-server:latest` as an example (the 7.0.0-RC3 container version downloaded from the official website is `opengauss:7.0.0-RC3`), the following command launches the database and maps the host machine's port to the container:

```bash
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=xxxxxx -p 8888:5432 opengauss/opengauss-server:latest
```

### Launch options

- `--name opengauss`: Names the container `opengauss`.

- `--privileged=true`: Grants privileged mode to the container.

- `-d`: Runs the container in detached mode.

- `-p 8888:5432`: Maps port 5432 of the container to port 8888 on the host machine.

#### Required Environment Variables Inside the Container

- `-e GS_PASSWORD=xxxxxx`: Sets the password for the database superuser `omm`.

Required when using the openGauss image. Cannot be empty or undefined. This parameter sets the password for the openGauss database superuser `omm`. `omm` is created by default during installation, and this username cannot be changed yet.

The openGauss image is configured with a local trust mechanism, so no password is required when connecting to the database from within the container. However, you must enter a password when connecting from outside the container (from other hosts or containers).

#### **Password Requirements**

- The password must be at least 8 characters long.

- It must contain uppercase letters, lowercase letters, digits, and special characters.

- Supported special characters are limited to `\#?!@$%^&\*-` (where `!$&` must be escaped with a backslash `\`).

#### Optional Environment Variables Inside the Container

- `-e GS_NODENAME=YourNodeName`: Specifies the database node name, which defaults to `gaussdb`.

- `-e GS_USERNAME=YourUserName`: Specifies the database connection username, which defaults to the test user `gaussdb`.

- `-e GS_USER_PASSWORD=xxxxxx`: Specifies the password for the user `$GS_USERNAME`, which defaults to `$GS_PASSWORD`.

- `-e GS_PORT=YourPort`: Specifies the database port inside the container, which defaults to `5432`.

- `-e GS_DB=YourDbName`: Creates a database inside the container, which defaults to `postgres`.

## 3. Container Test

### Check container running status

```bash
$ docker ps 
```

Output example:

```txt
CONTAINER ID        IMAGE                               COMMAND                  CREATED              STATUS              PORTS                    NAMES
7abc538f242a        opengauss/opengauss-server:latest   "entrypoint.sh gauss…"   About a minute ago   Up About a minute   0.0.0.0:8888->5432/tcp   opengauss
```

### Connect to the database from inside the container

Enter the container:

```bash
$ docker exec -it <CONTAINER ID> bash
```

Log in as `omm`:

```bash
$ su - omm
$ gsql -d postgres -p 5432
```

### Connecting to the database from the host

The host can connect to the database using the following command (requires the `gsql` client installed):

```shell
$ gsql -d postgres -U gaussdb -W YourPassoword -h your-host-ip -p 8888 
```

## 4. Other Configurations

### Data Persistence

Use the following command to mount the host's `/opengauss` directory to the container's `/var/lib/opengauss` directory to store data persistently:

```bash
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=xxxxxx -v /opengauss:/var/lib/opengauss opengauss/opengauss-server:latest
```

### Parameter Configuration<a name="zh-cn_topic_0283136491_section973016196416"></a>

Configuration file path inside the container:

```bash
/var/lib/opengauss/data/postgresql.conf
```

After modifying the configuration file, use the following command to restart the container for the changes to take effect:

```bash
docker restart <CONTAINER ID>
```

If configuring parameters outside the container, you need to mount a host path to the `/var/lib/opengauss` directory inside the container.

For modification of specific parameters, refer to **[GUC Parameters](../database_reference/guc_parameter_usage.md)**.
