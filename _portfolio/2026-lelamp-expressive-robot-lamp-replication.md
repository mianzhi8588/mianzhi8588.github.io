---
layout: research-project
title: "Multimodal Expressive Robot Lamp Prototype"
collection: portfolio
permalink: /portfolio/2026-multimodal-expressive-robot-lamp
redirect_from:
  - /portfolio/2026-lelamp-expressive-robot-lamp-replication
excerpt: "A LeLamp-inspired physical prototype integrating expressive motion, lighting, speech interaction, and conversational turn-taking at Tsinghua Future Laboratory."
date: 2026-01-01
status: "Physical prototype integrated"
research_area: "Expressive Robotics · Human–Robot Interaction"
research_stage: current
research_order: 6
---

## Research question

How can a small articulated robot communicate attention, intent, and conversational affect through motion, light, and speech? At the Future Laboratory, Tsinghua University, I developed a LeLamp-inspired physical prototype to explore coordinated multimodal expression.

## Main research

The platform connects articulated movement, programmable lighting, and spoken interaction. The research emphasis is on coordinating these channels into understandable behaviors and making conversational turn-taking reliable on physical hardware.

## Prototype demonstration

<figure class="research-media research-media--result">
  <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="metadata" poster="{{ '/images/lelamp-replication-demo-poster.png' | relative_url }}?v=1" aria-label="Early physical prototype demonstration of a multimodal expressive robot lamp">
    <source src="{{ '/files/lelamp-replication-demo.webm' | relative_url }}?v=1" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Early physical prototype demonstration, trimmed to 54.5 seconds. Spoken audio is retained because multimodal speech interaction is part of the prototype; the mechanical structure and behaviors are still under development.
  </figcaption>
</figure>

## My contributions

- Assembled and integrated the articulated lamp and investigated hardware-software faults, including mismatches between simulated motion and physical execution.
- Designed an expressive action library coordinating joint motion, lighting, and speech style, with behaviors for curiosity, attention, and positive affect.
- Built the speech-interaction chain and connected language-model responses with intent-sensitive action selection.
- Refined turn-taking and addressed microphone-speaker self-interference to reduce interruptions and incoherent responses.

## Current progress

The physical prototype combines spoken interaction with coordinated motion and lighting. Integration and interaction refinements have established a working platform for expressive behaviors. Mechanical finish, control robustness, and systematic user evaluation remain areas for further development.

## Further development

Future directions include more reliable turn-taking, clearer transitions between expressive behaviors, and user studies of how people interpret the robot's movement and multimodal cues.

## Open-source inspiration and attribution

The initial reference architecture was inspired by **LeLamp**, an open-source project from the **Human Computer Lab**. See the [LeLamp GitHub repository](https://github.com/humancomputerlab/LeLamp) and the [official project website](https://www.lelamp.com/about). This page documents my physical integration and subsequent interaction development at Tsinghua Future Laboratory.

## Status

Physical prototype and interaction integration developed during January–September 2026, with further refinement and evaluation identified as next steps.
