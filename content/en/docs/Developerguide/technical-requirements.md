# Technical Requirements<a name="EN-US_TOPIC_0260488140"></a>

MOT has been designed to achieve the following

-   **Linear Scale-up – **MOT delivers a transactional storage engine that utilizes all the cores of a single NUMA architecture server in order to provide near-linear scale-up performance. This means that MOT is targeted to achieve a direct, near-linear relationship between the quantity of cores in a machine and the multiples of performance increase.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The near-linear scale-up results achieved by MOT significantly outperform all other existing solutions, and come as close as possible to achieving optimal results, which are limited by the physical restrictions and limitations of hardware, such as wires.  

-   **No Maximum Number of Cores Limitation –**  MOT does not place any limits on the maximum quantity of cores. This means that MOT is scalable from a single core up to 1,000s of cores, with minimal degradation per additional core, even when crossing NUMA socket boundaries.
-   **Extremely High Transactional Throughout – **MOT delivers a transactional storage engine that can achieve extremely high transactional throughout compared with any other OLTP vendor on the market.
-   **Extremely Low Transactional Latency –**  MOT delivers a transactional storage engine that can reach extremely low transactional latency compared with any other OLTP vendor on the market.
-   **Seamless Integration and Leveraging with/of openGauss –**  MOT integrates its transactional engine in a standard and seamless manner with the openGauss product. In this way, MOT reuses maximum functionality from the openGauss layers that are situated on top of its transactional storage engine.

