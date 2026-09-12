---
title: Stock Portfolio Simulation
description: MVC architecture investment strategy simulator with real market data
slug: projects/stock-portfolio-simulation
---

## Project Details

- **Type:** Team project
- **Mentor:** [Prof. Amit Shesh](https://www.khoury.northeastern.edu/people/amit-shesh/)
- **Teammate:** [Harsha Gollamudi](https://www.linkedin.com/in/sriharshagollamudi)

## Overview

A Java Swing simulation application for comparing investment strategies using real stock market data. The system enables users to evaluate strategies such as dollar-cost averaging against actual historical prices — allowing risk-free experimentation before committing real capital.

Built iteratively over 4 development cycles, the project follows strict MVC architecture and SOLID design principles. It integrates the Alpha Vantage API for live and historical stock data, with a caching layer to minimize API calls and reduce costs.

## Architecture

### MVC Design Pattern

- **Model:** Portfolio state management, stock data storage, strategy computations, and persistence layer
- **View:** Dual interface — Java Swing GUI for visual interaction and CLI for scripted/batch operations
- **Controller:** Command pattern implementation routing user actions to appropriate model operations

### SOLID Principles Applied

- **Single Responsibility:** Separate classes for API integration, caching, portfolio state, and strategy computation
- **Open/Closed:** New investment strategies can be added without modifying existing code
- **Liskov Substitution:** Strategy interface allows interchangeable algorithms
- **Interface Segregation:** Distinct interfaces for view rendering, data access, and persistence
- **Dependency Inversion:** Controller depends on abstractions, not concrete implementations

## Technical Details

### Alpha Vantage API Integration

- Fetches real-time and historical stock prices (daily, weekly, monthly)
- Supports multiple ticker symbols for diversified portfolio simulation
- Rate limiting and error handling for API reliability

### Caching Strategy

- Local file-based cache for previously fetched stock data
- Cache invalidation based on data freshness requirements
- Reduced API calls by approximately 80% during repeated simulations — critical given the free-tier rate limit of 5 calls/minute

### Portfolio Features

- **Dollar-Cost Averaging simulation:** Fixed-amount periodic investments compared against lump-sum
- **Portfolio persistence:** Save and load portfolio configurations across sessions
- **Future purchase orders:** Schedule hypothetical purchases for strategy comparison
- **Cost basis tracking:** Per-share cost basis with FIFO/average cost methods
- **Composition views:** Visual breakdown of portfolio allocation by sector and ticker

## Key Takeaways

1. **MVC pays off at scale:** Clean separation enabled adding the CLI interface without touching model or controller logic
2. **API caching is essential:** Without caching, the free-tier API limit made iterative testing impractical
3. **Iterative development:** 4 cycles of design-implement-review taught disciplined software engineering
4. **Strategy comparison:** Dollar-cost averaging showed measurably lower variance in simulated returns over volatile periods

## Technologies

Java, Swing, Alpha Vantage API, JUnit, MVC Architecture, Command Pattern

## Links

- [GitHub Repository](https://github.com/PraphulSamavedam/Stock-Portfolio-Simulator)
