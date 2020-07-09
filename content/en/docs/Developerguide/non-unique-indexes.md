# Non-unique Indexes<a name="EN-US_TOPIC_0260488162"></a>

A non-unique index may contain multiple rows with the same key. Non-unique indexes are used solely to improve query performance by maintaining a sorted order of data values that are used frequently. For example, a database may use a non-unique index to group all people from the same family. However, the Masstree data structure implementation does not allow mapping of multiple objects to the same key. Our solution to enable the creation of non-unique indexes \(as shown in the figure below\) is to add a symmetry-breaking suffix to the key, which maps the row. The suffix used is the pointer to the row itself, which has a constant size of 8 bytes and a value that is unique to the row. When inserting to a non-unique index, the insertion of the sentinel always succeeds, enabling the row that the executing transaction allocated to be used. This approach also enables us to have a fast, reliable, order-based iterator for a non-unique index.

**Figure  1**  Non-unique Indexes<a name="fig426223562012"></a>  
![](figures/non-unique-indexes.png "non-unique-indexes")

The structure of a MOT table T with three rows and two indexes is depicted in the figure above. The rectangles are data rows, and the indexes point to sentinels \(the elliptic shapes\) which point to the rows. The sentinels are inserted into unique indexes with a key and into non-unique indexes with a key + suffix. The sentinels facilitate maintenance operations where the rows can be replaced without touching the index data structure. In addition, there are some flags and a reference count embedded in the sentinel to facilitate optimistic inserts.

When searching the non-unique secondary index, the required key \(for example, the family name\) is used. The full concatenated key is used only for insert and delete operations. Insert and delete operations always get a row as a parameter, thereby making it possible to create the full key and use it in the execution of the deletion or the insertion of the specific row for the index.

