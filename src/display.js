import { displayContainer, voteButton } from "../script.js";
import { clickedOption } from "./story.js";
import { undefinedOption } from "./sidepanel.js";

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
  }
}

export default displayScreen;