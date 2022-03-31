# Basic Concepts<a name="EN-US_TOPIC_0000001255141773"></a>

openGauss is a relational database management system \(RDBMS\). A relational database organizes data using a relational model, that is, data is stored in rows and columns.

openGauss database nodes store data on disks. Logically, objects on a database node include tablespaces, databases, datafile segments, tables, and blocks.  [Figure 1](#en-us_topic_0283136742_en-us_topic_0237120245_en-us_topic_0059779316_fb2fa3b3cc8824dea95318504e0537913)  shows the relationships between objects.

**Figure  1**  Database logical architecture<a name="en-us_topic_0283136742_en-us_topic_0237120245_en-us_topic_0059779316_fb2fa3b3cc8824dea95318504e0537913"></a>  
![](figures/database-logical-architecture.png "database-logical-architecture")

## Database<a name="section16264182634412"></a>

A collection of data that is stored together and can be accessed, managed, and updated.

Databases manage various data objects and are isolated from each other. While creating a database, you can specify a tablespace. If you do not specify it, the object will be saved to the  **PG\_DEFAULT**  tablespace by default. Objects managed by a database can be distributed to multiple tablespaces.

## Block<a name="section6344149125713"></a>

A block is the basic unit of database management. Its default size is 8 KB.

## Row<a name="section145861329182213"></a>

A row \(tuple or record\) is a set of related data, for example, a piece of data subscribed by a user.

## Column<a name="section179147357225"></a>

Each column is referred to as a field. The value in each field \(column\) represents a data type. For example, if a table contains three fields  **Name**,  **City**, and  **State**, it has three columns  **Name**,  **City**, and  **State**. In every row of the table, the  **Name**  column contains a name, the  **City**  column contains a city, and the  **State**  column contains a state.

## Table<a name="section1938014491516"></a>

A table consists of rows and columns. It is an object used to store data in a database and is the basis of the entire database system.

Each table belongs to only one database and one tablespace. The datafile segments storing the data of the same table must be in the same tablespace.

## Datafile Segment<a name="section0943185185714"></a>

Generally, each table corresponds to only one datafile segment. A table containing more than 1 GB of data is stored in multiple datafile segments.

## Tablespace<a name="section17678189104619"></a>

In openGauss, a tablespace is a directory that provides an abstract layer between physical data and logical data. It allocates storage space for all database objects to store the physical files of the databases. Files are physically isolated using tablespaces and managed by a file system.

Multiple tablespaces can exist. When you create an object, you can specify which tablespace it belongs to.

## Schema<a name="section1083112714613"></a>

Collection of database objects, including logical structures, such as tables, views, sequences, stored procedures, synonyms, indexes, and database links.

## Transaction<a name="section6711153815312"></a>

It is a logical unit of work performed within a DBMS, and treated in a coherent and reliable way independent of other transactions. In a relational database, a transaction can be a SQL statement, a set of SQL statements, or a program.

In addition, a transaction is the basic unit for recovery and concurrency control. It must have the ACID feature.

-   Atomicity: Operations in a transaction must be either all performed or none performed because a transaction is an integral unit of work.
-   Consistency: A transaction must change a database from one consistent state to another consistent state. Consistency is closely related to atomicity.
-   Isolation: The execution of a transaction cannot be interfered by other transactions. It means that operations and data used in a transaction are isolated from those in other concurrent transactions. Concurrent transactions are independent of each other.
-   Durability or Permanence: Once a transaction is committed, the data in the database is changed permanently. Subsequent operations or faults should not have any impact on them.

