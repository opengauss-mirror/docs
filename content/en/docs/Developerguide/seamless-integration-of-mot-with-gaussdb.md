# Seamless Integration of MOT with GaussDB –<a name="EN-US_TOPIC_0257867434"></a>

I WROTE THIS AND MAYBE I CAN USE IT AFTER I DOCUMENT MY MEETING WITH NIR  GGG

MOT is a high-performance memory-optimized storage engine that is pluggable into a GaussDB envelop. It benefits from SQL and HA capabilities, and enables high‑interoperability side-by-side with the disk-based row-store engine. The result – best tpc-c performance in a production-grade database.

The following shows the Memory Optimized Storage Engine component with GaussDB, which is responsible for managing the MOT tables and transactions. Seamlessly integrated into GaussDB, the MOT utilizes its infrastructure with clear separation of components, well-defined APIs and callbacks.

![](figures/en-us_image_0257713456.png)

Figure 5 – Integrating the MOT Engine

SHOULD I REMOVE THE RED BOXES ON THE RIGHT? GGG

///VVV: No, just make them smaller, less emphasized.

