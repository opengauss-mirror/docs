# EXECUTE<a name="EN-US_TOPIC_0289900825"></a>

## Function<a name="en-us_topic_0283137468_en-us_topic_0237122161_en-us_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

**EXECUTE**  executes a prepared statement. Because a prepared statement exists only in the lifetime of the session, the prepared statement must be created earlier in the current session by using the  **PREPARE**  statement.

## Precautions<a name="en-us_topic_0283137468_en-us_topic_0237122161_en-us_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

If the  **PREPARE**  statement creating the prepared statement declares some parameters, the parameter set passed to the  **EXECUTE**  statement must be compatible. Otherwise, an error will occur.

## Syntax<a name="en-us_topic_0283137468_en-us_topic_0237122161_en-us_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
EXECUTE name [ ( parameter [, ...] ) ];
```

## Parameter Description<a name="en-us_topic_0283137468_en-us_topic_0237122161_en-us_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **name**

    Specifies the name of the prepared statement to be executed.

-   **parameter**

    Specifies a parameter of the prepared statement. It must be of the same data type as that specified parameter in creating and generating the prepared statement.


## Examples<a name="en-us_topic_0283137468_en-us_topic_0237122161_en-us_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
-- Create the reason table.
openGauss=# CREATE TABLE tpcds.reason ( 
    CD_DEMO_SK          INTEGER          NOT NULL,
    CD_GENDER           character(16)            ,
    CD_MARITAL_STATUS   character(100)
);

-- Insert data.
openGauss=# INSERT INTO tpcds.reason VALUES(51, 'AAAAAAAADDAAAAAA', 'reason 51');

-- Create the reason_t1 table.
openGauss=# CREATE TABLE tpcds.reason_t1 AS TABLE tpcds.reason;

-- Create a prepared statement for an INSERT statement and execute the prepared statement.
openGauss=# PREPARE insert_reason(integer,character(16),character(100)) AS INSERT INTO tpcds.reason_t1 VALUES($1,$2,$3);

openGauss=# EXECUTE insert_reason(52, 'AAAAAAAADDAAAAAA', 'reason 52'); 

-- Delete the reason and reason_t1 tables.
openGauss=# DROP TABLE tpcds.reason;
openGauss=# DROP TABLE tpcds.reason_t1;
```

