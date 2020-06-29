# Retrying a aborted transaction \[Orange\]<a name="EN-US_TOPIC_0257867386"></a>

example demonstrating how to retry an aborted transaction, failing to commit due to optimistic concurrency control \(a rare case, also present with disk-tables in transactions using SERIALIZABLE or REPEATABLE-READ isolation levels\)

The following describes how to retry a table command after multiple sessions attempt to update the same table simultaneously. You may refer to the Retrying T-SQL Code section for more detailed information. The following example is taken from TPC-C payment transaction.

```
int commitAborts = 0;
 
while (commitAborts < RETRY_LIMIT) {
                
                try {                        
                                stmt = db.stmtPaymentUpdateDistrict;
                                stmt.setDouble(1, 100);
                                stmt.setInt(2, 1);
                                stmt.setInt(3, 1);
                                stmt.executeUpdate();
 
                                db.commit();                     
                                
                                break;
                }              
                catch (SQLException se) {
                                if (se != null && se.getMessage().contains("could not serialize access due to concurrent update")) {
                                                log.error("commmit abort = " + se.getMessage());
                                                commitAborts++;
                                                continue;
                                } else {
                                                db.rollback();
                                }
                                
                                break;
                }
}
```

