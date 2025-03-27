# BFILE类型

BFILE数据类型用于存储指向外部二进制大对象（LOB）文件的指针。这些文件通常存储在数据库服务器的文件系统中，而不是直接存储在数据库内。BFILE数据类型适用于处理大型二进制文件，如图像、音频、视频等。

存储方式：

bfile 不存储实际数据，仅存储指向外部文件的指针。

文件存储在数据库服务器的文件系统中，路径由 DIRECTORY 对象指定。

DIRECTORY 对象：

DIRECTORY对象用于映射文件系统路径到数据库内的逻辑名称，详情[CREATE DIRECTORY](CREATE-DIRECTORY.md)。

创建 DIRECTORY 对象需要 CREATE ANY DIRECTORY 权限,普通用户需要由超级用户或具有相应管理权限的角色可以通过GRANT CREATE ANY DIRECTORY TO user 授予权限。

访问控制：

访问 bfile 数据需要适当的文件系统权限和数据库权限。

数据库用户需有 READ 权限才能访问 DIRECTORY 对象。

示例：

```
create extension gms_lob;
create extension gms_output;
CREATE or REPLACE DIRECTORY bfile_test_dir AS '/tmp';
create table falt_bfile (id number, bfile_name bfile);
insert into falt_bfile values(1, bfilename('bfile_test_dir','regress_bfile.txt'));
copy (select * from falt_bfile) to '/tmp/regress_bfile.txt';
select gms_output.enable;
 enable 
--------
 
(1 row)

DECLARE
    buff raw(2000);
    my_bfile bfile;
    amount integer;
    f_offset integer := 1;
BEGIN
    my_bfile := bfilename('bfile_test_dir','regress_bfile.txt');
    RAISE notice 'bfile %',my_bfile;
    gms_lob.fileopen(my_bfile, 0);
    amount := gms_lob.getlength(my_bfile);
    RAISE notice 'amount %',amount;
    gms_lob.read(my_bfile, amount, f_offset, buff);
    RAISE notice 'buff %',buff;
    gms_lob.fileclose(my_bfile);
    RAISE notice 'bfile %',my_bfile;
    gms_output.put_line(CONVERT_FROM(decode(buff,'hex'), 'SQL_ASCII'));
END;
/
NOTICE:  bfile bfilename('bfile_test_dir', 'regress_bfile.txt')
NOTICE:  amount 51
NOTICE:  buff 31096266696C656E616D6528276266696C655F746573745F646972272C2027726567726573735F6266696C652E74787427290A
NOTICE:  bfile bfilename('bfile_test_dir', 'regress_bfile.txt')
1	bfilename('bfile_test_dir', 'regress_bfile.txt')
```