---
date: "2021-03-02"
title: Microsoft Teams Webcam Crashing
---

I recently purchased an extremely cheap webcam (wansview 1080P) only to find it constantly 
crashes when used with Microsoft Teams. Initially I wrote it off as a feature of the cheap webcam but I've since discovered 
that Microsoft Teams is the culprit.

The symptoms include:

* Microsoft Teams locking up for a few seconds followed by the webcam not working
* The webcam image freezing 
* The webcam image going black
* The webcam not being released (it has a light when in use which doesn't turn off after Microsoft Teams gets its little paws on it)

I've managed to fix it by using [Open Broadcaster Software's](https://obsproject.com/) Virtual Camera feature. 
By doing this, you effectively give OBS control of the webcam hardware management instead of Microsoft Teams. Then, you tell Microsoft Teams
to use the OBS Virtual Camera instead of the actual webcam and it all works as expected. You'll just need to remember to start OBS and turn the
Virtual Camera on/off when you want to use it.