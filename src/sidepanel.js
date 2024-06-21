import { sidePanelContainer } from "../script.js";
import potentials from "./tiles.js";

export let sidePanelIcon;
export let sidePanelBar;
export let nftTiles;
export let nftTilesName;
export let nftTilesClass;

export const sidePanel = {
  panelState: true,
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
      if(finalPosition == 70) {
        clearInterval(interval);
      } else {
        finalPosition ++;
        sidePanelIcon.style.right = `${finalPosition}vw`;
        sidePanelBar.style.right = `${finalPosition - 70}vw`;
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