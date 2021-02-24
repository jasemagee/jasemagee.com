---
date: "2015-06-27T16:28:24Z"
title: HTTPS Blocked Mixed Content
permalink: /2015/06/https-blocked-mixed-content/
---
I recently came across this message after installing an SSL certificate on one of my websites.

{{< imagelink src="/wp-content/uploads/2016/05/https_mixed_content.png" >}}

The message means that although the site is secure, some active content is not. Content can be passive or active.

Passive includes tags like…

```
  * <audio>
  * <img>
  * <video>
```

As you can see, these all tend to be view type content.

Active includes tags like…

```
  * <script>
  * <link>
  * <iframe>
  * <object>
  * @import
```

Although some of the active tags can be used for view type content like the passive ones, they can also be used to make Document Object Model (DOM) changes which means they have the potential to be insecure.

In my case it was due to Google Fonts import. This line in particular…

```
@import url(http://fonts.googleapis.com/css?family=Roboto:400,700);
```

The fix is to remove the http allowing your browser to determine the protocol. You could also just set it to https instead (if supported).

```
@import url(//fonts.googleapis.com/css?family=Roboto:400,700);
```