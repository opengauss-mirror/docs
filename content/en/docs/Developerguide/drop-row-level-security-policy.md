# DROP ROW LEVEL SECURITY POLICY<a name="EN-US_TOPIC_0242370608"></a>

## Function<a name="en-us_topic_0237122144_section196521854173211"></a>

**DROP ROW LEVEL SECURITY POLICY**  deletes a row-level access control policy from a table.

## Precautions<a name="en-us_topic_0237122144_section12765201893310"></a>

Only the owner of a table or a system administrator has the  **DROP ROW LEVEL SECURITY POLICY**  permission.

## Syntax<a name="en-us_topic_0237122144_section16798192723415"></a>

```
DROP [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="en-us_topic_0237122144_section11851526346"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified row-level access control policy does not exist.

-   **policy\_name**

    Specifies the name of the row-level access control policy to be deleted.

    -   table\_name

        Specifies the name of the table containing the row-level access control policy.

    -   CASCADE/RESTRICT

        Currently, no objects depend on row-level access control policies. Therefore,  **CASCADE**  is equivalent to  **RESTRICT**, and they are reserved to ensure backward compatibility.



## Examples<a name="en-us_topic_0237122144_section17979101023515"></a>

```
-- Create the data table all_data.
postgres=# CREATE TABLE all_data(id int, role varchar(100), data varchar(100));

-- Create a row-level access control policy.
postgres=# CREATE ROW LEVEL SECURITY POLICY all_data_rls ON all_data USING(role = CURRENT_USER);

-- Delete a row-level access control policy.
postgres=# DROP ROW LEVEL SECURITY POLICY all_data_rls ON all_data;
```

## Helpful Links<a name="en-us_topic_0237122144_section1426016489355"></a>

[ALTER ROW LEVEL SECURITY POLICY](alter-row-level-security-policy.md)  and  [CREATE ROW LEVEL SECURITY POLICY](create-row-level-security-policy.md)

