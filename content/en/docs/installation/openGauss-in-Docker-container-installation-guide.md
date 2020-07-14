# Opengauss on Docker
Sample Docker build files to facilitate installation, configuration, and environment setup for DevOps users. For more information about openGasuss please see the [opengauss Online Documentation](https://opengauss.org/zh/docs/1.0.0/docs/Quickstart/Quickstart.html).

## How to build and run
This project offers sample Dockerfiles for:

 * opengauss_1.0.0

To assist in building the images, you can use the [buildDockerImage.sh](dockerfiles/buildDockerImage.sh) script. See below for instructions and usage.

The `buildDockerImage.sh` script is just a utility shell script that performs MD5 checks and is an easy way for beginners to get started. Expert users are welcome to directly call `docker build` with their prefered set of parameters.

### Building opengauss Docker Install Images
**IMPORTANT:** You will have to provide the installation binaries of opengauss and put them into the `dockerfiles/<version>` folder. You only need to provide the binaries you are going to install. The binaries can be downloaded from the [opengauss.org](https://opengauss.org/en/download.html),  You also have to make sure to have internet connectivity for yum. Note that you must not uncompress the binaries. The script will handle that for you and fail if you uncompress them manually!

Before you build the image make sure that you have provided the installation binaries and put them into the right folder. go into the **dockerfiles** folder and run the **buildDockerImage.sh** script:

    [omm@localhost dockerfiles]$ ./buildDockerImage.sh -h
    Usage: buildDockerImage.sh -v [version]  [-i]  [Docker build option]
    Builds a Docker Image for opengauss.
  
    Parameters:
    -v: version to build
       Choose one of: 1.0.0  SingleInstance  
    -i: ignores the MD5 checksums


### Architecture And Os Version

x86-64 CentOS7.6  
ARM64 openEuler 20.03 LTS


### Start Instance

```console
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 opengauss:1.0.0
```

### Connect To The Container Database From Os

```console
$ docker run −−name opengauss −−privileged=true −d −e GSPASSWORD=secretpassword@123 \
  −p8888:5432 opengauss:1.0.0 gsql -d postgres -U gaussdb -W'secretpassword@123' \
  -h your-host-ip -p8888
```

### Persist Data

```console
$ docker run --name opengauss --privileged=true -d -e GS_PASSWORD=secretpassword@123 \
  -v /opengauss:/var/lib/opengauss opengauss:1.0.0
```

### Todo
primary standby install

