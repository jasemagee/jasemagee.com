---
author: jasemagee
categories:
- Uncategorized
date: "2015-02-17T16:22:08Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=123
id: 123
title: Simple Security on a Linux VPS
permalink: /2015/02/simple-security-linux-vps/
---
I maintain a number of Linux VPS (5 at the time of writing) and wanted to cover some basic security measures. When you sign up for a Linux VPS you tend to be given a root login to set it up. You should never leave it with root access as it’s a security risk. The minimum you want to do is create a new login and prevent root from logging on via SSH. Another good precaution is to change the default SSH port. For maximum security you want to use SSH keys for access which I’ll cover in another post.

For this example I’m going to create a new login called ‘admin’ which does not have root privileges and prevent people from using SSH to connect as root. The admin user will be able to switch users to root or run commands as root using sudo but will be prompted for the password.

The first step should always be to create the new user and make sure they can login and gain root privileges. Disabling root access and then finding out the new account can’t SSH onto the VPS is a less than ideal situation…

To add a new user we’re going to use the ‘adduser’ command. This will add the user, prompt you twice for the users password and ask you to provide Full Name, Room Number, Work Phone, Home Phone and Other. I’ve only filled in the Full Name.

```
root@discuss:~# adduser admin
Adding user `admin' ...
Adding new group `admin' (1000) ...
Adding new user `admin' (1000) with group `admin' ...
Creating home directory `/home/admin' ...
Copying files from `/etc/skel' ...
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for admin
Enter the new value, or press ENTER for the default
  Full Name []: Admin
  Room Number []:
  Work Phone []:
  Home Phone []:
  Other []:
Is the information correct? [Y/n] y
```

If for some reason you do not have the ‘adduser’ command, you’ll need to use the less friendly version, ‘useradd’.

**At this point you need to log out of the VPS and log back in as admin. Do not proceed until you can do so!**

Next, we want disable root access which involves editing a file called ‘sshd_config’. You should backup this file to admin’s home directory first by doing the following…

```
admin@discuss:~$ cp /etc/ssh/sshd_config ~/sshd_config_backup
```

Use nano to edit the file. You need to sudo this as it is a protected file. Input admin’s password.

```
admin@discuss:~$ sudo nano /etc/ssh/sshd_config
```

In the file you want to find the variable ‘PermitRootLogin’ and set it to no. This is what is will look like…

```
PermitRootLogin yes
```

Set it to no.

```
PermitRootLogin no
```

If it has a # in front of it then you need to remove that, it’s a comment.

Lastly, you need to restart SSH for your changes to take effect.

```
admin@discuss:~$ sudo service ssh restart
ssh stop/waiting
ssh start/running, process 27951
```

Once you’ve done that, whenever you try to login as root you will get the error message.

```
Permission denied, please try again.
```