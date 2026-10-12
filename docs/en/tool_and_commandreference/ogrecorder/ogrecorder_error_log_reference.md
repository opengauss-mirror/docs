# oGRecorder Error Log Reference

## File Operation Errors (2130 - 2229)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_FILE_SEEK` | 2130 | `Failed to seek file, vgid:%u, fid:%llu, offset:%lld, file size:%llu` | `vgid`: Volume group ID<br>`fid`: File ID<br>`offset`: Offset<br>`file size`: File size | File seek failed |
| `ERR_GR_FILE_REMOVE` | 2140 | `Failed to remove file` | - | File removal failed |
| `ERR_GR_FILE_REMOVE_OPENING` | 2141 | `GR file is open` | - | Cannot remove an open file |
| `ERR_GR_FILE_REMOVE_SYSTEM` | 2142 | `GR file %s is system file` | `%s`: File name | System files cannot be removed |
| `ERR_GR_FILE_RENAME` | 2150 | `Rename failed, reason %s` | `%s`: Error reason | Generic rename failure |
| `ERR_GR_FILE_RENAME_DIFF_VG` | 2151 | `Failed to rename from vg %s to another vg %s, function not supported` | `%s`: Source volume group<br>`%s`: Target volume group | Cross-volume-group rename not supported |
| `ERR_GR_FILE_RENAME_EXIST` | 2152 | `Rename failed, reason %s` | `%s`: Error reason | Target file already exists |
| `ERR_GR_FILE_RENAME_OPENING_REMOTE` | 2153 | `Failed to rename %s to %s, while source file is opend by other instance.` | `%s`: Source file name<br>`%s`: Target file name | Source file is in use by another instance |
| `ERR_GR_FILE_CLOSE` | 2160 | `Close file failed, reason %s` | `%s`: Error reason | File close failed |
| `ERR_GR_FILE_CREATE` | 2170 | `Create file failed, reason %s` | `%s`: Error reason | File creation failed |
| `ERR_GR_FILE_RDWR` | 2180 | `File read/write error` | - | File read/write error |
| `ERR_GR_FILE_RDWR_INSUFF_PER` | 2181 | `Insufficient permission to %s file, while the permission is %u.` | `%s`: Operation type (read/write)<br>`%u`: Current permission | Insufficient file permissions |
| `ERR_GR_FILE_NOT_EXIST` | 2190 | `The file %s of %s does not exist` | `%s`: File name<br>`%s`: Context path | File does not exist |
| `ERR_GR_FILE_OPENING_REMOTE` | 2191 | `The file is open in other inst: %hhu, command:%u exec failed.` | `%hhu`: Instance ID<br>`%u`: Command code | File is in use by another instance |
| `ERR_GR_FILE_TYPE_MISMATCH` | 2192 | `The type of directory link or file %s is not matched.` | `%s`: Path name | Path type mismatch |
| `ERR_GR_FILE_PATH_ILL` | 2193 | `Path %s decode error %s` | `%s`: Path<br>`%s`: Error reason | Path parsing error |
| `ERR_GR_FILE_INVALID_SIZE` | 2194 | `Invalid extend offset %lld, size %d.` | `%lld`: Extend offset<br>`%d`: Extend size | Invalid file extend parameters |
| `ERR_GR_FILE_INVALID_FLAG` | 2195 | `Invalid gr file flag, O_CREAT and O_TRUNC not supported.` | - | Invalid file open flag |

---

## Directory Operation Errors (2230 - 2280)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_DIR_REMOVE` | 2230 | `Failed to remove directory` | - | Directory removal failed |
| `ERR_GR_DIR_REMOVE_NOT_EMPTY` | 2231 | `The dir is not empty, can not remove.` | - | Directory not empty, cannot remove |
| `ERR_GR_DIR_CREATE` | 2240 | `Failed to create directory` | - | Directory creation failed |
| `ERR_GR_DIR_CREATE_DUPLICATED` | 2241 | `Make dir or Create file failed, %s has already existed` | `%s`: Directory name | Directory/file already exists |

---

