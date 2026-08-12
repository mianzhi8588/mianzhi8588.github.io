---
layout: research-project
title: "Inertial Sensor Recovery and Dexterous Hand Control"
collection: portfolio
permalink: /portfolio/2025-inertial-sensor-recovery-dexterous-hand
excerpt: "A signal-recovery framework for short-term IMU overload and its integration into robotic hand control experiments."
date: 2025-09-01
status: "Ongoing research"
research_area: "Intelligent Sensing · Dexterous Control"
---

## Overview

This project develops a lightweight signal-recovery framework for short-term inertial sensor overload, with downstream integration into robotic hand control experiments.

## Data collection

<figure class="research-media research-media--portrait">
  <video controls muted playsinline preload="metadata" poster="{{ '/images/imu-overrange-data-collection-poster.png' | relative_url }}" aria-label="IMU overrange experiment data collection">
    <source src="{{ '/files/imu-overrange-data-collection.mp4' | relative_url }}#t=0.5" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Data collection for the short-term IMU overrange study, showing the physical acquisition process used alongside public datasets and simulations.
  </figcaption>
</figure>

## Exploratory online comparison

<figure class="research-media research-media--result">
  <a href="{{ '/images/imu-strict-online-exploratory-result.png' | relative_url }}">
    <img src="{{ '/images/imu-strict-online-exploratory-result.png' | relative_url }}" alt="Exploratory strict-online raw-IMU comparison across modeling levels">
  </a>
  <figcaption>
    Exploratory result from one strict-online raw-IMU comparison across modeling levels on FPV and INSANE sequences. This figure reports a current experimental run and is <strong>not a figure or claimed result from a published paper</strong>. Click to inspect the full-resolution chart.
  </figcaption>
</figure>

## My Contributions

- Designed a signal-recovery framework for short-term IMU overload.
- Combined overload detection, threshold gating, filtering, and geometry-constrained extrapolation to reconstruct saturated sensor channels.
- Validated the method through public datasets, MATLAB simulations, and self-collected IMU recordings.
- Implemented multi-motor control for a multi-DOF dexterous robotic hand.
- Explored the use of recovered IMU signals in closed-loop robotic feedback.

## Technical Stack

- MATLAB
- Python
- IMU signal processing
- Multi-motor control
- Robotic hand control

## Status

This project is associated with an ongoing working paper on inertial perception recovery beyond hardware dynamic range.
