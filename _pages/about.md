---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


I am a second-year PhD student at Tsinghua University, advised by Prof. Chun Yuan. My research focuses on efficient machine learning, particularly data-free learning. Training high-performing models typically demands extensive data and computational resources. The open-source trend has made numerous pretrained models readily available in the community. Data-free learning (i.e., learning from models) presents a promising alternative by addressing challenges related to data accessibility and privacy, while also circumventing the computational burden of pretraining. Given the limited computational resources commonly available in academia (such as 4090 or V100 GPUs), this direction is practical especially for students.

My preferred research paradigm involves observing empirical phenomena, forming explanations, constructing theoretical frameworks, and ultimately deriving effective methods. As LLM and MLLM continue to gain traction, **I am committed to scaling models as much as possible within my available resources**, as exemplified by my line of work. I welcome opportunities for collaboration and am open to internship offers.


# 📝 Publications

My work explores data-free learning from multiple angles, including:
- Model merging directly in parameter space
- Model inversion based on discriminative models
- Synthetic data based on generative models

## Model merging directly in parameter space:
- Unifying Multimodal Large Language Model Capabilities and Modalities via Model Merging. Preprint  
  **Yongxian Wei**, Runxi Cheng, Weike Jin, Enneng Yang, Li Shen, Lu Hou, Sinan Du, Chun Yuan, Xiaochun Cao, Dacheng Tao
- Modeling Multi-Task Model Merging as Adaptive Projective Gradient Descent. ICML 2025  
  **Yongxian Wei**, Anke Tang, Li Shen, Zixuan Hu, Chun Yuan, Xiaochun Cao
- Whoever Started the Interference Should End It: Guiding Data-Free Model Merging via Task Vectors. ICML 2025  
  Runxi Cheng\*, Feng Xiong\*, **Yongxian Wei**, Wanyun Zhu, Chun Yuan

## Model inversion based on discriminative models:
- Open-Vocabulary Customization from CLIP via Data-Free Knowledge Distillation. ICLR 2025 (**Oral**)  
  **Yongxian Wei**, Zixuan Hu, Li Shen, Zhenyi Wang, Chun Yuan, Dacheng Tao
- Unlocking Tuning-Free Few-Shot Adaptability in Visual Foundation Models by Recycling Pre-Tuned LoRAs. CVPR 2025  
  Zixuan Hu, **Yongxian Wei**, Li Shen, Chun Yuan, Dacheng Tao
- Task Groupings Regularization: Data-Free Meta-Learning with Heterogeneous Pre-trained Models. ICML 2024  
  **Yongxian Wei**, Zixuan Hu, Li Shen, Zhenyi Wang, Chun Yuan, Dacheng Tao
- Sparse Model Inversion: Efficient Inversion of Vision Transformers for Data-Free Applications. ICML 2024  
  Zixuan Hu, **Yongxian Wei**, Li Shen, Zhenyi Wang, Chun Yuan, Dacheng Tao
- FREE: Faster and Better Data-Free Meta-Learning. CVPR 2024  
  **Yongxian Wei**, Zixuan Hu, Zhenyi Wang, Li Shen, Chun Yuan, Dacheng Tao

## Synthetic data based on generative models:
- Meta-Learning without Data via Unconditional Diffusion Models. IEEE TCSVT  
  **Yongxian Wei**, Zixuan Hu, Li Shen, Zhenyi Wang, Chun Yuan



# 📖 Education
- PhD student, Tsinghua University, *2023 – Present*
- Undergrad, Nanjing University of Science and Technology, *2019 – 2023*

# 🔥 Honors
- National Scholarship for Graduate Students at my first master year, 2024.10
- President's Medal (Top 10 university-wide), Nanjing University of Science and Technology, 2022.10
- National Scholarship for Undergraduate Students, 2021.10
- The first runner-up (2/116) of ICCV LargeFineFoodAI, 2021.10

# 💻 Internships
- Huawei Noah’s Ark Lab, 2025.01–2025.06
- Xiaomi Internet Department, 2024.08–2024.09


# 💼 Academic Service
Reviewer for ICML/ICLR/NeurIPS/ICCV

