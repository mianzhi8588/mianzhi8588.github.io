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

## Research question

How can a low-cost robotic arm translate natural-language instructions into reliable physical actions despite limited sensing and open-loop actuation? This project connects language, vision, audio, and execution feedback at the task level.

## Main research

The platform studies multimodal grasping and language-conditioned manipulation on a compact 6-DOF arm. A central direction is to let an LLM select constrained, verifiable robot actions while the motion-control layer handles physical execution.

## Prototype demonstration

<figure class="research-media research-media--result">
  <video controlslist="nodownload" oncontextmenu="return false;" controls muted loop playsinline preload="metadata" poster="{{ '/images/robotic-arm-grasp-public-poster.png' | relative_url }}" aria-label="Short physical robotic-arm grasp demonstration">
    <source src="{{ '/files/robotic-arm-grasp-public.webm' | relative_url }}" type="video/webm">
  </video>
  <figcaption>
    Short physical grasp demonstration from the prototype platform. The public clip is silent and excludes source audio, device and location metadata, runtime interfaces, source code, hardware identifiers, and control parameters.
  </figcaption>
</figure>

## My contributions

- Built and integrated the physical arm, multimodal sensing, and language-to-action workflow.
- Implemented motion smoothing and visual correction to reduce actuation jitter and improve grasping behavior.
- Developed a pipeline from natural-language requests to executable manipulation plans, and explored audio feedback for contact and grasp-state monitoring.

## Current progress

The prototype demonstrates physical grasping and integrated perception-to-action behavior. Motion smoothing and visual feedback improve control in the current hardware setting. Reliable task verification and recovery remain active work; the prototype is not presented as a general-purpose autonomous manipulation system.

## Further development

Next steps include a richer set of constrained actions, stronger execution verification, and recovery from failed grasps. Further evaluation will examine the usefulness of audio feedback alongside vision under different manipulation conditions.

## Status

Ongoing development and a related working paper on audio-visual multimodal grasping compensation. Detailed calibration and control settings are not included in this public overview.
