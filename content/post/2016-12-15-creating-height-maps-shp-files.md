---
date: "2016-12-15T09:07:59Z"
title: Creating height maps from SHP files
permalink: /2016/12/creating-height-maps-shp-files/
---
---
date: "2016-12-15T09:07:59Z"
title: Creating height maps from SHP files
permalink: /2016/12/creating-height-maps-shp-files/
---
A while ago now, [Digimap](http://www.digimap.gg/) gave [data.gg](https://data.gg/) a SHP file containing elevation data for Guernsey, Sark, Alderney and Herm. Using this data, I’m going to place a WebGL widget on [data.gg](https://data.gg/) allowing users to fly around the islands. There’s two ways to approach this:

* Create a height-map using the SHP data and generate game engine terrain using it. This would be done using geographic software to rasterize the data into a normal image (like a PNG) with white pixels representing high points and black pixels low (e.g. sea level).
* Triangulate the XYZ points in the SHP file to create 3D meshes. This is done using an algorithm to join all the points together to form edges and faces.

This post is going to be about the former method which is to create a height map. You can check out my post on the other method [here](/2016/12/creating-meshes-shp-files/). Both approaches have different pros and cons—the mesh approach may be more detailed, while game engines (which is ultimately what the WebGL widget will be) will handle terrain better performance-wise.

Thanks to [Steve Streeting](http://www.stevestreeting.com/) who helped figure out how to best process this data using GDAL.

## Software

I’m going to be using [GDAL](http://www.gdal.org/) (Geospatial Data Abstraction Library) commands, which happen to come installed with [QGIS](http://www.qgis.org/en/site/index.html) desktop software for geographic data. You can install via either route—I went with QGIS because I can also use the software to view and edit the SHP file itself.

{{< imagelink src="/wp-content/uploads/2016/12/qgis.png" >}}

## Generate a GeoTIFF

Taken from [Wikipedia](https://en.wikipedia.org/wiki/GeoTIFF), a GeoTIFF is ‘a public domain metadata standard which allows georeferencing information to be embedded within a TIFF file.’ Basically—we’re going to take our vector data and rasterize it, which is stored in a GeoTIFF. I’m going to use [gdal_grid](http://www.gdal.org/gdal_grid.html) to convert the data. You could also use (and should try) [gdal_rasterize](http://www.gdal.org/gdal_rasterize.html). Both produced good results, but as I have some gaps in the data, `gdal_grid` is more suitable because it can interpolate between the points (fill in holes).

```
'C:\Program Files\QGIS 2.18\bin\gdal_grid.exe' -ot UInt16 -outsize 1025 1025 -zfield ZVALUE -a linear:radius=300 .\bailiwickheight.shp height.tif
```

I’m specifying that I want the grid system to use the linear algorithm, which uses Delaunay, the same triangulation algorithm I used to make the meshes in the other post. Despite this, my end result had some artifacts I couldn’t figure out a reason for. I found that setting the outsize to be ludicrously large (e.g. 20000) minimized the artifacts to roughly 4 pixels, instead of 40, which I was able to sort out in Photoshop after.

## Converting to RAW

[gdal_translate](http://www.gdal.org/gdal_translate.html) converts our GeoTIFF into other formats. Unity wants a `.raw` for height maps.


```
'C:\Program Files\QGIS 2.18\bin\gdal_translate.exe' -ot UInt16 -scale -of ENVI -outsize 1025 1025 .\height.tif bailiwick.raw
```


## Opening in Photoshop

Attempting to open the `.raw` file in Photoshop, you’ll see a window like below (the defaults will be wrong!). The screenshot shows the correct settings to open the file. Notice we’re using 16 bits, as we did when interacting with GDAL above.

{{< imagelink src="/wp-content/uploads/2016/12/photoshop-import-settings.png" >}}

## Height map

Tada, one height map!

{{< imagelink src="/wp-content/uploads/2016/12/output.jpg" >}}

It’s important to note that getting good results here took me a lot of trial and error. This will depend on the quality and quantity of your data. Try all the algorithms available in `gdal_grid` until you find the best results.

You can also do this using the QGIS desktop software instead of the command line, if that’s your preference.