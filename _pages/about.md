---
permalink: /
title: "Haoyang Wang"
excerpt: "Haoyang Wang works across intelligent sensing, robot learning, robotic manipulation, multimodal perception, and embodied intelligence."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="research-hero research-hero--portfolio">
  <p class="research-hero__eyebrow">Robot learning / Intelligent sensing</p>
  <h1>Making intelligent systems work in the <em>physical world.</em></h1>
  <p class="research-hero__lead">I connect sensing, learning, and physical design to build more capable and reliable robotic systems.</p>
  <p class="research-hero__affiliation">M.S. student, Beijing University of Chemical Technology<br>Research Assistant, Future Laboratory, Tsinghua University</p>
  <div class="research-hero__actions">
    <a class="research-button" href="#selected-research">Explore my research <span aria-hidden="true">↘</span></a>
    <a class="research-button research-button--secondary" href="mailto:vwang6925@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
  </div>
  <p class="research-hero__availability"><span aria-hidden="true">●</span> Seeking PhD opportunities · Fall 2027</p>
</section>

<div class="research-introduction">
  <p>My work spans robot-code reliability, dexterous manipulation, and recovery of imperfect sensor signals. I build simulation workflows and physical prototypes to study how intelligent systems behave beyond a single task outcome.</p>
</div>

<div class="research-section-heading" id="selected-research"><div><p class="research-eyebrow">Selected work</p><h2>Selected research</h2></div><a href="{{ '/portfolio/' | relative_url }}">All projects <span aria-hidden="true">↗</span></a></div>
<p class="research-preview-note">Four ongoing studies in robot learning and intelligent sensing. Open a project for the research question, my contribution, and current findings.</p>

<div class="current-research-grid">
  <article class="current-research-card">
    <div class="current-research-card__visual">
      <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/robophys-public-preview.jpg' | relative_url }}?v=4" aria-label="RoboPhys narrated research overview">
        <source src="{{ '/files/robophys-public-preview.mp4' | relative_url }}?v=4" type="video/mp4">
        <track kind="captions" src="{{ '/files/robophys-public-preview.en.vtt' | relative_url }}?v=4" srclang="en" label="English">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>LLM-based robotics · George Mason University collaboration</span>
      <h3><a href="{{ '/portfolio/2026-llm-robot-code-safety' | relative_url }}">RoboPhys · Reliable robot programs</a></h3>
      {% include research-status.html publication='/publication/2026-llm-robot-code-safety' %}
      <p>Can a robot finish its task while behaving unsafely? I study execution-level reliability and evidence-guided revision of generated robot programs.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-llm-robot-code-safety' | relative_url }}">Project overview <span aria-hidden="true">↗</span></a>
    </div>
  </article>

  <article class="current-research-card">
    <div class="current-research-card__visual">
      <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/sage-hand-public-preview.jpg' | relative_url }}?v=4" aria-label="SAGE Hand narrated research overview">
        <source src="{{ '/files/sage-hand-public-preview.mp4' | relative_url }}?v=4" type="video/mp4">
        <track kind="captions" src="{{ '/files/sage-hand-public-preview.en.vtt' | relative_url }}?v=4" srclang="en" label="English">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>Robot learning · Kennesaw State University collaboration</span>
      <h3><a href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">SAGE Hand · Dexterous manipulation</a></h3>
      {% include research-status.html publication='/publication/2026-llm-assisted-dexterous-hand-robot-learning' %}
      <p>Connecting hand design with learned control. I develop simulation-ready models and evaluate object retention, motion, and manipulation behavior.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-dexterous-manipulation-reinforcement-learning' | relative_url }}">Project overview <span aria-hidden="true">↗</span></a>
    </div>
  </article>

  <article class="current-research-card">
    <div class="current-research-card__visual"><video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/eaai-public-preview.jpg' | relative_url }}?v=1" aria-label="Physics-guided bearing diagnosis narrated research overview">
        <source src="{{ '/files/eaai-public-preview.mp4' | relative_url }}?v=1" type="video/mp4">
        <track kind="captions" src="{{ '/files/eaai-public-preview.en.vtt' | relative_url }}?v=1" srclang="en" label="English">
      </video></div>
    <div class="current-research-card__copy">
      <span>Intelligent diagnosis · Robust learning</span>
      <h3><a href="{{ '/portfolio/2026-physics-guided-bearing-diagnosis' | relative_url }}">Physics-guided bearing diagnosis</a></h3>
      {% include research-status.html publication='/publication/2026-physics-guided-multi-domain-representation-framework' %}
      <p>Coordinating physically meaningful vibration representations to distinguish fault evidence from noise and operating-condition changes.</p>
      <a class="project-evidence" href="{{ '/portfolio/2026-physics-guided-bearing-diagnosis' | relative_url }}">Project overview <span aria-hidden="true">↗</span></a>
    </div>
  </article>

  <article class="current-research-card">
    <div class="current-research-card__visual">
      <video controlslist="nodownload" oncontextmenu="return false;" controls playsinline preload="none" style="object-fit: contain;" poster="{{ '/images/imu-recovery-public-preview.jpg' | relative_url }}?v=2" aria-label="Inertial signal recovery narrated research overview">
        <source src="{{ '/files/imu-recovery-public-preview.mp4' | relative_url }}?v=2" type="video/mp4">
        <track kind="captions" src="{{ '/files/imu-recovery-public-preview.en.vtt' | relative_url }}?v=2" srclang="en" label="English">
      </video>
    </div>
    <div class="current-research-card__copy">
      <span>Intelligent sensing · Signal recovery</span>
      <h3><a href="{{ '/portfolio/2025-inertial-perception-overrange-recovery' | relative_url }}">Inertial Sensor Overrange Recovery</a></h3>
      {% include research-status.html publication='/publication/2026-inertial-perception-recovery-overrange-conditions' %}
      <p>Recovering useful motion information when a sensor briefly saturates, evaluated through simulation, physical data collection, and external datasets.</p>
      <a class="project-evidence" href="{{ '/portfolio/2025-inertial-perception-overrange-recovery' | relative_url }}">Project overview <span aria-hidden="true">↗</span></a>
    </div>
  </article>
