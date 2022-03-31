# DROP GLOBAL CONFIGURATION<a name="EN-US_TOPIC_0000001207108002"></a>

## Function<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

**DROP GLOBAL CONFIGURATION**  deletes parameter values from the  **gs\_global\_config**  system catalog.

## Precautions<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

Only the initial database user can run this command.

The  **weak\_password**  keyword cannot be deleted.

## Syntax<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
DROP GLOBAL CONFIGURATION Parameter name,Parameter name...;
```

## Parameter Description<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

The parameter is a parameter that already exists in the  **gs\_global\_config**  system catalog. If you delete a parameter that does not exist, an error will be reported.

