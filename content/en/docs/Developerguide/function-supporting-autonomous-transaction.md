# Function Supporting Autonomous Transaction<a name="EN-US_TOPIC_0000001148853321"></a>

An autonomous transaction can be defined in a function. The identifier of an autonomous transaction is  **PRAGMA AUTONOMOUS\_TRANSACTION**. The syntax of an autonomous transaction is the same as that of creating a function. The following is an example.

```
create table t4(a int, b int, c text);

CREATE OR REPLACE function autonomous_32(a int ,b int ,c text) RETURN int AS
DECLARE
  PRAGMA AUTONOMOUS_TRANSACTION;
BEGIN
  insert into t4 values(a, b, c);
  return 1;
END;
/

CREATE OR REPLACE function autonomous_33(num1 int) RETURN int AS
DECLARE
  num3 int := 220;
  tmp int;
  PRAGMA AUTONOMOUS_TRANSACTION;
BEGIN
  num3 := num3/num1;
  return num3;
EXCEPTION
  WHEN division_by_zero THEN
    select autonomous_32(num3, num1, sqlerrm) into tmp;
    return 0;
END;
/

select autonomous_33(0);

select * from t4;
```

