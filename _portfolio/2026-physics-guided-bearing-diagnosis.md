---
layout: research-project
title: "Physics-Guided Bearing Fault Diagnosis"
collection: portfolio
permalink: /portfolio/2026-physics-guided-bearing-diagnosis
excerpt: "Organizing complementary vibration representations around physical fault evidence for diagnosis under noise and operating-condition shifts."
date: 2026-05-01
status: "EAAI · Revised and Resubmitted"
research_area: "Intelligent Diagnosis · Robust Learning"
research_stage: current
research_order: 3
---

## Research question

How can a diagnostic model distinguish bearing-fault evidence from signal changes caused by speed, load, or interference? This study investigates how physically meaningful structure can coordinate complementary vibration representations under variable operating conditions.

## Research overview

The study combines complementary views of vibration signals to separate fault evidence from changes in operating conditions. Physically meaningful signal structure guides the learning process, and the resulting evidence is considered jointly for diagnosis. Evaluation covers noisy observations and operating conditions held out from training.

## Narrated research video

<figure class="research-media research-media--landscape">
  <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/eaai-public-preview.jpg' | relative_url }}?v=1" aria-label="Physics-guided bearing diagnosis research overview">
    <source src="{{ '/files/eaai-public-preview.mp4' | relative_url }}?v=1" type="video/mp4">
    <track kind="captions" src="{{ '/files/eaai-public-preview.en.vtt' | relative_url }}?v=1" srclang="en" label="English">
    Your browser does not support the video tag.
  </video>
  <figcaption>Research question, physical evidence, method overview, validation, qualitative findings, and contribution. The bearing illustration is a conceptual sketch rather than an apparatus drawing.</figcaption>
</figure>

## Research contributions

- Connect physically organized signal representations with coordinated feature learning and learned evidence fusion.
- Evaluate noise robustness, target-free operating-condition generalization, and limited-target adaptation using distinct protocols.
- Use component studies and representation audits to examine the contribution and interpretation of the different evidence paths.

## Main findings

The evaluated framework supports useful diagnosis under raw-signal interference and held-out operating conditions. Complementary views provide clearer value when signal quality is challenged; temporal evidence is particularly useful under strong noise. Near-saturated clean classification alone offers limited evidence of broad superiority.

Generalization to unseen operating conditions and adaptation using limited target information are evaluated separately. The findings should be interpreted within the corresponding evaluation setting.

## Scope and next steps

The operating-condition experiments compare different approximately steady operating points. They do not establish robustness to rapid acceleration within one analysis window. Rapidly changing operating conditions and more varied field interference remain directions for further validation.

## Related manuscript

[Physics-Guided Multi-Representation Fusion for Robust Bearing Fault Diagnosis under Variable Operating Conditions]({{ '/publication/2026-physics-guided-multi-domain-representation-framework' | relative_url }}) — Engineering Applications of Artificial Intelligence · Revised and Resubmitted.
