# RETURN Statements<a name="EN-US_TOPIC_0245374620"></a>

In openGauss, data can be returned in either of the following ways:  **RETURN**,  **RETURN NEXT**, or  **RETURN QUERY**.  **RETURN NEXT**  and  **RETURN QUERY**  are used only for functions and cannot be used for stored procedures.

## RETURN<a name="EN-US_TOPIC_0245374621"></a>

### Syntax<a name="en-us_topic_0237122231_en-us_topic_0059778007_s016991a2aeae4600b9f678c46d8de828"></a>

[Figure 1](#en-us_topic_0237122231_en-us_topic_0059778007_f7ff63e01e2a840c69a1c17b91e7dc3eb)  shows the syntax diagram for a return statement.

**Figure  1**  return\_clause::=<a name="en-us_topic_0237122231_en-us_topic_0059778007_f7ff63e01e2a840c69a1c17b91e7dc3eb"></a>  
![](figures/return_clause.jpg "return_clause")

The above syntax diagram is explained as follows:

This statement returns control from a stored procedure or function to a caller.

### Examples<a name="en-us_topic_0237122231_section11628101012578"></a>

See  [Example](call_statement.md#en-us_topic_0237122223_en-us_topic_0059778001_scfc5c5fdac3e4a11a915ebac95b49f79)  for call statement examples.

## RETURN NEXT and RETURN QUERY<a name="EN-US_TOPIC_0245374622"></a>

### Syntax<a name="en-us_topic_0237122232_section66906369117"></a>

When creating a function, specify  **SETOF**_datatype_  for the return values.

return\_next\_clause::=

![](figures/en-us_image_0253403489.png)

return\_query\_clause::=

![](figures/en-us_image_0253403490.png)

The above syntax diagram is explained as follows:

If a function needs to return a result set, use  **RETURN NEXT**  or  **RETURN QUERY**  to add results to the result set, and then continue to execute the next statement of the function. As the  **RETURN NEXT**  or  **RETURN QUERY**  statement is executed repeatedly, more and more results will be added to the result set. After the function is executed, all results are returned.

**RETURN NEXT**  can be used for scalar and compound data types.

**RETURN QUERY**  has a variant  **RETURN QUERY EXECUTE**. You can add dynamic queries and add parameters to the queries by  **USING**.

### Examples<a name="en-us_topic_0237122232_section663313751118"></a>

```
postgres=# CREATE TABLE t1(a int);
postgres=# INSERT INTO t1 VALUES(1),(10);

--RETURN NEXT
postgres=# CREATE OR REPLACE FUNCTION fun_for_return_next() RETURNS SETOF t1 AS $$
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
postgres=# call fun_for_return_next();
 a
---
 1
 10
(2 rows)

-- RETURN QUERY
postgres=# CREATE OR REPLACE FUNCTION fun_for_return_query() RETURNS SETOF t1 AS $$
DECLARE
   r t1%ROWTYPE;
BEGIN
   RETURN QUERY select * from t1;
END;
$$
language plpgsql;
postgres=# call fun_for_return_query();
 a
---
 1
 10
(2 rows)
```
