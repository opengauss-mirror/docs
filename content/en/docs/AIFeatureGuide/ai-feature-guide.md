# AI Features<a name="EN-US_TOPIC_0289900557"></a>

The history of artificial intelligence \(AI\) can be traced back to the 1950s, even predating the development of database systems. However, due to various objective constraints, AI technology was not applied on a large scale for quite some time and even experienced several significant downturns. In recent years, with the advancement of information technology, many of the factors that previously hindered AI development have gradually diminished, giving rise to the so-called ABC technologies—AI, Big Data, and Cloud Computing.

The integration of AI and databases has become a major research focus in recent years. openGauss was an early participant in this exploration and has achieved notable progress. The AI features are encapsulated in a submodule called DBMind, which is more independent compared to other database functions. It is broadly divided into two parts: AI4DB and DB4AI.

-   AI4DB refers to the use of AI technologies to optimize database performance, thereby achieving better execution. It also enables autonomy and O&M-free capabilities through AI. The key areas include self-tuning, self-diagnosis, self-security, self-O&M, and self-healing.
-   DB4AI refers to streamlining the end-to-end process from databases to AI applications, driving AI tasks through the database, and unifying the AI technology stack to achieve out-of-the-box functionality, high performance, and cost savings. For example, SQL-like statements can be used to implement functions such as recommendation systems, image retrieval, and time series prediction. This takes full advantage of the high parallelism and columnar storage of databases, avoiding the costs associated with fragmented data storage and minimizing security risks related to information leakage.

The features discussed in this section are located in the  **bin/dbmind**  directory of the database installation path \(_$GAUSSHOME_\). Each sub-function resides in the  **components**  subdirectory within  **bin/dbmind**. The  **gs\_dbmind**  command is available for users to invoke these features. Meanwhile, built-in AI functions \(such as DB4AI\) are presented through SQL syntax and system functions.

-   **[AI4DB: Autonomous Database O&M](ai4db-autonomous-database-o-m.md)**  

-   **[DB4AI: Database-driven AI](db4ai-database-driven-ai.md)**  

-   **[ABO Optimizer](abo-optimizer.md)**  


