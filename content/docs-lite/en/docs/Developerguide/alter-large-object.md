# ALTER LARGE OBJECT<a name="EN-US_TOPIC_0289900449"></a>

## Function<a name="en-us_topic_0283137719_en-us_topic_0237122064_en-us_topic_0059778505_sbaf83721f63f42a9ba63625707e18b5c"></a>

**ALTER LARGE OBJECT**  changes the owner of a large object.

## Precautions<a name="en-us_topic_0283137719_en-us_topic_0237122064_en-us_topic_0059778505_saab423042807475180e48512143509e9"></a>

Only a system administrator or the owner of the to-be-modified large object can run  **ALTER LARGE OBJECT**.

## Syntax<a name="en-us_topic_0283137719_en-us_topic_0237122064_en-us_topic_0059778505_sc544d982cf6142e9bdb66283e857ce80"></a>

```
ALTER LARGE OBJECT large_object_oid 
    OWNER TO new_owner;
```

## Parameter Description<a name="en-us_topic_0283137719_en-us_topic_0237122064_en-us_topic_0059778505_s02711c36b6fc4b46a8757c4e3495899b"></a>

-   **large\_object\_oid**

    Specifies the OID of the large object to be modified.

    Value range: an existing large object name

-   **OWNER TO new\_owner**

    Specifies the new owner of an object.

    Value range: an existing username or role name


## Examples<a name="en-us_topic_0283137719_en-us_topic_0237122064_en-us_topic_0059778505_s6e23110aff5940ea87da3c0f9569f987"></a>

None

