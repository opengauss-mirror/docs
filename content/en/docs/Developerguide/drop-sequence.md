# DROP SEQUENCE<a name="EN-US_TOPIC_0289900269"></a>

## Function<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section892464917343"></a>

**DROP SEQUENCE**  deletes a sequence from the current database.

## Precautions<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section3924194973416"></a>

Only the sequence owner or a user granted with the DROP permission can run the  **DROP SEQUENCE**  command. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section292414499345"></a>

```
DROP SEQUENCE [ IF EXISTS ] {[schema.]sequence_name} [ , ... ] [ CASCADE | RESTRICT ];
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
postgres=# CREATE SEQUENCE serial START 101;

-- Delete a sequence.
postgres=# DROP SEQUENCE serial;
```

## Helpful Links<a name="en-us_topic_0283137072_en-us_topic_0237122149_en-us_topic_0059778402_section365162034413"></a>

[ALTER SEQUENCE](en-us_topic_0283137303.md)  and  [DROP SEQUENCE](en-us_topic_0283137072.md)

