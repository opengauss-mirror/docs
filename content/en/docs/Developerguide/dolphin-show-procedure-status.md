# SHOW PROCEDURE STATUS

## Precautions

N/A

## Function

Displays information about stored procedures.

## Syntax

```
SHOW PROCEDURE STATUS [LIKE 'pattern' | WHERE expr]
```

## Parameter Description

For details, see <a href="dolphin-show-function-status.md">SHOW FUNCTION STATUS</a>.

## Display Content

For details, see <a href="dolphin-show-function-status.md">SHOW FUNCTION STATUS</a>.

## Examples

```sql
opengauss=# --Create a stored procedure.
opengauss=# create or replace procedure proc1() as declare genre_rec record; -- Declare record type.
opengauss$# begin
opengauss$# for genre_rec in (select e1.ename from public.emp1 e1 join public.emp1mot e1m on e1.mgr = e1m.mgr)
opengauss$# loop
opengauss$# raise notice ' %', genre_rec."ename"; -- Printing.
opengauss$# end loop;
opengauss$# end;
opengauss$# /
CREATE PROCEDURE
    opengauss=# --View information.
opengauss=# show procedure status like 'proc%';
   Db   | Name  |   Type    | Definer |           Modified            |            Created            | Security_type | Comment | character_set_client | collation_connection |Database Collation
--------+-------+-----------+---------+-------------------------------+-------------------------------+---------------+---------+----------------------+----------------------+--------------------
 public | proc1 | PROCEDURE | wyc     | 2022-09-24 14:46:40.868293+08 | 2022-09-24 14:46:40.868293+08 | INVOKER       |         |                      |                      |en_US.UTF-8
(1 row)
```
