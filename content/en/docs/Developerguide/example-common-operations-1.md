# Example: Common Operations<a name="EN-US_TOPIC_0000001127192087"></a>

```
import psycopg2

# Create a connection object.
conn=psycopg2.connect(database="postgres",user="postgres",password="123456",host="localhost",port="5432")
cur=conn.cursor() # Create a pointer object.

# Create a connection object (using SSL).
conn = psycopg2.connect(dbname="postgres", user="user", password="password", host="localhost", port=port,
         sslmode="verify-ca", sslcert="client.crt",sslkey="client.key",sslrootcert="cacert.pem")
Note: If sslcert, sslkey, and sslrootcert are not set, the following files in the .postgresql directory of the current user are used by default: client.crt,
         client.key, and root.crt.


# Create a table.
cur.execute("CREATE TABLE student(id integer,name varchar,sex varchar);")

# Insert data.
cur.execute("INSERT INTO student(id,name,sex) VALUES(%s,%s,%s)",(1,'Aspirin','M'))
cur.execute("INSERT INTO student(id,name,sex) VALUES(%s,%s,%s)",(2,'Taxol','F'))
cur.execute("INSERT INTO student(id,name,sex) VALUES(%s,%s,%s)",(3,'Dixheral','M'))

# Obtain the result.
cur.execute('SELECT * FROM student')
results=cur.fetchall()
print (results)

# Close the connection.
conn.commit()
cur.close()
conn.close()
```

