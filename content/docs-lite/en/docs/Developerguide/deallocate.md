# DEALLOCATE<a name="EN-US_TOPIC_0289900543"></a>

## Function<a name="en-us_topic_0283136579_en-us_topic_0237122129_en-us_topic_0059778612_sf7de006cb8fc48b2bcd0e6d3c6ea1f2f"></a>

**DEALLOCATE**  deallocates a previously prepared statement. If you do not explicitly deallocate a prepared statement, it is deallocated when the session ends.

The  **PREPARE**  keyword is always ignored.

## Precautions<a name="en-us_topic_0283136579_en-us_topic_0237122129_en-us_topic_0059778612_sf6df3969ac4e4534a3d0bbf89b9a09d8"></a>

None

## Syntax<a name="en-us_topic_0283136579_en-us_topic_0237122129_en-us_topic_0059778612_s7404e1c104a0402e9518adbdfb75cf8c"></a>

```
DEALLOCATE [ PREPARE ] { name | ALL };
```

## Parameter Description<a name="en-us_topic_0283136579_en-us_topic_0237122129_en-us_topic_0059778612_sb42a2e3c4ef945d3b53af4a15f876698"></a>

-   **name**

    Specifies the name of the prepared statement to be deallocated.

-   **ALL**

    Deallocates all prepared statements.


## Examples<a name="en-us_topic_0283136579_en-us_topic_0237122129_en-us_topic_0059778612_s0cd8d4c203d642af85b3ae2ca4600bb3"></a>

None

