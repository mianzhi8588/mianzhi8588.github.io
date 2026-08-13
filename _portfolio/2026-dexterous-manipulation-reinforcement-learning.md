---
layout: research-project
title: "Dexterous Manipulation and Reinforcement Learning"
collection: portfolio
permalink: /portfolio/2026-dexterous-manipulation-reinforcement-learning
excerpt: "LLM-assisted hand-model generation and drop-aware reinforcement learning for sparse-reward dexterous manipulation."
date: 2026-03-01
status: "Ongoing research"
research_area: "Dexterous Manipulation · Reinforcement Learning"
research_stage: current
research_order: 2
---

## Overview

This project studies how dexterous-hand design, simulation, and policy learning can be connected in a repeatable workflow, from parametric hand descriptions to sparse-reward manipulation experiments.

## Hexagonal-prism Rotate-Z demonstration

<figure class="research-media research-media--landscape">
  <video controls muted loop playsinline preload="metadata" poster="{{ '/images/dexterous-hex-prism-keyframes.png' | relative_url }}" aria-label="Dexterous hand continuously rotating a hexagonal prism around the vertical axis">
    <source src="{{ '/files/dexterous-hex-prism-multiturn-rotate-z.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    A current simulation result for continuous multi-turn rotation around the vertical axis. The policy must maintain contact with the hexagonal prism while accumulating controlled rotation; this clip is a research-stage result rather than a final benchmark.
  </figcaption>
</figure>

<figure class="research-media research-media--result">
  <img src="{{ '/images/dexterous-multiturn-training-curves.png' | relative_url }}" alt="Training and deterministic evaluation curves for continuous multi-turn Rotate-Z">
  <figcaption>
    Training and deterministic evaluation view for the multi-turn Rotate-Z experiment, including the 720-degree acceptance threshold and object-loss behavior. These curves document ongoing experimentation and may change as training and evaluation protocols are refined.
  </figcaption>
</figure>

## My contributions

- Developing a prompt-guided LLM workflow for generating and iteratively refining parametric dexterous-hand models, including CAD geometry and simulation-ready URDF and MJCF descriptions.
- Began with LEAP Hand-inspired designs and extended the workflow toward tendon-driven architectures.
- Built a TD3 + HER training pipeline in MuJoCo/Gymnasium-Robotics for sparse-reward dexterous manipulation.
- Investigated drop-aware HER strategies that selectively relabel post-drop transitions.
- Designed checkpoint-based metrics to distinguish task success, transient drops, and persistent failures, and to study trade-offs among relabeling quality, diversity, stability, and final performance.

## Research context

Collaborative research with Dr. Lingfeng Tao, Kennesaw State University.

## Methods

MuJoCo · Gymnasium-Robotics · TD3 · Hindsight Experience Replay · URDF/MJCF · Parametric CAD

## Status

Ongoing collaborative research.
