---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download my full PDF CV here](/files/Haoyang_Wang_CV.pdf)

## Summary

I am an M.S. student in Mechanical Engineering at Beijing University of Chemical Technology, with research spanning intelligent fault diagnosis, sensor signal recovery, and multimodal robotic systems. I am seeking PhD opportunities in robotic manipulation, intelligent control, multimodal perception, and embodied AI.

My research interests include multimodal robotic control, real-time perception, mechanical fault diagnosis, signal recovery beyond hardware limits, and AI-enabled physical systems.

## Education

**Beijing University of Chemical Technology**  
*M.S. in Mechanical Engineering, Sept. 2024 – Present*  
Beijing, China  

- Major GPA: 3.54/4.0
- Ranking: 2/106, Top 2%
- Related Coursework: Embedded System Virtual Instruments and Graphic Programming; Mechanical Virtual Design and Application

**Beijing University of Chemical Technology**  
*B.Eng. in Process Equipment and Control Engineering, Sept. 2019 – Jul. 2023*  
Beijing, China  

- Ranking: Top 10%
- Related Coursework: Mechanical Principles; Mechanical Design; Process Equipment Design; C Language

**Additional Coursework in Business Administration**  
*Sept. 2023 – Jul. 2024*  

- Related Coursework: Production and Operations Management; Organizational Behavior; Marketing

## Appointments and Internships

**The Future Laboratory, Tsinghua University**  
*Research Assistant, Sept. 2025 – Present*  

- Conduct research on multimodal robotic control and Pixar-inspired intelligent desk lamps.
- Work on sensor signal recovery, robotic hand control, and hardware-oriented control systems.

**Innovation Lab, Harvard University**  
*Algorithm Intern, Apr. 2026 – Present*  

- Engineered a cloud-based quotation backend for a Harvard Innovation Lab startup.
- Built reusable object-oriented modules for product size calculation and pricing rules.
- Integrated FastAPI APIs, user authentication, file management, AWS EC2 deployment, and database-backed result storage.

**China Development Research Foundation**  
*Student Intern, Apr. 2024 – Jul. 2024*  

- Supported research and documentation for the China Ministry of Civil Affairs’ social organization evaluation.
- Organized institutional materials, reviewed historical records, and examined government policies and peer charitable organizations.

## Research Experience

### Inertial Sensor Recovery and Dexterous Hand Control

*Researcher, Sept. 2025 – Present*

- Designed a lightweight signal-recovery framework for short-term IMU overload, leveraging multi-axis coupling to reconstruct saturated channels through overload detection, threshold gating, low-pass filtering, and physics-/geometry-constrained extrapolation with adaptive window selection.
- Validated the method on the HuGaDB human-gait dataset, MATLAB simulations, and self-collected IMU recordings.
- Benchmarked against Kalman filter, CLPE, and ARLS methods, achieving superior composite scores across the full HuGaDB dataset with low memory footprint and real-time performance.
- Implemented multi-motor control for a multi-DOF dexterous robotic hand.
- Integrated recovered IMU signals into closed-loop feedback for downstream manipulation experiments.

### Multimodal Robotic Arm Research

*Project Leader, Mar. 2026 – Present*

- Built a 6-DOF robotic arm with 3D-printed structure, controlled via Arduino UNO with ESP32-CAM/OV2640 vision and INMP441 audio modules.
- Developed servo-smoothing interpolation and anti-jerk startup strategies to reduce open-loop noise.
- Implemented OpenCV-based visual-servo error correction for grasping accuracy compensation.
- Designed an audio-vision-LLM pipeline that parses natural-language commands into task plans.
- Used audio cues to compensate for the absence of tactile sensing during grasping.
- This project serves as the basis for a working paper on audio-visual grasping compensation for low-cost open-loop manipulators.

### Wind Power Generation Online Detection and Fault Diagnosis Platform

*Researcher, 2025 – Present*

- Built a deep-learning algorithm library in PyTorch, including CNN, CNN-LSTM, RNN, One-Class SVM, and Normalizing Flow models.
- Developed models to identify abnormal operating states and incipient faults from multimodal SCADA data.
- Addressed source-domain-free deployment by combining prior knowledge with joint training.
- Worked on class imbalance, cross-turbine generalization, and online-inference constraints in industrial wind-farm settings.

### Development of Bearing Fault Diagnosis Software

*Researcher, 2025*

