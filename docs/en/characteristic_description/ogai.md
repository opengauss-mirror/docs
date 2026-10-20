---
description: This document describes OGAI Feature Documentation in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, OGAI Feature Documentation, features, Availability, Feature Overview]
---

# OGAI Feature Documentation

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:20:37.648Z pushedAt=2026-09-22T11:12:32.679Z -->

## Availability

This feature has been available since openGauss 7.0-RC3.

## Feature Overview

OGAI (openGauss AI) is an intelligent vectorization framework plug-in for the openGauss database, providing a one-stop AI capability integration solution. With OGAI, users can directly invoke AI models inside the database to perform operations such as text embedding, text generation, and document re-ranking, without relying on an external application layer, greatly simplifying the development process of RAG (Retrieval-Augmented Generation) applications.

## Customer Benefits

- **Improved development efficiency**: No need to implement complex vectorization and retrieval logic at the application layer; all AI capabilities are invoked directly through SQL functions.
- **Guaranteed data consistency**: Text is automatically vectorized, vector data and business data are stored in the same database, and updates are synchronized automatically through triggers.
- **Multi-model support**: Supports multiple model providers such as OpenAI, Qwen, Ollama, and ONNX.
- **Flexible deployment**: Supports cloud API invocation and local model deployment.

## Feature Description

OGAI is provided as a database extension. Before use, install it with `CREATE EXTENSION ogai` and create an encryption key file for secure storage of API keys.

OGAI provides the following core capabilities:

- **Embedding**: Converts text into vector representations and supports multiple embedding models.
- **Generate**: Calls a large language model to generate answers.
- **Rerank**: Reranks retrieval results by relevance.
- **Chunk**: Intelligently splits long text into segments suitable for processing.
- **Vectorize**: Automates vectorization tasks for table data, supporting both synchronous and asynchronous modes.
- **Search**: Performs semantic retrieval based on vector similarity.
- **Hybrid search**: Combines vector retrieval with BM25 full-text retrieval.
- **RAG Q&A**: End-to-end retrieval-augmented generation Q&A.

For detailed system tables, system functions, and usage guidance, see [OGAI Usage Guide](https://docs.opengauss.org/en/docs/latest/datavec/ogai_usage_guide.html).

## Feature Enhancements

None.

## Feature Constraints

The OGAI feature specification constraints are as follows:

| Constraint Type | Detailed Description |
|----------|----------|
| Plug-in Installation | Before use, run `CREATE EXTENSION ogai` to install the plug-in. |
| Encryption Key | Before use, create an encryption key file by running `gs_guc generate -S XXX -D $GAUSSHOME/bin -o ogai` for secure storage of API keys. |
| Model Dependency | Before use, correctly configure the API address and key of the model provider. |
| Network Requirement | Calling cloud models requires the database server to be able to access the external network. |
| UPDATE Restriction | Vectorization tasks do not support synchronization triggered by UPDATE operations; use DELETE + INSERT instead. |
| BM25 Type Restriction | When the BM25 index is enabled, the text column must be of the TEXT type. |
| Asynchronous Task | Using asynchronous vectorization requires enabling the `enable_async_ogai` parameter and restarting the database. |
| Row-Level Security | Row-level security policies are enabled on OGAI system tables, so users can access only the models and tasks they created. |
| Chunking Parameter | `max_chunk_overlap` must be smaller than `max_chunk_size`. |

## Dependencies

[Vector Database Feature](https://docs.opengauss.org/en/docs/latest/datavec/datavec_overview.html)
