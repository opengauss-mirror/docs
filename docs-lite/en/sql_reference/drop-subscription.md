# DROP SUBSCRIPTION<a name="ZH-CN_TOPIC_0000001240332295"></a>

## **Function Description**<a name="section131281394204"></a>

**DROP SUBSCRIPTION** deletes a subscription from a database instance.

## **Precautions**<a name="section7392192602015"></a>

-   A subscription can be deleted only by the system administrator.
-   If the subscription to be deleted is associated with a replication slot, **DROP SUBSCRIPTION** cannot be executed inside a transaction block.

## **Syntax**<a name="section1367518145205"></a>

```
DROP SUBSCRIPTION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## **Parameter Description**<a name="section9378519122011"></a>

-   **name**

    Specifies the name of the subscription to be deleted.

-   **CASCADE|RESTRICT**

    Currently, these keywords do not work because there is no dependency on subscriptions.


## Example<a name="section11649214223"></a>

For details, see [Examples](create-subscription.md#section1399192015610).

## Helpful Links<a name="section36721282226"></a>

[ALTER SUBSCRIPTION](alter-subscription.md), [CREATE SUBSCRIPTION](create-subscription.md)
