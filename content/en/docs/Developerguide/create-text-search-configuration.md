# CREATE TEXT SEARCH CONFIGURATION<a name="EN-US_TOPIC_0289900950"></a>

## Function<a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_s0e4d513f4465404abcdfaf94e7cbef18"></a>

**CREATE TEXT SEARCH CONFIGURATION**  creates a text search configuration. A text search configuration specifies a text search parser that can divide a string into tokens, plus dictionaries that can be used to determine which tokens are of interest for searching. 

## Precautions<a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_s212243b97a3c488d925beb43fba7c01a"></a>

-   If only the parser is specified, the new text search configuration initially has no mapping from token types to dictionaries, and therefore will ignore all words. Subsequently,  **ALTER TEXT SEARCH CONFIGURATION**  must be used to create mapping to make the configuration useful. If  **COPY**  is specified, the parser, mapping and parameters of the text search configuration is copied automatically.
-   If the schema name is given, the text search configuration will be created in the specified schema. Otherwise, the configuration will be created in the current schema.
-   The user who defines a text search configuration becomes its owner.
-   **PARSER**  and  **COPY**  options are mutually exclusive, because when an existing configuration is copied, its parser selection is copied too. 
-   If only the parser is specified, the new text search configuration initially has no mapping from token types to dictionaries, and therefore will ignore all words.

## Syntax<a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_sebcad83e099e46b0ba586829e634d144"></a>

```
CREATE TEXT SEARCH CONFIGURATION name 
    ( PARSER = parser_name | COPY = source_config )
    [ WITH ( {configuration_option = value} [, ...] )];
```

## Parameter Description<a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_s3935d7de401a4ccd97361e7b2b485805"></a>

-   **name**

    Specifies the name of the text search configuration to be created. The name can be schema-qualified.

-   **parser\_name**

    Specifies the name of the text search parser to use for this configuration. 

-   **source\_config**

    Specifies the name of an existing text search configuration to copy. 

