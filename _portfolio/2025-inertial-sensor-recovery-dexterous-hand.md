---
layout: research-project
title: "Inertial Sensor Overrange Recovery"
collection: portfolio
permalink: /portfolio/2025-inertial-perception-overrange-recovery
redirect_from:
  - /portfolio/2025-inertial-sensor-recovery-dexterous-hand
excerpt: "A lightweight framework for recovering saturated IMU signals during short-term hardware overrange events."
date: 2025-09-01
status: "Nature Sensors · With Editor"
research_area: "Intelligent Sensing · Signal Recovery"
research_stage: current
research_order: 3
---

## Research question

Can useful motion information be recovered when an inertial sensor briefly saturates? This project studies whether persistent structure across multiple axes can help reconstruct clipped signals beyond an individual channel's measurement range.

## Main research and my contributions

- Designed a lightweight recovery framework that uses relationships across motion axes and physical constraints.
- Validated recovery on controlled simulations, self-collected human-motion recordings, and public UAV datasets.
- Analyzed when local motion structure supports recovery and where changes in that structure limit accuracy.

## Main findings

The principal evaluation concerns angular-rate channels. Controlled software clipping supplies complete references for paired comparison; this does not establish recovery from device-specific physical saturation.


The evaluated framework reduces recovery error relative to clipped input while preserving principal signal peaks and valleys. The key finding is that saturation of one channel need not remove all recoverable motion information when useful multiaxis structure persists. Recovery quality remains dependent on the local motion and saturation conditions.

## Narrated research video

<figure class="research-media research-media--landscape">
  <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/imu-recovery-public-preview.jpg' | relative_url }}?v=1" aria-label="Inertial signal recovery narrated research overview">
        <source src="{{ '/files/imu-recovery-public-preview.mp4' | relative_url }}?v=1" type="video/mp4">
        <track kind="captions" src="{{ '/files/imu-recovery-public-preview.en.vtt' | relative_url }}?v=1" srclang="en" label="English">
      </video>
  <figcaption>The problem, multiaxis recovery principle, online information constraint, validation, findings, and scope. The waveform sketch illustrates clipping and is not experimental data.</figcaption>
</figure>

## Data collection

<figure class="research-media research-media--portrait">
  <video controlslist="nodownload" oncontextmenu="return false;" controls muted loop playsinline preload="metadata" poster="{{ '/images/imu-overrange-public-poster.png' | relative_url }}?v=3" aria-label="IMU overrange experiment data collection">
    <source src="{{ '/files/imu-overrange-public.webm' | relative_url }}?v=3" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Physical data collection for the short-term IMU overrange study. The clip is formatted for public presentation and does not expose acquisition settings.
  </figcaption>
</figure>

## Evaluation

The study combines controlled data collection, simulation, and external datasets to examine recovery under short-duration sensor saturation. The public figures below show representative waveform diversity in the self-collected gyroscope dataset and a selected strict-online comparison on FPV and INSANE. The proposed approach is labeled simply as **Proposed**; the submitted manuscript contains the detailed method and evaluation protocol.

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

[Structural recovery of multiaxis inertial signals during short-term saturation]({{ '/publication/2026-inertial-perception-recovery-overrange-conditions' | relative_url }}) — Nature Sensors · With Editor.

## Further development

Next steps include synchronized higher-range hardware references, online recovery confidence, and tests of downstream attitude estimation and control. Acceleration-channel and simultaneous multiaxis-saturation recovery still require validation.

## Status

Submitted to Nature Sensors; currently With Editor. Related research and validation continue.
