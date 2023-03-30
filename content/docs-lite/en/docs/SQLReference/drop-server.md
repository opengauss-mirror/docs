# DROP SERVER<a name="EN-US_TOPIC_0289900384"></a>

## Function<a name="en-us_topic_0283136745_section18987145713527"></a>

**DROP SERVER**  drops a data server.

## Precautions<a name="en-us_topic_0283136745_section1195003135320"></a>

Only the server owner or a user granted with the DROP permission can run the  **DROP SERVER**  command. The system administrator has this permission by default.

## Syntax<a name="en-us_topic_0283136745_section51061559145316"></a>

```
DROP SERVER [ IF EXISTS ] server_name [ {CASCADE | RESTRICT} ] ;
```

## Parameter Description<a name="en-us_topic_0283136745_section08321910175316"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified data server does not exist.

-   **server\_name**

    Specifies the name of the data server to be dropped.

-   **CASCADE | RESTRICT**

    -   **CASCADE**: automatically drops the objects that depend on the data server.

    -   **RESTRICT**: refuses to drop the server if any objects depend on it. This is the default action.



>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>In the Lite scenario, openGauss does not support the change of  **obs\_server**  contained in the  **DROP SERVER**  syntax.

## Helpful Links<a name="en-us_topic_0283136745_section620331805317"></a>

[ALTER SERVER](alter-server.md)  and  [CREATE SERVER](create-server.md)

