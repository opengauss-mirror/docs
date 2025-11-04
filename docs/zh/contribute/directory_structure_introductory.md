# 文档组织架构

## 介绍

本文介绍 openGauss 文档仓的组织架构。

仓库目录定义如下：/docs（企业版）与 /docs-lite（轻量版）为核心文档目录，其下的 /zh、/en 子目录分别对应官网的中英文版本。此外，设有 /archive 作为文档临时存储区，用于存放待完善或暂不推广的文档，待其满足要求后，应迁移至核心目录以供官网发布。

```text
├─archive   <!-- 暂不发布的文档 -->
│  ├─en       <!-- 英文文档 -->
│  └─zh       <!-- 中文文档 -->
├─docs      <!-- 企业版文档 -->
│  ├─en       <!-- 英文文档 -->
│  └─zh       <!-- 中文文档 -->
├─docs-lite <!-- 轻量版文档 -->
│  ├─en       <!-- 英文文档 -->
│  └─zh       <!-- 中文文档 -->
```

## 仓库目录结构说明

以企业版中文文档为例，文档中心的15本手册与仓库`/docs/zh`下的15个子目录一一对应，如下所示：

```text
├─openGauss/docs 仓
├─docs
│  ├─en
│  └─zh
│     ├─release_notes                     <!-- 发行说明 -->
│     ├─about_opengauss                   <!-- 关于openGauss -->
│     ├─getting_started                   <!-- 新手入门 -->
│     ├─installation_guide                <!-- 安装指南 -->
│     ├─sql_reference                     <!-- SQL教程 -->
│     ├─database_administration_guide     <!-- 数据库管理指南 -->
│     ├─database_om_guide                 <!-- 数据库运维指南 -->
│     ├─performance_tuning_guide          <!-- 性能调优指南 -->
│     ├─data_migration_guide              <!-- 数据迁移指南 -->
│     ├─datavec                           <!-- 向量数据库 -->
│     ├─resource_pooling                  <!-- 资源池化 -->
│     ├─developer_guide                   <!-- 应用开发指南 -->
│     ├─compilation_guide                 <!-- 编译指南 -->
│     ├─extension_reference               <!-- 插件参考 -->
│     ├─database_reference                <!-- 数据库参考 -->
│     ├─tool_and_commandreference         <!-- 工具和命令参考 -->
│     ├─characteristic_description        <!-- 特性参考 -->
│     └─appendix                          <!-- 附录-->
├─docs-lite
│  ├─en
│  └─zh
```

## 目录配置文件格式（_toc.yaml）

每本手册都有一个独立的_toc.yaml 目录配置文件，示例如下：

```yaml
label: 安装指南
isManual: true
sections:
    - label: 安装概述
    href: ./installation_overview.md
    - label: 容器镜像安装
    href: ./installing_the_container_image.md
    sections:
        - label: 单节点安装
        href: ./installation_on_a_single_node_container.md
        - label: 一主两备安装
        href: ./one_primary_and_two_backup_installations_without_cm_container.md
```

- label：手册名称。
- isManual：标识手册的目录配置文件。
- sections：
    - label：章节名称。
    - href：文档内容文件地址（建议使用相对路径）。
