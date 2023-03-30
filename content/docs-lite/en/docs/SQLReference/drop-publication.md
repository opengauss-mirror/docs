# DROP PUBLICATION<a name="EN-US_TOPIC_0000001240652289"></a>

## **Function Description**<a name="section4742194571517"></a>

**DROP PUBLICATION** deletes an existing publication from a database.

## **Precautions**<a name="section1769118514169"></a>

A publication can be deleted only by its owner or the system administrator.

## **Syntax**<a name="section464555611517"></a>

```
DROP PUBLICATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## **Parameter Description**<a name="section134251850191516"></a>

-   **IF EXISTS**

    Does not throw an error if a publication does not exist, but instead reports a notice.

-   **name**

    Specifies the name of an existing publication.

-   **CASCADE|RESTRICT**

    Currently, these keywords do not work because there is no dependency on publications.


## Example<a name="section102825519166"></a>

For details, see [Example](create-publication.md#section109371845154215).

## Helpful Links<a name="section915018161711"></a>

[ALTER PUBLICATION](alter-publication.md), [CREATE PUBLICATION](create-publication.md)
