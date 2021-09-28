# Undo System Functions<a name="EN-US_TOPIC_0000001135762588"></a>

-   gs\_undo\_meta\(type, zid, location\)

    Description: Specifies metadata of each module in the undo system.

    Parameter description:

    -   **type**  \(metadata type\)

        The value  **0**  indicates the metadata corresponding to  **Undo Zone\(Record\)**.

        The value  **1**  indicates the metadata corresponding to  **Undo Zone\(Transaction Slot\)**.

        The value  **2**  indicates the metadata corresponding to  **Undo Space\(Record\)**.

        The value  **3**  indicates the metadata corresponding to  **Undo Space\(Transaction Slot\)**.

    -   **zid**  \(undo zone ID\)

        The value  **–1**  indicates the metadata of all undo zones.

        The value range 0–1024 x 1024 indicates the metadata of the corresponding zone ID.

    -   **location**  \(read location\)

        The value  **0**  indicates that data is read from the current memory.

        The value  **1**  indicates that data is read from a physical file.

    Return type: record

-   gs\_undo\_translot\(type, zid\)

    Description: Specifies transaction slot information of the undo system.

    Parameter description:

    -   **type**  \(metadata type\)

        The value  **0**  indicates the metadata corresponding to  **Undo Zone\(Record\)**.

        The value  **1**  indicates the metadata corresponding to  **Undo Zone\(Transaction Slot\)**.

        The value  **2**  indicates the metadata corresponding to  **Undo Space\(Record\)**.

        The value  **3**  indicates the metadata corresponding to  **Undo Space\(Transaction Slot\)**.

    -   **zid**  \(undo zone ID\)

        The value  **–1**  indicates the metadata of all undo zones.

        The value range 0–1024 x 1024 indicates the metadata of the corresponding zone ID.

    Return type: record