</div>

<p class="view-all-link"><a href="{{ '/portfolio/' | relative_url }}">View all research projects →</a></p>

<div class="research-section-heading"><div><p class="research-eyebrow">From ideas to hardware</p><h2>Physical prototypes</h2></div><a href="{{ '/portfolio/' | relative_url }}">Explore all <span aria-hidden="true">↗</span></a></div>
<div class="prototype-grid">
  <article><a class="prototype-grid__image" href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}"><img src="{{ '/images/robotic-arm-grasp-public-poster.png' | relative_url }}" alt="Language-guided manipulation physical prototype" loading="lazy"></a><div><h3><a href="{{ '/portfolio/2026-multimodal-robotic-arm-platform' | relative_url }}">Language-guided manipulation <span aria-hidden="true">↗</span></a></h3><p>Multimodal perception and constrained action on a compact robotic arm.</p></div></article>
  <article><a class="prototype-grid__image" href="{{ '/portfolio/2026-textile-capacitive-sensing-robot-arm' | relative_url }}"><img src="{{ '/images/textile-capacitive-public-poster.png' | relative_url }}" alt="Wearable sensing physical prototype" loading="lazy"></a><div><h3><a href="{{ '/portfolio/2026-textile-capacitive-sensing-robot-arm' | relative_url }}">Wearable sensing <span aria-hidden="true">↗</span></a></h3><p>Textile-integrated sensing for intuitive human–robot interaction.</p></div></article>
  <article><a class="prototype-grid__image" href="{{ '/portfolio/2026-multimodal-expressive-robot-lamp' | relative_url }}"><img src="{{ '/images/lelamp-replication-demo-poster.png' | relative_url }}" alt="Expressive robot lamp physical prototype" loading="lazy"></a><div><h3><a href="{{ '/portfolio/2026-multimodal-expressive-robot-lamp' | relative_url }}">Expressive robot lamp <span aria-hidden="true">↗</span></a></h3><p>Coordinating motion, lighting, and spoken interaction.</p></div></article>
</div>

<div class="research-section-heading"><div><p class="research-eyebrow">Research output</p><h2>Publications & manuscripts</h2></div><a href="{{ '/publications/' | relative_url }}">Full list & authors <span aria-hidden="true">↗</span></a></div>
{% assign published_papers = site.publications | where: 'category', 'published' | sort: 'cv_order' %}
{% assign submitted_papers = site.publications | where: 'category', 'underreview' | sort: 'cv_order' %}
{% include home-paper-group.html heading='Published' papers=published_papers %}
{% include home-paper-group.html heading='Submitted manuscripts' papers=submitted_papers %}
<p class="home-paper-note">Submitted manuscripts are currently under editorial assessment or peer review. <a href="{{ '/publications/' | relative_url }}">View authors, research summaries, and working papers →</a></p>

## Selected earlier research

<div class="earlier-research-grid">
  <article>
    <span>Intelligent fault diagnosis · 2025</span>
    <h3><a href="{{ '/portfolio/2025-wind-power-fault-diagnosis-platform' | relative_url }}">Wind Turbine Condition Monitoring and Bearing Fault Diagnosis Platform</a></h3>
    <p>An integrated diagnostic library and visual platform for machinery condition monitoring, with work on operating-condition shifts and cross-machine evaluation.</p>
  </article>
  <article>
    <span>Mechanical engineering and control · 2022–2023</span>
    <h3><a href="{{ '/portfolio/2023-active-vibration-suppression-platform' | relative_url }}">Intelligent Vibration Reduction Support Design</a></h3>
    <p>Mechanical modeling, control design, and physical validation of an active vibration-suppression platform.</p>
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

<div class="research-contact" id="connect">

<h2>Let’s talk research</h2>

<div class="research-links">
  <a href="https://github.com/mianzhi8588">GitHub</a>
  <a href="mailto:vwang6925@gmail.com">Email</a>
  <a href="https://orcid.org/0009-0004-3822-8083">ORCID</a>
</div>

<p class="research-contact-note">For research discussions or PhD opportunities, please contact me at <a href="mailto:vwang6925@gmail.com">vwang6925@gmail.com</a>.</p>

</div>
