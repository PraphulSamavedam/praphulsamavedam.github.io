---
title: "Content-Based Image Retrieval"
description: "Image similarity search using 8+ feature extraction techniques"
slug: projects/courses/CS-5330/content-based-image-retrieval
sidebar:
  order: 2
---

## Course

[CS-5330 Pattern Recognition and Computer Vision, Northeastern University](/projects/courses/CS-5330/)

## Overview

Image retrieval system that finds visually similar images from a database using multiple feature extraction techniques and distance metrics. CSV-based feature caching provides ~100x speedup on subsequent queries.

:::note
This project was completed as part of the [CS-5330 Pattern Recognition and Computer Vision](/projects/courses/CS-5330/) course. See the matching [dedicated project section](https://praphulsamavedam.github.io/CS-5330-Pattern-Recognition-and-Computer-Vision/#content-based-image-retrieval-cbir) and the [course GitHub repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision).
:::

## Architecture

```
Query Image → Feature Extraction → Distance Computation → Ranked Results
                    ↓
            Feature Cache (CSV) → ~100x speedup on repeat queries
```

## Feature Extraction Techniques

| Technique | What It Captures | Best For |
|:---|:---|:---|
| Baseline (9×9 center) | Central pixel colors | Simple color matching |
| 2D Histogram (rg chromaticity) | Color distribution, lighting-robust | Varying illumination |
| 3D Histogram (RGB) | Full color distribution | Color-dominant scenes |
| Multi-Histogram (top/bottom) | Spatial color layout | Landscape vs portrait |
| Texture + Color | Gradient magnitude + color | Textured surfaces |
| Quarters | 4-quadrant color analysis | Spatially structured images |
| Center + Texture | Weighted center + edge features | Object-centric images |
| Custom Composite | Weighted combination | General purpose |

## Distance Metrics

- Sum of Squared Errors (SSE)
- Mean Squared Error (MSE)
- Histogram Intersection (best for color histograms)
- Entropy-based distance
- Weighted histogram comparison

## Results

- Handles 1000+ image databases efficiently
- Both GUI and command-line interfaces
- Feature caching eliminates redundant computation

## Technologies

C++, OpenCV

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision)
