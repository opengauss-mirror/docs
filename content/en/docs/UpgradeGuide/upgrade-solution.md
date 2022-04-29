# Upgrade Solution<a name="EN-US_TOPIC_0305491360"></a>

This section describes how to select an upgrade mode.

You can determine whether to upgrade the existing system based on the new features provided by the openGauss and the current database status.

Currently, in-place upgrade and gray upgrade are supported. The upgrade modes are classified into major version upgrade and minor version upgrade.

After you select an upgrade mode, the system automatically determines and selects a proper upgrade policy.

In-place upgrade: During the upgrade, services must be stopped and all nodes must be upgraded at a time.

Gray upgrade: supports operations on all service during the upgrade and upgrades all nodes at a time. \(This function is supported in versions later than openGauss 1.1.0.\)

