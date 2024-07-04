import potentialsMetadate from "../data/metadataSample.js";

const metadate = JSON.parse(potentialsMetadate);

class Tile {
  constructor(date, i) {
    this.name = date[i].name;
    this.image = `https://api.degenerousdao.com/nft/image/${date[i].name.slice(11, date[i].name.length)}`;

    const attributesValues = 
    (Object.entries(date[i].attributes).flat()).map((attribute) => {
      return (attribute.value + attribute.trait_type);
    });

    const stringAttributes = attributesValues.toString();
    const trueValue = true;

    switch (trueValue) {
      case stringAttributes.includes('OracleClass'):
        this.class = 'Oracle';
        break;
      case stringAttributes.includes('AssassinClass'):
        this.class = 'Assassin';
        break;
      case stringAttributes.includes('SoldierClass'):
        this.class = 'Soldier';
        break;
      case stringAttributes.includes('SpyClass'):
        this.class = 'Spy';
        break;
      case stringAttributes.includes('EngineerClass'):
        this.class = 'Engineer';
        break;
      case stringAttributes.includes('NeyonClass'):
        this.class = 'NeYon';
        break;
      default:
        this.class = '';
    }

    this.clicked = false;
    this.active = true;
  } 
}

const potentials = [];
for(let i in metadate) {
  potentials[i] = new Tile(metadate, i);
}

export default potentials;

/*
let metadate = '';

fetch('https://api.degenerousdao.com/nft/data/1')
  .then((response) => response.json())
  .then((potential) => {
    metadate = potential;
  });
  */