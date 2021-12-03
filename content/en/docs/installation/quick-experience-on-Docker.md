# Quick experience on Docker

Run OpenGauss on Docker is very suit for the person who want to quickly experience the OpenGauss operations without careing the environment configuration issues.
It's simple, fast and available in Windows.

## Procedure

### Install Docker

a.Enter the Docker offical website [https://www.docker.com/get-started](https://www.docker.com/get-started)

b.Around "Docker Desktop", click"Download"

c.Double click the exe file which you downloaded and follow the instruction to finish the installation (reboot needed).

>![](public_sys-resources/icon-note.gif) **Note：** 

> After the installation, some computer will pop up a warning "WSL 2 installation is incomplete". Then you can click the link it provided and finish the operations in the instruction page and click "Restart" in the prompt box.

### Run OpenGauss Image

a.Click Start Menu, input "powershell"，enter the Windows PowerShell；or input "cmd"，enter the Command Prompt. Then input：


```
docker run --name opengauss --privileged=true -d -e GS_PASSWORD=Secretpassword@123 -p 15432:5432 enmotech/opengauss:latest
```
Now the OpenGauss container is running in the background.
Then input the command below to enter the container:

```
docker exec -it opengauss /bin/sh
```

### Test to use OpenGauss
After you enter the container, you can use some command to experience the usage of OpenGauss.

Login as Administrator Omm:

```
su - omm
```
Connect to the database：

```
gsql
```
After you connect successfully, you will see information below:

```
gsql ((openGauss 2.1.0 build 590b0f8e) compiled at 2021-09-30 14:29:04 commit 0 last mr  )
Non-SSL connection (SSL connection is recommended when requiring high-security)
Type "help" for help.

omm=#
```
Then you can do some database operations, such as list databases:

```
omm=# \l
```
Output:

```
                              List of databases
   Name    | Owner | Encoding |   Collate   |    Ctype    | Access privileges
-----------+-------+----------+-------------+-------------+-------------------
 omm       | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 postgres  | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0 | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/omm           +
           |       |          |             |             | omm=CTc/omm
 template1 | omm   | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/omm           +
           |       |          |             |             | omm=CTc/omm
(4 rows)
```
Disconnect database:

```
omm=# \q
```

More usage of this OpenGauss image, see [enmotech/opengauss](https://hub.docker.com/r/enmotech/opengauss).