---
title: Image Downloads Prediction
description: Top 5 Kaggle — predicting image popularity from metadata
slug: projects/image-downloads-prediction
---

## Project Details

- **Type:** Individual competition project
- **Competition:** [Can I be an Influencer? — Kaggle](https://www.kaggle.com/competitions/can-i-be-an-influencer)

## Overview
**Achievement:** Secured **5th position** in the "Can I be an Influencer?" Kaggle competition.

The challenge: Predict the number of downloads an image will receive based solely on its metadata properties (ISO, exposure time, pixel coverage) and associated description/keywords — without processing the image itself. This simulates a real-world scenario where platforms need to estimate content popularity at upload time before engagement data exists.

## Technical Approach

### Problem Formulation

This is a regression problem where the target variable (download count) must be predicted from heterogeneous metadata features. The constraint of not using pixel data forces reliance on creative feature engineering from camera settings, image properties, and textual descriptors.

### Dataset Challenges

The dataset presented several non-trivial challenges:
- **Missing Data:** Significant gaps in metadata fields (ISO, exposure time) requiring informed imputation strategies
- **Outliers:** Download counts with extreme right skew — a few viral images distort the distribution
- **Class Imbalance:** Featured vs non-featured images showed dramatically different download distributions, creating a bimodal target
- **High Variance:** Featured images had orders of magnitude more downloads than non-featured ones, complicating a single unified model

### Feature Engineering (Primary Competitive Edge)

**Camera Metadata Features:**
- ISO sensitivity, exposure time, and aperture settings as proxies for image quality and shooting conditions
- Pixel coverage (resolution) as an indicator of professional-grade equipment
- Interaction features between camera settings (e.g., ISO x exposure time for lighting conditions)

**Text-Based Features:**
- Keyword count and description length as engagement proxies
- TF-IDF features from description text to capture trending topics
- Categorical encoding of primary subject keywords

**Derived Features:**
- Featured/non-featured binary indicator with segment-specific modeling
- Log-transformed target to handle extreme skew
- Statistical aggregations by category groupings

### Model Architecture

- **Primary Model:** Gradient boosting ensemble (XGBoost/LightGBM) optimized for tabular regression
- **Validation Strategy:** K-fold cross-validation with stratification by featured status
- **Hyperparameter Tuning:** Grid search over learning rate, tree depth, and regularization parameters
- **Handling Bimodality:** Separate modeling approaches for featured vs non-featured segments, combined via stacking

### Results & Performance

- **Final Standing:** Top 5 finish in the competition
- **Key Insight:** Segment-aware modeling (treating featured and non-featured images differently) provided the largest single improvement in prediction accuracy
- **Robustness:** Solution generalized well from public to private leaderboard, indicating proper validation strategy

## Key Takeaways

1. **Domain segmentation matters:** Featured vs non-featured images are fundamentally different populations — modeling them separately was the breakthrough
2. **Metadata is surprisingly predictive:** Camera settings and textual descriptions carry strong signals about content popularity even without seeing the image
3. **Proper handling of skewed targets** (log transform, robust scaling) was essential for gradient boosting to converge effectively
4. **Missing data treatment** as an informative signal rather than noise — missingness patterns correlated with image source quality

**Technologies:** Python, Pandas, NumPy, Scikit-learn, XGBoost, LightGBM, Matplotlib, Seaborn

**GitHub Repository:** [View complete solution and code](https://github.com/PraphulSamavedam/Image-Downloads-Prediction)