## Link Operation Errors (2280 - 2300)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_LINK_READ` | 2280 | `Failed to read link` | - | Failed to read link |
| `ERR_GR_LINK_READ_NOT_LINK` | 2281 | `The path %s is not a soft link.` | `%s`: Path name | Path is not a soft link |
| `ERR_GR_LINK_CREATE` | 2290 | `Failed to create symbolic link, reason %s` | `%s`: Error reason | Symbolic link creation failed |

---

## Configuration Errors (2300 - 2320)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_CONFIG_FILE_OVERSIZED` | 2300 | `The size of config file %s is too large` | `%s`: Config file name | Config file is too large |
| `ERR_GR_CONFIG_LOAD` | 2301 | `Please check gr_vg_conf.ini, reason %s` | `%s`: Error reason | Config file loading failed |
| `ERR_GR_CONFIG_LINE_OVERLONG` | 2302 | `The length of row %d is too long` | `%d`: Row number | Config file line too long |
| `ERR_GR_CONFIG_NOT_EXIST` | 2303 | `Config file does not exist` | - | Config file does not exist |

---

## Redo Log Errors (2320 - 2350)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_REDO_ILL` | 2320 | `Illegal redo operation` | - | Illegal redo operation |

---

## Basic Data Structure Errors (2350 - 2400)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_OAMAP_INSERT` | 2350 | `Failed to insert hash map` | - | Hash map insertion failed |
| `ERR_GR_OAMAP_INSERT_DUP_KEY` | 2351 | `Hash map duplicated key` | - | Duplicate hash map key |
| `ERR_GR_OAMAP_FETCH` | 2352 | `Failed to fetch hash map` | - | Hash map lookup failed |
| `ERR_GR_SHM_CREATE` | 2370 | `Failed to create shared memory, key=0x%08x, size=%llu` | `key`: Shared memory key<br>`size`: Memory size | Shared memory creation failed |
| `ERR_GR_SHM_CHECK` | 2371 | `Failed to check shared memory ctrl, key=0x%08x, reason=%s` | `key`: Shared memory key<br>`reason`: Error reason | Shared memory check failed |
| `ERR_GR_SHM_LOCK` | 2372 | `Failed to lock vg shared memory, reason=%s` | `reason`: Error reason | Shared memory lock failed |
| `ERR_GR_SHM_LOCK_TIMEOUT` | 2373 | `Try to get shm lock timeout` | - | Shared memory lock timeout |
| `ERR_GR_GA_INIT` | 2380 | `GR ga init error, reason %s` | `%s`: Error reason | Global allocator initialization failed |
| `ERR_GR_GA_GET_ADDR` | 2381 | `GR ga get addr error, pool id %d, object id%u.` | `%d`: Memory pool ID<br>`%u`: Object ID | Global address resolution failed |
| `ERR_GR_GA_ALLOC_OBJECT` | 2382 | `GR ga alloc object error, pool id %d.` | `%d`: Memory pool ID | Object allocation failed |
| `ERR_GR_SESSION_INVALID_ID` | 2390 | `Invalid session %d` | `%d`: Session ID | Invalid session ID |
| `ERR_GR_SESSION_CREATE` | 2391 | `Create new GR session failed, no free sessions, %d sessions used.` | `%d`: Number of sessions in use | Session creation failed (limit reached) |
| `ERR_GR_SESSION_EXTEND` | 2392 | `Extend GR session failed, reason : %s.` | `%s`: Error reason | Session extension failed |

---

## Other Errors (2400 - 2500)

