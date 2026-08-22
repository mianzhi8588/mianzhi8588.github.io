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

The study combines controlled data collection, simulation, and external datasets to examine recovery under short-duration sensor saturation. The public figures below show representative waveform diversity in the self-collected gyroscope dataset and a selected strict-online comparison on FPV and INSANE. The proposed approach is labeled simply as **Proposed**; implementation details and final manuscript analyses remain private until submission.

## Representative self-collected recordings

<figure class="research-media research-media--result">
  <img src="{{ '/images/imu-self-collected-waveform-gallery.png' | relative_url }}?v=1" alt="Representative self-collected raw gyroscope recordings across motion coupling patterns and intensity levels" loading="lazy">
  <figcaption>
    Representative raw primary-axis gyroscope recordings from the self-collected dataset. Blue curves show the raw signal, orange curves show virtual clipping, and dashed lines indicate the corresponding clipping rails. The gallery illustrates motion diversity rather than final recovery performance.
  </figcaption>
</figure>

## Selected external-dataset comparison

<figure class="research-media research-media--result">
  <img src="{{ '/images/imu-strict-online-public-comparison.png' | relative_url }}?v=1" alt="Strict-online raw IMU recovery comparison on the FPV and INSANE datasets with the proposed method labeled Proposed" loading="lazy">
  <figcaption>
    Selected strict-online comparison on FPV and INSANE. The green bars denote the proposed method, shown publicly as <strong>Proposed</strong>. These are current exploratory results for research communication, not the final manuscript figure.
  </figcaption>
</figure>

## Related manuscript

[Inertial Perception Recovery beyond the Hardware Dynamic Range under Short-Term Overrange Conditions]({{ '/publication/2026-inertial-perception-recovery-overrange-conditions' | relative_url }}) — Working Paper.

## Status

Ongoing research.
