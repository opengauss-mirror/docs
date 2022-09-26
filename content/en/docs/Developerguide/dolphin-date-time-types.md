# Date/Time Types<a name="EN-US_TOPIC_0289901014"></a>

Compared with the original openGauss, Dolphin modifies the date/time types as follows:
1. The performance of the date, time, datetime, and timestamp types are modified.
2. The year data type is added.

**Table 1** Date/Time types

| Type        | Description                                                        | Storage Space| Value Range (for Users)                           | Precision Range                          | Remarks                                                        |
| ------------ | ------------------------------------------------------------ | -------- | ------------------------------------ | ---------------------------------- | ------------------------------------------------------------ |
| date         | Indicates a date.                                                        | 4 bytes  | 4713 BC ~ 5874897 AD                | -                                  | The input must be a valid date. The month or number of days cannot be 0.                |
| time(p)      | Indicates the time or a period of time (hours, minutes, and seconds) of a day. **p** indicates the precision.    | 8 bytes  | -838:59:59[.frac] ~ 838:59:59[.frac] | **p** indicates the precision after the decimal point. The value ranges from 0 to 6. If this parameter is not specified, the default value 0 is used.| -                                                            |
| datetime(p)  | Indicates date and time without time zone information. **p** indicates the precision.                        | 8 bytes   | 4713 BC ~ 294276 AD                  | **p** indicates the precision after the decimal point. The value ranges from 0 to 6. If this parameter is not specified, the default value 0 is used.| The input must be a valid date. The month or number of days cannot be 0.                |
| timestamp(p) | Date and time with time zone information. **p** indicates the precision.                          | 8 bytes   | 4713 BC ~ 294276 AD                  | **p** indicates the precision after the decimal point. The value ranges from 0 to 6. If this parameter is not specified, the default value 0 is used.| The input must be a valid date. The month or number of days cannot be 0. Note that the timestamp type in the original openGauss database indicates a timestamp without a time zone, but the B-compatible timestamp type indicates a timestamp with a time zone. Therefore, compatibility issues exist.|
| year(w)      | Indicates a year. **w** indicates the display width. The value of **year(4)** or **year** is in the YYYY format, and the value of **year(2)** is in the YY format.| 2 bytes   | 1901 ~ 2155                          | -                                  | -                                                            |

Remarks
- Note that in the CREATE TABLE or ALTER TABLE statement, if the precision is not specified when the time type (such as timestamp, datetime, and time) column attribute is defined, the default value 0 is used. When the cast(expr as typename) syntax is used for type conversion, if no precision is specified for the target type, the default precision is 0. Therefore, if you need to retain the precision, you need to explicitly use (typmod) to specify the precision.
- In addition, **::** is used to convert the compatible time type. If no precision is specified for the target type, the default precision is 0.

### Date Type Inputs

The following formats are supported:

| Format                     | Description  |
| ------------------------- | ------ |
| 'YYYY-MM-DD', 'YY-MM-DD' | Year, month, and date|
| 'YYYYMMDD', 'YYMMDD'    | Year, month, and date|
| YYYYMMDD, YYMMDD         | Year, month, and date|

Remarks:

- The input must be a valid date. The month or date cannot be 0.
- If you want to enter a date later than or equal to 10000, use the YYYY-MM-DD format, for example, 10100-12-12.
- The year 0000 is allowed. In openGauss, the year 0000 is considered as a leap year, and the 2-29 can be entered.

Examples (Note that openGauss is compatible with B database.)

```sql
--Create a table.
openGauss=# CREATE TABLE test_date(
openGauss(# dt date);
CREATE TABLE
    
--Insert data.
openGauss=# INSERT INTO test_date VALUES ('2020-12-21');
INSERT 0 1
openGauss=# INSERT INTO test_date VALUES ('141221');
INSERT 0 1
openGauss=# INSERT INTO test_date VALUES (20151022);
INSERT 0 1

--View data.
openGauss=# SELECT * FROM test_date;
     dt     
------------
 2020-12-21
 2014-12-21
 2015-10-22
(3 rows)
```

### Time Type Inputs

The following formats are supported:

| Format                          | Description                                                  |
| ------------------------------ | ------------------------------------------------------ |
| '\[-\]\[D\] hh:mm:ss\[.frac\]' | Indicates the hour, minute, and second. The value can be a negative number. **D** indicates the number of days. The value ranges from 0 to 34.|
| '\[-\]hhmmss\[.frac\]'         | Hour, minute, and second                                                |
| \[-\]hhmmss\[.frac\]           | Hour, minute, and second                                                |

Remarks:

- For the format 'hh:mm:ss', the loose input formats 'hh:mm' and 'ss' are also supported.
- When the integer 0 is entered, the value is **00:00:00**, which is also a zero value of the time type.
- After the time type is compatible, the value range can be greater than 24 hours. Do not convert the time type to the timetz type.

Examples (Note that openGauss is compatible with B database.)

```sql
--Create a table.
openGauss=# CREATE TABLE test_time(
openGauss(# ti time(2));
CREATE TABLE
    
--Insert data.
openGauss=# INSERT INTO test_time VALUES ('2 9:12:24.1234');
INSERT 0 1
openGauss=# INSERT INTO test_time VALUES ('-34:56:59.1234');
INSERT 0 1
openGauss=# INSERT INTO test_time VALUES (561234);
INSERT 0 1

--View data.
openGauss=# SELECT * FROM test_time;
      ti      
--------------
 57:12:24.12
 -34:56:59.12
 56:12:34
(3 rows)
```

### Datetime Type Inputs

The following formats are supported:

