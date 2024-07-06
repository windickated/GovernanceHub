import consolePanel from "./src/console.js";
import displayScreen from "./src/display.js";
import { renderStory, inactiveOptions } from "./src/story.js";
import reView from "./src/responsive.js";
import { sidePanel, sidePanelIcon, sidePanelBG, tilesInteraction } from './src/sidepanel.js';


// Story node shown
let storyNumber = 10;


// Generating HTML

export const displayContainer = document.querySelector('.display-buttons');
export const consoleContainer = document.querySelector('.console-buttons');

export const videoContainer = document.getElementById('youtube');
export const storyLegend = document.querySelector('.legend');
export const titleContainer = document.querySelector('.header');
export const durationContainer = document.querySelector('.duration');
export const textContainer = document.querySelector('.text');
export const optionsContainer = document.querySelector('.options');

export const sidePanelContainer = document.querySelector('.side-panel-container');

document.body.addEventListener('load', consolePanel.renderConsoleButtons());
document.body.addEventListener('load', displayScreen.renderDisplayButtons());
document.body.addEventListener('load', renderStory(storyNumber));
document.body.addEventListener('load', sidePanel.renderPanel());


// Responsive design

export const storyTitle = document.querySelector('.header');
export const storyDuration = document.querySelector('.duration');
export const storyText = document.querySelector('.text');
export const storyOptions = document.querySelector('.options');

export const formatButton = document.querySelector('.display-buttons').firstChild;
export const voteButton = document.querySelector('.display-buttons').lastChild;
export const formatPanel = document.getElementById('format');
export const videoFrame = document.getElementById('youtube');
export const displayImage = document.getElementById('display');
export const displayBG = document.getElementById('display-bg');

export const consoleButtons = document.querySelectorAll('.console-btn');
export const consoleImage = document.getElementById('console');

window.addEventListener('load', reView())
window.addEventListener('resize', () => reView())


// Display buttons

formatButton.addEventListener('mouseenter', () => {
  if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
    formatButton.src = displayScreen.displayButtons[0].textHover;
  } else {
    formatButton.src = displayScreen.displayButtons[0].videoHover;
  }
})

formatButton.addEventListener('mouseout', () => {
  if(formatButton.src.includes(displayScreen.displayButtons[0].textHover)) {
    formatButton.src = displayScreen.displayButtons[0].video;
  } else if(formatButton.src.includes(displayScreen.displayButtons[0].videoHover)){
    formatButton.src = displayScreen.displayButtons[0].text;
  }
})

formatButton.addEventListener('click', () => {
  if(formatButton.src.includes(displayScreen.displayButtons[0].textHover) || formatButton.src.includes(displayScreen.displayButtons[0].video)) {
    formatButton.src = displayScreen.displayButtons[0].text;
    storyText.style.visibility = 'visible';
    videoFrame.style.visibility = 'hidden';
  } else {
    formatButton.src = displayScreen.displayButtons[0].video;
    storyText.style.visibility = 'hidden';
    videoFrame.style.visibility = 'visible';
  }
})


voteButton.addEventListener('mouseenter', () => {
  if(voteButton.src.includes(displayScreen.displayButtons[1].image)) {
      voteButton.src = displayScreen.displayButtons[1].hover;
  }
})

voteButton.addEventListener('mouseout', () => {
  if(voteButton.src.includes(displayScreen.displayButtons[1].hover)) {
    voteButton.src = displayScreen.displayButtons[1].image;
  }
})

voteButton.addEventListener('click', () => {
  if(voteButton.src.includes(displayScreen.displayButtons[1].hover)) {
    voteButton.src = displayScreen.displayButtons[1].click;
    inactiveOptions();
  }
})


// Console buttons

consoleButtons.forEach( (button) => {
  button.addEventListener('mouseenter', () => {
    button.src = `assets/${button.dataset.name}-hover.png`;
  })
  button.addEventListener('mouseout', () => {
    button.src = `assets/${button.dataset.name}.png`;
  })
  button.addEventListener('mousedown', () => {
    button.src = `assets/${button.dataset.name}-active.png`;
    switch (button.dataset.name) {
      case 'conexus': 
        window.open('https://conexus.degenerousdao.com/', '_blank');
        break;
      case 'back': 
      if(storyNumber != 1) {
        storyNumber -= 1;
        renderStory(storyNumber);
      }
        break;
      case 'omnihub': break;
      case 'forward':
        if(storyNumber != 10) {
          storyNumber += 1;
          renderStory(storyNumber);
        }
        break;
      case 'sagaverse':
        window.open('https://degenerousdao.com/', '_blank');
        break;
    }
  })
  button.addEventListener('mouseup', () => {
    button.src = `assets/${button.dataset.name}-hover.png`;
  })
  button.addEventListener('touchstart', () => {
    button.src = `assets/${button.dataset.name}-active.png`;
    switch (button.dataset.name) {
      case 'conexus': break;
      case 'back': break;
      case 'omnihub': break;
      case 'forward': break;
      case 'sagaverse': break;
    }
  })
  button.addEventListener('touchend', () => {
    button.src = `assets/${button.dataset.name}-hover.png`;
  })
})

// Inactive Omnihub button until it is ready
consoleButtons[2].src = 'assets/omnihub-inactive.png';
consoleButtons[2].style.pointerEvents = 'none'


// Side panel interaction

sidePanelIcon.addEventListener('load', tilesInteraction())

sidePanelIcon.addEventListener('click', () => {
  if(sidePanel.panelState) {
    sidePanel.close();
  } else {
    sidePanel.open();
  }
})

sidePanelBG.addEventListener('click', () => {
  sidePanel.close();
})