-   **configuration\_option**

    Specifies parameters for the text search configuration, particularly for the parser executed by  **parser\_name**  or contained by  **source\_config**.

    Value range: The default and  **ngram**  parsers are supported. The parser of default type has no corresponding  **configuration\_option**.  [Table 1](#en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_t0d301ca84e1a4c16ae8bead85aa1a8c3)  lists  **configuration\_option**  for  **ngram**  parsers.

    **Table  1**  Configuration parameters for  **ngram**  parsers

    <a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_t0d301ca84e1a4c16ae8bead85aa1a8c3"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_r7358f91c6a344d3c925a1e9a3131e90c"><th class="cellrowborder" valign="top" width="10.45%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a70d80fceef2a43678a68d9d726b1e201"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a70d80fceef2a43678a68d9d726b1e201"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a70d80fceef2a43678a68d9d726b1e201"></a>Parser</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.47%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a2f34f4c0334d454184a3435283061072"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a2f34f4c0334d454184a3435283061072"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a2f34f4c0334d454184a3435283061072"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="37.72%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a9df03cd737914aa88ecf89d869f7bec2"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a9df03cd737914aa88ecf89d869f7bec2"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a9df03cd737914aa88ecf89d869f7bec2"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="36.36%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_ac55de7ecda5d42bc92dec9a7d12cf07f"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_ac55de7ecda5d42bc92dec9a7d12cf07f"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_ac55de7ecda5d42bc92dec9a7d12cf07f"></a>Value Range</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_r70279f6e42874432aea8dc060ef14816"><td class="cellrowborder" rowspan="3" valign="top" width="10.45%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_en-us_topic_0058965729_p796264012457"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_en-us_topic_0058965729_p796264012457"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_en-us_topic_0058965729_p796264012457"></a>ngram</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a88aacea507174f06908cbceb9ee662f7"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a88aacea507174f06908cbceb9ee662f7"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a88aacea507174f06908cbceb9ee662f7"></a>gram_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="37.72%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a6837bb5d15cb4e54984b7a899d208f88"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a6837bb5d15cb4e54984b7a899d208f88"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a6837bb5d15cb4e54984b7a899d208f88"></a>Length of word segmentation</p>
    </td>
    <td class="cellrowborder" valign="top" width="36.36%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a66cb45cb1b524d90acbaf6e014833738"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a66cb45cb1b524d90acbaf6e014833738"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a66cb45cb1b524d90acbaf6e014833738"></a>Integer, 1 to 4</p>
    <p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a97173f63b7b74ab5911fad954606068e"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a97173f63b7b74ab5911fad954606068e"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a97173f63b7b74ab5911fad954606068e"></a>Default value: <strong>2</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_rab1926ed9433488b96d36ae2bbedd319"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a077d45984066428eab0ac28303b22c9c"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a077d45984066428eab0ac28303b22c9c"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a077d45984066428eab0ac28303b22c9c"></a>punctuation_ignore</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_af3284706279547098a0e2b1bc36b9d83"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_af3284706279547098a0e2b1bc36b9d83"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_af3284706279547098a0e2b1bc36b9d83"></a>Whether to ignore punctuations</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_u7626c646b9b64783a2c393bcf568bad6"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_u7626c646b9b64783a2c393bcf568bad6"></a><ul id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_u7626c646b9b64783a2c393bcf568bad6"><li><strong>true</strong> (default value): Ignore punctuations.</li><li><strong>false</strong>: Do not ignore punctuations.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_r21a0acec3b1d4f209222ce6cb5c5bd77"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a5fc3519aee8043039ee6609a557a3230"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a5fc3519aee8043039ee6609a557a3230"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_a5fc3519aee8043039ee6609a557a3230"></a>grapsymbol_ignore</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_aea2627ca36d543049f7b51963cbbe547"><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_aea2627ca36d543049f7b51963cbbe547"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_aea2627ca36d543049f7b51963cbbe547"></a>Whether to ignore graphical characters</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_u7ae471a522694b5d996126575b808f03"></a><a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_u7ae471a522694b5d996126575b808f03"></a><ul id="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_u7ae471a522694b5d996126575b808f03"><li><strong>true</strong>: Ignore graphical characters.</li><li><strong>false</strong> (default value): Do not ignore graphical characters.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>


## Examples<a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_sc3a4aef5c0c0420eaf5a2e67097004a2"></a>

```
-- Create a text search configuration.
openGauss=# CREATE TEXT SEARCH CONFIGURATION ngram2 (parser=ngram) WITH (gram_size = 2, grapsymbol_ignore = false);

-- Create a text search configuration.
openGauss=# CREATE TEXT SEARCH CONFIGURATION ngram3 (copy=ngram2) WITH (gram_size = 2, grapsymbol_ignore = false);

-- Add type mapping.
openGauss=# ALTER TEXT SEARCH CONFIGURATION ngram2 ADD MAPPING FOR multisymbol WITH simple;

-- Create user joe.
openGauss=# CREATE USER joe IDENTIFIED BY 'xxxxxxxxx';

-- Change the owner of the text search configuration.
openGauss=# ALTER TEXT SEARCH CONFIGURATION ngram2 OWNER TO joe;

-- Change the schema of the text search configuration.
openGauss=# ALTER TEXT SEARCH CONFIGURATION ngram2 SET SCHEMA joe;

-- Rename the text search configuration.
openGauss=# ALTER TEXT SEARCH CONFIGURATION joe.ngram2 RENAME TO ngram_2;

-- Delete the type mapping.
openGauss=# ALTER TEXT SEARCH CONFIGURATION joe.ngram_2 DROP MAPPING IF EXISTS FOR multisymbol;

-- Delete the text search configuration.
openGauss=# DROP TEXT SEARCH CONFIGURATION joe.ngram_2;
openGauss=# DROP TEXT SEARCH CONFIGURATION ngram3;

-- Delete the schema and user joe.
openGauss=# DROP SCHEMA IF EXISTS joe CASCADE;
openGauss=# DROP ROLE IF EXISTS joe;
```

## Helpful Links<a name="en-us_topic_0283137399_en-us_topic_0237122121_en-us_topic_0059777835_s0205fc5b18e94f51af91402258be4747"></a>

[ALTER TEXT SEARCH CONFIGURATION](alter-text-search-configuration.md)  and  [DROP TEXT SEARCH CONFIGURATION](drop-text-search-configuration.md)

