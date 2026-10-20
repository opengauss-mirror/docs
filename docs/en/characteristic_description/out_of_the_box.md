---
description: This document describes Out-of-the-Box in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, Out-of-the-Box, features, Availability, Feature Overview]
---

# Out-of-the-Box

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:21:58.119Z pushedAt=2026-09-22T11:12:32.681Z -->

## Availability<a name="section1820817472142"></a>

This feature has been available since openGauss 6.0.0-RC1.

## Feature Overview<a name="section595916321417"></a>

The out-of-the-box tool gs_perfconfig of openGauss automatically optimizes database performance.

## Customer Benefits<a name="section1889785041315"></a>

It lowers the barrier to using openGauss and improves the user experience.

## Feature Description<a name="section3050790"></a>

Provides the gs_perfconfig tool, which automatically gives adjustment plans or suggestions in three aspects — operating system configuration, database setup, and database parameters — based on environment information and business information, or directly performs configuration adjustments to achieve out-of-the-box optimal performance.

It also provides a rollback function for the adjustments, so that unnecessary adjustments can be rolled back.

## Feature Enhancements<a name="section27457110"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

- The tool can be executed by the operating system root user or a regular user. However, detection and adjustment of some operating system items are subject to the privilege restrictions of the operating system itself and must be run by the operating system root user.

- Some operations in the tool require restarting the database, and the user's consent is requested in advance.

- Environment variables must be correctly configured or specified.

## Dependencies<a name="section45787398"></a>

None.

## Basic Principles

The built-in tool `gs_perfconfig` is written in `python3`. It can be used independently or invoked by the `gs_om` tool during installation to optimize performance.

The tool has built-in environment monitoring and business survey modules. It automatically detects the hardware configuration and operating system configuration, and collects business information in various ways. Guided by previous tuning experience, the tool also has multiple built-in optimization strategies. It calculates based on the collected information to obtain the optimal performance adjustment plan.

The final adjustment plan can be passed directly to the execution module of the tool for application, or only to the report generation module of the tool to print a plan report.

## Usage Guide

For usage guidance, see [gs_perfconfig tool](../tool_and_commandreference/gs_perfconfig.md).

## Usage Scenarios

When installing the database or afterward, if you expect good performance, you can use this tool for performance optimization.
