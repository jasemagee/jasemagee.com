---
author: jasemagee
categories:
- Uncategorized
date: "2015-02-15T16:21:15Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=118
id: 118
image: /wp-content/uploads/2016/05/line_example-340x210.png
title: Gamely Digest Follow Up
permalink: /2015/02/gamely-digest-follow/
---
This is a follow up post to [this](https://jasemagee.com/2015/01/gamely-digest-image-processing/) post in which I promised to post my solution to handling thumbnails when different reviewers submit different aspect ratio images, e.g…

<div class="center-align">
<img class="responsive-img" src="/wp-content/uploads/2016/05/line_example.png" />
</div>

Well, here it is..

```
for f in *.jpg; do convert "$f" -resize "576x324^" -gravity center -crop 576x324+0+0 +repage "${f%%.jpg}t.jpg"; done
```

This command does the following things:

  1. Resizes the image as close to 576&#215;324 as possible based on the smallest fitting dimension (indicated by the ^).
  2. Sets the &#8216;gravity&#8217; to the centre for the next command.
  3. Takes a central crop of the image (central due to previous command) to the size 576&#215;324. The x and y offsets give the location of the top left corner of the cropped image with respect to the original. 0 and 0 in this case.
  4. Repage which removes image data to do with virtual image location. I&#8217;ve added this simply because the documentation recommends doing so as a pre-caution when using the crop command.