| Format                                                        | Description  |
| ------------------------------------------------------------ | ------ |
| 'YYYY-MM-DD hh:mm:ss\[.frac\]', 'YY-MM-DD hh:mm:ss\[.frac\]'| Timestamp|
| 'YYYYMMDDhhmmss', 'YYMMDDhhmmss'          | Timestamp|
| YYYYMMDDhhmmss, YYMMDDhhmmss                | Timestamp|

Remarks:

- The input must be a valid date. The month or date cannot be 0.
- For the YYYYMMDDhhmmss and YYMMDDhhmmss formats, the first four letters of the character string are identified as the year only when the length of the character string is 8 or 14. In other cases, only the first two letters are identified as the year.
- If the input format is YYYYMMDDhhmmss or YYMMDDhhmmss, the length of the input integer must be 6, 8, 12, or 14. If the length does not meet this requirement, zeros are added before the integer, if the length is 6, 8, 12, or 14, the value is in the YYMMDD format. If the length is 8, the value is in the YYYYMMDD format. If the length is 12, the value is in the YYMMDDhhmmss format. If the length is 14, the value is in the YYYYMMDDhhmmss format.
- If you want to enter a timestamp whose year is greater than 10000, use the 'YYYY-MM-DD hh:mm:ss\[.frac\]' format.

Examples (Note that openGauss is compatible with B database.)

```sql
--Create a table.
openGauss=# CREATE TABLE test_datetime(
openGauss(# dt datetime(2));
CREATE TABLE
    
--Insert data.
openGauss=# INSERT INTO test_datetime VALUES ('2020-11-08 02:31:25.961');
INSERT 0 1
openGauss=# INSERT INTO test_datetime VALUES (201112234512);
INSERT 0 1

--View data.
openGauss=# SELECT * FROM test_datetime;
           dt           
------------------------
 2020-11-08 02:31:25.96
 2020-11-12 23:45:12
(3 rows)
```

### Timestamp Type Inputs

The following formats are supported:

| Format                                                        | Description            |
| ------------------------------------------------------------ | ---------------- |
| 'YYYY-MM-DD hh:mm:ss\[.frac\]\[+/-hh:mm:ss\]', 'YY-MM-DD hh:mm:ss\[.frac\]\[+/-hh:mm:ss\]'| Timestamp with time zone|
| 'YYYYMMDDhhmmss\[.frac\]', 'YYMMDDhhmmss\[.frac]'          | Timestamp with time zone|
| YYYYMMDDhhmmss\[.frac\], YYMMDDhhmmss\[.frac\]              | Timestamp with time zone|

Remarks:

- The input must be a valid date. The month or date cannot be 0.
- The compatible timestamp type allows the time zone information \[+/-hh:mm:ss\] to be added after the format 'YYYY-MM-DD hh:mm:ss\[.frac\]'.
- If you want to enter a timestamp whose year is greater than 10000, use the 'YYYY-MM-DD hh:mm:ss\[.frac\]' format.
- Note that the timestamp type is stored in the timestamptz type. Pay attention to the difference before using the timestamp type. If you want to use a timestamp without a time zone, use the datetime type.
- Note: timestamp with time zone is equivalent to the original openGauss timestamptz type, and timestamp without time zone is equivalent to the timestamp type in the original openGauss (not the compatible timestamp type, that is, the original timestamp without time zone).

Examples (Note that openGauss is compatible with B database.)

```sql
--Create a table.
openGauss=# CREATE TABLE test_timestamp(
openGauss(# ts timestamp(2));
CREATE TABLE
    
--Insert data.
openGauss=# INSERT INTO test_timestamp VALUES ('2012-10-21 23:55:23-12:12');
INSERT 0 1
openGauss=# INSERT INTO test_timestamp VALUES (201112234512);
INSERT 0 1

--View data.
openGauss=# SELECT * FROM test_timestamp;
           ts           
------------------------
 2012-10-22 20:07:23
 2020-11-12 23:45:12
(3 rows)
    
--Change the time zone.
openGauss=# SET TIME ZONE UTC;
SET
--View data.
openGauss=# SELECT * FROM test_timestamp;
           ts           
------------------------
 2012-10-22 12:07:23
 2020-11-12 15:45:12
(3 rows)
```

### Input of the year/year(4) or year(2) type

The following formats are supported:

| Format         | Description                                                        |
| ------------- | ------------------------------------------------------------ |
| 'YYYY', 'YY'| Indicates a year. When you enter two digits, if the value is less than 70, add 2000 to the value. For example, 69 indicates 2069. If the value is greater than or equal to 70, add 1900 to the value. For example, 70 indicates 1970.|
| YYYY, YY    | Year                                                          |

Remarks

- The three types accept the same input format and range. The only difference is that the output format of the year(2) type is only two digits.
- If **'0'** is entered, openGauss will parse the value to the year 2000. However, if an integer **0** is entered, openGauss will parse the value to 0, indicating the value 0 of the year type.

Examples (Note that openGauss is compatible with B database.)

```sql
--Create a table.
openGauss=# CREATE TABLE test_year(
openGauss(#  y year,
openGauss(#  y2 year(2));
CREATE TABLE
    
--Insert data.
openGauss=# INSERT INTO test_year VALUES ('70', '70');
INSERT 0 1
openGauss=# INSERT INTO test_year VALUES ('69', '69');
INSERT 0 1
openGauss=# INSERT INTO test_year VALUES ('2069', '2069');
INSERT 0 1
openGauss=# INSERT INTO test_year VALUES ('1970', '1970');
INSERT 0 1

--View data.
openGauss=# SELECT * FROM test_year;
  y   | y2 
------+----
 1970 | 70
 2069 | 69
 2069 | 69
 1970 | 70
(4 rows)
```
