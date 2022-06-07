---
date: "2022-06-20"
title: Trenchbroom Half-Life Setup
---

I've had an itch lately to make a map for Quake or Half-Life so after a bit of research discovered Trenchbroom which does both. It seems to be extremely highly regarded amongst Quake mappers and has 'experimental' support for Half-Life. After an hour of research I couldn't find an easy article to set it up for Half-Life so went down the rabbit hole enough to figure it out.

After more research people seemed convinced Trenchbroom was fine for Half-Life mapping but Trenchbroom does say Half-Life support is experimental so I was a bit suspicious. In case you're wondering if you should use Trenchbroom for Half-Life, *my* current answer is no. The reasons I will list at the bottom.

The first port of call was checking out how you'd setup Hammer (the original Half-Life map editor) so [this](https://twhl.info/) excellent site came up quickly for general GoldSrc (name of the Half-Life engine) modding and mapping goodness. All beginners guides say you should use [Vluzacn's ZHLT](https://twhl.info/wiki/embed/Vluzacn%27s_ZHLT_v34) to build your maps. Looking up [ZHLT](http://zhlt.info/) started to ring some bells from the last time I tried to do Half-Life mapping (when I was a young person). You pass your designed map to a serious of tools to "compile" it into an actual game map. These are...

* HLCSG - makes solid geometry by taking your map and making polygons from the brushes
* HLBSP - makes the [BSP](https://developer.valvesoftware.com/wiki/BSP) (binary space partition) node tree
* HLVIS - Generates visibility flags for the polygons (what the player can see)
* HLRAD - Generates lighting

Looking into Trenchbroom you'll find similarish tools pre-filled in for Quake, so a bit of fiddling around and I made it work using this.

{{< imagelink src="/img/trenchbroom-halflife/compile.jpg" >}}

Here we export the map (in case we haven't saved it), run the tools above with some parameters that point to the exported map and copy the files into Half-Life's valve/maps folder (would do different folders for mods).

Next, we setup the Engine simply telling it how to find hl.exe

{{< imagelink src="/img/trenchbroom-halflife/engine.jpg" >}}

The game also needs to know what map we want to run (although you can run it via the console) so we use +map XXX and -dev (just enables dev mode).

{{< imagelink src="/img/trenchbroom-halflife/launch-engine.jpg" >}}

The [texture WADS](https://developer.valvesoftware.com/wiki/WAD) can be added at the bottom right in hte 'Texture Collections' area. You'll find the WAD files in the Half-Life directory (you'll want at least halflife.wad). A prompt will ask how you want to link the WAD, I went with Absolute but do whatever works for your setup.

{{< imagelink src="/img/trenchbroom-halflife/wad-textures.jpg" >}}

### The Problems

Models do not appear in the editor (e.g. you'd expect a scientist model instead of a green box ideally). Not a big deal.

{{< imagelink src="/img/trenchbroom-halflife/models-not-in-editor.jpg" >}}

The properties for entities are not correct and/or auto-populated. I had to manually had Brightness, Appearance and Quadratic. The pre-populated _light value was wrong, so I changed it to 255. This is a pretty big issue in the long term, you'll need to dig out every property in the docs and add them manually when dealing with entities.

{{< imagelink src="/img/trenchbroom-halflife/properties-not-supplied.jpg" >}}

The textures didn't match in-editor and in-game. As you can see below they look different.

{{< imagelink src="/img/trenchbroom-halflife/textures-not-matching-ingame-editor.jpg" >}}

{{< imagelink src="/img/trenchbroom-halflife/textures-not-matching-ingame-game.jpg" >}}

Ultimately, I *really* like Trenchbroom and will spend some time learning it for Quake but am leaning towards just using Hammer for a Half-Life map.
