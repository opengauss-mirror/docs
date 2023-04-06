# RENAME USER<a name="ZH-CN_TOPIC_0289900931"></a>

## Function <a name="en-us_topic_0283136462_en-us_topic_0237122152_en-us_topic_0059778107_s74e2e8764aa64af1b093f8f68069bce6"></a>

Change the user name in the database.

## Precautions <a name="en-us_topic_0283136462_en-us_topic_0237122152_en-us_topic_0059778107_sdcf8f26a27a64e52b7099ca3ce0256b6"></a>

-   RENAME USER changes the user name. Only the user name of the current table can be changed.
-   If multiple users are modified and one of the user names does not exist or fails to be executed due to other reasons, the entire statement fails and all user names remain unchanged.
-   It is equivalent to ALTER USER... RENAME TO....

## Syntax <a name="en-us_topic_0283136462_en-us_topic_0237122152_en-us_topic_0059778107_s6fa866d73d5c4158836c9fdd0ad5b3ac"></a>

```
RENAME USER 
    old_user1 TO new_user1,
    old_user2 TO new_user2,
    ...

```

## Parameter Description <a name="en-us_topic_0283136462_en-us_topic_0237122152_en-us_topic_0059778107_sa6ea557919e84c0db8ed5cbb227fa983"></a>

-   **old_user** 
    Old user name, which must exist.
-    **new_user** 
    New user name

## Examples <a name="en-us_topic_0283136462_en-us_topic_0237122152_en-us_topic_0059778107_s1af12a7c6e4e456f9fc72da9c90358ff"></a>

``` 
rename user 
    user1 to user4, 
    user2 to user5,
    user3 to user6;
```

## Helpful Links <a name="en-us_topic_0283136462_en-us_topic_0237122152_en-us_topic_0059778107_s08580f38742d47efa6a955c9385d6ae2"> </a>

[ALTER USER](https://docs.opengauss.org/zh/docs/latest/docs/BriefTutorial/%E9%99%84%E5%BD%95-SQL%E8%AF%AD%E6%B3%95.html)
