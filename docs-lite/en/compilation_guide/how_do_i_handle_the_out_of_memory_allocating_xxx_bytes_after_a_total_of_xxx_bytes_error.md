# How Do I Handle the "out of memory allocating xxx bytes after a total of xxx bytes" Error?<a name="EN-US_TOPIC_0289899550"></a>

## Question<a name="en-us_topic_0283136297_section1450054211918"></a>

How do I resolve the "out of memory allocating xxx bytes after a total of xxx bytes" error that occurs during build?

## Answer<a name="en-us_topic_0283136297_section19671565204"></a>

Error cause: The  **-sj**  parameter is added to the build process in the script. In addition, the machine configuration is low, the memory is insufficient, and the number of concurrent tasks is too large.

Solution: Reduce the number of concurrent  **make**  tasks during build or run the  **make**  command directly. If the one-click script is used, you need to modify the script.

