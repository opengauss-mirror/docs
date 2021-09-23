# connection.commit\(\)<a name="EN-US_TOPIC_0000001127067907"></a>

## Function<a name="section5708152714306"></a>

This method commits the currently pending transaction to the database.

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>By default, Psycopg opens a transaction before executing the first command. If  **commit\(\)**  is not called, the effect of any data operation will be lost.

## Prototype<a name="section441681310810"></a>

```
connection.commit()
```

## Parameter<a name="en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

None

## Return Value<a name="section899452817814"></a>

None

## Examples<a name="section4160944682"></a>

For details, see  [Example: Common Operations](example-common-operations.md).

