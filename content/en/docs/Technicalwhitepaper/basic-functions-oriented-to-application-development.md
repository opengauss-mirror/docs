# Basic Functions Oriented to Application Development<a name="EN-US_CONCEPT_0252569319"></a>

-   **[Standard SQL](standard-sql.md)**  

-   **[Standard Development Interfaces](standard-development-interfaces.md)**  

-   **[Transaction Support](transaction-support.md)**  

-   **[Support for Functions and Stored Procedures](support-for-functions-and-stored-procedures.md)**  

-   **[PG Interface Compatibility](pg-interface-compatibility.md)**  

-   **[SQL Hints](sql-hints.md)**  

-   **[Copy Interface for Error Tolerance](copy-interface-for-error-tolerance.md)**  
openGauss provides the encapsulated copy error tables for creating functions and allows users to specify error tolerance options when using the  **Copy From**  statement. In this way, errors related to parsing, data format, and character set during the execution of the  **Copy From**  statement are recorded in the error table instead of being reported and interrupted. Even if a small amount of data in the target file of  **Copy From**  is incorrect, the data can be imported to the database. You can locate and rectify the fault in the error table later.

