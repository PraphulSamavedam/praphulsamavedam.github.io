---
title: "Real-Time 2D Object Recognition"
description: "Classifies 17 object types at 30 FPS using Hu moments and K-NN"
slug: projects/courses/CS-5330/realtime-object-recognition
sidebar:
  order: 3
---

## Overview

Real-time object recognition system classifying 17 object types at 30 FPS using geometric features and K-Nearest Neighbors. All segmentation and morphological operations implemented from scratch.

:::note
This project was completed as part of the [CS-5330 Pattern Recognition and Computer Vision](/projects/courses/CS-5330/) course. See the matching [dedicated project section](https://praphulsamavedam.github.io/CS-5330-Pattern-Recognition-and-Computer-Vision/#real-time-2d-object-recognition) and the [course GitHub repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision).
:::

## Pipeline

```
Camera Frame → Thresholding → Morphology → Segmentation → Feature Extraction → K-NN → Label
```

### 1. Preprocessing
- Otsu's thresholding (threshold: 124) for foreground/background separation
- From-scratch morphological operations: erosion, dilation, opening, closing

### 2. Segmentation
- Grassfire Transform for connected component labeling
- Region Growing for flood-fill segmentation
- Union-Find for efficient component merging

### 3. Feature Extraction (Rotation Invariant)
- 7 Hu Moments (scale and rotation invariant)
- Area ratio, aspect ratio, percent filled
- Bounding box dimensions

### 4. Classification
- K-Nearest Neighbors with Euclidean distance
- 10-20 training samples per class
- Unknown object detection with automatic label prompting

## Results

| Metric | Value |
|:---|:---|
| Average accuracy | 83% across 17 classes |
| Best class | Glove: 96% |
| Second best | Beanie: 92% |
| Challenging classes | Cap vs bottle cap: 60-70% |
| Single object FPS | 30 FPS |
| Multi-object FPS | 15 FPS |

## Technologies

C++, OpenCV (from-scratch implementations for morphology and segmentation)

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision)
- [CS-5330 Pattern Recognition and Computer Vision, Northeastern University](/projects/courses/CS-5330/) course project