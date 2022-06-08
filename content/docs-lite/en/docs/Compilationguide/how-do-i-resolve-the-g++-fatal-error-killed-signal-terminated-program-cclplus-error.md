# How Do I Resolve the "g++: fatal error: Killed signal terminated program cclplus" Error?<a name="EN-US_TOPIC_0289899547"></a>

## Question<a name="en-us_topic_0283136304_section14676321181511"></a>

How do I resolve the "g++: fatal error: Killed signal terminated program cclplus" error that occurs during build?

## Answer<a name="en-us_topic_0283136304_section1112815318159"></a>

Error cause: The  **-sj**  parameter is added to the build process in the script. The number of concurrent tasks is too large.

Solution: Reduce the number of concurrent  **make**  tasks during build or run the  **make**  command directly. If the one-click script is used, you need to modify the script.

