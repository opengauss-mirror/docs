# Python<a name="EN-US_TOPIC_0000001255221839"></a>

Psycopg is a Python API used to execute SQL statements and provides a unified access API for PostgreSQL and GaussDB. Applications can perform data operations based on psycopg. Psycopg2 encapsulates libpq. Some code is implemented using the C language, which is efficient and secure. It provides client-side and server-side cursors, asynchronous communication and notification, and the COPY TO and COPY FROM functions. Psycopg2 supports multiple types of Python out-of-the-box and adapts to PostgreSQL data types. Through the flexible object adaptation system, you can extend and customize APIs. Psycopg2 is compatible with Unicode and Python 3.

openGauss supports the psycopg2 feature and allows psycopg2 to be connected in SSL mode.

**Table  1**  Platforms supported by Psycopg

<a name="en-us_topic_0059778944_tcc3bf62098e14505b94680dffaa5940d"></a>
<table><thead align="left"><tr id="en-us_topic_0059778944_re1a7b791067f4bac9743d0de9f2ae8b6"><th class="cellrowborder" valign="top" width="78.64%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"><a name="en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a><a name="en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a>OS</p>
</th>
<th class="cellrowborder" valign="top" width="21.36%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"><a name="en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a><a name="en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a>Platform</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778944_row1915312215011"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778944_p826525664919"><a name="en-us_topic_0059778944_p826525664919"></a><a name="en-us_topic_0059778944_p826525664919"></a>EulerOS 2.5</p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778944_p93583610509"><a name="en-us_topic_0059778944_p93583610509"></a><a name="en-us_topic_0059778944_p93583610509"></a>x86_64</p>
</td>
</tr>
<tr id="row1728515110349"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="p1028612118342"><a name="p1028612118342"></a><a name="p1028612118342"></a>EulerOS 2.8</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="p162863113411"><a name="p162863113411"></a><a name="p162863113411"></a>ARM64</p>
</td>
</tr>
</tbody>
</table>

## Loading a Driver<a name="section163169384819"></a>

