---
layout: research-project
title: "Fault-Semantic Core across Changing Conditions"
collection: portfolio
permalink: /portfolio/2026-fault-semantic-core
excerpt: "Preserving shared diagnostic meaning while sensor responses and operating conditions change."
date: 2026-05-01
research_area: "Multimodal Diagnosis · Representation Learning"
research_stage: current
research_order: 5
---

## Research question

The same fault can produce different signals across sensors, temperatures, speeds, and loads. How can a learned representation retain the information that identifies the fault while accommodating changes in how it is observed?

## The idea: preserve diagnostic meaning

I study a **fault-semantic core**: shared information that remains useful for recognizing a fault across changing observations. Complementary residual information retains other aspects of the measured response. The goal is to organize the information, rather than force every sensor feature to become identical.

This is a functional representation hypothesis. “Core” describes the diagnostic role of the learned information; it does not imply that the model has uniquely identified the physical essence of a fault.

## Narrated research video

<figure class="research-media research-media--landscape">
  <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/eswa-public-preview.jpg' | relative_url }}?v=1" aria-label="Fault-semantic core narrated research overview">
    <source src="{{ '/files/eswa-public-preview.mp4' | relative_url }}?v=1" type="video/mp4">
    <track kind="captions" src="{{ '/files/eswa-public-preview.en.vtt' | relative_url }}?v=1" srclang="en" label="English">
    Your browser does not support the video tag.
  </video>
  <figcaption>Research motivation, representation hypothesis, high-level design, functional tests, and qualitative findings. Diagrams illustrate the concept rather than the model architecture.</figcaption>
</figure>

## How I make the idea testable

1. **Use the observed context.** Temperature guides how multisensor features are organized. An in-house extension examines jointly varying motion conditions.
2. **Give the representation a purpose.** A diagnostic core and complementary residual coordinates connect fault recognition with condition-aware feature organization.
3. **Test whether the meaning carries over.** Cross-modal recomposition examines whether information from one branch remains diagnostically useful in another receiving feature space. Semantic interventions provide a further check of what predictions depend on.

## My contribution and research perspective

My work connects the representation hypothesis with model development, condition-aware learning, and evaluation across complementary data settings. I study both transfer performance and the diagnostic function of the learned information.

The central thought is that a representation should earn its interpretation through use: if information is described as shared fault meaning, it should remain useful when the observation changes or the representation is recomposed. Classification scores and latent-space pictures address only part of that question.

## What the study shows

The evaluated framework supports competitive diagnosis across changing operating conditions, with clearer advantages under compound condition shifts. Cross-modal recomposition retains useful fault information in the evaluated continuous-profile setting, and semantic interventions support the diagnostic role of the core.

These findings are specific to the evaluated settings. They support a useful organization of information, without establishing a unique physical manifold or uniform superiority on every task. Broader sensing combinations, field conditions, and deployment shifts remain important tests.

## Related manuscript

[Temperature-Conditioned Semantic–Residual Recomposition for Machinery Fault Diagnosis under Nonstationary Working Conditions]({{ '/publication/2026-flow-based-multimodal-representations-temperature-information' | relative_url }}) — Expert Systems with Applications · With Editor.
