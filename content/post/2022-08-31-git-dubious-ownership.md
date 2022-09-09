---
date: "2022-08-31"
title: Git Dubious Ownership
---

I've just setup a new computer and have been running into this dubious message when using git.

{{< highlight code >}}

fatal: detected dubious ownership in repository at 'E:/seeker'

 To add an exception for this directory, call:
        git config --global --add safe.directory E:/seeker
 
 Set the environment variable GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true 
 and run again for more information.
 
{{< / highlight >}}

Note that tools using git (VS Code) may not work or give any feedback about this fatal error. You have to use the terminal to get at it.

If you DuckDuckGo the message sites will tell you to add the directory as a safe place or turn off this security feature completely in git. This seems a bit silly. The error is telling you that the directory is not owned by the current logged-in user of the machine. I keep my development code on its own SSD which I've migrated to the new computer and so Windows had no idea who the owner actually is.

To fix this the best thing you can do is simply change the owner of the directory.

1. Right click the folder 
2. Click Properties
3. Go to the Security tab
4. Click the Advanced Button
5. At the top on the 'Owner:' item, press the Change text at the end
6. Type part of your username into the name field, Click 'Check Name' 
7. Ok, ok, ok, ok, etc.
8. No security issue for git anymore
9. Make cuppa
