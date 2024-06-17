const consoleButtons = [
  {
    id: "conexus",
    image: "assets/conexus.png",
    hover: "assets/conexus-hover.png",
    click: "assets/conexus-active.png",
    size: "big"
  },
  {
    id: "left",
    image: "assets/left.png",
    hover: "assets/left-hover.png",
    click: "assets/left-active.png",
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
    id: "right",
    image: "assets/right.png",
    hover: "assets/right-hover.png",
    click: "assets/right-active.png",
    size: "small"
  },
  {
    id: "sagaverse",
    image: "assets/sagaverse.png",
    hover: "assets/sagaverse-hover.png",
    click: "assets/sagaverse-active.png",
    size: "big"
  }
];

const consoleContainer = document.querySelector('.console-buttons');

function addConsoleButtons() {
  let html = '';
  for(let i in consoleButtons) {
    html += `<img src="assets/${consoleButtons[i].id}.png" data-name="${consoleButtons[i].id}" class="console-btn ${consoleButtons[i].size}">`;
  }
  consoleContainer.innerHTML = html;
}

export default addConsoleButtons;