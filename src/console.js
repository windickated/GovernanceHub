import { consoleContainer, consoleImageContainer, consoleButtons } from "../script.js";
import { renderStory } from "./story.js";


// Story node shown
export let storyNumber = 10;


// Console panel object
export const consolePanel = {
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

    renderConsolePanel() {
      let html = '';
      let consoleImageFile;
      if(window.outerWidth <= 600) {
        consoleImageFile = 'assets/consoleMobile.avif';
      } else {
        consoleImageFile = 'assets/console.avif';
      }
      html += `<img src="${consoleImageFile}" alt="Console" id="console"></img>`;
      consoleImageContainer.innerHTML = html;
    },

    renderConsoleButtons() {
      let html = '';
      for(let i in this.consoleButtons) {
        html += `<img src="assets/${this.consoleButtons[i].id}.png" data-name="${this.consoleButtons[i].id}" class="console-btn ${this.consoleButtons[i].size}">`;
      }
      consoleContainer.innerHTML = html;
    },

    addConsoleListeners() {

      consoleButtons.forEach( (button) => {
        button.addEventListener('mouseenter', () => {
          button.src = `assets/${button.dataset.name}-hover.png`;
        })
        button.addEventListener('mouseout', () => {
          button.src = `assets/${button.dataset.name}.png`;
        })
        button.addEventListener('mousedown', () => {
          button.src = `assets/${button.dataset.name}-active.png`;
        })
        button.addEventListener('mouseup', () => {
          button.src = `assets/${button.dataset.name}-hover.png`;
        })
        button.addEventListener('touchstart', () => {
          button.src = `assets/${button.dataset.name}-hover.png`;
        })
        button.addEventListener('touchend', () => {
          button.src = `assets/${button.dataset.name}.png`;
        })
        button.addEventListener('click', () => {
          switch (button.dataset.name) {
            case 'conexus': 
              window.open('https://conexus.degenerousdao.com/', '_blank');
              break;
            case 'back': 
            if(storyNumber != 1) {
              storyNumber -= 1;
              renderStory(storyNumber);
            }
              break;
            case 'omnihub': 
              //window.open();
              break;
            case 'forward':
              if(storyNumber != 10) {
                storyNumber += 1;
                renderStory(storyNumber);
              }
              break;
            case 'sagaverse':
              window.open('https://degenerousdao.com/', '_blank');
              break;
          }
        })
      })
    
      // Inactive Omnihub button
      consoleButtons[2].src = 'assets/omnihub-inactive.png';
      consoleButtons[2].style.pointerEvents = 'none'
    
    }
}

export default consolePanel;