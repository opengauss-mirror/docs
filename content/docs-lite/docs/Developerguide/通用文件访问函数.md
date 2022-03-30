# 通用文件访问函数<a name="ZH-CN_TOPIC_0289900407"></a>

通用文件访问函数提供了对数据库服务器上的文件的本地访问接口。只有openGauss目录和log\_directory目录里面的文件可以访问。使用相对路径访问openGauss目录里面的文件，以及匹配log\_directory配置而设置的路径访问日志文件。只有数据库初始化用户才能使用这些函数。

-   pg\_ls\_dir\(dirname text\)

    描述：列出目录中的文件。

    返回值类型：setof text

    备注：pg\_ls\_dir返回指定目录里面的除了特殊项“.”和“..”之外所有名称。

    示例：

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

    描述：返回一个文本文件的内容。

    返回值类型：text

    备注：pg\_read\_file返回一个文本文件的一部分，从offset开始，最多返回length字节（如果先达到文件结尾，则小于这个数值）。如果offset是负数，则它是相对于文件结尾回退的长度。如果省略了offset和length，则返回整个文件。

    示例：

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

    描述：返回一个二进制文件的内容。

    返回值类型：bytea

    备注：pg\_read\_binary\_file的功能与pg\_read\_file类似，除了结果的返回值为bytea类型不一致，相应地不会执行编码检查。与convert\_from函数结合，这个函数可以用来读取用指定编码的一个文件。

    ```
    openGauss=# SELECT convert_from(pg_read_binary_file('filename'), 'UTF8');
    ```

-   pg\_stat\_file\(filename text\)

    描述：返回一个文本文件的状态信息。

    返回值类型：record

    备注：pg\_stat\_file返回一条记录，其中包含：文件大小、最后访问时间戳、最后更改时间戳、最后文件状态修改时间戳以及标识传入参数是否为目录的Boolean值。典型的用法：

    ```
    openGauss=# SELECT * FROM pg_stat_file('filename');
    ```

    ```
    openGauss=# SELECT (pg_stat_file('filename')).modification;
    ```

    示例：

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


