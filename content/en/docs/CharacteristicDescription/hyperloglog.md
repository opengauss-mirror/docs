# HyperLogLog<a name="EN-US_TOPIC_0000001135403983"></a>

## Availability<a name="section5309649"></a>

This feature is available as of openGauss 1.1.0.

## Introduction<a name="section47786844"></a>

HyperLoglog \(HLL\) is used to count the number of distinct values.

## Benefits<a name="section27428414"></a>

Improves AP/TP query performance.

## Description<a name="section45529136"></a>

HLL is an approximation algorithm for efficiently counting the number of distinct values in a dataset. It features faster computing and lower space usage. You only need to store HLL data structures instead of datasets. When new data is added to a dataset, make hash calculation on the data and insert the result to an HLL. Then, you can obtain the final result based on the HLL.

HLL has advantages over others in the computing speed and storage space requirement. In terms of time complexity, the Sort algorithm needs to sort at least O\(n log n\) time. Although the Hash algorithm can obtain the result by scanning the entire table O\(n\) time, the storage space is as follows: Both the Sort and Hash algorithms need to store the original data before collecting statistics, which consumes a large amount of storage space. For the HLL, the original data does not need to be stored, and only the HLL data structure needs to be maintained. Therefore, the occupied space is always at the 1280-byte constant level.

## Enhancements<a name="section7109043"></a>

None

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section63981393"></a>

None

