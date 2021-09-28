# DO<a name="EN-US_TOPIC_0289900214"></a>

## Function<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_s9b63cdf8ade346bb85b02b8dbdf97170"></a>

**DO**  executes an anonymous code block.

The code block is treated as though it were the body of a function with no parameters, returning  **void**. It is parsed and executed a single time.

## Precautions<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_sdad44f940b3e443387bdb882b0ddab8c"></a>

-   The procedural language to be used must already have been installed into the current database by means of  **CREATE LANGUAGE**.  **plpgsql**  is installed by default, but other languages are not.
-   The user must have the  **USAGE**  permission on the procedural language, or must be a system administrator if the language is untrusted.

## Syntax<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_sd2aa9ae78e2b471aa1517fa438ac5e9e"></a>

```
DO [ LANGUAGE lang_name ] code;
```

## Parameter Description<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_sfb2bd9ccfd56476e820c028e3e53ccaf"></a>

-   **lang\_name**

    Specifies the name of the procedural language the code is written in. If omitted, the default is  **plpgsql**.

-   **code**

    Specifies the procedural language code to be executed. This must be specified as a string literal.


## Examples<a name="en-us_topic_0283137438_en-us_topic_0237122132_en-us_topic_0059778658_s414adb8f7846482184cbbd960d4adfcf"></a>

```
-- Create the webuser user.
openGauss=# CREATE USER webuser PASSWORD 'xxxxxxxxx';

-- Grant all permissions on all views in the tpcds schema to the webuser user.
openGauss=# DO $$DECLARE r record;
BEGIN
    FOR r IN SELECT c.relname table_name,n.nspname table_schema FROM pg_class c,pg_namespace n 
             WHERE c.relnamespace = n.oid AND n.nspname = 'tpcds' AND relkind IN ('r','v')
    LOOP
        EXECUTE 'GRANT ALL ON ' || quote_ident(r.table_schema) || '.' || quote_ident(r.table_name) || ' TO webuser';
    END LOOP;
END$$;


-- Delete the webuser user.
openGauss=# DROP USER webuser CASCADE;
```

