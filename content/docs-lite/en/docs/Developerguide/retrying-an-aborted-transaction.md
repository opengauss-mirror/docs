# Retrying an Aborted Transaction<a name="EN-US_TOPIC_0289900438"></a>

In Optimistic Concurrency Control \(OCC\) \(such as the one used by MOT\) during a transaction \(using any isolation level\) no locks are placed on a record until the COMMIT phase. This is a powerful advantage that significantly increases performance. Its drawback is that an update may fail if another session attempts to update the same record. This results in an entire transaction that must be aborted. These so called  _Update Conflicts_  are detected by MOT at the commit time by a version checking mechanism.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>A similar abort happens on engines using pessimistic concurrency control, such as standard PG and the openGauss disk-based tables, when SERIALIZABLE or REPEATABLE-READ isolation level are used.

Such update conflicts are quite rare in common OLTP scenarios and are especially rare in our experience with MOT. However, because there is still a chance that they may happen, developers should consider resolving this issue using transaction retry code.

The following describes how to retry a table command after multiple sessions attempt to update the same table simultaneously. You may refer to the OCC vs 2PL Differences by Example section for more detailed information. The following example is taken from TPC-C payment transaction.

```
int commitAborts = 0;
 
while (commitAborts < RETRY_LIMIT) {
                
    try {                        
        stmt =db.stmtPaymentUpdateDistrict;
        stmt.setDouble(1, 100);
        stmt.setInt(2, 1);
        stmt.setInt(3, 1);
        stmt.executeUpdate();
 
        db.commit();                     
                    
        break;
    }              
    catch (SQLException se) {
        if(se != null && se.getMessage().contains("could not serialize access due to concurrent update")) {
            log.error("commmit abort = " + se.getMessage());
            commitAborts++;
            continue;
        }else {
            db.rollback();
        }
            
        break;
    }
}
```

