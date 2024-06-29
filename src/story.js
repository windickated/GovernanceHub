import { videoContainer, titleContainer, durationContainer, textContainer, optionsContainer } from '../script.js'

const storyNode = {
  videoLink: 'https://www.youtube.com/embed/OeA_acfD-e8',
  storyTitle: 'The Dischordian Saga: The Artifact - Episode 10',
  storyDuration: 'Duration: 28.06.2024 - 01.07.2024',
  storyText: 
    `<p>
      As the Potentials settled into their temporary base within the ancient pyramid, the haunting re-enactments of spectral battles cast a somber mood among them. The eerie silence of the ghostly figures stirred a mix of fascination and trepidation, pushing them to seek understanding and perhaps a way to communicate with these shadows of a bygone era.
    </p><p>
      Gathered around the murals, their Oracles, gifted with mystic powers of perception, focused their energies on deciphering the encrypted images and ethereal messages embedded in the ancient artwork. Their efforts uncovered the depiction of an ancient helmet, intricately designed, which was said to grant its wearer the ability to bridge the realms of the living and the spectral.
    </p><p>
      In a secluded chamber of the pyramid, shrouded in cobwebs and the dust of ages, the helmet sat upon a stone pedestal, pulsating with a ghostly luminescence. It was an artifact of sinister beauty, etched with arcane runes that seemed to shift and writhe under the gaze of the onlookers. Despite the ominous aura it exuded, one brave assassin—volunteered to don the helmet, compelled by a mission to bridge the gap between the living and the spectral.
    </p><p>
      The moment the helmet settled upon its head, it awakened with a malevolent life of its own. The interior mechanisms, long dormant, activated with a sinister intent, burrowing into the Potential's metallic skull with a series of chilling mechanical screeches and the sickening crunch of metal. Its screams echoed through the pyramid's hollow chambers, a horrifying symphony of pain and transformation. Before the eyes of the horrified Oracles, the helmet morphed into an exoskeleton, encasing the Potential in a grotesque armor of ancient design.
    </p><p>
      The transformation was merciless and final. As the last remnants of the Potential's cries faded, a new, chilling presence filled the chamber. Its voice, icy and devoid of humanity, reverberated off the stone walls.
    </p><p>
      "I am the Collector," it intoned, its voice a deathly whisper that seemed to leech the warmth from the air. "I am reborn. Let the Harvest begin."
    </p><p>
      The Potentials recoiled in horror and realization at the grave mistake they had made. The helmet was not a bridge for communication but a prison for a dark entity, and they had unwittingly unleashed it upon themselves. Now, they faced an immediate and dire threat—not from the spectral shadows of the past, but from a tangible and present adversary, one that threatened to extinguish their potential and add them to its collection.
    </p>
      `,
  storyOptions: [
    'Attack the Collector.',
    'Escape the Pyramid and Head to the City.',
    'Make a Bargain with the Collector.',
    'Retreat to the Forest and Build a Defense Perimeter.'
  ],
  renderStory() {
    videoContainer.src = this.videoLink;
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