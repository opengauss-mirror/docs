# General Guidelines<a name="EN-US_TOPIC_0260488221"></a>

The following are general guidelines for editing the mot.conf file.

-   Each setting appears with its default value as follows

    ```
    # name = value
    ```


-   Blank/white space is acceptable.
-   Comments are indicated by placing a number sign \(\#\) anywhere on a line.
-   The default values of each setting appear as a comment throughout this file.
-   In case a parameter is uncommented and a new value is placed, the new setting is defined.
-   Changes to the mot.conf file are applied only at a start or reload of the database server.

Memory Units are represented as follows

-   KB – Kilobytes
-   MB – Megabytes
-   GB – Gigabytes
-   TB – Terabytes
-   Some memory units are represented as a percentage of the  **max\_process\_memory**  setting that is configured in  **postgresql.conf**. For example –  **20%**.

Time units are represented as follows

-   us – Microseconds \(or micros\)
-   ms – milliseconds \(or millis\)
-   s – Seconds \(or secs\)
-   min – Minutes \(or mins\)
-   h – Hours
-   d – Days

