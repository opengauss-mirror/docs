# Scalability<a name="EN-US_TOPIC_0289900647"></a>

The GIN interface has a high level of abstraction, requiring the access method implementer only to implement the semantics of the data type being accessed. The GIN layer itself takes care of concurrency, logging and searching the tree structure.

All it takes to get a GIN access method working is to implement multiple user-defined methods, which define the behavior of keys in the tree and the relationships between keys, indexed items, and indexable queries. In short, GIN combines extensibility with generality, code reuse, and a clean interface.

There are four methods that an operator class for GIN must provide:

-   int compare\(Datum a, Datum b\)

    Compares two keys \(not indexed items\) and returns an integer less than zero, zero, or greater than zero, indicating whether the first key is less than, equal to, or greater than the second. Null keys are never passed to this function.


-   Datum \*extractValue\(Datum itemValue, int32 \*nkeys, bool \*\*nullFlags\)

    Returns an array of keys given an item to be indexed. The number of returned keys must be stored into  **\*nkeys**. If any of the keys can be null, also palloc an array of  **\*nkeys**  bool fields, store its address at  **\*nullFlags**, and set these null flags as needed.  **\*nullFlags**  can be left  **NULL**  \(its initial value\) if all keys are non-null. The returned value can be  **NULL**  if the item contains no keys.


-   Datum \*extractQuery\(Datum query, int32 \*nkeys, StrategyNumber n, bool \*\*pmatch, Pointer \*\*extra\_data, bool \*\*nullFlags, int32 \*searchMode\)

    Returns a palloc'd array of keys given a value to be queried; that is, query is the value on the right-hand side of an indexable operator whose left-hand side is the indexed column. n is the strategy number of the operator within the operator class. Often,  **extractQuery**  will need to consult n to determine the data type of query and the method it should use to extract key values. The number of returned keys must be stored into  **\*nkeys**. If any of the keys can be null, also palloc an array of  **\*nkeys**  bool fields, store its address at  **\*nullFlags**, and set these null flags as needed.  **\*nullFlags**  can be left NULL \(its initial value\) if all keys are non-null. The returned value can be NULL if the query contains no keys.

    **searchMode**  is an output argument that allows  **extractQuery**  to specify details about how the search will be done. If  **\*searchMode**  is set to  **GIN\_SEARCH\_MODE\_DEFAULT**  \(which is the value it is initialized to before call\), only items that match at least one of the returned keys are considered candidate matches. If  **\*searchMode**  is set to  **GIN\_SEARCH\_MODE\_INCLUDE\_EMPTY**, then in addition to items containing at least one matching key, items that contain no keys at all are considered candidate matches. \(This mode is useful for implementing is-subset-of operators, for example.\) If  **\*searchMode**  is set to  **GIN\_SEARCH\_MODE\_ALL**, then all non-null items in the index are considered candidate matches, whether they match any of the returned keys or not.

    **pmatch**  is an output argument for use when partial match is supported. To use it,  **extractQuery**  must allocate an array of \*nkeys Booleans and store its address at  **\*pmatch**. Each element of the array should be set to  **TRUE**  if the corresponding key requires partial match,  **FALSE**  if not. If  **\*pmatch**  is set to  **NULL**  then GIN assumes partial match is not required. The variable is initialized to NULL before call, so this argument can simply be ignored by operator classes that do not support partial match.

    **extra\_data**  is an output argument that allows  **extractQuery**  to pass additional data to the  **consistent**  and  **comparePartial**  methods. To use it,  **extractQuery**  must allocate an array of  **\*nkeys**  pointers and store its address at  **\*extra\_data**, then store whatever it wants to into the individual pointers. The variable is initialized to  **NULL**  before call, so this argument can simply be ignored by operator classes that do not require extra data. If  **\*extra\_data**  is set, the whole array is passed to the  **consistent**  method, and the appropriate element to the  **comparePartial**  method.


-   bool consistent\(bool check\[\], StrategyNumber n, Datum query, int32 nkeys, Pointer extra\_data\[\], bool \*recheck, Datum queryKeys\[\], bool nullFlags\[\]\)

    Returns  **TRUE**  if an indexed item satisfies the query operator with StrategyNumber  **n**  \(or might satisfy it, if the recheck indication is returned\). This function does not have direct access to the indexed item's value, since GIN does not store items explicitly. Rather, what is available is knowledge about which key values extracted from the query appear in a given indexed item. The check array has length  **nkeys**, which is the same as the number of keys previously returned by  **extractQuery**  for this query datum. Each element of the check array is  **TRUE**  if the indexed item contains the corresponding query key, for example, if \(check\[i\] == TRUE\), the i-th key of the  **extractQuery**  result array is present in the indexed item. The original query datum is passed in case the  **consistent**  method needs to consult it, and so are the  **queryKeys\[\]**  and  **nullFlags\[\]**  arrays previously returned by  **extractQuery**.  **extra\_data**  is the extra-data array returned by  **extractQuery**, or  **NULL**  if none.

    When  **extractQuery**  returns a null key in  **queryKeys\[\]**, the corresponding  **check\[\]**  element is  **TRUE**  if the indexed item contains a null key; that is, the semantics of  **check\[\]**  are like  **IS NOT DISTINCT FROM**. The  **consistent**  function can examine the corresponding  **nullFlags\[\]**  element if it needs to tell the difference between a regular value match and a null match.

    On success,  **\*recheck**  should be set to  **TRUE**  if the heap tuple needs to be rechecked against the query operator, or  **FALSE**  if the index test is exact. That is, a  **FALSE**  return value guarantees that the heap tuple does not match the query; a  **TRUE**  return value with  **\*recheck**  set to  **FALSE**  guarantees that the heap tuple matches the query; and a  **TRUE**  return value with  **\*recheck**  set to  **TRUE**  means that the heap tuple might match the query, so it needs to be fetched and rechecked by evaluating the query operator directly against the originally indexed item.


Optionally, an operator class for GIN can supply the following method:

-   int comparePartial\(Datum partial\_key, Datum key, StrategyNumber n, Pointer extra\_data\)

    Compares a partial-match query key to an index key. Returns an integer whose sign indicates the result: less than zero means the index key does not match the query, but the index scan should continue; zero means that the index key matches the query; greater than zero indicates that the index scan should stop because no more matches are possible. The strategy number  **n**  of the operator that generated the partial match query is provided, in case its semantics are needed to determine when to end the scan. Also,  **extra\_data**  is the corresponding element of the extra-data array made by  **extractQuery**, or  **NULL**  if none. Null keys are never passed to this function.


To support "partial match" queries, an operator class must provide the  **comparePartial**  method, and its  **extractQuery**  method must set the  **pmatch**  parameter when a partial-match query is encountered. For details, see  [Partial Match Algorithm](implementation.md#en-us_topic_0283137368_en-us_topic_0237122201_en-us_topic_0059778495_s9dc41ea95b9144c38d709b0b9a43fe9e).

The actual data types of the various Datum values mentioned in this section vary depending on the operator class. The item values passed to  **extractValue**  are always of the operator class's input type, and all key values must be of the class's  **STORAGE**  type. The type of the query argument passed to  **extractQuery**, consistent and  **triConsistent**  is whatever is specified as the right-hand input type of the class member operator identified by the strategy number. This need not be the same as the item type, so long as key values of the correct type can be extracted from it.

