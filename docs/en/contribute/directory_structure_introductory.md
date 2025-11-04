# Overview

## Introduction

This document describes the structure of the documentation repository. 

The **docs** and **docs-lite** directory in the repository contains content published on the official website. It includes **en** and **zh** subdirectories for English and Chinese documentation, respectively, mirroring the website structure. The repository also features an **archive** directory for documents not yet ready for publication. Once finalized, these documents are moved to the **docs** and **docs-lite** directory for website display.

```text
├─archive   <!-- Unpublished documentation -->
│  ├─en       <!-- English content -->
│  └─zh       <!-- Chinese content -->
├─docs      <!-- Enterprise documentation -->
│  ├─en       <!-- English content -->
│  └─zh       <!-- Chinese content -->
├─docs-lite <!-- Lite documentation -->
│  ├─en       <!-- English content -->
│  └─zh       <!-- Chinese content -->
```

## Document Repository Structure Overview

Below is the directory structure (the following directory structures use **en** as an example):

```text
├─openGauss/docs
├─docs
│  ├─zh
│  └─en
│     ├─release_notes                     <!-- Release Notes -->
│     ├─about_opengauss                   <!-- About openGauss -->
│     ├─getting_started                   <!-- Quick Start -->
│     ├─installation_guide                <!-- Installation Guide -->
│     ├─sql_reference                     <!-- SQL Tutorials -->
│     ├─database_administration_guide     <!-- Database Administration Guide -->
│     ├─database_om_guide                 <!-- Database O&M Guide -->
│     ├─performance_tuning_guide          <!-- Performance Tuning Guide -->
│     ├─data_migration_guide              <!-- Data Migration Guide -->
│     ├─resource_pooling                  <!-- Resource Pooling -->
│     ├─developer_guide                   <!-- Application Development Guide -->
│     ├─compilation_guide                 <!-- Compilation Guide -->
│     ├─extension_reference               <!-- Extension Reference -->
│     ├─database_reference                <!-- Database Reference -->
│     ├─tool_and_commandreference         <!-- Tool and Command Reference -->
│     ├─characteristic_description        <!-- Feature Reference -->
│     └─appendix                          <!-- Appendix-->
├─docs-lite
│  ├─zh
│  └─en
```

### Directory Structure File (_toc.yaml)

Every manual includes a **_toc.yaml** file. For example:

```yaml
label:  Installation Guide
isManual: true
sections:
  - label: Installation Overview
    href: ./installation_overview.md
  - label: Container-based Installation
    href: ./container_based_installation.md
    sections:
      - label: Installation on a Single Node
        href: ./installation_on_a_single_node_container.md
```

- label: The manual title.
- isManual: A manual flag.
- sections:
    - label: The name of the first-level directory.
    - href: A reference to the manual directory structure file.
