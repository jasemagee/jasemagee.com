---
author: jasemagee
date: "2018-07-19T00:00:00Z"
title: Easy Game Made in Unity Tutorial
---

Outside of working on games for [Granite Games](https://granitegames.gg), I spend a great deal of time experimenting and learning in Unity. Normally, I'll figure out something I was interested in learning and leave the project forgotten on my NAS in case I ever need it. By the time I need something from these projects I've long since forgotten how they work so I'm planning to document them going forward. Hopefully, they'll end up being useful to other people too. This is going to be my first tutorial, based off of a live session I did back in 2016 at the [Digital Greenhouse Guernsey](https://www.digitalgreenhouse.gg/) intended to show to make a simple game in 10 minutes.

The game idea came from a mini-game in Little Big Planet 2 named 'Wall or Nothing'. Here's a video.

{% include youtuber.html link="https://www.youtube.com/embed/VkKaXFbZpc0" %}

This is what the ten minute version I created looks like.

{% include youtuber.html link="https://www.youtube.com/embed/GXZCjpJc-nY" %}

Now, just to note, this tutorial is intended for people who know some programming.

1\. First, let's create a default 3D project. Just give it a name.

{% include inline-image.html link="easy-game-in-unity-tutorial/create-project.jpg" %}

Before going any further, we need to understand what Scenes, Game Objects and Components are in Unity.

* Components tend to fall into two categories: they either do something or they supply data for something. A good example is a "Mesh Component" and a "Mesh Renderer Component", the "Mesh Component" has all the data about a 3D model and the "Mesh Renderer Component" knows how to take a "Mesh Component" and render it. Other examples are instances of scripts, audio sources, sprites, sprite renderers, terrain, lights, cameras, etc.
* Game Objects are a container for Components. In Unity a Game Object always has a "Transform Component" which means it has a position, rotation and scale in the scene. Game Objects can also contain other Game Objects forming tree structures.
* Scenes are conceptually the same as a film, tv or theater scene. You place a bunch of Game Objects in a scene to make a level, world, menu, or whatever else you want. In Unity you'll pretty much always be working within a scene.

Eventually, the main Unity view will pop up. It'll look something like this.

{% include inline-image.html link="easy-game-in-unity-tutorial/main-unity.jpg" %}

There's a couple of different views here, you can find out what they're called by looking at the tab title in the top left above the view. Here's what they're for...

* Project: This is representation of the Assets folder created in the location folder you created your game in above. Here you store everything about your game: scripts, textures, materials, models, sprites, scenes, shaders, etc. You'll notice there is already a scenes folder created by default containing a SampleScene which is already opened (look at the Unity title bar to see the opened scene name). Generally people organise this by creating a folder for each type of asset. When you select things in the project view, their properties show in the inspector view. 
* Scene: Shows the currently open scene. In this view you can move the camera around, move game objects around, create new game objects, etc. This is the visual representation of the current scene. To move the camera around, use the middle mouse and to rotate the view, use the right mouse button. When you select objects in the scene, their properties show in the inspector view. 
* Hierarchy: Shows a list of all game objects in the scene. You can select game objects in the current scene using the scene or hierarchy views.
* Inspector: Properties for the selected item in the scene, hierarchy, or project view.
* Game: At the top center of Unity you'll notice play, pause and stop buttons, these are used to actually play test the game. When you press play the game view will activate and you can test the game here.
* Console: Gives you information, alerts and errors. Use the 3 little icons in the top right to toggle types of messages on/off. This can be things like compile errors with scripts or you can manually write output to this window from code using {{< highlight csharp >}}Debug.Log("This will appear in the console");{{< / highlight >}}

2\. We need a solid base for the play area, we're going to use a plane for this. Right-click in the hierarchy view and select "3D Object->Plane", a plane will appear in the scene and game views. 

{% include inline-image.html link="easy-game-in-unity-tutorial/new-plane.jpg" %}

3\. For unknown reasons, Unity tends to create new game objects at slightly random positions. Whenever you make a new game object you're going to want to reset it back to 0,0,0 position by clicking the little cog next to the "Transform Component" in the inspector view and clicking Reset. Note this area also controls position, rotation and scale. Remember that for later!

{% include inline-image.html link="easy-game-in-unity-tutorial/reset-position.jpg" %}

4\. New 3D objects in Unity all have the same material (called "Default-Material" - look in the inspector view with the plane selected to find it) which has a grey colour. We can change this by creating our own material with a different colour. Right-click in the project area click on "Create->Material". Name the new material "RedMat", if you lose focus of the renaming box, you can use F2 to re-enter rename mode. Make sure the material is selected and in the inspector view, change the Albedo colour by clicking the white rectangle. Pick a red colour using the colour tool that pops up.

{% include inline-image.html link="easy-game-in-unity-tutorial/create-redmat.jpg" %}

5\. In the project view, drag the RedMat onto the plane in the scene view to set it as the material. You can also select the plane and in the inspector view, drop down the Materials (under Mesh Renderer) to pick a different material using the circular icon to the right of the 0th element.

6\. In a similar fashion to the plane, create a sphere with its own material. I've given mine a pink material.

{% include inline-image.html link="easy-game-in-unity-tutorial/new-sphere.jpg" %}

7\. Raise the sphere to be positioned slightly above the plane. I set mine to be 0, 0.5, 0. You can move it using the arrow or by manually inputting in the transform component position field. Use the left mouse button and the green arrow as shown below to move it manually. 

{% include inline-image.html link="easy-game-in-unity-tutorial/move-sphere.jpg" %}

If you can't see these arrows make sure you're in the right mode by selecting this button at the top left of Unity.

{% include inline-image.html link="easy-game-in-unity-tutorial/move-sphere-mode.jpg" %}

8\. Select the sphere and click "Add Component" in the inspector view. Start typing Rigidbody and two options will appear. We want the standard Rigidbody as we're not making a 2D game, so click it or press Enter on the keyboard. A Rigidbody tells Unity that this game object will be under the control of Unity's physics engine. You can read more about them [here](https://docs.unity3d.com/ScriptReference/Rigidbody.html).

9\. Do the same thing again but this time we want to add an AudioSource allowing us to play a boing noise when the ball jumps. You can either add your own boing noise to your project or download mine [here](/downloads/Boing.mp3). Drag it into your project view to add it. After it's in your project view, drag it into the Inspector AudioSource AudioClip field. Also, disable "Play on Awake", you only want it to play when we tell it to. You'll notice the AudioSource has tons of options, don't worry about them for now. You can read more about the Audio Source [here](https://docs.unity3d.com/ScriptReference/AudioSource.html).

10\. Let's do some code now. Right-click in the Project area and do "Create->C# Script". Call it Ball. To add the new script to the sphere you can either...

* Drag the Ball script onto the sphere game object in the hierarchy view
* Select the sphere and drag the Ball script into the inspector view of the sphere. I normally do it this way.
* Select the sphere and press the "Add Component" button in the inspector, type "Ball" and press Enter.
* You could also have created the new script by using "Add Component" and simply typing the new script name and "New script" will appear.

Your sphere should look something like this.

{% include inline-image.html link="easy-game-in-unity-tutorial/ball-setup.jpg" %}

11\. Double click the Ball script in the hierarchy or inspector views to open it. Another application will open allowing you to edit the script. Replace the code with the following.

{{< highlight csharp >}}

using UnityEngine;

public class Ball : MonoBehaviour {
    /* How much to move by */
    private const float moveAmount = 0.1f;
    /* How much to jump by */
    private readonly float jumpAmount = 8f;
    /* The Rigidbody we added to the Game Object in the Unity UI */
    private Rigidbody rigidbody;
    /* The AudioSource we added to the Game Object in the Unity UI */
    private AudioSource audioSource;

    /* Use this for initialization */
    private void Start() {
        /* Use this to get another Component from the Game Object. 
        In this case we want the Rigidbody and the AudioSource */
        rigidbody = GetComponent<Rigidbody>();
        audioSource = GetComponent<AudioSource>();
    }

    /* Update is called once per frame */
    private void Update() {
        /* This is a kind of hacky way to ensure we can't do anything unless
         we're on the ground. The ground is at Y 0 so if  we're > than .6f
         we're probably jumping */
        if (rigidbody.position.y > .6f)
            return;

        /* Jump */
        if (Input.GetKeyDown(KeyCode.UpArrow)) {
            /* Cancel out any other forces on the ball,
             otherwise it's really easy to jump off of the
             platform */
            rigidbody.velocity = Vector3.zero;
            /* Add some force for jumping */
            rigidbody.AddForce(new Vector3(0, jumpAmount, 0), ForceMode.VelocityChange);
            /* Play our Boing noise */
            audioSource.Play();          
            /* No further actions allowed, exit */
            return;
        }
        
        /* Vector3 describe a XYZ position.
        Zero is just a constant 0,0,0 */
        var movement = Vector3.zero;

        /* Left */
        if (Input.GetKey(KeyCode.LeftArrow)) {
            movement += new Vector3(moveAmount, 0, 0);
        }

        /* Right */
        if (Input.GetKey(KeyCode.RightArrow)) {
            movement -= new Vector3(moveAmount, 0, 0);
        }

        /* Add some force to the ball, 
        so we're using physics to move it */
        rigidbody.AddForce(movement, ForceMode.VelocityChange);
    }
}
{{< / highlight >}}

The code isn't too complicated and I've commented it as best I can to help. If the ball is roughly on the ground, see if the up key is pressed and if so, do a jump and exit, otherwise grab the LeftArrow and RightArrow inputs and move the ball. Notice the class inherits from MonoBehaviour that's standard for a Unity script. Start() and Update() are both called automatically. You can read more [here](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html).

Try it. The ball should jump, move left and move right now. There should be a sound when you jump and you shouldn't be able to control the ball until it lands on the ground. The game view is probably pointing in a strange direction, so let's point it at a sensible place. There's a game object called "Main Camera" in the scene, select it and change these transform properties to be:

* Position: 9, 5, 6
* Rotation: 26, -132, 0

12\. Moving on to the wall, this time create an empty game object ("Create Empty" in the right-click menu). Name the empty game object "Wall". Set its position to 0, 0, -4. Add a Rigidbody to the wall and check "Is Kinematic" and un-check "Use Gravity", we're telling Unity we'll control this object by making it kinematic. As the wall needs to have a block missing for the player to move through, we'll make the wall out of 6 blocks.

{% include inline-image.html link="easy-game-in-unity-tutorial/wall-sections.jpg" %}

Each block is going to be a game object inside the parent wall game object. This means we're going to right-click on the wall game object and add a "3D Object->Cube" 6 times, adding them to the wall game object means they're children. My cubes are scaled to 3.5, 2, 1. You should be able to figure out the positions yourself, but they're...

* 0, 1, 0
* 3.5, 1, 0
* -3.5, 1, 0
* 0, 3, 0
* 3.5, 3, 0
* -3.5, 3, 0

Now, as before, create a material and assign it to all of the cubes. You'll end up with something like this...

{% include inline-image.html link="easy-game-in-unity-tutorial/wall-setup.jpg" %}

13\. Create a Wall script and add it to the parent wall game object. We want the Wall script to create a hole in itself by deleting one of its children for the player to try and pass through and we want it to move towards the player after a short delay.

{{< highlight csharp >}}

using UnityEngine;

public class Wall : MonoBehaviour {
    private readonly float speed = 3f;
    private bool begunAttack;

    /* Use this for initialization */
    private void Start() {
        DeleteRandomChild();
        /* Invoke is a Unity method, it will
         call the "BeginAttack" method after 2 seconds */
        Invoke("BeginAttack", 2f);
    }

    /* Update is called once per frame */
    private void Update() {
        if (begunAttack) {
            /* We don't need any fancy physics for this
             so just move the Game Object along. Use
             Time.deltaTime so we keep the movement consistent
             as Update() will be called more often on a fast PC
             than a slow one */
            transform.Translate(0, 0, speed * Time.deltaTime);
        }
    }

    /* Once this is called after 2 seconds,
     begunAttack will be true and so Update()
     will start moving the wall */
    private void BeginAttack() {
        begunAttack = true;
    }

    /* Destroy a random child Game Object from
     this Game Object */
    private void DeleteRandomChild() {
        var randomChildIndex = Random.Range(0, transform.childCount);
        Destroy(transform.GetChild(randomChildIndex).gameObject);
    }
}

{{< / highlight >}}

Pressing play now, it should work as intended. A block of the wall will disappear and after 2 seconds it will move towards the ball, knocking the ball off if it's in the way. The next problem is that this only happens once, we want it to repeat this process until the player dies.

14\. To make the wall game object re-usable, we'll need to make it into a prefab. A prefab is similar to a class in programming, it's something you make instances of. To make an existing game object into a prefab, drag it from the hierarchy view into the Project view. Check it out in the project view now, it should look pretty similar to how it did in the hierarchy.

{% include inline-image.html link="easy-game-in-unity-tutorial/wall-prefab.jpg" %}

15\. Once you're sure the wall prefab is in the project view, delete the Wall game object from the scene.

16\. We'll need to make another empty game object now and attach a script named WallSpawner. This game object is going to be responsible for creating walls on a timer for the player to avoid. Set the position of the wallspawner to be 0, 0, -4 so the walls spawn at that position.

17\. Use this code for the script.

{{< highlight csharp >}}
public class WallSpawner : MonoBehaviour
{
    public GameObject wallPrefab;
    
    void Start () {
        InvokeRepeating("SpawnWall", 1f, 3f);
    }
    
    private void SpawnWall() {
        Instantiate(wallPrefab, transform.position, Quaternion.identity);
    }
}
{{< / highlight >}}

You'll notice WallPrefab is a public property and doesn't get set inside this code. We're going to set this inside Unity to be the wall prefab we just created. Go back to the inspector and you'll see a slot for a wall prefab.

{% include inline-image.html link="easy-game-in-unity-tutorial/wallspawner-before.jpg" %}

Drag and drop the wall prefab from the project view into this slot. It'll look like this.

{% include inline-image.html link="easy-game-in-unity-tutorial/wallspawner-after.jpg" %}

18\. Your game is done! Obviously it's not complete, it needs a menu, a win condition, lose conditions, scores, etc. but hopefully you've learnt enough to get you started.

Thanks to [Steve Streeting](https://www.stevestreeting.com/) for proof reading.