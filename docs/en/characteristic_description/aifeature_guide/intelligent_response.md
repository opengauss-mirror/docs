# Intelligent Q&A<a name="ZH-CN_TOPIC_0000002258589370"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-07T02:03:11.059Z -->

Based on the user query, GaussMaster uses the retrieval module to recall relevant context from the knowledge base, then concatenates the prompt and passes it to the LLM. The LLM determines whether risk information exists and decides whether to answer. When the original query cannot recall relevant context, query optimization can be performed to identify the user's true intent, followed by retrieval and generation to provide an answer. If there is still no relevant content, GaussMaster refuses to answer and prompts the user to enter the query again. After GaussMaster provides an answer, the user can evaluate the answer based on its content and context. When the answer is correct, the user can like it; when the answer is incorrect, the user can dislike it; when the answer is unfriendly, the user can report it. Such information is recorded to help improve and optimize GaussMaster intelligent Q&A in the future.

>[!NOTE]Note
>
>1. GaussMaster provides only the intelligent Q&A (retrieval + inference/end-to-end Q&A) APIs, and does not provide model services or front-end pages.
>2. GaussMaster relies on openGauss to provide the vector search capability and supports only the standalone version. Model services (including the embedding model, reranker model, and LLM) must be provided to support vectorization and answer generation.
>3. GaussMaster answers only openGauss-related questions. The current version supports answering six types of questions: basic questions, function descriptions, usage methods, feature support, parameter configuration, and alarm resolution. It does not support complex questions such as multi-hop questions (which require combining multiple information fragments to form an answer, for example, what new features are added in the latest openGauss version), comparison questions (for example, the differences in index recommendation between different openGauss versions), and single-point questions that require summarizing answers across multiple sections. These will be addressed in later versions. For cases where the answer exists in the openGauss documentation, the success rate of answering simple questions (for example, how should the shared\_buffer parameter be set?) is above 80%.

## Intelligent Q&A Constraints<a name="section1890177634"></a>

1. GaussMaster's refusal to answer politically sensitive or terrorist-related questions depends on the capability of the LLM itself. Based on the pangu-38b model, the preliminary evaluation shows a refusal accuracy above 70%. The final generated result is returned to the user after sensitive information filtering is performed on the downstream cloud side.
2. GaussMaster internal test conditions: The LLM service can call the company's Pangu API through a remote interface, or the LLM service can be deployed on an Ascend NPU server. The embedding model and reranker model services can call the API provided by openGauss through a remote interface, or the embedding and reranker model services can be deployed on an Ascend NPU server. The corresponding APIs must be added to the configuration file to ensure normal service running.
3. Performance specification constraints: Taking the LLM service as an example, without considering network latency and concurrency, under the single-concurrency condition of 8-card 910B, the pangu-38b inference performance is 1s for the first token and 100ms for each incremental token. In actual use, the inference speed is affected by network latency and multi-concurrency blocking.
4. The Q&A function supports only Chinese and English. This version focuses on Chinese to serve Agricultural Bank of China customers, and model fine-tuning also supports only Chinese. For the default knowledge base, Chinese and English retrieve different knowledge bases. For a custom knowledge base, no distinction is made and retrieval is performed directly. The English Q&A accuracy is not guaranteed to reach 80%.
5. In the Q&A API, the default length of historical dialogue records is 1, which means the content of the previous dialogue is extracted. When the language parameter of the historical dialogue differs from that of the current dialogue (for example, the previous dialogue is in Chinese and the current dialogue is in English), the corresponding historical dialogue information is discarded.
6. Because the LLM has input and output length limits, an answer cannot be generated when the query is too long or the retrieved corresponding context is too long. Taking the Pangu LLM as an example, the input and output length limit is 4096.

## API Description<a name="ZH-CN_TOPIC_0000002293119513"></a>

This section describes the RESTful APIs provided by the intelligent Q&A module.

### API: /v1/api/search<a name="section1573965348"></a>

Function description: Provides retrieval, including vector search + text retrieval + reranking.

Request method: POST

The parameters are described in the following table.

**Table 1**  API parameter description

