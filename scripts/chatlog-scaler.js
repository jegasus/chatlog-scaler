import { libWrapper } from './shim.js';

const MODULE_ID = 'chatlog-scaler';
const MODULE_NAME = "Chat Log Scaler";

function getSetting (settingName) {
  return game.settings.get(MODULE_ID, settingName)
}

//CONFIG.debug.hooks = true

console.log("By using this module you are agreeing to sell your soul to The Dark Lord Asmodeus.")

// Need to edit this function:
// KeyboardManager._onWheel, line 2834 from foundry.js

function chatlog_scaler(event){
  // Check if control is pressed.
  // If not, just exit the function.
  if (event.ctrlKey == false) { return; };

  // Get the chat log DOM elements to check against mouse hover
  let chat_panel = document.getElementById('chat');
  let chat_form = document.getElementById('chat-form');
  
  // Check if the area hovered with the mouse 
  // is the chat log or the chat box
  let foundit = false;
  if ((chat_panel.contains(event.target)) | (chat_form.contains(event.target)) ){
    foundit = true;
  }
 
  // If neither chat log or chat box are hovered,
  // just exit the program.
  if (foundit == false) { return; };
  
  // If the code reaches this point, we know that the hovered window is a 
  // either the chat log or the chat box.
  // Therefore, we can increase/decrease the font size!
  let chat_box = document.getElementById('chat-message');
  let chat_msgs_log = document.getElementsByClassName('chat-message message flexcol');
  let chat_cards_log = document.getElementsByClassName("dnd5e chat-card item-card")
  //let card_buttons = document.getElementsByClassName('card-buttons')

  // Find the direction of the mousewheel scroll
  let which_dir = '';
  if ((event.wheelDelta > 0) | (event.deltaY < 0)){
    which_dir = 'bigger';
  }
  else if ((event.wheelDelta < 0) | (event.deltaY > 0)) {
    which_dir = 'smaller';
  }

  // Change the style of the chat DOM elements
  let current_size_str = chat_box.style.fontSize;
  let current_size     = current_size_str == '' ? 14 : Number(current_size_str.slice(0,current_size_str.length-2));
  if (which_dir == 'bigger') {
    chat_box.style.fontSize = `${String(current_size + 1)}px`;
    let i;
    for (i = 0; i < chat_msgs_log.length; i++){
      chat_msgs_log[i].style.fontSize = `${String(current_size + 1)}px`;
    }
    for (i = 0; i < chat_cards_log.length; i++){
      chat_cards_log[i].style.fontSize = `${String(current_size + 1)}px`;
    }
    //for (i = 0; i < card_buttons.length; i++){
    //  card_buttons[i].style.fontSize = `${String(current_size + 1)}px`;
    //}
  }
  else {
    chat_box.style.fontSize = `${String(current_size - 1)}px`;
    let i;
    for (i = 0; i < chat_msgs_log.length; i++){
      chat_msgs_log[i].style.fontSize = `${String(current_size - 1)}px`;
    }
    for (i = 0; i < chat_cards_log.length; i++){
      chat_cards_log[i].style.fontSize = `${String(current_size + 1)}px`;
    }
    //for (i = 0; i < card_buttons.length; i++){
    //  card_buttons[i].style.fontSize = `${String(current_size - 1)}px`;
    //}
  }
  return;
}

Hooks.once('setup', function () {
    libWrapper.register( 
      MODULE_ID, 
      'KeyboardManager.prototype._onWheel', 
        function(existing_onWheel, event) {
          //event.preventDefault();
          //console.log("I'M IN, BABY! BOO-MUTHA-FUCKIN'-YAAA!!!")
          chatlog_scaler.bind(this)(event);
          return existing_onWheel.bind(this)(event);
      },
      'WRAPPER',
    )
  }
)

/*
Hooks.on('renderChatMessage', (app, html, data) => {
  let chat_box = document.getElementById('chat-message');
  let current_size_str = chat_box.style.fontSize;
  let current_size     = current_size_str == '' ? 14 : Number(current_size_str.slice(0,current_size_str.length-2));
})
*/

