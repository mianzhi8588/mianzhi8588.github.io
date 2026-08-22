---
layout: research-project
title: "Multimodal Expressive Robot Lamp Prototype"
collection: portfolio
permalink: /portfolio/2026-multimodal-expressive-robot-lamp
redirect_from:
  - /portfolio/2026-lelamp-expressive-robot-lamp-replication
excerpt: "An early multimodal expressive robot lamp prototype developed at Tsinghua Future Laboratory, with ongoing mechanical, control, and interaction optimization."
date: 2026-01-01
status: "Prototype in progress"
research_area: "Expressive Robotics · Human–Robot Interaction"
research_stage: current
research_order: 6
---

## Project context

At the **Future Laboratory, Tsinghua University**, I am developing an early physical prototype of an expressive articulated robot lamp as a compact platform for multimodal human–robot interaction. The current system integrates articulated motion, lighting, perception, and spoken interaction in a physical prototype.

The prototype is functional but not a finished product: the mechanical packaging, wiring, servo coordination, control robustness, and expressive behaviors all require further optimization. The goal is to study how motion, light, perception, and audio interaction can make a small home robot more legible and expressive. The open-source **LeLamp** project informed the initial reference architecture and is credited below.

<figure class="research-media research-media--result">
  <video controls playsinline preload="metadata" poster="{{ '/images/lelamp-replication-demo-poster.png' | relative_url }}?v=1" aria-label="Early physical prototype demonstration of a multimodal expressive robot lamp">
    <source src="{{ '/files/lelamp-replication-demo.webm' | relative_url }}?v=1" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Early physical prototype demonstration, trimmed to 54.5 seconds. Spoken audio is retained because multimodal speech interaction is part of the prototype; the mechanical structure and behaviors are still under development.
  </figcaption>
</figure>

## Platform architecture

The platform combines an articulated servo mechanism with camera-based perception, microphone and speaker audio, programmable lighting, and movement control. This compact architecture provides an accessible testbed for studying embodied expression and multimodal interaction.

## Current scope

- Studying the open-source mechanical, electronic, and software architecture.
- Rebuilding the articulated hardware and servo-motion control stack.
- Preparing the platform for perception, audio–language interaction, and expressive-motion experiments.
- Documenting implementation decisions so the work can be evaluated as a research platform rather than only as a visual replica.
- Iterating on the prototype's mechanical finish, motion smoothness, interaction reliability, and expressive behavior library.

## Research questions

- How can articulated motion communicate intent before or without speech?
- How should perception, audio, and lighting cues be coordinated to support natural interaction?
- Which expressive behaviors remain robust on low-cost servo hardware?

## Open-source inspiration and attribution

The initial mechanical and interaction reference was inspired by **LeLamp**, an open-source project from the **Human Computer Lab**. Its original resources and project framing are available on the [LeLamp GitHub repository](https://github.com/humancomputerlab/LeLamp) and the [official LeLamp website](https://www.lelamp.com/about). The prototype documented here is my current physical implementation and ongoing development at Tsinghua Future Laboratory.

## Status

Early prototype reproduction in progress. The video documents the current build rather than a final system; further mechanical, control, and interaction optimization is planned.
