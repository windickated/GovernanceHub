import potentialsMetadate from "./metadateSample.js";

const metadate = JSON.parse(potentialsMetadate);

class Tile {
  constructor(date, i) {
    this.name = date[i].name;
    this.image = date[i].image;
    this.class;

    if(Object.entries((Object.entries(date[i].attributes)[Object.entries(date[i].attributes).length - 1][1]))[1].includes('Demagi')) {
      this.class = date[i].attributes[14].value;
    } else if(Object.entries((Object.entries(date[i].attributes)[Object.entries(date[i].attributes).length - 1][1]))[1].includes('Quarchon')) {
      this.class = date[i].attributes[11].value;
    } else {
      this.class = null;
    }
  } 
}

const potentials = [];
for(let i in metadate) {
  potentials[i] = new Tile(metadate, i);
}

export default potentials;