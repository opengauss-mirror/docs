# Overview<a name="EN-US_TOPIC_0000001311256716"></a>

SQL Rewriter is an SQL rewriting tool. It converts query statements into more efficient or standard forms based on preset rules to improve query efficiency.

>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   This function does not apply to statements that contain subqueries.
>-   This function supports only the SELECT and DELETE statements for deleting the entire table.
>-   This function contains 11 rewriting rules. Statements that do not comply with the rewriting rules are not processed.
>-   This function displays original query statements and rewritten statements on the screen. You are not advised to rewrite SQL statements that contain sensitive information.
>-   The rule for converting UNION to UNION ALL avoids deduplication and improves the query performance. The obtained result may be redundant.
>-   If a statement contains ORDER BY + specified column name or GROUP BY + specified column name, the SelfJoin rule is not applicable.
>-   The tool does not ensure equivalent conversion of query statements. The purpose is to improve the efficiency of query statements.
