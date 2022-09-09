---
date: "2022-09-09"
title: Automating WinSCP to Deploy a Site
img: http://jasemagee.com/img/misc/winscp_400x400.png
---

This is just a snippet of code to automate the deployment of a website (Hugo, Jeykll, etc.) by using WinSCP. I'm using WinSCP because I need WebDAV. I want the script to connect to remote, change to the websites directory and upload the new website version from a folder (overwriting everything in the process) before disconnecting. Here is the script.

{{< highlight code >}}

open davs://user:pass@webdav.site.com/

cd /path/to/website/directory

put C:\Path\To\New\Site\*

close

exit


{{< / highlight >}}

This was the first attempt at running the script. It worked but the terminal did not wait for the command to complete, which wasn't ideal. The only way to confirm it had finished was by reviewing the log file.

{{< highlight code >}}
"C:\Program Files (x86)\WinSCP\WinSCP.exe" /log="C:\Path\To\Script\WinSCP.log" /ini=nul /script="C:\Path\To\Script\Deploy website.txt"
{{< / highlight >}}


WinSCP also provides a .com file for scripting, which will cause the terminal to wait.


{{< highlight code >}}
"C:\Program Files (x86)\WinSCP\WinSCP.com" /log="C:\Path\To\Script\WinSCP.log" /ini=nul /script="C:\Path\To\Script\Deploy website.txt"
{{< / highlight >}}
