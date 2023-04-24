# Example: Logical Replication Code<a name="EN-US_TOPIC_0289900901"></a>

The following example demonstrates how to use the logical replication function through the JDBC API.

For logical replication, in addition to the configuration items described in section [Logical Decoding](../DatabaseOMGuide/logical-decoding.md), the following configuration items are added for streaming decoders such as JDBC:

1.  Decoding thread concurrency

    Configure **parallel-decode-num** to specify the number of decoders for parallel decoding. The value is an integer ranging from 1 to 20. The value **1** indicates that decoding is performed based on the original serial logic. Other values indicate that parallel decoding is enabled. The default value is **1**. When this parameter is set to **1**, do not configure the following options: **decode-style**, **batch-sending**, and **parallel-queue-size**.

2.  Decoding format

    Configure **decode-style** to specify the decoding format. The value can be **'j'**, **'t'** or **'b'** of the char type, indicating the JSON, text, or binary format, respectively. The default value is **'b'**, indicating binary decoding. This item is set only when parallel decoding is allowed and the binary decoding is supported only in the parallel decoding scenario. For the JSON and text formats corresponding to the binary format, in the decoding result sent in batches, the uint32 consisting of the first four bytes of each decoding statement indicates the total number of bytes of the statement (the four bytes occupied by the uint32 are excluded, and **0** indicates that the decoding of this batch ends). The 8-byte uint64 indicates the corresponding LSN (**begin** corresponds to **first\_lsn**, **commit** corresponds to **end\_lsn**, and other values correspond to the LSN of the statement).


