# DROP RESOURCE LABEL<a name="EN-US_TOPIC_0306525307"></a>

## Function<a name="en-us_topic_0059777864_s9274542cc63647ee9a7ed300d5e21524"></a>

**DROP RESOURCE LABEL**  deletes a resource label.

## Precautions<a name="en-us_topic_0059777864_scf0935dc3ada4baa9a77f7734edb20bb"></a>

Only users with the  **poladmin**  or  **sysadmin**  permission, or the initial user can perform this operation.

## Syntax<a name="en-us_topic_0059777864_sd069c15075874e97a7d0b18af750ad9d"></a>

```
DROP RESOURCE LABEL [IF EXISTS] policy_name[, ...]*;
```

## Parameter Description<a name="en-us_topic_0059777864_s1953ecf1c57a4c40b14f51b63062737c"></a>

**label\_name**

Specifies the resource label name.

Value range: a string. It must comply with the naming convention.

## Examples<a name="en-us_topic_0059777864_s0f84a315f2804403a4545fd742d2e09d"></a>

```
-- Delete a resource label.
openGauss=# DROP RESOURCE LABEL IF EXISTS res_label1;

-- Delete a group resource label.
openGauss=# DROP RESOURCE LABEL IF EXISTS res_label1, res_label2, res_label3;
```

## Helpful Links<a name="en-us_topic_0059778399_s41faee269a414537919479fb56fc5a4d"></a>

[ALTER RESOURCE LABEL](alter-resource-label.md)  and  [CREATE RESOURCE LABEL](create-resource-label.md)

