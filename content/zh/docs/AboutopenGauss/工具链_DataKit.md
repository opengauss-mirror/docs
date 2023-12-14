# DataKit

## 可获得性<a name="section56086982"></a>

本特性自openGauss 5.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

DataKit是基于Web的openGauss的可视化的平台系统，目的是方便客户使用和管理openGauss可视化工具，可以为客户降低openGauss数据库安装使用门槛，做到安全中心管理，插件管理，以及其它功能包括一键化部署、卸载、组件化安装、多版本升级、日常运维和。
## 客户价值<a name="section46751668"></a>

openGauss的安装、运维场景对于初级用户或单纯想要测试openGauss数据库基本特性的使用者来说技术难度较大、过程较为复杂、学习曲线较为陡峭，尤其企业版安装对一般用户来说操作难度很大。使用可视化运维平台可以屏蔽openGauss的技术细节，让普通用户能够快速上手体验功能，让运维人员能够快速在企业环境中部署、卸载各类openGauss集群，减少了用户的学习成本和运维成本，实现了对openGauss各种常见操作的可视化，屏蔽了各种不同openGauss版本中的运维命令差异，可以让用户使用相同的方式操作数据库，不用知道命令细节也可以使用openGauss数据库的各项能力，让用户可以专注于自身的业务领域。
## 特性描述<a name="section18111828"></a>

DataKit是基于Web的openGauss的可视化的平台系统，目的是方便客户使用和管理openGauss可视化工具，可以为客户降低openGauss数据库安装使用门槛，做到安全中心管理，插件管理，以及其它功能包括一键化部署、卸载、组件化安装、多版本升级、日常运维和。

## 特性增强<a name="section28788730"></a>

业务开发插件：\
1、增强数据库对象管理：\
1）函数/过程调试能力：支持子函数进入/退出调试、调试存储过程覆盖度查看、导航栏显示package、调试package里的函数/过程\
2）视图管理：支持编辑视图名称/模式/代码\
3）模式管理：支持创建/编辑/删除模式\
4）支持普通表和分区表管理：表数据：增/删/改/条件筛选/排序筛选/分页查询数据、导入表数据
表管理：列/索引/约束的增/删/改/查、清空/截断/删除/分析表\
5）导出DDL和数据：支持导出模式DDL/DDL和数据、导出函数/过程DDL、导出表DDL/DDL和数据/数据、导出序列DDL/DDL和数据、导出视图DDL\
6）用户/角色管理：支持创建/删除用户/角色\
2、增强SQL终端管理：支持导入/导出SQL脚本、SQL助手、切换连接终端、重命名终端、查询执行历史\
3、页面窗口优化：窗口支持拖动

实例监控插件：\
1、完善监控指标体系和下钻能力，增强从指标分析问题的能力\
2、支持集群的健康、延迟和资源压力监控\
3、支持通过ASP分析历史数据库问题

智能诊断插件：\
1、支持基于专家知识库、历史视图和指标分析历史问题，智能给出问题根因与优化建议\
2、优化SQL诊断任务流程，丰富诊断知识库

告警监控：\
1、支持多种通知渠道，支持自定义通知内容\
2、提供内置规则和自定义规则，支持基于指标和日志的告警\
3、可通过模板、配置等功能对不同数据库灵活配置所需的告警规则

## 特性约束<a name="section06531946143616"></a>

- 当前平台运行依赖于openJdk11。

- 平台使用的数据库，当前仅支持openGauss数据库，并且需要提前创建database。

- 需要将部署服务器IP配置在平台使用的数据库（openGauss）的白名单列表中。

- 平台默认的登录账号密码：admin/admin123，请在首次登录后及时修改密码。

## 依赖关系<a name="section57771982"></a>

无

## 功能插件

<a name="table1652718018281"></a>
<table><tbody>
<tr id="row14118151122812"><td class="cellrowborder" valign="top" width="20%"><p id="p10118181152814"><a name="p10118181152814"></a><a name="p10118181152814"></a><strong id="b1711814115287"><a name="b1711814115287"></a><a name="b1711814115287"></a><span>插件名称</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="40%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>介绍</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>源码</span></strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%"><p id="p1311815110284"><a name="p1311815110284"></a><a name="p1311815110284"></a><strong id="b511810110288"><a name="b511810110288"></a><a name="b511810110288"></a><span>文档</span></strong></p>
</td>
</tr>
<tr> 
<td>基础运维插件</td>
<td>实现数据库集群的基础管理能力，包括安装、导入、启停、备份恢复、升级等操作；也支持websell、安装包管理等能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/base-ops">base-ops</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/base-ops/README.md ">base-ops使用说明</a></td>
</tr>
<tr> 
<td>数据迁移插件</td>
<td>实现其他数据库到openGauss一站式迁移方案（当前支持MySQL）</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/data-migration">data-migration</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/data-migration/README.md ">data-migration使用说明</a></td>
</tr>
<tr> 
<td>告警监控插件</td>
<td>为openGauss提供告警和通知能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/alert-monitor">alert-monitor</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/alert-monitor/README.md ">alert-monitor使用说明</a></td>
</tr>
<tr> 
<td>业务开发插件</td>
<td>业务开发是一个基于 Browser/Server 的通用集成开发环境， 帮助数据库开发人员便捷地构建应用程序，以图形化界面形式提供数据库关键特性。业务开发支持的主要功能点包括：创建和管理数据库对象（表、视图、序列、同义词等）、执行 SQL 语句、 编译和执行 PL/SQL语句。</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/data-studio">data-studio</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/data-studio/readme.md ">data-studio使用说明</a></td>
</tr>
<tr> 
<td>实例监控插件</td>
<td>提供实例、集群等监控能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/observability-instance">observability-instance</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/observability-instance/README.md ">observability-instance使用说明</a></td>
</tr>
<tr> 
<td>日志检索插件</td>
<td>提供日志检索能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/observability-log-search">observability-log-search</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/observability-log-search/README.md ">observability-log-search使用说明</a></td>
</tr>
<tr> 
<td>智能诊断插件</td>
<td>提供SQL诊断能力</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/observability-sql-diagnosis">observability-sql-diagnosis</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/observability-sql-diagnosis/README.md ">observability-sql-diagnosis使用说明</a></td>
</tr>
<tr> 
<td>openGauss数据库监控插件</td>
<td>openGauss通用的监控插件生成工具，支持Prometheus、Zabbix以及Nagios平台</td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/openGauss-tools-monitor">openGauss-tools-monitor</a></td>
<td><a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/plugins/openGauss-tools-monitor/README.md ">openGauss-tools-monitor使用说明</a></td>
</tr>
</tbody>
</table>

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-workbench/tree/master

详细参考文档： <a href="https://gitee.com/opengauss/openGauss-workbench/blob/master/README.md ">README.md</a>