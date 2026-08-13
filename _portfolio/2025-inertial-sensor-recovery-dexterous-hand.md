---
layout: research-project
title: "Inertial Sensor Overrange Recovery"
collection: portfolio
permalink: /portfolio/2025-inertial-perception-overrange-recovery
redirect_from:
  - /portfolio/2025-inertial-sensor-recovery-dexterous-hand
excerpt: "A lightweight framework for recovering saturated IMU signals during short-term hardware overrange events."
date: 2025-09-01
status: "Ongoing research"
research_area: "Intelligent Sensing · Signal Recovery"
research_stage: current
research_order: 3
---

## Overview

This project develops a lightweight signal-recovery framework for short-term inertial-sensor overload. The website version focuses exclusively on overrange detection and saturated-signal recovery; it does not treat dexterous-hand control as part of this project.

## Data collection

<figure class="research-media research-media--portrait">
  <video controls playsinline preload="metadata" poster="{{ '/images/imu-overrange-data-collection-poster.png' | relative_url }}" aria-label="IMU overrange experiment data collection">
    <source src="{{ '/files/imu-overrange-data-collection-web.webm' | relative_url }}" type="video/webm">
    <source src="{{ '/files/imu-overrange-data-collection.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Physical data collection for the short-term IMU overrange study. The recordings complement HuGaDB evaluation and MATLAB simulation.
  </figcaption>
</figure>

## Recovery framework

- Detect short-term overload and activate recovery through threshold gating.
- Use multi-axis coupling to reconstruct saturated channels.
- Combine low-pass filtering with physics- and geometry-constrained extrapolation.
- Select recovery windows adaptively to balance local continuity and robustness.
- Maintain a low memory footprint suitable for real-time implementation.

## Evaluation

The framework is evaluated with the HuGaDB human-gait dataset (approximately 58 Hz, 636 trials), MATLAB simulations, and self-collected IMU recordings. Comparisons include Kalman filtering, CLPE, and ARLS. The current exploratory comparison below is a supporting result and is not presented as a finalized paper figure.

<figure class="research-media research-media--result">
  <a href="{{ '/images/imu-strict-online-exploratory-result.png' | relative_url }}">
    <img src="{{ '/images/imu-strict-online-exploratory-result.png' | relative_url }}" alt="Exploratory strict-online raw-IMU comparison across modeling levels">
  </a>
  <figcaption>
    Exploratory strict-online comparison across modeling levels. This figure documents a current experimental result rather than a finalized publication figure.
  </figcaption>
</figure>

## Related manuscript

[Inertial Perception Recovery beyond the Hardware Dynamic Range under Short-Term Overrange Conditions]({{ '/publication/2026-inertial-perception-recovery-overrange-conditions' | relative_url }}) — Working Paper.

## Status

Ongoing research.
