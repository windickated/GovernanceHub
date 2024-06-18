import { displayContainer, clickedOption, voteButton } from "../script.js";

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
    html += `<img src="${this.displayButtons[0].video}" class="display-btn">`;
    html += `<img src="${this.displayButtons[1].inactive}" class="display-btn">`;
    displayContainer.innerHTML = html;
  },

  changeButtonState() {
    if(clickedOption) {
      voteButton.src = this.displayButtons[1].image;
    }
  }
}

export default displayScreen;