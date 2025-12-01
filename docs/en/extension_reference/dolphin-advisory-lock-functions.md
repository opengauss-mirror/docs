# Advisory Lock Functions<a name="EN-US_TOPIC_0289900296"></a>

Advisory lock functions manage advisory locks.

-   pg\_advisory\_lock\(key bigint\)

    Description: Obtains an exclusive session-level advisory lock.

    Return type: void

    Note: **pg\_advisory\_lock** locks resources defined by an application. The resources can be identified using a 64-bit or two unoverlapped 32-bit key values. If another session locks the resources, the function blocks the resources until they can be used. The lock is exclusive. Multiple locking requests are pushed into the stack. Therefore, if the same resource is locked three times, it must be unlocked three times so that it is released to another session.

-   pg\_advisory\_lock\(key1 int, key2 int\)

    Description: Obtains an exclusive session-level advisory lock.

    Return type: void

    Note: Only the sysadmin user is allowed to add a session-level exclusive advisory lock to the key-value pair \(65535, 65535\). Common users do not have the permission.

-   pg\_advisory\_lock\(int4, int4, Name\)

    Description: Obtains the exclusive advisory lock of a specified database.

    Return type: void

-   pg\_advisory\_lock\_shared\(key bigint\)

    Description: Obtains a shared session-level advisory lock.

    Return type: void

-   pg\_advisory\_lock\_shared\(key1 int, key2 int\)

    Description: Obtains a shared session-level advisory lock.

    Return type: void

    Note: pg\_advisory\_lock\_shared is similar to pg\_advisory\_lock. The only difference is that a shared lock session can share resources with other sessions that request a shared lock, except for exclusive locks.

-   pg\_advisory\_unlock\(key bigint\)

    Description: Releases an exclusive session-level advisory lock.

    Return type: Boolean

-   pg\_advisory\_unlock\(key1 int, key2 int\)

    Description: Releases an exclusive session-level advisory lock.

    Return type: Boolean

    Note: pg\_advisory\_unlock releases the obtained exclusive advisory lock. If the release is successful, the function returns **true**. If the lock was not held, it will return **false**. In addition, a SQL warning will be reported by the server.

-   pg\_advisory\_unlock\(int4, int4, Name\)

    Description: Releases the exclusive advisory lock of a specified database.

    Return type: Boolean

    Note: If the release is successful, **true** is returned. If no lock is held, **false** is returned.

-   pg\_advisory\_unlock\_shared\(key bigint\)

    Description: Releases a shared session level advisory lock.

    Return type: Boolean

-   pg\_advisory\_unlock\_shared\(key1 int, key2 int\)

    Description: Releases a shared session level advisory lock.

    Return type: Boolean

    Note: pg\_advisory\_unlock\_shared is similar to pg\_advisory\_unlock. The difference is that this function releases a shared advisory lock.

-   pg\_advisory\_unlock\_all\(\)

    Description: Releases all advisory locks owned by the current session.

    Return type: void

    Note: **pg\_advisory\_unlock\_all** releases all advisory locks owned by the current session. The function is implicitly invoked when the session ends even if the client is abnormally disconnected.

-   pg\_advisory\_xact\_lock\(key bigint\)

    Description: Obtains an exclusive transaction-level advisory lock.

    Return type: void

-   pg\_advisory\_xact\_lock\(key1 int, key2 int\)

    Description: Obtains an exclusive transaction-level advisory lock.

    Return type: void

    Note: pg\_advisory\_xact\_lock is similar to pg\_advisory\_lock. The difference is that locks are automatically released at the end of the current transaction and cannot be explicitly released. Only the sysadmin user is allowed to add a transaction-level exclusive advisory lock to the key-value pair \(65535, 65535\). Common users do not have the permission.

-   pg\_advisory\_xact\_lock\_shared\(key bigint\)

    Description: Obtains a shared transaction-level advisory lock.

    Return type: void

-   pg\_advisory\_xact\_lock\_shared\(key1 int, key2 int\)

    Description: Obtains a shared transaction-level advisory lock.

    Return type: void

    Note: pg\_advisory\_xact\_lock\_shared is similar to pg\_advisory\_lock\_shared. The difference is that locks are automatically released at the end of the current transaction and cannot be explicitly released.

