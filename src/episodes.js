import { otherEpisodesIconContainer, otherEpisodesContainer, otherEpisodes, otherEpisodesTitle, sidePanelBG } from "../script.js";
import { renderStory, storyNode, seasonTitle } from "./story.js";
import { sidePanel, sidePanelBar, sidePanelIcon } from "./sidepanel.js";


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
export let otherEpisodesIcon;
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

  let episodesIconImage;
  if(window.outerWidth <= 600) {
    episodesIconImage = 'assets/episodesMobileOpen.png';
  } else {
    episodesIconImage = 'assets/episodesPCOpen.png';
  }

  otherEpisodesIconContainer.innerHTML = `<img class="episodes-icon" src="${episodesIconImage}"></img>`;
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

let interval;
let finalPosition;
export const episodesPanel = {
  panelState: false,
  open() {
    this.changeIconState();
    otherEpisodesIconContainer.style.zIndex = '30';
    document.body.style.overflowY = 'hidden';
    sidePanelBG.style.display = 'block';
    finalPosition = 0;
    clearInterval(interval);
    if(window.outerWidth <= 600) {
      if(sidePanel.panelState) {
        sidePanel.panelState = false;
        sidePanelIcon.src = 'assets/sideIconMobileOpen.png';
        sidePanelBar.style.top = '-80%';
        otherEpisodesContainer.style.top = '0';
      } else {
        interval = setInterval(slidePanelMobile, 5);
      }
    } else {
      closePanel(sidePanel);
      interval = setInterval(slidePanelPC, 5);
    }
    this.panelState = true;
  },
  close() {
    this.changeIconState();
    document.body.style.overflowY = 'auto';
    sidePanelBG.style.display = 'none';
    clearInterval(interval);
    if(window.outerWidth <= 600) {
      finalPosition = 80;
      interval = setInterval(slidePanelMobile, 5);
    } else {
      finalPosition = 44;
      interval = setInterval(slidePanelPC, 5);
    }
    this.panelState = false;
  },
  changeIconState() {
    if(window.outerWidth <= 600) {
      if(this.panelState) {
        otherEpisodesIcon.src = 'assets/episodesMobileOpen.png';
      } else {
        otherEpisodesIcon.src = 'assets/episodesMobileClose.png';
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


// Utility functions for panel object

export function closePanel(panel) {
  if(panel.panelState) {
    panel.close();
    sidePanelBG.style.display = 'block';
  }
}

function slidePanelPC() {
  if(episodesPanel.panelState) {
    if(finalPosition == 40) {
      clearInterval(interval);
    } else {
      finalPosition += 4;
      otherEpisodesIconContainer.style.left = `${finalPosition + 4}vw`;
      otherEpisodesContainer.style.left = `${finalPosition - 40}vw`;
    }
  } else {
    if(finalPosition == 0) {
      clearInterval(interval);
    } else {
      finalPosition -= 4;
      otherEpisodesIconContainer.style.left = `${finalPosition}vw`;
      otherEpisodesContainer.style.left = `${finalPosition - 44}vw`;
    }
  }
}

function slidePanelMobile() {
  if(episodesPanel.panelState) {
    if(finalPosition == 80) {
      clearInterval(interval);
    } else {
      finalPosition += 4;
      otherEpisodesIconContainer.style.top = `${finalPosition}%`;
      otherEpisodesContainer.style.top = `${finalPosition - 80}%`;
      // Moving another icon down with opening panel
      if(episodesPanel.panelState) {
        sidePanelIcon.style.top = `${finalPosition}%`;
      }
    }
  } else {
    if(finalPosition == 0) {
      clearInterval(interval);
    } else {
      finalPosition -= 4;
      otherEpisodesIconContainer.style.top = `${finalPosition}%`;
      otherEpisodesContainer.style.top = `${finalPosition - 80}%`;
      if(!episodesPanel.panelState) {
        sidePanelIcon.style.top = `${finalPosition}%`;
      }
    }
  }
}