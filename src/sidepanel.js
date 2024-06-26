import { sidePanelContainer, optionsList, clickedOptionNumber } from "../script.js";
import potentials from "./tiles.js";
import displayScreen from "./display.js";

export let sidePanelIcon;
export let sidePanelBar;
export let sidePanelBG;
export let nftTiles;
export let nftTilesName;
export let nftTilesClass;
export let nftTotal;
export let nftSelected;

export const sidePanel = {
  panelState: false,
  renderPanel() {
    let html = `
    <img src="assets/sideIcon.png" class="panel-icon">
    <div class="side-panel">
      <div class="tiles-legend">
        <p class="tiles-total">Total NFTs: ${potentials.length}</p>
        <p class="tiles-selected">Selected NFTs: 0</p>
      </div>
      <div class="tiles-container">
    `;
    for(let i in potentials) {
      html += `
        <div class="tile" id="${potentials[i].name}">
          <img class="tile-image" src="${potentials[i].image}"></img>
          <p class="tile-name">${potentials[i].name}</p>
          <p class="tile-class">${potentials[i].class}</p>
        </div>
      `;}
    sidePanelContainer.innerHTML = html + '</div></div>';
    sidePanelIcon = document.querySelector('.panel-icon');
    sidePanelBar = document.querySelector('.side-panel');
    sidePanelBG = document.querySelector('.side-panel-bg');
    nftTiles = document.querySelectorAll('.tile');
    nftTilesName = document.querySelectorAll('.tile-name');
    nftTilesClass = document.querySelectorAll('.tile-class');
    nftTotal = document.querySelector('.tiles-total');
    nftSelected = document.querySelector('.tiles-selected');
  },
  open() {
    sidePanelBG.style.display = 'block';
    nftSelected.innerHTML = `Selected NFTs: ${clickedTiles.length}`;
    let interval;
    let finalPosition = 0;
    clearInterval(interval);
    if(window.outerWidth >= 600) {
      sidePanelIcon.src = 'assets/sideIcon.png';
      interval = setInterval(moveLeft, 5);
      function moveLeft() {
        if(finalPosition == 80) {
          clearInterval(interval);
        } else {
          finalPosition += 4;
          sidePanelIcon.style.right = `${finalPosition}vw`;
          sidePanelBar.style.right = `${finalPosition - 80}vw`;
        }
      }
    } else {
      sidePanelIcon.src = 'assets/sideIconMobileClose.png';
      interval = setInterval(moveDown, 5);
      function moveDown() {
        if(finalPosition == 80) {
          clearInterval(interval);
        } else {
          finalPosition += 4;
          sidePanelIcon.style.top = `${finalPosition}%`;
          sidePanelBar.style.top = `${finalPosition - 80}%`;
        }
      }
    }
    this.panelState = true;
  },
  close() {
    sidePanelBG.style.display = 'none';
    let interval;
    let finalPosition = 80;
    clearInterval(interval);
    if(window.outerWidth >= 600) {
      sidePanelIcon.src = 'assets/sideIcon.png';
      interval = setInterval(moveLeft, 5);
      function moveLeft() {
        if(finalPosition == 0) {
          clearInterval(interval);
        } else {
          finalPosition -= 4;
          sidePanelIcon.style.right = `${finalPosition}vw`;
          sidePanelBar.style.right = `${finalPosition - 80}vw`;
        }
      }
    } else {
      sidePanelIcon.src = 'assets/sideIconMobileOpen.png';
      interval = setInterval(moveDown, 5);
      function moveDown() {
        if(finalPosition == 0) {
          clearInterval(interval);
        } else {
          finalPosition -= 4;
          sidePanelIcon.style.top = `${finalPosition}%`;
          sidePanelBar.style.top = `${finalPosition - 80}%`;
        }
      }
    }
    this.panelState = false;
  }
}

export let clickedTiles = [];
export let undefinedOption = false;

export function tilesInteraction() {
  nftTiles.forEach((tile, i) => {
    tile.addEventListener('mouseover', () => {
      if(!tile.clicked) {
        tile.style.backgroundColor = '#171F6F';
      }
    })
    tile.addEventListener('mouseout', () => {
      if(!tile.clicked) {
        tile.style.backgroundColor = '#161E5F';
      }
    })
    tile.addEventListener('click', () => {
      if(!tile.clicked) {
        tile.style.backgroundColor = '#2441BD';
        tile.style.filter = 'drop-shadow(0 0 0.5vw #33E2E6)';
        tile.style.color = '#33E2E6';
        tile.clicked = true;
        if(!clickedTiles.includes(nftTilesName[i].innerHTML)) {
          clickedTiles.push(nftTilesName[i].innerHTML);
        }
        displayScreen.changeButtonState();
      } else {
        tile.style.backgroundColor = '#161E5F';
        tile.style.filter = 'drop-shadow(0 0 0.1vw black)';
        tile.style.color = '#dedede';
        tile.clicked = false;
        delete clickedTiles[(clickedTiles.indexOf(nftTilesName[i].innerHTML))]
      }
      clickedTiles = clickedTiles.filter((value) => {
        return value !== undefined;
      })
      if(clickedTiles.length == 0) {
        optionsList[clickedOptionNumber - 1].style.color = '#dedede';
        optionsList[clickedOptionNumber - 1].style.textShadow = '';
        undefinedOption = true;
        displayScreen.changeButtonState();
      } else {
        undefinedOption = false;
      }
      nftSelected.innerHTML = `Selected NFTs: ${clickedTiles.length}`;
    })
  })
}

export function tilesInactive() {
  for(let i in nftTiles) {
    if(clickedTiles.toString().match(nftTilesName[i].innerHTML)) {
      nftTiles[i].style.backgroundColor = '#161E5F';
      nftTiles[i].style.filter = 'drop-shadow(0 0 0.1vw black)';
      nftTiles[i].style.color = '#dedede';
      nftTiles[i].style.opacity = '0.5';
      nftTiles[i].style.pointerEvents = 'none';
      nftTiles[i].clicked = false;
      nftTiles[i].active = false;
      clickedTiles.splice(clickedTiles.indexOf(nftTilesName[i].innerHTML), 1);
    }
  }
}