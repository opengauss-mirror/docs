# SHOW CHARACTER SET

## Precautions

N/A

## Function

Displays all supported character sets.

## Syntax

```
SHOW {CHARACTER SET | CHARSET} [LIKE 'pattern' | WHERE expr]
```

## Parameter Description

- **WHERE expr**

  Filters expressions.

- **LIKE 'pattern'**

  Indicates that the pattern regular expression matches the name of the character set.

## Return Result Set

| Column         | Description                        | Remarks      |
| ----------------- | ---------------------------- | ----------- |
| charset           | Character set name.      |  |
| description       | Character set description.|  |
| default collation | Default collation of character sets.        | This column is empty.|
| maxlen            | Maximum number of bytes required to store a character.|    | 

## Examples

```sql
openGauss=# SHOW CHARACTER SET LIKE 'a%';
 charset |    description    | default collation | maxlen
---------+-------------------+-------------------+--------
 abc     | alias for WIN1258 |                   |      1
 alt     | alias for WIN866  |                   |      1
(2 rows)
```
