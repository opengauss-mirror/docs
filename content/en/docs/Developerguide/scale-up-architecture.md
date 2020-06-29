# Scale-up Architecture<a name="EN-US_TOPIC_0257867422"></a>

To  **scale up**  means to add additional cores to the  _same machine_****in order to add computing power. To scale up****refers to the most common traditional form of adding computing power in a machine that has a single pair of controllers and multiple cores. Scale-up architecture is limited by the scalability limits of a machine’s controller.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>A  **scale-out **solution combines  _many machines_  \(each with multiple cores\) into a single combined computing entity. To scale out means to add additional machines/cores to this single computing pool, which is used as if it were a single combined computing entity. Object software is managed on each core and all the cores participate in this solution so that the cores of multiple machines become a single computing cluster.  

-   **[Technical Requirements](technical-requirements.md)**  

-   **[Design Principles](design-principles.md)**  

-   **[Integration using Foreign Data Wrappers \(FDW\)](integration-using-foreign-data-wrappers-(fdw).md)**  

-   **[Result: Linear Scale-up Many-core](result-linear-scale-up-many-core.md)**  


