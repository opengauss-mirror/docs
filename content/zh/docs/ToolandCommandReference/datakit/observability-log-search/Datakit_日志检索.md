# 日志检索插件

## 功能介绍

### 概述

openGuass用户以往查看日志，需要登录服务器查看或者下载对应日志文件，操作繁琐且不支持复杂的查询过滤，查找效率慢。日志检索插件支持统一Web页面检索日志相关内容，能提高用户解决生产问题的效率。

日志检索插件支持使用FileBeat采集数据库操作日志、CM日志、系统运行日志等上传到ElasticSearch中，然后在Web端对存储在ElasticSearch中的日志进行统一检索。

### 支持的功能

日志检索插件提供的功能如下：

- 日志全文检索
- 日志分布图
- 日志上下文查询
- 代理和服务端安装卸载

### 约束和限制

**代理安装**

前置条件：服务端不存在时，先安装服务端。

**服务端安装**

只能安装一个服务端。

**项目运行**

本项目依赖一体化主平台，若需要使用本项目所有功能，只能通过编译成 jar 包的形式作为插件运行在主平台上。

###  系统要求

本节介绍使用日志检索插件的最低系统要求。

**系统要求**

| 操作系统 | 版本           |
| -------- | -------------- |
| windows  | windows7及以上 |

**软件要求**

| 软件 | 规格         |
| ---- | ------------ |
| Java | jdk 11及以上 |

**数据库版本要求**

| 数据库    | 版本 |
| --------- | ---- |
| openGauss | 所有 |


## 使用指导

### 概述

日志检索插件主要有安装部署和日志查询功能。

安装部署主要包括服务端和代理的安装、卸载、启动、停止、状态监控以及自动拉起功能，需先部署服务端后才可以部署代理，部署代理时会根据已部署好的服务端配置的IP和端口进行通信。服务端可以部署在满足服务端所需配置的，且可以跟数据库服务器通信的任何一台服务器，代理需要部署在对应的数据库服务器。目前只支持部署一个服务端，可以部署多个代理，但一台服务器只能部署一个代理。

日志查询主要包括全文检索和上下文检索，需先部署好服务端和代理才可以使用日志查询功能。

### 部署服务端

#### 安装服务端

1. 点击【日志检索】插件首页左上角的折叠按钮，打开【安装部署】侧边栏。

    ![image-20230313203100902](figures/log_install_btn.png)

2. 点击【安装服务端】按钮，弹出安装框。

    ![image-20230313203157726](figures/log_install_server.png)

3. 选择物理机，选择安装用户（非root用户），自定义修改服务端端口、安装目录、安装方式，点击【一键部署】即可开始安装，点击【取消】按钮可取消安装。

    **说明：** 所有必选参数均需要填写。必填参数用星号（*）标识。
    
    | 配置项     | 必填 | 组件形式   | 配置说明                                       |
    | ---------- | ---- | ---------- | ---------------------------------------------- |
    | 物理机     | 是   | 下拉框     | 平台纳入管理的集群/实例                        |
    | 安装用户   | 是   | 下拉框     | 部署服务端的实例用户                           |
    | 服务端端口 | 是   | 文本输入框 | 服务端的端口号，默认为9200，非法输入会出现异常 |
    | 安装目录   | 是   | 文本输入框 | 服务端安装在服务器上的绝对路径，有默认值       |
    | 安装方式   | 是   | 单选框     | 支持在线和离线安装                             |

   - 在线安装：
    
      ![image-20240325113254468](figures/log_server_install_form.png)
    
   - 离线安装：
    
      ![image-20240325111654469](figures/log_server_install_form2.png)
    
   - 离线安装-上传安装包：
    
      ![image-20240325111754469](figures/log_server_install_form3.png)

4. 点击完【一键部署】按钮后，会弹出安装过程窗口，安装完成后，可以点击【返回】按钮，跳转到安装代理窗口，点击【取消】关闭安装窗口。

    **说明：** 

    安装过程中会涉及到如下操作：

    1. 检测数据库实例是否存在，不存在会提示异常信息；
    
    2. 检测安装目录是否为空，不为空会提示异常信息；
    
    3. 检测端口是否被占用，被占用会提示异常信息；
    
    4. 检测系统参数是否满足配置，不满足会提示异常信息；
    
    5. 检测平台下服务端安装包是否存在，不存在会在线下载，无法连接外网会提示异常信息；
    
    6. SSH上传服务端安装包、服务端配置文件、启动脚本。

    ![image-20240325113254468](figures/log.install.png)

5. 在安装过程界面中可以查看安装异常信息。

    ![image-20240325113400407](figures/log.install_error.png)

6. 安装完成后，即可在【已安装服务端】TAB中看到对应服务端的信息。

    **说明：**

    1. 默认展示集群名称，点击【集群名称】可查看集群下已安装服务端的实例；

    2. 安装成功会在实例前显示绿色圆点，表示代理正在运行中，且状态健康；

    3. 运行中的代理可以停止以及卸载。

    ![image-20230313203400407](figures/log_server_installed.png)

