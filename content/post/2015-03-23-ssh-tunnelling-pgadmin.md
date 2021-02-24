---
author: jasemagee
categories:
- Uncategorized
date: "2015-03-23T16:23:58Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=127
id: 127
image: /wp-content/uploads/2016/05/ssh_tunnel_pgadmin-340x210.png
title: SSH Tunnelling with pgAdmin
url: /2015/03/ssh-tunnelling-pgadmin/
---
When working with remote PostgreSQL databases it’s nice to be able to use a graphical user interface to manage the data. Fortunately, it is very straight forward to setup by creating an SSH tunnel to the remote server and then connecting pgAdmin to the server as if it’s on localhost.

The first step is to create an SSH tunnel. Replace username and host respectively.

```
ssh -N -L 3333:localhost:5432 <username>@<host>
```

Arguments

* N: Do not execute a remote command. We just want port forwarding.
* L: This is the bind target on the local client. In our case we&#8217;re asking that port 3333 on localhost be bound to localhost:5432 from the remote server. 5432 is the default PostgreSQL port.

If you want the command to go into the background so you can continue to use the terminal, add an -f argument.

Using pgAdmin, connect as you would to a local database except use the port we’ve bound to (3333):

<div class="center-align"><img class="responsive-img" src="/wp-content/uploads/2016/05/ssh_tunnel_pgadmin.png" /></div>

If you ran the command as suggested, CTRL+C in the terminal will kill the SSH tunnel. If you sent it into the background using -f then you will need to kill the command by finding the background process using ps aux and grep.

```
$ ps aux | grep 3333
```

This runs the command ps aux and returns any lines containing 3333 (the port we bound to locally). The number we’re interested in is the PID, which is the second number below.

```
jason     6674  0.0  0.0  48280   912 ?        Ss   21:15   0:00 ssh -Nf -L <username>@<host>
```

With the PID we can kill the background process by doing.

```
kill 6674
```

Running the ps aux command again will reveal that the background process is no longer running.