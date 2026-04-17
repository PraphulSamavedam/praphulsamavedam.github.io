---
title: "Natural Language Inference"
excerpt: "We explored archaic and modern machine learning algorithms including large language model(LLM) for natural 
language inference(NLI).<br/>
<img height='300' src='/images/portfolio/NLI_results_300.png' width='600'/>
"
collection: portfolio
---

## Project type: Team

## Team details
### Mentor: [Ehsaan Elhamifar](https://www.linkedin.com/in/ehsan-elhamifar-b43ab396)
### Project mate: [Poorna Chandra Vemula](https://www.linkedin.com/in/poorna-chandra-vemula)

## Introduction
Natural Language Inference (NLI) is the task of determining the relationship between two statements; More precisely 
truth value of “hypothesis” statement considering that “premise” statement is true/holding true.  
There are only 3 possible relations, which are commonly referred to as entailment, contradiction and neutral.
- ‘Entailment’ stands for the situation when we can conclude that hypothesis is true based on the premise. 
- ‘Contradiction’ is the situation when we can conclude that the hypothesis is false based on the premise. 
- Finally, when we cannot definitely conclude whether hypothesis is true or false based on the premise as it does not 
provide enough information, it is considered as ‘neutral’.


NLI is a valuable testing ground for the development of semantic representations as it summarizes the hidden meaning between lines.


## Overview
Natural Language Inference (NLI) is foundational for information retrieval, fact verification, question-answering systems, and content moderation. At production scale, these systems need to balance accuracy with latency (<50ms for real-time applications).

This project explores the evolution from classical ML to modern transformers for NLI, with focus on production trade-offs between accuracy and inference speed.

## Problem Context & Business Value

**Use Cases in Production:**
- **Search Engines:** Re-ranking results based on query-document entailment
- **Fact Verification:** Detecting contradictions in news articles, claims validation
- **Dialogue Systems:** Understanding user intent and context in conversational AI
- **Content Moderation:** Detecting semantic contradictions and misinformation

**Real-World Requirements:**
- Accuracy: >85% on diverse domains (news, social media, technical content)
- Latency: <50ms p99 for real-time applications
- Scalability: Handle millions of inference requests per day
- Interpretability: Explainable predictions for high-stakes decisions

## Technical Approach - Evolution from Classical to Modern

We systematically compared 3 generations of ML approaches:

### 1. Classical ML Baseline (Naive Bayes, Logistic Regression)

**Feature Engineering:**
To compensate for model simplicity, we engineered domain-specific features:

<img src="/images/portfolio/NLI_eng_features.png" alt="Engineered features for NLI"/>

- **Word Overlap Metrics:** Jaccard similarity, BLEU score between premise-hypothesis
- **Negation Detection:** Presence of negation words (not, never, no) indicating contradiction
- **Length Ratios:** Hypothesis/premise length (short hypotheses often entailment)
- **TF-IDF Vectors:** Bag-of-words representation with inverse document frequency weighting

**Results:**
- **Naive Bayes:** 65% accuracy, <1ms inference latency
- **Logistic Regression:** 68% accuracy, <1ms inference latency
- **Insight:** Fast but ceiling effect due to lack of semantic understanding

### 2. Deep Learning (Bi-LSTM with Attention)

**Architecture:**
- Pre-trained GloVe embeddings (840B tokens, 300d)
- Bidirectional LSTM encoders for premise and hypothesis
- Attention mechanism for interpretability (which premise words align with hypothesis)
- Fully connected layers for 3-way classification

**Results:**
- **Accuracy:** 79% on MultiNLI dev set
- **Inference Latency:** ~10ms per example
- **Dataset:** Trained on 433K MultiNLI examples
- **Improvement:** +11% accuracy over classical ML, captures word order and context

**Trade-offs:**
- Better semantic understanding than classical approaches
- Still struggles with complex reasoning and rare linguistic phenomena
- Moderate latency acceptable for most applications

### 3. Transformer Fine-Tuning (BERT-base)

**Architecture & Training:**
- BERT-base (110M parameters, 12 layers)
- Fine-tuned on MultiNLI (433K examples) with cross-encoder architecture
- Full context interaction between premise and hypothesis (not siamese)
- Learning rate: 2e-5, batch size: 32, epochs: 3

