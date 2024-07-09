import { sidePanelBG, sidePanelIconContainer, tilesLegendContainer, tilesContainer, nftNumbers, otherEpisodesIconContainer, otherEpisodesContainer } from "../script.js";
import { optionsList, clickedOptionNumber } from "./story.js";
import { episodesPanel, closePanel, otherEpisodesIcon } from "./episodes.js";
import displayScreen from "./display.js";


// NFT tiles constructor
class Tile {
  constructor(data, i) {
    this.name = data[i].name;
    this.image = data[i].image;
    this.class = data[i].attributes[5].value;
    this.clicked = false;
    this.active = true;
  } 
}
const potentials = [];


// Generating panel

export let sidePanelIcon;
export let sidePanelBar;
export let nftTiles;
export let nftTilesName;
export let nftTilesClass;
export let nftTotal;
export let nftSelected;

export async function renderPanel() {
  const metadata = [];
  let html = '';
  for(let i in nftNumbers) {
    const response = await fetch(`https://api.degenerousdao.com/nft/data/${nftNumbers[i]}`);
    metadata[i] = await response.json();
    potentials[i] = new Tile(metadata, i);
    html += `
      <div class="tile" id="${potentials[i].name}">
        <img class="tile-image" src="${potentials[i].image}"></img>
        <p class="tile-name">${potentials[i].name}</p>
        <p class="tile-class">${potentials[i].class}</p>
      </div>`;
  }

  let sideIconImage;
  if(window.outerWidth <= 600) {
    sideIconImage = 'assets/sideIconMobileOpen.png';
  } else {
    sideIconImage = 'assets/sideIconPCOpen.png';
  }
  sidePanelIconContainer.innerHTML = `<img src="${sideIconImage}" class="panel-icon"></img>`;
  tilesLegendContainer.innerHTML = `
    <p class="tiles-total">Total NFTs: ${potentials.length}</p>
    <p class="tiles-selected">Selected NFTs: 0</p>`;
  tilesContainer.innerHTML = html;

  sidePanelIcon = document.querySelector('.panel-icon');
  sidePanelBar = document.querySelector('.side-panel');
  nftTiles = document.querySelectorAll('.tile');
  nftTilesName = document.querySelectorAll('.tile-name');
  nftTilesClass = document.querySelectorAll('.tile-class');
  nftTotal = document.querySelector('.tiles-total');
  nftSelected = document.querySelector('.tiles-selected');

  sidePanelIcon.addEventListener('load', tilesInteraction());
  sidePanelIcon.addEventListener('click', () => {
    if(sidePanel.panelState) {
      sidePanel.close();
    } else {
      sidePanel.open();
    }
  })
}


// Side panel object
let interval;
let finalPosition;
export const sidePanel = {
  panelState: false,
  open() {
    this.changeIconState();
    document.body.style.overflowY = 'hidden';
    sidePanelBG.style.display = 'block';
    nftSelected.innerHTML = `Selected NFTs: ${clickedTiles.length}`;
    finalPosition = 0;
    clearInterval(interval);
    if(window.outerWidth <= 600) {
      if(episodesPanel.panelState) {
        episodesPanel.panelState = false;
        otherEpisodesIcon.src = 'assets/episodesPCOpen.png';
        otherEpisodesContainer.style.top = '-80%';
        sidePanelBar.style.top = '0';
      } else {
      interval = setInterval(slidePanelMobile, 5);
      }
    } else {
      closePanel(episodesPanel);
      interval = setInterval(slidePanelPC, 5);
    }
    this.panelState = true;
  },
  close() {
    this.changeIconState();
    document.body.style.overflowY = 'auto';
    sidePanelBG.style.display = 'none';
    finalPosition = 80;
    clearInterval(interval);
    if(window.outerWidth <= 600) {
      interval = setInterval(slidePanelMobile, 5);
    } else {
      interval = setInterval(slidePanelPC, 5);
    }
    this.panelState = false;
  },
  changeIconState() {
    if(window.outerWidth <= 600) {
      if(this.panelState) {
        sidePanelIcon.src = 'assets/sideIconMobileOpen.png';
      } else {
        sidePanelIcon.src = 'assets/sideIconMobileClose.png';
      }
    } else {
      if(this.panelState) {
        sidePanelIcon.src = 'assets/sideIconPCOpen.png';
      } else {
        sidePanelIcon.src = 'assets/sideIconPCClose.png';
      }
    }
  }
}


