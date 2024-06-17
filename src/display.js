export const displayButtons = [
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
  }
]

const displayContainer = document.querySelector('.display-buttons');

function addDisplayButtons() {
  let html = '';
  html += `<img src="${displayButtons[0].video}" class="display-btn">`;
  html += `<img src="${displayButtons[1].image}" class="display-btn">`;
  displayContainer.innerHTML = html;
}

export default addDisplayButtons;