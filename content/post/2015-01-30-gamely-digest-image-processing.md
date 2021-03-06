---
date: "2015-01-30T16:14:17Z"
title: Gamely Digest image processing
permalink: /2015/01/gamely-digest-image-processing/
---
One of the my targets for Gamely Digest is that it is kept simple and pain-free to maintain. For the first few reviews, I had to manually create thumbnails, rename and convert 50 images in GIMP. This drove me to write some bash scripts to automate the process.

The first script loops over every file in the current directory and renames it to gamename_X.jpg (X being a number from 1 to the total count of the files in the directory). Below is an example of the scripts execution.

```
ls | cat -n | while read n f; do mv "$f" "gamename_$n.jpg"; done
```

```
Before

2015-01-01-dreamfall.jpg
2015-01-01-dreamfall1.jpg
2015-01-01-dreamfall2.jpg
```

```
Command    

ls | cat -n | while read n f; do mv "$f" "dreamfall_$n.jpg"; done
```

```
After

dreamfall_1.jpg
dreamfall_2.jpg
dreamfall_3.jpg
```

The next script uses [Image Magick](http://imagemagick.org "Image Magick") which is a fantastic library and toolset to create, edit, compose and convert images. Image Magick is a huge subject and outside the scope of this article but the command I’ve used below is very basic.

This one loops over every JPG file in the current directory, uses the Image Magick convert command to resize the image to 30% of its original size and appends a ‘t’ (t for thumbnail) to the end of the filename.

```
for f in *.jpg; do convert "$f" -resize 30% "${f%%.jpg}t.jpg"; done
```

```
Before

dreamfall_1.jpg
dreamfall_2.jpg
dreamfall_3.jpg
```

```
Command

for f in *.jpg; do convert "$f" -resize 30% "${f%%.jpg}t.jpg"; done
```

```
After

dreamfall_1.jpg
dreamfall_1t.jpg
dreamfall_2.jpg
dreamfall_2t.jpg
dreamfall_3.jpg
dreamfall_3t.jpg
```

My next job to tackle is reviewers submitting different size images causing reviews not to line up.

{{< imagelink src="/wp-content/uploads/2016/05/line_example.png" >}}

The expanded images can continue to have a different size but thumbnails need to be consistent. I plan on tackling this by using ImageMagick to remove pixels from the edges so we end up with a consistent thumbnail size. I’ll post my solution to this at a later late.