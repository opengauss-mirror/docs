# General Guidelines<a name="EN-US_TOPIC_0257867365"></a>

The following are general guidelines for editing the mot.conf file.

-   Each setting appears with its default value as follows –  \# name = value  IS THIS CORRECT? GGG 
-   Blank/white space is acceptable.
-   Comments are indicated by placing a number sign \(\#\) anywhere on a line.
-   The default values of each setting appear as a comment throughout this file.
-   Marking a default value as a comment \(by placing a number sign \(\#\) does NOT revert that setting to its default value. ABOVE IT SAYS THAT THE FILE COMES PRECONFIGURED WITH DEFAULT VALUES. HOWEVER, THIS BULLET SHOULD CLARIFY WHETHER THE USER MUST HANDLE EACH SETTING BY REMOVING THE NUMBER SIGN. PROBABLY THEY DON’T HAVE TO, BUT IT MUST BE SAID. GGG
-   The server must be reloaded WHEN? GGG WHY? GGG. ISN’T THIS REPEATING THE ABOVE, CAN I DELETE IT? GGG

Memory Units are represented as follows –

-   KB – Kilobytes
-   MB – Megabytes
-   GB – Gigabytes
-   TB – Terabytes
-   Some memory units are represented as a percentage of the  **max\_process\_memory**  setting that is configured in  **postgresql.conf**. For example –  **20%**. 

Time units are represented as follows –

-   us – Microseconds \(or micros\)
-   ms – milliseconds \(or millis\)
-   s – Seconds \(or secs\)
-   min – Minutes \(or mins\)
-   h – Hours 
-   d – Days

