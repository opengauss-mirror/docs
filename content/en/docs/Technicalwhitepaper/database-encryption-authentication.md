# Database Encryption Authentication<a name="EN-US_TOPIC_0252569394"></a>

The password encryption method based on the RFC5802 mechanism is used for authentication.

The unidirectional, irreversible Hash encryption algorithm PBKDF2 is used for encryption and authentication, effectively defending against rainbow attacks.

The password of the created user is encrypted and stored in the system catalog. During the entire authentication process, passwords are encrypted for storage and transmission. The hash value is calculated and compared with the value stored on the server to verify the correctness.

The message processing flow in the unified encryption and authentication process effectively prevents attackers from cracking the username or password by capturing packets.

