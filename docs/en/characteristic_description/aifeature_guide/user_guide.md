---
description: This document describes User Guide in openGauss, covering topics such as DBMind Supported Scenario Specifications.
keywords: [openGauss, User Guide, features, DBMind Supported Scenario Specifications]
---

# User Guide<a name="ZH-CN_TOPIC_0000002293420717"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T02:18:24.548Z -->

## DBMind Supported Scenario Specifications<a name="zh-cn_topic_0000002242140561_section6135748481"></a>

- DBMind manages clusters of the same type only and does not support mixed management.
- DBMind depends on the Python driver psycopg2. The open-source psycopg2 is no longer supported; only the self-developed psycopg2 is supported.
- DBMind currently does not support retaining the original data when the metadata database and log files are manually changed.
- DBMind supports managing multiple clusters. However, as more cluster nodes are managed, more resources are consumed. When DBMind consumes excessive resources, stop managing more nodes to avoid insufficient CPU and memory resources.
- It is recommended that one CPU core manage three nodes. If too many instance nodes are managed, DBMind service APIs may time out or the service may become abnormal.
- DBMind Web API calls support 50 concurrent requests.
- DBMind supports only the scenarios described in the documentation. It does not support scenarios not specified in the documentation, deployment forms not included in the examples, usage methods, or other out-of-specification usage.
- The number of instances supported by DBMind must not exceed the maximum limit of the deployment environment (that is, out-of-specification deployment where the CPU runs at 100% for a long time).
- To ensure security by default, use the HTTPS protocol and an encrypted private key file when configuring the exporter collection component and the DBMind Web service. The encryption password of the private key file must meet the company's password complexity requirements.
- When database resources are abnormal, such as when the connection limit is reached, the thread pool is exhausted, or dynamic memory is exhausted, the DBMind service is temporarily unavailable. When the exception is cleared, the DBMind service recovers automatically.

- **[DBMind Mode Description](dbmind_mode.md)**  

- **[DBMind Supported Components](prometheus_exporter_overview.md)**  

- **[DBMind Service Deployment](start_the_collection_component.md)**  

- **[DBMind AI Sub-Functions](ai_sub_functions_of_the_dbmind.md)**  
