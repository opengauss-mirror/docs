# GUC Parameter Usage<a name="EN-US_TOPIC_0289900179"></a>

A database provides many operation parameters. Configurations of these parameters affect the behavior of the database system. Before modifying these parameters, learn the impact of these parameters on the database. Otherwise, unexpected results may occur.

## Precautions<a name="en-us_topic_0283137609_en-us_topic_0237124692_en-us_topic_0059779143_s21ff61fb8a134b0b8a75db30979590c6"></a>

-   If the value range of a parameter is a string, the string should comply with the naming conventions of the path and file name in the OS running the target database.
-   If the maximum value of a parameter is  _INT\_MAX_, the maximum parameter value varies by OS.
-   If the maximum value of a parameter is  _DBL\_MAX_, the maximum parameter value varies by OS.

