import { sidePanelContainer, sidePanelIcon, sidePanelBar } from "../script.js";
import potentials from "./tiles.js";

const sidePanel = {
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
    return document.querySelectorAll('.tile');
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
    }
}

export default sidePanel;