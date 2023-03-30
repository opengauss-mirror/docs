# Generating Certificates<a name="EN-US_TOPIC_0246507955"></a>

## Scenarios<a name="en-us_topic_0237121096_en-us_topic_0059777789_section10143135711718"></a>

In the test environment, users can use either of the following methods to test digital certificates. In a customer's operating environment, only a digital certificate obtained from a CA can be used.

## Prerequisites<a name="en-us_topic_0237121096_en-us_topic_0059777789_section3301099010243"></a>

The OpenSSL component has been installed in the Linux environment.

## Generating an Automatic Authentication Certificate<a name="en-us_topic_0237121096_en-us_topic_0059777789_section2972238310327"></a>

1.  Establish a CA environment.

    ```
    -- Suppose that user omm exists, and the CA path is test.
    -- Log in to the Linux environment as user root and switch to user omm:
    mkdir test
    cd /etc/pki/tls
    -- Copy the configuration file openssl.cnf to test.
    cp openssl.cnf ~/test
    cd ~/test
    --Establish the CA environment under the test folder.
    --Create folder demoCA./demoCA/newcerts./demoCA/private.
    mkdir ./demoCA ./demoCA/newcerts ./demoCA/private
    chmod 700 ./demoCA/private
    --Create the serial file and write it to 01.
    echo '01'>./demoCA/serial
    -- Create the index.txt file.
    touch ./demoCA/index.txt
    -- Modify parameters in the openssl.cnf configuration file.
    dir  = ./demoCA
    default_md      = sha256
    --The CA environment has been established.
    ```

2.  Generate a root private key.

    ```
    --Generate a CA private key.
    openssl genrsa -aes256 -out demoCA/private/cakey.pem 2048
    Generating RSA private key, 2048 bit long modulus
    .................+++
    ..................+++
    e is 65537 (0x10001)
    --Set the protection password of the root private key to at least four characters, for example, Test@123.
    Enter pass phrase for demoCA/private/cakey.pem:
    --Enter the private key password Test@123 again.
    Verifying - Enter pass phrase for demoCA/private/cakey.pem:
    ```

3.  Generate a root certificate request file.

    ```
    --Generate a CA root certificate application file named careq.pem.
    openssl req -config openssl.cnf -new -key demoCA/private/cakey.pem -out demoCA/careq.pem
    Enter pass phrase for demoCA/private/cakey.pem:
    --Enter the root private key password Test@123.
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    
    --Note down the following names and use them when entering information in the generated server certificate and client certificate.
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:shanxi
    Locality Name (eg, city) []:xian
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:Abc
    Organizational Unit Name (eg, section) []:hello
    --Common Name can be randomly set.
    Common Name (eg, YOUR name) []:world
    --The email address is optional.
    Email Address []:
    
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    ```

4.  Generate a self-signed root certificate.

    ```
    --When generating the root certificate, modify the openssl.cnf file and set basicConstraints to CA:TRUE.
    vi openssl.cnf
    -- Generate a CA self-signed root certificate.
    openssl ca -config openssl.cnf -out demoCA/cacert.pem -keyfile demoCA/private/cakey.pem -selfsign -infiles demoCA/careq.pem
    Using configuration from openssl.cnf
    Enter pass phrase for demoCA/private/cakey.pem:
    --Enter the root private key password Test@123.
    Check that the request matches the signature
    Signature ok
    Certificate Details:
            Serial Number: 1 (0x1)
            Validity
                Not Before: Feb 28 02:17:11 2017 GMT
                Not After : Feb 28 02:17:11 2018 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = shanxi
                organizationName          = Abc
                organizationalUnitName    = hello
                commonName                = world
            X509v3 extensions:
                X509v3 Basic Constraints: 
                    CA:FALSE
                Netscape Comment: 
                    OpenSSL Generated Certificate
                X509v3 Subject Key Identifier: 
                    F9:91:50:B2:42:8C:A8:D3:41:B0:E4:42:CB:C2:BE:8D:B7:8C:17:1F
                X509v3 Authority Key Identifier: 
                    keyid:F9:91:50:B2:42:8C:A8:D3:41:B0:E4:42:CB:C2:BE:8D:B7:8C:17:1F
    
    Certificate is to be certified until Feb 28 02:17:11 2018 GMT (365 days)
    Sign the certificate? [y/n]:y
    
    
    1 out of 1 certificate requests certified, commit? [y/n]y
    Write out database with 1 new entries
    Data Base Updated
    --A CA root certificate named demoCA/cacert.pem has been issued.
    ```

