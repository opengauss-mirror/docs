# Establishing Secure TCP/IP Connections in SSL Mode<a name="EN-US_TOPIC_0289900924"></a>

## Background<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_section1957281971410"></a>

openGauss supports the standard SSL \(TLS 1.2\). As a highly secure protocol, SSL authenticates bidirectional identification between the server and client using digital signatures and digital certificates to ensure secure data transmission.

## Prerequisites<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s2d0511630ed840d180c92fa6bdecb54b"></a>

Formal certificates and keys for servers and clients have been obtained from the Certificate Authority \(CA\). Assume the private key and certificate for the server are  **server.key**  and  **server.crt**, the private key and certificate for the client are  **client.key**  and  **client.crt**, and the CA root certificate is  **cacert.pem**.

## Precautions<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s014a1b1bc72240bb9bbbad5e064bf6d3"></a>

-   When a user remotely accesses the primary node of the database, the SHA-256 authentication method is used.
-   If internal servers are connected with each other, the trust authentication mode must be used. IP address whitelist authentication is supported.

## Procedure<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s559f387461c440218ff2b33983a69004"></a>

After a database is deployed, openGauss enables the SSL authentication mode by default. The server certificate, key, and root certificates have been configured. You need to set client parameters.

Set digital certificate parameters related to SSL authentication. For details, see  [Table 1](#en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_table56811076112938).

-   Configure client parameters.

    The default client certificate, key, root certificate, and key encrypted file have been obtained from the CA authentication center. Assume that the certificate, key, and root certificate are stored in the  **/home/omm**  directory.

    For bidirectional authentication, set the following parameters:

    ```
    export PGSSLCERT="/home/omm/client.crt"
    export PGSSLKEY="/home/omm/client.key"
    export PGSSLMODE="verify-ca"
    export PGSSLROOTCERT="/home/omm/cacert.pem"
    ```

    For unidirectional authentication, set the following parameters:

    ```
    export PGSSLMODE="verify-ca"
    export PGSSLROOTCERT="/home/omm/cacert.pem"
    ```

-   Change the client key permission.

    The permission of the client root certificate, key, certificate, and encrypted key file should be 600. Otherwise, the client cannot connect to openGauss through SSL.

    ```
    chmod 600 client.key
    chmod 600 client.crt
    chmod 600 client.key.cipher
    chmod 600 client.key.rand
    chmod 600 cacert.pem
    ```


>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>You are advised to use bidirectional authentication for security purposes.
>The environment variables configured for a client must contain the absolute file paths.

**Table  1**  Authentication modes

<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_table56811076112938"></a>
<table><thead align="left"><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_row57505105112938"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p27401952112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p27401952112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p27401952112938"></a>Authentication Mode</p>
</th>
<th class="cellrowborder" valign="top" width="26.912691269126913%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p4965635112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p4965635112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p4965635112938"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.73337333733373%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p17189474112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p17189474112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p17189474112938"></a>Client Environment Variable Setting</p>
</th>
<th class="cellrowborder" valign="top" width="25.032503250325032%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p1365221916913"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p1365221916913"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p1365221916913"></a>Maintenance Suggestion</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_row50170168112938"><td class="cellrowborder" valign="top" width="14.321432143214322%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p37251814112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p37251814112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p37251814112938"></a>Bidirectional authentication (recommended)</p>
</td>
<td class="cellrowborder" valign="top" width="26.912691269126913%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p64606997112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p64606997112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p64606997112938"></a>The client verifies the server's certificate and the server verifies the client's certificate. Connection can be set up after the verification is successful.</p>
</td>
<td class="cellrowborder" valign="top" width="33.73337333733373%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p33178696112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p33178696112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p33178696112938"></a>Set the following environment variables:</p>
<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ul30172812112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ul30172812112938"></a><ul id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ul30172812112938"><li><em id="i1174928172315"><a name="i1174928172315"></a><a name="i1174928172315"></a>PGSSLCERT</em></li><li><em id="i15323211162316"><a name="i15323211162316"></a><a name="i15323211162316"></a>PGSSLKEY</em></li><li><em id="i183611132232"><a name="i183611132232"></a><a name="i183611132232"></a>PGSSLROOTCERT</em></li><li><em id="i0180161662315"><a name="i0180161662315"></a><a name="i0180161662315"></a>PGSSLMODE</em></li></ul>
</td>
<td class="cellrowborder" valign="top" width="25.032503250325032%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p33366049163212"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p33366049163212"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p33366049163212"></a>This authentication mode is applicable to scenarios that require high data security. When using this method, you are advised to set the <em id="i842352697104237"><a name="i842352697104237"></a><a name="i842352697104237"></a>PGSSLMODE</em> client variable to <strong id="b842352706104251"><a name="b842352706104251"></a><a name="b842352706104251"></a>verify-ca</strong> for network data security purposes.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_row39901290112938"><td class="cellrowborder" valign="top" width="14.321432143214322%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p10779087112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p10779087112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p10779087112938"></a>Unidirectional authentication</p>
</td>
<td class="cellrowborder" valign="top" width="26.912691269126913%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p690877112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p690877112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p690877112938"></a>The client verifies the server's certificate, whereas the server does not verify the client's certificate. The server loads the certificate information and sends it to the client. The client verifies the server's certificate according to the root certificate.</p>
</td>
<td class="cellrowborder" valign="top" width="33.73337333733373%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p3537301112938"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p3537301112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p3537301112938"></a>Set the following environment variables:</p>
<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ul31835712112938"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ul31835712112938"></a><ul id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ul31835712112938"><li><em id="i031251972310"><a name="i031251972310"></a><a name="i031251972310"></a>PGSSLROOTCERT</em></li><li><em id="i3189152010232"><a name="i3189152010232"></a><a name="i3189152010232"></a>PGSSLMODE</em></li></ul>
</td>
<td class="cellrowborder" valign="top" width="25.032503250325032%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p37934227163252"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p37934227163252"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_p37934227163252"></a>To prevent TCP-based link spoofing, you are advised to use the SSL certificate authentication. In addition to configuring client root certificate, you are advised to set the <em id="i842352697104428"><a name="i842352697104428"></a><a name="i842352697104428"></a>PGSSLMODE</em> variable to <strong id="b842352706104439"><a name="b842352706104439"></a><a name="b842352706104439"></a>verify-ca</strong> on the client.</p>
</td>
</tr>
</tbody>
</table>

## Reference<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_sf0c701b38d03417b8c969d148cd70223"></a>

In the  **postgresql.conf**  file on the server, set the related parameters. For details, see  [Table 2](#en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_tccd28484be8c47678b529d6ccd34d1fd).

**Table  2**  Server parameters

<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_tccd28484be8c47678b529d6ccd34d1fd"></a>
<table><thead align="left"><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_rfc38f1e01b984cbdb2d8a1532a8a03fc"><th class="cellrowborder" valign="top" width="17.5017501750175%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2b5105ab19e545cc8c7534a46382e95e"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2b5105ab19e545cc8c7534a46382e95e"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2b5105ab19e545cc8c7534a46382e95e"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="43.90439043904391%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a460f7f3f641245cebc4d5df9adeb49f4"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a460f7f3f641245cebc4d5df9adeb49f4"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a460f7f3f641245cebc4d5df9adeb49f4"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="38.59385938593859%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab74794d561694cd093aa8fece826e491"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab74794d561694cd093aa8fece826e491"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab74794d561694cd093aa8fece826e491"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ra7cfeb3d3640465baa613b12eed714b8"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af91f42c98f7d427cbd1d84a4dc3306e6"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af91f42c98f7d427cbd1d84a4dc3306e6"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af91f42c98f7d427cbd1d84a4dc3306e6"></a>ssl</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa3b7ea6149674f189cc4f22b92f8a27b"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa3b7ea6149674f189cc4f22b92f8a27b"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa3b7ea6149674f189cc4f22b92f8a27b"></a>Specifies whether to enable the SSL function.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ub29da9afdd534c639acc4b4da9872430"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ub29da9afdd534c639acc4b4da9872430"></a><ul id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ub29da9afdd534c639acc4b4da9872430"><li><strong id="b525583464612"><a name="b525583464612"></a><a name="b525583464612"></a>on</strong>: indicates that SSL is enabled.</li><li><strong id="b11311104184618"><a name="b11311104184618"></a><a name="b11311104184618"></a>off</strong>: indicates that SSL is disabled.</li></ul>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a12f6e50081174f3484f1b92f3a022b55"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a12f6e50081174f3484f1b92f3a022b55"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a12f6e50081174f3484f1b92f3a022b55"></a>Default value: <strong id="b11720444534"><a name="b11720444534"></a><a name="b11720444534"></a>on</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row1718919547"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p147198175416"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p147198175416"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p147198175416"></a>require_ssl</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p107191816542"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p107191816542"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p107191816542"></a>Specifies whether the server requires the SSL connection. This parameter is valid only when <strong id="b3842832104717"><a name="b3842832104717"></a><a name="b3842832104717"></a>ssl</strong> is set to <strong id="b12843173204712"><a name="b12843173204712"></a><a name="b12843173204712"></a>on</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137035_en-us_topic_0237121092_ul9729101110562"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_ul9729101110562"></a><ul id="en-us_topic_0283137035_en-us_topic_0237121092_ul9729101110562"><li><strong id="b149684352473"><a name="b149684352473"></a><a name="b149684352473"></a>on</strong>: The server requires the SSL connection.</li><li><strong id="b16829637144718"><a name="b16829637144718"></a><a name="b16829637144718"></a>off</strong>: The server does not require the SSL connection.</li></ul>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_p27375114565"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p27375114565"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p27375114565"></a>Default value: <strong id="b173060501333"><a name="b173060501333"></a><a name="b173060501333"></a>off</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_rf42bf8261c33449d81f47597005cc921"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab54fc74b77a947758ad07edafe3242c6"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab54fc74b77a947758ad07edafe3242c6"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab54fc74b77a947758ad07edafe3242c6"></a>ssl_cert_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af7e1c5cfb5564347bf83b9fe7c30ce98"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af7e1c5cfb5564347bf83b9fe7c30ce98"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af7e1c5cfb5564347bf83b9fe7c30ce98"></a>Certificate files for the server, including the public key. The certificate proves the legal identity of the server and the public key is sent to the peer end for data encryption.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac39b64f03d7b4436bbd40702d7702f23"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac39b64f03d7b4436bbd40702d7702f23"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac39b64f03d7b4436bbd40702d7702f23"></a>Use the actual certificate name. The relative path is relative to the data directory.</p>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a664d0b1aef30486984fefff03da81069"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a664d0b1aef30486984fefff03da81069"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a664d0b1aef30486984fefff03da81069"></a>Default value: <strong id="b842352706174417"><a name="b842352706174417"></a><a name="b842352706174417"></a>server.crt</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r363a401628b24282abc3f1cdf73e8597"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a9b5c46beb9eb44e9aa256f3973f2d750"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a9b5c46beb9eb44e9aa256f3973f2d750"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a9b5c46beb9eb44e9aa256f3973f2d750"></a>ssl_key_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac598d3d36b3941baae002ea7f2f451c1"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac598d3d36b3941baae002ea7f2f451c1"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac598d3d36b3941baae002ea7f2f451c1"></a>Private key file for the server, used for decryption of data encrypted using the public key.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_afb7486cbf3084019a8ffc19bd84a04a7"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_afb7486cbf3084019a8ffc19bd84a04a7"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_afb7486cbf3084019a8ffc19bd84a04a7"></a>Use the actual private key name of the server. The relative path is relative to the data directory.</p>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a380bb8ec22cd4a0aab77a39e0812e50c"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a380bb8ec22cd4a0aab77a39e0812e50c"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a380bb8ec22cd4a0aab77a39e0812e50c"></a>Default value: <strong id="b27756595313"><a name="b27756595313"></a><a name="b27756595313"></a>server.key</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r74a3af8366084457820934fb79b845a2"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2c791fbe6c1c405f9c783ae7a14d6e11"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2c791fbe6c1c405f9c783ae7a14d6e11"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2c791fbe6c1c405f9c783ae7a14d6e11"></a>ssl_ca_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aec40bab9d4f94190bb6b26f658aaffb2"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aec40bab9d4f94190bb6b26f658aaffb2"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aec40bab9d4f94190bb6b26f658aaffb2"></a>Root certificate of the CA server. This parameter is optional and needs to be set only when the certificate of a client must be verified.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5abb69095bea46e38f4cf353c9ed5b15"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5abb69095bea46e38f4cf353c9ed5b15"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5abb69095bea46e38f4cf353c9ed5b15"></a>Use the name of the actual root certificate.</p>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aae7533ffb1414f0b9315ae7ef868ef6d"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aae7533ffb1414f0b9315ae7ef868ef6d"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aae7533ffb1414f0b9315ae7ef868ef6d"></a>Default value: <strong id="b1629141543218"><a name="b1629141543218"></a><a name="b1629141543218"></a>cacert.pem</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_rf5034120c8a7483d806fcadca9909168"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2ea6c96a90b74f7d8c0480f8076ad155"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2ea6c96a90b74f7d8c0480f8076ad155"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2ea6c96a90b74f7d8c0480f8076ad155"></a>ssl_crl_file</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ae39357cb70684494beacec110d82854b"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ae39357cb70684494beacec110d82854b"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ae39357cb70684494beacec110d82854b"></a>Certificate revocation list (CRL). If the certificate of a client is in the list, the certificate is invalid.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa7442d36d7e94641b8b0586bdeee56b0"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa7442d36d7e94641b8b0586bdeee56b0"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa7442d36d7e94641b8b0586bdeee56b0"></a>Use the actual name of the CRL.</p>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab90a25eee3f247249718b7fa80378416"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab90a25eee3f247249718b7fa80378416"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab90a25eee3f247249718b7fa80378416"></a>Default value: empty, indicating that there is no CRL.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r15ddd719d55f46d38e3976ec89f58988"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_acde59b1470614c1f889bf18ad6da40a6"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_acde59b1470614c1f889bf18ad6da40a6"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_acde59b1470614c1f889bf18ad6da40a6"></a>ssl_ciphers</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a6632087907ee43c8a83118fb87c7792c"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a6632087907ee43c8a83118fb87c7792c"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a6632087907ee43c8a83118fb87c7792c"></a>Encryption algorithm used for SSL communication.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a108418129ede48d1ad382b8cc2b14501"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a108418129ede48d1ad382b8cc2b14501"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a108418129ede48d1ad382b8cc2b14501"></a>For details about the supported encryption algorithms, see <a href="#en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_t34eea0830ef94be1a866f0410ba3eb07">Table 4</a>.</p>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ae891de4194c24665b2c263c7ee653fcc"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ae891de4194c24665b2c263c7ee653fcc"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ae891de4194c24665b2c263c7ee653fcc"></a>Default value: <strong id="b10760165528"><a name="b10760165528"></a><a name="b10760165528"></a>ALL</strong>, indicating that all supported encryption algorithms (excluding ADH, LOW, EXP, and MD5) can be used for the peer end.</p>
</td>
</tr>
<tr id="row16454163352512"><td class="cellrowborder" valign="top" width="17.5017501750175%" headers="mcps1.2.4.1.1 "><p id="p1571031184018"><a name="p1571031184018"></a><a name="p1571031184018"></a>ssl_cert_notify_time</p>
</td>
<td class="cellrowborder" valign="top" width="43.90439043904391%" headers="mcps1.2.4.1.2 "><p id="p37931124011"><a name="p37931124011"></a><a name="p37931124011"></a>Specifies the number of days prior to SSL server certificate expiration that a user will receive a reminder.</p>
</td>
<td class="cellrowborder" valign="top" width="38.59385938593859%" headers="mcps1.2.4.1.3 "><p id="p5723113402"><a name="p5723113402"></a><a name="p5723113402"></a>Set this parameter based on the site requirements.</p>
<p id="p1420821154316"><a name="p1420821154316"></a><a name="p1420821154316"></a><strong id="b1896293517535"><a name="b1896293517535"></a><a name="b1896293517535"></a>Default value</strong>: <strong id="b842352706171710"><a name="b842352706171710"></a><a name="b842352706171710"></a>90</strong></p>
</td>
</tr>
</tbody>
</table>

Configure environment variables related to SSL authentication on the client. For details, see  [Table 3](#en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_t1a20720af5504dc0ba3c5d0e8d1a028b).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The path of environment variables is set to  **/home/omm**  as an example. Replace it with the actual path.

**Table  3**  Client parameters

<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_t1a20720af5504dc0ba3c5d0e8d1a028b"></a>
<table><thead align="left"><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r075c7db3e29149b7935bd87da7c3f5e9"><th class="cellrowborder" valign="top" width="13.059999999999999%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aced8d9e6a1e9424c9f486cd2565a5f6b"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aced8d9e6a1e9424c9f486cd2565a5f6b"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aced8d9e6a1e9424c9f486cd2565a5f6b"></a>Environment Variable</p>
</th>
<th class="cellrowborder" valign="top" width="46.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af8aafa1cb5c2435b891d157ce1358aa3"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af8aafa1cb5c2435b891d157ce1358aa3"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af8aafa1cb5c2435b891d157ce1358aa3"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="40.61%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af868a291814e47088c551bf14923e305"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af868a291814e47088c551bf14923e305"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af868a291814e47088c551bf14923e305"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r63de0425aa9e48648eddee2052c34099"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a79f122f5e8864d49958a01e2599232e2"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a79f122f5e8864d49958a01e2599232e2"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a79f122f5e8864d49958a01e2599232e2"></a><em id="i598776856"><a name="i598776856"></a><a name="i598776856"></a>PGSSLCERT</em></p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a849a7114de984baa835520125891cc4c"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a849a7114de984baa835520125891cc4c"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a849a7114de984baa835520125891cc4c"></a>Client certificate file, including the client public key. The certificate proves the legal identity of the client and the public key is sent to the peer end for data encryption.</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aab9afb2d4ccb486584dc34925557eb5b"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aab9afb2d4ccb486584dc34925557eb5b"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aab9afb2d4ccb486584dc34925557eb5b"></a>Absolute path of a certificate file, for example:<pre class="screen" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_sd1ee55d896da429d8a382c764a33570f"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_sd1ee55d896da429d8a382c764a33570f"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_sd1ee55d896da429d8a382c764a33570f"></a><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0f79a57644854daaa7f0df3980c60d36"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0f79a57644854daaa7f0df3980c60d36"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0f79a57644854daaa7f0df3980c60d36"></a>export PGSSLCERT='</strong><em id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a175d9cc2e30e4403a0f6963f5320c59d"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a175d9cc2e30e4403a0f6963f5320c59d"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a175d9cc2e30e4403a0f6963f5320c59d"></a>/home/<span id="en-us_topic_0283137035_en-us_topic_0237121092_text81201061813"><a name="en-us_topic_0283137035_en-us_topic_0237121092_text81201061813"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_text81201061813"></a>omm</span>/client.crt</em><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa07fe7719cf14a08942946453726693d"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa07fe7719cf14a08942946453726693d"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aa07fe7719cf14a08942946453726693d"></a>'</strong></pre>
</div>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a659d086b20fd47b4998a10ba22739753"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a659d086b20fd47b4998a10ba22739753"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a659d086b20fd47b4998a10ba22739753"></a><strong id="b1441102114416"><a name="b1441102114416"></a><a name="b1441102114416"></a>Default value</strong>: empty</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r9b2094fa73ea44a7bf3381223937f92d"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2c015bd8e62a452ab7e647e7d56e65bf"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2c015bd8e62a452ab7e647e7d56e65bf"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a2c015bd8e62a452ab7e647e7d56e65bf"></a><em id="i1184668185"><a name="i1184668185"></a><a name="i1184668185"></a>PGSSLKEY</em></p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aaa8e11b80a95489c8a5ab1d3df31ca1a"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aaa8e11b80a95489c8a5ab1d3df31ca1a"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aaa8e11b80a95489c8a5ab1d3df31ca1a"></a>Private key file of the client, used to decrypt data encrypted using the public key</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a953393a0d05f4b8a8a379fc52554c838"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a953393a0d05f4b8a8a379fc52554c838"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a953393a0d05f4b8a8a379fc52554c838"></a>Absolute path of a certificate file, for example:<pre class="screen" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s65d035eba41841268050e954fe6c267d"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s65d035eba41841268050e954fe6c267d"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s65d035eba41841268050e954fe6c267d"></a><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab3e81ef48496427eb74fb938a002005e"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab3e81ef48496427eb74fb938a002005e"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab3e81ef48496427eb74fb938a002005e"></a>export PGSSLKEY='</strong><em id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_en-us_topic_0058967691_i162643549168"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_en-us_topic_0058967691_i162643549168"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_en-us_topic_0058967691_i162643549168"></a>/home/<span id="en-us_topic_0283137035_en-us_topic_0237121092_text949101441812"><a name="en-us_topic_0283137035_en-us_topic_0237121092_text949101441812"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_text949101441812"></a>omm</span>/client.key</em><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5a688b42a9104dd99057216f18858d1d"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5a688b42a9104dd99057216f18858d1d"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5a688b42a9104dd99057216f18858d1d"></a>'</strong></pre>
</div>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab15b4d40daf04a32b1d42d1defd838ba"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab15b4d40daf04a32b1d42d1defd838ba"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab15b4d40daf04a32b1d42d1defd838ba"></a><strong id="b15410112624114"><a name="b15410112624114"></a><a name="b15410112624114"></a>Default value</strong>: empty</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_rb472cd1e8b42453f9a0b255b07416f14"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a54a9c62cc83c4c749125c3d9bad6e67e"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a54a9c62cc83c4c749125c3d9bad6e67e"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a54a9c62cc83c4c749125c3d9bad6e67e"></a><em id="i1086504529"><a name="i1086504529"></a><a name="i1086504529"></a>PGSSLMODE</em></p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0c97d7d4943249a79adec5801937ecb7"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0c97d7d4943249a79adec5801937ecb7"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0c97d7d4943249a79adec5801937ecb7"></a>Specifies whether to negotiate with the server about SSL connection and specifies the priority of the SSL connection.</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aee9d6bd66fde45c2bfa2efab0cf85cee"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aee9d6bd66fde45c2bfa2efab0cf85cee"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aee9d6bd66fde45c2bfa2efab0cf85cee"></a><strong id="b842352706175214"><a name="b842352706175214"></a><a name="b842352706175214"></a>Value and meanings:</strong></p>
<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_u5a3aa83f2351407caf0185281284d463"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_u5a3aa83f2351407caf0185281284d463"></a><ul id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_u5a3aa83f2351407caf0185281284d463"><li><strong id="b775454645712"><a name="b775454645712"></a><a name="b775454645712"></a>disable</strong>: only tries setting up a non-SSL connection.</li><li><strong id="b4319154917571"><a name="b4319154917571"></a><a name="b4319154917571"></a>allow</strong>: tries setting up a non-SSL connection first, and then an SSL connection if the attempt fails.</li><li><strong id="en-us_topic_0058967691_b84235270614337"><a name="en-us_topic_0058967691_b84235270614337"></a><a name="en-us_topic_0058967691_b84235270614337"></a>prefer</strong>: tries setting up an SSL connection first, and then a non-SSL connection if the attempt fails.</li><li><strong id="en-us_topic_0058967691_b842352706144524"><a name="en-us_topic_0058967691_b842352706144524"></a><a name="en-us_topic_0058967691_b842352706144524"></a>require</strong>: only tries setting up an SSL connection. If there is a CA file, perform the verification according to the scenario in which the parameter is set to <strong id="b3629163218119"><a name="b3629163218119"></a><a name="b3629163218119"></a>verify-ca</strong>.</li><li><strong id="en-us_topic_0058967691_b842352706144535"><a name="en-us_topic_0058967691_b842352706144535"></a><a name="en-us_topic_0058967691_b842352706144535"></a>verify-ca</strong>: attempts to set up an SSL connection and checks whether the server certificate is issued by a trusted CA.</li><li><strong id="en-us_topic_0058967691_b84235270614466"><a name="en-us_topic_0058967691_b84235270614466"></a><a name="en-us_topic_0058967691_b84235270614466"></a>verify-full</strong>: tries setting up an SSL connection, checks whether the server certificate is issued by a trusted CA, and checks whether the host name of the server is the same as that in the certificate.</li></ul>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ad3fef165034244089c01c2d643a6ffdf"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ad3fef165034244089c01c2d643a6ffdf"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ad3fef165034244089c01c2d643a6ffdf"></a><strong id="b94761138134115"><a name="b94761138134115"></a><a name="b94761138134115"></a>Default value:</strong> <strong id="b1348215387413"><a name="b1348215387413"></a><a name="b1348215387413"></a>prefer</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_reab62f605d8b423f9ad0ce2714fe76e6"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a366d8b9fdb914a8b8e179afb9424bc5b"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a366d8b9fdb914a8b8e179afb9424bc5b"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a366d8b9fdb914a8b8e179afb9424bc5b"></a><em id="i440137917"><a name="i440137917"></a><a name="i440137917"></a>PGSSLROOTCERT</em></p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a32096b73c9114ef99b7d88064548fffa"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a32096b73c9114ef99b7d88064548fffa"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a32096b73c9114ef99b7d88064548fffa"></a>Root certificate file for issuing client certificates. The root certificate is used to verify the server certificate.</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a46db14e6a0f444368d713c0a3f5b03ee"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a46db14e6a0f444368d713c0a3f5b03ee"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a46db14e6a0f444368d713c0a3f5b03ee"></a>Absolute path of a certificate file, for example:<pre class="screen" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s2d94e458c7ab47a2aaaa15d97ffcc658"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s2d94e458c7ab47a2aaaa15d97ffcc658"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s2d94e458c7ab47a2aaaa15d97ffcc658"></a><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a3c27d775eb594e4da9c7caa99d55cc12"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a3c27d775eb594e4da9c7caa99d55cc12"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a3c27d775eb594e4da9c7caa99d55cc12"></a>export PGSSLROOTCERT='</strong><em id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af1aa145e4168496ca7de9d4182ac6b29"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af1aa145e4168496ca7de9d4182ac6b29"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_af1aa145e4168496ca7de9d4182ac6b29"></a>/home<em id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_en-us_topic_0058967691_i253753991625"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_en-us_topic_0058967691_i253753991625"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_en-us_topic_0058967691_i253753991625"></a>/<span id="en-us_topic_0283137035_en-us_topic_0237121092_text20381917161819"><a name="en-us_topic_0283137035_en-us_topic_0237121092_text20381917161819"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_text20381917161819"></a>omm</span></em>/certca.pem</em><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_accd1cbcc2abd4f279fed59b48ff1ce34"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_accd1cbcc2abd4f279fed59b48ff1ce34"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_accd1cbcc2abd4f279fed59b48ff1ce34"></a>'</strong></pre>
</div>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a271adf4f3e1848a3ae44f427f6fb983d"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a271adf4f3e1848a3ae44f427f6fb983d"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a271adf4f3e1848a3ae44f427f6fb983d"></a><strong id="b1186110424413"><a name="b1186110424413"></a><a name="b1186110424413"></a>Default value:</strong> empty</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r90ba7e36f5e447c29a5e6941da52c130"><td class="cellrowborder" valign="top" width="13.059999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aeb330e5acd614a59b7ea7742987fd0de"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aeb330e5acd614a59b7ea7742987fd0de"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aeb330e5acd614a59b7ea7742987fd0de"></a>PGSSLCRL</p>
</td>
<td class="cellrowborder" valign="top" width="46.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0d9a328c7578483497420c431d0fd818"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0d9a328c7578483497420c431d0fd818"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a0d9a328c7578483497420c431d0fd818"></a>CRL file for checking whether the server certificate is in the CRL. If it is, the certificate is invalid.</p>
</td>
<td class="cellrowborder" valign="top" width="40.61%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_abcf7b6ca0d9a47b7a15dae7cc7ce39ad"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_abcf7b6ca0d9a47b7a15dae7cc7ce39ad"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_abcf7b6ca0d9a47b7a15dae7cc7ce39ad"></a>Absolute path of a certificate file, for example:<pre class="screen" id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s819dac6238bb40ff947c71e379e48246"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s819dac6238bb40ff947c71e379e48246"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_s819dac6238bb40ff947c71e379e48246"></a><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aff55504ecb994bd7b61f641a7470146e"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aff55504ecb994bd7b61f641a7470146e"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_aff55504ecb994bd7b61f641a7470146e"></a>export PGSSLCRL='</strong><em id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac29e84d07c1f46e4a56b7b8500c6f1f0"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac29e84d07c1f46e4a56b7b8500c6f1f0"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ac29e84d07c1f46e4a56b7b8500c6f1f0"></a>/home/<span id="en-us_topic_0283137035_en-us_topic_0237121092_text15253106131910"><a name="en-us_topic_0283137035_en-us_topic_0237121092_text15253106131910"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_text15253106131910"></a>omm</span>/sslcrl-file.crl</em><strong id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a6aa439c5a0a144c98e36414f8c0c4eaf"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a6aa439c5a0a144c98e36414f8c0c4eaf"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a6aa439c5a0a144c98e36414f8c0c4eaf"></a>'</strong></pre>
</div>
<p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5f56fdaa783e4a1986a457f445969fe2"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5f56fdaa783e4a1986a457f445969fe2"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a5f56fdaa783e4a1986a457f445969fe2"></a><strong id="b8356104734113"><a name="b8356104734113"></a><a name="b8356104734113"></a>Default value:</strong> empty</p>
</td>
</tr>
</tbody>
</table>

The following table describes the connection results based on the settings of the server parameters  **ssl**  and  **require\_ssl**  and the client parameter  **sslmode**.

<a name="en-us_topic_0283137035_en-us_topic_0237121092_table8551194641117"></a>
<table><thead align="left"><tr id="en-us_topic_0283137035_en-us_topic_0237121092_row12708114620112"><th class="cellrowborder" valign="top" width="10.66%" id="mcps1.1.5.1.1"><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1070817460113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1070817460113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1070817460113"></a>ssl (Server)</p>
</th>
<th class="cellrowborder" valign="top" width="14.85%" id="mcps1.1.5.1.2"><p id="en-us_topic_0283137035_en-us_topic_0237121092_p14708184681118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p14708184681118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p14708184681118"></a>sslmode (Client)</p>
</th>
<th class="cellrowborder" valign="top" width="17.119999999999997%" id="mcps1.1.5.1.3"><p id="en-us_topic_0283137035_en-us_topic_0237121092_p3709184651116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p3709184651116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p3709184651116"></a>require_ssl (Client)</p>
</th>
<th class="cellrowborder" valign="top" width="57.37%" id="mcps1.1.5.1.4"><p id="en-us_topic_0283137035_en-us_topic_0237121092_p107096465112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p107096465112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p107096465112"></a>Result</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137035_en-us_topic_0237121092_row570917468118"><td class="cellrowborder" rowspan="12" valign="top" width="10.66%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p5709124615117"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p5709124615117"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p5709124615117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1070914614118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1070914614118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1070914614118"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" width="17.119999999999997%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1870974611118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1870974611118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1870974611118"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="57.37%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p2070934661119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p2070934661119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p2070934661119"></a>The connection fails, because the server requires SSL but the client has disabled it.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row670910465110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p670974621115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p670974621115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p670974621115"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p37091646181115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37091646181115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37091646181115"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p970944618110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p970944618110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p970944618110"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row17709164615115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p10710194681119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10710194681119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10710194681119"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p12710104614113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p12710104614113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p12710104614113"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p57104469113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p57104469113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p57104469113"></a>The connection is encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row471064611115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p19710204641112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p19710204641112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p19710204641112"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p67101446141110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p67101446141110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p67101446141110"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1471074691112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1471074691112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1471074691112"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row571024619116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p17710204641110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p17710204641110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p17710204641110"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p97101746151118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p97101746151118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p97101746151118"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p10710134651114"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10710134651114"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10710134651114"></a>The connection is encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row7710154611119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1671034611112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1671034611112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1671034611112"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p671004621111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p671004621111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p671004621111"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p77116463115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p77116463115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p77116463115"></a>The connection is encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row271112468115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p16711134631110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p16711134631110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p16711134631110"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p47118467112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p47118467112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p47118467112"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p7711114619116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p7711114619116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p7711114619116"></a>The connection is encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row12711154619119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p67111846101115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p67111846101115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p67111846101115"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1871116468113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1871116468113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1871116468113"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p771113462118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p771113462118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p771113462118"></a>The connection is encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row207111946151110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p971144691118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p971144691118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p971144691118"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p16711164691114"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p16711164691114"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p16711164691114"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p2711174615113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p2711174615113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p2711174615113"></a>The connection is encrypted and the server certificate is verified.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row137110461119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p57113463117"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p57113463117"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p57113463117"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p167111546151118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p167111546151118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p167111546151118"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p11711164617113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p11711164617113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p11711164617113"></a>The connection is encrypted and the server certificate is verified.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row8711546131116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p10711746141111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10711746141111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10711746141111"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p207121946161117"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p207121946161117"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p207121946161117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p9712146151118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p9712146151118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p9712146151118"></a>The connection is encrypted and the server certificate and host name are verified.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row2712134621116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p11712174621110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p11712174621110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p11712174621110"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p571214610116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p571214610116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p571214610116"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p15712124621118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15712124621118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15712124621118"></a>The connection is encrypted and the server certificate and host name are verified.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row127121746101116"><td class="cellrowborder" rowspan="12" valign="top" width="10.66%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p13712154617114"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p13712154617114"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p13712154617114"></a>off</p>
</td>
<td class="cellrowborder" valign="top" width="14.85%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p137121546111115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p137121546111115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p137121546111115"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" width="17.119999999999997%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p13712146161114"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p13712146161114"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p13712146161114"></a>on</p>
</td>
<td class="cellrowborder" valign="top" width="57.37%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p0712124611113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p0712124611113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p0712124611113"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row2071214651119"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p15712646161114"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15712646161114"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15712646161114"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p47125460116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p47125460116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p47125460116"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p15712104618119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15712104618119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15712104618119"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row37121446131114"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1771214612119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1771214612119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1771214612119"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1771264611119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1771264611119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1771264611119"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p11712346201111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p11712346201111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p11712346201111"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row10712184610112"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p107131246181111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p107131246181111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p107131246181111"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p177138462111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p177138462111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p177138462111"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p971374671112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p971374671112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p971374671112"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row18713846201111"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p14713114618111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p14713114618111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p14713114618111"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p4713154611117"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p4713154611117"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p4713154611117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p2071314691112"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p2071314691112"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p2071314691112"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row971374615115"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p37131446131115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37131446131115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37131446131115"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p167135466116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p167135466116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p167135466116"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p207137465113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p207137465113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p207137465113"></a>The connection is not encrypted.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row107135467110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p197131146191113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p197131146191113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p197131146191113"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p18713846131119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p18713846131119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p18713846131119"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p7713104619111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p7713104619111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p7713104619111"></a>The connection fails, because the client requires SSL but the server has disabled it.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row971304620110"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p8713546131119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p8713546131119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p8713546131119"></a>require</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p97131946201114"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p97131946201114"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p97131946201114"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p37131746161113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37131746161113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37131746161113"></a>The connection fails, because the client requires SSL but the server has disabled it.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row6713104671112"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p37143469110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37143469110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p37143469110"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p1071454612117"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1071454612117"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p1071454612117"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p671454641116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p671454641116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p671454641116"></a>The connection fails, because the client requires SSL but the server has disabled it.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row671444611117"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p177141946191116"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p177141946191116"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p177141946191116"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p3714104610115"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p3714104610115"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p3714104610115"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p15714546121111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15714546121111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p15714546121111"></a>The connection fails, because the client requires SSL but the server has disabled it.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row157141046141116"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p7714134615113"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p7714134615113"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p7714134615113"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p147142046161110"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p147142046161110"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p147142046161110"></a>on</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p10714124621111"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10714124621111"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p10714124621111"></a>The connection fails, because the client requires SSL but the server has disabled it.</p>
</td>
</tr>
<tr id="en-us_topic_0283137035_en-us_topic_0237121092_row107141046101114"><td class="cellrowborder" valign="top" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p17141463117"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p17141463117"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p17141463117"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p8714194691119"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p8714194691119"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p8714194691119"></a>off</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0283137035_en-us_topic_0237121092_p14714164613118"><a name="en-us_topic_0283137035_en-us_topic_0237121092_p14714164613118"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_p14714164613118"></a>The connection fails, because the client requires SSL but the server has disabled it.</p>
</td>
</tr>
</tbody>
</table>

A series of encryption and authentication algorithms with different strength are supported for SSL transmission. You can modify  **ssl\_ciphers**  in  **postgresql.conf**  to specify the encryption algorithm used by the database server.  [Table 4](#en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_t34eea0830ef94be1a866f0410ba3eb07)  lists the encryption algorithms supported by the SSL.

**Table  4**  Encryption algorithm suites

<a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_t34eea0830ef94be1a866f0410ba3eb07"></a>
<table><thead align="left"><tr id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_r247fd0c58b8a4b41a8044e4168920ac6"><th class="cellrowborder" valign="top" width="32.77327732773277%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a473eced6f3d44a2d8b8fff1d48d3d5d9"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a473eced6f3d44a2d8b8fff1d48d3d5d9"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a473eced6f3d44a2d8b8fff1d48d3d5d9"></a>OpenSSL Suite Name</p>
</th>
<th class="cellrowborder" valign="top" width="41.04410441044104%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a97c340deb96a4a82b48bad779dcbb0e8"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a97c340deb96a4a82b48bad779dcbb0e8"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_a97c340deb96a4a82b48bad779dcbb0e8"></a>IANA Suite Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.18261826182618%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab20c75899c5e492a84106e23fc4dbe7c"><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab20c75899c5e492a84106e23fc4dbe7c"></a><a name="en-us_topic_0283137035_en-us_topic_0237121092_en-us_topic_0059778374_ab20c75899c5e492a84106e23fc4dbe7c"></a>Security</p>
</th>
</tr>
</thead>
<tbody><tr id="row1026244253619"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p8263042163614"><a name="p8263042163614"></a><a name="p8263042163614"></a>ECDHE-RSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p13263042183610"><a name="p13263042183610"></a><a name="p13263042183610"></a>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p626364293614"><a name="p626364293614"></a><a name="p626364293614"></a>HIGH</p>
</td>
</tr>
<tr id="row55322209175"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p1353382012178"><a name="p1353382012178"></a><a name="p1353382012178"></a>ECDHE-RSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p1753319203174"><a name="p1753319203174"></a><a name="p1753319203174"></a>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p5533102011717"><a name="p5533102011717"></a><a name="p5533102011717"></a>HIGH</p>
</td>
</tr>
<tr id="row126351043376"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p1863534193718"><a name="p1863534193718"></a><a name="p1863534193718"></a>ECDHE-ECDSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p1263512415375"><a name="p1263512415375"></a><a name="p1263512415375"></a>TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p106352415373"><a name="p106352415373"></a><a name="p106352415373"></a>HIGH</p>
</td>
</tr>
<tr id="row1573683751719"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p127361737131713"><a name="p127361737131713"></a><a name="p127361737131713"></a>ECDHE-ECDSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p16736123771716"><a name="p16736123771716"></a><a name="p16736123771716"></a>TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p6736837131710"><a name="p6736837131710"></a><a name="p6736837131710"></a>HIGH</p>
</td>
</tr>
<tr id="row114611361519"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p61465371520"><a name="p61465371520"></a><a name="p61465371520"></a>DHE-RSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p11469313152"><a name="p11469313152"></a><a name="p11469313152"></a>TLS_DHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p014683181519"><a name="p014683181519"></a><a name="p014683181519"></a>HIGH</p>
</td>
</tr>
<tr id="row20338194171511"><td class="cellrowborder" valign="top" width="32.77327732773277%" headers="mcps1.2.4.1.1 "><p id="p933934110150"><a name="p933934110150"></a><a name="p933934110150"></a>DHE-RSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="41.04410441044104%" headers="mcps1.2.4.1.2 "><p id="p233920415155"><a name="p233920415155"></a><a name="p233920415155"></a>TLS_DHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="26.18261826182618%" headers="mcps1.2.4.1.3 "><p id="p133919412156"><a name="p133919412156"></a><a name="p133919412156"></a>HIGH</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   Currently, only the six encryption algorithm suites listed in the preceding table are supported.
>-   The default value of  **ssl\_ciphers**  is  **ALL**, indicating that all encryption algorithms listed in the table are supported. 为保持前向兼容保留了DHE算法套件，即DHE-RSA-AES128-GCM-SHA256和DHE-RSA-AES256-GCM-SHA384，根据CVE-2002-20001漏洞披露DHE算法存在一定安全风险，非兼容场景不建议使用，可将ssl_ciphers参数配置为仅支持ECDHE类型算法套件。
>-   To specify the preceding cipher suites, set** ssl\_ciphers**  to the OpenSSL suite names in the preceding table. Use semicolons \(;\) to separate cipher suites. For example, set  **ssl\_ciphers**  in  **postgresql.conf**  as follows:
>    ssl\_ciphers='ECDHE-RSA-AES128-GCM-SHA256;ECDHE-ECDSA-AES128-GCM-SHA256'
>-   SSL authentication increases the time spent for login \(creating the SSL environment\) and logout processes \(clearing the SSL environment\), and requires extra time for encrypting the data to be transferred. It affects performance especially in frequent login, logout, and short-time query scenarios.
>-   If the certificate validity period is less than seven days, an alarm is generated in the log when a user logs in to the system.

