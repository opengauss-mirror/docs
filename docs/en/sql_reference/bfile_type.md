---
description: This document describes BFILE Type in openGauss.
keywords: [openGauss, BFILE Type, SQL]
---

# BFILE Type

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:18:24.949Z -->

The BFILE data type is used to store pointers to external binary large object (LOB) files. These files are typically stored in the file system of the database server, rather than directly within the database. The BFILE data type is suitable for handling large binary files, such as images, audio, and video.

Storage method:

BFILE does not store actual data; it only stores a pointer to an external file.

Files are stored in the file system of the database server, and the path is specified by a DIRECTORY object.

DIRECTORY object:

A DIRECTORY object maps a file system path to a logical name within the database. For details, see [CREATE DIRECTORY](create_directory.md).

Creating a DIRECTORY object requires the CREATE ANY DIRECTORY privilege. For ordinary users, this privilege can be granted by a superuser or a role with appropriate administrative privileges using GRANT CREATE ANY DIRECTORY TO user.

Access control:

Accessing BFILE data requires appropriate file system privileges and database privileges.

Database users must have the READ privilege to access a DIRECTORY object.

Example:

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
1 bfilename('bfile_test_dir', 'regress_bfile.txt')
```
