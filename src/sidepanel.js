import { sidePanelContainer, sidePanelIcon, sidePanelBar, tilesContainer } from "../script.js";
import potentials from "./tiles.js";

const sidePanel = {
  panelState: false,
  renderPanel() {
    sidePanelContainer.innerHTML = `
    <img src="assets/side-icon.png" class="panel-icon">
    <div class="side-panel">
      <img src="assets/side-border.png" class="panel-border">
      <div class="tiles"></div>
    </div>
    `;},
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
    this.panelState = false;
    },
  close() {
    let interval;
    let finalPosition = 70;
    clearInterval(interval);
    interval = setInterval(move, 5);
    function move() {
      if(finalPosition == 0) {
        clearInterval(interval);
      } else {
        finalPosition --;
        sidePanelIcon.style.right = `${finalPosition}vw`;
        sidePanelBar.style.right = `${finalPosition - 70}vw`;
      }
    }
    this.panelState = true;
    },
  renderTiles() {
    let html = '';
    for(let i in potentials) {
      html += `
        <div class="tile" id="${potentials[i].name}">
          <img src="${potentials[i].image}"></img>
          <p class="tile-name">${potentials[i].name}</p>
          <p class="tile-class">${potentials[i].class}</p>
        </div>
      `;}
    tilesContainer.innerHTML = html;
  }
}

export default sidePanel;