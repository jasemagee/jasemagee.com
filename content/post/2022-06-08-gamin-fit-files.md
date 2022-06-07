---
date: "2022-06-08"
title: Garmin FIT Files
---

As I little bit of a side project I recently touched my toes into the world of sports activity data by reading some data from my Garmin watch.

Garmin uses a binary file format called FIT which is a type of [GIS file](https://en.wikipedia.org/wiki/GIS_file_formats) containing geographical data alongside sport data points for whatever activity you're doing. 

The FIT file itself wouldn't be hard to parse by hand but there is no point doing so as [Garmin provide an SDK](https://developer.garmin.com/fit/overview/) to read the data into memory. Once the file is parsed, the can very easily export to CSV or do some data analysis with it.

I wrote a small C# app to read any single FIT file and output a bunch of diagrams. Below I've fed the GPS data into [OpenStreetMap](https://www.openstreetmap.org) using the awesome [Leaflet library](https://leafletjs.com/) to plot my recent cycle. I've also done a couple of charts using [Highcharts](https://www.highcharts.com/). Not bad for 2 hours work!

My main takeaway from this small project is suprise at the lack of quality alternatives to Strava. Obviously there is a lot more to Strava (comparisons, analysis, etc.) but with very little effort I've made a dumb activity page.
