---
description: This document describes deb Package Installation in openGauss, covering topics such as Supported Architectures, OS Versions, and Corresponding openGauss Versions, Supported Features.
keywords: [openGauss, deb Package Installation, installation, Supported Architectures, OS Versions, and Corresponding openGauss Versions, Supported Features]
---

# deb Package Installation

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-10T08:50:35.613Z pushedAt=2026-07-14T07:15:07.654Z -->

This section describes how to install the openGauss database with a single command using apt on Ubuntu and Debian OSs.

## Supported Architectures, OS Versions, and Corresponding openGauss Versions

| OS                 | Architecture   | openGauss Version    |
| ----------------------- | ------ | --------------- |
| Ubuntu 22.04 LTS | ARM64/x86_64  | openGauss 6.0.0 Simplified  |
| Debian 12 | x86_64  | openGauss 6.0.0 Simplified  |

Note: If you need to install openGauss on other systems, please contact the openGauss community.

## Supported Features

- Starting from openGauss 5.0.1, the compatibility B database is supported. For details, refer to the [dolphin plugin](https://docs.opengauss.org/en/docs/latest/extension_reference/extension_reference/plugin/dolphin.html).

## Constraints

- openGauss 6.0.0 Simplified does not include mot, obs, and codegen features, nor external components such as om and cm. It provides only pure database functionality (with support for the compatibility B database).

## Constraints

- Currently, apt-based installation is only supported on Ubuntu and Debian OSs, available for both arm64 and x86_64 architectures.

- By default, the installed instance listens on the address 127.0.0.1:7654 and its port. If remote connections are required, you need to manually modify `listen_address` in the `postgresql.conf` file.

- Database installation creates the user `opengauss` by default. This user is not deleted when the database is uninstalled.

## Installation Methods

Take installation as user `sudo` as an example.

- Install using `apt install`.

  - Ubuntu installation:

    ```shell
    $ add-apt-repository ppa:opengauss/opengauss
    $ apt update
    $ apt install opengauss
    ```

  - Debian installation:

    ```shell
    $ add-apt-repository ppa:opengauss/opengauss
    $ sed -i 's/bookworm/jammy/g' /etc/apt/sources.list.d/opengauss-ubuntu-opengauss-bookworm.list
    $ apt update
    $ apt install opengauss
    ```

- After installation, start the database as prompted.

    ```shell
    $ service opengauss start
    ```

> Note:
> Since PPA only supports package builds for Ubuntu OSs, you need to modify the apt source list file when using it on a Debian OS.

## Uninstallation Method

- Uninstalling openGauss:

  ```shell
  $ apt remove opengauss
  ```

- Removing the openGauss PPA repository:

  ```shell
  $ add-apt-repository --remove ppa:opengauss/opengauss
  ```

## Usage Instructions

1. Switch to user `opengauss`: `su - opengauss`

2. View processes: `ps ux`. You can see that the binary installation directory is under `/usr/opengauss`, and the default data directory for launch is under `/var/lib/opengauss/data`.

3. Connect to the database: `gsql -d postgres -p 7654 -r`. The default database port is 7654. After connection, you can use the database normally.
