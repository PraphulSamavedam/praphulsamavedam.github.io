---
title: "Store sales forecasting"
excerpt: "Secured <b>14<sup>th</sup></b> position in this hackathon challenge to forecast the next 2 month's sales 
based on 350+ retail stores of WOMart over the past 18 months.<br/>
<img src='/images/portfolio/Jobathon_Sep_2021_private_300.png' width='600' height='300'>"
collection: portfolio
---

## Project type: Hackathon - individual

## Hackathon Link: [Job-a-thon September 2021](https://datahack.analyticsvidhya.com/contest/job-a-thon-september-2021/#About)

## Overview
**Achievement:** Secured **14th place out of 6,828 participants (Top 0.2%)** in this competitive forecasting challenge.

The challenge: Forecast 2 months of sales across 350+ retail stores using 18 months of historical data. Accurate forecasting enables optimized inventory management, cashflow planning, and resource allocation at the store level.

## What Made This Solution Top 0.2%

**Key Innovation:** Instead of traditional time-series methods (ARIMA, Prophet), I reframed this as a regression problem with carefully engineered temporal features.

### Technical Approach

**Feature Engineering (Primary Competitive Edge):**
- **Rolling Statistics:** 7/14/28-day rolling means and standard deviations to capture trend momentum
- **Lag Features:** Previous month sales with careful windowing to prevent data leakage
- **Store Clustering:** K-means clustering (5 clusters) based on historical sales patterns - high-performers vs seasonal stores
- **Temporal Features:** Month, quarter, day-of-week encoded to capture seasonality
- **Promotional Impact:** Interaction features between store type and historical promotion periods

**Model Architecture:**
- Primary model: XGBoost Regressor with custom hyperparameters
- Cross-validation strategy: Time-series split (5 folds) matching test distribution
- Hyperparameter tuning: Bayesian optimization focusing on learning rate, max depth, and regularization

**Why This Worked:**
- Domain expertise: Retail sales are driven by recent trends (momentum) + seasonality
- Feature engineering > model complexity for tabular data
- XGBoost's ability to handle non-linear interactions between store clusters and time features
- Computational efficiency: Full pipeline ran in <5 minutes on single CPU

### Results & Performance
- **Final RMSE:** Competitive score placing in top 0.2% globally
- **Model Complexity:** 150 features engineered from 15 raw columns
- **Training Time:** <3 minutes on standard laptop (Intel i7, 16GB RAM)
- **Inference Speed:** Real-time predictions (<50ms per batch of 350 stores)

## Production-Ready Considerations

If deployed in a real retail environment, this solution would need:
- **Monitoring:** Distribution drift detection as new products/stores are added
- **A/B Testing Framework:** Gradual rollout with comparison to baseline forecasts
- **Feature Store:** Efficient computation of rolling statistics and lag features
- **Retraining Pipeline:** Automated monthly retraining as new data arrives
- **Explainability:** SHAP values to understand which features drive forecasts for stakeholder buy-in

## Key Takeaways

1. **Feature engineering matters more than model selection** for tabular forecasting problems
2. **Matching CV strategy to test distribution** is critical - using random splits would have overfitted
3. **Simplicity has value:** A well-tuned XGBoost model with strong features beats complex deep learning for small tabular data
4. **Competition → Production:** The techniques learned here (time-series feature engineering, proper validation) directly apply to production forecasting systems

**Technologies:** Python, Pandas, Scikit-learn, XGBoost, Matplotlib, Seaborn

**GitHub Repository:** [View complete solution and code](https://github.com/PraphulSamavedam/AV-Jobathon-Sep-2021) 

## Leaderboard position: [Leaderboard link](https://datahack.analyticsvidhya.com/contest/job-a-thon-september-2021/#LeaderBoard)
### Private leaderboard
<img src="/images/portfolio/Jobathon_Sep_2021_private.png" alt="Datathon Sept 2021 Private leadership board" height="400">

### Public leaderboard
<img src="/images/portfolio/Jobathon_Sep_2021_public.png" alt="Job-a-thon Sept 2021 Public leadership board" height="400">
