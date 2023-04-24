# DO<a name="EN-US_TOPIC_0289900214"></a>

## Function<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_s9b63cdf8ade346bb85b02b8dbdf97170"></a>

**DO** executes an anonymous code block.

The code block is treated as though it were the body of a function with no parameters, returning **void**. It is parsed and executed a single time.

Alternatively, it executes an expression but does not return any result.

## Precautions<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_sdad44f940b3e443387bdb882b0ddab8c"></a>

Compared with the original openGauss, Dolphin modifies the DO syntax as follows:

The DO expr\_list syntax is added based on the original syntax to execute expressions without returning results.

## Syntax<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_sd2aa9ae78e2b471aa1517fa438ac5e9e"></a>

```
DO [ LANGUAGE lang_name ] code;

Or

DO expr[,expr...];
```

## Parameter Description<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_sfb2bd9ccfd56476e820c028e3e53ccaf"></a>

- **lang\_name**

  Specifies the name of the procedural language the code is written in. If omitted, the default is **plpgsql**.

- **code**

  Specifies the procedural language code to be executed. This must be specified as a string literal.

- **expr**

  Specifies expressions. Multiple expressions are separated by commas (,). For details, see [Expressions](../SQLReference/expressions.md).

  


## Examples<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_s414adb8f7846482184cbbd960d4adfcf"></a>

```
--Execute an expression without returning results.
openGauss=# DO 1;

openGauss=# DO pg_sleep(1);

--Execute multiple expressions without returning results.

openGauss=# DO 1+2;
```
