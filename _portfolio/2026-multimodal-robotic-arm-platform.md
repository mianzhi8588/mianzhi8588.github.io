---
layout: research-project
title: "Language-Conditioned Agentic Control for a 6-DOF Robotic Manipulator"
collection: portfolio
permalink: /portfolio/2026-multimodal-robotic-arm-platform
excerpt: "A low-cost 6-DOF arm integrating vision, audio, servo control, and constrained LLM-agent primitives for task-level manipulation."
date: 2026-05-01
status: "Ongoing research"
research_area: "Embodied AI · Multimodal Manipulation"
research_stage: current
research_order: 4
---
## Overview

This project explores language-conditioned and multimodal manipulation on a compact 6-DOF robotic platform. The public page presents the system concept and research direction while omitting the current hardware configuration, control implementation, calibration settings, and failure-recovery logic.

## Public prototype demonstration

<figure class="research-media research-media--result">
  <video controls muted loop playsinline preload="metadata" poster="{{ '/images/robotic-arm-grasp-public-poster.png' | relative_url }}" aria-label="Short physical robotic-arm grasp demonstration">
    <source src="{{ '/files/robotic-arm-grasp-public.webm' | relative_url }}" type="video/webm">
  </video>
  <figcaption>
    Short physical grasp demonstration from the prototype platform. The public clip is silent and excludes source audio, device and location metadata, runtime interfaces, source code, hardware identifiers, and control parameters.
  </figcaption>
</figure>

## My Contributions

- Built and integrated a compact robotic platform for language-conditioned interaction.
- Connected multimodal input with perception, motion, and execution feedback.
- Studying recoverable task execution while keeping implementation-level control details private during manuscript development.

Hardware identifiers, software modules, calibration data, and current control settings are intentionally omitted from the public page.

## Status

This project is associated with an ongoing working paper on audio-visual multimodal grasping compensation for low-cost open-loop robotic manipulators.
