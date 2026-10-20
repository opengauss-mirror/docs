---
description: This document describes DataKit Migration Optimization in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, DataKit Migration Optimization, features, Availability, Feature Overview]
---

# DataKit Migration Optimization

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:06:57.327Z pushedAt=2026-09-22T11:12:32.612Z -->

## Availability

This feature has been available since openGauss 7.0.0.

## Feature Overview

The DataKit migration optimization feature enhances the entire data migration process. By automatically creating `definer` users, skipping full verification, and integrating tool uninstallation, it improves migration usability, efficiency, and controllability to meet migration requirements in various scenarios.

## Customer Benefits

The DataKit migration optimization feature is designed based on actual user requirements and brings value to DataKit usage and migration in various scenarios:

- For MySQL migration scenarios, the feature reduces the complexity of migrating MySQL objects, improves the success rate of MySQL object migration, and enhances the usability and efficiency of the migration tool.
- For migration process control, after the feature is implemented, users can choose whether to start the full verification process based on business needs, gaining more control over the migration process. For migration scenarios that do not require data verification, migration efficiency can be effectively improved.
- For DataKit uninstallation scenarios, the feature implements one-click uninstallation of DataKit. Users can uninstall DataKit itself and the `migration-portal`, `prometheus`, and `instance-exporter` tools installed by it through a unified entry, reducing the complexity of uninstalling DataKit and installed tools, avoiding residual files after uninstallation, and improving uninstallation efficiency.

## Feature Description

This feature focuses on the DataKit data migration capability and implements the following functions:

- During MySQL full migration, when the connection user on the target side has the sysadmin privilege, the migration tool automatically creates a user with the same name as the MySQL object `definer` on the target side and completes privilege assignment, eliminating the need for manual user creation and authorization.
- A migration mode option that excludes full verification is added to the DataKit migration modes, allowing users to choose whether to start the validation process based on business requirements. For scenarios where data validation is not required, the validation step can be skipped to improve migration efficiency.
- A DataKit uninstall function is added, which supports controlling the uninstall scope through options. Users can choose to uninstall only DataKit itself, or simultaneously uninstall the installed `migration-portal`, `prometheus`, and `instance-exporter` tools, enabling one-click cleanup of migration-related components and avoiding uninstall residue.

## Feature Constraints

When using the DataKit uninstall function, note the following constraints:

- When uninstalling tools installed on a remote environment, you must interactively enter the password of the installation environment user to connect to the remote host and run the uninstall command.
- When uninstalling tools installed on a remote environment, the environment where DataKit resides must have the `sshpass` command installed in advance to transmit the user password when connecting to the remote host.

## Dependencies

None.
