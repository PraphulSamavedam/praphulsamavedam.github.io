---
title: "Endangered Species Conservation via Satellite"
description: "CNN+LSTM analysis of satellite imagery to predict habitat degradation for endangered species"
slug: projects/endangered-species-satellite
---

## Project Details

- **Type:** Team project
- **Team:** Sanjay Prabhakar, Venkatesh Shivandi, Manikhanta Praphul Samavedam, Gowreesh Gunupati

## Overview

Predicting risks to endangered species by analyzing vegetation health changes in their habitats using satellite imagery and deep learning. The system connects IUCN Red List species data with satellite-derived vegetation indices to forecast habitat degradation before it becomes critical.

**Challenge:** Detect early warning signs of habitat loss by analyzing temporal patterns in satellite imagery across geographically diverse endangered species habitats.

## System Architecture

```
IUCN Red List API → Species + GPS coordinates
                          ↓
Google Earth Engine → Satellite imagery time series
                          ↓
NDVI Calculation → Vegetation health index per pixel
                          ↓
CNN → Spatial feature extraction from satellite images
  ↓
LSTM → Temporal trend prediction from NDVI time series
  ↓
Risk Assessment → Species habitat degradation forecast
```

### Data Pipeline

1. **Species Data:** IUCN Red List API provides endangered species with geographic coordinates
2. **Satellite Imagery:** NASA EOSDIS and Google Earth Engine provide multi-spectral imagery
3. **NDVI Computation:** Normalized Difference Vegetation Index from near-infrared and red spectral bands
   - NDVI = (NIR - Red) / (NIR + Red)
   - Values range from -1 to +1 (higher = healthier vegetation)

### Model Architecture

**CNN Component (Spatial Features):**
- 3 convolutional blocks, each containing 2 conv layers + max pooling + 25% dropout
- 8 convolutional layers total
- Filters: 32 → 64 → 128 → 256 (increasing depth)
- Kernel: 3×3, ReLU activation, same padding
- Extracts deforestation patterns, land-use changes, and degradation signatures

**LSTM Component (Temporal Prediction):**
- Flatten layer converts CNN spatial features to 1D
- 4 LSTM layers with 64 and 128 cells
- Tanh activation, 25% dropout after each layer
- Processes NDVI time series to predict future vegetation trends

## Key Outputs

- Historical NDVI trend visualization for each species' habitat
- Predictions of future vegetation health changes
- Risk classification for species based on habitat degradation trajectory
- Actionable conservation insights identifying which habitats need intervention

## Technologies

**Deep Learning:** TensorFlow, Keras (CNN + LSTM)
**Computer Vision:** OpenCV (satellite image processing)
**Geospatial:** Google Earth Engine API, GeoPandas
**Data Processing:** NumPy, Pandas
**Visualization:** Matplotlib, Seaborn

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/SavingEndangeredVoxCh)
