---
author: jasemagee
date: "2015-01-21T16:03:33Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=88
title: Gamely Digest and Jekyll
url: /2015/01/gamely-digest-jekyll/
---
We started Gamely Digest in 2013 to make a more digestible way to follow video games. The older I get the less time I have to play games and deciding what is worth playing is time consuming in itself.

When I was younger I noticed something similar with hardware. Once I took up software development I had less and less time to keep up with hardware components. Nowadays, I still build computers from components but do research at the time of purchase. I am extremely grateful for hardware sites that do guides on what to buy, they have save me so much time and effort. I want to do something similar for video games.

Before I’d even written a line of code, I knew Gamely Digest needed to be simple to maintain, static (no databases) and fast. Having used Jekyll previously, I used that. Jekyll is a static site generator. Instead of using a database, you create content using Markdown and Liquid templates. Jekyll generates the site into a folder, ready to be uploaded straight to your web server.

For example, if I was to use HTML to generate the reviews page, it would look something like this:

```
<h1>Post #1</h1>
Post #1 text, blah, blah, etc.
<h1>Post #2</h1>
Post #2 text, blah, blah, etc.
<h1>Post #3</h1>
Post #3 text, blah, blah, etc.
<h1>Post #4</h1>
Post #4 text, blah, blah, etc.
```

Using Jekyll, I just write this:

```
{% raw %}{% for post in site.posts %}
<h1>{{ post.title }}</h1>
{{ post.summary }}
{% endfor %}{% endraw %}
```

Behind the scenes, I have a folder called ‘_posts’ and Jekyll knows to find the posts for the loop in there. Each post has things associated with it such as title, date, layout, author, etc. Once the site has been built using Jekyll, you get the same HTML as above.

Reviews have improved a great deal since the release. Initially I had some of the layout, repeated inline image code and adsense code in there. This was becoming too time consuming to maintain. Now, I’ve extracted the adsense and inline image code into the Jekyll ‘_includes’ folder. Includes can also have parameters, allowing me to pass the filenames of inline images.

```
{% include image_inline.html img1=first_image img2=second_image %}
``` 

The difficultly was the sidebar images, I needed to be able to pick the images that go inline in the review and the order they appear in the sidebar. In the end I have come up with a quite elegant solution to minimize repetition. Integers are the naming convention for images on Gamely Digest. Reviews only ever use JPG images so the extension is assumed.

_posts/2015-01-01-my-review.html:
  
```
---
layout: review_layout
sidebar-image-order: [3,4,5,6,7]
img-lookup: "/dir/to/review/images"
---
<p>Paragraph 1</p>
{% include image_inline.html img1=1 img2=2 %}
Paragraph 2
{% include adsense.html %}
Paragraph 3
```

In the [front matter](http://jekyllrb.com/docs/frontmatter/) I am creating an array containing the names of the images in the order they should appear in the sidebar. Front matter is an the area between the two triple-dashed lines in which you can set predefined variables or create and set custom variables. I use this area for things like twitter slugs, authors, excerpts, dates, titles, etc. ‘layout’ is a predefined variable telling Jekyll what layout file to use for the page.

\_layouts/review\_layout.html:
  
```
<div class="row">
  <div class="col-4">{% for item in page.sidebar-image-order %}
      <img src="{{ page.img-lookup }}{{ item }}.jpg" />
    {% endfor %}
  </div>
  <div class="col-8">
    {{ content }}
  </div>
</div>
```

The review layout is used by all reviews and uses the ‘sidebar-image-order’ variable to loop and select the images for the sidebar.

Using this system I can copy and paste the reviews from our shared storage directly into the post file leaving me to set the sidebar image order, place an adsense advert in an appropriate place and place inline images in the article.

Sometimes you do still need a databases but for simple things like personal sites, blogs, business sites and product homepages Jekyll is an excellent choice. Once upon a time you would use WordPress for your blog because of its facility to comment on posts but with products like [Disqus](https://disqus.com/) and [Discourse](http://www.discourse.org/), you don’t always have to use WordPress. Of course Jekyll does have some downsides, it requires Ruby to be installed and for non-technical users, it is not as simple as logging in and using a What You See Is What You Get (WYSIWYG) editor to create content.