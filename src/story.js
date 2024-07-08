import { videoContainer, titleContainer, durationContainer, textContainer, optionsContainer, resizeOptionsContainer } from '../script.js'
import { clickedTiles, undefinedOption, tilesInactive } from './sidepanel.js';
import displayScreen from './display.js';


const storyNode = [];
export let optionsList;
export let optionsCounter;
export let clickedOption;
export let clickedOptionNumber;

export async function renderStory(n) {
  // Getting story node JSON and render HTML
  const response = await fetch(`./data/episode${n}.json`);
  storyNode[n] = await response.json();
  videoContainer.src = storyNode[n].videoLink;
  titleContainer.innerHTML = storyNode[n].storyTitle;
  durationContainer.innerHTML = storyNode[n].storyDuration;
  let html = '';
  storyNode[n].storyText.forEach((paragraph) => {
    html += `<p class="story-p">${paragraph}</p>`
  })
  textContainer.innerHTML = html;
  html = '';
  storyNode[n].storyOptions.forEach((option) => {
    html += `<li class="option" id="option${n}">${option}</li>`;
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