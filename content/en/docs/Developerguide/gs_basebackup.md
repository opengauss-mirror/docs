# gs\_basebackup<a name="EN-US_TOPIC_0257867389"></a>

gs\_basebackup is used to prepare base backups of a running server, without affecting other database clients.

The MOT checkpoint is fetched at the end of the operation as well. However, the checkpoint’s location is taken from  **checkpoint\_dir**  in the source server and is transferred to the data directory of the source in order to back it up correctly.

