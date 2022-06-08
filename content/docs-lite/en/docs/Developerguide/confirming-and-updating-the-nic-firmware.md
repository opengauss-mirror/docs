# Confirming and Updating the NIC Firmware<a name="EN-US_TOPIC_0289900065"></a>

1.  Run the  **ethtool -i enp3s0**  command to check whether the NIC firmware version in the current environment is 2.4.1.0. If not, you are advised to replace it with 2.4.1.0 for better performance.

    ```
    # ethtool -i enp3s0 
    driver: hinic                                 
    version: 2.3.2.11                             
    firmware-version: 2.4.1.0                     
    expansion-rom-version:                        
    bus-info: 0000:03:00.0                       
    ```

2.  **Update the NIC firmware.**
    1.  Obtain the  **cfg\_data\_nic\_prd\_1h\_4x25G.bin**  file from  **..\\firmware\\update\_bin**.
    2.  Run the following command as the root user to update the NIC firmware.

        ```
        hinicadm updatefw -i <physical NIC device name> -f <firmware file path>
        ```

        The involved parameters are described as follows:

        -   _physical NIC device name_  indicates the name of the NIC in the system. For example,  **hinic0**  indicates the first NIC and  **hinic1**  indicates the second NIC. For details about how to query the NIC name, see the preceding description  [NIC Multi-Queue Interruption Settings](nic-multi-queue-interruption-settings.md).
        -   _firmware file path_  indicates the file path of the  **cfg\_data\_nic\_prd\_1h\_4x25G.bin**  file.

        For example:

        ```
        #  
        Please do not remove driver or network device  
        Loading...  
        [>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>]  [100%] [\]  
        Loading firmware image succeed.  
        Please reboot OS to take firmware effect.
        ```

    3.  Restart the server and verify that the NIC firmware version is successfully updated to 2.4.1.0.

        ```
        # ethtool -i enp3s0 
        driver: hinic                                 
        version: 2.3.2.11                             
        firmware-version: 2.4.1.0                     
        expansion-rom-version:                        
        bus-info: 0000:03:00.0    
        ```



