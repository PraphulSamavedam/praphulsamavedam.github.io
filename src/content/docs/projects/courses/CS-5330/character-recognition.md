---
title: "Character Recognition with Deep Learning"
description: "LeNet-5 CNN achieving 98%+ on MNIST with transfer learning for Greek letters"
slug: projects/courses/CS-5330/character-recognition
sidebar:
  order: 5
---

## Course

[CS-5330 Pattern Recognition and Computer Vision, Northeastern University](/projects/courses/CS-5330/)

## Overview

Deep learning system for handwritten character recognition using CNNs with transfer learning. Achieves 98%+ accuracy on MNIST and 90%+ on Greek letters with only 27 training images per class.

:::note
This project was completed as part of the [CS-5330 Pattern Recognition and Computer Vision](/projects/courses/CS-5330/) course. See the matching [dedicated project section](https://praphulsamavedam.github.io/CS-5330-Pattern-Recognition-and-Computer-Vision/#character-recognition-deep-learning) and the [course GitHub repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision).
:::

## Architecture

### Base Model (MNIST)

```
Input (28×28) → Conv1 (32 filters, 5×5) → ReLU → MaxPool
             → Conv2 (64 filters, 5×5) → ReLU → MaxPool → Dropout(50%)
             → FC1 (128) → ReLU → FC2 (10) → Softmax
```

- LeNet-5 inspired architecture
- Training: 5 epochs, SGD optimizer
- **Result:** 98%+ accuracy on MNIST test set

### Transfer Learning (Greek Letters)

```
Frozen: Conv1 → Conv2 (pre-trained edge/curve detectors)
Retrained: FC1 → FC2 (3 classes: α, β, γ)
```

| Metric | Value |
|:---|:---|
| Training data | 27 images per class (81 total) |
| Trainable parameters | 99% fewer than full model |
| Training time | 45 seconds |
| Accuracy | 90%+ on Greek letters |

**Why it works:** Low-level features (edges, curves) learned on digits transfer directly to letter shapes. Only the classification layers need retraining.

### Filter Visualization

Visualized learned convolutional filters showing:
- Layer 1: Edge detectors (horizontal, vertical, diagonal)
- Layer 2: Corner and curve detectors (combining layer 1 features)

## Key Insights

1. **Transfer learning is data-efficient** — 27 images per class sufficient when source and target share low-level features
2. **Freezing conv layers** prevents catastrophic forgetting while allowing task-specific adaptation
3. **Filter visualization** confirms CNNs learn interpretable features (edges → corners → shapes)

## Technologies

Python, PyTorch, CNNs, Transfer Learning

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision)
