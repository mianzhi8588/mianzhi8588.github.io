---
layout: research-project
title: "SAGE Hand: Hand Design and Learned In-Hand Manipulation"
collection: portfolio
permalink: /portfolio/2026-dexterous-manipulation-reinforcement-learning
excerpt: "Connecting LLM-assisted hand-model development, physically feasible design, and reinforcement learning for dexterous manipulation."
date: 2026-03-01
status: "ICRA 2027 · Under Review"
research_area: "Dexterous Manipulation · Reinforcement Learning"
research_stage: current
research_order: 2
---

## Research question

How can a generated hand model become a physically plausible, learnable manipulation system? SAGE Hand studies how hand morphology and learned control jointly affect object retention and in-hand rotation, rather than treating a visually convincing model as sufficient evidence of manipulation capability.

## Main research

The project connects LLM-assisted model development with iterative structural refinement, simulation-based policy learning, and behavior-level evaluation. Candidate designs are examined for usable motion and contact behavior before their manipulation performance is compared. The study also compares learned behavior with established hand models across objects with different geometric demands.

## My contributions

- Developed an LLM-assisted workflow for generating and refining simulation-ready dexterous-hand models.
- Connected hand-model revisions with policy learning and controlled in-hand manipulation experiments.
- Evaluated object retention, rotation behavior, and failure cases to relate structural changes to learned performance.

## SAGE Hand research video

<figure class="research-media research-media--landscape">
  <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/sage-hand-public-preview.jpg' | relative_url }}" aria-label="SAGE Hand public research preview">
    <source src="{{ '/files/sage-hand-public-preview.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>
    Public preview: selected simulation behavior. Full demonstrations are available for research discussions on request.
  </figcaption>
</figure>

<p class="research-request"><strong>Interested in the full study?</strong> <a href="mailto:vwang6925@gmail.com?subject=Research%20demonstration%20request">Request a full research demonstration →</a></p>

## Main findings

**Hand design affects what a learned policy can achieve.** In the evaluated design sequence, structural refinement improves overall manipulation performance, and the final design reduces the elevated object-drop behavior observed in intermediate versions. The evidence supports evaluating morphology and control together.

**Performance remains task dependent.** The demonstrated comparisons show promising object retention and rotation behavior, including stronger results on the cylinder task within the evaluated setup. The cube remains more challenging; a representative motion window should not be interpreted as proof of a successful full rotation.

The current results are simulation findings. They do not establish uniform superiority across objects, policies, or physical hardware.

## Further development

Future directions include testing a wider range of objects and initial conditions, isolating the effects of individual design choices, and studying robustness to contact and modeling uncertainty. Longer-term work will examine hardware feasibility and the gap between simulated and physical manipulation.

## Research context

Collaborative research with Dr. Lingfeng Tao, Kennesaw State University. The study is ongoing. This page presents the main ideas and qualitative results; geometry specifications, training settings, and detailed evaluation protocols are reserved for the manuscript.

## Related submission

[Manuscript details]({{ '/publication/2026-llm-assisted-dexterous-hand-robot-learning' | relative_url }}) — ICRA 2027 · Under Review.
