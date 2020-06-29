# Creating a Database<a name="EN-US_TOPIC_0241704259"></a>

Create a database. By default, a new database is created by copying the standard system database template0. Only template0 can be used to create a new database.

## Precautions<a name="en-us_topic_0241234235_en-us_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

-   A user that has the  **CREATEDB**  permission or a system administrator can create a database.
-   **CREATE DATABASE**  cannot be executed inside a transaction block.
-   Errors along the line of "could not initialize database directory" are most likely related to insufficient permissions on the data directory, a full disk, or other file system problems.

## Syntax<a name="en-us_topic_0241234235_en-us_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE database_name
    [ [ WITH ] { [ OWNER [=] user_name ] |
               [ TEMPLATE [=] template ] |
               [ ENCODING [=] encoding ] |
               [ LC_COLLATE [=] lc_collate ] |
               [ LC_CTYPE [=] lc_ctype ] |
               [ DBCOMPATIBILITY [=] compatibilty_type ] |
               [ TABLESPACE [=] tablespace_name ] |
               [ CONNECTION LIMIT [=] connlimit ]}[...] ];
```

## Examples<a name="en-us_topic_0241234235_section5221233281"></a>

```
-- Create users jim and tom:
postgres=# CREATE USER jim PASSWORD 'Bigdata@123';
postgres=# CREATE USER tom PASSWORD 'Bigdata@123';

-- Create database music using GBK (the local encoding type is also GBK):
postgres=# CREATE DATABASE music ENCODING 'GBK' template = template0;

-- Create database music2 and specify user jim as its owner:
postgres=# CREATE DATABASE music2 OWNER jim;

-- Create database music3 using template template0 and specify user jim as its owner:
postgres=# CREATE DATABASE music3 OWNER jim TEMPLATE template0;

-- Set the maximum number of connections to database music to 10:
postgres=# ALTER DATABASE music CONNECTION LIMIT= 10;

-- Rename database music to music4:
postgres=# ALTER DATABASE music RENAME TO music4;

-- Change the owner of database music2 to user tom:
postgres=# ALTER DATABASE music2 OWNER TO tom;

-- Set the tablespace of database music3 to PG_DEFAULT:
postgres=# ALTER DATABASE music3 SET TABLESPACE PG_DEFAULT;

-- Disable the default index scan on database music3.
postgres=# ALTER DATABASE music3 SET enable_indexscan TO off;

-- Reset the enable_indexscan parameter.
postgres=# ALTER DATABASE music3 RESET enable_indexscan;

Delete the databases:
postgres=# DROP DATABASE music2;
postgres=# DROP DATABASE music3;
postgres=# DROP DATABASE music4;

-- Delete the jim and tom users.
postgres=# DROP USER jim;
postgres=# DROP USER tom;

-- Create a database compatible with the TD format.
postgres=# CREATE DATABASE td_compatible_db DBCOMPATIBILITY 'C';

-- Create a database compatible with the ORA format.
postgres=# CREATE DATABASE ora_compatible_db DBCOMPATIBILITY 'A';

-- Delete the databases that are compatible with the TD and ORA formats.
postgres=# DROP DATABASE td_compatible_db;
postgres=# DROP DATABASE ora_compatible_db;
```