<a name="table941991617422"></a>
<table><thead align="left"><tr id="row3420101624211"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p14420161615425"><a name="p14420161615425"></a><a name="p14420161615425"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p8420716124212"><a name="p8420716124212"></a><a name="p8420716124212"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p842051604212"><a name="p842051604212"></a><a name="p842051604212"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p1842091664211"><a name="p1842091664211"></a><a name="p1842091664211"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row5545528124214"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p175551482510"><a name="p175551482510"></a><a name="p175551482510"></a>question</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p14555982512"><a name="p14555982512"></a><a name="p14555982512"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p05559816519"><a name="p05559816519"></a><a name="p05559816519"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p10555148153"><a name="p10555148153"></a><a name="p10555148153"></a>Query to be retrieved.</p></td>
</tr>
<tr id="row16864531124211"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p12555188256"><a name="p12555188256"></a><a name="p12555188256"></a>user_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10555689519"><a name="p10555689519"></a><a name="p10555689519"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p16555188158"><a name="p16555188158"></a><a name="p16555188158"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p109411349114119"><a name="p109411349114119"></a><a name="p109411349114119"></a>Unique identifier of the user ID. The required length is greater than or equal to 2, and it can only consist of characters, digits, and underscores.</p></td>
</tr>
<tr id="row04871830144211"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p45551081454"><a name="p45551081454"></a><a name="p45551081454"></a>session_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1455515819510"><a name="p1455515819510"></a><a name="p1455515819510"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p11556483518"><a name="p11556483518"></a><a name="p11556483518"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p6455185954110"><a name="p6455185954110"></a><a name="p6455185954110"></a>Unique identifier of the session ID. The required length is greater than or equal to 2, and it can only consist of characters, digits, and underscores.</p></td>
</tr>
<tr id="row1138157842"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p105561981513"><a name="p105561981513"></a><a name="p105561981513"></a>vector_topk</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p85561581954"><a name="p85561581954"></a><a name="p85561581954"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p9556482510"><a name="p9556482510"></a><a name="p9556482510"></a>No. Default value: 6. Supported range: [1-10].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p3556198657"><a name="p3556198657"></a><a name="p3556198657"></a>Number of results returned by vector search.</p></td>
</tr>
<tr id="row46571587418"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p555614814520"><a name="p555614814520"></a><a name="p555614814520"></a>text_topk</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10556286513"><a name="p10556286513"></a><a name="p10556286513"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1155638554"><a name="p1155638554"></a><a name="p1155638554"></a>No. Default value: 6. Supported range: [1-10].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p15556088515"><a name="p15556088515"></a><a name="p15556088515"></a>Number of results returned by text retrieval.</p></td>
</tr>
<tr id="row656130351"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18556168858"><a name="p18556168858"></a><a name="p18556168858"></a>rerank_topk</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1755668757"><a name="p1755668757"></a><a name="p1755668757"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1556582520"><a name="p1556582520"></a><a name="p1556582520"></a>No. Default value: 3. Supported range: [1-10].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p14556886516"><a name="p14556886516"></a><a name="p14556886516"></a>Number of results returned after reranking.</p></td>
</tr>
<tr id="row143591915518"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p655618956"><a name="p655618956"></a><a name="p655618956"></a>kb_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p655610812519"><a name="p655610812519"></a><a name="p655610812519"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1055615817515"><a name="p1055615817515"></a><a name="p1055615817515"></a>No. Default value: 0, indicating the Gauss basic knowledge base.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p755619818517"><a name="p755619818517"></a><a name="p755619818517"></a>Knowledge base, which is the search space for the query.</p></td>
</tr>
<tr id="row242072517420"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p255608153"><a name="p255608153"></a><a name="p255608153"></a>version</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p95561382520"><a name="p95561382520"></a><a name="p95561382520"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1955688557"><a name="p1955688557"></a><a name="p1955688557"></a>No. Default value: None (empty), indicating that all versions are queried. The version list supported by the current version is: [24.7.30.10]</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p125561181359"><a name="p125561181359"></a><a name="p125561181359"></a>Version, used to filter knowledge base documents by version.</p></td>
</tr>
<tr id="row842017167426"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1655611819510"><a name="p1655611819510"></a><a name="p1655611819510"></a>lang</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p115571488513"><a name="p115571488513"></a><a name="p115571488513"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p18773529284"><a name="p18773529284"></a><a name="p18773529284"></a>No. Default value: zh, indicating Chinese. Currently supported: zh and en.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p135572083519"><a name="p135572083519"></a><a name="p135572083519"></a>Currently supported languages.</p></td>
</tr>
<tr id="row293631012155"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p29371110171514"><a name="p29371110171514"></a><a name="p29371110171514"></a>history_len</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p13937510151516"><a name="p13937510151516"></a><a name="p13937510151516"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p893731011518"><a name="p893731011518"></a><a name="p893731011518"></a>No. Default value: 1, indicating the historical information length. Supported range: [0, 3].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p198916231359"><a name="p198916231359"></a><a name="p198916231359"></a>Historical information length, indicating support for one round of dialogue. If the historical information is too long, it will be truncated to ensure that the model input length limit is satisfied.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/search'  -H 'accept: application/json'  -H "Content-Type: application/json" -d '{"question": "Introduce DBMind", "user_id": "123", "session_id": "123"}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
{
    "data":
        {
            "question_id": "98b21d51-9565-4dd4-9b0a-2854260de9cb",
            "rerank_search_time": 0.561,
            "search_res": [
                {
                    "Top No.": "xxx",
                    "confidence": "xxx",
                    "content": "xxx",
                    "context": "xxx",
                    "doc_location": "xxx",
                    "field": "xxx",
                    "keyword": "xxx",
                    "knowledge_id": "xxx",
                    "link": "xxx",
                    "media": "xxx",
                    "product_format": "xxx",
                    "score": 1.1,
                    "source": "xxx",
                    "sub_field": "xxx",
                    "title": "xxx",
                    "version": "xxx",
                    "visualize": "xxx"
               }
            ],
            "text_search_time": 0.006,
            "total_time": 1.1461763381958008,                
            "vector_search_time": 0.015
        },
    "success":true
}
```

Example error:

```
{"msg":"Internal server error.","success":false}
{"detail":[{"loc":["body","session_id"],"msg":"field required","type":"value_error.missing"}]}
```

### API: /v1/api/infer<a name="section499516511816"></a>

Function description: Generates answers by combining the query with the context.

Request method: POST

The parameters are described in the following table.

**Table 2**  API parameter description

<a name="table584993514911"></a>
<table><thead align="left"><tr id="row784911357914"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p168491635795"><a name="p168491635795"></a><a name="p168491635795"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p1684983516911"><a name="p1684983516911"></a><a name="p1684983516911"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p1484913511917"><a name="p1484913511917"></a><a name="p1484913511917"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p18849935193"><a name="p18849935193"></a><a name="p18849935193"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row1749171112107"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p9210141781012"><a name="p9210141781012"></a><a name="p9210141781012"></a>question</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p19210201716103"><a name="p19210201716103"></a><a name="p19210201716103"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p12101517141011"><a name="p12101517141011"></a><a name="p12101517141011"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p192103176106"><a name="p192103176106"></a><a name="p192103176106"></a>Query to be searched.</p></td>
</tr>
<tr id="row1577109181013"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p122109172104"><a name="p122109172104"></a><a name="p122109172104"></a>question_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p14210117151011"><a name="p14210117151011"></a><a name="p14210117151011"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p02101717161015"><a name="p02101717161015"></a><a name="p02101717161015"></a>Yes. Can be obtained through the search API.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p52108177106"><a name="p52108177106"></a><a name="p52108177106"></a>Query ID.</p></td>
</tr>
<tr id="row15395127141019"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p4210151713109"><a name="p4210151713109"></a><a name="p4210151713109"></a>user_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p821051714103"><a name="p821051714103"></a><a name="p821051714103"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p17210151731012"><a name="p17210151731012"></a><a name="p17210151731012"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p142109173106"><a name="p142109173106"></a><a name="p142109173106"></a>Unique identifier of the user ID. The required length is greater than or equal to 2, and it can only consist of characters, digits, and underscores.</p></td>
</tr>
<tr id="row427316511017"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p12210191761016"><a name="p12210191761016"></a><a name="p12210191761016"></a>session_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p021081781010"><a name="p021081781010"></a><a name="p021081781010"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p19210141719100"><a name="p19210141719100"></a><a name="p19210141719100"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p8210121791014"><a name="p8210121791014"></a><a name="p8210121791014"></a>Unique identifier of the session ID. The required length is greater than or equal to 2, and it can only consist of characters, digits, and underscores.</p></td>
</tr>
<tr id="row1279715553911"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p52108174105"><a name="p52108174105"></a><a name="p52108174105"></a>switch</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1121071718102"><a name="p1121071718102"></a><a name="p1121071718102"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p8210121718104"><a name="p8210121718104"></a><a name="p8210121718104"></a>No. Default value: True.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p172102173103"><a name="p172102173103"></a><a name="p172102173103"></a>Whether to enable retrieval. Reserved.</p></td>
</tr>
<tr id="row107961053792"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p20210101713103"><a name="p20210101713103"></a><a name="p20210101713103"></a>search_res</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p142117179108"><a name="p142117179108"></a><a name="p142117179108"></a>list</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p182115176108"><a name="p182115176108"></a><a name="p182115176108"></a>No. Default value: [], indicating no retrieval results.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p29431912194417"><a name="p29431912194417"></a><a name="p29431912194417"></a>Relevant context results returned by the retrieval API.</p></td>
</tr>
<tr id="row4721195115920"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p721191719103"><a name="p721191719103"></a><a name="p721191719103"></a>model_name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p621151721014"><a name="p621151721014"></a><a name="p621151721014"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p221111170102"><a name="p221111170102"></a><a name="p221111170102"></a>No. Default value: the Pangu Zhizi model.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p52111017131016"><a name="p52111017131016"></a><a name="p52111017131016"></a>Name of the LLM used to generate results.</p></td>
</tr>
<tr id="row17203104919917"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1021171701018"><a name="p1021171701018"></a><a name="p1021171701018"></a>model_config</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p18211121731018"><a name="p18211121731018"></a><a name="p18211121731018"></a>dict</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1821121761016"><a name="p1821121761016"></a><a name="p1821121761016"></a>No. Default value: {}</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p221191751019"><a name="p221191751019"></a><a name="p221191751019"></a>LLM hyperparameters.</p></td>
</tr>
<tr id="row137149401696"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p14211151791013"><a name="p14211151791013"></a><a name="p14211151791013"></a>lang</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1321115176104"><a name="p1321115176104"></a><a name="p1321115176104"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p321151741017"><a name="p321151741017"></a><a name="p321151741017"></a>No. Default value: zh, indicating Chinese. Currently supported: zh and en.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1321171714103"><a name="p1321171714103"></a><a name="p1321171714103"></a>Currently supported languages.</p></td>
</tr>
<tr id="row10849183510917"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p8211817161014"><a name="p8211817161014"></a><a name="p8211817161014"></a>history_len</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p12211817171016"><a name="p12211817171016"></a><a name="p12211817171016"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p45558539109"><a name="p45558539109"></a><a name="p45558539109"></a>No. Default value: 1, indicating the historical information length. Supported range: [0, 3].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p151516570349"><a name="p151516570349"></a><a name="p151516570349"></a>Historical information length, indicating support for one round of dialogue. If the historical information is too long, it will be truncated to ensure that the model input length limit is satisfied.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/infer'  -H 'accept: text/event-stream'  -H "Content-Type: application/json" -d '{"question": "Introduce DBMind", "question_id": "1555fc9d-d098-4191-9875-9ae45df08e22", "user_id": "123", "session_id": "123", "search_res": [{"Top No.":0,"confidence":"unknown","content":"xxx","context":"{\"\",\"8eddee07-72fc-4564-a36e-78ee52eb4ec9\",\"d33fc937-76f1-4c39-a445-1bf551f64e5d\"}","doc_location":"xxx.md","field":"openGauss","keyword":"{\"\"}","knowledge_id":"8eddee07-72fc-4564-a36e-78ee52eb4ec9","link":null,"media":"","product_format":"unknown","score":17.537734985351562,"source":"unknown","sub_field":"kernel","title":"xxx.md","version":"unknown","visualize":null},{"Top No.":1,"confidence":"unknown","content":"xxx","context":"{\"d740dd69-b662-45a3-ad65-253906c84246\",\"a12e517e-fa66-411f-8045-04960d8623ee\",\"\"}","doc_location":"xxx.md","field":"openGauss","keyword":"{\"\"}","knowledge_id":"a12e517e-fa66-411f-8045-04960d8623ee","link":null,"media":"","product_format":"unknown","score":14.618561744689941,"source":"unknown","sub_field":"kernel","title":"xxx.md","version":"unknown","visualize":null},{"Top No.":2,"confidence":"1","content":"xxx","context":"{\"228fc140-9fc9-49ed-bd21-100d7dbbd625\",\"b98d692c-bf4b-434c-86a1-0593aa6f204a\",\"9e9314f9-a047-4168-8149-8e1fd7447398\"}","doc_location":"xxx.md","field":"openGauss","keyword":"{\"\"}","knowledge_id":"b98d692c-bf4b-434c-86a1-0593aa6f204a","link":null,"media":"","product_format":"centralized","score":13.396706581115723,"source":"idp","sub_field":"kernel","title":"xxx.md","version":"24.7.30.10","visualize":null}]}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
data:{"data":{"data":"D","type":"answer"},"success":true}\n\n
data:{"data":{"data":"DB","type":"answer"},"success":true}\n\n
...
data:{"data":{"data":{"answer_id":xxx,"time": 0.15}, "type":"complete",},"success":true}\n\n
```

