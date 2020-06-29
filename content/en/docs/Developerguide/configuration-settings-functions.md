# Configuration Settings Functions<a name="EN-US_TOPIC_0242370453"></a>

Configuration setting functions are used for querying and modifying configuration parameters during running.

-   current\_setting\(setting\_name\)

    Description: Specifies the current setting.

    Return type: text

    Note:  **current\_setting**  obtains the current setting of  **setting\_name**  by query. It is equivalent to the  **SHOW**  statement. For example:

    ```
    postgres=# SELECT current_setting('datestyle');
    
     current_setting
    -----------------
     ISO, MDY
    (1 row)
    ```

-   set\_config\(setting\_name, new\_value, is\_local\)

    Description: Sets the parameter and returns a new value.

    Return type: text

    Note:  **set\_config**  sets the parameter  **setting\_name**  to  **new\_value**. If  **is\_local**  is  **true**, the new value will only apply to the current transaction. If you want the new value to apply for the current session, use  **false**  instead. The function corresponds to the  **SET**  statement. For example:

    ```
    postgres=# SELECT set_config('log_statement_stats', 'off', false);
    
     set_config
    ------------
     off
    (1 row)
    ```


