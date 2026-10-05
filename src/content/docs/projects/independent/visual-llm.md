---
title: "Visual LLM for VQA"
description: "Multi-modal Visual Question Answering using BLIP, YOLO, and LLM pipelines"
slug: projects/visual-llm
---

## Project Details
- **Type:** Team project
- **Mentor:** [Roi Yehoshua](https://www.linkedin.com/in/roi-yehoshua/)
- **Teammate:** [Poorna Chandra Vemula](https://www.linkedin.com/in/poorna-chandra-vemula)

## Overview

Visual Question Answering (VQA) requires a model to understand image content and answer natural language questions about it. Instead of fine-tuning a single end-to-end model, we explored whether combining off-the-shelf vision models with LLMs through prompt engineering could achieve competitive VQA performance.

**Challenge:** Answer open-ended questions about images using only pre-trained models (no task-specific fine-tuning), then identify the best pipeline configuration through systematic experimentation.

## System Architecture

We designed three pipeline architectures, each providing different types of visual context to the LLM:

### Pipeline 1: BLIP + LLM
```
Image → BLIP-1 (captioning) → "Children sleeping calmly in bed"
                                        ↓
Question + Caption → LLM → Answer
```
- Captures scene-level description
- Fails on counting/spatial questions (caption omits object counts)

### Pipeline 2: YOLO + LLM
```
Image → YOLOv5 (detection) → "2× person, 1× bed, position: [x,y,w,h]"
                                        ↓
Question + Detections → LLM → Answer
```
- Captures object inventory and positions
- Fails on mood/atmosphere questions (no scene understanding)

### Pipeline 3: BLIP + YOLO + LLM (Best)
```
Image → BLIP-1 → Caption
      → YOLOv5 → Detections
                    ↓
Question + Caption + Detections → LLM → Answer
```
- Combines scene understanding with object-level detail
- Best overall performance across question types

## Systematic Experimentation

### Generation Configuration Impact

Controlling LLM output format was critical — unconstrained generation produced verbose, unevaluable answers.

| Configuration | Exact Match | Semantic Match |
|:---|:---:|:---:|
| Default generation | 12.9% | 15.2% |
| Max 3 tokens | 21.6% | 25.8% |
| Max 3 tokens + single-word prompt | 42.9% | **52.1%** |

**Insight:** Simply adding "answer in a single word" to the prompt tripled accuracy.

### Pipeline Comparison (Best Config)

| Pipeline | Exact Match | Semantic Match |
|:---|:---:|:---:|
| BLIP + Llama-2 | 45.4% | 59.3% |
| YOLO + Llama-2 | 47.1% | 63.0% |
| BLIP + YOLO + Llama-2 | 46.1% | **64.2%** |
| BLIP + Mistral | 42.9% | 52.1% |
| YOLO + Mistral | 29.2% | 39.6% |
| BLIP + YOLO + Mistral | 45.4% | 59.3% |

Llama-2 outperformed Mistral on all pipeline configurations.

### Prompt Template Exploration (7 Templates)

Tested across both quantized and un-quantized model variants:

- **BLIP + YOLO + Llama-2:** Template 1 performed best (57-58% semantic match)
- **BLIP + YOLO + Mistral:** Template 7 performed best (55.1% semantic match), outperforming Llama-2 on structured prompts

### In-Context Learning (ICL)

| ICL Examples | Best Semantic Match |
|:---|:---:|
| 0-shot | 58% |
| 1-shot | **59%** |
| 3-shot | 52% |
| 5-shot | Degraded further |

**Finding:** More examples hurt performance — irrelevant examples confused the model. Semantic similarity-based example selection would likely improve results.

### Comparison to Fine-Tuned Baseline

| Pipeline | Exact Match | Semantic Match |
|:---|:---:|:---:|
| BLIP-VQA (fine-tuned) | 90.5% | 96.1% |
| Best generic pipeline | 51.9% | 64.2% |

Fine-tuned models significantly outperform generic pipelines, demonstrating why task-specific training remains essential for production VQA.

## Key Engineering Insights

1. **Output format control** is the single biggest lever — constraining generation tripled accuracy
2. **Combined context** (caption + detections) consistently outperforms single-source context
3. **Model choice is prompt-dependent** — Llama-2 wins on simple prompts, Mistral wins on structured templates
4. **ICL has diminishing returns** without relevance-based example selection
5. **Generic pipelines reach ~65% of fine-tuned performance** — useful for rapid prototyping but not production

## Technologies

**Vision Models:** BLIP-1 (captioning), YOLOv5 (detection)
**LLMs:** Llama-2-7B-chat, Mistral-7B-Instruct-v0.2
**Framework:** PyTorch, Hugging Face Transformers
**Evaluation:** Exact match accuracy, semantic match accuracy (embedding similarity)

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/VisualLLM)
- [Project Report (PDF)](https://github.com/PraphulSamavedam/VisualLLM/blob/main/VQA_Prompt_Tuned_Project_Report.pdf)

## Course

[CS-5100 Foundations of AI, Northeastern University](/projects/courses/CS-5100/)
