---
permalink: /
title: "Haoyang Wang"
excerpt: "Haoyang Wang works across intelligent sensing, robot learning, robotic manipulation, multimodal perception, and embodied intelligence."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="research-hero">
  <p class="research-hero__role">M.S. Student in Mechanical Engineering</p>
  <p class="research-hero__affiliation">Research Assistant, Future Laboratory, Tsinghua University</p>
  <p class="research-hero__areas">Intelligent Sensing · Robot Learning · Robotic Manipulation · Multimodal Perception · Embodied Intelligence</p>
</section>

## About me

I am an M.S. student in Mechanical Engineering at **Beijing University of Chemical Technology** and a Research Assistant at the **Future Laboratory, Tsinghua University**. My research spans **intelligent fault diagnosis, sensor signal recovery, and multimodal robotic systems**.

My current work extends across **intelligent sensing, robot learning, robotic manipulation, multimodal perception, and embodied AI**. I am particularly interested in how sensing, learning, and control can be integrated to enable more capable and reliable intelligent physical systems.

<p class="research-opportunity">I am seeking Fall 2027 PhD opportunities in robotic manipulation, intelligent control, multimodal perception, and embodied AI.</p>

## Current research

<p class="section-intro">My current projects span robot-code evaluation, dexterous manipulation, inertial signal recovery, multimodal robotic control, and wearable sensing.</p>

<div class="current-research-grid">
  <article class="current-research-card current-research-card--wide">
    <div class="current-research-card__copy">
      <span>LLM-based robotics · George Mason University collaboration</span>
      <h3><a href="{{ '/portfolio/2026-llm-robot-code-safety' | relative_url }}">Hidden Safety Violations in LLM-Generated Robot Code</a></h3>
      <p>A MuJoCo-based Franka Emika Panda testbed for detecting collisions, velocity violations, grasp failures, object drops, and restricted-workspace violations in functionally correct robot programs.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-llm-robot-code-safety' | relative_url }}">Safety evaluation and repair workflow →</a>
    </div>
  </article>

  <article class="current-research-card">
    <div class="current-research-card__visual">
      <video controls muted playsinline preload="metadata" poster="{{ '/images/dexterous-hand-rl-training-poster.png' | relative_url }}" aria-label="Dexterous-hand reinforcement-learning training demonstration">
        <source src="{{ '/files/dexterous-hand-rl-training-web.webm' | relative_url }}" type="video/webm">
        <source src="{{ '/files/dexterous-hand-rl-training.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>Robot learning · Kennesaw State University collaboration</span>
      <h3><a href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">Dexterous Manipulation & Reinforcement Learning</a></h3>
      <p>Prompt-guided hand-model generation, CAD/URDF/MJCF refinement, TD3 + HER, and drop-aware evaluation for sparse-reward dexterous manipulation.</p>
    </div>
  </article>

  <article class="current-research-card">
    <div class="current-research-card__visual current-research-card__visual--portrait">
      <video controls muted playsinline preload="metadata" poster="{{ '/images/imu-overrange-data-collection-poster.png' | relative_url }}" aria-label="IMU overrange data collection demonstration">
        <source src="{{ '/files/imu-overrange-data-collection-web.webm' | relative_url }}" type="video/webm">
        <source src="{{ '/files/imu-overrange-data-collection.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>Intelligent sensing · Signal recovery</span>
      <h3><a href="{{ '/portfolio/2025-inertial-perception-overrange-recovery' | relative_url }}">Inertial Sensor Overrange Recovery</a></h3>
      <p>A lightweight framework combining overload detection, multi-axis coupling, adaptive windows, filtering, and geometry-constrained extrapolation.</p>
    </div>
  </article>

  <article class="current-research-card current-research-card--wide current-research-card--media-left">
    <div class="current-research-card__visual">
      <video controls muted playsinline preload="metadata" poster="{{ '/images/arm-video1-poster.png' | relative_url }}" aria-label="Language-conditioned robotic-arm demonstration">
        <source src="{{ '/files/arm-video1-web.webm' | relative_url }}" type="video/webm">
        <source src="{{ '/files/arm_video1.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>Multimodal perception · Robotic manipulation</span>
      <h3><a href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}">Language-Conditioned Agentic Control for a 6-DOF Robotic Manipulator</a></h3>
      <p>A complete audio-visual robotic system that maps natural-language instructions to constrained perception, pose estimation, inverse kinematics, motion, verification, and failure-recovery primitives.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}">System architecture and demonstrations →</a>
    </div>
  </article>

  <article class="current-research-card current-research-card--compact">
    <div class="current-research-card__visual current-research-card__visual--portrait">
      <video controls muted playsinline preload="metadata" poster="{{ '/images/textile-capacitive-sensing-poster.png' | relative_url }}" aria-label="Textile capacitive sensing prototype demonstration">
        <source src="{{ '/files/textile-capacitive-sensing-demo-web.webm' | relative_url }}" type="video/webm">
        <source src="{{ '/files/textile-capacitive-sensing-demo.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>Wearable sensing · Human-robot interaction</span>
      <h3><a href="{{ '/portfolio/2026-textile-capacitive-sensing-robot-arm' | relative_url }}">Textile-Integrated Capacitive Sensing for Robotic Arm Control</a></h3>
      <p>An early-stage interface for capturing gesture, contact, and deformation signals and mapping them to robot commands with attention to calibration, repeatability, and latency.</p>
    </div>
  </article>
</div>

<p class="view-all-link"><a href="{{ '/portfolio/' | relative_url }}">View all research projects →</a></p>

## Publications & manuscripts

