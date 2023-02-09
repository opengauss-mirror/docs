# AI Capabilities<a name="EN-US_TOPIC_0000001105235306"></a>

The history of artificial intelligence \(AI\) can be dated back to as early as the 1950s, even longer than the history of the database development. However, the AI technology has not been applied on a large scale for a long time due to various objective factors, and even experienced several obvious troughs. With the further development of information technologies in recent years, factors that restrict the AI development have been gradually weakened, and the AI, big data, and cloud computing \(ABC\) technologies are born.

The combination of AI and databases has been a trending research topic in the industry in recent years. openGauss has participated in the exploration of this domain earlier and achieved phased achievements. An AI submodule DBMind is provided for the database. Compared with other functions, it is more independent. This module can be divided into AI4DB, DB4AI, and ABO optimizer.

-   AI4DB uses AI technologies to optimize database execution performance as well as achieve autonomy and O&M free. It includes self-tuning, self-diagnosis, self-security, self-O&M, and self-healing.
-   DB4AI streamlines the E2E process from databases to AI applications, drives AI tasks through databases, and unifies the AI technology stack to achieve out-of-the-box, high performance, and cost saving. For example, SQL-like statements are used to implement functions such as recommendation system, image retrieval, and time series forecast. The advantages of high parallelism and column store of databases can be fully utilized to avoid the cost of data and fragmented storage and avoid security risks caused by information leakage.

The functions described in this section are stored in the **bin/dbmind** directory of the database installation directory \(*$GAUSSHOME*\). The sub-functions are stored in the **components** subdirectory of **bin/dbmind**. To invoke DBMind, you can run the **gs\_dbmind** command. In addition, the built-in AI functions (such as DB4AI) of the database are presented in the form of SQL syntaxes and system functions.

-   **[AI4DB: Autonomous Database O&M](ai4db-autonomous-database-o-m.md)**  

-   **[DB4AI: Database-driven AI](db4ai-database-driven-ai.md)**  

-   **[ABO Optimizer](abo-optimizer.md)** 
