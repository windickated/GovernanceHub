import { consolePanel, storyNumber } from "./src/console.js";
import displayScreen from "./src/display.js";
import { renderStory, optionsCounter } from "./src/story.js";
import { renderPanel, sidePanelBar } from './src/sidepanel.js';


// Potentials shown (numbers)
export const nftNumbers = [1, 3, 5, 11, 22, 38, 49, 79, 121, 200, 298, 305, 374, 489, 592, 645, 788, 815, 890, 950, 970];


export const displayContainer = document.querySelector('.display-buttons');
export const displayImageContainer = document.querySelector('.display-image');
export const consoleContainer = document.querySelector('.console-buttons');
export const consoleImageContainer = document.querySelector('.console-image');

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


// Generating page

function renderGGH() {
  consolePanel.renderConsolePanel();
  consolePanel.renderConsoleButtons();
  displayScreen.renderDisplayScreen();
  displayScreen.renderDisplayButtons();
  renderStory(storyNumber);
  renderPanel();
  addListeners();
}


// Adding listeners

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

  displayScreen.addDisplayListeners();
  consolePanel.addConsoleListeners();
}


// Responsive design

function resizePage() {
  renderPanel();
  displayScreen.renderDisplayScreen();
  resizeOptionsContainer();
  consolePanel.renderConsolePanel();
  if(window.outerWidth <= 600) {
    document.body.style.paddingTop = '15%';
    storyText.style.visibility = 'visible';
    sidePanelBar.style.top = '-80%';
  } else {
    document.body.style.paddingTop = '0';
    sidePanelBar.style.top = '';
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