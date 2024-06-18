import { sidePanelContainer, sidePanelIcon, sidePanelBar } from "../script.js";

const sidePanel = {
  panelState: true,
  renderPanel() {
    sidePanelContainer.innerHTML = `
    <img src="assets/side-icon.png" class="panel-icon">
    <div class="side-panel">
      <img src="assets/side-border.png" class="panel-border">
      <div class="tiles"></div>
    </div>
    `;},
  open() {
    sidePanelIcon.style.right = '70vw';
    sidePanelBar.style.right = '0';
    this.panelState = true;
    },
  close() {
    sidePanelIcon.style.right = '0';
    sidePanelBar.style.right = '-70vw';
    this.panelState = false;
    }
}

export default sidePanel;