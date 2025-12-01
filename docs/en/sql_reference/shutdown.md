# SHUTDOWN<a name="EN-US_TOPIC_0289900099"></a>

## Function<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s812131d8918641df9772c998b753f87e"></a>

**SHUTDOWN**  shuts down the currently connected database node.

## Precautions<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_se3c9c9141f1b44ff9807883ea294625d"></a>

Only the administrator can run this command.

## Syntax<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s8d26aecdc3a24323a64f4df9f4df53f3"></a>

```
SHUTDOWN 
  { 
          | 
    fast  | 
    immediate
  };
```

## Parameter Description<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s96f32bd65e9e46f4bf15eb3c1663af3a"></a>

-   **""**

    If the shutdown mode is not specified, the default mode  **fast**  is used.


-   **fast**

    Rolls back all active transactions, forcibly disconnects the client, and shuts down the database node without waiting for the client to disconnect.

-   **immediate**

    Shuts down the server forcibly. Fault recovery will occur on the next startup.


## Examples<a name="en-us_topic_0283136791_en-us_topic_0237122191_en-us_topic_0059779163_s9926ef8e79984fac9b05d0b6bd0e8fd5"></a>

```
-- Shut down the current database node.
openGauss=# SHUTDOWN;

-- Shut down the current database node in fast mode.
openGauss=# SHUTDOWN FAST;
```

