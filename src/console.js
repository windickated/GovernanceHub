import { consoleContainer } from "../script.js";

const consolePanel = {
  consoleButtons: [
    {
      id: "conexus",
      image: "assets/conexus.png",
      hover: "assets/conexus-hover.png",
      click: "assets/conexus-active.png",
      size: "big"
    },
    {
      id: "back",
      image: "assets/back.png",
      hover: "assets/back-hover.png",
      click: "assets/back-active.png",
      size: "small"
    },
    {
      id: "omnihub",
      image: "assets/omnihub.png",
      inactive: "assets/omnihub-inactive.png",
      hover: "assets/omnihub-hover.png",
      click: "assets/omnihub-active.png",
      size: "big"
    },
    {
      id: "forward",
      image: "assets/forward.png",
      hover: "assets/forward-hover.png",
      click: "assets/forward-active.png",
      size: "small"
    },
    {
      id: "sagaverse",
      image: "assets/sagaverse.png",
      hover: "assets/sagaverse-hover.png",
      click: "assets/sagaverse-active.png",
      size: "big"
    }],

    renderConsoleButtons() {
      let html = '';
      for(let i in this.consoleButtons) {
        html += `<img src="assets/${this.consoleButtons[i].id}.png" data-name="${this.consoleButtons[i].id}" class="console-btn ${this.consoleButtons[i].size}">`;
      }
      consoleContainer.innerHTML = html;
    }
}

export default consolePanel;