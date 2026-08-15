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
  <video controls muted loop playsinline preload="metadata" poster="{{ '/images/imu-overrange-public-poster.png' | relative_url }}?v=3" aria-label="IMU overrange experiment data collection">
    <source src="{{ '/files/imu-overrange-public.webm' | relative_url }}?v=3" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Physical data collection for the short-term IMU overrange study. The clip is formatted for public presentation and does not expose acquisition settings.
  </figcaption>
</figure>

## Evaluation

The study combines controlled data collection, simulation, and external datasets to examine recovery under short-duration sensor saturation. Exact signal-processing stages, parameter choices, comparison methods, and current numerical results are intentionally omitted until the manuscript is ready for submission.

## Related manuscript

[Inertial Perception Recovery beyond the Hardware Dynamic Range under Short-Term Overrange Conditions]({{ '/publication/2026-inertial-perception-recovery-overrange-conditions' | relative_url }}) — Working Paper.

## Status

Ongoing research.
