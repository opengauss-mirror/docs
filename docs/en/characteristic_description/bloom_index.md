# BLOOM Index

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:05:35.718Z pushedAt=2026-09-22T11:12:32.601Z -->

## Availability<a name="section3480125215578"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section581451519"></a>

The Bloom index feature of openGauss is a space-saving data structure used to test whether an element is a member of a set. For the index access method, it allows quickly excluding non-matching tuples through signatures, whose size is determined when the index is created.

## Customer Benefits<a name="section148987345437"></a>

It provides an efficient and relatively low-space-cost solution for equality queries on arbitrary combinations of multiple columns.

## Feature Description<a name="section117041841924"></a>

This type of index is most useful when a table has many attributes and queries test arbitrary combinations of them. A traditional btree index is faster than a bloom index, but it may require many btree indexes to support all possible queries, whereas only one bloom index is needed. Note, however, that a bloom index supports only equality queries, while a btree index can also perform inequality and range searches.

## Feature Enhancements<a name="section21149265192"></a>

None.

## Feature Constraints<a name="section51513611925"></a>

- Only int4 and text column types are supported.
- Only row-store tables and row-store segment-page tables are supported.
- Online index creation is not supported.
- The maximum index length (signature) is 4096 bits.

## Dependencies<a name="section20491151519254"></a>

None.

## Usage Guide<a name="section20491151512543"></a>

- **Using the BLOOM Index**

Create a BLOOM index for the table, with a signature length of 80 bits, where the value of column 1 is hashed to 3 bits and the value of column 2 is hashed to 4 bits.

```
CREATE TABLE tst (i int4, t text);
CREATE INDEX bloomidx ON tst USING bloom (i, t) WITH (length=80, col1 = 3, col2 = 4);
```
