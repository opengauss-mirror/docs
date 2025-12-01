# Large Object Operation Function<a name="EN-US_TOPIC_0289900319"></a>
openGauss has a large object facility, which provides stream-style access to user data that is stored in a special large-object structure. Streaming access is useful when working with data values that are too large to manipulate conveniently as a whole.

## Precautions<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s9874babd4158460a9a2dde267564b351"></a>

-   The chunks stored for a large object do not have to be contiguous. For example, if an application opens a new large object, seeks to offset 1000000, and writes a few bytes there, this does not result in allocation of 1000000 bytes worth of storage; only of chunks covering the range of data bytes actually written. A read operation will, however, read out zeroes for any unallocated locations preceding the last existing chunk. This corresponds to the common behavior of “sparsely allocated” files in Unix file systems.

-   large objects have an owner and a set of access permissions, which can be managed using GRANT and REVOKE. SELECT privileges are required to read a large object, and UPDATE privileges are required to write or truncate it. Only the large object's owner \(or a database superuser\) can delete, comment on, or change the owner of a large object.

## Client Functions<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s9874babd4158460a9a2dde267564b352"></a>
-   lo\_creat\(lobjId oid\)

    Description：Creates a new large object. The return value is the OID that was assigned to the new large object, or InvalidOid \(zero\) on failure.

    Return type：oid

-   lo\_create\(lobjId oid\)

    Description：Creates a new large object. The OID to be assigned can be specified by lobjId; if so, failure occurs if that OID is already in use for some large object. If lobjId is InvalidOid \(zero\) then lo\_create assigns an unused OID \(this is the same behavior as lo\_creat\). The return value is the OID that was assigned to the new large object, or InvalidOid \(zero\) on failure.

    Return type：oid

-   lo\_import\(filepath text [, lobjId oid]\)

    Description：The filepath specifies the absolute path of the server-side file to be imported as a large object, the OID to be assigned can be specified by lobjId; if so, failure occurs if that OID is already in use for some large object. If lobjId is InvalidOid \(zero\) then lo_import_with_oid assigns an unused OID \(this is the same behavior as lo_import\). The return value is the OID that was assigned to the new large object, or InvalidOid \(zero\) on failure.
    
    Limitation：This function is reading from the server's file system, malicious users can easily exploit them to become superusers, thus limiting the ability of only superusers to use this function.
    
    Precautions: When importing, large objects will be split into many data blocks and stored in the data column of pg\_largeobject. When querying and writing, it is necessary to frequently query pg\_largeobject through indexes to ensure that the correct data block can be quickly searched based on the data block number during random access read and write. Due to the slower data query speed of OpenGauss compared to PG, it takes more time.

    Return type：oid

-   lo\_export\(lobjId oid, filepath text\)

    Description：The lobjId parameter specifies the OID of the large object to be exported, and the filepath parameter specifies the absolute path of the server-side file to be exported.

    Limitation：This function is writing in the server's file system, malicious users can easily exploit them to become superusers, thus limiting the ability of only superusers to use this function.

    Return type：int4

-   lo\_open\(lobjId oid, mode int4\)

    Description：The lobjId argument specifies the OID of the large object to open. The mode bits control whether the object is opened for reading \(INV_READ\), writing \(INV_WRITE\), or both. lo\_open returns a \(non-negative\) large object descriptor for later use in lo\_read, lo\_write, lo\_lseek, lo\_lseek64, lo\_tell, lo\_tell64, lo\_truncate, lo\_truncate64, and lo\_close. The descriptor is only valid for the duration of the current transaction. On failure, -1 is returned.

    Return type：int4

-   lowrite\(fd int4, data bytea\)

    Description：Writes data to large object descriptor fd. The fd argument must have been returned by a previous lo\_open. The number of bytes actually written is returned, in the event of an error, the return value is -1.
    Return type：int4

-   loread\(fd int4, len int4\)
    
    Description：Reads up to len bytes from large object descriptor fd. The fd argument must have been returned by a previous lo\_open. The number of bytes actually read is returned; this will be less than len if the end of the large object is reached first. In the event of an error, the return value is -1.

    Return type：text

-   lo\_lseek\(fd int4, offset int4, whence int4\)
    
    Description：This function moves the current location pointer for the large object descriptor identified by fd to the new location specified by offset. The valid values for whence are SEEK\_SET \(seek from object start\), SEEK\_CUR \(seek from current position\), and SEEK\_END \(seek from object end\). The return value is the new location pointer, or -1 on error.

    Return type：int4

-   lo\_lseek64\(fd int4, offset int8, whence int4\)
    
    Description：This function has the same behavior as lo\_lseek, but it can accept an offset larger than 2GB and deliver a result larger than 2GB.

    Return type：int8

-   lo\_tell\(fd int4\)
    
    Description：Obtain the current read or write location of a large object descriptor

    Return type：int4

-   lo\_tell64\(fd int4\)
    
    Description：This function has the same behavior as lo\_tell, but it can deliver a result larger than 2GB. Note that lo\_tell will fail if the current read or write location is greater than 2GB.

    Return type：int8

-   lo\_truncate\(fd int4, len int4\)
    
    Description：This function truncates the large object descriptor fd to length len. The fd argument must have been returned by a previous lo\_open. If len is greater than the large object's current length, the large object is extended to the specified length with null bytes \('\0'\). On success, lo\_truncate returns zero. On error, the return value is -1. The read or write location associated with the descriptor fd is not changed.

    Return type：int4

-   lo\_truncate64\(fd int4, len int8\)
    
    Description：This function has the same behavior as lo\_truncate, but it can accept a len value exceeding 2GB.

    Return type：int4

-   lo\_close\(fd int4\)
    
    Description：Close a Large Object Descriptor，where fd is a large object descriptor returned by lo\_open. On success, lo\_close returns zero. On error, the return value is -1.

    Return type：int4
    
-   lo\_unlink\(lobjId oid\)
    
    Description：Remove a large object with oid as lobjId, returns 1 if successful, -1 on failure.

    Return type：int4

## Server Functions<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s9874babd4158460a9a2dde267564b353"></a>
-   lo\_from\_bytea\(loid oid, data bytea\)
    
    Description：Creates a large object and stores data in it. If loid is zero then the system will choose a free OID, otherwise that OID is used \(with an error if some large object already has that OID\). On success, the large object's OID is returned.

    Return type：oid

-   lo\_put\(loid oid, offset int8, data bytea\)
    
    Description：Writes data starting at the given offset within the large object; the large object is enlarged if necessary.

    Return type：void

-   lo\_get\(loid oid \[, offset int8, length int4\]\)
    
    Description：Extracts the large object's contents, or a substring thereof.

    Return type：bytea