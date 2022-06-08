# Configuration Settings Functions<a name="EN-US_TOPIC_0289900255"></a>

Configuration setting functions are used for querying and modifying configuration parameters during running.

-   current\_setting\(setting\_name\)

    Description: Specifies the current setting.

    Return type: text

    Note:  **current\_setting**  obtains the current setting of  **setting\_name**  by query. It is equivalent to the  **SHOW**  statement.

    Example:

    ```
    openGauss=# SELECT current_setting('datestyle');
    
     current_setting
    -----------------
     ISO, MDY
    (1 row)
    ```

-   set\_working\_grand\_version\_num\_manually\(tmp\_version\)

    Description: Upgrades new features of the database by switching the authorization version.

    Return type: void

-   shell\_in\(type\)

    Description: Inputs a route for the shell type that has not yet been filled.

    Return type: void

-   shell\_out\(type\)

    Description: Outputs a route for the shell type that has not yet been filled.

    Return type: void

-   set\_config\(setting\_name, new\_value, is\_local\)

    Description: Sets the parameter and returns a new value.

    Return type: text

    Note:  **set\_config**  sets  **setting\_name**  to  **new\_value**. If  **is\_local**  is set to  **true**,  **new\_value**  applies only to the current transaction. If you want  **new\_value**  to apply for the current session, set the value to  **false**  instead. The function corresponds to the  **SET**  statement.

    Example:

    ```
    openGauss=# SELECT set_config('log_statement_stats', 'off', false);
    
     set_config
    ------------
     off
    (1 row)
    ```