Example error:

```
data:{"msg":"Internal server error.","success":false}\n\n
```

### API: /v1/api/ask\_gauss<a name="section771203832217"></a>

Function description: Performs process orchestration and provides end-to-end Q&A by combining technologies such as query optimization and fusion retrieval.

Request method: POST

The parameters are described in the following table.

**Table 3**  API parameter description

<a name="table15234193211237"></a>
<table><thead align="left"><tr id="row13234143217235"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p122341432172320"><a name="p122341432172320"></a><a name="p122341432172320"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p162341332112312"><a name="p162341332112312"></a><a name="p162341332112312"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p1723453217234"><a name="p1723453217234"></a><a name="p1723453217234"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p102340327239"><a name="p102340327239"></a><a name="p102340327239"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row423416322233"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1285382141713"><a name="p1285382141713"></a><a name="p1285382141713"></a>question</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p20954347191618"><a name="p20954347191618"></a><a name="p20954347191618"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p119541472164"><a name="p119541472164"></a><a name="p119541472164"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18954104721617"><a name="p18954104721617"></a><a name="p18954104721617"></a>Query to be retrieved.</p></td>
</tr>
<tr id="row72341321234"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p108531422175"><a name="p108531422175"></a><a name="p108531422175"></a>user_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p209541447201613"><a name="p209541447201613"></a><a name="p209541447201613"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p139541547131611"><a name="p139541547131611"></a><a name="p139541547131611"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p4954154716169"><a name="p4954154716169"></a><a name="p4954154716169"></a>Unique identifier of the user ID. The required length is greater than or equal to 2, and it can only consist of characters, digits, and underscores.</p></td>
</tr>
<tr id="row14235532162320"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p88538201718"><a name="p88538201718"></a><a name="p88538201718"></a>session_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p2095434718169"><a name="p2095434718169"></a><a name="p2095434718169"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1295444741611"><a name="p1295444741611"></a><a name="p1295444741611"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p895404751612"><a name="p895404751612"></a><a name="p895404751612"></a>Unique identifier of the session ID. The required length is greater than or equal to 2, and it can only consist of characters, digits, and underscores.</p></td>
</tr>
<tr id="row6278164752320"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p185412216178"><a name="p185412216178"></a><a name="p185412216178"></a>switch</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1837216135181"><a name="p1837216135181"></a><a name="p1837216135181"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p19372161341812"><a name="p19372161341812"></a><a name="p19372161341812"></a>No. Default value: True.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1337271331818"><a name="p1337271331818"></a><a name="p1337271331818"></a>Whether to enable retrieval. Reserved. Currently only True is supported.</p></td>
</tr>
<tr id="row2235113272313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1785432181716"><a name="p1785432181716"></a><a name="p1785432181716"></a>vector_topk</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p195534710161"><a name="p195534710161"></a><a name="p195534710161"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p99551547171615"><a name="p99551547171615"></a><a name="p99551547171615"></a>No. Default value: 6. Supported range: [1-10].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p3955134741611"><a name="p3955134741611"></a><a name="p3955134741611"></a>Number of results returned by vector search.</p></td>
</tr>
<tr id="row1123583262317"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p18854723176"><a name="p18854723176"></a><a name="p18854723176"></a>text_topk</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p6955847181620"><a name="p6955847181620"></a><a name="p6955847181620"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1195524719167"><a name="p1195524719167"></a><a name="p1195524719167"></a>No. Default value: 6. Supported range: [1-10].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p10955134751616"><a name="p10955134751616"></a><a name="p10955134751616"></a>Number of results returned by text retrieval.</p></td>
</tr>
<tr id="row5177125118236"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p168541220179"><a name="p168541220179"></a><a name="p168541220179"></a>rerank_topk</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p195512477164"><a name="p195512477164"></a><a name="p195512477164"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p6955164719166"><a name="p6955164719166"></a><a name="p6955164719166"></a>No. Default value: 3. Supported range: [1-10].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p99551247181610"><a name="p99551247181610"></a><a name="p99551247181610"></a>Number of results returned after reranking.</p></td>
</tr>
<tr id="row658714962313"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1785412261713"><a name="p1785412261713"></a><a name="p1785412261713"></a>kb_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1395514751614"><a name="p1395514751614"></a><a name="p1395514751614"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p395574711167"><a name="p395574711167"></a><a name="p395574711167"></a>No. Default value: 0, indicating the Gauss basic knowledge base.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1895504711615"><a name="p1895504711615"></a><a name="p1895504711615"></a>Knowledge base, which is the search space for the query.</p></td>
</tr>
<tr id="row1823513212230"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1285416271715"><a name="p1285416271715"></a><a name="p1285416271715"></a>version</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1395594741620"><a name="p1395594741620"></a><a name="p1395594741620"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p725625815277"><a name="p725625815277"></a><a name="p725625815277"></a>No. Default value: None (empty), indicating that all versions are queried. The version list supported by the current version is: [24.7.30.10]</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1510917394539"><a name="p1510917394539"></a><a name="p1510917394539"></a>Version, used to filter knowledge base documents by version.</p></td>
</tr>
<tr id="row1623553262315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p5854112181714"><a name="p5854112181714"></a><a name="p5854112181714"></a>model_name</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p29551547171614"><a name="p29551547171614"></a><a name="p29551547171614"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p126549168223"><a name="p126549168223"></a><a name="p126549168223"></a>No. Default value: the Pangu Zhizi model.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p799417092319"><a name="p799417092319"></a><a name="p799417092319"></a>Name of the LLM used to generate results.</p></td>
</tr>
<tr id="row9235143219232"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p128546213177"><a name="p128546213177"></a><a name="p128546213177"></a>model_config</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1495634721610"><a name="p1495634721610"></a><a name="p1495634721610"></a>dict</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p126548165223"><a name="p126548165223"></a><a name="p126548165223"></a>No. Default value: {}</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p799413014233"><a name="p799413014233"></a><a name="p799413014233"></a>LLM hyperparameters.</p></td>
</tr>
<tr id="row1923618327238"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p1854102121718"><a name="p1854102121718"></a><a name="p1854102121718"></a>lang</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p189561647171613"><a name="p189561647171613"></a><a name="p189561647171613"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p2654191618221"><a name="p2654191618221"></a><a name="p2654191618221"></a>No. Default value: zh, indicating Chinese. Currently supported: zh and en.</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p79944013231"><a name="p79944013231"></a><a name="p79944013231"></a>Currently supported languages.</p></td>
</tr>
<tr id="row16236103262320"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p208542221717"><a name="p208542221717"></a><a name="p208542221717"></a>history_len</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p1095614478163"><a name="p1095614478163"></a><a name="p1095614478163"></a>int</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p18895192521120"><a name="p18895192521120"></a><a name="p18895192521120"></a>No. Default value: 1, indicating the historical information length. Supported range: [0, 3].</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p099411002319"><a name="p099411002319"></a><a name="p099411002319"></a>Historical information length, indicating support for one round of dialogue. If the historical information is too long, it will be truncated to ensure that the model input length limit is satisfied.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/ask_gauss'  -H 'accept: text/event-stream'  -H "Content-Type: application/json" -d '{"question": "Introduce DBMind", "user_id": "123", "session_id": "123"}' --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
data:{"data":{"data":"Searching...","type":"progress"},"success":true}\n\n
data:{"data":{"data":"Search complete","type":"progress"},"success":true}\n\n
data:{"data":{"data":"Generating answer...',"type":"progress"},"success":true}\n\n
data:{"data":{"data":"h","type":"answer"},"success":true}\n\n
data:{"data":{"data":"he","type":"answer"},"success":true}\n\n
...
data:{"data":{"data":"Answer generation complete", "type": "progress"},"success":true}\n\n
data:{"data":{"data":{"answer_id":xxx,"question_id":xxx,"time":0.15 },"type":"complete"},"success":true}\n\n
```

Example error:

```
data:{"msg":"Internal server error.","success":false}\n\n
```

### API: /v1/api/feedback/like<a name="section172991440192417"></a>

Function description: When the answer is correct, feedback is provided to acknowledge the answer.

Request method: POST

The parameters are described in the following table.

**Table 4**  API parameter description

<a name="table82941167255"></a>
<table><thead align="left"><tr id="row0294121682515"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1029418165251"><a name="p1029418165251"></a><a name="p1029418165251"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p529461616258"><a name="p529461616258"></a><a name="p529461616258"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p10294516162518"><a name="p10294516162518"></a><a name="p10294516162518"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p10294116182519"><a name="p10294116182519"></a><a name="p10294116182519"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row14294121617257"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p11941122152515"><a name="p11941122152515"></a><a name="p11941122152515"></a>answer_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p18941152182514"><a name="p18941152182514"></a><a name="p18941152182514"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p6941821132515"><a name="p6941821132515"></a><a name="p6941821132515"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p18941112118258"><a name="p18941112118258"></a><a name="p18941112118258"></a>ID corresponding to the answer.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/feedback/like?answer_id=e1a19c1e-8c3f-49ae-b476-8a21434e5f9e'  -H 'accept: text/event-stream'  -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
{"data":"feedback like success.","success":true}
```

Example error:

```
{"msg":"Internal server error.","success":false}
```

### API: /v1/api/feedback/hate<a name="section11908155912255"></a>

Function description: Reports the annotation of an error when the answer is incorrect.

Request method: POST

The parameters are described in the following table.

**Table 5**  API parameter description

<a name="table92065227265"></a>
<table><thead align="left"><tr id="row14206182218267"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p152071222172611"><a name="p152071222172611"></a><a name="p152071222172611"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p6207152210261"><a name="p6207152210261"></a><a name="p6207152210261"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p6207622192613"><a name="p6207622192613"></a><a name="p6207622192613"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p120762252612"><a name="p120762252612"></a><a name="p120762252612"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row62071226262"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p2207132282619"><a name="p2207132282619"></a><a name="p2207132282619"></a>answer_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p3207922152620"><a name="p3207922152620"></a><a name="p3207922152620"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p7207172211266"><a name="p7207172211266"></a><a name="p7207172211266"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p820714221263"><a name="p820714221263"></a><a name="p820714221263"></a>ID corresponding to the answer.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/feedback/hate?answer_id=e1a19c1e-8c3f-49ae-b476-8a21434e5f9e'  -H 'accept: text/event-stream'  -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
{"data":"feedback hate success.","success":true}
```

Example error:

```
{"msg":"Internal server error.","success":false}
```

### API: /v1/api/feedback<a name="section1658204532611"></a>

Function description: Provides user feedback and suggestions for the answer.

Request method: POST

The parameters are described in the following table.

**Table 6**  API parameter description

<a name="table1965881513020"></a>
<table><thead align="left"><tr id="row14658111511305"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p19658161503010"><a name="p19658161503010"></a><a name="p19658161503010"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p18658131513014"><a name="p18658131513014"></a><a name="p18658131513014"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p665811518304"><a name="p665811518304"></a><a name="p665811518304"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p265831513300"><a name="p265831513300"></a><a name="p265831513300"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row122951820113010"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p641952563016"><a name="p641952563016"></a><a name="p641952563016"></a>answer_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p17419192513013"><a name="p17419192513013"></a><a name="p17419192513013"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p134197254307"><a name="p134197254307"></a><a name="p134197254307"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p12419162518306"><a name="p12419162518306"></a><a name="p12419162518306"></a>ID corresponding to the answer.</p></td>
</tr>
<tr id="row1665811156307"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p8419152513302"><a name="p8419152513302"></a><a name="p8419152513302"></a>feedback_info</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p194191425143015"><a name="p194191425143015"></a><a name="p194191425143015"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p1841942511307"><a name="p1841942511307"></a><a name="p1841942511307"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p242092583017"><a name="p242092583017"></a><a name="p242092583017"></a>Feedback information.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/feedback?answer_id=e1a19c1e-8c3f-49ae-b476-8a21434e5f9e&feedback_info=notuseful'  -H 'accept: text/event-stream'  -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
{"data":"feedback info success.","success":true}
```

Example error:

```
{"msg":"Internal server error.","success":false}
```

### API: /v1/api/feedback/report<a name="section164994548303"></a>

Function description: When an answer is unfriendly, you can report it as feedback.

Request method: POST

The parameters are described in the following table.

**Table 7**  API parameter description

<a name="table19263247103120"></a>
<table><thead align="left"><tr id="row132637471318"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="p1526324717315"><a name="p1526324717315"></a><a name="p1526324717315"></a>Parameter Name</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="p10263124711315"><a name="p10263124711315"></a><a name="p10263124711315"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="p1926344743114"><a name="p1926344743114"></a><a name="p1926344743114"></a>Required</p></th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="p3264547173111"><a name="p3264547173111"></a><a name="p3264547173111"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="row1226434712315"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p7407145617318"><a name="p7407145617318"></a><a name="p7407145617318"></a>answer_id</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p10407185615318"><a name="p10407185615318"></a><a name="p10407185615318"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p18407135633118"><a name="p18407135633118"></a><a name="p18407135633118"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1840715612314"><a name="p1840715612314"></a><a name="p1840715612314"></a>ID corresponding to the answer.</p></td>
</tr>
<tr id="row202131151123116"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p174077569319"><a name="p174077569319"></a><a name="p174077569319"></a>report_type</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p174071456123116"><a name="p174071456123116"></a><a name="p174071456123116"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p20407155643114"><a name="p20407155643114"></a><a name="p20407155643114"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1740705612315"><a name="p1740705612315"></a><a name="p1740705612315"></a>Report type. Valid values: ["低俗色情", "账号违规", "敏感信息", "暴力恐怖", "造谣诽谤", "侮辱英烈", "谩骂攻击", "民族宗教", "赌博诈骗", "危害未成年", "违法违禁品", "其他"].</p></td>
</tr>
<tr id="row1526410477314"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="p840815613310"><a name="p840815613310"></a><a name="p840815613310"></a>report_info</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="p240816568312"><a name="p240816568312"></a><a name="p240816568312"></a>str</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="p14408256193111"><a name="p14408256193111"></a><a name="p14408256193111"></a>Yes</p></td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="p1840813562317"><a name="p1840813562317"></a><a name="p1840813562317"></a>Reported information.</p></td>
</tr>
</tbody>
</table>

Example API:

```
curl -X 'POST' 'https://host:port/v1/api/feedback/report?answer_id=e1a19c1e-8c3f-49ae-b476-8a21434e5f9e&report_type=%E4%BD%8E%E4%BF%97%E8%89%B2%E6%83%85&report_info=notfriendly'  -H 'accept: text/event-stream'  -H "Content-Type: application/json" --cacert /path/xxx.crt --key /path/xxx.key --cert /path/xxx.crt --pass "***"
```

Example response:

```
{"data":"feedback report success.","success":true}
```

Example error:

```
{"msg":"Internal server error.","success":false}
```
