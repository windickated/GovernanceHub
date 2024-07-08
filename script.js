import consolePanel from "./src/console.js";
import displayScreen from "./src/display.js";
import { renderStory, inactiveOptions, optionsCounter } from "./src/story.js";
import { renderPanel, sidePanelBar, sidePanelIcon } from './src/sidepanel.js';


// Story node shown
let storyNumber = 10;

// Potentials shown (numbers)
export const nftNumbers = [1, 3, 5, 11, 22, 38, 49, 79, 121, 200, 298, 305, 374, 489, 592, 645, 788, 815, 890, 950, 970];


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
window.addEventListener('load', () => resizePage());
window.addEventListener('resize', () => resizePage());


// Generate page

function renderGGH() {
  consolePanel.renderConsoleButtons();
  displayScreen.renderDisplayButtons();
  renderStory(storyNumber);
  renderPanel();
  addListeners();
}

function resizePage() {
  resizeOptionsContainer();
  if(window.outerWidth <= 600) {
    document.body.style.paddingTop = '15%';
    storyText.style.visibility = 'visible';
    sidePanelBar.style.top = '-80%';
    displayImage.src = 'assets/displayMobile.avif';
    displayBG.src = 'assets/displayMobileBG.avif';
    consoleImage.src = 'assets/consoleMobile.avif';
    sidePanelIcon.src = 'assets/sideIconMobileOpen.png';
  } else {
    document.body.style.paddingTop = '0';
    sidePanelBar.style.top = '';
    displayImage.src = 'assets/display.avif';
    displayBG.src = 'assets/displayBG.avif';
    consoleImage.src = 'assets/console.avif';
    sidePanelIcon.src = 'assets/sideIconPCOpen.png';

    if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
      storyText.style.visibility = 'hidden';
    } else if(formatButton.src.includes(displayScreen.displayButtons[0].text)) {
      videoFrame.style.visibility = 'hidden';
    }
  }
}

export function resizeOptionsContainer() {
  if(window.outerWidth >= 600) {
    if(optionsCounter >= 4) {
      storyOptions.style.fontSize = `${10/optionsCounter}vw`;
      storyOptions.style.paddingTop = `${10/optionsCounter}vw`;
    } else {
      storyOptions.style.fontSize = '2.5vw';
      if(optionsCounter == 3) {
        storyOptions.style.paddingTop = '5vw';
      } else {
        storyOptions.style.paddingTop = '7vw';
      }
    }
  } else {
    storyOptions.style.fontSize = '1.1em';
    storyOptions.style.paddingTop = '2vw';
  }
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