#### 停止服务端

1. 在【已安装服务端】TAB中，当鼠标悬停在实例上时，可以看到实例后有【停止】以及【卸载】按钮，点击【停止】按钮会在实例前显示蓝色圆点，表示服务端正在停止中。

    **说明：** 仅能停止运行状态健康的服务端。
    
    ![image-20240325113400407](figures/log_sever_stop.png)
    
    ![image-20240325113400407](figures/log_server_stopping.png)

2. 停止成功会在实例前显示黄色圆点，表示服务端已经停止。

    ![image-20240325113400407](figures/log_server_stoped.png)
    
    停止失败在实例前显示红色圆点以及红色感叹号，表示服务端停止异常，当鼠标悬停在红色感叹上可以看到异常信息。
    
    ![image-20240325113400407](figures/log_server_stop_error.png)

#### 启动服务端

1. 在【已安装服务端】TAB中，当当鼠标悬停在实例上时，可以看到实例后有【启动】以及【卸载】按钮，点击【启动】按钮会在实例前显示蓝色圆点，表示服务端正在启动中。

    **说明：** 仅能启动运行状态不健康的服务端。
    
    ![image-20240325113400407](figures/log_server_start.png)
    
    ![image-20240325113400407](figures/log_server_starting.png)

2. 启动成功会在实例前显示绿色圆点，表示服务端已经启动。

    ![image-20240325113400407](figures/log_server_started.png)

3. 启动失败在实例前显示红色圆点以及红色感叹号，表示服务端启动异常，当鼠标悬停在红色感叹上可以看到异常信息。

    ![image-20240325113400407](figures/log_server_start_error.png)

####  卸载服务端

1. 在【已安装服务端】TAB中，当鼠标悬停在实例上时，可以看到实例后有【卸载】按钮，点击【卸载】按钮，弹出卸载窗口。

    ![image-20240325113400407](figures/log_uninstall.png)

2. 点击【一键卸载】按钮，开始卸载操作，点击【取消】按钮，关闭卸载窗口。

    **注：** 卸载过程不可逆，卸载完成后将会清除该服务端所有有关的数据，请谨慎卸载！
    
    ![image-20240325113400407](figures/log_server_uninstall.png)

3. 点击【一键卸载】按钮后，会弹出卸载过程窗口，卸载完成后，可以点击【返回】按钮，跳转到卸载服务端窗口，点击【取消】关闭卸载窗口。

    ![image-20240325113400407](figures/log_uninstall_form.png)

4. 卸载服务端完成后，会在【已安装服务端】TAB中删除一条数据。

#### 服务端状态监控、自动拉起

通过定时器每隔1分钟检测服务端运行状态、当服务端运行不健康时会触发自动拉起操作。

### 部署代理

#### 安装代理

1. 点击【日志检索】插件首页左上角的折叠按钮，打开【安装部署】侧边栏。

    ![image-20240313203100902](figures/log_install_btn.png)

2. 在首页点击【安装代理】按钮，弹出安装代理窗口。

    ![image-20240313210957759](figures/log_proxy_install_form.png)

3. 选择对应数据库实例，点击【一键部署】按钮开始安装，点击【取消】按钮可取消安装。

    **说明：** 所有必选参数均需要填写。必填参数用星号（*）标识。
    
    | 配置项             | 必填 | 组件形式   | 配置说明                                 |
    | ------------------ | ---- | ---------- | ---------------------------------------- |
    | 采集实例           | 是   | 下拉框     | 平台纳入管理的集群/实例                  |
    | 安装目录           | 是   | 文本输入框 | 代理安装在服务器上的绝对路径，有默认值   |
    | 数据库运行日志路径 | 是   | 文本输入框 | 数据库pg_log日志，自动回显               |
    | gs_ctl日志路径     | 否   | 文本输入框 | 数据库gs_ctl日志                         |
    | gs_guc日志路径     | 否   | 文本输入框 | 数据库gs_guc日志                         |
    | gs_om日志路径      | 否   | 文本输入框 | 数据库gs_om日志                          |
    | gs_install日志路径 | 否   | 文本输入框 | 数据库gs_install日志                     |
    | gs_local日志路径   | 否   | 文本输入框 | 数据库gs_local日志                       |
    | cm日志路径         | 否   | 文本输入框 | 数据库cm日志，如果存在cm日志就会自动回显 |
    | 安装方式           | 是   | 单选框     | 支持在线和离线安装                       |

    - 在线安装：

       ![image-20240313210957759](figures/log_proxy_install_form.png)

    - 离线安装：
    
       ![image-20240313210957759](figures/log_proxy_install_form2.png)
    
    - 离线安装-上传安装包：
    
       ![image-20240313210957759](figures/log_proxy_install_form3.png)

