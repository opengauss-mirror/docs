# How Do I Handle the "g++: fatal error: Killed signal terminated program cclplus" Error?<a name="EN-US_TOPIC_0250721950"></a>

## Question<a name="section14676321181511"></a>

How do I resolve the "g++: fatal error: Killed signal terminated program cclplus" error that occurs during compilation.

## Answer<a name="section1112815318159"></a>

Error cause: The  **-sj**  parameter is added to the compilation process in the script. The number of concurrent tasks is too large.

Solution: Reduce the number of concurrent  **make**  tasks during compilation or run the  **make**  command directly. If the one-click script is used, you need to modify the script.

