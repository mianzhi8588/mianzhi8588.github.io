---
title: "Low-Cost Multimodal Robotic Arm Platform"
collection: portfolio
permalink: /portfolio/2026-multimodal-robotic-arm-platform
excerpt: "A low-cost robotic arm platform integrating vision, audio, servo control, and LLM-based command interpretation."
date: 2026-05-01
---

<!-- Image placeholder 1: system photo -->
![Robotic arm system placeholder](/images/projects-robotic-arm-system.jpg)

<!-- Image placeholder 2: architecture diagram -->
![Robotic arm pipeline placeholder](/images/projects-robotic-arm-pipeline.jpg)

## Overview

This project explores a low-cost multimodal robotic arm platform for task-level interaction and grasping compensation. The system integrates a 6-DOF robotic arm, 3D-printed structures, Arduino-based servo control, ESP32-CAM visual sensing, INMP441 audio input, and LLM-based command interpretation.

## My Contributions

- Built a low-cost 6-DOF robotic arm platform with 3D-printed structure and open-loop servo actuation.
- Integrated visual and audio modules for task-level perception and interaction.
- Developed servo-smoothing interpolation and anti-jerk startup strategies to improve motion stability.
- Implemented OpenCV-based visual-servo error correction for grasping accuracy compensation.
- Explored an audio-vision-LLM pipeline for natural-language command parsing and task execution.

## Technical Stack

- Arduino UNO
- ESP32-CAM / OV2640
- INMP441 microphone
- Python
- OpenCV
- LLM-based command parsing

## Status

This project is associated with an ongoing working paper on audio-visual multimodal grasping compensation for low-cost open-loop robotic manipulators.
