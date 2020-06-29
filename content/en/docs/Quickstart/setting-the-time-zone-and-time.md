# Setting the Time Zone and Time<a name="EN-US_TOPIC_0251900892"></a>

Set the same time zone for all database nodes by copying the  **/etc/localtime**  time zone file to the  **/usr/share/zoneinfo/**  directory.

```
cp /usr/share/zoneinfo/$Locale/$Time zone /etc/localtime
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>_$Locale/$Time zone_  indicates the locale and time zone to be set, for example,  **Asia/Shanghai**.  

Run the  **date -s**  command to set the time of each host to the same time. For example:

```
date -s Mon May 11 16:42:11 CST 2020
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You can run the  **date**  command to query the time zone of the host.  

