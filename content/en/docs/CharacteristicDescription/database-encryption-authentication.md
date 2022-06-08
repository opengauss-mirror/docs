# Database Encryption Authentication<a name="EN-US_TOPIC_0000001088406686"></a>

## Availability<a name="section65447064"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section52152668"></a>

The client/server \(C/S\) mode-based client connection authentication mechanism is provided.

## Benefits<a name="section66720832"></a>

The unidirectional, irreversible hash encryption algorithm PBKDF2 is used for encryption and authentication, effectively defending against rainbow attacks.

## Description<a name="section63616581"></a>

openGauss uses a basic client connection authentication mechanism. After a client initiates a connection request, the server verifies the information and sends the information required for authentication to the client based on the verification result. The authentication information includes the salt, token, and server signature. The client responds to the request and sends the authentication information to the server. The server calls the authentication module to authenticate the client authentication information. The user password is encrypted and stored in the memory. During the entire authentication process, passwords are encrypted for storage and transmission. When the user logs in to the system next time, the hash value is calculated and compared with the key value stored on the server to verify the correctness.

## Enhancements<a name="section35678325"></a>

The message processing flow in the unified encryption and authentication process effectively prevents attackers from cracking the username or password by capturing packets.

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section52669471"></a>

None

