---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>


I am a fourth-year PhD student at Tsinghua University, advised by Prof. [Chun Yuan](https://thu-cvml.github.io/Overview/Professor) and [Li Shen](https://sites.google.com/site/mathshenli/home). My research centers on **data-efficient model reuse** (i.e., **learning from models**): how to transfer, compose, and extend the knowledge encoded in pretrained models while reducing reliance on task-specific data and costly training from scratch.

My approach combines empirical investigation with theoretical analysis: I identify recurring phenomena, formulate and test hypotheses, and develop principled methods informed by these insights. A central goal is to establish effective and scalable approaches to model reuse for vision models, large language models (LLMs), and multimodal large language models (MLLMs), with careful attention to data efficiency and computational cost.


<span class='anchor' id='publications'></span>

# 📝 Selected Publications

My work explores data-efficient model reuse from three angles:
<nav class="research-topics" aria-label="Research areas">
  <a href="#model-merging">Model Merging</a>
  <a href="#synthetic-data-based-on-generative-models">Synthetic Data</a>
  <a href="#model-inversion">Model Inversion</a>
</nav>

<h2 class="publication-category" id="model-merging"><span>01</span> Model Merging</h2>
<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/spectral.png' | relative_url }}" aria-label="Enlarge figure: Closed-Form Spectral Regularization for Multi-Task Model Merging">
    <img src="{{ '/images/publications/spectral.png' | relative_url }}" alt="Closed-Form Spectral Regularization for Multi-Task Model Merging — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Closed-Form Spectral Regularization for Multi-Task Model Merging</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Runxi Cheng, Xingxuan Zhang, Li Shen, Chun Yuan, Peng Cui, Dacheng Tao</p>
    <p class="publication__venue">Preprint</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2606.07289">Paper</a> <a href="https://github.com/WalkerWorldPeace/MLLMerging/tree/main/fusion_bench">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/optmerge.png' | relative_url }}" aria-label="Enlarge figure: OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging">
    <img src="{{ '/images/publications/optmerge.png' | relative_url }}" alt="OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Runxi Cheng, Weike Jin, Enneng Yang, Li Shen, Lu Hou, Sinan Du, Chun Yuan, Xiaochun Cao, Dacheng Tao</p>
    <p class="publication__venue">ICLR 2026</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2505.19892">Paper</a> <a href="https://github.com/WalkerWorldPeace/MLLMerging">Code</a></p>
  </div>
</article>

<article class="publication" id="doge">
  <a class="publication__image" href="{{ '/images/publications/doge.png' | relative_url }}" aria-label="Enlarge figure: Modeling Multi-Task Model Merging as Adaptive Projective Gradient Descent">
    <img src="{{ '/images/publications/doge.png' | relative_url }}" alt="Adaptive gradient projection preserves shared knowledge while merging task experts" loading="lazy" decoding="async" width="1536" height="1024">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Modeling Multi-Task Model Merging as Adaptive Projective Gradient Descent</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Anke Tang, Li Shen, Zixuan Hu, Chun Yuan, Xiaochun Cao</p>
    <p class="publication__venue">ICML 2025</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2501.01230">Paper</a> <a href="https://github.com/WalkerWorldPeace/DOGE">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/wudi.png' | relative_url }}" aria-label="Enlarge figure: Whoever Started the Interference Should End It: Guiding Data-Free Model Merging via Task Vectors">
    <img src="{{ '/images/publications/wudi.png' | relative_url }}" alt="Whoever Started the Interference Should End It: Guiding Data-Free Model Merging via Task Vectors — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Whoever Started the Interference Should End It: Guiding Data-Free Model Merging via Task Vectors</h3>
    <p class="publication__authors">Runxi Cheng*, Feng Xiong*, <strong>Yongxian Wei</strong>, Wanyun Zhu, Chun Yuan</p>
    <p class="publication__venue">ICML 2025</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2503.08099">Paper</a> <a href="https://github.com/nathanielyvo/WUDI-Merging">Code</a></p>
  </div>
</article>


<h2 class="publication-category" id="synthetic-data-based-on-generative-models"><span>02</span> Synthetic Data</h2>
<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/memagent.png' | relative_url }}" aria-label="Enlarge figure: MemAgent: Learning to Manage Heterogeneous Memory Providers for LLM Agents">
    <img src="{{ '/images/publications/memagent.png' | relative_url }}" alt="MemAgent: Learning to Manage Heterogeneous Memory Providers for LLM Agents — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">MemAgent: Learning to Manage Heterogeneous Memory Providers for LLM Agents</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Yilin Zhao, Runxi Cheng, Xinrui Chen, Chun Yuan, Yaoru Wang, Jiahong Yan, Dian Li</p>
    <p class="publication__venue">Preprint</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2609.32521">Paper</a> <a href="https://github.com/WalkerWorldPeace/MemAgent">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/limix2.png' | relative_url }}" aria-label="Enlarge figure: LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence">
    <img src="{{ '/images/publications/limix2.png' | relative_url }}" alt="LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence</h3>
    <p class="publication__authors">Xingxuan Zhang, Gang Ren, …, <strong>Yongxian Wei</strong> (Core Contributor), …, Peng Cui</p>
    <p class="publication__venue">Technical Report</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2609.17488">Paper</a> <a href="https://github.com/limix-ldm-ai/LimiX">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/reasoning.png' | relative_url }}" aria-label="Enlarge figure: Learning to Pose Problems: Reasoning-Driven and Solver-Adaptive Data Synthesis">
    <img src="{{ '/images/publications/reasoning.png' | relative_url }}" alt="Learning to Pose Problems: Reasoning-Driven and Solver-Adaptive Data Synthesis — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Learning to Pose Problems: Reasoning-Driven and Solver-Adaptive Data Synthesis</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Yilin Zhao, Li Shen, Xinrui Chen, Runxi Cheng, Sinan Du, Hao Yu, Chun Yuan, Dian Li</p>
    <p class="publication__venue">Preprint</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2511.09907">Paper</a> <a href="https://github.com/WalkerWorldPeace/Reasoning-Synthesis">Code</a></p>
  </div>
</article>

<!--
- Synthetic Data Beyond Generative Models: A Comprehensive Survey of How, Why, and Where. Preprint  
  Zixuan Hu\*, **Yongxian Wei\***, Guozheng Ma, Jiahe Wang, Sinan Du, Runxi Cheng, Chun Yuan, Li Shen, Dacheng Tao  
  [[Paper]](https://d197for5662m48.cloudfront.net/documents/publicationstatus/303351/preprint_pdf/c121c7d3f8eef06a9d84456dc3dad834.pdf) [[Code]](https://github.com/Egg-Hu/Awesome-Synthetic-Data-Generation)
-->

<article class="publication" id="mlwdudm">
  <a class="publication__image" href="{{ '/images/publications/mlwdudm.png' | relative_url }}" aria-label="Enlarge figure: Meta-Learning without Data via Unconditional Diffusion Models">
    <img src="{{ '/images/publications/mlwdudm.png' | relative_url }}" alt="Diffusion generates synthetic images, which form tasks for meta-learning" loading="lazy" decoding="async" width="1536" height="1024">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Meta-Learning without Data via Unconditional Diffusion Models</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Zixuan Hu, Li Shen, Zhenyi Wang, Chun Yuan</p>
    <p class="publication__venue">IEEE TCSVT</p>
    <p class="publication__links"><a href="https://ieeexplore.ieee.org/document/10587268">Paper</a> <a href="https://github.com/WalkerWorldPeace/MLWDUDM">Code</a></p>
  </div>
</article>

<!--
- Adaptive Defense against Harmful Fine-Tuning via Bayesian Data Scheduler. NeurIPS 2025 (**Spotlight**)  
  Zixuan Hu, Li Shen, Zhenyi Wang, **Yongxian Wei**, Dacheng Tao  
  [[Paper]](https://openreview.net/pdf?id=sm2e1SnMK4) [[Code]](https://github.com/Egg-Hu/Bayesian-Data-Scheduler)
-->
  
<h2 class="publication-category" id="model-inversion"><span>03</span> Model Inversion</h2>
<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/cvlm.png' | relative_url }}" aria-label="Enlarge figure: Open-Vocabulary Customization from CLIP via Data-Free Knowledge Distillation">
    <img src="{{ '/images/publications/cvlm.png' | relative_url }}" alt="Open-Vocabulary Customization from CLIP via Data-Free Knowledge Distillation — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Open-Vocabulary Customization from CLIP via Data-Free Knowledge Distillation</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Zixuan Hu, Li Shen, Zhenyi Wang, Chun Yuan, Dacheng Tao</p>
    <p class="publication__venue">ICLR 2025 (<strong>Oral</strong>)</p>
    <p class="publication__links"><a href="https://openreview.net/pdf?id=1aF2D2CPHi">Paper</a> <a href="https://github.com/WalkerWorldPeace/CVLM">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/trustworthy.png' | relative_url }}" aria-label="Enlarge figure: Task-Distributionally Robust Data-Free Meta-Learning">
    <img src="{{ '/images/publications/trustworthy.png' | relative_url }}" alt="Task-Distributionally Robust Data-Free Meta-Learning — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Task-Distributionally Robust Data-Free Meta-Learning</h3>
    <p class="publication__authors">Zixuan Hu, <strong>Yongxian Wei</strong>, Li Shen, Zhenyi Wang, Baoyuan Wu, Chun Yuan, Dacheng Tao</p>
    <p class="publication__venue">IEEE TPAMI</p>
    <p class="publication__links"><a href="https://ieeexplore.ieee.org/document/11165138">Paper</a> <a href="https://github.com/Egg-Hu/Trustworthy-DFML">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/lora-recycle.png' | relative_url }}" aria-label="Enlarge figure: Unlocking Tuning-Free Few-Shot Adaptability in Visual Foundation Models by Recycling Pre-Tuned LoRAs">
    <img src="{{ '/images/publications/lora-recycle.png' | relative_url }}" alt="Unlocking Tuning-Free Few-Shot Adaptability in Visual Foundation Models by Recycling Pre-Tuned LoRAs — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Unlocking Tuning-Free Few-Shot Adaptability in Visual Foundation Models by Recycling Pre-Tuned LoRAs</h3>
    <p class="publication__authors">Zixuan Hu, <strong>Yongxian Wei</strong>, Li Shen, Chun Yuan, Dacheng Tao</p>
    <p class="publication__venue">CVPR 2025</p>
    <p class="publication__links"><a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Hu_LoRA_Recycle_Unlocking_Tuning-Free_Few-Shot_Adaptability_in_Visual_Foundation_Models_CVPR_2025_paper.pdf">Paper</a> <a href="https://github.com/Egg-Hu/LoRA-Recycle">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/tgr.png' | relative_url }}" aria-label="Enlarge figure: Task Groupings Regularization: Data-Free Meta-Learning with Heterogeneous Pre-trained Models">
    <img src="{{ '/images/publications/tgr.png' | relative_url }}" alt="Task Groupings Regularization: Data-Free Meta-Learning with Heterogeneous Pre-trained Models — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Task Groupings Regularization: Data-Free Meta-Learning with Heterogeneous Pre-trained Models</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Zixuan Hu, Li Shen, Zhenyi Wang, Chun Yuan, Dacheng Tao</p>
    <p class="publication__venue">ICML 2024</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2405.16560">Paper</a> <a href="https://github.com/WalkerWorldPeace/TGR">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/smi.png' | relative_url }}" aria-label="Enlarge figure: Sparse Model Inversion: Efficient Inversion of Vision Transformers for Data-Free Applications">
    <img src="{{ '/images/publications/smi.png' | relative_url }}" alt="Sparse Model Inversion: Efficient Inversion of Vision Transformers for Data-Free Applications — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">Sparse Model Inversion: Efficient Inversion of Vision Transformers for Data-Free Applications</h3>
    <p class="publication__authors">Zixuan Hu, <strong>Yongxian Wei</strong>, Li Shen, Zhenyi Wang, Chun Yuan, Dacheng Tao</p>
    <p class="publication__venue">ICML 2024</p>
    <p class="publication__links"><a href="https://openreview.net/pdf?id=T0lFfO8HaK">Paper</a> <a href="https://github.com/Egg-Hu/SMI">Code</a></p>
  </div>
</article>

<article class="publication">
  <a class="publication__image" href="{{ '/images/publications/free.png' | relative_url }}" aria-label="Enlarge figure: FREE: Faster and Better Data-Free Meta-Learning">
    <img src="{{ '/images/publications/free.png' | relative_url }}" alt="FREE: Faster and Better Data-Free Meta-Learning — research overview" loading="lazy" decoding="async" width="1100" height="700">
    <span class="publication__zoom" aria-hidden="true">View figure ↗</span>
  </a>
  <div class="publication__body">
    <h3 class="publication__title">FREE: Faster and Better Data-Free Meta-Learning</h3>
    <p class="publication__authors"><strong>Yongxian Wei</strong>, Zixuan Hu, Zhenyi Wang, Li Shen, Chun Yuan, Dacheng Tao</p>
    <p class="publication__venue">CVPR 2024</p>
    <p class="publication__links"><a href="https://arxiv.org/pdf/2405.00984">Paper</a> <a href="https://github.com/WalkerWorldPeace/FREE">Code</a></p>
  </div>
</article>


<span class='anchor' id='honors'></span>

# 🔥 Honors
- National Scholarship for Graduate Students (for the second time), 2025.10
- National Scholarship for Graduate Students (at my first year), 2024.10
- Undergraduate President's Medal (Top 10 university-wide), 2022.10
- National Scholarship for Undergraduate Students, 2021.10
- The First Runner-Up (2/116) of ICCV LargeFineFoodAI, 2021.10

<span class='anchor' id='education'></span>

# 📖 Education
- PhD student, Tsinghua University, *2023 – Present*
- Undergrad, Nanjing University of Science and Technology, *2019 – 2023*

<!-- # 💻 Internships
- Tencent, *2025.07 – 2026.01*
- Huawei, *2025.01 – 2025.06*
- Xiaomi, *2024.08 – 2024.09* -->


<span class='anchor' id='academic-service'></span>

# 💼 Academic Service
- Reviewer (Conferences): ICML / ICLR / NeurIPS / CVPR / ICCV / ECCV / AAAI
- Reviewer (Journals): TPAMI / TIP / TKDE
