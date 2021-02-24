---
date: "2015-03-04T16:22:52Z"
title: Tired of seeing the Rails asset pipeline logging?
permalink: /2015/03/tired-seeing-rails-asset-pipeline-logging/
---
Tired of seeing the Rails asset pipeline logging in the console? Disable it by adding this code…

```
# Hide asset pipeline logging
config.assets.logger = false
```

into…

```
config/environments/development.rb
```

Boom! No more asset pipeline logging during development. Remember to turn it back on if you have asset problems, though.