| Error Code Name | Value | Error Message Format | Parameter Description | Description |
|---|---|---|---|---|
| `ERR_GR_INVALID_PARAM` | 2400 | `Invalid GR parameter: %s` | `%s`: Parameter name | Invalid parameter |
| `ERR_GR_NO_SPACE` | 2401 | `GR no space in the vg` | - | Insufficient volume group space |
| `ERR_GR_ENV_NOT_INITIALIZED` | 2402 | `The GR env has not been initialized.` | - | GR environment not initialized |
| `ERR_GR_CLI_EXEC_FAIL` | 2403 | `GR client exec cmd '%s' failed, reason %s.` | `%s`: Command<br>`%s`: Error reason | Client command execution failed |
| `ERR_GR_FNODE_CHECK` | 2404 | `GR fnode error, reason %s` | `%s`: Error reason | File node check failed |
| `ERR_GR_LOCK_TIMEOUT` | 2405 | `GR lock timeout` | - | Lock timeout |
| `ERR_GR_SERVER_IS_DOWN` | 2406 | `GR server is down` | - | Server is not running |
| `ERR_GR_CHECK_SIZE` | 2407 | `Failed to specify size %d which is not aligned with GR allocate-unit size %d` | `%d`: Specified size<br>`%d`: Allocation unit size | Size not aligned to allocation unit |
| `ERR_GR_MES_ILL` | 2408 | `GR message contact error, reason %s` | `%s`: Error reason | Message format error |
| `ERR_GR_STRING_TOO_LONG` | 2409 | `The length(%u) of text can't be larger than %u, text = %s` | `%u`: Current length<br>`%u`: Maximum length<br>`%s`: Text content | String too long |
| `ERR_GR_TCP_TIMEOUT_REMAIN` | 2410 | `Waiting for request head(size) timeout, %d bytes remained` | `%d`: Remaining bytes | TCP receive timeout |
| `ERR_GR_UDS_INVALID_URL` | 2411 | `Invalid unix domain socket url:%s, length %d. Eg:server_locator="UDS:UNIX_emserver.domain"` | `%s`: URL<br>`%d`: URL length | Invalid Unix domain socket URL |
| `ERR_GR_RECV_MSG_FAILED` | 2412 | `Recv msg failed, errcode:%d, inst:%u.` | `%d`: Error code<br>`%u`: Instance ID | Message receive failed |
| `ERR_GR_INIT_LOGGER_FAILED` | 2414 | `Log init failed.` | - | Logger initialization failed |
| `ERR_GR_OUT_OF_MEM` | 2415 | `Failed to apply for memory.` | - | Memory allocation failed |
| `ERR_GR_INVALID_ID` | 2416 | `Invalid %s id : %llu.` | `%s`: ID type<br>`%llu`: ID value | Invalid ID |
| `ERR_GR_PROCESS_REMOTE` | 2417 | `Failed to process remote, errcode: %d, errmsg: %s.` | `%d`: Error code<br>`%s`: Error message | Remote processing failed |
| `ERR_GR_CONNECT_FAILED` | 2418 | `Failed to connect gr server, errcode: %d, errmsg: %s.` | `%d`: Error code<br>`%s`: Error message | Failed to connect to server |
| `ERR_GR_VERSION_NOT_MATCH` | 2419 | `[CHECK_PROTO]Protocol version need be changed, old protocol version is %u, new protocol version is %u.` | `%u`: Old version<br>`%u`: New version | Protocol version mismatch |
| `ERR_GR_INVALID_BLOCK_TYPE` | 2420 | `Get Invalid block type, expect type is %u, but the type in share memory is %u.` | `%u`: Expected type<br>`%u`: Actual type | Memory block type mismatch |
| `ERR_GR_SERVER_REBOOT` | 2421 | `GR server has reboot or close, gr client need reboot or close.` | - | Server has rebooted or shut down |
| `ERR_GR_UNSUPPORTED_CMD` | 2422 | `Command "%s" is not supported in current version(%u) of grserver, least supporting version is %u.` | `%s`: Command name<br>`%u`: Current version<br>`%u`: Minimum supported version | Command not supported |
| `ERR_GR_FILE_SYSTEM_ERROR` | 2423 | `File system error, reason %m.` | `%m`: System error message | File system error |
| `ERR_GR_CONNECTION_CLOSED` | 2424 | `GR connection is closed` | - | Connection closed |
| `ERR_GR_MEM_CMP_FAILED` | 2425 | `Memory compare failed` | - | Memory comparison failed |
| `ERR_GR_READONLY` | 2426 | `GR is in readonly mode` | - | GR is in read-only mode |
| `ERR_GR_MASTER_CHANGE` | 2498 | `Master id has changed.` | - | Primary node changed |
| `ERR_GR_RECOVER_CAUSE_BREAK` | 2499 | `Req break by recovery.` | - | Recovery operation break requested |
