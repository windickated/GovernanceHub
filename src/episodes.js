import { otherEpisodesContainer, otherEpisodesTitle } from "../script.js";
import { renderStory, storyNode, seasonTitle } from "./story.js";


export let storyNumber = 11;
export let lastStoryNumber = 11;


// Story node tiles constructor
class EpisodeTile {
  constructor(data, i) {
    this.title = `Episode ${i + 1} - ${data[i].storyTitle}`;
    this.image = `https://img.youtube.com/vi/${data[i].videoLink}/hqdefault.jpg`;
    this.active = false;
  } 
}
const episode = [];


// Generating and adding listeners to tiles

let storyNodeTiles;
export async function renderEpisodesPanel() {
  let html = '';

  for(let i = 0; i < lastStoryNumber; i++) {
    const response = await fetch(`./data/episode${i + 1}.json`);
    storyNode[i] = await response.json();
    episode[i] = new EpisodeTile(storyNode, i);
    html += `
      <div class="story-node-tile">
        <img class="story-node-image" src="${episode[i].image}"></img>
        <p class="story-node-title">${episode[i].title}</p>
      </div>`;
  }

  otherEpisodesContainer.innerHTML = html;
  otherEpisodesTitle.innerHTML = seasonTitle;

  storyNodeTiles = document.querySelectorAll('.story-node-tile');
  storyNodeTiles.forEach((tile, i) => {
    tile.addEventListener('mouseover', () => {
      if(!episode[i].active) {
        tile.style.backgroundColor = 'rgba(51, 226, 230, 0.5)';
        tile.style.color = '#33E2E6';
        tile.style.filter = 'none';
      }
    })
    tile.addEventListener('mouseout', () => {
      if(!episode[i].active) {
        tile.style.backgroundColor = 'rgba(51, 226, 230, 0.4)';
        tile.style.color = 'inherit';
        tile.style.filter = 'none';
      }
    })
    tile.addEventListener('click', () => {
      if(!episode[i].active) {activeEpisode(i)}
    })
  })

  activeEpisode(storyNumber - 1);
}


// Make selected episode active
export function activeEpisode(i) {
  storyNodeTiles[i].style.color = '#010020';
  storyNodeTiles[i].style.filter = 'drop-shadow(0 0 1vw rgba(51, 226, 230, 0.8))';
  inactiveEpisodes();
  episode[i].active = true;
  storyNumber = i + 1;
  renderStory(storyNumber);

  console.log(storyNumber)
}


// Make inactive all other tiles
function inactiveEpisodes() {
  storyNodeTiles.forEach((tile, i) => {
    if(episode[i].active) {
      episode[i].active = false;
      tile.style.backgroundColor = 'rgba(51, 226, 230, 0.4)';
      tile.style.color = 'inherit';
      tile.style.filter = 'none';
    }
  })
}