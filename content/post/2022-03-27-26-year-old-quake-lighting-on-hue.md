---
date: "2022-03-27"
title: 26 Year Old Quake Lighting on Hue
---

Here's a short video demonstrating a small project I recently worked on. The objective was to take the 26 year old light flickering code from the original Quake (also used in Half-Life, Half-Life 2, Portal 2 and Half-Life Alyx). Last year it made the news after some folk synced up videos of the lighting in each game and found the flickering matched exactly.

{{< ytvideo src="https://www.youtube.com/embed/lu2TtFSUFLk" caption="26 Year Old Quake Lighting on Hue" >}}

Converting the code started by pulling the original lighting patterns from the {{< blanklink src="https://github.com/id-Software/Quake/blob/bf4ac424ce754894ac8f1dae6a3981954bc9852d/qw-qc/world.qc#L328-L372" caption="Quake Source Code" >}} and converting it into C# for my little WinForms app.

{{< highlight cs >}}

private readonly Dictionary<string, string> _lightDict = new Dictionary<string, string>
{
    { "normal", "m" },
    { "FLICKER (first variety)", "mmnmmommommnonmmonqnmmo" },
    { "SLOW STRONG PULSE", "abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba" },
    { "CANDLE (first variety)", "mmmmmaaaaammmmmaaaaaabcdefgabcdefg" },
    { "FAST STROBE", "mamamamamama" },
    { "GENTLE PULSE 1", "jklmnopqrstuvwxyzyxwvutsrqponmlkj" },
    { "FLICKER (second variety)", "nmonqnmomnmomomno" },
    { "CANDLE (second variety)", "mmmaaaabcdefgmmmmaaaammmaamm" },
    { "CANDLE (third variety)", "mmmaaammmaaammmabcdefaaaammmmabcdefmmmaaaa" },
    { "SLOW STROBE (fourth variety)", "aaaaaaaazzzzzzzz" },
    { "FLUORESCENT FLICKER", "mmamammmmammamamaaamammma" },
    { "SLOW PULSE NOT FADE TO BLACK", "abcdefghijklmnopqrrqponmlkjihgfedcba" },
    { "testing", "a" }
};

{{< / highlight >}}

From there I simply added a ComboBox with the options, a Setup button (to make a connection with my Hue Bridge) and a Start/Stop button to control the flickering.

{{< imagelink src="/img/26-year-old-quake-lighting-on-hue/app.jpg" >}}

The characters represent the flickering pattern, e.g. 'mmmaaaabcdefgmmmmaaaammmaamm' is 'Candle (second variety)' which ultimately gets converted into a number between 0 and 255 which is sent to my study Hue light as a brightness value allowing it to work with any colour.

It turns out that it's hard to make a decent quality video when you want to show something on the screen and room lighting!
