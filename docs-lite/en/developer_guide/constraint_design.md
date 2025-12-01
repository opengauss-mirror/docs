# Constraint Design<a name="EN-US_TOPIC_0000001102508296"></a>

## DEFAULT and NULL Constraints<a name="section555838816718"></a>

-   \[Proposal\] If all the column values can be obtained from services, you are not advised to use the  **DEFAULT**  constraint. Otherwise, unexpected results will be generated during data loading.
-   \[Proposal\] Add  **NOT NULL**  constraints to columns that never have NULL values. The optimizer automatically optimizes the columns in certain scenarios.
-   \[Proposal\] Explicitly name all constraints excluding  **NOT NULL**  and  **DEFAULT**.

## Partial Cluster Keys<a name="section2578598416718"></a>

A partial cluster key \(PCK\) is a local clustering technology used for column-store tables. After creating a PCK, you can quickly filter and scan fact tables using min or max sparse indexes in openGauss. Comply with the following rules to create a PCK:

-   \[Notice\] Only one PCK can be created in a table. A PCK can contain multiple columns, preferably no more than two columns.
-   \[Proposal\] Create a PCK on simple expression filter conditions in a query. Such filter conditions are usually in the form of  **col op const**, where  **col**  specifies a column name,  **op**  specifies an operator \(such as =, \>, \>=, <=, and <\), and  **const**  specifies a constant.
-   \[Proposal\] If the preceding conditions are met, create a PCK on the column having the most distinct values.

## Unique Constraints<a name="section958094516718"></a>

-   \[Notice\] Both row-store and column-store tables support unique constraints.
-   \[Proposal\] The constraint name should indicate that it is a unique constraint, for example,  **UNI**_Included columns_.

## Primary Key Constraints<a name="section3696271616719"></a>

-   \[Notice\] Both row-store and column-store tables support primary key constraints.
-   \[Proposal\] The constraint name should indicate that it is a primary key constraint, for example,  **PK**_Included columns_.

## Check Constraints<a name="section45602286161148"></a>

-   \[Notice\] Check constraints can be used in row-store tables but not in column-store tables.
-   \[Proposal\] The constraint name should indicate that it is a check constraint, for example,  **CK**_Included columns_.

