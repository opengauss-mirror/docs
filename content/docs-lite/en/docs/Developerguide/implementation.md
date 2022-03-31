# Implementation<a name="EN-US_TOPIC_0289899904"></a>

Internally, a GIN index contains a B-tree index constructed over keys, where each key is an element of one or more indexed items \(a member of an array, for example\) and where each tuple in a page contains either a pointer to a B-tree of heap pointers \(a "posting tree"\), or a simple list of heap pointers \(a "posting list"\) when the list is small enough to fit into a single index tuple along with the key value.

Multi-column GIN indexes are implemented by building a single B-tree over composite values \(column number, key value\). The key values for different columns can be of different types.

## GIN Fast Update Technique<a name="en-us_topic_0283137368_en-us_topic_0237122201_en-us_topic_0059778495_s0257d3dc71434d4c8e7d1395a49035d8"></a>

Updating a GIN index tends to be slow because of the intrinsic nature of inverted indexes: inserting or updating one heap row can cause many inserts into the index. After the table is vacuumed or if the pending list becomes larger than  **work\_mem**, the entries are moved to the main GIN data structure using the same bulk insert techniques used during initial index creation. This greatly increases the GIN index update speed, even counting the additional vacuum overhead. Moreover the overhead work can be done by a background process instead of in foreground query processing.

The main disadvantage of this approach is that searches must scan the list of pending entries in addition to searching the regular index, and so a large list of pending entries will slow searches significantly. Another disadvantage is that, while most updates are fast, an update that causes the pending list to become "too large" will incur an immediate cleanup cycle and be much slower than other updates. Proper use of autovacuum can minimize both of these problems.

If consistent response time \(of entity cleanup and of update\) is more important than update speed, use of pending entries can be disabled by turning off the  **fastupdate**  storage parameter for a GIN index. For details, see  [CREATE INDEX](create-index.md).

## Partial Match Algorithm<a name="en-us_topic_0283137368_en-us_topic_0237122201_en-us_topic_0059778495_s9dc41ea95b9144c38d709b0b9a43fe9e"></a>

GIN can support "partial match" queries, in which the query does not determine an exact match for one or more keys, but the possible matches fall within a narrow range of key values \(within the key sorting order determined by the  **compare**  support method\). The  **extractQuery**  method, instead of returning a key value to be matched exactly, returns a key value that is the lower bound of the range to be searched, and sets the  **pmatch**  flag true. The key range is then scanned using the  **comparePartial**  method.  **comparePartial**  must return zero for a matching index key, less than zero for a non-match that is still within the range to be searched, or greater than zero if the index key is past the range that could match.