// Utility functions for panel object

function slidePanelPC() {
  if(sidePanel.panelState) {
    if(finalPosition == 80) {
      clearInterval(interval);
    } else {
      finalPosition += 4;
      sidePanelIcon.style.right = `${finalPosition}vw`;
      sidePanelBar.style.right = `${finalPosition - 80}vw`;
    }
  } else {
    if(finalPosition == 0) {
      clearInterval(interval);
    } else {
      finalPosition -= 4;
      sidePanelIcon.style.right = `${finalPosition}vw`;
      sidePanelBar.style.right = `${finalPosition - 80}vw`;
    }
  }
}

function slidePanelMobile() {
  if(sidePanel.panelState) {
    if(finalPosition == 80) {
      clearInterval(interval);
    } else {
      finalPosition += 4;
      sidePanelIcon.style.top = `${finalPosition}%`;
      sidePanelBar.style.top = `${finalPosition - 80}%`;
      // Moving another icon down with opening panel
      if(!episodesPanel.panelState) {
        otherEpisodesIconContainer.style.top = `${finalPosition}%`;
      }
    }
  } else {
    if(finalPosition == 0) {
      clearInterval(interval);
    } else {
      finalPosition -= 4;
      sidePanelIcon.style.top = `${finalPosition}%`;
      sidePanelBar.style.top = `${finalPosition - 80}%`;
      if(!episodesPanel.panelState) {
        otherEpisodesIconContainer.style.top = `${finalPosition}%`;
      }
    }
  }
}


// Interaction with tiles

export let clickedTiles = [];
export let undefinedOption = false;

export function tilesInteraction() {
  nftTiles.forEach((tile, i) => {
    tile.addEventListener('mouseover', () => {
      if(!potentials[i].clicked) {
        tile.style.backgroundColor = '#171F6F';
      }
    })
    tile.addEventListener('mouseout', () => {
      if(!potentials[i].clicked) {
        tile.style.backgroundColor = '#161E5F';
      }
    })
    tile.addEventListener('click', () => {
      nftSelected.innerHTML = 'Selected NFTs: 0';
      if(!potentials[i].clicked) {
        tile.style.backgroundColor = '#2441BD';
        tile.style.filter = 'drop-shadow(0 0 0.5vw #33E2E6)';
        tile.style.color = '#33E2E6';
        potentials[i].clicked = true;
        if(!clickedTiles.includes(nftTilesName[i].innerHTML)) {
          clickedTiles.push(nftTilesName[i].innerHTML);
        }
        displayScreen.changeButtonState();
      } else {
        tile.style.backgroundColor = '#161E5F';
        tile.style.filter = 'drop-shadow(0 0 0.1vw black)';
        tile.style.color = '#dedede';
        potentials[i].clicked = false;
        delete clickedTiles[(clickedTiles.indexOf(nftTilesName[i].innerHTML))]
      }
      clickedTiles = clickedTiles.filter((value) => {
        return value !== undefined;
      })
      if(clickedTiles.length == 0) {
        optionsList[clickedOptionNumber - 1].style.color = '#dedede';
        optionsList[clickedOptionNumber - 1].style.textShadow = '';
        optionsList[clickedOptionNumber - 1].style.listStyleType = 'circle';
        undefinedOption = true;
        displayScreen.changeButtonState();
      } else {
        undefinedOption = false;
      }
      nftSelected.innerHTML = `Selected NFTs: ${clickedTiles.length}`;
    })
  })
}


// After user voted:
export function tilesInactive() {
  for(let i in potentials) {
    if(potentials[i].clicked) {
      nftTiles[i].style.backgroundColor = '#161E5F';
      nftTiles[i].style.filter = 'drop-shadow(0 0 0.1vw black)';
      nftTiles[i].style.color = '#dedede';
      nftTiles[i].style.opacity = '0.5';
      nftTiles[i].style.pointerEvents = 'none';
      potentials[i].clicked = false;
      potentials[i].active = false;
      clickedTiles.splice(clickedTiles.indexOf(nftTilesName[i].innerHTML), 1);
    }
  }
}