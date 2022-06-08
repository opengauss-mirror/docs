# DROP SEQUENCE<a name="EN-US_TOPIC_0289900269"></a>

## Function<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section892464917343"></a>

**DROP SEQUENCE**  deletes a sequence from the current database.

## Precautions<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section3924194973416"></a>

-   Only the sequence owner or a user granted with the DROP permission can run the  **DROP SEQUENCE**  command. The system administrator has this permission by default.
-   If the LARGE identifier is used when a sequence is created, the LARGE identifier must be used when the sequence is dropped.

## Syntax<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section292414499345"></a>

```
DROP [ LARGE ] SEQUENCE [ IF EXISTS ] {[schema.]sequence_name} [ , ... ] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section1692544913344"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified sequence does not exist.

-   **name**

    Specifies the name of the sequence to be deleted.

-   **CASCADE**

    Automatically deletes the objects that depend on the sequence.

-   **RESTRICT**

    Refuses to delete the sequence if any objects depend on it. This is the default action.


## Examples<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section13928174913345"></a>

```
-- Create an ascending sequence named serial, starting from 101.
openGauss=# CREATE SEQUENCE serial START 101;

-- Delete a sequence.
openGauss=# DROP SEQUENCE serial;
```

## Helpful Links<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section365162034413"></a>

[ALTER SEQUENCE](alter-sequence.md)  and  [DROP SEQUENCE](drop-sequence.md)

