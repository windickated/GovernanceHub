import { otherEpisodesIconContainer, otherEpisodesContainer, otherEpisodes, otherEpisodesTitle, sidePanelBG } from "../script.js";
import { renderStory, storyNode, seasonTitle } from "./story.js";
import { sidePanel } from "./sidepanel.js";


export let storyNumber = 11;
export let lastStoryNumber = 11;


// Story node tiles constructor
class EpisodeTile {
  constructor(data, i) {
    this.title = `Episode ${i + 1} - ${data[i].storyTitle}`;
    this.image = `https://img.youtube.com/vi/${data[i].videoLink}/hqdefault.jpg`;
    this.active = false;
  } 
}
const episode = [];


// Generating and adding listeners to tiles

let storyNodeTiles;
let otherEpisodesIcon;
export async function renderEpisodesPanel() {
  let html = '';

  for(let i = 0; i < lastStoryNumber; i++) {
    const response = await fetch(`./data/episode${i + 1}.json`);
    storyNode[i] = await response.json();
    episode[i] = new EpisodeTile(storyNode, i);
    html += `
      <div class="story-node-tile">
        <img class="story-node-image" src="${episode[i].image}"></img>
        <p class="story-node-title">${episode[i].title}</p>
      </div>`;
  }

  otherEpisodesIconContainer.innerHTML = `<img class="episodes-icon" src="assets/episodesPCOpen.png"></img>`;
  otherEpisodes.innerHTML = html;
  otherEpisodesTitle.innerHTML = seasonTitle;

  otherEpisodesIcon = document.querySelector('.episodes-icon')
  storyNodeTiles = document.querySelectorAll('.story-node-tile');
  storyNodeTiles.forEach((tile, i) => {
    tile.addEventListener('mouseover', () => {
      if(!episode[i].active) {
        tile.style.backgroundColor = 'rgba(51, 226, 230, 0.5)';
        tile.style.color = '#33E2E6';
        tile.style.filter = 'none';
      }
    })
    tile.addEventListener('mouseout', () => {
      if(!episode[i].active) {
        tile.style.backgroundColor = 'rgba(51, 226, 230, 0.4)';
        tile.style.color = 'inherit';
        tile.style.filter = 'none';
      }
    })
    tile.addEventListener('click', () => {
      if(!episode[i].active) {activeEpisode(i)}
    })
  })

  otherEpisodesIcon.addEventListener('click', () => {
    if(episodesPanel.panelState) {
      episodesPanel.close();
    } else {
      episodesPanel.open();
    }
  })
  
  activeEpisode(storyNumber - 1);
}


// Make selected episode active
export function activeEpisode(i) {
  storyNodeTiles[i].style.color = '#010020';
  storyNodeTiles[i].style.filter = 'drop-shadow(0 0 1vw rgba(51, 226, 230, 0.8))';
  inactiveEpisodes();
  episode[i].active = true;
  storyNumber = i + 1;
  renderStory(storyNumber);
}

// Make inactive all other tiles
function inactiveEpisodes() {
  storyNodeTiles.forEach((tile, i) => {
    if(episode[i].active) {
      episode[i].active = false;
      tile.style.backgroundColor = 'rgba(51, 226, 230, 0.4)';
      tile.style.color = 'inherit';
      tile.style.filter = 'none';
    }
  })
}


// Episodes panel object
export const episodesPanel = {
  panelState: false,
  open() {
    this.changeIconState();
    document.body.style.overflowY = 'hidden';
    sidePanelBG.style.display = 'block';
    let interval;
    let finalPosition = 0;
    clearInterval(interval);
    interval = setInterval(moveRight, 5);
    function moveRight() {
      if(finalPosition == 40) {
        clearInterval(interval);
      } else {
        finalPosition += 4;
        otherEpisodesIconContainer.style.left = `${finalPosition + 4}vw`;
        otherEpisodesContainer.style.left = `${finalPosition - 40}vw`;
      }
    }
    if(sidePanel.panelState) {
      sidePanel.close();
    }
    this.panelState = true;
  },
  close() {
    this.changeIconState();
    document.body.style.overflowY = 'auto';
    sidePanelBG.style.display = 'none';
    let interval;
    let finalPosition = 44;
    clearInterval(interval);
    interval = setInterval(moveRight, 5);
    function moveRight() {
      if(finalPosition == 0) {
        clearInterval(interval);
      } else {
        finalPosition -= 4;
        otherEpisodesIconContainer.style.left = `${finalPosition}vw`;
        otherEpisodesContainer.style.left = `${finalPosition - 44}vw`;
      }
    }
    this.panelState = false;
  },
  changeIconState() {
    if(window.outerWidth <= 600) {
      if(this.panelState) {
        otherEpisodesIcon.src = 'assets/sideIconMobileOpen.png';
      } else {
        otherEpisodesIcon.src = 'assets/sideIconMobileClose.png';
      }
    } else {
      if(this.panelState) {
        otherEpisodesIcon.src = 'assets/episodesPCOpen.png';
      } else {
        otherEpisodesIcon.src = 'assets/episodesPCClose.png';
      }
    }
  }
}