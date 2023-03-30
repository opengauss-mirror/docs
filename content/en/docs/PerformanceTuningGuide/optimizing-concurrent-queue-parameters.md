# Optimizing Concurrent Queue Parameters<a name="EN-US_TOPIC_0245374531"></a>

You can globally or locally control concurrent queues.

## Global Concurrent Queues<a name="en-us_topic_0237121496_en-us_topic_0073253553_en-us_topic_0062863367_section20895258152731"></a>

In a global concurrent queue,  **max\_active\_statements**  controls the number of concurrent jobs on the primary node of the database. All common users' jobs are controlled, regardless of their complexity. When the number of concurrent jobs reaches the specified threshold, the rest of the jobs wait in a queue. Administrators' jobs are not under such control.

Set this parameter based on system capacities, such as memory and I/O usage. In a resource pool associated with common users, if the jobs of different priorities occupy different portions, they will be queued by priority first. Then, the jobs of the same priority are queued. Jobs in the queue of highest priority will be woken up first.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   In a high transactional concurrency scenario, you are advised to set  **max\_active\_statements**  to  **-1**, indicating that global concurrency is not limited.  
>-   In an analytical query scenario, set  **max\_active\_statements**  to the number of CPU cores divided by the number of database nodes. Generally, its value ranges from 5 to 8.  

## Local Concurrent Queues<a name="en-us_topic_0237121496_en-us_topic_0073253553_en-us_topic_0062863367_section43125250152853"></a>

You can locally control the number of concurrent jobs within the same resource pool on the primary node of the database. The number of concurrent complex jobs are controlled based on their cost.

**parctl\_min\_cost**  is used to determine whether a job is complex.

