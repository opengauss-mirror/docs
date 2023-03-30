# Troubleshooting<a name="EN-US_TOPIC_0000001195985074"></a>

1.  A message is displayed, prompting the user to specify the  **--ssl-keyfile**  and  **--ssl-certfile**  options.

    By default, the exporter uses HTTPS for communication. Therefore, you must specify the path of the certificate and private key files. To use HTTP for communication, explicitly specify the  **--disable-https**  option to disable HTTPS.

2.  A message is displayed prompting users to enter the PEM pass phrase.

    In HTTPS communication mode, after specifying the path of the certificate and its key file \(the key file have been encrypted\), you need to enter the password of the encrypted private key file. The password can also be passed through a standard input stream.
