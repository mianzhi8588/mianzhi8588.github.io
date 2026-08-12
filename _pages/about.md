---
permalink: /
title: "About me"
excerpt: "Haoyang Wang researches reliable embodied intelligence, multimodal robot perception, and intelligent sensing."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="research-alert">
  <span>PhD applications · Fall 2027</span>
  I am seeking doctoral opportunities in robot learning, multimodal perception, intelligent control, and embodied AI.
</div>

I am an M.S. student in Mechanical Engineering at **Beijing University of Chemical Technology** and a Research Assistant at the **Future Laboratory, Tsinghua University**. I build sensing and learning methods for robots and intelligent physical systems operating with imperfect sensors, inexpensive hardware, and uncertain environments.

My research began with mechanical-system health and fault diagnosis. That work led me from recognizing hidden machine states, to recovering information lost at the sensor level, and finally to asking how robots can use multimodal signals to act reliably. Today, I work across **intelligent sensing, robot learning, and safety-aware embodied intelligence**.

## Research agenda

<div class="research-agenda">
  <article>
    <p class="research-number">01 · Sense and recover</p>
    <h3>Reliable perception under sensor limits</h3>
    <p>Recovering saturated inertial signals and fusing vision, audio, tactile, and condition data into useful physical-state representations.</p>
    <a href="{{ '/portfolio/2025-inertial-sensor-recovery-dexterous-hand' | relative_url }}">IMU overrange recovery →</a>
  </article>
  <article>
    <p class="research-number">02 · Learn and manipulate</p>
    <h3>Robot learning on practical hardware</h3>
    <p>Studying language-conditioned manipulation, reinforcement learning, and failure-aware control on low-cost arms and dexterous hands.</p>
    <a href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">Dexterous manipulation →</a>
  </article>
  <article>
    <p class="research-number">03 · Verify and generalize</p>
    <h3>Safe behavior beyond nominal tests</h3>
    <p>Evaluating physical-safety violations in LLM-generated robot programs and improving robustness under perturbations and distribution shift.</p>
    <a href="{{ '/portfolio/2026-llm-robot-code-safety' | relative_url }}">LLM robot-code safety →</a>
  </article>
</div>

## Research in practice

<p class="section-intro">The projects below connect sensing, learning, and physical interaction. Each visual is linked to a project page with the system context, my contribution, and the evidence currently available.</p>

<div class="research-showcase">
  <article class="research-showcase__feature">
    <div class="research-showcase__media">
      <video controls autoplay muted loop playsinline preload="metadata" poster="{{ '/images/image_action.png' | relative_url }}" aria-label="Language-conditioned low-cost robotic arm demonstration">
        <source src="{{ '/files/arm_video1.mp4' | relative_url }}#t=0.001" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <span class="media-label">Hardware demo</span>
    </div>
    <div class="research-showcase__copy">
      <p class="research-kicker">Multimodal manipulation</p>
      <h3>From language and perception to physical action</h3>
      <p>A low-cost 6-DOF platform combines audio, vision, constrained agent tools, and grasp compensation to study dependable task execution on practical hardware.</p>
      <a href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}">Explore the system →</a>
    </div>
  </article>

  <article class="research-showcase__feature research-showcase__feature--reverse">
    <div class="research-showcase__media">
      <img src="{{ '/images/lelamp-replication-concept.png' | relative_url }}" alt="Concept illustration of an expressive articulated robot lamp">
      <span class="media-label">Concept illustration</span>
    </div>
    <div class="research-showcase__copy">
      <p class="research-kicker">Expressive robotics · Tsinghua Future Laboratory</p>
      <h3>Rebuilding an open-source robot lamp as an HRI platform</h3>
      <p>An ongoing LeLamp-inspired replication studies articulated motion, perception, and expressive physical behavior. The page distinguishes the original open-source design from my current engineering work.</p>
      <a href="{{ '/portfolio/2026-lelamp-expressive-robot-lamp-replication' | relative_url }}">View the replication project →</a>
    </div>
  </article>
</div>

<div class="research-media-grid">
  <a class="research-media-card" href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">
    <div class="research-media-card__visual">
      <video autoplay muted loop playsinline preload="metadata" aria-label="Dexterous-hand reinforcement-learning training demonstration">
        <source src="{{ '/files/dexterous-hand-rl-training.mp4' | relative_url }}#t=0.001" type="video/mp4">
      </video>
    </div>
    <span>Training demo</span>
    <h3>Dexterous manipulation with TD3 + HER</h3>
  </a>
  <a class="research-media-card" href="{{ '/portfolio/2025-inertial-sensor-recovery-dexterous-hand' | relative_url }}">
    <div class="research-media-card__visual research-media-card__visual--portrait">
      <video autoplay muted loop playsinline preload="metadata" poster="{{ '/images/imu-overrange-data-collection-poster.png' | relative_url }}" aria-label="IMU overrange data collection demonstration">
        <source src="{{ '/files/imu-overrange-data-collection.mp4' | relative_url }}#t=0.5" type="video/mp4">
      </video>
    </div>
    <span>Data collection demo</span>
    <h3>Recovering information beyond IMU range</h3>
  </a>
  <a class="research-media-card" href="{{ '/portfolio/2026-textile-capacitive-sensing-robot-arm' | relative_url }}">
    <div class="research-media-card__visual research-media-card__visual--portrait">
      <video autoplay muted loop playsinline preload="metadata" poster="{{ '/images/textile-capacitive-sensing-poster.png' | relative_url }}" aria-label="Textile capacitive sensing prototype demonstration">
        <source src="{{ '/files/textile-capacitive-sensing-demo.mp4' | relative_url }}#t=0.5" type="video/mp4">
      </video>
    </div>
    <span>Prototype demo</span>
    <h3>Textile sensing for intuitive robot control</h3>
  </a>
