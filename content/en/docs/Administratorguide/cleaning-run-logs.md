# Cleaning Run Logs<a name="EN-US_TOPIC_0242215066"></a>

A large number of run logs will be generated during database running and occupy huge disk space. You are advised to delete expired run logs and retain logs generated within one month.

## Procedure<a name="en-us_topic_0237088807_en-us_topic_0059779285_s2007a444c2844ebd923f0e2183ecba58"></a>

1.  Log in as the OS user  **omm**  to any host in the GaussDB Kernel cluster.
2.  Clean logs.
    1.  Back up logs generated over one month ago to other disks.
    2.  Access the directory where logs are stored.

        ```
        cd $GAUSSLOG
        ```

    3.  Access the corresponding sub-directory and run the following command to delete logs generated one month ago:

        ```
        rm log name
        ```

        The naming convention of a log file is  **postgresql-**_year_-_month_-_day_**\_HHMMSS**.



