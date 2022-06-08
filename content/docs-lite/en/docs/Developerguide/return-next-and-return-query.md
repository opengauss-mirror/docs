# RETURN NEXT and RETURN QUERY<a name="EN-US_TOPIC_0289900097"></a>

## Syntax<a name="en-us_topic_0283137380_en-us_topic_0237122232_section66906369117"></a>

When creating a function, specify  **SETOF **_datatype_  for the return values.

return\_next\_clause::=

![](figures/en-us_image_0283137092.png)

return\_query\_clause::=

![](figures/en-us_image_0283137739.png)

The above syntax diagram is explained as follows:

If a function needs to return a result set, use  **RETURN NEXT**  or  **RETURN QUERY**  to add results to the result set, and then continue to execute the next statement of the function. As the  **RETURN NEXT**  or  **RETURN QUERY**  statement is executed repeatedly, more and more results will be added to the result set. After the function is executed, all results are returned.

**RETURN NEXT**  can be used for scalar and compound data types.

**RETURN QUERY**  has a variant  **RETURN QUERY EXECUTE**. You can add dynamic queries and add parameters to the queries by  **USING**.

## Examples<a name="en-us_topic_0283137380_en-us_topic_0237122232_section663313751118"></a>

```
openGauss=# CREATE TABLE t1(a int);
openGauss=# INSERT INTO t1 VALUES(1),(10);

--RETURN NEXT
openGauss=# CREATE OR REPLACE FUNCTION fun_for_return_next() RETURNS SETOF t1 AS $$
DECLARE
   r t1%ROWTYPE;
BEGIN
   FOR r IN select * from t1
   LOOP
      RETURN NEXT r;
   END LOOP;
   RETURN;
END;
$$ LANGUAGE PLPGSQL;
openGauss=# call fun_for_return_next();
 a
---
 1
 10
(2 rows)

-- RETURN QUERY
openGauss=# CREATE OR REPLACE FUNCTION fun_for_return_query() RETURNS SETOF t1 AS $$
DECLARE
   r t1%ROWTYPE;
BEGIN
   RETURN QUERY select * from t1;
END;
$$
language plpgsql;
openGauss=# call fun_for_return_query();
 a
---
 1
 10
(2 rows)
```