- Developed a PyQt5 desktop application with four integrated modules: data preprocessing, model training, intelligent diagnosis, and visual analysis.
- Converted research-stage scripts into a tool usable by non-algorithm engineers.
- Implemented FFT, time-domain and frequency-domain feature extraction, and CNN-LSTM diagnostic models with interpretable outputs.
- Validated the system on CWRU benchmark datasets.

### Intelligent Vibration Reduction Support Design

*Researcher, Undergraduate Design Project, Oct. 2022 – Jun. 2023*

- Designed an active vibration-suppression platform using a voice-coil motor to output controllable force and displacement.
- Modeled mechanical and signal dynamics in MATLAB and conducted Simulink/Simscape simulations.
- Built a physical test rig with a LabVIEW control interface.
- Demonstrated significant active damping in the 253–295 Hz resonance band of the controlled object.

### Advanced Radiation Cooling Film Technology by Electrospinning

*Project Leader, Nov. 2021 – Nov. 2022*

- Investigated passive radiative cooling through electrospun thin-film fabrication and experimental thermal-performance evaluation.
- Built and tested an insulated-box setup to validate cooling effects.
- Supported prototype exploration for automotive applications.

## Academic Exchanges

**Academic Exchange Program, Singapore — NUS & NTU**

- Engaged in faculty-led academic exchanges on technological innovation systems, AI governance, and social management.
- Explored how innovation policy, data governance, and institutional frameworks shape technology adoption in public and private sectors.

## Publications

1. Yuanhao Geng, Gang Tang*, and Haoyang Wang, “Domain Adaptation With Joint Distribution Alignment Adversarial Learning for Open-Set Bearing Intelligent Fault Diagnosis,” *IEEE Sensors Journal*, DOI: [10.1109/JSEN.2025.3576833](https://doi.org/10.1109/JSEN.2025.3576833).

2. Guangyi Chen, Haoyang Wang, and Gang Tang*, “TFMNet: An Interpretable Time-Frequency Mode Network for Mechanical Equipment Fault Diagnosis under Variable Speed Conditions,” *Advanced Engineering Informatics*, under review.

3. Haoyang Wang, Jianing Li, Xi Li, Shichao Zhang, and Gang Tang*, “A Physics-Guided Multi-Domain Representation Framework for Intelligent Fault Diagnosis of Rotating Machinery,” *Engineering Applications of Artificial Intelligence*, under review.

4. Haoyang Wang, Jianing Li, Longjie Hu, Guandong Feng, Guangyi Chen, and Gang Tang*, “Temperature-Conditioned Flow-Based Multimodal Representation Learning for Intrinsic Fault Manifolds,” *Mechanical Systems and Signal Processing*, under review.

5. Haoyang Wang, Jiale Gao*, et al., “Inertial Perception Recovery beyond the Hardware Dynamic Range under Short-Term Overrange Conditions,” working paper.

6. Haoyang Wang, Jiale Gao*, et al., “Audio-Visual Multimodal Grasping Compensation System for Low-Cost Open-Loop Servo Robotic Arm,” working paper.

7. Haoyang Wang, Lidong Huang*, and Haozhe Zhang, “Research on the Design and Intelligent Control Method of Active-Passive Collaborative Shock Absorption System for Vibration Suppression,” working paper.

8. Xi Li, Haoyang Wang, and Gang Tang*, “Fault Diagnosis of Control Moment Gyroscope Based on Finite Element Simulation and Cyclic Generative Adversarial Network,” working paper.

## Honors and Activities

**Honors**

- National Scholarship
- First-Class Scholarship
- Jin-Ming Encouragement Scholarship
- People’s Scholarship, First-Class

**Competitions**

- First Prize, Germination Cup Mathematical Modeling Competition
- Second Prize, Internet+ Competition
- Second Prize, 2D & 3D Engineering Graphics Competition
- Qualified, College Student Innovation and Entrepreneurship Competition

**Leadership**

- Class Monitor
- Debate Team Leader
- President of the Student Union of the college

**Arts**

- Second Place, Argentine Tango, Beijing University Sports Dance Association
- Fifth Place, Group B Modern Dance, Foxtrot, Beijing University Sports Dance Association

## Technical Skills and Languages

**Programming:** Python, PyTorch, PyQt5, FastAPI, OpenCV, MATLAB, Simulink, C  

**Embedded Systems:** STM32, Arduino  

**Engineering Software:** SolidWorks, Creo, AutoCAD, ANSYS, Adams, LabVIEW  

**Cloud and Tools:** AWS EC2, Git, GitHub  

**Languages:** Chinese, native; English, proficient; Japanese, basic
