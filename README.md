![](https://img.shields.io/badge/Foundry-v0.7.9-informational)
![GitHub All Releases](https://img.shields.io/github/downloads/jegasus/chatlog-scaler/total?label=Downloads+total)  
![Latest Release Download Count](https://img.shields.io/github/downloads/jegasus/chatlog-scaler/latest/module.zip) 
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fchatlog-scaler&colorB=4aa94a)


# Chat Log Scaler
A [FoundryVTT](https://foundryvtt.com/) module that enables you to change the font sizes in the Chat Log panel using <kbd>ctrl</kbd>+`mouseWheelUp` and <kbd>ctrl</kbd>+`mouseWheelDown`.

# Instructions
- Step 1: activate this module in your world 
- Step 2: hover your mouse cursor over the Chat Log panel
- Step 3: hold down `ctrl` and use your mouse wheel to scroll either up or down to increase or decrease the font sizes, respectively

![Chat Log Scaler in action](img/module_in_action.gif)

# Changelog

## 0.0.2 - Released on 2021-01-08
Now using updated `shim.js` from [libWrapper v1.3.4.0](https://github.com/ruipin/fvtt-lib-wrapper/releases/tag/v1.3.4.0).

Fixed wrapper type from `MIXED` to `WRAPPER`.

## 0.0.1 - Released on 2021-01-03
Initial release. 

Got the basic funtionality to work.

# Acknowledgements

## LoFD's Module Template
This module relied heavily on [The League of Foundry Developer's FoundryVTT Module Template](https://github.com/League-of-Foundry-Developers/FoundryVTT-Module-Template). This is a great resource to get started in developing cool stuff for FoundryVTT!

## ruipin's libWrapper
This module uses [ruipin's libWrapper library](https://github.com/ruipin/fvtt-lib-wrapper/). Take a look at his stuff if you want to develop modules for FVTT that override its default behaviors.

