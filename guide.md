# Home automation guide for my love <3

## Manual control
* Button downstairs next to the door
    * Single click: turn off everything in the house because you are leaving
    * Double click: turn on cozy lights in the living room and your favourite playlist will start playing
* Button living room/bedroom
    * Single: click, increase the brightness between [10%, 50%, 100%]
    * Double click: change between bright lights and cozy lights
    * Shake: turn off the whole room (in the bedroom it will active sleep mode)
* Dimmer switches on the wall living room/bedroom
    * Top button: increase the brightness between [10%, 50%, 100%]
    * Middle two buttons: turn on and off (or hold to dim)
    * Bottom button: change between bright lights and cozy lights
    * (Extra) If the lights are already on, clicking on the "turn on" button again, will turn on white lights at 100%
* Cube in living room
    * Throw up: start your favourite playlist on the speakers
    * Shake: shuffle song
    * Put label up and move it a bit on the table to put it in either [Volume, Brightness, Hue] (the TV will also display in which mode it is). Rotating the cube will change the volume, brightness, or hue.
* In Home Assistant app
    * *Going to sleep button*: turns everything off in the house and sets “sleep mode” (all the lights will automatically turn red when triggered)

## Automatic
* Lights in hall, toilet, bathroom, and kitchen automatically turn on
    * Its colours change depending on the time of the day
    * If in sleep mode (after clicking the button in the app) these lights will be 10% brightness and red
* An hour after we leave the house, everything turns off
* The TV and speakers
    * If Spotify is not playing on the speakers, the speakers will automatically switch to the TV
    * Speakers will turn on when turning on the TV
    * Home Assistant will make sure that the volume of the speakers is the same as on the TV
* Sleep mode automatically turns off if the alarm goes or if it's 06:00.

Questions or suggestions? Ask Bas ❤️
