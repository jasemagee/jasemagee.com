---
author: jasemagee
categories:
- Uncategorized
date: "2015-01-30T16:10:59Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=99
id: 99
image: /wp-content/uploads/2016/05/tess_example-340x200.png
title: Getting data out of image PDFs without losing your mind
url: /2015/01/getting-data-image-pdfs-without-losing-mind/
---
Recently I’ve been gathering data from [gov.gg](http://gov.gg "gov.gg") census reports as far back as 1971 for [data.gg](http://data.gg "data.gg"). The earlier census reports are scanned and the later ones have been created electronically but don’t copy and paste correctly. By the end of manually copying the data from the first table I knew I’d have to find a better way. After a bit of searching I found [Tesseract](https://code.google.com/p/tesseract-ocr/ "Tesseract"), an OCR (Optical Character Recognition) tool. OCR tools take an image and attempt to convert any text it finds in the image into usable text. Google has even had a hand in Tesseract.

Tesseract is extremely easy to use. All you need to do is give it the image and an output file.

```
tesseract myscan.png out
```

There are plenty of other options available to optimise for your particular situation and even multiple languages supported. For me Tesseract worked perfectly except for the occasional 3 and 8 getting mixed up. Here is an example I created earlier…

#### Input
<img class="responsive-img" src="/wp-content/uploads/2016/05/tess_example.png" />

#### Output

```
Hello
There
```