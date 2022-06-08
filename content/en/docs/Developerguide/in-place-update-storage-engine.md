# In-place Update Storage Engine<a name="EN-US_TOPIC_0000001168230024"></a>

## Availability<a name="section1076382216287"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section732915401281"></a>

The in-place update storage engine is a new storage mode added to the openGauss Kernel. The row storage engine used by the earlier openGauss Kernel versions is in append update mode. The append update has good performance in addition, deletion, and HOT \(Heap Only Tuple\) update \(that is, update on the same page\) in the service. However, in a non-HOT UPDATE scenario across data pages, garbage collection is not efficient. The Ustore storage engine can solve this problem.

## Benefits<a name="section103921852122817"></a>

The in-place update storage engine can effectively reduce storage space occupation after tuples are updated for multiple times.

## Description<a name="section811017719290"></a>

The in-place update storage engine solves the problems of space expansion and large tuples of the Append update storage engine. The design of efficient rollback segments is the basis of the in-place update storage engine.

## Enhancements<a name="section1359382119297"></a>

None.

## Constraints<a name="section13355203802911"></a>

None.

## Dependencies<a name="section101449415302"></a>

None.

