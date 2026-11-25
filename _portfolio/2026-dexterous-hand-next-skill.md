---
layout: research-project
title: "Which Dexterous Hand Will Learn the Next Skill?"
collection: portfolio
permalink: /portfolio/2026-dexterous-hand-next-skill
excerpt: "Using contact behavior on familiar tasks to study which hand geometries are better suited to learning new manipulation skills."
date: 2026-11-25
status: "RSS 2027 · Under Review"
research_area: "Dexterous Manipulation · Hand Design · Robot Learning"
research_stage: current
research_order: 1.5
---

**Authors:** Haoyang Wang, Xinmin Fang, Zhengxiong Li, Ying Wang, and Linfeng Tao.

## Research question

A dexterous hand may need to learn many skills after it is built. Retraining its controller is possible; moving a finger base or changing its geometry is more costly. What can familiar manipulation tasks tell us about which hand to choose before the next task is known?

Two hands might both rotate an object successfully, yet differ in how they keep it supported when a finger releases and moves to a new contact. This study asks whether such contact behavior provides useful evidence about a hand's capacity to learn new skills.

<figure class="research-media research-media--landscape">
  <img src="{{ '/images/rss-next-skill-overview.svg' | relative_url }}?v=20261125-3" alt="Study overview: observe support exchanges on familiar tasks, fix the hand geometry, and evaluate fresh learning on new skills." width="960" height="540">
  <figcaption>Research concept: contact behavior informs a design-time ranking; fresh controllers on fixed geometries test whether that ranking predicts learning on new skills. Schematic, not an experimental result.</figcaption>
</figure>

## Contact behavior as a design signal

Task success summarizes an outcome. Contact measurements also describe how the hand reaches it: which fingers maintain support, whether another finger can relocate, and how the palm participates. A support exchange occurs when a digit releases and returns at a new location while other digits continue holding the object.

The study compares success-based selection with a learned contact score, a support-exchange criterion, and a scripted physics screen. The goal is to test whether information available during familiar tasks helps rank candidate hand geometries for later learning.

## Testing learning on new skills

Only hand geometry crosses from design evaluation to the new-task stage. Controllers are trained afresh on withheld manipulation skills using those tasks' own rewards. Contact rewards, policy weights, and demonstrations are confined to the design stage.

The evaluation asks how well each design criterion ranks hands by performance over a fixed training budget. Learning curves capture both early acquisition and sustained success. Comparisons of contact occupancy, event order, and individual features examine what could explain a useful prediction.

## Current evidence

Preliminary Isaac Sim experiments replay a shared frozen controller on LEAP and Allegro. Successful object rotations can involve different palm-contact occupancy and finger-switching behavior. These observations motivate looking beyond terminal success when comparing hand designs.

The predictive value for learning new skills remains to be established through fresh target-task training. The current observations describe contact behavior in simulation; they do not establish that one hand will learn every new skill faster.

## Related manuscript

[Publication details and author list]({{ '/publication/2026-which-dexterous-hand-will-learn-the-next-skill' | relative_url }}) — RSS 2027 · Under Review.