5.  Generate a private key for the server certificate.

    ```
    --Generate a private key file named server.key.
    openssl genrsa -aes256 -out server.key 2048
    Generating a 2048 bit RSA private key
    .......++++++
    ..++++++
    e is 65537 (0x10001)
    Enter pass phrase for server.key:
    --The password of the server private key must contain a minimum of four characters, for example, Test@123.
    Verifying - Enter pass phrase for server.key:
    --Confirm the protection password for the server private key Test@123 again.
    ```

6.  Generate a server certificate request file.

    ```
    --Generate a server certificate request file server.req.
    openssl req -config openssl.cnf -new -key server.key -out server.req
    Enter pass phrase for server.key:
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    
    --Set the following information and make sure that it is same as that when CA is created.
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:shanxi
    Locality Name (eg, city) []:xian
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:Abc
    Organizational Unit Name (eg, section) []:hello
    --Common Name can be randomly set.
    Common Name (eg, YOUR name) []:world
    Email Address []:
    --The following information is optional.
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    ```

7.  Generate a server certificate.

    ```
    --When generating the server certificate or client certificate, modify the openssl.cnf file and set basicConstraints to CA:FALSE.
    vi openssl.cnf
    --Change the demoCA/index.txt.attr attribute to no.
    vi demoCA/index.txt.attr
    
    --Issue the generated server certificate request file. After it is issued, an official server certificate server.crt is generated.
    openssl ca  -config openssl.cnf -in server.req -out server.crt -days 3650 -md sha256
    Using configuration from /etc/ssl/openssl.cnf
    Enter pass phrase for ./demoCA/private/cakey.pem:
    Check that the request matches the signature
    Signature ok
    Certificate Details:
            Serial Number: 2 (0x2)
            Validity
                Not Before: Feb 27 10:11:12 2017 GMT
                Not After : Feb 25 10:11:12 2027 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = shanxi
                organizationName          = Abc
                organizationalUnitName    = hello
                commonName                = world
            X509v3 extensions:
                X509v3 Basic Constraints: 
                    CA:FALSE
                Netscape Comment: 
                    OpenSSL Generated Certificate
                X509v3 Subject Key Identifier: 
                    EB:D9:EE:C0:D2:14:48:AD:EB:BB:AD:B6:29:2C:6C:72:96:5C:38:35
                X509v3 Authority Key Identifier: 
                    keyid:84:F6:A1:65:16:1F:28:8A:B7:0D:CB:7E:19:76:2A:8B:F5:2B:5C:6A
    
    Certificate is to be certified until Feb 25 10:11:12 2027 GMT (3650 days)
    --Enter y to sign and issue the certificate.
    Sign the certificate? [y/n]:y
    
    --Enter y. The certificate singing and issuing is complete.
    1 out of 1 certificate requests certified, commit? [y/n]y
    Write out database with 1 new entries
    Data Base Updated
    ```

    Disable password protection for the private key.

    ```
    --Disable the password protection for the server private key.
    openssl rsa -in server.key -out server.key
    --If the password protection for the server private key is not disabled, you need to use the gs_guc tool to encrypt the password.
    gs_guc encrypt -M server -K Test@123 -D ./
    --After the password is encrypted using gs_guc, two private key password protection files server.key.cipher and server.key.rand are generated.
    ```

8.  Generate the client certificate and private key.

    Methods and requirements for generating client certificates and private keys are the same as that for server certificates and private keys.

    ```
    --Generate a client private key.
    openssl genrsa -aes256 -out client.key 2048
    --Generate a certificate request file for a client.
    openssl req -config openssl.cnf -new -key client.key -out client.req 
    --After the generated certificate request file for client is signed and issued, a formal client certificate client.crt is generated.
    openssl ca -config openssl.cnf -in client.req -out client.crt -days 3650 -md sha256
    ```

    Disable password protection for the private key:

    ```
    --Disable the protection for a client private key password.
    openssl rsa -in client.key -out client.key
    --If password protection for a client private key is not removed, you need to use the gs_guc tool to encrypt the password.
    gs_guc encrypt -M client -K Test@123 -D ./  
    After the password is encrypted using gs_guc, two private key password protection files client.key.cipher and client.key.rand are generated.
    ```

    Convert the client key to the DER format.

    ```
    openssl pkcs8 -topk8 -outform DER -in client.key -out client.key.pk8 -nocrypt
    ```

9.  Generate a CRL.

    If the CRL is required, you can generate it by following the following procedure:

    ```
    --Create a crlnumber file.
    echo '00'>./demoCA/crlnumber
    --Revoke a server certificate.
    openssl ca -config openssl.cnf -revoke server.crt
    --Generate the CRL sslcrl-file.crl.
    openssl ca -config openssl.cnf -gencrl -out sslcrl-file.crl
    ```


