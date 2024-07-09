import { storyNumber, lastStoryNumber } from "./console.js";
import { otherEpisodesContainer, otherEpisodesTitle } from "../script.js";
import { renderStory, storyNode, seasonTitle } from "./story.js";


export async function renderEpisodesPanel() {
  let html = '';

  for(let i = 1; i <= lastStoryNumber; i++) {
    const response = await fetch(`./data/episode${i}.json`);
    storyNode[i] = await response.json();
    html += `
      <div class="story-node-tile">
        <img class="story-node-image" src="https://img.youtube.com/vi/${storyNode[i].videoLink}/hqdefault.jpg"></img>
        <p class="story-node-title">Episode ${i} - ${storyNode[i].storyTitle}</p>
      </div>`;
  }

  otherEpisodesContainer.innerHTML = html;
  otherEpisodesTitle.innerHTML = seasonTitle;

  const storyNodeTiles = document.querySelectorAll('.story-node-tile');
  let activeStoryNumber;

  storyNodeTiles.forEach((tile, i) => {
    tile.addEventListener('mouseover', () => {
      if((i + 1) != activeStoryNumber) {
        tile.style.backgroundColor = 'rgba(51, 226, 230, 0.5)';
        tile.style.color = '#33E2E6';
        tile.style.filter = 'none';
      }
    })
    tile.addEventListener('mouseout', () => {
      if((i + 1) != activeStoryNumber) {
        tile.style.backgroundColor = 'rgba(51, 226, 230, 0.4)';
        tile.style.color = 'inherit';
        tile.style.filter = 'none';
      }
    })
    tile.addEventListener('click', () => {
      if((i + 1) != activeStoryNumber) {
        tile.style.color = '#010020';
        tile.style.filter = 'drop-shadow(0 0 1vw rgba(51, 226, 230, 0.8))';
        activeStoryNumber = i + 1;
        renderStory(activeStoryNumber);
      }
    })
  })
}