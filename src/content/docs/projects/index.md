---
title: Projects
description: Technical projects in ML, Computer Vision, and NLP
---

<div class="filter-bar">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="cv">Computer Vision</button>
  <button class="filter-btn" data-filter="nlp">NLP</button>
  <button class="filter-btn" data-filter="ml">Applied ML</button>
  <button class="filter-btn" data-filter="competition">Competition</button>
</div>

<div class="project-grid">

<div class="project-card" data-tags="cv">

### [Live Table Tennis Tracking](/projects/table-tennis-tracking/)
Real-time CV system for autonomous game scoring. Hybrid classical + deep learning approach achieving 94.7% tracking accuracy at 30 FPS.

<span class="tag">Computer Vision</span> <span class="tag">PyTorch</span> <span class="tag">YOLO</span> <span class="tag">UNet</span>

</div>

<div class="project-card" data-tags="nlp">

### [Natural Language Inference](/projects/natural-language-inference/)
Systematic comparison from classical ML to BERT for NLI. Production optimization with quantization and distillation.

<span class="tag">NLP</span> <span class="tag">BERT</span> <span class="tag">Transformers</span> <span class="tag">PyTorch</span>

</div>

<div class="project-card" data-tags="ml competition">

### [Store Sales Forecasting](/projects/store-sales-forecasting/)
**Top 14/6,828 (0.2%)** — XGBoost with engineered temporal features for retail forecasting.

<span class="tag">Applied ML</span> <span class="tag">XGBoost</span> <span class="tag">Competition</span>

</div>

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.tags.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
</script>
