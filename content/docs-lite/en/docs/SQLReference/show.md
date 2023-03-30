# SHOW<a name="EN-US_TOPIC_0289900662"></a>

## Function<a name="en-us_topic_0283136640_en-us_topic_0237122191_en-us_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

**SHOW**  shows the current value of a run-time parameter.

## Precautions<a name="en-us_topic_0283136640_en-us_topic_0237122191_en-us_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

None

## Syntax<a name="en-us_topic_0283136640_en-us_topic_0237122191_en-us_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
SHOW 
  { 
    [VARIABLES LIKE] configuration_parameter | 
    CURRENT_SCHEMA | 
    TIME ZONE | 
    TRANSACTION ISOLATION LEVEL | 
    SESSION AUTHORIZATION | 
    ALL 
  };
```

## Parameter Description<a name="en-us_topic_0283136640_en-us_topic_0237122191_en-us_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

See  [Parameter Description](reset.md#en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_s46998dbd2cc84394b47aad2adc8ea141)  in  **RESET**.

## Examples<a name="en-us_topic_0283136640_en-us_topic_0237122191_en-us_topic_0059779163_s9926ef8e79984fac9b05d0b6bd0e8fd5"></a>

```
-- Show the value of timezone.
openGauss=# SHOW timezone;

-- Show all parameters.
openGauss=# SHOW ALL;

-- Show all parameters whose names contain var.
openGauss=# SHOW VARIABLES LIKE var;
```

## Helpful Links<a name="en-us_topic_0283136640_en-us_topic_0237122191_en-us_topic_0059779163_s5f7ae1b9fc8c4edfa04138996c61eaa4"></a>

[SET](set.md)  and  [RESET](reset.md)

