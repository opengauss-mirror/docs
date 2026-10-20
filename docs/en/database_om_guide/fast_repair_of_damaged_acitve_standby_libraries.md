---
description: This document describes Fast Repair of Damaged Pages on Primary and Standby Nodes in openGauss.
keywords: [openGauss, Fast Repair of Damaged Pages on Primary and Standby Nodes, database O&M]
---

# Fast Repair of Damaged Pages on Primary and Standby Nodes

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:23.556Z -->

During database operation, disk issues such as accidental data overwriting can corrupt disk data and disrupt normal database functioning. To resolve this, openGauss provides a fast repair feature for damaged pages on both the primary and standby nodes, ensuring database availability.

- Standby repairs primary (read-time mitigation):

openGauss supports repairing primary node page corruption during data reads. When the primary reads data, it scans pages from disk into memory. If a corrupted page is detected, the primary connects remotely to the standby node via the page reading function. The standby returns the intact page to the primary, which then passes it to the upper layer, masking the corruption. Strictly speaking, this scenario mitigates the issue rather than fixes it, as the primary does not overwrite the underlying corrupted page on disk.

- Primary repairs standby (real-time fix):

Unlike the mitigation scenario above, if the standby detects a corrupted page, it fetches the correct data from the primary to perform an actual repair. This process overwrites the underlying data page on the standby. Due to version differences between the primary and standby, the standby can only perform this repair during the replay process. Additionally, this method requires a stable network connection between the primary and standby nodes.

The overall logic and workflow are as follows:

1. During normal replay on the standby, if the replay thread encounters a corrupted page, it attempts to fetch the corresponding physical page from the primary via `remote read`.

2. Upon receiving the page from the primary, the standby checks the page version. If the version is newer, the standby records the page and waits until the Log Sequence Number (LSN) advances to that point; no repair occurs at this stage.

3. If the replay process subsequently requires this page, the standby retrieves it from the recorded cache. If the page matches the current replay target, the replay is marked as complete, and the page is dirtied and flushed to disk normally.

Through this workflow, even if a business thread scans a corrupted page, the replay process ensures data consistency between the standby and the primary, mitigating the risk of unrecoverable corruption.

This feature supports user data repair only on single-cluster standby nodes. It does not support compressed tables or column-store tables. Repairs occur only during the replay process; they are not supported during standby read operations.
