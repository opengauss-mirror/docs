# Setting the Validity Period of an Account<a name="EN-US_TOPIC_0246507968"></a>

## Precautions<a name="en-us_topic_0237121109_en-us_topic_0151096201_en-us_topic_0085032332_en-us_topic_0059779299_s4ed40b90fef642e1960afb00e661e34d"></a>

When creating a user, you need to specify the validity period of the user, including the start time and end time.

To enable a user not within the validity period to use its account, set a new validity period.

## Procedure<a name="en-us_topic_0237121109_en-us_topic_0151096201_en-us_topic_0085032332_en-us_topic_0059779299_sfc98603fadc44ac497654d979bc32291"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss 1.0 build 290d125f) compiled at 2020-05-08 02:59:43 commit 2143 last mr 131
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    postgres=# 
    ```

3.  Run the following command to create a user and specify the start time and end time:

    ```
    CREATE USER joe WITH PASSWORD 'Bigdata@123' VALID BEGIN '2015-10-10 08:00:00' VALID UNTIL '2016-10-10 08:00:00';
    ```

    The user is created if the following information is displayed:

    ```
    CREATE ROLE
    ```

4.  If the user is not within the specified validity period, run the following command to set the start time and end time of a new validity period.

    ```
    ALTER USER joe WITH VALID BEGIN '2016-11-10 08:00:00' VALID UNTIL '2017-11-10 08:00:00';
    ```

    The start time and end time of the new validity period is set successfully if the following information is displayed:

    ```
    ALTER ROLE
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If  **VALID BEGIN**  is not specified in the  **CREATE ROLE**  or  **ALTER ROLE**  statement, the start time of the validity period is not limited. If  **VALID UNTIL**  is not specified, the end time of the validity period is not limited. If both of the parameters are not specified, the user is always valid.  

