import displayScreen from "./src/display.js";
import { consolePanel } from "./src/console.js";
import { renderStory, optionsCounter } from "./src/story.js";
import { sidePanel, renderPanel, sidePanelBar, sidePanelIcon } from './src/sidepanel.js';
import { episodesPanel, renderEpisodesPanel, storyNumber } from "./src/episodes.js";


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
export const votingEndedContainer = document.querySelector('.voting-ended');

export const sidePanelIconContainer
= document.querySelector('.side-icon-container');
export const sidePanelBG = document.querySelector('.side-panel-bg');
export const tilesLegendContainer = document.querySelector('.tiles-legend');
export const tilesContainer = document.querySelector('.tiles-container');

export const otherEpisodesIconContainer = document.querySelector('.story-nodes-icon');
export const otherEpisodesContainer = document.querySelector('.story-nodes-container');
export const otherEpisodes = document.querySelector('.story-nodes');
export const otherEpisodesTitle = document.querySelector('.story-nodes-legend');

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

renderEpisodesPanel();

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

  sidePanelBG.addEventListener('click', () => {
    if(sidePanel.panelState) {
      sidePanel.close();
    } else if(episodesPanel.panelState) {
      episodesPanel.close();
    }
  })
}


// Responsive design

function resizePage() {
  displayScreen.renderDisplayScreen();
  resizeOptionsContainer();
  consolePanel.renderConsolePanel();
  if(window.outerWidth <= 600) {
    document.body.style.paddingTop = '15%';
    storyText.style.visibility = 'visible';
    sidePanelBar.style.top = '-80%';
    sidePanelIcon.src = 'assets/sideIconMobileOpen.png';
  } else {
    document.body.style.paddingTop = '0';
    sidePanelBar.style.top = '';
    if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
      storyText.style.visibility = 'hidden';
    } else if(formatButton.src.includes(displayScreen.displayButtons[0].text)) {
      videoFrame.style.visibility = 'hidden';
    }
    sidePanelIcon.src = 'assets/sideIconPCOpen.png';
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