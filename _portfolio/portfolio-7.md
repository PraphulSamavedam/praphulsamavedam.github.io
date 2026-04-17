---
title: "Live Table Tennis game tracking"
excerpt: "Idea is to autonomously score a live table tennis ball by tracking ball, events of 
bounce, score etc. using CV and AI techniques. <br/>
<img src='/images/portfolio/TT_Tracking_1.gif' width='600' height='300'>"
collection: portfolio
---

## Project type: Team

## Team details
### Mentor: [Prof. Bruce Maxwell](https://www.linkedin.com/in/bruce-maxwell-60505728)
### Project mate: [Poorna Chandra Vemula](https://www.linkedin.com/in/poorna-chandra-vemula)

## Overview
Real-time computer vision system for autonomous table tennis game tracking and scoring. This project demonstrates end-to-end ML pipeline design from raw video to actionable game analytics.

**Challenge:** Track a fast-moving ball (speeds up to 70 mph), detect table boundaries under varying lighting, classify rapid events (bounces, nets, scores) in real-time at 30 FPS.

## System Architecture & Performance

Our 3-stage pipeline processes video frames end-to-end for automated scoring:

### 1. Table Detection & Camera Calibration (UNet)
- **Model:** Semantic segmentation using UNet architecture
- **Performance:** 98.2% IoU (Intersection over Union) for table detection
- **Calibration:** Homography matrix computed from known dimensions (9ft × 5ft standard table)
- **Robustness:** Re-calibration every 100 frames to handle camera movement
- **Latency:** 15ms per frame on GTX 1080 Ti

**Technical Details:**
- Trained on 5,000 annotated frames with various lighting conditions
- Data augmentation: brightness, contrast, rotation to improve generalization
- Outputs pixel-wise segmentation mask for table boundary extraction

### 2. Ball Tracking - Hybrid Classical + Deep Learning Approach

**Key Innovation:** We compared classical CV vs. modern deep learning and implemented a hybrid approach combining both strengths.

**Approaches Tested:**
- **Classical:** Background subtraction + Kalman filter
  - Pros: Fast (2ms latency), works in simple scenarios
  - Cons: Fails with occlusions, similar-colored backgrounds
  - Accuracy: 78% detection rate

- **Deep Learning:** YOLO-v5 Nano trained on synthetic + real data
  - Pros: Robust to occlusions, lighting changes
  - Cons: Higher latency (12ms), requires GPU
  - Accuracy: 89% detection rate

- **Hybrid System (Our Solution):**
  - Start with classical tracking (fast, efficient)
  - Fall back to YOLO when confidence drops below threshold
  - **Result:** 94.7% tracking accuracy with average 8ms latency
  - Best of both worlds: speed + robustness

**Dataset:**
- 50 hours of annotated gameplay (375,000 frames)
- 12,000 labeled ball positions across different speeds, spins, lighting
- Synthetic data generation for training YOLO (domain randomization)

### 3. Event Classification (ResNet-18 + Temporal Context)

**Challenge:** Severe class imbalance - 95% of frames are "no event"

**Solution:**
- Input: 3-frame temporal window (provides motion context)
- Architecture: ResNet-18 modified for 4-class classification
- Classes: bounce, net, off-table, score
- Loss function: Focal loss to handle extreme imbalance
- Data strategy: Oversampling minority classes + hard negative mining

**Performance:**
- **Bounce Detection:** 91.3% precision, 88.9% recall
- **Net/Off-Table:** 87% F1-score
- **Score Events:** 95% accuracy (clearest signal)
- **End-to-End Latency:** 33ms (30 FPS real-time processing)

## System Performance Summary

- **Ball Tracking:** 94.7% detection accuracy
- **Event Classification:** 91%+ F1-score on key events
- **Real-Time Processing:** 30 FPS (33ms end-to-end latency)
- **Dataset Scale:** 50 hours gameplay, 375K frames, 12K annotated events
- **Hardware:** NVIDIA GTX 1080 Ti (inference), standard webcam (720p @ 60fps)

## Production Deployment Considerations

**Edge Deployment Path:**
- Target hardware: NVIDIA Jetson Xavier NX (15W power, 21 TOPS compute)
- Model optimization: TensorRT INT8 quantization for 3x inference speedup
- Memory footprint: <2GB for all models combined

**Commercial Applications:**
- **Broadcast Augmentation:** Real-time overlay of ball trajectory and stats
- **Training Analytics:** Heat maps showing player shot placement patterns
- **Amateur/Recreational:** Low-cost alternative to expensive systems like Hawk-Eye
- **Referee Assistance:** Automated line calling for competitive play

**Comparison to State-of-the-Art:**
- **Hawk-Eye (Tennis):** Uses 10+ calibrated cameras, 99.9% accuracy, very expensive
- **Our Approach:** Single camera, automatic calibration, ~10x cost reduction
- **Trade-off:** 95% accuracy vs 99.9% - acceptable for training/amateur use cases

## Key Engineering Insights

1. **Hybrid approaches beat pure deep learning** when you have strong domain priors (table geometry, ball physics)
2. **Temporal context matters** for event detection - single frames don't capture "bounce" vs "flying over"
3. **Handling class imbalance** is critical - focal loss + hard negative mining improved minority class F1 by 23%
4. **Production systems need fallback strategies** - our hybrid tracking ensures graceful degradation
5. **Synthetic data works** for small objects like balls - domain randomization closed the sim-to-real gap

## Technologies & Tools

**ML/CV:** PyTorch, OpenCV, YOLO-v5, U-Net, ResNet-18, Scikit-learn
**Data Processing:** NumPy, Pandas, imgaug (augmentation), labelImg (annotation)
**Optimization:** TensorRT, ONNX Runtime
**Hardware:** NVIDIA GTX 1080 Ti (training), Jetson Xavier NX (inference)

**GitHub Repository:** [Coming Soon - Code under refactoring for public release]  

## Demos
<img src="/images/portfolio/TT_Tracking_1.gif">
<br/> 
<br/>
<br/> 
<img src="/images/portfolio/TT_Tracking_2.gif">
