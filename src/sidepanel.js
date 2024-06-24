import { sidePanelContainer } from "../script.js";
import potentials from "./tiles.js";

export let sidePanelIcon;
export let sidePanelBar;
export let nftTiles;
export let nftTilesName;
export let nftTilesClass;

export const sidePanel = {
  panelState: false,
  renderPanel() {
    let html = `
    <img src="assets/side-icon.png" class="panel-icon">
    <div class="side-panel">
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
    nftTiles = document.querySelectorAll('.tile');
    nftTilesName = document.querySelectorAll('.tile-name');
    nftTilesClass = document.querySelectorAll('.tile-class');
  },
  open() {
    let interval;
    let finalPosition = 0;
    clearInterval(interval);
    interval = setInterval(move, 5);
    function move() {
      if(finalPosition == 80) {
        clearInterval(interval);
      } else {
        finalPosition ++;
        sidePanelIcon.style.right = `${finalPosition}vw`;
        sidePanelBar.style.right = `${finalPosition - 80}vw`;
      }
    }
    this.panelState = true;
  },
  close() {
    let interval;
    let finalPosition = 80;
    clearInterval(interval);
    interval = setInterval(move, 5);
    function move() {
      if(finalPosition == 0) {
        clearInterval(interval);
      } else {
        finalPosition --;
        sidePanelIcon.style.right = `${finalPosition}vw`;
        sidePanelBar.style.right = `${finalPosition - 80}vw`;
      }
    }
    this.panelState = false;
  }
}

export let clickedTiles = [];

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
        tile.clicked = true;
        if(!clickedTiles.includes(nftTilesName[i].innerHTML)) {
          clickedTiles.push(nftTilesName[i].innerHTML);
        }
      } else {
        tile.style.backgroundColor = '#161E5F';
        tile.style.filter = 'drop-shadow(0 0 0.1vw black)';
        tile.clicked = false;
        delete clickedTiles[(clickedTiles.indexOf(nftTilesName[i].innerHTML))]
      }
      clickedTiles = clickedTiles.filter((value) => {
        return value !== undefined;
      })
    })
  })
}