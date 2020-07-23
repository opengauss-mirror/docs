# STATISTICS \(MOT\)<a name="EN-US_TOPIC_0260488236"></a>

-   enable\_stats = false

    Configures periodic statistics for printing.


-   print\_stats\_period = 10 minute

    Configures the time period for printing a summary statistics report.


-   print\_full\_stats\_period = 1 hours

    Configures the time period for printing a full statistics report.

    The following settings configure the various sections included in the periodic statistics report. If none of them are configured, then the statistics report is suppressed.


-   enable\_log\_recovery\_stats = false

    Log recovery statistics contain various Redo Log recovery metrics.


-   enable\_db\_session\_stats = false

    Database session statistics contain transaction events, such commits, rollbacks and so on.


-   enable\_network\_stats = false

    Network statistics contain connection/disconnection events.


-   enable\_log\_stats = false

    Log statistics contain details regarding the Redo Log.


-   enable\_memory\_stats = false

    Memory statistics contain memory-layer details.


-   enable\_process\_stats = false

    Process statistics contain total memory and CPU consumption for the current process.


-   enable\_system\_stats = false

    System statistics contain total memory and CPU consumption for the entire system.


-   enable\_jit\_stats = false

    JIT statistics contain information regarding JIT query compilation and execution.


