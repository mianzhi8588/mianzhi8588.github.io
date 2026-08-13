---
layout: research-project
title: "Dexterous Manipulation and Reinforcement Learning"
collection: portfolio
permalink: /portfolio/2026-dexterous-manipulation-reinforcement-learning
excerpt: "LLM-assisted hand-model generation and simulation-based learning for dexterous manipulation."
date: 2026-03-01
status: "Ongoing research"
research_area: "Dexterous Manipulation · Reinforcement Learning"
research_stage: current
research_order: 2
---

## Overview

This project studies how generated dexterous-hand models, simulation, and policy learning can be connected into a repeatable manipulation workflow. Because the work is ongoing, the public page shows representative model motion and task behavior without exposing training configurations or numerical results.

## Generated hand-model motion

<figure class="research-media research-media--landscape">
  <video controls muted loop playsinline preload="metadata" poster="{{ '/images/generated-dexterous-hand-motion-poster.png' | relative_url }}" aria-label="Motion study of a generated dexterous-hand model">
    <source src="{{ '/files/generated-dexterous-hand-motion.webm' | relative_url }}" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    A short motion study of a generated hand model. Version identifiers, geometry parameters, and diagnostic overlays have been removed from the public clip.
  </figcaption>
</figure>

## Representative manipulation behavior

<figure class="research-media research-media--landscape">
  <video controls muted loop playsinline preload="metadata" poster="{{ '/images/dexterous-hex-prism-public-poster.png' | relative_url }}" aria-label="Short dexterous-hand demonstration with a hexagonal prism">
    <source src="{{ '/files/dexterous-hex-prism-public.webm' | relative_url }}" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    An edited 11.4-second research-stage demonstration. Parameter overlays and quantitative acceptance criteria have been removed from this public version.
  </figcaption>
</figure>

## My contributions

- Developing an LLM-assisted workflow for generating and refining simulation-ready hand models.
- Connecting model design with policy learning and controlled manipulation studies.
- Designing behavior-level evaluation that separates task completion from unstable or physically invalid outcomes.

## Research context

Collaborative research with Dr. Lingfeng Tao, Kennesaw State University.

Implementation details, hyperparameters, versioned geometries, and current benchmark values are intentionally omitted while the working paper is in progress.

## Status

Ongoing collaborative research.
