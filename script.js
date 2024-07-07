import consolePanel from "./src/console.js";
import displayScreen from "./src/display.js";
import { renderStory, inactiveOptions } from "./src/story.js";
import reView from "./src/responsive.js";
import { sidePanel, sidePanelIcon, sidePanelBG, tilesInteraction } from './src/sidepanel.js';


// Story node shown
let storyNumber = 10;


export const displayContainer = document.querySelector('.display-buttons');
export const consoleContainer = document.querySelector('.console-buttons');

export const videoContainer = document.getElementById('youtube');
export const storyLegend = document.querySelector('.legend');
export const titleContainer = document.querySelector('.header');
export const durationContainer = document.querySelector('.duration');
export const textContainer = document.querySelector('.text');
export const optionsContainer = document.querySelector('.options');

export const sidePanelContainer = document.querySelector('.side-panel-container');

export let storyTitle;
export let storyDuration;
export let storyText;
export let storyOptions;

export let formatButton;
export let voteButton;
export let formatPanel;
export let videoFrame;
export let displayImage;
export let displayBG;

export let consoleButtons;
export let consoleImage;


document.body.addEventListener('load', renderGGH());
window.addEventListener('resize', () => reView());


// Side panel interaction

sidePanelIcon.addEventListener('load', tilesInteraction());
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


// Generate page

async function renderGGH() {
  consolePanel.renderConsoleButtons();
  displayScreen.renderDisplayButtons();
  renderStory(storyNumber);
  sidePanel.renderPanel();
  addListeners();
  reView()
}

function addListeners() {
  storyTitle = document.querySelector('.header');
  storyDuration = document.querySelector('.duration');
  storyText = document.querySelector('.text');
  storyOptions = document.querySelector('.options');

  formatButton = document.querySelector('.display-buttons').firstChild;
  voteButton = document.querySelector('.display-buttons').lastChild;
  formatPanel = document.getElementById('format');
  videoFrame = document.getElementById('youtube');
  displayImage = document.getElementById('display');
  displayBG = document.getElementById('display-bg');

  consoleButtons = document.querySelectorAll('.console-btn');
  consoleImage = document.getElementById('console');

  addDisplayListeners();
  addConsoleListeners();
}


// Display buttons listeners

function addDisplayListeners() {

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

}


// Console buttons listeners

function addConsoleListeners() {

  consoleButtons.forEach( (button) => {
    button.addEventListener('mouseenter', () => {
      button.src = `assets/${button.dataset.name}-hover.png`;
    })
    button.addEventListener('mouseout', () => {
      button.src = `assets/${button.dataset.name}.png`;
    })
    button.addEventListener('mousedown', () => {
      button.src = `assets/${button.dataset.name}-active.png`;
    })
    button.addEventListener('mouseup', () => {
      button.src = `assets/${button.dataset.name}-hover.png`;
    })
    button.addEventListener('touchstart', () => {
      button.src = `assets/${button.dataset.name}-hover.png`;
    })
    button.addEventListener('touchend', () => {
      button.src = `assets/${button.dataset.name}.png`;
    })
    button.addEventListener('click', () => {
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
        case 'omnihub': 
          //window.open();
          break;
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
  })

  // Inactive Omnihub button
  consoleButtons[2].src = 'assets/omnihub-inactive.png';
  consoleButtons[2].style.pointerEvents = 'none'

}