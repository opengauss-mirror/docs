# DROP PACKAGE<a name="EN-US_TOPIC_0000001114052560"></a>

## Function<a name="section37715281291"></a>

**DROP PACKAGE**  deletes the existing package or package body.

## Precautions<a name="section11374103816919"></a>

After the package body is deleted, the stored procedures and functions in the package become invalid at the same time.

## Syntax<a name="section1193316471794"></a>

```
DROP PACKAGE [ IF EXISTS ] package_name;
DROP PACKAGE BODY [ IF EXISTS ] package_name;
```

