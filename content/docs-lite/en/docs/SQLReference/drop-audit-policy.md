# DROP AUDIT POLICY<a name="EN-US_TOPIC_0306525305"></a>

## Function<a name="en-us_topic_0059777864_s9274542cc63647ee9a7ed300d5e21524"></a>

**DROP AUDIT POLICY**  deletes an audit policy.

## Precautions<a name="en-us_topic_0059777864_scf0935dc3ada4baa9a77f7734edb20bb"></a>

Only user  **poladmin**, user  **sysadmin**, or the initial user can perform this operation.

## Syntax<a name="en-us_topic_0059777864_sd069c15075874e97a7d0b18af750ad9d"></a>

```
DROP AUDIT POLICY [IF EXISTS] policy_name;
```

## Parameter Description<a name="en-us_topic_0059777864_s1953ecf1c57a4c40b14f51b63062737c"></a>

policy\_name

Specifies the audit policy name, which must be unique.

Value range: a string. It must comply with the naming convention.

## Examples<a name="en-us_topic_0059777864_s0f84a315f2804403a4545fd742d2e09d"></a>

See  [Examples](create-audit-policy.md#section7854941155112)  in  **CREATE AUDIT POLICY**.

## Helpful Links<a name="section12181292265"></a>

[ALTER AUDIT POLICY](alter-audit-policy.md)  and  [CREATE AUDIT POLICY](create-audit-policy.md)

