# gs_upgradechk

## 简介
gs_upgradechk是一个升级之后元数据完整性的检测工具，由python3编写，在数据库升级之后，对元数据进行检验，检查在升级过程前后，是否出现元数据的损坏。目前仅支持检测builtin、initdb的元数据，对于用户所创建的表等，暂时不会进行检测。

主要功能如下：
- **导出**：基于某个数据库，生成一份元数据校验地图。
- **校验**：基于某个元数据校验地图，对数据库进行元数据的校验，并生成报告。


## 如何使用
在安装了openGauss的环境上，使用如下命令运行此工具：
```angular2html
python3 gs_upgradechk [ action [ config-params, ... ] ]
```
其中action支持如下参数选项：
```angular2html
export                    导出
check | verify            校验
help | -h | -? | --help   帮助

默认值为 help, 不区分大小写
```

config-params支持的参数选项及其默认值如下
```config
-p  | --port : 16666
-F  | --report-format : md
-M  | --report-mode : summary
-v  | --vmap : ''
-d  | --debug
```

- port：数据库端口号。
- debug：会打印更多的日志，用于工具问题定位。无参数，默认关闭，指定时开启。
- report-format：校验报告格式，当前仅支持markdown。
- report-mode：校验报告详细程度，支持`summary`和`detail`两种模式，默认`summary`模式。此选项仅会影响生成的报告的详细程度，并不影响校验内容的多少，`detail`仅是会把所有的校验规则无论对错都整理输出，报告整理比较耗时，而`summary`则仅整理输出错误的内容。
- vmap：指定的元数据校验地图。若指定了，则在校验时会使用指定vmap，否则会自动检测目标数据库版本并在网上下载和使用我们生成好的vmap。

默认标准vmap下载地址如下：
```angular2html
https://opengauss.obs.cn-south-1.myhuaweicloud.com/upgrade_checker/standard_meta_verify_map_XX_X.X.X.vmap
```
其中`XX`表示工具版本，`X.X.X`表示openGauss版本

## 版本支持
工具版本与对应所支持的openGauss版本如下：
<table>
  <thead align="left">
    <tr>
      <th class="cellrowborder" valign="top"><p>工具版本</p></th>
      <th class="cellrowborder" valign="top"><p>版本git id</p></th>
      <th class="cellrowborder" valign="top"><p>支持openGauss</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="cellrowborder" valign="top"><p> 最新 </p></td>
      <td class="cellrowborder" valign="top"><p> - </p></td>
      <td class="cellrowborder" valign="top"><p> 3.0.3+，5.0.X，5.1.X </p></td>
    </tr>
    <tr>
      <td class="cellrowborder" valign="top"><p> 5010000 </p></td>
      <td class="cellrowborder" valign="top"><p> - </p></td>
      <td class="cellrowborder" valign="top"><p> 3.0.3+，5.0.X，5.1.X </p></td>
    </tr>
  </tbody>
</table>

其中：`X`代表通配符，即全系列产品；`N+`代表范围，即N和之后的版本。

在openGauss升级时，按照新数据库的版本选择本工具版本


## 工具结构
```dir introduce
| OM/scripts
    |d-- upgrade-checker                工具主要代码等
        |d-- utils                          工具代码-通用组件
        |d-- style                          工具代码-报告风格
        |d-- rules                          工具代码-规则组件
        |f-- project.py                     工具代码
        |f-- ..                             工具代码
        |d-- dev                            开发者便携脚本
        |d-- workspace                      工具默认工作目录[1]
            |d-- vmaps                        -基准校验地图存放位置
            |d-- project_name-workspace       -某次检测的运行工作目录
                |f-- run.log                    -运行日志
        |d-- results                        工具默认结果目录[2]
            |f- user-created-vmap            -用户自己生成的校验地图
            |f- report                       -某次检测的结果报告
    |f-- gs_upgradechk                  工具入口脚本
```

注意：[1]工具工作目录、[2]工具结果目录，正确配置OM环境变量时，会使用OM日志路径。

## 校验原理
数据库元数据，实际就是对一张张系统表以及其数据、openGauss数据库二进制程序内硬编码的部分数据等。
在升级过程中，切换二进制后，硬编码内容部分也随之切换。因此对于元数据的校验，仅需要校验系统表及其数据即可。

对于系统表和数据的校验，最直接的便是通过查询语句进行查询。
那么本工具实际上就是一个：执行一系列查询语句，并分析结果是否符合预期，并整理成报告的工具。

而在上述定义中涉及到的三个点：查询语句、预期结果、报告，分别如下定义：
- **规则(Rule)**：校验某个项目的一条查询语句。这条查询语句需要的查询结果需要按照key-value进行组织，其中key的作用是可以让我们更清楚地知道查询结果的每一列都是什么，更方便的进行整理分析。例如： `select oid as key, relname as val from pg_class where oid < 10000`。同时尽可能地区分builtin、initdb、user的数据。
- **元数据校验地图(VerifyMap)**: 规则与其预期输出的集合。
- **报告(Report)**: 规则执行结果与预期结果的对比分析结论所形成的汇总。