-   Before using the driver, perform the following operations:
    1.  Download the compiled psycopg2 package from the  [openGauss website](https://opengauss.org/zh/download.html).

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The psycopg2 downloaded from the openGauss website matches Python 3.6. If you use Python of another version, you need to compile psycopg2. The compilation method is similar to that in the PostgreSQL database. You only need to modify the code for verifying the version number of  **setup.py**  during compilation by running the following command:
        >```
        >sed -i "s/(pgmajor, pgminor, pgpatch)/(9, 2, 4)/g" setup.py
        >```

    2.  Decompress the driver package of the corresponding version and copy  **psycopg2**  to the third-party package folder \(that is, the  **site-packages**  directory\) in the Python installation directory.
    3.  Ensure that the permission on the  **psycopg2**  directory is at least  **755**. Otherwise, the file cannot be accessed due to permission issues.
    4.  For a non-database user, set  **LD\_LIBRARY\_PATH**  to the  **lib**  directory generated after decompression.

-   Load a database driver before creating a database connection:

    ```
    import  psycopg2
    ```


## Connecting to a Database<a name="section1132514408610"></a>

The following Python code shows how to connect to an existing database. If the database does not exist, it will be automatically created and a database object will be returned.

```
#!/usr/bin/python
import psycopg2
conn = psycopg2.connect(database="testdb", user="openGauss", password="xxxxxxxx", host="127.0.0.1", port="26000")
```

In the preceding code, replace the content in bold based on the actual requirements. Specify  **testdb**  as the database name.

## Creating a Table<a name="section53884593119"></a>

The following Python program will be used to create a table in the previously created database  **testdb**:

```
#!/usr/bin/python

import psycopg2

conn = psycopg2.connect(database="testdb", user="openGauss", password="xxxxxxxx", host="127.0.0.1", port="26000")

cur = conn.cursor()
cur.execute('''CREATE TABLE COMPANY
       (ID INT PRIMARY KEY     NOT NULL,
       NAME           TEXT    NOT NULL,
       AGE            INT     NOT NULL,
       ADDRESS        CHAR(50),
       SALARY         REAL);''')

conn.commit()
conn.close()
```

When the preceding program is executed, the  **COMPANY**  table is created in the  **testdb**  database.

## Insert Operation<a name="section13523115115126"></a>

The following Python program shows how to create a record in the  **COMPANY**  table created in the preceding example:

```
#!/usr/bin/python

import psycopg2

conn = psycopg2.connect(database="testdb", user="openGauss", password="xxxxxxxx", host="127.0.0.1", port="26000")

cur = conn.cursor()

cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (1, 'Paul', 32, 'California', 20000.00 )");

cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (2, 'Allen', 25, 'Texas', 15000.00 )");

cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (3, 'Teddy', 23, 'Norway', 20000.00 )");

cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 )");

conn.commit()
conn.close()
```

When the above program is executed, it will create/insert the given record in the  **COMPANY**  table.

## SELECT Operation<a name="section13140418153020"></a>

The following Python program shows how to obtain and display records from the  **COMPANY**  table created in the preceding example:

```
#!/usr/bin/python

import psycopg2

conn = psycopg2.connect(database="testdb", user="openGauss", password="xxxxxxxx", host="127.0.0.1", port="26000")

cur = conn.cursor()

cur.execute("SELECT id, name, address, salary  from COMPANY")
rows = cur.fetchall()
for row in rows:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3])

conn.close()
```

When the preceding program is executed, the following information is displayed:

```
ID =,  1
NAME =,  Paul
ADDRESS =,  California
SALARY =,  20000.0

ID =,  2
NAME =,  Allen
ADDRESS =,  Texas
SALARY =,  15000.0

ID =,  3
NAME =,  Teddy
ADDRESS =,  Norway
SALARY =,  20000.0

ID =,  4
NAME =,  Mark
ADDRESS =,  Rich-Mond
SALARY =,  65000.0
```

## Update Operation<a name="section1659146161420"></a>

The following Python code shows how to use the UPDATE statement to update any record, and then obtain and display the updated record from the  **COMPANY**  table:

```
#!/usr/bin/python

import psycopg2

conn = psycopg2.connect(database="testdb", user="openGauss", password="xxxxxxxx", host="127.0.0.1", port="26000")

cur = conn.cursor()

cur.execute("UPDATE COMPANY set SALARY = 25000.00 where ID=1")
conn.commit

cur.execute("SELECT id, name, address, salary  from COMPANY")
rows = cur.fetchall()
for row in rows:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3])

conn.close()
```

When the preceding program is executed, the following results are generated:

```
ID =,  1
NAME =,  Paul
ADDRESS =,  California
SALARY =,  25000.0

ID =,  2
NAME =,  Allen
ADDRESS =,  Texas
SALARY =,  15000.0

ID =,  3
NAME =,  Teddy
ADDRESS =,  Norway
SALARY =,  20000.0

ID =,  4
NAME =,  Mark
ADDRESS =,  Rich-Mond
SALARY =,  65000.0

```

## Delete Operation<a name="section1582063419210"></a>

The following Python code shows how to use the DELETE statement to delete records, and then obtain and display the remaining records from the  **COMPANY**  table:

```
#!/usr/bin/python

import psycopg2

conn = psycopg2.connect(database="testdb", user="openGauss", password="xxxxxxxx", host="127.0.0.1", port="26000")

cur = conn.cursor()

cur.execute("DELETE from COMPANY where ID=2;")
conn.commit

cur.execute("SELECT id, name, address, salary  from COMPANY")
rows = cur.fetchall()
for row in rows:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3])

conn.close()
```

When the preceding program is executed, the following results are generated:

```
ID =,  1
NAME =,  Paul
ADDRESS =,  California
SALARY =,  20000.0

ID =,  3
NAME =,  Teddy
ADDRESS =,  Norway
SALARY =,  20000.0

ID =,  4
NAME =,  Mark
ADDRESS =,  Rich-Mond
SALARY =,  65000.0
```

