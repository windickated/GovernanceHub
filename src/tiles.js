import potentialsMetadate from "../date/metadateSample.js";

const metadate = JSON.parse(potentialsMetadate);

class Tile {
  constructor(date, i) {
    this.name = date[i].name;
    this.image = 'https://i.seadn.io/s/raw/files/767c9a1e5c36f2f2ceef317cd2bd3189.jpg?auto=format&dpr=1&w=1200';
  //this.image = date[i].image;

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
  } 
}

const potentials = [];
for(let i in metadate) {
  potentials[i] = new Tile(metadate, i);
}

export default potentials;