<div class="publication-pipeline">
  <section>
    <h3>Published</h3>
    <article>
      <span>IEEE Sensors Journal · 2025</span>
      <h4><a href="{{ '/publication/2025-domain-adaptation-open-set-bearing-fault-diagnosis' | relative_url }}">Domain Adaptation With Joint Distribution Alignment Adversarial Learning for Open-Set Bearing Intelligent Fault Diagnosis</a></h4>
      <p>Yuanhao Geng, Gang Tang*, and Haoyang Wang.</p>
    </article>
  </section>
  <section>
    <h3>Under review</h3>
    <article>
      <span>Advanced Engineering Informatics · Under Review</span>
      <h4><a href="{{ '/publication/2026-tfmnet-variable-speed-fault-diagnosis' | relative_url }}">TFMNet: An Interpretable Time-Frequency Mode Network for Mechanical Equipment Fault Diagnosis under Variable Speed Conditions</a></h4>
    </article>
    <article>
      <span>Engineering Applications of Artificial Intelligence · Under Review</span>
      <h4><a href="{{ '/publication/2026-physics-guided-multi-domain-representation-framework' | relative_url }}">A Physics-Guided Multi-Domain Representation Framework for Intelligent Fault Diagnosis of Rotating Machinery</a></h4>
    </article>
  </section>
  <section>
    <h3>Manuscripts / working papers</h3>
    <article><h4><a href="{{ '/publication/2026-flow-based-multimodal-representations-temperature-information' | relative_url }}">Temperature-Conditioned Flow-Based Multimodal Representation Learning for Intrinsic Fault Manifolds</a></h4><span>Manuscript completed; being revised for resubmission</span></article>
    <article><h4><a href="{{ '/publication/2026-llm-robot-code-safety' | relative_url }}">Hidden Safety Violations in LLM-Generated Robot Code</a></h4><span>Working Paper</span></article>
    <article><h4><a href="{{ '/publication/2026-llm-assisted-dexterous-hand-robot-learning' | relative_url }}">LLM-Generated Dexterous-Hand Models for Reinforcement Learning</a></h4><span>Working Paper</span></article>
    <article><h4><a href="{{ '/publication/2026-inertial-perception-recovery-overrange-conditions' | relative_url }}">Inertial Perception Recovery beyond the Hardware Dynamic Range under Short-Term Overrange Conditions</a></h4><span>Preparing for Submission</span></article>
    <article><h4><a href="{{ '/publication/2026-audio-visual-multimodal-grasping-compensation-robotic-arm' | relative_url }}">Audio-Visual Multimodal Grasping Compensation System for Low-Cost Open-Loop Servo Robotic Arm</a></h4><span>Working Paper</span></article>
    <article><h4><a href="{{ '/publication/2026-active-passive-collaborative-shock-absorption-system' | relative_url }}">Research on the Design and Intelligent Control Method of Active-Passive Collaborative Shock Absorption System for Vibration Suppression</a></h4><span>Working Paper</span></article>
    <article><h4><a href="{{ '/publication/2026-control-moment-gyroscope-fault-diagnosis' | relative_url }}">Fault Diagnosis of Control Moment Gyroscope Based on Finite Element Simulation and Cyclic Generative Adversarial Network</a></h4><span>Working Paper</span></article>
  </section>
</div>

<p class="view-all-link"><a href="{{ '/publications/' | relative_url }}">View publication details and author lists →</a></p>

## Selected earlier research

<div class="earlier-research-grid">
  <article>
    <span>Intelligent fault diagnosis · 2025</span>
    <h3><a href="{{ '/portfolio/2025-wind-power-fault-diagnosis-platform' | relative_url }}">Wind Turbine Condition Monitoring and Bearing Fault Diagnosis Platform</a></h3>
    <p>A PyTorch diagnostic library and PyQt5 platform spanning CNN, CNN-LSTM, RNN, One-Class SVM, Normalizing Flow, multimodal SCADA/vibration data, FFT features, class imbalance, source-free deployment, and cross-machine generalization.</p>
  </article>
  <article>
    <span>Mechanical engineering and control · 2022–2023</span>
    <h3><a href="{{ '/portfolio/2023-active-vibration-suppression-platform' | relative_url }}">Intelligent Vibration Reduction Support Design</a></h3>
    <p>An active vibration-suppression platform using a voice-coil motor, MATLAB/Simulink/Simscape modeling, a physical test platform, and LabVIEW control in the 253–295 Hz resonance range.</p>
  </article>
  <article>
    <span>Functional materials · 2022</span>
    <h3><a href="{{ '/portfolio/2022-radiative-cooling-film-electrospinning' | relative_url }}">Radiative Cooling Films Prepared by Electrospinning</a></h3>
    <p>Material selection, electrospun film fabrication, and controlled thermal-performance experiments for passive radiative cooling under sunlight exposure.</p>
  </article>
  <article>
    <span>Multiphase fluid dynamics · 2021</span>
    <h3><a href="{{ '/portfolio/2021-droplet-impact-thin-films' | relative_url }}">Dynamics of Droplet Impact on Thin Films</a></h3>
    <p>High-speed imaging and dimensionless analysis of droplet spreading, crown formation, and morphological evolution across impact heights and film thicknesses.</p>
  </article>
</div>

## Connect

<div class="research-links">
  <a href="https://github.com/mianzhi8588">GitHub</a>
  <a href="mailto:vwang6925@gmail.com">Email</a>
  <a href="https://orcid.org/0009-0004-3822-8083">ORCID</a>
</div>

<p class="research-contact-note">For research discussions or PhD opportunities, please contact me at <a href="mailto:vwang6925@gmail.com">vwang6925@gmail.com</a>.</p>
