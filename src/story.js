import { videoContainer, titleContainer, durationContainer, textContainer, optionsContainer, resizeOptionsContainer, votingEndedContainer } from '../script.js'
import { clickedTiles, undefinedOption, tilesInactive } from './sidepanel.js';
import { storyNumber } from './console.js';
import displayScreen from './display.js';


export const storyNode = [];
export let optionsList;
export let optionsCounter;
export let clickedOption;
export let clickedOptionNumber;

export const seasonTitle = 'The Dischordian Saga';

export async function renderStory(storyNumber) {
  // Getting story node JSON and render HTML
  const response = await fetch(`./data/episode${storyNumber}.json`);
  storyNode[storyNumber] = await response.json();
  
  videoContainer.src = `https://www.youtube.com/embed/${storyNode[storyNumber].videoLink}`;
  titleContainer.innerHTML = `${seasonTitle}: ${storyNode[storyNumber].storyTitle} - Episode ${storyNumber}`;
  durationContainer.innerHTML = getStoryDate();

  let html = '';
  storyNode[storyNumber].storyText.forEach((paragraph) => {
    html += `<p class="story-p">${paragraph}</p>`
  })
  textContainer.innerHTML = html;

  html = '';
  storyNode[storyNumber].storyOptions.forEach((option) => {
    html += `<li class="option" id="option${storyNumber}">${option}</li>`;
  })
  optionsContainer.innerHTML = html;

  optionsList = document.querySelectorAll('.option');
  optionsCounter = optionsList.length;

  // Setting up event listeners for each option
  optionsList.forEach((option, i) => {
    option.addEventListener('mouseover', () => {
      if(window.outerWidth >= 600) {
        option.style.color = '#33E2E6';
        option.style.textShadow = '0 0 3px #33E2E6';
        option.style.listStyleType = 'disc';
      }
    })
    option.addEventListener('mouseout', () => {
      if(option != clickedOption) {
        option.style.color = '#dedede';
        option.style.textShadow = '';
        option.style.listStyleType = 'circle';
      }
      if(undefinedOption) {
        option.style.color = '#dedede';
        option.style.textShadow = '';
        option.style.listStyleType = 'circle';
      }
    })
    option.addEventListener('click', () => {
      if(clickedTiles.length > 0) {
        clickedOption = option;
        clickedOptionNumber = i + 1;
        optionsList.forEach((opt) => {
          if(opt != clickedOption) {
            opt.style.color = '#dedede';
            opt.style.textShadow = '';
            opt.style.listStyleType = 'circle';
          }
        })
        displayScreen.changeButtonState();
      }
    })
    option.addEventListener('touchstart', () => {
      option.style.color = '#33E2E6';
      option.style.textShadow = '0 0 3px #33E2E6';
      option.style.listStyleType = 'disc';
    })
    option.addEventListener('touchend', () => {
      if(clickedTiles.length > 0) {
        option.style.color = '#33E2E6';
        option.style.textShadow = '0 0 3px #33E2E6';
        option.style.listStyleType = 'disc';
        clickedOption = option;
        clickedOptionNumber = i + 1;
        if(option != clickedOption) {
          option.style.color = '#dedede';
          option.style.textShadow = '';
          option.style.listStyleType = 'circle';
        }
        if(window.outerWidth <= 600) {
          inactiveOptions();
        } else {
          displayScreen.changeButtonState();
        }
      } else {
        option.style.color = '#dedede';
        option.style.textShadow = '';
        option.style.listStyleType = 'circle';
      }
    })
  })
  // Options container adjustment
  resizeOptionsContainer();
}


function getStoryDate() {
  let dateStart = new Date(storyNode[storyNumber].storyDuration[0]);
  let dateEnd = new Date(storyNode[storyNumber].storyDuration[1]);

  let dayStart = ('0' + dateStart.getDate()).slice(-2);
  let dayEnd = ('0' + dateEnd.getDate()).slice(-2);
  let monthStart = ('0' + (dateStart.getMonth() + 1)).slice(-2);
  let monthEnd = ('0' + (dateEnd.getMonth() + 1)).slice(-2);
  let yearStart = dateStart.getFullYear();
  let yearEnd = dateEnd.getFullYear();

  let fullDateStart = `${dayStart}.${monthStart}.${yearStart}`;
  let fullDateEnd = `${dayEnd}.${monthEnd}.${yearEnd}`;

  let fullDate = 'Duration: ' + fullDateStart + ' - ' + fullDateEnd;

  let dateNow = new Date();
  if(dateNow > dateEnd) {
    votingEndedContainer.innerHTML = 'Voting ended';
    votingEndedContainer.style.color = 'rgba(255, 255, 255, 0.5)';
    votingEndedContainer.style.webkitTextStroke = '0.2vw rgba(255, 0, 0, 0.1)';
  } else {
    votingEndedContainer.innerHTML = 'Voting active';
    votingEndedContainer.style.color = 'rgba(51, 226, 230, 0.8)';
    votingEndedContainer.style.webkitTextStroke = '0.2vw rgba(0, 255, 0, 0.1)';
  }

  return fullDate;
}


// After user voted:
export function inactiveOptions() {
  optionsList.forEach((option, i) => {
    option.style.color = '#dedede';
    option.style.textShadow = '';
    option.style.listStyleType = 'circle';
  })
  alert('You chose option ' + clickedOptionNumber  + '\n' + clickedTiles);
  clickedOption = undefined;
  clickedOptionNumber = undefined;
  tilesInactive();
}