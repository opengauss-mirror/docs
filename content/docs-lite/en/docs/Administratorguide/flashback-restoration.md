# Flashback Restoration<a name="EN-US_TOPIC_0000001223612115"></a>

Flashback restoration is a part of the database recovery technology. It can be used to selectively cancel the impact of a committed transaction and restore data from incorrect manual operations. Before the flashback technology is used, the committed database modification can be retrieved only by means of restoring backup or point-in-time recovery \(PITR\). The restoration takes several minutes or even hours. After the flashback technology is used, it takes only seconds to restore the committed data before the database is modified. The restoration time is irrelevant to the database size.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The Astore engine does not support the flashback function.

-   **[Flashback Query](flashback-query.md)**  

-   **[Flashback Table](flashback-table.md)**  

-   **[DROP/TRUNCATE Flashback](drop-truncate-flashback.md)**  


