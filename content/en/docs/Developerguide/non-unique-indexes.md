# Non-unique Indexes<a name="EN-US_TOPIC_0257867439"></a>

A non-unique index may contain multiple rows with the same key. Non-unique indexes are used solely to improve query performance by maintaining a sorted order of data values that are used frequently. For example, a database may use a non-unique index to group all people from the same family. However, the Masstree data structure implementation does not allow mapping of multiple objects to the same key. Our solution to enable the creation of non-unique indexes, as shown in Figure 2 , is to add a symmetry-breaking suffix to the key, which maps the row. The suffix used is the pointer to the row itself, which has a constant size of 8 bytes and a value that is unique to the row. When inserting to a non-unique index, the insertion of the sentinel always succeeds, enabling the row that the executing transaction allocated to be used. This approach also enables us to have a fast, reliable, order-based iterator for a non-unique index.

When searching the non-unique secondary index, the required key \(for example, the family name\) is used. The full concatenated key is used only for insert and delete operations. Insert and delete operations always get a row as a parameter, thereby making it possible to create the full key and use it in the execution of the deletion or the insertion of the specific row for the index.

We contributed our Masstree index improvements to the Masstree open-source implementation, which can be found here –  [https://github.com/kohler/masstree-beta](https://github.com/kohler/masstree-beta).

