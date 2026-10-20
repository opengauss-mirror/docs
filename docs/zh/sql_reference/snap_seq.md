---
description: 本文介绍 openGauss SNAP_SEQ 的相关内容与操作方法。
keywords: [openGauss, SNAP_SEQ, SQL参考]
---

# SNAP_SEQ

snap_seq是一个递增的sequence，其为WDR snapshot提供快照的ID。

>[!TIP]须知  
>用户应该禁止对Snapshot schema下的表进行增删改等操作，人为对这些表的修改或破坏可能会导致WDR各种异常情况甚至WDR不可用。  
