# CREATE TABLESPACE<a name="ZH-CN_TOPIC_0289900078"></a>

## Function<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_sbf00214c21e441f5adc2bc08ecaca4e7"></a>

Creates a tablespace in a database.

## Precautions<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s54948265e9f34f1fac838f60ac0bd3a6"></a>

-   This section describes only the new syntax of Dolphin. The original syntax of openGauss is not deleted or modified.

-   When you run the ADD DATAFILE command to create a tablespace, if the entered path ends with **.ibd**, the Dolphin plug-in changes the path name to end with **_ibd**.

## Syntax<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s9f8a8395cc464cd2a34dec7a82fedc7b"></a>

```
CREATE TABLESPACE tablespace_name
    tablespace_details;
```

In the preceding information, tablespace\_details is as follows:

```
[ OWNER user_name ] [RELATIVE] LOCATION 'directory' [ MAXSIZE 'space_size' ] [with_option_clause] [ ENGINE [=] engine_name ]
| ADD DATAFILE 'directory' [ ENGINE [=] engine_name ]
```

## Parameter Description<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_see2346106f4e402da499ad74c533dfa8"></a>

-   **ENGINE \[=\] engine_name**

    Specifies the storage engine. Currently, it is used only for syntax and has no actual purpose.

## Examples<a name="en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e"></a>

```
--Run the ADD DATAFILE syntax to create a tablespace.
openGauss=# CREATE TABLESPACE t_tbspace ADD DATAFILE 'my_tablespace' ENGINE = test_engine;
CREATE TABLESPACE

--Use the ADD DATAFILE syntax to create a tablespace. The input path ends with **.ibd**.
openGauss=# CREATE TABLESPACE test_tbspace_ibd ADD DATAFILE 'test_tbspace1.ibd';
WARNING:  Suffix ".ibd" of datafile path detected. The actual path will be renamed as "test_tbspace1_ibd"
CREATE TABLESPACE
openGauss=# CREATE TABLE t_tbspace(num int) TABLESPACE test_tbspace_ibd;
CREATE TABLE
openGauss=# \d t_tbspace
   Table "public.t_tbspace"
 Column |  Type   | Modifiers
--------+---------+-----------
 num    | integer |
Tablespace: "test_tbspace_ibd"
```
