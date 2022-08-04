# Installation Using an RPM Package

This section describes how to install the openGauss database on openEuler 22.03 LTS by running the yum command.

## Supported Architectures and OSs

-   x86-64 openEuler 22.03 LTS
-   ARM64 openEuler 22.03 LTS

***This installation method is supported only on openEuler 22.03 LTS.***

## Constraints

- Currently, installing openGauss by running the yum command is only supported on openEuler 22.03 LTS and only the ARM64 and x86_64 architectures are supported.
- The database integrated into the openEuler system is built based on the capabilities of the openGauss Lite edition.
- Only a standalone database instance is installed by using an RPM package. To upgrade the database, you can only replace binary files. Gray upgrade is not supported.
- By default, the IP address and port number **127.0.0.1:7654** of the installed database instance are used for listening. If remote connection is required, you need to manually change the value of **listen_address** in the **postgresql.conf** file.
- The user **opengauss** is created by default during database installation and is not deleted after the database is uninstalled.

## Installation Methods

- After the OS is installed, run the **yum install** command to install the database.

    `yum install opengauss -y`

- During the OS installation, set **software** to **openGauss**. The openGauss database is installed by default during the OS installation.

![](public_sys-resources/soft_select.png)

![](public_sys-resources/choose_opengauss.png)


## Usage

1. Run the `su - opengauss` command to switch to the user **opengauss**.
   
2. Run the `ps ux` command to check the process. The binary installation directory is `/usr/local/opengauss`, and the default startup data directory is `/var/lib/opengauss/data`.

3. Run the `gsql -d postgres -p 7654 -r` command to connect to the database. The default port number is 7654. After the database is connected, you can start to use the database as that of the openGauss Lite edition.
