# Establishing Secure TCP/IP Connections in SSH Tunnel Mode<a name="EN-US_TOPIC_0289900939"></a>

## Background<a name="en-us_topic_0283136790_en-us_topic_0237121093_en-us_topic_0059778333_section59301241111412"></a>

To ensure secure communication between the database server and its clients, secure SSH tunnels can be established between the database server and clients. SSH is a reliable security protocol dedicated to remote login session and other network services.

Regarding the SSH client, the SSH provides the following two security authentication levels:

-   Password-based security authentication: Use an account and a password to log in to a remote host. All transmitted data is encrypted. However, the connected server may not be the target server. Another server may pretend to be the real server and perform the man-in-the-middle attack.
-   Key-based security authentication: A user must create a pair of keys and put the public key on the target server. This mode prevents man-in-the-middle attacks while encrypting all transmitted data. However, the entire login process may last 10s.

## Prerequisites<a name="en-us_topic_0283136790_en-us_topic_0237121093_en-us_topic_0059778333_s34e271e7ba7f43139fcd5db58083f72b"></a>

The SSH service and the database must run on the same server.

## Procedure<a name="en-us_topic_0283136790_en-us_topic_0237121093_en-us_topic_0059778333_s52e44d9dadf14f8e943598203a0ddfbd"></a>

OpenSSH is used as an example to describe how to configure SSH tunnels. The process of configuring key-based security authentication is not described here. OpenSSH provides multiple configurations to adapt to different networks. For more details, see documents related to OpenSSH.

Establish the SSH tunnel from a local host to the database server.

```
ssh -L 63333:localhost:8000 username@hostIP
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The first digit string \(**63333**\) of the  **-L**  parameter indicates the local port ID of the tunnel and can be randomly selected.
>-   The second digit string \(**8000**\) indicates the remote port ID of the tunnel, which is the port ID on the server.
>-   *localhost*  is the IP address of the local host,  *username*  is the username on the database server to be connected, and  *hostIP*  is the IP address of the database server to be connected.