**Results:**
- **Accuracy:** 87% on MultiNLI matched, 86% on mismatched (OOD generalization)
- **Inference Latency:** ~25ms per example (batch size 1)
- **Transfer Learning:** Also evaluated on SNLI (~91% accuracy after fine-tuning)

**Why BERT Excels:**
- Pre-trained on 3.3B words captures rich linguistic knowledge
- Cross-attention allows deep premise-hypothesis interaction
- Handles complex reasoning: negation, paraphrasing, multi-hop inference

## Production-Ready Optimizations

For deploying NLI at scale, raw BERT-base is often too slow. We explored optimization strategies:

### Latency Optimization Techniques

**1. Model Quantization (INT8):**
- Converted BERT weights from FP32 to INT8
- **Result:** 8ms inference latency (3x speedup)
- **Accuracy Drop:** <1% (86.2% → 85.8%)
- **Deployment:** CPU-friendly, no GPU required

**2. Knowledge Distillation (6-layer BERT):**
- Distilled BERT-base (12 layers) → BERT-6 (6 layers)
- Teacher model: 87% accuracy, Student model: 84% accuracy
- **Result:** 5ms inference latency (5x speedup)
- **Use Case:** When 3% accuracy drop is acceptable for major latency gains

**3. ONNX Runtime Optimization:**
- Exported PyTorch model to ONNX format
- Graph optimization: operator fusion, constant folding
- **Result:** 18ms inference (1.4x speedup) with no accuracy loss

### Production Architecture Recommendation

For a production NLI system serving 1M+ requests/day:

**High-Accuracy Path (Content Moderation, Fact-Checking):**
- Model: BERT-base with INT8 quantization
- Infrastructure: GPU-accelerated (V100/A10) for batching
- Latency: ~8ms p50, ~15ms p99 (batch size 32)
- Cost: ~$200/month AWS (g4dn.xlarge with auto-scaling)

**High-Throughput Path (Search Re-Ranking, Real-Time Chat):**
- Model: Distilled BERT-6 with ONNX optimization
- Infrastructure: CPU-based (c6i instances) for cost efficiency
- Latency: ~5ms p50, ~12ms p99
- Cost: ~$80/month AWS (c6i.2xlarge)

**Monitoring & Reliability:**
- **OOD Detection:** Track prediction confidence distribution, alert on shifts
- **A/B Testing:** Gradual rollout comparing to baseline (distillation vs full BERT)
- **Explainability:** Attention weight visualization for debugging and stakeholder trust
- **Retraining:** Quarterly retraining on production examples (active learning)

## Comparative Results Summary

<img src="/images/portfolio/NLI_results.jpg" alt="NLI model performance comparison"/>

| Model | Accuracy | Latency | Best Use Case |
|-------|----------|---------|---------------|
| Naive Bayes | 65% | <1ms | Ultra-low latency, high-volume filtering |
| Logistic Regression | 68% | <1ms | Baseline, interpretability required |
| Bi-LSTM | 79% | 10ms | Moderate accuracy, moderate scale |
| BERT-base | 87% | 25ms | High accuracy, GPU available |
| BERT INT8 | 86% | 8ms | **Production sweet spot** (GPU) |
| BERT-6 Distilled | 84% | 5ms | **Production sweet spot** (CPU) |

## Key Engineering Insights

1. **Feature engineering matters** even with deep learning - helped classical models reach 68% vs 50% naive baseline
2. **Context is king** for NLI - cross-encoder BERT (87%) beats siamese architectures (82%) by 5%
3. **Production requires optimization** - raw BERT too slow; quantization + distillation essential
4. **Latency vs accuracy trade-off** is domain-specific - content moderation needs accuracy, search re-ranking needs speed
5. **Transfer learning works** - BERT fine-tuned on MultiNLI transfers well to SNLI (~91% accuracy)

## Technologies & Tools

**Deep Learning:** PyTorch, Hugging Face Transformers, BERT, LSTM
**Classical ML:** Scikit-learn, Naive Bayes, Logistic Regression
**Optimization:** ONNX Runtime, TensorRT (quantization), PyTorch JIT
**NLP:** SpaCy, NLTK, GloVe embeddings
**Experiment Tracking:** Weights & Biases (W&B)
**Data:** MultiNLI (433K examples), SNLI (570K examples)

**GitHub Repository:** [Coming Soon - Code refactoring for public release]