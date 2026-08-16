---
layout: research-project
title: "LeLamp-Inspired Expressive Robot Lamp Replication"
collection: portfolio
permalink: /portfolio/2026-lelamp-expressive-robot-lamp-replication
excerpt: "An early physical prototype of a LeLamp-inspired multimodal robot lamp at Tsinghua Future Laboratory, with ongoing mechanical, control, and interaction optimization."
date: 2026-01-01
status: "Prototype in progress"
research_area: "Expressive Robotics · Human–Robot Interaction"
research_stage: current
research_order: 6
---

## Project context

At the **Future Laboratory, Tsinghua University**, I am developing an early physical prototype of an expressive articulated robot lamp as a compact platform for multimodal human–robot interaction. The work is inspired by **LeLamp**, an open-source robot-lamp project created by the Human Computer Lab and based on Apple's ELEGNT research prototype.

This is a replication and engineering study—not an original Tsinghua LeLamp design and not a finished product. The current prototype is functional but still imperfect: the mechanical packaging, wiring, servo coordination, control robustness, and expressive behaviors all require further optimization. The goal is to understand and rebuild the mechanical and control stack, then use the platform to explore how motion, light, perception, and audio interaction can make a small home robot more legible and expressive.

<figure class="research-media research-media--result">
  <video controls playsinline preload="metadata" poster="{{ '/images/lelamp-replication-demo-poster.png' | relative_url }}?v=1" aria-label="Early physical prototype demonstration of a LeLamp-inspired multimodal robot lamp">
    <source src="{{ '/files/lelamp-replication-demo.webm' | relative_url }}?v=1" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Early physical prototype demonstration, trimmed to 54.5 seconds. Spoken audio is retained because multimodal speech interaction is part of the prototype; the mechanical structure and behaviors are still under development.
  </figcaption>
</figure>

## Reference architecture

The original open-source LeLamp design documents a five-axis articulated servo mechanism together with camera-based vision, microphone and speaker audio, programmable lighting, and movement record/replay. These capabilities make it a useful reference for studying embodied expression with accessible hardware.

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

## Attribution and references

LeLamp is an early-stage open-source project from the **Human Computer Lab**. The original build resources and project framing are available on the [LeLamp GitHub repository](https://github.com/humancomputerlab/LeLamp) and the [official LeLamp website](https://www.lelamp.com/about).

## Status

Early prototype reproduction in progress. The video documents the current build rather than a final system; further mechanical, control, and interaction optimization is planned.
