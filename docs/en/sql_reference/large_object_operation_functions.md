---
description: This document describes Large Object Operation Functions in openGauss, covering topics such as Notes, Client-side Functions.
keywords: [openGauss, Large Object Operation Functions, SQL, Notes, Client-side Functions]
---

# Large Object Operation Functions

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:23:51.497Z -->

openGauss provides large object functionality, which offers stream access to user data stored in a special large object structure. Stream access is particularly useful for data values that are too large to be processed as a whole.

## Notes<a name="zh-cn_topic_0283137215_zh-cn_topic_0237121109_zh-cn_topic_0151096201_zh-cn_topic_0085032332_zh-cn_topic_0059779299_s4ed40b90fef642e1960afb00e661e34a"></a>

- The data blocks stored in a large object do not need to be contiguous. For example, if an app opens a new large object, moves to offset 1000000 and writes some bytes, this does not result in allocating 1000000 bytes of storage; only the data blocks covering the range of written bytes need to be allocated. A read operation will read zeroes for positions before the last existing data block that have not been allocated. This corresponds to the general behavior of "sparse" files in Unix file systems.

- A large object can have an owner and a set of access permissions, which can be managed using GRANT and REVOKE. Reading a large object requires the SELECT permission, while writing to or truncating a large object requires the UPDATE permission. Only the owner of a large object (or a database superuser) can create a large object, comment on a large object, or modify the owner of a large object.

## Client-side Functions<a name="zh-cn_topic_0283137215_zh-cn_topic_0237121109_zh-cn_topic_0151096201_zh-cn_topic_0085032332_zh-cn_topic_0059779299_s4ed40b90fef642e1960afb00e661e34b"></a>

- `lo_creat(lobjId oid)`

    Description: Creates a new large object. Its return value is the OID assigned to the new large object, or InvalidOid(0) indicating failure.

    Return type: oid

- `lo_create(lobjId oid)`

    Description: Creates a new large object. The OID assigned to the new large object can be specified by lobjId. If the OID is already used by an existing large object, an error occurs. If lobjId is InvalidOid(0), lo_create allocates an unused OID, behaving the same as lo_creat in this case. The return value is the OID assigned to the new large object, or InvalidOid(0) if an error occurs.

    Return type: oid

- `lo_import(filepath text [, lobjId oid])`

    Description: filepath specifies the absolute path of the server-side file to be imported as a large object. lobjId can be used to specify the OID assigned to the new large object. If the OID is already used by an existing large object, an error occurs. If the OID is InvalidOid(0), an unused OID is allocated. The return value is the OID assigned to the new large object, or InvalidOid(0) if an error occurs.

    Restrictions: Because this function reads from the server's file system, it can be easily exploited by malicious users to gain superuser privileges. Therefore, its use is restricted to superusers only.

    Note: During import, the large object is split into many data blocks and stored in the `data` column of `pg_largeobject`. Both queries and writes require frequent index-based lookups in `pg_largeobject` to quickly locate the correct data block by block number during random access reads and writes. Since openGauss queries data more slowly than pg, this operation takes more time.

    Return type: oid

- `lo_export(lobjId oid, filepath text)`

    Description: The lobjId parameter specifies the OID of the large object to be exported, and the filepath parameter specifies the absolute path of the server-side file to be exported to.

    Restriction: Since this function writes to the server's file system, malicious users can easily exploit it to become superusers. Therefore, only superusers are allowed to use this function.

    Return type: int4

- `lo\_open\(lobjId oid, mode int4\)`

    Description: The lobjId parameter specifies the OID of the large object to be opened. The mode bits control whether the object is opened for read-only (INV\_READ), write-only (INV\_WRITE), or both read and write. lo\_open returns a non-negative large object descriptor for later use with lo\_read, lo\_write, lo\_lseek, lo\_lseek64, lo\_tell, lo\_tell64, lo\_truncate, lo\_truncate64, and lo\_close. This descriptor is valid only during the current transaction. The return value is a file-descriptor-like value, and -1 is returned if an error occurs during opening.

    Return type: int4

- `lowrite\(fd int4, data bytea\)`

    Description: Writes data to the large object descriptor fd. The parameter fd must be a large object descriptor previously returned by lo_open. The function returns the number of bytes actually written, or -1 if an error occurs.

    Return type: int4

- `loread\(fd int4, len int4\)`

    Description: Reads len bytes from the large object descriptor fd. The parameter fd must be a large object descriptor previously returned by lo_open. The number of bytes actually read is returned. If the end of the large object is reached first, the return value may be less than len. If an error occurs, -1 is returned.

    Return type: text

- `lo_lseek(fd int4, offset int4, whence int4)`

    Description: This function moves the current position pointer of the large object file descriptor `fd` to the new position specified by `offset`. The available values for `whence` are `SEEK_SET` (seek from the beginning of the object), `SEEK_CUR` (seek from the current position), and `SEEK_END` (seek from the end of the object). The return value is the pointer to the new position, or -1 if an error occurs.

    Return type: int4

- `lo_lseek64(fd int4, offset int8, whence int4)`

    Description: This function behaves the same as `lo_lseek`, but it can accept an `offset` exceeding 2 GB and return a result exceeding 2 GB. Note: If the pointer to the new position exceeds 2 GB, `lo_lseek` will fail.

    Return type: int8

- `lo_tell(fd int4)`

    Description: Obtains the current read or write position of a large object descriptor.

    Return type: int4

- `lo_tell64(fd int4)`

    Description: This function behaves the same as lo_tell, but it can return results exceeding 2 GB. Note: If the current read or write position exceeds 2 GB, lo_tell will fail.

    Return type: int8

- `lo_truncate(fd int4, len int4)`

    Description: This function truncates the large object descriptor fd to the length len. The parameter fd must be a large object descriptor previously returned by lo_open. If len exceeds the current length of the large object, the large object will be extended to the specified length using null bytes ('\0'). On success, lo_truncate returns 0. On failure, the return value is -1. The read and write positions of the descriptor fd remain unchanged.

    Return type: int4

- `lo_truncate64(fd int4, len int8)`

    Description: This function behaves the same as lo_truncate, but it can accept a len value exceeding 2 GB.

    Return type: int4

- `lo_close(fd int4)`

    Description: Closes a large object descriptor. fd is the large object descriptor returned by lo_open. On success, lo_close returns 0, and on failure, it returns -1.

    Return type: int4

- `lo\_unlink\(lobjId oid\)`

    Description: Removes the large object with OID lobjId. Returns 1 on success and -1 on failure.

    Return type: int4

## Server-side Functions<a name="zh-cn_topic_0283137215_zh-cn_topic_0237121109_zh-cn_topic_0151096201_zh-cn_topic_0085032389_zh-cn_topic_0059779299_s4ed40b90fef642e1960afb00e661e34d"></a>

- `lo\_from\_bytea\(loid oid, data bytea\)`

    Description: Creates a large object and stores data in it. If loid is 0, the system will select a free OID. If that OID is already in use by a large object, an error will occur. Upon successful execution, the OID of the large object is returned.

    Return type: oid

- `lo\_put\(loid oid, offset int8, data bytea\)`

    Description: Writes data starting from the given offset in a large object. The large object can be extended if necessary.

    Return type: void

- `lo_get(loid oid [, offset int8, length int4])`

    Description: Extracts the content of a large object, or a substring within it.

    Return type: bytea
