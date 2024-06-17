import { titleContainer, durationContainer, textContainer, optionsContainer } from '../script.js'

const storyNode = {
  storyTitle: 'The Dischordian Saga: The Arrival - Episode 8',
  storyDuration: 'Duration: 7.6.2024 - 10.6.2024',
  storyText: 
    "The Potentials, those brave souls traversed between the devilish depths and celestial uncertainties, made their choice with a mixture of dread and determination. They could not, in good conscience, allow their ships to become conduits of contagion, nor could they sacrifice their own to an uncertain fate as hosts to a cosmic parasite. Thus, they chose the enigmatic path of the wyrm hole, a gamble that bore the faintest promise of not just survival but also heroism against a long-forgotten foe.<br>" +
    "Before their departure, they executed a final act of defiance against the Source. With swift precision, they remotely activated their Ark's security protocols—lockdowns, firewalls, and failsafes—transforming their once welcoming ships into impenetrable fortresses of solitude. This was their legacy, a statement of resistance, a hope that their tale would endure beyond the reach of corruption.<br>" +
    "With their path chosen, the Potentials approached the wyrm hole. The portal before them pulsed with an eerie light, its core swirling with colors that defied description. One by one, they stepped forward, each disappearance marked by a flash of light and a ripple through the fabric of reality. As they passed through the portal, their senses were overwhelmed, their bodies and minds torn asunder and stretched across the very threads of existence.<br>"+
    "The process of reassembly was disorienting, each individual's consciousness snapping back like a rubber band stretched to its limits. When their vision cleared, they found themselves standing in a dark forest, the air heavy with the scent of pine and wet earth. The ground beneath their feet was soft, covered in a blanket of fallen leaves and moss. They emerged on the edge of a precipice, the land dropping away to reveal a breathtaking vista.<br>"+
    "Below them lay a vast, crystalline city, its structures gleaming under the light of a distant sun. The architecture was unlike anything they had ever seen—sharp angles, pristine surfaces, and a harmony of design that suggested an advanced, perhaps utopian civilization. The city spread in all directions, its boundaries lost to the curvature of the planet.<br>"+
    "The Potentials, now stranded in this unknown world, faced a new chapter filled with unknown challenges. They had escaped the immediate threat of the Source, but the quest laid out before them was no less daunting. Somewhere in this alien metropolis or beyond its shimmering walls lay the architect of their tormentor’s curse, a being whose history was intertwined with the Source’s tragic saga.<br>"+
    "As the Antiquarian, I continue to document their journey, marking this moment as a turning point. Here, on the brink of discovery and in the shadow of potential peril, the Potentials stand not just as survivors, but as explorers on the cusp of unraveling the threads of a cosmic tapestry woven through millennia. Their story, a blend of courage, desperation, and the unyielding desire to face whatever may come, adds yet another layer to the dark tapestry of the universe’s endless, enigmatic narrative.<br>",
  storyOptions: [
    'Set up a Communications Relay.',
    'Send a Scouting Party to the City.',
    'Retreat into the Forest and Establish a Base.',
    'Invade the City.'
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