# ALTER ROW LEVEL SECURITY POLICY<a name="EN-US_TOPIC_0289900230"></a>

## Function<a name="en-us_topic_0283137062_en-us_topic_0237122069_section196521854173211"></a>

**ALTER ROW LEVEL SECURITY POLICY**  modifies an existing row-level access control policy, including the policy name and the users and expressions affected by the policy.

## Precautions<a name="en-us_topic_0283137062_en-us_topic_0237122069_section12765201893310"></a>

Only the table owner or a system administrator can perform this operation.

## Syntax<a name="en-us_topic_0283137062_en-us_topic_0237122069_section16798192723415"></a>

```
ALTER [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name RENAME TO new_policy_name;

ALTER [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
    [ TO { role_name | PUBLIC } [, ...] ]
    [ USING ( using_expression ) ];
```

## Parameter Description<a name="en-us_topic_0283137062_en-us_topic_0237122069_section11851526346"></a>

-   policy\_name

    Specifies the name of a row-level access control policy.

-   table\_name

    Specifies the name of a table to which a row-level access control policy is applied.

-   new\_policy\_name

    Specifies the new name of a row-level access control policy.

-   role\_name

    Specifies names of users affected by a row-level access control policy. PUBLIC indicates that the row-level access control policy will affect all users.

-   using\_expression

    Specifies an expression defined for a row-level access control policy. The return value is of the boolean type.


## Examples<a name="en-us_topic_0283137062_en-us_topic_0237122069_section17979101023515"></a>

```
-- Create the data table all_data.
openGauss=# CREATE TABLE all_data(id int, role varchar(100), data varchar(100));

--Create a row-level access control policy to specify that the current user can view only their own data.
openGauss=# CREATE ROW LEVEL SECURITY POLICY all_data_rls ON all_data USING(role = CURRENT_USER);
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_rls"
      USING (((role)::name = "current_user"()))
Has OIDs: no
Location Nodes: ALL DATANODES
Options: orientation=row, compression=no

-- Change the name of the all_data_rls policy.
openGauss=# ALTER ROW LEVEL SECURITY POLICY all_data_rls ON all_data RENAME TO all_data_new_rls;

-- Change the users affected by the row-level access control policy.
openGauss=# ALTER ROW LEVEL SECURITY POLICY all_data_new_rls ON all_data TO alice, bob;
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_new_rls"
      TO alice,bob
      USING (((role)::name = "current_user"()))
Has OIDs: no
Location Nodes: ALL DATANODES
Options: orientation=row, compression=no, enable_rowsecurity=true

-- Modify the expression defined for the access control policy.
openGauss=# ALTER ROW LEVEL SECURITY POLICY all_data_new_rls ON all_data USING (id > 100 AND role = current_user);
openGauss=# \d+ all_data
                               Table "public.all_data"
 Column |          Type          | Modifiers | Storage  | Stats target | Description
--------+------------------------+-----------+----------+--------------+-------------
 id     | integer                |           | plain    |              |
 role   | character varying(100) |           | extended |              |
 data   | character varying(100) |           | extended |              |
Row Level Security Policies:
    POLICY "all_data_new_rls"
      TO alice,bob
      USING (((id > 100) AND ((role)::name = "current_user"())))
Has OIDs: no
Location Nodes: ALL DATANODES
Options: orientation=row, compression=no, enable_rowsecurity=true
```

## Helpful Links<a name="en-us_topic_0283137062_en-us_topic_0237122069_section1426016489355"></a>

[CREATE ROW LEVEL SECURITY POLICY](create-row-level-security-policy.md)  and  [DROP ROW LEVEL SECURITY POLICY](drop-row-level-security-policy.md)

