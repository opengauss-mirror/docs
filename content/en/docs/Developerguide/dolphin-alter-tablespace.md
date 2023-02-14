# ALTER TABLESPACE

## Function <a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s15c266ccb0b240ddaab9e5fadcfb4313"></a>

Modifies the attributes of a tablespace.

## Precautions<a name="en-us_topic_0283137126_en-us_topic_0237122076_en-us_topic_0059779051_s8ea536d5b8ff459e9e3614e35f53bc2a"></a>

Compared with the original openGauss, Dolphin modifies the ALTER TABLESPACE syntax as follows:

1. The WAIT option is added for syntax compatibility only.
2. The ENGINE [=] engine_name option is added for syntax compatibility only.

## Syntax <a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s918cfbbb9e5d4554a22b92cdbaa77d86"></a>

-   The syntax of renaming a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        RENAME TO new_tablespace_name [ alter_option_list  [ ... ] ];
    ```

-   The syntax of setting the owner of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        OWNER TO new_owner [ alter_option_list  [ ... ] ];
    ```

-   The syntax of setting the attributes of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        SET ( {tablespace_option = value} [, ... ] )
         [ alter_option_list  [ ... ] ];
    ```

-   The syntax of resetting the attributes of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        RESET ( { tablespace_option } [, ...] )
         [ alter_option_list  [ ... ] ];
    ```

-   The syntax for setting the quota of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        RESIZE MAXSIZE { UNLIMITED | 'space_size'}
         [ alter_option_list  [ ... ] ];
    ```

        Where alter_option_list is:
        WAIT 
        | ENGINE [=] engine_name

## Parameter Description <a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s089537de861942ffac3f726a79d2a900"></a>

-   **tablespace\_name**

    Specifies the tablespace to be modified.

    Value range: an existing tablespace name

-   **new\_tablespace\_name**

    Specifies the new name of a tablespace.

    The new name cannot start with PG\_.

    Value range: a string. It must comply with the naming convention.

-   **new\_owner**

    Specifies the new owner of the tablespace.

    Value range: an existing username

-   **tablespace\_option**

    Sets or resets the parameters of a tablespace.

    Value:

    -   **seq\_page\_cost**: sets the optimizer to calculate the cost of obtaining the disk page in sequence one time. The default value is **1.0**.
    -   **random\_page\_cost**: sets the optimizer to calculate the cost of obtaining the disk page in random sequence one time. The default value is **4.0**.

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >-   random\_page\_cost is relative to seq\_page\_cost. It is meaningless when it is equal to or less than seq\_page\_cost.

        >-   The prerequisite of using **4.0** as the default value is that the optimizer uses indexes to scan the table data and that the hit ratio of data in the cache reaches about 90%.

        >-   If the table data space is less than the physical memory, decrease the value to a proper level. If the hit ratio of data in the cache is lower than 90%, increase the value.

        >-   If random-access memory like SSD is adopted, the value can be decreased to a certain degree to reflect the cost of true random scan.


    A positive floating point.

-   **RESIZE MAXSIZE**

    Resets the maximum size of tablespace.

    Value:

    -   **UNLIMITED**: No limit is set for this tablespace.
    -   The value is determined by space\_size. For details about the format, see [CREATE TABLESPACE](create-tablespace.md).

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >-   If the adjusted quota is smaller than the current tablespace usage, the adjustment is successful. You need to decrease the tablespace usage to a value less than the new quota before writing data to the tablespace.
        
        >-   It can be used when you are modifying **MAXSIZE**:
        >```
        >ALTER TABLESPACE tablespace_name RESIZE MAXSIZE
        > { 'UNLIMITED' | 'space_size'};
        >```

-   **engine\_name**

    This parameter is meaningless.

    Value: a combination of any characters

## Examples<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_sf0e218df4bb44fd0afce8f50d6654d19"></a>

```
--Create a tablespace.
openGauss=# CREATE TABLESPACE ds_location1 RELATIVE LOCATION 'tablespace/tablespace_1';

--Create user joe.
openGauss=# CREATE ROLE joe IDENTIFIED BY 'xxxxxxxxx';

--Create user jay.
openGauss=# CREATE ROLE jay IDENTIFIED BY 'xxxxxxxxx';

--Create an ordinary tablespace and set its owner to user joe.
openGauss=# CREATE TABLESPACE ds_location2 OWNER joe RELATIVE LOCATION 'tablespace/tablespace_1';

--Rename the tablespace ds_location1 to ds_location3 and specify option WAIT. The actual function is not affected.
openGauss=# ALTER TABLESPACE ds_location1 RENAME TO ds_location3 WAIT;

--Change the owner of the ds_location2 tablespace by specifying option ENGINE. The actual function is not affected.
openGauss=# ALTER TABLESPACE ds_location2 OWNER TO jay ENGINE = 'test';

--Change the quota of the ds_location2 tablespace and specify the options ENGINE and WAIT. The actual function is not affected.
openGauss=# ALTER TABLESPACE ds_location2 RESIZE MAXSIZE UNLIMITED ENGINE = 'test' WAIT;

--Delete a tablespace.
openGauss=# DROP TABLESPACE ds_location2 ENGINE = 'test2';
openGauss=# DROP TABLESPACE ds_location3;

--Delete the user.
openGauss=# DROP ROLE joe;
openGauss=# DROP ROLE jay;
```

## Helpful Links<a name="section156744489391"></a>

[CREATE TABLESPACE](dolphin-create-tablespace.md), [DROP TABLESPACE](dolphin-drop-tablespace.md)
