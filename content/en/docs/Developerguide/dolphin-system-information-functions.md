# Dolphin System Information Functions<a name="EN-US_TOPIC_0289899824"></a>

## Dolphin Session Information Functions<a name="en-us_topic_0283136950_en-us_topic_0237121987_en-us_topic_0059777618_seb0ac642d9594cfe9a06d3d304c6dc75"></a>

-   database\(\)

    Description: Name of the current database schema.

    Return type: name

    Example:

    ```
    openGauss=# SELECT database();
     database
    ----------
     public
    (1 row)
    ```

    Note: **database** returns the first valid schema name in the search path. (If the search path is empty or contains no valid schema name, NULL is returned.) This is the schema that will be used for any tables or other named objects that are created without specifying a target schema.

-   uuid_short\(\)

    Description: uuid_short information of the current database.

    Return type: int

    Example:

    ```
    openGauss=# select uuid_short();
        uuid_short    
    ------------------
    3939644819374082
    (1 row)
    ```

-   dolphin_version\(\)

    Description: Dolphin version information It returns a string describing the version information of the Dolphin plug-in.

    Return type: text

    Example:

    ```
    openGauss=# SELECT dolphin_version();
        dolphin_version
    ------------------------
     dolphin build 511401b6
    (1 row)
    ```
