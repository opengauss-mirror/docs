# Using JDBC to Operate an Encrypted Database<a name="EN-US_TOPIC_0000001102628112"></a>

## Connecting to an Encrypted Database<a name="section6796167162618"></a>

For details about the JDBC connection parameters, see  [Development Based on JDBC](development-based-on-jdbc.md). To support JDBC operations on an encrypted database, set  **enable\_ce**  to  **1**. The following is an example:

```
public static Connection getConnect(String username, String passwd)
    {
        // Set the driver class.
        String driver = "org.postgresql.Driver";
        // Set the database connection descriptor.
        String sourceURL = "jdbc:postgresql://10.10.0.13:8000/postgres?enable_ce=1";
        Connection conn = null;
        
        try
        {
            // Load the driver.
            Class.forName(driver);
        }
        catch( Exception e )
        {
            e.printStackTrace();
            return null;
        }
        
        try
        {
             // Establish a connection.
            conn = DriverManager.getConnection(sourceURL, username, passwd);
            System.out.println("Connection succeed!");
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return null;
        }
        
        return conn;
    };
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   \[Proposal\] When JDBC is used to perform operations on an encrypted database, one database connection object corresponds to one thread. Otherwise, conflicts may occur due to thread changes.
>-   \[Proposal\] When JDBC is used to perform operations on an encrypted database, different connections change the encrypted configuration data. The client invokes the  **IsValid**  method to ensure that the connections can hold the changed encrypted configuration data. In this case, the  **refreshClientEncryption**  parameter must be set to  **1**  \(default value\). In a scenario where a single client performs operations on encrypted data, the  **refreshClientEncryption**  parameter can be set to  **0**.

## Example of Calling the IsValid Method to Refresh the Cache<a name="section8416165433116"></a>

```
// Create a CMK.
Connection conn1 = DriverManager.getConnection("url","user","password");

// Connection 1 calls the IsValid method to refresh the cache.
try {
 if (!conn1.isValid(60)) {
  System.out.println("isValid Failed for connection 1");
 }
} catch (SQLException e) {
 e.printStackTrace();
        return null;
}
```

## Creating Keys for Executing Encrypted Equality Query<a name="section15271115213271"></a>

```
// Create a CMK.
Connection conn = DriverManager.getConnection("url","user","password");
Statement stmt = conn.createStatement();
int rc = stmt.executeUpdate("CREATE CLIENT MASTER KEY ImgCMK1 WITH ( KEY_STORE = localkms, KEY_PATH = \"key_path_value\" , ALGORITHM = RSA_2048);
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Before creating a CMK, you need to use the  **gs\_ktool**  tool to generate a key.

```
// Create a CEK.
int rc2 = stmt.executeUpdate("CREATE COLUMN ENCRYPTION KEY ImgCEK1 WITH VALUES (CLIENT_MASTER_KEY = ImgCMK1, ALGORITHM  = AEAD_AES_256_CBC_HMAC_SHA256);");
```

## Creating an Encrypted Table for Executing Encrypted Equality Query<a name="section15511335102810"></a>

```
int rc3 = stmt.executeUpdate("CREATE TABLE creditcard_info (id_number    int, name  varchar(50) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC),credit_card  varchar(19) encrypted with (column_encryption_key = ImgCEK1, encryption_type = DETERMINISTIC));");
// Insert data.
int rc4 = stmt.executeUpdate("INSERT INTO creditcard_info VALUES (1,'joe','6217986500001288393');");
// Query the encrypted table.
ResultSet rs = null;
rs = stmt.executeQuery("select * from creditcard_info where name = 'joe';");
// Close the statement object.
stmt.close();
```

## Precompiling the Encrypted Table<a name="section4943131112294"></a>

```
// Create a prepared statement object by calling the prepareStatement method in Connection.
PreparedStatement pstmt = con.prepareStatement("INSERT INTO creditcard_info VALUES (?, ?, ?);");
// Set parameters by triggering the setShort method in PreparedStatement.
pstmt.setInt(1, 2);
pstmt.setString(2, "joy");
pstmt.setString(3, "6219985678349800033");
// Execute the precompiled SQL statement by triggering the executeUpdate method in PreparedStatement.
int rowcount = pstmt.executeUpdate();
// Close the precompiled statement object by calling the close method in PreparedStatement.
pstmt.close();
```

## Batch Processing on Encrypted Tables<a name="section102367147301"></a>

```
// Create a prepared statement object by calling the prepareStatement method in Connection.
Connection conn = DriverManager.getConnection("url","user","password");
PreparedStatement pstmt = conn.prepareStatement("INSERT INTO batch_table (id, name, address) VALUES (?,?,?)");
// Call the setShort method for each piece of data, and call addBatch to confirm that the setting is complete.
int loopCount = 20;
 for (int i = 1; i < loopCount + 1; ++i) {
      pstmt.setInt(1, i);
      pstmt.setString(2, "Name " + i);
      pstmt.setString(3, "Address " + i);
      // Add row to the batch.
      pstmt.addBatch();
}
// Execute batch processing by calling the executeBatch method in PreparedStatement.
int[] rowcount = pstmt.executeBatch();
// Close the precompiled statement object by calling the close method in PreparedStatement.
pstmt.close();
```

