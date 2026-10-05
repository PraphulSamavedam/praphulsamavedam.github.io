---
title: "Camera Calibration & Augmented Reality"
description: "Real-time AR projection of 3D objects using Zhang's calibration method"
slug: projects/courses/CS-5330/camera-calibration-ar
sidebar:
  order: 4
---

## Course

[CS-5330 Pattern Recognition and Computer Vision, Northeastern University](/projects/courses/CS-5330/)

## Overview

Camera calibration and augmented reality system that projects virtual 3D objects onto real-world scenes using chessboard-based pose estimation, achieving less than 0.5 pixel reprojection error.

:::note
This project was completed as part of the [CS-5330 Pattern Recognition and Computer Vision](/projects/courses/CS-5330/) course. See the matching [dedicated project section](https://praphulsamavedam.github.io/CS-5330-Pattern-Recognition-and-Computer-Vision/#camera-calibration-augmented-reality) and the [course GitHub repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision).
:::

## Pipeline

```
Chessboard Detection → Camera Calibration (Zhang's Method)
                              ↓
                    Intrinsic Matrix + Distortion Coefficients
                              ↓
Live Frame → solvePnP → Rotation + Translation Vectors
                              ↓
              3D Object Projection → AR Overlay on Frame
```

### Camera Calibration
- Zhang's method with multiple chessboard views
- Computes focal length, principal point, distortion coefficients
- Reprojection error: less than 0.5 pixels

### Real-Time Pose Estimation
- solvePnP computes camera pose from detected chessboard corners
- Handles radial and tangential lens distortion correction
- Stable tracking up to 60° viewing angles

### Virtual Object Library
5 pre-defined 3D objects: house, axes, arrow, cone, tetrahedron — projected with accurate perspective transformation.

## Extensions

- **ArUco Marker Tracking:** Alternative to chessboard for more flexible AR targets
- **OpenGL 3D Models:** Rendered complex 3D models with lighting and shading
- **Static Image/Video AR:** AR overlay on pre-recorded content
- **Harris Corner Detection:** Alternative feature detection for calibration
- **Homography-Based Projection:** Planar image warping onto detected surfaces

## Technologies

C++, OpenCV, OpenGL

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/CS-5330-Pattern-Recognition-and-Computer-Vision)
