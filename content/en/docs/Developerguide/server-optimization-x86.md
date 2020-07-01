# Server Optimization – x86<a name="EN-US_TOPIC_0257867354"></a>

The following are optional settings for optimizing MOT database performance running on an Intel x86 server. These settings are optimal for high throughput workloads:

-   [BIOS](bios.md#EN-US_TOPIC_0257867355)
-   [OS Environment Settings](os-environment-settings.md#EN-US_TOPIC_0257867356)
-   **Disk/SSD**
-   [Network](network.md#EN-US_TOPIC_0257867358)

Generally, databases are bounded by the following components:

-   **CPU –**  A faster CPU speeds up any CPU-bound database.
-   **Disk –**  High-speed SSD/NVME speeds up any I/O-bound database.
-   **Network**– A faster network speeds up any  **SQL\*Net**-bound database.

In addition to the above, the following general-purpose server settings are used by default and may significantly affect a database’s performance.

MOT performance tuning is a crucial step for ensuring fast application functionality and data retrieval. MOT can utilize state-of-the-art hardware, and therefore it is extremely important to tune each system in order to achieve maximum throughput.

-   **[BIOS](bios.md)**  

-   **[OS Environment Settings](os-environment-settings.md)**  

-   **[Disk/SSD](disk-ssd.md)**  

-   **[Network](network.md)**  


