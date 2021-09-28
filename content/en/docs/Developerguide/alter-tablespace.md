# ALTER TABLESPACE<a name="EN-US_TOPIC_0289899866"></a>

## Function<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s15c266ccb0b240ddaab9e5fadcfb4313"></a>

**ALTER TABLESPACE**  modifies the attributes of a tablespace.

## Precautions<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s4d48c658c0a1491ea2c6727959928558"></a>

-   Only the tablespace owner or a user granted with the ALTER permission can run the  **ALTER TABLESPACE**  command. The system administrator has this permission by default. To modify a tablespace owner, you must be the tablespace owner or system administrator and a member of the new owner role.
-   To change the owner, you must also be a direct or indirect member of the new owning role.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If  **new\_owner**  is the same as  **old\_owner**, the current user will not be verified. A message indicating successful  **ALTER**  execution is displayed.


## Syntax<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s918cfbbb9e5d4554a22b92cdbaa77d86"></a>

-   The syntax of renaming a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        RENAME TO new_tablespace_name;
    ```

-   The syntax of setting the owner of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        OWNER TO new_owner;
    ```

-   The syntax of setting the attributes of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        SET ( {tablespace_option = value} [, ... ] );
    ```

-   The syntax of resetting the attributes of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        RESET ( { tablespace_option } [, ...] );
    ```

-   The syntax of setting the quota of a tablespace is as follows:

    ```
    ALTER TABLESPACE tablespace_name 
        RESIZE MAXSIZE { UNLIMITED | 'space_size'};
    ```


## Parameter Description<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_s089537de861942ffac3f726a79d2a900"></a>

-   **tablespace\_name**

    Specifies the tablespace to be modified.

    Value range: an existing table name

-   **new\_tablespace\_name**

    Specifies the new name of a tablespace.

    The new name cannot start with  **PG\_**.

    Value range: a string. It must comply with the naming convention.

-   **new\_owner**

    Specifies the new owner of the tablespace.

    Value range: an existing username

-   **tablespace\_option**

    Sets or resets the parameters of a tablespace.

    Value range:

    -   seq\_page\_cost: sets the optimizer to calculate the cost of obtaining disk pages in sequence. The default value is  **1.0**.
    -   **random\_page\_cost**: sets the optimizer to calculate the cost of obtaining disk pages in a non-sequential manner. The default value is  **4.0**.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   The value of  **random\_page\_cost**  is relative to that of  **seq\_page\_cost**. It is meaningless when the value is equal to or less than the value of  **seq\_page\_cost**.
        >-   The prerequisite for the default value  **4.0**  is that the optimizer uses indexes to scan table data and the hit ratio of table data in the cache is about 90%.
        >-   If the size of the table data space is smaller than that of the physical memory, decrease the value to a proper level. On the contrary, if the hit ratio of table data in the cache is lower than 90%, increase the value.
        >-   If random-access memory like SSD is adopted, the value can be decreased to a certain degree to reflect the cost of true random scan.


    Value range: a positive floating point number

-   **RESIZE MAXSIZE**

    Resets the maximum size of tablespace.

    Value range:

    -   **UNLIMITED**: No limit is set for the tablespace.
    -   Determined by  **space\_size**. For details about the format, see  [CREATE TABLESPACE](create-tablespace.md).

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   If the adjusted quota is smaller than the current tablespace usage, the adjustment is successful. You need to decrease the tablespace usage to a value less than the new quota before writing data to the tablespace.
        >-   You can also use the following statement to change the value of  **MAXSIZE**:
        >```
        >ALTER TABLESPACE tablespace_name RESIZE MAXSIZE
        > { 'UNLIMITED' | 'space_size'};
        >```



## Examples<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_sf0e218df4bb44fd0afce8f50d6654d19"></a>

See  [Examples](create-tablespace.md#en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e)  in  **CREATE TABLESPACE**.

## Helpful Links<a name="en-us_topic_0283137270_en-us_topic_0237122078_en-us_topic_0059777507_sac21888107614d73bf2f04cd684aed03"></a>

[CREATE TABLESPACE](create-tablespace.md)  and  [DROP TABLESPACE](drop-tablespace.md)

