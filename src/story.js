import { videoContainer, titleContainer, durationContainer, textContainer, optionsContainer } from '../script.js'
import { clickedTiles, undefinedOption, tilesInactive } from './sidepanel.js';
import displayScreen from './display.js';
import reView from './responsive.js';

const storyNode = [];
export let optionsList;
export let optionsCounter;
export let clickedOption;
export let clickedOptionNumber;

export async function renderStory(n) {
  const response = await fetch(`./data/episode${n}.json`);
  storyNode[n] = await response.json();
  videoContainer.src = storyNode[n].videoLink;
  titleContainer.innerHTML = storyNode[n].storyTitle;
  durationContainer.innerHTML = storyNode[n].storyDuration;
  textContainer.innerHTML = storyNode[n].storyText;
  let html = '';
  storyNode[n].storyOptions.forEach((option) => {
    html += `<li class="option" id="option${n}">${option}</li>`;
  })
  optionsContainer.innerHTML = html;
  optionsList = document.querySelectorAll('.option');
  optionsCounter = optionsList.length;

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
    option.addEventListener('mousedown', () => {
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
        if(window.outerWidth <= 600) {
          alert('You chose option ' + clickedOptionNumber  + '\n' + clickedTiles);
          clickedOption = undefined;
          clickedOptionNumber = undefined;
          tilesInactive();
        }
      } else {
        option.style.color = '#dedede';
        option.style.textShadow = '';
        option.style.listStyleType = 'circle';
      }
    })
  })

  reView()
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

/*
fetch('./data/episode10.json')
  .then((response) => response.json())
  .then((json) => {
    storyNode[0] = json;
    console.log(storyNode[0])
  })
*/

/*
const response = await fetch('https://api.degenerousdao.com/nft/data/2')
const json = await response.json()
console.log(json)
*/