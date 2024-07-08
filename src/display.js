import { displayContainer, displayImageContainer, formatButton, voteButton, storyText, videoFrame } from "../script.js";
import { clickedOption, inactiveOptions } from "./story.js";
import { undefinedOption } from "./sidepanel.js";


// Display screen object
const displayScreen = {
  displayButtons: [
  {
    id: "switcher",
    video: "assets/video.png",
    text: "assets/text.png",
    videoHover: "assets/video-hover.png",
    textHover: "assets/text-hover.png"
  },
  {
    id: "vote",
    image: "assets/vote-clickable.png",
    hover: "assets/vote-hover.png",
    click: "assets/vote-active.png",
    inactive: "assets/vote-inert.png"
  }],

  renderDisplayScreen() {
    let html = '';
    let displayScreenImage;
    let displayScreenBG;
    if(window.outerWidth <= 600) {
      displayScreenImage = 'assets/displayMobile.avif';
      displayScreenBG = 'assets/displayMobileBG.avif';
    } else {
      displayScreenImage = 'assets/display.avif';
      displayScreenBG = 'assets/displayBG.avif';
    }
    html += `
      <img src="${displayScreenImage}" alt="Display" id="display"></img>
      <img src="${displayScreenBG}" id="display-bg">`;
    displayImageContainer.innerHTML = html;
  },

  renderDisplayButtons() {
    let html = '';
    html += `<img src="${this.displayButtons[0].video}" class="display-btn format">`;
    html += `<img src="${this.displayButtons[1].inactive}" class="display-btn vote">`;
    displayContainer.innerHTML = html;
  },

  changeButtonState() {
    if(clickedOption) {
      if(!undefinedOption) {
        voteButton.src = this.displayButtons[1].image;
      } else {
        voteButton.src = this.displayButtons[1].click;
      }
    } else {
    voteButton.src = this.displayButtons[1].inactive;
    }
  },

  addDisplayListeners() {

    formatButton.addEventListener('mouseenter', () => {
      if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
        formatButton.src = displayScreen.displayButtons[0].textHover;
      } else {
        formatButton.src = displayScreen.displayButtons[0].videoHover;
      }
    })
  
    formatButton.addEventListener('mouseout', () => {
      if(formatButton.src.includes(displayScreen.displayButtons[0].textHover)) {
        formatButton.src = displayScreen.displayButtons[0].video;
      } else if(formatButton.src.includes(displayScreen.displayButtons[0].videoHover)){
        formatButton.src = displayScreen.displayButtons[0].text;
      }
    })
  
    formatButton.addEventListener('click', () => {
      if(formatButton.src.includes(displayScreen.displayButtons[0].textHover) || formatButton.src.includes(displayScreen.displayButtons[0].video)) {
        formatButton.src = displayScreen.displayButtons[0].text;
        storyText.style.visibility = 'visible';
        videoFrame.style.visibility = 'hidden';
      } else {
        formatButton.src = displayScreen.displayButtons[0].video;
        storyText.style.visibility = 'hidden';
        videoFrame.style.visibility = 'visible';
      }
    })
  
    voteButton.addEventListener('mouseenter', () => {
      if(voteButton.src.includes(displayScreen.displayButtons[1].image)) {
          voteButton.src = displayScreen.displayButtons[1].hover;
      }
    })
  
    voteButton.addEventListener('mouseout', () => {
      if(voteButton.src.includes(displayScreen.displayButtons[1].hover)) {
        voteButton.src = displayScreen.displayButtons[1].image;
      }
    })
  
    voteButton.addEventListener('click', () => {
      if(voteButton.src.includes(displayScreen.displayButtons[1].hover)) {
        voteButton.src = displayScreen.displayButtons[1].click;
        inactiveOptions();
      }
    })
  
  }
}

export default displayScreen;