# FAQs<a name="EN-US_TOPIC_0289899555"></a>

## How Do I Resolve the "Configure error: C compiler cannot create executables" Error?<a name="EN-US_TOPIC_0289899543"></a>

### Question<a name="en-us_topic_0283136296_section8138144317480"></a>

How do I resolve the "Configure error: C compiler cannot create executables" error reported during version build?

### Answer<a name="en-us_topic_0283136296_section09254965110"></a>

Error cause: The  **binarylibs**  file is incomplete or damaged.

Solution: If  **binarylibs**  is built using open-source software, rebuild the open-source third-party software. If  **binarylibs**  is downloaded from code, download the code again. Then run the current script or command again.

## How Do I Resolve the "g++: fatal error: Killed signal terminated program cclplus" Error?<a name="EN-US_TOPIC_0289899547"></a>

### Question<a name="en-us_topic_0283136304_section14676321181511"></a>

How do I resolve the "g++: fatal error: Killed signal terminated program cclplus" error that occurs during build?

### Answer<a name="en-us_topic_0283136304_section1112815318159"></a>

Error cause: The  **-sj**  parameter is added to the build process in the script. The number of concurrent tasks is too large.

Solution: Reduce the number of concurrent  **make**  tasks during build or run the  **make**  command directly. If the one-click script is used, you need to modify the script.

## How Do I Handle the "out of memory allocating xxx bytes after a total of xxx bytes" Error?<a name="EN-US_TOPIC_0289899550"></a>

### Question<a name="en-us_topic_0283136297_section1450054211918"></a>

How do I resolve the "out of memory allocating xxx bytes after a total of xxx bytes" error that occurs during build?

### Answer<a name="en-us_topic_0283136297_section19671565204"></a>

Error cause: The  **-sj**  parameter is added to the build process in the script. In addition, the machine configuration is low, the memory is insufficient, and the number of concurrent tasks is too large.

Solution: Reduce the number of concurrent  **make**  tasks during build or run the  **make**  command directly. If the one-click script is used, you need to modify the script.
