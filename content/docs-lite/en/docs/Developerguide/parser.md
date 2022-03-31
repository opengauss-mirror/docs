# Parser<a name="EN-US_TOPIC_0289900919"></a>

Text search parsers are responsible for splitting raw document text into tokens and identifying each token's type, where the type set is defined by the parser itself. Note that a parser does not modify the text; it simply identifies plausible word boundaries. Because of this limit, there is less need for application-specific custom parsers than there is for custom dictionaries.

Currently, openGauss provides the following built-in parsers: pg\_catalog.default for English configuration, and pg\_catalog.ngram and pg\_catalog.pound for full text search in texts containing Chinese, or both Chinese and English.

The built-in parser is named  **pg\_catalog.default**. It recognizes 23 token types, shown in  [Table 1](#en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_t0a8cd80932c5462fbea1e45540d72aea).

**Table  1**  Token types of the default parser

<a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_t0a8cd80932c5462fbea1e45540d72aea"></a>
<table><thead align="left"><tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r6d3e83ae95a24986984a19afd7b07b7e"><th class="cellrowborder" valign="top" width="25.25%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ada54e8ed9c3c48d78b5b1f8d2cadd6db"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ada54e8ed9c3c48d78b5b1f8d2cadd6db"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ada54e8ed9c3c48d78b5b1f8d2cadd6db"></a>Alias</p>
</th>
<th class="cellrowborder" valign="top" width="35.78%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a331968dcf1f647cfbe31d29affbc6241"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a331968dcf1f647cfbe31d29affbc6241"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a331968dcf1f647cfbe31d29affbc6241"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="38.97%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a757e47d5232f4e78bb84274fc4b42eec"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a757e47d5232f4e78bb84274fc4b42eec"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a757e47d5232f4e78bb84274fc4b42eec"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rf557e885e22d48868f5c28d78edbecca"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_abb04ff6b1f0541b588c09a4b1cfd4bd7"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_abb04ff6b1f0541b588c09a4b1cfd4bd7"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_abb04ff6b1f0541b588c09a4b1cfd4bd7"></a>asciiword</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aad586fc214024fc0b2d2bb36c0a11351"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aad586fc214024fc0b2d2bb36c0a11351"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aad586fc214024fc0b2d2bb36c0a11351"></a>Word, all ASCII letters</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad76fd9b569744e0a84c065ac35d84c43"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad76fd9b569744e0a84c065ac35d84c43"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad76fd9b569744e0a84c065ac35d84c43"></a>elephant</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rd50b024a00bb494f857a5deb0a1af99b"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a8dc9172c01ad4d37a363d4051ab9634e"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a8dc9172c01ad4d37a363d4051ab9634e"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a8dc9172c01ad4d37a363d4051ab9634e"></a>word</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a756c6fdc29624414bc1d67f3fecc4b53"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a756c6fdc29624414bc1d67f3fecc4b53"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a756c6fdc29624414bc1d67f3fecc4b53"></a>Word, all letters</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a50efc01bcd554df59d267041212ad637"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a50efc01bcd554df59d267041212ad637"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a50efc01bcd554df59d267041212ad637"></a>ma&ntilde;ana</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r2fdba4f4aa12422c8f57d34486d0839d"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afe0891fcde684559b0844730022e790f"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afe0891fcde684559b0844730022e790f"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afe0891fcde684559b0844730022e790f"></a>numword</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a963a8080d4b64861aa3894baf000f7c1"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a963a8080d4b64861aa3894baf000f7c1"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a963a8080d4b64861aa3894baf000f7c1"></a>Word, letters and digits</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad0a598bf786342f08a902aa9539e6dde"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad0a598bf786342f08a902aa9539e6dde"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad0a598bf786342f08a902aa9539e6dde"></a>beta1</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r8dcc0785e3fe40b787933115177e4f40"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab92d1e5afaf3482a95dc30d0fa3938ee"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab92d1e5afaf3482a95dc30d0fa3938ee"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab92d1e5afaf3482a95dc30d0fa3938ee"></a>asciihword</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a943bb4f7b97546d7be85ea172553a047"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a943bb4f7b97546d7be85ea172553a047"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a943bb4f7b97546d7be85ea172553a047"></a>Hyphenated word, all ASCII</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab94c5b955dfd4085897b8838051540e4"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab94c5b955dfd4085897b8838051540e4"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab94c5b955dfd4085897b8838051540e4"></a>up-to-date</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r089a7c65259f40868d45b610e350e971"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a579e513c12034d88b0c3df1cd5df488e"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a579e513c12034d88b0c3df1cd5df488e"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a579e513c12034d88b0c3df1cd5df488e"></a>hword</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a5189799482b64a5995ba8ad99f008515"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a5189799482b64a5995ba8ad99f008515"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a5189799482b64a5995ba8ad99f008515"></a>Hyphenated word, all letters</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a22d8e1cc0b6742f2a07728508cb85831"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a22d8e1cc0b6742f2a07728508cb85831"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a22d8e1cc0b6742f2a07728508cb85831"></a>l&oacute;gico-matem&aacute;tica</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r39d16f229d8f46edb91f55ab2d7ce70f"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_acd69bd9b85ab4cf884829d61d47b1e61"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_acd69bd9b85ab4cf884829d61d47b1e61"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_acd69bd9b85ab4cf884829d61d47b1e61"></a>numhword</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a895c9d0fc4104570a24baaf201ec688d"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a895c9d0fc4104570a24baaf201ec688d"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a895c9d0fc4104570a24baaf201ec688d"></a>Hyphenated word, letters and digits</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2030105cdc6349e59ab894e7717fdf1f"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2030105cdc6349e59ab894e7717fdf1f"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2030105cdc6349e59ab894e7717fdf1f"></a>openGauss-beta1</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r0a3e48603e134d838960625669dc487f"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad8d362115c7047968f1603d946136706"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad8d362115c7047968f1603d946136706"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad8d362115c7047968f1603d946136706"></a>hword_asciipart</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7e4093e869234b76bfa42b15d22a6843"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7e4093e869234b76bfa42b15d22a6843"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7e4093e869234b76bfa42b15d22a6843"></a>Hyphenated word part, all ASCII</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a0d22f36e7c824b0fb327499eb70b186f"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a0d22f36e7c824b0fb327499eb70b186f"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a0d22f36e7c824b0fb327499eb70b186f"></a>openGauss in the context openGauss-beta1</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rb21c09cd48bc4194bcc9b4a4d6164a42"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a76406de6f622496cae72b81f2443bd55"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a76406de6f622496cae72b81f2443bd55"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a76406de6f622496cae72b81f2443bd55"></a>hword_part</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a04f8302062874474b26ff1664ec45adb"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a04f8302062874474b26ff1664ec45adb"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a04f8302062874474b26ff1664ec45adb"></a>Hyphenated word part, all letters</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2402c86861c94abb985f5f9663caadc9"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2402c86861c94abb985f5f9663caadc9"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2402c86861c94abb985f5f9663caadc9"></a>l&oacute;gico or matem&aacute;tica in the context l&oacute;gico-matem&aacute;tica</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r65c7e30f3c3b45378ed8ed48485de2b2"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a0bad49be95a24290a25eaf4928685468"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a0bad49be95a24290a25eaf4928685468"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a0bad49be95a24290a25eaf4928685468"></a>hword_numpart</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aadc49e5b9888464fadcb9becca0c1e21"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aadc49e5b9888464fadcb9becca0c1e21"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aadc49e5b9888464fadcb9becca0c1e21"></a>Hyphenated word part, letters and digits</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab7f927e880c845458b9fa1e73b48a4fc"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab7f927e880c845458b9fa1e73b48a4fc"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab7f927e880c845458b9fa1e73b48a4fc"></a>beta1 in the context openGauss-beta1</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rc4fe520c16f54a2cbd7066376c593051"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e73f019c30e4be8916fa5fefb17aee1"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e73f019c30e4be8916fa5fefb17aee1"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e73f019c30e4be8916fa5fefb17aee1"></a>email</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a1d8a1f22d81948c387a6a0aed99ceecb"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a1d8a1f22d81948c387a6a0aed99ceecb"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a1d8a1f22d81948c387a6a0aed99ceecb"></a>Email address</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7604428bf3e442789d8b1b20b9099fc3"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7604428bf3e442789d8b1b20b9099fc3"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7604428bf3e442789d8b1b20b9099fc3"></a>foo@example.com</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r58032a7d6666408cb83b65d8db41af79"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae923a146cca74b85af12a5009bc5499e"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae923a146cca74b85af12a5009bc5499e"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae923a146cca74b85af12a5009bc5499e"></a>protocol</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e50ac818f1641d0bf46b0e251718312"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e50ac818f1641d0bf46b0e251718312"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e50ac818f1641d0bf46b0e251718312"></a>Protocol head</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2a51c6c25d9247c48081019b60b879f3"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2a51c6c25d9247c48081019b60b879f3"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2a51c6c25d9247c48081019b60b879f3"></a>http://</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rf5b6bbcc4c174f1088014352cd29cfa9"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a3bd339a243e84c3fa7d7790182dfcf92"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a3bd339a243e84c3fa7d7790182dfcf92"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a3bd339a243e84c3fa7d7790182dfcf92"></a>url</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p922809192934"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p922809192934"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p922809192934"></a>URL</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a9ce8e2a78f54481082bb461a9484ab42"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a9ce8e2a78f54481082bb461a9484ab42"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a9ce8e2a78f54481082bb461a9484ab42"></a>example.com/stuff/index.html</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r4f2c70c20813442f9b5a8c95836327b0"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a86c1cd4d64c14c6388a3d54cc0811a87"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a86c1cd4d64c14c6388a3d54cc0811a87"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a86c1cd4d64c14c6388a3d54cc0811a87"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afde01017682b4b6daae91a3f37bc077d"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afde01017682b4b6daae91a3f37bc077d"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afde01017682b4b6daae91a3f37bc077d"></a>Host</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a82ec91e1ddac432386a3489b0e3473cd"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a82ec91e1ddac432386a3489b0e3473cd"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a82ec91e1ddac432386a3489b0e3473cd"></a>example.com</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r42fc5fa9f06248be8bed055b8e89eed1"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac5915eeb72414998ae8cc8d34fdc07a9"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac5915eeb72414998ae8cc8d34fdc07a9"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac5915eeb72414998ae8cc8d34fdc07a9"></a>url_path</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4c451dc0badb485a9575207b4eb20b12"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4c451dc0badb485a9575207b4eb20b12"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4c451dc0badb485a9575207b4eb20b12"></a>URL path</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a3a0150ac18b84a14be83416957055991"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a3a0150ac18b84a14be83416957055991"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a3a0150ac18b84a14be83416957055991"></a>/stuff/index.html, in the context of a URL</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rea2b44bb9a824f9285bf8e49938c7f5d"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a6bebd323b2064beeb3d97457690fb84e"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a6bebd323b2064beeb3d97457690fb84e"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a6bebd323b2064beeb3d97457690fb84e"></a>file</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7a18d66d376740c18e443a30048e7472"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7a18d66d376740c18e443a30048e7472"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7a18d66d376740c18e443a30048e7472"></a>File or path name</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aba2f8e4407ea4dd387cd035b5a79acb5"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aba2f8e4407ea4dd387cd035b5a79acb5"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aba2f8e4407ea4dd387cd035b5a79acb5"></a>/usr/local/foo.txt, if not within a URL</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r492fc763db8f4fa1a599028ea252a5c0"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae9199a0d30014ce9997a6879ff8e47a4"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae9199a0d30014ce9997a6879ff8e47a4"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae9199a0d30014ce9997a6879ff8e47a4"></a>sfloat</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae88d4d9df38346618ba3b1502458a3cb"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae88d4d9df38346618ba3b1502458a3cb"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae88d4d9df38346618ba3b1502458a3cb"></a>Scientific notation</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_af38fe810082045d9890629e516708685"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_af38fe810082045d9890629e516708685"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_af38fe810082045d9890629e516708685"></a>-1.23E+56</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r3dbb470a3c074992b9529ef13c67ac73"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_abed7f64e5b5c4981bfa9f273d61cf0e2"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_abed7f64e5b5c4981bfa9f273d61cf0e2"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_abed7f64e5b5c4981bfa9f273d61cf0e2"></a>float</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aba118bdb12a145019d8149a2a5562ceb"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aba118bdb12a145019d8149a2a5562ceb"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aba118bdb12a145019d8149a2a5562ceb"></a>Decimal notation</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a80e0e7cd669c4700b7eec27b5a19223a"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a80e0e7cd669c4700b7eec27b5a19223a"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a80e0e7cd669c4700b7eec27b5a19223a"></a>-1.234</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r49bec12d25f54bd084e5522fd8ac4b4d"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a12d651d867e44455a737ce9ffa761245"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a12d651d867e44455a737ce9ffa761245"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a12d651d867e44455a737ce9ffa761245"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a77a0baae36084dfe8f24f69214427a0d"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a77a0baae36084dfe8f24f69214427a0d"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a77a0baae36084dfe8f24f69214427a0d"></a>Signed integer</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab91f1fcf29e244998e60fc025bee038b"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab91f1fcf29e244998e60fc025bee038b"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab91f1fcf29e244998e60fc025bee038b"></a>-1234</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r85777aabf0fa41e98deaef21adc831bc"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_affdf6503cf2c4e48a30dd9874c114c7f"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_affdf6503cf2c4e48a30dd9874c114c7f"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_affdf6503cf2c4e48a30dd9874c114c7f"></a>uint</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac1f52978bf4443ebab644739cbaafbb6"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac1f52978bf4443ebab644739cbaafbb6"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac1f52978bf4443ebab644739cbaafbb6"></a>Unsigned integer</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a98aeb921f32a45638b033a66b00b64e3"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a98aeb921f32a45638b033a66b00b64e3"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a98aeb921f32a45638b033a66b00b64e3"></a>1234</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r1d957d8bb325492e9bd535ac08d1fa89"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab1852ed8eedb4cf699999f1467b4ff42"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab1852ed8eedb4cf699999f1467b4ff42"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab1852ed8eedb4cf699999f1467b4ff42"></a>version</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aa2bc3873f44d4a25a01dd68cd72af63b"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aa2bc3873f44d4a25a01dd68cd72af63b"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aa2bc3873f44d4a25a01dd68cd72af63b"></a>Version number</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad66a765c8f9646d6af4effcdcb62d631"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad66a765c8f9646d6af4effcdcb62d631"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ad66a765c8f9646d6af4effcdcb62d631"></a>8.3.0</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r715bbd01e72a4c52bf9d965790058efa"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a23a08872186f4cbc9cd08c62e6fcd37a"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a23a08872186f4cbc9cd08c62e6fcd37a"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a23a08872186f4cbc9cd08c62e6fcd37a"></a>tag</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a8d8d70324c4b44ea8e0824737b4825f0"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a8d8d70324c4b44ea8e0824737b4825f0"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a8d8d70324c4b44ea8e0824737b4825f0"></a>XML tag</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac1b20d286950463d8878f926121a6bc6"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac1b20d286950463d8878f926121a6bc6"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac1b20d286950463d8878f926121a6bc6"></a>&lt;a href="dictionaries.html"&gt;</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r1cd1a9c2c40a4d998c738cad8bc5962e"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab35e87f2333a4cabbac192c48d541a1c"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab35e87f2333a4cabbac192c48d541a1c"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ab35e87f2333a4cabbac192c48d541a1c"></a>entity</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac2bf520715524fbf9e75b88f01f802f8"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac2bf520715524fbf9e75b88f01f802f8"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ac2bf520715524fbf9e75b88f01f802f8"></a>XML entity</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afe23b44ca36643a2b9dac199684dc82c"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afe23b44ca36643a2b9dac199684dc82c"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afe23b44ca36643a2b9dac199684dc82c"></a>&amp;amp;</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rf7edc0d1c2904d1aaf4919db6bd8c99c"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a882f19736ab546d88820311fb8650eaa"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a882f19736ab546d88820311fb8650eaa"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a882f19736ab546d88820311fb8650eaa"></a>blank</p>
</td>
<td class="cellrowborder" valign="top" width="35.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_adc798dbd8e2f417eb3f69c383a852ada"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_adc798dbd8e2f417eb3f69c383a852ada"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_adc798dbd8e2f417eb3f69c383a852ada"></a>Space symbols</p>
</td>
<td class="cellrowborder" valign="top" width="38.97%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2f79bc171bca4d74ba3db53aacef8a1f"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2f79bc171bca4d74ba3db53aacef8a1f"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a2f79bc171bca4d74ba3db53aacef8a1f"></a>(any whitespace or punctuation not otherwise recognized)</p>
</td>
</tr>
</tbody>
</table>

Note: The parser's notion of a "letter" is determined by the database's locale setting, specifically  **lc\_ctype**. Words containing only the basic ASCII letters are reported as a separate token type, since it is sometimes useful to distinguish them. In most European languages, token types word and asciiword should be treated alike.

**email**  does not support all valid email characters as defined by RFC 5322. Specifically, the only non-alphanumeric characters supported for email usernames are period, dash, and underscore.

It is possible for the parser to identify overlapping tokens in the same piece of text. For example, a hyphenated word will be reported both as the entire word and as each component.

```
openGauss=# SELECT alias, description, token FROM ts_debug('english','foo-bar-beta1');
      alias      |               description                |     token     
-----------------+------------------------------------------+---------------
 numhword        | Hyphenated word, letters and digits      | foo-bar-beta1
 hword_asciipart | Hyphenated word part, all ASCII          | foo
 blank           | Space symbols                            | -
 hword_asciipart | Hyphenated word part, all ASCII          | bar
 blank           | Space symbols                            | -
 hword_numpart   | Hyphenated word part, letters and digits | beta1
```

This behavior is desirable since it allows searches to work for both the whole compound word and for components. Here is another instructive example: 

```
openGauss=# SELECT alias, description, token FROM ts_debug('english','http://example.com/stuff/index.html');
  alias   |  description  |            token             
----------+---------------+------------------------------
 protocol | Protocol head | http://
 url      | URL           | example.com/stuff/index.html
 host     | Host          | example.com
 url_path | URL path      | /stuff/index.html
```

N-gram is a mechanical word segmentation method, and applies to no semantic Chinese segmentation scenarios. The N-gram segmentation method ensures the completeness of the segmentation. However, to cover all the possibilities, it adds unnecessary words to the index, resulting in a large number of index items. N-gram supports Chinese coding, including GBK and UTF-8, and has six built-in token types, as shown in  [Table 2](#en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_t1ca85b79b4344a59a8aca574c9fdc12f).

**Table  2**  Token types

<a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_t1ca85b79b4344a59a8aca574c9fdc12f"></a>
<table><thead align="left"><tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r5daad08487584e29aa6e6ad7f5a3edcd"><th class="cellrowborder" valign="top" width="33.08%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afd61d293ec6840938510b01e9770512f"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afd61d293ec6840938510b01e9770512f"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_afd61d293ec6840938510b01e9770512f"></a>Alias</p>
</th>
<th class="cellrowborder" valign="top" width="66.92%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7be9ab09335f41e39e0ccb3152427ef7"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7be9ab09335f41e39e0ccb3152427ef7"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a7be9ab09335f41e39e0ccb3152427ef7"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r047aa31b43af4aeb88a1c80c165a6710"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"></a>zh_words</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"></a>chinese words</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r8081f8a1ca494dff85307d299d3ab528"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"></a>en_word</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p131616692420"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p131616692420"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p131616692420"></a>english word</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_rb092b2f0586241e08c5b35bbc1e6b715"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p624572592420"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p624572592420"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p624572592420"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"></a>numeric data</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r4ec86a23bd3049d3a49a00ee9900f1e8"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p561868592420"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p561868592420"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_en-us_topic_0058966253_p561868592420"></a>alnum</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a5aff11a3f4ec49ffb548481d7592f801"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a5aff11a3f4ec49ffb548481d7592f801"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a5aff11a3f4ec49ffb548481d7592f801"></a>alnum string</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r11b72cafa0f0404a8dabf0ec4b6d54f2"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae4096e21155f4a799c2422ce2686ef6e"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae4096e21155f4a799c2422ce2686ef6e"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_ae4096e21155f4a799c2422ce2686ef6e"></a>grapsymbol</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e34e035f7594c16bdc6e5eaa87b3cda"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e34e035f7594c16bdc6e5eaa87b3cda"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_a4e34e035f7594c16bdc6e5eaa87b3cda"></a>graphic symbol</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_r5f6377d2a27f463dab1928a2f63b02b9"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_af7befa5749fe4a3985d4a2b0dd9e02ec"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_af7befa5749fe4a3985d4a2b0dd9e02ec"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_af7befa5749fe4a3985d4a2b0dd9e02ec"></a>multisymbol</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aeb29027862ac4f0ab56633fb222c5163"><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aeb29027862ac4f0ab56633fb222c5163"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_en-us_topic_0059778480_aeb29027862ac4f0ab56633fb222c5163"></a>multiple symbol</p>
</td>
</tr>
</tbody>
</table>

Pound segments words in a fixed format. It is used to segment to-be-parsed nonsense Chinese and English words that are separated by fixed separators. It supports Chinese encoding \(including GBK and UTF8\) and English encoding \(including ASCII\). Six built-in token types are available, as listed in  [Table 3](#en-us_topic_0283137134_en-us_topic_0237122032_table18356541133518). Five types of delimiters are supported, as shown in  [Table 4](#en-us_topic_0283137134_en-us_topic_0237122032_table14245115444310), and the default delimiter is \#. The maximum length of a token is 256 characters.

**Table  3**  Token types

<a name="en-us_topic_0283137134_en-us_topic_0237122032_table18356541133518"></a>
<table><thead align="left"><tr id="en-us_topic_0283137134_en-us_topic_0237122032_row2035613418358"><th class="cellrowborder" valign="top" width="33%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1198305217355"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1198305217355"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1198305217355"></a>Alias</p>
</th>
<th class="cellrowborder" valign="top" width="67%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137134_en-us_topic_0237122032_p298875213353"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p298875213353"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p298875213353"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137134_en-us_topic_0237122032_row203561341183514"><td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p3994352133519"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p3994352133519"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p3994352133519"></a>zh_words</p>
</td>
<td class="cellrowborder" valign="top" width="67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1299775243510"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1299775243510"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1299775243510"></a>chinese words</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row1135611412359"><td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p111115363519"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p111115363519"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p111115363519"></a>en_word</p>
</td>
<td class="cellrowborder" valign="top" width="67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p17335323516"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p17335323516"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p17335323516"></a>english word</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row7356341113510"><td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p13617533350"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p13617533350"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p13617533350"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1393533359"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1393533359"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1393533359"></a>numeric data</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row8356641163510"><td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p912165312357"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p912165312357"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p912165312357"></a>alnum</p>
</td>
<td class="cellrowborder" valign="top" width="67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p16152535351"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p16152535351"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p16152535351"></a>alnum string</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row2356341183518"><td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p619135353514"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p619135353514"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p619135353514"></a>grapsymbol</p>
</td>
<td class="cellrowborder" valign="top" width="67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p3215534359"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p3215534359"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p3215534359"></a>graphic symbol</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row1035684133514"><td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p92595323518"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p92595323518"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p92595323518"></a>multisymbol</p>
</td>
<td class="cellrowborder" valign="top" width="67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p2027953113519"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p2027953113519"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p2027953113519"></a>multiple symbol</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Separator types

<a name="en-us_topic_0283137134_en-us_topic_0237122032_table14245115444310"></a>
<table><thead align="left"><tr id="en-us_topic_0283137134_en-us_topic_0237122032_row13245145420435"><th class="cellrowborder" valign="top" width="34%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137134_en-us_topic_0237122032_p17245155411436"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p17245155411436"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p17245155411436"></a>Separator</p>
</th>
<th class="cellrowborder" valign="top" width="66%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1943018349445"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1943018349445"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1943018349445"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137134_en-us_topic_0237122032_row9245165416438"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1577178104417"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1577178104417"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1577178104417"></a>@</p>
</td>
<td class="cellrowborder" valign="top" width="66%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p359820140491"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p359820140491"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p359820140491"></a>Special character</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row424512543432"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p177752844415"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p177752844415"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p177752844415"></a>#</p>
</td>
<td class="cellrowborder" valign="top" width="66%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p8245854154315"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p8245854154315"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p8245854154315"></a>Special character</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row62467541434"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1377958114410"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1377958114410"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1377958114410"></a>$</p>
</td>
<td class="cellrowborder" valign="top" width="66%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1246754104311"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1246754104311"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1246754104311"></a>Special character</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row524635434319"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p678218154410"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p678218154410"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p678218154410"></a>%</p>
</td>
<td class="cellrowborder" valign="top" width="66%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p1024616544438"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1024616544438"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p1024616544438"></a>Special character</p>
</td>
</tr>
<tr id="en-us_topic_0283137134_en-us_topic_0237122032_row1324655444310"><td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p127865812449"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p127865812449"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p127865812449"></a>/</p>
</td>
<td class="cellrowborder" valign="top" width="66%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137134_en-us_topic_0237122032_p2024614546435"><a name="en-us_topic_0283137134_en-us_topic_0237122032_p2024614546435"></a><a name="en-us_topic_0283137134_en-us_topic_0237122032_p2024614546435"></a>Special character</p>
</td>
</tr>
</tbody>
</table>

