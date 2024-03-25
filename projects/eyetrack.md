---
title: 'EyeTrack'
date: '2023-08-15'
end: '2023-12-05'
---

This project was completed as part of the course CSE 40535: Computer Vision at the University of Notre Dame. The project was intended to implement a computer vision model that is able to detect, track, and accurately determine where a subject is looking at via a camera feed. Then translate the data from the model to mouse movement, and incorporated gesture recognition - for clicking, gesturing, etc. Group members included [Santiago Rodriguez](https:://github.com/svntii), Jose Benitez, and Gustavo Aniceto.

---

## Responsibilities

- Developed a CV model that is able to detect, track, and accurately determine where a subject is looking at via a camera feed. Then translate the data from the model to mouse movement, and incorporated gesture recognition - for clicking, gesturing, etc.
- Carefully designed an interface that allowed for users to intelligently interact with the software, without disrupting the traditional use of a computer.
- Our software is broken up into two components - Gaze Tracking and Gesture Detection
- Gaze Tracking: We used OpenCV to track the gaze vectors and determine where they are looking at on the screen. We then used this data to move the mouse cursor to the desired location. 
- Gesture Detection: We used OpenCV to detect hand gestures and translate them into mouse clicks, drags, and other actions.

## Skills

![Python][Python]
![OpenCV][OpenCV]
![PyTorch][PyTorch]


### Repo
---
[![Github](https://skillicons.dev/icons?i=github)](https://github.com/svntii/eyeTrack)


[OpenCV]: https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white
[Python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[PyTorch]: https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white
