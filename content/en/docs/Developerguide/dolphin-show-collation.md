# SHOW COLLATION

## Precautions

N/A

## Function

Displays the character sequence of all supported servers.

## Syntax

```
SHOW COLLATION [LIKE 'pattern' | WHERE expr]
```

## Parameter Description

- **WHERE expr**

  Filters expressions.

- **LIKE 'pattern'**

  Indicates that the pattern regular expression matches the collation name.

## Return Result Set

|  Column | Description                         | Remarks      | 
| --------- | ---------------------------- | :---------- |
| collation | Indicates the collation set name.                  |    |
| charset   | Indicates the character set associated with collation set.          |     |
| id        | Indicates character set description.              | The column corresponds to the OID of the row in the <strong>pg_collation</strong> table.      |
| default   | Indicates whether the collation set corresponds to the character set.    | openGauss does not have a default collation order. This column is left empty.      |
| compiled  | Indicates whether the collation set is compiled.            | The value of this column is <strong>Yes</strong>.  |
| sortlen   | Indicates the memory size required for character set collation.  | This column is empty.|
## Examples

```sql
openGauss=# SHOW COLLATION LIKE 'aa%';
    collation     | charset |  id   | default | compiled | sortlen
------------------+---------+-------+---------+----------+----------
 aa_DJ            | utf8    | 13450 |         | Yes      |
 aa_DJ            | latin1  | 13451 |         | Yes      |
 aa_DJ.iso88591   | latin1  | 13452 |         | Yes      |
 aa_DJ.utf8       | utf8    | 13453 |         | Yes      |
 aa_ER            | utf8    | 13454 |         | Yes      |
 aa_ER.utf8       | utf8    | 13455 |         | Yes      |
 aa_ER.utf8@saaho | utf8    | 13456 |         | Yes      |
 aa_ER@saaho      | utf8    | 13457 |         | Yes      |
 aa_ET            | utf8    | 13458 |         | Yes      |
 aa_ET.utf8       | utf8    | 13459 |         | Yes      |
(10 rows)
```
