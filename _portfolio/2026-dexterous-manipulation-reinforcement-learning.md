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

## Training demonstration

<figure class="research-media research-media--landscape">
  <video controls muted loop playsinline preload="metadata" poster="{{ '/images/dexterous-hand-rl-training-poster.png' | relative_url }}" aria-label="Dexterous-hand reinforcement learning training demonstration">
    <source src="{{ '/files/dexterous-hand-rl-training-web.webm' | relative_url }}" type="video/webm">
    <source src="{{ '/files/dexterous-hand-rl-training.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    A representative reinforcement-learning training run in simulation. The clip illustrates the current training environment and behavior rather than a final benchmark result.
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
