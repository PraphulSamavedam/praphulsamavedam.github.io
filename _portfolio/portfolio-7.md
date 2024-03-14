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
This is a team project and our approach to autonomously score/ create the spot chart can be broken down into 3-step mechanism.
<ol>
<li>Locate the table in the frame and calibrate camera using the known table (standard dimensions)</li>
<li>Track the ball in the game and locate the position on the table using calibrated camera.</li>
<li>Using the event detection model to predict, understand event to accordingly score team.</li>
</ol>
For locating/tracking the table in the game feed we have used UNet and for tracking the ball, 
we have explored and contrasted the classical and modern computer vision techniques. Finally, we have used CNNs to predict 
the events of bounce on the table, score points, etc. with oversampling for the imbalanced dataset having majorly no event frames.  

## Demos
<img src="/images/portfolio/TT_Tracking_1.gif">
<br/> 
<br/>
<br/> 
<img src="/images/portfolio/TT_Tracking_2.gif">