</div>

## Selected research

<div class="selected-research-list">
  <article>
    <div class="selected-research-list__meta">Embodied AI · Current</div>
    <div>
      <h3><a href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}">Language-conditioned control for a 6-DOF manipulator</a></h3>
      <p>A sub-150 RMB arm integrating vision, audio, servo control, and constrained LLM-agent primitives for task execution and grasp compensation.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}">System interfaces + 3 videos →</a>
    </div>
  </article>
  <article>
    <div class="selected-research-list__meta">Robot learning · Current</div>
    <div>
      <h3><a href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">Dexterous manipulation and reinforcement learning</a></h3>
      <p>An LLM-assisted hand-model workflow with TD3 + HER training and drop-aware evaluation for sparse-reward manipulation.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">Training demonstration →</a>
    </div>
  </article>
  <article>
    <div class="selected-research-list__meta">Intelligent sensing · Current</div>
    <div>
      <h3><a href="{{ '/portfolio/2025-inertial-sensor-recovery-dexterous-hand' | relative_url }}">Inertial recovery beyond hardware range</a></h3>
      <p>A lightweight signal-recovery framework for short-term IMU saturation, validated with public datasets, simulation, and physical data collection.</p>
      <a class="project-evidence" href="{{ '/portfolio/2025-inertial-sensor-recovery-dexterous-hand' | relative_url }}">Data collection + exploratory result →</a>
    </div>
  </article>
  <article>
    <div class="selected-research-list__meta">Expressive robotics · Current</div>
    <div>
      <h3><a href="{{ '/portfolio/2026-lelamp-expressive-robot-lamp-replication' | relative_url }}">LeLamp-inspired expressive robot-lamp replication</a></h3>
      <p>An ongoing engineering reproduction at Tsinghua Future Laboratory, using the open-source LeLamp architecture as a platform for expressive motion and multimodal interaction.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-lelamp-expressive-robot-lamp-replication' | relative_url }}">Project context + current scope →</a>
    </div>
  </article>
  <article>
    <div class="selected-research-list__meta">Human–robot interaction · Current</div>
    <div>
      <h3><a href="{{ '/portfolio/2026-textile-capacitive-sensing-robot-arm' | relative_url }}">Textile-integrated capacitive sensing</a></h3>
      <p>A wearable interface that maps gesture, contact, and deformation signals from capacitive textiles to robot-arm commands.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-textile-capacitive-sensing-robot-arm' | relative_url }}">Prototype demonstration →</a>
    </div>
  </article>
</div>

<p class="view-all-link"><a href="{{ '/portfolio/' | relative_url }}">View all research and engineering projects →</a></p>

## Selected publication

**Yuanhao Geng, Gang Tang, and Haoyang Wang.** “Domain Adaptation With Joint Distribution Alignment Adversarial Learning for Open-Set Bearing Intelligent Fault Diagnosis.” *IEEE Sensors Journal*, 25(14), 26507–26519, 2025. [DOI](https://doi.org/10.1109/JSEN.2025.3576833) · [All publications]({{ '/publications/' | relative_url }})

## Working papers

<div class="working-papers-list">
  <article>
    <span>First-author working paper · LLM safety</span>
    <h3><a href="{{ '/publication/2026-llm-robot-code-safety' | relative_url }}">Safety Evaluation and Repair of LLM-Generated Robot Control Programs</a></h3>
    <p><strong>Haoyang Wang</strong>, et al. Evaluating physical-safety violations and repair strategies for language-model-generated robot programs.</p>
  </article>
  <article>
    <span>First-author working paper · Dexterous manipulation</span>
    <h3><a href="{{ '/publication/2026-llm-assisted-dexterous-hand-robot-learning' | relative_url }}">LLM-Assisted Dexterous-Hand Modeling and Reinforcement Learning</a></h3>
    <p><strong>Haoyang Wang</strong>, et al. An LLM-assisted modeling workflow with TD3 + HER and drop-aware evaluation for sparse-reward manipulation.</p>
  </article>
  <article>
    <span>Co-authored working paper · Flexible sensing</span>
    <h3><a href="{{ '/publication/2026-textile-capacitive-sensing-robot-control' | relative_url }}">Textile-Integrated Capacitive Sensing for Robot-Arm Control</a></h3>
    <p>Author list in preparation. Haoyang Wang is a co-author, not the first author. The work studies gesture, contact, and deformation sensing for intuitive robot control.</p>
  </article>
</div>

<p class="view-all-link"><a href="{{ '/publications/' | relative_url }}">View published and ongoing papers →</a></p>

## Current collaborations

- **Future Laboratory, Tsinghua University:** multimodal robotic control, expressive robot-lamp prototyping, sensor recovery, and hardware-oriented intelligent systems.
- **Dr. Simin Chen, George Mason University:** safety evaluation and repair of LLM-generated robot control programs.
- **Dr. Lingfeng Tao, Kennesaw State University:** dexterous-hand modeling and reinforcement learning.

For research discussions or PhD opportunities, please contact me at [vwang6925@gmail.com](mailto:vwang6925@gmail.com).
