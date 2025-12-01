# Cursor Loop<a name="EN-US_TOPIC_0289900667"></a>

Use of cursors in  **WHILE**  and  **LOOP**  statements is called a cursor loop. Generally,  **OPEN**,  **FETCH**, and  **CLOSE**  statements are called in this kind of loop. The following describes a loop that simplifies a cursor loop without the need for these operations. This mode is applicable to a static cursor loop, without executing four steps about a static cursor.

## Syntax<a name="en-us_topic_0283136850_en-us_topic_0237122246_en-us_topic_0059778239_s92d68947ac0f4661909c7c571b7c8222"></a>

[Figure 1](#en-us_topic_0283136850_en-us_topic_0237122246_en-us_topic_0059778239_fd1982700d7d8496a9358b5d029a0123b)  shows the syntax diagram of the  **FOR AS**  loop.

**Figure  1**  FOR\_AS\_loop::=<a name="en-us_topic_0283136850_en-us_topic_0237122246_en-us_topic_0059778239_fd1982700d7d8496a9358b5d029a0123b"></a>  
![](figures/for_as_loop.png "for_as_loop")

## Precautions<a name="en-us_topic_0283136850_en-us_topic_0237122246_en-us_topic_0059778239_s617705baa7ed48738372dea4725976b9"></a>

-   The  **UPDATE**  operation for the queried table is not allowed in the loop statement.
-   The variable  _loop\_name_  is automatically defined and is valid only in this loop. Its type is the same as that in the query result of  _select\_statement_. The value of  _loop\_name_  is the query result of  _select\_statement_.

-   The  **%FOUND**,  **%NOTFOUND**, and  **%ROWCOUNT**  attributes access the same internal variable in openGauss. Transactions and the anonymous block do not support multiple cursor accesses at the same time.

