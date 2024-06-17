import displayScreen from "./display.js";
import { storyText, storyOptions, optionsCounter, formatButton, voteButton, formatPanel, videoFrame, displayImage, displayBG, consoleButtons, consoleImage } from "../script.js";


export function mobileView() {
  storyText.style.visibility = 'visible'

  displayImage.src = 'assets/displayMobile.png';
  displayBG.src = 'assets/displayMobileBG.png';
  formatButton.style.display = 'none';
  formatPanel.style.display = 'none';
  voteButton.style.display = 'none';
  consoleImage.style.width = '125%';
  consoleImage.style.translate = '-10% 0';
  consoleButtons.forEach((button) => {
    if(button.className.match('big')) {
      button.style.width = '25%';
    } else {
      button.style.width = '12.5%';
    }
  });

  textOutScreen();
  optionsOutScreen();
}


export function computerView() {
  displayImage.src = 'assets/display.png';
  displayBG.src = 'assets/displayBG.png';
  formatButton.style.display = 'block';
  voteButton.style.display = 'block';
  formatPanel.style.display = 'block';
  consoleImage.style.width = '100%';
  consoleImage.style.translate = 'none';
  consoleButtons.forEach((button) => {
    if(button.className.match('big')) {
      button.style.width = '20%';
    } else {
      button.style.width = '10%';
    }
  });

  textOnScreen();
  optionsOnScreen();
}


export function reView() {
  if(window.outerWidth <= 600) {
      mobileView();
      videoFrame.style.visibility = 'visible';
    }
    else {
      computerView();
      if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
        storyText.style.visibility = 'hidden';
      } else if(formatButton.src.includes(displayScreen.displayButtons[0].text)) {
        videoFrame.style.visibility = 'hidden';
      }
    }
}


function textOnScreen() {
  storyText.style.position = 'absolute';
  storyText.style.top = '8vw';
  storyText.style.width = '85%';
  storyText.style.left = '7%';
  storyText.style.overflowY = 'scroll';
  storyText.style.height = '50vw';
  storyText.style.fontSize = '2vw';
  storyText.style.lineHeight = '3vw';
}

function textOutScreen() {
  storyText.style.position = 'static';
  storyText.style.top = '';
  storyText.style.width = '';
  storyText.style.left = '';
  storyText.style.overflowY = '';
  storyText.style.height = 'auto';
  storyText.style.fontSize = 'inherit';
  storyText.style.lineHeight = 'inherit';
}

function optionsOnScreen() {
  storyOptions.style.position = 'absolute';
  storyOptions.style.top = '58vw';
  storyOptions.style.width = '62vw';
  storyOptions.style.height = '24vw';
  storyOptions.style.overflowY = 'hidden';
  if(optionsCounter >= 4) {
    storyOptions.style.fontSize = `${9.5/optionsCounter}vw`;
    storyOptions.style.paddingTop = `${9.5/optionsCounter}vw`;
  } else {
    storyOptions.style.fontSize = '2.5vw';
    if(optionsCounter == 3) {
      storyOptions.style.paddingTop = '4vw';
    } else {
      storyOptions.style.paddingTop = '7vw';
    }
  }
}

function optionsOutScreen() {
  storyOptions.style.position = 'static';
  storyOptions.style.top = '';
  storyOptions.style.width = 'auto';
  storyOptions.style.height = 'auto';
  storyOptions.style.overflowY = 'auto';
  storyOptions.style.fontSize = '1.1em';
}