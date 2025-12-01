# MOVE<a name="EN-US_TOPIC_0289900005"></a>

## Function<a name="en-us_topic_0283137573_en-us_topic_0237122169_en-us_topic_0059778649_s0bf0a06c81754f8b9c758ba7660a6d5f"></a>

**MOVE**  repositions a cursor without retrieving any data.  **MOVE**  works exactly like the  [FETCH](fetch.md)  statement, except it only repositions the cursor and does not return rows.

## Precautions<a name="en-us_topic_0283137573_en-us_topic_0237122169_en-us_topic_0059778649_sb645366a8585455aaecf9f6d58feef33"></a>

None

## Syntax<a name="en-us_topic_0283137573_en-us_topic_0237122169_en-us_topic_0059778649_s813243b788f64e2ab3219be97d6efe24"></a>

```
MOVE [ direction [ FROM | IN ] ] cursor_name;
```

The  **direction**  clause specifies optional parameters.

```
NEXT
   | PRIOR
   | FIRST
   | LAST
   | ABSOLUTE count
   | RELATIVE count
   | count
   | ALL
   | FORWARD
   | FORWARD count
   | FORWARD ALL
   | BACKWARD
   | BACKWARD count
   | BACKWARD ALL
```

## Parameter Description<a name="en-us_topic_0283137573_en-us_topic_0237122169_en-us_topic_0059778649_scd6d2507c45c462a8717666a869f836b"></a>

The parameters of  **MOVE**  and  **FETCH**  are the same. For details, see  [Parameter Description](fetch.md#en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_sceb763c430654064b8f61e9aa0792af9)  in  **FETCH**.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>On successful completion, a  **MOVE**  statement returns a tag of the form  **MOVE count**. The  **count**  is the number of rows that a  **FETCH**  statement with the same parameters would have returned \(possibly zero\).

## Examples<a name="en-us_topic_0283137573_en-us_topic_0237122169_en-us_topic_0059778649_s135d1e005b114aa4b3446001b7416853"></a>

```
-- Start a transaction.
openGauss=# START TRANSACTION;

-- Define a cursor cursor1.
openGauss=# CURSOR cursor1 FOR SELECT * FROM tpcds.reason;

-- Skip the first three rows of cursor1.
openGauss=# MOVE FORWARD 3 FROM cursor1;

-- Fetch the first four rows from cursor1.
openGauss=# FETCH 4 FROM cursor1;
 r_reason_sk |   r_reason_id    |                                            r_reason_desc                                             
-------------+------------------+------------------------------------------------------------------------------------------------------
           4 | AAAAAAAAEAAAAAAA | Not the product that was ordred                                                                     
           5 | AAAAAAAAFAAAAAAA | Parts missing                                                                                       
           6 | AAAAAAAAGAAAAAAA | Does not work with a product that I have                                                            
           7 | AAAAAAAAHAAAAAAA | Gift exchange                                                                                       
(4 rows)

-- Close the cursor.
openGauss=# CLOSE cursor1;

-- End the transaction.
openGauss=# END;
```

## Helpful Links<a name="en-us_topic_0283137573_en-us_topic_0237122169_en-us_topic_0059778649_s576a05d59d374a6684001f646161ee14"></a>

[CLOSE](close.md)  and  [FETCH](fetch.md)

