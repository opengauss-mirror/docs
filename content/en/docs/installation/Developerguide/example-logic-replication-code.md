# Example: Logic Replication Code<a name="EN-US_TOPIC_0264264802"></a>

The following example demonstrates how to use the logical replication function through the JDBC interface.

```
//Logical replication function example: file name, LogicalReplicationDemo.java
//Prerequisite: Add the IP address of the JDBC user machine to the database whitelist. Add the following content to pg_hba.conf:
//Assume that the IP address of the JDBC user machine is 10.10.10.10.
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
    public static void main(String[] args) {
        String driver = "org.postgresql.Driver";
	//Set the IP address and port number of the database.
        String sourceURL = "jdbc:postgresql://$ip:$port/postgres";
        PgConnection conn = null;
	//The default name of the logical replication slot is replication_slot.
	//Test mode: Create a logical replication slot.
        int TEST_MODE_CREATE_SLOT = 1;
	//Test mode: Enable logical replication (The prerequisite is that the logical replication slot already exists).
        int TEST_MODE_START_REPL = 2;
	//Test mode: Delete a logical replication slot.
        int TEST_MODE_DROP_SLOT = 3;
	//Enable different test modes.
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
    //For logical replication, the following three attributes are mandatory.
            PGProperty.ASSUME_MIN_SERVER_VERSION.set(properties, "9.4");
            PGProperty.REPLICATION.set(properties, "database");
            PGProperty.PREFER_QUERY_MODE.set(properties, "simple");
            conn = (PgConnection) DriverManager.getConnection(sourceURL, properties);
            System.out.println("connection success!");

            if(testMode == TEST_MODE_CREATE_SLOT){
                conn.getReplicationAPI()
                        .createReplicationSlot()
                        .logical()
                        .withSlotName("replication_slot")
                        .withOutputPlugin("test_decoding")
                        .make();
            }else if(testMode == TEST_MODE_START_REPL) {
                //Create a replication slot before enabling this mode.
                LogSequenceNumber waitLSN = LogSequenceNumber.valueOf("6F/E3C53568");
                PGReplicationStream stream = conn
                        .getReplicationAPI()
                        .replicationStream()
                        .logical()
                        .withSlotName("replication_slot")
                        .withSlotOption("include-xids", false)
                        .withSlotOption("skip-empty-xacts", true)
                        .withStartPosition(waitLSN)
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

                    //If the LSN needs to be flushed, call the following APIs based on the service requirements:
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

