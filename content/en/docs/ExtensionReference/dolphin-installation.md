# Dolphin Installation<a name="EN-US_TOPIC_0000001201117578"></a>

The plug-in is automatically installed and loaded. You do not need to manually install and load the plug-in. To manually compile and load the plug-in, perform the following steps:
    
## Compilation and Installation

1. Compile and install openGauss.

2. Copy the Dolphin source code to the **contrib** directory of the openGauss source code.

3. Go to the Dolphin directory and run **make install**.

4. Create a B-compatible database and connect to B-compatible database as the initial user.

## OM Installation

1. Install openGauss on the OM.

2. Copy the files required by the plug-in.  
    Path of **dolphin.so**: app/lib/postgresql/  
    Path of **dolphin.control** and **dolphin--1.0.sql**: app/share/postgresql/extension
3. Create a B-compatible database and connect to B-compatible database as the initial user.