4. 点击完【一键部署】按钮后，会弹出安装过程窗口，安装完成后，可以点击【返回】按钮，跳转到安装代理窗口，点击【取消】关闭安装窗口。

    **说明：** 

    安装过程中会涉及到如下操作：

    1. 检测数据库实例是否存在，不存在会提示异常信息；
    
    2. 检测安装目录是否为空，不为空会提示异常信息；
    
    3. 检测服务端是否已经安装，未安装会提示异常信息；
    
    4. 检测平台下代理安装包是否存在，不存在会在线下载，无法连接外网会提示异常信息；
    
    5. SSH上传代理安装包、代理配置文件、启动脚本。

    ![image-20240313210957759](figures/log_proxy_install.png)

5. 在安装过程界面中可以查看安装异常信息。

    ![image-20240313210957759](figures/log_proxy_error.png)

6. 安装代理完成后，会在【已安装代理】TAB中新增一条数据。

    **说明：**

    1. 默认展示集群名称，点击【集群名称】可查看集群下已安装代理的实例；
    
    2. 安装成功会在实例前显示绿色圆点，表示代理正在运行中，且状态健康；
    
    3. 运行中的代理可以停止以及卸载。

    ![image-20240313210957759](figures/log_proxy_installed.png)

#### 停止代理

1. 在【已安装代理】TAB中，当鼠标悬停在实例上时，可以看到实例后有【停止】以及【卸载】按钮，点击【停止】按钮会在实例前显示蓝色圆点，表示代理正在停止中。

    **说明：** 仅能停止运行状态健康的代理。

    ![image-20240313210957759](figures/log_proxy_stopping.png)

2. 停止成功会在实例前显示黄色圆点，表示代理已经停止。

    ![image-20240313210957759](figures/log_proxy_stoped.png)

3. 停止失败在实例前显示红色圆点以及红色感叹号，表示代理停止异常，当鼠标悬停在红色感叹上可以看到异常信息。

    ![image-20240313210957759](figures/log_proxy_stop_error.png)

#### 启动代理

1. 在【已安装代理】TAB中，当当鼠标悬停在实例上时，可以看到实例后有【启动】以及【卸载】按钮，点击【启动】按钮会在实例前显示蓝色圆点，表示代理正在启动中。

    **说明：** 仅能启动运行状态不健康的代理。

    ![image-20240313210957759](figures/log_proxy_starting.png)

2. 启动成功会在实例前显示绿色圆点，表示代理已经启动。

    ![image-20240313210957759](figures/log_proxy_started.png)

3. 启动失败在实例前显示红色圆点以及红色感叹号，表示代理启动异常，当鼠标悬停在红色感叹上可以看到异常信息。

    ![image-20240313210957759](figures/log_proxy_start_error.png)

#### 卸载代理

1. 在【已安装代理】TAB中，当鼠标悬停在实例上时，可以看到实例后有【卸载】按钮，点击【卸载】按钮，弹出卸载窗口。

    ![image-20240313210957759](figures/log_proxy_uninstall.png)

2. 点击【一键卸载】按钮，开始卸载操作，点击【取消】按钮，关闭卸载窗口。

    **注：** 卸载过程不可逆，卸载完成后将不会再采集该实例的日志，请谨慎卸载！

    ![image-20240313210957759](figures/log_proxy_uninstall_from.png)

3. 点击【一键卸载】按钮后，会弹出卸载过程窗口，卸载完成后，可以点击【返回】按钮，跳转到卸载代理窗口，点击【取消】关闭卸载窗口。

    ![image-20240313210957759](figures/log_proxy_uninstalled.png)

4. 卸载代理完成后，会在【已安装代理】TAB中删除一条数据。

#### 代理端状态监控、自动拉起

通过定时器每隔1分钟检测代理端运行状态、当代理端运行不健康时会触发自动拉起操作。

###  日志及日志上下文查询

1. 在【日志检索】页面，输入对应的查询条件，点击【查询】，显示【日志分布图】和【日志列表】；查询支持输入Lucene语法进行全文检索操作。

    ![image-20230313204448621](figures/log_lucene.png)

2. 选择某个【集群/实例】、【类型】、【级别】（可单选），将查询该实例的日志。

    ![image-20230313204736957](figures/log_search_instance_type_leave.png)

3. 将鼠标移到列表中的日志，将在该日志右边显示【上下文】按钮图标，点击该图标，将打开新页面，查询该日志上下文。

    说明：在日志上下文中，该日志高亮。

    ![image-20230313205050119](figures/log_context_btn.png)

    ![image-20230313205150760](figures/logContext.png)

##  FAQ

1. 使用在线安装代理或服务端时，安装界面卡住不动。

    原因：服务器下载速度过慢或下载异常会发生此情况，可尝试使用离线安装的方式进行安装。

2. 服务器端启动失败。

    ![image-20230331163722608](figures/error.png)
    
    问题原因：系统资源不足会导致Elasticsearch启动失败，具体可查看Elasticsearch安装目录下的logs文件夹下的日志信息。
    
    解决方案：在/etc/security/limits.conf系统配置文件中添加* soft nofile 65536 * hard nofile 65536。