-   pg\_try\_advisory\_lock\(key bigint\)

    Description: Obtains exclusive session level advisory lock if available.

    Return type: Boolean

    Note: pg\_try\_advisory\_lock is similar to pg\_advisory\_lock. The difference is that this function is not blocked to wait for resource release. It either immediately obtains the lock and returns **true** or returns **false**, which indicates the lock cannot be performed currently.

-   pg\_try\_advisory\_lock\(key1 int, key2 int\)

    Description: Obtains exclusive session level advisory lock if available.

    Return type: Boolean

    Note: Only the sysadmin user is allowed to add a session-level exclusive advisory lock to the key-value pair \(65535, 65535\). Common users do not have the permission.

-   pg\_try\_advisory\_lock\_shared\(key bigint\)

    Description: Obtains a shared session-level advisory lock if available.

    Return type: Boolean

-   pg\_try\_advisory\_lock\_shared\(key1 int, key2 int\)

    Description: Obtains a shared session-level advisory lock if available.

    Return type: Boolean

    Note: pg\_try\_advisory\_lock\_shared is similar to pg\_try\_advisory\_lock. The difference is that pg\_try\_advisory\_lock\_shared attempts to obtain a shared lock instead of an exclusive lock.

-   pg\_try\_advisory\_xact\_lock\(key bigint\)

    Description: Obtains an exclusive transaction-level advisory lock if available.

    Return type: Boolean

-   pg\_try\_advisory\_xact\_lock\(key1 int, key2 int\)

    Description: Obtains exclusive transaction level advisory lock if available.

    Return type: Boolean

    Note: pg\_try\_advisory\_xact\_lock is similar to pg\_try\_advisory\_lock. The difference is that if a lock is obtained, it is automatically released at the end of the current transaction and cannot be explicitly released. Only the sysadmin user is allowed to add a transaction-level exclusive advisory lock to the key-value pair \(65535, 65535\). Common users do not have the permission.

-   pg\_try\_advisory\_xact\_lock\_shared\(key bigint\)

    Description: Obtains a shared transaction-level advisory lock if available.

    Return type: Boolean

-   pg\_try\_advisory\_xact\_lock\_shared\(key1 int, key2 int\)

    Description: Obtains a shared transaction-level advisory lock if available.

    Return type: Boolean

    Note: pg\_try\_advisory\_xact\_lock\_shared is similar to pg\_try\_advisory\_lock\_shared. The difference is that if a lock is obtained, it is automatically released at the end of the current transaction and cannot be explicitly released.

-   lock\_cluster\_ddl\(\)

    Description: Attempts to obtain a session-level exclusive advisory lock for all active primary database nodes in openGauss.

    Return type: Boolean

    Note: Only the sysadmin user can call this function. Common users do not have the permission.

-   unlock\_cluster\_ddl\(\)

    Description: Attempts to add a session-level exclusive advisory lock on the primary database node.

    Return type: Boolean

-   pg_catalog.get_lock(text,text)

    Description: Adds a user lock to the database with a specified character string. The second parameter is the lock waiting time.

    Return type: Int

-   pg_catalog.get_lock(text,double)

    Description: Adds a user lock to the database with a specified character string. The second parameter is the lock waiting time.

    Return type: Int

-   pg_catalog.get_lock(text)

    Description: Adds a user lock to the database with a specified character string.

    Return type: Int

-   pg_catalog.release_lock(text)

    Description: Releases a specified lock. If the lock is successfully released, **1** is returned. If the current session does not hold the specified lock, **0** is returned. If the current lock does not exist (the lock must be held), **NULL** is returned.

    Return type: Int

-   pg_catalog.is_free_lock(text)

    Description: Checks whether a string is idle. If the string is not locked, **1** is returned. Otherwise, **0** is returned. If other errors occur during the check, **NULL** is returned.

    Return type: Int

-   pg_catalog.is_used_lock(text)

    Description: Checks who holds the lock of a string and returns the session ID of the corresponding user. If the specified lock is not held, **NULL** is returned.

    Return type: Bigint

-   pg_catalog.clear_all_invalid_locks()

    Description: Clears information about invalid locks in the lockname hash table and returns the number of cleared locks.

    Return type: Bigint

-   pg_catalog.release_all_locks()

    Description: Releases all locks held by the current session and returns the number of release times. If a single string holds multiple locks, the number of release times is calculated based on the corresponding number instead of only once.

    Return type: Bigint

-   pg_catalog.get_all_locks()

    Description: Queries all user locks in the current database and returns the names and holders of all user locks in the form of records.

    Return type: Record
