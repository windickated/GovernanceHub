import { sidePanelContainer, sidePanelIcon, sidePanelBar } from "../script.js";

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
    }
}

export default sidePanel;