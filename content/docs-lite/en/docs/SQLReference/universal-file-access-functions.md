# Universal File Access Functions<a name="EN-US_TOPIC_0289900407"></a>

Universal file access functions provide local access interfaces for files on a database server. Only files in the openGauss directory and the  **log\_directory**  directory can be accessed. Use a relative path for files in the openGauss directory, and a path matching the  **log\_directory**  configuration setting for log files. Only database initialization users can use these functions.

-   pg\_ls\_dir\(dirname text\)

    Description: Lists files in a directory.

    Return type: setof text

    Note:  **pg\_ls\_dir**  returns all the names in the specified directory, except the special entries "." and "..".

    Example:

    ```
    openGauss=# SELECT pg_ls_dir('./');
          pg_ls_dir       
    ----------------------
     .postgresql.conf.swp
     postgresql.conf
     pg_tblspc
     PG_VERSION
     pg_ident.conf
     core
     server.crt
     pg_serial
     pg_twophase
     postgresql.conf.lock
     pg_stat_tmp
     pg_notify
     pg_subtrans
     pg_ctl.lock
     pg_xlog
     pg_clog
     base
     pg_snapshots
     postmaster.opts
     postmaster.pid
     server.key.rand
     server.key.cipher
     pg_multixact
     pg_errorinfo
     server.key
     pg_hba.conf
     pg_replslot
     .pg_hba.conf.swp
     cacert.pem
     pg_hba.conf.lock
     global
     gaussdb.state
    (32 rows)
    ```

-   pg\_read\_file\(filename text, offset bigint, length bigint\)

    Description: Returns the content of a text file.

    Return type: text

    Note:  **pg\_read\_file**  returns part of a text file. It can return a maximum of  _length_  bytes from  _offset_. The actual size of fetched data is less than  _length_  if the end of the file is reached first. If  _offset_  is negative, it is the length rolled back from the file end. If  _offset_  and  _length_  are omitted, the entire file is returned.

    Example:

    ```
    openGauss=# SELECT pg_read_file('postmaster.pid',0,100);
                 pg_read_file              
    ---------------------------------------
     53078                                +
     /srv/BigData/hadoop/data1/dbnode+
     1500022474                           +
     8000                                +
     /var/run/FusionInsight               +
     localhost                            +
      2
    (1 row)
    ```

-   pg\_read\_binary\_file\(filename text \[, offset bigint, length bigint,missing\_ok boolean\]\)

    Description: Returns the content of a binary file.

    Return type: bytea

    Note:  **pg\_read\_binary\_file**  is similar to  **pg\_read\_file**, except that the result is a  **bytea**  value; accordingly, no encoding checks are performed. In combination with the  **convert\_from**  function, this function can be used to read a file in a specified encoding.

    ```
    openGauss=# SELECT convert_from(pg_read_binary_file('filename'), 'UTF8');
    ```

-   pg\_stat\_file\(filename text\)

    Description: Returns status information about a file.

    Return type: record

    Note:  **pg\_stat\_file**  returns a record containing the file size, last access timestamp, last modification timestamp, last file status change timestamp, and a Boolean value indicating if it is a directory. Typical use cases are as follows:

    ```
    openGauss=# SELECT * FROM pg_stat_file('filename');
    ```

    ```
    openGauss=# SELECT (pg_stat_file('filename')).modification;
    ```

    Example:

    ```
    openGauss=# SELECT convert_from(pg_read_binary_file('postmaster.pid'), 'UTF8');
                 convert_from             
    --------------------------------------
     4881                                +
     /srv/BigData/gaussdb/data1/dbnode+
     1496308688                          +
     25108                               +
     /opt/user/Bigdata/gaussdb/gaussdb_tmp +
     *                                   +
      25108001  43352069                 +
    
    (1 row)
    ```

    ```
    openGauss=# SELECT * FROM pg_stat_file('postmaster.pid');
     
     size |         access         |      modification      |         change         
    | creation | isdir 
    ------+------------------------+------------------------+------------------------
    +----------+-------
      117 | 2017-06-05 11:06:34+08 | 2017-06-01 17:18:08+08 | 2017-06-01 17:18:08+08 
    |          | f
    (1 row)
    ```

    ```
    openGauss=# SELECT (pg_stat_file('postmaster.pid')).modification;
          modification      
    ------------------------
     2017-06-01 17:18:08+08
    (1 row)
    ```


