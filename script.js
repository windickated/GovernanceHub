import addConsoleButtons from "./src/console.js";
import addDisplayButtons from "./src/display.js";
import { displayButtons } from "./src/display.js";
import { mobileView, computerView } from "./src/responsive.js";
import addStory from "./src/story.js";


document.body.addEventListener('load', addConsoleButtons());
document.body.addEventListener('load', addDisplayButtons());
document.body.addEventListener('load', addStory());


export const storyText = document.querySelector('.text');
const optionsList = document.querySelectorAll('.option');
export const optionsCounter = optionsList.length;

export const formatButton = document.querySelector('.display-buttons').firstChild;
export const voteButton = document.querySelector('.display-buttons').lastChild;
export const formatPanel = document.getElementById('format');
const videoFrame = document.getElementById('youtube');

export const consoleButtons = document.querySelectorAll('.console-btn');


// Story text + options

optionsList.forEach((option) => {
  option.addEventListener('mouseenter', () => {
    option.style.color = '#33E2E6';
    option.style.textShadow = '0 0 3px #33E2E6';
  })
  option.addEventListener('mouseout', () => {
    option.style.color = '#dedede';
    option.style.textShadow = '';
  })
})


// Display

formatButton.addEventListener('mouseenter', () => {
  if(formatButton.src.includes(displayButtons[0].video)) {
    formatButton.src = displayButtons[0].textHover;
  } else {
    formatButton.src = displayButtons[0].videoHover;
  }
})

formatButton.addEventListener('mouseout', () => {
  if(formatButton.src.includes(displayButtons[0].textHover)) {
    formatButton.src = displayButtons[0].video;
  } else if(formatButton.src.includes(displayButtons[0].videoHover)){
    formatButton.src = displayButtons[0].text;
  }
})

formatButton.addEventListener('click', () => {
  if(formatButton.src.includes(displayButtons[0].textHover) || formatButton.src.includes(displayButtons[0].video)) {
    formatButton.src = displayButtons[0].text;
    storyText.style.visibility = 'visible';
    videoFrame.style.visibility = 'hidden';
  } else {
    formatButton.src = displayButtons[0].video;
    storyText.style.visibility = 'hidden';
    videoFrame.style.visibility = 'visible';
  }
})

voteButton.addEventListener('mouseenter', () => {
  if(voteButton.src.includes(displayButtons[1].image)) {
    voteButton.src = displayButtons[1].hover;
  }
})

voteButton.addEventListener('mouseout', () => {
  if(voteButton.src.includes(displayButtons[1].hover)) {
    voteButton.src = displayButtons[1].image;
  }
})

voteButton.addEventListener('click', () => {
  if(voteButton.src.includes(displayButtons[1].hover)) {
    voteButton.src = displayButtons[1].click;
  }
})


// Console buttons

document.querySelectorAll('.console-btn').forEach( (button) => {
  button.addEventListener('mouseenter', () => {
    button.src = `assets/${button.dataset.name}-hover.png`;
  });
  button.addEventListener('mouseout', () => {
    button.src = `assets/${button.dataset.name}.png`;
  });
  button.addEventListener('mousedown', () => {
    button.src = `assets/${button.dataset.name}-active.png`;
  });
  button.addEventListener('mouseup', () => {
    button.src = `assets/${button.dataset.name}.png`;
  });
})


// Responsive design

window.addEventListener('load', reView())
window.addEventListener('resize', () => reView())

function reView() {
  if(window.outerWidth <= 600) {
      mobileView();
      videoFrame.style.visibility = 'visible';
    }
    else {
      computerView();
      if(formatButton.src.includes(displayButtons[0].video)) {
        storyText.style.visibility = 'hidden';
      } else if(formatButton.src.includes(displayButtons[0].text)) {
        videoFrame.style.visibility = 'hidden';
      }
    }
}