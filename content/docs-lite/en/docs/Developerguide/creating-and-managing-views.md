# Creating and Managing Views<a name="EN-US_TOPIC_0289900594"></a>

## Background<a name="en-us_topic_0283136608_en-us_topic_0237120309_en-us_topic_0059777564_sd10ac23ddd774a89947f3f6afdc707d9"></a>

If some columns in one or more tables in a database are frequently searched for, an administrator can define a view for these columns, and then users can directly access these columns in the view without entering search criteria.

A view is different from a base table. It is only a virtual object rather than a physical one. Only view definition is stored in the database and view data is not. The data is stored in a base table. If data in the base table changes, the data in the view changes accordingly. In this sense, a view is like a window through which users can know their interested data and data changes in the database. A view is triggered every time it is referenced.

## Managing Views<a name="en-us_topic_0283136608_en-us_topic_0237120309_en-us_topic_0059777564_s148b7bb2f37e4c4e91b2f8fd7783f258"></a>

-   Create a view.

    Run the following command to create  **MyView**:

    ```
    openGauss=# CREATE OR REPLACE VIEW MyView AS SELECT * FROM tpcds.web_returns WHERE trunc(wr_refunded_cash) > 10000;
    CREATE VIEW
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >If OR REPLACE exists in CREATE VIEW, it indicates that if the view exists, the new view will replace the existing view. However, the new query cannot change the column definition of the original query, including the sequence, column name, data type, and type precision. You can only add other columns to the end of the list.

-   Query a view.

    Run the following command to query  **MyView**:

    ```
    openGauss=# SELECT * FROM MyView;
    ```

-   View details about a specified view.

    Run the following command to view details about  **MyView**:

    ```
    openGauss=# \d+ MyView
                          View "PG_CATALOG.MyView"
      Column  |         Type          | Modifiers | Storage  | Description
    ----------+-----------------------+-----------+----------+-------------
     USERNAME | CHARACTER VARYING(64) |           | extended |
    View definition:
     SELECT PG_AUTHID.ROLNAME::CHARACTER VARYING(64) AS USERNAME
       FROM PG_AUTHID;
    ```

-   Delete a view.

    Run the following command to delete  **MyView**:

    ```
    openGauss=# DROP VIEW MyView;
    DROP VIEW
    ```


