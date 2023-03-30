# Network Communication Security<a name="EN-US_TOPIC_0000001088566340"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

To secure the transmission of sensitive data on the Internet, openGauss encrypts communication between the server and the client using the Secure Socket Layer \(SSL\) protocol.

## Benefits<a name="section28200442"></a>

The communication between your client and the server can be secured.

## Description<a name="section52477394"></a>

openGauss  supports the SSL protocol. The SSL protocol is an application-layer communication protocol with high security, which is mainly used for secure web transmission. SSL contains a record layer and a transport layer. The record-layer protocol determines the encapsulation format of the transport-layer data. The transport-layer security protocol uses X.509 for authentication. The SSL protocol uses asymmetric encryption algorithms to authenticate the identities of communicating parties, and then the two parties exchange symmetric keys as communication keys. The SSL protocol effectively ensures the confidentiality and reliability of the communication between two applications and prevents the communication between a client and a server from being eavesdropped by attackers.

openGauss  also supports the TLS 1.2 protocol. TLS 1.2 is a transport-layer communication protocol with high security. It consists of the TLS Record and TLS Handshake protocols. Each protocol suit has information in multiple formats. The TLS protocol is independent of application-layer protocols. Upper-layer protocols can be transparently distributed on the TLS protocol. The TLS protocol ensures the data confidentiality and integrity for both communication parties.

## Enhancements<a name="section2534498"></a>

Checking the strength of certificate signature algorithms: For low-strength signature algorithms, alarms are reported, reminding you to replace the certificate with another certificate containing a high-strength signature algorithm.

Checking the certificate validity period: If a certificate is about to expire in less than seven days, an alarm is reported, reminding you to replace the certificate on the client.

Checking certificate permissions: The certificate permissions are verified at the connection setup stage.

## Constraints<a name="section06531946143616"></a>

The formal certificates and keys for servers and clients shall be obtained from the Certificate Authority \(CA\). Assume the private key and certificate for a server are  **server.key**  and  **server.crt**, the private key and certificate for the client are  **client.key**  and  **client.crt**, and the CA root certificate is  **cacert.pem**.

You need to enable the SSL protocol and configure the certificate and connection mode.

## Dependencies<a name="section22810484"></a>

OpenSSL

