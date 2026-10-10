# gms_debug Plug-in

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:13:07.237Z pushedAt=2026-09-22T11:12:32.636Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview

The [gms_debug Plug-in](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_debug.md) is used to implement a server-side debugger, providing a method for debugging server-side PL/SQL program units.

## Customer Benefits

It enables SQL developers to discover and fix errors in a timely and convenient manner, and to develop features more efficiently, quickly, and with higher quality.

## Feature Description

gms_debug is a plug-in based on openGauss that implements a server-side debugger and provides a method for debugging server-side PL/SQL program units. The currently supported interfaces are INITIALIZE, ATTACH_SESSION, DETACH_SESSION, SET_BREAKPOINT, CONTINUE, and GET_RUNTIME_INFO.

## Feature Enhancements

None.

## Feature Constraints

- The plug-in can be loaded only by using the CREATE EXTENSION command.
- It is used to debug stored procedures in standalone mode, and the user must have the gs_role_pldebugger privilege.
- The debugging end must set the parameter compatibility mode `set behavior_compat_options='proc_outparam_override'`

## Dependencies

None.
