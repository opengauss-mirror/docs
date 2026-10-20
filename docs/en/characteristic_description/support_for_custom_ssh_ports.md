---
description: This document describes Support for Custom SSH Ports in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Support for Custom SSH Ports, features, Availability, Feature Overview]
---

# Support for Custom SSH Ports

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:33:15.258Z pushedAt=2026-09-22T11:12:32.714Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview<a name="section35020791"></a>

SSH uses port 22 by default. In production environments, port 22 must be disabled, and only a fixed port can be specified to replace port 22. Therefore, custom SSH ports must be supported and user-configurable.

## Customer Benefits<a name="section46751668"></a>

In customer environments, port 22 is generally not used; a custom port is used instead of port 22 to improve security.

## Feature Description<a name="section18111828"></a>

When openGauss is installed through om, users can customize the SSH port and install the database normally.

## Feature Enhancements<a name="section28788730"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

- In addition to the default port 22, the custom SSH port range is 1024-65535.

## Dependencies<a name="section57771982"></a>

None.

## References<a name="section57771982"></a>

Open source community address: <https://atomgit.com/opengauss/openGauss-OM>.

For creating an XML file, see: <a href="../installation_guide/creating_an_xml_configuration_file.md">Creating an XML Configuration File</a>

gs_sshexkey documentation: <a href="../tool_and_commandreference/gs_sshexkey.md">gs_sshexkey</a>

gs_expansion documentation: <a href="../tool_and_commandreference/gs_expansion.md">Expansion</a>

One-stop installation documentation: <a href="../installation_guide/one_stop_installation_guide.md">One-Stop Installation Guide</a>
