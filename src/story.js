import { titleContainer, durationContainer, textContainer, optionsContainer } from '../script.js'

const storyNode = {
  storyTitle: 'The Dischordian Saga: Illuminated Shadows - Episode 9',
  storyDuration: 'Duration: 14.6.2024-17.6.2024',
  storyText: 
    "In the alien landscape, beneath the canopy of towering, dark trees, the Potentials ventured forth. The forest was dense, shrouded in mystery, its silence punctuated by the soft rustling of leaves and distant, unidentifiable calls. As they moved deeper into the forest, an unsettling sensation of being watched crept over them. Every shadow seemed to twitch at the corner of their vision, every rustle of leaves hinting at the presence of unseen observers. Despite the foreboding atmosphere, the Potentials pressed on, driven by a mix of curiosity and necessity to establish a base in this unknown world. \n  Their journey led them to a clearing where the shadows parted to reveal a massive structure—an ancient pyramid made of what appeared to be ivory. It stood stark and imposing against the darkening sky, its surfaces smooth and cold to the touch. Inside, the air was cool and musty with the scent of ages. Their lights swept across walls adorned with intricate murals that told the history of a lost people. The images depicted serene cityscapes being invaded by horrific demonic figures, summoned by an evil tribe from the depths of dark, swirling portals. The demons laid waste to the cities, and the murals showed battles fought with a desperation that was palpable even through the ancient artwork. \n  As the Potentials absorbed the stories painted on the walls, the sun dipped below the horizon outside, and the forest transitioned into a deeper shade of darkness. It was then that the shadows around them began to stir more distinctly. The darkness seemed to thicken, and ghostly figures emerged from the murk, ethereal echoes of the creatures depicted in the murals. The Potentials watched, transfixed, as these shadowy apparitions re-enacted the ancient wars in silence—a haunting spectacle of a battle against invaders that seemed both spectral and eternal. The figures clashed with one another, their forms blending and separating in a dance of light and shadow, their silent screams echoing a timeless agony. Realizing the significance of their discovery, the Potentials quickly set about establishing a temporary base within the pyramid, using it as both shelter and a strategic vantage point. The murals and the ghostly re-enactments provided clues to the history of this planet and its people—a history that now seemed inextricably linked to their mission. \n  As they prepared for the night, the implications of what they had witnessed weighed heavily upon them. They were no longer just survivors or explorers; they had become part of a larger narrative, a cosmic drama that spanned millennia. The shadows of the past, it seemed, were not just memories but warnings. Here, in this dark forest on the edge of a forgotten world, the Potentials found themselves standing on the precipice of ancient secrets that could either be their salvation or their doom.",
  storyOptions: [
    'Abandon the Pyramid and Head to the City.',
    'Attempt to Speak with the Shadows.',
    'Establish a Defense Perimeter.',
    'Send Your Spies to the City.',
    'Build a Communications Relay.'
  ],
  renderStory() {
    titleContainer.innerHTML = this.storyTitle;
    durationContainer.innerHTML = this.storyDuration;
    textContainer.innerHTML = this.storyText;
    let html = '';
    this.storyOptions.forEach((option) => {
      html += `<li class="option">${option}</li>`;
    })
    optionsContainer.innerHTML = html;
  }
}

export default storyNode;