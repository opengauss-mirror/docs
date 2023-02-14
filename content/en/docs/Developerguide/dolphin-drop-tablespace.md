# DROP TABLESPACE

## Function Description<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s73f8a05d2e0248f18e34a613fcde3fb6"></a>

Deletes a tablespace.

## Precautions <a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s8573862b21234deaa562c0502d4cae55"></a>

Compared with the original openGauss, Dolphin modifies the DROP TABLESPACE syntax as follows:

The ENGINE [=] engine_name option is added for syntax compatibility only.

## Syntax <a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s6c3564e4565e4a808f931d50ab12c041"></a>

```
DROP TABLESPACE [ IF EXISTS ] tablespace_name [ENGINE [=] engine_name];
```

## Parameter Description<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_sd3609e09c22149eba3e6e64c989573b6"></a>

-   **IF EXISTS**

    Sends a notice instead of an error if the specified tablespace does not exist.

-   **tablespace\_name**

    Indicates the name of tablespace.

    Value range: an existing tablespace name

-   **engine\_name**

    This parameter is meaningless.

    Value: a combination of any characters


## Examples <a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_sbcb08a6a5edc433b951080b230808c35"></a>

For details, see [CREATE TABLESPACE](dolphin-create-tablespace.md#en-us_topic_0283137328_en-us_topic_0237122120_en-us_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e).

## Helpful Links<a name="en-us_topic_0283137549_en-us_topic_0237122153_en-us_topic_0059779073_s5f1d0e75c90d465fadd639b26f10ab64"></a>

[ALTER TABLESPACE](dolphin-alter-tablespace.md), [CREATE TABLESPACE](dolphin-create-tablespace.md)
