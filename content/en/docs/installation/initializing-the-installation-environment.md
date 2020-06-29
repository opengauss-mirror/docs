# Initializing the Installation Environment<a name="EN-US_TOPIC_0249784559"></a>

To ensure the correct installation of the openGauss, you need to configure the host environment first.

-   **[Creating the Required User Account and Configuring the Installation Environment](creating-the-required-user-account-and-configuring-the-installation-environment.md)**  
After the openGauss configuration file is created, you need to run the  **gs\_preinstall**  script to prepare the account and environment so that you can perform openGauss installation and management operations with the minimum permission, ensuring system security.
-   **[Establishing Mutual Trust Manually](establishing-mutual-trust-manually.md)**  
During the openGauss installation, you need to perform operations such as running commands and transferring files between hosts in openGauss. Establish mutual trust among the hosts before installing the cluster as a common user. During the execution of the pre-installation script, establish mutual trust between users  **root**, then create a common user account, and finally establish mutual trust between common users.
-   **[Configuring OS Parameters](configuring-os-parameters.md)**  
openGauss requires that the OS parameters on every host be set to specified values to ensure system running performance.

