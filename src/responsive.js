import displayScreen from "./display.js";
import { storyTitle, storyDuration, storyText, storyOptions, optionsCounter, formatButton, voteButton, formatPanel, videoFrame, displayImage, displayBG, consoleButtons, consoleImage } from "../script.js";
import { nftTiles, nftTilesName, nftTilesClass, nftTotal, nftSelected, sidePanel, sidePanelIcon, sidePanelBar } from "./sidepanel.js";


function mobileView() {
  storyTitle.style.fontSize = '1.1em';
  storyDuration.style.fontSize = 'inherit';
  storyDuration.style.marginBottom = '4vw';
  storyText.style.visibility = 'visible';

  displayImage.src = 'assets/displayMobile.png';
  displayBG.src = 'assets/displayMobileBG.png';
  formatButton.style.display = 'none';
  formatPanel.style.display = 'none';
  voteButton.style.display = 'none';
  consoleImage.src = 'assets/consoleMobile.png'
  consoleButtons.forEach((button) => {
    if(button.className.match('big')) {
      button.style.width = '25%';
    } else {
      button.style.width = '12.5%';
    }
  });

  textOutScreen();
  optionsOutScreen();

  sideBarMobile();
}


function computerView() {
  storyTitle.style.fontSize = '3vw';
  storyDuration.style.fontSize = '2vw';
  storyDuration.style.marginBottom = '-2vw';

  displayImage.src = 'assets/display.png';
  displayBG.src = 'assets/displayBG.png';
  formatButton.style.display = 'block';
  voteButton.style.display = 'block';
  formatPanel.style.display = 'block';
  consoleImage.src = 'assets/console.png'
  consoleButtons.forEach((button) => {
    if(button.className.match('big')) {
      button.style.width = '20%';
    } else {
      button.style.width = '10%';
    }
  });

  textOnScreen();
  optionsOnScreen();

  sideBarComputer();
}


function textOnScreen() {
  storyText.style.position = 'absolute';
  storyText.style.top = '10.1vw';
  storyText.style.width = '80.6vw';
  storyText.style.left = '7.7vw';
  storyText.style.overflowY = 'scroll';
  storyText.style.height = '43.6vw';
  storyText.style.fontSize = '2vw';
  storyText.style.lineHeight = '3vw';
  storyText.style.marginBottom = '';
}

function textOutScreen() {
  storyText.style.position = 'static';
  storyText.style.top = '';
  storyText.style.width = '';
  storyText.style.left = '';
  storyText.style.overflowY = '';
  storyText.style.height = 'auto';
  storyText.style.fontSize = 'inherit';
  storyText.style.lineHeight = 'inherit';
  storyText.style.marginBottom = '2vw';
}


function optionsOnScreen() {
  storyOptions.style.position = 'absolute';
  storyOptions.style.top = '59vw';
  storyOptions.style.width = '59.8vw';
  storyOptions.style.height = '23vw';
  if(optionsCounter >= 4) {
    storyOptions.style.fontSize = `${10/optionsCounter}vw`;
    storyOptions.style.paddingTop = `${10/optionsCounter}vw`;
  } else {
    storyOptions.style.fontSize = '2.5vw';
    if(optionsCounter == 3) {
      storyOptions.style.paddingTop = '5vw';
    } else {
      storyOptions.style.paddingTop = '7vw';
    }
  }
  storyOptions.style.whiteSpace = 'nowrap';
  storyOptions.style.marginLeft = '';
  storyOptions.style.marginBottom = '';
}

function optionsOutScreen() {
  storyOptions.style.position = 'static';
  storyOptions.style.top = '';
  storyOptions.style.width = '95vw';
  storyOptions.style.height = 'auto';
  storyOptions.style.fontSize = '1.1em';
  storyOptions.style.whiteSpace = 'wrap';
  storyOptions.style.marginLeft = '-2.5vw';
  storyOptions.style.marginBottom = '4vw';
}


function sideBarMobile() {
  document.body.style.paddingTop = '15%';
  sidePanelIcon.style.width = '100%';
  sidePanelIcon.style.height = 'auto';
  sidePanelIcon.style.top = '0';
  sidePanelIcon.src = 'assets/sideIconMobileOpen.png';

  sidePanelBar.style.width = '100vw';
  sidePanelBar.style.height = '80%';
  sidePanelBar.style.right = '';
  sidePanelBar.style.left = '0';
  sidePanelBar.style.top = '-80%';
  sidePanelBar.style.backgroundImage = 'none';

  nftTotal.style.fontSize = 'inherit';
  nftSelected.style.fontSize = 'inherit';
  nftTiles.forEach((tile) => {
    tile.style.width = '46vw';
    tile.style.height = '60vw';
  })
  nftTilesName.forEach((name) => {
    name.style.fontSize = '1.2em';
  })
  nftTilesClass.forEach((clas) => {
    clas.style.fontSize = '0.9em';
  })
}

function sideBarComputer() {
  document.body.style.paddingTop = '';
  sidePanelIcon.style.width = '10vw';
  sidePanelIcon.style.height = '10vw';
  sidePanelIcon.src = 'assets/sideIcon.png';

  sidePanelBar.style.width = '80vw';
  sidePanelBar.style.height = '100%';
  sidePanelBar.style.right = '-80vw';
  sidePanelBar.style.left = '';
  sidePanelBar.style.top = '';
  sidePanelBar.style.backgroundImage = "url('assets/sideBorder.png')";

  nftTotal.style.fontSize = '2vw';
  nftSelected.style.fontSize = '2vw';
  nftTiles.forEach((tile) => {
    tile.style.width = '17vw';
    tile.style.height = '23vw';
  })
  nftTilesName.forEach((name) => {
    name.style.fontSize = '2vw';
  })
  nftTilesClass.forEach((clas) => {
    clas.style.fontSize = '1.5vw';
  })
}



function reView() {
  if(window.outerWidth <= 600) {
      mobileView();
      videoFrame.style.visibility = 'visible';
    }
    else {
      computerView();
      if(formatButton.src.includes(displayScreen.displayButtons[0].video)) {
        storyText.style.visibility = 'hidden';
      } else if(formatButton.src.includes(displayScreen.displayButtons[0].text)) {
        videoFrame.style.visibility = 'hidden';
      }
    }
}

export default reView;