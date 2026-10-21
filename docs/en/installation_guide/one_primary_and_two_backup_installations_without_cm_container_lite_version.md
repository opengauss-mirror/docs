---
description: This document describes One-Primary-Two-Standby Installation Without CM_Container in openGauss, covering topics such as Steps for Docker-based Installation, Standby node 2.
keywords: [openGauss, One-Primary-Two-Standby Installation Without CM_Container, installation, Steps for Docker-based Installation, Standby node 2]
---

# One-Primary-Two-Standby Installation Without CM_Container

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:50:37.507Z pushedAt=2026-07-14T07:15:07.662Z -->

This section introduces the installation and upgrade of openGauss with one-primary-two-standby installation without CM through Docker.

## Steps for Docker-based Installation

The primary/standby deployment script and configurations are stored [here](https://atomgit.com/opengauss/openGauss-server/tree/master/docker/deploy).

1. Log in to the node as user `root`.

2. Create the openGauss Docker image (refer to the image creation guide for single-node installation using containers)

    ```sh
    sh buildDockerImage.sh -v 6.0.0 -i
    ```

3. Create the container network in advance.

    If the primary and standby containers are deployed on the same node, create just one container network.
    If they run on different nodes, configure cross-node container network interconnection in advance.

4. Modify the configuration file `og_config.ini`.

    Description of each configuration item:

    | Item | Description |
    | -----  |----- |
    | opengauss_image |  Name of the openGauss container image, e.g., `opengauss:6.0.0` |
    | dockernetwork   |  Name of the created container network                     |
    | node_names      |  Names of all primary and standby containers, comma-separated       |
    | node_ips        |  IP addresses of all primary and standby containers, comma-separated. Must correspond one-to-one with `node_names`. |
    | server_port_maps|  Ports on the host machine mapped from the internal database container port (5432), comma-separated. Must correspond one-to-one with `node_names`. |
    | docker_vols     |  Paths on the host machine mapped from the data directory, comma-separated. Must correspond one-to-one with `node_names`. |
    | ogpassword      |  Password for the admin user. Must contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters, with a length of 8-16 characters. |

5. Launch the primary node.

    ```sh
    sh og_docker_deploy.sh -m primary -node node1 -f ./og_config.ini 
    ```

    **-m** specifies the role of this container: primary or standby. Launch one primary container first, then launch multiple standby containers.

    **-node** specifies the name of the container. This corresponds to `node_names` in the configuration file and differs for each node.

    **-f** specifies the configuration file.

    **Note**

    If there is only one node, your database runs in standalone mode. Of course, a standalone instance can also launch quickly:

    ```sh
    docker run --name opengauss --net=ognetwork --privileged=true -p 8000:5432 -d -e GS_PASSWORD=xxxxxx -v /data/ogvol:/var/lib/opengauss opengauss:6.0.0
    ```

6. Launch the standby nodes.

    Launch as many standby nodes as you have:

    ```sh
    ## Standby node 2
    sh og_docker_deploy.sh -m standby -node node2 -f ./og_config.ini

    ## Standby node 3
    sh og_docker_deploy.sh -m standby -node node3 -f ./og_config.ini
    ```

7. Query

   Query the instance status in the specified container:

    ```sh
    docker exec node1 su - omm -c "gs_ctl query -D /var/lib/opengauss/data"
    ```

## Steps for Docker-based Upgrade

1. Log in to the node as user `root`.

2. Create a one-primary-two-standby cluster without CM (refer to the installation steps above).

3. Create a Docker image for upgrading openGauss to the desired version.

4. Prepare the upgrade tool directory and new package (taking the upgrade from database 3.0.5 to 6.0.0 as an example).

    Create the `upgrade` directory, and place the new version upgrade scripts and version files in the `upgrade` directory, i.e., copy `upgrade_sql.*` and `version.cfg` from the target version number directory to `pkg_new`.

    Taking the `/opt/test/docker/upgrade` path as an example, this directory contains the following files and directories:

    ```sh
    pkg_new
    README.md
    upgrade_common.sh
    upgrade_errorcode.sh
    upgrade.sh
    ```

    The path `/opt/test/docker/upgrade/pkg_new` contains:

    ```sh
    upgrade_sql.sha256
    upgrade_sql.tar.gz
    version.cfg
    ```

5. Copy the upgrade tool package into the container.

    ```sh
    docker cp /opt/test/docker/upgrade dn_6001:/var/lib/opengauss/
    docker exec dn_6001 chown omm:omm /var/lib/opengauss/upgrade/ -R
    docker exec dn_6001 ls -al /var/lib/opengauss/upgrade
    
    docker cp /opt/test/docker/upgrade dn_6002:/var/lib/opengauss/
    docker cp /opt/test/docker/upgrade dn_6003:/var/lib/opengauss/
    
    docker exec dn_6002 chown omm:omm /var/lib/opengauss/upgrade/ -R
    docker exec dn_6002 ls -al /var/lib/opengauss/upgrade
    
    docker exec dn_6003 chown omm:omm /var/lib/opengauss/upgrade/ -R
    docker exec dn_6003 ls -al /var/lib/opengauss/upgrade
    ```

6. Execute the pre-upgrade operations on all nodes.

    ```sh
    docker exec dn_6001 su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_pre"

    docker exec dn_6002 su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_pre"

    docker exec dn_6003 su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_pre"
    ```

7. Stop all containers.

    ```sh
    docker exec dn_6003 su - omm -c "gs_ctl stop -D /var/lib/opengauss/data/"
    docker exec dn_6002 su - omm -c "gs_ctl stop -D /var/lib/opengauss/data/"
    docker exec dn_6001 su - omm -c "gs_ctl stop -D /var/lib/opengauss/data/"
    ```

8. Launch the containers of the new version and execute.

    Open three separate windows to execute. Do not exit, as subsequent steps will still run here.

    ```sh
    docker run --network net_305 --ip 172.11.0.101 --privileged=true --name dn_6001_600 -h dn_6001 -p 4432:4432 -v /opt/test/dn_6001:/var/lib/opengauss -it --entrypoint /bin/bash opengauss:6.0.0
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_bin"

    docker run --network net_305 --ip 172.11.0.102 --privileged=true --name dn_6002_600 -h dn_6002 -p 6432:6432 -v /opt/test/dn_6002:/var/lib/opengauss -it --entrypoint /bin/bash opengauss:6.0.0
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_bin"

    docker run --network net_305 --ip 172.11.0.103 --privileged=true --name dn_6003_600 -h dn_6002 -p 7432:7432 -v /opt/test/dn_6003:/var/lib/opengauss -it --entrypoint /bin/bash opengauss:6.0.0
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_bin"
    ```

9. Execute post-upgrade operations on all nodes.

    ```sh
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_post"
    ```

10. (Optional) Roll back.

    In the containers of the new version:

    ```sh
    ## upgrade_post action already executed:
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t rollback_post"

    ## upgrade_bin action already executed:
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t rollback_bin"
    ```

    Exit the containers of the new version, and use the `docker ps -a` command to find the `CONTAINER ID` of the containers of the previous version.

    ```sh
    ## Launch the container of the old version
    docker start <CONTAINER ID>
    
    ## Enter the container
    docker exec -ti <CONTAINER ID> /bin/bash
    
    ## upgrade_pre action already executed:
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t rollback_pre"
    ```

11. Commit the upgrade.

    ```sh
    su - omm -c "sh /var/lib/opengauss/upgrade/upgrade.sh -B /var/lib/opengauss/upgrade -N /var/lib/opengauss/upgrade/pkg_new -t upgrade_commit"
    ```
