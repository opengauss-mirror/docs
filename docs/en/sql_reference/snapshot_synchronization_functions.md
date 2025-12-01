# Snapshot Synchronization Functions<a name="EN-US_TOPIC_0289900332"></a>

Snapshot synchronization functions save the current snapshot and return its identifier.

-   pg\_export\_snapshot\(\)

    Description: Saves the current snapshot and returns its identifier.

    Return type: text

    Note:  **pg\_export\_snapshot**  saves the current snapshot and returns a text string identifying the snapshot. This string must be passed to clients that want to import the snapshot. A snapshot can be imported when the  **set transaction snapshot snapshot\_id;**  command is executed. Doing so is possible only when the transaction is set to the  **SERIALIZABLE**  or  **REPEATABLE READ**  isolation level. openGauss does not support these two isolation levels currently. The output of the function cannot be used as the input of  **set transaction snapshot**.

-   pg\_export\_snapshot\_and\_csn\(\)

    Description: Saves the current snapshot and returns its identifier. Compared with  **pg\_export\_snapshot\(\)**,  **pg\_export\_snapshot\(\)**  returns a CSN, indicating the CSN of the current snapshot.

    Return type: text


