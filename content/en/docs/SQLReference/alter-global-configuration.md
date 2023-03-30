# ALTER GLOBAL CONFIGURATION<a name="EN-US_TOPIC_0000001251302415"></a>

## Function<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

**ALTER GLOBAL CONFIGURATION**  adds and modifies the  **gs\_global\_config**  system catalog and adds the value of  **key-value**.

## Precautions<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

-   Only the initial database user can run this command.
-   The keyword cannot be changed to  **weak\_password**.

## Syntax<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
ALTER GLOBAL CONFIGURATION with(paraname=value,paraname=value...);
```

## Parameter Description<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

+ paraname

  Parameter name, which is of the text type.

+ value

  Parameter value, which is of the text type.
