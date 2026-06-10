---
title: "Low-Cost Multimodal Robotic Arm Platform"
collection: portfolio
permalink: /portfolio/2026-multimodal-robotic-arm-platform
excerpt: "A low-cost robotic arm platform integrating vision, audio, servo control, and LLM-based command interpretation."
date: 2026-05-01
---
## Overview

This project explores a low-cost multimodal robotic arm platform for task-level interaction and grasping compensation. The system integrates a 6-DOF robotic arm, 3D-printed structures, Arduino-based servo control, ESP32-CAM visual sensing, INMP441 audio input, and LLM-based command interpretation.

## System Runtime Interfaces

<figure style="text-align:center;">
  <img src="{{ '/images/image_hear.png' | relative_url }}" 
       alt="Speech recognition interface for robotic arm control" 
       style="width:100%; max-width:800px; display:block; margin:auto;">
  <figcaption style="font-size:0.9em; color:#666; margin-top:8px;">
    Figure 1. Speech-command recognition interface for robotic arm control. The system listens to spoken instructions and converts them into task-level commands.
  </figcaption>
</figure>

<br>

<figure style="text-align:center;">
  <img src="{{ '/images/image_action.png' | relative_url }}" 
       alt="LLM-based command interpretation for robotic arm action execution" 
       style="width:100%; max-width:800px; display:block; margin:auto;">
  <figcaption style="font-size:0.9em; color:#666; margin-top:8px;">
    Figure 2. LLM-based command interpretation interface. Natural-language commands are analyzed and mapped to robotic actions such as grasping or object manipulation.
  </figcaption>
</figure>

## Running Demonstration Videos

<figure style="text-align:center;">
  <video controls muted preload="auto" playsinline
         style="width:100%; max-width:800px; aspect-ratio:16/9; object-fit:contain; display:block; background:#000; border-radius:8px;">
    <source src="{{ '/files/arm_video1.mp4' | relative_url }}#t=0.001" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="font-size:0.9em; color:#666; margin-top:8px;">
    Video 1. Demonstration of the robotic arm responding to a task-level command.
  </figcaption>
</figure>

<br>

<figure style="text-align:center;">
 <video controls muted preload="auto" playsinline
         style="width:100%; max-width:800px; aspect-ratio:16/9; object-fit:contain; display:block; background:#000; border-radius:8px;">
    <source src="{{ '/files/arm_video2.mp4' | relative_url }}#t=0.001" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="font-size:0.9em; color:#666; margin-top:8px;">
    Video 2. Demonstration of robotic arm motion in Mojoco environment.
  </figcaption>
</figure>

<br>

<figure style="text-align:center;">
  <video controls muted preload="auto" playsinline
         style="width:100%; max-width:800px; aspect-ratio:16/9; object-fit:contain; display:block; background:#000; border-radius:8px;">
    <source src="{{ '/files/arm_video3.mp4' | relative_url }}#t=0.001" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="font-size:0.9em; color:#666; margin-top:8px;">
    Video 3. Kinematic forward and inverse solution video.
  </figcaption>
</figure>

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
