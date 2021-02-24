---
author: jasemagee
categories:
- Linux
date: "2016-07-03T21:31:20Z"
guid: https://jasemagee.com/?p=199
id: 199
image: /wp-content/uploads/2016/07/sacrificialinferno-200.jpg
title: Building your GameMaker game to run on Linux
url: /2016/07/building-gamemaker-game-run-linux/
---
Over on [sacrificialinferno.com](https://sacrificialinferno.com/) I&#8217;ve created an in-depth post about building GameMaker games for Linux using Hyper-V. It took me considerably longer than I expected due to the amount of screenshots involved in creating a Hyper-V guest and installing Ubuntu. I used Hyper-V because my Dell XPS 13 laptop is Windows Pro which comes with Hyper-V and I thought I&#8217;d give it a shot as I&#8217;d usually use VirtualBox. Sadly, I can&#8217;t say I was very impressed as the guest was able to cause a BSOD on the host by using dynamic memory.

<div class="center-align">
<img class="responsive-img" src="/wp-content/uploads/2016/07/gamemaker-linux-settings.png" />
</div>

Anyway, the post covers the following&#8230;

  1. Downloading and setting up a base Linux Virtual Machine (VM)
  2. Installing the GameMaker dependencies
  3. Hooking the Linux VM up to GameMaker Studio

You can read the full post [here](https://sacrificialinferno.com/2016/07/03/building-gamemaker-game-run-linux/).

There isn&#8217;t really a good reason not to support Linux when using GameMaker which has build support out the box. I&#8217;d like to see GameMaker streamlining the build process to make it easier for people unfamiliar with setting up a Linux system, though.