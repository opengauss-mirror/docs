---
description: This document describes oGRecorder Key Synchronization in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, oGRecorder Key Synchronization, tools and commands, Availability, Feature Overview]
---

# oGRecorder Key Synchronization

## Availability<a name="section3480125215575"></a>

This feature has been available since oGRecorder version 7.0.0-RC3.

## Feature Overview<a name="section5814521587"></a>

This feature supports encrypted generation of certificates/keys and inter-node synchronization, enabling multiple nodes to share a unified certificate system and improving the consistency and security of certificate management.

## Customer Value<a name="section148987345811"></a>

This feature provides customers with certificate generation, synchronization, and encryption capabilities, preventing plaintext certificate information leakage and certificate tampering.

## Feature Description<a name="section117041846581"></a>

- **Leak Prevention**: Keys are stored in encrypted form, avoiding exposure of sensitive information in plaintext.
- **Tamper Resistance**: Leveraging WORM file system capabilities to enhance the anti-tampering protection of certificate files.
- **Certificate Synchronization**: Multiple nodes share the same certificate, avoiding errors from manual distribution.

## Enhancements<a name="section21149265913"></a>

This feature enhances certificate security management capabilities on top of existing oGRecorder functionality.

## Constraints<a name="section51513617597"></a>

This feature is only supported in oGRecorder scenarios.

## Dependencies<a name="section20491151513592"></a>

None.

## Application Scenarios<a name="section8406643144719"></a>

During Data Vault installation via the `gr_om` script, certificates can be automatically generated and synchronized. Additionally, the `grcmd` command is provided to support subsequent manual certificate generation and maintenance.
