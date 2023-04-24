# Setting User Permissions<a name="EN-US_TOPIC_0289900074"></a>

-   To grant permissions for an object to a user, use  **[GRANT](../SQLReference/grant.md)**.

    When permissions for a table or view in a schema are granted to a user or role, the  **USAGE**  permission of the schema must be granted together. Otherwise, the user or role can only see these objects but cannot access them.

    In the following example, permissions for the schema  **tpcds**  are first granted to user  **joe**, and then the  **SELECT**  permission for the  **tpcds.web\_returns**  table is also granted.

    ```
    openGauss=# GRANT USAGE ON SCHEMA tpcds TO joe;
    openGauss=# GRANT SELECT ON TABLE tpcds.web_returns to joe;
    ```

-   Grant a role to a user to allow the user to inherit the object permissions of the role.
    1.  Create a role.

        Create a role  **lily**  and grant the system permission  **CREATEDB**  to the role.

        ```
        openGauss=# CREATE ROLE lily WITH CREATEDB PASSWORD "xxxxxxxxx";
        ```

    2.  Grant object permissions to the role by using  **[GRANT](../SQLReference/grant.md)**.

        For example, first grant permissions for the schema  **tpcds**  to the role  **lily**, and then grant the  **SELECT**  permission of the  **tpcds.web\_returns**  table to  **lily**.

        ```
        openGauss=# GRANT USAGE ON SCHEMA tpcds TO lily;
        openGauss=# GRANT SELECT ON TABLE tpcds.web_returns to lily;
        ```

    3.  Grant the role permissions to a user.

        ```
        openGauss=# GRANT lily to joe;
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >When the permissions of a role are granted to a user, the attributes of the role are not transferred together.


-   To revoke user permissions, use  **[REVOKE](../SQLReference/revoke.md)**.

