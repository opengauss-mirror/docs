# DROP TYPE<a name="EN-US_TOPIC_0289900925"></a>

## Function<a name="en-us_topic_0283137107_en-us_topic_0237122157_en-us_topic_0059778403_sd8f7b55734434619b381d7be49aed2df"></a>

**DROP TYPE**  deletes a user-defined data type.

## Precautions<a name="section114668159414"></a>

Only the type owner or a user granted with the DROP permission can run the  **DROP TYPE**  command. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137107_en-us_topic_0237122157_en-us_topic_0059778403_s5d2a1a9a8c0848c5b671e837e381ef36"></a>

```
DROP TYPE [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="en-us_topic_0283137107_en-us_topic_0237122157_en-us_topic_0059778403_sc2135a1c06504d25b767b85bdea5c694"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified type does not exist.

-   **name**

    Specifies the name \(optionally schema-qualified\) of the type to be deleted.

-   **CASCADE**

    Automatically deletes the objects \(such as fields, functions, and operators\) that depend on the type.

    **RESTRICT**

    Refuses to delete the type if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283137107_en-us_topic_0237122157_en-us_topic_0059778403_sd583a49fc83b42fd8e73efee55f98ace"></a>

See  [Examples](create-type.md#en-us_topic_0283136568_en-us_topic_0237122124_en-us_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d)  in  **CREATE TYPE**.

## Helpful Links<a name="en-us_topic_0283137107_en-us_topic_0237122157_en-us_topic_0059778403_s428358f9df2f458a8d50d103683f7ee0"></a>

[CREATE TYPE](create-type.md)  and  [ALTER TYPE](alter-type.md)

