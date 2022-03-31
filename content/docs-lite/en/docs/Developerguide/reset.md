# RESET<a name="EN-US_TOPIC_0289900889"></a>

## Function<a name="en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_sa3f93000a69d4ca8b8633a05032af243"></a>

**RESET**  restores run-time parameters to their default values. The default values are parameter default values complied in the  **postgresql.conf**  configuration file.

**RESET**  is an alternative spelling for:

SET configuration\_parameter TO DEFAULT

## Precautions<a name="en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_se19c96dc4d7341868f398f878ba97059"></a>

**RESET**  and  **SET**  have the same transaction behavior. Their impact will be rolled back.

## Syntax<a name="en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_s3afbc03dbde14335b3bd49e0d094df41"></a>

```
RESET {configuration_parameter | CURRENT_SCHEMA | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL };
```

## Parameter Description<a name="en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_s46998dbd2cc84394b47aad2adc8ea141"></a>

-   **configuration\_parameter**

    Specifies the name of a settable run-time parameter.

    Value range: run-time parameters. You can view them by running the  **SHOW ALL**  statement.

-   **CURRENT\_SCHEMA**

    Specifies the current schema.

-   **TIME ZONE**

    Specifies the time zone.

-   **TRANSACTION ISOLATION LEVEL**

    Specifies the transaction isolation level.

-   **SESSION AUTHORIZATION**

    Specifies the session authorization.

-   **ALL**

    Resets all settable run-time parameters to default values.


## Examples<a name="en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_sa81e1feab8d2413fb3c8fb7b7c013fcb"></a>

```
-- Reset timezone to the default value.
openGauss=# RESET timezone;

-- Set all parameters to their default values.
openGauss=# RESET ALL;
```

## Helpful Links<a name="en-us_topic_0283137385_en-us_topic_0237122178_en-us_topic_0059779097_s97f0691750e2467d97f3e904047703d7"></a>

[SET](set.md)  and  [SHOW](show.md)

