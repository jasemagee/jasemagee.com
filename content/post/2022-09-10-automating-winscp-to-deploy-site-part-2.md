---
date: "2022-09-10"
title: Automating WinSCP to Deploy a Site Part 2
img: http://jasemagee.com/img/misc/winscp_400x400.png
---

In the last post I'd made WinSCP script to copy a local folder to a remote folder to deploy my website. I've made some improvements since. Instead of using **put** to copy the files across I've used ***synchronize*** to do so.

{{< highlight code >}}

synchronize remote -criteria=size C:\Path\To\New\Site\

{{< / highlight >}}

synchronize basically makes one folder the same as the other. You could switch out ***remote*** and use ***local*** to download changes from the remote. The ***critera*** part tells how we compare files between local and remote. As I'm using Hugo, the timestamps get binned when the site is compiled so I only have the sizes to go by.

Another issue I've had is with Hugo itself not copying assets that aren't directly used (e.g. images). So I've bunged an **xcopy** together with the above to make this handy batch file.


**Wheel in jasemagee.bat**

{{< highlight code >}}

xcopy /E /i /y C:\Path\To\Site\assets\img C:\Path\To\Site\public\img

"C:\Program Files (x86)\WinSCP\WinSCP.com" /log="C:\Path\To\WinSCP.log" /ini=nul /script="C:\Path\To\Sync website.txt"

{{< / highlight >}}