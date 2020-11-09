# DROP SERVER<a name="EN-US_TOPIC_0272283423"></a>

## Function<a name="section18987145713527"></a>

**DROP SERVER**  drops a data server.

## Precautions<a name="section1195003135320"></a>

Only the owner of the server can execute this statement.

## Syntax<a name="section51061559145316"></a>

```
DROP SERVER [ IF EXISTS ] server_name [ {CASCADE | RESTRICT} ] ;
```

## Parameter Description<a name="section08321910175316"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified data server does not exist.

-   **server\_name**

    Specifies the name of the data server to be dropped.

-   **CASCADE | RESTRICT**

    -   **CASCADE**: automatically drops the objects that depend on the data server.

    -   **RESTRICT**: refuses to drop the server if any objects depend on it. This is the default action.



## Helpful Links<a name="section620331805317"></a>

[ALTER SERVER](alter-server.md)  and  [CREATE SERVER](create-server.md)

