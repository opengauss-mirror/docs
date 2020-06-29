# Integration using Foreign Data Wrappers \(FDW\)<a name="EN-US_TOPIC_0257867425"></a>

MOT complies with and leverages openGauss’s standard extensibility mechanism – Foreign Data Wrapper \(FDW\), as shown in the following diagram.

The PostgreSQL Foreign Data Wrapper \(FDW\) feature enables the creation of foreign tables in a MOT database that are proxies for some other data source, such as MySQL, Redis, X3 and so on. When a query is made on a foreign table, the FDW queries the external data source and returns the results, as if they were coming from a table in your database.

openGauss relies on the PostgreSQL Foreign Data Wrappers \(FDW\) and Index support so that SQL is entirely covered, including stored procedures, user defined functions, system functions calls.

**Figure  1**  MOT Architecture<a name="en-us_topic_0257713287_fig664096195112"></a>  
![](figures/mot-architecture.png "mot-architecture")

In the diagram above, the MOT engine is represented in green, while the existing openGauss \(based on Postgres\) components are represented in the top part of this diagram in blue. As you can see, the Foreign Data Wrapper \(FDW\) mediates between the MOT engine and the openGauss components.

## MOT Related FDW Customizations<a name="en-us_topic_0257713287_section1427111916520"></a>

Integrating MOT through FDW enabled the reuse of the most upper layer openGauss functionality and therefore significantly shorten MOT’s time-to-market without compromising SQL coverage.

However, the original FDW mechanism in openGauss was not designed for storage engine extensions, as lacked the following essential functionalities:

-   Index awareness of foreign tables to be calculated in the query planning phase
-   Complete DDL interfaces
-   Complete transaction lifecycle interfaces
-   Checkpoint interfaces
-   Redo log interface
-   Recovery interfaces
-   Vacuum interfaces

In order to support all the missing functionalities, the SQL layer and FDW interface layer were extended to provide the necessary infrastructure in order to enable the plugging in of the MOT transactional storage engine.

