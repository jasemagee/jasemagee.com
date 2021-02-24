---
author: jasemagee
categories:
- Uncategorized
date: "2015-03-29T16:26:04Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=129
id: 129
title: Login via SSH Key
url: /2015/03/login-via-ssh-key/
---
This is a follow on to my previous post ‘[Simple Security on a Linux VPS](/2015/02/simple-security-linux-vps/)’ in which I said I would post about how to setup SSH key access on a server. SSH key access works by adding your local machines identify to a file on the server called authorized\_keys. Once your key is in the file, you can login as that server user using your local key. Previously, I would SSH onto the server and paste my local SSH key into authorized\_keys using nano but I’ve since found a much quicker way to do it by running this command.

```
ssh-copy-id <username>@<host>
```

Simples!