---
description: This document describes Product Description in openGauss, covering topics such as Background, Usage Scenarios.
keywords: [openGauss, Product Description, features, Background, Usage Scenarios]
---

# Product Description<a name="ZH-CN_TOPIC_0000002293119521"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T02:04:59.410Z -->

## Background<a name="section182372119558"></a>

Large language models (LLMs) have powerful capabilities in natural language understanding, generation, and reasoning. With the advent of the LLM era, industries across the board are joining the "ALL in AI" wave, and the database field is no exception. When using databases, enterprises need to consult a large amount of documentation, such as product manuals, O&M troubleshooting documents, and API documents, but the efficiency of using these documents is not high. To address this issue, LLMs can be leveraged to obtain documentation through a unified Q&A approach, greatly improving documentation usage efficiency. In addition, in the field of database O&M, an LLM serves as an agent. Based on its powerful understanding and reasoning capabilities, it can perceive the environment and make judgments, select and use appropriate O&M tools, enhance natural language interaction based on tool execution results, and then orchestrate multiple tools to complete more complex O&M tasks.

## Usage Scenarios<a name="section17443173515554"></a>

GaussMaster provides intelligent Q&A, knowledge base management, and intelligent O&M. In addition, the cloud side provides model services, and the cloud management and control side provides an interaction entry, greatly improving the user experience on the cloud side:

- **Intelligent Q&A**: Provides a knowledge base built on openGauss knowledge, supports users in asking openGauss-related questions and receiving answers, and provides the answering process and retrieval results for traceable results, increasing the credibility of the answers.
- **Knowledge base management**: Provides the capability for users to upload documents to build a knowledge base. It supports uploading documents in markdown and docx formats, and users can perform Q&A based on their custom knowledge base. It also supports add, delete, modify, and query operations on knowledge bases and data sources (documents), allowing convenient and efficient management of documents in the knowledge base and enabling customized Q&A services.
- **Intelligent O&M**: Provides interactive O&M capabilities, allowing interactive O&M operations through natural language, improving the efficiency and ease of use of O&M.