>![](public_sys-resources/icon-note.gif) **NOTE:**
>
>The binary encoding rules are as follows:
>
>1.  The first four bytes represent the total number of bytes of the decoding result of statements following the statement-level delimiter letter P (excluded) or the batch end character F (excluded). If the value is **0**, the decoding of this batch ends.
>2.  The next eight bytes (uint64) indicate the corresponding LSN (**begin** corresponds to **first\_lsn**, **commit** corresponds to **end\_lsn**, and other values correspond to the LSN of the statement).
>3.  <a name="li12661162913519"></a>The next one-byte letter can be **B**, **C**, **I**, **U**, or **D**, representing BEGIN, COMMIT, INSERT, UPDATE, or DELETE.
>4.  If the letter described in [3](#li12661162913519) is **B**:
>      1.  The next eight bytes (uint64) indicate the CSN.
>      2.  The next eight bytes (uint64) indicate first\_lsn.
>      3.  (Optional) If the next 1-byte letter is **T**, the following four bytes (uint32) indicate the timestamp length for committing the transaction. The following characters with the same length are the timestamp character string.
>      4.  Because there may still be a decoding statement subsequently, a 1-byte letter **P** or **F** is used as a separator between statements. **P** indicates that there are still decoded statements in this batch, and **F** indicates that this batch is completed.
>5.  If the letter described in [3](#li12661162913519) is **C**:
>      1.  (Optional) If the next 1-byte letter is **X**, the following eight bytes (uint64) indicate XID. 
>      2.  (Optional) If the next 1-byte letter is **T**, the following four bytes (uint32) indicate the timestamp length. The following characters with the same length are the timestamp character string.
>      3.  When logs are sent in batches, decoding results of other transactions may still exist after a COMMIT log is decoded. If the next one-byte letter is **P**, the batch still needs to be decoded. If the letter is **F**, the batch decoding ends.
>6.  If the letter described in [3](#li12661162913519) is **I**, **U**, or **D**:
>      1.  The next two bytes (uint16) indicate the length of the schema name.
>      2.  The schema name is read based on the preceding length.
>      3.  The next two bytes (uint16) indicate the length of the table name.
>      4.  The table name is read based on the preceding length.
>      5.  (Optional) If the next 1-byte letter is **N**, it indicates a new tuple. If the letter is **O**, it indicates an old tuple. In this case, the new tuple is sent first.
>          1.  The next two bytes (uint16) indicate the number of columns to be decoded for the tuple, which is recorded as **attrnum**.
>          2.  The following procedure is repeated for *attrnum* times.
>              1.  The next two bytes (uint16) indicate the length of the column name.
>              2.  The column name is read based on the preceding length.
>              3.  The next four bytes (uint32) indicate the OID of the current column type.
>              4.  The next four bytes (uint32) indicate the length of the value (stored in the character string format) in the current column. If the value is **0xFFFFFFFF**, it indicates null. If the value is **0**, it indicates a character string whose length is 0.
>              5.  The column value is read based on the preceding length.
>      6.  Because there may still be a decoding statement after, if the next one-byte letter is **P**, it indicates that the batch still needs to be decoded, and if the next one-byte letter is **F**, it indicates that decoding of the batch ends.

3. Decoding only on the standby node

   Configure the **standby-connection** parameter to specify whether to perform decoding only on the standby node. The value is of the Boolean type (**0** or **1**). The value **true** (or **1**) indicates that only the standby node can be connected for decoding. When the primary node is connected for decoding, an error is reported and the system exits. The value **false** (or **0**) indicates that there is no restriction. The default value is **false** (**0**).

4. Batch sending

   Configure **sending-batch** to specify whether to send results in batches. The value is an integer ranging from 0 to 1. The value **0** indicates that decoding results are sent one by one. The value **1** indicates that decoding results are sent in batches when the accumulated size of decoding results reaches 1 MB. The default value is 0. This parameter can be set only during parallel decoding. In the scenario where batch sending is enabled, if the decoding format is 'j' or 't', before each original decoding statement, a uint32 number is added indicating the length of the decoding result (excluding the current uint32 number), and a uint64 number is added indicating the LSN corresponding to the current decoding result.

5. Length of the parallel decoding queue

   Configure **parallel-queue-size** to specify the length of the queue for interaction among parallel logical decoding threads. The value ranges from 2 to 1024 and must be a power of 2. The default value is **128**. The queue length is positively correlated with the memory usage during decoding.

6. Memory threshold for logical decoding

   The **max-txn-in-memory** configuration item specifies the memory threshold for caching the intermediate decoding result of a single transaction, in MB. The value ranges from 0 to 100. The default value is **0**, indicating that the memory usage is not controlled. The **max-reorderbuffer-in-memory** configuration item specifies the memory threshold for caching intermediate decoding results of all transactions, in GB. The value ranges from 0 to 100. The default value is **0**, indicating that the memory usage is not controlled. When the memory usage exceeds the threshold, intermediate decoding results are written into a temporary file during decoding, affecting the logic decoding performance.

7. Logical decoding sending timeout threshold

   The **sender-timeout** configuration item specifies the heartbeat timeout threshold between the kernel and client. If no message is received from the client within the period, the logic decoding stops and disconnects from the client. The unit is ms, and the value range is [0,2147483647]. The default value depends on the value of **logical\_sender\_timeout**.


The decoding performance (Xlog consumption) is greater than or equal to 100 Mbps in the following standard parallel decoding scenario: 16-core CPU, 128 GB memory, network bandwidth \> 200 Mbps, 10 to 100 columns in a table, 0.1 KB to 1 KB data in a single row, INSERT as main DML operations, less than 4096 statements in a single transaction, **parallel-decode-num** set to **8**, decoding format as **'b'**, and batch sending function enabled. To ensure that the decoding performance meets the requirements and minimize the impact on services, you are advised to set up only one parallel decoding connection on a standby node to ensure that the CPU, memory, and bandwidth resources are sufficient.

Note: The logical replication class PGReplicationStream is a non-thread-safe class. Concurrent calls may cause data exceptions.

```
// Logical replication function example: file name, **LogicalReplicationDemo.java**
// Prerequisite: Add the IP address of the JDBC user machine to the database whitelist. Add the following content to **pg_hba.conf**:
// Assume that the IP address of the JDBC user machine is 10.10.10.10.
//host    all             all             10.10.10.10/32        sha256
//host    replication     all             10.10.10.10/32        sha256

import org.postgresql.PGProperty;
import org.postgresql.jdbc.PgConnection;
import org.postgresql.replication.LogSequenceNumber;
import org.postgresql.replication.PGReplicationStream;

import java.nio.ByteBuffer;
import java.sql.DriverManager;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class LogicalReplicationDemo {
    private static PgConnection conn = null;
    public static void main(String[] args) {
        String driver = "org.postgresql.Driver";
 // Configure the IP address and **haPort** of the database. By default, the value of **haPort** is the port number of the connected DN plus 1.
        String sourceURL = "jdbc:postgresql://$ip:$port/postgres";    
 // The default name of the logical replication slot is **replication_slot**.
 // Test mode: Create a logical replication slot.
        int TEST_MODE_CREATE_SLOT = 1;
 // Test mode: Enable logical replication (the prerequisite is that the logical replication slot already exists).
        int TEST_MODE_START_REPL = 2;
 // Test mode: Delete a logical replication slot.
        int TEST_MODE_DROP_SLOT = 3;
        // Enable different test modes.
        int testMode = TEST_MODE_START_REPL;

        try {
            Class.forName(driver);
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

        try {
            Properties properties = new Properties();
            PGProperty.USER.set(properties, "user");
            PGProperty.PASSWORD.set(properties, "passwd");
     // For logical replication, the following three attributes are mandatory.
            PGProperty.ASSUME_MIN_SERVER_VERSION.set(properties, "9.4");
            PGProperty.REPLICATION.set(properties, "database");
            PGProperty.PREFER_QUERY_MODE.set(properties, "simple");
            conn = (PgConnection) DriverManager.getConnection(sourceURL, properties);
            System.out.println("connection success!");

            if(testMode == TEST_MODE_CREATE_SLOT){
                conn.getReplicationAPI()
                        .createReplicationSlot()
                        .logical()
                        .withSlotName("replication_slot") // If the character string contains uppercase letters, the uppercase letters are automatically converted to lowercase letters.
                        .withOutputPlugin("mppdb_decoding")
                        .make();
            }else if(testMode == TEST_MODE_START_REPL) {
                // Create a replication slot before enabling this mode.
                LogSequenceNumber waitLSN = LogSequenceNumber.valueOf("6F/E3C53568");
                PGReplicationStream stream = conn
                        .getReplicationAPI()
                        .replicationStream()
                        .logical()
                        .withSlotName("replication_slot")
                        .withSlotOption("include-xids", false)
                        .withSlotOption("skip-empty-xacts", true)
                        .withStartPosition(waitLSN)
                        .withSlotOption("parallel-decode-num", 10) // Decoding thread concurrency.
                        .withSlotOption("white-table-list", "public.t1,public.t2") // Whitelist
                        .withSlotOption("standby-connection", true) // Forcible standby decoding
                        .withSlotOption("decode-style", "t") // Decoding format
                        .withSlotOption("sending-batch", 1) // Decoding results are sent in batches.
                        .withSlotOption("max-txn-in-memory", 100) // The memory threshold for flushing a single decoding transaction to disks is 100 MB.
                        .withSlotOption("max-reorderbuffer-in-memory", 50) // The total memory threshold for flushing decoding transactions that are being handled to disks is 50 GB.
                        .start();
                while (true) {
                    ByteBuffer byteBuffer = stream.readPending();

                    if (byteBuffer == null) {
                        TimeUnit.MILLISECONDS.sleep(10L);
                        continue;
                    }

                    int offset = byteBuffer.arrayOffset();
                    byte[] source = byteBuffer.array();
                    int length = source.length - offset;
                    System.out.println(new String(source, offset, length));

                    // If the LSN needs to be flushed, call the following APIs based on the service requirements:
                    //LogSequenceNumber lastRecv = stream.getLastReceiveLSN();
                    //stream.setFlushedLSN(lastRecv);
                    //stream.forceUpdateStatus();

                }
            }else if(testMode == TEST_MODE_DROP_SLOT){
                conn.getReplicationAPI()
                        .dropReplicationSlot("replication_slot");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }
    }
}
```
