# Parallel Page-based Redo For Ustore<a name="EN-US_TOPIC_0000001164037824"></a>

## Availability<a name="section1136213124018"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section31192232416"></a>

Optimized Ustore inplace update WAL write and improved the degree of parallelism for Ustore DML operation replay.

## Benefits<a name="section747141119423"></a>

The WAL space used by the update operation is reduced, and the degree of parallelism for Ustore DML operation replay is improved.

## Description<a name="section1796166174315"></a>

Prefixes and suffixes are used to reduce the write times of WAL update. Replay threads are classified to solve the problem that most Ustore DML WALs are replayed on multiple pages. In addition, Ustore data pages are replayed based on  **blkno**.

## Enhancements<a name="section18965647194512"></a>

None.

## Constraints<a name="section1575615618465"></a>

None.

## Dependencies<a name="section2535204364616"></a>

This feature depends on the Ustore engine.

